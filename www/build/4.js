webpackJsonp([4],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTeamPageModule", function() { return SearchTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_team__ = __webpack_require__(864);
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

/***/ 864:
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */])
    ], SearchTeamPage.prototype, "navBar", void 0);
    SearchTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-search-team",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\search-team\search-team.html"*/'<!--\n\n  Generated template for the SearchTeamPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar #navbar color="primary">\n\n    <ion-buttons left *ngIf="!canGoBack">\n\n      <button ion-button icon-only (click)="goBack()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title *ngIf="!onSearch">Le tue squadre</ion-title>\n\n    <!-- <ion-searchbar class="animated fadeInRight search-bar" *ngIf="onSearch" \n\n      (ionInput)="getItems($event)" [showCancelButton]="false" (ionCancel)="onCancel($event)"></ion-searchbar>\n\n      <ion-buttons right *ngIf="!onSearch">\n\n          <button ion-button icon-only (click)="showSearch()">\n\n            <ion-icon name="search"></ion-icon>\n\n          </button>\n\n        </ion-buttons> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="empty-teams" *ngIf="emptyTeams">\n\n    <ion-grid style="height: 100%">\n\n      <ion-row justify-content-center align-items-center style="height: 100%">\n\n        <div>\n\n          <img src="../../assets/imgs/icon-team.png" />\n\n          <p class="text_empty_teams">Non hai squadre salvate.. Incomincia creandone una!</p>\n\n        </div>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div *ngIf="!emptyTeams">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 *ngFor="let team of (teams | async)?.slice().reverse(); let i = index">\n\n          <ion-card class="animated bounceIn team-card" [style.animation-delay]=" i/10 + \'s\'" (tap)="onTapTeam(team)">\n\n            <ion-card-content class="card-content">\n\n              <div class="logo-container float-left">\n\n                <div class="cell">\n\n                    <div class="logo">{{team.logo == undefined ? team.name.charAt(0).toUpperCase() : \'\'}}</div>\n\n                </div>\n\n              </div>\n\n              <div class="float-left">\n\n                <div class="team-name">{{team.name}}</div>\n\n                <div class="team-players">{{team.players == undefined ? 0: team.players?.length}} giocatori</div>\n\n              </div>\n\n              <div class="float-right">\n\n                <div>\n\n                    <ion-icon name="trophy" class="trophy-icon"></ion-icon>\n\n                </div>\n\n                <div text-center class="win-number">{{team.win}}</div>\n\n              </div>\n\n              <div class="clear"></div>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\search-team\search-team.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], SearchTeamPage);
    return SearchTeamPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=search-team.js.map

/***/ })

});
//# sourceMappingURL=4.js.map