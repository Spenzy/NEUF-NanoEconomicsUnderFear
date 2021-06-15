(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-auth-register-register-module"],{

/***/ "Ys1o":
/*!******************************************************!*\
  !*** ./src/app/Pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "y2yv");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "nADP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let RegisterPage = class RegisterPage {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.userInfo = {
            username: null,
            email: null,
            password: null
        };
        this.isSuccessful = false;
    }
    ngOnInit() {
    }
    onSubmit() {
        const { username, email, password } = this.userInfo;
        this.authService.register(username, email, password).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.router.navigate(['login']).then(err => console.log(err));
        }, err => {
            this.errMsg = err.error.message;
            console.log(this.errMsg);
            this.isSuccessful = false;
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "cysB":
/*!********************************************************!*\
  !*** ./src/app/Pages/auth/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "vKn0");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "Ys1o");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "nADP":
/*!********************************************************!*\
  !*** ./src/app/Pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "vKn0":
/*!****************************************************************!*\
  !*** ./src/app/Pages/auth/register/register-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "Ys1o");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "y2yv":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth/register/register.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row app-body h-75\">\n    <main class=\"col main d-flex align-items-center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 mx-auto\">\n            <div class=\"card-group mat-elevation-z15\">\n              <div class=\"card p-4\">\n                <div class=\"card-body\">\n                  <h2 class=\"mb-4\">Sign Up</h2>\n                  <form\n                    *ngIf=\"!isSuccessful\"\n                    name=\"form\"\n                    (ngSubmit)=\"f.form.valid && onSubmit()\"\n                    #f=\"ngForm\"\n                    novalidate>\n                    <mat-form-field class=\"form-group\">\n                      <mat-label>Username</mat-label>\n                      <input\n                        matInput\n                        type=\"text\"\n                        id=\"username\"\n                        name=\"username\"\n                        [(ngModel)]=\"userInfo.username\"\n                        required\n                        minlength=\"3\"\n                        maxlength=\"20\"\n                        #username=\"ngModel\"\n                      />\n                      <mat-error *ngIf=\"username.errors && f.submitted\">\n                        <mat-error *ngIf=\"username.errors.required\">Username is required</mat-error>\n                        <mat-error *ngIf=\"username.errors.minlength\">\n                          Username must be at least 3 characters\n                        </mat-error>\n                        <mat-error *ngIf=\"username.errors.maxlength\">\n                          Username must be at most 20 characters\n                        </mat-error>\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\">\n                      <mat-label for=\"email\">Email</mat-label>\n                      <input\n                        matInput\n                        type=\"email\"\n                        id=\"email\"\n                        name=\"email\"\n                        [(ngModel)]=\"userInfo.email\"\n                        required\n                        email\n                        #email=\"ngModel\"\n                      />\n                      <mat-error *ngIf=\"email.errors && f.submitted\">\n                        <mat-error *ngIf=\"email.errors.required\">Email is required</mat-error>\n                        <mat-error *ngIf=\"email.errors.email\">\n                          Email must be a valid email address\n                        </mat-error>\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\">\n                      <mat-label for=\"password\">Password</mat-label>\n                      <input\n                        matInput\n                        type=\"password\"\n                        id=\"password\"\n                        name=\"password\"\n                        [(ngModel)]=\"userInfo.password\"\n                        required\n                        minlength=\"6\"\n                        #password=\"ngModel\"/>\n                      <mat-error *ngIf=\"password.errors && f.submitted\">\n                        <mat-error *ngIf=\"password.errors.required\">Password is required</mat-error>\n                        <mat-error *ngIf=\"password.errors.minlength\">\n                          Password must be at least 6 characters\n                        </mat-error>\n                      </mat-error>\n                    </mat-form-field>\n                    <div class=\"form-group\">\n                      <button\n                        mat-raised-button\n                        class=\"btn btn-block\"\n                        color=\"accent\">Sign Up</button>\n                    </div>\n                    <div class=\"alert alert-warning\" *ngIf=\"f.submitted && !isSuccessful\">\n                      Signup failed!<br />{{ errMsg }}\n                    </div>\n                  </form>\n                  <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n                    Your registration is successful!\n                  </div>\n                </div>\n              </div>\n              <div class=\"card p-4\">\n                <div class=\"card-body\">\n                  <h2>Welcome to Sign Up</h2>\n                  <p>Already have an account?</p>\n                  <button\n                    mat-raised-button\n                    class=\"btn nav-link\"\n                    color=\"primary\"\n                    routerLink=\"/login\">Sign In</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=Pages-auth-register-register-module.js.map