webpackJsonp([1],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveMatchPageModule", function() { return LiveMatchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_match__ = __webpack_require__(846);
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

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_BasePage__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(48);
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
        _this.pause = false;
        _this.gameOver = false;
        _this.isAudience = false;
        // this.teamA = navParams.get("teamA");
        // this.teamB = navParams.get("teamB");
        _this.gameId = navParams.get("id");
        _this.audienceId = navParams.get("audienceId");
        console.log("audience: " + _this.audienceId + " - id: " + _this.gameId);
        return _this;
    }
    LiveMatchPage.prototype.onUserChange = function (user) {
        var _this = this;
        if (user != null) {
            var url = "";
            if (this.audienceId == undefined || this.audienceId == ":audienceId") {
                url = "/users/" + this.authService.user.uid + "/games";
                this.retrieveGameInfo(url);
            }
            else {
                this.isAudience = true;
                var users = this.afoDatabase.list("/users");
                users.subscribe(function (userList) {
                    userList.forEach(function (user) {
                        if (user.audienceId == _this.audienceId) {
                            url = "/users/" + user.$key + "/games";
                            console.log(url);
                            _this.retrieveGameInfo(url);
                        }
                    });
                });
            }
        }
    };
    LiveMatchPage.prototype.retrieveGameInfo = function (url) {
        var _this = this;
        this.games = this.afoDatabase.list(url);
        this.games.subscribe(function (items) {
            var found = false;
            // items is an array
            items.forEach(function (item) {
                if (item.id == _this.gameId) {
                    console.log("Item:", item);
                    _this.currentGame = item;
                    if (_this.currentGame.live) {
                        if (_this.currentGame.sets == undefined) {
                            _this.currentGame.sets = [{ a: 0, b: 0 }];
                        }
                        else {
                            if (_this.isSetEnded() && !_this.isGameOver()) {
                                _this.pause = true;
                            }
                            else if (_this.isGameOver()) {
                                _this.gameOver = true;
                            }
                        }
                    }
                    found = true;
                    if (item.live && !_this.isAudience) {
                        _this.askBeforeGoBack = true;
                    }
                }
            });
            if (!found) {
                //TODO: error message
            }
        });
    };
    LiveMatchPage.prototype.ionViewDidLoad = function () {
        this.onInit(this.navBar);
    };
    LiveMatchPage.prototype.ionViewWillEnter = function () {
        this.events.publish("currentPage", "live-match");
    };
    LiveMatchPage.prototype.updateSetValue = function (team, increment) {
        var teamValue = team == "a"
            ? this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].a
            : this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].b;
        if (increment) {
            teamValue = teamValue + 1;
        }
        else {
            teamValue = teamValue == 0 ? 0 : teamValue - 1;
        }
        if (team == "a") {
            this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].a = teamValue;
        }
        else {
            this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].b = teamValue;
        }
        if (this.isSetEnded() && !this.isGameOver()) {
            this.pause = true;
        }
        else if (this.isGameOver()) {
            this.gameOver = true;
        }
        this.updateGame();
    };
    LiveMatchPage.prototype.isSetEnded = function () {
        var isSetEnded = (this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].a >= 25 &&
            this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].a >=
                this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].b +
                    2) ||
            (this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].b >= 25 &&
                this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].b >=
                    this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].a +
                        2);
        return isSetEnded;
    };
    LiveMatchPage.prototype.isGameOver = function () {
        var winnerA = this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
            .a >=
            this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
                .b;
        var gameOver = this.isSetEnded() &&
            (winnerA ? this.currentGame.resultA == 2 : this.currentGame.resultB == 2);
        return gameOver;
    };
    LiveMatchPage.prototype.createSet = function () {
        var winnerA = this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
            .a >=
            this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
                .b;
        if (winnerA) {
            this.currentGame.resultA = this.currentGame.resultA + 1;
        }
        else {
            this.currentGame.resultB = this.currentGame.resultB + 1;
        }
        if (!this.gameOver) {
            this.currentGame.sets.push({ a: 0, b: 0 });
            this.pause = false;
        }
        else {
            this.currentGame.live = false;
        }
        this.updateGame();
    };
    LiveMatchPage.prototype.rollBack = function () {
        var winnerA = this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
            .a >
            this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
                .b;
        if (winnerA) {
            this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].a =
                this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].a - 1;
        }
        else {
            this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].b =
                this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB].b - 1;
        }
        if (!this.isSetEnded()) {
            this.pause = false;
            this.gameOver = false;
        }
        this.updateGame();
    };
    LiveMatchPage.prototype.updateGame = function () {
        this.afoDatabase
            .object("/users/" + this.authService.user.uid + "/games/" + this.currentGame.id)
            .update(this.currentGame);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("navbar"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */]) === "function" && _a || Object)
    ], LiveMatchPage.prototype, "navBar", void 0);
    LiveMatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-live-match",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\live-match\live-match.html"*/'<!--\n  Generated template for the LiveMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar #navbar color="primary">\n    <ion-buttons left *ngIf="!canGoBack">\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Partita Live</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 class="text-center">\n        {{(currentGame)?.teamA}}\n      </ion-col>\n      <ion-col col-1 class="text-center" [ngClass]="(((currentGame)?.resultA > (currentGame)?.resultB)) ? \'winner\' : \'\'">\n        {{(currentGame)?.resultA}}\n      </ion-col>\n      <ion-col col-2 class="text-center">\n        -\n      </ion-col>\n      <ion-col col-1 class="text-center" [ngClass]="(((currentGame)?.resultB > (currentGame)?.resultA)) ? \'winner\' : \'\'">\n        {{(currentGame)?.resultB}}\n      </ion-col>\n      <ion-col col-4 class="text-center">\n        {{(currentGame)?.teamB}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf="(currentGame)?.live">\n    <ion-row *ngIf="!isAudience">\n      <ion-col col-5 class="text-center">\n        <ion-buttons>\n          <button ion-button icon-only class="full-width" [disabled]="pause || gameOver" (click)="updateSetValue(\'a\', true)" color="secondary">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-5 offset-2 class="text-center">\n        <ion-buttons>\n          <button ion-button icon-only class="full-width" [disabled]="pause || gameOver" (click)="updateSetValue(\'b\', true)" color="secondary">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-5 class="text-center set-value" [ngClass]="((currentGame)?.sets[currentGame.resultA + currentGame.resultB].a > (currentGame)?.sets[currentGame.resultA + currentGame.resultB].b && (gameOver || isSetEnded())) ? \'winner\' : \'\'">\n        {{(currentGame)?.sets[currentGame.resultA + currentGame.resultB].a}}\n      </ion-col>\n      <ion-col col-2 class="text-center set-value">\n        -\n      </ion-col>\n      <ion-col col-5 class="text-center set-value" [ngClass]="((currentGame)?.sets[currentGame.resultA + currentGame.resultB].b > (currentGame)?.sets[currentGame.resultA + currentGame.resultB].a  && (gameOver || isSetEnded())) ? \'winner\' : \'\'">\n        {{(currentGame)?.sets[currentGame.resultA + currentGame.resultB].b}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="!isAudience">\n      <ion-col col-5 class="text-center">\n        <ion-buttons>\n          <button ion-button icon-only class="full-width" [disabled]="pause || gameOver" (click)="updateSetValue(\'a\', false)" color="secondary">\n            <ion-icon name="remove"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-5 offset-2 class="text-center">\n        <ion-buttons>\n          <button ion-button icon-only class="full-width" [disabled]="pause || gameOver" (click)="updateSetValue(\'b\', false)" color="secondary">\n            <ion-icon name="remove"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf="(pause || gameOver) && !isAudience">\n    <ion-row>\n      <ion-col col-5>\n        <ion-buttons>\n          <button ion-button class="full-width" (click)="rollBack()">\n            <ion-icon name="undo" class="icon-sets"></ion-icon>\n            Torna indietro\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-5 offset-2>\n        <ion-buttons>\n          <button ion-button class="full-width" (click)="createSet()" color="{{gameOver ? \'success\' : \'primary\'}}">\n            <ion-icon name="{{gameOver ? \'filing\' : \'refresh\'}}" class="icon-sets"></ion-icon>\n            {{gameOver ? \'Salva ed esci\' : \'Nuovo set\'}}\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\live-match\live-match.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _h || Object])
    ], LiveMatchPage);
    return LiveMatchPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}(__WEBPACK_IMPORTED_MODULE_2__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=live-match.js.map

/***/ })

});
//# sourceMappingURL=1.js.map