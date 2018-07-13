webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\nodeapp\ionicapp\HasApp\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Registrasi\n\n    </ion-card-header>\n\n\n\n      <ion-card-content>\n\n        <ion-list no-line>\n\n          <ion-item>\n\n            <ion-label stacked>Nama Lengkap</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>No Telepon</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>Username</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" placeholder=""></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n\n\n    <div padding>\n\n      <button ion-button color="facebook" block>Sign In</button>\n\n    </div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\nodeapp\ionicapp\HasApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab2_page__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeTabsPage = /** @class */ (function () {
    function HomeTabsPage() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__tab2_page__["a" /* Tab2 */];
    }
    HomeTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-tabs>\n      <ion-tab tabIcon=\"home\" [root]=\"tab1\"></ion-tab>\n      <ion-tab tabIcon=\"chatbubbles\" [root]=\"tab2\"></ion-tab>\n    </ion-tabs>"
        }),
        __metadata("design:paramtypes", [])
    ], HomeTabsPage);
    return HomeTabsPage;
}());

//# sourceMappingURL=hometabs.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hometabs_hometabs__ = __webpack_require__(104);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, loadingCtrl, events, storage, navCtrl, userData) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.login = { username: 'johndoe@example.com', password: 'johndoe' };
        this.submitted = false;
        this.loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
    }
    LoginPage.prototype.showloading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loading.present();
    };
    LoginPage.prototype.showalert = function (alertMessage) {
        this.myalert = this.alertCtrl.create({
            title: 'Warning',
            message: alertMessage,
            buttons: ['Dismiss']
        });
        this.myalert.present();
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad LoginPage');
    // }
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.showloading();
            this.userData.postLogin(this.login)
                .subscribe(function (data) {
                //alert(JSON.stringify(data));
                if (data["data"]) {
                    if (_this.loading) {
                        _this.loading.dismiss();
                        _this.loading = null;
                    }
                    _this.storage.set('hasLoggedIn', true);
                    _this.storage.set('tokenauth', data["data"]["token"]);
                    //console.log(data.data.token);
                    _this.events.publish('user:login');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_hometabs_hometabs__["a" /* HomeTabsPage */]);
                }
                else {
                    _this.showalert(data["message"]);
                }
            }, function (error) {
                if (_this.loading) {
                    _this.loading.dismiss();
                    _this.loading = null;
                }
                _this.showalert(error["error"]["message"]);
                //alert(JSON.stringify(error.error));
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\nodeapp\ionicapp\HasApp\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="background">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Login Form\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    <form #loginForm="ngForm" novalidate>\n\n      <ion-list no-line>\n\n        <ion-item>\n\n          <ion-label stacked>Username</ion-label>\n\n          <ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n\n        	pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"  required>\n\n				  </ion-input>\n\n        </ion-item>\n\n        <p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n\n            Username is required and must be a valid email address\n\n          </p>\n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n\n          </ion-input>\n\n        </ion-item>\n\n        <a>Lupa user login?<b>Bantuan untuk login</b></a>\n\n        <button ion-button block outline color="light" (click)="onLogin(loginForm)" type="submit">Login</button>\n\n        <a>OR</a>\n\n        <button ion-button block color="facebook">\n\n          <ion-icon name="logo-facebook">Login with facebook</ion-icon>\n\n        </button>\n\n      </ion-list>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <button ion-button clear full color="light">Tidak punya account? Sign up</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\nodeapp\ionicapp\HasApp\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\nodeapp\ionicapp\HasApp\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\nodeapp\ionicapp\HasApp\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__explore_explore__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bayar_bayar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(theInAppBrowser, events, navCtrl, BarcodeScanner, userData, alerCtrl) {
        this.theInAppBrowser = theInAppBrowser;
        this.events = events;
        this.navCtrl = navCtrl;
        this.BarcodeScanner = BarcodeScanner;
        this.userData = userData;
        this.alerCtrl = alerCtrl;
        this.homeloggedin = false;
        this.data = {};
        this.options = {
            location: 'no',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.userData.hasLoggedIn().then((hasLoggedIn) => {
        //   this.homeloggedin ===true;
        // });
        this.listenToLoginEvents();
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        this.option = {
            prompt: "Silahkan scan barcode"
        };
        this.BarcodeScanner.scan(this.option).then(function (barcodeData) {
            console.log('barcode :', barcodeData);
            _this.data = barcodeData;
            window.open(barcodeData.text, '_blank', 'location=yes');
        }, function (err) {
            //console.log('Error', err);
            console.log(err);
        });
    };
    HomePage.prototype.goBayar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_bayar_bayar__["a" /* BayarPage */]);
    };
    HomePage.prototype.goExplore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__explore_explore__["a" /* ExplorePage */]);
    };
    HomePage.prototype.goLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Informasi!',
            message: 'Silahkan login terlebih dahulu untuk akses menu ini',
            buttons: ['Ok']
        });
        alert.present();
    };
    HomePage.prototype.checkloggedin = function () {
    };
    HomePage.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    HomePage.prototype.enableMenu = function (loggedIn) {
        //this.menu.enable(loggedIn, 'loggedInMenu');
        //this.menu.enable(!loggedIn, 'loggedOutMenu');
        if (loggedIn) {
            this.homeloggedin = true;
        }
        else {
            // used for an example of ngFor and navigation
            this.homeloggedin = false;
        }
    };
    HomePage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\nodeapp\ionicapp\HasApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Home\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="">\n\n  <ion-slides spinner pager autoplay="3000" loop="true" speed="500">\n\n\n\n    <ion-slide>\n\n      <img src="assets/imgs/kaslogo.png" />\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/imgs/smarthome.png" />\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/imgs/infowarga.png" />\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n  <br />\n\n  <div padding style="text-align:center;">\n\n    <div style="padding-left:20px;text-align:left;max-width:300px;margin: 0 auto;">\n\n    <div id="MenuIconLoggedIn" *ngIf="homeloggedin">\n\n    <button ion-button outline color="slave" (click)="goBayar()">\n\n      <img ion-img src="assets/imgs/barcode.png" />\n\n      Kas Online\n\n    </button>\n\n    <button ion-button outline color="slave" (click)="doAlert()">\n\n      <img ion-img src="assets/imgs/policeman.png" />\n\n      Security Check\n\n    </button>\n\n    <button ion-button outline color="slave" (click)="doAlert()">\n\n      <img ion-img src="assets/imgs/megaphone.png" />\n\n      Visitor Check\n\n    </button>\n\n    <button ion-button outline color="slave" (click)="doAlert()">\n\n      <!--goExplore-->\n\n      <img ion-img src="assets/imgs/cctv.png" />\n\n      CCTV\n\n    </button>\n\n    <button ion-button outline color="slave" (click)="doAlert()">\n\n      <img ion-img src="assets/imgs/smart-house.png" />\n\n      Smart Home\n\n    </button>\n\n    <button ion-button outline color="slave" (click)="doAlert()">\n\n      <img ion-img src="assets/imgs/information.png" />\n\n      Info Warga\n\n    </button>\n\n    </div>\n\n    <a ion-button outline color="slave" target="_blank" href="http://google.co.id">\n\n      <img ion-img src="assets/imgs/chrome.png" />\n\n      <b>Pencarian</b>\n\n    </a>\n\n    <button ion-button outline color="slave" (click)="openWithInAppBrowser(\'http://m.jasamargalive.com\')">\n\n      <img ion-img src="assets/imgs/jsm.png" />\n\n      <b>Jasamarga</b>\n\n    </button>\n\n    <a ion-button outline color="slave" target="_blank" href="http://lewatmana.com">\n\n      <img ion-img src="assets/imgs/turn.png" />\n\n      <b>Lewatmana</b>\n\n    </a>\n\n    <a ion-button outline color="slave" target="_blank" href="http://rttmc.dephub.go.id/rttmc/m/page/cctv">\n\n      <img ion-img src="assets/imgs/traffic.png" />\n\n      <b>Dishub Traffic</b>\n\n    </a>\n\n    <a ion-button outline color="slave" target="_blank" href="http://www.trafi.com/id/jakarta">\n\n      <img ion-img src="assets/imgs/bus.png" />\n\n      <b>Transportasi</b>\n\n    </a>\n\n  </div>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\nodeapp\ionicapp\HasApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExplorePage = /** @class */ (function () {
    function ExplorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExplorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExplorePage');
    };
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-explore',template:/*ion-inline-start:"D:\nodeapp\ionicapp\HasApp\src\pages\explore\explore.html"*/'<!--\n\n  Generated template for the ExplorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="" padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Explore\n\n    </ion-card-header>\n\n\n\n    <ion-list>\n\n      <a ion-item icon-start target="_blank" href="http://lewatmana.com">\n\n        <ion-icon name="car" item-start></ion-icon>\n\n        Lewatmana.com\n\n      </a>\n\n\n\n      <a ion-item icon-start target="_blank" href="http://detik.com">\n\n        <ion-icon name="paper" item-start></ion-icon>\n\n        Berita Terkini\n\n      </a>\n\n\n\n      <a ion-item icon-start target="_blank" href="http://google.co.id">\n\n        <ion-icon name="logo-google" item-start></ion-icon>\n\n        Pencarian\n\n      </a>\n\n\n\n</ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\nodeapp\ionicapp\HasApp\src\pages\explore\explore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BayarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BayarPage = /** @class */ (function () {
    function BayarPage(alertCtrl, loadingCtrl, events, storage, navCtrl, userData) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.bayar = { id_user: '1', id_warga: '1', id_bank: '1', norek: '1', bukti: '1' };
        this.submitted = false;
        this.bankKeys = Object.keys;
        this.bankOpt = {};
        // refactoring idea : need loading and alert module because duplication in login ts
        this.loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.populateBank();
    }
    BayarPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loading.present();
    };
    BayarPage.prototype.killLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    BayarPage.prototype.showalert = function (alertMessage) {
        this.myalert = this.alertCtrl.create({
            title: 'Warning',
            message: alertMessage,
            buttons: ['Dismiss']
        });
        this.myalert.present();
    };
    // end refactoring alert and loading module
    BayarPage.prototype.submitBayar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.userData.postBayar(this.bayar)
                .subscribe(function (data) {
                //alert(JSON.stringify(data));
                if (data) {
                    if (_this.loading) {
                        _this.loading.dismiss();
                        _this.loading = null;
                    }
                    console.log(data);
                    _this.navCtrl.pop();
                }
                else {
                    _this.showalert(data["message"]);
                }
            }, function (error) {
                if (_this.loading) {
                    _this.loading.dismiss();
                    _this.loading = null;
                }
                _this.showalert(error.error.message);
                //alert(JSON.stringify(error.error));
            });
        }
    };
    BayarPage.prototype.populateBank = function () {
        this.bankOpt = { 1: 'BCA', 2: 'Mandiri', 3: 'BNI' };
    };
    BayarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bayar',template:/*ion-inline-start:"D:\nodeapp\ionicapp\HasApp\src\pages\bayar\bayar.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Konfirmasi Pembayaran</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content class="background" text-center>\n\n      <ion-card>\n\n          <ion-card-header>\n\n              Masukan Informasi Pembayaran Anda\n\n            </ion-card-header>\n\n          <ion-card-content>\n\n              <form #bayarForm="ngForm" (ngSubmit)="submitBayar(bayarForm)" novalidate>\n\n                  <ion-list>\n\n                    <ion-item>\n\n                      <ion-label color="primary">ID Warga</ion-label>\n\n                      <ion-input [(ngModel)]="bayar.id_warga" #id_warga="ngModel" name="id_warga" type="text" ></ion-input>\n\n                    </ion-item>\n\n              \n\n                    <ion-item>\n\n                        <ion-label color="primary">Bank</ion-label>\n\n                        <ion-select [(ngModel)]="bayar.id_bank" #id_bank="ngModel" name="id_bank" >\n\n                            <ion-option *ngFor="let option of bankKeys(bankOpt)">\n\n                                {{ bankOpt[option] }}\n\n                            </ion-option>\n\n                        </ion-select>\n\n                      </ion-item>\n\n              \n\n                    <ion-item>\n\n                        <ion-label color="primary" >No Rekening</ion-label>\n\n                        <ion-input placeholder="Text Input" [(ngModel)]="bayar.norek" #norek="ngModel" name="norek"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-label color="primary" >Bukti Pembayaran</ion-label>\n\n                        <ion-input placeholder="Text Input" [(ngModel)]="bayar.bukti" #bukti="ngModel" name="bukti"></ion-input>\n\n                    </ion-item>\n\n              \n\n                    <button ion-button color="light"  type="submit" style="width:200px;font-size:12px" >Submit</button>\n\n                  </ion-list>\n\n                  </form>\n\n            </ion-card-content>\n\n      </ion-card>\n\n\n\n    \n\n  </ion-content>'/*ion-inline-end:"D:\nodeapp\ionicapp\HasApp\src\pages\bayar\bayar.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], BayarPage);
    return BayarPage;
}());

//# sourceMappingURL=bayar.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Tab2 = /** @class */ (function () {
    function Tab2() {
    }
    Tab2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>Star</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>Tab 2</ion-content>"
        })
    ], Tab2);
    return Tab2;
}());

//# sourceMappingURL=tab2-page.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_explore_explore__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_bayar_bayar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hometabs_hometabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_hometabs_tab2_page__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_user_data__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__pages_hometabs_hometabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_hometabs_tab2_page__["a" /* Tab2 */],
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bayar_bayar__["a" /* BayarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__pages_hometabs_hometabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_hometabs_tab2_page__["a" /* Tab2 */],
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bayar_bayar__["a" /* BayarPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_hometabs_hometabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_data__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HomePage } from '../pages/home/home';




// prov

var MyApp = /** @class */ (function () {
    function MyApp(events, menu, loadingCtrl, platform, statusBar, splashScreen, userData, storage) {
        var _this = this;
        this.events = events;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.userData = userData;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_hometabs_hometabs__["a" /* HomeTabsPage */];
        this.initializeApp();
        // Check has logged in
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.listenToLoginEvents();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
        if (page.title == 'Login') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
        }
        else
            this.nav.setRoot(page.component);
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            var loading = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            setTimeout(function () {
                loading.dismiss();
                _this.enableMenu(false);
            }, 2000);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        //this.menu.enable(loggedIn, 'loggedInMenu');
        //this.menu.enable(!loggedIn, 'loggedOutMenu');
        if (loggedIn) {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_hometabs_hometabs__["a" /* HomeTabsPage */] },
                { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] },
                { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_hometabs_hometabs__["a" /* HomeTabsPage */], logsOut: true },
            ];
        }
        else {
            // used for an example of ngFor and navigation
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_hometabs_hometabs__["a" /* HomeTabsPage */] },
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */] },
                { title: 'Registrasi', component: __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */] },
                { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] }
            ];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\nodeapp\ionicapp\HasApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\nodeapp\ionicapp\HasApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
        //'Authorization': 'my-auth-token'
    })
};
var httpOptionsAuth = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var UserData = /** @class */ (function () {
    function UserData(events, storage, http) {
        this.events = events;
        this.storage = storage;
        this.http = http;
        this._favorites = [];
        this.hosturl = 'localhost:8000';
        this.loginurl = 'http://' + this.hosturl + '/api/auth/login'; // URL to web api
        this.bayarapi = 'http://' + this.hosturl + '/api/iuran';
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.getTokenStorage = function () {
        return this.storage.get('tokenauth').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkIsLoggedIn = function () {
        //if(this.storage.get(this.HAS_LOGGED_IN)) { return true; } else {return false; }
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value;
        });
    };
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.postLogin = function (loginform) {
        return this.http.post(this.loginurl, '{"email":"' + loginform.username + '","password":"' + loginform.password + '"}', httpOptions);
        // using string only without server
        //return '{"message":"token_generated","data":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMxMzE5NzM4LCJleHAiOjE1MzEzMjMzMzgsIm5iZiI6MTUzMTMxOTczOCwianRpIjoieTVIQWd4ZUNoeHFtcnVBcCJ9.xg64SDFry_yzNrw1xn5PkB3OLBQlWgkVnece0c4o0Zs"}}'
    };
    UserData.prototype.postBayar = function (bayarform) {
        this.getTokenStorage().then(function (mytoken) {
            httpOptionsAuth.headers.set('Authorization', mytoken);
        });
        console.log(httpOptionsAuth);
        return this.http.post(this.bayarapi, bayarform, httpOptionsAuth);
    };
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map