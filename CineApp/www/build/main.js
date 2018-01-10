webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Session__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cartelera_cartelera__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, alertCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.username = '';
        this.password = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.username.length > 0 && this.password.length > 0) {
            var loading_1 = this.loadingCtrl.create({
                content: "Cargando, por favor espere...",
                spinner: 'dots'
            });
            loading_1.present();
            var body = {
                username: this.username,
                password: this.password
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', 'Basic a2lkX1N5WGtCZE1WTTowMmIxM2Y1MzYzOGU0NjZkYTI2YTI3Y2IxYzNkNTNkNg==');
            headers.append('X-Kinvey-API-Version', '3');
            this.http.post('https://baas.kinvey.com/user/kid_SyXkBdMVM/login', body, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                var session = __WEBPACK_IMPORTED_MODULE_4__model_Session__["a" /* Session */].getInstance();
                session.user = response;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__cartelera_cartelera__["a" /* CarteleraPage */]);
            }, function (error) {
                _this.alertCtrl.create({
                    title: "Error",
                    message: "Credenciales inválidas, intente nuevamente.",
                    buttons: [{
                            text: "Aceptar",
                            handler: function () {
                                _this.username = "";
                                _this.password = "";
                            }
                        }]
                }).present();
                loading_1.dismiss();
            }, function () {
                loading_1.dismiss();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: "Error!",
                message: "Debes ingresar todos los campos",
                buttons: ["Aceptar"]
            });
            alert_1.present();
        }
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/manuel/Desktop/NextUniversity/Ionic2/ionic/CineApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Iniciar Sesión</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <img src="assets/imgs/cine.jpg">\n  </ion-card>\n\n  <ion-list no-lines>\n\n    <ion-item>\n      <ion-label floating>Usuario</ion-label>\n      <ion-input type="text" [(ngModel)]="username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="danger" block (click)="login()">Iniciar Sesión</button>\n    <button ion-button color="danger" block clear (click)="register()">Regístrate aqui</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/manuel/Desktop/NextUniversity/Ionic2/ionic/CineApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, loadingCtrl, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.user = {
            name: '',
            username: '',
            phone: '',
            mail: '',
            password: ''
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        if (this.user.name.length > 0 &&
            this.user.username.length > 0 &&
            this.user.password.length > 0 &&
            this.confirmPassword.length > 0) {
            if (this.user.password == this.confirmPassword) {
                this.performRegister();
            }
            else {
                this.showMessage("Las contraseñas ingresadas no coinciden, intente de nuevo");
            }
        }
        else {
            this.showMessage("Debes ingresar todos los campos");
        }
    };
    RegisterPage.prototype.performRegister = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Registrando usuario, por favor espere...",
            spinner: 'dots'
        });
        loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic a2lkX1N5WGtCZE1WTToyOGQwOThmOTQ0N2Q0OWNmYmI0MTUwN2FjOWU3MDZiOA==');
        headers.append('X-Kinvey-API-Version', '3');
        this.http.post('https://baas.kinvey.com/user/kid_SyXkBdMVM', this.user, {
            headers: headers
        })
            .subscribe(function (response) {
            _this.alertCtrl.create({
                title: "Creación de cuenta",
                message: "La cuenta se ha creado exitosamente.",
                buttons: [
                    {
                        text: "Aceptar",
                        handler: function () {
                            _this.navCtrl.pop();
                        }
                    }
                ]
            }).present();
        }, function (error) {
            _this.alertCtrl.create({
                title: "Error",
                message: "Ocurrió un error al crear el usuario, intente de nuevo más tarde",
                buttons: ["Aceptar"]
            }).present();
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    RegisterPage.prototype.showMessage = function (message) {
        var alert = this.alertCtrl.create({
            title: "Error!",
            message: message,
            buttons: ["Aceptar"]
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/manuel/Desktop/NextUniversity/Ionic2/ionic/CineApp/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>Crea tu cuenta en CineApp!</h1>\n\n  <ion-list no-lines>\n\n    <ion-item>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Usuario</ion-label>\n      <ion-input type="text" [(ngModel)]="user.username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Teléfono</ion-label>\n      <ion-input type="text" [(ngModel)]="user.phone"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Correo</ion-label>\n      <ion-input type="text" [(ngModel)]="user.mail"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Confirmar contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="confirmPassword"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="danger" block (click)="register()">Regístrate</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/manuel/Desktop/NextUniversity/Ionic2/ionic/CineApp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarteleraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Session__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comments_comments__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarteleraPage = (function () {
    function CarteleraPage(navCtrl, navParams, loadingCtl, alertCtl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtl = loadingCtl;
        this.alertCtl = alertCtl;
        this.http = http;
        this.session = __WEBPACK_IMPORTED_MODULE_4__model_Session__["a" /* Session */].getInstance();
        this.movies = [];
        this.favorites = [];
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append("Authorization", "Kinvey " + this.session.user._kmd.authtoken);
        this.headers.append("X-Kinvey-API-Version", "3");
    }
    CarteleraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarteleraPage');
        this.getMovies();
    };
    CarteleraPage.prototype.goToComments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__comments_comments__["a" /* CommentsPage */]);
    };
    CarteleraPage.prototype.getMovies = function () {
        var _this = this;
        var loading = this.loadingCtl.create({
            content: "Cargando películas, por favor espere",
            spinner: "dots"
        });
        loading.present();
        this.http.get("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/movies", {
            headers: this.headers
        }).map(function (res) { return res.json(); })
            .subscribe(function (result) {
            _this.movies = result;
        }, function (error) {
            _this.alertCtl.create({
                title: "Error",
                message: "Ocurrió un error al obtener películas, intente de nuevo más tarde",
                buttons: ["Aceptar"]
            }).present();
            loading.dismiss();
        }, function () {
            // loading.dismiss();
            _this.getFavorites(loading);
        });
    };
    CarteleraPage.prototype.getFavorites = function (loading) {
        var _this = this;
        // let loading = this.loadingCtl.create({
        //   content: "Cargando Películas, por favor espere",
        //   spinner: "dots"
        // })
        loading.setContent("Cargando favoritos, por favor espere");
        // loading.present();
        this.http.get('https://baas.kinvey.com/appdata/kid_SyXkBdMVM/favorites?query={"_acl.creator":"' + this.session.user._id + '"}', {
            headers: this.headers
        }).map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.favorites = res;
            _this.favorites.forEach(function (element) {
                var movie = _this.movies.find(function (movie) { return movie._id == element.movieId; });
                if (movie != null) {
                    movie.isFavorite = true;
                }
            });
        }, function (error) {
            _this.alertCtl.create({
                title: "Error",
                message: "Ocurrió un error al obtener favoritos, intente de nuevo más tarde",
                buttons: ["Aceptar"]
            }).present();
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    CarteleraPage.prototype.favorite = function (movie) {
        var fav = this.favorites.find(function (fav) { return fav.movieId == movie._id; });
        if (fav == null) {
            this.addToFavorites(movie);
        }
        else {
            this.removeFromFavorites(fav);
        }
    };
    CarteleraPage.prototype.comment = function (movie) {
        var _this = this;
        var alert = this.alertCtl.create({
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
                    handler: function (data) {
                        if (data.title.length > 0 && data.comment.length > 0) {
                            _this.addComment(movie, data.title, data.comment);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    CarteleraPage.prototype.addComment = function (movie, title, comment) {
        var _this = this;
        var loading = this.loadingCtl.create({
            content: "Agregando comentario, por favor espere",
            spinner: "dots"
        });
        loading.present();
        var body = {
            movieName: movie.title,
            movieId: movie._id,
            title: title,
            comment: comment
        };
        this.http.post("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/comments", body, {
            headers: this.headers
        }).map(function (res) { return res.json(); })
            .subscribe(function (result) {
            _this.alertCtl.create({
                title: "Info!",
                message: "Comentario agregado",
                buttons: [{
                        text: "Aceptar"
                    }]
            }).present();
        }, function (error) {
            _this.alertCtl.create({
                title: "Error",
                message: "Ocurrió un error al guardar comentario, intente de nuevo más tarde",
                buttons: ["Aceptar"]
            }).present();
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    CarteleraPage.prototype.addToFavorites = function (movie) {
        var _this = this;
        var loading = this.loadingCtl.create({
            content: "Agregando a favoritos, por favor espere",
            spinner: "dots"
        });
        loading.present();
        var body = {
            movieId: movie._id
        };
        this.http.post("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/favorites", body, {
            headers: this.headers
        }).map(function (res) { return res.json(); })
            .subscribe(function (result) {
            _this.alertCtl.create({
                title: "Info!",
                message: "Película agregada a favoritos",
                buttons: [{
                        text: "Aceptar",
                        handler: function () {
                            _this.getMovies();
                        }
                    }]
            }).present();
        }, function (error) {
            _this.alertCtl.create({
                title: "Error",
                message: "Ocurrió un error al guardar favorito, intente de nuevo más tarde",
                buttons: ["Aceptar"]
            }).present();
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    CarteleraPage.prototype.removeFromFavorites = function (favorite) {
        var _this = this;
        var loading = this.loadingCtl.create({
            content: "Quitando de favoritos, por favor espere",
            spinner: "dots"
        });
        loading.present();
        this.http.delete("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/favorites/" + favorite._id, {
            headers: this.headers
        }).map(function (res) { return res.json(); })
            .subscribe(function (result) {
            _this.alertCtl.create({
                title: "Info!",
                message: "Película removida de favoritos",
                buttons: [{
                        text: "Aceptar",
                        handler: function () {
                            _this.getMovies();
                        }
                    }]
            }).present();
        }, function (error) {
            _this.alertCtl.create({
                title: "Error",
                message: "Ocurrió un error al borrar favorito, intente de nuevo más tarde",
                buttons: ["Aceptar"]
            }).present();
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    CarteleraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cartelera',template:/*ion-inline-start:"/Users/manuel/Desktop/NextUniversity/Ionic2/ionic/CineApp/src/pages/cartelera/cartelera.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cartelera</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let movie of movies">\n      <ion-item>\n        <img item-left [src]="movie.image">\n        <h3>{{movie.title}}</h3>\n        <h4>{{movie.category}}</h4>\n        <h5>{{movie.rating}}</h5>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button *ngIf="!movie.isFavorite" (click)="favorite(movie)" color="danger">\n          <ion-icon name="heart"></ion-icon>\n        </button>\n        <button ion-button *ngIf="movie.isFavorite" (click)="favorite(movie)" color="dark">\n          <ion-icon name="close-circle"></ion-icon>\n        </button>\n        <button ion-button color="primary" (click)="comment(movie)">\n          <ion-icon name="chatbubbles"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-fab right bottom (click)="goToComments()">\n    <button ion-fab color="primary">\n      <ion-icon name="chatbubbles"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/manuel/Desktop/NextUniversity/Ionic2/ionic/CineApp/src/pages/cartelera/cartelera.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], CarteleraPage);
    return CarteleraPage;
}());

//# sourceMappingURL=cartelera.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Session__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentsPage = (function () {
    function CommentsPage(navCtrl, navParams, loadingCtl, alertCtl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtl = loadingCtl;
        this.alertCtl = alertCtl;
        this.http = http;
        this.session = __WEBPACK_IMPORTED_MODULE_2__model_Session__["a" /* Session */].getInstance();
        this.comments = [];
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append("Authorization", "Kinvey " + this.session.user._kmd.authtoken);
        this.headers.append("X-Kinvey-API-Version", "3");
        this.headers.append("Content-Type", "application/json");
    }
    CommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentsPage');
        this.getComments();
    };
    CommentsPage.prototype.getComments = function () {
        var _this = this;
        var loading = this.loadingCtl.create({
            content: "Cargando comentarios, por favor espere",
            spinner: "dots"
        });
        loading.present();
        this.http.get('https://baas.kinvey.com/appdata/kid_SyXkBdMVM/comments?query={"_acl.creator":"' + this.session.user._id + '"}', {
            headers: this.headers
        }).map(function (res) { return res.json(); })
            .subscribe(function (result) {
            _this.comments = result;
        }, function (error) {
            _this.alertCtl.create({
                title: "Error",
                message: "Ocurrió un error al obtener comentarios, intente de nuevo más tarde",
                buttons: ["Aceptar"]
            }).present();
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    CommentsPage.prototype.edit = function (comment) {
        var _this = this;
        var alert = this.alertCtl.create({
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
                    handler: function (data) {
                        if (data.title.length > 0 && data.comment.length > 0) {
                            comment.title = data.title;
                            comment.comment = data.comment;
                            _this.performEditComment(comment);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    CommentsPage.prototype.performEditComment = function (comment) {
        var _this = this;
        var loading = this.loadingCtl.create({
            content: "Actualizando comentario, por favor espere",
            spinner: "dots"
        });
        loading.present();
        var body = {
            movieName: comment.movieName,
            movieId: comment.movieId,
            title: comment.title,
            comment: comment.comment
        };
        this.http.put("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/comments/" + comment._id, body, {
            headers: this.headers
        }).map(function (res) { return res.json(); })
            .subscribe(function (result) {
            _this.alertCtl.create({
                title: "Info!",
                message: "Comentario modificado",
                buttons: [{
                        text: "Aceptar",
                        handler: function () {
                            _this.getComments();
                        }
                    }]
            }).present();
        }, function (error) {
            _this.alertCtl.create({
                title: "Error",
                message: "Ocurrió un error al guardar comentario, intente de nuevo más tarde",
                buttons: ["Aceptar"]
            }).present();
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    CommentsPage.prototype.delete = function (comment) {
        var _this = this;
        this.alertCtl.create({
            title: "Eliminar comentario",
            message: "¿Estás seguro de eliminar este comentario?",
            buttons: [
                {
                    text: "N0"
                }, {
                    text: "Sí",
                    handler: function () {
                        _this.performDeleteComment(comment);
                    }
                }
            ]
        }).present();
    };
    CommentsPage.prototype.performDeleteComment = function (comment) {
        var _this = this;
        var loading = this.loadingCtl.create({
            content: "Eliminando comentario, por favor espere",
            spinner: "dots"
        });
        loading.present();
        this.http.delete("https://baas.kinvey.com/appdata/kid_SyXkBdMVM/comments/" + comment._id, {
            headers: this.headers
        }).map(function (res) { return res.json(); })
            .subscribe(function (result) {
            _this.alertCtl.create({
                title: "Info!",
                message: "Comentario eliminado",
                buttons: [{
                        text: "Aceptar",
                        handler: function () {
                            _this.getComments();
                        }
                    }]
            }).present();
        }, function (error) {
            _this.alertCtl.create({
                title: "Error",
                message: "Ocurrió un error al eliminar comentario, intente de nuevo más tarde",
                buttons: ["Aceptar"]
            }).present();
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"/Users/manuel/Desktop/NextUniversity/Ionic2/ionic/CineApp/src/pages/comments/comments.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Comentarios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let comment of comments">\n      <ion-item>\n        <img item-left src="http://placeimg.com/50/50/tech">\n        <h2>\n          <b>{{comment.movieName}}</b>\n        </h2>\n        <h4>{{comment.title}}</h4>\n        <h6>{{comment.comment}}</h6>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="secondary" (click)="edit(comment)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n\n        <button ion-button color="danger" (click)="delete(comment)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/manuel/Desktop/NextUniversity/Ionic2/ionic/CineApp/src/pages/comments/comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cartelera/cartelera.module": [
		279,
		3
	],
	"../pages/comments/comments.module": [
		280,
		2
	],
	"../pages/login/login.module": [
		277,
		1
	],
	"../pages/register/register.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cartelera_cartelera__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_comments_comments__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cartelera_cartelera__["a" /* CarteleraPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_comments_comments__["a" /* CommentsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cartelera/cartelera.module#CarteleraPageModule', name: 'CarteleraPage', segment: 'cartelera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cartelera_cartelera__["a" /* CarteleraPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_comments_comments__["a" /* CommentsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/manuel/Desktop/NextUniversity/Ionic2/ionic/CineApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/manuel/Desktop/NextUniversity/Ionic2/ionic/CineApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
var Session = (function () {
    function Session() {
    }
    Session.getInstance = function () {
        if (this.session == null) {
            this.session = new Session();
        }
        return this.session;
    };
    return Session;
}());

//# sourceMappingURL=Session.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map