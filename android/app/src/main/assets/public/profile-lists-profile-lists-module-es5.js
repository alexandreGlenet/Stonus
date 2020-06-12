function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-lists-profile-lists-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile-lists/profile-lists.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile-lists/profile-lists.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsProfileProfileListsProfileListsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Profile-lists</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let user of users\">\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"user.username\"></ion-card-title>\n      <ion-card-subtitle>{{ user.nom  }}</ion-card-subtitle>\n      <ion-label>\n        latitude : {{ user.prenom }}\n      </ion-label>\n    </ion-card-header>\n    <ion-card-content>\n      <img [src]=\"user.photo\" *ngIf=\"user.photo\" class=\"post-img\">\n      <!-- <div [innerHTML]=\"stone.excerpt.rendered\"></div> -->\n      <!-- <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/', 'tabs','stone','stones', user.id]\" text-right>Read\n        More...</ion-button> -->\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/profile/profile-lists/profile-lists-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/tabs/profile/profile-lists/profile-lists-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ProfileListsPageRoutingModule */

  /***/
  function srcAppTabsProfileProfileListsProfileListsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileListsPageRoutingModule", function () {
      return ProfileListsPageRoutingModule;
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


    var _profile_lists_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-lists.page */
    "./src/app/tabs/profile/profile-lists/profile-lists.page.ts");

    var routes = [{
      path: '',
      component: _profile_lists_page__WEBPACK_IMPORTED_MODULE_3__["ProfileListsPage"]
    }];

    var ProfileListsPageRoutingModule = function ProfileListsPageRoutingModule() {
      _classCallCheck(this, ProfileListsPageRoutingModule);
    };

    ProfileListsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileListsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/profile/profile-lists/profile-lists.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/tabs/profile/profile-lists/profile-lists.module.ts ***!
    \********************************************************************/

  /*! exports provided: ProfileListsPageModule */

  /***/
  function srcAppTabsProfileProfileListsProfileListsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileListsPageModule", function () {
      return ProfileListsPageModule;
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


    var _profile_lists_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-lists-routing.module */
    "./src/app/tabs/profile/profile-lists/profile-lists-routing.module.ts");
    /* harmony import */


    var _profile_lists_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-lists.page */
    "./src/app/tabs/profile/profile-lists/profile-lists.page.ts");

    var ProfileListsPageModule = function ProfileListsPageModule() {
      _classCallCheck(this, ProfileListsPageModule);
    };

    ProfileListsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_lists_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileListsPageRoutingModule"]],
      declarations: [_profile_lists_page__WEBPACK_IMPORTED_MODULE_6__["ProfileListsPage"]]
    })], ProfileListsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/profile/profile-lists/profile-lists.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/tabs/profile/profile-lists/profile-lists.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsProfileProfileListsProfileListsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvcHJvZmlsZS9wcm9maWxlLWxpc3RzL3Byb2ZpbGUtbGlzdHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tabs/profile/profile-lists/profile-lists.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/tabs/profile/profile-lists/profile-lists.page.ts ***!
    \******************************************************************/

  /*! exports provided: ProfileListsPage */

  /***/
  function srcAppTabsProfileProfileListsProfileListsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileListsPage", function () {
      return ProfileListsPage;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ProfileListsPage = /*#__PURE__*/function () {
      function ProfileListsPage(api, loadingCtrl) {
        _classCallCheck(this, ProfileListsPage);

        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.page = 1;
        this.users = [];
        this.totalPages = 0;
        this.totalUsers = 0;
      }

      _createClass(ProfileListsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUsers();
        }
      }, {
        key: "loadUsers",
        value: function loadUsers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({//message: "Loading Users",
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    this.api.getUsers(this.page).subscribe(function (res) {
                      console.log("res: ", res);
                      _this.users = res.users;
                      _this.totalPages = res.totalPages;
                      _this.totalUsers = res.totalUsers;
                    }, function (err) {
                      console.log("errors :", err);
                    }, function () {
                      loading.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ProfileListsPage;
    }();

    ProfileListsPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    ProfileListsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-lists.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile-lists/profile-lists.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-lists.page.scss */
      "./src/app/tabs/profile/profile-lists/profile-lists.page.scss"))["default"]]
    })], ProfileListsPage);
    /***/
  }
}]);
//# sourceMappingURL=profile-lists-profile-lists-module-es5.js.map