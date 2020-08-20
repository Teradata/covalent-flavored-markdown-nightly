import { Component, Input, EventEmitter, HostBinding, Output, Directive, ViewContainerRef, Renderer2, ChangeDetectionStrategy, ComponentFactoryResolver, ChangeDetectorRef, Injector, ElementRef, ViewChild, NgModule } from '@angular/core';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { TdHighlightComponent, CovalentHighlightModule } from '@covalent/highlight';
import { scrollToAnchor, TdMarkdownComponent, TdMarkdownLoaderService, CovalentMarkdownModule } from '@covalent/markdown';
import { TdDataTableComponent, TdDataTableSortingOrder, CovalentDataTableModule } from '@covalent/core/data-table';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { __awaiter } from 'tslib';
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
class TdFlavoredListComponent {
    constructor() {
        this.dense = false;
    }
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
class TdFlavoredMarkdownButtonComponent {
    constructor() {
        this.display = 'inline-block';
        this.text = '';
        this.data = '';
        this.clicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    emitClick() {
        this.clicked.emit({ text: this.text, data: this.data });
    }
}
TdFlavoredMarkdownButtonComponent.decorators = [
    { type: Component, args: [{
                template: `
    <button mat-raised-button (click)="emitClick()">
      {{ text }}
    </button>
  `
            }] }
];
TdFlavoredMarkdownButtonComponent.propDecorators = {
    display: [{ type: HostBinding, args: ['style.display',] }],
    text: [{ type: Input }],
    data: [{ type: Input }],
    clicked: [{ type: Output }]
};
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
class TdFlavoredMarkdownContainerDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} _renderer
     */
    constructor(viewContainerRef, _renderer) {
        this.viewContainerRef = viewContainerRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    clear() {
        this._renderer.setProperty(this.viewContainerRef.element.nativeElement, 'innerHTML', '');
        this.viewContainerRef.clear();
    }
}
TdFlavoredMarkdownContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdFlavoredMarkdownContainer]',
            },] }
];
/** @nocollapse */
TdFlavoredMarkdownContainerDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    TdFlavoredMarkdownContainerDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    TdFlavoredMarkdownContainerDirective.prototype._renderer;
}
class TdFlavoredMarkdownComponent {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     * @param {?} _injector
     * @param {?} _elementRef
     */
    constructor(_componentFactoryResolver, _renderer, _changeDetectorRef, _injector, _elementRef) {
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
    /**
     * content?: string
     *
     * Markdown format content to be parsed as material/covalent markup.
     *
     * e.g. README.md content.
     * @param {?} content
     * @return {?}
     */
    set content(content) {
        this._content = content;
    }
    /**
     * simpleLineBreaks?: string
     *
     * Sets whether newline characters inside paragraphs and spans are parsed as <br/>.
     * Defaults to false.
     * @param {?} simpleLineBreaks
     * @return {?}
     */
    set simpleLineBreaks(simpleLineBreaks) {
        this._simpleLineBreaks = simpleLineBreaks;
    }
    /**
     * hostedUrl?: string
     *
     * If markdown contains relative paths, this is required to generate correct urls
     *
     * @param {?} hostedUrl
     * @return {?}
     */
    set hostedUrl(hostedUrl) {
        this._hostedUrl = hostedUrl;
    }
    /**
     * anchor?: string
     *
     * Anchor to jump to
     *
     * @param {?} anchor
     * @return {?}
     */
    set anchor(anchor) {
        this._anchor = anchor;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // only anchor changed
        if (changes.anchor && !changes.content && !changes.simpleLineBreaks && !changes.hostedUrl) {
            scrollToAnchor(this._elementRef.nativeElement, this._anchor, false);
        }
        else {
            this.refresh();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this._content) {
            this._loadContent(((/** @type {?} */ (this.container.viewContainerRef.element.nativeElement))).textContent);
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this._viewInit = true;
                this._changeDetectorRef.markForCheck();
            }));
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        if (this._content) {
            this._loadContent(this._content);
        }
        else if (this._viewInit) {
            this._loadContent(((/** @type {?} */ (this.container.viewContainerRef.element.nativeElement))).textContent);
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @param {?} markdown
     * @return {?}
     */
    _loadContent(markdown) {
        if (markdown && markdown.trim().length > 0) {
            this.container.clear();
            markdown = markdown.replace(/^(\s|\t)*\n+/g, '').replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
            // Split markdown by line characters
            /** @type {?} */
            let lines = markdown.split('\n');
            // check how much indentation is used by the first actual markdown line
            /** @type {?} */
            const firstLineWhitespace = lines[0].match(/^(\s|\t)*/)[0];
            // Remove all indentation spaces so markdown can be parsed correctly
            /** @type {?} */
            const startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
            lines = lines.map((/**
             * @param {?} line
             * @return {?}
             */
            function (line) {
                return line.replace(startingWhitespaceRegex, '');
            }));
            // Join lines again with line characters
            markdown = [...lines, '', ''].join('\n');
            markdown = this._replaceCodeBlocks(markdown);
            markdown = this._replaceCheckbox(markdown);
            markdown = this._replaceTables(markdown);
            markdown = this._replaceLists(markdown);
            markdown = this._replaceButtons(markdown);
            /** @type {?} */
            const keys = Object.keys(this._components);
            // need to sort the placeholders in order of encounter in markdown content
            keys.sort((/**
             * @param {?} compA
             * @param {?} compB
             * @return {?}
             */
            (compA, compB) => {
                return markdown.indexOf(compA) > markdown.indexOf(compB) ? 1 : -1;
            }));
            this._render(markdown, keys[0], keys);
            // TODO: timeout required since resizing of html elements occurs which causes a change in the scroll position
            setTimeout((/**
             * @return {?}
             */
            () => scrollToAnchor(this._elementRef.nativeElement, this._anchor, false)), 250);
            this.contentReady.emit();
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this._changeDetectorRef.markForCheck();
            }));
        }
    }
    /**
     * @private
     * @param {?} markdown
     * @param {?} key
     * @param {?} keys
     * @return {?}
     */
    _render(markdown, key, keys) {
        if (!markdown) {
            return;
        }
        if (key && markdown.indexOf(key) > -1) {
            /** @type {?} */
            const markdownParts = markdown.split(key);
            keys.shift();
            this._render(markdownParts[0], undefined, undefined);
            this.container.viewContainerRef.insert(this._components[key].hostView, this.container.viewContainerRef.length);
            this._components[key] = undefined;
            delete this._components[key];
            this._render(markdownParts[1], keys[0], keys);
        }
        else {
            /** @type {?} */
            const contentRef = this._componentFactoryResolver
                .resolveComponentFactory(TdMarkdownComponent)
                .create(this._injector);
            contentRef.instance.content = markdown;
            contentRef.instance.hostedUrl = this._hostedUrl;
            contentRef.instance.simpleLineBreaks = this._simpleLineBreaks;
            contentRef.instance.refresh();
            this.container.viewContainerRef.insert(contentRef.hostView, this.container.viewContainerRef.length);
        }
    }
    /**
     * @private
     * @template T
     * @param {?} markdown
     * @param {?} type
     * @param {?} regExp
     * @param {?} replacerFunc
     * @return {?}
     */
    _replaceComponent(markdown, type, regExp, replacerFunc) {
        /** @type {?} */
        let componentIndex = 0;
        return markdown.replace(regExp, (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            /** @type {?} */
            const componentFactory = this._componentFactoryResolver.resolveComponentFactory(type);
            /** @type {?} */
            const componentRef = componentFactory.create(this._injector);
            replacerFunc(componentRef, ...args);
            /** @type {?} */
            const key = '[' + componentFactory.selector + '-placeholder-' + componentIndex++ + ']';
            this._components[key] = componentRef;
            return key;
        }));
    }
    /**
     * @private
     * @param {?} markdown
     * @return {?}
     */
    _replaceCheckbox(markdown) {
        /** @type {?} */
        const checkboxRegExp = /(?:^|\n)- \[(x| )\](.*)/gi;
        return this._replaceComponent(markdown, MatCheckbox, checkboxRegExp, (/**
         * @param {?} componentRef
         * @param {?} match
         * @param {?} checked
         * @param {?} label
         * @return {?}
         */
        (componentRef, match, checked, label) => {
            componentRef.instance.checked = !!checked.trim();
            componentRef.instance.disabled = true;
            componentRef.instance.labelPosition = 'after';
            this._renderer.setProperty(((/** @type {?} */ (componentRef.instance._elementRef.nativeElement))).getElementsByClassName('mat-checkbox-label')[0], 'innerHTML', label);
        }));
    }
    /**
     * @private
     * @param {?} markdown
     * @return {?}
     */
    _replaceButtons(markdown) {
        /** @type {?} */
        const buttonRegExp = /\[([^\[]+)\](\(#data=(.*)\))/i;
        /** @type {?} */
        const globalButtonRegExp = new RegExp(buttonRegExp.source, buttonRegExp.flags + 'g');
        return this._replaceComponent(markdown, TdFlavoredMarkdownButtonComponent, globalButtonRegExp, (/**
         * @param {?} componentRef
         * @param {?} match
         * @return {?}
         */
        (componentRef, match) => {
            /** @type {?} */
            const matches = buttonRegExp.exec(match);
            /** @type {?} */
            const text = matches[1];
            /** @type {?} */
            const data = matches[3];
            componentRef.instance.text = text;
            componentRef.instance.data = data;
            componentRef.instance.clicked.subscribe((/**
             * @param {?} clickEvent
             * @return {?}
             */
            (clickEvent) => this.buttonClicked.emit(clickEvent)));
        }));
    }
    /**
     * @private
     * @param {?} markdown
     * @return {?}
     */
    _replaceCodeBlocks(markdown) {
        /** @type {?} */
        const codeBlockRegExp = /(?:^|\n)```(.*)\n([\s\S]*?)\n```/g;
        return this._replaceComponent(markdown, TdHighlightComponent, codeBlockRegExp, (/**
         * @param {?} componentRef
         * @param {?} match
         * @param {?} language
         * @param {?} codeblock
         * @return {?}
         */
        (componentRef, match, language, codeblock) => {
            if (language) {
                componentRef.instance.lang = language;
            }
            componentRef.instance.copyCodeToClipboard = this.copyCodeToClipboard;
            componentRef.instance.copyCodeTooltips = this.copyCodeTooltips;
            componentRef.instance.content = codeblock;
        }));
    }
    /**
     * @private
     * @param {?} markdown
     * @return {?}
     */
    _replaceTables(markdown) {
        /** @type {?} */
        const tableRgx = /^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;
        return this._replaceComponent(markdown, TdDataTableComponent, tableRgx, (/**
         * @param {?} componentRef
         * @param {?} match
         * @return {?}
         */
        (componentRef, match) => {
            /** @type {?} */
            const dataTableLines = match.replace(/(\s|\t)*\n+(\s|\t)*$/g, '').split('\n');
            /** @type {?} */
            const columns = dataTableLines[0]
                .split('|')
                .filter((/**
             * @param {?} col
             * @return {?}
             */
            (col) => {
                return col;
            }))
                .map((/**
             * @param {?} s
             * @return {?}
             */
            (s) => {
                return s.trim();
            }));
            /** @type {?} */
            const alignment = dataTableLines[1]
                .split('|')
                .filter((/**
             * @param {?} v
             * @return {?}
             */
            (v) => {
                return v;
            }))
                .map((/**
             * @param {?} s
             * @return {?}
             */
            (s) => {
                return s.trim();
            }));
            componentRef.instance.columns = columns.map((/**
             * @param {?} col
             * @param {?} index
             * @return {?}
             */
            (col, index) => {
                /** @type {?} */
                const widths = alignment[index].split('---');
                /** @type {?} */
                const min = parseInt(widths[0], 10);
                /** @type {?} */
                const max = parseInt(widths[1], 10);
                /** @type {?} */
                let width = { min, max };
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
                    width,
                };
            }));
            /** @type {?} */
            const data = [];
            for (let i = 2; i < dataTableLines.length; i++) {
                /** @type {?} */
                const rowSplit = dataTableLines[i]
                    .split('|')
                    .filter((/**
                 * @param {?} cell
                 * @return {?}
                 */
                (cell) => {
                    return cell;
                }))
                    .map((/**
                 * @param {?} s
                 * @return {?}
                 */
                (s) => {
                    return s.trim();
                }));
                /** @type {?} */
                const row = {};
                columns.forEach((/**
                 * @param {?} col
                 * @param {?} index
                 * @return {?}
                 */
                (col, index) => {
                    /** @type {?} */
                    const rowSplitCell = rowSplit[index];
                    if (rowSplitCell) {
                        row[col.toLowerCase().trim()] = rowSplitCell.replace(/`(.*)`/, (/**
                         * @param {?} m
                         * @param {?} value
                         * @return {?}
                         */
                        (m, value) => {
                            return value;
                        }));
                    }
                }));
                data.push(row);
            }
            componentRef.instance.data = data;
            componentRef.instance.sortable = true;
            componentRef.instance.sortChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                componentRef.instance.data.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => {
                    /** @type {?} */
                    const compA = a[event.name];
                    /** @type {?} */
                    const compB = b[event.name];
                    /** @type {?} */
                    let direction = 0;
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
            () => {
                componentRef.instance.refresh();
            }));
        }));
    }
    /**
     * @private
     * @param {?} markdown
     * @return {?}
     */
    _replaceLists(markdown) {
        /** @type {?} */
        const listRegExp = /(?:^|\n)(( *\+)[ |\t](.*)\n)+/g;
        return this._replaceComponent(markdown, TdFlavoredListComponent, listRegExp, (/**
         * @param {?} componentRef
         * @param {?} match
         * @return {?}
         */
        (componentRef, match) => {
            /** @type {?} */
            const lineTexts = match.split(new RegExp('\\n {' + (match.indexOf('+') - 1).toString() + '}\\+[ |\\t]'));
            lineTexts.shift();
            /** @type {?} */
            const lines = [];
            lineTexts.forEach((/**
             * @param {?} text
             * @param {?} index
             * @return {?}
             */
            (text, index) => {
                /** @type {?} */
                const sublineTexts = text.split(/\n *\+ /);
                lines.push({
                    line: sublineTexts.shift(),
                    sublines: sublineTexts.map((/**
                     * @param {?} subline
                     * @return {?}
                     */
                    (subline) => {
                        return subline.trim();
                    })),
                });
            }));
            componentRef.instance.lines = lines;
        }));
    }
}
TdFlavoredMarkdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-flavored-markdown',
                template: "<div tdFlavoredMarkdownContainer>\n  <ng-content></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host ::ng-deep td-markdown:first-of-type>div:first-of-type>h1:first-of-type,:host ::ng-deep td-markdown:first-of-type>div:first-of-type>h2:first-of-type{margin-top:0}:host ::ng-deep mat-checkbox,:host ::ng-deep td-data-table{display:block}:host ::ng-deep mat-checkbox:last-of-type,:host ::ng-deep td-data-table,:host ::ng-deep td-highlight{margin-bottom:16px}:host ::ng-deep :not(pre)>code{font-family:Menlo,Monaco,\"Andale Mono\",\"lucida console\",\"Courier New\",monospace;padding-left:2px;padding-right:2px}:host ::ng-deep td-highlight{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between}"]
            }] }
];
/** @nocollapse */
TdFlavoredMarkdownComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: Injector },
    { type: ElementRef }
];
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
class TdFlavoredMarkdownLoaderComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _markdownUrlLoaderService
     */
    constructor(_changeDetectorRef, _markdownUrlLoaderService) {
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
    ngOnChanges(changes) {
        if (changes.url || changes.httpOptions) {
            this.loadMarkdown();
        }
    }
    /**
     * @return {?}
     */
    loadMarkdown() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            this._changeDetectorRef.markForCheck();
            try {
                this.content = yield this._markdownUrlLoaderService.load(this.url, this.httpOptions);
            }
            catch (error) {
                this.loadFailed.emit(error);
            }
            finally {
                this.loading = false;
                this._changeDetectorRef.markForCheck();
            }
        });
    }
}
TdFlavoredMarkdownLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-flavored-markdown-loader',
                template: "<mat-progress-bar\n  [ngClass]=\"'delay'\"\n  *ngIf=\"loading\"\n  mode=\"indeterminate\"\n  color=\"accent\"\n  class=\"sticky\"\n></mat-progress-bar>\n<td-flavored-markdown\n  *ngIf=\"!loading\"\n  [content]=\"content\"\n  [hostedUrl]=\"url\"\n  [anchor]=\"anchor\"\n  [copyCodeToClipboard]=\"copyCodeToClipboard\"\n  [copyCodeTooltips]=\"copyCodeTooltips\"\n  (contentReady)=\"contentReady.emit()\"\n  (buttonClicked)=\"buttonClicked.emit($event)\"\n></td-flavored-markdown>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block}.sticky{position:absolute;top:0}.delay{-webkit-animation:.6s delayAnimation;animation:.6s delayAnimation}@-webkit-keyframes delayAnimation{0%,99%{opacity:0}100%{opacity:1}}@keyframes delayAnimation{0%,99%{opacity:0}100%{opacity:1}}"]
            }] }
];
/** @nocollapse */
TdFlavoredMarkdownLoaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TdMarkdownLoaderService }
];
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
class CovalentFlavoredMarkdownModule {
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
