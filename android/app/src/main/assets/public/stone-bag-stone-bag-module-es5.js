function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stone-bag-stone-bag-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone-bag/stone-bag.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone-bag/stone-bag.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsStoneBagStoneBagPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Mon sac de pierres</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"flex\">\n      <div *ngFor=\"let stone of user?.user_stone\">\n        <div>\n          <ion-col size=\"6\">\n            <!-- <ion-list> -->\n            <!-- <div class=\"header\">\n              <h2>{{ stone.title }}</h2>\n            </div> -->\n            <div class=\"border-color\">\n              <div class=\"border-white\">\n                <ion-avatar>\n                  <img [src]=\"stone.photo.sizes['medium']\" [style.width]=\"'100%'\" *ngIf=\"stone.photo.sizes.medium\">\n                </ion-avatar>\n              </div>\n            </div>\n            <!-- </ion-list> -->\n          </ion-col>\n        </div>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/stone-bag/stone-bag-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/tabs/stone-bag/stone-bag-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: StoneBagPageRoutingModule */

  /***/
  function srcAppTabsStoneBagStoneBagRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoneBagPageRoutingModule", function () {
      return StoneBagPageRoutingModule;
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


    var _stone_bag_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stone-bag.page */
    "./src/app/tabs/stone-bag/stone-bag.page.ts");

    var routes = [{
      path: '',
      component: _stone_bag_page__WEBPACK_IMPORTED_MODULE_3__["StoneBagPage"]
    }];

    var StoneBagPageRoutingModule = function StoneBagPageRoutingModule() {
      _classCallCheck(this, StoneBagPageRoutingModule);
    };

    StoneBagPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StoneBagPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/stone-bag/stone-bag.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/tabs/stone-bag/stone-bag.module.ts ***!
    \****************************************************/

  /*! exports provided: StoneBagPageModule */

  /***/
  function srcAppTabsStoneBagStoneBagModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoneBagPageModule", function () {
      return StoneBagPageModule;
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


    var _stone_bag_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stone-bag-routing.module */
    "./src/app/tabs/stone-bag/stone-bag-routing.module.ts");
    /* harmony import */


    var _stone_bag_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./stone-bag.page */
    "./src/app/tabs/stone-bag/stone-bag.page.ts");

    var StoneBagPageModule = function StoneBagPageModule() {
      _classCallCheck(this, StoneBagPageModule);
    };

    StoneBagPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stone_bag_routing_module__WEBPACK_IMPORTED_MODULE_5__["StoneBagPageRoutingModule"]],
      declarations: [_stone_bag_page__WEBPACK_IMPORTED_MODULE_6__["StoneBagPage"]]
    })], StoneBagPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/stone-bag/stone-bag.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/tabs/stone-bag/stone-bag.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsStoneBagStoneBagPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  background-color: var(--ion-color-primary-shade);\n  height: 12rem;\n  padding-top: 1px;\n}\n\n.header h2 {\n  color: white;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 3rem;\n}\n\n.border-white {\n  border: 4px solid white;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-color {\n  border: 7px solid var(--ion-color-primary);\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-evenly;\n}\n\nion-avatar {\n  height: 6rem;\n  width: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zdG9uZS1iYWcvRDpcXE1BTVBcXGh0ZG9jc1xcZ2l0a3Jha2VuXFxTdG9udXMvc3JjXFxhcHBcXHRhYnNcXHN0b25lLWJhZ1xcc3RvbmUtYmFnLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy9zdG9uZS1iYWcvc3RvbmUtYmFnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC90YWJzL3N0b25lLWJhZy9zdG9uZS1iYWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuLmhlYWRlciBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuXHJcbn1cclxuXHJcbi5ib3JkZXItd2hpdGUge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItY29sb3Ige1xyXG4gICAgYm9yZGVyOiA3cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAvL21hcmdpbi10b3A6IC02cmVtO1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIC8vd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbn0iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICBoZWlnaHQ6IDEycmVtO1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4uaGVhZGVyIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbi5ib3JkZXItd2hpdGUge1xuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5ib3JkZXItY29sb3Ige1xuICBib3JkZXI6IDdweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiA2cmVtO1xuICB3aWR0aDogNnJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/stone-bag/stone-bag.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/tabs/stone-bag/stone-bag.page.ts ***!
    \**************************************************/

  /*! exports provided: StoneBagPage */

  /***/
  function srcAppTabsStoneBagStoneBagPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoneBagPage", function () {
      return StoneBagPage;
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
    /* harmony import */


    var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet/dist/images/marker-shadow.png */
    "./node_modules/leaflet/dist/images/marker-shadow.png");
    /* harmony import */


    var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! leaflet/dist/images/marker-icon-2x.png */
    "./node_modules/leaflet/dist/images/marker-icon-2x.png"); //import { antPath } from "leaflet-ant-path";


    var StoneBagPage = /*#__PURE__*/function () {
      function StoneBagPage(api, loadingCtrl) {
        _classCallCheck(this, StoneBagPage);

        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.user = null;
      }

      _createClass(StoneBagPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var id = this.api.getUserId();
          this.api.getUserContent(id).subscribe(function (res) {
            console.log("user: ", res);
            _this.user = res;

            if (_this.user.photo == null) {
              _this.user.photo = "../assets/img/no-image.png";
            } else {//this.user.photo = this.user.photo.sizes.medium;
            }
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {//console.log("willEnter");
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {//console.log("didEnter");
          //console.log(this.map);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {//console.log("willleave");
          //console.log(this.map);
        }
      }]);

      return StoneBagPage;
    }();

    StoneBagPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    StoneBagPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-stone-bag",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./stone-bag.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone-bag/stone-bag.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./stone-bag.page.scss */
      "./src/app/tabs/stone-bag/stone-bag.page.scss"))["default"]]
    })], StoneBagPage);
    /***/
  }
}]);
//# sourceMappingURL=stone-bag-stone-bag-module-es5.js.map