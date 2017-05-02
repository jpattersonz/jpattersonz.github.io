webpackJsonp([2,4],{

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 188;


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(217);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animations__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spotify_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumComponent = (function () {
    function AlbumComponent(route, spotify) {
        var _this = this;
        this.route = route;
        this.spotify = spotify;
        this.album = null;
        this.tracks = [];
        this.audio = new Audio();
        this.play = function (track) {
            _this.audio.pause();
            if (_this.playing != track) {
                _this.audio.src = track.preview_url;
                _this.audio.play();
                _this.playing = track;
            }
            else {
                _this.audio.src = '';
                _this.playing = null;
            }
        };
        this.albumArtists = function () {
            return !_this.album ? '' : _this.album.artists.map(function (a) { return a.name; }).join(", ");
        };
        this.albumLength = function () {
            return _this.timeString(_this.tracks.reduce(function (sum, x) { return sum + x.duration_ms; }, 0));
        };
        this.trackLength = function (track) {
            return _this.timeString(track.duration_ms);
        };
        this.timeString = function (ms) {
            var minutes = Math.round((ms / (1000 * 60)) % 60);
            var hours = Math.round((ms / (1000 * 60 * 60)) % 24);
            return hours <= 0 ? "" : (hours + " hour" + (hours > 1 ? "s" : "") + ", ") + minutes + " minute" + (minutes > 1 ? "s" : "");
        };
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p["id"];
            _this.spotify.getAlbum(_this.id).subscribe(function (x) {
                _this.album = x;
                while (_this.tracks.length > 0)
                    _this.tracks.pop();
                (_a = _this.tracks).push.apply(_a, x.tracks.items);
                var _a;
            });
        });
    };
    return AlbumComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], AlbumComponent.prototype, "id", void 0);
AlbumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-album',
        template: __webpack_require__(278),
        styles: [__webpack_require__(273)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': "" },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__spotify_service__["a" /* SpotifyService */]) === "function" && _b || Object])
], AlbumComponent);

var _a, _b;
//# sourceMappingURL=album.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../node_modules/@types/spotify-api/index.d.ts" />


var AppComponent = (function () {
    function AppComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.title = 'we sorta like music';
        this.back = function () {
            console.log("route", _this.route);
            console.log("router", _this.router);
        };
        this.routeUrl = function () { return _this.router.routerState.snapshot.url; };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(279),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spotify_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__album_album_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__results_results_component__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'album/:id', component: __WEBPACK_IMPORTED_MODULE_11__album_album_component__["a" /* AlbumComponent */] },
    { path: 'results/:query', component: __WEBPACK_IMPORTED_MODULE_12__results_results_component__["a" /* ResultsComponent */], data: { title: 'Search Results' } },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */], },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_11__album_album_component__["a" /* AlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_12__results_results_component__["a" /* ResultsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__spotify_service__["a" /* SpotifyService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_animations__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spotify_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsComponent = (function () {
    function ResultsComponent(route, spotify) {
        var _this = this;
        this.route = route;
        this.spotify = spotify;
        this.albums = [];
        this.index = 0;
        this.showing = 3; // TODO: responsive design, switch to 1
        this.visible = [];
        this.move = function (step) {
            _this.index += step;
            _this.fix();
        };
        this.fix = function () {
            while (_this.visible.length > 0)
                _this.visible.pop();
            __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].from(_this.albums).skip(_this.index).take(_this.showing).subscribe(function (x) { return _this.visible.push(x); });
        };
        this.fetch = function (show) {
            //return Observable.from(this.albums).skip(this.index).take(show).subscribe(x => this.visible.push(x));
            return _this.albums.slice(_this.index, _this.index + show);
        };
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.query = p["query"];
            _this.spotify.search(_this.query).subscribe(function (x) {
                while (_this.albums.length > 0)
                    _this.albums.pop();
                (_a = _this.albums).push.apply(_a, x.albums.items);
                _this.index = 0;
                _this.fix();
                var _a;
            });
        });
    };
    return ResultsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], ResultsComponent.prototype, "query", void 0);
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__(280),
        styles: [__webpack_require__(275)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': "" },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__spotify_service__["a" /* SpotifyService */]) === "function" && _b || Object])
], ResultsComponent);

var _a, _b;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_animations__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SearchComponent = (function () {
    function SearchComponent() {
    }
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__(281),
        styles: [__webpack_require__(276)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': "" },
    })
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".playing {\r\n    background-color: lightblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "h1 {\r\n    margin: 10px;\r\n}\r\n\r\nh1, span {\r\n    color: white;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".hide {\r\n    display: none;\r\n}\r\n\r\n.carouselnav {\r\n    background-color: transparent;\r\n}\r\n\r\n.carouselnav img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nh3 {\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".search-container {\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.search {\r\n    padding: 10px;\r\n    box-shadow: 1px 1px 3px 0px rgba(5, 6, 6, 0.1);\r\n    border-radius: 10px;\r\n}\r\n.search input {\r\n    /*width: 400px;*/\r\n}\r\n\r\n.search-button {\r\n    background-color: transparent;\r\n    background-image: url(" + __webpack_require__(568) + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.mat-button, .mat-icon-button, .mat-raised-button {\r\n    color: #6a7073 !important;\r\n}\r\n\r\n.mat-input-wrapper {\r\n    margin: 5px !important;\r\n    padding-bottom: 0px !important;\r\n}\r\n\r\np {\r\n    font-weight: lighter;\r\n    margin-bottom: 80px;\r\n}\r\n\r\nh1, p {\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\n  <div fxFlex fxHide fxShow.gt-sm fxLayout=\"column\" fxLayoutAlign=\"start center\">\n    <img [src]=\"album?.images[0]?.url\" />\n  </div>\n  <div fxFlex fxLayout=\"column\" style=\"height: 100%;\">\n    <md-card style=\"height: 100%;\">\n      <md-card-title>{{album?.name}} - {{albumArtists(album)}}</md-card-title>\n      <md-card-subtitle>{{albumLength(album)}}</md-card-subtitle>\n      <md-list style=\"height: 100%; overflow: auto;\">\n        <md-list-item *ngFor=\"let track of tracks\" (click)=\"play(track)\" style=\"cursor: pointer\" [ngClass]=\"{ playing: playing == track }\">\n          <md-icon md-list-icon>play_arrow</md-icon>\n          <h4 md-line>{{track.name}}</h4>\n          <p md-line>{{trackLength(track)}}</p>\n        </md-list-item>\n      </md-list>\n    </md-card>\n  </div>\n</div>"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<div fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\n  <div class=\"title\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between start\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" routerLink=\"/\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n        <img src=\"./assets/music.png\" />\n      </div>\n      <div fxLayout=\"column\" fxLayoutAlign=\"start end\">\n        <h1 color=\"primary\">{{title}}</h1>\n      </div>\n    </div>\n    <div>\n      <button md-button (click)=\"back()\" [routerLink]=\"['../']\" [ngClass]=\"{ hide: routeUrl() == '/' }\">\n        <img src=\"./assets/back arrow.png\" style=\"margin-bottom: 5px;\"/>\n        <span>back to search</span>\n      </button>\n    </div>\n  </div>\n  <div fxLayout=\"column\" style=\"position: relative; overflow: hidden;\">\n    <router-outlet style=\"display: none;\"></router-outlet>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" style=\"visibility: hidden;\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <img src=\"./assets/music.png\" />\n      <h1 color=\"primary\">{{title}}</h1>\n    </div>\n    <button md-button><img src=\"./assets/back arrow.png\" />back to search</button>\n  </div>\n</div>"

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<div fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\n  <div fxFlex=\"30\">\n    <h3>Click on an item to view more details.</h3>\n  </div>\n  <div fxFlex=\"35\" fxLayout=\"row\" style=\"overflow: hidden; position: relative;\">\n    <div fxLayout=\"row\">\n      <div fxHide.lt-sm *ngFor=\"let album of fetch(3)\" [routerLink]=\"['/album', album.id]\" style=\"margin:10px;\">\n        <img [src]=\"album.images[0].url\" />\n      </div>\n      <div fxLayout=\"row\" fxHide.gt-sm *ngFor=\"let album of fetch(1)\" [routerLink]=\"['/album', album.id]\" style=\"margin:10px;\">\n        <img [src]=\"album.images[0].url\" style=\"width: 100%; height: 100%;\" />\n      </div>\n    </div>\n    <div style=\"position:absolute; left: 2%; height:100%;\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <button md-fab color=\"primary\" (click)=\"move(-1)\" class=\"carouselnav\" [ngClass]=\"{ hide: index == 0 }\">\n        <img src=\"../../assets/carousel left.png\" />\n      </button>\n    </div>\n    <div style=\"position:absolute; right: 2%; height:100%;\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <button md-fab color=\"primary\" (click)=\"move(1)\" class=\"carouselnav\" [ngClass]=\"{ hide: index + showing >= albums.length }\">\n        <img src=\"../../assets/carousel right.png\" />\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"text-align: center;\">\n      <h1>Search for your favorite music and have fun!</h1>\n      <p>Enter an artist below and click search to discover great information about your favorite music.</p>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"search-container light-grey\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"search whiteish\">\n          <img src=\"../../assets/search icon.png\" />\n          <md-input-container>\n            <input #searchInput mdInput placeholder=\"Ex. nickelback, odesza, kid rock\" value=\"\">\n          </md-input-container>\n          <!--<input class=\"mat-input-element\" #searchInput placeholder=\"Ex. nickelback, odesza, kid rock\" value=\"\">-->\n          <div fxHide.lt-sm>\n            <button type=\"submit\" md-raised-button class=\"search-button grey2\" [routerLink]=\"['/results', searchInput.value]\">\n              SEARCH\n            </button>\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" fxHide.gt-sm md-raised-button class=\"search-button grey2\" [routerLink]=\"['/results', searchInput.value]\">\n        SEARCH\n      </button>\n    </form>\n  </div>"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(189);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;

function routerTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ position: 'relative', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ position: 'relative', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ left: '100%' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* animate */])('0.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ left: '0%' }))
        ]),
    ]);
}
//# sourceMappingURL=app.animations.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../node_modules/@types/spotify-api/index.d.ts" />


var SpotifyService = (function () {
    function SpotifyService(http) {
        var _this = this;
        this.http = http;
        this.search = function (query) {
            return _this.http.get('https://api.spotify.com/v1/search?q=' + query.split(',').map(function (x) { return '"' + x.trim() + '"'; }).join(" OR ") + '&type=album', {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                    'Accept': 'application/json'
                })
            })
                .map(function (response) { return response.json(); });
        }; // TODO: follow the paging
        this.getAlbum = function (id) {
            return _this.http.get('https://api.spotify.com/v1/albums/' + id, {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                    'Accept': 'application/json'
                })
            })
                .map(function (response) { return response.json(); });
        }; // TODO: follow the paging
    }
    return SpotifyService;
}());
SpotifyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SpotifyService);

var _a;
//# sourceMappingURL=spotify.service.js.map

/***/ })

},[570]);
//# sourceMappingURL=main.bundle.js.map