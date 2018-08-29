webpackJsonp([3],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameTabsPageModule", function() { return GameTabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_tabs__ = __webpack_require__(853);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GameTabsPageModule = /** @class */ (function () {
    function GameTabsPageModule() {
    }
    GameTabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__game_tabs__["a" /* GameTabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__game_tabs__["a" /* GameTabsPage */]),
            ],
        })
    ], GameTabsPageModule);
    return GameTabsPageModule;
}());

//# sourceMappingURL=game-tabs.module.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_BasePage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_offline_database__ = __webpack_require__(168);
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
 * Generated class for the GameTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GameTabsPage = /** @class */ (function (_super) {
    __extends(GameTabsPage, _super);
    function GameTabsPage(navCtrl, navParams, authService, alertCtrl, platform, screenOrientation, afoDatabase) {
        var _this = _super.call(this, navCtrl, authService, alertCtrl, platform) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        _this.screenOrientation = screenOrientation;
        _this.afoDatabase = afoDatabase;
        _this.scorePage = "live-match";
        _this.formationPage = "formation";
        _this.chatPage = "chat";
        _this.rotation = "phone-landscape";
        _this.isLandscape = false;
        _this.isLocked = false;
        _this.scoreParams = {
            id: navParams.get("id"),
            audienceId: navParams.get("audienceId")
        };
        return _this;
    }
    GameTabsPage.prototype.ionViewDidLoad = function () {
        this.initOnScreenOrientationChange();
        this.onInit(this.navbar);
    };
    GameTabsPage.prototype.onUserChange = function (user) {
        console.log("on user change live" + user);
        if (user != null) {
            var id = "";
            console.log("1, audience: " + (this.scoreParams.audienceId == "undefined"));
            if (this.scoreParams.audienceId == undefined || this.scoreParams.audienceId == "undefined" || this.scoreParams.audienceId == ":audienceId") {
                console.log("2");
                id = this.authService.user.uid;
                this.retrieveGameInfo(id, false);
            }
            else {
                console.log("3");
                this.findUserFromAudienceId();
            }
        }
        else {
            console.log("4");
            this.findUserFromAudienceId();
        }
        console.log("5");
        this.initOnScreenOrientationChange();
    };
    GameTabsPage.prototype.findUserFromAudienceId = function () {
        var _this = this;
        var id = "";
        var isAudience = true;
        var users = this.afoDatabase.list("/users");
        users.subscribe(function (userList) {
            userList.forEach(function (user) {
                if (user.audienceId == _this.scoreParams.audienceId) {
                    id = user.$key;
                    _this.retrieveGameInfo(id, isAudience);
                }
            });
        });
    };
    GameTabsPage.prototype.retrieveGameInfo = function (userId, isAudience) {
        var _this = this;
        var url = "/users/" + userId + "/games";
        console.log(url);
        var games = this.afoDatabase.list(url);
        games.subscribe(function (items) {
            var found = false;
            // items is an array
            items.forEach(function (item) {
                if (item.id == _this.scoreParams.id) {
                    console.log("Item:", item);
                    found = true;
                    if (item.live && !isAudience) {
                        _this.askBeforeGoBack = true;
                    }
                }
            });
            if (!found) {
                //TODO: error message
            }
        });
    };
    GameTabsPage.prototype.rotate = function () {
        // console.log(this.screenOrientation.type);
        if (this.screenOrientation.type !=
            this.screenOrientation.ORIENTATIONS.LANDSCAPE &&
            this.screenOrientation.type !=
                this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY &&
            this.screenOrientation.type !=
                this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
            document.body.webkitRequestFullscreen();
            if (!this.isLocked) {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                this.isLocked = true;
            }
            this.isLandscape = true;
            this.rotation = "phone-portrait";
        }
        else {
            if (!this.isLocked) {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                this.isLocked = true;
            }
            var self = this;
            setTimeout(function () {
                if (this.isLocked) {
                    self.screenOrientation.unlock();
                    self.isLocked = false;
                }
                document.webkitExitFullscreen();
                self.isLandscape = false;
                self.rotation = "phone-landscape";
            }, 500);
        }
    };
    GameTabsPage.prototype.initOnScreenOrientationChange = function () {
        var _this = this;
        this.screenOrientation.onChange().subscribe(function (type) {
            console.log("on change: " + type);
            if (_this.screenOrientation.type !=
                _this.screenOrientation.ORIENTATIONS.LANDSCAPE &&
                _this.screenOrientation.type !=
                    _this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY &&
                _this.screenOrientation.type !=
                    _this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
                _this.isLandscape = false;
                _this.rotation = "phone-landscape";
            }
            else {
                _this.isLandscape = true;
                _this.rotation = "phone-portrait";
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]) === "function" && _a || Object)
    ], GameTabsPage.prototype, "navbar", void 0);
    GameTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game-tabs',template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\game-tabs\game-tabs.html"*/'<!--\n  Generated template for the GameTabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar #navbar color="primary" *ngIf="!isLandscape">\n    <ion-buttons left *ngIf="!canGoBack">\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Partita Live</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (tap)="rotate()">\n        <ion-icon name="{{rotation}}"></ion-icon>\n      </button>\n      <button ion-button icon-only (tap)="share()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-tabs>\n    <ion-tab [root]="scorePage" [rootParams]="scoreParams" tabTitle="Punteggio" tabIcon="appname-score-icon"></ion-tab>\n    <ion-tab [root]="formationPage" tabTitle="Formazione" tabIcon="appname-player"></ion-tab>\n    <ion-tab [root]="chatPage" tabTitle="Chat" tabIcon="chatbubbles"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\game-tabs\game-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */]) === "function" && _h || Object])
    ], GameTabsPage);
    return GameTabsPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}(__WEBPACK_IMPORTED_MODULE_2__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=game-tabs.js.map

/***/ })

});
//# sourceMappingURL=3.js.map