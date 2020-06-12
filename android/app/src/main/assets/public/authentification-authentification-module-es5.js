function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentification-authentification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthentificationAuthentificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>authentification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onLogin()\">\n    <ion-item>\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input formControlName=\"username\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n\n\n\n    <ion-button expand=\"full\" [disabled]=\"!userForm.valid\" type=\"submit\">Sign in</ion-button>\n    <ion-button expand=\"full\" [disabled]=\"!userForm.valid\" type=\"button\" color=\"secondary\" (click)=\"signUp()\">Register\n    </ion-button>\n    <ion-button expand=\"full\" type=\"button\" color=\"tertiary\" (click)=\"openPwReset()\">Forgot password?</ion-button>\n\n\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/authentification/authentification-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/authentification/authentification-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AuthentificationPageRoutingModule */

  /***/
  function srcAppAuthentificationAuthentificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationPageRoutingModule", function () {
      return AuthentificationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _authentification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentification.page */
    "./src/app/authentification/authentification.page.ts");

    var routes = [{
      path: '',
      component: _authentification_page__WEBPACK_IMPORTED_MODULE_3__["AuthentificationPage"]
    }];

    var AuthentificationPageRoutingModule = function AuthentificationPageRoutingModule() {
      _classCallCheck(this, AuthentificationPageRoutingModule);
    };

    AuthentificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthentificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/authentification/authentification.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/authentification/authentification.module.ts ***!
    \*************************************************************/

  /*! exports provided: AuthentificationPageModule */

  /***/
  function srcAppAuthentificationAuthentificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationPageModule", function () {
      return AuthentificationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _authentification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authentification-routing.module */
    "./src/app/authentification/authentification-routing.module.ts");
    /* harmony import */


    var _authentification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./authentification.page */
    "./src/app/authentification/authentification.page.ts");

    var AuthentificationPageModule = function AuthentificationPageModule() {
      _classCallCheck(this, AuthentificationPageModule);
    };

    AuthentificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _authentification_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthentificationPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_authentification_page__WEBPACK_IMPORTED_MODULE_6__["AuthentificationPage"]]
    })], AuthentificationPageModule);
    /***/
  },

  /***/
  "./src/app/authentification/authentification.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/authentification/authentification.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthentificationAuthentificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vYXV0aGVudGlmaWNhdGlvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/authentification/authentification.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/authentification/authentification.page.ts ***!
    \***********************************************************/

  /*! exports provided: AuthentificationPage */

  /***/
  function srcAppAuthentificationAuthentificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationPage", function () {
      return AuthentificationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthentificationPage = /*#__PURE__*/function () {
      function AuthentificationPage(api, fb, alertCtrl, toastCtrl, router) {
        _classCallCheck(this, AuthentificationPage);

        this.api = api;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
      }

      _createClass(AuthentificationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: "",
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this = this;

          this.api.login(this.userForm.value.username, this.userForm.value.password).subscribe(function (res) {
            console.log("login finished");

            _this.api.ActivateUserIsAuthenticated();

            console.log(_this.api.userIsAuthenticated);

            _this.router.navigateByUrl("/tabs/stone");
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: err.error.code,
                        subHeader: err.error.data.status,
                        message: err.error.message,
                        buttons: ["OK"]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      console.log(this.api.userIsAuthenticated);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }); //console.log(this.api.userIsAuthenticated);
        }
      }, {
        key: "signUp",
        value: function signUp() {
          var _this2 = this;

          this.api.signUp(this.userForm.value.username, this.userForm.value.email, this.userForm.value.password).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastCtrl.create({
                        message: res["message"],
                        duration: 3000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (err) {
            _this2.showError(err);
          });
        }
      }, {
        key: "openPwReset",
        value: function openPwReset() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: "Forgot password?",
                      message: "Enter your email or username to retrieve a new password",
                      inputs: [{
                        type: "text",
                        name: "usernameOrEmail"
                      }],
                      buttons: [{
                        role: "cancel",
                        text: "Back"
                      }, {
                        text: "Reset Password",
                        handler: function handler(data) {
                          _this3.resetPw(data["usernameOrEmail"]);
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "resetPw",
        value: function resetPw(usernameOrEmail) {
          var _this4 = this;

          this.api.resetPassword(usernameOrEmail).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastCtrl.create({
                        message: res["message"],
                        duration: 2000
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }, function (err) {
            _this4.showError(err);
          });
        }
      }, {
        key: "showError",
        value: function showError(err) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: err.error.code,
                      subHeader: err.error.data.status,
                      message: err.error.message,
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return AuthentificationPage;
    }();

    AuthentificationPage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthentificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-authentification",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./authentification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./authentification.page.scss */
      "./src/app/authentification/authentification.page.scss"))["default"]]
    })], AuthentificationPage);
    /***/
  }
}]);
//# sourceMappingURL=authentification-authentification-module-es5.js.map