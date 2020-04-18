function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-orders-orders-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** /home/itexpert/Documents/ever/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedConfirmationModalConfirmationModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n\t<span>{{ mainTextTr() }}</span\n\t><button aria-label=\"Close\" class=\"close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">×</span>\n\t</button>\n</div>\n\n<div class=\"modal-footer\">\n\t<button nbButton status=\"danger\" (click)=\"cancel()\">\n\t\t{{ cancelButtonTr() }}\n\t</button>\n\t<button nbButton status=\"success\" (click)=\"confirmEvent.emit()\">\n\t\t{{ confirmButtonTr() }}\n\t</button>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/+order/order-products/order-products.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** /home/itexpert/Documents/ever/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/+order/order-products/order-products.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersOrderOrderProductsOrderProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"order-product\">\n\t<toaster-container></toaster-container>\n\t<nb-card class=\"m-0\">\n\t\t<nb-card-header>\n\t\t\t<div class=\"row m-0\">\n\t\t\t\t<h4>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'ORDER_VIEW.ORDER_PRODUCT_INFO.ORDER_PRODUCTS'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h4>\n\t\t\t</div>\n\t\t\t<div class=\"row break-line\"></div>\n\t\t\t<div\n\t\t\t\t[hidden]=\"\n\t\t\t\t\torder?.isCancelled ||\n\t\t\t\t\torder?.carrierStatus === deliveryCompleted ||\n\t\t\t\t\torder?.warehouseStatus === givenToCarrier\n\t\t\t\t\"\n\t\t\t\tclass=\"row m-0\"\n\t\t\t>\n\t\t\t\t<div class=\"col-8 p-0 btn-group\">\n\t\t\t\t\t<button\n\t\t\t\t\t\tnbButton\n\t\t\t\t\t\tstatus=\"success\"\n\t\t\t\t\t\tclass=\"d-inline-block\"\n\t\t\t\t\t\t(click)=\"addProducts()\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<i class=\"ion-md-add button-icon mr-1\"></i\n\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t'ORDER_VIEW.ORDER_PRODUCT_INFO.ADD_PRODUCTS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</button>\n\t\t\t\t\t<button\n\t\t\t\t\t\tnbButton\n\t\t\t\t\t\tstatus=\"warning\"\n\t\t\t\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t\t\t\t[disabled]=\"!selectedProducts.length\"\n\t\t\t\t\t\t(click)=\"removeSelectedProducts()\"\n\t\t\t\t\t\t[nbSpinner]=\"loading\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<i class=\"ion-md-trash button-icon mr-1\"></i>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'ORDER_VIEW.ORDER_PRODUCT_INFO.REMOVE_PRODUCTS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-4 pull-right p-0\">\n\t\t\t\t\t<button\n\t\t\t\t\t\tnbButton\n\t\t\t\t\t\tstatus=\"danger\"\n\t\t\t\t\t\tclass=\"mr-2 d-inline-block float-right\"\n\t\t\t\t\t\t(click)=\"cancelOrder()\"\n\t\t\t\t\t\t[nbSpinner]=\"loading\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<i class=\"ion-md-close button-icon mr-1\"></i>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'ORDER_VIEW.ORDER_PRODUCT_INFO.CANCEL_ORDER'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<h4 class=\"text-danger\" *ngIf=\"order?.isCancelled\">\n\t\t\t\t{{\n\t\t\t\t\t'ORDER_VIEW.ORDER_PRODUCT_INFO.THE_ORDER_IS_CANCEL'\n\t\t\t\t\t\t| translate\n\t\t\t\t}}\n\t\t\t</h4>\n\t\t\t<h4\n\t\t\t\tclass=\"text-info\"\n\t\t\t\t*ngIf=\"\n\t\t\t\t\torder?.warehouseStatus === givenToCarrier &&\n\t\t\t\t\torder?.carrierStatus !== deliveryCompleted\n\t\t\t\t\"\n\t\t\t>\n\t\t\t\t{{\n\t\t\t\t\t'ORDER_VIEW.ORDER_PRODUCT_INFO.THE_ORDER_IS_GIVEN_TO_CARRIER'\n\t\t\t\t\t\t| translate\n\t\t\t\t}}\n\t\t\t</h4>\n\t\t\t<h4\n\t\t\t\tclass=\"text-success\"\n\t\t\t\t*ngIf=\"order?.carrierStatus === deliveryCompleted\"\n\t\t\t>\n\t\t\t\t{{\n\t\t\t\t\t'ORDER_VIEW.ORDER_PRODUCT_INFO.THE_ORDER_IS_DELIVERED'\n\t\t\t\t\t\t| translate\n\t\t\t\t}}\n\t\t\t</h4>\n\t\t</nb-card-header>\n\n\t\t<nb-card-body>\n\t\t\t<ng2-smart-table\n\t\t\t\t[settings]=\"settingsSmartTable\"\n\t\t\t\t[source]=\"sourceSmartTable\"\n\t\t\t\tid=\"smartTableCustomer\"\n\t\t\t\t(userRowSelect)=\"selectProductTmp($event)\"\n\t\t\t>\n\t\t\t</ng2-smart-table>\n\t\t</nb-card-body>\n\t</nb-card>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/+order/order.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** /home/itexpert/Documents/ever/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/+order/order.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersOrderOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"order$ | async as order\" class=\"row order-page\">\n\t<toaster-container></toaster-container>\n\n\t<div class=\"col-md-9\">\n\t\t<nb-card>\n\t\t\t<nb-card-header>\n\t\t\t\t<h1 class=\"d-inline-vlock\">\n\t\t\t\t\t{{ 'ORDER_VIEW.ORDER_HEADER_INFO.ORDER' | translate }}\n\t\t\t\t\t{{ getOrderName(order) }}\n\t\t\t\t\t<span class=\"pull-right\">{{\n\t\t\t\t\t\torder.createdAt | date: 'MM-dd-yy'\n\t\t\t\t\t}}</span>\n\t\t\t\t</h1>\n\t\t\t</nb-card-header>\n\n\t\t\t<nb-card-body>\n\t\t\t\t<h4 class=\"d-inline-block\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'ORDER_VIEW.ORDER_HEADER_INFO.MANAGE_ORDER' | translate\n\t\t\t\t\t}}\n\t\t\t\t</h4>\n\t\t\t\t<h4 class=\"d-inline-block pull-right\">\n\t\t\t\t\t{{ 'ORDER_VIEW.ORDER_HEADER_INFO.TOTAL' | translate }} ${{\n\t\t\t\t\t\tgetTotalPrice(order)\n\t\t\t\t\t}}\n\t\t\t\t</h4>\n\t\t\t</nb-card-body>\n\t\t</nb-card>\n\n\t\t<ea-warehouse-order-view\n\t\t\t[hideHeader]=\"true\"\n\t\t\t[selectedOrder]=\"order\"\n\t\t></ea-warehouse-order-view>\n\n\t\t<ea-order-products [order]=\"order\"></ea-order-products>\n\t</div>\n\t<div class=\"col-md-3 order-sidebar-info\">\n\t\t<nb-card class=\"p-3\">\n\t\t\t<ea-order-sidebar-info-box\n\t\t\t\tclass=\"mb-3\"\n\t\t\t\t*ngIf=\"order?.warehouse\"\n\t\t\t\t[redirectUrl]=\"'stores/' + order.warehouse.id\"\n\t\t\t\t[title]=\"titleWarehouse\"\n\t\t\t\t[imageUrl]=\"order?.warehouse?.logo\"\n\t\t\t\t[contactDetails]=\"getWarehouseContactDetails(order?.warehouse)\"\n\t\t\t></ea-order-sidebar-info-box>\n\n\t\t\t<ea-order-sidebar-info-box\n\t\t\t\t*ngIf=\"order?.user\"\n\t\t\t\t[redirectUrl]=\"'customers/list/' + order.user.id\"\n\t\t\t\t[title]=\"titleCustomer\"\n\t\t\t\t[imageUrl]=\"order?.user?.image\"\n\t\t\t\t[contactDetails]=\"getCustomerContactDetails(order?.user)\"\n\t\t\t></ea-order-sidebar-info-box>\n\n\t\t\t<ea-order-sidebar-info-box\n\t\t\t\tclass=\"mt-3\"\n\t\t\t\t*ngIf=\"order?.carrier\"\n\t\t\t\t[redirectUrl]=\"'carriers/' + order.carrier.id\"\n\t\t\t\t[title]=\"titleCarrier\"\n\t\t\t\t[imageUrl]=\"order?.carrier?.logo\"\n\t\t\t\t[contactDetails]=\"getCarrierContactDetails(order?.carrier)\"\n\t\t\t></ea-order-sidebar-info-box>\n\n\t\t\t<nb-card class=\"m-0 mt-3\">\n\t\t\t\t<nb-card-header>\n\t\t\t\t\t<h4>{{ 'ORDER_VIEW.LOCATION_INFO.MAP' | translate }}</h4>\n\t\t\t\t</nb-card-header>\n\n\t\t\t\t<nb-card-body class=\"order-map p-0\">\n\t\t\t\t\t<div class=\"sub-title content-center\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t'ORDER_VIEW.LOCATION_INFO.DELIVERY_DISTANCE'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\tgetDistance(\n\t\t\t\t\t\t\t\t\torder?.user?.geoLocation,\n\t\t\t\t\t\t\t\t\torder?.warehouse?.geoLocation\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"map\">\n\t\t\t\t\t\t<ea-carrier-location\n\t\t\t\t\t\t\t[order]=\"order\"\n\t\t\t\t\t\t\t*ngIf=\"isCarrierCurrent(order)\"\n\t\t\t\t\t\t></ea-carrier-location>\n\t\t\t\t\t\t<ea-user-warehouse-location\n\t\t\t\t\t\t\t[order]=\"order\"\n\t\t\t\t\t\t\t*ngIf=\"!isCarrierCurrent(order)\"\n\t\t\t\t\t\t></ea-user-warehouse-location>\n\t\t\t\t\t</div>\n\t\t\t\t</nb-card-body>\n\t\t\t</nb-card>\n\t\t</nb-card>\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** /home/itexpert/Documents/ever/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersOrderSidebarInfoBoxSidebarInfoBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card\n\t*ngIf=\"title\"\n\tclass=\"m-0 order-sidebar-info-box clickable\"\n\t[ngClass]=\"{ clickable: redirectUrl }\"\n\t(click)=\"redirect()\"\n>\n\t<nb-card-header>\n\t\t<h4>{{ title }}</h4>\n\t</nb-card-header>\n\n\t<nb-card-body class=\"row\">\n\t\t<div *ngIf=\"imageUrl\" class=\"col-lg-4 img-container p-0 pl-3\">\n\t\t\t<img src=\"{{ imageUrl }}\" alt=\"\" />\n\t\t</div>\n\t\t<div\n\t\t\t*ngIf=\"contactDetails.length\"\n\t\t\t[ngClass]=\"{ 'col-lg-8': imageUrl, 'col-lg-12': !imageUrl }\"\n\t\t>\n\t\t\t<h6>\n\t\t\t\t{{ 'ORDER_VIEW.ORDER_SIDEBAR.CONTACT_DETAILS' | translate }}\n\t\t\t</h6>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let detail of contactDetails\">\n\t\t\t\t\t{{ detail }}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/orders.component.html":
  /*!***********************************************************************************************************************!*\
    !*** /home/itexpert/Documents/ever/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/orders.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Orders Component TODO...</h1>\n";
    /***/
  },

  /***/
  "./src/app/@shared/confirmation-modal/confirmation-modal.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/@shared/confirmation-modal/confirmation-modal.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedConfirmationModalConfirmationModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/@shared/confirmation-modal/confirmation-modal.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ConfimationModalComponent */

  /***/
  function srcAppSharedConfirmationModalConfirmationModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfimationModalComponent", function () {
      return ConfimationModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ConfimationModalComponent = /*#__PURE__*/function () {
      function ConfimationModalComponent(activeModal, translateService) {
        _classCallCheck(this, ConfimationModalComponent);

        this.activeModal = activeModal;
        this.translateService = translateService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.prefix = 'CONFIRM_MODAL.';
        this.confirmButton = 'YES';
        this.cancelButton = 'NO';
        this.confirmEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (!this.mainText) {
          this.mainText = 'ARE_YOU_SURE';
        }
      }

      _createClass(ConfimationModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "mainTextTr",
        value: function mainTextTr() {
          var forTranslate = this.prefix + this.mainText;
          return this._translate(forTranslate);
        }
      }, {
        key: "confirmButtonTr",
        value: function confirmButtonTr() {
          var forTranslate = this.prefix + this.confirmButton;
          return this._translate(forTranslate);
        }
      }, {
        key: "cancelButtonTr",
        value: function cancelButtonTr() {
          var forTranslate = this.prefix + this.cancelButton;
          return this._translate(forTranslate);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.activeModal.dismiss('canceled');
        }
      }, {
        key: "_translate",
        value: function _translate(key) {
          var translationResult = '';
          this.translateService.get(key).subscribe(function (res) {
            translationResult = res;
          });
          return translationResult;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngDestroy$.next();
          this.ngDestroy$.complete();
        }
      }]);

      return ConfimationModalComponent;
    }();

    ConfimationModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ConfimationModalComponent.prototype, "confirmEvent", void 0);
    ConfimationModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./confirmation-modal.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./confirmation-modal.component.scss */
      "./src/app/@shared/confirmation-modal/confirmation-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])], ConfimationModalComponent);
    /***/
  },

  /***/
  "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/@shared/confirmation-modal/confirmation-modal.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ConfirmationModalModule */

  /***/
  function srcAppSharedConfirmationModalConfirmationModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationModalModule", function () {
      return ConfirmationModalModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./confirmation-modal.component */
    "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var COMPONENTS = [_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfimationModalComponent"]];

    var ConfirmationModalModule = function ConfirmationModalModule() {
      _classCallCheck(this, ConfirmationModalModule);
    };

    ConfirmationModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(), angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"]],
      declarations: COMPONENTS,
      entryComponents: COMPONENTS,
      exports: COMPONENTS
    })], ConfirmationModalModule);
    /***/
  },

  /***/
  "./src/app/@theme/index.ts":
  /*!*********************************!*\
    !*** ./src/app/@theme/index.ts ***!
    \*********************************/

  /*! exports provided: HttpLoaderFactory, ThemeModule */

  /***/
  function srcAppThemeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return _theme_module__WEBPACK_IMPORTED_MODULE_1__["HttpLoaderFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
      return _theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"];
    });
    /***/

  },

  /***/
  "./src/app/pages/+orders/+order/order-products/order-products.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/+orders/+order/order-products/order-products.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersOrderOrderProductsOrderProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::ng-deep .order-product ng2-smart-table .ng2-smart-th.qty input {\n  text-align: center;\n}\n\n:host ::ng-deep .order-product ng2-smart-table .ng2-smart-titles.ng-star-inserted:first-child {\n  text-align: center;\n}\n\n.order-product .break-line {\n  border-bottom: 1px solid #ebeef2;\n  margin-top: 1.2rem;\n  margin-bottom: 1.25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9ldmVyL3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK29yZGVycy8rb3JkZXIvb3JkZXItcHJvZHVjdHMvb3JkZXItcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytvcmRlcnMvK29yZGVyL29yZGVyLXByb2R1Y3RzL29yZGVyLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQWtCO0FDQXBCOztBREZBO0VBTUUsa0JBQWtCO0FDQXBCOztBRElBO0VBRUUsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixzQkFBc0I7QUNGeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rb3JkZXJzLytvcmRlci9vcmRlci1wcm9kdWN0cy9vcmRlci1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAub3JkZXItcHJvZHVjdCBuZzItc21hcnQtdGFibGUge1xuXHQubmcyLXNtYXJ0LXRoLnF0eSBpbnB1dCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0Lm5nMi1zbWFydC10aXRsZXMubmctc3Rhci1pbnNlcnRlZDpmaXJzdC1jaGlsZCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG59XG5cbi5vcmRlci1wcm9kdWN0IHtcblx0LmJyZWFrLWxpbmUge1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZWYyO1xuXHRcdG1hcmdpbi10b3A6IDEuMnJlbTtcblx0XHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuXHR9XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLm9yZGVyLXByb2R1Y3QgbmcyLXNtYXJ0LXRhYmxlIC5uZzItc21hcnQtdGgucXR5IGlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm9yZGVyLXByb2R1Y3QgbmcyLXNtYXJ0LXRhYmxlIC5uZzItc21hcnQtdGl0bGVzLm5nLXN0YXItaW5zZXJ0ZWQ6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcmRlci1wcm9kdWN0IC5icmVhay1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmVlZjI7XG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/+orders/+order/order-products/order-products.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/+orders/+order/order-products/order-products.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: OrderProductsComponent */

  /***/
  function srcAppPagesOrdersOrderOrderProductsOrderProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderProductsComponent", function () {
      return OrderProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/server.common/entities/Order */
    "../common/src/entities/Order.ts");
    /* harmony import */


    var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/client.common.angular2/locale/product-locales.service */
    "../common-angular/src/locale/product-locales.service.ts");
    /* harmony import */


    var _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/client.common.angular2/routers/warehouse-orders-router.service */
    "../common-angular/src/routers/warehouse-orders-router.service.ts");
    /* harmony import */


    var _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @modules/server.common/enums/OrderWarehouseStatus */
    "../common/src/enums/OrderWarehouseStatus.ts");
    /* harmony import */


    var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @modules/server.common/enums/OrderCarrierStatus */
    "../common/src/enums/OrderCarrierStatus.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @modules/client.common.angular2/routers/order-router.service */
    "../common-angular/src/routers/order-router.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../@shared/confirmation-modal/confirmation-modal.component */
    "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
    /* harmony import */


    var _shared_render_component_store_products_table_store_order_product_amount_store_order_product_amount_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component */
    "./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.ts");
    /* harmony import */


    var _shared_render_component_product_title_redirect_product_title_redirect_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../@shared/render-component/product-title-redirect/product-title-redirect.component */
    "./src/app/@shared/render-component/product-title-redirect/product-title-redirect.component.ts");
    /* harmony import */


    var _shared_render_component_store_products_table_store_product_price_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../@shared/render-component/store-products-table/store-product-price.component */
    "./src/app/@shared/render-component/store-products-table/store-product-price.component.ts");
    /* harmony import */


    var _shared_render_component_store_products_table_store_product_image_store_product_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../../@shared/render-component/store-products-table/store-product-image/store-product-image.component */
    "./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.ts");
    /* harmony import */


    var _shared_warehouse_warehouse_order_modal_warehouse_order_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../../@shared/warehouse/+warehouse-order-modal/warehouse-order-modal.component */
    "./src/app/@shared/warehouse/+warehouse-order-modal/warehouse-order-modal.component.ts");

    var OrderProductsComponent = /*#__PURE__*/function () {
      function OrderProductsComponent(_productLocalesService, warehouseOrdersRouter, modalService, orderRouter, _translateService, router, _toasterService) {
        _classCallCheck(this, OrderProductsComponent);

        this._productLocalesService = _productLocalesService;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.modalService = modalService;
        this.orderRouter = orderRouter;
        this._translateService = _translateService;
        this.router = router;
        this._toasterService = _toasterService;
        this.selectedProducts = [];
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

        this._loadSmartTableSettings();
      }

      _createClass(OrderProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDataSmartTable();

          this._applyTranslationOnSmartTable();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.loadDataSmartTable();
        }
      }, {
        key: "loadDataSmartTable",
        value: function loadDataSmartTable() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loadData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    loadData = function loadData() {
                      if (_this.order) {
                        var productsVM = _this.order.products.map(function (product) {
                          return {
                            id: product.product.id,
                            price: product.price,
                            qty: product.count,
                            product: product.product,
                            image: _this._productLocalesService.getTranslate(product.product['images']),
                            disableImg: true,
                            orderId: _this.order.id,
                            orderWarehouseId: _this.order.warehouseId,
                            warehouseProducts: _this.order.warehouse['products']
                          };
                        });

                        _this.sourceSmartTable.load(productsVM);
                      }
                    };

                    loadData();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "selectProductTmp",
        value: function selectProductTmp(ev) {
          this.selectedProducts = ev.selected;
        }
      }, {
        key: "addProductsModalTranslates",
        value: function addProductsModalTranslates() {
          var _this2 = this;

          var columnTitlePrefix = 'ORDER_VIEW.ORDER_PRODUCT_INFO.';

          var getTranslatedWords = function getTranslatedWords(name) {
            return _this2._translateService.get(columnTitlePrefix + name);
          };

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(getTranslatedWords('ADD_PRODUCTS_MODAL'), getTranslatedWords('ADD'), getTranslatedWords('SUCCESS_TOAST'), getTranslatedWords('ERROR_TOAST')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._ngDestroy$)).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 4),
                addProduct = _ref2[0],
                add = _ref2[1],
                successToast = _ref2[2],
                errorToast = _ref2[3];

            _this2.actionBtnText = add;
            _this2.modalTitle = addProduct;
            _this2.toastSuccMsg = successToast;
            _this2.toastErrMsg = errorToast;
          });
        }
      }, {
        key: "addProducts",
        value: function addProducts() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var componentRef, instance, products;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.order) {
                      _context2.next = 11;
                      break;
                    }

                    componentRef = this.modalService.open(_shared_warehouse_warehouse_order_modal_warehouse_order_modal_component__WEBPACK_IMPORTED_MODULE_20__["WarehouseOrderModalComponent"], {
                      size: 'lg',
                      container: 'nb-layout',
                      windowClass: 'ng-custom',
                      backdrop: 'static'
                    });
                    instance = componentRef.componentInstance;
                    instance.warehouseId = this.order.warehouseId;
                    instance.modalTitle = this.modalTitle;
                    instance.actionBtnText = this.actionBtnText;
                    _context2.next = 8;
                    return instance.makeOrderEmitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])()).toPromise();

                  case 8:
                    products = _context2.sent;
                    this.orderRouter.addProducts(this.order.id, products, this.order.warehouseId).then(function (r) {
                      _this3._toasterService.pop("success", "".concat(_this3.toastSuccMsg, "!"));
                    })["catch"](function (err) {
                      _this3._toasterService.pop("error", "".concat(_this3.toastErrMsg, "!"));
                    });
                    componentRef.close();

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "removeSelectedProducts",
        value: function removeSelectedProducts() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var productsIds, order;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    productsIds = this.selectedProducts.map(function (res) {
                      return res['id'];
                    });

                    if (!(this.order && productsIds.length > 0)) {
                      _context3.next = 16;
                      break;
                    }

                    _context3.prev = 2;
                    this.loading = true;
                    _context3.next = 6;
                    return this.orderRouter.removeProducts(this.order.id, productsIds);

                  case 6:
                    order = _context3.sent;
                    this.selectedProducts = [];
                    this.loading = false;

                    this._toasterService.pop("success", "Selected products are deleted!");

                    _context3.next = 16;
                    break;

                  case 12:
                    _context3.prev = 12;
                    _context3.t0 = _context3["catch"](2);
                    this.loading = false;

                    this._toasterService.pop('error', "Error: \"".concat(_context3.t0.message, "\""));

                  case 16:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[2, 12]]);
          }));
        }
      }, {
        key: "cancelOrder",
        value: function cancelOrder() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var activeModal, modalComponent;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    activeModal = this.modalService.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConfimationModalComponent"], {
                      size: 'sm',
                      container: 'nb-layout',
                      backdrop: 'static'
                    });
                    modalComponent = activeModal.componentInstance;
                    _context4.next = 4;
                    return modalComponent.confirmEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(modalComponent.ngDestroy$)).subscribe(function (dataEvent) {
                      if (_this4.order) {
                        try {
                          _this4.loading = true;

                          var res = _this4.warehouseOrdersRouter.cancel(_this4.order.id);

                          _this4.loading = false;

                          _this4._toasterService.pop("success", "Order is canceled!");
                        } catch (error) {
                          _this4.loading = false;

                          _this4._toasterService.pop('error', "Error: \"".concat(error.message, "\""));
                        }
                      }

                      modalComponent.cancel();
                    });

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "_loadSmartTableSettings",
        value: function _loadSmartTableSettings() {
          var _this5 = this;

          var columnTitlePrefix = 'ORDER_VIEW.ORDER_PRODUCT_INFO.SMART_TABLE.';

          var getTranslate = function getTranslate(name) {
            return _this5._translateService.get(columnTitlePrefix + name);
          };

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this._translateService.get('Id'), getTranslate('IMAGE'), getTranslate('NAME'), getTranslate('QTY'), getTranslate('PRICE')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._ngDestroy$)).subscribe(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 5),
                id = _ref4[0],
                image = _ref4[1],
                name = _ref4[2],
                qty = _ref4[3],
                price = _ref4[4];

            _this5.settingsSmartTable = {
              actions: false,
              selectMode: 'multi',
              columns: {
                name: {
                  title: name,
                  renderComponent: _shared_render_component_product_title_redirect_product_title_redirect_component__WEBPACK_IMPORTED_MODULE_17__["ProductTitleRedirectComponent"],
                  type: 'custom'
                },
                qty: {
                  title: qty,
                  "class": 'text-center',
                  type: 'custom',
                  width: '15%',
                  renderComponent: _shared_render_component_store_products_table_store_order_product_amount_store_order_product_amount_component__WEBPACK_IMPORTED_MODULE_16__["StoreOrderProductAmountComponent"]
                },
                price: {
                  title: price,
                  type: 'custom',
                  width: '20%',
                  renderComponent: _shared_render_component_store_products_table_store_product_price_component__WEBPACK_IMPORTED_MODULE_18__["StoreProductPriceComponent"]
                },
                image: {
                  title: image,
                  type: 'custom',
                  "class": 'text-center',
                  renderComponent: _shared_render_component_store_products_table_store_product_image_store_product_image_component__WEBPACK_IMPORTED_MODULE_19__["StoreProductImageComponent"],
                  filter: false
                }
              },
              pager: {
                display: true,
                perPage: 5
              }
            };
          });
        }
      }, {
        key: "_applyTranslationOnSmartTable",
        value: function _applyTranslationOnSmartTable() {
          var _this6 = this;

          this.addProductsModalTranslates();

          this._translateService.onLangChange.subscribe(function () {
            _this6._loadSmartTableSettings();

            _this6.addProductsModalTranslates();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._ngDestroy$.next();

          this._ngDestroy$.complete();
        }
      }, {
        key: "givenToCarrier",
        get: function get() {
          return _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_7__["default"].GivenToCarrier;
        }
      }, {
        key: "deliveryCompleted",
        get: function get() {
          return _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_8__["default"].DeliveryCompleted;
        }
      }]);

      return OrderProductsComponent;
    }();

    OrderProductsComponent.ctorParameters = function () {
      return [{
        type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__["ProductLocalesService"]
      }, {
        type: _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseOrdersRouter"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]
      }, {
        type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_11__["OrderRouter"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
      }, {
        type: angular2_toaster__WEBPACK_IMPORTED_MODULE_14__["ToasterService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_4__["default"])], OrderProductsComponent.prototype, "order", void 0);
    OrderProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-order-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-products.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/+order/order-products/order-products.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! .//order-products.component.scss */
      "./src/app/pages/+orders/+order/order-products/order-products.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__["ProductLocalesService"], _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseOrdersRouter"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_11__["OrderRouter"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_14__["ToasterService"]])], OrderProductsComponent);
    /***/
  },

  /***/
  "./src/app/pages/+orders/+order/order-products/order-products.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/+orders/+order/order-products/order-products.module.ts ***!
    \******************************************************************************/

  /*! exports provided: OrderProductsModule */

  /***/
  function srcAppPagesOrdersOrderOrderProductsOrderProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderProductsModule", function () {
      return OrderProductsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _order_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-products.component */
    "./src/app/pages/+orders/+order/order-products/order-products.component.ts");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var _app_shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/@shared/render-component/render-components.module */
    "./src/app/@shared/render-component/render-components.module.ts");
    /* harmony import */


    var _app_shared_render_component_store_products_table_store_products_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/@shared/render-component/store-products-table/store-products-table.module */
    "./src/app/@shared/render-component/store-products-table/store-products-table.module.ts");
    /* harmony import */


    var _app_shared_warehouse_warehouse_order_modal_warehouse_order_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/@shared/warehouse/+warehouse-order-modal/warehouse-order-modal.module */
    "./src/app/@shared/warehouse/+warehouse-order-modal/warehouse-order-modal.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @app/@shared/confirmation-modal/confirmation-modal.module */
    "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts");

    var OrderProductsModule = function OrderProductsModule() {
      _classCallCheck(this, OrderProductsModule);
    };

    OrderProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _app_theme__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterModule"].forRoot(), ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild(), _app_shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_7__["RenderComponentsModule"], _app_shared_render_component_store_products_table_store_products_table_module__WEBPACK_IMPORTED_MODULE_8__["StoreProductsTableModule"], _app_shared_warehouse_warehouse_order_modal_warehouse_order_modal_module__WEBPACK_IMPORTED_MODULE_9__["WarehouseOrderModalModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbSpinnerModule"], _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_12__["ConfirmationModalModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbButtonModule"]],
      declarations: [_order_products_component__WEBPACK_IMPORTED_MODULE_5__["OrderProductsComponent"]],
      exports: [_order_products_component__WEBPACK_IMPORTED_MODULE_5__["OrderProductsComponent"]]
    })], OrderProductsModule);
    /***/
  },

  /***/
  "./src/app/pages/+orders/+order/order.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/+orders/+order/order.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersOrderOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order-page .order-map {\n  height: 25rem;\n}\n\n.order-page .order-map .sub-title {\n  height: 10%;\n}\n\n.order-page .order-map .sub-title :first-child {\n  width: 100%;\n  text-align: right;\n  margin: 0;\n  padding: 0 1.25rem;\n}\n\n.order-page .order-map .map {\n  height: 90%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9ldmVyL3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK29yZGVycy8rb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytvcmRlcnMvK29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBYTtBQ0FmOztBREZBO0VBSUcsV0FBVztBQ0VkOztBRE5BO0VBT0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0FDR3RCOztBRGJBO0VBZUcsV0FBVztBQ0VkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvK29yZGVycy8rb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItcGFnZSB7XG5cdC5vcmRlci1tYXAge1xuXHRcdGhlaWdodDogMjVyZW07XG5cdFx0LnN1Yi10aXRsZSB7XG5cdFx0XHRoZWlnaHQ6IDEwJTtcblxuXHRcdFx0OmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMS4yNXJlbTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubWFwIHtcblx0XHRcdGhlaWdodDogOTAlO1xuXHRcdH1cblx0fVxufVxuIiwiLm9yZGVyLXBhZ2UgLm9yZGVyLW1hcCB7XG4gIGhlaWdodDogMjVyZW07XG59XG5cbi5vcmRlci1wYWdlIC5vcmRlci1tYXAgLnN1Yi10aXRsZSB7XG4gIGhlaWdodDogMTAlO1xufVxuXG4ub3JkZXItcGFnZSAub3JkZXItbWFwIC5zdWItdGl0bGUgOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMS4yNXJlbTtcbn1cblxuLm9yZGVyLXBhZ2UgLm9yZGVyLW1hcCAubWFwIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/+orders/+order/order.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/+orders/+order/order.component.ts ***!
    \*********************************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppPagesOrdersOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/client.common.angular2/routers/order-router.service */
    "../common-angular/src/routers/order-router.service.ts");
    /* harmony import */


    var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/server.common/enums/OrderCarrierStatus */
    "../common/src/enums/OrderCarrierStatus.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @modules/server.common/utils */
    "../common/src/utils.ts");

    var service = new google.maps.DistanceMatrixService();

    var OrderComponent = /*#__PURE__*/function () {
      function OrderComponent(_router, orderRouter, translateService) {
        var _this7 = this;

        _classCallCheck(this, OrderComponent);

        this._router = _router;
        this.orderRouter = orderRouter;
        this.translateService = translateService;
        this.PREFIX = 'ORDER_VIEW.ORDER_SIDEBAR.';
        this.WAREHOUSE_TITLE = 'WAREHOUSE';
        this.CUSTOMER_TITLE = 'CUSTOMER';
        this.CARRIER_TITLE = 'CARRIER';
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.order$ = this._router.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
          return _this7.orderRouter.get(params.id, {
            populateWarehouse: true,
            populateCarrier: true
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$));
      }

      _createClass(OrderComponent, [{
        key: "getTotalPrice",
        value: function getTotalPrice(order) {
          if (order && order.products.length > 0) {
            return order.products.map(function (p) {
              return p.price * p.count;
            }).reduce(function (a, b) {
              return a + b;
            }, 0);
          } else {
            return 0;
          }
        }
      }, {
        key: "getWarehouseContactDetails",
        value: function getWarehouseContactDetails(warehouse) {
          var details = [];

          if (warehouse) {
            details.push(warehouse.name);
            details.push(warehouse.contactPhone);
            details.push(warehouse.contactEmail);
          }

          if (warehouse.geoLocation) {
            details.push(this.getFullAddress(warehouse.geoLocation));
          }

          return details.filter(function (d) {
            return d;
          });
        }
      }, {
        key: "getCustomerContactDetails",
        value: function getCustomerContactDetails(user) {
          var details = [];

          if (user) {
            var name = '';

            if (user.firstName) {
              name += user.firstName;
            }

            if (user.lastName) {
              name += ' ' + user.lastName;
            }

            details.push(name);
            details.push(user.phone);
            details.push(user.email);
          }

          if (user.geoLocation) {
            details.push(user.fullAddress);
          }

          return details.filter(function (d) {
            return d;
          });
        }
      }, {
        key: "getCarrierContactDetails",
        value: function getCarrierContactDetails(carrier) {
          var details = [];

          if (carrier) {
            details.push(carrier.firstName ? carrier.firstName + ' ' + carrier.lastName : carrier.username);
            details.push(carrier.phone);
          }

          if (carrier.geoLocation) {
            details.push(this.getFullAddress(carrier.geoLocation));
          }

          return details.filter(function (d) {
            return d;
          });
        }
      }, {
        key: "getOrderName",
        value: function getOrderName(order) {
          if (order) {
            return Object(_modules_server_common_utils__WEBPACK_IMPORTED_MODULE_8__["getIdFromTheDate"])(order);
          }
        }
      }, {
        key: "isCarrierCurrent",
        value: function isCarrierCurrent(order) {
          return order.carrierStatus >= _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__["default"].CarrierPickedUpOrder && !order['isCompleted'];
        }
      }, {
        key: "getDistance",
        value: function getDistance(geoLocation1, geoLocation2) {
          var _this8 = this;

          if (!this.distance && geoLocation1 && geoLocation2) {
            this.distance = '0';
            service.getDistanceMatrix({
              origins: [new google.maps.LatLng(geoLocation1.coordinates.lat, geoLocation1.coordinates.lng)],
              destinations: [new google.maps.LatLng(geoLocation2.coordinates.lat, geoLocation2.coordinates.lng)],
              travelMode: google.maps.TravelMode.DRIVING,
              unitSystem: google.maps.UnitSystem.METRIC,
              avoidHighways: false,
              avoidTolls: false
            }, function (response, status) {
              if (status === google.maps.DistanceMatrixStatus.OK) {
                _this8.distance = response.rows[0].elements[0].distance['text'];
              }
            });
          }

          return this.distance;
        }
      }, {
        key: "getFullAddress",
        value: function getFullAddress(geoLocation) {
          return "".concat(geoLocation.city, ", ").concat(geoLocation.streetAddress, " ") + "".concat(geoLocation.house);
        }
      }, {
        key: "_translate",
        value: function _translate(key) {
          var translationResult = '';
          this.translateService.get(key).subscribe(function (res) {
            translationResult = res;
          });
          return translationResult;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngDestroy$.next();
          this.ngDestroy$.complete();
        }
      }, {
        key: "titleWarehouse",
        get: function get() {
          var titleForTr = this.PREFIX + this.WAREHOUSE_TITLE;
          return this._translate(titleForTr);
        }
      }, {
        key: "titleCustomer",
        get: function get() {
          var titleForTr = this.PREFIX + this.CUSTOMER_TITLE;
          return this._translate(titleForTr);
        }
      }, {
        key: "titleCarrier",
        get: function get() {
          var titleForTr = this.PREFIX + this.CARRIER_TITLE;
          return this._translate(titleForTr);
        }
      }]);

      return OrderComponent;
    }();

    OrderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_5__["OrderRouter"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }];
    };

    OrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-order',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/+order/order.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order.component.scss */
      "./src/app/pages/+orders/+order/order.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_5__["OrderRouter"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])], OrderComponent);
    /***/
  },

  /***/
  "./src/app/pages/+orders/+order/order.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/+orders/+order/order.module.ts ***!
    \******************************************************/

  /*! exports provided: OrderModule */

  /***/
  function srcAppPagesOrdersOrderOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
      return OrderModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order.component */
    "./src/app/pages/+orders/+order/order.component.ts");
    /* harmony import */


    var _sidebar_info_box_sidebar_info_box_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sidebar-info-box/sidebar-info-box.module */
    "./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.module.ts");
    /* harmony import */


    var _app_pages_warehouses_warehouse_warehouse_order_view_warehouse_order_view_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/pages/+warehouses/+warehouse/warehouse-order-view/warehouse-order-view.module */
    "./src/app/pages/+warehouses/+warehouse/warehouse-order-view/warehouse-order-view.module.ts");
    /* harmony import */


    var _app_shared_order_order_map_order_map_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/@shared/order/order-map/order-map.module */
    "./src/app/@shared/order/order-map/order-map.module.ts");
    /* harmony import */


    var _order_products_order_products_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./order-products/order-products.module */
    "./src/app/pages/+orders/+order/order-products/order-products.module.ts");

    var OrderModule = function OrderModule() {
      _classCallCheck(this, OrderModule);
    };

    OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _sidebar_info_box_sidebar_info_box_module__WEBPACK_IMPORTED_MODULE_7__["SidebarInfoBoxModule"], _app_pages_warehouses_warehouse_warehouse_order_view_warehouse_order_view_module__WEBPACK_IMPORTED_MODULE_8__["WarehouseOrderViewModule"], _app_shared_order_order_map_order_map_module__WEBPACK_IMPORTED_MODULE_9__["OrderMapModule"], _order_products_order_products_module__WEBPACK_IMPORTED_MODULE_10__["OrderProductsModule"]],
      declarations: [_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"]]
    })], OrderModule);
    /***/
  },

  /***/
  "./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersOrderSidebarInfoBoxSidebarInfoBoxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order-sidebar-info-box {\n  position: relative !important;\n  overflow-x: hidden !important;\n}\n\n.order-sidebar-info-box .img-container {\n  height: 80px;\n}\n\n.order-sidebar-info-box .img-container img {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9ldmVyL3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK29yZGVycy8rb3JkZXIvc2lkZWJhci1pbmZvLWJveC9zaWRlYmFyLWluZm8tYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy8rb3JkZXJzLytvcmRlci9zaWRlYmFyLWluZm8tYm94L3NpZGViYXItaW5mby1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw2QkFBNkI7RUFDN0IsNkJBQTZCO0FDQzlCOztBREhBO0VBSUUsWUFBWTtBQ0dkOztBRFBBO0VBTUcsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNLbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rb3JkZXJzLytvcmRlci9zaWRlYmFyLWluZm8tYm94L3NpZGViYXItaW5mby1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItc2lkZWJhci1pbmZvLWJveCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuXHRvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcblx0LmltZy1jb250YWluZXIge1xuXHRcdGhlaWdodDogODBweDtcblx0XHRpbWcge1xuXHRcdFx0bWF4LWhlaWdodDogMTAwJTtcblx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cbn1cbiIsIi5vcmRlci1zaWRlYmFyLWluZm8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItc2lkZWJhci1pbmZvLWJveCAuaW1nLWNvbnRhaW5lciB7XG4gIGhlaWdodDogODBweDtcbn1cblxuLm9yZGVyLXNpZGViYXItaW5mby1ib3ggLmltZy1jb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: SidebarInfoBoxComponent */

  /***/
  function srcAppPagesOrdersOrderSidebarInfoBoxSidebarInfoBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarInfoBoxComponent", function () {
      return SidebarInfoBoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SidebarInfoBoxComponent = /*#__PURE__*/function () {
      function SidebarInfoBoxComponent(router) {
        _classCallCheck(this, SidebarInfoBoxComponent);

        this.router = router;
      }

      _createClass(SidebarInfoBoxComponent, [{
        key: "redirect",
        value: function redirect() {
          if (this.redirectUrl) {
            this.router.navigate([this.redirectUrl]);
          }
        }
      }]);

      return SidebarInfoBoxComponent;
    }();

    SidebarInfoBoxComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SidebarInfoBoxComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SidebarInfoBoxComponent.prototype, "imageUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], SidebarInfoBoxComponent.prototype, "contactDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SidebarInfoBoxComponent.prototype, "redirectUrl", void 0);
    SidebarInfoBoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-order-sidebar-info-box',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sidebar-info-box.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sidebar-info-box.component.scss */
      "./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SidebarInfoBoxComponent);
    /***/
  },

  /***/
  "./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: SidebarInfoBoxModule */

  /***/
  function srcAppPagesOrdersOrderSidebarInfoBoxSidebarInfoBoxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarInfoBoxModule", function () {
      return SidebarInfoBoxModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var _sidebar_info_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sidebar-info-box.component */
    "./src/app/pages/+orders/+order/sidebar-info-box/sidebar-info-box.component.ts");

    var SidebarInfoBoxModule = function SidebarInfoBoxModule() {
      _classCallCheck(this, SidebarInfoBoxModule);
    };

    SidebarInfoBoxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_theme__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()],
      declarations: [_sidebar_info_box_component__WEBPACK_IMPORTED_MODULE_6__["SidebarInfoBoxComponent"]],
      exports: [_sidebar_info_box_component__WEBPACK_IMPORTED_MODULE_6__["SidebarInfoBoxComponent"]]
    })], SidebarInfoBoxModule);
    /***/
  },

  /***/
  "./src/app/pages/+orders/orders.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/+orders/orders.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersOrdersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytvcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/+orders/orders.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/+orders/orders.component.ts ***!
    \***************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppPagesOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrdersComponent = function OrdersComponent() {
      _classCallCheck(this, OrdersComponent);
    };

    OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-orders',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+orders/orders.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! .//orders.component.scss */
      "./src/app/pages/+orders/orders.component.scss"))["default"]]
    })], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/pages/+orders/orders.module.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/+orders/orders.module.ts ***!
    \************************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppPagesOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var _orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/pages/+orders/orders.component.ts");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./+order/order.component */
    "./src/app/pages/+orders/+order/order.component.ts");
    /* harmony import */


    var _order_order_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./+order/order.module */
    "./src/app/pages/+orders/+order/order.module.ts");

    var routes = [{
      path: '',
      component: _orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"]
    }, {
      path: ':id',
      component: _order_order_component__WEBPACK_IMPORTED_MODULE_10__["OrderComponent"]
    }];

    var OrdersModule = function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    };

    OrdersModule.routes = routes;
    OrdersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"], _theme__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HighlightModule"].forRoot({
        theme: 'github'
      }), _order_order_module__WEBPACK_IMPORTED_MODULE_11__["OrderModule"]],
      declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]]
    })], OrdersModule);
    /***/
  }
}]);
//# sourceMappingURL=app-pages-orders-orders-module-es5.js.map