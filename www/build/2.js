webpackJsonp([2],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationPageModule", function() { return FormationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formation__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_player_player__ = __webpack_require__(855);
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

/***/ 855:
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
            selector: 'player',template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\components\player\player.html"*/'<!-- Generated template for the PlayerComponent component -->\n\n<div class="number-container" [ngClass]="{\'unknown\': number <= 0}">\n\n  <div class="number">\n\n      {{number <= 0 ? \'?\' : number}}\n\n    </div>\n\n</div>\n\n<div class="name" text-center>\n\n  {{name}}\n\n</div>\n\n'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\components\player\player.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_player_player__ = __webpack_require__(855);
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
    function FormationPage(navCtrl, navParams, authService, alertCtrl, platform, afoDatabase, events, guid, modalCtrl) {
        var _this = _super.call(this, navCtrl, authService, alertCtrl, platform) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        _this.afoDatabase = afoDatabase;
        _this.events = events;
        _this.guid = guid;
        _this.modalCtrl = modalCtrl;
        _this.team = { id: "", name: "", players: [], win: -1 };
        _this.onEdit = false;
        _this.players = [];
        _this.flip = false;
        _this.firstLinePlayers = [
            { id: "", number: -1, name: "" },
            { id: "", number: -1, name: "" },
            { id: "", number: -1, name: "" }
        ];
        _this.secondLinePlayers = [
            { id: "", number: -1, name: "" },
            { id: "", number: -1, name: "" },
            { id: "", number: -1, name: "" }
        ];
        _this.TAG = "FormationPage";
        _this.teamId = navParams.get("id");
        _this.onEdit = navParams.get("onEdit") == "true" || navParams.get("onEdit") == true;
        _this.fromLive = navParams.get("fromLive") == "true" || navParams.get("fromLive") == true;
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
        this.logOnConsole(this.TAG, "on user change" + user + " onedit: " + this.onEdit);
        if (user != null && this.teamId != undefined && this.teamId != "undefined") {
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
                        self.firstLinePlayers = teamsFound[0].firstLine;
                        self.secondLinePlayers = teamsFound[0].secondLine;
                    }
                }
            });
        }
        else {
            this.team = { id: "", name: "Non possiedi le informazioni di questa squadra, creala nella sezione 'Le mie squadre'", players: [], win: -1 };
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
            win: this.team.win == undefined ? 0 : this.team.win,
            firstLine: this.firstLinePlayers,
            secondLine: this.secondLinePlayers
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
    FormationPage.prototype.changePlayer = function (player, zone) {
        var _this = this;
        var playersAvailable = [];
        this.players.forEach(function (element) {
            var found = false;
            _this.firstLinePlayers.forEach(function (item1) {
                if (item1.number == element.number) {
                    found = true;
                }
            });
            _this.secondLinePlayers.forEach(function (item2) {
                if (item2.number == element.number) {
                    found = true;
                }
            });
            if (!found) {
                playersAvailable.push(element);
            }
        });
        var modal = this.modalCtrl.create("page-player-modal", {
            selected: player,
            list: playersAvailable,
            zone: zone
        });
        modal.onDidDismiss(function (data) {
            _this.updateFormation(data);
        });
        modal.present();
    };
    FormationPage.prototype.updateFormation = function (data) {
        switch (data.zone) {
            case 1:
                this.secondLinePlayers[2] = data.selected;
                break;
            case 2:
                this.firstLinePlayers[2] = data.selected;
                break;
            case 3:
                this.firstLinePlayers[1] = data.selected;
                break;
            case 4:
                this.firstLinePlayers[0] = data.selected;
                break;
            case 5:
                this.secondLinePlayers[0] = data.selected;
                break;
            case 6:
                this.secondLinePlayers[1] = data.selected;
                break;
        }
    };
    FormationPage.prototype.flipPage = function (fab) {
        this.flip = !this.flip;
        fab.close();
    };
    FormationPage.prototype.saveChangesLive = function () {
        this.onEdit = false;
        this.saveTeam();
    };
    FormationPage.prototype.showPlayerInfo = function (player) {
        var _this = this;
        var modal = this.modalCtrl.create("page-player-stats-modal", {
            selected: player,
            list: this.players,
        });
        modal.onDidDismiss(function (data) {
            var index = _this.players.indexOf(data);
            _this.players[index] = data;
        });
        modal.present();
    };
    FormationPage.prototype.switchToEditMode = function () {
        this.flip = false;
        this.onEdit = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("player"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_player_player__["a" /* PlayerComponent */])
    ], FormationPage.prototype, "player", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */])
    ], FormationPage.prototype, "navBar", void 0);
    FormationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-formation",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\formation\formation.html"*/'<!--\n\n  Generated template for the FormationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header *ngIf="!fromLive">\n\n\n\n  <ion-navbar #navbar color="primary">\n\n    <ion-buttons left *ngIf="!canGoBack">\n\n      <button ion-button icon-only (click)="goBack()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{pageTitle}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-fab top right #fab *ngIf="!onEdit">\n\n    <button ion-fab mini color="secondary">\n\n      <ion-icon name="settings"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab>\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n      <button ion-fab (tap)="flipPage(fab)">\n\n        <ion-icon name="{{flip ? \'appname-player\' : \'stats\'}}"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n  <ion-fab top right *ngIf="onEdit && fromLive">\n\n    <button ion-fab mini color="success" (tap)="saveChangesLive()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <div class="flip-container" [ngClass]="{\'flip\': flip}">\n\n    <div class="flipper">\n\n      <div class="front">\n\n        <!-- front content -->\n\n\n\n        <ion-list *ngIf="onEdit">\n\n\n\n          <ion-item>\n\n            <ion-label fixed>Nome</ion-label>\n\n            <ion-input type="text" [(ngModel)]="team.name"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n        <div *ngIf="!onEdit" class="team-name-read-only">{{team?.name}}</div>\n\n\n\n        <div class="prima-linea">\n\n          <ion-grid class="full-height grid-court">\n\n            <ion-row justify-content-center align-items-center class="full-height">\n\n              <ion-col col-4 *ngFor="let player of firstLinePlayers; let i = index">\n\n                <player [name]="player?.name" [number]="player?.number" (tap)="onEdit? changePlayer(player, (4 - i)) : \'\'"></player>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </div>\n\n        <div class="seconda-linea">\n\n          <ion-grid class="full-height grid-court">\n\n            <ion-row justify-content-center align-items-center class="full-height">\n\n              <ion-col col-4 *ngFor="let player of secondLinePlayers">\n\n                <player [name]="player?.name" [number]="player?.number" (tap)="onEdit ? changePlayer(player, (i < 2 ? (i + 5) : 1)) : \'\'"></player>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </div>\n\n        <div class="player-title">\n\n          Giocatori:\n\n        </div>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 *ngFor="let player of players; let i = index;">\n\n              <ion-card class="animated bounceIn player-card" [style.animation-delay]=" i/10 + \'s\'" (tap)="onEdit? modifyPlayer(player) : \'\'">\n\n                <ion-card-content class="card-content">\n\n                  <div class="player-number float-left">{{ player.number}}</div>\n\n                  <div class="player-name float-left">{{player.name}}</div>\n\n\n\n                  <div class="clear"></div>\n\n                </ion-card-content>\n\n              </ion-card>\n\n\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <ion-buttons left *ngIf="onEdit">\n\n          <button ion-button icon-only (click)="addPlayer()" icon-start outline class="button-add-player">\n\n            <ion-icon name="add"></ion-icon>\n\n            Aggiungi giocatore\n\n          </button>\n\n        </ion-buttons>\n\n      </div>\n\n      <div class="back">\n\n        <!-- back content -->\n\n        <div>{{onEdit && fromLive ? \'Scegli il giocatore a cui vuoi assegnare punti o errori\' : \'Statistiche\'}}</div>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 *ngFor="let player of players; let i = index;">\n\n              <ion-card class="animated bounceIn player-card" [style.animation-delay]=" i/10 + \'s\'" (tap)="showPlayerInfo(player)">\n\n                <ion-card-content class="card-content">\n\n                  <div class="player-number float-left">{{ player.number}}</div>\n\n                  <div class="player-name name-with-stats float-left">{{player.name}}</div>\n\n                  <div class="float-right stat-container">\n\n                    <div class="stat-title">Andamento</div>\n\n                    <div class="stat-point" [ngClass] = "{\'negative\': player.stats?.media < 0, \'positive\': player.stats?.media > 0}">{{player.stats?.media}}</div>\n\n                  </div>\n\n\n\n                  <div class="clear"></div>\n\n                </ion-card-content>\n\n              </ion-card>\n\n\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\formation\formation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__common_Guid__["a" /* Guid */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], FormationPage);
    return FormationPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=formation.js.map

/***/ })

});
//# sourceMappingURL=2.js.map