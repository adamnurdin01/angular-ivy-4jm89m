(self["webpackChunktestone"] = self["webpackChunktestone"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services */ 1866);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);





class AppComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.data = [];
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.MainService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "wrapper"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nguniversal/common */ 112);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services */ 1866);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components */ 9771);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages */ 7566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_services__WEBPACK_IMPORTED_MODULE_3__.MainService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _nguniversal_common__WEBPACK_IMPORTED_MODULE_0__.TransferHttpCacheModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _components__WEBPACK_IMPORTED_MODULE_4__.HeaderModule,
            _components__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            _pages__WEBPACK_IMPORTED_MODULE_5__.HomeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _nguniversal_common__WEBPACK_IMPORTED_MODULE_0__.TransferHttpCacheModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _components__WEBPACK_IMPORTED_MODULE_4__.HeaderModule,
        _components__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
        _pages__WEBPACK_IMPORTED_MODULE_5__.HomeModule] }); })();


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 42, vars: 0, consts: [[1, "wrap-footer"], [1, "widget-footer"], [1, "share"], ["href", "javascript:;"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-facebook-f"], [1, "menu-footer"], [1, "widget-footer", "mb-0"], [1, "mb-1"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "For Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Suggestions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Help & FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A9Copyright 2013 companyname inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\");\n\n\n\n\n.animate[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n}\n\n.wrap-footer[_ngcontent-%COMP%] {\n  border-top: solid 1px #F3E3CF;\n  padding: 20px 0 35px 0;\n}\n@media (max-width: 920px) {\n  .wrap-footer[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.wrap-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n}\n.wrap-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n}\n.wrap-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  background-color: #F3E3CF;\n  color: #953E46;\n  margin-right: 10px;\n  text-align: center;\n}\n.wrap-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ebd2b4;\n}\n.wrap-footer[_ngcontent-%COMP%]   .widget-footer[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.wrap-footer[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0 0 -5px 0;\n}\n@media (max-width: 767px) {\n  .wrap-footer[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n.wrap-footer[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  position: relative;\n}\n.wrap-footer[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"/\";\n  position: absolute;\n  right: -2px;\n  top: 0;\n}\n.wrap-footer[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 15px;\n  color: #F3E3CF;\n  text-decoration: none;\n}\n.wrap-footer[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #ebd2b4;\n}\n.wrap-footer[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.wrap-footer[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlLnNjc3MiLCJmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQTZDUSw0RUFBQTtBQTVDUjs7NkJBQUE7QUFjQTs7NkJBQUE7QUFRQTs7NkJBQUE7QUFZQTs7NkJBQUE7QUFHQTtFQUNDLGdDQUFBO0FDeEJEO0FEMkJBOzs2QkFBQTtBQ3hDQTtFQUNJLDZCQUFBO0VBQ0Esc0JBQUE7QUFtQko7QUFqQkk7RUFKSjtJQUtRLGtCQUFBO0VBb0JOO0FBQ0Y7QUFsQkk7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBb0JSO0FBbEJRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFvQlo7QUFsQlk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCRGxCQTtFQ21CQSxjRGZFO0VDZ0JGLGtCQUFBO0VBQ0Esa0JBQUE7QUFvQmhCO0FBbEJnQjtFQUNJLHlCRHZCSDtBQzJDakI7QUFkSTtFQUNJLG1CQUFBO0FBZ0JSO0FBYkk7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQWVSO0FBYlE7RUFMSjtJQU1RLGdCQUFBO0VBZ0JWO0FBQ0Y7QUFkUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFnQlo7QUFkWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FBZ0JoQjtBQWJZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjRDFEQTtFQzJEQSxxQkFBQTtBQWVoQjtBQWJnQjtFQUNJLDBCQUFBO0VBQ0EsY0Q5REg7QUM2RWpCO0FBVmdCO0VBQ0ksZUFBQTtBQVlwQjtBQVBnQjtFQUNJLGFBQUE7QUFTcEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKlxuQ29sb3Jcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuJGNvbG9yLXRpdGxlOiAjZmZmNWU4O1xuJGNvbG9yLWNvbnRlbnQ6I0YzRTNDRjtcbiRjb2xvci1wcmltYXJ5OiAjRjNFM0NGO1xuJGNvbG9yLXByaW1hcnkyOiAjZWJkMmI0O1xuJGJvZHktYmc6ICNmNWY3Zjg7XG4kY29sb3ItZGFuZ2VyOiAjZTc0YzNjO1xuJGNvbG9yLXNlY29uZGFyeTogIzk1M0U0NjtcbiRjb2xvci13YXJuaW5nOiAjZjFjNDBmO1xuJGNvbG9yLXN1Y2Nlc3M6ICMyZWNjNzE7XG4kY29sb3ItaW5mbzogIzM0OThkYjtcblxuLypcbkJyZWFrIFJlc3BvbnNpdmVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuJG1vYmlsZS1zbS1zY3JlZW46IDQ4MHB4O1xuJG1vYmlsZS1zY3JlZW46IDc2N3B4O1xuJGlwYWQtc20tc2NyZWVuOiA4MTJweDtcbiRpcGFkLXNjcmVlbjogOTIwcHg7XG5cbi8qXG5Cb290c3RyYXAgQ3VzdG9tXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiR0aGVtZS1jb2xvcnM6IChcbiAgICBcInByaW1hcnlcIjogJGNvbG9yLXByaW1hcnksXG4gICAgXCJkYW5nZXJcIjogJGNvbG9yLWRhbmdlcixcbiAgICBcInNlY29uZGFyeVwiOiAkY29sb3Itc2Vjb25kYXJ5LFxuICAgIFwid2FybmluZ1wiOiAkY29sb3Itd2FybmluZyxcbiAgICBcInN1Y2Nlc3NcIjogJGNvbG9yLXN1Y2Nlc3MsXG4gICAgXCJpbmZvXCI6ICRjb2xvci1pbmZvXG4pO1xuXG4vKlxuR2VuZXJhbCBFeHRlbmRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmFuaW1hdGUge1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLypcbkZvbnQgRmFtaWx5XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAsNzAwJyk7XG4kZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyIsIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlJztcblxuLndyYXAtZm9vdGVye1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkY29sb3ItcHJpbWFyeTtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMzVweCAwO1xuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkaXBhZC1zY3JlZW4pIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zaGFyZXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC53aWRnZXQtZm9vdGVye1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIH1cblxuICAgIC5tZW51LWZvb3RlcntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDAgMCAtNXB4IDA7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtc2NyZWVuKSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAmOjphZnRlcntcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIi9cIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0ycHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 8593:
/*!****************************************************!*\
  !*** ./src/app/components/footer/footer.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 4662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent] }); })();


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 58, vars: 0, consts: [[1, "wrap-header"], [1, "content-header"], [1, "brand", "flex-fill"], ["href", "javascript:;"], ["src", "./assets/images/logo.png", "alt", ""], [1, "search"], [1, "input-group"], ["type", "text", "placeholder", "Find...", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "fas", "fa-search"], [1, "upload"], [1, "btn", "btn-primary"], [1, "fas", "fa-arrow-up", "me-2"], [1, "user"], [1, "d-flex"], [1, "pe-2"], ["src", "./assets/images/user.png", "alt", ""], [1, "position-relative"], [1, "badge", "rounded-pill", "bg-primary"], [1, "mb-0"], [1, "contant-header-responsive"], [1, "search-responsive"], [1, "upload-responsive"], [1, "wrap-menu"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 43 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Waseem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Arshad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nav", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Communities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\");\n\n\n\n\n.animate[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n}\n\n\n.wrap-header[_ngcontent-%COMP%] {\n  display: block;\n  padding: 38px 0 48px;\n}\n.wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n@media (max-width: 920px) {\n  .wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    align-items: center;\n  }\n}\n.wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 10px 0 0;\n}\n.wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 250px;\n}\n@media (max-width: 767px) {\n  .wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n}\n.wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 10px;\n}\n@media (max-width: 920px) {\n  .wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 500px;\n}\n@media (max-width: 1440px) {\n  .wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n@media (max-width: 1024px) {\n  .wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 10px;\n}\n@media (max-width: 767px) {\n  .wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 27px 0 10px;\n}\n.wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n}\n.wrap-header[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -27px;\n  color: #953E46;\n  width: 24px;\n  height: 24px;\n  padding: 7px 0 0 0;\n  text-align: center;\n}\n.wrap-header[_ngcontent-%COMP%]   .contant-header-responsive[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-top: 30px;\n  max-width: 100%;\n  display: none;\n}\n@media (max-width: 920px) {\n  .wrap-header[_ngcontent-%COMP%]   .contant-header-responsive[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 767px) {\n  .wrap-header[_ngcontent-%COMP%]   .contant-header-responsive[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.wrap-header[_ngcontent-%COMP%]   .contant-header-responsive[_ngcontent-%COMP%]   .search-responsive[_ngcontent-%COMP%] {\n  display: none;\n  padding: 0;\n}\n@media (max-width: 920px) {\n  .wrap-header[_ngcontent-%COMP%]   .contant-header-responsive[_ngcontent-%COMP%]   .search-responsive[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .wrap-header[_ngcontent-%COMP%]   .contant-header-responsive[_ngcontent-%COMP%]   .search-responsive[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    width: auto;\n  }\n}\n@media (max-width: 480px) {\n  .wrap-header[_ngcontent-%COMP%]   .contant-header-responsive[_ngcontent-%COMP%]   .search-responsive[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n.wrap-header[_ngcontent-%COMP%]   .contant-header-responsive[_ngcontent-%COMP%]   .upload-responsive[_ngcontent-%COMP%] {\n  display: none;\n  padding-left: 10px;\n}\n@media (max-width: 767px) {\n  .wrap-header[_ngcontent-%COMP%]   .contant-header-responsive[_ngcontent-%COMP%]   .upload-responsive[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.wrap-menu[_ngcontent-%COMP%] {\n  display: block;\n  border-top: solid 1px #F3E3CF;\n  border-bottom: solid 1px #F3E3CF;\n  text-align: left;\n  padding: 20px 0;\n}\n.wrap-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0;\n  margin: 0 0 -5px 0;\n}\n@media (max-width: 920px) {\n  .wrap-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    max-width: 100%;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    margin: 0 0 -15px 0;\n  }\n  .wrap-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 0;\n  }\n}\n.wrap-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  font-size: 20px;\n}\n.wrap-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"/\";\n  position: absolute;\n  right: -2px;\n  top: 0;\n}\n.wrap-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 20px;\n  color: #F3E3CF;\n  text-decoration: none;\n}\n.wrap-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ebd2b4;\n}\n.wrap-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.wrap-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlLnNjc3MiLCJoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQTZDUSw0RUFBQTtBQTVDUjs7NkJBQUE7QUFjQTs7NkJBQUE7QUFRQTs7NkJBQUE7QUFZQTs7NkJBQUE7QUFHQTtFQUNDLGdDQUFBO0FDeEJEO0FEMkJBOzs2QkFBQTtBQ3hDQTs2QkFBQTtBQUVBO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0FBbUJKO0FBakJJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFtQlI7QUFqQlE7RUFKSjtJQUtRLDhCQUFBO0lBQ0EsbUJBQUE7RUFvQlY7QUFDRjtBQWxCUTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQW9CWjtBQWxCWTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBb0JoQjtBQWxCZ0I7RUFKSjtJQUtRLFlBQUE7RUFxQmxCO0FBQ0Y7QUFsQlk7RUFDSSxXQUFBO0FBb0JoQjtBQWhCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBa0JaO0FBaEJZO0VBSko7SUFLUSxhQUFBO0VBbUJkO0FBQ0Y7QUFqQlk7RUFDSSxZQUFBO0FBbUJoQjtBQWpCZ0I7RUFISjtJQUlRLFlBQUE7RUFvQmxCO0FBQ0Y7QUFsQmdCO0VBUEo7SUFRUSxZQUFBO0VBcUJsQjtBQUNGO0FBakJRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFtQlo7QUFqQlk7RUFKSjtJQUtRLGFBQUE7RUFvQmQ7QUFDRjtBQWpCUTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtBQW1CWjtBQWpCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBbUJoQjtBQWhCWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjRHBFRTtFQ3FFRixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFrQmhCO0FBYkk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFlUjtBQWJRO0VBTko7SUFPUSxjQUFBO0VBZ0JWO0FBQ0Y7QUFkUTtFQVZKO0lBV1EsYUFBQTtFQWlCVjtBQUNGO0FBZlE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtBQWlCWjtBQWZZO0VBSko7SUFLUSxjQUFBO0lBQ0EsV0FBQTtFQWtCZDtBQUNGO0FBaEJZO0VBVEo7SUFVUSxjQUFBO0lBQ0EsV0FBQTtFQW1CZDtBQUNGO0FBaEJnQjtFQURKO0lBRVEsWUFBQTtFQW1CbEI7QUFDRjtBQWZRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBaUJaO0FBZlk7RUFKSjtJQUtRLGNBQUE7RUFrQmQ7QUFDRjtBQWJBOzZCQUFBO0FBRUE7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWdCSjtBQWRJO0VBQ0ksb0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFnQlI7QUFkUTtFQUxKO0lBTVEsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBaUJWO0VBZlU7SUFDSSxRQUFBO0VBaUJkO0FBQ0Y7QUFkUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFnQlo7QUFkWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FBZ0JoQjtBQWJZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjRHhLQTtFQ3lLQSxxQkFBQTtBQWVoQjtBQWJnQjtFQUNJLGNEM0tIO0FDMExqQjtBQVZnQjtFQUNJLGVBQUE7QUFZcEI7QUFQZ0I7RUFDSSxhQUFBO0FBU3BCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLypcbkNvbG9yXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiRjb2xvci10aXRsZTogI2ZmZjVlODtcbiRjb2xvci1jb250ZW50OiNGM0UzQ0Y7XG4kY29sb3ItcHJpbWFyeTogI0YzRTNDRjtcbiRjb2xvci1wcmltYXJ5MjogI2ViZDJiNDtcbiRib2R5LWJnOiAjZjVmN2Y4O1xuJGNvbG9yLWRhbmdlcjogI2U3NGMzYztcbiRjb2xvci1zZWNvbmRhcnk6ICM5NTNFNDY7XG4kY29sb3Itd2FybmluZzogI2YxYzQwZjtcbiRjb2xvci1zdWNjZXNzOiAjMmVjYzcxO1xuJGNvbG9yLWluZm86ICMzNDk4ZGI7XG5cbi8qXG5CcmVhayBSZXNwb25zaXZlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiRtb2JpbGUtc20tc2NyZWVuOiA0ODBweDtcbiRtb2JpbGUtc2NyZWVuOiA3NjdweDtcbiRpcGFkLXNtLXNjcmVlbjogODEycHg7XG4kaXBhZC1zY3JlZW46IDkyMHB4O1xuXG4vKlxuQm9vdHN0cmFwIEN1c3RvbVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kdGhlbWUtY29sb3JzOiAoXG4gICAgXCJwcmltYXJ5XCI6ICRjb2xvci1wcmltYXJ5LFxuICAgIFwiZGFuZ2VyXCI6ICRjb2xvci1kYW5nZXIsXG4gICAgXCJzZWNvbmRhcnlcIjogJGNvbG9yLXNlY29uZGFyeSxcbiAgICBcIndhcm5pbmdcIjogJGNvbG9yLXdhcm5pbmcsXG4gICAgXCJzdWNjZXNzXCI6ICRjb2xvci1zdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAkY29sb3ItaW5mb1xuKTtcblxuLypcbkdlbmVyYWwgRXh0ZW5kXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5hbmltYXRlIHtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNjAwLDcwMCcpO1xuJGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsiLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZSc7XG5cbi8qIFdSQVAgSEVBREVSXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi53cmFwLWhlYWRlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAzOHB4IDAgNDhweDtcblxuICAgIC5jb250ZW50LWhlYWRlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRpcGFkLXNjcmVlbikge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5icmFuZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1zY3JlZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGlwYWQtc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnVwbG9hZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1zY3JlZW4pIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjdweCAwIDEwcHg7XG5cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYWRnZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTI3cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAwIDAgMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGFudC1oZWFkZXItcmVzcG9uc2l2ZXtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkaXBhZC1zY3JlZW4pIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtc2NyZWVuKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaC1yZXNwb25zaXZle1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkaXBhZC1zY3JlZW4pIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXNtLXNjcmVlbikge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnVwbG9hZC1yZXNwb25zaXZle1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIFdSQVAgTUVOVVxuLyogPT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ud3JhcC1tZW51e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkY29sb3ItcHJpbWFyeTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGNvbG9yLXByaW1hcnk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG5cbiAgICB1bHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMCAwIC01cHggMDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGlwYWQtc2NyZWVuKSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogIG5vd3JhcDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIC0xNXB4IDA7XG5cbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTJweDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 4546:
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ 3646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent] }); })();


/***/ }),

/***/ 9771:
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* reexport safe */ _footer_footer_module__WEBPACK_IMPORTED_MODULE_0__.FooterModule),
/* harmony export */   "HeaderModule": () => (/* reexport safe */ _header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule)
/* harmony export */ });
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.module */ 8593);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.module */ 4546);




/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services */ 1866);






function HomeComponent_ng_container_12_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.title);
} }
function HomeComponent_ng_container_12_h4_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.title);
} }
function HomeComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomeComponent_ng_container_12_h3_6_Template, 2, 1, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_ng_container_12_h4_7_Template, 2, 1, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("col-md-4", i_r6 != 0)("col-md-8", i_r6 == 0)("col-sm-6", i_r6 != 0)("col-sm-12", i_r6 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r6 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r6 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r5.viewer, " views");
} }
function HomeComponent_ng_container_32_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.title);
} }
function HomeComponent_ng_container_32_h4_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r12 = ctx_r16.index;
    const item_r11 = ctx_r16.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r12 == 0 ? item_r11.user : item_r11.title, " ");
} }
function HomeComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomeComponent_ng_container_32_h3_6_Template, 2, 1, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_ng_container_32_h4_7_Template, 2, 1, "h4", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("col-md-4", i_r12 != 0)("col-md-8", i_r12 == 0)("col-sm-6", i_r12 != 0)("col-sm-12", i_r12 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r12 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r12 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r12 == 0 ? item_r11.title : item_r11.user, " ");
} }
function HomeComponent_ng_container_52_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r17.title);
} }
function HomeComponent_ng_container_52_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r17.user);
} }
function HomeComponent_ng_container_52_h4_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r17.title);
} }
const _c0 = function (a0) { return { "display": a0 }; };
const _c1 = function (a0) { return { "margin-left.px": a0 }; };
function HomeComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomeComponent_ng_container_52_h3_6_Template, 2, 1, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_ng_container_52_h5_7_Template, 2, 1, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeComponent_ng_container_52_h4_8_Template, 2, 1, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("col-md-4", i_r18 != 0)("col-md-8", i_r18 == 0)("col-sm-6", i_r18 != 0)("col-sm-12", i_r18 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r17.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, i_r18 == 0 ? "flex" : "block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r18 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r18 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r18 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c1, i_r18 == 0 ? 15 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r17.viewer, " views");
} }
function HomeComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r25.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r25.user, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r25.activity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r25.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](item_r25.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.moment(item_r25.time_elapsed).fromNow(), "");
} }
function HomeComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r26.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r26.channel);
} }
class HomeComponent {
    constructor(mainService, _platformId) {
        this.mainService = mainService;
        this._platformId = _platformId;
        this.videos = [];
        this.people = [];
        this.documents = [];
        this.activity = [];
        this.chanells = [];
        this.moment = moment__WEBPACK_IMPORTED_MODULE_0__;
        this.isBrowser = false;
        this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(_platformId);
    }
    ngOnInit() {
        this.getPosts();
    }
    ngAfterViewInit() {
    }
    /**
     * * GET POST *
     * Todo: to getting all posts
     */
    getPosts() {
        this.mainService.getPosts().subscribe((res) => {
            const data = res.data;
            this.videos = data.videos;
            this.people = data.people;
            this.documents = data.documents;
            this.activity = data.activity;
            this.chanells = data.chanells;
            if (this.isBrowser) {
                this.initMasonry([
                    "#masonryVideos",
                    "#masonryPeople",
                    "#masonryDocs"
                ]);
            }
        });
    }
    /**
     * * INIT MASONRY *
     * Todo: to initialized masonry
     * @param selectors: String[] => ['#selector1','#selector2']
     */
    initMasonry(selectors) {
        setTimeout(() => {
            selectors.map(selector => {
                const self = $(selector);
                self.masonry({
                    itemSelector: ".grid",
                    columnWidth: '.grid-sizer'
                });
            });
        }, 1000);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 86, vars: 5, consts: [[1, "wrap-home"], [1, "row"], [1, "col-lg-8"], [1, "wrap-post"], [1, "col-md-8", "wrap-title"], ["href", "javascript:;"], ["id", "masonryVideos", 1, "row", "space"], [1, "col-md-4", "col-sm-6", "grid-sizer"], [4, "ngFor", "ngForOf"], [1, "col-md-4", "grid"], [1, "item-action"], ["src", "../../../assets/images/masonry-child-primary.png", "alt", ""], [1, "content"], ["src", "../../../assets/icon/img-arrow-up.png", "alt", "", 1, "img-upload"], [1, "desc"], ["href", "javascript:;", 1, "link"], ["id", "masonryPeople", 1, "row", "space"], ["src", "../../../assets/icon/cearcli.png", "alt", "", 1, "img-upload"], ["id", "masonryDocs", 1, "row", "space"], ["src", "../../../assets/icon/add.png", "alt", "", 1, "img-upload"], [1, "col-lg-4"], [1, "widget"], [1, "widget-title"], [1, "flex-fill"], [1, "title"], ["class", "post-activity", 4, "ngFor", "ngForOf"], [1, "row", "row-channel"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "grid"], [1, "item-post"], ["alt", "", 1, "img-post", 3, "src"], [1, "view-user"], ["class", "title", 4, "ngIf"], ["class", "sub-title", 4, "ngIf"], [1, "username"], [1, "views"], ["href", "javascript:;", 1, "link-post"], [1, "sub-title"], [1, "view-user", 3, "ngStyle"], ["class", "username", 4, "ngIf"], [1, "views", 3, "ngStyle"], [1, "post-activity"], [1, "wrap-image"], ["alt", "activity image", 3, "src"], [1, "content", "flex-fill"], [1, "name"], [1, "mb-0"], ["href", "javascript:;", 1, "post-link"], ["href", "javascript:;", 1, "post-close"], ["src", "../../../assets/images/close-hover.png", "alt", ""], [1, "col-6"], ["href", "javascript:;", 1, "item-channel"], ["alt", "", 3, "src"], ["href", "javascript:;", 1, "add-channel"], ["src", "../../../assets/images/add-hover.png", "alt", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Browse All Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomeComponent_ng_container_12_Template, 13, 13, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Your Own Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, HomeComponent_ng_container_32_Template, 11, 12, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " How ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Your Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Browse All Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, HomeComponent_ng_container_52_Template, 12, 19, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Your Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "View timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Filter Activites");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, HomeComponent_div_75_Template, 16, 8, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Browse all channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, HomeComponent_div_85_Template, 7, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.videos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.people);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.documents);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.activity);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.chanells);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\");\n\n\n\n\n.animate[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n}\n\n\n.wrap-home[_ngcontent-%COMP%] {\n  padding: 50px 0 58px;\n  \n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .wrap-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .wrap-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 400;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .wrap-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-decoration: none;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .wrap-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .img-post[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  object-fit: contain;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .view-user[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  position: absolute;\n  bottom: 0;\n  padding: 10px;\n  left: 0;\n  width: 100%;\n  z-index: 99;\n}\n@media (max-width: 1024px) {\n  .wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .view-user[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 920px) {\n  .wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .view-user[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .view-user[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #953E46;\n  margin-bottom: 0;\n  font-weight: 400;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .view-user[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  color: #953E46;\n  margin-bottom: 0;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 24px;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .view-user[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  color: #953E46;\n  margin-bottom: 0;\n  font-weight: 400;\n  font-size: 16px;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .view-user[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%] {\n  color: #953E46;\n  margin-left: 15px;\n  text-align: right;\n  white-space: nowrap;\n}\n@media (max-width: 1024px) {\n  .wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .view-user[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 15px;\n  }\n}\n@media (max-width: 920px) {\n  .wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .view-user[_ngcontent-%COMP%]   .views[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-post[_ngcontent-%COMP%]   .link-post[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 99;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-action[_ngcontent-%COMP%] {\n  border: solid 2px #F3E3CF;\n  position: relative;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-action[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-action[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  width: 100%;\n  margin-top: -43px;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-action[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img-upload[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  object-fit: cover;\n  margin-right: 15px;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-action[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.wrap-home[_ngcontent-%COMP%]   .wrap-post[_ngcontent-%COMP%]   .item-action[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 99;\n}\n.wrap-home[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%] {\n  display: block;\n  padding-bottom: 20px;\n  border-bottom: solid 1px #F3E3CF;\n  position: relative;\n  margin-bottom: 47px;\n}\n@media (max-width: 920px) {\n  .wrap-home[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%] {\n    border-bottom: 0;\n  }\n}\n.wrap-home[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.wrap-home[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: solid 3px #F3E3CF;\n  padding-bottom: 20px;\n}\n@media (max-width: 1024px) {\n  .wrap-home[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 920px) {\n  .wrap-home[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.wrap-home[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 400;\n}\n.wrap-home[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-decoration: none;\n  margin-top: 15px;\n  display: inline-block;\n}\n.wrap-home[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.post-activity[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px 0 0;\n  position: relative;\n}\n.post-activity[_ngcontent-%COMP%]   .post-close[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: -1px;\n  right: -5px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n.post-activity[_ngcontent-%COMP%]   .post-close[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  object-fit: contain;\n}\n.post-activity[_ngcontent-%COMP%]   .post-link[_ngcontent-%COMP%] {\n  content: \"\";\n  position: absolute;\n  border: solid 1px #F3E3CF;\n  width: calc(100% + 12px);\n  height: calc(100% - 8px);\n  top: -1px;\n  left: 0;\n  margin-left: -6px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n  z-index: 1;\n}\n.post-activity[_ngcontent-%COMP%]:hover   .post-close[_ngcontent-%COMP%], .post-activity[_ngcontent-%COMP%]:hover   .post-link[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.post-activity[_ngcontent-%COMP%]   .wrap-image[_ngcontent-%COMP%] {\n  display: block;\n  width: 20%;\n}\n.post-activity[_ngcontent-%COMP%]   .wrap-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.post-activity[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  width: 80%;\n}\n.post-activity[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-top: -4px;\n  margin-bottom: 0px;\n}\n.post-activity[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n.post-activity[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n  .row-channel {\n  margin: 0 -7.5px !important;\n}\n  .row-channel > div {\n  padding: 0 7.5px !important;\n}\n  .row-channel .item-channel {\n  display: block !important;\n  width: 100%;\n  position: relative;\n}\n  .row-channel .item-channel:hover .add-channel {\n  opacity: 1;\n}\n  .row-channel .item-channel img {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n  .row-channel .item-channel span {\n  position: absolute;\n  color: #953E46;\n  bottom: 5px;\n  left: 8px;\n  z-index: 2;\n}\n  .row-channel .item-channel .add-channel {\n  position: absolute;\n  z-index: 2;\n  top: -15.2px;\n  right: 0;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n  .row-channel .item-channel .add-channel img {\n  width: 30px;\n  height: 30px;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlLnNjc3MiLCJob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUE2Q1EsNEVBQUE7QUE1Q1I7OzZCQUFBO0FBY0E7OzZCQUFBO0FBUUE7OzZCQUFBO0FBWUE7OzZCQUFBO0FBR0E7RUFDQyxnQ0FBQTtBQ3hCRDtBRDJCQTs7NkJBQUE7QUN4Q0E7NkJBQUE7QUFFQTtFQUNJLG9CQUFBO0VBc0pBLGtCQUFBO0FBbElKO0FBakJJO0VBQ0ksbUJBQUE7QUFtQlI7QUFqQlE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBbUJaO0FBakJZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQW1CaEI7QUFoQlk7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBa0JoQjtBQWhCZ0I7RUFDSSwwQkFBQTtBQWtCcEI7QUFiUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZVo7QUFiWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZWhCO0FBWlk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFjaEI7QUFaZ0I7RUFYSjtJQVlRLGNBQUE7RUFlbEI7QUFDRjtBQWJnQjtFQWZKO0lBZ0JRLGFBQUE7RUFnQmxCO0FBQ0Y7QUFkZ0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWdCcEI7QUFiZ0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWVwQjtBQVpnQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWNwQjtBQVhnQjtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFhcEI7QUFYb0I7RUFOSjtJQU9RLGNBQUE7SUFDQSxnQkFBQTtFQWN0QjtBQUNGO0FBWm9CO0VBWEo7SUFZUSxpQkFBQTtFQWV0QjtBQUNGO0FBWFk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBYWhCO0FBVFE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBV1o7QUFUWTtFQUNJLFdBQUE7QUFXaEI7QUFSWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFVaEI7QUFSZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFVcEI7QUFQZ0I7RUFDSSxnQkFBQTtBQVNwQjtBQUxZO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQU9oQjtBQURJO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBR1I7QUFEUTtFQVBKO0lBUVEsZ0JBQUE7RUFJVjtBQUNGO0FBRlE7RUFDSSxnQkFBQTtBQUlaO0FBRFE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQUdaO0FBRFk7RUFMSjtJQU1RLGNBQUE7RUFJZDtBQUNGO0FBRlk7RUFUSjtJQVVRLGFBQUE7RUFLZDtBQUNGO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBSVo7QUFEUTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBR1o7QUFEWTtFQUNJLDBCQUFBO0FBR2hCO0FBR0E7NkJBQUE7QUFFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FBQVI7QUFFUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBWjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFGUjtBQU1ROztFQUVJLFVBQUE7QUFKWjtBQVFJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUFOUjtBQVFRO0VBQ0ksV0FBQTtBQU5aO0FBVUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFSUjtBQVVRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQVJaO0FBVVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFSaEI7QUFZUTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFWWjtBQWVBO0VBQ0ksMkJBQUE7QUFaSjtBQWNJO0VBQ0ksMkJBQUE7QUFaUjtBQWVJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFiUjtBQWdCWTtFQUNJLFVBQUE7QUFkaEI7QUFrQlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBaEJaO0FBbUJRO0VBQ0ksa0JBQUE7RUFDQSxjRHRTTTtFQ3VTTixXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFqQlo7QUFvQlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQWxCWjtBQW9CWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFsQmhCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kY29sb3ItdGl0bGU6ICNmZmY1ZTg7XG4kY29sb3ItY29udGVudDojRjNFM0NGO1xuJGNvbG9yLXByaW1hcnk6ICNGM0UzQ0Y7XG4kY29sb3ItcHJpbWFyeTI6ICNlYmQyYjQ7XG4kYm9keS1iZzogI2Y1ZjdmODtcbiRjb2xvci1kYW5nZXI6ICNlNzRjM2M7XG4kY29sb3Itc2Vjb25kYXJ5OiAjOTUzRTQ2O1xuJGNvbG9yLXdhcm5pbmc6ICNmMWM0MGY7XG4kY29sb3Itc3VjY2VzczogIzJlY2M3MTtcbiRjb2xvci1pbmZvOiAjMzQ5OGRiO1xuXG4vKlxuQnJlYWsgUmVzcG9uc2l2ZVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kbW9iaWxlLXNtLXNjcmVlbjogNDgwcHg7XG4kbW9iaWxlLXNjcmVlbjogNzY3cHg7XG4kaXBhZC1zbS1zY3JlZW46IDgxMnB4O1xuJGlwYWQtc2NyZWVuOiA5MjBweDtcblxuLypcbkJvb3RzdHJhcCBDdXN0b21cbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuJHRoZW1lLWNvbG9yczogKFxuICAgIFwicHJpbWFyeVwiOiAkY29sb3ItcHJpbWFyeSxcbiAgICBcImRhbmdlclwiOiAkY29sb3ItZGFuZ2VyLFxuICAgIFwic2Vjb25kYXJ5XCI6ICRjb2xvci1zZWNvbmRhcnksXG4gICAgXCJ3YXJuaW5nXCI6ICRjb2xvci13YXJuaW5nLFxuICAgIFwic3VjY2Vzc1wiOiAkY29sb3Itc3VjY2VzcyxcbiAgICBcImluZm9cIjogJGNvbG9yLWluZm9cbik7XG5cbi8qXG5HZW5lcmFsIEV4dGVuZFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uYW5pbWF0ZSB7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCw3MDAnKTtcbiRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGUnO1xuXG4vKiBXUkFQIEhPTUVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLndyYXAtaG9tZXtcbiAgICBwYWRkaW5nOiA1MHB4IDAgNThweDtcblxuICAgIC8vIFNUWUxFIExJU1QgUE9TVFxuICAgIC53cmFwLXBvc3R7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgLndyYXAtdGl0bGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+YSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1wb3N0e1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgLmltZy1wb3N0e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZpZXctdXNlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkaXBhZC1zY3JlZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTUzRTQ2O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zdWItdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTUzRTQ2O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC51c2VybmFtZXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5NTNFNDY7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudmlld3N7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTUzRTQ2O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRpcGFkLXNjcmVlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5saW5rLXBvc3R7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtLWFjdGlvbntcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250ZW50e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00M3B4O1xuXG4gICAgICAgICAgICAgICAgLmltZy11cGxvYWR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmRlc2N7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGlua3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogV0lER0VUIC0tLS0tLSAqL1xuICAgIC53aWRnZXR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ3cHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRpcGFkLXNjcmVlbikge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53aWRnZXQtdGl0bGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRpcGFkLXNjcmVlbikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGF7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogUE9TVCBBQ1RJVklUWVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucG9zdC1hY3Rpdml0eXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5wb3N0LWNsb3Nle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wb3N0LWxpbmt7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxMnB4KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cHgpO1xuICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAmOmhvdmVye1xuICAgICAgICAucG9zdC1jbG9zZSxcbiAgICAgICAgLnBvc3QtbGlua3tcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud3JhcC1pbWFnZXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyMCU7XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICB3aWR0aDogODAlO1xuXG4gICAgICAgIC5uYW1le1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcblxuICAgICAgICAgICAgc21hbGx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjo6bmctZGVlcCAucm93LWNoYW5uZWx7XG4gICAgbWFyZ2luOiAwIC03LjVweCAhaW1wb3J0YW50O1xuXG4gICAgPiBkaXZ7XG4gICAgICAgIHBhZGRpbmc6IDAgNy41cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaXRlbS1jaGFubmVse1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAuYWRkLWNoYW5uZWx7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuICAgICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZC1jaGFubmVse1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIHRvcDogLTE1LjJweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent] }); })();


/***/ }),

/***/ 7566:
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* reexport safe */ _home_home_module__WEBPACK_IMPORTED_MODULE_0__.HomeModule)
/* harmony export */ });
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.module */ 7994);



/***/ }),

/***/ 1866:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainService": () => (/* reexport safe */ _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService)
/* harmony export */ });
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.service */ 1557);



/***/ }),

/***/ 1557:
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainService": () => (/* binding */ MainService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


class MainService {
    constructor(http) {
        this.http = http;
    }
    getPosts() {
        return this.http.get("https://app.villume.com/check-health");
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
MainService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 2275,
	"./af.js": 2275,
	"./ar": 857,
	"./ar-dz": 1218,
	"./ar-dz.js": 1218,
	"./ar-kw": 4754,
	"./ar-kw.js": 4754,
	"./ar-ly": 6680,
	"./ar-ly.js": 6680,
	"./ar-ma": 2178,
	"./ar-ma.js": 2178,
	"./ar-sa": 6522,
	"./ar-sa.js": 6522,
	"./ar-tn": 5682,
	"./ar-tn.js": 5682,
	"./ar.js": 857,
	"./az": 164,
	"./az.js": 164,
	"./be": 9774,
	"./be.js": 9774,
	"./bg": 947,
	"./bg.js": 947,
	"./bm": 1832,
	"./bm.js": 1832,
	"./bn": 9650,
	"./bn-bd": 4477,
	"./bn-bd.js": 4477,
	"./bn.js": 9650,
	"./bo": 6005,
	"./bo.js": 6005,
	"./br": 8492,
	"./br.js": 8492,
	"./bs": 534,
	"./bs.js": 534,
	"./ca": 2061,
	"./ca.js": 2061,
	"./cs": 4737,
	"./cs.js": 4737,
	"./cv": 1167,
	"./cv.js": 1167,
	"./cy": 7996,
	"./cy.js": 7996,
	"./da": 9528,
	"./da.js": 9528,
	"./de": 5915,
	"./de-at": 9430,
	"./de-at.js": 9430,
	"./de-ch": 7978,
	"./de-ch.js": 7978,
	"./de.js": 5915,
	"./dv": 3426,
	"./dv.js": 3426,
	"./el": 6616,
	"./el.js": 6616,
	"./en-au": 3816,
	"./en-au.js": 3816,
	"./en-ca": 2162,
	"./en-ca.js": 2162,
	"./en-gb": 3305,
	"./en-gb.js": 3305,
	"./en-ie": 1954,
	"./en-ie.js": 1954,
	"./en-il": 3060,
	"./en-il.js": 3060,
	"./en-in": 9923,
	"./en-in.js": 9923,
	"./en-nz": 3540,
	"./en-nz.js": 3540,
	"./en-sg": 6505,
	"./en-sg.js": 6505,
	"./eo": 1907,
	"./eo.js": 1907,
	"./es": 6640,
	"./es-do": 1246,
	"./es-do.js": 1246,
	"./es-mx": 6131,
	"./es-mx.js": 6131,
	"./es-us": 6430,
	"./es-us.js": 6430,
	"./es.js": 6640,
	"./et": 2551,
	"./et.js": 2551,
	"./eu": 2711,
	"./eu.js": 2711,
	"./fa": 2109,
	"./fa.js": 2109,
	"./fi": 3390,
	"./fi.js": 3390,
	"./fil": 7860,
	"./fil.js": 7860,
	"./fo": 8216,
	"./fo.js": 8216,
	"./fr": 9291,
	"./fr-ca": 8527,
	"./fr-ca.js": 8527,
	"./fr-ch": 8407,
	"./fr-ch.js": 8407,
	"./fr.js": 9291,
	"./fy": 7054,
	"./fy.js": 7054,
	"./ga": 9540,
	"./ga.js": 9540,
	"./gd": 3917,
	"./gd.js": 3917,
	"./gl": 1486,
	"./gl.js": 1486,
	"./gom-deva": 6245,
	"./gom-deva.js": 6245,
	"./gom-latn": 8868,
	"./gom-latn.js": 8868,
	"./gu": 9652,
	"./gu.js": 9652,
	"./he": 9019,
	"./he.js": 9019,
	"./hi": 2040,
	"./hi.js": 2040,
	"./hr": 3402,
	"./hr.js": 3402,
	"./hu": 9322,
	"./hu.js": 9322,
	"./hy-am": 7609,
	"./hy-am.js": 7609,
	"./id": 7942,
	"./id.js": 7942,
	"./is": 8275,
	"./is.js": 8275,
	"./it": 3053,
	"./it-ch": 4378,
	"./it-ch.js": 4378,
	"./it.js": 3053,
	"./ja": 6176,
	"./ja.js": 6176,
	"./jv": 679,
	"./jv.js": 679,
	"./ka": 2726,
	"./ka.js": 2726,
	"./kk": 2953,
	"./kk.js": 2953,
	"./km": 6957,
	"./km.js": 6957,
	"./kn": 9181,
	"./kn.js": 9181,
	"./ko": 7148,
	"./ko.js": 7148,
	"./ku": 7752,
	"./ku.js": 7752,
	"./ky": 5675,
	"./ky.js": 5675,
	"./lb": 1263,
	"./lb.js": 1263,
	"./lo": 5746,
	"./lo.js": 5746,
	"./lt": 1143,
	"./lt.js": 1143,
	"./lv": 8753,
	"./lv.js": 8753,
	"./me": 4054,
	"./me.js": 4054,
	"./mi": 1573,
	"./mi.js": 1573,
	"./mk": 202,
	"./mk.js": 202,
	"./ml": 8523,
	"./ml.js": 8523,
	"./mn": 9794,
	"./mn.js": 9794,
	"./mr": 6681,
	"./mr.js": 6681,
	"./ms": 6975,
	"./ms-my": 9859,
	"./ms-my.js": 9859,
	"./ms.js": 6975,
	"./mt": 3691,
	"./mt.js": 3691,
	"./my": 5152,
	"./my.js": 5152,
	"./nb": 7607,
	"./nb.js": 7607,
	"./ne": 1526,
	"./ne.js": 1526,
	"./nl": 6368,
	"./nl-be": 3496,
	"./nl-be.js": 3496,
	"./nl.js": 6368,
	"./nn": 8420,
	"./nn.js": 8420,
	"./oc-lnc": 1906,
	"./oc-lnc.js": 1906,
	"./pa-in": 4504,
	"./pa-in.js": 4504,
	"./pl": 4721,
	"./pl.js": 4721,
	"./pt": 4645,
	"./pt-br": 4548,
	"./pt-br.js": 4548,
	"./pt.js": 4645,
	"./ro": 1977,
	"./ro.js": 1977,
	"./ru": 6042,
	"./ru.js": 6042,
	"./sd": 8849,
	"./sd.js": 8849,
	"./se": 7739,
	"./se.js": 7739,
	"./si": 84,
	"./si.js": 84,
	"./sk": 2449,
	"./sk.js": 2449,
	"./sl": 3086,
	"./sl.js": 3086,
	"./sq": 3139,
	"./sq.js": 3139,
	"./sr": 607,
	"./sr-cyrl": 63,
	"./sr-cyrl.js": 63,
	"./sr.js": 607,
	"./ss": 131,
	"./ss.js": 131,
	"./sv": 1665,
	"./sv.js": 1665,
	"./sw": 5642,
	"./sw.js": 5642,
	"./ta": 3622,
	"./ta.js": 3622,
	"./te": 4825,
	"./te.js": 4825,
	"./tet": 8336,
	"./tet.js": 8336,
	"./tg": 9238,
	"./tg.js": 9238,
	"./th": 9463,
	"./th.js": 9463,
	"./tk": 9986,
	"./tk.js": 9986,
	"./tl-ph": 9672,
	"./tl-ph.js": 9672,
	"./tlh": 43,
	"./tlh.js": 43,
	"./tr": 1212,
	"./tr.js": 1212,
	"./tzl": 110,
	"./tzl.js": 110,
	"./tzm": 482,
	"./tzm-latn": 8309,
	"./tzm-latn.js": 8309,
	"./tzm.js": 482,
	"./ug-cn": 2495,
	"./ug-cn.js": 2495,
	"./uk": 4157,
	"./uk.js": 4157,
	"./ur": 5826,
	"./ur.js": 5826,
	"./uz": 4141,
	"./uz-latn": 3662,
	"./uz-latn.js": 3662,
	"./uz.js": 4141,
	"./vi": 2607,
	"./vi.js": 2607,
	"./x-pseudo": 6460,
	"./x-pseudo.js": 6460,
	"./yo": 2948,
	"./yo.js": 2948,
	"./zh-cn": 2658,
	"./zh-cn.js": 2658,
	"./zh-hk": 9352,
	"./zh-hk.js": 9352,
	"./zh-mo": 8274,
	"./zh-mo.js": 8274,
	"./zh-tw": 8451,
	"./zh-tw.js": 8451
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map