(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SBS\Desktop\Stuff\PFE\Source Code\Ionic FE\src\main.ts */"zUnb");


/***/ }),

/***/ "1qK/":
/*!**********************************************************************!*\
  !*** ./src/app/Pages/store/product-list/product-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "2Fht":
/*!*********************************************!*\
  !*** ./src/app/Pages/store/store.module.ts ***!
  \*********************************************/
/*! exports provided: StorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageModule", function() { return StorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _store_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store-routing.module */ "zIDB");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.page */ "LUCA");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list/product-list.component */ "DTpS");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "cTmv");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "STbY");














let StorePageModule = class StorePageModule {
};
StorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _store_routing_module__WEBPACK_IMPORTED_MODULE_5__["StorePageRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["_MatMenuDirectivesModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"]
        ],
        declarations: [_store_page__WEBPACK_IMPORTED_MODULE_6__["StorePage"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"]]
    })
], StorePageModule);



/***/ }),

/***/ "2n0H":
/*!***************************************************!*\
  !*** ./src/app/directives/has-admin.directive.ts ***!
  \***************************************************/
/*! exports provided: HasAdminDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasAdminDirective", function() { return HasAdminDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");



let HasAdminDirective = class HasAdminDirective {
    constructor(authService, templateRef, viewContainer) {
        this.authService = authService;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.authService.currentUser.subscribe(_ => {
            if (this.authService.isAdmin()) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        });
    }
};
HasAdminDirective.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
HasAdminDirective.propDecorators = {
    adminRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['appHasAdmin',] }]
};
HasAdminDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHasAdmin]'
    })
], HasAdminDirective);



/***/ }),

/***/ "5LDg":
/*!************************************************!*\
  !*** ./src/app/services/auth-token.service.ts ***!
  \************************************************/
/*! exports provided: AuthTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenService", function() { return AuthTokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");





let AuthTokenService = class AuthTokenService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.isLoggedIn = null;
        this.authToken = null;
        this.init().then(err => console.log(err));
    }
    loadSession() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.storage.get('token');
            console.log(token);
            if (token) {
                this.authToken = token;
                this.isLoggedIn = yield this.storage.get('status');
            }
            console.log(this.storage.keys());
        });
    }
    destroySession() {
        this.isLoggedIn = null;
        this.authToken = null;
        this.storage.clear().then(err => console.log(err));
    }
    saveSession(authToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.set('token', authToken);
            yield this.storage.set('status', true);
            yield this.loadSession();
        });
    }
    getPayload() {
        return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(this.authToken);
    }
    getStatus() {
        return this.isLoggedIn;
    }
    getToken() {
        return this.authToken;
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If using, define drivers here: await this.storage.defineDriver(/*...*/);
            this.storage = yield this.storage.create();
        });
    }
};
AuthTokenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
AuthTokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthTokenService);



/***/ }),

/***/ "7vhd":
/*!*****************************************************!*\
  !*** ./src/app/Layout/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap\");\n/*!\n * Bootstrap Grid v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n.container,\n.container-fluid,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.col-xl,\n.col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg,\n.col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md,\n.col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm,\n.col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col,\n.col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n.row-cols-1 > * {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.row-cols-2 > * {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.row-cols-3 > * {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.row-cols-4 > * {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.row-cols-5 > * {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n.row-cols-6 > * {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n.col-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.col-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.col-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.col-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.col-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.col-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.col-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.col-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.order-first {\n  order: -1;\n}\n.order-last {\n  order: 13;\n}\n.order-0 {\n  order: 0;\n}\n.order-1 {\n  order: 1;\n}\n.order-2 {\n  order: 2;\n}\n.order-3 {\n  order: 3;\n}\n.order-4 {\n  order: 4;\n}\n.order-5 {\n  order: 5;\n}\n.order-6 {\n  order: 6;\n}\n.order-7 {\n  order: 7;\n}\n.order-8 {\n  order: 8;\n}\n.order-9 {\n  order: 9;\n}\n.order-10 {\n  order: 10;\n}\n.order-11 {\n  order: 11;\n}\n.order-12 {\n  order: 12;\n}\n.offset-1 {\n  margin-left: 8.3333333333%;\n}\n.offset-2 {\n  margin-left: 16.6666666667%;\n}\n.offset-3 {\n  margin-left: 25%;\n}\n.offset-4 {\n  margin-left: 33.3333333333%;\n}\n.offset-5 {\n  margin-left: 41.6666666667%;\n}\n.offset-6 {\n  margin-left: 50%;\n}\n.offset-7 {\n  margin-left: 58.3333333333%;\n}\n.offset-8 {\n  margin-left: 66.6666666667%;\n}\n.offset-9 {\n  margin-left: 75%;\n}\n.offset-10 {\n  margin-left: 83.3333333333%;\n}\n.offset-11 {\n  margin-left: 91.6666666667%;\n}\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-sm-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-sm-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-sm-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-sm-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-sm-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-sm-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-sm-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-sm-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-sm-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-sm-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-sm-first {\n    order: -1;\n  }\n\n  .order-sm-last {\n    order: 13;\n  }\n\n  .order-sm-0 {\n    order: 0;\n  }\n\n  .order-sm-1 {\n    order: 1;\n  }\n\n  .order-sm-2 {\n    order: 2;\n  }\n\n  .order-sm-3 {\n    order: 3;\n  }\n\n  .order-sm-4 {\n    order: 4;\n  }\n\n  .order-sm-5 {\n    order: 5;\n  }\n\n  .order-sm-6 {\n    order: 6;\n  }\n\n  .order-sm-7 {\n    order: 7;\n  }\n\n  .order-sm-8 {\n    order: 8;\n  }\n\n  .order-sm-9 {\n    order: 9;\n  }\n\n  .order-sm-10 {\n    order: 10;\n  }\n\n  .order-sm-11 {\n    order: 11;\n  }\n\n  .order-sm-12 {\n    order: 12;\n  }\n\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n\n  .offset-sm-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-sm-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n\n  .offset-sm-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-sm-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n\n  .offset-sm-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-sm-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n\n  .offset-sm-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-sm-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-md-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-md-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-md-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-md-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-md-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-md-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-md-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-md-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-md-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-md-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-md-first {\n    order: -1;\n  }\n\n  .order-md-last {\n    order: 13;\n  }\n\n  .order-md-0 {\n    order: 0;\n  }\n\n  .order-md-1 {\n    order: 1;\n  }\n\n  .order-md-2 {\n    order: 2;\n  }\n\n  .order-md-3 {\n    order: 3;\n  }\n\n  .order-md-4 {\n    order: 4;\n  }\n\n  .order-md-5 {\n    order: 5;\n  }\n\n  .order-md-6 {\n    order: 6;\n  }\n\n  .order-md-7 {\n    order: 7;\n  }\n\n  .order-md-8 {\n    order: 8;\n  }\n\n  .order-md-9 {\n    order: 9;\n  }\n\n  .order-md-10 {\n    order: 10;\n  }\n\n  .order-md-11 {\n    order: 11;\n  }\n\n  .order-md-12 {\n    order: 12;\n  }\n\n  .offset-md-0 {\n    margin-left: 0;\n  }\n\n  .offset-md-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-md-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n\n  .offset-md-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-md-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n\n  .offset-md-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-md-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n\n  .offset-md-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-md-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-lg-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-lg-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-lg-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-lg-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-lg-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-lg-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-lg-first {\n    order: -1;\n  }\n\n  .order-lg-last {\n    order: 13;\n  }\n\n  .order-lg-0 {\n    order: 0;\n  }\n\n  .order-lg-1 {\n    order: 1;\n  }\n\n  .order-lg-2 {\n    order: 2;\n  }\n\n  .order-lg-3 {\n    order: 3;\n  }\n\n  .order-lg-4 {\n    order: 4;\n  }\n\n  .order-lg-5 {\n    order: 5;\n  }\n\n  .order-lg-6 {\n    order: 6;\n  }\n\n  .order-lg-7 {\n    order: 7;\n  }\n\n  .order-lg-8 {\n    order: 8;\n  }\n\n  .order-lg-9 {\n    order: 9;\n  }\n\n  .order-lg-10 {\n    order: 10;\n  }\n\n  .order-lg-11 {\n    order: 11;\n  }\n\n  .order-lg-12 {\n    order: 12;\n  }\n\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n\n  .offset-lg-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-lg-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n\n  .offset-lg-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-lg-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n\n  .offset-lg-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-lg-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n\n  .offset-lg-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-lg-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-xl-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-xl-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-xl-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-xl-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-xl-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-xl-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-xl-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-xl-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-xl-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-xl-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-xl-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-xl-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-xl-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-xl-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-xl-first {\n    order: -1;\n  }\n\n  .order-xl-last {\n    order: 13;\n  }\n\n  .order-xl-0 {\n    order: 0;\n  }\n\n  .order-xl-1 {\n    order: 1;\n  }\n\n  .order-xl-2 {\n    order: 2;\n  }\n\n  .order-xl-3 {\n    order: 3;\n  }\n\n  .order-xl-4 {\n    order: 4;\n  }\n\n  .order-xl-5 {\n    order: 5;\n  }\n\n  .order-xl-6 {\n    order: 6;\n  }\n\n  .order-xl-7 {\n    order: 7;\n  }\n\n  .order-xl-8 {\n    order: 8;\n  }\n\n  .order-xl-9 {\n    order: 9;\n  }\n\n  .order-xl-10 {\n    order: 10;\n  }\n\n  .order-xl-11 {\n    order: 11;\n  }\n\n  .order-xl-12 {\n    order: 12;\n  }\n\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n\n  .offset-xl-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-xl-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n\n  .offset-xl-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-xl-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n\n  .offset-xl-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-xl-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n\n  .offset-xl-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-xl-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n.d-none {\n  display: none !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.d-inline-block {\n  display: inline-block !important;\n}\n.d-block {\n  display: block !important;\n}\n.d-table {\n  display: table !important;\n}\n.d-table-row {\n  display: table-row !important;\n}\n.d-table-cell {\n  display: table-cell !important;\n}\n.d-flex {\n  display: flex !important;\n}\n.d-inline-flex {\n  display: inline-flex !important;\n}\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n\n  .d-sm-inline {\n    display: inline !important;\n  }\n\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-sm-block {\n    display: block !important;\n  }\n\n  .d-sm-table {\n    display: table !important;\n  }\n\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-sm-flex {\n    display: flex !important;\n  }\n\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n\n  .d-md-inline {\n    display: inline !important;\n  }\n\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-md-block {\n    display: block !important;\n  }\n\n  .d-md-table {\n    display: table !important;\n  }\n\n  .d-md-table-row {\n    display: table-row !important;\n  }\n\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-md-flex {\n    display: flex !important;\n  }\n\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n\n  .d-lg-inline {\n    display: inline !important;\n  }\n\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-lg-block {\n    display: block !important;\n  }\n\n  .d-lg-table {\n    display: table !important;\n  }\n\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-lg-flex {\n    display: flex !important;\n  }\n\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n\n  .d-xl-inline {\n    display: inline !important;\n  }\n\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xl-block {\n    display: block !important;\n  }\n\n  .d-xl-table {\n    display: table !important;\n  }\n\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xl-flex {\n    display: flex !important;\n  }\n\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n\n  .d-print-inline {\n    display: inline !important;\n  }\n\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-print-block {\n    display: block !important;\n  }\n\n  .d-print-table {\n    display: table !important;\n  }\n\n  .d-print-table-row {\n    display: table-row !important;\n  }\n\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-print-flex {\n    display: flex !important;\n  }\n\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n}\n.flex-row {\n  flex-direction: row !important;\n}\n.flex-column {\n  flex-direction: column !important;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n.justify-content-center {\n  justify-content: center !important;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.justify-content-around {\n  justify-content: space-around !important;\n}\n.align-items-start {\n  align-items: flex-start !important;\n}\n.align-items-end {\n  align-items: flex-end !important;\n}\n.align-items-center {\n  align-items: center !important;\n}\n.align-items-baseline {\n  align-items: baseline !important;\n}\n.align-items-stretch {\n  align-items: stretch !important;\n}\n.align-content-start {\n  align-content: flex-start !important;\n}\n.align-content-end {\n  align-content: flex-end !important;\n}\n.align-content-center {\n  align-content: center !important;\n}\n.align-content-between {\n  align-content: space-between !important;\n}\n.align-content-around {\n  align-content: space-around !important;\n}\n.align-content-stretch {\n  align-content: stretch !important;\n}\n.align-self-auto {\n  align-self: auto !important;\n}\n.align-self-start {\n  align-self: flex-start !important;\n}\n.align-self-end {\n  align-self: flex-end !important;\n}\n.align-self-center {\n  align-self: center !important;\n}\n.align-self-baseline {\n  align-self: baseline !important;\n}\n.align-self-stretch {\n  align-self: stretch !important;\n}\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-md-center {\n    align-items: center !important;\n  }\n\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-md-center {\n    align-content: center !important;\n  }\n\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-md-center {\n    align-self: center !important;\n  }\n\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n}\n.m-0 {\n  margin: 0 !important;\n}\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n.m-1 {\n  margin: 0.25rem !important;\n}\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n.m-3 {\n  margin: 1rem !important;\n}\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n.m-4 {\n  margin: 1.5rem !important;\n}\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n.m-5 {\n  margin: 3rem !important;\n}\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n.p-4 {\n  padding: 1.5rem !important;\n}\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n.p-5 {\n  padding: 3rem !important;\n}\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n.m-n1 {\n  margin: -0.25rem !important;\n}\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important;\n}\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important;\n}\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important;\n}\n.m-n2 {\n  margin: -0.5rem !important;\n}\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important;\n}\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important;\n}\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important;\n}\n.m-n3 {\n  margin: -1rem !important;\n}\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important;\n}\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important;\n}\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important;\n}\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important;\n}\n.m-n4 {\n  margin: -1.5rem !important;\n}\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important;\n}\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important;\n}\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important;\n}\n.m-n5 {\n  margin: -3rem !important;\n}\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important;\n}\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important;\n}\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important;\n}\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n\n  .mt-sm-0,\n.my-sm-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-sm-0,\n.mx-sm-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-sm-0,\n.my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-sm-0,\n.mx-sm-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-sm-1,\n.my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-sm-1,\n.mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-sm-1,\n.my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-sm-1,\n.mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-sm-2,\n.my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-sm-2,\n.mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-sm-2,\n.my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-sm-2,\n.mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-sm-3,\n.my-sm-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-sm-3,\n.mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-sm-3,\n.my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-sm-3,\n.mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-sm-4,\n.my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-sm-4,\n.mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-sm-4,\n.my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-sm-4,\n.mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-sm-5,\n.my-sm-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-sm-5,\n.mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-sm-5,\n.my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-sm-5,\n.mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n\n  .pt-sm-0,\n.py-sm-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-sm-0,\n.px-sm-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-sm-0,\n.py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-sm-0,\n.px-sm-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-sm-1,\n.py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-sm-1,\n.px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-sm-1,\n.py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-sm-1,\n.px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-sm-2,\n.py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-sm-2,\n.px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-sm-2,\n.py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-sm-2,\n.px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-sm-3,\n.py-sm-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-sm-3,\n.px-sm-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-sm-3,\n.py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-sm-3,\n.px-sm-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-sm-4,\n.py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-sm-4,\n.px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-sm-4,\n.py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-sm-4,\n.px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-sm-5,\n.py-sm-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-sm-5,\n.px-sm-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-sm-5,\n.py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-sm-5,\n.px-sm-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-sm-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-sm-n1,\n.my-sm-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-sm-n1,\n.mx-sm-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-sm-n1,\n.my-sm-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-sm-n1,\n.mx-sm-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-sm-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-sm-n2,\n.my-sm-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-sm-n2,\n.mx-sm-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-sm-n2,\n.my-sm-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-sm-n2,\n.mx-sm-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-sm-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-sm-n3,\n.my-sm-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-sm-n3,\n.mx-sm-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-sm-n3,\n.my-sm-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-sm-n3,\n.mx-sm-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-sm-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-sm-n4,\n.my-sm-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-sm-n4,\n.mx-sm-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-sm-n4,\n.my-sm-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-sm-n4,\n.mx-sm-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-sm-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-sm-n5,\n.my-sm-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-sm-n5,\n.mx-sm-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-sm-n5,\n.my-sm-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-sm-n5,\n.mx-sm-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-sm-auto {\n    margin: auto !important;\n  }\n\n  .mt-sm-auto,\n.my-sm-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-sm-auto,\n.mx-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-sm-auto,\n.my-sm-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-sm-auto,\n.mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n\n  .mt-md-0,\n.my-md-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-md-0,\n.mx-md-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-md-0,\n.my-md-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-md-0,\n.mx-md-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-md-1,\n.my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-md-1,\n.mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-md-1,\n.my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-md-1,\n.mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-md-2,\n.my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-md-2,\n.mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-md-2,\n.my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-md-2,\n.mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-md-3,\n.my-md-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-md-3,\n.mx-md-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-md-3,\n.my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-md-3,\n.mx-md-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-md-4,\n.my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-md-4,\n.mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-md-4,\n.my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-md-4,\n.mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-md-5,\n.my-md-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-md-5,\n.mx-md-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-md-5,\n.my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-md-5,\n.mx-md-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-md-0 {\n    padding: 0 !important;\n  }\n\n  .pt-md-0,\n.py-md-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-md-0,\n.px-md-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-md-0,\n.py-md-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-md-0,\n.px-md-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-md-1,\n.py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-md-1,\n.px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-md-1,\n.py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-md-1,\n.px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-md-2,\n.py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-md-2,\n.px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-md-2,\n.py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-md-2,\n.px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-md-3,\n.py-md-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-md-3,\n.px-md-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-md-3,\n.py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-md-3,\n.px-md-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-md-4,\n.py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-md-4,\n.px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-md-4,\n.py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-md-4,\n.px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-md-5,\n.py-md-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-md-5,\n.px-md-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-md-5,\n.py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-md-5,\n.px-md-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-md-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-md-n1,\n.my-md-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-md-n1,\n.mx-md-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-md-n1,\n.my-md-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-md-n1,\n.mx-md-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-md-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-md-n2,\n.my-md-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-md-n2,\n.mx-md-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-md-n2,\n.my-md-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-md-n2,\n.mx-md-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-md-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-md-n3,\n.my-md-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-md-n3,\n.mx-md-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-md-n3,\n.my-md-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-md-n3,\n.mx-md-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-md-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-md-n4,\n.my-md-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-md-n4,\n.mx-md-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-md-n4,\n.my-md-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-md-n4,\n.mx-md-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-md-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-md-n5,\n.my-md-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-md-n5,\n.mx-md-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-md-n5,\n.my-md-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-md-n5,\n.mx-md-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-md-auto {\n    margin: auto !important;\n  }\n\n  .mt-md-auto,\n.my-md-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-md-auto,\n.mx-md-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-md-auto,\n.my-md-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-md-auto,\n.mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n\n  .mt-lg-0,\n.my-lg-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-lg-0,\n.mx-lg-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-lg-0,\n.my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-lg-0,\n.mx-lg-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-lg-1,\n.my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-lg-1,\n.mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-lg-1,\n.my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-lg-1,\n.mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-lg-2,\n.my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-lg-2,\n.mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-lg-2,\n.my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-lg-2,\n.mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-lg-3,\n.my-lg-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-lg-3,\n.mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-lg-3,\n.my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-lg-3,\n.mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-lg-4,\n.my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-lg-4,\n.mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-lg-4,\n.my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-lg-4,\n.mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-lg-5,\n.my-lg-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-lg-5,\n.mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-lg-5,\n.my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-lg-5,\n.mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n\n  .pt-lg-0,\n.py-lg-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-lg-0,\n.px-lg-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-lg-0,\n.py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-lg-0,\n.px-lg-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-lg-1,\n.py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-lg-1,\n.px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-lg-1,\n.py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-lg-1,\n.px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-lg-2,\n.py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-lg-2,\n.px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-lg-2,\n.py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-lg-2,\n.px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-lg-3,\n.py-lg-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-lg-3,\n.px-lg-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-lg-3,\n.py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-lg-3,\n.px-lg-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-lg-4,\n.py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-lg-4,\n.px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-lg-4,\n.py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-lg-4,\n.px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-lg-5,\n.py-lg-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-lg-5,\n.px-lg-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-lg-5,\n.py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-lg-5,\n.px-lg-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-lg-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-lg-n1,\n.my-lg-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-lg-n1,\n.mx-lg-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-lg-n1,\n.my-lg-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-lg-n1,\n.mx-lg-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-lg-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-lg-n2,\n.my-lg-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-lg-n2,\n.mx-lg-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-lg-n2,\n.my-lg-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-lg-n2,\n.mx-lg-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-lg-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-lg-n3,\n.my-lg-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-lg-n3,\n.mx-lg-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-lg-n3,\n.my-lg-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-lg-n3,\n.mx-lg-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-lg-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-lg-n4,\n.my-lg-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-lg-n4,\n.mx-lg-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-lg-n4,\n.my-lg-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-lg-n4,\n.mx-lg-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-lg-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-lg-n5,\n.my-lg-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-lg-n5,\n.mx-lg-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-lg-n5,\n.my-lg-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-lg-n5,\n.mx-lg-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-lg-auto {\n    margin: auto !important;\n  }\n\n  .mt-lg-auto,\n.my-lg-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-lg-auto,\n.mx-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-lg-auto,\n.my-lg-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-lg-auto,\n.mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n\n  .mt-xl-0,\n.my-xl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-xl-0,\n.mx-xl-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-xl-0,\n.my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-xl-0,\n.mx-xl-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-xl-1,\n.my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-xl-1,\n.mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-xl-1,\n.my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-xl-1,\n.mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-xl-2,\n.my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-xl-2,\n.mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-xl-2,\n.my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-xl-2,\n.mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-xl-3,\n.my-xl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-xl-3,\n.mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-xl-3,\n.my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-xl-3,\n.mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-xl-4,\n.my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-xl-4,\n.mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-xl-4,\n.my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-xl-4,\n.mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-xl-5,\n.my-xl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-xl-5,\n.mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-xl-5,\n.my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-xl-5,\n.mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n\n  .pt-xl-0,\n.py-xl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-xl-0,\n.px-xl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-xl-0,\n.py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-xl-0,\n.px-xl-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-xl-1,\n.py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-xl-1,\n.px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-xl-1,\n.py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-xl-1,\n.px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-xl-2,\n.py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-xl-2,\n.px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-xl-2,\n.py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-xl-2,\n.px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-xl-3,\n.py-xl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-xl-3,\n.px-xl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-xl-3,\n.py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-xl-3,\n.px-xl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-xl-4,\n.py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-xl-4,\n.px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-xl-4,\n.py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-xl-4,\n.px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-xl-5,\n.py-xl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-xl-5,\n.px-xl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xl-5,\n.py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-xl-5,\n.px-xl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-xl-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-xl-n1,\n.my-xl-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-xl-n1,\n.mx-xl-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-xl-n1,\n.my-xl-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-xl-n1,\n.mx-xl-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-xl-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-xl-n2,\n.my-xl-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-xl-n2,\n.mx-xl-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-xl-n2,\n.my-xl-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-xl-n2,\n.mx-xl-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-xl-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-xl-n3,\n.my-xl-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-xl-n3,\n.mx-xl-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-xl-n3,\n.my-xl-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-xl-n3,\n.mx-xl-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-xl-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-xl-n4,\n.my-xl-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-xl-n4,\n.mx-xl-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-xl-n4,\n.my-xl-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-xl-n4,\n.mx-xl-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-xl-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-xl-n5,\n.my-xl-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-xl-n5,\n.mx-xl-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-xl-n5,\n.my-xl-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-xl-n5,\n.mx-xl-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-xl-auto {\n    margin: auto !important;\n  }\n\n  .mt-xl-auto,\n.my-xl-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-xl-auto,\n.mx-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xl-auto,\n.my-xl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-xl-auto,\n.mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n.ftco-navbar-light {\n  background: #fff !important;\n  z-index: 3;\n  padding: 10px 10px;\n  border-radius: 5px;\n  box-shadow: 0px 5px 20px -17px rgba(0, 0, 0, 0.34);\n}\n@media (max-width: 991.98px) {\n  .ftco-navbar-light {\n    background: #000 !important;\n    position: relative;\n    top: 0;\n    padding: 10px 15px;\n  }\n}\n.ftco-navbar-light .navbar-brand {\n  color: #000;\n  font-family: \"Dancing Script\", cursive;\n  font-size: 50px;\n  font-weight: 1000;\n}\n.ftco-navbar-light .navbar-brand:hover, .ftco-navbar-light .navbar-brand:focus {\n  color: #000;\n}\n@media (max-width: 991.98px) {\n  .ftco-navbar-light .navbar-brand {\n    color: #fff;\n  }\n}\n@media (max-width: 991.98px) {\n  .ftco-navbar-light .navbar-nav {\n    padding-bottom: 10px;\n  }\n}\n.ftco-navbar-light .navbar-nav > .nav-item > .nav-link {\n  font-size: 13px;\n  padding: 1.2rem 20px;\n  font-weight: 400;\n  color: #333333;\n  position: relative;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  opacity: 1 !important;\n}\n.ftco-navbar-light .navbar-nav > .nav-item > .nav-link:hover {\n  color: #007bff;\n}\n@media (max-width: 991.98px) {\n  .ftco-navbar-light .navbar-nav > .nav-item > .nav-link {\n    padding: 0.9rem 0;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  .ftco-navbar-light .navbar-nav > .nav-item > .nav-link:hover {\n    color: #fff;\n  }\n}\n.ftco-navbar-light .navbar-nav > .nav-item > .nav-link.icon-cart {\n  border: 1px solid #007bff;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.ftco-navbar-light .navbar-nav > .nav-item > .nav-link.icon-cart .fa {\n  color: #007bff;\n}\n.ftco-navbar-light .navbar-nav > .nav-item .dropdown-menu {\n  border: none;\n  background: #fff;\n  box-shadow: 0 10px 34px -20px rgba(0, 0, 0, 0.41);\n  border-radius: 4px;\n  padding: 0;\n}\n.ftco-navbar-light .navbar-nav > .nav-item .dropdown-menu .dropdown-item {\n  font-size: 12px;\n  color: #000;\n}\n.ftco-navbar-light .navbar-nav > .nav-item .dropdown-menu .dropdown-item:hover, .ftco-navbar-light .navbar-nav > .nav-item .dropdown-menu .dropdown-item:focus {\n  background: #007bff;\n  color: #fff;\n}\n.ftco-navbar-light .navbar-nav > .nav-item.cta > a {\n  color: #fff;\n  background: #007bff;\n  border-radius: 0;\n}\n@media (max-width: 767.98px) {\n  .ftco-navbar-light .navbar-nav > .nav-item.cta > a {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n@media (max-width: 991.98px) {\n  .ftco-navbar-light .navbar-nav > .nav-item.cta > a {\n    color: #fff;\n    background: #007bff;\n    border-radius: 4px;\n  }\n}\n.ftco-navbar-light .navbar-nav > .nav-item.active > a {\n  color: #007bff;\n}\n@media (max-width: 991.98px) {\n  .ftco-navbar-light .navbar-nav > .nav-item.active > a {\n    color: #fff;\n  }\n}\n.ftco-navbar-light .navbar-toggler {\n  border: none;\n  color: rgba(255, 255, 255, 0.5) !important;\n  cursor: pointer;\n  padding-right: 0;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 0.1em;\n}\n.ftco-navbar-light .navbar-toggler:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxib290c3RyYXAtZ3JpZC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX2dyaWQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2dyaWQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9ncmlkLWZyYW1ld29yay5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcdXRpbGl0aWVzXFxfZGlzcGxheS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcdXRpbGl0aWVzXFxfZmxleC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcdXRpbGl0aWVzXFxfc3BhY2luZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSw0RkFBQTtBQ0RSOzs7OztFQUFBO0FBT0E7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0FEQ0Y7QUNFQTs7O0VBR0UsbUJBQUE7QURDRjtBRVZFOzs7Ozs7RUNEQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUhvQkY7QUkrQkk7RUZ6Q0U7SUFDRSxnQkc4TGU7RUxoTHJCO0FBQ0Y7QUl5Qkk7RUZ6Q0U7SUFDRSxnQkc4TGU7RUwzS3JCO0FBQ0Y7QUlvQkk7RUZ6Q0U7SUFDRSxnQkc4TGU7RUx0S3JCO0FBQ0Y7QUllSTtFRnpDRTtJQUNFLGlCRzhMZTtFTGpLckI7QUFDRjtBRUZFO0VDbkNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBSHdDRjtBRUZFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUZLSjtBRUhJOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtBRktOO0FNM0RFOzs7Ozs7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FObUVKO0FNN0NNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FOZ0RSO0FHcEJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUh1Qko7QUd6QkU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBSDRCSjtBRzlCRTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUhpQ0o7QUduQ0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBSHNDSjtBR3hDRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FIMkNKO0FHN0NFO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBSGdESjtBTW5FTTtFSENKLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBSHNFRjtBTW5FVTtFSGJSLHVCQUFBO0VBSUEsd0JBQUE7QUhpRkY7QU14RVU7RUhiUix3QkFBQTtFQUlBLHlCQUFBO0FIc0ZGO0FNN0VVO0VIYlIsYUFBQTtFQUlBLGNBQUE7QUgyRkY7QU1sRlU7RUhiUix3QkFBQTtFQUlBLHlCQUFBO0FIZ0dGO0FNdkZVO0VIYlIsd0JBQUE7RUFJQSx5QkFBQTtBSHFHRjtBTTVGVTtFSGJSLGFBQUE7RUFJQSxjQUFBO0FIMEdGO0FNakdVO0VIYlIsd0JBQUE7RUFJQSx5QkFBQTtBSCtHRjtBTXRHVTtFSGJSLHdCQUFBO0VBSUEseUJBQUE7QUhvSEY7QU0zR1U7RUhiUixhQUFBO0VBSUEsY0FBQTtBSHlIRjtBTWhIVTtFSGJSLHdCQUFBO0VBSUEseUJBQUE7QUg4SEY7QU1ySFU7RUhiUix3QkFBQTtFQUlBLHlCQUFBO0FIbUlGO0FNMUhVO0VIYlIsY0FBQTtFQUlBLGVBQUE7QUh3SUY7QU16SE07RUFBd0IsU0FBQTtBTjZIOUI7QU0zSE07RUFBdUIsU0FBQTtBTitIN0I7QU01SFE7RUFBd0IsUUFEYjtBTmlJbkI7QU1oSVE7RUFBd0IsUUFEYjtBTnFJbkI7QU1wSVE7RUFBd0IsUUFEYjtBTnlJbkI7QU14SVE7RUFBd0IsUUFEYjtBTjZJbkI7QU01SVE7RUFBd0IsUUFEYjtBTmlKbkI7QU1oSlE7RUFBd0IsUUFEYjtBTnFKbkI7QU1wSlE7RUFBd0IsUUFEYjtBTnlKbkI7QU14SlE7RUFBd0IsUUFEYjtBTjZKbkI7QU01SlE7RUFBd0IsUUFEYjtBTmlLbkI7QU1oS1E7RUFBd0IsUUFEYjtBTnFLbkI7QU1wS1E7RUFBd0IsU0FEYjtBTnlLbkI7QU14S1E7RUFBd0IsU0FEYjtBTjZLbkI7QU01S1E7RUFBd0IsU0FEYjtBTmlMbkI7QU16S1k7RUhoQlYsMEJBQUE7QUg2TEY7QU03S1k7RUhoQlYsMkJBQUE7QUhpTUY7QU1qTFk7RUhoQlYsZ0JBQUE7QUhxTUY7QU1yTFk7RUhoQlYsMkJBQUE7QUh5TUY7QU16TFk7RUhoQlYsMkJBQUE7QUg2TUY7QU03TFk7RUhoQlYsZ0JBQUE7QUhpTkY7QU1qTVk7RUhoQlYsMkJBQUE7QUhxTkY7QU1yTVk7RUhoQlYsMkJBQUE7QUh5TkY7QU16TVk7RUhoQlYsZ0JBQUE7QUg2TkY7QU03TVk7RUhoQlYsMkJBQUE7QUhpT0Y7QU1qTlk7RUhoQlYsMkJBQUE7QUhxT0Y7QUloT0k7RUUzQkU7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RU4rUE47O0VHbk9BO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUhzT0Y7O0VHeE9BO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUgyT0Y7O0VHN09BO0lBQ0Usd0JBQUE7SUFDQSx5QkFBQTtFSGdQRjs7RUdsUEE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFSHFQRjs7RUd2UEE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFSDBQRjs7RUc1UEE7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VIK1BGOztFTWxSSTtJSENKLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFSHFSQTs7RU1sUlE7SUhiUix1QkFBQTtJQUlBLHdCQUFBO0VIZ1NBOztFTXZSUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUhxU0E7O0VNNVJRO0lIYlIsYUFBQTtJQUlBLGNBQUE7RUgwU0E7O0VNalNRO0lIYlIsd0JBQUE7SUFJQSx5QkFBQTtFSCtTQTs7RU10U1E7SUhiUix3QkFBQTtJQUlBLHlCQUFBO0VIb1RBOztFTTNTUTtJSGJSLGFBQUE7SUFJQSxjQUFBO0VIeVRBOztFTWhUUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUg4VEE7O0VNclRRO0lIYlIsd0JBQUE7SUFJQSx5QkFBQTtFSG1VQTs7RU0xVFE7SUhiUixhQUFBO0lBSUEsY0FBQTtFSHdVQTs7RU0vVFE7SUhiUix3QkFBQTtJQUlBLHlCQUFBO0VINlVBOztFTXBVUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUhrVkE7O0VNelVRO0lIYlIsY0FBQTtJQUlBLGVBQUE7RUh1VkE7O0VNeFVJO0lBQXdCLFNBQUE7RU40VTVCOztFTTFVSTtJQUF1QixTQUFBO0VOOFUzQjs7RU0zVU07SUFBd0IsUUFEYjtFTmdWakI7O0VNL1VNO0lBQXdCLFFBRGI7RU5vVmpCOztFTW5WTTtJQUF3QixRQURiO0VOd1ZqQjs7RU12Vk07SUFBd0IsUUFEYjtFTjRWakI7O0VNM1ZNO0lBQXdCLFFBRGI7RU5nV2pCOztFTS9WTTtJQUF3QixRQURiO0VOb1dqQjs7RU1uV007SUFBd0IsUUFEYjtFTndXakI7O0VNdldNO0lBQXdCLFFBRGI7RU40V2pCOztFTTNXTTtJQUF3QixRQURiO0VOZ1hqQjs7RU0vV007SUFBd0IsUUFEYjtFTm9YakI7O0VNblhNO0lBQXdCLFNBRGI7RU53WGpCOztFTXZYTTtJQUF3QixTQURiO0VONFhqQjs7RU0zWE07SUFBd0IsU0FEYjtFTmdZakI7O0VNeFhVO0lIaEJWLGNBQUE7RUg0WUE7O0VNNVhVO0lIaEJWLDBCQUFBO0VIZ1pBOztFTWhZVTtJSGhCViwyQkFBQTtFSG9aQTs7RU1wWVU7SUhoQlYsZ0JBQUE7RUh3WkE7O0VNeFlVO0lIaEJWLDJCQUFBO0VINFpBOztFTTVZVTtJSGhCViwyQkFBQTtFSGdhQTs7RU1oWlU7SUhoQlYsZ0JBQUE7RUhvYUE7O0VNcFpVO0lIaEJWLDJCQUFBO0VId2FBOztFTXhaVTtJSGhCViwyQkFBQTtFSDRhQTs7RU01WlU7SUhoQlYsZ0JBQUE7RUhnYkE7O0VNaGFVO0lIaEJWLDJCQUFBO0VIb2JBOztFTXBhVTtJSGhCViwyQkFBQTtFSHdiQTtBQUNGO0FJcGJJO0VFM0JFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VOa2ROOztFR3RiQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VIeWJGOztFRzNiQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VIOGJGOztFR2hjQTtJQUNFLHdCQUFBO0lBQ0EseUJBQUE7RUhtY0Y7O0VHcmNBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUh3Y0Y7O0VHMWNBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUg2Y0Y7O0VHL2NBO0lBQ0Usd0JBQUE7SUFDQSx5QkFBQTtFSGtkRjs7RU1yZUk7SUhDSixjQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUh3ZUE7O0VNcmVRO0lIYlIsdUJBQUE7SUFJQSx3QkFBQTtFSG1mQTs7RU0xZVE7SUhiUix3QkFBQTtJQUlBLHlCQUFBO0VId2ZBOztFTS9lUTtJSGJSLGFBQUE7SUFJQSxjQUFBO0VINmZBOztFTXBmUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUhrZ0JBOztFTXpmUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUh1Z0JBOztFTTlmUTtJSGJSLGFBQUE7SUFJQSxjQUFBO0VINGdCQTs7RU1uZ0JRO0lIYlIsd0JBQUE7SUFJQSx5QkFBQTtFSGloQkE7O0VNeGdCUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUhzaEJBOztFTTdnQlE7SUhiUixhQUFBO0lBSUEsY0FBQTtFSDJoQkE7O0VNbGhCUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUhnaUJBOztFTXZoQlE7SUhiUix3QkFBQTtJQUlBLHlCQUFBO0VIcWlCQTs7RU01aEJRO0lIYlIsY0FBQTtJQUlBLGVBQUE7RUgwaUJBOztFTTNoQkk7SUFBd0IsU0FBQTtFTitoQjVCOztFTTdoQkk7SUFBdUIsU0FBQTtFTmlpQjNCOztFTTloQk07SUFBd0IsUUFEYjtFTm1pQmpCOztFTWxpQk07SUFBd0IsUUFEYjtFTnVpQmpCOztFTXRpQk07SUFBd0IsUUFEYjtFTjJpQmpCOztFTTFpQk07SUFBd0IsUUFEYjtFTitpQmpCOztFTTlpQk07SUFBd0IsUUFEYjtFTm1qQmpCOztFTWxqQk07SUFBd0IsUUFEYjtFTnVqQmpCOztFTXRqQk07SUFBd0IsUUFEYjtFTjJqQmpCOztFTTFqQk07SUFBd0IsUUFEYjtFTitqQmpCOztFTTlqQk07SUFBd0IsUUFEYjtFTm1rQmpCOztFTWxrQk07SUFBd0IsUUFEYjtFTnVrQmpCOztFTXRrQk07SUFBd0IsU0FEYjtFTjJrQmpCOztFTTFrQk07SUFBd0IsU0FEYjtFTitrQmpCOztFTTlrQk07SUFBd0IsU0FEYjtFTm1sQmpCOztFTTNrQlU7SUhoQlYsY0FBQTtFSCtsQkE7O0VNL2tCVTtJSGhCViwwQkFBQTtFSG1tQkE7O0VNbmxCVTtJSGhCViwyQkFBQTtFSHVtQkE7O0VNdmxCVTtJSGhCVixnQkFBQTtFSDJtQkE7O0VNM2xCVTtJSGhCViwyQkFBQTtFSCttQkE7O0VNL2xCVTtJSGhCViwyQkFBQTtFSG1uQkE7O0VNbm1CVTtJSGhCVixnQkFBQTtFSHVuQkE7O0VNdm1CVTtJSGhCViwyQkFBQTtFSDJuQkE7O0VNM21CVTtJSGhCViwyQkFBQTtFSCtuQkE7O0VNL21CVTtJSGhCVixnQkFBQTtFSG1vQkE7O0VNbm5CVTtJSGhCViwyQkFBQTtFSHVvQkE7O0VNdm5CVTtJSGhCViwyQkFBQTtFSDJvQkE7QUFDRjtBSXZvQkk7RUUzQkU7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RU5xcUJOOztFR3pvQkE7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFSDRvQkY7O0VHOW9CQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VIaXBCRjs7RUducEJBO0lBQ0Usd0JBQUE7SUFDQSx5QkFBQTtFSHNwQkY7O0VHeHBCQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VIMnBCRjs7RUc3cEJBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUhncUJGOztFR2xxQkE7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VIcXFCRjs7RU14ckJJO0lIQ0osY0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VIMnJCQTs7RU14ckJRO0lIYlIsdUJBQUE7SUFJQSx3QkFBQTtFSHNzQkE7O0VNN3JCUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUgyc0JBOztFTWxzQlE7SUhiUixhQUFBO0lBSUEsY0FBQTtFSGd0QkE7O0VNdnNCUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUhxdEJBOztFTTVzQlE7SUhiUix3QkFBQTtJQUlBLHlCQUFBO0VIMHRCQTs7RU1qdEJRO0lIYlIsYUFBQTtJQUlBLGNBQUE7RUgrdEJBOztFTXR0QlE7SUhiUix3QkFBQTtJQUlBLHlCQUFBO0VIb3VCQTs7RU0zdEJRO0lIYlIsd0JBQUE7SUFJQSx5QkFBQTtFSHl1QkE7O0VNaHVCUTtJSGJSLGFBQUE7SUFJQSxjQUFBO0VIOHVCQTs7RU1ydUJRO0lIYlIsd0JBQUE7SUFJQSx5QkFBQTtFSG12QkE7O0VNMXVCUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUh3dkJBOztFTS91QlE7SUhiUixjQUFBO0lBSUEsZUFBQTtFSDZ2QkE7O0VNOXVCSTtJQUF3QixTQUFBO0VOa3ZCNUI7O0VNaHZCSTtJQUF1QixTQUFBO0VOb3ZCM0I7O0VNanZCTTtJQUF3QixRQURiO0VOc3ZCakI7O0VNcnZCTTtJQUF3QixRQURiO0VOMHZCakI7O0VNenZCTTtJQUF3QixRQURiO0VOOHZCakI7O0VNN3ZCTTtJQUF3QixRQURiO0VOa3dCakI7O0VNandCTTtJQUF3QixRQURiO0VOc3dCakI7O0VNcndCTTtJQUF3QixRQURiO0VOMHdCakI7O0VNendCTTtJQUF3QixRQURiO0VOOHdCakI7O0VNN3dCTTtJQUF3QixRQURiO0VOa3hCakI7O0VNanhCTTtJQUF3QixRQURiO0VOc3hCakI7O0VNcnhCTTtJQUF3QixRQURiO0VOMHhCakI7O0VNenhCTTtJQUF3QixTQURiO0VOOHhCakI7O0VNN3hCTTtJQUF3QixTQURiO0VOa3lCakI7O0VNanlCTTtJQUF3QixTQURiO0VOc3lCakI7O0VNOXhCVTtJSGhCVixjQUFBO0VIa3pCQTs7RU1seUJVO0lIaEJWLDBCQUFBO0VIc3pCQTs7RU10eUJVO0lIaEJWLDJCQUFBO0VIMHpCQTs7RU0xeUJVO0lIaEJWLGdCQUFBO0VIOHpCQTs7RU05eUJVO0lIaEJWLDJCQUFBO0VIazBCQTs7RU1sekJVO0lIaEJWLDJCQUFBO0VIczBCQTs7RU10ekJVO0lIaEJWLGdCQUFBO0VIMDBCQTs7RU0xekJVO0lIaEJWLDJCQUFBO0VIODBCQTs7RU05ekJVO0lIaEJWLDJCQUFBO0VIazFCQTs7RU1sMEJVO0lIaEJWLGdCQUFBO0VIczFCQTs7RU10MEJVO0lIaEJWLDJCQUFBO0VIMDFCQTs7RU0xMEJVO0lIaEJWLDJCQUFBO0VIODFCQTtBQUNGO0FJMTFCSTtFRTNCRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFTnczQk47O0VHNTFCQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VIKzFCRjs7RUdqMkJBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUhvMkJGOztFR3QyQkE7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VIeTJCRjs7RUczMkJBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUg4MkJGOztFR2gzQkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFSG0zQkY7O0VHcjNCQTtJQUNFLHdCQUFBO0lBQ0EseUJBQUE7RUh3M0JGOztFTTM0Qkk7SUhDSixjQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUg4NEJBOztFTTM0QlE7SUhiUix1QkFBQTtJQUlBLHdCQUFBO0VIeTVCQTs7RU1oNUJRO0lIYlIsd0JBQUE7SUFJQSx5QkFBQTtFSDg1QkE7O0VNcjVCUTtJSGJSLGFBQUE7SUFJQSxjQUFBO0VIbTZCQTs7RU0xNUJRO0lIYlIsd0JBQUE7SUFJQSx5QkFBQTtFSHc2QkE7O0VNLzVCUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUg2NkJBOztFTXA2QlE7SUhiUixhQUFBO0lBSUEsY0FBQTtFSGs3QkE7O0VNejZCUTtJSGJSLHdCQUFBO0lBSUEseUJBQUE7RUh1N0JBOztFTTk2QlE7SUhiUix3QkFBQTtJQUlBLHlCQUFBO0VINDdCQTs7RU1uN0JRO0lIYlIsYUFBQTtJQUlBLGNBQUE7RUhpOEJBOztFTXg3QlE7SUhiUix3QkFBQTtJQUlBLHlCQUFBO0VIczhCQTs7RU03N0JRO0lIYlIsd0JBQUE7SUFJQSx5QkFBQTtFSDI4QkE7O0VNbDhCUTtJSGJSLGNBQUE7SUFJQSxlQUFBO0VIZzlCQTs7RU1qOEJJO0lBQXdCLFNBQUE7RU5xOEI1Qjs7RU1uOEJJO0lBQXVCLFNBQUE7RU51OEIzQjs7RU1wOEJNO0lBQXdCLFFBRGI7RU55OEJqQjs7RU14OEJNO0lBQXdCLFFBRGI7RU42OEJqQjs7RU01OEJNO0lBQXdCLFFBRGI7RU5pOUJqQjs7RU1oOUJNO0lBQXdCLFFBRGI7RU5xOUJqQjs7RU1wOUJNO0lBQXdCLFFBRGI7RU55OUJqQjs7RU14OUJNO0lBQXdCLFFBRGI7RU42OUJqQjs7RU01OUJNO0lBQXdCLFFBRGI7RU5pK0JqQjs7RU1oK0JNO0lBQXdCLFFBRGI7RU5xK0JqQjs7RU1wK0JNO0lBQXdCLFFBRGI7RU55K0JqQjs7RU14K0JNO0lBQXdCLFFBRGI7RU42K0JqQjs7RU01K0JNO0lBQXdCLFNBRGI7RU5pL0JqQjs7RU1oL0JNO0lBQXdCLFNBRGI7RU5xL0JqQjs7RU1wL0JNO0lBQXdCLFNBRGI7RU55L0JqQjs7RU1qL0JVO0lIaEJWLGNBQUE7RUhxZ0NBOztFTXIvQlU7SUhoQlYsMEJBQUE7RUh5Z0NBOztFTXovQlU7SUhoQlYsMkJBQUE7RUg2Z0NBOztFTTcvQlU7SUhoQlYsZ0JBQUE7RUhpaENBOztFTWpnQ1U7SUhoQlYsMkJBQUE7RUhxaENBOztFTXJnQ1U7SUhoQlYsMkJBQUE7RUh5aENBOztFTXpnQ1U7SUhoQlYsZ0JBQUE7RUg2aENBOztFTTdnQ1U7SUhoQlYsMkJBQUE7RUhpaUNBOztFTWpoQ1U7SUhoQlYsMkJBQUE7RUhxaUNBOztFTXJoQ1U7SUhoQlYsZ0JBQUE7RUh5aUNBOztFTXpoQ1U7SUhoQlYsMkJBQUE7RUg2aUNBOztFTTdoQ1U7SUhoQlYsMkJBQUE7RUhpakNBO0FBQ0Y7QU85bENNO0VBQXdCLHdCQUFBO0FQaW1DOUI7QU9qbUNNO0VBQXdCLDBCQUFBO0FQcW1DOUI7QU9ybUNNO0VBQXdCLGdDQUFBO0FQeW1DOUI7QU96bUNNO0VBQXdCLHlCQUFBO0FQNm1DOUI7QU83bUNNO0VBQXdCLHlCQUFBO0FQaW5DOUI7QU9qbkNNO0VBQXdCLDZCQUFBO0FQcW5DOUI7QU9ybkNNO0VBQXdCLDhCQUFBO0FQeW5DOUI7QU96bkNNO0VBQXdCLHdCQUFBO0FQNm5DOUI7QU83bkNNO0VBQXdCLCtCQUFBO0FQaW9DOUI7QUlobENJO0VHakRFO0lBQXdCLHdCQUFBO0VQc29DNUI7O0VPdG9DSTtJQUF3QiwwQkFBQTtFUDBvQzVCOztFTzFvQ0k7SUFBd0IsZ0NBQUE7RVA4b0M1Qjs7RU85b0NJO0lBQXdCLHlCQUFBO0VQa3BDNUI7O0VPbHBDSTtJQUF3Qix5QkFBQTtFUHNwQzVCOztFT3RwQ0k7SUFBd0IsNkJBQUE7RVAwcEM1Qjs7RU8xcENJO0lBQXdCLDhCQUFBO0VQOHBDNUI7O0VPOXBDSTtJQUF3Qix3QkFBQTtFUGtxQzVCOztFT2xxQ0k7SUFBd0IsK0JBQUE7RVBzcUM1QjtBQUNGO0FJdG5DSTtFR2pERTtJQUF3Qix3QkFBQTtFUDJxQzVCOztFTzNxQ0k7SUFBd0IsMEJBQUE7RVArcUM1Qjs7RU8vcUNJO0lBQXdCLGdDQUFBO0VQbXJDNUI7O0VPbnJDSTtJQUF3Qix5QkFBQTtFUHVyQzVCOztFT3ZyQ0k7SUFBd0IseUJBQUE7RVAyckM1Qjs7RU8zckNJO0lBQXdCLDZCQUFBO0VQK3JDNUI7O0VPL3JDSTtJQUF3Qiw4QkFBQTtFUG1zQzVCOztFT25zQ0k7SUFBd0Isd0JBQUE7RVB1c0M1Qjs7RU92c0NJO0lBQXdCLCtCQUFBO0VQMnNDNUI7QUFDRjtBSTNwQ0k7RUdqREU7SUFBd0Isd0JBQUE7RVBndEM1Qjs7RU9odENJO0lBQXdCLDBCQUFBO0VQb3RDNUI7O0VPcHRDSTtJQUF3QixnQ0FBQTtFUHd0QzVCOztFT3h0Q0k7SUFBd0IseUJBQUE7RVA0dEM1Qjs7RU81dENJO0lBQXdCLHlCQUFBO0VQZ3VDNUI7O0VPaHVDSTtJQUF3Qiw2QkFBQTtFUG91QzVCOztFT3B1Q0k7SUFBd0IsOEJBQUE7RVB3dUM1Qjs7RU94dUNJO0lBQXdCLHdCQUFBO0VQNHVDNUI7O0VPNXVDSTtJQUF3QiwrQkFBQTtFUGd2QzVCO0FBQ0Y7QUloc0NJO0VHakRFO0lBQXdCLHdCQUFBO0VQcXZDNUI7O0VPcnZDSTtJQUF3QiwwQkFBQTtFUHl2QzVCOztFT3p2Q0k7SUFBd0IsZ0NBQUE7RVA2dkM1Qjs7RU83dkNJO0lBQXdCLHlCQUFBO0VQaXdDNUI7O0VPandDSTtJQUF3Qix5QkFBQTtFUHF3QzVCOztFT3J3Q0k7SUFBd0IsNkJBQUE7RVB5d0M1Qjs7RU96d0NJO0lBQXdCLDhCQUFBO0VQNndDNUI7O0VPN3dDSTtJQUF3Qix3QkFBQTtFUGl4QzVCOztFT2p4Q0k7SUFBd0IsK0JBQUE7RVBxeEM1QjtBQUNGO0FPNXdDQTtFQUVJO0lBQXFCLHdCQUFBO0VQOHdDdkI7O0VPOXdDRTtJQUFxQiwwQkFBQTtFUGt4Q3ZCOztFT2x4Q0U7SUFBcUIsZ0NBQUE7RVBzeEN2Qjs7RU90eENFO0lBQXFCLHlCQUFBO0VQMHhDdkI7O0VPMXhDRTtJQUFxQix5QkFBQTtFUDh4Q3ZCOztFTzl4Q0U7SUFBcUIsNkJBQUE7RVBreUN2Qjs7RU9seUNFO0lBQXFCLDhCQUFBO0VQc3lDdkI7O0VPdHlDRTtJQUFxQix3QkFBQTtFUDB5Q3ZCOztFTzF5Q0U7SUFBcUIsK0JBQUE7RVA4eUN2QjtBQUNGO0FRNXpDSTtFQUFnQyw4QkFBQTtBUit6Q3BDO0FROXpDSTtFQUFnQyxpQ0FBQTtBUmswQ3BDO0FRajBDSTtFQUFnQyxzQ0FBQTtBUnEwQ3BDO0FRcDBDSTtFQUFnQyx5Q0FBQTtBUncwQ3BDO0FRdDBDSTtFQUE4QiwwQkFBQTtBUjAwQ2xDO0FRejBDSTtFQUE4Qiw0QkFBQTtBUjYwQ2xDO0FRNTBDSTtFQUE4QixrQ0FBQTtBUmcxQ2xDO0FRLzBDSTtFQUE4Qix5QkFBQTtBUm0xQ2xDO0FRbDFDSTtFQUE4Qix1QkFBQTtBUnMxQ2xDO0FRcjFDSTtFQUE4Qix1QkFBQTtBUnkxQ2xDO0FReDFDSTtFQUE4Qix5QkFBQTtBUjQxQ2xDO0FRMzFDSTtFQUE4Qix5QkFBQTtBUisxQ2xDO0FRNzFDSTtFQUFvQyxzQ0FBQTtBUmkyQ3hDO0FRaDJDSTtFQUFvQyxvQ0FBQTtBUm8yQ3hDO0FRbjJDSTtFQUFvQyxrQ0FBQTtBUnUyQ3hDO0FRdDJDSTtFQUFvQyx5Q0FBQTtBUjAyQ3hDO0FRejJDSTtFQUFvQyx3Q0FBQTtBUjYyQ3hDO0FRMzJDSTtFQUFpQyxrQ0FBQTtBUisyQ3JDO0FROTJDSTtFQUFpQyxnQ0FBQTtBUmszQ3JDO0FRajNDSTtFQUFpQyw4QkFBQTtBUnEzQ3JDO0FRcDNDSTtFQUFpQyxnQ0FBQTtBUnczQ3JDO0FRdjNDSTtFQUFpQywrQkFBQTtBUjIzQ3JDO0FRejNDSTtFQUFrQyxvQ0FBQTtBUjYzQ3RDO0FRNTNDSTtFQUFrQyxrQ0FBQTtBUmc0Q3RDO0FRLzNDSTtFQUFrQyxnQ0FBQTtBUm00Q3RDO0FRbDRDSTtFQUFrQyx1Q0FBQTtBUnM0Q3RDO0FRcjRDSTtFQUFrQyxzQ0FBQTtBUnk0Q3RDO0FReDRDSTtFQUFrQyxpQ0FBQTtBUjQ0Q3RDO0FRMTRDSTtFQUFnQywyQkFBQTtBUjg0Q3BDO0FRNzRDSTtFQUFnQyxpQ0FBQTtBUmk1Q3BDO0FRaDVDSTtFQUFnQywrQkFBQTtBUm81Q3BDO0FRbjVDSTtFQUFnQyw2QkFBQTtBUnU1Q3BDO0FRdDVDSTtFQUFnQywrQkFBQTtBUjA1Q3BDO0FRejVDSTtFQUFnQyw4QkFBQTtBUjY1Q3BDO0FJajVDSTtFSWxEQTtJQUFnQyw4QkFBQTtFUnc4Q2xDOztFUXY4Q0U7SUFBZ0MsaUNBQUE7RVIyOENsQzs7RVExOENFO0lBQWdDLHNDQUFBO0VSODhDbEM7O0VRNzhDRTtJQUFnQyx5Q0FBQTtFUmk5Q2xDOztFUS84Q0U7SUFBOEIsMEJBQUE7RVJtOUNoQzs7RVFsOUNFO0lBQThCLDRCQUFBO0VSczlDaEM7O0VRcjlDRTtJQUE4QixrQ0FBQTtFUnk5Q2hDOztFUXg5Q0U7SUFBOEIseUJBQUE7RVI0OUNoQzs7RVEzOUNFO0lBQThCLHVCQUFBO0VSKzlDaEM7O0VROTlDRTtJQUE4Qix1QkFBQTtFUmsrQ2hDOztFUWorQ0U7SUFBOEIseUJBQUE7RVJxK0NoQzs7RVFwK0NFO0lBQThCLHlCQUFBO0VSdytDaEM7O0VRdCtDRTtJQUFvQyxzQ0FBQTtFUjArQ3RDOztFUXorQ0U7SUFBb0Msb0NBQUE7RVI2K0N0Qzs7RVE1K0NFO0lBQW9DLGtDQUFBO0VSZy9DdEM7O0VRLytDRTtJQUFvQyx5Q0FBQTtFUm0vQ3RDOztFUWwvQ0U7SUFBb0Msd0NBQUE7RVJzL0N0Qzs7RVFwL0NFO0lBQWlDLGtDQUFBO0VSdy9DbkM7O0VRdi9DRTtJQUFpQyxnQ0FBQTtFUjIvQ25DOztFUTEvQ0U7SUFBaUMsOEJBQUE7RVI4L0NuQzs7RVE3L0NFO0lBQWlDLGdDQUFBO0VSaWdEbkM7O0VRaGdERTtJQUFpQywrQkFBQTtFUm9nRG5DOztFUWxnREU7SUFBa0Msb0NBQUE7RVJzZ0RwQzs7RVFyZ0RFO0lBQWtDLGtDQUFBO0VSeWdEcEM7O0VReGdERTtJQUFrQyxnQ0FBQTtFUjRnRHBDOztFUTNnREU7SUFBa0MsdUNBQUE7RVIrZ0RwQzs7RVE5Z0RFO0lBQWtDLHNDQUFBO0VSa2hEcEM7O0VRamhERTtJQUFrQyxpQ0FBQTtFUnFoRHBDOztFUW5oREU7SUFBZ0MsMkJBQUE7RVJ1aERsQzs7RVF0aERFO0lBQWdDLGlDQUFBO0VSMGhEbEM7O0VRemhERTtJQUFnQywrQkFBQTtFUjZoRGxDOztFUTVoREU7SUFBZ0MsNkJBQUE7RVJnaURsQzs7RVEvaERFO0lBQWdDLCtCQUFBO0VSbWlEbEM7O0VRbGlERTtJQUFnQyw4QkFBQTtFUnNpRGxDO0FBQ0Y7QUkzaERJO0VJbERBO0lBQWdDLDhCQUFBO0VSaWxEbEM7O0VRaGxERTtJQUFnQyxpQ0FBQTtFUm9sRGxDOztFUW5sREU7SUFBZ0Msc0NBQUE7RVJ1bERsQzs7RVF0bERFO0lBQWdDLHlDQUFBO0VSMGxEbEM7O0VReGxERTtJQUE4QiwwQkFBQTtFUjRsRGhDOztFUTNsREU7SUFBOEIsNEJBQUE7RVIrbERoQzs7RVE5bERFO0lBQThCLGtDQUFBO0VSa21EaEM7O0VRam1ERTtJQUE4Qix5QkFBQTtFUnFtRGhDOztFUXBtREU7SUFBOEIsdUJBQUE7RVJ3bURoQzs7RVF2bURFO0lBQThCLHVCQUFBO0VSMm1EaEM7O0VRMW1ERTtJQUE4Qix5QkFBQTtFUjhtRGhDOztFUTdtREU7SUFBOEIseUJBQUE7RVJpbkRoQzs7RVEvbURFO0lBQW9DLHNDQUFBO0VSbW5EdEM7O0VRbG5ERTtJQUFvQyxvQ0FBQTtFUnNuRHRDOztFUXJuREU7SUFBb0Msa0NBQUE7RVJ5bkR0Qzs7RVF4bkRFO0lBQW9DLHlDQUFBO0VSNG5EdEM7O0VRM25ERTtJQUFvQyx3Q0FBQTtFUituRHRDOztFUTduREU7SUFBaUMsa0NBQUE7RVJpb0RuQzs7RVFob0RFO0lBQWlDLGdDQUFBO0VSb29EbkM7O0VRbm9ERTtJQUFpQyw4QkFBQTtFUnVvRG5DOztFUXRvREU7SUFBaUMsZ0NBQUE7RVIwb0RuQzs7RVF6b0RFO0lBQWlDLCtCQUFBO0VSNm9EbkM7O0VRM29ERTtJQUFrQyxvQ0FBQTtFUitvRHBDOztFUTlvREU7SUFBa0Msa0NBQUE7RVJrcERwQzs7RVFqcERFO0lBQWtDLGdDQUFBO0VScXBEcEM7O0VRcHBERTtJQUFrQyx1Q0FBQTtFUndwRHBDOztFUXZwREU7SUFBa0Msc0NBQUE7RVIycERwQzs7RVExcERFO0lBQWtDLGlDQUFBO0VSOHBEcEM7O0VRNXBERTtJQUFnQywyQkFBQTtFUmdxRGxDOztFUS9wREU7SUFBZ0MsaUNBQUE7RVJtcURsQzs7RVFscURFO0lBQWdDLCtCQUFBO0VSc3FEbEM7O0VRcnFERTtJQUFnQyw2QkFBQTtFUnlxRGxDOztFUXhxREU7SUFBZ0MsK0JBQUE7RVI0cURsQzs7RVEzcURFO0lBQWdDLDhCQUFBO0VSK3FEbEM7QUFDRjtBSXBxREk7RUlsREE7SUFBZ0MsOEJBQUE7RVIwdERsQzs7RVF6dERFO0lBQWdDLGlDQUFBO0VSNnREbEM7O0VRNXRERTtJQUFnQyxzQ0FBQTtFUmd1RGxDOztFUS90REU7SUFBZ0MseUNBQUE7RVJtdURsQzs7RVFqdURFO0lBQThCLDBCQUFBO0VScXVEaEM7O0VRcHVERTtJQUE4Qiw0QkFBQTtFUnd1RGhDOztFUXZ1REU7SUFBOEIsa0NBQUE7RVIydURoQzs7RVExdURFO0lBQThCLHlCQUFBO0VSOHVEaEM7O0VRN3VERTtJQUE4Qix1QkFBQTtFUml2RGhDOztFUWh2REU7SUFBOEIsdUJBQUE7RVJvdkRoQzs7RVFudkRFO0lBQThCLHlCQUFBO0VSdXZEaEM7O0VRdHZERTtJQUE4Qix5QkFBQTtFUjB2RGhDOztFUXh2REU7SUFBb0Msc0NBQUE7RVI0dkR0Qzs7RVEzdkRFO0lBQW9DLG9DQUFBO0VSK3ZEdEM7O0VROXZERTtJQUFvQyxrQ0FBQTtFUmt3RHRDOztFUWp3REU7SUFBb0MseUNBQUE7RVJxd0R0Qzs7RVFwd0RFO0lBQW9DLHdDQUFBO0VSd3dEdEM7O0VRdHdERTtJQUFpQyxrQ0FBQTtFUjB3RG5DOztFUXp3REU7SUFBaUMsZ0NBQUE7RVI2d0RuQzs7RVE1d0RFO0lBQWlDLDhCQUFBO0VSZ3hEbkM7O0VRL3dERTtJQUFpQyxnQ0FBQTtFUm14RG5DOztFUWx4REU7SUFBaUMsK0JBQUE7RVJzeERuQzs7RVFweERFO0lBQWtDLG9DQUFBO0VSd3hEcEM7O0VRdnhERTtJQUFrQyxrQ0FBQTtFUjJ4RHBDOztFUTF4REU7SUFBa0MsZ0NBQUE7RVI4eERwQzs7RVE3eERFO0lBQWtDLHVDQUFBO0VSaXlEcEM7O0VRaHlERTtJQUFrQyxzQ0FBQTtFUm95RHBDOztFUW55REU7SUFBa0MsaUNBQUE7RVJ1eURwQzs7RVFyeURFO0lBQWdDLDJCQUFBO0VSeXlEbEM7O0VReHlERTtJQUFnQyxpQ0FBQTtFUjR5RGxDOztFUTN5REU7SUFBZ0MsK0JBQUE7RVIreURsQzs7RVE5eURFO0lBQWdDLDZCQUFBO0VSa3pEbEM7O0VRanpERTtJQUFnQywrQkFBQTtFUnF6RGxDOztFUXB6REU7SUFBZ0MsOEJBQUE7RVJ3ekRsQztBQUNGO0FJN3lESTtFSWxEQTtJQUFnQyw4QkFBQTtFUm0yRGxDOztFUWwyREU7SUFBZ0MsaUNBQUE7RVJzMkRsQzs7RVFyMkRFO0lBQWdDLHNDQUFBO0VSeTJEbEM7O0VReDJERTtJQUFnQyx5Q0FBQTtFUjQyRGxDOztFUTEyREU7SUFBOEIsMEJBQUE7RVI4MkRoQzs7RVE3MkRFO0lBQThCLDRCQUFBO0VSaTNEaEM7O0VRaDNERTtJQUE4QixrQ0FBQTtFUm8zRGhDOztFUW4zREU7SUFBOEIseUJBQUE7RVJ1M0RoQzs7RVF0M0RFO0lBQThCLHVCQUFBO0VSMDNEaEM7O0VRejNERTtJQUE4Qix1QkFBQTtFUjYzRGhDOztFUTUzREU7SUFBOEIseUJBQUE7RVJnNERoQzs7RVEvM0RFO0lBQThCLHlCQUFBO0VSbTREaEM7O0VRajRERTtJQUFvQyxzQ0FBQTtFUnE0RHRDOztFUXA0REU7SUFBb0Msb0NBQUE7RVJ3NER0Qzs7RVF2NERFO0lBQW9DLGtDQUFBO0VSMjREdEM7O0VRMTRERTtJQUFvQyx5Q0FBQTtFUjg0RHRDOztFUTc0REU7SUFBb0Msd0NBQUE7RVJpNUR0Qzs7RVEvNERFO0lBQWlDLGtDQUFBO0VSbTVEbkM7O0VRbDVERTtJQUFpQyxnQ0FBQTtFUnM1RG5DOztFUXI1REU7SUFBaUMsOEJBQUE7RVJ5NURuQzs7RVF4NURFO0lBQWlDLGdDQUFBO0VSNDVEbkM7O0VRMzVERTtJQUFpQywrQkFBQTtFUis1RG5DOztFUTc1REU7SUFBa0Msb0NBQUE7RVJpNkRwQzs7RVFoNkRFO0lBQWtDLGtDQUFBO0VSbzZEcEM7O0VRbjZERTtJQUFrQyxnQ0FBQTtFUnU2RHBDOztFUXQ2REU7SUFBa0MsdUNBQUE7RVIwNkRwQzs7RVF6NkRFO0lBQWtDLHNDQUFBO0VSNjZEcEM7O0VRNTZERTtJQUFrQyxpQ0FBQTtFUmc3RHBDOztFUTk2REU7SUFBZ0MsMkJBQUE7RVJrN0RsQzs7RVFqN0RFO0lBQWdDLGlDQUFBO0VScTdEbEM7O0VRcDdERTtJQUFnQywrQkFBQTtFUnc3RGxDOztFUXY3REU7SUFBZ0MsNkJBQUE7RVIyN0RsQzs7RVExN0RFO0lBQWdDLCtCQUFBO0VSODdEbEM7O0VRNzdERTtJQUFnQyw4QkFBQTtFUmk4RGxDO0FBQ0Y7QVN4K0RRO0VBQWdDLG9CQUFBO0FUMitEeEM7QVMxK0RROztFQUVFLHdCQUFBO0FUNitEVjtBUzMrRFE7O0VBRUUsMEJBQUE7QVQ4K0RWO0FTNStEUTs7RUFFRSwyQkFBQTtBVCsrRFY7QVM3K0RROztFQUVFLHlCQUFBO0FUZy9EVjtBUy8vRFE7RUFBZ0MsMEJBQUE7QVRtZ0V4QztBU2xnRVE7O0VBRUUsOEJBQUE7QVRxZ0VWO0FTbmdFUTs7RUFFRSxnQ0FBQTtBVHNnRVY7QVNwZ0VROztFQUVFLGlDQUFBO0FUdWdFVjtBU3JnRVE7O0VBRUUsK0JBQUE7QVR3Z0VWO0FTdmhFUTtFQUFnQyx5QkFBQTtBVDJoRXhDO0FTMWhFUTs7RUFFRSw2QkFBQTtBVDZoRVY7QVMzaEVROztFQUVFLCtCQUFBO0FUOGhFVjtBUzVoRVE7O0VBRUUsZ0NBQUE7QVQraEVWO0FTN2hFUTs7RUFFRSw4QkFBQTtBVGdpRVY7QVMvaUVRO0VBQWdDLHVCQUFBO0FUbWpFeEM7QVNsakVROztFQUVFLDJCQUFBO0FUcWpFVjtBU25qRVE7O0VBRUUsNkJBQUE7QVRzakVWO0FTcGpFUTs7RUFFRSw4QkFBQTtBVHVqRVY7QVNyakVROztFQUVFLDRCQUFBO0FUd2pFVjtBU3ZrRVE7RUFBZ0MseUJBQUE7QVQya0V4QztBUzFrRVE7O0VBRUUsNkJBQUE7QVQ2a0VWO0FTM2tFUTs7RUFFRSwrQkFBQTtBVDhrRVY7QVM1a0VROztFQUVFLGdDQUFBO0FUK2tFVjtBUzdrRVE7O0VBRUUsOEJBQUE7QVRnbEVWO0FTL2xFUTtFQUFnQyx1QkFBQTtBVG1tRXhDO0FTbG1FUTs7RUFFRSwyQkFBQTtBVHFtRVY7QVNubUVROztFQUVFLDZCQUFBO0FUc21FVjtBU3BtRVE7O0VBRUUsOEJBQUE7QVR1bUVWO0FTcm1FUTs7RUFFRSw0QkFBQTtBVHdtRVY7QVN2bkVRO0VBQWdDLHFCQUFBO0FUMm5FeEM7QVMxbkVROztFQUVFLHlCQUFBO0FUNm5FVjtBUzNuRVE7O0VBRUUsMkJBQUE7QVQ4bkVWO0FTNW5FUTs7RUFFRSw0QkFBQTtBVCtuRVY7QVM3bkVROztFQUVFLDBCQUFBO0FUZ29FVjtBUy9vRVE7RUFBZ0MsMkJBQUE7QVRtcEV4QztBU2xwRVE7O0VBRUUsK0JBQUE7QVRxcEVWO0FTbnBFUTs7RUFFRSxpQ0FBQTtBVHNwRVY7QVNwcEVROztFQUVFLGtDQUFBO0FUdXBFVjtBU3JwRVE7O0VBRUUsZ0NBQUE7QVR3cEVWO0FTdnFFUTtFQUFnQywwQkFBQTtBVDJxRXhDO0FTMXFFUTs7RUFFRSw4QkFBQTtBVDZxRVY7QVMzcUVROztFQUVFLGdDQUFBO0FUOHFFVjtBUzVxRVE7O0VBRUUsaUNBQUE7QVQrcUVWO0FTN3FFUTs7RUFFRSwrQkFBQTtBVGdyRVY7QVMvckVRO0VBQWdDLHdCQUFBO0FUbXNFeEM7QVNsc0VROztFQUVFLDRCQUFBO0FUcXNFVjtBU25zRVE7O0VBRUUsOEJBQUE7QVRzc0VWO0FTcHNFUTs7RUFFRSwrQkFBQTtBVHVzRVY7QVNyc0VROztFQUVFLDZCQUFBO0FUd3NFVjtBU3Z0RVE7RUFBZ0MsMEJBQUE7QVQydEV4QztBUzF0RVE7O0VBRUUsOEJBQUE7QVQ2dEVWO0FTM3RFUTs7RUFFRSxnQ0FBQTtBVDh0RVY7QVM1dEVROztFQUVFLGlDQUFBO0FUK3RFVjtBUzd0RVE7O0VBRUUsK0JBQUE7QVRndUVWO0FTL3VFUTtFQUFnQyx3QkFBQTtBVG12RXhDO0FTbHZFUTs7RUFFRSw0QkFBQTtBVHF2RVY7QVNudkVROztFQUVFLDhCQUFBO0FUc3ZFVjtBU3B2RVE7O0VBRUUsK0JBQUE7QVR1dkVWO0FTcnZFUTs7RUFFRSw2QkFBQTtBVHd2RVY7QVNodkVRO0VBQXdCLDJCQUFBO0FUb3ZFaEM7QVNudkVROztFQUVFLCtCQUFBO0FUc3ZFVjtBU3B2RVE7O0VBRUUsaUNBQUE7QVR1dkVWO0FTcnZFUTs7RUFFRSxrQ0FBQTtBVHd2RVY7QVN0dkVROztFQUVFLGdDQUFBO0FUeXZFVjtBU3h3RVE7RUFBd0IsMEJBQUE7QVQ0d0VoQztBUzN3RVE7O0VBRUUsOEJBQUE7QVQ4d0VWO0FTNXdFUTs7RUFFRSxnQ0FBQTtBVCt3RVY7QVM3d0VROztFQUVFLGlDQUFBO0FUZ3hFVjtBUzl3RVE7O0VBRUUsK0JBQUE7QVRpeEVWO0FTaHlFUTtFQUF3Qix3QkFBQTtBVG95RWhDO0FTbnlFUTs7RUFFRSw0QkFBQTtBVHN5RVY7QVNweUVROztFQUVFLDhCQUFBO0FUdXlFVjtBU3J5RVE7O0VBRUUsK0JBQUE7QVR3eUVWO0FTdHlFUTs7RUFFRSw2QkFBQTtBVHl5RVY7QVN4ekVRO0VBQXdCLDBCQUFBO0FUNHpFaEM7QVMzekVROztFQUVFLDhCQUFBO0FUOHpFVjtBUzV6RVE7O0VBRUUsZ0NBQUE7QVQrekVWO0FTN3pFUTs7RUFFRSxpQ0FBQTtBVGcwRVY7QVM5ekVROztFQUVFLCtCQUFBO0FUaTBFVjtBU2gxRVE7RUFBd0Isd0JBQUE7QVRvMUVoQztBU24xRVE7O0VBRUUsNEJBQUE7QVRzMUVWO0FTcDFFUTs7RUFFRSw4QkFBQTtBVHUxRVY7QVNyMUVROztFQUVFLCtCQUFBO0FUdzFFVjtBU3QxRVE7O0VBRUUsNkJBQUE7QVR5MUVWO0FTbjFFSTtFQUFtQix1QkFBQTtBVHUxRXZCO0FTdDFFSTs7RUFFRSwyQkFBQTtBVHkxRU47QVN2MUVJOztFQUVFLDZCQUFBO0FUMDFFTjtBU3gxRUk7O0VBRUUsOEJBQUE7QVQyMUVOO0FTejFFSTs7RUFFRSw0QkFBQTtBVDQxRU47QUlyMkVJO0VLbERJO0lBQWdDLG9CQUFBO0VUNDVFdEM7O0VTMzVFTTs7SUFFRSx3QkFBQTtFVDg1RVI7O0VTNTVFTTs7SUFFRSwwQkFBQTtFVCs1RVI7O0VTNzVFTTs7SUFFRSwyQkFBQTtFVGc2RVI7O0VTOTVFTTs7SUFFRSx5QkFBQTtFVGk2RVI7O0VTaDdFTTtJQUFnQywwQkFBQTtFVG83RXRDOztFU243RU07O0lBRUUsOEJBQUE7RVRzN0VSOztFU3A3RU07O0lBRUUsZ0NBQUE7RVR1N0VSOztFU3I3RU07O0lBRUUsaUNBQUE7RVR3N0VSOztFU3Q3RU07O0lBRUUsK0JBQUE7RVR5N0VSOztFU3g4RU07SUFBZ0MseUJBQUE7RVQ0OEV0Qzs7RVMzOEVNOztJQUVFLDZCQUFBO0VUODhFUjs7RVM1OEVNOztJQUVFLCtCQUFBO0VUKzhFUjs7RVM3OEVNOztJQUVFLGdDQUFBO0VUZzlFUjs7RVM5OEVNOztJQUVFLDhCQUFBO0VUaTlFUjs7RVNoK0VNO0lBQWdDLHVCQUFBO0VUbytFdEM7O0VTbitFTTs7SUFFRSwyQkFBQTtFVHMrRVI7O0VTcCtFTTs7SUFFRSw2QkFBQTtFVHUrRVI7O0VTcitFTTs7SUFFRSw4QkFBQTtFVHcrRVI7O0VTdCtFTTs7SUFFRSw0QkFBQTtFVHkrRVI7O0VTeC9FTTtJQUFnQyx5QkFBQTtFVDQvRXRDOztFUzMvRU07O0lBRUUsNkJBQUE7RVQ4L0VSOztFUzUvRU07O0lBRUUsK0JBQUE7RVQrL0VSOztFUzcvRU07O0lBRUUsZ0NBQUE7RVRnZ0ZSOztFUzkvRU07O0lBRUUsOEJBQUE7RVRpZ0ZSOztFU2hoRk07SUFBZ0MsdUJBQUE7RVRvaEZ0Qzs7RVNuaEZNOztJQUVFLDJCQUFBO0VUc2hGUjs7RVNwaEZNOztJQUVFLDZCQUFBO0VUdWhGUjs7RVNyaEZNOztJQUVFLDhCQUFBO0VUd2hGUjs7RVN0aEZNOztJQUVFLDRCQUFBO0VUeWhGUjs7RVN4aUZNO0lBQWdDLHFCQUFBO0VUNGlGdEM7O0VTM2lGTTs7SUFFRSx5QkFBQTtFVDhpRlI7O0VTNWlGTTs7SUFFRSwyQkFBQTtFVCtpRlI7O0VTN2lGTTs7SUFFRSw0QkFBQTtFVGdqRlI7O0VTOWlGTTs7SUFFRSwwQkFBQTtFVGlqRlI7O0VTaGtGTTtJQUFnQywyQkFBQTtFVG9rRnRDOztFU25rRk07O0lBRUUsK0JBQUE7RVRza0ZSOztFU3BrRk07O0lBRUUsaUNBQUE7RVR1a0ZSOztFU3JrRk07O0lBRUUsa0NBQUE7RVR3a0ZSOztFU3RrRk07O0lBRUUsZ0NBQUE7RVR5a0ZSOztFU3hsRk07SUFBZ0MsMEJBQUE7RVQ0bEZ0Qzs7RVMzbEZNOztJQUVFLDhCQUFBO0VUOGxGUjs7RVM1bEZNOztJQUVFLGdDQUFBO0VUK2xGUjs7RVM3bEZNOztJQUVFLGlDQUFBO0VUZ21GUjs7RVM5bEZNOztJQUVFLCtCQUFBO0VUaW1GUjs7RVNobkZNO0lBQWdDLHdCQUFBO0VUb25GdEM7O0VTbm5GTTs7SUFFRSw0QkFBQTtFVHNuRlI7O0VTcG5GTTs7SUFFRSw4QkFBQTtFVHVuRlI7O0VTcm5GTTs7SUFFRSwrQkFBQTtFVHduRlI7O0VTdG5GTTs7SUFFRSw2QkFBQTtFVHluRlI7O0VTeG9GTTtJQUFnQywwQkFBQTtFVDRvRnRDOztFUzNvRk07O0lBRUUsOEJBQUE7RVQ4b0ZSOztFUzVvRk07O0lBRUUsZ0NBQUE7RVQrb0ZSOztFUzdvRk07O0lBRUUsaUNBQUE7RVRncEZSOztFUzlvRk07O0lBRUUsK0JBQUE7RVRpcEZSOztFU2hxRk07SUFBZ0Msd0JBQUE7RVRvcUZ0Qzs7RVNucUZNOztJQUVFLDRCQUFBO0VUc3FGUjs7RVNwcUZNOztJQUVFLDhCQUFBO0VUdXFGUjs7RVNycUZNOztJQUVFLCtCQUFBO0VUd3FGUjs7RVN0cUZNOztJQUVFLDZCQUFBO0VUeXFGUjs7RVNqcUZNO0lBQXdCLDJCQUFBO0VUcXFGOUI7O0VTcHFGTTs7SUFFRSwrQkFBQTtFVHVxRlI7O0VTcnFGTTs7SUFFRSxpQ0FBQTtFVHdxRlI7O0VTdHFGTTs7SUFFRSxrQ0FBQTtFVHlxRlI7O0VTdnFGTTs7SUFFRSxnQ0FBQTtFVDBxRlI7O0VTenJGTTtJQUF3QiwwQkFBQTtFVDZyRjlCOztFUzVyRk07O0lBRUUsOEJBQUE7RVQrckZSOztFUzdyRk07O0lBRUUsZ0NBQUE7RVRnc0ZSOztFUzlyRk07O0lBRUUsaUNBQUE7RVRpc0ZSOztFUy9yRk07O0lBRUUsK0JBQUE7RVRrc0ZSOztFU2p0Rk07SUFBd0Isd0JBQUE7RVRxdEY5Qjs7RVNwdEZNOztJQUVFLDRCQUFBO0VUdXRGUjs7RVNydEZNOztJQUVFLDhCQUFBO0VUd3RGUjs7RVN0dEZNOztJQUVFLCtCQUFBO0VUeXRGUjs7RVN2dEZNOztJQUVFLDZCQUFBO0VUMHRGUjs7RVN6dUZNO0lBQXdCLDBCQUFBO0VUNnVGOUI7O0VTNXVGTTs7SUFFRSw4QkFBQTtFVCt1RlI7O0VTN3VGTTs7SUFFRSxnQ0FBQTtFVGd2RlI7O0VTOXVGTTs7SUFFRSxpQ0FBQTtFVGl2RlI7O0VTL3VGTTs7SUFFRSwrQkFBQTtFVGt2RlI7O0VTandGTTtJQUF3Qix3QkFBQTtFVHF3RjlCOztFU3B3Rk07O0lBRUUsNEJBQUE7RVR1d0ZSOztFU3J3Rk07O0lBRUUsOEJBQUE7RVR3d0ZSOztFU3R3Rk07O0lBRUUsK0JBQUE7RVR5d0ZSOztFU3Z3Rk07O0lBRUUsNkJBQUE7RVQwd0ZSOztFU3B3RkU7SUFBbUIsdUJBQUE7RVR3d0ZyQjs7RVN2d0ZFOztJQUVFLDJCQUFBO0VUMHdGSjs7RVN4d0ZFOztJQUVFLDZCQUFBO0VUMndGSjs7RVN6d0ZFOztJQUVFLDhCQUFBO0VUNHdGSjs7RVMxd0ZFOztJQUVFLDRCQUFBO0VUNndGSjtBQUNGO0FJdnhGSTtFS2xESTtJQUFnQyxvQkFBQTtFVDYwRnRDOztFUzUwRk07O0lBRUUsd0JBQUE7RVQrMEZSOztFUzcwRk07O0lBRUUsMEJBQUE7RVRnMUZSOztFUzkwRk07O0lBRUUsMkJBQUE7RVRpMUZSOztFUy8wRk07O0lBRUUseUJBQUE7RVRrMUZSOztFU2oyRk07SUFBZ0MsMEJBQUE7RVRxMkZ0Qzs7RVNwMkZNOztJQUVFLDhCQUFBO0VUdTJGUjs7RVNyMkZNOztJQUVFLGdDQUFBO0VUdzJGUjs7RVN0MkZNOztJQUVFLGlDQUFBO0VUeTJGUjs7RVN2MkZNOztJQUVFLCtCQUFBO0VUMDJGUjs7RVN6M0ZNO0lBQWdDLHlCQUFBO0VUNjNGdEM7O0VTNTNGTTs7SUFFRSw2QkFBQTtFVCszRlI7O0VTNzNGTTs7SUFFRSwrQkFBQTtFVGc0RlI7O0VTOTNGTTs7SUFFRSxnQ0FBQTtFVGk0RlI7O0VTLzNGTTs7SUFFRSw4QkFBQTtFVGs0RlI7O0VTajVGTTtJQUFnQyx1QkFBQTtFVHE1RnRDOztFU3A1Rk07O0lBRUUsMkJBQUE7RVR1NUZSOztFU3I1Rk07O0lBRUUsNkJBQUE7RVR3NUZSOztFU3Q1Rk07O0lBRUUsOEJBQUE7RVR5NUZSOztFU3Y1Rk07O0lBRUUsNEJBQUE7RVQwNUZSOztFU3o2Rk07SUFBZ0MseUJBQUE7RVQ2NkZ0Qzs7RVM1NkZNOztJQUVFLDZCQUFBO0VUKzZGUjs7RVM3NkZNOztJQUVFLCtCQUFBO0VUZzdGUjs7RVM5NkZNOztJQUVFLGdDQUFBO0VUaTdGUjs7RVMvNkZNOztJQUVFLDhCQUFBO0VUazdGUjs7RVNqOEZNO0lBQWdDLHVCQUFBO0VUcThGdEM7O0VTcDhGTTs7SUFFRSwyQkFBQTtFVHU4RlI7O0VTcjhGTTs7SUFFRSw2QkFBQTtFVHc4RlI7O0VTdDhGTTs7SUFFRSw4QkFBQTtFVHk4RlI7O0VTdjhGTTs7SUFFRSw0QkFBQTtFVDA4RlI7O0VTejlGTTtJQUFnQyxxQkFBQTtFVDY5RnRDOztFUzU5Rk07O0lBRUUseUJBQUE7RVQrOUZSOztFUzc5Rk07O0lBRUUsMkJBQUE7RVRnK0ZSOztFUzk5Rk07O0lBRUUsNEJBQUE7RVRpK0ZSOztFUy85Rk07O0lBRUUsMEJBQUE7RVRrK0ZSOztFU2ovRk07SUFBZ0MsMkJBQUE7RVRxL0Z0Qzs7RVNwL0ZNOztJQUVFLCtCQUFBO0VUdS9GUjs7RVNyL0ZNOztJQUVFLGlDQUFBO0VUdy9GUjs7RVN0L0ZNOztJQUVFLGtDQUFBO0VUeS9GUjs7RVN2L0ZNOztJQUVFLGdDQUFBO0VUMC9GUjs7RVN6Z0dNO0lBQWdDLDBCQUFBO0VUNmdHdEM7O0VTNWdHTTs7SUFFRSw4QkFBQTtFVCtnR1I7O0VTN2dHTTs7SUFFRSxnQ0FBQTtFVGdoR1I7O0VTOWdHTTs7SUFFRSxpQ0FBQTtFVGloR1I7O0VTL2dHTTs7SUFFRSwrQkFBQTtFVGtoR1I7O0VTamlHTTtJQUFnQyx3QkFBQTtFVHFpR3RDOztFU3BpR007O0lBRUUsNEJBQUE7RVR1aUdSOztFU3JpR007O0lBRUUsOEJBQUE7RVR3aUdSOztFU3RpR007O0lBRUUsK0JBQUE7RVR5aUdSOztFU3ZpR007O0lBRUUsNkJBQUE7RVQwaUdSOztFU3pqR007SUFBZ0MsMEJBQUE7RVQ2akd0Qzs7RVM1akdNOztJQUVFLDhCQUFBO0VUK2pHUjs7RVM3akdNOztJQUVFLGdDQUFBO0VUZ2tHUjs7RVM5akdNOztJQUVFLGlDQUFBO0VUaWtHUjs7RVMvakdNOztJQUVFLCtCQUFBO0VUa2tHUjs7RVNqbEdNO0lBQWdDLHdCQUFBO0VUcWxHdEM7O0VTcGxHTTs7SUFFRSw0QkFBQTtFVHVsR1I7O0VTcmxHTTs7SUFFRSw4QkFBQTtFVHdsR1I7O0VTdGxHTTs7SUFFRSwrQkFBQTtFVHlsR1I7O0VTdmxHTTs7SUFFRSw2QkFBQTtFVDBsR1I7O0VTbGxHTTtJQUF3QiwyQkFBQTtFVHNsRzlCOztFU3JsR007O0lBRUUsK0JBQUE7RVR3bEdSOztFU3RsR007O0lBRUUsaUNBQUE7RVR5bEdSOztFU3ZsR007O0lBRUUsa0NBQUE7RVQwbEdSOztFU3hsR007O0lBRUUsZ0NBQUE7RVQybEdSOztFUzFtR007SUFBd0IsMEJBQUE7RVQ4bUc5Qjs7RVM3bUdNOztJQUVFLDhCQUFBO0VUZ25HUjs7RVM5bUdNOztJQUVFLGdDQUFBO0VUaW5HUjs7RVMvbUdNOztJQUVFLGlDQUFBO0VUa25HUjs7RVNobkdNOztJQUVFLCtCQUFBO0VUbW5HUjs7RVNsb0dNO0lBQXdCLHdCQUFBO0VUc29HOUI7O0VTcm9HTTs7SUFFRSw0QkFBQTtFVHdvR1I7O0VTdG9HTTs7SUFFRSw4QkFBQTtFVHlvR1I7O0VTdm9HTTs7SUFFRSwrQkFBQTtFVDBvR1I7O0VTeG9HTTs7SUFFRSw2QkFBQTtFVDJvR1I7O0VTMXBHTTtJQUF3QiwwQkFBQTtFVDhwRzlCOztFUzdwR007O0lBRUUsOEJBQUE7RVRncUdSOztFUzlwR007O0lBRUUsZ0NBQUE7RVRpcUdSOztFUy9wR007O0lBRUUsaUNBQUE7RVRrcUdSOztFU2hxR007O0lBRUUsK0JBQUE7RVRtcUdSOztFU2xyR007SUFBd0Isd0JBQUE7RVRzckc5Qjs7RVNyckdNOztJQUVFLDRCQUFBO0VUd3JHUjs7RVN0ckdNOztJQUVFLDhCQUFBO0VUeXJHUjs7RVN2ckdNOztJQUVFLCtCQUFBO0VUMHJHUjs7RVN4ckdNOztJQUVFLDZCQUFBO0VUMnJHUjs7RVNyckdFO0lBQW1CLHVCQUFBO0VUeXJHckI7O0VTeHJHRTs7SUFFRSwyQkFBQTtFVDJyR0o7O0VTenJHRTs7SUFFRSw2QkFBQTtFVDRyR0o7O0VTMXJHRTs7SUFFRSw4QkFBQTtFVDZyR0o7O0VTM3JHRTs7SUFFRSw0QkFBQTtFVDhyR0o7QUFDRjtBSXhzR0k7RUtsREk7SUFBZ0Msb0JBQUE7RVQ4dkd0Qzs7RVM3dkdNOztJQUVFLHdCQUFBO0VUZ3dHUjs7RVM5dkdNOztJQUVFLDBCQUFBO0VUaXdHUjs7RVMvdkdNOztJQUVFLDJCQUFBO0VUa3dHUjs7RVNod0dNOztJQUVFLHlCQUFBO0VUbXdHUjs7RVNseEdNO0lBQWdDLDBCQUFBO0VUc3hHdEM7O0VTcnhHTTs7SUFFRSw4QkFBQTtFVHd4R1I7O0VTdHhHTTs7SUFFRSxnQ0FBQTtFVHl4R1I7O0VTdnhHTTs7SUFFRSxpQ0FBQTtFVDB4R1I7O0VTeHhHTTs7SUFFRSwrQkFBQTtFVDJ4R1I7O0VTMXlHTTtJQUFnQyx5QkFBQTtFVDh5R3RDOztFUzd5R007O0lBRUUsNkJBQUE7RVRnekdSOztFUzl5R007O0lBRUUsK0JBQUE7RVRpekdSOztFUy95R007O0lBRUUsZ0NBQUE7RVRrekdSOztFU2h6R007O0lBRUUsOEJBQUE7RVRtekdSOztFU2wwR007SUFBZ0MsdUJBQUE7RVRzMEd0Qzs7RVNyMEdNOztJQUVFLDJCQUFBO0VUdzBHUjs7RVN0MEdNOztJQUVFLDZCQUFBO0VUeTBHUjs7RVN2MEdNOztJQUVFLDhCQUFBO0VUMDBHUjs7RVN4MEdNOztJQUVFLDRCQUFBO0VUMjBHUjs7RVMxMUdNO0lBQWdDLHlCQUFBO0VUODFHdEM7O0VTNzFHTTs7SUFFRSw2QkFBQTtFVGcyR1I7O0VTOTFHTTs7SUFFRSwrQkFBQTtFVGkyR1I7O0VTLzFHTTs7SUFFRSxnQ0FBQTtFVGsyR1I7O0VTaDJHTTs7SUFFRSw4QkFBQTtFVG0yR1I7O0VTbDNHTTtJQUFnQyx1QkFBQTtFVHMzR3RDOztFU3IzR007O0lBRUUsMkJBQUE7RVR3M0dSOztFU3QzR007O0lBRUUsNkJBQUE7RVR5M0dSOztFU3YzR007O0lBRUUsOEJBQUE7RVQwM0dSOztFU3gzR007O0lBRUUsNEJBQUE7RVQyM0dSOztFUzE0R007SUFBZ0MscUJBQUE7RVQ4NEd0Qzs7RVM3NEdNOztJQUVFLHlCQUFBO0VUZzVHUjs7RVM5NEdNOztJQUVFLDJCQUFBO0VUaTVHUjs7RVMvNEdNOztJQUVFLDRCQUFBO0VUazVHUjs7RVNoNUdNOztJQUVFLDBCQUFBO0VUbTVHUjs7RVNsNkdNO0lBQWdDLDJCQUFBO0VUczZHdEM7O0VTcjZHTTs7SUFFRSwrQkFBQTtFVHc2R1I7O0VTdDZHTTs7SUFFRSxpQ0FBQTtFVHk2R1I7O0VTdjZHTTs7SUFFRSxrQ0FBQTtFVDA2R1I7O0VTeDZHTTs7SUFFRSxnQ0FBQTtFVDI2R1I7O0VTMTdHTTtJQUFnQywwQkFBQTtFVDg3R3RDOztFUzc3R007O0lBRUUsOEJBQUE7RVRnOEdSOztFUzk3R007O0lBRUUsZ0NBQUE7RVRpOEdSOztFUy83R007O0lBRUUsaUNBQUE7RVRrOEdSOztFU2g4R007O0lBRUUsK0JBQUE7RVRtOEdSOztFU2w5R007SUFBZ0Msd0JBQUE7RVRzOUd0Qzs7RVNyOUdNOztJQUVFLDRCQUFBO0VUdzlHUjs7RVN0OUdNOztJQUVFLDhCQUFBO0VUeTlHUjs7RVN2OUdNOztJQUVFLCtCQUFBO0VUMDlHUjs7RVN4OUdNOztJQUVFLDZCQUFBO0VUMjlHUjs7RVMxK0dNO0lBQWdDLDBCQUFBO0VUOCtHdEM7O0VTNytHTTs7SUFFRSw4QkFBQTtFVGcvR1I7O0VTOStHTTs7SUFFRSxnQ0FBQTtFVGkvR1I7O0VTLytHTTs7SUFFRSxpQ0FBQTtFVGsvR1I7O0VTaC9HTTs7SUFFRSwrQkFBQTtFVG0vR1I7O0VTbGdITTtJQUFnQyx3QkFBQTtFVHNnSHRDOztFU3JnSE07O0lBRUUsNEJBQUE7RVR3Z0hSOztFU3RnSE07O0lBRUUsOEJBQUE7RVR5Z0hSOztFU3ZnSE07O0lBRUUsK0JBQUE7RVQwZ0hSOztFU3hnSE07O0lBRUUsNkJBQUE7RVQyZ0hSOztFU25nSE07SUFBd0IsMkJBQUE7RVR1Z0g5Qjs7RVN0Z0hNOztJQUVFLCtCQUFBO0VUeWdIUjs7RVN2Z0hNOztJQUVFLGlDQUFBO0VUMGdIUjs7RVN4Z0hNOztJQUVFLGtDQUFBO0VUMmdIUjs7RVN6Z0hNOztJQUVFLGdDQUFBO0VUNGdIUjs7RVMzaEhNO0lBQXdCLDBCQUFBO0VUK2hIOUI7O0VTOWhITTs7SUFFRSw4QkFBQTtFVGlpSFI7O0VTL2hITTs7SUFFRSxnQ0FBQTtFVGtpSFI7O0VTaGlITTs7SUFFRSxpQ0FBQTtFVG1pSFI7O0VTamlITTs7SUFFRSwrQkFBQTtFVG9pSFI7O0VTbmpITTtJQUF3Qix3QkFBQTtFVHVqSDlCOztFU3RqSE07O0lBRUUsNEJBQUE7RVR5akhSOztFU3ZqSE07O0lBRUUsOEJBQUE7RVQwakhSOztFU3hqSE07O0lBRUUsK0JBQUE7RVQyakhSOztFU3pqSE07O0lBRUUsNkJBQUE7RVQ0akhSOztFUzNrSE07SUFBd0IsMEJBQUE7RVQra0g5Qjs7RVM5a0hNOztJQUVFLDhCQUFBO0VUaWxIUjs7RVMva0hNOztJQUVFLGdDQUFBO0VUa2xIUjs7RVNobEhNOztJQUVFLGlDQUFBO0VUbWxIUjs7RVNqbEhNOztJQUVFLCtCQUFBO0VUb2xIUjs7RVNubUhNO0lBQXdCLHdCQUFBO0VUdW1IOUI7O0VTdG1ITTs7SUFFRSw0QkFBQTtFVHltSFI7O0VTdm1ITTs7SUFFRSw4QkFBQTtFVDBtSFI7O0VTeG1ITTs7SUFFRSwrQkFBQTtFVDJtSFI7O0VTem1ITTs7SUFFRSw2QkFBQTtFVDRtSFI7O0VTdG1IRTtJQUFtQix1QkFBQTtFVDBtSHJCOztFU3ptSEU7O0lBRUUsMkJBQUE7RVQ0bUhKOztFUzFtSEU7O0lBRUUsNkJBQUE7RVQ2bUhKOztFUzNtSEU7O0lBRUUsOEJBQUE7RVQ4bUhKOztFUzVtSEU7O0lBRUUsNEJBQUE7RVQrbUhKO0FBQ0Y7QUl6bkhJO0VLbERJO0lBQWdDLG9CQUFBO0VUK3FIdEM7O0VTOXFITTs7SUFFRSx3QkFBQTtFVGlySFI7O0VTL3FITTs7SUFFRSwwQkFBQTtFVGtySFI7O0VTaHJITTs7SUFFRSwyQkFBQTtFVG1ySFI7O0VTanJITTs7SUFFRSx5QkFBQTtFVG9ySFI7O0VTbnNITTtJQUFnQywwQkFBQTtFVHVzSHRDOztFU3RzSE07O0lBRUUsOEJBQUE7RVR5c0hSOztFU3ZzSE07O0lBRUUsZ0NBQUE7RVQwc0hSOztFU3hzSE07O0lBRUUsaUNBQUE7RVQyc0hSOztFU3pzSE07O0lBRUUsK0JBQUE7RVQ0c0hSOztFUzN0SE07SUFBZ0MseUJBQUE7RVQrdEh0Qzs7RVM5dEhNOztJQUVFLDZCQUFBO0VUaXVIUjs7RVMvdEhNOztJQUVFLCtCQUFBO0VUa3VIUjs7RVNodUhNOztJQUVFLGdDQUFBO0VUbXVIUjs7RVNqdUhNOztJQUVFLDhCQUFBO0VUb3VIUjs7RVNudkhNO0lBQWdDLHVCQUFBO0VUdXZIdEM7O0VTdHZITTs7SUFFRSwyQkFBQTtFVHl2SFI7O0VTdnZITTs7SUFFRSw2QkFBQTtFVDB2SFI7O0VTeHZITTs7SUFFRSw4QkFBQTtFVDJ2SFI7O0VTenZITTs7SUFFRSw0QkFBQTtFVDR2SFI7O0VTM3dITTtJQUFnQyx5QkFBQTtFVCt3SHRDOztFUzl3SE07O0lBRUUsNkJBQUE7RVRpeEhSOztFUy93SE07O0lBRUUsK0JBQUE7RVRreEhSOztFU2h4SE07O0lBRUUsZ0NBQUE7RVRteEhSOztFU2p4SE07O0lBRUUsOEJBQUE7RVRveEhSOztFU255SE07SUFBZ0MsdUJBQUE7RVR1eUh0Qzs7RVN0eUhNOztJQUVFLDJCQUFBO0VUeXlIUjs7RVN2eUhNOztJQUVFLDZCQUFBO0VUMHlIUjs7RVN4eUhNOztJQUVFLDhCQUFBO0VUMnlIUjs7RVN6eUhNOztJQUVFLDRCQUFBO0VUNHlIUjs7RVMzekhNO0lBQWdDLHFCQUFBO0VUK3pIdEM7O0VTOXpITTs7SUFFRSx5QkFBQTtFVGkwSFI7O0VTL3pITTs7SUFFRSwyQkFBQTtFVGswSFI7O0VTaDBITTs7SUFFRSw0QkFBQTtFVG0wSFI7O0VTajBITTs7SUFFRSwwQkFBQTtFVG8wSFI7O0VTbjFITTtJQUFnQywyQkFBQTtFVHUxSHRDOztFU3QxSE07O0lBRUUsK0JBQUE7RVR5MUhSOztFU3YxSE07O0lBRUUsaUNBQUE7RVQwMUhSOztFU3gxSE07O0lBRUUsa0NBQUE7RVQyMUhSOztFU3oxSE07O0lBRUUsZ0NBQUE7RVQ0MUhSOztFUzMySE07SUFBZ0MsMEJBQUE7RVQrMkh0Qzs7RVM5MkhNOztJQUVFLDhCQUFBO0VUaTNIUjs7RVMvMkhNOztJQUVFLGdDQUFBO0VUazNIUjs7RVNoM0hNOztJQUVFLGlDQUFBO0VUbTNIUjs7RVNqM0hNOztJQUVFLCtCQUFBO0VUbzNIUjs7RVNuNEhNO0lBQWdDLHdCQUFBO0VUdTRIdEM7O0VTdDRITTs7SUFFRSw0QkFBQTtFVHk0SFI7O0VTdjRITTs7SUFFRSw4QkFBQTtFVDA0SFI7O0VTeDRITTs7SUFFRSwrQkFBQTtFVDI0SFI7O0VTejRITTs7SUFFRSw2QkFBQTtFVDQ0SFI7O0VTMzVITTtJQUFnQywwQkFBQTtFVCs1SHRDOztFUzk1SE07O0lBRUUsOEJBQUE7RVRpNkhSOztFUy81SE07O0lBRUUsZ0NBQUE7RVRrNkhSOztFU2g2SE07O0lBRUUsaUNBQUE7RVRtNkhSOztFU2o2SE07O0lBRUUsK0JBQUE7RVRvNkhSOztFU243SE07SUFBZ0Msd0JBQUE7RVR1N0h0Qzs7RVN0N0hNOztJQUVFLDRCQUFBO0VUeTdIUjs7RVN2N0hNOztJQUVFLDhCQUFBO0VUMDdIUjs7RVN4N0hNOztJQUVFLCtCQUFBO0VUMjdIUjs7RVN6N0hNOztJQUVFLDZCQUFBO0VUNDdIUjs7RVNwN0hNO0lBQXdCLDJCQUFBO0VUdzdIOUI7O0VTdjdITTs7SUFFRSwrQkFBQTtFVDA3SFI7O0VTeDdITTs7SUFFRSxpQ0FBQTtFVDI3SFI7O0VTejdITTs7SUFFRSxrQ0FBQTtFVDQ3SFI7O0VTMTdITTs7SUFFRSxnQ0FBQTtFVDY3SFI7O0VTNThITTtJQUF3QiwwQkFBQTtFVGc5SDlCOztFUy84SE07O0lBRUUsOEJBQUE7RVRrOUhSOztFU2g5SE07O0lBRUUsZ0NBQUE7RVRtOUhSOztFU2o5SE07O0lBRUUsaUNBQUE7RVRvOUhSOztFU2w5SE07O0lBRUUsK0JBQUE7RVRxOUhSOztFU3ArSE07SUFBd0Isd0JBQUE7RVR3K0g5Qjs7RVN2K0hNOztJQUVFLDRCQUFBO0VUMCtIUjs7RVN4K0hNOztJQUVFLDhCQUFBO0VUMitIUjs7RVN6K0hNOztJQUVFLCtCQUFBO0VUNCtIUjs7RVMxK0hNOztJQUVFLDZCQUFBO0VUNitIUjs7RVM1L0hNO0lBQXdCLDBCQUFBO0VUZ2dJOUI7O0VTLy9ITTs7SUFFRSw4QkFBQTtFVGtnSVI7O0VTaGdJTTs7SUFFRSxnQ0FBQTtFVG1nSVI7O0VTamdJTTs7SUFFRSxpQ0FBQTtFVG9nSVI7O0VTbGdJTTs7SUFFRSwrQkFBQTtFVHFnSVI7O0VTcGhJTTtJQUF3Qix3QkFBQTtFVHdoSTlCOztFU3ZoSU07O0lBRUUsNEJBQUE7RVQwaElSOztFU3hoSU07O0lBRUUsOEJBQUE7RVQyaElSOztFU3poSU07O0lBRUUsK0JBQUE7RVQ0aElSOztFUzFoSU07O0lBRUUsNkJBQUE7RVQ2aElSOztFU3ZoSUU7SUFBbUIsdUJBQUE7RVQyaElyQjs7RVMxaElFOztJQUVFLDJCQUFBO0VUNmhJSjs7RVMzaElFOztJQUVFLDZCQUFBO0VUOGhJSjs7RVM1aElFOztJQUVFLDhCQUFBO0VUK2hJSjs7RVM3aElFOztJQUVFLDRCQUFBO0VUZ2lJSjtBQUNGO0FBbm1JQTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSxrREFBQTtBQXFtSUY7QUl0aUlJO0VKdEVKO0lBVUksMkJBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxrQkFBQTtFQXNtSUY7QUFDRjtBQXBtSUU7RUFDRSxXS0hPO0VMSVAsc0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFzbUlKO0FBcm1JSTtFQUNFLFdLUks7QUwrbUlYO0FJdmpJSTtFSnRERjtJQVNJLFdLckJLO0VMNm5JVDtBQUNGO0FJNWpJSTtFSnpDRjtJQUVJLG9CQUFBO0VBdW1JSjtBQUNGO0FBcm1JTTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUlBLHFCQUFBO0FBb21JUjtBQXZtSVE7RUFDRSxjS1hBO0FMb25JVjtBSTlrSUk7RUpwQ0U7SUFhSSxpQkFBQTtJQUNBLCtCQUFBO0VBeW1JUjtFQXhtSVE7SUFDRSxXSzlDRDtFTHdwSVQ7QUFDRjtBQXhtSVE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUEwbUlWO0FBem1JVTtFQUNFLGNLM0JGO0FMc29JVjtBQXRtSU07RUFDRSxZQUFBO0VBQ0EsZ0JLOURHO0VMaUVILGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBd21JUjtBQXZtSVE7RUFDRSxlQUFBO0VBQ0EsV0s1REM7QUxxcUlYO0FBeG1JVTtFQUNFLG1CSzVDRjtFTDZDRSxXS3pFRDtBTG1ySVg7QUFubUlRO0VBQ0UsV0tqRkM7RUxrRkQsbUJLdERBO0VMdURBLGdCQUFBO0FBcW1JVjtBSXRuSUk7RUpjSTtJQUtJLGtCQUFBO0lBQ0EsbUJBQUE7RUF1bUlWO0FBQ0Y7QUk1bklJO0VKY0k7SUFTSSxXS3pGRDtJTDBGQyxtQks5REY7SUwrREUsa0JBQUE7RUF5bUlWO0FBQ0Y7QUFybUlRO0VBQ0UsY0tyRUE7QUw0cUlWO0FJdG9JSTtFSjhCSTtJQUdJLFdLbkdEO0VMNHNJVDtBQUNGO0FBbm1JRTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBcW1JSjtBQXBtSUk7RUFDRSx3QkFBQTtBQXNtSU4iLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAtZ3JpZFwiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5mdGNvLW5hdmJhci1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMjBweCAtMTdweCByZ2JhKDAsMCwwLDAuMzQpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IC0xN3B4IHJnYmEoMCwwLDAsMC4zNCk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IC0xN3B4IHJnYmEoMCwwLDAsMC4zNCk7XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgYmFja2dyb3VuZDogJGJsYWNrIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6ICRibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICAmOmhvdmVyLCAmOmZvY3Vze1xyXG4gICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKXtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItbmF2IHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCl7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgPiAubmF2LWl0ZW0ge1xyXG4gICAgICA+IC5uYXYtbGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbSAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGJsYWNrLDIwJSk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKXtcclxuICAgICAgICAgIHBhZGRpbmc6IC45cmVtIDA7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmljb24tY2FydHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAuZmF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzRweCAtMjBweCByZ2JhKDAsMCwwLDAuNDEpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDM0cHggLTIwcHggcmdiYSgwLDAsMCwwLjQxKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzRweCAtMjBweCByZ2JhKDAsMCwwLDAuNDEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC5kcm9wZG93bi1pdGVte1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgICYuY3RhIHtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSl7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCl7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKXtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSkhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcclxuICAgICY6Zm9jdXN7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyohXG4gKiBCb290c3RyYXAgR3JpZCB2NC42LjAgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDIxIFRoZSBCb290c3RyYXAgQXV0aG9yc1xuICogQ29weXJpZ2h0IDIwMTEtMjAyMSBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqL1xuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbkBpbXBvcnQgXCJmdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQGltcG9ydCBcIm1peGlucy9kZXByZWNhdGVcIjtcbkBpbXBvcnQgXCJtaXhpbnMvYnJlYWtwb2ludHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvZ3JpZC1mcmFtZXdvcmtcIjtcbkBpbXBvcnQgXCJtaXhpbnMvZ3JpZFwiO1xuXG5AaW1wb3J0IFwiZ3JpZFwiO1xuQGltcG9ydCBcInV0aWxpdGllcy9kaXNwbGF5XCI7XG5AaW1wb3J0IFwidXRpbGl0aWVzL2ZsZXhcIjtcbkBpbXBvcnQgXCJ1dGlsaXRpZXMvc3BhY2luZ1wiO1xuIiwiLy8gQ29udGFpbmVyIHdpZHRoc1xuLy9cbi8vIFNldCB0aGUgY29udGFpbmVyIHdpZHRoLCBhbmQgb3ZlcnJpZGUgaXQgZm9yIGZpeGVkIG5hdmJhcnMgaW4gbWVkaWEgcXVlcmllcy5cblxuQGlmICRlbmFibGUtZ3JpZC1jbGFzc2VzIHtcbiAgLy8gU2luZ2xlIGNvbnRhaW5lciBjbGFzcyB3aXRoIGJyZWFrcG9pbnQgbWF4LXdpZHRoc1xuICAuY29udGFpbmVyLFxuICAvLyAxMDAlIHdpZGUgY29udGFpbmVyIGF0IGFsbCBicmVha3BvaW50c1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lcigpO1xuICB9XG5cbiAgLy8gUmVzcG9uc2l2ZSBjb250YWluZXJzIHRoYXQgYXJlIDEwMCUgd2lkZSB1bnRpbCBhIGJyZWFrcG9pbnRcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRjb250YWluZXItbWF4LXdpZHRocyB7XG4gICAgLmNvbnRhaW5lci0jeyRicmVha3BvaW50fSB7XG4gICAgICBAZXh0ZW5kIC5jb250YWluZXItZmx1aWQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgICAgICVyZXNwb25zaXZlLWNvbnRhaW5lci0jeyRicmVha3BvaW50fSB7XG4gICAgICAgIG1heC13aWR0aDogJGNvbnRhaW5lci1tYXgtd2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dGVuZCBlYWNoIGJyZWFrcG9pbnQgd2hpY2ggaXMgc21hbGxlciBvciBlcXVhbCB0byB0aGUgY3VycmVudCBicmVha3BvaW50XG4gICAgICAkZXh0ZW5kLWJyZWFrcG9pbnQ6IHRydWU7XG5cbiAgICAgIEBlYWNoICRuYW1lLCAkd2lkdGggaW4gJGdyaWQtYnJlYWtwb2ludHMge1xuICAgICAgICBAaWYgKCRleHRlbmQtYnJlYWtwb2ludCkge1xuICAgICAgICAgIC5jb250YWluZXIje2JyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRncmlkLWJyZWFrcG9pbnRzKX0ge1xuICAgICAgICAgICAgQGV4dGVuZCAlcmVzcG9uc2l2ZS1jb250YWluZXItI3skYnJlYWtwb2ludH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT25jZSB0aGUgY3VycmVudCBicmVha3BvaW50IGlzIHJlYWNoZWQsIHN0b3AgZXh0ZW5kaW5nXG4gICAgICAgICAgQGlmICgkYnJlYWtwb2ludCA9PSAkbmFtZSkge1xuICAgICAgICAgICAgJGV4dGVuZC1icmVha3BvaW50OiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vLyBSb3dcbi8vXG4vLyBSb3dzIGNvbnRhaW4geW91ciBjb2x1bW5zLlxuXG5AaWYgJGVuYWJsZS1ncmlkLWNsYXNzZXMge1xuICAucm93IHtcbiAgICBAaW5jbHVkZSBtYWtlLXJvdygpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBuZWdhdGl2ZSBtYXJnaW4gZnJvbSBkZWZhdWx0IC5yb3csIHRoZW4gdGhlIGhvcml6b250YWwgcGFkZGluZ1xuICAvLyBmcm9tIGFsbCBpbW1lZGlhdGUgY2hpbGRyZW4gY29sdW1ucyAodG8gcHJldmVudCBydW5hd2F5IHN0eWxlIGluaGVyaXRhbmNlKS5cbiAgLm5vLWd1dHRlcnMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgID4gLmNvbCxcbiAgICA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi8vIENvbHVtbnNcbi8vXG4vLyBDb21tb24gc3R5bGVzIGZvciBzbWFsbCBhbmQgbGFyZ2UgZ3JpZCBjb2x1bW5zXG5cbkBpZiAkZW5hYmxlLWdyaWQtY2xhc3NlcyB7XG4gIEBpbmNsdWRlIG1ha2UtZ3JpZC1jb2x1bW5zKCk7XG59XG4iLCIvLy8gR3JpZCBzeXN0ZW1cbi8vXG4vLyBHZW5lcmF0ZSBzZW1hbnRpYyBncmlkIGNvbHVtbnMgd2l0aCB0aGVzZSBtaXhpbnMuXG5cbkBtaXhpbiBtYWtlLWNvbnRhaW5lcigkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5AbWl4aW4gbWFrZS1yb3coJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtJGd1dHRlciAvIDI7XG4gIG1hcmdpbi1sZWZ0OiAtJGd1dHRlciAvIDI7XG59XG5cbi8vIEZvciBlYWNoIGJyZWFrcG9pbnQsIGRlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGluIGEgbWVkaWEgcXVlcnlcbkBtaXhpbiBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRtYXgtd2lkdGhzOiAkY29udGFpbmVyLW1heC13aWR0aHMsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRtYXgtd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIG1heC13aWR0aDogJGNvbnRhaW5lci1tYXgtd2lkdGg7XG4gICAgfVxuICB9XG4gIEBpbmNsdWRlIGRlcHJlY2F0ZShcIlRoZSBgbWFrZS1jb250YWluZXItbWF4LXdpZHRoc2AgbWl4aW5cIiwgXCJ2NC41LjJcIiwgXCJ2NVwiKTtcbn1cblxuQG1peGluIG1ha2UtY29sLXJlYWR5KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGJlY29taW5nIHRvbyBuYXJyb3cgd2hlbiBhdCBzbWFsbGVyIGdyaWQgdGllcnMgYnlcbiAgLy8gYWx3YXlzIHNldHRpbmcgYHdpZHRoOiAxMDAlO2AuIFRoaXMgd29ya3MgYmVjYXVzZSB3ZSB1c2UgYGZsZXhgIHZhbHVlc1xuICAvLyBsYXRlciBvbiB0byBvdmVycmlkZSB0aGlzIGluaXRpYWwgd2lkdGguXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyIC8gMjtcbiAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVyIC8gMjtcbn1cblxuQG1peGluIG1ha2UtY29sKCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICBmbGV4OiAwIDAgcGVyY2VudGFnZSgkc2l6ZSAvICRjb2x1bW5zKTtcbiAgLy8gQWRkIGEgYG1heC13aWR0aGAgdG8gZW5zdXJlIGNvbnRlbnQgd2l0aGluIGVhY2ggY29sdW1uIGRvZXMgbm90IGJsb3cgb3V0XG4gIC8vIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1uLiBBcHBsaWVzIHRvIElFMTArIGFuZCBGaXJlZm94LiBDaHJvbWUgYW5kIFNhZmFyaVxuICAvLyBkbyBub3QgYXBwZWFyIHRvIHJlcXVpcmUgdGhpcy5cbiAgbWF4LXdpZHRoOiBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtYXV0bygpIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7IC8vIFJlc2V0IGVhcmxpZXIgZ3JpZCB0aWVyc1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtb2Zmc2V0KCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICAkbnVtOiAkc2l6ZSAvICRjb2x1bW5zO1xuICBtYXJnaW4tbGVmdDogaWYoJG51bSA9PSAwLCAwLCBwZXJjZW50YWdlKCRudW0pKTtcbn1cblxuLy8gUm93IGNvbHVtbnNcbi8vXG4vLyBTcGVjaWZ5IG9uIGEgcGFyZW50IGVsZW1lbnQoZS5nLiwgLnJvdykgdG8gZm9yY2UgaW1tZWRpYXRlIGNoaWxkcmVuIGludG8gTk5cbi8vIG51bWJlcm9mIGNvbHVtbnMuIFN1cHBvcnRzIHdyYXBwaW5nIHRvIG5ldyBsaW5lcywgYnV0IGRvZXMgbm90IGRvIGEgTWFzb25yeVxuLy8gc3R5bGUgZ3JpZC5cbkBtaXhpbiByb3ctY29scygkY291bnQpIHtcbiAgPiAqIHtcbiAgICBmbGV4OiAwIDAgMTAwJSAvICRjb3VudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgLyAkY291bnQ7XG4gIH1cbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cblxuLy8gQ29sb3Igc3lzdGVtXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbiRncmF5czogbWFwLW1lcmdlKFxuICAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgKSxcbiAgJGdyYXlzXG4pO1xuXG4kYmx1ZTogICAgIzAwN2JmZiAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZGMzNTQ1ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2ZmYzEwNyAhZGVmYXVsdDtcbiRncmVlbjogICAjMjhhNzQ1ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzE3YTJiOCAhZGVmYXVsdDtcblxuJGNvbG9yczogKCkgIWRlZmF1bHQ7XG4kY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gICAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICAgIFwicmVkXCI6ICAgICAgICAkcmVkLFxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICAgIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuICApLFxuICAkY29sb3JzXG4pO1xuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgKSxcbiAgJHRoZW1lLWNvbG9yc1xuKTtcblxuLy8gU2V0IGEgc3BlY2lmaWMganVtcCBwb2ludCBmb3IgcmVxdWVzdGluZyBjb2xvciBqdW1wc1xuJHRoZW1lLWNvbG9yLWludGVydmFsOiAgICAgIDglICFkZWZhdWx0O1xuXG4vLyBUaGUgeWlxIGxpZ2h0bmVzcyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlbiB0aGUgbGlnaHRuZXNzIG9mIGNvbG9yIGNoYW5nZXMgZnJvbSBcImRhcmtcIiB0byBcImxpZ2h0XCIuIEFjY2VwdGFibGUgdmFsdWVzIGFyZSBiZXR3ZWVuIDAgYW5kIDI1NS5cbiR5aXEtY29udHJhc3RlZC10aHJlc2hvbGQ6ICAxNTAgIWRlZmF1bHQ7XG5cbi8vIEN1c3RvbWl6ZSB0aGUgbGlnaHQgYW5kIGRhcmsgdGV4dCBjb2xvcnMgZm9yIHVzZSBpbiBvdXIgWUlRIGNvbG9yIGNvbnRyYXN0IGZ1bmN0aW9uLlxuJHlpcS10ZXh0LWRhcms6ICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiR5aXEtdGV4dC1saWdodDogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIENoYXJhY3RlcnMgd2hpY2ggYXJlIGVzY2FwZWQgYnkgdGhlIGVzY2FwZS1zdmcgZnVuY3Rpb25cbiRlc2NhcGVkLWNoYXJhY3RlcnM6IChcbiAgKFwiPFwiLCBcIiUzY1wiKSxcbiAgKFwiPlwiLCBcIiUzZVwiKSxcbiAgKFwiI1wiLCBcIiUyM1wiKSxcbiAgKFwiKFwiLCBcIiUyOFwiKSxcbiAgKFwiKVwiLCBcIiUyOVwiKSxcbikgIWRlZmF1bHQ7XG5cblxuLy8gT3B0aW9uc1xuLy9cbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cblxuJGVuYWJsZS1jYXJldDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJvdW5kZWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6ICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmVmZXJzLXJlZHVjZWQtbW90aW9uLW1lZGlhLXF1ZXJ5OiAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQsIG5vIGxvbmdlciBhZmZlY3RzIGFueSBjb21waWxlZCBDU1NcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksXG4gICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgMzogJHNwYWNlcixcbiAgICA0OiAoJHNwYWNlciAqIDEuNSksXG4gICAgNTogKCRzcGFjZXIgKiAzKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbiRzaXplczogbWFwLW1lcmdlKFxuICAoXG4gICAgMjU6IDI1JSxcbiAgICA1MDogNTAlLFxuICAgIDc1OiA3NSUsXG4gICAgMTAwOiAxMDAlLFxuICAgIGF1dG86IGF1dG9cbiAgKSxcbiAgJHNpemVzXG4pO1xuXG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRsaW5rLWNvbG9yLCAxNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lICFkZWZhdWx0O1xuLy8gRGFya2VuIHBlcmNlbnRhZ2UgZm9yIGxpbmtzIHdpdGggYC50ZXh0LSpgIGNsYXNzIChlLmcuIGAudGV4dC1zdWNjZXNzYClcbiRlbXBoYXNpemVkLWxpbmstaG92ZXItZGFya2VuLXBlcmNlbnRhZ2U6IDE1JSAhZGVmYXVsdDtcblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAgIDFyZW0gIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5AaW5jbHVkZSBfYXNzZXJ0LXN0YXJ0cy1hdC16ZXJvKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuXG5cbi8vIEdyaWQgY29udGFpbmVyc1xuLy9cbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4XG4pICFkZWZhdWx0O1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkY29udGFpbmVyLW1heC13aWR0aHMsIFwiJGNvbnRhaW5lci1tYXgtd2lkdGhzXCIpO1xuXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1jb2x1bW5zOiAgICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kZ3JpZC1yb3ctY29sdW1uczogICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuXG4kcm91bmRlZC1waWxsOiAgICAgICAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcblxuJGJveC1zaGFkb3ctc206ICAgICAgICAgICAgICAgMCAuMTI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcblxuJGNhcmV0LXdpZHRoOiAgICAgICAgICAgICAgICAgLjNlbSAhZGVmYXVsdDtcbiRjYXJldC12ZXJ0aWNhbC1hbGlnbjogICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcbiRjYXJldC1zcGFjaW5nOiAgICAgICAgICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogICAgICAgICBoZWlnaHQgLjM1cyBlYXNlICFkZWZhdWx0O1xuXG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiAoKSAhZGVmYXVsdDtcbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6IGpvaW4oXG4gIChcbiAgICAoMjEgOSksXG4gICAgKDE2IDkpLFxuICAgICg0IDMpLFxuICAgICgxIDEpLFxuICApLFxuICAkZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zXG4pO1xuXG4vLyBUeXBvZ3JhcGh5XG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgXCJMaWJlcmF0aW9uIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6ICAgICAgICAgbGlnaHRlciAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgIDcwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6ICAgICAgICAgIGJvbGRlciAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAxLjIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtc2l6ZTogICAgICAgICAgICAgICA2cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgICAgICAgNS41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkzLXNpemU6ICAgICAgICAgICAgICAgNC41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgICAgICAgMy41cmVtICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTMtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheS1saW5lLWhlaWdodDogICAgICAgICAkaGVhZGluZ3MtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XG5cbiRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4ka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xuXG4kdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kdGFibGUtYmctbGV2ZWw6ICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAwIDAgMCAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICRsaW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICAgICRsaW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGJ0bi13aGl0ZS1zcGFjZTogICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gU2V0IHRvIGBub3dyYXBgIHRvIHByZXZlbnQgdGV4dCB3cmFwcGluZ1xuXG4kYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgkd2hpdGUsIC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgaW5zZXQgMCAzcHggNXB4IHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kYnRuLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybXNcblxuJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1iZzogICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMjUlKSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbSwgJGlucHV0LXBhZGRpbmcteSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtLCAkaW5wdXQtcGFkZGluZy15IC8gMikgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG51bGwgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2bDIuOTc0IDIuOTlMOCAyLjE5M3onLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIHN1YnRyYWN0KCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSwgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICAgICAgICAgICAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgIDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogICAgICAgICAgZXNjYXBlLXN2ZygkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3IpIHJpZ2h0ICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplIG5vLXJlcGVhdCAhZGVmYXVsdDsgLy8gVXNlZCBzbyB3ZSBjYW4gaGF2ZSBtdWx0aXBsZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIChlLmcuLCBhcnJvdyBhbmQgZmVlZGJhY2sgaWNvbilcblxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBhZGQoMWVtICogLjc1LCAoMiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteSAqIC43NSkgKyAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiAgICAgIGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAgICAgICAgICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAwICRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogICAgICAgICAgICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogICAgICAgICAgICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXG4kY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICAgICAgICAgICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtdGV4dDogKFxuICBlbjogXCJCcm93c2VcIlxuKSAhZGVmYXVsdDtcblxuXG4vLyBGb3JtIHZhbGlkYXRpb25cblxuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9JzAgMCAxMiAxMic+PGNpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvPjxjaXJjbGUgY3g9JzYnIGN5PSc4LjInIHI9Jy42JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHN0cm9rZT0nbm9uZScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpICFkZWZhdWx0O1xuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwidmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXG4gICAgKSxcbiAgICBcImludmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxuICAgICksXG4gICksXG4gICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG4pO1xuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG5cblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xuXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1zY3JvbGwtbWF4LWhlaWdodDogICAgICA3NXZoICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLW1pbi13aWR0aDogICAgICAgICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy14OiAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tc3BhY2VyOiAgICAgICAgICAgICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgIHN1YnRyYWN0KCRkcm9wZG93bi1ib3JkZXItcmFkaXVzLCAkZHJvcGRvd24tYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICRuYXYtZGl2aWRlci1tYXJnaW4teSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgIGRhcmtlbigkZ3JheS05MDAsIDUlKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1oZWFkZXItcGFkZGluZzogICAgICAgICAgICRkcm9wZG93bi1wYWRkaW5nLXkgJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14ICFkZWZhdWx0O1xuXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcblxuLy8gSnVtYm90cm9uXG5cbiRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XG4kY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XG5cbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XG5cblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG4vLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICBzdWJ0cmFjdCgkcG9wb3Zlci1ib3JkZXItcmFkaXVzLCAkcG9wb3Zlci1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcblxuJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIFRvYXN0c1xuXG4kdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC43NXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBCYWRnZXNcblxuJGJhZGdlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgNzUlICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC40ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGJhZGdlLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uICFkZWZhdWx0O1xuJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcblxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcbi8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cbi8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cbiRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbi8vIE1hcmdpbiBiZXR3ZWVuIGVsZW1lbnRzIGluIGZvb3RlciwgbXVzdCBiZSBsb3dlciB0aGFuIG9yIGVxdWFsIHRvIDIgKiAkbW9kYWwtaW5uZXItcGFkZGluZ1xuJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogc3VidHJhY3QoJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1cywgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xuXG4kbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xuJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XG4kbW9kYWwtc2NhbGUtdHJhbnNmb3JtOiAgICAgICAgICAgICBzY2FsZSgxLjAyKSAhZGVmYXVsdDtcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XG5cblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuXG4vLyBGaWd1cmVzXG5cbiRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcbiRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuXG4vLyBCcmVhZGNydW1ic1xuXG4kYnJlYWRjcnVtYi1mb250LXNpemU6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gQ2Fyb3VzZWxcblxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41TDQuMjUgNGwyLjUtMi41TDUuMjUgMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZD0nTTIuNzUgMGwtMS41IDEuNUwzLjc1IDRsLTIuNSAyLjVMMi43NSA4bDQtNC00LTR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xuJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcblxuXG4vLyBTcGlubmVyc1xuXG4kc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcblxuJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcblxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xuXG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XG5cblxuLy8gVXRpbGl0aWVzXG5cbiRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LCBpbmxpbmUtZmxleCAhZGVmYXVsdDtcbiRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcbiRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xuJHVzZXItc2VsZWN0czogYWxsLCBhdXRvLCBub25lICFkZWZhdWx0O1xuXG5cbi8vIFByaW50aW5nXG5cbiRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xuJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcbiIsIi8vIEZyYW1ld29yayBncmlkIGdlbmVyYXRpb25cbi8vXG4vLyBVc2VkIG9ubHkgYnkgQm9vdHN0cmFwIHRvIGdlbmVyYXRlIHRoZSBjb3JyZWN0IG51bWJlciBvZiBncmlkIGNsYXNzZXMgZ2l2ZW5cbi8vIGFueSB2YWx1ZSBvZiBgJGdyaWQtY29sdW1uc2AuXG5cbkBtaXhpbiBtYWtlLWdyaWQtY29sdW1ucygkY29sdW1uczogJGdyaWQtY29sdW1ucywgJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIC8vIENvbW1vbiBwcm9wZXJ0aWVzIGZvciBhbGwgYnJlYWtwb2ludHNcbiAgJWdyaWQtY29sdW1uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogJGd1dHRlciAvIDI7XG4gICAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRicmVha3BvaW50cykge1xuICAgICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKTtcblxuICAgIEBpZiAkY29sdW1ucyA+IDAge1xuICAgICAgLy8gQWxsb3cgY29sdW1ucyB0byBzdHJldGNoIGZ1bGwgd2lkdGggYmVsb3cgdGhlaXIgYnJlYWtwb2ludHNcbiAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xuICAgICAgICAuY29sI3skaW5maXh9LSN7JGl9IHtcbiAgICAgICAgICBAZXh0ZW5kICVncmlkLWNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jb2wjeyRpbmZpeH0sXG4gICAgLmNvbCN7JGluZml4fS1hdXRvIHtcbiAgICAgIEBleHRlbmQgJWdyaWQtY29sdW1uO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgLy8gUHJvdmlkZSBiYXNpYyBgLmNvbC17YnB9YCBjbGFzc2VzIGZvciBlcXVhbC13aWR0aCBmbGV4Ym94IGNvbHVtbnNcbiAgICAgIC5jb2wjeyRpbmZpeH0ge1xuICAgICAgICBmbGV4LWJhc2lzOiAwO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgQGlmICRncmlkLXJvdy1jb2x1bW5zID4gMCB7XG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGdyaWQtcm93LWNvbHVtbnMge1xuICAgICAgICAgIC5yb3ctY29scyN7JGluZml4fS0jeyRpfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSByb3ctY29scygkaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb2wjeyRpbmZpeH0tYXV0byB7XG4gICAgICAgIEBpbmNsdWRlIG1ha2UtY29sLWF1dG8oKTtcbiAgICAgIH1cblxuICAgICAgQGlmICRjb2x1bW5zID4gMCB7XG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xuICAgICAgICAgIC5jb2wjeyRpbmZpeH0tI3skaX0ge1xuICAgICAgICAgICAgQGluY2x1ZGUgbWFrZS1jb2woJGksICRjb2x1bW5zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm9yZGVyI3skaW5maXh9LWZpcnN0IHsgb3JkZXI6IC0xOyB9XG5cbiAgICAgIC5vcmRlciN7JGluZml4fS1sYXN0IHsgb3JkZXI6ICRjb2x1bW5zICsgMTsgfVxuXG4gICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRjb2x1bW5zIHtcbiAgICAgICAgLm9yZGVyI3skaW5maXh9LSN7JGl9IHsgb3JkZXI6ICRpOyB9XG4gICAgICB9XG5cbiAgICAgIEBpZiAkY29sdW1ucyA+IDAge1xuICAgICAgICAvLyBgJGNvbHVtbnMgLSAxYCBiZWNhdXNlIG9mZnNldHRpbmcgYnkgdGhlIHdpZHRoIG9mIGFuIGVudGlyZSByb3cgaXNuJ3QgcG9zc2libGVcbiAgICAgICAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAoJGNvbHVtbnMgLSAxKSB7XG4gICAgICAgICAgQGlmIG5vdCAoJGluZml4ID09IFwiXCIgYW5kICRpID09IDApIHsgLy8gQXZvaWQgZW1pdHRpbmcgdXNlbGVzcyAub2Zmc2V0LTBcbiAgICAgICAgICAgIC5vZmZzZXQjeyRpbmZpeH0tI3skaX0ge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBtYWtlLWNvbC1vZmZzZXQoJGksICRjb2x1bW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuXG4vL1xuLy8gVXRpbGl0aWVzIGZvciBjb21tb24gYGRpc3BsYXlgIHZhbHVlc1xuLy9cblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJGdyaWQtYnJlYWtwb2ludHMpO1xuXG4gICAgQGVhY2ggJHZhbHVlIGluICRkaXNwbGF5cyB7XG4gICAgICAuZCN7JGluZml4fS0jeyR2YWx1ZX0geyBkaXNwbGF5OiAkdmFsdWUgIWltcG9ydGFudDsgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vXG4vLyBVdGlsaXRpZXMgZm9yIHRvZ2dsaW5nIGBkaXNwbGF5YCBpbiBwcmludFxuLy9cblxuQG1lZGlhIHByaW50IHtcbiAgQGVhY2ggJHZhbHVlIGluICRkaXNwbGF5cyB7XG4gICAgLmQtcHJpbnQtI3skdmFsdWV9IHsgZGlzcGxheTogJHZhbHVlICFpbXBvcnRhbnQ7IH1cbiAgfVxufVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG5cbi8vIEZsZXggdmFyaWF0aW9uXG4vL1xuLy8gQ3VzdG9tIHN0eWxlcyBmb3IgYWRkaXRpb25hbCBmbGV4IGFsaWdubWVudCBvcHRpb25zLlxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICAuZmxleCN7JGluZml4fS1yb3cgICAgICAgICAgICB7IGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LWNvbHVtbiAgICAgICAgIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tcm93LXJldmVyc2UgICAgeyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LWNvbHVtbi1yZXZlcnNlIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cblxuICAgIC5mbGV4I3skaW5maXh9LXdyYXAgICAgICAgICB7IGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tbm93cmFwICAgICAgIHsgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LXdyYXAtcmV2ZXJzZSB7IGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgICAuZmxleCN7JGluZml4fS1maWxsICAgICAgICAgeyBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tZ3Jvdy0wICAgICAgIHsgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7IH1cbiAgICAuZmxleCN7JGluZml4fS1ncm93LTEgICAgICAgeyBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LXNocmluay0wICAgICB7IGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7IH1cbiAgICAuZmxleCN7JGluZml4fS1zaHJpbmstMSAgICAgeyBmbGV4LXNocmluazogMSAhaW1wb3J0YW50OyB9XG5cbiAgICAuanVzdGlmeS1jb250ZW50I3skaW5maXh9LXN0YXJ0ICAgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAgIC5qdXN0aWZ5LWNvbnRlbnQjeyRpbmZpeH0tZW5kICAgICB7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAgIC5qdXN0aWZ5LWNvbnRlbnQjeyRpbmZpeH0tY2VudGVyICB7IGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgICAuanVzdGlmeS1jb250ZW50I3skaW5maXh9LWJldHdlZW4geyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAgIC5qdXN0aWZ5LWNvbnRlbnQjeyRpbmZpeH0tYXJvdW5kICB7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cblxuICAgIC5hbGlnbi1pdGVtcyN7JGluZml4fS1zdGFydCAgICB7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24taXRlbXMjeyRpbmZpeH0tZW5kICAgICAgeyBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1pdGVtcyN7JGluZml4fS1jZW50ZXIgICB7IGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1pdGVtcyN7JGluZml4fS1iYXNlbGluZSB7IGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWl0ZW1zI3skaW5maXh9LXN0cmV0Y2ggIHsgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuXG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tc3RhcnQgICB7IGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1jb250ZW50I3skaW5maXh9LWVuZCAgICAgeyBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tY2VudGVyICB7IGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tYmV0d2VlbiB7IGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1jb250ZW50I3skaW5maXh9LWFyb3VuZCAgeyBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1jb250ZW50I3skaW5maXh9LXN0cmV0Y2ggeyBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cblxuICAgIC5hbGlnbi1zZWxmI3skaW5maXh9LWF1dG8gICAgIHsgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLXNlbGYjeyRpbmZpeH0tc3RhcnQgICAgeyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tc2VsZiN7JGluZml4fS1lbmQgICAgICB7IGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tc2VsZiN7JGluZml4fS1jZW50ZXIgICB7IGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLXNlbGYjeyRpbmZpeH0tYmFzZWxpbmUgeyBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLXNlbGYjeyRpbmZpeH0tc3RyZXRjaCAgeyBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cbiAgfVxufVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG5cbi8vIE1hcmdpbiBhbmQgUGFkZGluZ1xuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICBAZWFjaCAkcHJvcCwgJGFiYnJldiBpbiAobWFyZ2luOiBtLCBwYWRkaW5nOiBwKSB7XG4gICAgICBAZWFjaCAkc2l6ZSwgJGxlbmd0aCBpbiAkc3BhY2VycyB7XG4gICAgICAgIC4jeyRhYmJyZXZ9I3skaW5maXh9LSN7JHNpemV9IHsgI3skcHJvcH06ICRsZW5ndGggIWltcG9ydGFudDsgfVxuICAgICAgICAuI3skYWJicmV2fXQjeyRpbmZpeH0tI3skc2l6ZX0sXG4gICAgICAgIC4jeyRhYmJyZXZ9eSN7JGluZml4fS0jeyRzaXplfSB7XG4gICAgICAgICAgI3skcHJvcH0tdG9wOiAkbGVuZ3RoICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLiN7JGFiYnJldn1yI3skaW5maXh9LSN7JHNpemV9LFxuICAgICAgICAuI3skYWJicmV2fXgjeyRpbmZpeH0tI3skc2l6ZX0ge1xuICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiAkbGVuZ3RoICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLiN7JGFiYnJldn1iI3skaW5maXh9LSN7JHNpemV9LFxuICAgICAgICAuI3skYWJicmV2fXkjeyRpbmZpeH0tI3skc2l6ZX0ge1xuICAgICAgICAgICN7JHByb3B9LWJvdHRvbTogJGxlbmd0aCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC4jeyRhYmJyZXZ9bCN7JGluZml4fS0jeyRzaXplfSxcbiAgICAgICAgLiN7JGFiYnJldn14I3skaW5maXh9LSN7JHNpemV9IHtcbiAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiAkbGVuZ3RoICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOZWdhdGl2ZSBtYXJnaW5zIChlLmcuLCB3aGVyZSBgLm1iLW4xYCBpcyBuZWdhdGl2ZSB2ZXJzaW9uIG9mIGAubWItMWApXG4gICAgQGVhY2ggJHNpemUsICRsZW5ndGggaW4gJHNwYWNlcnMge1xuICAgICAgQGlmICRzaXplICE9IDAge1xuICAgICAgICAubSN7JGluZml4fS1uI3skc2l6ZX0geyBtYXJnaW46IC0kbGVuZ3RoICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgLm10I3skaW5maXh9LW4jeyRzaXplfSxcbiAgICAgICAgLm15I3skaW5maXh9LW4jeyRzaXplfSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLSRsZW5ndGggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubXIjeyRpbmZpeH0tbiN7JHNpemV9LFxuICAgICAgICAubXgjeyRpbmZpeH0tbiN7JHNpemV9IHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0kbGVuZ3RoICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1iI3skaW5maXh9LW4jeyRzaXplfSxcbiAgICAgICAgLm15I3skaW5maXh9LW4jeyRzaXplfSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLSRsZW5ndGggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubWwjeyRpbmZpeH0tbiN7JHNpemV9LFxuICAgICAgICAubXgjeyRpbmZpeH0tbiN7JHNpemV9IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLSRsZW5ndGggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNvbWUgc3BlY2lhbCBtYXJnaW4gdXRpbHNcbiAgICAubSN7JGluZml4fS1hdXRvIHsgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgICAubXQjeyRpbmZpeH0tYXV0byxcbiAgICAubXkjeyRpbmZpeH0tYXV0byB7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tciN7JGluZml4fS1hdXRvLFxuICAgIC5teCN7JGluZml4fS1hdXRvIHtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubWIjeyRpbmZpeH0tYXV0byxcbiAgICAubXkjeyRpbmZpeH0tYXV0byB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tbCN7JGluZml4fS1hdXRvLFxuICAgIC5teCN7JGluZml4fS1hdXRvIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "7zSe":
/*!************************************************************************!*\
  !*** ./src/app/Pages/dass21sheet/resultmodal/resultmodal.component.ts ***!
  \************************************************************************/
/*! exports provided: ResultmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultmodalComponent", function() { return ResultmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resultmodal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resultmodal.component.html */ "ezFI");
/* harmony import */ var _resultmodal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resultmodal.component.scss */ "pObp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_tracker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tracker.service */ "ddZv");






let ResultmodalComponent = class ResultmodalComponent {
    constructor(dialogRef, data, trackerService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.trackerService = trackerService;
    }
    OnClick(message, reached, nbr) {
        this.trackerService.timeStamp(message, reached, nbr);
        this.session = this.trackerService.session.value;
    }
    finishSession() {
        console.log(this.trackerService.endSession());
        this.session = this.trackerService.session.value;
    }
    ngOnInit() {
        this.session = this.trackerService.session.value;
    }
};
ResultmodalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _services_tracker_service__WEBPACK_IMPORTED_MODULE_5__["TrackerService"] }
];
ResultmodalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resultmodal',
        template: _raw_loader_resultmodal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resultmodal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResultmodalComponent);



/***/ }),

/***/ "AF54":
/*!*************************************************!*\
  !*** ./src/app/interceptor/auth.interceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-token.service */ "5LDg");




let AuthInterceptor = class AuthInterceptor {
    constructor(authToken) {
        this.authToken = authToken;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.authToken.getToken();
        console.log(token);
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_auth_token_service__WEBPACK_IMPORTED_MODULE_3__["AuthTokenService"] }
];
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    SERVER_ADDRESS: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DTpS":
/*!********************************************************************!*\
  !*** ./src/app/Pages/store/product-list/product-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-list.component.html */ "yykR");
/* harmony import */ var _product_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component.scss */ "1qK/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/store.service */ "MtBC");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/product.component */ "cTmv");
/* harmony import */ var _services_tracker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/tracker.service */ "ddZv");








let ProductListComponent = class ProductListComponent {
    constructor(storeService, trackerService, dialog) {
        this.storeService = storeService;
        this.trackerService = trackerService;
        this.dialog = dialog;
        this.searchText = '';
        this.toggleSearch = false;
    }
    viewProduct(product) {
        this.trackerService.timeStamp('clicked on' + product.name, 'clicked');
        const dialogRef = this.dialog.open(_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], {
            data: { product }
        });
    }
    ngOnInit() {
        this.storeService.getAllProducts().subscribe(data => this.products = data, error => console.log(error));
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] },
    { type: _services_tracker_service__WEBPACK_IMPORTED_MODULE_7__["TrackerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
ProductListComponent.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['searchbar',] }]
};
ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-list',
        template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductListComponent);



/***/ }),

/***/ "EmGY":
/*!************************************************************!*\
  !*** ./src/app/Pages/dass21sheet/dass21sheet.component.ts ***!
  \************************************************************/
/*! exports provided: Dass21sheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dass21sheetComponent", function() { return Dass21sheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dass21sheet_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dass21sheet.component.html */ "cLen");
/* harmony import */ var _dass21sheet_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dass21sheet.component.scss */ "T31+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/language.service */ "kyOO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _resultmodal_resultmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resultmodal/resultmodal.component */ "7zSe");
/* harmony import */ var _services_tracker_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/tracker.service */ "ddZv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");













const hostAddress = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_ADDRESS;
let Dass21sheetComponent = class Dass21sheetComponent {
    constructor(http, authService, langService, trackerService, router, dialog) {
        this.http = http;
        this.authService = authService;
        this.langService = langService;
        this.trackerService = trackerService;
        this.router = router;
        this.dialog = dialog;
        this.questionnaire = [];
        this.answers = [];
        // these indexes are used to calculate scores through their appropriate index
        this.depressionIndexes = [3, 5, 10, 13, 16, 17, 21];
        this.anxietyIndexes = [2, 4, 7, 9, 15, 19, 20];
        this.stressIndexes = [1, 6, 8, 11, 12, 14, 18];
        this.currentLanguage = 'en';
        // loads question sheet
        this.scores = {
            answers: null,
            depressionScore: null,
            anxietyScore: null,
            stressScore: null
        };
    }
    // this function affects answer to answers table
    updateAnswer(answer, index) {
        this.answers[index] = answer.value;
        console.log(this.answers);
    }
    // here we calculate scores that will be persisted in db
    calculateScore(factorTable) {
        let sum = 0;
        let index;
        for (index of factorTable) {
            sum += this.answers[index - 1]; // provided factorTables start from 1
        }
        return sum;
    }
    onSubmit() {
        this.scores.answers = this.answers;
        this.scores.depressionScore = this.calculateScore(this.depressionIndexes);
        this.scores.anxietyScore = this.calculateScore(this.anxietyIndexes);
        this.scores.stressScore = this.calculateScore(this.stressIndexes);
        this.trackerService.startSession(this.scores);
        console.log(this.scores);
        // this.router.navigate(['login']).then(r => console.log(r));
        const dialogRef = this.dialog.open(_resultmodal_resultmodal_component__WEBPACK_IMPORTED_MODULE_10__["ResultmodalComponent"], {
            data: { scores: this.scores, user: this.authService.currentUser }
        });
    }
    changeLang(lang) {
        this.langService.changeLanguage(lang);
    }
    ngOnInit() {
        this.loading = true;
        this.answers = [2, 1, 2, 0, 0, 1, 0, 2, 0, 3, 0, 2, 0, 1, 0, 2, 0, 1, 1, 3, 3];
        this.currentLanguage = this.langService.getCurrentLanguage().toLowerCase();
        this.http.get(hostAddress + '/dass/21').subscribe(response => {
            this.questionnaire = response;
            this.loading = false;
        }, error => {
            console.log(error);
        });
    }
};
Dass21sheetComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] },
    { type: _services_tracker_service__WEBPACK_IMPORTED_MODULE_11__["TrackerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
];
Dass21sheetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dass21sheet',
        template: _raw_loader_dass21sheet_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["STEPPER_GLOBAL_OPTIONS"], useValue: { showError: true }
            }],
        styles: [_dass21sheet_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Dass21sheetComponent);



/***/ }),

/***/ "LUCA":
/*!*******************************************!*\
  !*** ./src/app/Pages/store/store.page.ts ***!
  \*******************************************/
/*! exports provided: StorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePage", function() { return StorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./store.page.html */ "wChi");
/* harmony import */ var _store_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.page.scss */ "cMTT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let StorePage = class StorePage {
    constructor() { }
    ngOnInit() {
    }
};
StorePage.ctorParameters = () => [];
StorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-store',
        template: _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_store_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StorePage);



/***/ }),

/***/ "LY3J":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-navbar></app-navbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"notfound\">\n    <div class=\"notfound\">\n      <div class=\"notfound-404\">\n        <h3>Oops! Page not found</h3>\n        <h1><span>4</span><span>0</span><span>4</span></h1>\n      </div>\n      <h2>we are sorry, but the page you requested was not found</h2>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "MZ4n":
/*!****************************************!*\
  !*** ./src/app/pipes/language.pipe.ts ***!
  \****************************************/
/*! exports provided: LanguagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePipe", function() { return LanguagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/language.service */ "kyOO");



let LanguagePipe = class LanguagePipe {
    constructor(langService) {
        this.langService = langService;
    }
    transform(value, ...args) {
        return value[this.langService.getCurrentLanguage().toLowerCase()];
    }
};
LanguagePipe.ctorParameters = () => [
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] }
];
LanguagePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'language'
    })
], LanguagePipe);



/***/ }),

/***/ "MtBC":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const hostAddress = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_ADDRESS;
const api = '/store';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let StoreService = class StoreService {
    constructor(http) {
        this.http = http;
    }
    addToCart() {
    }
    getCart() {
    }
    removeFromCart() {
    }
    // sends request to server and receives all products in db.
    getAllProducts() {
        return this.http.get(hostAddress + api + '/product', httpOptions);
    }
    // sends request to server and receives specific product in db.
    getProduct(id) {
        return this.http.get(hostAddress + api + '/product/' + id, httpOptions);
    }
    // sends request to server and receives all Categories in db.
    getAllCategories() {
        return this.http.get(hostAddress + api + '/category', httpOptions);
    }
    // sends request to server and receives specific Category in db.
    getCategory(name) {
        return this.http.get(hostAddress + api + '/category/' + name, httpOptions);
    }
};
StoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
StoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StoreService);



/***/ }),

/***/ "NVxt":
/*!***************************************************!*\
  !*** ./src/app/Layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "nFM3");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "7vhd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    logout() {
        this.authService.logout();
    }
    ngOnInit() { }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "OQSd":
/*!**************************************************!*\
  !*** ./src/app/directives/has-auth.directive.ts ***!
  \**************************************************/
/*! exports provided: HasAuthDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasAuthDirective", function() { return HasAuthDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");



let HasAuthDirective = class HasAuthDirective {
    constructor(authService, templateRef, viewContainer) {
        this.authService = authService;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.authService.currentUser.subscribe(_ => {
            if (this.authService.isLogged()) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        });
    }
};
HasAuthDirective.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
HasAuthDirective.propDecorators = {
    adminRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['appHasAuth',] }]
};
HasAuthDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHasAuth]'
    })
], HasAuthDirective);



/***/ }),

/***/ "PT04":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/store/product/product.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Main layout-->\r\n<main class=\"mt-5 pt-4\">\r\n  <div class=\"container dark-grey-text mt-5\">\r\n    <!--Grid row-->\r\n    <div class=\"row wow fadeIn\">\r\n      <!--Grid column-->\r\n      <div class=\"col-md-6 mb-4\">\r\n        <img [src]=\"product.images\" class=\"img-fluid\" alt=\"\">\r\n      </div>\r\n      <!--Grid column-->\r\n      <!--Grid column-->\r\n      <div class=\"col-md-6 mb-4\">\r\n        <!--Content-->\r\n        <div class=\"p-4\">\r\n          <div class=\"mb-3\">\r\n            <a href=\"\">\r\n              <span class=\"badge purple mr-1\">{{product.category}}</span>\r\n            </a>\r\n          </div>\r\n          <p class=\"lead\">\r\n              <span class=\"mr-1\">\r\n                <del></del>\r\n              </span>\r\n            <span>{{product.price}}</span>\r\n          </p>\r\n          <p class=\"lead font-weight-bold\">Description</p>\r\n          <p>{{product.description}}</p>\r\n          <form class=\"d-flex justify-content-left\">\r\n            <!-- Default input -->\r\n            <input type=\"number\" value=\"1\" aria-label=\"Search\" class=\"form-control\" style=\"width: 100px\">\r\n            <button class=\"btn btn-primary btn-md my-0 p\" type=\"submit\">Add to cart\r\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">shopping_cart</mat-icon>\r\n            </button>\r\n          </form>\r\n        </div>\r\n        <!--Content-->\r\n      </div>\r\n      <!--Grid column-->\r\n    </div>\r\n    <!--Grid row-->\r\n    <hr>\r\n    <!--Grid row-->\r\n    <div class=\"row d-flex justify-content-center wow fadeIn\">\r\n      <!--Grid column-->\r\n      <div class=\"col-md-6 text-center\">\r\n        <h4 class=\"my-4 h4\">Additional information</h4>\r\n        <div *ngFor=\"let info of product.additionalInfo\">\r\n          <p> {{info}} </p>\r\n        </div>\r\n\r\n      </div>\r\n      <!--Grid column-->\r\n    </div>\r\n    <!--Grid row-->\r\n\r\n    </div>\r\n    <!--Grid row-->\r\n</main>\r\n<!--Main layout-->\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T31+":
/*!**************************************************************!*\
  !*** ./src/app/Pages/dass21sheet/dass21sheet.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nextline-stepper .mat-step-label.mat-step-label {\n  text-overflow: inherit;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNzMjFzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJkYXNzMjFzaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXh0bGluZS1zdGVwcGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "U4Gr":
/*!********************************************************!*\
  !*** ./src/app/Pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "LY3J");
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.scss */ "UkQr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
NotFoundComponent.ctorParameters = () => [];
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotFoundComponent);



/***/ }),

/***/ "UkQr":
/*!**********************************************************!*\
  !*** ./src/app/Pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\nion-content {\n  padding: 0;\n  margin: 0;\n}\n\n#notfound {\n  position: relative;\n  height: 100vh;\n}\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.notfound {\n  max-width: 520px;\n  width: 100%;\n  line-height: 1.4;\n  text-align: center;\n}\n\n.notfound .notfound-404 {\n  position: relative;\n  height: 240px;\n}\n\n.notfound .notfound-404 h1 {\n  font-family: \"Montserrat\", sans-serif;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 252px;\n  font-weight: 900;\n  margin: 0px;\n  color: #262626;\n  text-transform: uppercase;\n  letter-spacing: -40px;\n  margin-left: -20px;\n}\n\n.notfound .notfound-404 h1 > span {\n  text-shadow: -8px 0px 0px #fff;\n}\n\n.notfound .notfound-404 h3 {\n  font-family: \"Cabin\", sans-serif;\n  position: relative;\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #262626;\n  margin: 0px;\n  letter-spacing: 3px;\n  padding-left: 6px;\n}\n\n.notfound h2 {\n  font-family: \"Cabin\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #000;\n  margin-top: 0px;\n  margin-bottom: 25px;\n}\n\n@media only screen and (max-width: 767px) {\n  .notfound .notfound-404 {\n    height: 200px;\n  }\n\n  .notfound .notfound-404 h1 {\n    font-size: 200px;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .notfound .notfound-404 {\n    height: 162px;\n  }\n\n  .notfound .notfound-404 h1 {\n    font-size: 162px;\n    height: 150px;\n    line-height: 162px;\n  }\n\n  .notfound h2 {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxnQkFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGFBQUE7RUFDRjs7RUFDQTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VBRUY7O0VBQUE7SUFDRSxlQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jbm90Zm91bmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4jbm90Zm91bmQgLm5vdGZvdW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubm90Zm91bmQge1xyXG4gIG1heC13aWR0aDogNTIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG5cclxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBmb250LXNpemU6IDI1MnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY29sb3I6ICMyNjI2MjY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogLTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG59XHJcblxyXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMT5zcGFuIHtcclxuICB0ZXh0LXNoYWRvdzogLThweCAwcHggMHB4ICNmZmY7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgzIHtcclxuICBmb250LWZhbWlseTogJ0NhYmluJywgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzI2MjYyNjtcclxuICBtYXJnaW46IDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcblxyXG4ubm90Zm91bmQgaDIge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICAgIGhlaWdodDogMTYycHg7XHJcbiAgfVxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTYycHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2MnB4O1xyXG4gIH1cclxuICAubm90Zm91bmQgaDIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <app-navbar></app-navbar>\n  <div class=\"container elevated-container\">\n    <ion-router-outlet></ion-router-outlet>\n  </div>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptor/auth.interceptor */ "AF54");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _Pages_dass21sheet_dass21sheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/dass21sheet/dass21sheet.component */ "EmGY");
/* harmony import */ var _pipes_language_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/language.pipe */ "MZ4n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _directives_has_admin_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/has-admin.directive */ "2n0H");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _Layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Layout/navbar/navbar.component */ "NVxt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Pages_dass21sheet_resultmodal_resultmodal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Pages/dass21sheet/resultmodal/resultmodal.component */ "7zSe");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _Pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Pages/not-found/not-found.component */ "U4Gr");
/* harmony import */ var _directives_has_auth_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./directives/has-auth.directive */ "OQSd");
/* harmony import */ var _Pages_store_store_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Pages/store/store.module */ "2Fht");































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _Pages_dass21sheet_dass21sheet_component__WEBPACK_IMPORTED_MODULE_9__["Dass21sheetComponent"],
            _pipes_language_pipe__WEBPACK_IMPORTED_MODULE_10__["LanguagePipe"],
            _directives_has_admin_directive__WEBPACK_IMPORTED_MODULE_16__["HasAdminDirective"],
            _Pages_dass21sheet_resultmodal_resultmodal_component__WEBPACK_IMPORTED_MODULE_26__["ResultmodalComponent"],
            _Pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_28__["NotFoundComponent"],
            _Layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"],
            _directives_has_auth_directive__WEBPACK_IMPORTED_MODULE_29__["HasAuthDirective"]
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_27__["IonicStorageModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
            _Pages_store_store_module__WEBPACK_IMPORTED_MODULE_30__["StorePageModule"]
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["AuthInterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        exports: [
            _Layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "cLen":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/dass21sheet/dass21sheet.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-navbar></app-navbar>\n    <button mat-button color=\"warn\" [matMenuTriggerFor]=\"menu\">{{currentLanguage}}</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=\"changeLang('en')\">English</button>\n      <button mat-menu-item (click)=\"changeLang('fr')\">français</button>\n      <button mat-menu-item (click)=\"changeLang('ar')\">العربية</button>\n    </mat-menu>\n</ion-header>\n\n<ion-content>\n  <div class=\"bgcustom\">\n    <div class=\"container mat-elevation-z15\">\n      <div class=\"row app-body\">\n        <div class=\"col align-items-center\">\n          <form\n            name=\"form\"\n            (ngSubmit)=\"f.form.valid && onSubmit()\"\n            #f=\"ngForm\"\n            novalidate>\n            <div class=\"d-flex align-content-center\" *ngIf=\"loading\">\n              <mat-progress-spinner\n                color=\"primary\"\n                mode=\"indeterminate\">\n              </mat-progress-spinner>\n            </div>\n              <mat-vertical-stepper class=\"nextline-stepper\" linear>\n              <div *ngFor=\"let question of questionnaire;let questIndex=index\">\n                <mat-step errorMessage=\"Answer is required.\">\n                  <ng-template class=\"mat-step-label\" matStepLabel>\n                    {{question.labels | language}}\n                  </ng-template>\n                  <mat-form-field [ngStyle]=\"{'text-align': currentLanguage == 'ar' ? 'right' : '' }\" style=\"width: 50%;\">\n                    <mat-label>\n                      {{question.labels | language}}\n                    </mat-label>\n                    <mat-select required>\n                      <mat-option\n                        [value]=\"opt\"\n                        (click)=\"updateAnswer(opt, questIndex)\"\n                        *ngFor=\"let opt of question.possibleValues\"> {{opt.labels | language}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </mat-step>\n              </div>\n            </mat-vertical-stepper>\n            <button mat-raised-button\n                    *ngIf=\"!loading && answers.length === 21\"\n                    class=\"col\"\n                    color=\"primary\"\n                    type=\"submit\"> Next </button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "cMTT":
/*!*********************************************!*\
  !*** ./src/app/Pages/store/store.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "cTmv":
/*!**********************************************************!*\
  !*** ./src/app/Pages/store/product/product.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.component.html */ "PT04");
/* harmony import */ var _product_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component.scss */ "ryTK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/store.service */ "MtBC");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");







let ProductComponent = class ProductComponent {
    constructor(storeService, activatedRoute, dialogRef, data) {
        this.storeService = storeService;
        this.activatedRoute = activatedRoute;
        this.dialogRef = dialogRef;
        this.data = data;
        this.productId = null;
        this.dataP = this.data;
    }
    ngOnInit() {
        this.product = this.dataP.product;
        // this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
        // this.product = this.storeService.getProduct(this.productId);
    }
};
ProductComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
];
ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product',
        template: _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductComponent);



/***/ }),

/***/ "ddZv":
/*!*********************************************!*\
  !*** ./src/app/services/tracker.service.ts ***!
  \*********************************************/
/*! exports provided: TrackerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerService", function() { return TrackerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "AytR");








const hostAddress = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_ADDRESS;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let TrackerService = class TrackerService {
    constructor(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.session = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        router.events.subscribe(val => {
            if (location.pathname === '') {
                this.currentLocation = this.router.url;
            }
            else {
                this.currentLocation = 'Home';
            }
        });
    }
    startSession(dassScores) {
        this.dassScores = dassScores;
        this.session.next({
            startDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'fullDate', 'en'),
            startTime: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'mediumTime', 'en'),
            activity: [],
            endTime: ''
        });
    }
    timeStamp(message, reached, productID) {
        if (reached) {
            this.session.subscribe(data => data.activity.push({
                location: this.currentLocation,
                message,
                reached,
                time: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'mediumTime', 'en')
            }), error => console.log(error));
        }
        else if (productID) {
            this.session.subscribe(data => {
                data.activity.push({
                    location: this.currentLocation,
                    message,
                    reached,
                    productID,
                    time: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'mediumTime', 'en')
                });
                console.log(this.session);
            }, error => console.log(error));
        }
    }
    endSession() {
        this.session.subscribe(data => data.endTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'short', 'en'));
        this.sessionDetails = this.session.value;
        // this.userID = '6092c7a13f88191cdcfcd2ea';
        return this.http.post(hostAddress + '/session' + '/save', {
            userID: this.authService.currentUser.value.id,
            DASS21_SCORES: this.dassScores,
            sessionDetails: this.sessionDetails
        }, httpOptions);
    }
    // sends request to server and receives all sessions in db.
    getAllSessions() {
        return this.http.get(hostAddress + '/session' + '/retrieve', httpOptions);
    }
    // sends request to server and receives specific session in db.
    getSession(id) {
        return this.http.get(hostAddress + '/session' + '/retrieve/' + id, httpOptions);
    }
};
TrackerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
TrackerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TrackerService);



/***/ }),

/***/ "ezFI":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/dass21sheet/resultmodal/resultmodal.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1 mat-dialog-title>Hi {{data.user.username | json}}</h1>\n  <div mat-dialog-content>\n    <pre>{{data.user.id| json}}</pre>\n    <p>Your dass 21 scores are :</p>\n    <pre>{{data.scores | json}}</pre>\n    <pre>{{[(session)] | json}}</pre>\n    <button mat-button (click)=\"OnClick('clicked on Button','clicked','ProdID')\">Click</button>\n    <button mat-button (click)=\"OnClick('clicked on 2nd Button','discount','productid')\">Click2</button>\n    <button mat-button (click)=\"finishSession()\">End Session</button>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"this.dialogRef.close()\">No Thanks</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kyOO":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let LanguageService = class LanguageService {
    constructor() {
    }
    getCurrentLanguage() {
        const currentLanguage = localStorage.getItem('language');
        if (currentLanguage) {
            return currentLanguage;
        }
        else {
            return 'en';
        }
    }
    changeLanguage(lang) {
        localStorage.setItem('language', lang);
        this.currentLanguage = lang;
        location.reload();
    }
};
LanguageService.ctorParameters = () => [];
LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LanguageService);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-token.service */ "5LDg");







const hostAddress = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_ADDRESS;
const api = '/auth';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http, router, authToken) {
        this.http = http;
        this.router = router;
        this.authToken = authToken;
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    // sends login request to server and receives access token if correct.
    login(username, password) {
        return this.http.post(hostAddress + api + '/login', {
            username,
            password
        }, httpOptions);
    }
    // sends registration request
    register(username, email, password) {
        return this.http.post(hostAddress + api + '/register', {
            username,
            email,
            password
        }, httpOptions);
    }
    // logs user out and deletes token
    logout() {
        return this.http.post(hostAddress + api + '/logout', httpOptions).subscribe(data => {
            this.authToken.destroySession();
            this.router.navigate(['login']).then(err => console.log(err));
        }, err => {
            console.log(err);
        });
    }
    saveUser(user) {
        this.currentUser.next({
            id: user._id,
            username: user.username,
            isLoggedIn: this.authToken.getStatus()
        });
    }
    isAdmin() {
        return this.authToken.getPayload().isAdmin;
    }
    isLogged() {
        return this.authToken.getStatus();
    }
    canActivate(route) {
        console.log(route);
        if (!this.authToken.getStatus()) {
            this.router.navigate(['login']).then(r => console.log(r));
        }
        return this.authToken.getStatus();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _auth_token_service__WEBPACK_IMPORTED_MODULE_6__["AuthTokenService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "nFM3":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Layout/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg ftco_navbar ftco-navbar-light\" id=\"ftco-navbar\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"../../../index.html\">Neuf</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"fa fa-bars\"></span> Menu\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\n      <ul class=\"navbar-nav ml-auto mr-md-3\">\n        <li class=\"nav-item active\"><a routerLink=\"home\" class=\"nav-link\">Home</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" >Shop</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\">About</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\">Contact</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" *appHasAdmin>Admin page</a></li>\n        <li class=\"dropdown nav-item d-md-flex align-items-center\">\n          <a href=\"#\" class=\"dropdown-toggle nav-link d-flex align-items-center justify-content-center p-0\" id=\"dropdownmenu\"\n             data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"user profile\">face</mat-icon>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownmenu\">\n            <a routerLink=\"/profile\" class=\"dropdown-item\">Profile</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n          </div>\n        </li>\n        <li class=\"dropdown nav-item d-md-flex align-items-center\">\n          <a href=\"#\" class=\" nav-link d-flex align-items-center justify-content-center p-0\"\n             data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"shoppingcart\">shopping_cart</mat-icon>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "pObp":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/dass21sheet/resultmodal/resultmodal.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHRtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ryTK":
/*!************************************************************!*\
  !*** ./src/app/Pages/store/product/product.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Pages_dass21sheet_dass21sheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/dass21sheet/dass21sheet.component */ "EmGY");
/* harmony import */ var _Pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/not-found/not-found.component */ "U4Gr");





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-home-home-module */ "Pages-home-home-module").then(__webpack_require__.bind(null, /*! ./Pages/home/home.module */ "zuTJ")).then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-auth-login-login-module */ "Pages-auth-login-login-module").then(__webpack_require__.bind(null, /*! ./Pages/auth/login/login.module */ "yCU2")).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-auth-register-register-module */ "Pages-auth-register-register-module").then(__webpack_require__.bind(null, /*! ./Pages/auth/register/register.module */ "cysB")).then(m => m.RegisterPageModule)
    },
    {
        path: 'dass21',
        component: _Pages_dass21sheet_dass21sheet_component__WEBPACK_IMPORTED_MODULE_3__["Dass21sheetComponent"],
    },
    {
        path: 'store',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Pages/store/store.module */ "2Fht")).then(m => m.StorePageModule),
    },
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-admin-admin-module */ "Pages-admin-admin-module").then(__webpack_require__.bind(null, /*! ./Pages/admin/admin.module */ "jiS0")).then(m => m.AdminPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-profile-profile-module */ "Pages-profile-profile-module").then(__webpack_require__.bind(null, /*! ./Pages/profile/profile.module */ "wjNX")).then(m => m.ProfilePageModule)
    },
    {
        path: '**',
        component: _Pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wChi":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/store/store.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-navbar></app-navbar>\n</ion-header>\n\n<ion-content>\n  <!--====== Product Style 1 Part Start ======-->\n  <section class=\"product-wrapper pt-100 pb-70\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"mb-50\">\n            <h1 class=\"heading-1 font-weight-700\">Featured Items</h1>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"product-style-1 mt-30\">\n            <div class=\"product-image\">\n              <span class=\"icon-text text-style-1\">NEW</span>\n              <div class=\"product-active\">\n                <div *ngFor=\"let img of images\" class=\"product-item\">\n                  <img src=\"{{img}}\" alt=\"product image\">\n                </div>\n              </div>\n              <a class=\"add-wishlist\" href=\"javascript:void(0)\">\n                <mat-icon>heart</mat-icon>\n              </a>\n            </div>\n            <div class=\"product-content text-center\">\n              <h4 class=\"title\"><a href=\"product-details-page.html\">Metro 38 Date</a></h4>\n              <p>Reference 1102</p>\n              <a href=\"javascript:void(0)\" class=\"main-btn secondary-1-btn\">\n                <img src=\"assets/images/icon-svg/cart-7.svg\" alt=\"\">\n                $ 399\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!--====== Product Style 1 Part Ends ======-->\n</ion-content>\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yykR":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/store/product-list/product-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-navbar></app-navbar>\n</ion-header>\n\n<ion-content>\n  <!--Main layout-->\n  <main class=\"bgcustom mgcustom ion-padding-top\">\n    <div class=\"container ion-margin-top\">\n      <mat-toolbar class=\"ion-margin-top d-flex justify-content-between mat-elevation-z8\">\n        <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n          <mat-icon>ads_click</mat-icon>\n          <span>Browse products</span>\n        </button>\n        <button mat-button [matMenuTriggerFor]=\"menu\">Category</button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item>Item 1</button>\n        </mat-menu>\n        <span class=\"spacer\"></span>\n\n        <input class=\"search-control\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchText\" #searchbar>\n      </mat-toolbar>\n\n      <section class=\"text-center mb-4 ion-margin-top\">\n        <!--Grid row-->\n        <div class=\"row wow fadeIn\">\n          <!--Grid column-->\n          <div class=\"col-lg-3 col-md-6 mb-4\"\n                *ngFor=\"let product of products\">\n            <!--Card-->\n            <div class=\"card mat-elevation-z5\">\n              <!--Card image-->\n              <div class=\"view overlay\">\n                <img [src]=\"product.images\" class=\"card-img-top\" alt=\"{{product.name}} product image\">\n                <a>\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <!--Card image-->\n              <!--Card content-->\n              <div class=\"card-body text-center\">\n                <!--Category & Title-->\n                  <h5 class=\"gray-text\">{{product.category}}</h5>\n                <h5>\n                  <strong> {{product.name}} </strong>\n                </h5>\n                <h4 class=\"font-weight-bold blue-text\">\n                  <strong>{{product.price}}</strong>\n                </h4>\n                <!--Category & Title-->\n                <button mat-raised-button class=\"stretched-link\"\n                        (click)=\"viewProduct(product)\"\n                        [routerLink]=\"['/products', product._id]\"\n                        routerDirection=\"forward\">View Product</button>\n              </div>\n              <!--Card content-->\n            </div>\n            <!--Card-->\n          </div>\n          <!--Grid column-->\n        </div>\n        <!--Grid row-->\n      </section>\n    </div>\n  </main>\n  <!--Main layout-->\n</ion-content>\n");

/***/ }),

/***/ "zIDB":
/*!*****************************************************!*\
  !*** ./src/app/Pages/store/store-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageRoutingModule", function() { return StorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.page */ "LUCA");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "DTpS");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "cTmv");






const routes = [
    {
        path: '',
        component: _store_page__WEBPACK_IMPORTED_MODULE_3__["StorePage"]
    },
    {
        path: 'products',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
        children: [
            {
                path: ':productId',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"]
            }
        ]
    }
];
let StorePageRoutingModule = class StorePageRoutingModule {
};
StorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StorePageRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map