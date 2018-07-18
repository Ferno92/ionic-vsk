webpackJsonp([0],{

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveMatchPageModule", function() { return LiveMatchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_match__ = __webpack_require__(840);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LiveMatchPageModule = /** @class */ (function () {
    function LiveMatchPageModule() {
    }
    LiveMatchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__live_match__["a" /* LiveMatchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__live_match__["a" /* LiveMatchPage */]),
            ],
        })
    ], LiveMatchPageModule);
    return LiveMatchPageModule;
}());

//# sourceMappingURL=live-match.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_BasePage__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__ = __webpack_require__(496);
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
 * Generated class for the LiveMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LiveMatchPage = /** @class */ (function (_super) {
    __extends(LiveMatchPage, _super);
    function LiveMatchPage(navCtrl, navParams, events, authService, afoDatabase, alertCtrl, platform) {
        var _this = _super.call(this, navCtrl, authService, alertCtrl, platform) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.authService = authService;
        _this.afoDatabase = afoDatabase;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        // this.teamA = navParams.get("teamA");
        // this.teamB = navParams.get("teamB");
        _this.gameId = navParams.get("id");
        return _this;
    }
    LiveMatchPage.prototype.onUserChange = function (user) {
        var _this = this;
        if (user != null) {
            this.games = this.afoDatabase.list("/" + this.authService.user.uid + "/games");
            this.games.subscribe(function (items) {
                var found = false;
                // items is an array
                items.forEach(function (item) {
                    if (item.id == _this.gameId) {
                        console.log("Item:", item);
                        _this.currentGame = item;
                        _this.teamA = item.teamA;
                        _this.teamB = item.teamB;
                        console.log(_this.teamA + " vs " + _this.teamB);
                        found = true;
                    }
                });
                if (!found) {
                    //TODO: error message
                }
            });
        }
    };
    LiveMatchPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LiveMatchPage");
        this.onInit(this.navBar);
        this.askBeforeGoBack = true;
    };
    LiveMatchPage.prototype.ionViewWillEnter = function () {
        this.events.publish("currentPage", "live-match");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("navbar"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */]) === "function" && _a || Object)
    ], LiveMatchPage.prototype, "navBar", void 0);
    LiveMatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-live-match",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\live-match\live-match.html"*/'<!--\n  Generated template for the LiveMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar #navbar color="primary">\n      <ion-buttons left *ngIf="!canGoBack">\n          <button ion-button icon-only (click)="goBack()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>Partita Live</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <button (click)="saveGame()">save</button> -->\n\n  <div>{{teamA}} vs {{teamB}}</div>\n</ion-content>\n'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\live-match\live-match.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _h || Object])
    ], LiveMatchPage);
    return LiveMatchPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}(__WEBPACK_IMPORTED_MODULE_2__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=live-match.js.map

/***/ })

});
//# sourceMappingURL=0.js.map