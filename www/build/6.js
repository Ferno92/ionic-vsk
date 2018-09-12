webpackJsonp([6],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModalPageModule", function() { return PlayerModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_modal__ = __webpack_require__(862);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayerModalPageModule = /** @class */ (function () {
    function PlayerModalPageModule() {
    }
    PlayerModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__player_modal__["a" /* PlayerModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__player_modal__["a" /* PlayerModalPage */])
            ],
        })
    ], PlayerModalPageModule);
    return PlayerModalPageModule;
}());

//# sourceMappingURL=player-modal.module.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerModalPage; });
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
 * Generated class for the PlayerModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerModalPage = /** @class */ (function () {
    function PlayerModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.list = [];
        this.zone = navParams.get("zone");
        this.selected = navParams.get("selected");
        this.list = navParams.get("list");
    }
    PlayerModalPage.prototype.ionViewDidLoad = function () {
    };
    PlayerModalPage.prototype.close = function () {
        this.viewCtrl.dismiss({ selected: this.selected, zone: this.zone });
    };
    PlayerModalPage.prototype.substitute = function (player) {
        var index = this.list.indexOf(player, 0);
        if (this.selected.number > 0) {
            this.list[index] = this.selected;
        }
        else {
            this.list.splice(index, 1);
        }
        this.selected = player;
    };
    PlayerModalPage.prototype.remove = function () {
        this.list.push(this.selected);
        this.selected = {
            id: "",
            name: "",
            number: -1
        };
    };
    PlayerModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-player-modal',template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\player-modal\player-modal.html"*/'<!--\n  Generated template for the PlayerModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title center>Giocatore in zona {{zone}}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="selected-number"  [ngClass]="{\'unknown\': selected.number <= 0}">{{selected.number <= 0 ? \'?\' : selected.number}}</div>\n  <div class="selected-name"  [ngClass]="{\'unknown\': selected.number <= 0}">{{selected.number <= 0 ? \'Nome giocatore\' : selected.name}}</div>\n\n  <div *ngIf="list.length > 0">\n    <div>{{selected.number <= 0 ? \'Scegli chi gioca in questa zona:\' : \'Sostituisci con:\'}}</div>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 *ngFor="let player of list; let i = index;">\n          <ion-card class="animated bounceIn player-card"[style.animation-delay]=" i/10 + \'s\'" (tap)="substitute(player)">\n            <ion-card-content class="card-content">\n                <div class="player-number float-left">{{ player.number}}</div>\n                <div class="player-name float-left">{{player.name}}</div>\n              \n                <div class="clear"></div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngIf="list.length <= 0 && selected.number > 0">\n    <ion-buttons center>\n      <button ion-button (click)="remove()" icon-start outline color="danger">\n        Rimuovi\n      </button>\n    </ion-buttons>\n  </div>\n  <div *ngIf="list.length <= 0 && selected.number <= 0">\n    Aggiungi altri giocatori alla tua lista per poterli inserire in questa zona\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\player-modal\player-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], PlayerModalPage);
    return PlayerModalPage;
}());

//# sourceMappingURL=player-modal.js.map

/***/ })

});
//# sourceMappingURL=6.js.map