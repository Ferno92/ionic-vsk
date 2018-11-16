webpackJsonp([7],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveMatchPageModule", function() { return LiveMatchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_match__ = __webpack_require__(861);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_BasePage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(381);
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
    function LiveMatchPage(navCtrl, navParams, events, authService, afoDatabase, alertCtrl, platform, screenOrientation) {
        var _this = _super.call(this, navCtrl, authService, alertCtrl, platform) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.authService = authService;
        _this.afoDatabase = afoDatabase;
        _this.alertCtrl = alertCtrl;
        _this.platform = platform;
        _this.screenOrientation = screenOrientation;
        _this.pause = false;
        _this.gameOver = false;
        _this.isAudience = false;
        _this.iconExpand = "expand";
        _this.rotation = "phone-landscape";
        _this.isLandscape = false;
        _this.isLocked = false;
        _this.participants = [];
        // this.teamA = navParams.get("teamA");
        // this.teamB = navParams.get("teamB");
        _this.gameId = navParams.get("id");
        _this.audienceId = navParams.get("audienceId");
        _this.TAG = "LiveMatchPage";
        return _this;
        //console.log("audience: " + this.audienceId + " - id: " + this.gameId);
        //console.log(navParams);
    }
    LiveMatchPage.prototype.onUserChange = function (user) {
        this.logOnConsole(this.TAG, "on user change live" + user);
        if (user != null) {
            var id = "";
            this.logOnConsole(this.TAG, "1, audience: " + (this.audienceId == "undefined"));
            if (this.audienceId == undefined || this.audienceId == "undefined" || this.audienceId == ":audienceId") {
                this.logOnConsole(this.TAG, "2");
                id = this.authService.user.uid;
                this.retrieveGameInfo(id);
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
    LiveMatchPage.prototype.findUserFromAudienceId = function () {
        var _this = this;
        var id = "";
        this.isAudience = true;
        var users = this.afoDatabase.list("/users");
        users.subscribe(function (userList) {
            userList.forEach(function (user) {
                if (user.audienceId == _this.audienceId) {
                    id = user.$key;
                    _this.retrieveGameInfo(id);
                }
            });
        });
    };
    LiveMatchPage.prototype.retrieveGameInfo = function (userId) {
        var _this = this;
        var url = "/users/" + userId + "/games";
        this.logOnConsole(this.TAG, url);
        this.games = this.afoDatabase.list(url);
        this.games.subscribe(function (items) {
            var found = false;
            // items is an array
            items.forEach(function (item) {
                if (item.id == _this.gameId) {
                    _this.logOnConsole(_this.TAG, "Item:", item);
                    _this.currentGame = item;
                    // this.initParticipants(userId);
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
    LiveMatchPage.prototype.initParticipants = function (userId) {
        var _this = this;
        console.log("isAudience: " + this.isAudience);
        this.participantsRef = this.afoDatabase.object("/users/" + userId + "/games/" + this.currentGame.id + "/participants");
        var self = this;
        this.participantsRef.subscribe(function (item) {
            var value = [];
            if (item !== null && item.$value !== null) {
                console.log(item);
                value = item;
            }
            _this.throttle(function () {
                self.participants = [];
                self.participants.push(value);
            }, 5000);
            if (_this.isAudience) {
                var spectatorId = _this.authService.user != null ? _this.authService.user.uid : _this.authService.anonymousId;
                var index = value.indexOf(spectatorId);
                if (index >= 0) {
                    //do nothing, already exist
                }
                else {
                    value.push(spectatorId);
                    self.participantsRef.set(value);
                }
            }
        });
        var self = this;
        if (!this.isAudience) {
            this.intervalId = setInterval(function () {
                //clean db list to reupdate it
                console.log("clean db list to reupdate it");
                self.participantsRef.set([]);
            }, 30000);
        }
    };
    LiveMatchPage.prototype.ionViewDidLoad = function () {
        this.onInit(undefined);
    };
    LiveMatchPage.prototype.ionViewWillUnload = function () {
        // console.log(this.TAG + " ionViewWillUnload");
        clearInterval(this.intervalId);
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
    LiveMatchPage.prototype.initOnScreenOrientationChange = function () {
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
    LiveMatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-live-match",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\live-match\live-match.html"*/'<!--\n\n  Generated template for the LiveMatchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding [ngClass]="{\'landscape\': isLandscape}">\n\n  <div *ngIf="isLandscape" class="landscape-container">\n\n    <ion-buttons class="rotate-landscape">\n\n      <button ion-button icon-only (tap)="rotate()">\n\n        <ion-icon name="{{rotation}}"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-grid class="game-landscape-info">\n\n      <ion-row align-items-center>\n\n        <ion-col col-4 class="text-center">\n\n          {{(currentGame)?.teamA}}\n\n        </ion-col>\n\n        <ion-col col-1 class="text-center" [ngClass]="(((currentGame)?.resultA > (currentGame)?.resultB)) ? \'winner\' : \'\'">\n\n          {{(currentGame)?.resultA}}\n\n        </ion-col>\n\n        <ion-col col-2 class="text-center">\n\n          -\n\n        </ion-col>\n\n        <ion-col col-1 class="text-center" [ngClass]="(((currentGame)?.resultB > (currentGame)?.resultA)) ? \'winner\' : \'\'">\n\n          {{(currentGame)?.resultB}}\n\n        </ion-col>\n\n        <ion-col col-4 class="text-center">\n\n          {{(currentGame)?.teamB}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid class="game-landscape-set-info">\n\n      <ion-row align-items-center>\n\n        <ion-col col-5 class="text-center set-value" [ngClass]="{\'winner\' : ((currentGame)?.sets[currentGame.resultA + currentGame.resultB].a > (currentGame)?.sets[currentGame.resultA + currentGame.resultB].b && \n\n                    (gameOver || isSetEnded()))}">\n\n          {{(currentGame)?.sets[currentGame.resultA + currentGame.resultB].a}}\n\n        </ion-col>\n\n        <ion-col col-2 class="text-center set-value">\n\n          -\n\n        </ion-col>\n\n        <ion-col col-5 class="text-center set-value" [ngClass]="{\'winner\' : ((currentGame)?.sets[currentGame.resultA + currentGame.resultB].b > (currentGame)?.sets[currentGame.resultA + currentGame.resultB].a  && \n\n                    (gameOver || isSetEnded()))} ">\n\n          {{(currentGame)?.sets[currentGame.resultA + currentGame.resultB].b}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div *ngIf="!isLandscape" class="portrait-container">\n\n    <div class="match-info-container">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4 class="text-center">\n\n            {{(currentGame)?.teamA}}\n\n          </ion-col>\n\n          <ion-col col-1 class="text-center" [ngClass]="(((currentGame)?.resultA > (currentGame)?.resultB)) ? \'winner\' : \'\'">\n\n            {{(currentGame)?.resultA}}\n\n          </ion-col>\n\n          <ion-col col-2 class="text-center">\n\n            -\n\n          </ion-col>\n\n          <ion-col col-1 class="text-center" [ngClass]="(((currentGame)?.resultB > (currentGame)?.resultA)) ? \'winner\' : \'\'">\n\n            {{(currentGame)?.resultB}}\n\n          </ion-col>\n\n          <ion-col col-4 class="text-center">\n\n            {{(currentGame)?.teamB}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-grid *ngIf="(currentGame)?.live">\n\n        <ion-row *ngIf="!isAudience">\n\n          <ion-col col-5 class="text-center">\n\n            <ion-buttons>\n\n              <button ion-button icon-only class="full-width" [disabled]="pause || gameOver" (click)="updateSetValue(\'a\', true)" color="secondary">\n\n                <ion-icon name="add"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n          <ion-col col-5 offset-2 class="text-center">\n\n            <ion-buttons>\n\n              <button ion-button icon-only class="full-width" [disabled]="pause || gameOver" (click)="updateSetValue(\'b\', true)" color="secondary">\n\n                <ion-icon name="add"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5 class="text-center set-value" [ngClass]="{\'winner\' : ((currentGame)?.sets[currentGame.resultA + currentGame.resultB].a > (currentGame)?.sets[currentGame.resultA + currentGame.resultB].b && \n\n                  (gameOver || isSetEnded()))}">\n\n            {{(currentGame)?.sets[currentGame.resultA + currentGame.resultB].a}}\n\n          </ion-col>\n\n          <ion-col col-2 class="text-center set-value">\n\n            -\n\n          </ion-col>\n\n          <ion-col col-5 class="text-center set-value" [ngClass]="{\'winner\' : ((currentGame)?.sets[currentGame.resultA + currentGame.resultB].b > (currentGame)?.sets[currentGame.resultA + currentGame.resultB].a  && \n\n                  (gameOver || isSetEnded()))} ">\n\n            {{(currentGame)?.sets[currentGame.resultA + currentGame.resultB].b}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="!isAudience">\n\n          <ion-col col-5 class="text-center">\n\n            <ion-buttons>\n\n              <button ion-button icon-only class="full-width" [disabled]="pause || gameOver" (click)="updateSetValue(\'a\', false)" color="secondary">\n\n                <ion-icon name="remove"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n          <ion-col col-5 offset-2 class="text-center">\n\n            <ion-buttons>\n\n              <button ion-button icon-only class="full-width" [disabled]="pause || gameOver" (click)="updateSetValue(\'b\', false)" color="secondary">\n\n                <ion-icon name="remove"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-grid *ngIf="(pause || gameOver) && !isAudience">\n\n        <ion-row>\n\n          <ion-col col-5>\n\n            <ion-buttons>\n\n              <button ion-button class="full-width" (click)="rollBack()">\n\n                <ion-icon name="undo" class="icon-sets"></ion-icon>\n\n                Torna indietro\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n          <ion-col col-5 offset-2>\n\n            <ion-buttons>\n\n              <button ion-button class="full-width" (click)="createSet()" color="{{gameOver ? \'success\' : \'primary\'}}">\n\n                <ion-icon name="{{gameOver ? \'filing\' : \'refresh\'}}" class="icon-sets"></ion-icon>\n\n                {{gameOver ? \'Salva ed esci\' : \'Nuovo set\'}}\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <!-- sezione spettatori -->\n\n    <div>Spettatori: {{ participants?.length }}</div>\n\n    <!-- <ion-list>\n\n      <div ion-item *ngFor="let participant of participants?; let i = index">\n\n        {{ (i + 1) + \'° SET: \' +  set.a + \' - \' + set.b }}\n\n      </div>  \n\n    </ion-list> -->\n\n    <!-- sezione dati set-->\n\n    <div>Risultati</div>\n\n    <ion-list>\n\n      <div ion-item *ngFor="let set of currentGame?.sets; let i = index">\n\n        {{ (i + 1) + \'° SET: \' +  set.a + \' - \' + set.b }}\n\n      </div>  \n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\live-match\live-match.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_offline_database__["a" /* AngularFireOfflineDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _h || Object])
    ], LiveMatchPage);
    return LiveMatchPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}(__WEBPACK_IMPORTED_MODULE_2__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=live-match.js.map

/***/ })

});
//# sourceMappingURL=7.js.map