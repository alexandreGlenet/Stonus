function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79], {
  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js ***!
    \*****************************************************************************/

  /*! exports provided: pwa_camera_modal */

  /***/
  function node_modulesIonicPwaElementsDistEsmPwaCameraModalEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pwa_camera_modal", function () {
      return PWACameraModal;
    });
    /* harmony import */


    var _core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-8e8be6a7.js */
    "./node_modules/@ionic/pwa-elements/dist/esm/core-8e8be6a7.js");

    var PWACameraModal = /*#__PURE__*/function () {
      function PWACameraModal(hostRef) {
        _classCallCheck(this, PWACameraModal);

        Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.onPhoto = Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "onPhoto", 7);
      }

      _createClass(PWACameraModal, [{
        key: "present",
        value: function () {
          var _present = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var camera;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    camera = document.createElement('pwa-camera-modal-instance');
                    camera.addEventListener('onPhoto', /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                        var photo;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (_this._modal) {
                                  _context.next = 2;
                                  break;
                                }

                                return _context.abrupt("return");

                              case 2:
                                photo = e.detail;

                                _this.onPhoto.emit(photo);

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));

                      return function (_x) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                    document.body.append(camera);
                    this._modal = camera;

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function present() {
            return _present.apply(this, arguments);
          }

          return present;
        }()
      }, {
        key: "dismiss",
        value: function () {
          var _dismiss = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this._modal) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    this._modal && this._modal.parentNode.removeChild(this._modal);
                    this._modal = null;

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function dismiss() {
            return _dismiss.apply(this, arguments);
          }

          return dismiss;
        }()
      }, {
        key: "render",
        value: function render() {
          return Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}";
        }
      }]);

      return PWACameraModal;
    }();
    /***/

  }
}]);
//# sourceMappingURL=79-es5.js.map