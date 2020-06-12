(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentification-authentification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>authentification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onLogin()\">\n    <ion-item>\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input formControlName=\"username\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n\n\n\n    <ion-button expand=\"full\" [disabled]=\"!userForm.valid\" type=\"submit\">Sign in</ion-button>\n    <ion-button expand=\"full\" [disabled]=\"!userForm.valid\" type=\"button\" color=\"secondary\" (click)=\"signUp()\">Register\n    </ion-button>\n    <ion-button expand=\"full\" type=\"button\" color=\"tertiary\" (click)=\"openPwReset()\">Forgot password?</ion-button>\n\n\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/authentification/authentification-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/authentification/authentification-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AuthentificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationPageRoutingModule", function() { return AuthentificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentification.page */ "./src/app/authentification/authentification.page.ts");




const routes = [
    {
        path: '',
        component: _authentification_page__WEBPACK_IMPORTED_MODULE_3__["AuthentificationPage"]
    }
];
let AuthentificationPageRoutingModule = class AuthentificationPageRoutingModule {
};
AuthentificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthentificationPageRoutingModule);



/***/ }),

/***/ "./src/app/authentification/authentification.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentification/authentification.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthentificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationPageModule", function() { return AuthentificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authentification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentification-routing.module */ "./src/app/authentification/authentification-routing.module.ts");
/* harmony import */ var _authentification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentification.page */ "./src/app/authentification/authentification.page.ts");







let AuthentificationPageModule = class AuthentificationPageModule {
};
AuthentificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _authentification_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthentificationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_authentification_page__WEBPACK_IMPORTED_MODULE_6__["AuthentificationPage"]],
    })
], AuthentificationPageModule);



/***/ }),

/***/ "./src/app/authentification/authentification.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/authentification/authentification.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vYXV0aGVudGlmaWNhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/authentification/authentification.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentification/authentification.page.ts ***!
  \***********************************************************/
/*! exports provided: AuthentificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationPage", function() { return AuthentificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let AuthentificationPage = class AuthentificationPage {
    constructor(api, fb, alertCtrl, toastCtrl, router) {
        this.api = api;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: "",
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    onLogin() {
        this.api
            .login(this.userForm.value.username, this.userForm.value.password)
            .subscribe((res) => {
            console.log("login finished");
            this.api.ActivateUserIsAuthenticated();
            console.log(this.api.userIsAuthenticated);
            this.router.navigateByUrl("/tabs/stone");
        }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: err.error.code,
                subHeader: err.error.data.status,
                message: err.error.message,
                buttons: ["OK"],
            });
            yield alert.present();
            console.log(this.api.userIsAuthenticated);
        }));
        //console.log(this.api.userIsAuthenticated);
    }
    signUp() {
        this.api
            .signUp(this.userForm.value.username, this.userForm.value.email, this.userForm.value.password)
            .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: res["message"],
                duration: 3000,
            });
            toast.present();
        }), (err) => {
            this.showError(err);
        });
    }
    openPwReset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Forgot password?",
                message: "Enter your email or username to retrieve a new password",
                inputs: [
                    {
                        type: "text",
                        name: "usernameOrEmail",
                    },
                ],
                buttons: [
                    {
                        role: "cancel",
                        text: "Back",
                    },
                    {
                        text: "Reset Password",
                        handler: (data) => {
                            this.resetPw(data["usernameOrEmail"]);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    resetPw(usernameOrEmail) {
        this.api.resetPassword(usernameOrEmail).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: res["message"],
                duration: 2000,
            });
            toast.present();
        }), (err) => {
            this.showError(err);
        });
    }
    showError(err) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: err.error.code,
                subHeader: err.error.data.status,
                message: err.error.message,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
};
AuthentificationPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthentificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-authentification",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./authentification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./authentification.page.scss */ "./src/app/authentification/authentification.page.scss")).default]
    })
], AuthentificationPage);



/***/ })

}]);
//# sourceMappingURL=authentification-authentification-module-es2015.js.map