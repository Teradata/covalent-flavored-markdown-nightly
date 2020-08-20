/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
import { Component, Directive, Input, Renderer2, ChangeDetectorRef, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, Injector, ViewChild, ChangeDetectionStrategy, ElementRef, HostBinding, } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { TdFlavoredListComponent } from './cfm-list/cfm-list.component';
import { TdHighlightComponent } from '@covalent/highlight';
import { TdMarkdownComponent, scrollToAnchor } from '@covalent/markdown';
import { TdDataTableComponent, TdDataTableSortingOrder, } from '@covalent/core/data-table';
/**
 * @record
 */
export function ITdFlavoredMarkdownButtonClickEvent() { }
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
export { TdFlavoredMarkdownButtonComponent };
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
export { TdFlavoredMarkdownContainerDirective };
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
export { TdFlavoredMarkdownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdm9yZWQtbWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2ZsYXZvcmVkLW1hcmtkb3duLyIsInNvdXJjZXMiOlsiZmxhdm9yZWQtbWFya2Rvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBRVQsS0FBSyxFQUNMLFNBQVMsRUFHVCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFFBQVEsRUFFUixTQUFTLEVBQ1QsdUJBQXVCLEVBR3ZCLFVBQVUsRUFDVixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQXFCLE1BQU0scUJBQXFCLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsdUJBQXVCLEdBR3hCLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFbkMseURBR0M7OztJQUZDLG1EQUFhOztJQUNiLG1EQUFhOztBQUdmO0lBQUE7UUFRZ0MsWUFBTyxHQUFXLGNBQWMsQ0FBQztRQUN0RCxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFzRCxJQUFJLFlBQVksRUFFcEYsQ0FBQztJQUlOLENBQUM7Ozs7SUFIQyxxREFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrRkFJVDtpQkFDRjs7OzBCQUVFLFdBQVcsU0FBQyxlQUFlO3VCQUMzQixLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsTUFBTTs7SUFNVCx3Q0FBQztDQUFBLEFBakJELElBaUJDO1NBVlksaUNBQWlDOzs7SUFDNUMsb0RBQStEOztJQUMvRCxpREFBMkI7O0lBQzNCLGlEQUEyQjs7SUFDM0Isb0RBRUk7O0FBTU47SUFJRSw4Q0FBbUIsZ0JBQWtDLEVBQVUsU0FBb0I7UUFBaEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBRyxDQUFDOzs7O0lBRXZGLG9EQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBVEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7aUJBQzFDOzs7O2dCQWpEQyxnQkFBZ0I7Z0JBTmhCLFNBQVM7O0lBK0RYLDJDQUFDO0NBQUEsQUFWRCxJQVVDO1NBUFksb0NBQW9DOzs7SUFDbkMsZ0VBQXlDOzs7OztJQUFFLHlEQUE0Qjs7QUFVckY7SUEwRkUscUNBQ1UseUJBQW1ELEVBQ25ELFNBQW9CLEVBQ3BCLGtCQUFxQyxFQUNyQyxTQUFtQixFQUNuQixXQUF1QjtRQUp2Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBdkZ6QixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFJbkMsZ0JBQVcsR0FBTyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7OztRQW9EMUIsd0JBQW1CLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFPckMscUJBQWdCLEdBQXNCLEVBQUUsQ0FBQzs7Ozs7UUFLeEMsaUJBQVksR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQzs7Ozs7O1FBT3RFLGtCQUFhLEdBQXNELElBQUksWUFBWSxFQUUxRixDQUFDO0lBVUQsQ0FBQztJQTNFSixzQkFDSSxnREFBTztRQVJYOzs7Ozs7V0FNRzs7Ozs7Ozs7OztRQUNILFVBQ1ksT0FBZTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQVFELHNCQUNJLHlEQUFnQjtRQVBwQjs7Ozs7V0FLRzs7Ozs7Ozs7O1FBQ0gsVUFDcUIsZ0JBQXlCO1lBQzVDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQVFELHNCQUNJLGtEQUFTO1FBUGI7Ozs7O1dBS0c7Ozs7Ozs7OztRQUNILFVBQ2MsU0FBaUI7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFRRCxzQkFDSSwrQ0FBTTtRQVBWOzs7OztXQUtHOzs7Ozs7Ozs7UUFDSCxVQUNXLE1BQWM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7O0lBeUNELGlEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxzQkFBc0I7UUFDdEIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDekYsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckU7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7Ozs7SUFFRCxxREFBZTs7O0lBQWY7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxtQkFBYSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7WUFBQztnQkFDckIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELDZDQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQzthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsbUJBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyRztRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFTyxrREFBWTs7Ozs7SUFBcEIsVUFBcUIsUUFBZ0I7UUFBckMsaUJBb0NDO1FBbkNDLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQzs7O2dCQUVsRixLQUFLLEdBQWEsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7OztnQkFHcEMsbUJBQW1CLEdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7OztnQkFHNUQseUJBQXVCLEdBQVcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLG1CQUFtQixDQUFDO1lBQzdFLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQVUsSUFBWTtnQkFDdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELENBQUMsRUFBQyxDQUFDO1lBRUgsd0NBQXdDO1lBQ3hDLFFBQVEsR0FBRyxTQUFJLEtBQUssR0FBRSxFQUFFLEVBQUUsRUFBRSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7O2dCQUNwQyxJQUFJLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BELDBFQUEwRTtZQUMxRSxJQUFJLENBQUMsSUFBSTs7Ozs7WUFBQyxVQUFDLEtBQWEsRUFBRSxLQUFhO2dCQUNyQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0Qyw2R0FBNkc7WUFDN0csVUFBVTs7O1lBQUMsY0FBTSxPQUFBLGNBQWMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFuRSxDQUFtRSxHQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztZQUFDO2dCQUNyQixLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekMsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7Ozs7O0lBRU8sNkNBQU87Ozs7Ozs7SUFBZixVQUFnQixRQUFnQixFQUFFLEdBQVcsRUFBRSxJQUFjO1FBQzNELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPO1NBQ1I7UUFDRCxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOztnQkFDL0IsYUFBYSxHQUFhLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ25ELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9HLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0M7YUFBTTs7Z0JBQ0MsVUFBVSxHQUFzQyxJQUFJLENBQUMseUJBQXlCO2lCQUNqRix1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDekIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQ3ZDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDaEQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDOUQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckc7SUFDSCxDQUFDOzs7Ozs7Ozs7O0lBRU8sdURBQWlCOzs7Ozs7Ozs7SUFBekIsVUFDRSxRQUFnQixFQUNoQixJQUFhLEVBQ2IsTUFBYyxFQUNkLFlBQThCO1FBSmhDLGlCQWVDOztZQVRLLGNBQWMsR0FBVyxDQUFDO1FBQzlCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUU7WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7OztnQkFDdkMsZ0JBQWdCLEdBQXdCLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7O2dCQUNwRyxZQUFZLEdBQW9CLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDO1lBQzdFLFlBQVkseUJBQUMsWUFBWSxHQUFLLElBQUksR0FBRTs7Z0JBQzlCLEdBQUcsR0FBVyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLGVBQWUsR0FBRyxjQUFjLEVBQUUsR0FBRyxHQUFHO1lBQzlGLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDO1lBQ3JDLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxzREFBZ0I7Ozs7O0lBQXhCLFVBQXlCLFFBQWdCO1FBQXpDLGlCQW1CQzs7WUFsQk8sY0FBYyxHQUFXLDJCQUEyQjtRQUMxRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FDM0IsUUFBUSxFQUNSLFdBQVcsRUFDWCxjQUFjOzs7Ozs7O1FBQ2QsVUFBQyxZQUF1QyxFQUFFLEtBQWEsRUFBRSxPQUFlLEVBQUUsS0FBYTtZQUNyRixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pELFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN0QyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7WUFDOUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQ3hCLENBQUMsbUJBQWEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxzQkFBc0IsQ0FDbkYsb0JBQW9CLENBQ3JCLENBQUMsQ0FBQyxDQUFDLEVBQ0osV0FBVyxFQUNYLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxxREFBZTs7Ozs7SUFBdkIsVUFBd0IsUUFBZ0I7UUFBeEMsaUJBa0JDOztZQWpCTyxZQUFZLEdBQVcsK0JBQStCOztZQUN0RCxrQkFBa0IsR0FBVyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzVGLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUMzQixRQUFRLEVBQ1IsaUNBQWlDLEVBQ2pDLGtCQUFrQjs7Ozs7UUFDbEIsVUFBQyxZQUE2RCxFQUFFLEtBQWE7O2dCQUNyRSxPQUFPLEdBQW9CLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOztnQkFDbkQsSUFBSSxHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUM7O2dCQUN6QixJQUFJLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMvQixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLFVBQStDO2dCQUN0RixPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFuQyxDQUFtQyxFQUNwQyxDQUFDO1FBQ0osQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyx3REFBa0I7Ozs7O0lBQTFCLFVBQTJCLFFBQWdCO1FBQTNDLGlCQWVDOztZQWRPLGVBQWUsR0FBVyxtQ0FBbUM7UUFDbkUsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQzNCLFFBQVEsRUFDUixvQkFBb0IsRUFDcEIsZUFBZTs7Ozs7OztRQUNmLFVBQUMsWUFBZ0QsRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxTQUFpQjtZQUNuRyxJQUFJLFFBQVEsRUFBRTtnQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7YUFDdkM7WUFDRCxZQUFZLENBQUMsUUFBUSxDQUFDLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUNyRSxZQUFZLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvRCxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDNUMsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxvREFBYzs7Ozs7SUFBdEIsVUFBdUIsUUFBZ0I7O1lBQy9CLFFBQVEsR0FBVyx3SEFBd0g7UUFDakosT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQzNCLFFBQVEsRUFDUixvQkFBb0IsRUFDcEIsUUFBUTs7Ozs7UUFDUixVQUFDLFlBQWdELEVBQUUsS0FBYTs7Z0JBQ3hELGNBQWMsR0FBYSxLQUFLLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O2dCQUNqRixPQUFPLEdBQWEsY0FBYyxDQUFDLENBQUMsQ0FBQztpQkFDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDVixNQUFNOzs7O1lBQUMsVUFBQyxHQUFXO2dCQUNsQixPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFBQztpQkFDRCxHQUFHOzs7O1lBQUMsVUFBQyxDQUFTO2dCQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLENBQUMsRUFBQzs7Z0JBQ0UsU0FBUyxHQUFhLGNBQWMsQ0FBQyxDQUFDLENBQUM7aUJBQzFDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1YsTUFBTTs7OztZQUFDLFVBQUMsQ0FBUztnQkFDaEIsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQUM7aUJBQ0QsR0FBRzs7OztZQUFDLFVBQUMsQ0FBUztnQkFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixDQUFDLEVBQUM7WUFDSixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRzs7Ozs7WUFBQyxVQUFDLEdBQVcsRUFBRSxLQUFhOztvQkFDL0QsTUFBTSxHQUFhLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztvQkFDaEQsR0FBRyxHQUFXLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztvQkFDckMsR0FBRyxHQUFXLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztvQkFDdkMsS0FBSyxHQUE0QixFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFO2dCQUNqRCxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzVCLEtBQUssR0FBRyxTQUFTLENBQUM7aUJBQ25CO3FCQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNyQixLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztpQkFDdkI7cUJBQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3JCLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO2lCQUN2QjtnQkFDRCxPQUFPO29CQUNMLEtBQUssRUFBRSxHQUFHO29CQUNWLElBQUksRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFO29CQUM5QixPQUFPLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEQsS0FBSyxPQUFBO2lCQUNOLENBQUM7WUFDSixDQUFDLEVBQUMsQ0FBQzs7Z0JBRUcsSUFBSSxHQUFVLEVBQUU7b0NBQ2IsQ0FBQzs7b0JBQ0YsUUFBUSxHQUFhLGNBQWMsQ0FBQyxDQUFDLENBQUM7cUJBQ3pDLEtBQUssQ0FBQyxHQUFHLENBQUM7cUJBQ1YsTUFBTTs7OztnQkFBQyxVQUFDLElBQVk7b0JBQ25CLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUMsRUFBQztxQkFDRCxHQUFHOzs7O2dCQUFDLFVBQUMsQ0FBUztvQkFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQyxFQUFDOztvQkFDRSxHQUFHLEdBQVEsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLE9BQU87Ozs7O2dCQUFDLFVBQUMsR0FBVyxFQUFFLEtBQWE7O3dCQUNuQyxZQUFZLEdBQVcsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDNUMsSUFBSSxZQUFZLEVBQUU7d0JBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVE7Ozs7O3dCQUFFLFVBQUMsQ0FBUyxFQUFFLEtBQWE7NEJBQ3RGLE9BQU8sS0FBSyxDQUFDO3dCQUNmLENBQUMsRUFBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBbEJqQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQTdDLENBQUM7YUFtQlQ7WUFDRCxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3RDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLEtBQWtDO2dCQUM1RSxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7OztnQkFBQyxVQUFDLENBQU0sRUFBRSxDQUFNOzt3QkFDdkMsS0FBSyxHQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOzt3QkFDMUIsS0FBSyxHQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOzt3QkFDNUIsU0FBUyxHQUFXLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO3dCQUN0RixTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNqRTt5QkFBTTt3QkFDTCxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7NEJBQ2pCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDaEI7NkJBQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFOzRCQUN4QixTQUFTLEdBQUcsQ0FBQyxDQUFDO3lCQUNmO3FCQUNGO29CQUNELE9BQU8sU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxDQUFDLEVBQUMsQ0FBQztZQUNILFVBQVU7OztZQUFDO2dCQUNULFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLG1EQUFhOzs7OztJQUFyQixVQUFzQixRQUFnQjs7WUFDOUIsVUFBVSxHQUFXLGdDQUFnQztRQUMzRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FDM0IsUUFBUSxFQUNSLHVCQUF1QixFQUN2QixVQUFVOzs7OztRQUNWLFVBQUMsWUFBbUQsRUFBRSxLQUFhOztnQkFDM0QsU0FBUyxHQUFhLEtBQUssQ0FBQyxLQUFLLENBQ3JDLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsYUFBYSxDQUFDLENBQzFFO1lBQ0QsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDOztnQkFDWixLQUFLLEdBQXdCLEVBQUU7WUFDckMsU0FBUyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxJQUFZLEVBQUUsS0FBYTs7b0JBQ3RDLFlBQVksR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztnQkFDcEQsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDVCxJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUssRUFBRTtvQkFDMUIsUUFBUSxFQUFFLFlBQVksQ0FBQyxHQUFHOzs7O29CQUFDLFVBQUMsT0FBZTt3QkFDekMsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLENBQUMsRUFBQztpQkFDSCxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUNILFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQTNYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFFaEMsb0ZBQWlEO29CQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQWpFQyx3QkFBd0I7Z0JBUHhCLFNBQVM7Z0JBR1QsaUJBQWlCO2dCQUtqQixRQUFRO2dCQU1SLFVBQVU7OzswQkEwRVQsS0FBSyxTQUFDLFNBQVM7bUNBV2YsS0FBSyxTQUFDLGtCQUFrQjs0QkFXeEIsS0FBSyxTQUFDLFdBQVc7eUJBV2pCLEtBQUssU0FBQyxRQUFRO3NDQVdkLEtBQUs7bUNBT0wsS0FBSzsrQkFLTCxNQUFNO2dDQU9OLE1BQU07NEJBSU4sU0FBUyxTQUFDLG9DQUFvQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFvU25FLGtDQUFDO0NBQUEsQUE1WEQsSUE0WEM7U0F0WFksMkJBQTJCOzs7Ozs7SUFDdEMsK0NBQXlCOzs7OztJQUN6Qix3REFBMkM7Ozs7O0lBQzNDLGlEQUEyQjs7Ozs7SUFDM0IsOENBQXdCOzs7OztJQUV4QixrREFBNkI7Ozs7O0lBQzdCLGdEQUFtQzs7Ozs7Ozs7SUFvRG5DLDBEQUE4Qzs7Ozs7OztJQU85Qyx1REFBa0Q7Ozs7OztJQUtsRCxtREFBZ0Y7Ozs7Ozs7SUFPaEYsb0RBRUk7O0lBRUosZ0RBQW1IOzs7OztJQUdqSCxnRUFBMkQ7Ozs7O0lBQzNELGdEQUE0Qjs7Ozs7SUFDNUIseURBQTZDOzs7OztJQUM3QyxnREFBMkI7Ozs7O0lBQzNCLGtEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBBZnRlclZpZXdJbml0LFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBUeXBlLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdENoZWNrYm94IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgVGRGbGF2b3JlZExpc3RDb21wb25lbnQsIElGbGF2b3JlZExpc3RJdGVtIH0gZnJvbSAnLi9jZm0tbGlzdC9jZm0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRIaWdobGlnaHRDb21wb25lbnQsIElDb3B5Q29kZVRvb2x0aXBzIH0gZnJvbSAnQGNvdmFsZW50L2hpZ2hsaWdodCc7XG5pbXBvcnQgeyBUZE1hcmtkb3duQ29tcG9uZW50LCBzY3JvbGxUb0FuY2hvciB9IGZyb20gJ0Bjb3ZhbGVudC9tYXJrZG93bic7XG5pbXBvcnQge1xuICBUZERhdGFUYWJsZUNvbXBvbmVudCxcbiAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIsXG4gIElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudCxcbiAgSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGgsXG59IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25DbGlja0V2ZW50IHtcbiAgdGV4dDogc3RyaW5nO1xuICBkYXRhOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImVtaXRDbGljaygpXCI+XG4gICAgICB7eyB0ZXh0IH19XG4gICAgPC9idXR0b24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXk6IHN0cmluZyA9ICdpbmxpbmUtYmxvY2snO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZGF0YTogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSBjbGlja2VkOiBFdmVudEVtaXR0ZXI8SVRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBJVGRGbGF2b3JlZE1hcmtkb3duQnV0dG9uQ2xpY2tFdmVudFxuICA+KCk7XG4gIGVtaXRDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrZWQuZW1pdCh7IHRleHQ6IHRoaXMudGV4dCwgZGF0YTogdGhpcy5kYXRhIH0pO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEZsYXZvcmVkTWFya2Rvd25Db250YWluZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGbGF2b3JlZE1hcmtkb3duQ29udGFpbmVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2lubmVySFRNTCcsICcnKTtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBJUmVwbGFjZXJGdW5jPFQ+ID0gKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+LCAuLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZmxhdm9yZWQtbWFya2Rvd24nLFxuICBzdHlsZVVybHM6IFsnLi9mbGF2b3JlZC1tYXJrZG93bi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZmxhdm9yZWQtbWFya2Rvd24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRGbGF2b3JlZE1hcmtkb3duQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nO1xuICBwcml2YXRlIF9zaW1wbGVMaW5lQnJlYWtzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2hvc3RlZFVybDogc3RyaW5nO1xuICBwcml2YXRlIF9hbmNob3I6IHN0cmluZztcblxuICBwcml2YXRlIF9jb21wb25lbnRzOiB7fSA9IHt9O1xuICBwcml2YXRlIF92aWV3SW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogY29udGVudD86IHN0cmluZ1xuICAgKlxuICAgKiBNYXJrZG93biBmb3JtYXQgY29udGVudCB0byBiZSBwYXJzZWQgYXMgbWF0ZXJpYWwvY292YWxlbnQgbWFya3VwLlxuICAgKlxuICAgKiBlLmcuIFJFQURNRS5tZCBjb250ZW50LlxuICAgKi9cbiAgQElucHV0KCdjb250ZW50JylcbiAgc2V0IGNvbnRlbnQoY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICAvKipcbiAgICogc2ltcGxlTGluZUJyZWFrcz86IHN0cmluZ1xuICAgKlxuICAgKiBTZXRzIHdoZXRoZXIgbmV3bGluZSBjaGFyYWN0ZXJzIGluc2lkZSBwYXJhZ3JhcGhzIGFuZCBzcGFucyBhcmUgcGFyc2VkIGFzIDxici8+LlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnc2ltcGxlTGluZUJyZWFrcycpXG4gIHNldCBzaW1wbGVMaW5lQnJlYWtzKHNpbXBsZUxpbmVCcmVha3M6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaW1wbGVMaW5lQnJlYWtzID0gc2ltcGxlTGluZUJyZWFrcztcbiAgfVxuXG4gIC8qKlxuICAgKiBob3N0ZWRVcmw/OiBzdHJpbmdcbiAgICpcbiAgICogSWYgbWFya2Rvd24gY29udGFpbnMgcmVsYXRpdmUgcGF0aHMsIHRoaXMgaXMgcmVxdWlyZWQgdG8gZ2VuZXJhdGUgY29ycmVjdCB1cmxzXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2hvc3RlZFVybCcpXG4gIHNldCBob3N0ZWRVcmwoaG9zdGVkVXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0ZWRVcmwgPSBob3N0ZWRVcmw7XG4gIH1cblxuICAvKipcbiAgICogYW5jaG9yPzogc3RyaW5nXG4gICAqXG4gICAqIEFuY2hvciB0byBqdW1wIHRvXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2FuY2hvcicpXG4gIHNldCBhbmNob3IoYW5jaG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbmNob3IgPSBhbmNob3I7XG4gIH1cblxuICAvKipcbiAgICogY29weUNvZGVUb0NsaXBib2FyZD86IGJvb2xlYW5cbiAgICpcbiAgICogRGlzcGxheSBjb3B5IGJ1dHRvbiBvbiBjb2RlIHNuaXBwZXRzIHRvIGNvcHkgY29kZSB0byBjbGlwYm9hcmQuXG4gICAqXG4gICAqL1xuICBASW5wdXQoKSBjb3B5Q29kZVRvQ2xpcGJvYXJkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGNvcHlDb2RlVG9vbHRpcHM/OiBJQ29weUNvZGVUb29sdGlwc1xuICAgKlxuICAgKiBUb29sdGlwcyBmb3IgY29weSBidXR0b24gdG8gY29weSBhbmQgdXBvbiBjb3B5aW5nLlxuICAgKi9cbiAgQElucHV0KCkgY29weUNvZGVUb29sdGlwczogSUNvcHlDb2RlVG9vbHRpcHMgPSB7fTtcbiAgLyoqXG4gICAqIGNvbnRlbnRSZWFkeT86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIG1hcmtkb3duIGNvbnRlbnQgcmVuZGVyaW5nIGlzIGZpbmlzaGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPHVuZGVmaW5lZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHVuZGVmaW5lZD4oKTtcblxuICAvKipcbiAgICogYnV0dG9uQ2xpY2tlZD86IElUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25DbGlja0V2ZW50XG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqIElzIGFuIG9iamVjdCBjb250YWluaW5nIHRleHQgYW5kIGRhdGEgb2YgYnV0dG9uXG4gICAqL1xuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPElUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25DbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgSVRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNsaWNrRXZlbnRcbiAgPigpO1xuXG4gIEBWaWV3Q2hpbGQoVGRGbGF2b3JlZE1hcmtkb3duQ29udGFpbmVyRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250YWluZXI6IFRkRmxhdm9yZWRNYXJrZG93bkNvbnRhaW5lckRpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyBvbmx5IGFuY2hvciBjaGFuZ2VkXG4gICAgaWYgKGNoYW5nZXMuYW5jaG9yICYmICFjaGFuZ2VzLmNvbnRlbnQgJiYgIWNoYW5nZXMuc2ltcGxlTGluZUJyZWFrcyAmJiAhY2hhbmdlcy5ob3N0ZWRVcmwpIHtcbiAgICAgIHNjcm9sbFRvQW5jaG9yKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fYW5jaG9yLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2xvYWRDb250ZW50KCg8SFRNTEVsZW1lbnQ+dGhpcy5jb250YWluZXIudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnRleHRDb250ZW50KTtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl92aWV3SW5pdCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGVudCkge1xuICAgICAgdGhpcy5fbG9hZENvbnRlbnQodGhpcy5fY29udGVudCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92aWV3SW5pdCkge1xuICAgICAgdGhpcy5fbG9hZENvbnRlbnQoKDxIVE1MRWxlbWVudD50aGlzLmNvbnRhaW5lci52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudCkudGV4dENvbnRlbnQpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xvYWRDb250ZW50KG1hcmtkb3duOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAobWFya2Rvd24gJiYgbWFya2Rvd24udHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsZWFyKCk7XG4gICAgICBtYXJrZG93biA9IG1hcmtkb3duLnJlcGxhY2UoL14oXFxzfFxcdCkqXFxuKy9nLCAnJykucmVwbGFjZSgvKFxcc3xcXHQpKlxcbisoXFxzfFxcdCkqJC9nLCAnJyk7XG4gICAgICAvLyBTcGxpdCBtYXJrZG93biBieSBsaW5lIGNoYXJhY3RlcnNcbiAgICAgIGxldCBsaW5lczogc3RyaW5nW10gPSBtYXJrZG93bi5zcGxpdCgnXFxuJyk7XG5cbiAgICAgIC8vIGNoZWNrIGhvdyBtdWNoIGluZGVudGF0aW9uIGlzIHVzZWQgYnkgdGhlIGZpcnN0IGFjdHVhbCBtYXJrZG93biBsaW5lXG4gICAgICBjb25zdCBmaXJzdExpbmVXaGl0ZXNwYWNlOiBzdHJpbmcgPSBsaW5lc1swXS5tYXRjaCgvXihcXHN8XFx0KSovKVswXTtcblxuICAgICAgLy8gUmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBzcGFjZXMgc28gbWFya2Rvd24gY2FuIGJlIHBhcnNlZCBjb3JyZWN0bHlcbiAgICAgIGNvbnN0IHN0YXJ0aW5nV2hpdGVzcGFjZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKCdeJyArIGZpcnN0TGluZVdoaXRlc3BhY2UpO1xuICAgICAgbGluZXMgPSBsaW5lcy5tYXAoZnVuY3Rpb24gKGxpbmU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBsaW5lLnJlcGxhY2Uoc3RhcnRpbmdXaGl0ZXNwYWNlUmVnZXgsICcnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBKb2luIGxpbmVzIGFnYWluIHdpdGggbGluZSBjaGFyYWN0ZXJzXG4gICAgICBtYXJrZG93biA9IFsuLi5saW5lcywgJycsICcnXS5qb2luKCdcXG4nKTtcbiAgICAgIG1hcmtkb3duID0gdGhpcy5fcmVwbGFjZUNvZGVCbG9ja3MobWFya2Rvd24pO1xuICAgICAgbWFya2Rvd24gPSB0aGlzLl9yZXBsYWNlQ2hlY2tib3gobWFya2Rvd24pO1xuICAgICAgbWFya2Rvd24gPSB0aGlzLl9yZXBsYWNlVGFibGVzKG1hcmtkb3duKTtcbiAgICAgIG1hcmtkb3duID0gdGhpcy5fcmVwbGFjZUxpc3RzKG1hcmtkb3duKTtcbiAgICAgIG1hcmtkb3duID0gdGhpcy5fcmVwbGFjZUJ1dHRvbnMobWFya2Rvd24pO1xuICAgICAgY29uc3Qga2V5czogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcbiAgICAgIC8vIG5lZWQgdG8gc29ydCB0aGUgcGxhY2Vob2xkZXJzIGluIG9yZGVyIG9mIGVuY291bnRlciBpbiBtYXJrZG93biBjb250ZW50XG4gICAgICBrZXlzLnNvcnQoKGNvbXBBOiBzdHJpbmcsIGNvbXBCOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIG1hcmtkb3duLmluZGV4T2YoY29tcEEpID4gbWFya2Rvd24uaW5kZXhPZihjb21wQikgPyAxIDogLTE7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3JlbmRlcihtYXJrZG93biwga2V5c1swXSwga2V5cyk7XG4gICAgICAvLyBUT0RPOiB0aW1lb3V0IHJlcXVpcmVkIHNpbmNlIHJlc2l6aW5nIG9mIGh0bWwgZWxlbWVudHMgb2NjdXJzIHdoaWNoIGNhdXNlcyBhIGNoYW5nZSBpbiB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNjcm9sbFRvQW5jaG9yKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fYW5jaG9yLCBmYWxzZSksIDI1MCk7XG4gICAgICB0aGlzLmNvbnRlbnRSZWFkeS5lbWl0KCk7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXIobWFya2Rvd246IHN0cmluZywga2V5OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKCFtYXJrZG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ICYmIG1hcmtkb3duLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICBjb25zdCBtYXJrZG93blBhcnRzOiBzdHJpbmdbXSA9IG1hcmtkb3duLnNwbGl0KGtleSk7XG4gICAgICBrZXlzLnNoaWZ0KCk7XG4gICAgICB0aGlzLl9yZW5kZXIobWFya2Rvd25QYXJ0c1swXSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgICAgdGhpcy5jb250YWluZXIudmlld0NvbnRhaW5lclJlZi5pbnNlcnQodGhpcy5fY29tcG9uZW50c1trZXldLmhvc3RWaWV3LCB0aGlzLmNvbnRhaW5lci52aWV3Q29udGFpbmVyUmVmLmxlbmd0aCk7XG4gICAgICB0aGlzLl9jb21wb25lbnRzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fY29tcG9uZW50c1trZXldO1xuICAgICAgdGhpcy5fcmVuZGVyKG1hcmtkb3duUGFydHNbMV0sIGtleXNbMF0sIGtleXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZW50UmVmOiBDb21wb25lbnRSZWY8VGRNYXJrZG93bkNvbXBvbmVudD4gPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRkTWFya2Rvd25Db21wb25lbnQpXG4gICAgICAgIC5jcmVhdGUodGhpcy5faW5qZWN0b3IpO1xuICAgICAgY29udGVudFJlZi5pbnN0YW5jZS5jb250ZW50ID0gbWFya2Rvd247XG4gICAgICBjb250ZW50UmVmLmluc3RhbmNlLmhvc3RlZFVybCA9IHRoaXMuX2hvc3RlZFVybDtcbiAgICAgIGNvbnRlbnRSZWYuaW5zdGFuY2Uuc2ltcGxlTGluZUJyZWFrcyA9IHRoaXMuX3NpbXBsZUxpbmVCcmVha3M7XG4gICAgICBjb250ZW50UmVmLmluc3RhbmNlLnJlZnJlc2goKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLnZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGNvbnRlbnRSZWYuaG9zdFZpZXcsIHRoaXMuY29udGFpbmVyLnZpZXdDb250YWluZXJSZWYubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXBsYWNlQ29tcG9uZW50PFQ+KFxuICAgIG1hcmtkb3duOiBzdHJpbmcsXG4gICAgdHlwZTogVHlwZTxUPixcbiAgICByZWdFeHA6IFJlZ0V4cCxcbiAgICByZXBsYWNlckZ1bmM6IElSZXBsYWNlckZ1bmM8VD4sXG4gICk6IHN0cmluZyB7XG4gICAgbGV0IGNvbXBvbmVudEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHJldHVybiBtYXJrZG93bi5yZXBsYWNlKHJlZ0V4cCwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFQ+ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4gPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZSh0aGlzLl9pbmplY3Rvcik7XG4gICAgICByZXBsYWNlckZ1bmMoY29tcG9uZW50UmVmLCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gJ1snICsgY29tcG9uZW50RmFjdG9yeS5zZWxlY3RvciArICctcGxhY2Vob2xkZXItJyArIGNvbXBvbmVudEluZGV4KysgKyAnXSc7XG4gICAgICB0aGlzLl9jb21wb25lbnRzW2tleV0gPSBjb21wb25lbnRSZWY7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwbGFjZUNoZWNrYm94KG1hcmtkb3duOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNoZWNrYm94UmVnRXhwOiBSZWdFeHAgPSAvKD86XnxcXG4pLSBcXFsoeHwgKVxcXSguKikvZ2k7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VDb21wb25lbnQoXG4gICAgICBtYXJrZG93bixcbiAgICAgIE1hdENoZWNrYm94LFxuICAgICAgY2hlY2tib3hSZWdFeHAsXG4gICAgICAoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TWF0Q2hlY2tib3g+LCBtYXRjaDogc3RyaW5nLCBjaGVja2VkOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmNoZWNrZWQgPSAhIWNoZWNrZWQudHJpbSgpO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubGFiZWxQb3NpdGlvbiA9ICdhZnRlcic7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KFxuICAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAnbWF0LWNoZWNrYm94LWxhYmVsJyxcbiAgICAgICAgICApWzBdLFxuICAgICAgICAgICdpbm5lckhUTUwnLFxuICAgICAgICAgIGxhYmVsLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwbGFjZUJ1dHRvbnMobWFya2Rvd246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgYnV0dG9uUmVnRXhwOiBSZWdFeHAgPSAvXFxbKFteXFxbXSspXFxdKFxcKCNkYXRhPSguKilcXCkpL2k7XG4gICAgY29uc3QgZ2xvYmFsQnV0dG9uUmVnRXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKGJ1dHRvblJlZ0V4cC5zb3VyY2UsIGJ1dHRvblJlZ0V4cC5mbGFncyArICdnJyk7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VDb21wb25lbnQoXG4gICAgICBtYXJrZG93bixcbiAgICAgIFRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNvbXBvbmVudCxcbiAgICAgIGdsb2JhbEJ1dHRvblJlZ0V4cCxcbiAgICAgIChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25Db21wb25lbnQ+LCBtYXRjaDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXM6IFJlZ0V4cEV4ZWNBcnJheSA9IGJ1dHRvblJlZ0V4cC5leGVjKG1hdGNoKTtcbiAgICAgICAgY29uc3QgdGV4dDogc3RyaW5nID0gbWF0Y2hlc1sxXTtcbiAgICAgICAgY29uc3QgZGF0YTogc3RyaW5nID0gbWF0Y2hlc1szXTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jbGlja2VkLnN1YnNjcmliZSgoY2xpY2tFdmVudDogSVRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNsaWNrRXZlbnQpID0+XG4gICAgICAgICAgdGhpcy5idXR0b25DbGlja2VkLmVtaXQoY2xpY2tFdmVudCksXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9yZXBsYWNlQ29kZUJsb2NrcyhtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb2RlQmxvY2tSZWdFeHA6IFJlZ0V4cCA9IC8oPzpefFxcbilgYGAoLiopXFxuKFtcXHNcXFNdKj8pXFxuYGBgL2c7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VDb21wb25lbnQoXG4gICAgICBtYXJrZG93bixcbiAgICAgIFRkSGlnaGxpZ2h0Q29tcG9uZW50LFxuICAgICAgY29kZUJsb2NrUmVnRXhwLFxuICAgICAgKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFRkSGlnaGxpZ2h0Q29tcG9uZW50PiwgbWF0Y2g6IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZywgY29kZWJsb2NrOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKGxhbmd1YWdlKSB7XG4gICAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmxhbmcgPSBsYW5ndWFnZTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29weUNvZGVUb0NsaXBib2FyZCA9IHRoaXMuY29weUNvZGVUb0NsaXBib2FyZDtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmNvcHlDb2RlVG9vbHRpcHMgPSB0aGlzLmNvcHlDb2RlVG9vbHRpcHM7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250ZW50ID0gY29kZWJsb2NrO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwbGFjZVRhYmxlcyhtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB0YWJsZVJneDogUmVnRXhwID0gL14gezAsM31cXHw/LitcXHwuK1xcblsgXFx0XXswLDN9XFx8P1sgXFx0XSo6P1sgXFx0XSooPzotfD0pezIsfVsgXFx0XSo6P1sgXFx0XSpcXHxbIFxcdF0qOj9bIFxcdF0qKD86LXw9KXsyLH1bXFxzXFxTXSs/KD86XFxuXFxufH4wKS9nbTtcbiAgICByZXR1cm4gdGhpcy5fcmVwbGFjZUNvbXBvbmVudChcbiAgICAgIG1hcmtkb3duLFxuICAgICAgVGREYXRhVGFibGVDb21wb25lbnQsXG4gICAgICB0YWJsZVJneCxcbiAgICAgIChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUZERhdGFUYWJsZUNvbXBvbmVudD4sIG1hdGNoOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YVRhYmxlTGluZXM6IHN0cmluZ1tdID0gbWF0Y2gucmVwbGFjZSgvKFxcc3xcXHQpKlxcbisoXFxzfFxcdCkqJC9nLCAnJykuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCBjb2x1bW5zOiBzdHJpbmdbXSA9IGRhdGFUYWJsZUxpbmVzWzBdXG4gICAgICAgICAgLnNwbGl0KCd8JylcbiAgICAgICAgICAuZmlsdGVyKChjb2w6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoKHM6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHMudHJpbSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhbGlnbm1lbnQ6IHN0cmluZ1tdID0gZGF0YVRhYmxlTGluZXNbMV1cbiAgICAgICAgICAuc3BsaXQoJ3wnKVxuICAgICAgICAgIC5maWx0ZXIoKHY6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAubWFwKChzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbHVtbnMgPSBjb2x1bW5zLm1hcCgoY29sOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCB3aWR0aHM6IHN0cmluZ1tdID0gYWxpZ25tZW50W2luZGV4XS5zcGxpdCgnLS0tJyk7XG4gICAgICAgICAgY29uc3QgbWluOiBudW1iZXIgPSBwYXJzZUludCh3aWR0aHNbMF0sIDEwKTtcbiAgICAgICAgICBjb25zdCBtYXg6IG51bWJlciA9IHBhcnNlSW50KHdpZHRoc1sxXSwgMTApO1xuICAgICAgICAgIGxldCB3aWR0aDogSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGggPSB7IG1pbiwgbWF4IH07XG4gICAgICAgICAgaWYgKGlzTmFOKG1pbikgJiYgaXNOYU4obWF4KSkge1xuICAgICAgICAgICAgd2lkdGggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc05hTihtYXgpKSB7XG4gICAgICAgICAgICB3aWR0aC5tYXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc05hTihtaW4pKSB7XG4gICAgICAgICAgICB3aWR0aC5taW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbDogY29sLFxuICAgICAgICAgICAgbmFtZTogY29sLnRvTG93ZXJDYXNlKCkudHJpbSgpLFxuICAgICAgICAgICAgbnVtZXJpYzogL14tLSpbIFxcdF0qOlsgXFx0XSokLy50ZXN0KGFsaWdubWVudFtpbmRleF0pLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0YTogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMjsgaSA8IGRhdGFUYWJsZUxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgcm93U3BsaXQ6IHN0cmluZ1tdID0gZGF0YVRhYmxlTGluZXNbaV1cbiAgICAgICAgICAgIC5zcGxpdCgnfCcpXG4gICAgICAgICAgICAuZmlsdGVyKChjZWxsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcCgoczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHJvdzogYW55ID0ge307XG4gICAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2w6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93U3BsaXRDZWxsOiBzdHJpbmcgPSByb3dTcGxpdFtpbmRleF07XG4gICAgICAgICAgICBpZiAocm93U3BsaXRDZWxsKSB7XG4gICAgICAgICAgICAgIHJvd1tjb2wudG9Mb3dlckNhc2UoKS50cmltKCldID0gcm93U3BsaXRDZWxsLnJlcGxhY2UoL2AoLiopYC8sIChtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRhdGEucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhID0gZGF0YTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnNvcnRhYmxlID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnNvcnRDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBBOiBhbnkgPSBhW2V2ZW50Lm5hbWVdO1xuICAgICAgICAgICAgY29uc3QgY29tcEI6IGFueSA9IGJbZXZlbnQubmFtZV07XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQoY29tcEEpKSAmJiAhTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKSkpIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQoY29tcEEpIC0gTnVtYmVyLnBhcnNlRmxvYXQoY29tcEIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGNvbXBBIDwgY29tcEIpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wQSA+IGNvbXBCKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiAqIChldmVudC5vcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZyA/IC0xIDogMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwbGFjZUxpc3RzKG1hcmtkb3duOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxpc3RSZWdFeHA6IFJlZ0V4cCA9IC8oPzpefFxcbikoKCAqXFwrKVsgfFxcdF0oLiopXFxuKSsvZztcbiAgICByZXR1cm4gdGhpcy5fcmVwbGFjZUNvbXBvbmVudChcbiAgICAgIG1hcmtkb3duLFxuICAgICAgVGRGbGF2b3JlZExpc3RDb21wb25lbnQsXG4gICAgICBsaXN0UmVnRXhwLFxuICAgICAgKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFRkRmxhdm9yZWRMaXN0Q29tcG9uZW50PiwgbWF0Y2g6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBsaW5lVGV4dHM6IHN0cmluZ1tdID0gbWF0Y2guc3BsaXQoXG4gICAgICAgICAgbmV3IFJlZ0V4cCgnXFxcXG4geycgKyAobWF0Y2guaW5kZXhPZignKycpIC0gMSkudG9TdHJpbmcoKSArICd9XFxcXCtbIHxcXFxcdF0nKSxcbiAgICAgICAgKTtcbiAgICAgICAgbGluZVRleHRzLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IGxpbmVzOiBJRmxhdm9yZWRMaXN0SXRlbVtdID0gW107XG4gICAgICAgIGxpbmVUZXh0cy5mb3JFYWNoKCh0ZXh0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWJsaW5lVGV4dHM6IHN0cmluZ1tdID0gdGV4dC5zcGxpdCgvXFxuICpcXCsgLyk7XG4gICAgICAgICAgbGluZXMucHVzaCh7XG4gICAgICAgICAgICBsaW5lOiBzdWJsaW5lVGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICAgIHN1YmxpbmVzOiBzdWJsaW5lVGV4dHMubWFwKChzdWJsaW5lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1YmxpbmUudHJpbSgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubGluZXMgPSBsaW5lcztcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxufVxuIl19