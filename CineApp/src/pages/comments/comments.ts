import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Session } from '../../model/Session';
import { Http, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  headers: Headers;
  session: Session = Session.getInstance();

  comments: any[] = []

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtl: LoadingController,
    private alertCtl: AlertController,
    private http: Http) {

    this.headers = new Headers();
    this.headers.append("Authorization", "Kinvey " + this.session.user._kmd.authtoken);
    this.headers.append("X-Kinvey-API-Version", "3");
    this.headers.append("Content-Type", "application/json");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');

    this.getComments()
  }

  getComments() {

    let loading = this.loadingCtl.create({
      content: "Cargando comentarios, por favor espere",
      spinner: "dots"
    })

    loading.present();

    this.http.get('https://baas.kinvey.com/appdata/kid_SyXkBdMVM/comments?query={"_acl.creator":"' + this.session.user._id + '"}',
      {
        headers: this.headers
      }).map(res => res.json())
      .subscribe(result => {

        this.comments = result;

      }, error => {

        this.alertCtl.create({
          title: "Error",
          message: "Ocurrió un error al obtener comentarios, intente de nuevo más tarde",
          buttons: ["Aceptar"]
        }).present();

        loading.dismiss();

      }, () => {

        loading.dismiss();

      })

  }

  edit(comment) {

    let alert = this.alertCtl.create({
      title: 'Editar comentario',
      message: 'Modifica tu comentario aquí',
      inputs: [
        {
          name: 'title',
          placeholder: 'Título:',
          value: comment.title
        },
        {
          name: 'comment',
          placeholder: 'Ingresa tu comentario:',
          value: comment.comment
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Comentar',
          handler: data => {

            if (data.title.length > 0 && data.comment.length > 0) {

              comment.title = data.title;
              comment.comment = data.comment;
              this.performEditComment(comment);

            }
          }
        }
      ]
    });

    alert.present();

  }

  performEditComment(comment) {

    let loading = this.loadingCtl.create({
      content: "Actualizando comentario, por favor espere",
      spinner: "dots"
    })

    loading.present();

    let body = {
      movieName: comment.movieName,
      movieId: comment.movieId,
      title: comment.title,
      comment: comment.comment
    }
    this.http.put("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/comments/" + comment._id,
      body,
      {
        headers: this.headers
      }).map(res => res.json())
      .subscribe(result => {

        this.alertCtl.create({
          title: "Info!",
          message: "Comentario modificado",
          buttons: [{
            text: "Aceptar",
            handler: () => {
              this.getComments();
            }
          }]
        }).present();

      }, error => {

        this.alertCtl.create({
          title: "Error",
          message: "Ocurrió un error al guardar comentario, intente de nuevo más tarde",
          buttons: ["Aceptar"]
        }).present();

        loading.dismiss();

      }, () => {

        loading.dismiss();

      });

  }

  delete(comment) {

    this.alertCtl.create(
      {
        title: "Eliminar comentario",
        message: "¿Estás seguro de eliminar este comentario?",
        buttons: [
          {
            text: "N0"
          }, {
            text: "Sí",
            handler: () => {
              
              this.performDeleteComment(comment);

            }
          }
        ]
      }
    ).present()

  }

  performDeleteComment(comment){

    let loading = this.loadingCtl.create({
      content: "Eliminando comentario, por favor espere",
      spinner: "dots"
    })

    loading.present();

    this.http.delete("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/comments/" + comment._id,
      {
        headers: this.headers
      }).map(res => res.json())
      .subscribe(result => {

        this.alertCtl.create({
          title: "Info!",
          message: "Comentario eliminado",
          buttons: [{
            text: "Aceptar",
            handler: () => {
              this.getComments();
            }
          }]
        }).present();

      }, error => {

        this.alertCtl.create({
          title: "Error",
          message: "Ocurrió un error al eliminar comentario, intente de nuevo más tarde",
          buttons: ["Aceptar"]
        }).present();

        loading.dismiss();

      }, () => {

        loading.dismiss();

      });

  }

}
