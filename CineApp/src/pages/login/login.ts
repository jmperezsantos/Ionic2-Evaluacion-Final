import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Http, Headers } from '@angular/http';
import { Session } from '../../model/Session';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { CarteleraPage } from '../cartelera/cartelera';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public http: Http) {

  }

  username: string = '';
  password: string = '';

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  login() {

    if (this.username.length > 0 && this.password.length > 0) {

      let loading = this.loadingCtrl.create({
        content: "Cargando, por favor espere...",
        spinner: 'dots'
      })

      loading.present();

      let body = {
        username: this.username,
        password: this.password
      }

      let headers: Headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic a2lkX1N5WGtCZE1WTTowMmIxM2Y1MzYzOGU0NjZkYTI2YTI3Y2IxYzNkNTNkNg==');
      headers.append('X-Kinvey-API-Version', '3');

      this.http.post('https://baas.kinvey.com/user/kid_SyXkBdMVM/login',
        body,
        {
          headers: headers
        })
        .map(res => res.json())
        .subscribe(
        response => {

          let session = Session.getInstance();
          session.user = response;
          this.navCtrl.setRoot(CarteleraPage);
        },
        error => {

          this.alertCtrl.create({
            title: "Error",
            message: "Credenciales inválidas, intente nuevamente.",
            buttons: [{
              text: "Aceptar",
              handler: () => {
                this.username = "";
                this.password = ""
              }
            }]
          }).present();

          loading.dismiss();
          
        },
        () => {
          loading.dismiss();
        }
        );


    } else {

      let alert = this.alertCtrl.create({
        title: "Error!",
        message: "Debes ingresar todos los campos",
        buttons: ["Aceptar"]
      })

      alert.present();

    }

  }

  register() {

    this.navCtrl.push(RegisterPage);

  }

}
