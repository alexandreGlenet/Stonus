function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stone-details-stone-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone/stone-details/stone-details.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone/stone-details/stone-details.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsStoneStoneDetailsStoneDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/stone/stone-lists\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ stone?.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div *ngIf=\"stone\">\n    <img [src]=\"stone.photo\" [style.width]=\"'100%'\" *ngIf=\"stone.photo\">\n    <div [innerHTML]=\"stone.nom\"></div>\n    <ion-list>\n      <ion-list-header>\n        <ion-label>\n          Données de la pierre {{ stone.title }}\n        </ion-label>\n      </ion-list-header>\n      <ion-label>\n        <p>latitude : {{ stone.latitude }}</p>\n      </ion-label>\n      <ion-label>\n        <p>latitude : {{ stone.latitude }}</p>\n      </ion-label>\n    </ion-list>\n\n  </div>\n\n  <!-- <ion-item>\n    <ion-label position=\"floating\">My comment</ion-label>\n    <ion-textarea rows=\"5\" [(ngModel)]=\"newComment\"></ion-textarea>\n  </ion-item>\n  <ion-button expand=\"full\" (click)=\"addComment()\" [disabled]=\"newComment == ''\">Add comment</ion-button> -->\n\n  <!-- <ion-list>\n    <ion-list-header>\n      <ion-label>Comments</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let com of comments\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"com.author_avatar_urls['96']\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ com.author_name }}</h2>\n        <p [innerHTML]=\"com.content.rendered\"></p>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n</ion-content>\n\n<ion-footer>\n  <!-- <ion-toolbar color=\"primary\"> -->\n  <!-- <ion-button color=\"light\" expand=\"full\" fill=\"clear\" (click)=\"sharePost()\">\n      <ion-icon name=\"share\" slot=\"start\"></ion-icon> Share\n    </ion-button> -->\n  <!-- </ion-toolbar> -->\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/tabs/stone/stone-details/stone-details-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/tabs/stone/stone-details/stone-details-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: StoneDetailsPageRoutingModule */

  /***/
  function srcAppTabsStoneStoneDetailsStoneDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoneDetailsPageRoutingModule", function () {
      return StoneDetailsPageRoutingModule;
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


    var _stone_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stone-details.page */
    "./src/app/tabs/stone/stone-details/stone-details.page.ts");

    var routes = [{
      path: '',
      component: _stone_details_page__WEBPACK_IMPORTED_MODULE_3__["StoneDetailsPage"]
    }];

    var StoneDetailsPageRoutingModule = function StoneDetailsPageRoutingModule() {
      _classCallCheck(this, StoneDetailsPageRoutingModule);
    };

    StoneDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StoneDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/stone/stone-details/stone-details.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/tabs/stone/stone-details/stone-details.module.ts ***!
    \******************************************************************/

  /*! exports provided: StoneDetailsPageModule */

  /***/
  function srcAppTabsStoneStoneDetailsStoneDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoneDetailsPageModule", function () {
      return StoneDetailsPageModule;
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


    var _stone_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stone-details-routing.module */
    "./src/app/tabs/stone/stone-details/stone-details-routing.module.ts");
    /* harmony import */


    var _stone_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./stone-details.page */
    "./src/app/tabs/stone/stone-details/stone-details.page.ts");

    var StoneDetailsPageModule = function StoneDetailsPageModule() {
      _classCallCheck(this, StoneDetailsPageModule);
    };

    StoneDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stone_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["StoneDetailsPageRoutingModule"]],
      declarations: [_stone_details_page__WEBPACK_IMPORTED_MODULE_6__["StoneDetailsPage"]]
    })], StoneDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/stone/stone-details/stone-details.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/tabs/stone/stone-details/stone-details.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsStoneStoneDetailsStoneDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc3RvbmUvc3RvbmUtZGV0YWlscy9zdG9uZS1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tabs/stone/stone-details/stone-details.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/tabs/stone/stone-details/stone-details.page.ts ***!
    \****************************************************************/

  /*! exports provided: StoneDetailsPage */

  /***/
  function srcAppTabsStoneStoneDetailsStoneDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoneDetailsPage", function () {
      return StoneDetailsPage;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet/dist/images/marker-shadow.png */
    "./node_modules/leaflet/dist/images/marker-shadow.png");
    /* harmony import */


    var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! leaflet/dist/images/marker-icon-2x.png */
    "./node_modules/leaflet/dist/images/marker-icon-2x.png");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); //import { antPath } from "leaflet-ant-path";


    var Share = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Share;

    var StoneDetailsPage = /*#__PURE__*/function () {
      function StoneDetailsPage(route, api, alertCtrl) {
        _classCallCheck(this, StoneDetailsPage);

        this.route = route;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.stone = null;
        this.comments = [];
        this.newComment = ""; //Segment

        this.segmentModel = "map";
      }

      _createClass(StoneDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var id = this.route.snapshot.paramMap.get("id");
          this.api.getStoneContent(id).subscribe(function (res) {
            console.log("stone: ", res);
            _this.stone = res;
          }); // this.api.getComments(id).subscribe(res => {
          //   console.log('comments: ', res);
          //   this.comments = res;
          // });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          console.log("didEnter-stone-detail.page"); //this.map.remove();
          //console.log(this.map);
        } // async sharePost() {
        //   await Share.share({
        //     title: this.post.title.rendered,
        //     text: 'Check out this post!',
        //     url: this.post.link,
        //     dialogTitle: 'Share now'
        //   });
        // }

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          console.log("willleave-stone-detail.page");
        }
      }]);

      return StoneDetailsPage;
    }();

    StoneDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }];
    };

    StoneDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-stone-details",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./stone-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone/stone-details/stone-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./stone-details.page.scss */
      "./src/app/tabs/stone/stone-details/stone-details.page.scss"))["default"]]
    })], StoneDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=stone-details-stone-details-module-es5.js.map