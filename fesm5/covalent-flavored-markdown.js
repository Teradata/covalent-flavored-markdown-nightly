import { __spread, __awaiter, __generator } from 'tslib';
import { Component, Input, EventEmitter, HostBinding, Output, Directive, ViewContainerRef, Renderer2, ChangeDetectionStrategy, ComponentFactoryResolver, ChangeDetectorRef, Injector, ElementRef, ViewChild, NgModule } from '@angular/core';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { TdHighlightComponent, CovalentHighlightModule } from '@covalent/highlight';
import { scrollToAnchor, TdMarkdownComponent, TdMarkdownLoaderService, CovalentMarkdownModule } from '@covalent/markdown';
import { TdDataTableComponent, TdDataTableSortingOrder, CovalentDataTableModule } from '@covalent/core/data-table';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

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
        { type: Component, args: [{
                    selector: 'cfm-list',
                    template: "<mat-list [attr.dense]=\"dense ? true : null\">\n  <ng-template let-line let-last=\"last\" ngFor [ngForOf]=\"lines\">\n    <mat-list-item>\n      <h4 matLine>\n        {{ line.line }}\n      </h4>\n      <p *ngFor=\"let subline of line.sublines\" matLine>\n        {{ subline }}\n      </p>\n      <mat-divider *ngIf=\"!last\"></mat-divider>\n    </mat-list-item>\n  </ng-template>\n</mat-list>\n",
                    styles: [""]
                }] }
    ];
    TdFlavoredListComponent.propDecorators = {
        lines: [{ type: Input }],
        dense: [{ type: Input }]
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
        this.clicked = new EventEmitter();
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
        { type: Component, args: [{
                    template: "\n    <button mat-raised-button (click)=\"emitClick()\">\n      {{ text }}\n    </button>\n  "
                }] }
    ];
    TdFlavoredMarkdownButtonComponent.propDecorators = {
        display: [{ type: HostBinding, args: ['style.display',] }],
        text: [{ type: Input }],
        data: [{ type: Input }],
        clicked: [{ type: Output }]
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
        { type: Directive, args: [{
                    selector: '[tdFlavoredMarkdownContainer]',
                },] }
    ];
    /** @nocollapse */
    TdFlavoredMarkdownContainerDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Renderer2 }
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
        this.contentReady = new EventEmitter();
        /**
         * buttonClicked?: ITdFlavoredMarkdownButtonClickEvent
         * Event emitted when a button is clicked
         * Is an object containing text and data of button
         */
        this.buttonClicked = new EventEmitter();
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
            scrollToAnchor(this._elementRef.nativeElement, this._anchor, false);
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
    function (markdown) {
        var _this = this;
        if (markdown && markdown.trim().length > 0) {
            this.container.clear();
            markdown = markdown.replace(/^(\s|\t)*\n+/g, '').replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
            // Split markdown by line characters
            /** @type {?} */
            var lines = markdown.split('\n');
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
            markdown = __spread(lines, ['', '']).join('\n');
            markdown = this._replaceCodeBlocks(markdown);
            markdown = this._replaceCheckbox(markdown);
            markdown = this._replaceTables(markdown);
            markdown = this._replaceLists(markdown);
            markdown = this._replaceButtons(markdown);
            /** @type {?} */
            var keys = Object.keys(this._components);
            // need to sort the placeholders in order of encounter in markdown content
            keys.sort((/**
             * @param {?} compA
             * @param {?} compB
             * @return {?}
             */
            function (compA, compB) {
                return markdown.indexOf(compA) > markdown.indexOf(compB) ? 1 : -1;
            }));
            this._render(markdown, keys[0], keys);
            // TODO: timeout required since resizing of html elements occurs which causes a change in the scroll position
            setTimeout((/**
             * @return {?}
             */
            function () { return scrollToAnchor(_this._elementRef.nativeElement, _this._anchor, false); }), 250);
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
    function (markdown, key, keys) {
        if (!markdown) {
            return;
        }
        if (key && markdown.indexOf(key) > -1) {
            /** @type {?} */
            var markdownParts = markdown.split(key);
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
                .resolveComponentFactory(TdMarkdownComponent)
                .create(this._injector);
            contentRef.instance.content = markdown;
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
        return this._replaceComponent(markdown, MatCheckbox, checkboxRegExp, (/**
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
        return this._replaceComponent(markdown, TdHighlightComponent, codeBlockRegExp, (/**
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
        return this._replaceComponent(markdown, TdDataTableComponent, tableRgx, (/**
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
                    return direction * (event.order === TdDataTableSortingOrder.Descending ? -1 : 1);
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
        { type: Component, args: [{
                    selector: 'td-flavored-markdown',
                    template: "<div tdFlavoredMarkdownContainer>\n  <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host ::ng-deep td-markdown:first-of-type>div:first-of-type>h1:first-of-type,:host ::ng-deep td-markdown:first-of-type>div:first-of-type>h2:first-of-type{margin-top:0}:host ::ng-deep mat-checkbox,:host ::ng-deep td-data-table{display:block}:host ::ng-deep mat-checkbox:last-of-type,:host ::ng-deep td-data-table,:host ::ng-deep td-highlight{margin-bottom:16px}:host ::ng-deep :not(pre)>code{font-family:Menlo,Monaco,\"Andale Mono\",\"lucida console\",\"Courier New\",monospace;padding-left:2px;padding-right:2px}:host ::ng-deep td-highlight{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between}"]
                }] }
    ];
    /** @nocollapse */
    TdFlavoredMarkdownComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: Injector },
        { type: ElementRef }
    ]; };
    TdFlavoredMarkdownComponent.propDecorators = {
        content: [{ type: Input, args: ['content',] }],
        simpleLineBreaks: [{ type: Input, args: ['simpleLineBreaks',] }],
        hostedUrl: [{ type: Input, args: ['hostedUrl',] }],
        anchor: [{ type: Input, args: ['anchor',] }],
        copyCodeToClipboard: [{ type: Input }],
        copyCodeTooltips: [{ type: Input }],
        contentReady: [{ type: Output }],
        buttonClicked: [{ type: Output }],
        container: [{ type: ViewChild, args: [TdFlavoredMarkdownContainerDirective, { static: true },] }]
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
        this.contentReady = new EventEmitter();
        /**
         * loadFailed: Error
         * Emitted when loading of markdown file fails.
         */
        this.loadFailed = new EventEmitter();
        this.buttonClicked = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'td-flavored-markdown-loader',
                    template: "<mat-progress-bar\n  [ngClass]=\"'delay'\"\n  *ngIf=\"loading\"\n  mode=\"indeterminate\"\n  color=\"accent\"\n  class=\"sticky\"\n></mat-progress-bar>\n<td-flavored-markdown\n  *ngIf=\"!loading\"\n  [content]=\"content\"\n  [hostedUrl]=\"url\"\n  [anchor]=\"anchor\"\n  [copyCodeToClipboard]=\"copyCodeToClipboard\"\n  [copyCodeTooltips]=\"copyCodeTooltips\"\n  (contentReady)=\"contentReady.emit()\"\n  (buttonClicked)=\"buttonClicked.emit($event)\"\n></td-flavored-markdown>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block}.sticky{position:absolute;top:0}.delay{-webkit-animation:.6s delayAnimation;animation:.6s delayAnimation}@-webkit-keyframes delayAnimation{0%,99%{opacity:0}100%{opacity:1}}@keyframes delayAnimation{0%,99%{opacity:0}100%{opacity:1}}"]
                }] }
    ];
    /** @nocollapse */
    TdFlavoredMarkdownLoaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TdMarkdownLoaderService }
    ]; };
    TdFlavoredMarkdownLoaderComponent.propDecorators = {
        url: [{ type: Input }],
        httpOptions: [{ type: Input }],
        anchor: [{ type: Input }],
        copyCodeToClipboard: [{ type: Input }],
        copyCodeTooltips: [{ type: Input }],
        contentReady: [{ type: Output }],
        loadFailed: [{ type: Output }],
        buttonClicked: [{ type: Output }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatCheckboxModule,
                        MatListModule,
                        MatProgressBarModule,
                        CovalentDataTableModule,
                        CovalentHighlightModule,
                        CovalentMarkdownModule,
                        MatButtonModule,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentFlavoredMarkdownModule, TdFlavoredMarkdownButtonComponent, TdFlavoredMarkdownComponent, TdFlavoredMarkdownContainerDirective, TdFlavoredMarkdownLoaderComponent, TdFlavoredListComponent as ɵa };
//# sourceMappingURL=covalent-flavored-markdown.js.map
