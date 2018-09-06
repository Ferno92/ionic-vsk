webpackJsonp([4],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTeamPageModule", function() { return SearchTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_team__ = __webpack_require__(860);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchTeamPageModule = /** @class */ (function () {
    function SearchTeamPageModule() {
    }
    SearchTeamPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_team__["a" /* SearchTeamPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_team__["a" /* SearchTeamPage */]),
            ],
        })
    ], SearchTeamPageModule);
    return SearchTeamPageModule;
}());

//# sourceMappingURL=search-team.module.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_BasePage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__ = __webpack_require__(168);
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
 * Generated class for the SearchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchTeamPage = /** @class */ (function (_super) {
    __extends(SearchTeamPage, _super);
    function SearchTeamPage(navCtrl, navParams, authService, alertCtrl, platform, afoDatabase, events) {
        var _this = _super.call(this, navCtrl, authService, alertCtrl, platform) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        _this.afoDatabase = afoDatabase;
        _this.events = events;
        _this.TAG = "SearchTeamPage";
        return _this;
    }
    SearchTeamPage.prototype.ionViewDidLoad = function () {
        this.onInit(this.navBar);
    };
    SearchTeamPage.prototype.ionViewWillEnter = function () {
        this.events.publish("currentPage", "search-team");
    };
    SearchTeamPage.prototype.onUserChange = function (user) {
        this.logOnConsole(this.TAG, "on user change" + user);
        if (user != null) {
            this.teams = this.afoDatabase.list("/users/" + this.authService.user.uid + "/teams");
            var self = this;
            this.teams.subscribe({
                next: function (teamsFound) {
                    self.logOnConsole(self.TAG, "teamsFound: " + teamsFound.length);
                    self.emptyTeams = teamsFound.length <= 0;
                }
            });
        }
    };
    SearchTeamPage.prototype.onTapTeam = function (team) {
        this.navCtrl.push("formation", {
            id: team.id,
            onEdit: true,
            fromLive: false
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]) === "function" && _a || Object)
    ], SearchTeamPage.prototype, "navBar", void 0);
    SearchTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-search-team",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\search-team\search-team.html"*/'<!--\n  Generated template for the SearchTeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar #navbar color="primary">\n    <ion-buttons left *ngIf="!canGoBack">\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!onSearch">Le tue squadre</ion-title>\n    <!-- <ion-searchbar class="animated fadeInRight search-bar" *ngIf="onSearch" \n      (ionInput)="getItems($event)" [showCancelButton]="false" (ionCancel)="onCancel($event)"></ion-searchbar>\n      <ion-buttons right *ngIf="!onSearch">\n          <button ion-button icon-only (click)="showSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="empty-teams" *ngIf="emptyTeams">\n    <ion-grid style="height: 100%">\n      <ion-row justify-content-center align-items-center style="height: 100%">\n        <div>\n          <img src="../../assets/imgs/icon-team.png" />\n          <p class="text_empty_teams">Non hai squadre salvate.. Incomincia creandone una!</p>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngIf="!emptyTeams">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 *ngFor="let team of (teams | async)?.slice().reverse(); let i = index">\n          <ion-card class="animated bounceIn team-card" [style.animation-delay]=" i/10 + \'s\'" (tap)="onTapTeam(team)">\n            <ion-card-content class="card-content">\n              <div class="logo-container float-left">\n                <div class="cell">\n                    <div class="logo">{{team.logo == undefined ? team.name.charAt(0).toUpperCase() : \'\'}}</div>\n                </div>\n              </div>\n              <div class="float-left">\n                <div class="team-name">{{team.name}}</div>\n                <div class="team-players">{{team.players == undefined ? 0: team.players?.length}} giocatori</div>\n              </div>\n              <div class="float-right">\n                <div>\n                    <ion-icon name="trophy" class="trophy-icon"></ion-icon>\n                </div>\n                <div text-center class="win-number">{{team.win}}</div>\n              </div>\n              <div class="clear"></div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\search-team\search-team.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _h || Object])
    ], SearchTeamPage);
    return SearchTeamPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}(__WEBPACK_IMPORTED_MODULE_2__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=search-team.js.map

/***/ })

});
//# sourceMappingURL=4.js.map