webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn())
            return true;
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__Services_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Contact -->\r\n<div class=\"modal fade contact-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Contact Me</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<h3>Contact me through Social media</h3>\t\t\t\t\r\n\t\t\t\t<app-social-btn [analyticsZone]=\"'contact'\" [size]=\"3\" ></app-social-btn>\r\n\t\t\t\t<h3>Or send me a message</h3>\r\n\t\t\t\t<form class=\"form-horizontal\" action=\"\" method=\"post\">\r\n\t\t\t\t\t<!-- Name input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 control-label\" for=\"name\">Name</label>\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Your name\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Email input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 control-label\" for=\"email\">Your E-mail</label>\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<input id=\"email\" name=\"email\" type=\"text\" placeholder=\"Your email\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Message body -->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 control-label\" for=\"message\">Your message</label>\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"Please enter your message here...\" rows=\"5\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Forward</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/Components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/Components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/Components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/Components/events/events.component.css":
/***/ (function(module, exports) {

module.exports = ".more-pojects-btn{\r\n    text-align: right;\r\n    float: right;\r\n    \r\n    margin: 50px;\r\n    margin-top: 25px;\r\n}\r\n.more-pojects-btn > .link{\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n.more-pojects-btn > .link :hover{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n.more-pojects-btn > .icon{\r\n    margin-left: 5px;\r\n}"

/***/ }),

/***/ "./src/app/Components/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  Events  -->\r\n<div class=\"events content-section\" id=\"events\">\r\n    <h1 class=\"section-title\" style=\"background:#2E7D32\">\r\n        <i class=\"fas fa-calendar-alt section-icon\"></i>Events</h1>\r\n    <div class=\"container \">\r\n        <app-project-item *ngFor=\"let item of events\" [project]=\"item\"></app-project-item>\r\n        <div *ngIf=\"showMorebtn\" class=\"row justify-content-center\">\r\n            <div class=\"col-xs-4 more-pojects-btn\">\r\n                <a [routerLink]=\"['/events']\" class=\"link\">Look for more events\r\n                    <i class=\"far fa-arrow-alt-circle-right icon\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Components/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_datasource_service__ = __webpack_require__("./src/app/Services/datasource.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsComponent = /** @class */ (function () {
    function EventsComponent(datasource) {
        this.datasource = datasource;
    }
    EventsComponent.prototype.ngOnInit = function () {
        this.events = this.datasource.getEvents();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], EventsComponent.prototype, "countLimit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EventsComponent.prototype, "showMorebtn", void 0);
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("./src/app/Components/events/events.component.html"),
            styles: [__webpack_require__("./src/app/Components/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_datasource_service__["a" /* DatasourceService */]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/Components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: relative;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background: #1565C0;\r\n    padding: 10px;\r\n}\r\n\r\n.footer>.content {\r\n    text-align: right;\r\n}\r\n\r\n.footer .copyright {\r\n    padding: 0;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n    text-align: left;\r\n    padding-top: 5px;\r\n}"

/***/ }),

/***/ "./src/app/Components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright -->\r\n<footer class=\"footer \">\r\n\t<div class=\"container content\">\r\n\t\t<div class=\"row justify-content-center\">\r\n\t\t\t<div class=\"col-md-5 content\">\r\n\t\t\t\t<app-social-btn [analyticsZone]=\"'footer'\" [size]=\"1\"></app-social-btn>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t<div class=\"footer copyright\">\r\n\t\t\t\t\t<small>&copy; Copyright 2018, Miguel Ángel Campos </small>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</footer>"

/***/ }),

/***/ "./src/app/Components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return footerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var footerComponent = /** @class */ (function () {
    function footerComponent() {
    }
    footerComponent.prototype.ngOnInit = function () {
    };
    footerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/Components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/Components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], footerComponent);
    return footerComponent;
}());



/***/ }),

/***/ "./src/app/Components/hobbies/hobbies.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/hobbies/hobbies.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  Hobbies  -->\n<div class=\"container\">\n\t<div class=\"row interests\">\n\t\t<div class=\"col-sm-12 sub-section-title\">\n\t\t\t<h2>\n\t\t\t\t<i class=\"fas fa-hourglass-start icon\"></i>Hobbies </h2>\n\t\t</div>\n\t\t<div class=\"col-sm-10 offset-sm-1\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let item of hobbies\">\n\t\t\t\t\t<div class=\"interest\">\n\t\t\t\t\t\t<img class=\"icon\" src=\"{{item.icon}}\" alt=\"\">\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<h3 class=\"name\">{{item.title}}</h3>\n\t\t\t\t\t\t\t<p class=\"legend\" [innerHTML]=\"item.legend\"></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/Components/hobbies/hobbies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HobbiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_datasource_service__ = __webpack_require__("./src/app/Services/datasource.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HobbiesComponent = /** @class */ (function () {
    function HobbiesComponent(datasource) {
        this.datasource = datasource;
    }
    HobbiesComponent.prototype.ngOnInit = function () {
        this.hobbies = this.datasource.getHobbies();
    };
    HobbiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hobbies',
            template: __webpack_require__("./src/app/Components/hobbies/hobbies.component.html"),
            styles: [__webpack_require__("./src/app/Components/hobbies/hobbies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_datasource_service__["a" /* DatasourceService */]])
    ], HobbiesComponent);
    return HobbiesComponent;
}());



/***/ }),

/***/ "./src/app/Components/interests/interests.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/interests/interests.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  Interests  -->\n<div class=\"container\">\n\t<div class=\"row interests\">\n\t\t<div class=\"col-sm-12 sub-section-title\">\n\t\t\t<h2>\n\t\t\t\t<i class=\"fas fa-tachometer-alt icon\"></i>Interests </h2>\n\t\t</div>\n\t\t<div class=\"col-sm-10 offset-sm-1\">\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let item of interests\" >\n\t\t\t\t\t<div class=\"interest\">\n\t\t\t\t\t\t<img class=\"icon\" src=\"{{item.icon}}\" alt=\"\">\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<h3 class=\"name\">{{item.title}}</h3>\n\t\t\t\t\t\t\t<p class=\"legend\" [innerHTML]=\"item.legend\"></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> \n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/Components/interests/interests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_datasource_service__ = __webpack_require__("./src/app/Services/datasource.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterestsComponent = /** @class */ (function () {
    function InterestsComponent(datasource) {
        this.datasource = datasource;
    }
    InterestsComponent.prototype.ngOnInit = function () {
        this.interests = this.datasource.getInterests();
    };
    InterestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-interests',
            template: __webpack_require__("./src/app/Components/interests/interests.component.html"),
            styles: [__webpack_require__("./src/app/Components/interests/interests.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_datasource_service__["a" /* DatasourceService */]])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/Components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Advice Ribbon -->\r\n<div *ngIf=\"showRibbon\" class=\"ribbon\" id=\"ribbon\">\r\n\t<p class=\"ribbon-message\">{{ribbon.message}}\r\n\t\t<a class=\"ribbon-link\" href=\"javascript:return false;\" (click)=\"goToRibbonLink()\" >\r\n\t\t\t<b>Here</b>\r\n\t\t</a>\r\n\t</p>\r\n\t<a class=\"ribbon-disponse\" href=\"/\" (click)=\"showRibbon=false;\">\r\n\t\t<i class=\"far fa-times-circle \"></i>\r\n\t</a>\r\n</div>\r\n\r\n <!--  Navbar  -->\r\n <div class=\"header\">\r\n\t<nav class=\"navbar navbar-expand-lg navbar-dark justify-content-between py-4 custom-navbar\">\r\n\t\t<a class=\"navbar-brand\" href=\"/\">Miguel Ángel Campos</a>\r\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\r\n\t\t\taria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t</button>\r\n\t\t<form class=\"form-inline my-2 my-lg-0\">\r\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n\t\t\t\t<ul class=\"navbar-nav\">\r\n\t\t\t\t\t<li class=\"nav-item active\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#profile\">Profile</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item active\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#skills\">Skills</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item active\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#projects\">Projects</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item active\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#events\">Events</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item active\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"/\" data-toggle=\"modal\" data-target=\".contact-modal\">Contact</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<a class=\"btn btn-resume\" href=\"assets/docs/Miguel_CV.pdf\" (click)=\"download()\" download=\"Miguel-Resume\">Resume</a>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</nav>\r\n</div>"

/***/ }),

/***/ "./src/app/Components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_google_analytics_service__ = __webpack_require__("./src/app/Services/google-analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(analytics) {
        this.analytics = analytics;
        this.showRibbon = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.ribbon = this.getRibbon();
        this.showRibbon = true;
    };
    NavbarComponent.prototype.getRibbon = function () {
        var ri = new __WEBPACK_IMPORTED_MODULE_1__model__["c" /* Ribbon */]();
        ri.message = "Check out my Thesis post";
        ri.link = "https://www.google.com/";
        return ri;
    };
    NavbarComponent.prototype.download = function () {
        this.analytics.emitEvent("Download", "Resumen");
    };
    NavbarComponent.prototype.goToRibbonLink = function () {
        this.analytics.emitEvent("Ribbon", "Link", this.ribbon.link);
        window.open(this.ribbon.link);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/Components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/Components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_google_analytics_service__["a" /* GoogleAnalyticsService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/Components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  Profile  -->\r\n<div class=\"profile content-section\" id=\"profile\">\r\n\t<h1 class=\"section-title\" style=\"background: #0091EA\">\r\n\t\t<i class=\"far fa-user section-icon\"></i>PROFILE</h1>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row \">\r\n\t\t\t<div class=\"col-sm-5 col-xs-12 \">\r\n\t\t\t\t<img src=\"assets/image/profile-photo.png\" class=\"profile-photo elevated\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-7 col-xs-12\">\r\n\t\t\t\t<h2 class=\"greet\">\r\n\t\t\t\t\tHEY THERE!\r\n\t\t\t\t\t<i class=\"far fa-hand-spock\" style=\"margin-left: 10px;\"></i>\r\n\t\t\t\t</h2>\r\n\t\t\t\t<h2>Miguel Ángel Campos</h2>\r\n\t\t\t\t<p>Backend Developer / Software Engineer</p>\r\n\r\n\t\t\t\t<app-social-btn></app-social-btn>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n<!--  Languages  -->\r\n<div class=\"container\">\r\n\t<div class=\"row languages\">\r\n\t\t<div class=\"col-sm-12 sub-section-title\">\r\n\t\t\t<h2>\r\n\t\t\t\t<i class=\"fas fa-globe icon\"></i> Languages</h2>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6 col-xs-12\">\r\n\t\t\t<div class=\"language elevated\">\r\n\t\t\t\t<img class=\"icon\" src=\"assets/image/spain.svg\" alt=\"\">\r\n\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t<h2 class=\"name\">Spanish</h2>\r\n\t\t\t\t\t<p class=\"legend\">Native Speaker</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6 col-xs-12\">\r\n\t\t\t<div class=\"language elevated\">\r\n\t\t\t\t<img class=\"icon\" src=\"assets/image/united-kingdom.svg\" alt=\"\">\r\n\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t<h2 class=\"name\">English</h2>\r\n\t\t\t\t\t<p class=\"legend\">Intermediate Speaker</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<app-studies></app-studies>\r\n<app-interests></app-interests>\r\n<app-hobbies></app-hobbies>"

/***/ }),

/***/ "./src/app/Components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/Components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/Components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/Components/project-item/project-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/project-item/project-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n\n<div class=\"col-xs-12 col-xl-8 project\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-sm-4\" style=\"padding: 0;\">\n        <img class=\"thumbnail img-fluid img-thumbnail\" src=\"{{project.thumbnail}}\" alt=\"\">\n      </div>\n      <div class=\"col-xs-8 col-sm-8 \">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <h6 class=\"project-date\">{{date}}</h6>\n          </div>\n          <div class=\"col-6\">\n            <p class=\"project-type \" [ngClass]=\"{'project-personal': project.type ==='Personal'}\">\n              <b>#{{project.type}}</b>\n            </p>\n          </div>\n        </div>\n        <h3 class=\"project-role\">{{project.role}}</h3>\n        <h6 class=\"project-setting\">{{project.setting}}</h6>\n        <p class=\"project-description\" [innerHTML]=\"project.description\" ></p>\n\n      </div>\n    </div>\n  </div>\n  <a *ngIf=\"haveLink\" class=\"btn btn-detail\" href=\"{{project.link}}\">Read More\n    <i class=\"fas fa-angle-right icon\"></i>\n  </a>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/Components/project-item/project-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectItemComponent = /** @class */ (function () {
    function ProjectItemComponent() {
        this.date = "";
        this.haveLink = false;
    }
    ProjectItemComponent.prototype.ngOnInit = function () {
        if (this.project.current) {
            this.date = "CURRENT";
        }
        else {
            var month = this.project.date.getUTCMonth() + 1; //months from 1-12
            var year = this.project.date.getUTCFullYear();
            this.date = this.parseDate(month, year);
        }
        if (this.project.link != null && this.project.link != "" && this.project.link.length > 0) {
            this.haveLink = true;
        }
    };
    ProjectItemComponent.prototype.parseDate = function (month, year) {
        var m = "";
        if (month == 1) {
            m = "JAN";
        }
        else if (month == 2) {
            m = "FEB";
        }
        else if (month == 3) {
            m = "MAR";
        }
        else if (month == 4) {
            m = "APR";
        }
        else if (month == 5) {
            m = "MAY";
        }
        else if (month == 6) {
            m = "JUN";
        }
        else if (month == 7) {
            m = "JUL";
        }
        else if (month == 8) {
            m = "AGO";
        }
        else if (month == 9) {
            m = "SEP";
        }
        else if (month == 10) {
            m = "OCT";
        }
        else if (month == 11) {
            m = "NOV";
        }
        else if (month == 12) {
            m = "DIC";
        }
        return m + " " + String(year);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model__["b" /* Project */])
    ], ProjectItemComponent.prototype, "project", void 0);
    ProjectItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-item',
            template: __webpack_require__("./src/app/Components/project-item/project-item.component.html"),
            styles: [__webpack_require__("./src/app/Components/project-item/project-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectItemComponent);
    return ProjectItemComponent;
}());



/***/ }),

/***/ "./src/app/Components/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = ".more-pojects-btn{\r\n    text-align: right;\r\n    float: right;\r\n    \r\n    margin: 50px;\r\n    margin-top: 25px;\r\n}\r\n.more-pojects-btn > .link{\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n.more-pojects-btn > .link :hover{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n.more-pojects-btn > .icon{\r\n    margin-left: 5px;\r\n}"

/***/ }),

/***/ "./src/app/Components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  Projects  -->\r\n<div class=\"projects content-section\" id=\"projects\">\r\n\t<h1 class=\"section-title\" style=\"background: #2E7D32\">\r\n\t\t<i class=\"fas fa-code section-icon\"></i>PROJECTS</h1>\r\n\t<div class=\"container \"> \r\n\t\t<app-project-item *ngFor=\"let item of projects\" [project]=\"item\" ></app-project-item> \r\n\t\t<div *ngIf=\"showMorebtn\" class=\"row justify-content-center\">\r\n\t\t\t<div class=\"col-xs-4 more-pojects-btn\">\r\n\t\t\t\t<a [routerLink]=\"['/projects']\" class=\"link\" >Look for more projects <i class=\"far fa-arrow-alt-circle-right icon\"></i></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/Components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_datasource_service__ = __webpack_require__("./src/app/Services/datasource.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(datasource) {
        this.datasource = datasource;
        this.countLimit = -1;
        this.showMorebtn = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projects = this.datasource.getProjects();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ProjectsComponent.prototype, "countLimit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ProjectsComponent.prototype, "showMorebtn", void 0);
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/Components/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/Components/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_datasource_service__["a" /* DatasourceService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/Components/prompt/prompt.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/prompt/prompt.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  Prompt  -->\n<div class=\"prompt\">\n\t<div class=\"container \">\n\t\t<div class=\"row justify-content-center\">\n\t\t\t<h1 class=\"billboard-title\">CEO Challenge</h1>\n\t\t\t<div class=\"col-md-10 billboard\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t<img class=\"front-img\" src=\"assets/image/sao.jpg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-6\">\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/Components/prompt/prompt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PromptComponent = /** @class */ (function () {
    function PromptComponent() {
    }
    PromptComponent.prototype.ngOnInit = function () {
    };
    PromptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prompt',
            template: __webpack_require__("./src/app/Components/prompt/prompt.component.html"),
            styles: [__webpack_require__("./src/app/Components/prompt/prompt.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PromptComponent);
    return PromptComponent;
}());



/***/ }),

/***/ "./src/app/Components/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  Skills  -->\n<div class=\"skills content-section\" id=\"skills\">\n\t<h1 class=\"section-title\" style=\"background: #FF9800\">\n\t\t<i class=\"fas fa-cogs section-icon\"></i>SKILLS</h1>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-3 col-xs-12 skill\">\n\t\t\t\t<div class=\"header\">\n\t\t\t\t\t<img class=\"icon\" src=\"assets/image/coding.svg\" alt=\"\">\n\t\t\t\t\t<h4 class=\"legend\">Develop to?</h4>\n\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t<li class=\"list-elem\">Backend</li>\n\t\t\t\t\t<li class=\"list-elem\">Frontend</li>\n\t\t\t\t\t<li class=\"list-elem\">Android</li>\n\t\t\t\t\t<li class=\"list-elem\">Unity 3D</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12 skill\">\n\t\t\t\t<div class=\"header\">\n\t\t\t\t\t<img class=\"icon\" src=\"assets/image/devto.svg\" alt=\"\">\n\t\t\t\t\t<h4 class=\"legend\">Programming Languages</h4>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t<li class=\"list-elem\">Python</li>\n\t\t\t\t\t<li class=\"list-elem\">C#</li>\n\t\t\t\t\t<li class=\"list-elem\">Java</li>\n\t\t\t\t\t<li class=\"list-elem\">Typescript</li>\n\t\t\t\t\t<li class=\"list-elem\">C/C++</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12 skill\">\n\t\t\t\t<div class=\"header\">\n\t\t\t\t\t<img class=\"icon\" src=\"assets/image/exp.svg\" alt=\"\">\n\t\t\t\t\t<h4 class=\"legend\">Frameworks/Libraries</h4>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t<li class=\"list-elem\">Tensorflow</li>\n\t\t\t\t\t<li class=\"list-elem\">Numpy</li>\n\t\t\t\t\t<li class=\"list-elem\">Flask</li>\n\t\t\t\t\t<li class=\"list-elem\">ASP.NET</li>\n\t\t\t\t\t<li class=\"list-elem\">Angular</li>\n\t\t\t\t\t<li class=\"list-elem\">Bootstrap</li>\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12 skill\">\n\t\t\t\t<div class=\"header\">\n\t\t\t\t\t<img class=\"icon\" src=\"assets/image/layers.svg\" alt=\"\">\n\t\t\t\t\t<h4 class=\"legend\">Design and Edition</h4>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t<li class=\"list-elem\">3DS Max</li> \n\t\t\t\t\t<li class=\"list-elem\">Ilustrator</li>\n\t\t\t\t\t<li class=\"list-elem\">Photoshop</li>\n\t\t\t\t\t<li class=\"list-elem\">Sketchup</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<hr class=\"hr-divider\">\n\t\t<div class=\"row soft-skills\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 sub-section-title\">\n\t\t\t\t<h2>\n\t\t\t\t\t<i class=\"far fa-star icon\"></i>Soft Skills </h2>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2 col-xs-6\" *ngFor=\"let item of softskills\">\n\t\t\t\t<div class=\"soft-skill elevated\">\n\t\t\t\t\t<img class=\"icon\" src=\"{{item.icon}}\" alt=\"\">\n\t\t\t\t\t<h2 class=\"name\">{{item.title}}</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t \n\t\t\t \n\t\t \n\n\t\t \n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/Components/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_datasource_service__ = __webpack_require__("./src/app/Services/datasource.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(datasource) {
        this.datasource = datasource;
        this.softskills = this.datasource.getSoftskills();
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/Components/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/Components/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_datasource_service__["a" /* DatasourceService */]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/Components/studies/studies.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/studies/studies.component.html":
/***/ (function(module, exports) {

module.exports = "  <!--  Studies  -->\n  <div class=\"container\">\n\t\t<div class=\"row studies\">\n\t\t\t<div class=\"col-sm-12 sub-section-title\">\n\t\t\t\t<h2>\n\t\t\t\t\t<i class=\"fas fa-graduation-cap icon\"></i> Studies</h2>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"study\">\n\t\t\t\t\t\t<img class=\"icon elevated\" src=\"assets/image/university-campus.svg\" alt=\"\">\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<h2 class=\"name\">Science Bachelor</h2>\n\t\t\t\t\t\t\t<a class=\"legend\" href=\"http://cbva.edu.pa/\" target=\"_blank\">Centro Bilingüe Vista Alegre</a>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"study\">\n\t\t\t\t\t\t<img class=\"icon elevated\" src=\"assets/image/school.svg\" alt=\"\">\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<h2 class=\"name\">Systems and Computer Engineering</h2>\n\t\t\t\t\t\t\t<a class=\"legend\" href=\"http://www.utp.ac.pa/\" target=\"_blank\">Universidad Tecnológica de Panamá</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/Components/studies/studies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudiesComponent = /** @class */ (function () {
    function StudiesComponent() {
    }
    StudiesComponent.prototype.ngOnInit = function () {
    };
    StudiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-studies',
            template: __webpack_require__("./src/app/Components/studies/studies.component.html"),
            styles: [__webpack_require__("./src/app/Components/studies/studies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudiesComponent);
    return StudiesComponent;
}());



/***/ }),

/***/ "./src/app/Services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        var token = localStorage.getItem('token');
    }
    AuthService.prototype.login = function (credentials) {
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.currentUser = null;
    };
    AuthService.prototype.isLoggedIn = function () {
        return false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Services/datasource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasourceService = /** @class */ (function () {
    function DatasourceService() {
        this.loadData();
    }
    DatasourceService.prototype.getEvents = function () {
        return this.events;
    };
    DatasourceService.prototype.getHobbies = function () {
        return this.hobbies;
    };
    DatasourceService.prototype.getInterests = function () {
        return this.interests;
    };
    DatasourceService.prototype.getProjects = function () {
        return this.projects;
    };
    DatasourceService.prototype.getSoftskills = function () {
        return this.softskills;
    };
    DatasourceService.prototype.loadData = function () {
        this.loadEvents();
        this.loadHobbies();
        this.loadInterest();
        this.loadProjects();
        this.loadSoftSkills();
    };
    DatasourceService.prototype.loadEvents = function () {
        var project = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* Project */]();
        project.current = true;
        project.date = new Date();
        project.description = "Android developer in Vectrl project lead by IBM Health Corps Team, app for mosquitos data gathering by regions, and intended to work in the future to make better decition making processes in the Ministry of Health of Panama.";
        project.link = "https://www.google.com/";
        project.role = "Android Developer";
        project.setting = "Inter at IBM Health Corps";
        project.thumbnail = "assets/image/IBM.JPG";
        project.type = "Personal";
        this.events = new Array();
        this.events.push(project);
        this.events.push(project);
        this.events.push(project);
        this.events.push(project);
    };
    DatasourceService.prototype.loadHobbies = function () {
        this.hobbies = new Array();
        var i = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Interest */]();
        i.icon = "assets/image/brain.svg";
        i.legend = "My principal area of interest is AI especially <b>Deep Learning</b>.";
        i.title = "Artificial Intelligence";
        i.type = true;
        this.hobbies.push(i);
        i = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Interest */]();
        i.icon = "assets/image/startup.svg";
        i.legend = "I like challenges, so in the near future I would like to begin my own <b>startup</b>.";
        i.title = "Entrepreneurship";
        i.type = true;
        this.hobbies.push(i);
    };
    DatasourceService.prototype.loadInterest = function () {
        this.interests = new Array();
        var i = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Interest */]();
        i.icon = "assets/image/brain.svg";
        i.legend = "My principal area of interest is AI especially <b>Deep Learning</b>.";
        i.title = "Artificial Intelligence";
        i.type = true;
        this.interests.push(i);
        i = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Interest */]();
        i.icon = "assets/image/startup.svg";
        i.legend = "I like challenges, so in the near future I would like to begin my own <b>startup</b>.";
        i.title = "Entrepreneurship";
        i.type = true;
        this.interests.push(i);
    };
    DatasourceService.prototype.loadProjects = function () {
        var project = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* Project */]();
        project.current = true;
        project.date = new Date();
        project.description = "Android developer in Vectrl project lead by IBM Health Corps Team, app for mosquitos data gathering by regions, and intended to work in the future to make better decition making processes in the Ministry of Health of Panama.";
        project.link = "https://www.google.com/";
        project.role = "Android Developer";
        project.setting = "Inter at IBM Health Corps";
        project.thumbnail = "assets/image/IBM.JPG";
        project.type = "Personal";
        this.projects = new Array();
        this.projects.push(project);
        this.projects.push(project);
        this.projects.push(project);
        this.projects.push(project);
    };
    DatasourceService.prototype.loadSoftSkills = function () {
        this.softskills = new Array();
        var s = new __WEBPACK_IMPORTED_MODULE_1__model__["d" /* SoftSkills */]();
        s.icon = "assets/image/speak.svg";
        s.title = "Public Speaking";
        this.softskills.push(s);
        s = new __WEBPACK_IMPORTED_MODULE_1__model__["d" /* SoftSkills */]();
        s.icon = "assets/image/research.svg";
        s.title = "Research";
        this.softskills.push(s);
        s = new __WEBPACK_IMPORTED_MODULE_1__model__["d" /* SoftSkills */]();
        s.icon = "assets/image/creative.svg";
        s.title = "Critical Thinking";
        this.softskills.push(s);
        s = new __WEBPACK_IMPORTED_MODULE_1__model__["d" /* SoftSkills */]();
        s.icon = "assets/image/leadership.svg";
        s.title = "Leadership";
        this.softskills.push(s);
        s = new __WEBPACK_IMPORTED_MODULE_1__model__["d" /* SoftSkills */]();
        s.icon = "assets/image/network.svg";
        s.title = "Teamwork";
        this.softskills.push(s);
        s = new __WEBPACK_IMPORTED_MODULE_1__model__["d" /* SoftSkills */]();
        s.icon = "assets/image/notifications.svg";
        s.title = "Proactive";
        this.softskills.push(s);
    };
    DatasourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DatasourceService);
    return DatasourceService;
}());



/***/ }),

/***/ "./src/app/Services/google-analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleAnalyticsService = /** @class */ (function () {
    function GoogleAnalyticsService() {
    }
    GoogleAnalyticsService.prototype.emitEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    };
    GoogleAnalyticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GoogleAnalyticsService);
    return GoogleAnalyticsService;
}());



/***/ }),

/***/ "./src/app/Views/events-view/events-view.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-paper {\r\n    background-color: #382e47;\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%237c718e' fill-opacity='0.12'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\r\n    width: 100%;\r\n    height: 85px;\r\n}"

/***/ }),

/***/ "./src/app/Views/events-view/events-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-paper\">\r\n</div>\r\n<app-events></app-events>\r\n<app-footer>Cargando...</app-footer>"

/***/ }),

/***/ "./src/app/Views/events-view/events-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsViewComponent = /** @class */ (function () {
    function EventsViewComponent() {
    }
    EventsViewComponent.prototype.ngOnInit = function () {
    };
    EventsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events-view',
            template: __webpack_require__("./src/app/Views/events-view/events-view.component.html"),
            styles: [__webpack_require__("./src/app/Views/events-view/events-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsViewComponent);
    return EventsViewComponent;
}());



/***/ }),

/***/ "./src/app/Views/portfolio-view/portfolio-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Views/portfolio-view/portfolio-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\t<app-prompt></app-prompt>\r\n\t<app-projects [countLimit]=\"3\" [showMorebtn]=\"true\" ></app-projects>\r\n\t<app-events [countLimit]=\"3\" [showMorebtn]=\"true\" ></app-events>\r\n\t<app-profile></app-profile>\r\n\t<app-skills></app-skills>\r\n\t<app-contact></app-contact>\r\n\t<!-- Copyright -->\r\n\t<div class=\"copyright\">\r\n\t\t<small>&copy; Copyright 2018, Miguel Ángel Campos </small>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/Views/portfolio-view/portfolio-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioViewComponent = /** @class */ (function () {
    function PortfolioViewComponent() {
    }
    PortfolioViewComponent.prototype.ngOnInit = function () {
    };
    PortfolioViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio-view',
            template: __webpack_require__("./src/app/Views/portfolio-view/portfolio-view.component.html"),
            styles: [__webpack_require__("./src/app/Views/portfolio-view/portfolio-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioViewComponent);
    return PortfolioViewComponent;
}());



/***/ }),

/***/ "./src/app/Views/project-view/project-view.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-paper {\r\n    background-color: #382e47;\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%237c718e' fill-opacity='0.12'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\r\n    width: 100%;\r\n    height: 85px;\r\n}\r\n\r\n.article {\r\n    padding: 20px;\r\n    position: static;\r\n}\r\n\r\n.article>.title {\r\n    word-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n    -ms-hyphens: auto;\r\n    -o-hyphens: auto;\r\n    hyphens: auto;\r\n}\r\n\r\n.article>.sub-title {\r\n   color: dimgrey;\r\n}\r\n\r\n.article>.tags-list {\r\n    padding: 0;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.article>.tags-list>.tags {\r\n    display: inline-block;\r\n    background: #CFD8DC;\r\n    padding: 0 12px;\r\n    border-radius: 32px;\r\n    font-size: 11px;\r\n}\r\n\r\n.article>.content {\r\n    padding: 0;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n\r\n.article>.content>.main-content {\r\n    text-align: left;\r\n    top: 0;\r\n}\r\n\r\n.article>.content>.main-content>.thumbnail {\r\n    width: 30%;\r\n    height: auto;\r\n    float: left;\r\n    margin-right: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media (max-width: 576px) { \r\n    .article>.content>.main-content>.thumbnail {\r\n        width: 100%;\r\n        \r\n    }\r\n}\r\n\r\n.article>.content>.media {}\r\n\r\n.article>.references {}"

/***/ }),

/***/ "./src/app/Views/project-view/project-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-paper\">\n</div>\n<div class=\"container\">\n\t<div class=\"row justify-content-center\">\n\t\t<div class=\"col-xs-12 col-sm-8 article\">\n\t\t\t<h1 class=\"title\">Inter at IBM Health Corps</h1>\n\t\t\t<h2 class=\"sub-title\">Android Developer</h2>\n\n\t\t\t<ul class=\"tags-list\">\n\t\t\t\t<li class=\"tags\">#android</li>\n\t\t\t\t<li class=\"tags\">#IOS</li>\n\t\t\t\t<li class=\"tags\">#Machine Learning</li>\n\t\t\t\t<li class=\"tags\">#android</li>\n\t\t\t\t<li class=\"tags\">#IOS</li>\n\t\t\t\t<li class=\"tags\">#Machine Learning</li>\n\n\t\t\t\t<li class=\"tags\">android</li>\n\t\t\t\t<li class=\"tags\">IOS</li>\n\t\t\t\t<li class=\"tags\">Machine Learning</li>\n\t\t\t\t<li class=\"tags\">android</li>\n\t\t\t\t<li class=\"tags\">IOS</li>\n\t\t\t\t<li class=\"tags\">Machine Learning</li>\n\n\t\t\t</ul>\n\t\t\t<div class=\"content\">\n\t\t\t\t<div class=\"main-content\">\n\t\t\t\t\t<img class=\"thumbnail \" src=\"assets/image/IBM.JPG\" alt=\"\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRepublicans on the House Intelligence Committee reached an opposite conclusion Monday from the intelligence community they\n\t\t\t\t\t\toversee, announcing that Russian President Vladimir Putin was not trying to help Donald Trump win the 2016 election.\n\t\t\t\t\t\tThe Republicans also said they found no evidence that the Trump campaign colluded with Russia and that they are shutting\n\t\t\t\t\t\tdown their yearlong investigation. Their viewpoint -- which perfectly aligns with Trump's view on election meddling\n\t\t\t\t\t\t-- will be met with sharp disagreement by Democrats and is bound to inflame partisan tensions on a committee that's\n\t\t\t\t\t\tbeen beleaguered by partisanship throughout its Russia probe. Trump seized on the news Monday evening, tweeting about\n\t\t\t\t\t\tit in all capital letters.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRepublicans on the House Intelligence Committee reached an opposite conclusion Monday from the intelligence community they\n\t\t\t\t\t\toversee, announcing that Russian President Vladimir Putin was not trying to help Donald Trump win the 2016 election.\n\t\t\t\t\t\tThe Republicans also said they found no evidence that the Trump campaign colluded with Russia and that they are shutting\n\t\t\t\t\t\tdown their yearlong investigation. Their viewpoint -- which perfectly aligns with Trump's view on election meddling\n\t\t\t\t\t\t-- will be met with sharp disagreement by Democrats and is bound to inflame partisan tensions on a committee that's\n\t\t\t\t\t\tbeen beleaguered by partisanship throughout its Russia probe. Trump seized on the news Monday evening, tweeting about\n\t\t\t\t\t\tit in all capital letters. Republicans on the House Intelligence Committee reached an opposite conclusion Monday from\n\t\t\t\t\t\tthe intelligence community they oversee, announcing that Russian President Vladimir Putin was not trying to help Donald\n\t\t\t\t\t\tTrump win the 2016 election.\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Republicans also said they found no evidence that the Trump campaign colluded with Russia and that they are shutting\n\t\t\t\t\t\tdown their yearlong investigation. Their viewpoint -- which perfectly aligns with Trump's view on election meddling\n\t\t\t\t\t\t-- will be met with sharp disagreement by Democrats and is bound to inflame partisan tensions on a committee that's\n\t\t\t\t\t\tbeen beleaguered by partisanship throughout its Russia probe. Trump seized on the news Monday evening, tweeting about\n\t\t\t\t\t\tit in all capital letters. Republicans on the House Intelligence Committee reached an opposite conclusion Monday from\n\t\t\t\t\t\tthe intelligence community they oversee, announcing that Russian President Vladimir Putin was not trying to help Donald\n\t\t\t\t\t\tTrump win the 2016 election. The Republicans also said they found no evidence that the Trump campaign colluded with\n\t\t\t\t\t\tRussia and that they are shutting down their yearlong investigation. Their viewpoint -- which perfectly aligns with\n\t\t\t\t\t\tTrump's view on election meddling -- will be met with sharp disagreement by Democrats and is bound to inflame partisan\n\t\t\t\t\t\ttensions on a committee that's been beleaguered by partisanship throughout its Russia probe. Trump seized on the news\n\t\t\t\t\t\tMonday evening, tweeting about it in all capital letters.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media\">\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"references\">\n\t\t\t\t<h5>See also</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.forbes.com/sites/judystone/2016/08/27/ibm-health-corps-grant-winners-focus-on-infections-and-health-disparities/#1830422c3807\">IBM Health Corps Grant Winners Focus On Infections And Health Disparities</a></li>\n\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.forbes.com/sites/judystone/2016/08/27/ibm-health-corps-grant-winners-focus-on-infections-and-health-disparities/#1830422c3807\">IBM Health Corps Grant Winners Focus On Infections And Health Disparities</a></li>\n\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.forbes.com/sites/judystone/2016/08/27/ibm-health-corps-grant-winners-focus-on-infections-and-health-disparities/#1830422c3807\">IBM Health Corps Grant Winners Focus On Infections And Health Disparities</a></li>\n\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.forbes.com/sites/judystone/2016/08/27/ibm-health-corps-grant-winners-focus-on-infections-and-health-disparities/#1830422c3807\">IBM Health Corps Grant Winners Focus On Infections And Health Disparities</a></li>\n\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.forbes.com/sites/judystone/2016/08/27/ibm-health-corps-grant-winners-focus-on-infections-and-health-disparities/#1830422c3807\">IBM Health Corps Grant Winners Focus On Infections And Health Disparities</a></li>\n\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<app-footer>Cargando...</app-footer>"

/***/ }),

/***/ "./src/app/Views/project-view/project-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectViewComponent = /** @class */ (function () {
    function ProjectViewComponent() {
    }
    ProjectViewComponent.prototype.ngOnInit = function () {
    };
    ProjectViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-view',
            template: __webpack_require__("./src/app/Views/project-view/project-view.component.html"),
            styles: [__webpack_require__("./src/app/Views/project-view/project-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectViewComponent);
    return ProjectViewComponent;
}());



/***/ }),

/***/ "./src/app/Views/projects-view/projects-view.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-paper {\r\n    background-color: #382e47;\r\nbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%237c718e' fill-opacity='0.12'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\r\n    width: 100%;\r\n    height: 85px;\r\n}"

/***/ }),

/***/ "./src/app/Views/projects-view/projects-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-paper\">\t\n</div>\n<app-projects></app-projects>\n<app-footer>Cargando...</app-footer>"

/***/ }),

/***/ "./src/app/Views/projects-view/projects-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsViewComponent = /** @class */ (function () {
    function ProjectsViewComponent() {
    }
    ProjectsViewComponent.prototype.ngOnInit = function () {
    };
    ProjectsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects-view',
            template: __webpack_require__("./src/app/Views/projects-view/projects-view.component.html"),
            styles: [__webpack_require__("./src/app/Views/projects-view/projects-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsViewComponent);
    return ProjectsViewComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth_guard_service__ = __webpack_require__("./src/app/Auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_authorized_not_authorized_component__ = __webpack_require__("./src/app/not-authorized/not-authorized.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Views_portfolio_view_portfolio_view_component__ = __webpack_require__("./src/app/Views/portfolio-view/portfolio-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Views_projects_view_projects_view_component__ = __webpack_require__("./src/app/Views/projects-view/projects-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Views_project_view_project_view_component__ = __webpack_require__("./src/app/Views/project-view/project-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_profile_profile_component__ = __webpack_require__("./src/app/Components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Components_projects_projects_component__ = __webpack_require__("./src/app/Components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Components_prompt_prompt_component__ = __webpack_require__("./src/app/Components/prompt/prompt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Components_contact_contact_component__ = __webpack_require__("./src/app/Components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Components_navbar_navbar_component__ = __webpack_require__("./src/app/Components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Components_events_events_component__ = __webpack_require__("./src/app/Components/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Components_footer_footer_component__ = __webpack_require__("./src/app/Components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Components_hobbies_hobbies_component__ = __webpack_require__("./src/app/Components/hobbies/hobbies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Components_interests_interests_component__ = __webpack_require__("./src/app/Components/interests/interests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Components_studies_studies_component__ = __webpack_require__("./src/app/Components/studies/studies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Components_skills_skills_component__ = __webpack_require__("./src/app/Components/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Components_project_item_project_item_component__ = __webpack_require__("./src/app/Components/project-item/project-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Services_datasource_service__ = __webpack_require__("./src/app/Services/datasource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Views_events_view_events_view_component__ = __webpack_require__("./src/app/Views/events-view/events-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Services_google_analytics_service__ = __webpack_require__("./src/app/Services/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_social_btn_social_btn_component__ = __webpack_require__("./src/app/components/social-btn/social-btn.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var views = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__Views_portfolio_view_portfolio_view_component__["a" /* PortfolioViewComponent */]
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_8__Views_projects_view_projects_view_component__["a" /* ProjectsViewComponent */]
    },
    {
        path: 'events',
        component: __WEBPACK_IMPORTED_MODULE_23__Views_events_view_events_view_component__["a" /* EventsViewComponent */]
    },
    {
        path: 'project',
        component: __WEBPACK_IMPORTED_MODULE_9__Views_project_view_project_view_component__["a" /* ProjectViewComponent */]
    },
    {
        path: 'not-authorized',
        component: __WEBPACK_IMPORTED_MODULE_2__not_authorized_not_authorized_component__["a" /* NotAuthorizedComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_1__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__not_authorized_not_authorized_component__["a" /* NotAuthorizedComponent */],
                __WEBPACK_IMPORTED_MODULE_1__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Views_portfolio_view_portfolio_view_component__["a" /* PortfolioViewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Views_projects_view_projects_view_component__["a" /* ProjectsViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Views_project_view_project_view_component__["a" /* ProjectViewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__Components_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Components_prompt_prompt_component__["a" /* PromptComponent */],
                __WEBPACK_IMPORTED_MODULE_13__Components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_14__Components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__Components_events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__Components_footer_footer_component__["a" /* footerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Components_hobbies_hobbies_component__["a" /* HobbiesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__Components_interests_interests_component__["a" /* InterestsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__Components_studies_studies_component__["a" /* StudiesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__Components_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__Components_project_item_project_item_component__["a" /* ProjectItemComponent */],
                __WEBPACK_IMPORTED_MODULE_23__Views_events_view_events_view_component__["a" /* EventsViewComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_social_btn_social_btn_component__["a" /* SocialBtnComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(views),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__Auth_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__Services_datasource_service__["a" /* DatasourceService */],
                __WEBPACK_IMPORTED_MODULE_24__Services_google_analytics_service__["a" /* GoogleAnalyticsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/social-btn/social-btn.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/social-btn/social-btn.component.html":
/***/ (function(module, exports) {

module.exports = "<a (click)=\"goToSocial('linkedin')\" class=\"btn btn-outline-dark \" href=\"javascript:return false;\">\n  <i class=\"fab fa-linkedin fa-{{size}}x\"></i>\n</a>\n<a class=\"btn btn-outline-dark\" (click)=\"goToSocial('twitter')\" href=\"javascript:return false;\">\n  <i class=\"fab fa-twitter fa-{{size}}x\"></i>\n</a>\n<a class=\"btn btn-outline-dark\" (click)=\"goToSocial('github')\" href=\"javascript:return false;\">\n  <i class=\"fab fa-github fa-{{size}}x\"></i>\n</a>"

/***/ }),

/***/ "./src/app/components/social-btn/social-btn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialBtnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_google_analytics_service__ = __webpack_require__("./src/app/Services/google-analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialBtnComponent = /** @class */ (function () {
    function SocialBtnComponent(analytics) {
        this.analytics = analytics;
        this.linkedin = "https://www.linkedin.com/in/miguel-angelcampos/";
        this.github = "https://github.com/miguel3010";
        this.twitter = "https://twitter.com/Miguel_Angel_30";
        this.size = 3;
        this.analyticsZone = "profile";
    }
    SocialBtnComponent.prototype.ngOnInit = function () {
    };
    SocialBtnComponent.prototype.goToSocial = function (social) {
        if (social === "linkedin") {
            this.redirect(this.linkedin, social);
        }
        else if (social === "twitter") {
            this.redirect(this.twitter, social);
        }
        else if (social === "github") {
            this.redirect(this.github, social);
        }
    };
    SocialBtnComponent.prototype.redirect = function (url, social) {
        this.analytics.emitEvent(social, 'social-media-' + this.analyticsZone);
        window.open(url, "_blank");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SocialBtnComponent.prototype, "analyticsZone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SocialBtnComponent.prototype, "size", void 0);
    SocialBtnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-social-btn',
            template: __webpack_require__("./src/app/components/social-btn/social-btn.component.html"),
            styles: [__webpack_require__("./src/app/components/social-btn/social-btn.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_google_analytics_service__["a" /* GoogleAnalyticsService */]])
    ], SocialBtnComponent);
    return SocialBtnComponent;
}());



/***/ }),

/***/ "./src/app/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Ribbon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SoftSkills; });
var Ribbon = /** @class */ (function () {
    function Ribbon() {
    }
    return Ribbon;
}());

var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());

var Interest = /** @class */ (function () {
    function Interest() {
    }
    return Interest;
}());

var SoftSkills = /** @class */ (function () {
    function SoftSkills() {
    }
    return SoftSkills;
}());



/***/ }),

/***/ "./src/app/not-authorized/not-authorized.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-authorized/not-authorized.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-authorized works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-authorized/not-authorized.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthorizedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotAuthorizedComponent = /** @class */ (function () {
    function NotAuthorizedComponent() {
    }
    NotAuthorizedComponent.prototype.ngOnInit = function () {
    };
    NotAuthorizedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-authorized',
            template: __webpack_require__("./src/app/not-authorized/not-authorized.component.html"),
            styles: [__webpack_require__("./src/app/not-authorized/not-authorized.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotAuthorizedComponent);
    return NotAuthorizedComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map