function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-orders-orders-module~app-pages-simulation-simulation-module~warehouse-warehouse-module"], {
  /***/
  "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/ng-simple-slideshow/ng-simple-slideshow.js ***!
    \*****************************************************************/

  /*! exports provided: SlideshowModule, ɵa, ɵb */

  /***/
  function node_modulesNgSimpleSlideshowNgSimpleSlideshowJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideshowModule", function () {
      return SlideshowModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return SlideshowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return SwipeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var SwipeService = /*#__PURE__*/function () {
      function SwipeService() {
        _classCallCheck(this, SwipeService);
      }

      _createClass(SwipeService, [{
        key: "swipe",

        /**
         * \@description detect the direction of the swipe, and return a -1 or 1 if the duration is long enough
         *              else return a 0 to do nothing
         * @param {?} e
         * @param {?} when
         * @return {?}
         */
        value: function swipe(e, when) {
          var
          /** @type {?} */
          coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
          var
          /** @type {?} */
          time = new Date().getTime();

          if (when === 'start') {
            this._swipeCoord = coord;
            this._swipeTime = time;
          } else if (when === 'end') {
            var
            /** @type {?} */
            direction = [coord[0] - this._swipeCoord[0], coord[1] - this._swipeCoord[1]];
            var
            /** @type {?} */
            duration = time - this._swipeTime;

            if (duration < 1000 // Short enough
            && Math.abs(direction[1]) < Math.abs(direction[0]) // Horizontal enough
            && Math.abs(direction[0]) > 30) {
              return direction[0] < 0 ? 1 : -1;
            }
          }

          return 0;
        }
      }]);

      return SwipeService;
    }();

    SwipeService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @nocollapse
     */

    SwipeService.ctorParameters = function () {
      return [];
    };

    var FIRST_SLIDE_KEY = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])('firstSlide');

    var SlideshowComponent = /*#__PURE__*/function () {
      /**
       * @param {?} _swipeService
       * @param {?} _renderer
       * @param {?} _transferState
       * @param {?} _ngZone
       * @param {?} sanitizer
       * @param {?} platform_id
       * @param {?} document
       */
      function SlideshowComponent(_swipeService, _renderer, _transferState, _ngZone, sanitizer, platform_id, document) {
        _classCallCheck(this, SlideshowComponent);

        this._swipeService = _swipeService;
        this._renderer = _renderer;
        this._transferState = _transferState;
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.platform_id = platform_id;
        this.document = document;
        this.slideIndex = -1;
        this.slides = [];
        this._initial = true;
        this._isHidden = false;
        this.imageUrls = [];
        this.height = '100%';
        this.showArrows = true;
        this.disableSwiping = false;
        this.autoPlay = false;
        this.autoPlayInterval = 3333;
        this.stopAutoPlayOnSlide = true;
        this.autoPlayWaitForLazyLoad = false;
        this.backgroundSize = 'cover';
        this.backgroundPosition = 'center center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = false;
        this.dotColor = '#FFF';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.captionBackground = 'rgba(0, 0, 0, .35)';
        this.lazyLoad = false;
        this.hideOnNoSlides = false;
        this.fullscreen = false;
        this.onSlideLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSlideRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSwipeLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSwipeRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFullscreenExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onIndexChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(SlideshowComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (this.debug !== undefined) {
            console.warn('[Deprecation Warning]: The debug input will be removed from ng-simple-slideshow in 1.3.0');
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          // if this is the first being called, create a copy of the input
          if (this.imageUrls && this.imageUrls.length > 0) {
            if (this._initial === true) {
              this._urlCache = Array.from(this.imageUrls);
            }

            if (this._isHidden === true) {
              this._renderer.removeStyle(this.container.nativeElement, 'display');

              this._isHidden = false;
            }

            this.setSlides();
          } else if (this.hideOnNoSlides === true) {
            this._renderer.setStyle(this.container.nativeElement, 'display', 'none');

            this._isHidden = true;
          }

          this.setStyles();
          this.handleAutoPlay();
        }
        /**
         * \@description this is the function that should be called to make the slides change.
         *              indexDirection to move back is -1, to move forward is 1, and to stay in place is 0.
         *              0 is taken into account for failed swipes
         * @param {?} indexDirection
         * @param {?=} isSwipe
         * @return {?}
         */

      }, {
        key: "onSlide",
        value: function onSlide(indexDirection, isSwipe) {
          this.handleAutoPlay(this.stopAutoPlayOnSlide);
          this.slide(indexDirection, isSwipe);
        }
        /**
         * \@description Use the swipe service to detect swipe events from phone and tablets
         * @param {?} e
         * @param {?} when
         * @return {?}
         */

      }, {
        key: "onSwipe",
        value: function onSwipe(e, when) {
          if (this.disableSwiping === true) {
            return;
          }

          var
          /** @type {?} */
          indexDirection = this._swipeService.swipe(e, when); // handle a failed swipe


          if (indexDirection === 0) {
            return;
          } else {
            this.onSlide(indexDirection, true);
          }
        }
        /**
         * \@description Redirect to current slide "href" if defined
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onClick",
        value: function onClick(e) {
          e.preventDefault();
          var
          /** @type {?} */
          currentSlide = this.slides.length > 0 && this.slides[this.slideIndex];

          if (currentSlide && currentSlide.image.clickAction) {
            currentSlide.image.clickAction();
          } else if (currentSlide && currentSlide.image.href) {
            this.document.location.href = currentSlide.image.href;
          }
        }
        /**
         * \@description set the index to the desired index - 1 and simulate a right slide
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "goToSlide",
        value: function goToSlide(index) {
          var
          /** @type {?} */
          beforeClickIndex = this.slideIndex;
          this.slideIndex = index - 1;
          this.setSlideIndex(1);

          if (!this.slides[this.slideIndex].loaded) {
            this.loadRemainingSlides();
          }

          this.handleAutoPlay(this.stopAutoPlayOnSlide);
          this.slideRight(beforeClickIndex);
          this.slides[beforeClickIndex].selected = false;
          this.slides[this.slideIndex].selected = true;
        }
        /**
         * \@description set the index to the desired index - 1 and simulate a right slide
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "getSlideStyle",
        value: function getSlideStyle(index) {
          var
          /** @type {?} */
          slide = this.slides[index];

          if (slide.loaded) {
            return {
              "background-image": 'url(' + slide.image.url + ')',
              "background-size": slide.image.backgroundSize || this.backgroundSize,
              "background-position": slide.image.backgroundPosition || this.backgroundPosition,
              "background-repeat": slide.image.backgroundRepeat || this.backgroundRepeat
            };
          } else {
            // doesn't compile correctly if returning an empty object, sooooo.....
            return {
              "background-image": undefined,
              "background-size": undefined,
              "background-position": undefined,
              "background-repeat": undefined
            };
          }
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "exitFullScreen",
        value: function exitFullScreen(e) {
          e.preventDefault();
          this.fullscreen = false;
          this.onFullscreenExit.emit(true);
        }
        /**
         * \@description Set the new slide index, then make the transition happen.
         * @param {?} indexDirection
         * @param {?=} isSwipe
         * @return {?}
         */

      }, {
        key: "slide",
        value: function slide(indexDirection, isSwipe) {
          var
          /** @type {?} */
          oldIndex = this.slideIndex;
          this.setSlideIndex(indexDirection);

          if (!this.slides[this.slideIndex].loaded) {
            this.loadRemainingSlides();
          }

          if (indexDirection === 1) {
            this.slideRight(oldIndex, isSwipe);
          } else {
            this.slideLeft(oldIndex, isSwipe);
          }

          this.slides[oldIndex].selected = false;
          this.slides[this.slideIndex].selected = true;
        }
        /**
         * \@description This is just treating the url array like a circular list.
         * @param {?} indexDirection
         * @return {?}
         */

      }, {
        key: "setSlideIndex",
        value: function setSlideIndex(indexDirection) {
          this.slideIndex += indexDirection;

          if (this.slideIndex < 0) {
            this.slideIndex = this.slides.length - 1;
          }

          if (this.slideIndex >= this.slides.length) {
            this.slideIndex = 0;
          }

          this.onIndexChanged.emit(this.slideIndex);
        }
        /**
         * \@description This function handles the variables to move the CSS classes around accordingly.
         *              In order to correctly handle animations, the new slide as well as the slides to
         *              the left and right are assigned classes.
         * @param {?} oldIndex
         * @param {?=} isSwipe
         * @return {?}
         */

      }, {
        key: "slideLeft",
        value: function slideLeft(oldIndex, isSwipe) {
          if (isSwipe === true) {
            this.onSwipeLeft.emit(this.slideIndex);
          } else {
            this.onSlideLeft.emit(this.slideIndex);
          }

          this.slides[this.getLeftSideIndex(oldIndex)].leftSide = false;
          this.slides[oldIndex].leftSide = true;
          this.slides[oldIndex].action = 'slideOutLeft';
          this.slides[this.slideIndex].rightSide = false;
          this.slides[this.getRightSideIndex()].rightSide = true;
          this.slides[this.slideIndex].action = 'slideInRight';
        }
        /**
         * \@description This function handles the variables to move the CSS classes around accordingly.
         *              In order to correctly handle animations, the new slide as well as the slides to
         *              the left and right are assigned classes.
         * @param {?} oldIndex
         * @param {?=} isSwipe
         * @return {?}
         */

      }, {
        key: "slideRight",
        value: function slideRight(oldIndex, isSwipe) {
          if (isSwipe === true) {
            this.onSwipeRight.emit(this.slideIndex);
          } else {
            this.onSlideRight.emit(this.slideIndex);
          }

          this.slides[this.getRightSideIndex(oldIndex)].rightSide = false;
          this.slides[oldIndex].rightSide = true;
          this.slides[oldIndex].action = 'slideOutRight';
          this.slides[this.slideIndex].leftSide = false;
          this.slides[this.getLeftSideIndex()].leftSide = true;
          this.slides[this.slideIndex].action = 'slideInLeft';
        }
        /**
         * \@description Check to make sure slide images have been set or haven't changed
         * @return {?}
         */

      }, {
        key: "setSlides",
        value: function setSlides() {
          if (this.imageUrls) {
            if (this.checkCache() || this._initial === true) {
              this._initial = false;
              this._urlCache = Array.from(this.imageUrls);
              this.slides = [];

              if (this.lazyLoad === true) {
                this.buildLazyLoadSlideArray();
              } else {
                this.buildSlideArray();
              }
            }
          }
        }
        /**
         * \@description create the slides without background urls, which will be added in
         *              for the "lazy load," then load only the first slide
         * @return {?}
         */

      }, {
        key: "buildLazyLoadSlideArray",
        value: function buildLazyLoadSlideArray() {
          var _iterator = _createForOfIteratorHelper(this.imageUrls),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var image = _step.value;
              this.slides.push({
                image: typeof image === 'string' ? {
                  url: null
                } : {
                  url: null,
                  href: image.href || ''
                },
                action: '',
                leftSide: false,
                rightSide: false,
                selected: false,
                loaded: false
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.slideIndex = 0;
          this.slides[this.slideIndex].selected = true;
          this.loadFirstSlide();
          this.onIndexChanged.emit(this.slideIndex);
        }
        /**
         * \@description create the slides with background urls all at once
         * @return {?}
         */

      }, {
        key: "buildSlideArray",
        value: function buildSlideArray() {
          var _iterator2 = _createForOfIteratorHelper(this.imageUrls),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var image = _step2.value;
              this.slides.push({
                image: typeof image === 'string' ? {
                  url: image
                } : image,
                action: '',
                leftSide: false,
                rightSide: false,
                selected: false,
                loaded: true
              });
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.slideIndex = 0;
          this.slides[this.slideIndex].selected = true;
          this.onIndexChanged.emit(this.slideIndex);
        }
        /**
         * \@description load the first slide image if lazy loading
         *              this takes server side and browser side into account
         * @return {?}
         */

      }, {
        key: "loadFirstSlide",
        value: function loadFirstSlide() {
          var _this = this;

          var
          /** @type {?} */
          tmpIndex = this.slideIndex;
          var
          /** @type {?} */
          tmpImage = this.imageUrls[tmpIndex]; // if server side, we don't need to worry about the rest of the slides

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platform_id)) {
            this.slides[tmpIndex].image = typeof tmpImage === 'string' ? {
              url: tmpImage
            } : tmpImage;
            this.slides[tmpIndex].loaded = true;

            this._transferState.set(FIRST_SLIDE_KEY, this.slides[tmpIndex]);
          } else {
            var
            /** @type {?} */
            firstSlideFromTransferState = this._transferState.get(FIRST_SLIDE_KEY,
            /** @type {?} */
            null); // if the first slide didn't finish loading on the server side, we need to load it


            if (firstSlideFromTransferState === null) {
              var
              /** @type {?} */
              loadImage = new Image();
              loadImage.src = typeof tmpImage === 'string' ? tmpImage : tmpImage.url;
              loadImage.addEventListener('load', function () {
                _this.slides[tmpIndex].image = typeof tmpImage === 'string' ? {
                  url: tmpImage
                } : tmpImage;
                _this.slides[tmpIndex].loaded = true;
              });
            } else {
              this.slides[tmpIndex] = firstSlideFromTransferState;

              this._transferState.remove(FIRST_SLIDE_KEY);
            }
          }
        }
        /**
         * \@description if lazy loading in browser, start loading remaining slides
         * \@todo: figure out how to not show the spinner if images are loading fast enough
         * @return {?}
         */

      }, {
        key: "loadRemainingSlides",
        value: function loadRemainingSlides() {
          var _this2 = this;

          var _loop = function _loop(i) {
            if (!_this2.slides[i].loaded) {
              new Promise(function (resolve) {
                var
                /** @type {?} */
                tmpImage = _this2.imageUrls[i];
                var
                /** @type {?} */
                loadImage = new Image();
                loadImage.addEventListener('load', function () {
                  _this2.slides[i].image = typeof tmpImage === 'string' ? {
                    url: tmpImage
                  } : tmpImage;
                  _this2.slides[i].loaded = true;
                  resolve();
                });
                loadImage.src = typeof tmpImage === 'string' ? tmpImage : tmpImage.url;
              });
            }
          };

          for (var
          /** @type {?} */
          i = 0; i < this.slides.length; i++) {
            _loop(i);
          }
        }
        /**
         * \@description Start or stop autoPlay, don't do it at all server side
         * @param {?=} stopAutoPlay
         * @return {?}
         */

      }, {
        key: "handleAutoPlay",
        value: function handleAutoPlay(stopAutoPlay) {
          var _this3 = this;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platform_id)) {
            return;
          }

          if (stopAutoPlay === true || this.autoPlay === false) {
            if (this._autoplayIntervalId) {
              this._ngZone.runOutsideAngular(function () {
                return clearInterval(_this3._autoplayIntervalId);
              });

              this._autoplayIntervalId = null;
            }
          } else if (!this._autoplayIntervalId) {
            this._ngZone.runOutsideAngular(function () {
              _this3._autoplayIntervalId = setInterval(function () {
                if (!_this3.autoPlayWaitForLazyLoad || _this3.autoPlayWaitForLazyLoad && _this3.slides[_this3.slideIndex].loaded) {
                  _this3._ngZone.run(function () {
                    return _this3.slide(1);
                  });
                }
              }, _this3.autoPlayInterval);
            });
          }
        }
        /**
         * \@description Keep the styles up to date with the input
         * @return {?}
         */

      }, {
        key: "setStyles",
        value: function setStyles() {
          if (this.fullscreen) {
            this._renderer.setStyle(this.container.nativeElement, 'height', '100%'); // Would be nice to make it configurable


            this._renderer.setStyle(this.container.nativeElement, 'background-color', 'white');
          } else {
            // Would be nice to make it configurable
            this._renderer.removeStyle(this.container.nativeElement, 'background-color');

            if (this.height) {
              this._renderer.setStyle(this.container.nativeElement, 'height', this.height);
            }

            if (this.minHeight) {
              this._renderer.setStyle(this.container.nativeElement, 'min-height', this.minHeight);
            }
          }

          if (this.arrowSize) {
            this._renderer.setStyle(this.prevArrow.nativeElement, 'height', this.arrowSize);

            this._renderer.setStyle(this.prevArrow.nativeElement, 'width', this.arrowSize);

            this._renderer.setStyle(this.nextArrow.nativeElement, 'height', this.arrowSize);

            this._renderer.setStyle(this.nextArrow.nativeElement, 'width', this.arrowSize);
          }
        }
        /**
         * \@description compare image array to the cache, returns false if no changes
         * @return {?}
         */

      }, {
        key: "checkCache",
        value: function checkCache() {
          var _this4 = this;

          return !(this._urlCache.length === this.imageUrls.length && this._urlCache.every(function (cacheElement, i) {
            return cacheElement === _this4.imageUrls[i];
          }));
        }
        /**
         * \@description get the index for the slide to the left of the new slide
         * @param {?=} i
         * @return {?}
         */

      }, {
        key: "getLeftSideIndex",
        value: function getLeftSideIndex(i) {
          if (i === undefined) {
            i = this.slideIndex;
          }

          if (--i < 0) {
            i = this.slides.length - 1;
          }

          return i;
        }
        /**
         * \@description get the index for the slide to the right of the new slide
         * @param {?=} i
         * @return {?}
         */

      }, {
        key: "getRightSideIndex",
        value: function getRightSideIndex(i) {
          if (i === undefined) {
            i = this.slideIndex;
          }

          if (++i >= this.slides.length) {
            i = 0;
          }

          return i;
        }
        /**
         * \@description a trackBy function for the ngFor loops
         * @param {?} index
         * @param {?} slide
         * @return {?}
         */

      }, {
        key: "trackByFn",
        value: function trackByFn(index, slide) {
          return slide.image;
        }
      }, {
        key: "safeStyleDotColor",
        get: function get() {
          return this.sanitizer.bypassSecurityTrustStyle("--dot-color: ".concat(this.dotColor));
        }
      }]);

      return SlideshowComponent;
    }();

    SlideshowComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'slideshow',
        template: "\n    <!-- fullscreen bar -->\n    <div [class.display-none]=\"!fullscreen\"\n         class=\"fs-container\"\n         (click)=\"exitFullScreen($event)\">\n      <i title=\"Back\"\n         class=\"arrow-exitfs prev\"></i>\n    </div>\n    <div #container\n         (touchstart)=\"onSwipe($event, 'start')\"\n         (touchend)=\"onSwipe($event, 'end')\"\n         class=\"slideshow-container\"\n         [class.slideshow-container-fs]=\"fullscreen\">\n      <!-- slides -->\n      <a *ngFor=\"let slide of slides; index as i; trackBy: trackByFn\"\n         class=\"slides\"\n         href=\"{{slide?.image?.clickAction ? '#' : slide?.image?.href}}\"\n         title=\"{{slide?.image?.title}}\"\n         [ngStyle]=\"getSlideStyle(i)\"\n         [class.selected]=\"slide?.selected\"\n         [class.hide-slide]=\"!slide?.selected && !slide?.leftSide && !slide?.rightSide\"\n         [class.left-side]=\"slide?.leftSide\"\n         [class.right-side]=\"slide?.rightSide\"\n         [class.slide-in-left]=\"slide?.action === 'slideInLeft'\"\n         [class.slide-in-right]=\"slide?.action === 'slideInRight'\"\n         [class.slide-out-left]=\"slide?.action === 'slideOutLeft'\"\n         [class.slide-out-right]=\"slide?.action === 'slideOutRight'\"\n         [class.link]=\"slide?.image?.clickAction || slide?.image?.href\"\n         (click)=\"onClick($event)\">\n        <div class=\"loader\"\n             *ngIf=\"!slide?.loaded\"></div>\n        <div *ngIf=\"showCaptions && slide?.image?.caption\"\n             class=\"caption\"\n             [ngStyle]=\"{\n               'color': captionColor,\n               'background-color': captionBackground\n              }\"\n             [innerHTML]=\"slide?.image?.caption\">\n        </div>\n      </a>\n      <!-- left arrow -->\n      <div [class.display-none]=\"!this.showArrows\"\n           (click)=\"onSlide(-1)\"\n           class=\"arrow-container prev\">\n        <i #prevArrow\n           title=\"Previous\"\n           class=\"arrow prev\"></i>\n      </div>\n      <!-- right arrow -->\n      <div [class.display-none]=\"!this.showArrows\"\n           (click)=\"onSlide(1)\"\n           class=\"arrow-container next\">\n        <i #nextArrow\n           title=\"Next\"\n           class=\"arrow next\"></i>\n      </div>\n      <!-- dots -->\n      <ul class=\"slick-dots\"\n          *ngIf=\"showDots\">\n        <li *ngFor=\"let slide of slides; index as i; trackBy: trackByFn\"\n            (click)=\"goToSlide(i)\"\n            [class.slick-active]=\"slide.selected\">\n          <button type=\"button\"\n                  [attr.style]=\"safeStyleDotColor\">\n            {{i}}\n          </button>\n        </li>\n      </ul>\n    </div>\n  ",
        styles: ["\n    /*\n     styles adapted from https://www.w3schools.com/w3css/4/w3.css\n     arrow styles adapted from https://codepen.io/minustalent/pen/Frhaw\n     */\n    .display-none {\n      display: none !important; }\n\n    .fs-container {\n      display: block;\n      cursor: pointer;\n      position: fixed;\n      z-index: 1;\n      top: 16px;\n      left: 16px;\n      width: 46px;\n      height: 46px;\n      text-align: center;\n      padding: 0;\n      background-color: rgba(0, 0, 0, 0.2);\n      -webkit-transition: all .2s ease-in-out;\n      transition: all .2s ease-in-out; }\n      .fs-container:hover {\n        background-color: rgba(0, 0, 0, 0.33); }\n      .fs-container .arrow-exitfs {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background: transparent;\n        border-top: 2px solid #f2f2f2;\n        -webkit-transition: all .2s ease-in-out;\n        transition: all .2s ease-in-out; }\n        .fs-container .arrow-exitfs.prev {\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          position: relative;\n          left: 18px;\n          top: 18px; }\n        .fs-container .arrow-exitfs:after {\n          content: '';\n          width: 30px;\n          height: 30px;\n          background: transparent;\n          border-top: 2px solid #f2f2f2;\n          -webkit-transform: rotate(90deg);\n                  transform: rotate(90deg);\n          position: absolute;\n          left: -15px;\n          top: -17px; }\n\n    .slideshow-container.slideshow-container-fs {\n      position: fixed;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%; }\n\n    .slideshow-container {\n      position: relative;\n      display: block;\n      margin: auto;\n      height: 100%;\n      width: 100%;\n      overflow: hidden; }\n      .slideshow-container .hide-slide {\n        visibility: hidden;\n        position: absolute;\n        top: -100vw;\n        left: -100vw;\n        opacity: 0; }\n      .slideshow-container .slides {\n        position: absolute;\n        top: 0;\n        height: 100%;\n        width: 100%;\n        visibility: visible;\n        opacity: 1;\n        display: block; }\n        .slideshow-container .slides.selected {\n          left: 0; }\n        .slideshow-container .slides.left-slide {\n          left: -100%; }\n        .slideshow-container .slides.right-slide {\n          left: 100%; }\n        .slideshow-container .slides.slide-in-left {\n          left: 0;\n          -webkit-animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container .slides.slide-in-right {\n          left: 0;\n          -webkit-animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container .slides.slide-out-left {\n          left: -100%;\n          -webkit-animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container .slides.slide-out-right {\n          left: 100%;\n          -webkit-animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container .slides.link {\n          cursor: pointer; }\n        .slideshow-container .slides:not(.link) {\n          cursor: default; }\n      .slideshow-container .caption {\n        position: absolute;\n        bottom: 0;\n        padding: 10px;\n        width: 100%; }\n      .slideshow-container .arrow-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: absolute;\n        top: 0;\n        height: 100%;\n        width: auto;\n        cursor: pointer;\n        background-size: 100%;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));\n        background-image: linear-gradient(transparent, transparent);\n        z-index: 100;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n        .slideshow-container .arrow-container:before {\n          display: block;\n          height: 100%;\n          position: absolute;\n          top: 0;\n          left: 0;\n          opacity: 0;\n          width: 100%;\n          z-index: -100;\n          -webkit-transition: opacity 0.45s;\n          transition: opacity 0.45s; }\n        .slideshow-container .arrow-container.prev {\n          left: 0; }\n          .slideshow-container .arrow-container.prev:before {\n            background-image: -webkit-gradient(linear, right top, left top, from(transparent), to(rgba(0, 0, 0, 0.75)));\n            background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.75));\n            content: ''; }\n        .slideshow-container .arrow-container.next {\n          right: 0; }\n          .slideshow-container .arrow-container.next:before {\n            background-image: -webkit-gradient(linear, left top, right top, from(transparent), to(rgba(0, 0, 0, 0.75)));\n            background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.75));\n            content: ''; }\n        .slideshow-container .arrow-container .arrow {\n          display: block;\n          margin: auto;\n          width: 30px;\n          height: 30px;\n          background: transparent;\n          border-top: 2px solid #f2f2f2;\n          border-left: 2px solid #f2f2f2;\n          -webkit-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none; }\n          .slideshow-container .arrow-container .arrow:before {\n            display: block;\n            height: 200%;\n            width: 200%;\n            margin-left: -50%;\n            margin-top: -50%;\n            content: \"\";\n            -webkit-transform: rotate(45deg);\n                    transform: rotate(45deg); }\n          .slideshow-container .arrow-container .arrow.prev {\n            -webkit-transform: rotate(-45deg);\n                    transform: rotate(-45deg);\n            position: relative;\n            left: 20px;\n            margin-right: 10px; }\n          .slideshow-container .arrow-container .arrow.next {\n            -webkit-transform: rotate(135deg);\n                    transform: rotate(135deg);\n            position: relative;\n            right: 20px;\n            margin-left: 10px; }\n      .slideshow-container .slick-dots {\n        display: block;\n        bottom: 15px;\n        z-index: 1;\n        text-align: center;\n        position: absolute;\n        padding: 0;\n        left: 0;\n        right: 0;\n        margin: 0 auto; }\n        .slideshow-container .slick-dots li {\n          display: inline;\n          margin: 0;\n          padding: 0; }\n          .slideshow-container .slick-dots li button {\n            border: none;\n            background: none;\n            text-indent: -9999px;\n            font-size: 0;\n            width: 20px;\n            height: 20px;\n            outline: none;\n            position: relative;\n            z-index: 1;\n            cursor: pointer; }\n            .slideshow-container .slick-dots li button:before {\n              content: '';\n              width: 4px;\n              height: 4px;\n              background: var(--dot-color, #FFF);\n              border-radius: 4px;\n              display: block;\n              position: absolute;\n              top: 50%;\n              left: 50%;\n              -webkit-transform: translate(-50%, -50%);\n                      transform: translate(-50%, -50%);\n              opacity: .7;\n              -webkit-transition: all .5s ease-out;\n              transition: all .5s ease-out; }\n          .slideshow-container .slick-dots li.slick-active button:before {\n            -webkit-transform: translate(-50%, -50%) scale(1.4);\n                    transform: translate(-50%, -50%) scale(1.4);\n            opacity: 1; }\n\n    @media screen and (min-width: 768px) {\n      .slideshow-container .arrow-container:hover:before {\n        opacity: 1; }\n      .slideshow-container .arrow-container:hover .arrow {\n        border-width: 4px; }\n      .slideshow-container .arrow-container .arrow:hover {\n        border-width: 4px; } }\n\n    @-webkit-keyframes slideInRight {\n      0% {\n        left: -100%; }\n      100% {\n        left: 0; } }\n\n    @keyframes slideInRight {\n      0% {\n        left: -100%; }\n      100% {\n        left: 0; } }\n\n    @-webkit-keyframes slideInLeft {\n      0% {\n        left: 100%; }\n      100% {\n        left: 0; } }\n\n    @keyframes slideInLeft {\n      0% {\n        left: 100%; }\n      100% {\n        left: 0; } }\n\n    @-webkit-keyframes slideOutRight {\n      0% {\n        left: 0; }\n      100% {\n        left: -100%; } }\n\n    @keyframes slideOutRight {\n      0% {\n        left: 0; }\n      100% {\n        left: -100%; } }\n\n    @-webkit-keyframes slideOutLeft {\n      0% {\n        left: 0; }\n      100% {\n        left: 100%; } }\n\n    @keyframes slideOutLeft {\n      0% {\n        left: 0; }\n      100% {\n        left: 100%; } }\n\n    .loader {\n      position: absolute;\n      left: 50%;\n      margin-left: -20px;\n      top: 50%;\n      margin-top: -20px;\n      border: 5px solid #f3f3f3;\n      border-top: 5px solid #555;\n      border-radius: 50%;\n      width: 50px;\n      height: 50px;\n      -webkit-animation: spin 1s linear infinite;\n              animation: spin 1s linear infinite; }\n\n    @-webkit-keyframes spin {\n      0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg); }\n      100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg); } }\n\n    @keyframes spin {\n      0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg); }\n      100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg); } }\n  "]
      }]
    }];
    /**
     * @nocollapse
     */

    SlideshowComponent.ctorParameters = function () {
      return [{
        type: SwipeService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    SlideshowComponent.propDecorators = {
      'imageUrls': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'height': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'minHeight': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'arrowSize': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'showArrows': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'disableSwiping': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'autoPlay': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'autoPlayInterval': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'stopAutoPlayOnSlide': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'autoPlayWaitForLazyLoad': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'debug': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'backgroundSize': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'backgroundPosition': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'backgroundRepeat': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'showDots': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'dotColor': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'showCaptions': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'captionColor': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'captionBackground': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'lazyLoad': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'hideOnNoSlides': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'fullscreen': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      'onSlideLeft': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'onSlideRight': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'onSwipeLeft': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'onSwipeRight': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'onFullscreenExit': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'onIndexChanged': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      'container': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['container']
      }],
      'prevArrow': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['prevArrow']
      }],
      'nextArrow': [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['nextArrow']
      }]
    };

    var SlideshowModule = function SlideshowModule() {
      _classCallCheck(this, SlideshowModule);
    };

    SlideshowModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserTransferStateModule"]],
        declarations: [SlideshowComponent],
        exports: [SlideshowComponent],
        providers: [SwipeService]
      }]
    }];
    /**
     * @nocollapse
     */

    SlideshowModule.ctorParameters = function () {
      return [];
    };
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng-simple-slideshow.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~app-pages-orders-orders-module~app-pages-simulation-simulation-module~warehouse-warehouse-module-es5.js.map