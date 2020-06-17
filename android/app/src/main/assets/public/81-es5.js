function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81], {
  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js ***!
    \**********************************************************************/

  /*! exports provided: pwa_toast */

  /***/
  function node_modulesIonicPwaElementsDistEsmPwaToastEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pwa_toast", function () {
      return PWAToast;
    });
    /* harmony import */


    var _core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-8e8be6a7.js */
    "./node_modules/@ionic/pwa-elements/dist/esm/core-8e8be6a7.js");

    var PWAToast = /*#__PURE__*/function () {
      function PWAToast(hostRef) {
        _classCallCheck(this, PWAToast);

        Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.duration = 2000;
        this.closing = null;
      }

      _createClass(PWAToast, [{
        key: "hostData",
        value: function hostData() {
          var classes = {
            out: !!this.closing
          };

          if (this.closing !== null) {
            classes['in'] = !this.closing;
          }

          return {
            "class": classes
          };
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          var _this = this;

          setTimeout(function () {
            _this.closing = false;
          });
          setTimeout(function () {
            _this.close();
          }, this.duration);
        }
      }, {
        key: "close",
        value: function close() {
          var _this2 = this;

          this.closing = true;
          setTimeout(function () {
            _this2.el.parentNode.removeChild(_this2.el);
          }, 1000);
        }
      }, {
        key: "__stencil_render",
        value: function __stencil_render() {
          return Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "wrapper"
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "toast"
          }, this.message));
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render());
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity .3s;transition:opacity .3s;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;background-color:#eee;color:#000;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}";
        }
      }]);

      return PWAToast;
    }();
    /***/

  }
}]);
//# sourceMappingURL=81-es5.js.map