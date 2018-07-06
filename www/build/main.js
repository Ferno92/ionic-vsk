webpackJsonp([3],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_dashboard_dashboard__ = __webpack_require__(94);

var BasePage = /** @class */ (function () {
    function BasePage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    BasePage.prototype.onUserChange = function (user) {
        console.log("onUserChange");
    };
    BasePage.prototype.goBack = function () {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_dashboard_dashboard__["a" /* DashboardPage */]);
            this.navCtrl.popToRoot();
        }
    };
    BasePage.prototype.onInit = function () {
        var _this = this;
        this.canGoBack = this.navCtrl.canGoBack();
        this.authService.authState.subscribe(function (user) {
            _this.onUserChange(user);
        });
    };
    return BasePage;
}());

//# sourceMappingURL=BasePage.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-match/create-match.module": [
		710,
		1
	],
	"../pages/dashboard/dashboard.module": [
		711,
		2
	],
	"../pages/live-match/live-match.module": [
		712,
		0
	],
	"../pages/login/login.module": [
		328
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(685);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_offline__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_hide_fab_hide_fab__ = __webpack_require__(709);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Import the AF2 Module








// import {
//   AfoListObservable,
//   AngularFireOfflineDatabase } from 'angularfire2-offline/database';
// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyDBvxVAYOPwEk2ApbU_DfQ-tmcgOfJ6k4Y",
    authDomain: "ionicvsk.firebaseapp.com",
    databaseURL: "https://ionicvsk.firebaseio.com",
    projectId: "ionicvsk",
    storageBucket: "",
    messagingSenderId: "589403062376"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__directives_hide_fab_hide_fab__["a" /* HideFabDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create-match/create-match.module#CreateMatchPageModule', name: 'create-match', segment: 'create-match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'dashboard', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/live-match/live-match.module#LiveMatchPageModule', name: 'live-match', segment: 'live-match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_offline__["a" /* AngularFireOfflineModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login_module__["LoginPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        console.log("AuthService constructor");
        this.userLogged = false;
        this.authState = this.afAuth.authState;
        this.afAuth.authState.subscribe(function (user) {
            _this.user = user;
            if (_this.user != null) {
                _this.userLogged = true;
                console.log("logged picture: " + user.photoURL);
            }
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signInWithCredential = function (credentials) {
        console.log('Sign in with credentials');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signInWithPopup = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        console.log("AuthService signInWithPopup" + this.afAuth.auth);
        return this.afAuth.auth.signInWithPopup(provider);
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.userLogged = false;
    };
    AuthService.prototype.isUserLogged = function () {
        return this.userLogged;
    };
    AuthService.prototype.getUserImage = function () {
        return this.afAuth.auth.currentUser.photoURL;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_BasePage__ = __webpack_require__(167);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * https://ionicthemes.com/tutorials/about/ionic2-app-with-socialsharing-and-deeplinking
 * https://ionicframework.com/docs/native/deeplinks/
 * https://angularfirebase.com/lessons/ionic-google-login-with-firebase-and-angularfire/
 */
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, gplus, platform, authService, toastCtrl, events) {
        var _this = _super.call(this, navCtrl, authService) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.gplus = gplus;
        _this.platform = platform;
        _this.authService = authService;
        _this.toastCtrl = toastCtrl;
        _this.events = events;
        return _this;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.onInit();
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.events.publish('currentPage', 'login');
    };
    LoginPage.prototype.onUserChange = function (user) {
        if (user != null) {
            this.goBack();
        }
    };
    LoginPage.prototype.nativeGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gplusUser, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.gplus.login({
                                'webClientId': '208284925648-u76mj4ulkproaqu8np57pv2444s8deuh.apps.googleusercontent.com',
                                'offline': true,
                                'scopes': 'profile email'
                            })];
                    case 1:
                        gplusUser = _a.sent();
                        return [4 /*yield*/, this.authService.signInWithCredential(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider.credential(gplusUser.idToken))];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.webGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var credential, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("webGoogleLogin " + this.authService);
                        return [4 /*yield*/, this.authService.signInWithPopup().then(function (success) {
                                console.log("login succesfull");
                                _this.showSuccesfullToast('Autenticazione eseguita', "success");
                                _this.goBack();
                            })
                                .catch(function (error) { return console.error('ERROR', error); })];
                    case 1:
                        credential = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.googleLogin = function () {
        if (this.platform.is('cordova')) {
            this.nativeGoogleLogin();
        }
        else {
            this.webGoogleLogin();
        }
    };
    LoginPage.prototype.signOut = function () {
        this.authService.signOut();
    };
    LoginPage.prototype.login = function () {
    };
    LoginPage.prototype.createAccount = function () {
        //https://firebase.google.com/docs/auth/web/password-auth#create_a_password_based_account
    };
    LoginPage.prototype.showSuccesfullToast = function (text, result) {
        var toast = this.toastCtrl.create({
            message: '' + text,
            duration: 2000,
            position: 'top',
            cssClass: 'toast-login ' + result
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-buttons left *ngIf="!canGoBack">\n\n          <button ion-button icon-only (click)="goBack()">\n\n              <ion-icon name="arrow-back"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Username</ion-label>\n\n      <ion-input type="text" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Password</ion-label>\n\n      <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <button ion-button (click)="login()">LOGIN</button>\n\n  <button ion-button color="danger" (click)="googleLogin()">LOGIN WITH GOOGLE</button>\n\n  <div >or</div>\n\n  <div>\n\n      <button ion-button outline (click)="createAccount()">Create a new account</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_5__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { GoogleLoginComponent } from '../components/google-login/google-login';
var MyApp = /** @class */ (function () {
    function MyApp(app, platform, statusBar, splashScreen, auth, events, alertCtrl) {
        var _this = this;
        this.app = app;
        this.auth = auth;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.userLogged = false;
            _this.currentMenu = "dashboard";
            _this.auth.authState.subscribe(function (user) {
                // console.log("logged user change ");
                if (user != null) {
                    _this.userLogged = true;
                    _this.userImage = user.photoURL;
                    _this.userName = user.displayName;
                    // console.log("logged user: " + user.displayName);
                }
                else {
                    _this.userLogged = false;
                }
            });
            _this.subject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
            _this.subject.subscribe(function (next) {
                _this.currentMenu = next;
            });
            events.subscribe("currentPage", function (page) {
                // user and time are the same arguments passed in `events.publish(user, time)`
                console.log("current page: " + page);
                _this.setCurrentPage(page);
                _this.changeFab(page);
            });
        });
    }
    MyApp.prototype.goToLogin = function () {
        this.app.getActiveNav().push("login");
        this.subject.next("login");
    };
    MyApp.prototype.goToDashboard = function () {
        this.app.getActiveNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */]);
        this.app.getActiveNav().popToRoot();
        this.subject.next("dashboard");
    };
    MyApp.prototype.setCurrentPage = function (page) {
        this.subject.next(page);
    };
    MyApp.prototype.popupLogout = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "Esci",
            message: "Vuoi veramente uscire?",
            buttons: [
                {
                    text: "Indietro",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Esci",
                    handler: function (data) {
                        _this.logOut();
                    }
                }
            ]
        });
        prompt.present();
    };
    MyApp.prototype.logOut = function () {
        this.auth.signOut();
    };
    MyApp.prototype.fabOnClick = function () {
        if (this.currentMenu == "dashboard") {
            this.createMatch();
        }
        else if (this.currentMenu == "create-match") {
            this.startMatch();
        }
        else if (this.currentMenu == "dashboard-scroll") {
            this.scrollTop();
        }
    };
    MyApp.prototype.createMatch = function () {
        this.app.getActiveNav().push("create-match");
    };
    MyApp.prototype.startMatch = function () {
        this.app.getActiveNav().push("live-match");
    };
    MyApp.prototype.scrollTop = function () {
        document.getElementsByClassName("dashboard-container")[0].getElementsByClassName("scroll-content")[0].scrollTop = 0;
        console.log("top!!!");
        // var element = document.getElementsByClassName("fab-button");
        // for(var i=0, len = element.length; i<len; i++)
        // {
        //   element[i].style["background-color"] = "#FFC107";
        //   element[i].style["color"] = "#000000";
        // }
        // document.getElementsByClassName("fab-icon")[0].classList.remove("ion-md-arrow-round-up");
        // document.getElementsByClassName("fab-icon")[0].classList.add("ion-md-add");
        this.fabColor = "secondary";
        this.fabIcon = "md-add";
        this.events.publish("currentPage", "dashboard");
    };
    MyApp.prototype.changeFab = function (type) {
        console.log("changeFab: " + type);
        if (type === "create-match") {
            this.fabColor = "success";
            this.fabIcon = "md-checkmark";
            this.hasFab = true;
        }
        else if (type === "dashboard") {
            this.fabColor = "secondary";
            this.fabIcon = "md-add";
            this.hasFab = true;
        }
        else if (type === "dashboard-scroll") {
            this.fabColor = "primary";
            this.fabIcon = "md-arrow-round-up";
            this.hasFab = true;
            console.log("color: " + this.fabColor + " fabIcon: " + this.fabIcon);
        }
        else {
            //hide fab
            this.hasFab = false;
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <!-- <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header> -->\n\n    <ion-content>\n\n        <div>\n\n            <img class="user-placeholder user-image" src="../assets/svg/account_circle.svg" *ngIf="!userLogged" />\n\n            <img class="user-image" src="{{userImage}}" *ngIf="userLogged" />\n\n            <div *ngIf="userLogged" class="float-left user-info">\n\n                <div class="bigger-text">Ciao</div>\n\n                <div>{{userName}}</div>\n\n            </div>\n\n        </div>\n\n        <div class="clear"></div>\n\n        <p class="do-login-message" *ngIf="!userLogged">Fai login per accedere a tutte le funzionalità</p>\n\n        <ion-list>\n\n            <button menuClose ion-item icon-left (click)="goToDashboard()" [ngClass]="{\'menu-active\': currentMenu == \'dashboard\'}">\n\n                <ion-icon name="homepage" md="md-home"></ion-icon>\n\n                Homepage\n\n            </button>\n\n            <button *ngIf="!userLogged" menuClose ion-item icon-left (click)="goToLogin()" [ngClass]="{\'menu-active\': currentMenu == \'login\'}">\n\n                <ion-icon name="login" md="md-contact"></ion-icon>\n\n                Login\n\n            </button>\n\n\n\n\n\n            <button *ngIf="userLogged" menuClose ion-item icon-left (click)="popupLogout()">\n\n                <ion-icon name="logout" md="md-log-out"></ion-icon>\n\n                Esci\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n\n<ion-list>\n\n        <ion-item>\n\n                {{fabColor}}\n\n        </ion-item>\n\n        <ion-item>\n\n                {{fabIcon}}\n\n        </ion-item>\n\n</ion-list>\n\n<ion-fab class="fab-dashboard" bottom right (click)="fabOnClick()" *ngIf="hasFab">\n\n    <button ion-fab icon-only color="{{fabColor}}" class="fab-button">\n\n        <ion-icon md="{{fabIcon}}" class="fab-icon"></ion-icon>\n\n    </button>\n\n</ion-fab>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideFabDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HideFabDirective = /** @class */ (function () {
    function HideFabDirective(element, renderer, events) {
        this.element = element;
        this.renderer = renderer;
        this.events = events;
        // private storedScroll: number = 0;
        // private threshold: number = 10;
        this.onTop = true;
    }
    HideFabDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        setTimeout(function () {
            // console.log("All Transtition set");
            self.fabRef = document.getElementsByClassName("fab-button")[0];
            self.iconRef = self.fabRef.getElementsByClassName("fab-icon")[0];
            // console.log("All Transtition set " + self.fabRef + " | " + self.renderer);
            self.renderer.setElementStyle(self.fabRef, "webkitTransition", "transform 500ms,bottom 500ms");
            self.events.subscribe("currentPage", function (page) {
                // user and time are the same arguments passed in `events.publish(user, time)`
                console.log("HideFabDirective - current page: " + page);
                if (page == "dashboard") {
                    self.onTop = true;
                }
            });
        }, 500);
    };
    HideFabDirective.prototype.handleScroll = function (event) {
        // if (event.scrollTop - this.storedScroll > this.threshold) {
        //   console.log("Scrolling down");
        //     this.renderer.setElementStyle(this.fabRef, 'bottom', '0');
        //     this.renderer.setElementStyle(this.fabRef, 'webkitTransform', 'scale3d(.1,.1,.1)');
        // } else if (event.scrollTop - this.storedScroll < 0) {
        //   console.log("Scrolling up");
        //     this.renderer.setElementStyle(this.fabRef, 'bottom', '-50');
        //     this.renderer.setElementStyle(this.fabRef, 'webkitTransform', 'scale3d(1,1,1)');
        // }
        // // console.log(event.scrollTop - this.storedScroll);
        // this.storedScroll = event.scrollTop;
        if (event.scrollTop != 0) {
            // // console.log("event scroll: " + event.scrollTop);
            // this.renderer.setElementStyle(this.fabRef, "background-color", "#3F51B5"); //md-arrow-round-up
            // this.renderer.setElementStyle(this.fabRef, "color", "#ffffff");
            // this.iconRef.classList.remove("ion-md-add");
            // this.iconRef.classList.add("ion-md-arrow-round-up");
            if (this.onTop) {
                this.events.publish("currentPage", "dashboard-scroll");
            }
            this.onTop = false;
            // this.renderer.setElementStyle(this.fabRef, 'transform', 'rotate(360deg)');
        }
        else {
            // // console.log("event scroll zero");
            // this.renderer.setElementStyle(this.fabRef, "background-color", "#FFC107");
            // this.renderer.setElementStyle(this.fabRef, "color", "#000000");
            // this.iconRef.classList.remove("ion-md-arrow-round-up");
            // this.iconRef.classList.add("ion-md-add");
            if (!this.onTop) {
                this.events.publish("currentPage", "dashboard");
            }
            this.onTop = true;
            // this.events.publish("currentPage", "dashboard");
            // this.renderer.setElementStyle(this.fabRef, 'transform', 'rotate(-360deg)');
        }
    };
    HideFabDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[hide-fab]",
            host: {
                "(ionScroll)": "handleScroll($event)"
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HideFabDirective);
    return HideFabDirective;
}());

//# sourceMappingURL=hide-fab.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline_database__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_BasePage__ = __webpack_require__(167);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function (_super) {
    __extends(DashboardPage, _super);
    function DashboardPage(navCtrl, navParams, authService, menuCtrl, events, afoDatabase) {
        var _this = _super.call(this, navCtrl, authService) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.menuCtrl = menuCtrl;
        _this.events = events;
        _this.afoDatabase = afoDatabase;
        _this.version = "0.0.1";
        _this.emptyGames = false;
        _this.userLogged = false;
        _this.emptyGames = true;
        _this.onlineVersion = afoDatabase.object("updateVersion");
        console.log("version: " + _this.onlineVersion);
        return _this;
    }
    DashboardPage.prototype.onUserChange = function (user) {
        var self = this;
        if (user != null) {
            this.userLogged = true;
            this.userImage = user.photoURL;
            this.games = this.afoDatabase.list("/" + this.authService.user.uid + "/games");
            this.games.subscribe({
                next: function (gamesFound) {
                    self.emptyGames = gamesFound.length == 0;
                }
            });
        }
        else {
            this.userLogged = false;
        }
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        this.onInit();
    };
    DashboardPage.prototype.ionViewWillEnter = function () {
        this.events.publish("currentPage", "dashboard");
    };
    DashboardPage.prototype.logOut = function () {
        this.authService.signOut();
    };
    DashboardPage.prototype.reload = function () {
        window.location.reload();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dashboard",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Dashboard</ion-title>\n\n    <ion-buttons end *ngIf="(onlineVersion | async)?.current != version">\n\n      <button ion-button icon-only (click)="reload()" class="update-button">\n\n        <ion-icon md="md-cloud-download"></ion-icon>\n\n        Update\n\n      </button>\n\n    </ion-buttons>\n\n    <!-- <ion-buttons end *ngIf="userLogged">\n\n        <button ion-button icon-only (click)="logOut()">\n\n          <ion-icon md="md-log-out"></ion-icon>\n\n        </button>\n\n      </ion-buttons> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="dashboard-container" hide-fab>\n\n  <div class="empty-dashboard" *ngIf="emptyGames">\n\n    <ion-grid style="height: 100%">\n\n      <ion-row justify-content-center align-items-center style="height: 100%">\n\n        <div>\n\n          <img src="../../assets/imgs/volley_empty_list.png" />\n\n          <p class="text_empty_dashboard">Non hai partite salvate.. Incomincia creandone una!</p>\n\n        </div>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div *ngIf="!emptyGames">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 *ngFor="let game of games | async; let i = index">\n\n          <ion-card class="animated bounceIn" [style.animation-delay]=" i/10 + \'s\'">\n\n            <!-- <ion-card-header>\n\n              {{game.name}}\n\n            </ion-card-header> -->\n\n            <ion-card-content>\n\n              <div>Punteggio Finale</div>\n\n              <div>Mar 3/7</div>\n\n              <div>\n\n                  <div>Svezia</div>\n\n                  <div>3</div>\n\n              </div>\n\n              <div>\n\n                  <div>Svizzera</div>\n\n                  <div>1</div>\n\n              </div>\n\n              <div>Imola</div>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */]])
    ], DashboardPage);
    return DashboardPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=dashboard.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map