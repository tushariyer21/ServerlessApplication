(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<head>\n    <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<style>\n  body,div {\n  background-color: grey;\n  }\n  #imgright {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  z-index: 1;\n  padding: 0px;\n  margin: 0px;\n  }\n  h1 {\n  color: #006633;\n  text-shadow: 2px 2px #000000;\n  border: 5px;\n  border-style: solid;\n  border-color: #006633;\n  box-shadow: 5px 5px;\n  }\n  .custom {\n  color: #006633;\n  text-shadow: 2px 2px #000000;\n  border: 5px;\n  border-style: solid;\n  border-color: #006633;\n  box-shadow: 5px 5px;\n  }\n  label {\n  color: #006633;\n  }\n  td {\n  color: #006633;\n  }\n</style>\n</head>\n\n\n          <div (onChange)=\"handleRoutes($event)\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <router-outlet></router-outlet>\n          </div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- \nNeal MacDonald G01106606\nYashwant Bezawada G01152906\nTushar Iyer G01118318\n\nMain survey page for HW 3\n -->\n\n<head>\n  <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n  <style>\n    body,\n    div {\n      background-color: grey;\n    }\n\n    #imgright {\n      position: fixed;\n      bottom: 0px;\n      right: 0px;\n      z-index: 1;\n      padding: 0px;\n      margin: 0px;\n    }\n\n    h1 {\n      color: #006633;\n      text-shadow: 2px 2px #000000;\n      border: 5px;\n      border-style: solid;\n      border-color: #006633;\n      box-shadow: 5px 5px;\n    }\n\n    .custom {\n      color: #006633;\n      text-shadow: 2px 2px #000000;\n      border: 5px;\n      border-style: solid;\n      border-color: #006633;\n      box-shadow: 5px 5px;\n    }\n\n    label {\n      color: #006633;\n    }\n\n    td {\n      color: #006633;\n    }\n\n    tr {\n      color: #006633;\n    }\n\n    th {\n      color: #006633;\n    }\n\n    p-table {\n      background-color: \"grey\";\n    }\n  </style>\n</head>\n\n<div class=\"w3-container\" [hidden]=\"submitted\">\n  <h1 [hidden]=showstudents>Survey1</h1>\n  <h1 [hidden]=!showstudents>Survey's Completed</h1>\n  <form #surveyForm=\"ngForm\" autocomplete=\"on\" (ngSubmit)=\"onSubmit(surveyForm.value)\" [hidden]=showstudents>\n    <div class=\"w3-container\">\n      <div class=\"w3-card-4\">\n        <div>\n          <label for=\"StudentId\"><i class=\"w3-xxlarge fa fa-user\"></i>StudentID</label>\n          <input type=\"text\" id=\"StudentId\" required [(ngModel)]=\"model.StudentId\" name=\"StudentId\"\n            #StudentId=\"ngModel\">\n          <div>\n            <div [hidden]=\"StudentId.valid || StudentId.pristine\" style=\"margin-top: 15px; padding: 6px;\">\n              StudentID is required\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <label for=\"name\">Username</label>\n          <input type=\"text\" id=\"name\" required [(ngModel)]=\"model.name\" name=\"name\"\n            #name=\"ngModel\">\n          <div>\n            <div [hidden]=\"name.valid || name.pristine\" style=\"margin-top: 15px; padding: 6px;\"\n              >\n              First Name is required\n            </div>\n          </div>\n        </div>\n\n\n        <div>\n          <label for=\"address\">Street Address</label>\n          <input type=\"text\" id=\"address\" required [(ngModel)]=\"model.address\" name=\"address\"\n            #address=\"ngModel\">\n          <div>\n            <div [hidden]=\"address.valid || address.pristine\" style=\"margin-top: 15px; padding: 6px;\"\n              >\n              Address is required\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <label for=\"city\">City</label>\n          <input type=\"text\" id=\"city\" required [(ngModel)]=\"model.city\" name=\"city\"\n            #city=\"ngModel\">\n          <div>\n            <div [hidden]=\"city.valid || city.pristine\" style=\"margin-top: 15px; padding: 6px;\">\n              City is required\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <label for=\"state\">State</label>\n          <input type=\"text\" id=\"state\" required [(ngModel)]=\"model.state\" name=\"state\"\n            #state=\"ngModel\">\n          <div>\n            <div [hidden]=\"state.valid || state.pristine\" style=\"margin-top: 15px; padding: 6px;\"\n              >\n              State is required\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <label for=\"zipcode\">Zip</label>\n          <input  type=\"text\" id=\"zipcode\"\n            required [(ngModel)]=\"model.zipcode\" name=\"zipcode\" #zipcode=\"ngModel\">\n          <div>\n            <div [hidden]=\"zipcode.valid || zipcode.pristine\" style=\"margin-top: 15px; padding: 6px;\"\n              >\n              Zip is required\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <label for=\"phone\"><i\n              class=\"w3-xxlarge fa fa-phone\"></i>Telephone</label>\n          <input type=\"text\" id=\"phone\" placeholder=\"1234567890\" required\n            [(ngModel)]=\"model.phone\" name=\"phone\" #phone=\"ngModel\">\n          <div>\n            <div [hidden]=\"phone.valid || phone.pristine\" style=\"margin-top: 15px; padding: 6px;\"\n              >\n              Phone is required\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <label for=\"email\"><i\n              class=\"w3-xxlarge fa fa-envelope-o\"></i>E-mail</label>\n          <input type=\"text\" id=\"email\" placeholder=\"test@google.com\" required\n            [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\">\n          <div>\n            <div [hidden]=\"email.valid || email.pristine\" style=\"margin-top: 15px; padding: 6px;\"\n              >\n              email is required\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <label for=\"homePage\">URL</label>\n          <input type=\"text\" id=\"homePage\" placeholder=\"http://www.google.com\" required\n            [(ngModel)]=\"model.url\" name=\"url\" #homePage=\"ngModel\">\n          <div>\n            <div [hidden]=\"homePage.valid || homePage.pristine\" style=\"margin-top: 15px; padding: 6px;\"\n              >\n              URL is required\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <label for=\"dateprovided\">Date of Survey:</label>\n          <input type=\"text\" id=\"dateprovided\" placeholder=\"mm/dd/yyyy\" required\n            [(ngModel)]=\"model.date\" name=\"date\" #dateprovided=\"ngModel\">\n          <div>\n            <div [hidden]=\"dateprovided.valid || dateprovided.pristine\" style=\"margin-top: 15px; padding: 6px;\"\n              >\n              Date is required\n            </div>\n          </div>\n        </div>\n\n        <div >\n          <label for=\"likeCampus\">Most Liked thing:: </label>\n          <div>\n            <input type=\"checkbox\" name=\"likeCampus\" (change)=\"validateCheck('Students')\"> Students <br />\n            <input type=\"checkbox\" name=\"likeCampus\" (change)=\"validateCheck('Location')\"> Location <br />\n            <input type=\"checkbox\" name=\"likeCampus\" (change)=\"validateCheck('Campus')\"> Campus <br />\n            <input type=\"checkbox\" name=\"likeCampus\" (change)=\"validateCheck('Atmosphere')\"> Atmosphere <br />\n            <input type=\"checkbox\" name=\"likeCampus\" (change)=\"validateCheck('Dorm Rooms')\"> Dorm Rooms <br />\n            <input type=\"checkbox\" name=\"likeCampus\" (change)=\"validateCheck('Sports')\"> Sports <br />\n          </div>\n        </div>\n\n        <div >\n          <label for=\"interestCampus\">Interested:</label> <br />\n          <input type=\"radio\" [(ngModel)]=\"model.interestCampus\" name=\"interestCampus\" id=\"interestCampus\"\n            value=\"Friends\"> Friends <br />\n          <input type=\"radio\" [(ngModel)]=\"model.interestCampus\" name=\"interestCampus\" id=\"interestCampus\"\n            value=\"Television\"> Television <br />\n          <input type=\"radio\" [(ngModel)]=\"model.interestCampus\" name=\"interestCampus\" id=\"interestCampus\"\n            value=\"Internet\"> Internet <br />\n          <input type=\"radio\" [(ngModel)]=\"model.interestCampus\" name=\"interestCampus\" id=\"interestCampus\"\n            value=\"Other\"> Other <br />\n        </div>\n        <div >\n\n         <label>Graduation Month/Year:</label>\n\n\n          <input [(ngModel)]=\"model.graduateMonth\" name=\"graduateMonth\" #graduateMonth=\"ngModel\" id=\"list\"\n            list=\"months\">\n          <datalist id=\"months\">\n            <option value=\"January\">\n            <option value=\"February\">\n            <option value=\"March\">\n            <option value=\"April\">\n            <option value=\"May\">\n            <option value=\"June\">\n            <option value=\"July\">\n            <option value=\"August\">\n            <option value=\"September\">\n            <option value=\"October\">\n            <option value=\"November\">\n            <option value=\"December\">\n          </datalist>\n          <input type=\"text\" [(ngModel)]=\"model.graduateYear\" name=\"graduateYear\" #graduateYear=\"ngModel\"\n            placeholder=\"Year - [required]\">\n        </div>\n        <div >\n          <label for=\"recommend\">Do you recommend this school to other prospective students:</label>\n          <select  id=\"choice\" required [(ngModel)]=\"model.choice\" name=\"choice\">\n            <option *ngFor=\"let r of recommend\" [value]=\"r\">{{r}}</option>\n          </select>\n        </div>\n\n        <div >\n          <label for=\"comments\"><i class=\"w3-xxlarge fa fa-pencil\"></i>Additional Comments:</label>\n          <textarea [(ngModel)]=\"model.comments\" #comments=\"ngModel\" width=\"30%\" height=\"30%\" name=\"comments\"\n            id=\"comments\" class=\"w3-input w3-border w3-round w3-hover-green\"\n            placeholder=\"Additional Comments - [required]\" rows=\"2\" cols=\"20\" required></textarea>\n        </div>\n\n        <div >\n          <label for=\"mean\">Data</label>\n          <input type=\"text\" id=\"mean\" placeholder=\"Data - [Required]\" required [(ngModel)]=\"model.mean\" name=\"mean\"\n            #mean=\"ngModel\">\n        </div>\n\n        <button type=\"button\" class=\"btn btn-default \" (click)=\"getStudents('/list')\">Show All\n          Students</button>\n        <button type=\"button\" class=\"btn btn-default \" (click)=\"reset(surveyForm)\">Reset</button>\n        <button type=\"submit\" class=\"btn btn-success \">Submit</button>\n        <!-- //[disabled]=\"!surveyForm.form.valid\" -->\n      </div>\n    </div>\n  </form>\n</div>\n<div [hidden]=\"!submitted\">\n  <div class=\"row\">\n    <h1 class=\"col-xs-9\">{{ winnerresponse }}</h1>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-xs-3\">Standard Deviation</div>\n    <div class=\"col-xs-9\">{{ sd }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-3\">Mean</div>\n    <div class=\"col-xs-9\">{{ avg }}</div>\n  </div>\n  <br>\n  <button type=\"button\" class=\"btn btn-default \" (click)=\"getStudents('/list')\">Show All Students</button>\n</div>\n\n<div [hidden]=!showstudents>\n  <p-table [value]=\"newStudents\" autoLayout=\"true\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th *ngFor=\"let col of cols\">\n          {{col.header}}\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-student>\n      <tr>\n        <td *ngFor=\"let col of cols\">\n          {{student[col.field]}}\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <button *ngIf=\"showstudents\" type=\"button\" class=\"btn btn-default \" (click)=\"goToIndex('/survey')\">Index Page</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule, routedComponents */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function () { return routedComponents; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/survey/survey.component.ts");
            var routes = [
                {
                    path: 'survey',
                    component: _survey_survey_component__WEBPACK_IMPORTED_MODULE_3__["SurveyComponent"]
                },
                {
                    path: '',
                    component: _survey_survey_component__WEBPACK_IMPORTED_MODULE_3__["SurveyComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            var routedComponents = [_survey_survey_component__WEBPACK_IMPORTED_MODULE_3__["SurveyComponent"]];
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".color-overlay {\n  background: grey;\n  filter: alpha(opacity=50);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.panel {\n  opacity: 1;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  border: 1.5px solid darkblue;\n}\nh1 {\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\nh2 {\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\np {\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n.tabs:hover {\n  cursor: pointer;\n}\na {\n  border: 1.5px solid blue;\n  color: blue;\n  padding: 1em 1.5em;\n  text-decoration: none;\n  margin-right: -1px;\n  line-height: 50px;\n  font-size: 18px;\n  border-radius: 5px;\n}\na:hover {\n  cursor:pointer;\n  background: blue;\n  color: white;\n}\na:active {\n  cursor:pointer;\n  background: blue;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0FBQ1Q7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLHNFQUFzRTtBQUN4RTtBQUVBO0VBQ0Usc0VBQXNFO0FBQ3hFO0FBRUE7RUFDRSxzRUFBc0U7QUFDeEU7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFJQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5wYW5lbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCBkYXJrYmx1ZTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xufVxuXG4udGFiczpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5cbmEge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsdWU7XG4gIGNvbG9yOiBibHVlO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmE6aG92ZXIge1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5hOmFjdGl2ZSB7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.homeTabSelected = false;
                    this.surveyTabSelected = false;
                    this.title = 'survey';
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent.prototype.ngOnChanges = function () {
                };
                AppComponent.prototype.handleRoutes = function (e) {
                    var index = e.index;
                    var link;
                    switch (index) {
                        case 1:
                            link = ['/survey'];
                            break;
                    }
                    this.router.navigate(link);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/survey/survey.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
            /* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
            /* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
            // angular imports
            // Component and Service imports
            // 3rd party imports
            var appRoutes = [
                { path: 'survey', component: _survey_survey_component__WEBPACK_IMPORTED_MODULE_7__["SurveyComponent"] }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _survey_survey_component__WEBPACK_IMPORTED_MODULE_7__["SurveyComponent"],
                    ],
                    imports: [
                        primeng_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                        primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"],
                        primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/shared/student.model.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/student.model.ts ***!
          \*****************************************/
        /*! exports provided: Student */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function () { return Student; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Student = /** @class */ (function () {
                function Student(StudentId, firstname, lastname, address, city, state, zip, phone, email, homePage, dateprovided, likeCampus, interest, comments, graduateMonth, graduateYear, mean, recommend) {
                    this.StudentId = StudentId;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.address = address;
                    this.city = city;
                    this.state = state;
                    this.zip = zip;
                    this.phone = phone;
                    this.email = email;
                    this.homePage = homePage;
                    this.dateprovided = dateprovided;
                    this.likeCampus = likeCampus;
                    this.interest = interest;
                    this.comments = comments;
                    this.graduateMonth = graduateMonth;
                    this.graduateYear = graduateYear;
                    this.mean = mean;
                    this.recommend = recommend;
                }
                return Student;
            }());
            /***/ 
        }),
        /***/ "./src/app/survey/survey.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/survey/survey.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9zdXJ2ZXkuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/survey/survey.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/survey/survey.component.ts ***!
          \********************************************/
        /*! exports provided: SurveyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function () { return SurveyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _shared_student_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/student.model */ "./src/app/shared/student.model.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SurveyComponent = /** @class */ (function () {
                function SurveyComponent(http, router) {
                    this.http = http;
                    this.router = router;
                    this.sendSelectedTab = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    this.avg = 0.0;
                    this.sd = 0.0;
                    this.winnerresponse = "Thanks for completing the survey";
                    this.slist = [];
                    this.recommend = ['Very Likely', 'Likely', 'Unlikely'];
                    this.liked = [];
                    this.newStudents = [];
                    this.studentcheck = false;
                    this.locationcheck = false;
                    this.campuscheck = false;
                    this.atmospherecheck = false;
                    this.dormcheck = false;
                    this.sportscheck = false;
                    this.submitted = false;
                    this.showstudents = false;
                    this.showstudent = false;
                    this.model = new _shared_student_model__WEBPACK_IMPORTED_MODULE_1__["Student"]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
                }
                SurveyComponent.prototype.ngOnInit = function () {
                    this.cols = [
                        { field: 'StudentId', header: 'StudentID' },
                        { field: 'name', header: 'Userame' },
                        { field: 'address', header: 'Address' },
                        { field: 'city', header: 'City' },
                        { field: 'state', header: 'State' },
                        { field: 'zipcode', header: 'Zipcode' },
                        { field: 'phone', header: 'Telephone' },
                        { field: 'email', header: 'E-mail' },
                        { field: 'date', header: 'Date of Survey' },
                        { field: 'likeCampus', header: 'Liked Most' },
                        { field: 'interestCampus', header: 'Interested' },
                        { field: 'choice', header: 'Recommendation' },
                        { field: 'comments', header: 'Comments' },
                        { field: 'graduateMonth', header: 'Month' },
                        { field: 'graduateYear', header: 'Year' }
                    ];
                };
                SurveyComponent.prototype.onSubmit = function (student) {
                    var _this = this;
                    this.submitted = true;
                    this.loadingsubmit = true;
                    student.likeCampus = this.liked.toString();
                    console.log(JSON.stringify(student));
                    var httpOpt = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                    this.http.post("https://6e40k1nt0f.execute-api.us-east-1.amazonaws.com/prod/student", JSON.stringify(student), httpOpt)
                        .subscribe(function (status) {
                        console.log(JSON.stringify(status));
                        _this.loadingsubmit = false;
                    });
                    var string = student.mean;
                    var array;
                    if (string.length === 0) {
                        array = new Array();
                    }
                    else {
                        array = string.replace(/, +/g, ",").split(",").map(Number);
                    }
                    var sum = 0;
                    for (var i = 0; i < array.length; i++) {
                        sum += array[i];
                    }
                    var avg = sum / array.length;
                    var s = Math.sqrt(array.map(function (x) { return Math.pow(x - avg, 2); }).reduce(function (a, b) { return a + b; }) / array.length);
                    student.mean = avg.toString();
                    this.avg = avg;
                    this.sd = s;
                    if (this.avg > 90.0) {
                        this.winnerresponse = "Congratulations! You won 2 free tickets to the cinema";
                    }
                };
                SurveyComponent.prototype.getStudents = function (url) {
                    var _this = this;
                    this.loadingstudents = true;
                    this.http.get("https://6e40k1nt0f.execute-api.us-east-1.amazonaws.com/prod/student")
                        .subscribe(function (newData) {
                        _this.students = newData;
                        console.log(_this.students);
                        _this.students.surveys.forEach(function (studentInArray) {
                            var personObj = {};
                            Object.keys(studentInArray).forEach(function (keyOfObject) {
                                var value = studentInArray[keyOfObject];
                                personObj[keyOfObject] = value;
                            });
                            _this.newStudents.push(personObj);
                        });
                    });
                    this.loadingstudents = false;
                    this.showstudents = true;
                };
                SurveyComponent.prototype.goToIndex = function (url) {
                    this.homeTabSelected = true;
                    this.router.navigate([url]);
                };
                SurveyComponent.prototype.reset = function (surveyForm) {
                    surveyForm.reset();
                };
                SurveyComponent.prototype.validateCheck = function (check) {
                    if (this.studentcheck === false && check === 'Students') {
                        this.studentcheck = true;
                        this.liked.push(check);
                    }
                    else if (this.studentcheck === true && check === 'Students') {
                        this.studentcheck = false;
                        this.liked = this.liked.filter(function (item) { return item !== check; });
                    }
                    if (this.locationcheck === false && check === 'Location') {
                        this.locationcheck = true;
                        this.liked.push(check);
                    }
                    else if (this.locationcheck === true && check === 'Location') {
                        this.locationcheck = false;
                        this.liked = this.liked.filter(function (item) { return item !== check; });
                    }
                    if (this.campuscheck === false && check === 'Campus') {
                        this.campuscheck = true;
                        this.liked.push(check);
                    }
                    else if (this.campuscheck === true && check === 'Campus') {
                        this.campuscheck = false;
                        this.liked = this.liked.filter(function (item) { return item !== check; });
                    }
                    if (this.atmospherecheck === false && check === 'Atmosphere') {
                        this.atmospherecheck = true;
                        this.liked.push(check);
                    }
                    else if (this.atmospherecheck === true && check === 'Atmosphere') {
                        this.atmospherecheck = false;
                        this.liked = this.liked.filter(function (item) { return item !== check; });
                    }
                    if (this.dormcheck === false && check === 'Dorm Rooms') {
                        this.dormcheck = true;
                        this.liked.push(check);
                    }
                    else if (this.dormcheck === true && check === 'Dorm Rooms') {
                        this.dormcheck = false;
                        this.liked = this.liked.filter(function (item) { return item !== check; });
                    }
                    if (this.sportscheck === false && check === 'Sports') {
                        this.sportscheck = true;
                        this.liked.push(check);
                    }
                    else if (this.sportscheck === true && check === 'Sports') {
                        this.sportscheck = false;
                        this.liked = this.liked.filter(function (item) { return item !== check; });
                    }
                    this.model.likeCampus = this.liked.toString();
                };
                return SurveyComponent;
            }());
            SurveyComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
            ], SurveyComponent.prototype, "sendSelectedTab", void 0);
            SurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
                    selector: 'app-survey',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./survey.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./survey.component.css */ "./src/app/survey/survey.component.css")).default]
                })
            ], SurveyComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Tushar Iyer\swe642_assignment4\swe642_assignment4\swe642-assignment4-angular\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map