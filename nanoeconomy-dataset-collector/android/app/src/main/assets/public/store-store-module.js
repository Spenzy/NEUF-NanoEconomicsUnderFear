(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-store-module"],{

/***/ "766w":
/*!***************************************!*\
  !*** ./src/app/store/store.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "EfD/":
/*!***********************************************!*\
  !*** ./src/app/store/store-routing.module.ts ***!
  \***********************************************/
/*! exports provided: StorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageRoutingModule", function() { return StorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.page */ "kVJc");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "NOJ4");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "V9QS");






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

/***/ "H6yB":
/*!****************************************************************!*\
  !*** ./src/app/store/product-list/product-list.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "I7et":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store/product-list/product-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-navbar></app-navbar>\n</ion-header>\n\n<ion-content>\n  <!--Main layout-->\n  <main>\n    <div class=\"container\">\n      <section class=\"text-center mb-4\">\n        <!--Grid row-->\n        <div class=\"row wow fadeIn\">\n          <!--Grid column-->\n          <div class=\"col-lg-3 col-md-6 mb-4\"\n                *ngFor=\"let product of products\">\n            <!--Card-->\n            <div class=\"card\">\n              <!--Card image-->\n              <div class=\"view overlay\">\n                <img [src]=\"product.images\" class=\"card-img-top\" alt=\"{{product.name}} product image\">\n                <a>\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <!--Card image-->\n              <!--Card content-->\n              <div class=\"card-body text-center\">\n                <!--Category & Title-->\n                  <h5 class=\"gray-text\">{{product.category}}</h5>\n                <h5>\n                  <strong> {{product.name}} </strong>\n                </h5>\n                <h4 class=\"font-weight-bold blue-text\">\n                  <strong>{{product.price}}</strong>\n                </h4>\n                <!--Category & Title-->\n                <button mat-raised-button class=\"stretched-link\"\n                        (click)=\"viewProduct(product)\"\n                        [routerLink]=\"['/products', product._id]\"\n                        routerDirection=\"forward\">View Product</button>\n              </div>\n              <!--Card content-->\n            </div>\n            <!--Card-->\n          </div>\n          <!--Grid column-->\n        </div>\n        <!--Grid row-->\n      </section>\n    </div>\n  </main>\n  <!--Main layout-->\n <pre>{{products | json }}</pre>\n</ion-content>\n");

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

/***/ "NFwV":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
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
/* harmony import */ var _store_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store-routing.module */ "EfD/");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.page */ "kVJc");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list/product-list.component */ "NOJ4");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "V9QS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











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
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]
        ],
        declarations: [_store_page__WEBPACK_IMPORTED_MODULE_6__["StorePage"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"]]
    })
], StorePageModule);



/***/ }),

/***/ "NOJ4":
/*!**************************************************************!*\
  !*** ./src/app/store/product-list/product-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-list.component.html */ "I7et");
/* harmony import */ var _product_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component.scss */ "H6yB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/store.service */ "MtBC");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/product.component */ "V9QS");
/* harmony import */ var _services_tracker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tracker.service */ "ddZv");








let ProductListComponent = class ProductListComponent {
    constructor(storeService, trackerService, dialog) {
        this.storeService = storeService;
        this.trackerService = trackerService;
        this.dialog = dialog;
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
ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-list',
        template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductListComponent);



/***/ }),

/***/ "V9QS":
/*!****************************************************!*\
  !*** ./src/app/store/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.component.html */ "eaS7");
/* harmony import */ var _product_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component.scss */ "b18r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/store.service */ "MtBC");
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

/***/ "b18r":
/*!******************************************************!*\
  !*** ./src/app/store/product/product.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "cPAN":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-navbar></app-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "eaS7":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store/product/product.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Main layout-->\r\n<main class=\"mt-5 pt-4\">\r\n  <div class=\"container dark-grey-text mt-5\">\r\n    <!--Grid row-->\r\n    <div class=\"row wow fadeIn\">\r\n      <!--Grid column-->\r\n      <div class=\"col-md-6 mb-4\">\r\n        <img [src]=\"product.images\" class=\"img-fluid\" alt=\"\">\r\n      </div>\r\n      <!--Grid column-->\r\n      <!--Grid column-->\r\n      <div class=\"col-md-6 mb-4\">\r\n        <!--Content-->\r\n        <div class=\"p-4\">\r\n          <div class=\"mb-3\">\r\n            <a href=\"\">\r\n              <span class=\"badge purple mr-1\">{{product.category}}</span>\r\n            </a>\r\n          </div>\r\n          <p class=\"lead\">\r\n              <span class=\"mr-1\">\r\n                <del></del>\r\n              </span>\r\n            <span>{{product.price}}</span>\r\n          </p>\r\n          <p class=\"lead font-weight-bold\">Description</p>\r\n          <p>{{product.description}}</p>\r\n          <form class=\"d-flex justify-content-left\">\r\n            <!-- Default input -->\r\n            <input type=\"number\" value=\"1\" aria-label=\"Search\" class=\"form-control\" style=\"width: 100px\">\r\n            <button class=\"btn btn-primary btn-md my-0 p\" type=\"submit\">Add to cart\r\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">shopping_cart</mat-icon>\r\n            </button>\r\n          </form>\r\n        </div>\r\n        <!--Content-->\r\n      </div>\r\n      <!--Grid column-->\r\n    </div>\r\n    <!--Grid row-->\r\n    <hr>\r\n    <!--Grid row-->\r\n    <div class=\"row d-flex justify-content-center wow fadeIn\">\r\n      <!--Grid column-->\r\n      <div class=\"col-md-6 text-center\">\r\n        <h4 class=\"my-4 h4\">Additional information</h4>\r\n        <div *ngFor=\"let info of product.additionalInfo\">\r\n          <p> {{info}} </p>\r\n        </div>\r\n\r\n      </div>\r\n      <!--Grid column-->\r\n    </div>\r\n    <!--Grid row-->\r\n\r\n    </div>\r\n    <!--Grid row-->\r\n</main>\r\n<!--Main layout-->\r\n");

/***/ }),

/***/ "kVJc":
/*!*************************************!*\
  !*** ./src/app/store/store.page.ts ***!
  \*************************************/
/*! exports provided: StorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePage", function() { return StorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./store.page.html */ "cPAN");
/* harmony import */ var _store_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.page.scss */ "766w");
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



/***/ })

}]);
//# sourceMappingURL=store-store-module.js.map