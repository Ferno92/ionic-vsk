webpackJsonp([1],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMatchPageModule", function() { return CreateMatchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_match__ = __webpack_require__(713);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateMatchPageModule = /** @class */ (function () {
    function CreateMatchPageModule() {
    }
    CreateMatchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_match__["a" /* CreateMatchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_match__["a" /* CreateMatchPage */]),
            ],
        })
    ], CreateMatchPageModule);
    return CreateMatchPageModule;
}());

//# sourceMappingURL=create-match.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_BasePage__ = __webpack_require__(371);
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
 * Generated class for the CreateMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateMatchPage = /** @class */ (function (_super) {
    __extends(CreateMatchPage, _super);
    function CreateMatchPage(navCtrl, navParams, events) {
        var _this = _super.call(this, navCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        return _this;
    }
    CreateMatchPage.prototype.ionViewDidLoad = function () {
        this.onInit();
    };
    CreateMatchPage.prototype.ionViewWillEnter = function () {
        this.events.publish('currentPage', 'create-match');
    };
    CreateMatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-match',template:/*ion-inline-start:"C:\projects\personal\ionic-vsk\src\pages\create-match\create-match.html"*/'<!--\n  Generated template for the CreateMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n      <ion-buttons left *ngIf="!canGoBack">\n          <button ion-button icon-only (click)="goBack()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>Crea Partita</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n\n        <ion-item>\n          <ion-label fixed>Team A</ion-label>\n          <ion-input type="text" value=""></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label fixed>Team B</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n    \n      </ion-list>\n  <!-- <ion-fab class="fab-dashboard" bottom right>\n    <button ion-fab icon-only color="success">\n      <ion-icon md="md-checkmark"></ion-icon>\n    </button>\n  </ion-fab> -->\n</ion-content>'/*ion-inline-end:"C:\projects\personal\ionic-vsk\src\pages\create-match\create-match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], CreateMatchPage);
    return CreateMatchPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_BasePage__["a" /* BasePage */]));

//# sourceMappingURL=create-match.js.map

/***/ })

});
//# sourceMappingURL=1.js.map