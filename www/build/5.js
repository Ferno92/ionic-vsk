webpackJsonp([5],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStatsModalPageModule", function() { return PlayerStatsModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_stats_modal__ = __webpack_require__(863);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayerStatsModalPageModule = /** @class */ (function () {
    function PlayerStatsModalPageModule() {
    }
    PlayerStatsModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__player_stats_modal__["a" /* PlayerStatsModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__player_stats_modal__["a" /* PlayerStatsModalPage */]),
            ],
        })
    ], PlayerStatsModalPageModule);
    return PlayerStatsModalPageModule;
}());

//# sourceMappingURL=player-stats-modal.module.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerStatsModalPage; });
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


/**
 * Generated class for the PlayerStatsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerStatsModalPage = /** @class */ (function () {
    function PlayerStatsModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.list = [];
        this.selected = navParams.get("selected");
        this.list = navParams.get("list");
        if (this.selected.stats == undefined) {
            var obj3 = {
                err: 0,
                pos: 0,
                null: 0
            };
            var obj2 = {
                err: 0,
                pos: 0
            };
            this.selected.stats = {
                attacco: Object.assign({}, obj3),
                difesa: Object.assign({}, obj2),
                ricezione: Object.assign({}, obj2),
                alzata: Object.assign({}, obj2),
                battuta: Object.assign({}, obj3),
                muro: Object.assign({}, obj3)
            };
        }
    }
    PlayerStatsModalPage.prototype.ionViewDidLoad = function () { };
    PlayerStatsModalPage.prototype.close = function () {
        this.calculateMedia();
        this.viewCtrl.dismiss({ selected: this.selected });
    };
    PlayerStatsModalPage.prototype.add = function (parent, type) {
        switch (parent) {
            case "attacco":
                switch (type) {
                    case "err":
                        this.selected.stats.attacco.err++;
                        break;
                    case "pos":
                        this.selected.stats.attacco.pos++;
                        break;
                    case "null":
                        this.selected.stats.attacco.null++;
                        break;
                }
                break;
            case "difesa":
                switch (type) {
                    case "err":
                        this.selected.stats.difesa.err++;
                        break;
                    case "pos":
                        this.selected.stats.difesa.pos++;
                        break;
                }
                break;
            case "ricezione":
                switch (type) {
                    case "err":
                        this.selected.stats.ricezione.err++;
                        break;
                    case "pos":
                        this.selected.stats.ricezione.pos++;
                        break;
                }
                break;
            case "alzata":
                switch (type) {
                    case "err":
                        this.selected.stats.alzata.err++;
                        break;
                    case "pos":
                        this.selected.stats.alzata.pos++;
                        break;
                }
                break;
            case "battuta":
                switch (type) {
                    case "err":
                        this.selected.stats.battuta.err++;
                        break;
                    case "pos":
                        this.selected.stats.battuta.pos++;
                        break;
                    case "null":
                        this.selected.stats.battuta.null++;
                        break;
                }
                break;
            case "muro":
                switch (type) {
                    case "err":
                        this.selected.stats.muro.err++;
                        break;
                    case "pos":
                        this.selected.stats.muro.pos++;
                        break;
                    case "null":
                        this.selected.stats.muro.null++;
                        break;
                }
                break;
        }
    };
    PlayerStatsModalPage.prototype.remove = function (parent, type) {
        switch (parent) {
            case "attacco":
                switch (type) {
                    case "err":
                        this.selected.stats.attacco.err = this.removeMinZero(this.selected.stats.attacco.err);
                        break;
                    case "pos":
                        this.selected.stats.attacco.pos = this.removeMinZero(this.selected.stats.attacco.pos);
                        break;
                    case "null":
                        this.selected.stats.attacco.null = this.removeMinZero(this.selected.stats.attacco.null);
                        break;
                }
                break;
            case "difesa":
                switch (type) {
                    case "err":
                        this.selected.stats.difesa.err = this.removeMinZero(this.selected.stats.difesa.err);
                        break;
                    case "pos":
                        this.selected.stats.difesa.pos = this.removeMinZero(this.selected.stats.difesa.pos);
                        break;
                }
                break;
            case "ricezione":
                switch (type) {
                    case "err":
                        this.selected.stats.ricezione.err = this.removeMinZero(this.selected.stats.ricezione.err);
                        break;
                    case "pos":
                        this.selected.stats.ricezione.pos = this.removeMinZero(this.selected.stats.ricezione.pos);
                        break;
                }
                break;
            case "alzata":
                switch (type) {
                    case "err":
                        this.selected.stats.alzata.err = this.removeMinZero(this.selected.stats.alzata.err);
                        break;
                    case "pos":
                        this.selected.stats.alzata.pos = this.removeMinZero(this.selected.stats.alzata.pos);
                        break;
                }
                break;
            case "battuta":
                switch (type) {
                    case "err":
                        this.selected.stats.battuta.err = this.removeMinZero(this.selected.stats.battuta.err);
                        break;
                    case "pos":
                        this.selected.stats.battuta.pos = this.removeMinZero(this.selected.stats.battuta.pos);
                        break;
                    case "null":
                        this.selected.stats.battuta.null = this.removeMinZero(this.selected.stats.battuta.null);
                        break;
                }
                break;
            case "muro":
                switch (type) {
                    case "err":
                        this.selected.stats.muro.err = this.removeMinZero(this.selected.stats.muro.err);
                        break;
                    case "pos":
                        this.selected.stats.muro.pos = this.removeMinZero(this.selected.stats.muro.pos);
                        break;
                    case "null":
                        this.selected.stats.muro.null = this.removeMinZero(this.selected.stats.muro.null);
                        break;
                }
                break;
        }
    };
    PlayerStatsModalPage.prototype.removeMinZero = function (value) {
        return value - 1 >= 0 ? value - 1 : 0;
    };
    PlayerStatsModalPage.prototype.calculateMedia = function () {
        var errSum = this.selected.stats.attacco.err +
            this.selected.stats.difesa.err +
            this.selected.stats.ricezione.err +
            this.selected.stats.alzata.err +
            this.selected.stats.battuta.err +
            this.selected.stats.muro.err;
        var posSum = this.selected.stats.attacco.pos +
            this.selected.stats.difesa.pos +
            this.selected.stats.ricezione.pos +
            this.selected.stats.alzata.pos +
            this.selected.stats.battuta.pos +
            this.selected.stats.muro.pos;
        this.selected.stats.media = posSum - errSum;
    };
    PlayerStatsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-player-stats-modal",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\player-stats-modal\player-stats-modal.html"*/'<!--\n\n  Generated template for the PlayerStatsModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Statistiche giocatore</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="selected-number" [ngClass]="{\'unknown\': selected.number <= 0}">{{selected.number <= 0 ? \'?\' :\n\n      selected.number}}</div> <div class="selected-name" [ngClass]="{\'unknown\': selected.number <= 0}">{{selected.number\n\n      <= 0 ? \'Nome giocatore\' : selected.name}}</div> <ion-list>\n\n        <ion-item-group>\n\n          <ion-item-divider>\n\n            Attacco\n\n          </ion-item-divider>\n\n          <div>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-4>\n\n                  <div>\n\n\n\n                    <ion-buttons class="float-left">\n\n                      <button ion-button small outline color="danger" class="small-button" (tap)="remove(\'attacco\', \'err\')">\n\n                        <ion-icon name="remove"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.attacco.err">\n\n                    <ion-buttons class="float-right">\n\n                      <button ion-button small outline color="danger" class="small-button" (tap)="add(\'attacco\', \'err\')">\n\n                        <ion-icon name="add"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <div class="clear"></div>\n\n                  </div>\n\n                  <div class="input-title error">Errore</div>\n\n\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <ion-buttons class="float-left">\n\n                    <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'attacco\', \'pos\')">\n\n                      <ion-icon name="remove"></ion-icon>\n\n                    </button>\n\n                  </ion-buttons>\n\n                  <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.attacco.pos">\n\n                  <ion-buttons class="float-right">\n\n                    <button ion-button small outline color="success" class="small-button" (tap)="add(\'attacco\', \'pos\')">\n\n                      <ion-icon name="add"></ion-icon>\n\n                    </button>\n\n                  </ion-buttons>\n\n                  <div class="clear"></div>\n\n                  <div class="input-title positive">Punto</div>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <ion-buttons class="float-left">\n\n                    <button ion-button small outline class="small-button"  (tap)="remove(\'attacco\', \'null\')">\n\n                      <ion-icon name="remove"></ion-icon>\n\n                    </button>\n\n                  </ion-buttons>\n\n                  <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.attacco.null">\n\n                  <ion-buttons class="float-right">\n\n                    <button ion-button small outline class="small-button"  (tap)="add(\'attacco\', \'null\')">\n\n                      <ion-icon name="add"></ion-icon>\n\n                    </button>\n\n                  </ion-buttons>\n\n                  <div class="clear"></div>\n\n                  <div class="input-title nothing">Normale</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </div>\n\n        </ion-item-group>\n\n        \n\n        <ion-item-group>\n\n            <ion-item-divider>\n\n              Difesa\n\n            </ion-item-divider>\n\n            <div>\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-6>\n\n                    <div>\n\n                      <ion-buttons class="float-left">\n\n                        <button ion-button small outline color="danger" class="small-button"  (tap)="remove(\'difesa\', \'err\')">\n\n                          <ion-icon name="remove"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <input class="input-value" type="number" min="0" step="1"  [(ngModel)]="selected.stats.difesa.err">\n\n                      <ion-buttons class="float-right">\n\n                        <button ion-button small outline color="danger" class="small-button" (tap)="add(\'difesa\', \'err\')">\n\n                          <ion-icon name="add"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <div class="clear"></div>\n\n                    </div>\n\n                    <div class="input-title error">Errore</div>\n\n                  </ion-col>\n\n                  <ion-col col-6>\n\n                    <ion-buttons class="float-left">\n\n                      <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'difesa\', \'pos\')">\n\n                        <ion-icon name="remove"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.difesa.pos">\n\n                    <ion-buttons class="float-right">\n\n                      <button ion-button small outline color="success" class="small-button" (tap)="add(\'difesa\', \'pos\')">\n\n                        <ion-icon name="add"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <div class="clear"></div>\n\n                    <div class="input-title positive">Positivo</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </div>\n\n          </ion-item-group>\n\n\n\n          \n\n        <ion-item-group>\n\n            <ion-item-divider>\n\n              Ricezione\n\n            </ion-item-divider>\n\n            <div>\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-6>\n\n                    <div>\n\n                      <ion-buttons class="float-left">\n\n                        <button ion-button small outline color="danger" class="small-button"  (tap)="remove(\'ricezione\', \'err\')">\n\n                          <ion-icon name="remove"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.ricezione.err">\n\n                      <ion-buttons class="float-right">\n\n                        <button ion-button small outline color="danger" class="small-button" (tap)="add(\'ricezione\', \'err\')">\n\n                          <ion-icon name="add"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <div class="clear"></div>\n\n                    </div>\n\n                    <div class="input-title error">Errore</div>\n\n                  </ion-col>\n\n                  <ion-col col-6>\n\n                    <ion-buttons class="float-left">\n\n                      <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'ricezione\', \'pos\')">\n\n                        <ion-icon name="remove"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.ricezione.pos">\n\n                    <ion-buttons class="float-right">\n\n                      <button ion-button small outline color="success" class="small-button" (tap)="add(\'ricezione\', \'pos\')">\n\n                        <ion-icon name="add"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <div class="clear"></div>\n\n                    <div class="input-title positive">Positivo</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </div>\n\n          </ion-item-group>\n\n\n\n          \n\n        <ion-item-group>\n\n            <ion-item-divider>\n\n              Alzata\n\n            </ion-item-divider>\n\n            <div>\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-6>\n\n                    <div>\n\n                      <ion-buttons class="float-left">\n\n                        <button ion-button small outline color="danger" class="small-button"  (tap)="remove(\'alzata\', \'err\')">\n\n                          <ion-icon name="remove"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.alzata.err">\n\n                      <ion-buttons class="float-right">\n\n                        <button ion-button small outline color="danger" class="small-button" (tap)="add(\'alzata\', \'err\')">\n\n                          <ion-icon name="add"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <div class="clear"></div>\n\n                    </div>\n\n                    <div class="input-title error">Errore</div>\n\n                  </ion-col>\n\n                  <ion-col col-6>\n\n                    <ion-buttons class="float-left">\n\n                      <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'alzata\', \'pos\')">\n\n                        <ion-icon name="remove"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.alzata.pos">\n\n                    <ion-buttons class="float-right">\n\n                      <button ion-button small outline color="success" class="small-button" (tap)="add(\'alzata\', \'pos\')">\n\n                        <ion-icon name="add"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <div class="clear"></div>\n\n                    <div class="input-title positive">Positivo</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </div>\n\n          </ion-item-group>\n\n        </ion-list>\n\n\n\n        <ion-item-group>\n\n            <ion-item-divider>\n\n              Battuta\n\n            </ion-item-divider>\n\n            <div>\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-4>\n\n                    <div>\n\n  \n\n                      <ion-buttons class="float-left">\n\n                        <button ion-button small outline color="danger" class="small-button"   (tap)="remove(\'battuta\', \'err\')">\n\n                          <ion-icon name="remove"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.battuta.err">\n\n                      <ion-buttons class="float-right">\n\n                        <button ion-button small outline color="danger" class="small-button" (tap)="add(\'battuta\', \'err\')">\n\n                          <ion-icon name="add"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <div class="clear"></div>\n\n                    </div>\n\n                    <div class="input-title error">Errore</div>\n\n  \n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    <ion-buttons class="float-left">\n\n                      <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'battuta\', \'pos\')">\n\n                        <ion-icon name="remove"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.battuta.pos">\n\n                    <ion-buttons class="float-right">\n\n                      <button ion-button small outline color="success" class="small-button" (tap)="add(\'battuta\', \'pos\')">\n\n                        <ion-icon name="add"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <div class="clear"></div>\n\n                    <div class="input-title positive">Punto</div>\n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    <ion-buttons class="float-left">\n\n                      <button ion-button small outline class="small-button"  (tap)="remove(\'battuta\', \'null\')">\n\n                        <ion-icon name="remove"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.battuta.null">\n\n                    <ion-buttons class="float-right">\n\n                      <button ion-button small outline class="small-button" (tap)="add(\'battuta\', \'null\')">\n\n                        <ion-icon name="add"></ion-icon>\n\n                      </button>\n\n                    </ion-buttons>\n\n                    <div class="clear"></div>\n\n                    <div class="input-title nothing">Normale</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </div>\n\n          </ion-item-group>\n\n\n\n          <ion-item-group>\n\n              <ion-item-divider>\n\n                Muro\n\n              </ion-item-divider>\n\n              <div>\n\n                <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col col-4>\n\n                      <div>\n\n    \n\n                        <ion-buttons class="float-left">\n\n                          <button ion-button small outline color="danger" class="small-button"  (tap)="remove(\'muro\', \'err\')">\n\n                            <ion-icon name="remove"></ion-icon>\n\n                          </button>\n\n                        </ion-buttons>\n\n                        <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.muro.err">\n\n                        <ion-buttons class="float-right">\n\n                          <button ion-button small outline color="danger" class="small-button" (tap)="add(\'muro\', \'err\')">\n\n                            <ion-icon name="add"></ion-icon>\n\n                          </button>\n\n                        </ion-buttons>\n\n                        <div class="clear"></div>\n\n                      </div>\n\n                      <div class="input-title error">Errore</div>\n\n    \n\n                    </ion-col>\n\n                    <ion-col col-4>\n\n                      <ion-buttons class="float-left">\n\n                        <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'muro\', \'pos\')">\n\n                          <ion-icon name="remove"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.muro.pos">\n\n                      <ion-buttons class="float-right">\n\n                        <button ion-button small outline color="success" class="small-button" (tap)="add(\'muro\', \'pos\')">\n\n                          <ion-icon name="add"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <div class="clear"></div>\n\n                      <div class="input-title positive">Punto</div>\n\n                    </ion-col>\n\n                    <ion-col col-4>\n\n                      <ion-buttons class="float-left">\n\n                        <button ion-button small outline class="small-button"  (tap)="remove(\'muro\', \'null\')">\n\n                          <ion-icon name="remove"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.muro.null">\n\n                      <ion-buttons class="float-right">\n\n                        <button ion-button small outline class="small-button" (tap)="add(\'muro\', \'null\')">\n\n                          <ion-icon name="add"></ion-icon>\n\n                        </button>\n\n                      </ion-buttons>\n\n                      <div class="clear"></div>\n\n                      <div class="input-title nothing">Normale</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n              </div>\n\n            </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\player-stats-modal\player-stats-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], PlayerStatsModalPage);
    return PlayerStatsModalPage;
}());

//# sourceMappingURL=player-stats-modal.js.map

/***/ })

});
//# sourceMappingURL=5.js.map