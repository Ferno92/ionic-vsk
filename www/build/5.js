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
            selector: "page-player-stats-modal",template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\player-stats-modal\player-stats-modal.html"*/'<!--\n  Generated template for the PlayerStatsModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Statistiche giocatore</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="selected-number" [ngClass]="{\'unknown\': selected.number <= 0}">{{selected.number <= 0 ? \'?\' :\n      selected.number}}</div> <div class="selected-name" [ngClass]="{\'unknown\': selected.number <= 0}">{{selected.number\n      <= 0 ? \'Nome giocatore\' : selected.name}}</div> <ion-list>\n        <ion-item-group>\n          <ion-item-divider>\n            Attacco\n          </ion-item-divider>\n          <div>\n            <ion-grid>\n              <ion-row>\n                <ion-col col-4>\n                  <div>\n\n                    <ion-buttons class="float-left">\n                      <button ion-button small outline color="danger" class="small-button" (tap)="remove(\'attacco\', \'err\')">\n                        <ion-icon name="remove"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.attacco.err">\n                    <ion-buttons class="float-right">\n                      <button ion-button small outline color="danger" class="small-button" (tap)="add(\'attacco\', \'err\')">\n                        <ion-icon name="add"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <div class="clear"></div>\n                  </div>\n                  <div class="input-title error">Errore</div>\n\n                </ion-col>\n                <ion-col col-4>\n                  <ion-buttons class="float-left">\n                    <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'attacco\', \'pos\')">\n                      <ion-icon name="remove"></ion-icon>\n                    </button>\n                  </ion-buttons>\n                  <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.attacco.pos">\n                  <ion-buttons class="float-right">\n                    <button ion-button small outline color="success" class="small-button" (tap)="add(\'attacco\', \'pos\')">\n                      <ion-icon name="add"></ion-icon>\n                    </button>\n                  </ion-buttons>\n                  <div class="clear"></div>\n                  <div class="input-title positive">Punto</div>\n                </ion-col>\n                <ion-col col-4>\n                  <ion-buttons class="float-left">\n                    <button ion-button small outline class="small-button"  (tap)="remove(\'attacco\', \'null\')">\n                      <ion-icon name="remove"></ion-icon>\n                    </button>\n                  </ion-buttons>\n                  <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.attacco.null">\n                  <ion-buttons class="float-right">\n                    <button ion-button small outline class="small-button"  (tap)="add(\'attacco\', \'null\')">\n                      <ion-icon name="add"></ion-icon>\n                    </button>\n                  </ion-buttons>\n                  <div class="clear"></div>\n                  <div class="input-title nothing">Normale</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-item-group>\n        \n        <ion-item-group>\n            <ion-item-divider>\n              Difesa\n            </ion-item-divider>\n            <div>\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-6>\n                    <div>\n                      <ion-buttons class="float-left">\n                        <button ion-button small outline color="danger" class="small-button"  (tap)="remove(\'difesa\', \'err\')">\n                          <ion-icon name="remove"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <input class="input-value" type="number" min="0" step="1"  [(ngModel)]="selected.stats.difesa.err">\n                      <ion-buttons class="float-right">\n                        <button ion-button small outline color="danger" class="small-button" (tap)="add(\'difesa\', \'err\')">\n                          <ion-icon name="add"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <div class="clear"></div>\n                    </div>\n                    <div class="input-title error">Errore</div>\n                  </ion-col>\n                  <ion-col col-6>\n                    <ion-buttons class="float-left">\n                      <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'difesa\', \'pos\')">\n                        <ion-icon name="remove"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.difesa.pos">\n                    <ion-buttons class="float-right">\n                      <button ion-button small outline color="success" class="small-button" (tap)="add(\'difesa\', \'pos\')">\n                        <ion-icon name="add"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <div class="clear"></div>\n                    <div class="input-title positive">Positivo</div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-item-group>\n\n          \n        <ion-item-group>\n            <ion-item-divider>\n              Ricezione\n            </ion-item-divider>\n            <div>\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-6>\n                    <div>\n                      <ion-buttons class="float-left">\n                        <button ion-button small outline color="danger" class="small-button"  (tap)="remove(\'ricezione\', \'err\')">\n                          <ion-icon name="remove"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.ricezione.err">\n                      <ion-buttons class="float-right">\n                        <button ion-button small outline color="danger" class="small-button" (tap)="add(\'ricezione\', \'err\')">\n                          <ion-icon name="add"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <div class="clear"></div>\n                    </div>\n                    <div class="input-title error">Errore</div>\n                  </ion-col>\n                  <ion-col col-6>\n                    <ion-buttons class="float-left">\n                      <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'ricezione\', \'pos\')">\n                        <ion-icon name="remove"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.ricezione.pos">\n                    <ion-buttons class="float-right">\n                      <button ion-button small outline color="success" class="small-button" (tap)="add(\'ricezione\', \'pos\')">\n                        <ion-icon name="add"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <div class="clear"></div>\n                    <div class="input-title positive">Positivo</div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-item-group>\n\n          \n        <ion-item-group>\n            <ion-item-divider>\n              Alzata\n            </ion-item-divider>\n            <div>\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-6>\n                    <div>\n                      <ion-buttons class="float-left">\n                        <button ion-button small outline color="danger" class="small-button"  (tap)="remove(\'alzata\', \'err\')">\n                          <ion-icon name="remove"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.alzata.err">\n                      <ion-buttons class="float-right">\n                        <button ion-button small outline color="danger" class="small-button" (tap)="add(\'alzata\', \'err\')">\n                          <ion-icon name="add"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <div class="clear"></div>\n                    </div>\n                    <div class="input-title error">Errore</div>\n                  </ion-col>\n                  <ion-col col-6>\n                    <ion-buttons class="float-left">\n                      <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'alzata\', \'pos\')">\n                        <ion-icon name="remove"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.alzata.pos">\n                    <ion-buttons class="float-right">\n                      <button ion-button small outline color="success" class="small-button" (tap)="add(\'alzata\', \'pos\')">\n                        <ion-icon name="add"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <div class="clear"></div>\n                    <div class="input-title positive">Positivo</div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-item-group>\n        </ion-list>\n\n        <ion-item-group>\n            <ion-item-divider>\n              Battuta\n            </ion-item-divider>\n            <div>\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-4>\n                    <div>\n  \n                      <ion-buttons class="float-left">\n                        <button ion-button small outline color="danger" class="small-button"   (tap)="remove(\'battuta\', \'err\')">\n                          <ion-icon name="remove"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.battuta.err">\n                      <ion-buttons class="float-right">\n                        <button ion-button small outline color="danger" class="small-button" (tap)="add(\'battuta\', \'err\')">\n                          <ion-icon name="add"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <div class="clear"></div>\n                    </div>\n                    <div class="input-title error">Errore</div>\n  \n                  </ion-col>\n                  <ion-col col-4>\n                    <ion-buttons class="float-left">\n                      <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'battuta\', \'pos\')">\n                        <ion-icon name="remove"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.battuta.pos">\n                    <ion-buttons class="float-right">\n                      <button ion-button small outline color="success" class="small-button" (tap)="add(\'battuta\', \'pos\')">\n                        <ion-icon name="add"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <div class="clear"></div>\n                    <div class="input-title positive">Punto</div>\n                  </ion-col>\n                  <ion-col col-4>\n                    <ion-buttons class="float-left">\n                      <button ion-button small outline class="small-button"  (tap)="remove(\'battuta\', \'null\')">\n                        <ion-icon name="remove"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.battuta.null">\n                    <ion-buttons class="float-right">\n                      <button ion-button small outline class="small-button" (tap)="add(\'battuta\', \'null\')">\n                        <ion-icon name="add"></ion-icon>\n                      </button>\n                    </ion-buttons>\n                    <div class="clear"></div>\n                    <div class="input-title nothing">Normale</div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-item-group>\n\n          <ion-item-group>\n              <ion-item-divider>\n                Muro\n              </ion-item-divider>\n              <div>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col col-4>\n                      <div>\n    \n                        <ion-buttons class="float-left">\n                          <button ion-button small outline color="danger" class="small-button"  (tap)="remove(\'muro\', \'err\')">\n                            <ion-icon name="remove"></ion-icon>\n                          </button>\n                        </ion-buttons>\n                        <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.muro.err">\n                        <ion-buttons class="float-right">\n                          <button ion-button small outline color="danger" class="small-button" (tap)="add(\'muro\', \'err\')">\n                            <ion-icon name="add"></ion-icon>\n                          </button>\n                        </ion-buttons>\n                        <div class="clear"></div>\n                      </div>\n                      <div class="input-title error">Errore</div>\n    \n                    </ion-col>\n                    <ion-col col-4>\n                      <ion-buttons class="float-left">\n                        <button ion-button small outline color="success" class="small-button"  (tap)="remove(\'muro\', \'pos\')">\n                          <ion-icon name="remove"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.muro.pos">\n                      <ion-buttons class="float-right">\n                        <button ion-button small outline color="success" class="small-button" (tap)="add(\'muro\', \'pos\')">\n                          <ion-icon name="add"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <div class="clear"></div>\n                      <div class="input-title positive">Punto</div>\n                    </ion-col>\n                    <ion-col col-4>\n                      <ion-buttons class="float-left">\n                        <button ion-button small outline class="small-button"  (tap)="remove(\'muro\', \'null\')">\n                          <ion-icon name="remove"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <input class="input-value" type="number" min="0" step="1" [(ngModel)]="selected.stats.muro.null">\n                      <ion-buttons class="float-right">\n                        <button ion-button small outline class="small-button" (tap)="add(\'muro\', \'null\')">\n                          <ion-icon name="add"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                      <div class="clear"></div>\n                      <div class="input-title nothing">Normale</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </ion-item-group>\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\player-stats-modal\player-stats-modal.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]) === "function" && _c || Object])
    ], PlayerStatsModalPage);
    return PlayerStatsModalPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=player-stats-modal.js.map

/***/ })

});
//# sourceMappingURL=5.js.map