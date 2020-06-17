function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80], {
  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js ***!
    \***********************************************************************/

  /*! exports provided: pwa_camera */

  /***/
  function node_modulesIonicPwaElementsDistEsmPwaCameraEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pwa_camera", function () {
      return CameraPWA;
    });
    /* harmony import */


    var _core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-8e8be6a7.js */
    "./node_modules/@ionic/pwa-elements/dist/esm/core-8e8be6a7.js");
    /**
     * MediaStream ImageCapture polyfill
     *
     * @license
     * Copyright 2018 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var ImageCapture = window.ImageCapture;

    if (typeof ImageCapture === 'undefined') {
      ImageCapture = /*#__PURE__*/function () {
        /**
         * TODO https://www.w3.org/TR/image-capture/#constructors
         *
         * @param {MediaStreamTrack} videoStreamTrack - A MediaStreamTrack of the 'video' kind
         */
        function ImageCapture(videoStreamTrack) {
          var _this = this;

          _classCallCheck(this, ImageCapture);

          if (videoStreamTrack.kind !== 'video') throw new DOMException('NotSupportedError');
          this._videoStreamTrack = videoStreamTrack;

          if (!('readyState' in this._videoStreamTrack)) {
            // Polyfill for Firefox
            this._videoStreamTrack.readyState = 'live';
          } // MediaStream constructor not available until Chrome 55 - https://www.chromestatus.com/feature/5912172546752512


          this._previewStream = new MediaStream([videoStreamTrack]);
          this.videoElement = document.createElement('video');
          this.videoElementPlaying = new Promise(function (resolve) {
            _this.videoElement.addEventListener('playing', resolve);
          });

          if (HTMLMediaElement) {
            this.videoElement.srcObject = this._previewStream; // Safari 11 doesn't allow use of createObjectURL for MediaStream
          } else {
            this.videoElement.src = URL.createObjectURL(this._previewStream);
          }

          this.videoElement.muted = true;
          this.videoElement.setAttribute('playsinline', ''); // Required by Safari on iOS 11. See https://webkit.org/blog/6784

          this.videoElement.play();
          this.canvasElement = document.createElement('canvas'); // TODO Firefox has https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas

          this.canvas2dContext = this.canvasElement.getContext('2d');
        }
        /**
         * https://w3c.github.io/mediacapture-image/index.html#dom-imagecapture-videostreamtrack
         * @return {MediaStreamTrack} The MediaStreamTrack passed into the constructor
         */


        _createClass(ImageCapture, [{
          key: "getPhotoCapabilities",

          /**
           * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-getphotocapabilities
           * @return {Promise<PhotoCapabilities>} Fulfilled promise with
           * [PhotoCapabilities](https://www.w3.org/TR/image-capture/#idl-def-photocapabilities)
           * object on success, rejected promise on failure
           */
          value: function getPhotoCapabilities() {
            return new Promise(function executorGPC(resolve, reject) {
              // TODO see https://github.com/w3c/mediacapture-image/issues/97
              var MediaSettingsRange = {
                current: 0,
                min: 0,
                max: 0
              };
              resolve({
                exposureCompensation: MediaSettingsRange,
                exposureMode: 'none',
                fillLightMode: ['none'],
                focusMode: 'none',
                imageHeight: MediaSettingsRange,
                imageWidth: MediaSettingsRange,
                iso: MediaSettingsRange,
                redEyeReduction: false,
                whiteBalanceMode: 'none',
                zoom: MediaSettingsRange
              });
              reject(new DOMException('OperationError'));
            });
          }
          /**
           * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-setoptions
           * @param {Object} photoSettings - Photo settings dictionary, https://www.w3.org/TR/image-capture/#idl-def-photosettings
           * @return {Promise<void>} Fulfilled promise on success, rejected promise on failure
           */

        }, {
          key: "setOptions",
          value: function setOptions() {
            var _photoSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Promise(function executorSO(_resolve, _reject) {// TODO
            });
          }
          /**
           * TODO
           * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-takephoto
           * @return {Promise<Blob>} Fulfilled promise with [Blob](https://www.w3.org/TR/FileAPI/#blob)
           * argument on success; rejected promise on failure
           */

        }, {
          key: "takePhoto",
          value: function takePhoto() {
            var self = this;
            return new Promise(function executorTP(resolve, reject) {
              // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
              // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
              if (self._videoStreamTrack.readyState !== 'live') {
                return reject(new DOMException('InvalidStateError'));
              }

              self.videoElementPlaying.then(function () {
                try {
                  self.canvasElement.width = self.videoElement.videoWidth;
                  self.canvasElement.height = self.videoElement.videoHeight;
                  self.canvas2dContext.drawImage(self.videoElement, 0, 0);
                  self.canvasElement.toBlob(resolve);
                } catch (error) {
                  reject(new DOMException('UnknownError'));
                }
              });
            });
          }
          /**
           * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-grabframe
           * @return {Promise<ImageBitmap>} Fulfilled promise with
           * [ImageBitmap](https://www.w3.org/TR/html51/webappapis.html#webappapis-images)
           * argument on success; rejected promise on failure
           */

        }, {
          key: "grabFrame",
          value: function grabFrame() {
            var self = this;
            return new Promise(function executorGF(resolve, reject) {
              // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
              // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
              if (self._videoStreamTrack.readyState !== 'live') {
                return reject(new DOMException('InvalidStateError'));
              }

              self.videoElementPlaying.then(function () {
                try {
                  self.canvasElement.width = self.videoElement.videoWidth;
                  self.canvasElement.height = self.videoElement.videoHeight;
                  self.canvas2dContext.drawImage(self.videoElement, 0, 0); // TODO polyfill https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapFactories/createImageBitmap for IE

                  resolve(window.createImageBitmap(self.canvasElement));
                } catch (error) {
                  reject(new DOMException('UnknownError'));
                }
              });
            });
          }
        }, {
          key: "videoStreamTrack",
          get: function get() {
            return this._videoStreamTrack;
          }
        }]);

        return ImageCapture;
      }();
    }

    window.ImageCapture = ImageCapture;

    var CameraPWA = /*#__PURE__*/function () {
      function CameraPWA(hostRef) {
        _classCallCheck(this, CameraPWA);

        Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.facingMode = 'user';
        this.showShutterOverlay = false;
        this.flashIndex = 0; // Whether the device has multiple cameras (front/back)

        this.hasMultipleCameras = false; // Whether the device has flash support

        this.hasFlash = false; // Flash modes for camera

        this.flashModes = []; // Current flash mode

        this.flashMode = 'off';
        this.isServer = Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "isServer");
      }

      _createClass(CameraPWA, [{
        key: "componentDidLoad",
        value: function () {
          var _componentDidLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.isServer) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    this.defaultConstraints = {
                      video: {
                        facingMode: this.facingMode
                      }
                    }; // Figure out how many cameras we have

                    _context.next = 5;
                    return this.queryDevices();

                  case 5:
                    _context.next = 7;
                    return this.initCamera();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function componentDidLoad() {
            return _componentDidLoad.apply(this, arguments);
          }

          return componentDidLoad;
        }()
      }, {
        key: "componentDidUnload",
        value: function componentDidUnload() {
          this.stopStream();
          this.photoSrc && URL.revokeObjectURL(this.photoSrc);
        }
      }, {
        key: "hasImageCapture",
        value: function hasImageCapture() {
          return 'ImageCapture' in window;
        }
        /**
         * Query the list of connected devices and figure out how many video inputs we have.
         */

      }, {
        key: "queryDevices",
        value: function () {
          var _queryDevices = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var devices;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return navigator.mediaDevices.enumerateDevices();

                  case 3:
                    devices = _context2.sent;
                    this.hasMultipleCameras = devices.filter(function (d) {
                      return d.kind == 'videoinput';
                    }).length > 1;
                    _context2.next = 10;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](0);
                    this.onPhoto(_context2.t0);

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 7]]);
          }));

          function queryDevices() {
            return _queryDevices.apply(this, arguments);
          }

          return queryDevices;
        }()
      }, {
        key: "initCamera",
        value: function () {
          var _initCamera = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(constraints) {
            var stream;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!constraints) {
                      constraints = this.defaultConstraints;
                    }

                    _context3.prev = 1;
                    _context3.next = 4;
                    return navigator.mediaDevices.getUserMedia(Object.assign({
                      video: true,
                      audio: false
                    }, constraints));

                  case 4:
                    stream = _context3.sent;
                    this.initStream(stream);
                    _context3.next = 11;
                    break;

                  case 8:
                    _context3.prev = 8;
                    _context3.t0 = _context3["catch"](1);
                    this.onPhoto(_context3.t0);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[1, 8]]);
          }));

          function initCamera(_x) {
            return _initCamera.apply(this, arguments);
          }

          return initCamera;
        }()
      }, {
        key: "initStream",
        value: function () {
          var _initStream = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(stream) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.stream = stream;
                    this.videoElement.srcObject = stream;
                    console.log(stream.getVideoTracks()[0]);

                    if (!this.hasImageCapture()) {
                      _context4.next = 7;
                      break;
                    }

                    this.imageCapture = new window.ImageCapture(stream.getVideoTracks()[0]); // console.log(stream.getTracks()[0].getCapabilities());

                    _context4.next = 7;
                    return this.initPhotoCapabilities(this.imageCapture);

                  case 7:
                    // Always re-render
                    this.el.forceUpdate();

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function initStream(_x2) {
            return _initStream.apply(this, arguments);
          }

          return initStream;
        }()
      }, {
        key: "initPhotoCapabilities",
        value: function () {
          var _initPhotoCapabilities = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(imageCapture) {
            var c;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return imageCapture.getPhotoCapabilities();

                  case 2:
                    c = _context5.sent;

                    if (c.fillLightMode.length > 1) {
                      this.flashModes = c.fillLightMode.map(function (m) {
                        return m;
                      }); // Try to recall the current flash mode

                      if (this.flashMode) {
                        this.flashMode = this.flashModes[this.flashModes.indexOf(this.flashMode)] || 'off';
                        this.flashIndex = this.flashModes.indexOf(this.flashMode) || 0;
                      } else {
                        this.flashIndex = 0;
                      }
                    }

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function initPhotoCapabilities(_x3) {
            return _initPhotoCapabilities.apply(this, arguments);
          }

          return initPhotoCapabilities;
        }()
      }, {
        key: "stopStream",
        value: function stopStream() {
          this.stream && this.stream.getTracks().forEach(function (track) {
            return track.stop();
          });
        }
      }, {
        key: "capture",
        value: function () {
          var _capture = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var photo;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.hasImageCapture()) {
                      _context6.next = 13;
                      break;
                    }

                    _context6.prev = 1;
                    _context6.next = 4;
                    return this.imageCapture.takePhoto({
                      fillLightMode: this.flashModes.length > 1 ? this.flashMode : undefined
                    });

                  case 4:
                    photo = _context6.sent;
                    _context6.next = 7;
                    return this.flashScreen();

                  case 7:
                    this.promptAccept(photo);
                    _context6.next = 13;
                    break;

                  case 10:
                    _context6.prev = 10;
                    _context6.t0 = _context6["catch"](1);
                    console.error('Unable to take photo!', _context6.t0);

                  case 13:
                    this.stopStream();

                  case 14:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[1, 10]]);
          }));

          function capture() {
            return _capture.apply(this, arguments);
          }

          return capture;
        }()
      }, {
        key: "promptAccept",
        value: function () {
          var _promptAccept = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(photo) {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.photo = photo;
                    this.photoSrc = URL.createObjectURL(photo);

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          function promptAccept(_x4) {
            return _promptAccept.apply(this, arguments);
          }

          return promptAccept;
        }()
      }, {
        key: "rotate",
        value: function rotate() {
          this.stopStream();
          var track = this.stream && this.stream.getTracks()[0];

          if (!track) {
            return;
          }

          var c = track.getConstraints();
          var facingMode = c.facingMode;

          if (!facingMode) {
            var _c = track.getCapabilities();

            facingMode = _c.facingMode[0];
          }

          if (facingMode === 'environment') {
            this.initCamera({
              video: {
                facingMode: 'user'
              }
            });
          } else {
            this.initCamera({
              video: {
                facingMode: 'environment'
              }
            });
          }
        }
      }, {
        key: "setFlashMode",
        value: function setFlashMode(mode) {
          console.log('New flash mode: ', mode);
          this.flashMode = mode;
        }
      }, {
        key: "cycleFlash",
        value: function cycleFlash() {
          if (this.flashModes.length > 0) {
            this.flashIndex = (this.flashIndex + 1) % this.flashModes.length;
            this.setFlashMode(this.flashModes[this.flashIndex]);
          }
        }
      }, {
        key: "flashScreen",
        value: function () {
          var _flashScreen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    return _context8.abrupt("return", new Promise(function (resolve, _reject) {
                      _this2.showShutterOverlay = true;
                      setTimeout(function () {
                        _this2.showShutterOverlay = false;
                        resolve();
                      }, 100);
                    }));

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));

          function flashScreen() {
            return _flashScreen.apply(this, arguments);
          }

          return flashScreen;
        }()
      }, {
        key: "handleShutterClick",
        value: function handleShutterClick(_e) {
          console.log();
          this.capture();
        }
      }, {
        key: "handleRotateClick",
        value: function handleRotateClick(_e) {
          this.rotate();
        }
      }, {
        key: "handleClose",
        value: function handleClose(_e) {
          this.onPhoto && this.onPhoto(null);
        }
      }, {
        key: "handleFlashClick",
        value: function handleFlashClick(_e) {
          this.cycleFlash();
        }
      }, {
        key: "handleCancelPhoto",
        value: function handleCancelPhoto(_e) {
          this.photo = null;
          this.initCamera();
        }
      }, {
        key: "handleAcceptPhoto",
        value: function handleAcceptPhoto(_e) {
          this.onPhoto && this.onPhoto(this.photo);
        }
      }, {
        key: "iconExit",
        value: function iconExit() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "iconConfirm",
        value: function iconConfirm() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "iconReverseCamera",
        value: function iconReverseCamera() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "iconRetake",
        value: function iconRetake() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "iconFlashOff",
        value: function iconFlashOff() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "iconFlashOn",
        value: function iconFlashOn() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E";
        }
      }, {
        key: "iconFlashAuto",
        value: function iconFlashAuto() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;

          var videoStreamStyle = this.facingMode == "user" ? {
            transform: 'scaleX(-1)'
          } : {};
          return Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "camera-wrapper"
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "camera-header"
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", {
            "class": "items"
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item close",
            onClick: function onClick(e) {
              return _this3.handleClose(e);
            }
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconExit()
          })), Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item flash",
            onClick: function onClick(e) {
              return _this3.handleFlashClick(e);
            }
          }, this.flashModes.length > 0 && Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.flashMode == 'off' ? Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconFlashOff()
          }) : '', this.flashMode == 'auto' ? Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconFlashAuto()
          }) : '', this.flashMode == 'flash' ? Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconFlashOn()
          }) : '')))), this.photo ? Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "accept"
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "accept-image",
            style: {
              backgroundImage: "url(".concat(this.photoSrc, ")")
            }
          })) : Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "camera-video"
          }, this.showShutterOverlay && Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "shutter-overlay"
          }), this.hasImageCapture() ? Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("video", {
            style: videoStreamStyle,
            ref: function ref(el) {
              return _this3.videoElement = el;
            },
            autoplay: true,
            playsinline: true
          }) : Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", {
            ref: function ref(el) {
              return _this3.canvasElement = el;
            },
            width: "100%",
            height: "100%"
          }), Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", {
            "class": "offscreen-image-render",
            ref: function ref(e) {
              return _this3.offscreenCanvas = e;
            },
            width: "100%",
            height: "100%"
          })), Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "camera-footer"
          }, !this.photo ? [Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "shutter",
            onClick: function onClick(e) {
              return _this3.handleShutterClick(e);
            }
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "shutter-button"
          })), Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "rotate",
            onClick: function onClick(e) {
              return _this3.handleRotateClick(e);
            }
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconReverseCamera()
          }))] : Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", {
            "class": "items"
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item accept-cancel",
            onClick: function onClick(e) {
              return _this3.handleCancelPhoto(e);
            }
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconRetake()
          })), Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item accept-use",
            onClick: function onClick(e) {
              return _this3.handleAcceptPhoto(e);
            }
          }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconConfirm()
          })))));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }], [{
        key: "assetsDirs",
        get: function get() {
          return ["icons"];
        }
      }, {
        key: "style",
        get: function get() {
          return ":host{--header-height:4em;--footer-height:9em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system,BlinkMacSystemFont,“Segoe UI”,“Roboto”,“Droid Sans”,“Helvetica Neue”,sans-serif;display:block}.items,:host{width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:#fff;background-color:#000;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:#fff;background-color:#000;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden}.camera-video,video{background-color:#000}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:#fff;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;color:#fff}.rotate,.rotate img{width:var(--icon-size-footer)}.rotate img{height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}.error{width:100%;height:100%;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.accept{background-color:#000;-ms-flex:1;flex:1}.accept .accept-image{width:100%;height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.close img,.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-cancel img,.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}";
        }
      }]);

      return CameraPWA;
    }();
    /***/

  }
}]);
//# sourceMappingURL=80-es5.js.map