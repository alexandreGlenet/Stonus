(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/stone/stone-lists\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>Mon profil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\">\n\n  <div *ngIf=\"user\">\n    <!-- <div [innerHTML]=\"user.photo\"></div> -->\n    <div class=\"header\">\n      <h2>{{ user.fullname }}</h2>\n    </div>\n    <div class=\"flex\">\n      <div class=\"border-color\">\n        <div class=\"border-white\">\n          <ion-avatar>\n            <img [src]=\"user.photo\" [style.width]=\"'100%'\" *ngIf=\"user.photo\">\n          </ion-avatar>\n        </div>\n      </div>\n    </div>\n\n\n\n\n    <!-- <div [innerHTML]=\"user.nom\"></div> -->\n    <ion-list>\n      <ion-list-header>\n\n      </ion-list-header>\n      <ion-label>\n        <p>Prénom : {{ user.prenom }}</p>\n      </ion-label>\n      <ion-label>\n        <p>Nom : {{ user.nom }}</p>\n      </ion-label>\n      <ion-label>\n        <p>Login : {{ user.userlogin }}</p>\n      </ion-label>\n      <ion-label>\n        <p>E-mail : {{ user.email }}</p>\n      </ion-label>\n      <ion-label>\n        <p>Date de création : {{ user.created_at }}</p>\n      </ion-label>\n\n      <!-- <ion-label>\n        <p>Bag : {{ user.user_stone }}</p>\n      </ion-label> -->\n    </ion-list>\n\n  </div>\n  <ion-card *ngFor=\"let stone of user?.user_stone\">\n    <p>Bag : {{ stone.title }}</p>\n  </ion-card>\n\n  <!-- <ion-item>\n    <ion-label position=\"floating\">My comment</ion-label>\n    <ion-textarea rows=\"5\" [(ngModel)]=\"newComment\"></ion-textarea>\n  </ion-item>\n  <ion-button expand=\"full\" (click)=\"addComment()\" [disabled]=\"newComment == ''\">Add comment</ion-button> -->\n\n  <!-- <ion-list>\n    <ion-list-header>\n      <ion-label>Comments</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let com of comments\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"com.author_avatar_urls['96']\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ com.author_name }}</h2>\n        <p [innerHTML]=\"com.content.rendered\"></p>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n</ion-content>\n\n<ion-footer>\n  <!-- <ion-toolbar color=\"primary\"> -->\n  <!-- <ion-button color=\"light\" expand=\"full\" fill=\"clear\" (click)=\"sharePost()\">\n      <ion-icon name=\"share\" slot=\"start\"></ion-icon> Share\n    </ion-button> -->\n  <!-- </ion-toolbar> -->\n</ion-footer>");

/***/ }),

/***/ "./src/app/tabs/profile/profile-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tabs/profile/profile-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/tabs/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    },
    {
        path: 'profile-lists',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-lists-profile-lists-module */ "profile-lists-profile-lists-module").then(__webpack_require__.bind(null, /*! ./profile-lists/profile-lists.module */ "./src/app/tabs/profile/profile-lists/profile-lists.module.ts")).then(m => m.ProfileListsPageModule)
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/tabs/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/tabs/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/tabs/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/tabs/profile/profile.page.scss":
/*!************************************************!*\
  !*** ./src/app/tabs/profile/profile.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar {\n  height: 12rem;\n  width: 12rem;\n}\n\n.header {\n  background-color: var(--ion-color-primary-shade);\n  height: 12rem;\n  padding-top: 1px;\n}\n\n.header h2 {\n  color: white;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 3rem;\n}\n\n.border-white {\n  border: 4px solid white;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-color {\n  border: 7px solid var(--ion-color-primary);\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n  margin-top: -6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9wcm9maWxlL0Q6XFxNQU1QXFxodGRvY3NcXGdpdGtyYWtlblxcU3RvbnVzL3NyY1xcYXBwXFx0YWJzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdGFicy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcclxuICAgIGhlaWdodDogMTJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG5cclxufVxyXG5cclxuLmJvcmRlci13aGl0ZSB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmJvcmRlci1jb2xvciB7XHJcbiAgICBib3JkZXI6IDdweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC02cmVtO1xyXG59IiwiaW9uLWF2YXRhciB7XG4gIGhlaWdodDogMTJyZW07XG4gIHdpZHRoOiAxMnJlbTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgaGVpZ2h0OiAxMnJlbTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLmhlYWRlciBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG4uYm9yZGVyLXdoaXRlIHtcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uYm9yZGVyLWNvbG9yIHtcbiAgYm9yZGVyOiA3cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTZyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/tabs/profile/profile.page.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");
/* harmony import */ var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



//import { antPath } from "leaflet-ant-path";





const { Share } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let ProfilePage = class ProfilePage {
    constructor(route, api, alertCtrl) {
        this.route = route;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.user = null;
        this.currentUser = this.api.getUserValue();
        this.currentUserId = this.api.getUserId();
    }
    ngOnInit() {
        // let id = this.route.snapshot.paramMap.get("id");
        // this.api.getUserContent(id).subscribe((res) => {
        // 	console.log("user: ", res);
        // 	this.user = res;
        // });
        // if (this.api.getCurrentUser() && this.api.getUserToken()) {
        // 	this.api.getCurrentUser;
        // }
        let id = this.api.getUserId();
        this.api.getUserContent(id).subscribe((res) => {
            console.log("user: ", res);
            this.user = res;
            if (this.user.photo == null) {
                this.user.photo = "../assets/img/no-image.png";
            }
            else {
                //this.user.photo = this.user.photo.sizes.medium;
            }
        });
    }
    ionViewDidEnter() {
        console.log("didEnter-profile.page");
    }
    ionViewWillLeave() {
        console.log("willleave-profile.page");
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-stone-details",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/tabs/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map