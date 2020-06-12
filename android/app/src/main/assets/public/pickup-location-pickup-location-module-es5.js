function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pickup-location-pickup-location-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone/pickup-location/pickup-location.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone/pickup-location/pickup-location.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsStonePickupLocationPickupLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" slot=\"start\" (click)=\"goBack()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n    <ion-title>Pickup Location</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id=\"mapId\" style=\"height: 200px\"> </div>\n  <ion-item style=\"cursor: pointer\" (click)=\"locatePosition()\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"map\"></ion-icon>\n      Locate Position\n    </ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n    <ion-label position=\"stacked\">Address</ion-label>\n    <ion-textarea [(ngModel)]=\"address\" type=\"text\" style=\"margin-top:20px;\"></ion-textarea>\n  </ion-item>\n  <ion-button shape=\"round\" expand=\"block\">Confirm Pickup Location</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/stone/pickup-location/pickup-location-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/tabs/stone/pickup-location/pickup-location-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: PickupLocationPageRoutingModule */

  /***/
  function srcAppTabsStonePickupLocationPickupLocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickupLocationPageRoutingModule", function () {
      return PickupLocationPageRoutingModule;
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


    var _pickup_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pickup-location.page */
    "./src/app/tabs/stone/pickup-location/pickup-location.page.ts");

    var routes = [{
      path: '',
      component: _pickup_location_page__WEBPACK_IMPORTED_MODULE_3__["PickupLocationPage"]
    }];

    var PickupLocationPageRoutingModule = function PickupLocationPageRoutingModule() {
      _classCallCheck(this, PickupLocationPageRoutingModule);
    };

    PickupLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PickupLocationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/stone/pickup-location/pickup-location.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/tabs/stone/pickup-location/pickup-location.module.ts ***!
    \**********************************************************************/

  /*! exports provided: PickupLocationPageModule */

  /***/
  function srcAppTabsStonePickupLocationPickupLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickupLocationPageModule", function () {
      return PickupLocationPageModule;
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


    var _pickup_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pickup-location-routing.module */
    "./src/app/tabs/stone/pickup-location/pickup-location-routing.module.ts");
    /* harmony import */


    var _pickup_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pickup-location.page */
    "./src/app/tabs/stone/pickup-location/pickup-location.page.ts");

    var PickupLocationPageModule = function PickupLocationPageModule() {
      _classCallCheck(this, PickupLocationPageModule);
    };

    PickupLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pickup_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["PickupLocationPageRoutingModule"]],
      declarations: [_pickup_location_page__WEBPACK_IMPORTED_MODULE_6__["PickupLocationPage"]]
    })], PickupLocationPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/stone/pickup-location/pickup-location.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/tabs/stone/pickup-location/pickup-location.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsStonePickupLocationPickupLocationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc3RvbmUvcGlja3VwLWxvY2F0aW9uL3BpY2t1cC1sb2NhdGlvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/stone/pickup-location/pickup-location.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/tabs/stone/pickup-location/pickup-location.page.ts ***!
    \********************************************************************/

  /*! exports provided: PickupLocationPage */

  /***/
  function srcAppTabsStonePickupLocationPickupLocationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickupLocationPage", function () {
      return PickupLocationPage;
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


    var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PickupLocationPage = /*#__PURE__*/function () {
      function PickupLocationPage(router) {
        _classCallCheck(this, PickupLocationPage);

        this.router = router;
      } // The below function is added


      _createClass(PickupLocationPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.loadMap();
        } // The below function is added

      }, {
        key: "loadMap",
        value: function loadMap() {
          this.map = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"]("mapId").setView([17.385, 78.4867], 13);
          Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>'
          }).addTo(this.map); // This line is added to add the Tile Layer to our map
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(["home"]);
        }
      }, {
        key: "locatePosition",
        value: function locatePosition() {
          var _this = this;

          this.map.locate({
            setView: true
          }).on("locationfound", function (e) {
            _this.newMarker = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([e.latitude, e.longitude], {
              draggable: true
            }).addTo(_this.map);

            _this.newMarker.bindPopup("You are located here!").openPopup();

            _this.newMarker.on("dragend", function () {
              var position = _this.newMarker.getLatLng();
            });
          });
        }
      }]);

      return PickupLocationPage;
    }();

    PickupLocationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PickupLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-pickup-location",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pickup-location.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/stone/pickup-location/pickup-location.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pickup-location.page.scss */
      "./src/app/tabs/stone/pickup-location/pickup-location.page.scss"))["default"]]
    })], PickupLocationPage);
    /***/
  }
}]);
//# sourceMappingURL=pickup-location-pickup-location-module-es5.js.map