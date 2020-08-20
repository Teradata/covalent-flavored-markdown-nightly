(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/checkbox'), require('@covalent/highlight'), require('@covalent/markdown'), require('@covalent/core/data-table'), require('@angular/common'), require('@angular/material/list'), require('@angular/material/progress-bar'), require('@angular/material/button')) :
    typeof define === 'function' && define.amd ? define('@covalent/flavored-markdown', ['exports', '@angular/core', '@angular/material/checkbox', '@covalent/highlight', '@covalent/markdown', '@covalent/core/data-table', '@angular/common', '@angular/material/list', '@angular/material/progress-bar', '@angular/material/button'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent['flavored-markdown'] = {}), global.ng.core, global.ng.material.checkbox, global.covalent.highlight, global.covalent.markdown, global.covalent.core['data-table'], global.ng.common, global.ng.material.list, global.ng.material.progressBar, global.ng.material.button));
}(this, (function (exports, core, checkbox, highlight, markdown, dataTable, common, list, progressBar, button) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IFlavoredListItem() { }
    if (false) {
        /** @type {?} */
        IFlavoredListItem.prototype.line;
        /** @type {?|undefined} */
        IFlavoredListItem.prototype.sublines;
    }
    var TdFlavoredListComponent = /** @class */ (function () {
        function TdFlavoredListComponent() {
            this.dense = false;
        }
        TdFlavoredListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cfm-list',
                        template: "<mat-list [attr.dense]=\"dense ? true : null\">\n  <ng-template let-line let-last=\"last\" ngFor [ngForOf]=\"lines\">\n    <mat-list-item>\n      <h4 matLine>\n        {{ line.line }}\n      </h4>\n      <p *ngFor=\"let subline of line.sublines\" matLine>\n        {{ subline }}\n      </p>\n      <mat-divider *ngIf=\"!last\"></mat-divider>\n    </mat-list-item>\n  </ng-template>\n</mat-list>\n",
                        styles: [""]
                    }] }
        ];
        TdFlavoredListComponent.propDecorators = {
            lines: [{ type: core.Input }],
            dense: [{ type: core.Input }]
        };
        return TdFlavoredListComponent;
    }());
    if (false) {
        /** @type {?} */
        TdFlavoredListComponent.prototype.lines;
        /** @type {?} */
        TdFlavoredListComponent.prototype.dense;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdFlavoredMarkdownButtonClickEvent() { }
    if (false) {
        /** @type {?} */
        ITdFlavoredMarkdownButtonClickEvent.prototype.text;
        /** @type {?} */
        ITdFlavoredMarkdownButtonClickEvent.prototype.data;
    }
    var TdFlavoredMarkdownButtonComponent = /** @class */ (function () {
        function TdFlavoredMarkdownButtonComponent() {
            this.display = 'inline-block';
            this.text = '';
            this.data = '';
            this.clicked = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        TdFlavoredMarkdownButtonComponent.prototype.emitClick = /**
         * @return {?}
         */
        function () {
            this.clicked.emit({ text: this.text, data: this.data });
        };
        TdFlavoredMarkdownButtonComponent.decorators = [
            { type: core.Component, args: [{
                        template: "\n    <button mat-raised-button (click)=\"emitClick()\">\n      {{ text }}\n    </button>\n  "
                    }] }
        ];
        TdFlavoredMarkdownButtonComponent.propDecorators = {
            display: [{ type: core.HostBinding, args: ['style.display',] }],
            text: [{ type: core.Input }],
            data: [{ type: core.Input }],
            clicked: [{ type: core.Output }]
        };
        return TdFlavoredMarkdownButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        TdFlavoredMarkdownButtonComponent.prototype.display;
        /** @type {?} */
        TdFlavoredMarkdownButtonComponent.prototype.text;
        /** @type {?} */
        TdFlavoredMarkdownButtonComponent.prototype.data;
        /** @type {?} */
        TdFlavoredMarkdownButtonComponent.prototype.clicked;
    }
    var TdFlavoredMarkdownContainerDirective = /** @class */ (function () {
        function TdFlavoredMarkdownContainerDirective(viewContainerRef, _renderer) {
            this.viewContainerRef = viewContainerRef;
            this._renderer = _renderer;
        }
        /**
         * @return {?}
         */
        TdFlavoredMarkdownContainerDirective.prototype.clear = /**
         * @return {?}
         */
        function () {
            this._renderer.setProperty(this.viewContainerRef.element.nativeElement, 'innerHTML', '');
            this.viewContainerRef.clear();
        };
        TdFlavoredMarkdownContainerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdFlavoredMarkdownContainer]',
                    },] }
        ];
        /** @nocollapse */
        TdFlavoredMarkdownContainerDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: core.Renderer2 }
        ]; };
        return TdFlavoredMarkdownContainerDirective;
    }());
    if (false) {
        /** @type {?} */
        TdFlavoredMarkdownContainerDirective.prototype.viewContainerRef;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownContainerDirective.prototype._renderer;
    }
    var TdFlavoredMarkdownComponent = /** @class */ (function () {
        function TdFlavoredMarkdownComponent(_componentFactoryResolver, _renderer, _changeDetectorRef, _injector, _elementRef) {
            this._componentFactoryResolver = _componentFactoryResolver;
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._injector = _injector;
            this._elementRef = _elementRef;
            this._simpleLineBreaks = false;
            this._components = {};
            this._viewInit = false;
            /**
             * copyCodeToClipboard?: boolean
             *
             * Display copy button on code snippets to copy code to clipboard.
             *
             */
            this.copyCodeToClipboard = false;
            /**
             * copyCodeTooltips?: ICopyCodeTooltips
             *
             * Tooltips for copy button to copy and upon copying.
             */
            this.copyCodeTooltips = {};
            /**
             * contentReady?: function
             * Event emitted after the markdown content rendering is finished.
             */
            this.contentReady = new core.EventEmitter();
            /**
             * buttonClicked?: ITdFlavoredMarkdownButtonClickEvent
             * Event emitted when a button is clicked
             * Is an object containing text and data of button
             */
            this.buttonClicked = new core.EventEmitter();
        }
        Object.defineProperty(TdFlavoredMarkdownComponent.prototype, "content", {
            /**
             * content?: string
             *
             * Markdown format content to be parsed as material/covalent markup.
             *
             * e.g. README.md content.
             */
            set: /**
             * content?: string
             *
             * Markdown format content to be parsed as material/covalent markup.
             *
             * e.g. README.md content.
             * @param {?} content
             * @return {?}
             */
            function (content) {
                this._content = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFlavoredMarkdownComponent.prototype, "simpleLineBreaks", {
            /**
             * simpleLineBreaks?: string
             *
             * Sets whether newline characters inside paragraphs and spans are parsed as <br/>.
             * Defaults to false.
             */
            set: /**
             * simpleLineBreaks?: string
             *
             * Sets whether newline characters inside paragraphs and spans are parsed as <br/>.
             * Defaults to false.
             * @param {?} simpleLineBreaks
             * @return {?}
             */
            function (simpleLineBreaks) {
                this._simpleLineBreaks = simpleLineBreaks;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFlavoredMarkdownComponent.prototype, "hostedUrl", {
            /**
             * hostedUrl?: string
             *
             * If markdown contains relative paths, this is required to generate correct urls
             *
             */
            set: /**
             * hostedUrl?: string
             *
             * If markdown contains relative paths, this is required to generate correct urls
             *
             * @param {?} hostedUrl
             * @return {?}
             */
            function (hostedUrl) {
                this._hostedUrl = hostedUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFlavoredMarkdownComponent.prototype, "anchor", {
            /**
             * anchor?: string
             *
             * Anchor to jump to
             *
             */
            set: /**
             * anchor?: string
             *
             * Anchor to jump to
             *
             * @param {?} anchor
             * @return {?}
             */
            function (anchor) {
                this._anchor = anchor;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            // only anchor changed
            if (changes.anchor && !changes.content && !changes.simpleLineBreaks && !changes.hostedUrl) {
                markdown.scrollToAnchor(this._elementRef.nativeElement, this._anchor, false);
            }
            else {
                this.refresh();
            }
        };
        /**
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._content) {
                this._loadContent(((/** @type {?} */ (this.container.viewContainerRef.element.nativeElement))).textContent);
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this._viewInit = true;
                    _this._changeDetectorRef.markForCheck();
                }));
            }
        };
        /**
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype.refresh = /**
         * @return {?}
         */
        function () {
            if (this._content) {
                this._loadContent(this._content);
            }
            else if (this._viewInit) {
                this._loadContent(((/** @type {?} */ (this.container.viewContainerRef.element.nativeElement))).textContent);
            }
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype._loadContent = /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        function (markdown$1) {
            var _this = this;
            if (markdown$1 && markdown$1.trim().length > 0) {
                this.container.clear();
                markdown$1 = markdown$1.replace(/^(\s|\t)*\n+/g, '').replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
                // Split markdown by line characters
                /** @type {?} */
                var lines = markdown$1.split('\n');
                // check how much indentation is used by the first actual markdown line
                /** @type {?} */
                var firstLineWhitespace = lines[0].match(/^(\s|\t)*/)[0];
                // Remove all indentation spaces so markdown can be parsed correctly
                /** @type {?} */
                var startingWhitespaceRegex_1 = new RegExp('^' + firstLineWhitespace);
                lines = lines.map((/**
                 * @param {?} line
                 * @return {?}
                 */
                function (line) {
                    return line.replace(startingWhitespaceRegex_1, '');
                }));
                // Join lines again with line characters
                markdown$1 = __spread(lines, ['', '']).join('\n');
                markdown$1 = this._replaceCodeBlocks(markdown$1);
                markdown$1 = this._replaceCheckbox(markdown$1);
                markdown$1 = this._replaceTables(markdown$1);
                markdown$1 = this._replaceLists(markdown$1);
                markdown$1 = this._replaceButtons(markdown$1);
                /** @type {?} */
                var keys = Object.keys(this._components);
                // need to sort the placeholders in order of encounter in markdown content
                keys.sort((/**
                 * @param {?} compA
                 * @param {?} compB
                 * @return {?}
                 */
                function (compA, compB) {
                    return markdown$1.indexOf(compA) > markdown$1.indexOf(compB) ? 1 : -1;
                }));
                this._render(markdown$1, keys[0], keys);
                // TODO: timeout required since resizing of html elements occurs which causes a change in the scroll position
                setTimeout((/**
                 * @return {?}
                 */
                function () { return markdown.scrollToAnchor(_this._elementRef.nativeElement, _this._anchor, false); }), 250);
                this.contentReady.emit();
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this._changeDetectorRef.markForCheck();
                }));
            }
        };
        /**
         * @private
         * @param {?} markdown
         * @param {?} key
         * @param {?} keys
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype._render = /**
         * @private
         * @param {?} markdown
         * @param {?} key
         * @param {?} keys
         * @return {?}
         */
        function (markdown$1, key, keys) {
            if (!markdown$1) {
                return;
            }
            if (key && markdown$1.indexOf(key) > -1) {
                /** @type {?} */
                var markdownParts = markdown$1.split(key);
                keys.shift();
                this._render(markdownParts[0], undefined, undefined);
                this.container.viewContainerRef.insert(this._components[key].hostView, this.container.viewContainerRef.length);
                this._components[key] = undefined;
                delete this._components[key];
                this._render(markdownParts[1], keys[0], keys);
            }
            else {
                /** @type {?} */
                var contentRef = this._componentFactoryResolver
                    .resolveComponentFactory(markdown.TdMarkdownComponent)
                    .create(this._injector);
                contentRef.instance.content = markdown$1;
                contentRef.instance.hostedUrl = this._hostedUrl;
                contentRef.instance.simpleLineBreaks = this._simpleLineBreaks;
                contentRef.instance.refresh();
                this.container.viewContainerRef.insert(contentRef.hostView, this.container.viewContainerRef.length);
            }
        };
        /**
         * @private
         * @template T
         * @param {?} markdown
         * @param {?} type
         * @param {?} regExp
         * @param {?} replacerFunc
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype._replaceComponent = /**
         * @private
         * @template T
         * @param {?} markdown
         * @param {?} type
         * @param {?} regExp
         * @param {?} replacerFunc
         * @return {?}
         */
        function (markdown, type, regExp, replacerFunc) {
            var _this = this;
            /** @type {?} */
            var componentIndex = 0;
            return markdown.replace(regExp, (/**
             * @param {...?} args
             * @return {?}
             */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                /** @type {?} */
                var componentFactory = _this._componentFactoryResolver.resolveComponentFactory(type);
                /** @type {?} */
                var componentRef = componentFactory.create(_this._injector);
                replacerFunc.apply(void 0, __spread([componentRef], args));
                /** @type {?} */
                var key = '[' + componentFactory.selector + '-placeholder-' + componentIndex++ + ']';
                _this._components[key] = componentRef;
                return key;
            }));
        };
        /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype._replaceCheckbox = /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        function (markdown) {
            var _this = this;
            /** @type {?} */
            var checkboxRegExp = /(?:^|\n)- \[(x| )\](.*)/gi;
            return this._replaceComponent(markdown, checkbox.MatCheckbox, checkboxRegExp, (/**
             * @param {?} componentRef
             * @param {?} match
             * @param {?} checked
             * @param {?} label
             * @return {?}
             */
            function (componentRef, match, checked, label) {
                componentRef.instance.checked = !!checked.trim();
                componentRef.instance.disabled = true;
                componentRef.instance.labelPosition = 'after';
                _this._renderer.setProperty(((/** @type {?} */ (componentRef.instance._elementRef.nativeElement))).getElementsByClassName('mat-checkbox-label')[0], 'innerHTML', label);
            }));
        };
        /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype._replaceButtons = /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        function (markdown) {
            var _this = this;
            /** @type {?} */
            var buttonRegExp = /\[([^\[]+)\](\(#data=(.*)\))/i;
            /** @type {?} */
            var globalButtonRegExp = new RegExp(buttonRegExp.source, buttonRegExp.flags + 'g');
            return this._replaceComponent(markdown, TdFlavoredMarkdownButtonComponent, globalButtonRegExp, (/**
             * @param {?} componentRef
             * @param {?} match
             * @return {?}
             */
            function (componentRef, match) {
                /** @type {?} */
                var matches = buttonRegExp.exec(match);
                /** @type {?} */
                var text = matches[1];
                /** @type {?} */
                var data = matches[3];
                componentRef.instance.text = text;
                componentRef.instance.data = data;
                componentRef.instance.clicked.subscribe((/**
                 * @param {?} clickEvent
                 * @return {?}
                 */
                function (clickEvent) {
                    return _this.buttonClicked.emit(clickEvent);
                }));
            }));
        };
        /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype._replaceCodeBlocks = /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        function (markdown) {
            var _this = this;
            /** @type {?} */
            var codeBlockRegExp = /(?:^|\n)```(.*)\n([\s\S]*?)\n```/g;
            return this._replaceComponent(markdown, highlight.TdHighlightComponent, codeBlockRegExp, (/**
             * @param {?} componentRef
             * @param {?} match
             * @param {?} language
             * @param {?} codeblock
             * @return {?}
             */
            function (componentRef, match, language, codeblock) {
                if (language) {
                    componentRef.instance.lang = language;
                }
                componentRef.instance.copyCodeToClipboard = _this.copyCodeToClipboard;
                componentRef.instance.copyCodeTooltips = _this.copyCodeTooltips;
                componentRef.instance.content = codeblock;
            }));
        };
        /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype._replaceTables = /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        function (markdown) {
            /** @type {?} */
            var tableRgx = /^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;
            return this._replaceComponent(markdown, dataTable.TdDataTableComponent, tableRgx, (/**
             * @param {?} componentRef
             * @param {?} match
             * @return {?}
             */
            function (componentRef, match) {
                /** @type {?} */
                var dataTableLines = match.replace(/(\s|\t)*\n+(\s|\t)*$/g, '').split('\n');
                /** @type {?} */
                var columns = dataTableLines[0]
                    .split('|')
                    .filter((/**
                 * @param {?} col
                 * @return {?}
                 */
                function (col) {
                    return col;
                }))
                    .map((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) {
                    return s.trim();
                }));
                /** @type {?} */
                var alignment = dataTableLines[1]
                    .split('|')
                    .filter((/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) {
                    return v;
                }))
                    .map((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) {
                    return s.trim();
                }));
                componentRef.instance.columns = columns.map((/**
                 * @param {?} col
                 * @param {?} index
                 * @return {?}
                 */
                function (col, index) {
                    /** @type {?} */
                    var widths = alignment[index].split('---');
                    /** @type {?} */
                    var min = parseInt(widths[0], 10);
                    /** @type {?} */
                    var max = parseInt(widths[1], 10);
                    /** @type {?} */
                    var width = { min: min, max: max };
                    if (isNaN(min) && isNaN(max)) {
                        width = undefined;
                    }
                    else if (isNaN(max)) {
                        width.max = undefined;
                    }
                    else if (isNaN(min)) {
                        width.min = undefined;
                    }
                    return {
                        label: col,
                        name: col.toLowerCase().trim(),
                        numeric: /^--*[ \t]*:[ \t]*$/.test(alignment[index]),
                        width: width,
                    };
                }));
                /** @type {?} */
                var data = [];
                var _loop_1 = function (i) {
                    /** @type {?} */
                    var rowSplit = dataTableLines[i]
                        .split('|')
                        .filter((/**
                     * @param {?} cell
                     * @return {?}
                     */
                    function (cell) {
                        return cell;
                    }))
                        .map((/**
                     * @param {?} s
                     * @return {?}
                     */
                    function (s) {
                        return s.trim();
                    }));
                    /** @type {?} */
                    var row = {};
                    columns.forEach((/**
                     * @param {?} col
                     * @param {?} index
                     * @return {?}
                     */
                    function (col, index) {
                        /** @type {?} */
                        var rowSplitCell = rowSplit[index];
                        if (rowSplitCell) {
                            row[col.toLowerCase().trim()] = rowSplitCell.replace(/`(.*)`/, (/**
                             * @param {?} m
                             * @param {?} value
                             * @return {?}
                             */
                            function (m, value) {
                                return value;
                            }));
                        }
                    }));
                    data.push(row);
                };
                for (var i = 2; i < dataTableLines.length; i++) {
                    _loop_1(i);
                }
                componentRef.instance.data = data;
                componentRef.instance.sortable = true;
                componentRef.instance.sortChange.subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    componentRef.instance.data.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) {
                        /** @type {?} */
                        var compA = a[event.name];
                        /** @type {?} */
                        var compB = b[event.name];
                        /** @type {?} */
                        var direction = 0;
                        if (!Number.isNaN(Number.parseFloat(compA)) && !Number.isNaN(Number.parseFloat(compB))) {
                            direction = Number.parseFloat(compA) - Number.parseFloat(compB);
                        }
                        else {
                            if (compA < compB) {
                                direction = -1;
                            }
                            else if (compA > compB) {
                                direction = 1;
                            }
                        }
                        return direction * (event.order === dataTable.TdDataTableSortingOrder.Descending ? -1 : 1);
                    }));
                    componentRef.instance.refresh();
                }));
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    componentRef.instance.refresh();
                }));
            }));
        };
        /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        TdFlavoredMarkdownComponent.prototype._replaceLists = /**
         * @private
         * @param {?} markdown
         * @return {?}
         */
        function (markdown) {
            /** @type {?} */
            var listRegExp = /(?:^|\n)(( *\+)[ |\t](.*)\n)+/g;
            return this._replaceComponent(markdown, TdFlavoredListComponent, listRegExp, (/**
             * @param {?} componentRef
             * @param {?} match
             * @return {?}
             */
            function (componentRef, match) {
                /** @type {?} */
                var lineTexts = match.split(new RegExp('\\n {' + (match.indexOf('+') - 1).toString() + '}\\+[ |\\t]'));
                lineTexts.shift();
                /** @type {?} */
                var lines = [];
                lineTexts.forEach((/**
                 * @param {?} text
                 * @param {?} index
                 * @return {?}
                 */
                function (text, index) {
                    /** @type {?} */
                    var sublineTexts = text.split(/\n *\+ /);
                    lines.push({
                        line: sublineTexts.shift(),
                        sublines: sublineTexts.map((/**
                         * @param {?} subline
                         * @return {?}
                         */
                        function (subline) {
                            return subline.trim();
                        })),
                    });
                }));
                componentRef.instance.lines = lines;
            }));
        };
        TdFlavoredMarkdownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-flavored-markdown',
                        template: "<div tdFlavoredMarkdownContainer>\n  <ng-content></ng-content>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host ::ng-deep td-markdown:first-of-type>div:first-of-type>h1:first-of-type,:host ::ng-deep td-markdown:first-of-type>div:first-of-type>h2:first-of-type{margin-top:0}:host ::ng-deep mat-checkbox,:host ::ng-deep td-data-table{display:block}:host ::ng-deep mat-checkbox:last-of-type,:host ::ng-deep td-data-table,:host ::ng-deep td-highlight{margin-bottom:16px}:host ::ng-deep :not(pre)>code{font-family:Menlo,Monaco,\"Andale Mono\",\"lucida console\",\"Courier New\",monospace;padding-left:2px;padding-right:2px}:host ::ng-deep td-highlight{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between}"]
                    }] }
        ];
        /** @nocollapse */
        TdFlavoredMarkdownComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: core.Injector },
            { type: core.ElementRef }
        ]; };
        TdFlavoredMarkdownComponent.propDecorators = {
            content: [{ type: core.Input, args: ['content',] }],
            simpleLineBreaks: [{ type: core.Input, args: ['simpleLineBreaks',] }],
            hostedUrl: [{ type: core.Input, args: ['hostedUrl',] }],
            anchor: [{ type: core.Input, args: ['anchor',] }],
            copyCodeToClipboard: [{ type: core.Input }],
            copyCodeTooltips: [{ type: core.Input }],
            contentReady: [{ type: core.Output }],
            buttonClicked: [{ type: core.Output }],
            container: [{ type: core.ViewChild, args: [TdFlavoredMarkdownContainerDirective, { static: true },] }]
        };
        return TdFlavoredMarkdownComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._content;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._simpleLineBreaks;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._hostedUrl;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._anchor;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._components;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._viewInit;
        /**
         * copyCodeToClipboard?: boolean
         *
         * Display copy button on code snippets to copy code to clipboard.
         *
         * @type {?}
         */
        TdFlavoredMarkdownComponent.prototype.copyCodeToClipboard;
        /**
         * copyCodeTooltips?: ICopyCodeTooltips
         *
         * Tooltips for copy button to copy and upon copying.
         * @type {?}
         */
        TdFlavoredMarkdownComponent.prototype.copyCodeTooltips;
        /**
         * contentReady?: function
         * Event emitted after the markdown content rendering is finished.
         * @type {?}
         */
        TdFlavoredMarkdownComponent.prototype.contentReady;
        /**
         * buttonClicked?: ITdFlavoredMarkdownButtonClickEvent
         * Event emitted when a button is clicked
         * Is an object containing text and data of button
         * @type {?}
         */
        TdFlavoredMarkdownComponent.prototype.buttonClicked;
        /** @type {?} */
        TdFlavoredMarkdownComponent.prototype.container;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._injector;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: make a td-markdown-loader component
    var TdFlavoredMarkdownLoaderComponent = /** @class */ (function () {
        function TdFlavoredMarkdownLoaderComponent(_changeDetectorRef, _markdownUrlLoaderService) {
            this._changeDetectorRef = _changeDetectorRef;
            this._markdownUrlLoaderService = _markdownUrlLoaderService;
            /**
             * copyCodeToClipboard?: boolean
             *
             * Display copy button on code snippets to copy code to clipboard.
             *
             */
            this.copyCodeToClipboard = false;
            /**
             * copyCodeTooltips?: ICopyCodeTooltips
             *
             * Tooltips for copy button to copy and upon copying.
             */
            this.copyCodeTooltips = {};
            /**
             * contentReady: void
             * Emitted when markdown rendering is finished.
             */
            this.contentReady = new core.EventEmitter();
            /**
             * loadFailed: Error
             * Emitted when loading of markdown file fails.
             */
            this.loadFailed = new core.EventEmitter();
            this.buttonClicked = new core.EventEmitter();
            this.loading = true;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        TdFlavoredMarkdownLoaderComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.url || changes.httpOptions) {
                this.loadMarkdown();
            }
        };
        /**
         * @return {?}
         */
        TdFlavoredMarkdownLoaderComponent.prototype.loadMarkdown = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.loading = true;
                            this._changeDetectorRef.markForCheck();
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, 4, 5]);
                            _a = this;
                            return [4 /*yield*/, this._markdownUrlLoaderService.load(this.url, this.httpOptions)];
                        case 2:
                            _a.content = _b.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _b.sent();
                            this.loadFailed.emit(error_1);
                            return [3 /*break*/, 5];
                        case 4:
                            this.loading = false;
                            this._changeDetectorRef.markForCheck();
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        TdFlavoredMarkdownLoaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-flavored-markdown-loader',
                        template: "<mat-progress-bar\n  [ngClass]=\"'delay'\"\n  *ngIf=\"loading\"\n  mode=\"indeterminate\"\n  color=\"accent\"\n  class=\"sticky\"\n></mat-progress-bar>\n<td-flavored-markdown\n  *ngIf=\"!loading\"\n  [content]=\"content\"\n  [hostedUrl]=\"url\"\n  [anchor]=\"anchor\"\n  [copyCodeToClipboard]=\"copyCodeToClipboard\"\n  [copyCodeTooltips]=\"copyCodeTooltips\"\n  (contentReady)=\"contentReady.emit()\"\n  (buttonClicked)=\"buttonClicked.emit($event)\"\n></td-flavored-markdown>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block}.sticky{position:absolute;top:0}.delay{-webkit-animation:.6s delayAnimation;animation:.6s delayAnimation}@-webkit-keyframes delayAnimation{0%,99%{opacity:0}100%{opacity:1}}@keyframes delayAnimation{0%,99%{opacity:0}100%{opacity:1}}"]
                    }] }
        ];
        /** @nocollapse */
        TdFlavoredMarkdownLoaderComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: markdown.TdMarkdownLoaderService }
        ]; };
        TdFlavoredMarkdownLoaderComponent.propDecorators = {
            url: [{ type: core.Input }],
            httpOptions: [{ type: core.Input }],
            anchor: [{ type: core.Input }],
            copyCodeToClipboard: [{ type: core.Input }],
            copyCodeTooltips: [{ type: core.Input }],
            contentReady: [{ type: core.Output }],
            loadFailed: [{ type: core.Output }],
            buttonClicked: [{ type: core.Output }]
        };
        return TdFlavoredMarkdownLoaderComponent;
    }());
    if (false) {
        /**
         * url: string
         * The url of the markdown file.
         * @type {?}
         */
        TdFlavoredMarkdownLoaderComponent.prototype.url;
        /**
         * httpOptions: object
         * HTTP options that can be part of the request.
         * @type {?}
         */
        TdFlavoredMarkdownLoaderComponent.prototype.httpOptions;
        /**
         * anchor: string
         * Anchor to jump to.
         * @type {?}
         */
        TdFlavoredMarkdownLoaderComponent.prototype.anchor;
        /**
         * copyCodeToClipboard?: boolean
         *
         * Display copy button on code snippets to copy code to clipboard.
         *
         * @type {?}
         */
        TdFlavoredMarkdownLoaderComponent.prototype.copyCodeToClipboard;
        /**
         * copyCodeTooltips?: ICopyCodeTooltips
         *
         * Tooltips for copy button to copy and upon copying.
         * @type {?}
         */
        TdFlavoredMarkdownLoaderComponent.prototype.copyCodeTooltips;
        /**
         * contentReady: void
         * Emitted when markdown rendering is finished.
         * @type {?}
         */
        TdFlavoredMarkdownLoaderComponent.prototype.contentReady;
        /**
         * loadFailed: Error
         * Emitted when loading of markdown file fails.
         * @type {?}
         */
        TdFlavoredMarkdownLoaderComponent.prototype.loadFailed;
        /** @type {?} */
        TdFlavoredMarkdownLoaderComponent.prototype.buttonClicked;
        /** @type {?} */
        TdFlavoredMarkdownLoaderComponent.prototype.content;
        /** @type {?} */
        TdFlavoredMarkdownLoaderComponent.prototype.loading;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownLoaderComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdFlavoredMarkdownLoaderComponent.prototype._markdownUrlLoaderService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentFlavoredMarkdownModule = /** @class */ (function () {
        function CovalentFlavoredMarkdownModule() {
        }
        CovalentFlavoredMarkdownModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            checkbox.MatCheckboxModule,
                            list.MatListModule,
                            progressBar.MatProgressBarModule,
                            dataTable.CovalentDataTableModule,
                            highlight.CovalentHighlightModule,
                            markdown.CovalentMarkdownModule,
                            button.MatButtonModule,
                        ],
                        declarations: [
                            TdFlavoredListComponent,
                            TdFlavoredMarkdownComponent,
                            TdFlavoredMarkdownContainerDirective,
                            TdFlavoredMarkdownLoaderComponent,
                            TdFlavoredMarkdownButtonComponent,
                        ],
                        exports: [TdFlavoredMarkdownComponent, TdFlavoredMarkdownLoaderComponent],
                    },] }
        ];
        return CovalentFlavoredMarkdownModule;
    }());

    exports.CovalentFlavoredMarkdownModule = CovalentFlavoredMarkdownModule;
    exports.TdFlavoredMarkdownButtonComponent = TdFlavoredMarkdownButtonComponent;
    exports.TdFlavoredMarkdownComponent = TdFlavoredMarkdownComponent;
    exports.TdFlavoredMarkdownContainerDirective = TdFlavoredMarkdownContainerDirective;
    exports.TdFlavoredMarkdownLoaderComponent = TdFlavoredMarkdownLoaderComponent;
    exports.ɵa = TdFlavoredListComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-flavored-markdown.umd.js.map
