webpackJsonp([4],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_offline_database__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_BasePage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_game_widget_game_widget__ = __webpack_require__(336);
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
 * Generated class for the SearchLivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchLivePage = /** @class */ (function (_super) {
    __extends(SearchLivePage, _super);
    function SearchLivePage(navCtrl, navParams, afoDatabase, authService, alertCtrl, platform) {
        var _this = _super.call(this, navCtrl, authService, alertCtrl, platform) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.afoDatabase = afoDatabase;
        _this.authService = authService;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        _this.emptyGames = true;
        _this.games = [];
        _this.gamesFiltered = [];
        _this.onSearch = false;
        //reference to live game list
        _this.liveList = _this.afoDatabase.list("/live");
        var self = _this;
        _this.liveList.subscribe(function (items) {
            console.log("SearchLivePage: " + items.length);
            if (items.length > 0) {
                _this.emptyGames = false;
            }
            else {
                _this.emptyGames = true;
            }
            items.forEach(function (item) {
                var afoListObs = self.afoDatabase.list("/users/" + item.userId + "/games");
                afoListObs.subscribe(function (userGames) {
                    var found = false;
                    userGames.forEach(function (game) {
                        // console.log(game.$key + " - " + item.gameKey + " = " + (game.$key == item.gameKey));
                        if (game.$key == item.gameKey) {
                            game.audienceId = item.audienceId;
                            if (self.games.length > 0) {
                                self.games.forEach(function (gamePushed) {
                                    if (gamePushed.id != game.id) {
                                        self.games.push(game);
                                        found = true;
                                    }
                                });
                            }
                            else {
                                self.games.push(game);
                                found = true;
                            }
                        }
                    });
                    if (!found) {
                        console.log("not found live game alias - REMOVE game key: " + item.gameKey);
                    }
                    _this.gamesFiltered = _this.games;
                });
            });
        });
        return _this;
    }
    SearchLivePage.prototype.ionViewDidLoad = function () {
        this.onInit(this.navBar);
    };
    SearchLivePage.prototype.showLiveGame = function (game, pageRef) {
        pageRef.navCtrl.push("live-match", {
            id: game.$key,
            audienceId: game.audienceId
        });
    };
    SearchLivePage.prototype.onPressingCardGame = function (game, pageRef) { };
    SearchLivePage.prototype.updateEditCheck = function (game, pageRef) { };
    SearchLivePage.prototype.showSearch = function () {
        this.onSearch = true;
    };
    SearchLivePage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        console.log("getItems" + val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.gamesFiltered = this.games.filter(function (item) {
                return (item.teamA.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                    (item.teamB.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else if (val == undefined) {
            this.onSearch = false;
            this.gamesFiltered = this.games;
        }
    };
    SearchLivePage.prototype.onCancel = function (ev) {
        this.onSearch = false;
        this.gamesFiltered = this.games;
        console.log("onCancel");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("navbar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */])
    ], SearchLivePage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("gameWidget"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_game_widget_game_widget__["a" /* GameWidgetComponent */])
    ], SearchLivePage.prototype, "gameWidget", void 0);
    SearchLivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "search-live",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\search-live\search-live.html"*/'<!--\n  Generated template for the SearchLivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar #navbar color="primary">\n    <ion-buttons left *ngIf="!canGoBack">\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!onSearch">Partite in corso</ion-title>\n    <ion-searchbar class="animated fadeInRight search-bar" *ngIf="onSearch" \n    (ionInput)="getItems($event)" [showCancelButton]="false" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons right *ngIf="!onSearch">\n        <button ion-button icon-only (click)="showSearch()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="!emptyGames">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 *ngFor="let game of gamesFiltered; let i = index">\n          <game-widget [game]="game" [i]="i" [openGame]="showLiveGame" [ref]="this" [onEdit]="false" [onPressingCardGame]="onPressingCardGame" \n          [updateEditCheck]="updateEditCheck"></game-widget>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\search-live\search-live.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], SearchLivePage);
    return SearchLivePage;
}(__WEBPACK_IMPORTED_MODULE_3__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=search-live.js.map

/***/ }),

/***/ 180:
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
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-match/create-match.module": [
		715,
		1
	],
	"../pages/dashboard/dashboard.module": [
		716,
		3
	],
	"../pages/live-match/live-match.module": [
		718,
		0
	],
	"../pages/login/login.module": [
		333
	],
	"../pages/search-live/search-live.module": [
		717,
		2
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
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(690);
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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_BasePage__ = __webpack_require__(70);
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
 * Generated class for the GameWidgetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GameWidgetComponent = /** @class */ (function () {
    function GameWidgetComponent() {
        console.log("GameWidgetComponent");
    }
    GameWidgetComponent.prototype.openGameInWidget = function (game) {
        this.openGame(game, this.ref);
    };
    GameWidgetComponent.prototype.onPressing = function (game) {
        this.onPressingCardGame(game, this.ref);
    };
    GameWidgetComponent.prototype.updateCheck = function (game) {
        this.updateEditCheck(game, this.ref);
    };
    GameWidgetComponent.prototype.tapCheck = function (game) {
        this.tapCheckbox(game, this.ref);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GameWidgetComponent.prototype, "game", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GameWidgetComponent.prototype, "i", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], GameWidgetComponent.prototype, "openGame", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], GameWidgetComponent.prototype, "onPressingCardGame", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], GameWidgetComponent.prototype, "updateEditCheck", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], GameWidgetComponent.prototype, "tapCheckbox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__common_BasePage__["a" /* BasePage */])
    ], GameWidgetComponent.prototype, "ref", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GameWidgetComponent.prototype, "onEdit", void 0);
    GameWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'game-widget',template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\components\game-widget\game-widget.html"*/'<!-- Generated template for the GameWidgetComponent component -->\n<ion-card class="animated bounceIn game-card" [ngClass]="{\'live\': game.live}" [style.animation-delay]=" i/10 + \'s\'" (press)="onPressing(game)">\n  <!-- <ion-card-header>\n    {{game.name}}\n  </ion-card-header> -->\n  <ion-card-content class="card-content">\n    <div class="game-content" [ngClass]="{\'edit\': onEdit}" (tap)="openGameInWidget(game)">\n      <div class="float-left side-text live-text" [ngClass]="{\'live\': game.live}">{{game.live ? \'Live\' : \'Punteggio finale\'}}</div>\n      <div class="float-right side-text">{{game.date.day}}</div>\n      <div class="clear">\n        <div class="float-left relevant-text" [ngClass]="{\'winner\': game.resultA > game.resultB}">{{game.teamA}}</div>\n        <div class="float-right relevant-text" [ngClass]="{\'winner\': game.resultA > game.resultB}">{{game.resultA}}</div>\n      </div>\n      <div class="clear">\n        <div class="float-left relevant-text" [ngClass]="{\'winner\': game.resultB > game.resultA}">{{game.teamB}}</div>\n        <div class="float-right relevant-text" [ngClass]="{\'winner\': game.resultB > game.resultA}">{{game.resultB}}</div>\n      </div>\n      <div class="clear side-text">{{game.location.id == undefined || game.location.id == "" ? "Posizione non registrata" : game.location.name + \n          (game.location.city == "" ? "" : ", " + game.location.city)}}</div>\n    </div>\n    <ion-checkbox [(ngModel)]="game.checked" (ionChange)="updateEditCheck(game, false)" class="edit-game-checkbox" [ngClass]="{\'edit\': onEdit}"></ion-checkbox>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\components\game-widget\game-widget.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GameWidgetComponent);
    return GameWidgetComponent;
}());

//# sourceMappingURL=game-widget.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service


var GeoService = /** @class */ (function () {
    function GeoService(http) {
        this.http = http;
        // API_KEY = "AIzaSyCLlprHC9Qr1JD6d2o2znoqi-XURMA9S3U";
        this.CLIENT_ID = "U2E0H0RIFQMMXJEFBMQCX3A54AIGIRCEWUWBS4RZ1ZE1AASY";
        this.CLIENT_SECRET = "Q103KON5LVBHXFI1F002SXX1KHC2PQDDFYB5LCWM2WVOQQTP";
        console.log(http);
    }
    GeoService.prototype.getLocation = function (callBack, pageRef) {
        this.getPositionCallback = callBack;
        this.pageRef = pageRef;
        var geoError = function (error) {
            console.log("Error occurred. Error code: " + error.code);
            // error.code can be:
            //   0: unknown error
            //   1: permission denied
            //   2: position unavailable (error response from location provider)
            //   3: timed out
        };
        navigator.geolocation.getCurrentPosition(this.geoSuccess.bind(this), geoError);
    };
    GeoService.prototype.geoSuccess = function (position) {
        var location = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        };
        console.log(location);
        this.checkNearbyPlaces(location.latitude, location.longitude);
        //   document.getElementById("startLat").innerHTML = startPos.coords.latitude;
        //   document.getElementById("startLon").innerHTML = startPos.coords.longitude;
    };
    GeoService.prototype.checkNearbyPlaces = function (latitude, longitude) {
        // var places = this.http.get(
        //   "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        //     latitude +
        //     "," +
        //     longitude +
        //     "&radius=1500&key=" +
        //     this.API_KEY +
        //     ""
        // );
        var places = this.http.get("https://api.foursquare.com/v2/venues/search?client_id=" + this.CLIENT_ID +
            "&client_secret=" + this.CLIENT_SECRET + "&ll=" + latitude + "," + longitude + "&v=" + "20180723");
        this.getPositionCallback(places, this.pageRef);
        places.subscribe(function (data) {
            console.log(data);
        }, function (err) { return console.error(err); }, function () { return console.log("done loading places"); });
    };
    GeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GeoService);
    return GeoService;
}());

//# sourceMappingURL=geo.service.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guid; });
var Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());

//# sourceMappingURL=Guid.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(385);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_live_search_live__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_offline__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_plus__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_hide_fab_hide_fab__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_geo_service__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_Guid__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_game_widget_game_widget__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Import the AF2 Module












// import { GameWidgetComponent } from '../components/game-widget/game-widget';
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
                __WEBPACK_IMPORTED_MODULE_15__directives_hide_fab_hide_fab__["a" /* HideFabDirective */],
                __WEBPACK_IMPORTED_MODULE_19__components_game_widget_game_widget__["a" /* GameWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_search_live_search_live__["a" /* SearchLivePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], { scrollPadding: false }, {
                    links: [
                        { loadChildren: '../pages/create-match/create-match.module#CreateMatchPageModule', name: 'create-match', segment: 'create-match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'dashboard', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-live/search-live.module#SearchLivePageModule', name: 'search-live', segment: 'search-live', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/live-match/live-match.module#LiveMatchPageModule', name: 'live-match', segment: 'live-match/:id/:audienceId', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_offline__["a" /* AngularFireOfflineModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_search_live_search_live__["a" /* SearchLivePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16__services_geo_service__["a" /* GeoService */],
                __WEBPACK_IMPORTED_MODULE_18__common_Guid__["a" /* Guid */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(225);
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

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_BasePage__ = __webpack_require__(70);
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
    function LoginPage(navCtrl, navParams, gplus, platform, authService, toastCtrl, events, alertCtrl) {
        var _this = _super.call(this, navCtrl, authService, alertCtrl, platform) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.gplus = gplus;
        _this.platform = platform;
        _this.authService = authService;
        _this.toastCtrl = toastCtrl;
        _this.events = events;
        _this.alertCtrl = alertCtrl;
        return _this;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.onInit(this.navBar);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('navbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */])
    ], LoginPage.prototype, "navBar", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar #navbar>\n\n      <ion-buttons left *ngIf="!canGoBack">\n\n          <button ion-button icon-only (click)="goBack()">\n\n              <ion-icon name="arrow-back"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Username</ion-label>\n\n      <ion-input type="text" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Password</ion-label>\n\n      <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <button ion-button (click)="login()">LOGIN</button>\n\n  <button ion-button color="danger" (click)="googleLogin()">LOGIN WITH GOOGLE</button>\n\n  <div >or</div>\n\n  <div>\n\n      <button ion-button outline (click)="createAccount()">Create a new account</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_5__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_dashboard_dashboard__ = __webpack_require__(96);

var BasePage = /** @class */ (function () {
    function BasePage(navCtrl, authService, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
    }
    BasePage.prototype.onUserChange = function (user) {
        console.log("onUserChange");
    };
    BasePage.prototype.goBack = function () {
        console.log("askBeforeGoBack: " + this.askBeforeGoBack);
        if (this.askBeforeGoBack) {
            this.askGoBackPopup();
        }
        else {
            if (this.navCtrl.canGoBack()) {
                this.navCtrl.pop();
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_dashboard_dashboard__["a" /* DashboardPage */]);
                this.navCtrl.popToRoot();
            }
        }
    };
    BasePage.prototype.onInit = function (navBar) {
        var _this = this;
        console.log("navbar");
        this.platform.registerBackButtonAction(function () {
            console.log("backPressed 1");
            _this.errorPopup("what", "ouch");
        }, 2);
        navBar.backButtonClick = function (e) {
            // todo something
            _this.goBack();
        };
        this.askBeforeGoBack = false;
        this.canGoBack = this.navCtrl.canGoBack();
        this.authService.authState.subscribe(function (user) {
            _this.onUserChange(user);
        });
    };
    BasePage.prototype.errorPopup = function (text, description) {
        var prompt = this.alertCtrl.create({
            title: text,
            message: description,
            buttons: [
                {
                    text: "OK",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                }
            ]
        });
        prompt.present();
    };
    BasePage.prototype.askGoBackPopup = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "Abbandona partita",
            message: "Sei sicuro di voler abbandonare la partita?",
            buttons: [
                {
                    text: "Si",
                    handler: function (data) {
                        _this.askBeforeGoBack = false;
                        _this.goBack();
                    }
                },
                {
                    text: "No",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                }
            ]
        });
        prompt.present();
    };
    BasePage.prototype.openLiveMatch = function (key, teamA, teamB) {
        this.navCtrl.push("live-match", {
            id: key,
            teamA: teamA,
            teamB: teamB
        });
    };
    return BasePage;
}());

//# sourceMappingURL=BasePage.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_live_search_live__ = __webpack_require__(169);
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
    function MyApp(app, platform, statusBar, splashScreen, auth, events, alertCtrl, applicationRef) {
        var _this = this;
        this.app = app;
        this.auth = auth;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.applicationRef = applicationRef;
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
                // console.log("current page: " + page);
                if (_this.currentPage == "dashboard-edit" && (page == "dashboard-scroll" || page == "dashboard")) {
                    //do nothing
                }
                else {
                    _this.setCurrentPage(page);
                    _this.changeFab(page);
                }
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
    MyApp.prototype.goToSearchLive = function () {
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_7__pages_search_live_search_live__["a" /* SearchLivePage */]);
        this.subject.next("search-live");
    };
    MyApp.prototype.setCurrentPage = function (page) {
        console.log("set current page: " + page);
        this.subject.next(page);
        this.currentPage = page;
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
                        // console.log("Cancel clicked");
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
        this.events.publish("create-match");
        // this.app.getActiveNav().push("live-match", {
        //   "teamA": "Squadra A",
        //   "teamB": "Squadra B"
        // });
    };
    MyApp.prototype.scrollTop = function () {
        document.getElementsByClassName("dashboard-container")[0].getElementsByClassName("scroll-content")[0].scrollTop = 0;
        // console.log("top!!!");
        // var element = document.getElementsByClassName("fab-button");
        // for(var i=0, len = element.length; i<len; i++)
        // {
        //   element[i].style["background-color"] = "#FFC107";
        //   element[i].style["color"] = "#000000";
        // }
        // document.getElementsByClassName("fab-icon")[0].classList.remove("ion-md-arrow-round-up");
        // document.getElementsByClassName("fab-icon")[0].classList.add("ion-md-add");
        this.fabColor = "secondary";
        this.fabIcon = "add";
        this.events.publish("currentPage", "dashboard");
    };
    MyApp.prototype.changeFab = function (type) {
        console.log("changeFab: " + type);
        if (type === "create-match") {
            this.fabColor = "success";
            this.fabIcon = "checkmark";
            this.hasFab = true;
        }
        else if (type === "dashboard") {
            this.fabColor = "secondary";
            this.fabIcon = "add";
            this.hasFab = true;
        }
        else if (type === "dashboard-scroll") {
            this.fabColor = "primary";
            this.fabIcon = "arrow-round-up";
            this.hasFab = true;
            // console.log("color: " + this.fabColor + " fabIcon: " + this.fabIcon);
        }
        else if (type === "enable-dashboard") {
            this.fabColor = "secondary";
            this.fabIcon = "add";
            this.hasFab = true;
        }
        else {
            //hide fab
            this.hasFab = false;
        }
        this.applicationRef.tick();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <!-- <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header> -->\n\n    <ion-content>\n\n        <div>\n\n            <img class="user-placeholder user-image" src="../assets/svg/account_circle.svg" *ngIf="!userLogged" />\n\n            <img class="user-image" src="{{userImage}}" *ngIf="userLogged" />\n\n            <div *ngIf="userLogged" class="float-left user-info">\n\n                <div class="bigger-text">Ciao</div>\n\n                <div>{{userName}}</div>\n\n            </div>\n\n        </div>\n\n        <div class="clear"></div>\n\n        <p class="do-login-message" *ngIf="!userLogged">Fai login per accedere a tutte le funzionalità</p>\n\n        <ion-list>\n\n            <button menuClose ion-item icon-left (click)="goToDashboard()" [ngClass]="{\'menu-active\': currentMenu == \'dashboard\'}">\n\n                <ion-icon name="home"></ion-icon>\n\n                Homepage\n\n            </button>\n\n            <button *ngIf="!userLogged" menuClose ion-item icon-left (click)="goToLogin()" [ngClass]="{\'menu-active\': currentMenu == \'login\'}">\n\n                <ion-icon name="contact"></ion-icon>\n\n                Login\n\n            </button>\n\n            <button menuClose ion-item icon-left (click)="goToSearchLive()" [ngClass]="{\'menu-active\': currentMenu == \'search-live\'}">\n\n                <ion-icon name="flag"></ion-icon>\n\n                Partite in corso\n\n            </button>\n\n\n\n\n\n            <button *ngIf="userLogged" menuClose ion-item icon-left (click)="popupLogout()">\n\n                <ion-icon name="log-out"></ion-icon>\n\n                Esci\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n\n<ion-fab class="fab-dashboard" bottom right (click)="fabOnClick()" *ngIf="hasFab">\n\n    <button ion-fab icon-only color="{{fabColor}}" class="fab-button">\n\n        <ion-icon name="{{fabIcon}}" class="fab-icon"></ion-icon>\n\n    </button>\n\n</ion-fab>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideFabDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
            if (self.fabRef != undefined) {
                self.iconRef = self.fabRef.getElementsByClassName("fab-icon")[0];
                // console.log("All Transtition set " + self.fabRef + " | " + self.renderer);
                self.renderer.setElementStyle(self.fabRef, "webkitTransition", "transform 500ms,bottom 500ms");
                self.events.subscribe("currentPage", function (page) {
                    // user and time are the same arguments passed in `events.publish(user, time)`
                    //console.log("HideFabDirective - current page: " + page);
                    if (page == "dashboard") {
                        self.onTop = true;
                    }
                });
            }
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

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline_database__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_BasePage__ = __webpack_require__(70);
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
    function DashboardPage(navCtrl, navParams, authService, menuCtrl, events, afoDatabase, toastCtrl, alertCtrl, platform) {
        var _this = _super.call(this, navCtrl, authService, alertCtrl, platform) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.menuCtrl = menuCtrl;
        _this.events = events;
        _this.afoDatabase = afoDatabase;
        _this.toastCtrl = toastCtrl;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        _this.version = "0.0.1";
        _this.emptyGames = false;
        _this.onEdit = false;
        _this.gamesChecked = new Array();
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
            this.games = this.afoDatabase.list("/users/" + this.authService.user.uid + "/games", {
                query: {
                    orderByChild: "date/ms"
                }
            });
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
        this.onInit(this.navBar);
    };
    DashboardPage.prototype.ionViewWillEnter = function () {
        this.events.publish("currentPage", "dashboard");
    };
    DashboardPage.prototype.logOut = function () {
        this.authService.signOut();
        this.showSuccesfullToast("Logout avvenuto", "success");
    };
    DashboardPage.prototype.reload = function () {
        window.location.reload();
    };
    DashboardPage.prototype.showSuccesfullToast = function (text, result) {
        var toast = this.toastCtrl.create({
            message: "" + text,
            duration: 2000,
            position: "top",
            cssClass: "toast-login " + result
        });
        toast.present();
    };
    DashboardPage.prototype.openGame = function (game, pageRef) {
        console.log(pageRef);
        if (pageRef.onEdit) {
            game.checked = !game.checked;
            if (game.checked) {
                pageRef.updateEditCheck(game, false, this);
            }
        }
        else {
            pageRef.openLiveMatch(game.id, game.teamA, game.teamB);
        }
    };
    DashboardPage.prototype.onPressingCardGame = function (game, pageRef) {
        if (!pageRef.onEdit) {
            game.checked = true;
            pageRef.onEdit = true;
            pageRef.gamesChecked.push(game);
            pageRef.events.publish("currentPage", "dashboard-edit");
        }
    };
    DashboardPage.prototype.updateEditCheck = function (game, reverse, pageRef) {
        console.log("updateEditCheck, checked: " + game.checked);
        // game.checked = !game.checked;
        if ((reverse && !game.checked) || (!reverse && game.checked)) {
            pageRef.gamesChecked.push(game);
        }
        else {
            var index = pageRef.gamesChecked.indexOf(game);
            pageRef.gamesChecked.splice(index, 1);
            if (pageRef.gamesChecked.length == 0) {
                pageRef.removeOnEdit();
            }
        }
        console.log("gamesChecked length: " + pageRef.gamesChecked.length);
    };
    DashboardPage.prototype.removeOnEdit = function () {
        this.onEdit = false;
        this.events.publish("currentPage", "enable-dashboard");
        // while (this.gamesChecked.length > 0) {
        //   var gameRemoved: any = this.gamesChecked.pop();
        //   this.games.forEach(items => {
        //     for (var item in items) {
        //       var game: any = item;
        //       console.log("removeonedit id: " + game.id + " length: " + this.gamesChecked.length);
        //       if (gameRemoved.id == game.id) {
        //         game.edit = false;
        //       }
        //     }
        //   });
        // }
    };
    DashboardPage.prototype.deleteGames = function () {
        for (var game in this.gamesChecked) {
            var gameChecked = this.gamesChecked[0];
            console.log(gameChecked.id);
            this.games.remove(gameChecked.id);
        }
        this.removeOnEdit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("navbar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */])
    ], DashboardPage.prototype, "navBar", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dashboard",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar #navbar color="primary">\n\n    <button ion-button menuToggle *ngIf="!onEdit">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons left *ngIf="onEdit">\n\n      <button ion-button icon-only (click)="removeOnEdit()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{onEdit ? \'Elimina partite\' : \'Dashboard\'}}</ion-title>\n\n    <ion-buttons end *ngIf="(onlineVersion | async)?.current != version">\n\n      <button ion-button icon-only (click)="reload()" class="update-button">\n\n        <ion-icon name="cloud-download"></ion-icon>\n\n        Update\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end *ngIf="onEdit">\n\n      <button ion-button icon-only (click)="deleteGames()">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <!-- <ion-buttons end *ngIf="userLogged">\n\n        <button ion-button icon-only (click)="logOut()">\n\n          <ion-icon md="md-log-out"></ion-icon>\n\n        </button>\n\n      </ion-buttons> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="dashboard-container" hide-fab>\n\n  <div class="empty-dashboard" *ngIf="emptyGames">\n\n    <ion-grid style="height: 100%">\n\n      <ion-row justify-content-center align-items-center style="height: 100%">\n\n        <div>\n\n          <img src="../../assets/imgs/volley_empty_list.png" />\n\n          <p class="text_empty_dashboard">Non hai partite salvate.. Incomincia creandone una!</p>\n\n        </div>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div *ngIf="!emptyGames">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 *ngFor="let game of (games | async)?.slice().reverse(); let i = index">\n\n          <game-widget [game]="game" [i]="i" [openGame]="openGame" [ref]="this" [onEdit]="onEdit" [onPressingCardGame]="onPressingCardGame" \n\n          [updateEditCheck]="updateEditCheck"></game-widget>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  </div>\n\n\n\n  <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCb4PiqSFYyOvngPK1dWAGng&autoplay=1" frameborder="0" allowfullscreen></iframe> -->\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], DashboardPage);
    return DashboardPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=dashboard.js.map

/***/ })

},[380]);
//# sourceMappingURL=main.js.map