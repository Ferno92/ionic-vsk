webpackJsonp([3],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameTabsPageModule", function() { return GameTabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_tabs__ = __webpack_require__(855);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_BasePage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_offline_database__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_shorturl__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_shorturl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_shorturl__);
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







// import { SocialShare } from 'angular-socialshare';
/**
 * Generated class for the GameTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GameTabsPage = /** @class */ (function (_super) {
    __extends(GameTabsPage, _super);
    function GameTabsPage(navCtrl, navParams, authService, alertCtrl, platform, screenOrientation, afoDatabase, shortUrlService, events) {
        var _this = _super.call(this, navCtrl, authService, alertCtrl, platform) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        _this.screenOrientation = screenOrientation;
        _this.afoDatabase = afoDatabase;
        _this.shortUrlService = shortUrlService;
        _this.events = events;
        _this.scorePage = "live-match";
        _this.formationPage = "formation";
        _this.chatPage = "chat";
        _this.rotation = "phone-landscape";
        _this.isLandscape = false;
        _this.isLocked = false;
        _this.tabIndex = 0;
        _this.TAG = "GameTabsPage";
        _this.scoreParams = {
            id: navParams.get("id"),
            audienceId: navParams.get("audienceId")
        };
        _this.logOnConsole(_this.TAG, _this.scoreParams);
        return _this;
    }
    GameTabsPage.prototype.ionViewDidLoad = function () {
        this.initOnScreenOrientationChange();
        this.onInit(this.navbar);
    };
    GameTabsPage.prototype.shortAudienceUrl = function () {
        var _this = this;
        var re = /undefined/gi;
        var url = window.location.href.replace(re, this.audienceIdForShare);
        if (url.includes("loading")) {
            this.logOnConsole(this.TAG, "retry, it contains loading: " + url);
            // setTimeout(this.shortAudienceUrl(), 5000);
        }
        else {
            this.logOnConsole(this.TAG, "ref: " + url);
            this.shortUrlService.load(url).then(function (data) {
                _this.logOnConsole(_this.TAG, "shortUrlService: " + data);
                _this.shortenedUrl = data;
            });
        }
    };
    GameTabsPage.prototype.onUserChange = function (user) {
        this.logOnConsole(this.TAG, "on user change live" + user);
        if (user != null) {
            var id = "";
            this.logOnConsole(this.TAG, "1, audience: " + (this.scoreParams.audienceId == "undefined"));
            if (this.scoreParams.audienceId == undefined ||
                this.scoreParams.audienceId == "undefined" ||
                this.scoreParams.audienceId == ":audienceId") {
                this.logOnConsole(this.TAG, "2");
                id = this.authService.user.uid;
                this.retrieveGameInfo(id, false);
            }
            else {
                this.logOnConsole(this.TAG, "3");
                this.findUserFromAudienceId();
            }
        }
        else {
            this.logOnConsole(this.TAG, "4");
            this.findUserFromAudienceId();
        }
        this.logOnConsole(this.TAG, "5");
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
        this.logOnConsole(this.TAG, url);
        var games = this.afoDatabase.list(url);
        games.subscribe(function (items) {
            var found = false;
            // items is an array
            items.forEach(function (item) {
                if (item.id == _this.scoreParams.id) {
                    _this.logOnConsole(_this.TAG, "Item:", item);
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
        var audienceRef = this.afoDatabase.object("/users/" + userId + "/audienceId");
        audienceRef.subscribe(function (audience) {
            _this.audienceIdForShare = audience.$value;
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
            _this.logOnConsole(_this.TAG, "on change: " + type);
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
    GameTabsPage.prototype.transition = function (e) {
        this.tabIndex = e.index;
    };
    GameTabsPage.prototype.share = function () {
        var newVariable;
        newVariable = window.navigator;
        if (newVariable && newVariable.share) {
            newVariable
                .share({
                title: "title",
                text: "description",
                url: this.shortenedUrl
            })
                .then(function () { return console.log("Successful share"); })
                .catch(function (error) { return console.log("Error sharing", error); });
        }
        else {
            alert("share not supported");
        }
    };
    GameTabsPage.prototype.sharePopup = function () {
        var _this = this;
        this.shortAudienceUrl();
        var prompt = this.alertCtrl.create({
            title: "Condividi la partita in corso",
            message: "Condividi la partita con i tuoi amici! Fai sapere come sta andando la tua squadra del cuore, punto per punto ;)",
            buttons: [
                {
                    text: "Condividi",
                    handler: function (data) {
                        _this.share();
                    }
                }
            ]
        });
        prompt.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]) === "function" && _a || Object)
    ], GameTabsPage.prototype, "navbar", void 0);
    GameTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-game-tabs",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\game-tabs\game-tabs.html"*/'<!--\n\n  Generated template for the GameTabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header no-border>\n\n\n\n  <ion-navbar #navbar color="primary" *ngIf="!isLandscape || tabIndex != 0">\n\n    <ion-buttons left *ngIf="!canGoBack">\n\n      <button ion-button icon-only (click)="goBack()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Partita Live</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (tap)="rotate()" *ngIf="tabIndex == 0">\n\n        <ion-icon name="{{rotation}}"></ion-icon>\n\n      </button>\n\n      <!-- <a  href="intent://#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.TEXT=https%3A%2F%2Fpaul.kinlan.me%2F;S.android.intent.extra.SUBJECT=Amazing;end">\n\n      <a  href="intent://<URL>#Intent;scheme=http;action=android.intent.action.SEND;end"> -->\n\n\n\n        <button ion-button icon-only (tap)="sharePopup()">\n\n          <ion-icon name="share"></ion-icon>\n\n        </button>\n\n      <!-- </a> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding [ngClass]="{\'landscape\': isLandscape && tabIndex == 0}">\n\n  <ion-tabs tabsPlacement="top" tabsLayout="icon-bottom" color="primary" (ionChange)="transition($event)">\n\n    <ion-tab [root]="scorePage" [rootParams]="scoreParams" tabTitle="Punteggio" tabIcon="appname-score-icon"></ion-tab>\n\n    <ion-tab [root]="formationPage" tabTitle="Formazione" tabIcon="appname-player"></ion-tab>\n\n    <ion-tab [root]="chatPage" tabTitle="Chat" tabIcon="chatbubbles"></ion-tab>\n\n  </ion-tabs>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\game-tabs\game-tabs.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6_angular_shorturl__["ShortUrlService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_shorturl__["ShortUrlService"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _k || Object])
    ], GameTabsPage);
    return GameTabsPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}(__WEBPACK_IMPORTED_MODULE_2__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=game-tabs.js.map

/***/ })

});
//# sourceMappingURL=3.js.map