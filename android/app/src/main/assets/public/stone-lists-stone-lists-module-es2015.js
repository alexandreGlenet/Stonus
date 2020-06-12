(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stone-lists-stone-lists-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone/stone-lists/stone-lists.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone/stone-lists/stone-lists.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Stones-List</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openFilter($event)\">\n        <ion-icon [name]=\"categoryFilter ? 'pricetag' : 'pricetag-outline'\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment value=\"\" (ionChange)=\"onFilterUpdate($event)\">\n    <ion-segment-button value=\"map\" routerLink=\"/tabs/stone\">Stones's map</ion-segment-button>\n    <ion-segment-button value=\"stones-list\" routerLink=\"/tabs/stone/stone-lists\">Stones's list</ion-segment-button>\n  </ion-segment>\n  <!-- <ion-searchbar (ionChange)=\"searchChanged($event)\" debounce=\"400\" [(ngModel)]=\"searchTerm\"></ion-searchbar> -->\n\n  <div>\n    <div *ngIf=\"totalStones > 0\" class=\"ion-text-center ion-padding\">\n      Found {{ totalStones }}\n    </div>\n\n    <ion-card *ngFor=\"let stone of stones\">\n      <ion-card-header>\n        <ion-card-title [innerHTML]=\"stone.title\"></ion-card-title>\n        <ion-card-subtitle>{{ stone.created_at  }}</ion-card-subtitle>\n        <ion-label>\n          latitude : {{ stone.latitude }}\n        </ion-label>\n      </ion-card-header>\n      <ion-card-content>\n        <img [src]=\"stone.photo\" *ngIf=\"stone.photo\" class=\"post-img\">\n        <!-- <div [innerHTML]=\"stone.excerpt.rendered\"></div> -->\n        <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/', 'tabs','stone','stones', stone.id]\" text-right>Read\n          More...</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n  <!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content loadingText=\"Loading more posts...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs/stone/stone-lists/stone-lists-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/tabs/stone/stone-lists/stone-lists-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: StoneListsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoneListsPageRoutingModule", function() { return StoneListsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stone_lists_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stone-lists.page */ "./src/app/tabs/stone/stone-lists/stone-lists.page.ts");




const routes = [
    {
        path: '',
        component: _stone_lists_page__WEBPACK_IMPORTED_MODULE_3__["StoneListsPage"]
    }
];
let StoneListsPageRoutingModule = class StoneListsPageRoutingModule {
};
StoneListsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StoneListsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/stone/stone-lists/stone-lists.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/tabs/stone/stone-lists/stone-lists.module.ts ***!
  \**************************************************************/
/*! exports provided: StoneListsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoneListsPageModule", function() { return StoneListsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _stone_lists_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stone-lists-routing.module */ "./src/app/tabs/stone/stone-lists/stone-lists-routing.module.ts");
/* harmony import */ var _stone_lists_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stone-lists.page */ "./src/app/tabs/stone/stone-lists/stone-lists.page.ts");







let StoneListsPageModule = class StoneListsPageModule {
};
StoneListsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stone_lists_routing_module__WEBPACK_IMPORTED_MODULE_5__["StoneListsPageRoutingModule"],
        ],
        declarations: [_stone_lists_page__WEBPACK_IMPORTED_MODULE_6__["StoneListsPage"]],
    })
], StoneListsPageModule);



/***/ }),

/***/ "./src/app/tabs/stone/stone-lists/stone-lists.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/tabs/stone/stone-lists/stone-lists.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zdG9uZS9zdG9uZS1saXN0cy9EOlxcTUFNUFxcaHRkb2NzXFxnaXRrcmFrZW5cXFN0b251cy9zcmNcXGFwcFxcdGFic1xcc3RvbmVcXHN0b25lLWxpc3RzXFxzdG9uZS1saXN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvc3RvbmUvc3RvbmUtbGlzdHMvc3RvbmUtbGlzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWJzL3N0b25lL3N0b25lLWxpc3RzL3N0b25lLWxpc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufSIsIi5wb3N0LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/stone/stone-lists/stone-lists.page.ts":
/*!************************************************************!*\
  !*** ./src/app/tabs/stone/stone-lists/stone-lists.page.ts ***!
  \************************************************************/
/*! exports provided: StoneListsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoneListsPage", function() { return StoneListsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let StoneListsPage = class StoneListsPage {
    constructor(api, loadingCtrl) {
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.page = 1;
        this.stones = [];
        this.totalPages = 0;
        this.totalStones = 0;
    }
    ngOnInit() {
        this.loadStones();
    }
    loadStones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: "Loading Stones",
            });
            yield loading.present();
            this.api.getStones(this.page).subscribe((res) => {
                console.log("res: ", res);
                this.stones = res.stones;
                this.totalPages = res.totalPages;
                this.totalStones = res.totalStones;
            }, (err) => {
                console.log("errors :", err);
            }, () => {
                loading.dismiss();
            });
        });
    }
    onFilterUpdate(event) {
        // if (event.detail.value === "map") {
        // 	event.detail.value = "stones-list";
        // } else {
        // 	event.detail.value = "map";
        // }
    }
};
StoneListsPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
StoneListsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-stone-lists",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stone-lists.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone/stone-lists/stone-lists.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stone-lists.page.scss */ "./src/app/tabs/stone/stone-lists/stone-lists.page.scss")).default]
    })
], StoneListsPage);



/***/ })

}]);
//# sourceMappingURL=stone-lists-stone-lists-module-es2015.js.map