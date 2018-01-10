import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {
    name: '',
    username: '',
    phone: '',
    mail: '',
    password: ''
  }

  confirmPassword: '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {

    if (this.user.name.length > 0 &&
      this.user.username.length > 0 &&
      this.user.password.length > 0 &&
      this.confirmPassword.length > 0) {

      if (this.user.password == this.confirmPassword) {

        this.performRegister();

      } else {

        this.showMessage("Las contraseñas ingresadas no coinciden, intente de nuevo");

      }

    } else {

      this.showMessage("Debes ingresar todos los campos");

    }

  }

  performRegister() {

    let loading = this.loadingCtrl.create({
      content: "Registrando usuario, por favor espere...",
      spinner: 'dots'
    })

    loading.present();

    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic a2lkX1N5WGtCZE1WTToyOGQwOThmOTQ0N2Q0OWNmYmI0MTUwN2FjOWU3MDZiOA==');
    headers.append('X-Kinvey-API-Version', '3');

    this.http.post('https://baas.kinvey.com/user/kid_SyXkBdMVM',
      this.user,
      {
        headers: headers
      })
      .subscribe(
      response => {

        this.alertCtrl.create({
          title: "Creación de cuenta",
          message: "La cuenta se ha creado exitosamente.",
          buttons: [
            {
              text: "Aceptar",
              handler: () => {
                this.navCtrl.pop();
              }
            }
          ]
        }).present();

      },
      error => {

        this.alertCtrl.create({
          title: "Error",
          message: "Ocurrió un error al crear el usuario, intente de nuevo más tarde",
          buttons: ["Aceptar"]
        }).present();

        loading.dismiss();

      },
      () => {
        loading.dismiss();
      }
      );

  }

  showMessage(message) {

    let alert = this.alertCtrl.create({
      title: "Error!",
      message: message,
      buttons: ["Aceptar"]
    })

    alert.present();

  }

}
