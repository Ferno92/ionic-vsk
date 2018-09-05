webpackJsonp([4],{

/***/ 383:
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

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationPageModule", function() { return FormationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formation__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_player_player__ = __webpack_require__(383);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_player_player__ = __webpack_require__(383);
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
var FormationPage = /** @class */ (function () {
    function FormationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firstLinePlayers = [
            { "number": 17, "name": "Ferno" },
            { "number": 2, "name": "Mariot" },
            { "number": 5, "name": "Lalla" }
        ];
        this.secondLinePlayers = [
            { "number": 14, "name": "Ste" },
            { "number": 4, "name": "Marta" },
            { "number": 21, "name": "Chiara" }
        ];
    }
    FormationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormationPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("player"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__components_player_player__["a" /* PlayerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_player_player__["a" /* PlayerComponent */]) === "function" && _a || Object)
    ], FormationPage.prototype, "player", void 0);
    FormationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-formation',template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\formation\formation.html"*/'<!--\n\n  Generated template for the FormationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding>\n\n  <div class="prima-linea">\n\n    <ion-grid class="full-height grid">\n\n      <ion-row justify-content-center align-items-center class="full-height">\n\n        <ion-col col-4 *ngFor="let player of firstLinePlayers">\n\n            <player [name]="player?.name" [number]="player?.number"></player>\n\n        </ion-col>        \n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div class="seconda-linea">\n\n    <ion-grid class="full-height grid">\n\n      <ion-row justify-content-center align-items-center class="full-height">\n\n        <ion-col col-4 *ngFor="let player of secondLinePlayers">\n\n          <player [name]="player?.name" [number]="player?.number"></player>\n\n        </ion-col>        \n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\formation\formation.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object])
    ], FormationPage);
    return FormationPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=formation.js.map

/***/ })

});
//# sourceMappingURL=4.js.map