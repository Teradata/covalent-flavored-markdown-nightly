/**
 * @fileoverview added by tsickle
 * Generated from: flavored-markdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class TdFlavoredMarkdownButtonComponent {
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
export class TdFlavoredMarkdownContainerDirective {
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
export class TdFlavoredMarkdownComponent {
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
                componentRef.instance.codeLang = language;
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
                styles: [":host ::ng-deep td-markdown:first-of-type>div:first-of-type>h1:first-of-type,:host ::ng-deep td-markdown:first-of-type>div:first-of-type>h2:first-of-type{margin-top:0}:host ::ng-deep mat-checkbox,:host ::ng-deep td-data-table{display:block}:host ::ng-deep mat-checkbox:last-of-type,:host ::ng-deep td-data-table,:host ::ng-deep td-highlight{margin-bottom:16px}:host ::ng-deep :not(pre)>code{font-family:Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace;padding-left:2px;padding-right:2px}:host ::ng-deep td-highlight{-ms-flex-direction:row;-ms-flex-pack:justify;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:space-between}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdm9yZWQtbWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2ZsYXZvcmVkLW1hcmtkb3duL2ZsYXZvcmVkLW1hcmtkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUVULEtBQUssRUFDTCxTQUFTLEVBR1QsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixNQUFNLEVBQ04sZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixRQUFRLEVBRVIsU0FBUyxFQUNULHVCQUF1QixFQUd2QixVQUFVLEVBQ1YsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLE1BQU0sK0JBQStCLENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFxQixNQUFNLHFCQUFxQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHVCQUF1QixHQUd4QixNQUFNLDJCQUEyQixDQUFDOzs7O0FBRW5DLHlEQUdDOzs7SUFGQyxtREFBYTs7SUFDYixtREFBYTs7QUFVZixNQUFNLE9BQU8saUNBQWlDO0lBUDlDO1FBUWdDLFlBQU8sR0FBVyxjQUFjLENBQUM7UUFDdEQsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBc0QsSUFBSSxZQUFZLEVBRXBGLENBQUM7SUFJTixDQUFDOzs7O0lBSEMsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxF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SUFDNUIseURBQTZDOzs7OztJQUM3QyxnREFBMkI7Ozs7O0lBQzNCLGtEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBBZnRlclZpZXdJbml0LFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBUeXBlLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdENoZWNrYm94IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgVGRGbGF2b3JlZExpc3RDb21wb25lbnQsIElGbGF2b3JlZExpc3RJdGVtIH0gZnJvbSAnLi9jZm0tbGlzdC9jZm0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRIaWdobGlnaHRDb21wb25lbnQsIElDb3B5Q29kZVRvb2x0aXBzIH0gZnJvbSAnQGNvdmFsZW50L2hpZ2hsaWdodCc7XG5pbXBvcnQgeyBUZE1hcmtkb3duQ29tcG9uZW50LCBzY3JvbGxUb0FuY2hvciB9IGZyb20gJ0Bjb3ZhbGVudC9tYXJrZG93bic7XG5pbXBvcnQge1xuICBUZERhdGFUYWJsZUNvbXBvbmVudCxcbiAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIsXG4gIElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudCxcbiAgSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGgsXG59IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25DbGlja0V2ZW50IHtcbiAgdGV4dDogc3RyaW5nO1xuICBkYXRhOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImVtaXRDbGljaygpXCI+XG4gICAgICB7eyB0ZXh0IH19XG4gICAgPC9idXR0b24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXk6IHN0cmluZyA9ICdpbmxpbmUtYmxvY2snO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZGF0YTogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSBjbGlja2VkOiBFdmVudEVtaXR0ZXI8SVRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBJVGRGbGF2b3JlZE1hcmtkb3duQnV0dG9uQ2xpY2tFdmVudFxuICA+KCk7XG4gIGVtaXRDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrZWQuZW1pdCh7IHRleHQ6IHRoaXMudGV4dCwgZGF0YTogdGhpcy5kYXRhIH0pO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEZsYXZvcmVkTWFya2Rvd25Db250YWluZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGbGF2b3JlZE1hcmtkb3duQ29udGFpbmVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2lubmVySFRNTCcsICcnKTtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBJUmVwbGFjZXJGdW5jPFQ+ID0gKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+LCAuLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZmxhdm9yZWQtbWFya2Rvd24nLFxuICBzdHlsZVVybHM6IFsnLi9mbGF2b3JlZC1tYXJrZG93bi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZmxhdm9yZWQtbWFya2Rvd24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRGbGF2b3JlZE1hcmtkb3duQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nO1xuICBwcml2YXRlIF9zaW1wbGVMaW5lQnJlYWtzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2hvc3RlZFVybDogc3RyaW5nO1xuICBwcml2YXRlIF9hbmNob3I6IHN0cmluZztcblxuICBwcml2YXRlIF9jb21wb25lbnRzOiB7fSA9IHt9O1xuICBwcml2YXRlIF92aWV3SW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogY29udGVudD86IHN0cmluZ1xuICAgKlxuICAgKiBNYXJrZG93biBmb3JtYXQgY29udGVudCB0byBiZSBwYXJzZWQgYXMgbWF0ZXJpYWwvY292YWxlbnQgbWFya3VwLlxuICAgKlxuICAgKiBlLmcuIFJFQURNRS5tZCBjb250ZW50LlxuICAgKi9cbiAgQElucHV0KCdjb250ZW50JylcbiAgc2V0IGNvbnRlbnQoY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICAvKipcbiAgICogc2ltcGxlTGluZUJyZWFrcz86IHN0cmluZ1xuICAgKlxuICAgKiBTZXRzIHdoZXRoZXIgbmV3bGluZSBjaGFyYWN0ZXJzIGluc2lkZSBwYXJhZ3JhcGhzIGFuZCBzcGFucyBhcmUgcGFyc2VkIGFzIDxici8+LlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnc2ltcGxlTGluZUJyZWFrcycpXG4gIHNldCBzaW1wbGVMaW5lQnJlYWtzKHNpbXBsZUxpbmVCcmVha3M6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaW1wbGVMaW5lQnJlYWtzID0gc2ltcGxlTGluZUJyZWFrcztcbiAgfVxuXG4gIC8qKlxuICAgKiBob3N0ZWRVcmw/OiBzdHJpbmdcbiAgICpcbiAgICogSWYgbWFya2Rvd24gY29udGFpbnMgcmVsYXRpdmUgcGF0aHMsIHRoaXMgaXMgcmVxdWlyZWQgdG8gZ2VuZXJhdGUgY29ycmVjdCB1cmxzXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2hvc3RlZFVybCcpXG4gIHNldCBob3N0ZWRVcmwoaG9zdGVkVXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0ZWRVcmwgPSBob3N0ZWRVcmw7XG4gIH1cblxuICAvKipcbiAgICogYW5jaG9yPzogc3RyaW5nXG4gICAqXG4gICAqIEFuY2hvciB0byBqdW1wIHRvXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2FuY2hvcicpXG4gIHNldCBhbmNob3IoYW5jaG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbmNob3IgPSBhbmNob3I7XG4gIH1cblxuICAvKipcbiAgICogY29weUNvZGVUb0NsaXBib2FyZD86IGJvb2xlYW5cbiAgICpcbiAgICogRGlzcGxheSBjb3B5IGJ1dHRvbiBvbiBjb2RlIHNuaXBwZXRzIHRvIGNvcHkgY29kZSB0byBjbGlwYm9hcmQuXG4gICAqXG4gICAqL1xuICBASW5wdXQoKSBjb3B5Q29kZVRvQ2xpcGJvYXJkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGNvcHlDb2RlVG9vbHRpcHM/OiBJQ29weUNvZGVUb29sdGlwc1xuICAgKlxuICAgKiBUb29sdGlwcyBmb3IgY29weSBidXR0b24gdG8gY29weSBhbmQgdXBvbiBjb3B5aW5nLlxuICAgKi9cbiAgQElucHV0KCkgY29weUNvZGVUb29sdGlwczogSUNvcHlDb2RlVG9vbHRpcHMgPSB7fTtcbiAgLyoqXG4gICAqIGNvbnRlbnRSZWFkeT86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIG1hcmtkb3duIGNvbnRlbnQgcmVuZGVyaW5nIGlzIGZpbmlzaGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPHVuZGVmaW5lZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHVuZGVmaW5lZD4oKTtcblxuICAvKipcbiAgICogYnV0dG9uQ2xpY2tlZD86IElUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25DbGlja0V2ZW50XG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqIElzIGFuIG9iamVjdCBjb250YWluaW5nIHRleHQgYW5kIGRhdGEgb2YgYnV0dG9uXG4gICAqL1xuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPElUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25DbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgSVRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNsaWNrRXZlbnRcbiAgPigpO1xuXG4gIEBWaWV3Q2hpbGQoVGRGbGF2b3JlZE1hcmtkb3duQ29udGFpbmVyRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250YWluZXI6IFRkRmxhdm9yZWRNYXJrZG93bkNvbnRhaW5lckRpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyBvbmx5IGFuY2hvciBjaGFuZ2VkXG4gICAgaWYgKGNoYW5nZXMuYW5jaG9yICYmICFjaGFuZ2VzLmNvbnRlbnQgJiYgIWNoYW5nZXMuc2ltcGxlTGluZUJyZWFrcyAmJiAhY2hhbmdlcy5ob3N0ZWRVcmwpIHtcbiAgICAgIHNjcm9sbFRvQW5jaG9yKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fYW5jaG9yLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2xvYWRDb250ZW50KCg8SFRNTEVsZW1lbnQ+dGhpcy5jb250YWluZXIudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnRleHRDb250ZW50KTtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl92aWV3SW5pdCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGVudCkge1xuICAgICAgdGhpcy5fbG9hZENvbnRlbnQodGhpcy5fY29udGVudCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92aWV3SW5pdCkge1xuICAgICAgdGhpcy5fbG9hZENvbnRlbnQoKDxIVE1MRWxlbWVudD50aGlzLmNvbnRhaW5lci52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudCkudGV4dENvbnRlbnQpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xvYWRDb250ZW50KG1hcmtkb3duOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAobWFya2Rvd24gJiYgbWFya2Rvd24udHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsZWFyKCk7XG4gICAgICBtYXJrZG93biA9IG1hcmtkb3duLnJlcGxhY2UoL14oXFxzfFxcdCkqXFxuKy9nLCAnJykucmVwbGFjZSgvKFxcc3xcXHQpKlxcbisoXFxzfFxcdCkqJC9nLCAnJyk7XG4gICAgICAvLyBTcGxpdCBtYXJrZG93biBieSBsaW5lIGNoYXJhY3RlcnNcbiAgICAgIGxldCBsaW5lczogc3RyaW5nW10gPSBtYXJrZG93bi5zcGxpdCgnXFxuJyk7XG5cbiAgICAgIC8vIGNoZWNrIGhvdyBtdWNoIGluZGVudGF0aW9uIGlzIHVzZWQgYnkgdGhlIGZpcnN0IGFjdHVhbCBtYXJrZG93biBsaW5lXG4gICAgICBjb25zdCBmaXJzdExpbmVXaGl0ZXNwYWNlOiBzdHJpbmcgPSBsaW5lc1swXS5tYXRjaCgvXihcXHN8XFx0KSovKVswXTtcblxuICAgICAgLy8gUmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBzcGFjZXMgc28gbWFya2Rvd24gY2FuIGJlIHBhcnNlZCBjb3JyZWN0bHlcbiAgICAgIGNvbnN0IHN0YXJ0aW5nV2hpdGVzcGFjZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKCdeJyArIGZpcnN0TGluZVdoaXRlc3BhY2UpO1xuICAgICAgbGluZXMgPSBsaW5lcy5tYXAoZnVuY3Rpb24gKGxpbmU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBsaW5lLnJlcGxhY2Uoc3RhcnRpbmdXaGl0ZXNwYWNlUmVnZXgsICcnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBKb2luIGxpbmVzIGFnYWluIHdpdGggbGluZSBjaGFyYWN0ZXJzXG4gICAgICBtYXJrZG93biA9IFsuLi5saW5lcywgJycsICcnXS5qb2luKCdcXG4nKTtcbiAgICAgIG1hcmtkb3duID0gdGhpcy5fcmVwbGFjZUNvZGVCbG9ja3MobWFya2Rvd24pO1xuICAgICAgbWFya2Rvd24gPSB0aGlzLl9yZXBsYWNlQ2hlY2tib3gobWFya2Rvd24pO1xuICAgICAgbWFya2Rvd24gPSB0aGlzLl9yZXBsYWNlVGFibGVzKG1hcmtkb3duKTtcbiAgICAgIG1hcmtkb3duID0gdGhpcy5fcmVwbGFjZUxpc3RzKG1hcmtkb3duKTtcbiAgICAgIG1hcmtkb3duID0gdGhpcy5fcmVwbGFjZUJ1dHRvbnMobWFya2Rvd24pO1xuICAgICAgY29uc3Qga2V5czogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcbiAgICAgIC8vIG5lZWQgdG8gc29ydCB0aGUgcGxhY2Vob2xkZXJzIGluIG9yZGVyIG9mIGVuY291bnRlciBpbiBtYXJrZG93biBjb250ZW50XG4gICAgICBrZXlzLnNvcnQoKGNvbXBBOiBzdHJpbmcsIGNvbXBCOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIG1hcmtkb3duLmluZGV4T2YoY29tcEEpID4gbWFya2Rvd24uaW5kZXhPZihjb21wQikgPyAxIDogLTE7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3JlbmRlcihtYXJrZG93biwga2V5c1swXSwga2V5cyk7XG4gICAgICAvLyBUT0RPOiB0aW1lb3V0IHJlcXVpcmVkIHNpbmNlIHJlc2l6aW5nIG9mIGh0bWwgZWxlbWVudHMgb2NjdXJzIHdoaWNoIGNhdXNlcyBhIGNoYW5nZSBpbiB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNjcm9sbFRvQW5jaG9yKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fYW5jaG9yLCBmYWxzZSksIDI1MCk7XG4gICAgICB0aGlzLmNvbnRlbnRSZWFkeS5lbWl0KCk7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXIobWFya2Rvd246IHN0cmluZywga2V5OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKCFtYXJrZG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ICYmIG1hcmtkb3duLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICBjb25zdCBtYXJrZG93blBhcnRzOiBzdHJpbmdbXSA9IG1hcmtkb3duLnNwbGl0KGtleSk7XG4gICAgICBrZXlzLnNoaWZ0KCk7XG4gICAgICB0aGlzLl9yZW5kZXIobWFya2Rvd25QYXJ0c1swXSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgICAgdGhpcy5jb250YWluZXIudmlld0NvbnRhaW5lclJlZi5pbnNlcnQodGhpcy5fY29tcG9uZW50c1trZXldLmhvc3RWaWV3LCB0aGlzLmNvbnRhaW5lci52aWV3Q29udGFpbmVyUmVmLmxlbmd0aCk7XG4gICAgICB0aGlzLl9jb21wb25lbnRzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fY29tcG9uZW50c1trZXldO1xuICAgICAgdGhpcy5fcmVuZGVyKG1hcmtkb3duUGFydHNbMV0sIGtleXNbMF0sIGtleXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZW50UmVmOiBDb21wb25lbnRSZWY8VGRNYXJrZG93bkNvbXBvbmVudD4gPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRkTWFya2Rvd25Db21wb25lbnQpXG4gICAgICAgIC5jcmVhdGUodGhpcy5faW5qZWN0b3IpO1xuICAgICAgY29udGVudFJlZi5pbnN0YW5jZS5jb250ZW50ID0gbWFya2Rvd247XG4gICAgICBjb250ZW50UmVmLmluc3RhbmNlLmhvc3RlZFVybCA9IHRoaXMuX2hvc3RlZFVybDtcbiAgICAgIGNvbnRlbnRSZWYuaW5zdGFuY2Uuc2ltcGxlTGluZUJyZWFrcyA9IHRoaXMuX3NpbXBsZUxpbmVCcmVha3M7XG4gICAgICBjb250ZW50UmVmLmluc3RhbmNlLnJlZnJlc2goKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLnZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGNvbnRlbnRSZWYuaG9zdFZpZXcsIHRoaXMuY29udGFpbmVyLnZpZXdDb250YWluZXJSZWYubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXBsYWNlQ29tcG9uZW50PFQ+KFxuICAgIG1hcmtkb3duOiBzdHJpbmcsXG4gICAgdHlwZTogVHlwZTxUPixcbiAgICByZWdFeHA6IFJlZ0V4cCxcbiAgICByZXBsYWNlckZ1bmM6IElSZXBsYWNlckZ1bmM8VD4sXG4gICk6IHN0cmluZyB7XG4gICAgbGV0IGNvbXBvbmVudEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHJldHVybiBtYXJrZG93bi5yZXBsYWNlKHJlZ0V4cCwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFQ+ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4gPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZSh0aGlzLl9pbmplY3Rvcik7XG4gICAgICByZXBsYWNlckZ1bmMoY29tcG9uZW50UmVmLCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gJ1snICsgY29tcG9uZW50RmFjdG9yeS5zZWxlY3RvciArICctcGxhY2Vob2xkZXItJyArIGNvbXBvbmVudEluZGV4KysgKyAnXSc7XG4gICAgICB0aGlzLl9jb21wb25lbnRzW2tleV0gPSBjb21wb25lbnRSZWY7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwbGFjZUNoZWNrYm94KG1hcmtkb3duOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNoZWNrYm94UmVnRXhwOiBSZWdFeHAgPSAvKD86XnxcXG4pLSBcXFsoeHwgKVxcXSguKikvZ2k7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VDb21wb25lbnQoXG4gICAgICBtYXJrZG93bixcbiAgICAgIE1hdENoZWNrYm94LFxuICAgICAgY2hlY2tib3hSZWdFeHAsXG4gICAgICAoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TWF0Q2hlY2tib3g+LCBtYXRjaDogc3RyaW5nLCBjaGVja2VkOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmNoZWNrZWQgPSAhIWNoZWNrZWQudHJpbSgpO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubGFiZWxQb3NpdGlvbiA9ICdhZnRlcic7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KFxuICAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAnbWF0LWNoZWNrYm94LWxhYmVsJyxcbiAgICAgICAgICApWzBdLFxuICAgICAgICAgICdpbm5lckhUTUwnLFxuICAgICAgICAgIGxhYmVsLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwbGFjZUJ1dHRvbnMobWFya2Rvd246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgYnV0dG9uUmVnRXhwOiBSZWdFeHAgPSAvXFxbKFteXFxbXSspXFxdKFxcKCNkYXRhPSguKilcXCkpL2k7XG4gICAgY29uc3QgZ2xvYmFsQnV0dG9uUmVnRXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKGJ1dHRvblJlZ0V4cC5zb3VyY2UsIGJ1dHRvblJlZ0V4cC5mbGFncyArICdnJyk7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VDb21wb25lbnQoXG4gICAgICBtYXJrZG93bixcbiAgICAgIFRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNvbXBvbmVudCxcbiAgICAgIGdsb2JhbEJ1dHRvblJlZ0V4cCxcbiAgICAgIChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25Db21wb25lbnQ+LCBtYXRjaDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXM6IFJlZ0V4cEV4ZWNBcnJheSA9IGJ1dHRvblJlZ0V4cC5leGVjKG1hdGNoKTtcbiAgICAgICAgY29uc3QgdGV4dDogc3RyaW5nID0gbWF0Y2hlc1sxXTtcbiAgICAgICAgY29uc3QgZGF0YTogc3RyaW5nID0gbWF0Y2hlc1szXTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jbGlja2VkLnN1YnNjcmliZSgoY2xpY2tFdmVudDogSVRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNsaWNrRXZlbnQpID0+XG4gICAgICAgICAgdGhpcy5idXR0b25DbGlja2VkLmVtaXQoY2xpY2tFdmVudCksXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9yZXBsYWNlQ29kZUJsb2NrcyhtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb2RlQmxvY2tSZWdFeHA6IFJlZ0V4cCA9IC8oPzpefFxcbilgYGAoLiopXFxuKFtcXHNcXFNdKj8pXFxuYGBgL2c7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VDb21wb25lbnQoXG4gICAgICBtYXJrZG93bixcbiAgICAgIFRkSGlnaGxpZ2h0Q29tcG9uZW50LFxuICAgICAgY29kZUJsb2NrUmVnRXhwLFxuICAgICAgKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFRkSGlnaGxpZ2h0Q29tcG9uZW50PiwgbWF0Y2g6IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZywgY29kZWJsb2NrOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKGxhbmd1YWdlKSB7XG4gICAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmNvZGVMYW5nID0gbGFuZ3VhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmNvcHlDb2RlVG9DbGlwYm9hcmQgPSB0aGlzLmNvcHlDb2RlVG9DbGlwYm9hcmQ7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb3B5Q29kZVRvb2x0aXBzID0gdGhpcy5jb3B5Q29kZVRvb2x0aXBzO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGVudCA9IGNvZGVibG9jaztcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcGxhY2VUYWJsZXMobWFya2Rvd246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdGFibGVSZ3g6IFJlZ0V4cCA9IC9eIHswLDN9XFx8Py4rXFx8LitcXG5bIFxcdF17MCwzfVxcfD9bIFxcdF0qOj9bIFxcdF0qKD86LXw9KXsyLH1bIFxcdF0qOj9bIFxcdF0qXFx8WyBcXHRdKjo/WyBcXHRdKig/Oi18PSl7Mix9W1xcc1xcU10rPyg/Olxcblxcbnx+MCkvZ207XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VDb21wb25lbnQoXG4gICAgICBtYXJrZG93bixcbiAgICAgIFRkRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgdGFibGVSZ3gsXG4gICAgICAoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VGREYXRhVGFibGVDb21wb25lbnQ+LCBtYXRjaDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFUYWJsZUxpbmVzOiBzdHJpbmdbXSA9IG1hdGNoLnJlcGxhY2UoLyhcXHN8XFx0KSpcXG4rKFxcc3xcXHQpKiQvZywgJycpLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgY29uc3QgY29sdW1uczogc3RyaW5nW10gPSBkYXRhVGFibGVMaW5lc1swXVxuICAgICAgICAgIC5zcGxpdCgnfCcpXG4gICAgICAgICAgLmZpbHRlcigoY29sOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb2w7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAubWFwKChzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYWxpZ25tZW50OiBzdHJpbmdbXSA9IGRhdGFUYWJsZUxpbmVzWzFdXG4gICAgICAgICAgLnNwbGl0KCd8JylcbiAgICAgICAgICAuZmlsdGVyKCh2OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm1hcCgoczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcy50cmltKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb2x1bW5zID0gY29sdW1ucy5tYXAoKGNvbDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgd2lkdGhzOiBzdHJpbmdbXSA9IGFsaWdubWVudFtpbmRleF0uc3BsaXQoJy0tLScpO1xuICAgICAgICAgIGNvbnN0IG1pbjogbnVtYmVyID0gcGFyc2VJbnQod2lkdGhzWzBdLCAxMCk7XG4gICAgICAgICAgY29uc3QgbWF4OiBudW1iZXIgPSBwYXJzZUludCh3aWR0aHNbMV0sIDEwKTtcbiAgICAgICAgICBsZXQgd2lkdGg6IElUZERhdGFUYWJsZUNvbHVtbldpZHRoID0geyBtaW4sIG1heCB9O1xuICAgICAgICAgIGlmIChpc05hTihtaW4pICYmIGlzTmFOKG1heCkpIHtcbiAgICAgICAgICAgIHdpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNOYU4obWF4KSkge1xuICAgICAgICAgICAgd2lkdGgubWF4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNOYU4obWluKSkge1xuICAgICAgICAgICAgd2lkdGgubWluID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IGNvbCxcbiAgICAgICAgICAgIG5hbWU6IGNvbC50b0xvd2VyQ2FzZSgpLnRyaW0oKSxcbiAgICAgICAgICAgIG51bWVyaWM6IC9eLS0qWyBcXHRdKjpbIFxcdF0qJC8udGVzdChhbGlnbm1lbnRbaW5kZXhdKSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGE6IGFueVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDI7IGkgPCBkYXRhVGFibGVMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJvd1NwbGl0OiBzdHJpbmdbXSA9IGRhdGFUYWJsZUxpbmVzW2ldXG4gICAgICAgICAgICAuc3BsaXQoJ3wnKVxuICAgICAgICAgICAgLmZpbHRlcigoY2VsbDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKHM6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcy50cmltKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCByb3c6IGFueSA9IHt9O1xuICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvd1NwbGl0Q2VsbDogc3RyaW5nID0gcm93U3BsaXRbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHJvd1NwbGl0Q2VsbCkge1xuICAgICAgICAgICAgICByb3dbY29sLnRvTG93ZXJDYXNlKCkudHJpbSgpXSA9IHJvd1NwbGl0Q2VsbC5yZXBsYWNlKC9gKC4qKWAvLCAobTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkYXRhLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5zb3J0YWJsZSA9IHRydWU7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5zb3J0Q2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wQTogYW55ID0gYVtldmVudC5uYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBCOiBhbnkgPSBiW2V2ZW50Lm5hbWVdO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSkgJiYgIU51bWJlci5pc05hTihOdW1iZXIucGFyc2VGbG9hdChjb21wQikpKSB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSAtIE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChjb21wQSA8IGNvbXBCKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcEEgPiBjb21wQikge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24gKiAoZXZlbnQub3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmcgPyAtMSA6IDEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcGxhY2VMaXN0cyhtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBsaXN0UmVnRXhwOiBSZWdFeHAgPSAvKD86XnxcXG4pKCggKlxcKylbIHxcXHRdKC4qKVxcbikrL2c7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VDb21wb25lbnQoXG4gICAgICBtYXJrZG93bixcbiAgICAgIFRkRmxhdm9yZWRMaXN0Q29tcG9uZW50LFxuICAgICAgbGlzdFJlZ0V4cCxcbiAgICAgIChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUZEZsYXZvcmVkTGlzdENvbXBvbmVudD4sIG1hdGNoOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgbGluZVRleHRzOiBzdHJpbmdbXSA9IG1hdGNoLnNwbGl0KFxuICAgICAgICAgIG5ldyBSZWdFeHAoJ1xcXFxuIHsnICsgKG1hdGNoLmluZGV4T2YoJysnKSAtIDEpLnRvU3RyaW5nKCkgKyAnfVxcXFwrWyB8XFxcXHRdJyksXG4gICAgICAgICk7XG4gICAgICAgIGxpbmVUZXh0cy5zaGlmdCgpO1xuICAgICAgICBjb25zdCBsaW5lczogSUZsYXZvcmVkTGlzdEl0ZW1bXSA9IFtdO1xuICAgICAgICBsaW5lVGV4dHMuZm9yRWFjaCgodGV4dDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VibGluZVRleHRzOiBzdHJpbmdbXSA9IHRleHQuc3BsaXQoL1xcbiAqXFwrIC8pO1xuICAgICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgbGluZTogc3VibGluZVRleHRzLnNoaWZ0KCksXG4gICAgICAgICAgICBzdWJsaW5lczogc3VibGluZVRleHRzLm1hcCgoc3VibGluZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBzdWJsaW5lLnRyaW0oKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmxpbmVzID0gbGluZXM7XG4gICAgICB9LFxuICAgICk7XG4gIH1cbn1cbiJdfQ==