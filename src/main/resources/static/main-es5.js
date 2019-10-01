(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.html":
/*!****************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/step1/step1.html":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/step1/step1.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"step1_main\">\n    <div class=\"container\">\n        <h4 class=\"page_title\">\n            Step1\n        </h4>\n        <div class=\"outer_block\">\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm)\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-md-6 col-form-label text-md-left\">Enter Receiving Date\n                                    </label>\n                                    <div class=\"col-md-6\">\n                                        <kendo-datepicker class=\"form-control\" [format]=\"'dd-MMM-yyyy'\" [value]=\"value\"\n                                            aria-required=\"\" formControlName=\"date\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.date.errors }\">\n                                        </kendo-datepicker>\n                                        <div *ngIf=\"submitted && f.date.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.date.errors.required\">Please select date\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-md-6 col-form-label text-md-left\">Enter No of Pages</label>\n                                    <div class=\"col-md-6\">\n                                        <input type=\"number\" class=\"form-control\" placeholder=\"Enter no of  pages\"\n                                            aria-required=\"\" formControlName=\"invoice_pages\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.invoice_pages.errors }\">\n                                            <div *ngIf=\"submitted && f.invoice_pages.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.invoice_pages.errors.required\">Please Enter no. of pages\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"invoice_type_select\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 form-group\">\n                        <label class=\"labeltext\">Select Invoice Type</label><br>\n                        <div class=\"form-check-inline\">\n                            <label class=\"customradio\"><span class=\"radiotextsty\">Single Page Invoice</span>\n                                <input type=\"radio\" checked=\"checked\" name=\"invoice_type\" value=\"single\" formControlName=\"invoice_type\" aria-required=\"\" formControlName=\"invoice_type\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.invoice_type.errors }\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                            <label class=\"customradio\"><span class=\"radiotextsty\">Multi Page Invoice</span>\n                                <input type=\"radio\" value=\"multi\" formControlName=\"invoice_type\" aria-required=\"\" formControlName=\"invoice_type\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.invoice_type.errors }\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                            <div *ngIf=\"submitted && f.invoice_type.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.invoice_type.errors.required\">Please Select Invoice type \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"submit col-sm-12\">\n                        <button class=\"btn btn-primary float-right\" type=\"submit\" \n                        [disabled]=\"registerForm.invalid\">Next</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/step2/step2.html":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/step2/step2.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"step2_main\">\n    <div class=\"container\">\n        <form>\n            <div class=\"row\">\n                <h4 class=\"page_title\">\n                    <span>\n                        <button (click)=\"backClicked()\"><i class=\"fa fa-arrow-circle-left\"\n                                aria-hidden=\"true\"></i></button>\n                    </span>\n                    Step2\n                </h4>\n            </div>\n            <div class=\"row block2 outer_block\">\n                <div class=\"col-sm-8\">\n                    <div class=\"DashboardContainer\"></div>\n                    <div class=\"for-ProgressBar\"></div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">Invoice Description</div>\n                        <div class=\"card-body\">\n                            <div class=\"form-group row\">\n                                <label for=\"email_address\" class=\"col-md-6 col-form-label text-md-left\">Pending\n                                    Page</label>\n                                <div class=\"col-md-6\">\n                                    <!-- {{pendingPages}} -->\n                                    <input type=\"text\" disabled [(ngModel)]=\"pendingPages\" id=\"pages\" class=\"form-control\" name=\"pendingPages\" required autofocus>\n                                </div>\n                            </div>\n                            <div class=\"upload text-md-right\">\n                                <button [disabled]=\"!isUploadValid\" class=\"btn\" (click)=\"upload()\">upload</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _step1_step1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step1/step1 */ "./src/app/step1/step1.ts");
/* harmony import */ var _step2_step2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step2/step2 */ "./src/app/step2/step2.ts");





var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/step1' },
    { path: 'step1', component: _step1_step1__WEBPACK_IMPORTED_MODULE_3__["Step1Component"] },
    { path: 'step2', component: _step2_step2__WEBPACK_IMPORTED_MODULE_4__["Step2Component"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./src/app/app.ts");
/* harmony import */ var _step2_step2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step2/step2 */ "./src/app/step2/step2.ts");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm5/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm5/index.js");
/* harmony import */ var _step1_step1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./step1/step1 */ "./src/app/step1/step1.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/invoice.service */ "./src/app/services/invoice.service.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_8__["DateInputsModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ],
            declarations: [
                _app__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _step2_step2__WEBPACK_IMPORTED_MODULE_5__["Step2Component"],
                _step1_step1__WEBPACK_IMPORTED_MODULE_9__["Step1Component"]
            ],
            providers: [_services_invoice_service__WEBPACK_IMPORTED_MODULE_12__["InvoiceService"]],
            bootstrap: [_app__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.scss":
/*!**************************!*\
  !*** ./src/app/app.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uppy.uppy-ProgressBar {\n  height: 30px;\n  border: 1px solid red;\n}\n\n.top_header {\n  background: black;\n  color: white;\n}\n\n.heading {\n  padding: 10px;\n}\n\n.heading p {\n  text-align: right;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\nlabel {\n  margin-right: 10px;\n}\n\n.divider {\n  border: 1px dashed #dfdfdf;\n}\n\n.M20 {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvc3JjL2ludm9pY2UvaW52b2ljZS1wcm9jZXNzL3NyYy9hcHAvYXBwLnNjc3MiLCJzcmMvYXBwL2FwcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLDBCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHB5LnVwcHktUHJvZ3Jlc3NCYXIge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuXHJcbiAgLnRvcF9oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRpbmcgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5kaXZpZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZGZkZmRmO1xyXG4gIH1cclxuXHJcbiAgLk0yMCB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9IiwiLnVwcHkudXBweS1Qcm9ncmVzc0JhciB7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4udG9wX2hlYWRlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkaW5nIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmhlYWRpbmcgcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2RmZGZkZjtcbn1cblxuLk0yMCB7XG4gIG1hcmdpbjogMjBweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'invoice-process';
    }
    AppComponent.prototype.onButtonClick = function () {
        this.title = 'Hello from Kendo UI!';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.html */ "./node_modules/raw-loader/index.js!./src/app/app.html"),
            styles: [__webpack_require__(/*! ./app.scss */ "./src/app/app.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/services/invoice.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/invoice.service.ts ***!
  \*********************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var InvoiceService = /** @class */ (function () {
    function InvoiceService(_http) {
        this._http = _http;
        this._url = 'http://localhost:8081';
    }
    InvoiceService.prototype.uploadSinglePageInvoices = function (form, urls) {
        var _this = this;
        var results = urls.map(function (url) {
            return _this._http.post(_this._url + "/invoice", {
                invoiceDate: form.date,
                imageUrls: [url]
            }, { responseType: 'text' });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(results);
    };
    InvoiceService.prototype.uploadMultiPageInvoices = function (form, urls) {
        return this._http.post(this._url + "/invoice", {
            invoiceDate: form.date,
            imageUrls: urls
        }, { responseType: 'text' });
    };
    InvoiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InvoiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "./src/app/step1/step1.scss":
/*!**********************************!*\
  !*** ./src/app/step1/step1.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step1_main {\n  padding: 10px;\n}\n.step1_main label {\n  color: #A5A4BF;\n}\n.step1_main .labeltext {\n  font-size: 18px;\n  margin-top: 10px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #222;\n}\n.step1_main .outer_block {\n  border: 1px dashed #dfdfdf;\n  border-radius: 5px;\n  background: #FAFAFA;\n  padding: 15px;\n}\n.step1_main .card-body .form-group {\n  margin-bottom: 0 !important;\n}\n.step1_main .invoice_type_select {\n  border: 1px dashed #dfdfdf;\n  border-radius: 5px;\n  background: #fff;\n  margin-top: 20px;\n}\n.step1_main .submit .btn {\n  background: #000;\n  color: #fff;\n  padding: 5px;\n  margin-top: 10px;\n  width: 100px;\n  text-transform: uppercase;\n  font-size: 18px;\n  font-family: \"Merriweather\", serif;\n  border: 1px solid #000;\n}\n/* Custom Radio Button Start*/\n.radiotextsty {\n  color: #A5A4BF;\n  font-size: 1rem;\n  margin-right: 30px;\n  top: -3px;\n  position: relative;\n}\n.customradio {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 0px;\n  cursor: pointer;\n  font-size: 18px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default radio button */\n.customradio input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n/* Create a custom radio button */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 22px;\n  width: 22px;\n  background-color: white;\n  border-radius: 50%;\n  border: 1px solid #BEBEBE;\n}\n/* On mouse-over, add a grey background color */\n.customradio:hover input ~ .checkmark {\n  background-color: transparent;\n}\n/* When the radio button is checked, add a blue background */\n.customradio input:checked ~ .checkmark {\n  background-color: white;\n  border: 1px solid #BEBEBE;\n}\n/* Create the indicator (the dot/circle - hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n/* Show the indicator (dot/circle) when checked */\n.customradio input:checked ~ .checkmark:after {\n  display: block;\n}\n/* Style the indicator (dot/circle) */\n.customradio .checkmark:after {\n  top: 2px;\n  left: 2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #333;\n}\n/* Custom Radio Button End*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvc3JjL2ludm9pY2UvaW52b2ljZS1wcm9jZXNzL3NyYy9hcHAvc3RlcDEvc3RlcDEuc2NzcyIsInNyYy9hcHAvc3RlcDEvc3RlcDEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0VSO0FEQUk7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDRVI7QURFUTtFQUNJLDJCQUFBO0FDQVo7QURHSTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURJTTtFQUNNLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FDRlo7QURRQSw2QkFBQTtBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ05KO0FEU0UsNENBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNOSjtBRFNFLGlDQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNOSjtBRFNFLCtDQUFBO0FBQ0E7RUFDRSw2QkFBQTtBQ05KO0FEU0UsNERBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUNOSjtBRFNFLG9FQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDTko7QURTRSxpREFBQTtBQUNBO0VBQ0UsY0FBQTtBQ05KO0FEU0UscUNBQUE7QUFDQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTko7QURTRSwyQkFBQSIsImZpbGUiOiJzcmMvYXBwL3N0ZXAxL3N0ZXAxLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcDFfbWFpbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBjb2xvcjogI0E1QTRCRjtcclxuICAgIH1cclxuICAgIC5sYWJlbHRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgIH1cclxuICAgIC5vdXRlcl9ibG9ja3tcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2RmZGZkZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW52b2ljZV90eXBlX3NlbGVjdHtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2RmZGZkZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICB9XHJcbiAgICAuc3VibWl0e1xyXG4gICAgICAuYnRue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbi8qIEN1c3RvbSBSYWRpbyBCdXR0b24gU3RhcnQqL1xyXG5cclxuLnJhZGlvdGV4dHN0eSB7XHJcbiAgICBjb2xvcjogI0E1QTRCRjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHRvcDogLTNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbXJhZGlvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXHJcbiAgLmN1c3RvbXJhZGlvIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSBhIGN1c3RvbSByYWRpbyBidXR0b24gKi9cclxuICAuY2hlY2ttYXJrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjQkVCRUJFO1xyXG4gIH1cclxuICBcclxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuICAuY3VzdG9tcmFkaW86aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAvKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbiAgLmN1c3RvbXJhZGlvIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjQkVCRUJFO1xyXG4gIH1cclxuICBcclxuICAvKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xyXG4gIC5jdXN0b21yYWRpbyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgKi9cclxuICAuY3VzdG9tcmFkaW8gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGxlZnQ6IDJweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLyogQ3VzdG9tIFJhZGlvIEJ1dHRvbiBFbmQqLyIsIi5zdGVwMV9tYWluIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zdGVwMV9tYWluIGxhYmVsIHtcbiAgY29sb3I6ICNBNUE0QkY7XG59XG4uc3RlcDFfbWFpbiAubGFiZWx0ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMjI7XG59XG4uc3RlcDFfbWFpbiAub3V0ZXJfYmxvY2sge1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2RmZGZkZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnN0ZXAxX21haW4gLmNhcmQtYm9keSAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5zdGVwMV9tYWluIC5pbnZvaWNlX3R5cGVfc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNkZmRmZGY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5zdGVwMV9tYWluIC5zdWJtaXQgLmJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiwgc2VyaWY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi8qIEN1c3RvbSBSYWRpbyBCdXR0b24gU3RhcnQqL1xuLnJhZGlvdGV4dHN0eSB7XG4gIGNvbG9yOiAjQTVBNEJGO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgdG9wOiAtM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jdXN0b21yYWRpbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXG4uY3VzdG9tcmFkaW8gaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQ3JlYXRlIGEgY3VzdG9tIHJhZGlvIGJ1dHRvbiAqL1xuLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkVCRUJFO1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbi5jdXN0b21yYWRpbzpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLmN1c3RvbXJhZGlvIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRUJFQkU7XG59XG5cbi8qIENyZWF0ZSB0aGUgaW5kaWNhdG9yICh0aGUgZG90L2NpcmNsZSAtIGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cbi5jdXN0b21yYWRpbyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xuLmN1c3RvbXJhZGlvIC5jaGVja21hcms6YWZ0ZXIge1xuICB0b3A6IDJweDtcbiAgbGVmdDogMnB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG5cbi8qIEN1c3RvbSBSYWRpbyBCdXR0b24gRW5kKi8iXX0= */"

/***/ }),

/***/ "./src/app/step1/step1.ts":
/*!********************************!*\
  !*** ./src/app/step1/step1.ts ***!
  \********************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Step1Component = /** @class */ (function () {
    function Step1Component(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
    }
    Step1Component.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoice_pages: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            invoice_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    Object.defineProperty(Step1Component.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    Step1Component.prototype.onSubmit = function () {
        // this._step1service.basicData(this.registerForm.value)
        // .subscribe(
        //   response => console.log('success', response),
        //   error => console.error('Error', error)
        // );
        this.router.navigate(['/step2'], { state: { data: this.registerForm.value } });
    };
    Step1Component.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Step1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step1',
            template: __webpack_require__(/*! raw-loader!./step1.html */ "./node_modules/raw-loader/index.js!./src/app/step1/step1.html"),
            styles: [__webpack_require__(/*! ./step1.scss */ "./src/app/step1/step1.scss")]
        })
    ], Step1Component);
    return Step1Component;
}());



/***/ }),

/***/ "./src/app/step2/step2.scss":
/*!**********************************!*\
  !*** ./src/app/step2/step2.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step2_main {\n  margin: 10px;\n}\n.step2_main .uppy-Dashboard-inner {\n  margin: 0 auto !important;\n}\n.step2_main label {\n  color: #A5A4BF;\n}\n.step2_main .uppy-DashboardAddFiles {\n  background: #fff !important;\n}\n.step2_main .page_title {\n  position: relative;\n  width: 100%;\n}\n.step2_main .page_title span {\n  position: absolute;\n  left: 5px;\n  display: inline-block;\n  top: 2px;\n}\n.step2_main .page_title span button {\n  background: 0;\n  border: 0;\n  color: #fff;\n  font-size: 38px;\n}\n.step2_main .outer_block {\n  border: 1px dashed #dfdfdf;\n  border-radius: 5px;\n  background: #FAFAFA;\n  padding: 15px;\n}\n.step2_main .block2 {\n  margin-top: 10px !important;\n}\n.step2_main .labeltext {\n  font-size: 20px;\n  margin-top: 10px;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.step2_main .invoice_type_select {\n  border: 1px dashed #dfdfdf;\n  border-radius: 5px;\n  background: #FAFAFA;\n}\n.step2_main .btn {\n  background: #000;\n  color: #fff;\n  padding: 5px;\n  margin-top: 10px;\n  width: 100px;\n  text-transform: uppercase;\n  font-size: 18px;\n  font-family: \"Merriweather\", serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvc3JjL2ludm9pY2UvaW52b2ljZS1wcm9jZXNzL3NyYy9hcHAvc3RlcDIvc3RlcDIuc2NzcyIsInNyYy9hcHAvc3RlcDIvc3RlcDIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBREFJO0VBQ0kseUJBQUE7QUNFUjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQUk7RUFDSSwyQkFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNFUjtBRERRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0FDR1o7QURGWTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNJaEI7QURBSTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNFUjtBREFJO0VBQ0ksMkJBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQ0k7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDUjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9zdGVwMi9zdGVwMi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXAyX21haW57XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAudXBweS1EYXNoYm9hcmQtaW5uZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGNvbG9yOiAjQTVBNEJGO1xyXG4gICAgfVxyXG4gICAgLnVwcHktRGFzaGJvYXJkQWRkRmlsZXN7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZ2VfdGl0bGV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHRvcDoycHg7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm91dGVyX2Jsb2Nre1xyXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZGZkZmRmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYmxvY2sye1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW52b2ljZV90eXBlX3NlbGVjdHtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2RmZGZkZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiIsIi5zdGVwMl9tYWluIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnN0ZXAyX21haW4gLnVwcHktRGFzaGJvYXJkLWlubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cbi5zdGVwMl9tYWluIGxhYmVsIHtcbiAgY29sb3I6ICNBNUE0QkY7XG59XG4uc3RlcDJfbWFpbiAudXBweS1EYXNoYm9hcmRBZGRGaWxlcyB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5zdGVwMl9tYWluIC5wYWdlX3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGVwMl9tYWluIC5wYWdlX3RpdGxlIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0b3A6IDJweDtcbn1cbi5zdGVwMl9tYWluIC5wYWdlX3RpdGxlIHNwYW4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogMDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuLnN0ZXAyX21haW4gLm91dGVyX2Jsb2NrIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNkZmRmZGY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5zdGVwMl9tYWluIC5ibG9jazIge1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uc3RlcDJfbWFpbiAubGFiZWx0ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zdGVwMl9tYWluIC5pbnZvaWNlX3R5cGVfc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNkZmRmZGY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbn1cbi5zdGVwMl9tYWluIC5idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIsIHNlcmlmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/step2/step2.ts":
/*!********************************!*\
  !*** ./src/app/step2/step2.ts ***!
  \********************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var uppy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uppy */ "./node_modules/uppy/index.mjs");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/invoice.service */ "./src/app/services/invoice.service.ts");







var Step2Component = /** @class */ (function () {
    function Step2Component(_location, formBuilder, _invoiceservice, router) {
        this._location = _location;
        this.formBuilder = formBuilder;
        this._invoiceservice = _invoiceservice;
        this.router = router;
        this.isUploadValid = false;
    }
    Step2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.formData = history.state.data;
        this.pendingPages = this.formData.invoice_pages || 1;
        // this.uploadForm = this.formBuilder.group({
        //   formData: ['', Validators.required],
        //   pendingPages: ['', Validators.required],
        // });
        this.uppy = uppy__WEBPACK_IMPORTED_MODULE_5__["Core"]({
            debug: false,
            autoProceed: false,
            restrictions: {
                maxFileSize: 20 * 1000 * 1000,
                minNumberOfFiles: 1,
                allowedFileTypes: ['image/*', '.jpg', '.jpeg', '.png']
            }
        })
            .use(uppy__WEBPACK_IMPORTED_MODULE_5__["Dashboard"], {
            trigger: ".UppyModalOpenerBtn",
            inline: true,
            target: ".DashboardContainer",
            replaceTargetContent: true,
            note: "Images only up to 20 MB each",
            height: 350,
            hideUploadButton: true,
            metaFields: true,
            disableInformer: true
        })
            .use(uppy__WEBPACK_IMPORTED_MODULE_5__["ProgressBar"], {
            target: '.for-ProgressBar', hideAfterFinish: false
        })
            .use(uppy__WEBPACK_IMPORTED_MODULE_5__["Tus"], { endpoint: 'https://master.tus.io/files/' });
        this.uppy.
            on('file-added', function (file) {
            _this.updateIsUploadValid(_this.uppy.getFiles().length);
        }).
            on('file-removed', function (file) {
            _this.updateIsUploadValid(_this.uppy.getFiles().length);
        });
        // this.uppy.on("complete", result => {
        //   console.log("successful files:", result.successful);
        //   console.log("failed files:", result.failed);
        // });
    };
    Step2Component.prototype.backClicked = function () {
        this._location.back();
    };
    Step2Component.prototype.upload = function () {
        var _this = this;
        this.uppy.upload().then(function (res) {
            if (res.failed.length != 0) {
                window.alert("Failed to upload " + res.failed.length + " files.");
                return;
            }
            var sub = null;
            if (_this.formData.invoice_type == "single") {
                sub = _this._invoiceservice.uploadSinglePageInvoices(_this.formData, res.successful.map(function (r) { return r.uploadURL; })).toPromise();
            }
            else {
                sub = _this._invoiceservice.uploadMultiPageInvoices(_this.formData, res.successful.map(function (r) { return r.uploadURL; })).toPromise();
            }
            sub.then(function () {
                window.alert("Upload Complete");
                _this.uppy.reset();
            });
        }).catch(function () {
            window.alert("Failed to upload all files.");
        });
    };
    Step2Component.prototype.updateIsUploadValid = function (filesUploadedCount) {
        this.pendingPages = this.formData.invoice_pages - filesUploadedCount;
        this.isUploadValid = this.pendingPages == 0;
    };
    Step2Component.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_invoice_service__WEBPACK_IMPORTED_MODULE_6__["InvoiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Step2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step2',
            template: __webpack_require__(/*! raw-loader!./step2.html */ "./node_modules/raw-loader/index.js!./src/app/step2/step2.html"),
            styles: [__webpack_require__(/*! ./step2.scss */ "./src/app/step2/step2.scss")]
        })
    ], Step2Component);
    return Step2Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/src/invoice/invoice-process/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map