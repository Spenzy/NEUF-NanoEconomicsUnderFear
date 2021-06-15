(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-auth-login-login-module"],{

/***/ "1joR":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header xmlns=\"http://www.w3.org/1999/html\">\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"bgcustom\">\n    <div class=\"row app-body h-75\">\n      <main class=\"col main d-flex align-items-center\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-8 mx-auto\">\n              <div class=\"card-group mat-elevation-z15\">\n                <div class=\"card p-4\">\n                  <div class=\"card-body\">\n                    <h2 class=\"mb-4\">Sign In</h2>\n                    <form\n                      *ngIf=\"!isLoggedIn\"\n                      name=\"form\"\n                      (ngSubmit)=\"f.form.valid && onSubmit()\"\n                      #f=\"ngForm\"\n                      novalidate>\n                      <mat-form-field class=\"form-group mb-3\">\n                        <mat-label>Username</mat-label>\n                        <input\n                          matInput\n                          placeholder=\"eg: BingeBuyer\"\n                          type=\"text\"\n                          id=\"username\"\n                          name=\"username\"\n                          [(ngModel)]=\"form.username\"\n                          required\n                          #username=\"ngModel\"/>\n                        <mat-error *ngIf=\"username.errors && f.submitted\">\n                          Username is required!\n                        </mat-error>\n                      </mat-form-field>\n                      <mat-form-field class=\"form-group\">\n                        <mat-label >Password</mat-label>\n                        <input\n                          matInput\n                          [type]=\"hide ? 'password' : 'text'\"\n                          id=\"password\"\n                          name=\"password\"\n                          [(ngModel)]=\"form.password\"\n                          required\n                          minlength=\"6\"\n                          #password=\"ngModel\">\n                          <a mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                          </a>\n                        <mat-error *ngIf=\"password.errors && f.submitted\">\n                          <mat-error *ngIf=\"password.errors.required\">\n                            Password is required\n                          </mat-error>\n                          <mat-error *ngIf=\"password.errors.minlength\">\n                            Password must be at least 6 characters\n                          </mat-error>\n                        </mat-error>\n                      </mat-form-field>\n                      <div class=\"form-group\">\n                        <button mat-raised-button\n                                type=\"submit\"\n                                color=\"primary\"\n                                class=\"form-control px-3\"> Sign In\n                        </button>\n                      </div>\n                      <div class=\"form-group d-md-flex\">\n                        <div class=\"w-50 text-left\">\n                          <label class=\"checkbox-wrap checkbox-primary mb-0\">Remember Me\n                            <input type=\"checkbox\" checked>\n                            <span class=\"checkmark\"></span>\n                          </label>\n                        </div>\n                        <div class=\"w-50 text-md-right\">\n                          <a href=\"#\">Forgot Password</a>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div\n                          class=\"alert alert-danger\"\n                          role=\"alert\"\n                          *ngIf=\"f.submitted && !isLoggedIn\">Login failed: {{ errMsg }}\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n                <div class=\"card p-4\">\n                  <div class=\"card-body\">\n                    <h2>Welcome to Sign In</h2>\n                    <p>Don't have an account?</p>\n                    <button\n                      mat-raised-button\n                      class=\"btn nav-link\"\n                      color=\"accent\"\n                      routerLink=\"/register\">Sign Up</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </main>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "pUhP":
/*!**************************************************!*\
  !*** ./src/app/Pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "t8G+":
/*!************************************************!*\
  !*** ./src/app/Pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "1joR");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "pUhP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _services_auth_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth-token.service */ "5LDg");





// service imports


let LoginPage = class LoginPage {
    constructor(router, authService, authToken) {
        this.router = router;
        this.authService = authService;
        this.authToken = authToken;
        this.form = {
            username: null,
            password: null
        };
        this.isLoggedIn = false;
        this.errMsg = '';
        this.roles = [];
        this.hide = true;
    }
    ngOnInit() {
        this.authToken.loadSession().then(err => console.log(err));
        this.isLoggedIn = this.authToken.getStatus();
        if (this.isLoggedIn) {
            this.router.navigate(['dass21']).then(err => console.log(err));
        }
    }
    onSubmit() {
        const { username, password } = this.form;
        this.authService.login(username, password).subscribe(data => {
            this.authToken.saveSession(data.token).then(err => console.log(err));
            this.authService.saveUser(data);
            this.router.navigate(['dass21']).then(err => console.log(err));
        }, err => {
            this.errMsg = err.status + ' : ' + err.error.msg;
            console.log(err);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_auth_token_service__WEBPACK_IMPORTED_MODULE_6__["AuthTokenService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "y9El":
/*!**********************************************************!*\
  !*** ./src/app/Pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "t8G+");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "yCU2":
/*!**************************************************!*\
  !*** ./src/app/Pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "y9El");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "t8G+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-auth-login-login-module.js.map