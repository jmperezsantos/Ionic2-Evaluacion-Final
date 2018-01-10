import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Http, Headers } from '@angular/http';
import { Session } from '../../model/Session';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Loading } from 'ionic-angular/components/loading/loading';
import { CommentsPage } from '../comments/comments';

@IonicPage()
@Component({
  selector: 'page-cartelera',
  templateUrl: 'cartelera.html',
})
export class CarteleraPage {

  headers: Headers;
  session: Session = Session.getInstance();

  movies: any[] = [];
  favorites: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtl: LoadingController,
    private alertCtl: AlertController,
    private http: Http) {

    this.headers = new Headers();
    this.headers.append("Authorization", "Kinvey " + this.session.user._kmd.authtoken);
    this.headers.append("X-Kinvey-API-Version", "3");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarteleraPage');

    this.getMovies();
  }

  goToComments() {

    this.navCtrl.push(CommentsPage);

  }

  getMovies() {

    let loading = this.loadingCtl.create({
      content: "Cargando películas, por favor espere",
      spinner: "dots"
    })

    loading.present();

    this.http.get("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/movies",
      {
        headers: this.headers
      }).map(res => res.json())
      .subscribe(result => {

        this.movies = result;

      }, error => {

        this.alertCtl.create({
          title: "Error",
          message: "Ocurrió un error al obtener películas, intente de nuevo más tarde",
          buttons: ["Aceptar"]
        }).present();

        loading.dismiss();

      }, () => {

        // loading.dismiss();

        this.getFavorites(loading);

      })

  }

  getFavorites(loading: Loading) {

    // let loading = this.loadingCtl.create({
    //   content: "Cargando Películas, por favor espere",
    //   spinner: "dots"
    // })
    loading.setContent("Cargando favoritos, por favor espere");
    // loading.present();

    this.http.get('https://baas.kinvey.com/appdata/kid_SyXkBdMVM/favorites?query={"_acl.creator":"' + this.session.user._id + '"}',
      {

        headers: this.headers

      }).map(res => res.json())
      .subscribe(res => {

        this.favorites = res;

        this.favorites.forEach(element => {

          let movie = this.movies.find(movie => movie._id == element.movieId)
          if (movie != null) {
            movie.isFavorite = true;
          }

        });

      }, error => {

        this.alertCtl.create({
          title: "Error",
          message: "Ocurrió un error al obtener favoritos, intente de nuevo más tarde",
          buttons: ["Aceptar"]
        }).present();

        loading.dismiss();

      }, () => {
        loading.dismiss();
      })
  }

  favorite(movie) {

    let fav = this.favorites.find(fav => fav.movieId == movie._id)
    if (fav == null) {
      this.addToFavorites(movie);
    } else {
      this.removeFromFavorites(fav);
    }

  }

  comment(movie) {

    let alert = this.alertCtl.create({
      title: 'Añadir comentario',
      message: 'Escribe lo que piensas de esta película',
      inputs: [
        {
          name: 'title',
          placeholder: 'Título:'
        },
        {
          name: 'comment',
          placeholder: 'Ingresa tu comentario:'
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
              this.addComment(movie, data.title, data.comment);
            }
          }
        }
      ]
    });

    alert.present();

  }

  addComment(movie, title, comment) {

    let loading = this.loadingCtl.create({
      content: "Agregando comentario, por favor espere",
      spinner: "dots"
    })

    loading.present();

    let body = {
      movieName: movie.title,
      movieId: movie._id,
      title: title,
      comment: comment
    }
    this.http.post("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/comments",
      body,
      {
        headers: this.headers
      }).map(res => res.json())
      .subscribe(result => {

        this.alertCtl.create({
          title: "Info!",
          message: "Comentario agregado",
          buttons: [{
            text: "Aceptar"
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

  addToFavorites(movie) {

    let loading = this.loadingCtl.create({
      content: "Agregando a favoritos, por favor espere",
      spinner: "dots"
    })

    loading.present();

    let body = {
      movieId: movie._id
    }
    this.http.post("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/favorites",
      body,
      {
        headers: this.headers
      }).map(res => res.json())
      .subscribe(result => {

        this.alertCtl.create({
          title: "Info!",
          message: "Película agregada a favoritos",
          buttons: [{
            text: "Aceptar",
            handler: () => {
              this.getMovies();
            }
          }]
        }).present();

      }, error => {

        this.alertCtl.create({
          title: "Error",
          message: "Ocurrió un error al guardar favorito, intente de nuevo más tarde",
          buttons: ["Aceptar"]
        }).present();

        loading.dismiss();

      }, () => {

        loading.dismiss();

      });

  }

  removeFromFavorites(favorite) {

    let loading = this.loadingCtl.create({
      content: "Quitando de favoritos, por favor espere",
      spinner: "dots"
    })

    loading.present();

    this.http.delete("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/favorites/" + favorite._id,
      {
        headers: this.headers
      }).map(res => res.json())
      .subscribe(result => {

        this.alertCtl.create({
          title: "Info!",
          message: "Película removida de favoritos",
          buttons: [{
            text: "Aceptar",
            handler: () => {
              this.getMovies();
            }
          }]
        }).present();

      }, error => {

        this.alertCtl.create({
          title: "Error",
          message: "Ocurrió un error al borrar favorito, intente de nuevo más tarde",
          buttons: ["Aceptar"]
        }).present();

        loading.dismiss();

      }, () => {

        loading.dismiss();

      });

  }

}
