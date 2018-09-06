webpackJsonp([2],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationPageModule", function() { return FormationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formation__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_player_player__ = __webpack_require__(853);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormationPageModule = /** @class */ (function () {
    function FormationPageModule() {
    }
    FormationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__formation__["a" /* FormationPage */],
                __WEBPACK_IMPORTED_MODULE_3__components_player_player__["a" /* PlayerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__formation__["a" /* FormationPage */]),
            ],
        })
    ], FormationPageModule);
    return FormationPageModule;
}());

//# sourceMappingURL=formation.module.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the PlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PlayerComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PlayerComponent.prototype, "number", void 0);
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'player',template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\components\player\player.html"*/'<!-- Generated template for the PlayerComponent component -->\n<div class="number-container">\n  <div class="number">\n      {{number}}\n    </div>\n</div>\n<div class="name" text-center>\n  {{name}}\n</div>\n'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\components\player\player.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_player_player__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_BasePage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_offline_database__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_Guid__ = __webpack_require__(380);
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
 * Generated class for the FormationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormationPage = /** @class */ (function (_super) {
    __extends(FormationPage, _super);
    function FormationPage(navCtrl, navParams, authService, alertCtrl, platform, afoDatabase, events, guid) {
        var _this = _super.call(this, navCtrl, authService, alertCtrl, platform) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        _this.afoDatabase = afoDatabase;
        _this.events = events;
        _this.guid = guid;
        _this.team = { id: "", name: "", players: [], win: -1 };
        _this.players = [];
        _this.firstLinePlayers = [
            { number: 17, name: "Ferno" },
            { number: 2, name: "Mariot" },
            { number: 5, name: "Lalla" }
        ];
        _this.secondLinePlayers = [
            { number: 14, name: "Ste" },
            { number: 4, name: "Marta" },
            { number: 21, name: "Chiara" }
        ];
        _this.TAG = "SearchTeamPage";
        _this.teamId = navParams.get("id");
        _this.onEdit = navParams.get("onEdit");
        _this.fromLive = navParams.get("fromLive");
        _this.pageTitle = "Formazione";
        _this.logOnConsole(_this.TAG, _this.teamId + " " + _this.onEdit + " " + _this.fromLive);
        events.subscribe("create-team", function (page) {
            _this.saveTeam();
        });
        return _this;
    }
    FormationPage.prototype.ionViewDidLoad = function () {
        this.onInit(this.navBar);
    };
    FormationPage.prototype.ionViewWillEnter = function () {
        if (this.fromLive) {
            this.events.publish("currentPage", "formation-from-live");
        }
        else {
            this.events.publish("currentPage", "formation");
        }
    };
    FormationPage.prototype.onUserChange = function (user) {
        this.logOnConsole(this.TAG, "on user change" + user);
        if (user != null && this.teamId != undefined) {
            this.teamRef = this.afoDatabase.list("/users/" + this.authService.user.uid + "/teams");
            var self = this;
            this.teamRef.subscribe({
                next: function (teamsFound) {
                    self.logOnConsole(this.TAG, "teamFound: " + teamsFound.length);
                    teamsFound.filter(function (item) {
                        return (item.id.toLowerCase().indexOf(self.teamId.toLowerCase()) > -1);
                    });
                    if (teamsFound.length > 0) {
                        if (teamsFound[0].players == undefined) {
                            teamsFound[0].players = [];
                        }
                        self.players = teamsFound[0].players;
                        self.team = teamsFound[0];
                        self.teamKey = teamsFound[0].$key;
                    }
                }
            });
        }
    };
    FormationPage.prototype.saveTeam = function () {
        this.logOnConsole(this.TAG, "teamId: " + this.teamId);
        if (this.teamId != null && this.teamId != undefined && this.teamId != "") {
            if (this.checkMissingData()) {
                this.teamId = this.guid.newGuid();
                this.saveTeamOnFirebase(false);
            }
            else {
                this.errorPopup("Dati mancanti", "Mancano alcuni dati, controlla di aver inserito tutto!");
            }
        }
        else {
            if (this.checkMissingData()) {
                this.teamId = this.guid.newGuid();
                this.saveTeamOnFirebase(true);
            }
            else {
                this.errorPopup("Dati mancanti", "Mancano alcuni dati, controlla di aver inserito tutto!");
            }
        }
    };
    FormationPage.prototype.checkMissingData = function () {
        return (this.team.name != null &&
            this.team.name != undefined &&
            this.team.name.trim() != "");
    };
    FormationPage.prototype.saveTeamOnFirebase = function (isNew) {
        var _this = this;
        var teamRefAdded;
        var teamPromise;
        var obj = {
            id: this.teamId,
            name: this.team.name,
            players: this.players,
            win: this.team.win == undefined ? 0 : this.team.win
        };
        if (isNew) {
            teamRefAdded = this.teamRef.push({});
            teamPromise = teamRefAdded.set(obj);
        }
        else {
            teamRefAdded = this.afoDatabase
                .object("/users/" + this.authService.user.uid + "/teams/" + this.teamKey)
                .update(obj);
        }
        if (teamPromise != undefined) {
            teamPromise.then(function () {
                return _this.logOnConsole(_this.TAG, "team edited on firebase!");
            });
            if (teamPromise.offline != undefined) {
                teamPromise.offline.then(function () {
                    return _this.logOnConsole(_this.TAG, "offline team edited to device storage!");
                });
            }
        }
        if (!this.fromLive) {
            this.goBack();
        }
        else {
            this.onEdit = false;
        }
    };
    FormationPage.prototype.modifyPlayer = function (player) {
        this.addPlayer(player);
    };
    FormationPage.prototype.addPlayer = function (player) {
        var _this = this;
        var buttons = [
            {
                text: "Aggiungi",
                handler: function (data) {
                    if (data.name.trim() != "" && data.number.trim() != "") {
                        _this.players.push({
                            id: _this.guid.newGuid(),
                            name: data.name,
                            number: data.number
                        });
                        console.log(_this.players);
                    }
                    else {
                        _this.errorPopup("Dati mancanti", "Numero o nome giocatore non inserito correttamente");
                    }
                }
            }
        ];
        if (player != undefined) {
            buttons.push({
                text: "Elimina",
                handler: function (data) {
                    var index = _this.players.indexOf(player, 0);
                    if (index > -1) {
                        _this.players.splice(index, 1);
                    }
                }
            });
        }
        var prompt = this.alertCtrl.create({
            title: "Aggiungi giocatore",
            message: "Inserisci nome e numero del giocatore",
            inputs: [
                {
                    name: "name",
                    placeholder: "Nome",
                    value: player != undefined ? player.name : ""
                },
                {
                    name: "number",
                    placeholder: "Numero",
                    type: "number",
                    value: player != undefined ? player.number : ""
                }
            ],
            buttons: buttons
        });
        prompt.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("player"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__components_player_player__["a" /* PlayerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_player_player__["a" /* PlayerComponent */]) === "function" && _a || Object)
    ], FormationPage.prototype, "player", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar"),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]) === "function" && _b || Object)
    ], FormationPage.prototype, "navBar", void 0);
    FormationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-formation",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\formation\formation.html"*/'<!--\n\n  Generated template for the FormationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header *ngIf="!fromLive">\n\n\n\n  <ion-navbar #navbar color="primary">\n\n    <ion-buttons left *ngIf="!canGoBack">\n\n      <button ion-button icon-only (click)="goBack()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{pageTitle}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list *ngIf="onEdit">\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Nome</ion-label>\n\n      <ion-input type="text" [(ngModel)]="team.name"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="!onEdit">{{team?.name}}</div>\n\n\n\n  <div class="prima-linea">\n\n    <ion-grid class="full-height grid-court">\n\n      <ion-row justify-content-center align-items-center class="full-height">\n\n        <ion-col col-4 *ngFor="let player of firstLinePlayers">\n\n          <player [name]="player?.name" [number]="player?.number"></player>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div class="seconda-linea">\n\n    <ion-grid class="full-height grid-court">\n\n      <ion-row justify-content-center align-items-center class="full-height">\n\n        <ion-col col-4 *ngFor="let player of secondLinePlayers">\n\n          <player [name]="player?.name" [number]="player?.number"></player>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div class="player-title">\n\n    Giocatori:\n\n  </div>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 *ngFor="let player of players; let i = index;">\n\n          <ion-card class="animated bounceIn player-card"[style.animation-delay]=" i/10 + \'s\'" (tap)="modifyPlayer(player)">\n\n            <ion-card-content class="card-content">\n\n                <div class="player-number float-left">{{ player.number}}</div>\n\n                <div class="player-name float-left">{{player.name}}</div>\n\n              \n\n                <div class="clear"></div>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-buttons left *ngIf="onEdit">\n\n    <button ion-button icon-only (click)="addPlayer()" icon-start outline class="button-add-player">\n\n      <ion-icon name="add"></ion-icon>\n\n      Aggiungi giocatore\n\n    </button>\n\n  </ion-buttons>\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\formation\formation.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__common_Guid__["a" /* Guid */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_Guid__["a" /* Guid */]) === "function" && _k || Object])
    ], FormationPage);
    return FormationPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}(__WEBPACK_IMPORTED_MODULE_3__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=formation.js.map

/***/ })

});
//# sourceMappingURL=2.js.map