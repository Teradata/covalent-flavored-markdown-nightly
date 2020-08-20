/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdm9yZWQtbWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2ZsYXZvcmVkLW1hcmtkb3duLyIsInNvdXJjZXMiOlsiZmxhdm9yZWQtbWFya2Rvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFFVCxLQUFLLEVBQ0wsU0FBUyxFQUdULGlCQUFpQixFQUNqQixZQUFZLEVBQ1osTUFBTSxFQUNOLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsUUFBUSxFQUVSLFNBQVMsRUFDVCx1QkFBdUIsRUFHdkIsVUFBVSxFQUNWLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixNQUFNLCtCQUErQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBcUIsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQix1QkFBdUIsR0FHeEIsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUVuQyx5REFHQzs7O0lBRkMsbURBQWE7O0lBQ2IsbURBQWE7O0FBVWYsTUFBTSxPQUFPLGlDQUFpQztJQVA5QztRQVFnQyxZQUFPLEdBQVcsY0FBYyxDQUFDO1FBQ3RELFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNqQixZQUFPLEdBQXNELElBQUksWUFBWSxFQUVwRixDQUFDO0lBSU4sQ0FBQzs7OztJQUhDLFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENB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Qzs7Ozs7SUFDN0MsZ0RBQTJCOzs7OztJQUMzQixrREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgVHlwZSxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXRDaGVja2JveCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IFRkRmxhdm9yZWRMaXN0Q29tcG9uZW50LCBJRmxhdm9yZWRMaXN0SXRlbSB9IGZyb20gJy4vY2ZtLWxpc3QvY2ZtLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRkSGlnaGxpZ2h0Q29tcG9uZW50LCBJQ29weUNvZGVUb29sdGlwcyB9IGZyb20gJ0Bjb3ZhbGVudC9oaWdobGlnaHQnO1xuaW1wb3J0IHsgVGRNYXJrZG93bkNvbXBvbmVudCwgc2Nyb2xsVG9BbmNob3IgfSBmcm9tICdAY292YWxlbnQvbWFya2Rvd24nO1xuaW1wb3J0IHtcbiAgVGREYXRhVGFibGVDb21wb25lbnQsXG4gIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLFxuICBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQsXG4gIElUZERhdGFUYWJsZUNvbHVtbldpZHRoLFxufSBmcm9tICdAY292YWxlbnQvY29yZS9kYXRhLXRhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRGbGF2b3JlZE1hcmtkb3duQnV0dG9uQ2xpY2tFdmVudCB7XG4gIHRleHQ6IHN0cmluZztcbiAgZGF0YTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJlbWl0Q2xpY2soKVwiPlxuICAgICAge3sgdGV4dCB9fVxuICAgIDwvYnV0dG9uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25Db21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5OiBzdHJpbmcgPSAnaW5saW5lLWJsb2NrJztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPElUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25DbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgSVRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNsaWNrRXZlbnRcbiAgPigpO1xuICBlbWl0Q2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja2VkLmVtaXQoeyB0ZXh0OiB0aGlzLnRleHQsIGRhdGE6IHRoaXMuZGF0YSB9KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRGbGF2b3JlZE1hcmtkb3duQ29udGFpbmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmxhdm9yZWRNYXJrZG93bkNvbnRhaW5lckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdpbm5lckhUTUwnLCAnJyk7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSVJlcGxhY2VyRnVuYzxUPiA9IChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPiwgLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWZsYXZvcmVkLW1hcmtkb3duJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmxhdm9yZWQtbWFya2Rvd24uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZsYXZvcmVkLW1hcmtkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmxhdm9yZWRNYXJrZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX2NvbnRlbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2ltcGxlTGluZUJyZWFrczogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9ob3N0ZWRVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSBfYW5jaG9yOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfY29tcG9uZW50czoge30gPSB7fTtcbiAgcHJpdmF0ZSBfdmlld0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIGNvbnRlbnQ/OiBzdHJpbmdcbiAgICpcbiAgICogTWFya2Rvd24gZm9ybWF0IGNvbnRlbnQgdG8gYmUgcGFyc2VkIGFzIG1hdGVyaWFsL2NvdmFsZW50IG1hcmt1cC5cbiAgICpcbiAgICogZS5nLiBSRUFETUUubWQgY29udGVudC5cbiAgICovXG4gIEBJbnB1dCgnY29udGVudCcpXG4gIHNldCBjb250ZW50KGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIHNpbXBsZUxpbmVCcmVha3M/OiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB3aGV0aGVyIG5ld2xpbmUgY2hhcmFjdGVycyBpbnNpZGUgcGFyYWdyYXBocyBhbmQgc3BhbnMgYXJlIHBhcnNlZCBhcyA8YnIvPi5cbiAgICogRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoJ3NpbXBsZUxpbmVCcmVha3MnKVxuICBzZXQgc2ltcGxlTGluZUJyZWFrcyhzaW1wbGVMaW5lQnJlYWtzOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2ltcGxlTGluZUJyZWFrcyA9IHNpbXBsZUxpbmVCcmVha3M7XG4gIH1cblxuICAvKipcbiAgICogaG9zdGVkVXJsPzogc3RyaW5nXG4gICAqXG4gICAqIElmIG1hcmtkb3duIGNvbnRhaW5zIHJlbGF0aXZlIHBhdGhzLCB0aGlzIGlzIHJlcXVpcmVkIHRvIGdlbmVyYXRlIGNvcnJlY3QgdXJsc1xuICAgKlxuICAgKi9cbiAgQElucHV0KCdob3N0ZWRVcmwnKVxuICBzZXQgaG9zdGVkVXJsKGhvc3RlZFVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdGVkVXJsID0gaG9zdGVkVXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIGFuY2hvcj86IHN0cmluZ1xuICAgKlxuICAgKiBBbmNob3IgdG8ganVtcCB0b1xuICAgKlxuICAgKi9cbiAgQElucHV0KCdhbmNob3InKVxuICBzZXQgYW5jaG9yKGFuY2hvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fYW5jaG9yID0gYW5jaG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvcHlDb2RlVG9DbGlwYm9hcmQ/OiBib29sZWFuXG4gICAqXG4gICAqIERpc3BsYXkgY29weSBidXR0b24gb24gY29kZSBzbmlwcGV0cyB0byBjb3B5IGNvZGUgdG8gY2xpcGJvYXJkLlxuICAgKlxuICAgKi9cbiAgQElucHV0KCkgY29weUNvZGVUb0NsaXBib2FyZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBjb3B5Q29kZVRvb2x0aXBzPzogSUNvcHlDb2RlVG9vbHRpcHNcbiAgICpcbiAgICogVG9vbHRpcHMgZm9yIGNvcHkgYnV0dG9uIHRvIGNvcHkgYW5kIHVwb24gY29weWluZy5cbiAgICovXG4gIEBJbnB1dCgpIGNvcHlDb2RlVG9vbHRpcHM6IElDb3B5Q29kZVRvb2x0aXBzID0ge307XG4gIC8qKlxuICAgKiBjb250ZW50UmVhZHk/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBtYXJrZG93biBjb250ZW50IHJlbmRlcmluZyBpcyBmaW5pc2hlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjb250ZW50UmVhZHk6IEV2ZW50RW1pdHRlcjx1bmRlZmluZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx1bmRlZmluZWQ+KCk7XG5cbiAgLyoqXG4gICAqIGJ1dHRvbkNsaWNrZWQ/OiBJVGRGbGF2b3JlZE1hcmtkb3duQnV0dG9uQ2xpY2tFdmVudFxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZFxuICAgKiBJcyBhbiBvYmplY3QgY29udGFpbmluZyB0ZXh0IGFuZCBkYXRhIG9mIGJ1dHRvblxuICAgKi9cbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxJVGRGbGF2b3JlZE1hcmtkb3duQnV0dG9uQ2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFxuICAgIElUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25DbGlja0V2ZW50XG4gID4oKTtcblxuICBAVmlld0NoaWxkKFRkRmxhdm9yZWRNYXJrZG93bkNvbnRhaW5lckRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgY29udGFpbmVyOiBUZEZsYXZvcmVkTWFya2Rvd25Db250YWluZXJEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gb25seSBhbmNob3IgY2hhbmdlZFxuICAgIGlmIChjaGFuZ2VzLmFuY2hvciAmJiAhY2hhbmdlcy5jb250ZW50ICYmICFjaGFuZ2VzLnNpbXBsZUxpbmVCcmVha3MgJiYgIWNoYW5nZXMuaG9zdGVkVXJsKSB7XG4gICAgICBzY3JvbGxUb0FuY2hvcih0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FuY2hvciwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb250ZW50KSB7XG4gICAgICB0aGlzLl9sb2FkQ29udGVudCgoPEhUTUxFbGVtZW50PnRoaXMuY29udGFpbmVyLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50KS50ZXh0Q29udGVudCk7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdmlld0luaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2xvYWRDb250ZW50KHRoaXMuX2NvbnRlbnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdmlld0luaXQpIHtcbiAgICAgIHRoaXMuX2xvYWRDb250ZW50KCg8SFRNTEVsZW1lbnQ+dGhpcy5jb250YWluZXIudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnRleHRDb250ZW50KTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9sb2FkQ29udGVudChtYXJrZG93bjogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG1hcmtkb3duICYmIG1hcmtkb3duLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGVhcigpO1xuICAgICAgbWFya2Rvd24gPSBtYXJrZG93bi5yZXBsYWNlKC9eKFxcc3xcXHQpKlxcbisvZywgJycpLnJlcGxhY2UoLyhcXHN8XFx0KSpcXG4rKFxcc3xcXHQpKiQvZywgJycpO1xuICAgICAgLy8gU3BsaXQgbWFya2Rvd24gYnkgbGluZSBjaGFyYWN0ZXJzXG4gICAgICBsZXQgbGluZXM6IHN0cmluZ1tdID0gbWFya2Rvd24uc3BsaXQoJ1xcbicpO1xuXG4gICAgICAvLyBjaGVjayBob3cgbXVjaCBpbmRlbnRhdGlvbiBpcyB1c2VkIGJ5IHRoZSBmaXJzdCBhY3R1YWwgbWFya2Rvd24gbGluZVxuICAgICAgY29uc3QgZmlyc3RMaW5lV2hpdGVzcGFjZTogc3RyaW5nID0gbGluZXNbMF0ubWF0Y2goL14oXFxzfFxcdCkqLylbMF07XG5cbiAgICAgIC8vIFJlbW92ZSBhbGwgaW5kZW50YXRpb24gc3BhY2VzIHNvIG1hcmtkb3duIGNhbiBiZSBwYXJzZWQgY29ycmVjdGx5XG4gICAgICBjb25zdCBzdGFydGluZ1doaXRlc3BhY2VSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBmaXJzdExpbmVXaGl0ZXNwYWNlKTtcbiAgICAgIGxpbmVzID0gbGluZXMubWFwKGZ1bmN0aW9uIChsaW5lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbGluZS5yZXBsYWNlKHN0YXJ0aW5nV2hpdGVzcGFjZVJlZ2V4LCAnJyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSm9pbiBsaW5lcyBhZ2FpbiB3aXRoIGxpbmUgY2hhcmFjdGVyc1xuICAgICAgbWFya2Rvd24gPSBbLi4ubGluZXMsICcnLCAnJ10uam9pbignXFxuJyk7XG4gICAgICBtYXJrZG93biA9IHRoaXMuX3JlcGxhY2VDb2RlQmxvY2tzKG1hcmtkb3duKTtcbiAgICAgIG1hcmtkb3duID0gdGhpcy5fcmVwbGFjZUNoZWNrYm94KG1hcmtkb3duKTtcbiAgICAgIG1hcmtkb3duID0gdGhpcy5fcmVwbGFjZVRhYmxlcyhtYXJrZG93bik7XG4gICAgICBtYXJrZG93biA9IHRoaXMuX3JlcGxhY2VMaXN0cyhtYXJrZG93bik7XG4gICAgICBtYXJrZG93biA9IHRoaXMuX3JlcGxhY2VCdXR0b25zKG1hcmtkb3duKTtcbiAgICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XG4gICAgICAvLyBuZWVkIHRvIHNvcnQgdGhlIHBsYWNlaG9sZGVycyBpbiBvcmRlciBvZiBlbmNvdW50ZXIgaW4gbWFya2Rvd24gY29udGVudFxuICAgICAga2V5cy5zb3J0KChjb21wQTogc3RyaW5nLCBjb21wQjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBtYXJrZG93bi5pbmRleE9mKGNvbXBBKSA+IG1hcmtkb3duLmluZGV4T2YoY29tcEIpID8gMSA6IC0xO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9yZW5kZXIobWFya2Rvd24sIGtleXNbMF0sIGtleXMpO1xuICAgICAgLy8gVE9ETzogdGltZW91dCByZXF1aXJlZCBzaW5jZSByZXNpemluZyBvZiBodG1sIGVsZW1lbnRzIG9jY3VycyB3aGljaCBjYXVzZXMgYSBjaGFuZ2UgaW4gdGhlIHNjcm9sbCBwb3NpdGlvblxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzY3JvbGxUb0FuY2hvcih0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FuY2hvciwgZmFsc2UpLCAyNTApO1xuICAgICAgdGhpcy5jb250ZW50UmVhZHkuZW1pdCgpO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyKG1hcmtkb3duOiBzdHJpbmcsIGtleTogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICghbWFya2Rvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGtleSAmJiBtYXJrZG93bi5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgY29uc3QgbWFya2Rvd25QYXJ0czogc3RyaW5nW10gPSBtYXJrZG93bi5zcGxpdChrZXkpO1xuICAgICAga2V5cy5zaGlmdCgpO1xuICAgICAgdGhpcy5fcmVuZGVyKG1hcmtkb3duUGFydHNbMF0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLnZpZXdDb250YWluZXJSZWYuaW5zZXJ0KHRoaXMuX2NvbXBvbmVudHNba2V5XS5ob3N0VmlldywgdGhpcy5jb250YWluZXIudmlld0NvbnRhaW5lclJlZi5sZW5ndGgpO1xuICAgICAgdGhpcy5fY29tcG9uZW50c1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgZGVsZXRlIHRoaXMuX2NvbXBvbmVudHNba2V5XTtcbiAgICAgIHRoaXMuX3JlbmRlcihtYXJrZG93blBhcnRzWzFdLCBrZXlzWzBdLCBrZXlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGVudFJlZjogQ29tcG9uZW50UmVmPFRkTWFya2Rvd25Db21wb25lbnQ+ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUZE1hcmtkb3duQ29tcG9uZW50KVxuICAgICAgICAuY3JlYXRlKHRoaXMuX2luamVjdG9yKTtcbiAgICAgIGNvbnRlbnRSZWYuaW5zdGFuY2UuY29udGVudCA9IG1hcmtkb3duO1xuICAgICAgY29udGVudFJlZi5pbnN0YW5jZS5ob3N0ZWRVcmwgPSB0aGlzLl9ob3N0ZWRVcmw7XG4gICAgICBjb250ZW50UmVmLmluc3RhbmNlLnNpbXBsZUxpbmVCcmVha3MgPSB0aGlzLl9zaW1wbGVMaW5lQnJlYWtzO1xuICAgICAgY29udGVudFJlZi5pbnN0YW5jZS5yZWZyZXNoKCk7XG4gICAgICB0aGlzLmNvbnRhaW5lci52aWV3Q29udGFpbmVyUmVmLmluc2VydChjb250ZW50UmVmLmhvc3RWaWV3LCB0aGlzLmNvbnRhaW5lci52aWV3Q29udGFpbmVyUmVmLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVwbGFjZUNvbXBvbmVudDxUPihcbiAgICBtYXJrZG93bjogc3RyaW5nLFxuICAgIHR5cGU6IFR5cGU8VD4sXG4gICAgcmVnRXhwOiBSZWdFeHAsXG4gICAgcmVwbGFjZXJGdW5jOiBJUmVwbGFjZXJGdW5jPFQ+LFxuICApOiBzdHJpbmcge1xuICAgIGxldCBjb21wb25lbnRJbmRleDogbnVtYmVyID0gMDtcbiAgICByZXR1cm4gbWFya2Rvd24ucmVwbGFjZShyZWdFeHAsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxUPiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+ID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUodGhpcy5faW5qZWN0b3IpO1xuICAgICAgcmVwbGFjZXJGdW5jKGNvbXBvbmVudFJlZiwgLi4uYXJncyk7XG4gICAgICBjb25zdCBrZXk6IHN0cmluZyA9ICdbJyArIGNvbXBvbmVudEZhY3Rvcnkuc2VsZWN0b3IgKyAnLXBsYWNlaG9sZGVyLScgKyBjb21wb25lbnRJbmRleCsrICsgJ10nO1xuICAgICAgdGhpcy5fY29tcG9uZW50c1trZXldID0gY29tcG9uZW50UmVmO1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcGxhY2VDaGVja2JveChtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjaGVja2JveFJlZ0V4cDogUmVnRXhwID0gLyg/Ol58XFxuKS0gXFxbKHh8IClcXF0oLiopL2dpO1xuICAgIHJldHVybiB0aGlzLl9yZXBsYWNlQ29tcG9uZW50KFxuICAgICAgbWFya2Rvd24sXG4gICAgICBNYXRDaGVja2JveCxcbiAgICAgIGNoZWNrYm94UmVnRXhwLFxuICAgICAgKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPE1hdENoZWNrYm94PiwgbWF0Y2g6IHN0cmluZywgY2hlY2tlZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jaGVja2VkID0gISFjaGVja2VkLnRyaW0oKTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmxhYmVsUG9zaXRpb24gPSAnYWZ0ZXInO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAoPEhUTUxFbGVtZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZS5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgJ21hdC1jaGVja2JveC1sYWJlbCcsXG4gICAgICAgICAgKVswXSxcbiAgICAgICAgICAnaW5uZXJIVE1MJyxcbiAgICAgICAgICBsYWJlbCxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcGxhY2VCdXR0b25zKG1hcmtkb3duOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJ1dHRvblJlZ0V4cDogUmVnRXhwID0gL1xcWyhbXlxcW10rKVxcXShcXCgjZGF0YT0oLiopXFwpKS9pO1xuICAgIGNvbnN0IGdsb2JhbEJ1dHRvblJlZ0V4cDogUmVnRXhwID0gbmV3IFJlZ0V4cChidXR0b25SZWdFeHAuc291cmNlLCBidXR0b25SZWdFeHAuZmxhZ3MgKyAnZycpO1xuICAgIHJldHVybiB0aGlzLl9yZXBsYWNlQ29tcG9uZW50KFxuICAgICAgbWFya2Rvd24sXG4gICAgICBUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25Db21wb25lbnQsXG4gICAgICBnbG9iYWxCdXR0b25SZWdFeHAsXG4gICAgICAoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VGRGbGF2b3JlZE1hcmtkb3duQnV0dG9uQ29tcG9uZW50PiwgbWF0Y2g6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzOiBSZWdFeHBFeGVjQXJyYXkgPSBidXR0b25SZWdFeHAuZXhlYyhtYXRjaCk7XG4gICAgICAgIGNvbnN0IHRleHQ6IHN0cmluZyA9IG1hdGNoZXNbMV07XG4gICAgICAgIGNvbnN0IGRhdGE6IHN0cmluZyA9IG1hdGNoZXNbM107XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS50ZXh0ID0gdGV4dDtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRhdGEgPSBkYXRhO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY2xpY2tlZC5zdWJzY3JpYmUoKGNsaWNrRXZlbnQ6IElUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25DbGlja0V2ZW50KSA9PlxuICAgICAgICAgIHRoaXMuYnV0dG9uQ2xpY2tlZC5lbWl0KGNsaWNrRXZlbnQpLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwbGFjZUNvZGVCbG9ja3MobWFya2Rvd246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY29kZUJsb2NrUmVnRXhwOiBSZWdFeHAgPSAvKD86XnxcXG4pYGBgKC4qKVxcbihbXFxzXFxTXSo/KVxcbmBgYC9nO1xuICAgIHJldHVybiB0aGlzLl9yZXBsYWNlQ29tcG9uZW50KFxuICAgICAgbWFya2Rvd24sXG4gICAgICBUZEhpZ2hsaWdodENvbXBvbmVudCxcbiAgICAgIGNvZGVCbG9ja1JlZ0V4cCxcbiAgICAgIChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUZEhpZ2hsaWdodENvbXBvbmVudD4sIG1hdGNoOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcsIGNvZGVibG9jazogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChsYW5ndWFnZSkge1xuICAgICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5sYW5nID0gbGFuZ3VhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmNvcHlDb2RlVG9DbGlwYm9hcmQgPSB0aGlzLmNvcHlDb2RlVG9DbGlwYm9hcmQ7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb3B5Q29kZVRvb2x0aXBzID0gdGhpcy5jb3B5Q29kZVRvb2x0aXBzO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGVudCA9IGNvZGVibG9jaztcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcGxhY2VUYWJsZXMobWFya2Rvd246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdGFibGVSZ3g6IFJlZ0V4cCA9IC9eIHswLDN9XFx8Py4rXFx8LitcXG5bIFxcdF17MCwzfVxcfD9bIFxcdF0qOj9bIFxcdF0qKD86LXw9KXsyLH1bIFxcdF0qOj9bIFxcdF0qXFx8WyBcXHRdKjo/WyBcXHRdKig/Oi18PSl7Mix9W1xcc1xcU10rPyg/Olxcblxcbnx+MCkvZ207XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VDb21wb25lbnQoXG4gICAgICBtYXJrZG93bixcbiAgICAgIFRkRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgdGFibGVSZ3gsXG4gICAgICAoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VGREYXRhVGFibGVDb21wb25lbnQ+LCBtYXRjaDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFUYWJsZUxpbmVzOiBzdHJpbmdbXSA9IG1hdGNoLnJlcGxhY2UoLyhcXHN8XFx0KSpcXG4rKFxcc3xcXHQpKiQvZywgJycpLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgY29uc3QgY29sdW1uczogc3RyaW5nW10gPSBkYXRhVGFibGVMaW5lc1swXVxuICAgICAgICAgIC5zcGxpdCgnfCcpXG4gICAgICAgICAgLmZpbHRlcigoY29sOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb2w7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAubWFwKChzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYWxpZ25tZW50OiBzdHJpbmdbXSA9IGRhdGFUYWJsZUxpbmVzWzFdXG4gICAgICAgICAgLnNwbGl0KCd8JylcbiAgICAgICAgICAuZmlsdGVyKCh2OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm1hcCgoczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcy50cmltKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb2x1bW5zID0gY29sdW1ucy5tYXAoKGNvbDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgd2lkdGhzOiBzdHJpbmdbXSA9IGFsaWdubWVudFtpbmRleF0uc3BsaXQoJy0tLScpO1xuICAgICAgICAgIGNvbnN0IG1pbjogbnVtYmVyID0gcGFyc2VJbnQod2lkdGhzWzBdLCAxMCk7XG4gICAgICAgICAgY29uc3QgbWF4OiBudW1iZXIgPSBwYXJzZUludCh3aWR0aHNbMV0sIDEwKTtcbiAgICAgICAgICBsZXQgd2lkdGg6IElUZERhdGFUYWJsZUNvbHVtbldpZHRoID0geyBtaW4sIG1heCB9O1xuICAgICAgICAgIGlmIChpc05hTihtaW4pICYmIGlzTmFOKG1heCkpIHtcbiAgICAgICAgICAgIHdpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNOYU4obWF4KSkge1xuICAgICAgICAgICAgd2lkdGgubWF4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNOYU4obWluKSkge1xuICAgICAgICAgICAgd2lkdGgubWluID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IGNvbCxcbiAgICAgICAgICAgIG5hbWU6IGNvbC50b0xvd2VyQ2FzZSgpLnRyaW0oKSxcbiAgICAgICAgICAgIG51bWVyaWM6IC9eLS0qWyBcXHRdKjpbIFxcdF0qJC8udGVzdChhbGlnbm1lbnRbaW5kZXhdKSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGE6IGFueVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDI7IGkgPCBkYXRhVGFibGVMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJvd1NwbGl0OiBzdHJpbmdbXSA9IGRhdGFUYWJsZUxpbmVzW2ldXG4gICAgICAgICAgICAuc3BsaXQoJ3wnKVxuICAgICAgICAgICAgLmZpbHRlcigoY2VsbDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKHM6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcy50cmltKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCByb3c6IGFueSA9IHt9O1xuICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvd1NwbGl0Q2VsbDogc3RyaW5nID0gcm93U3BsaXRbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHJvd1NwbGl0Q2VsbCkge1xuICAgICAgICAgICAgICByb3dbY29sLnRvTG93ZXJDYXNlKCkudHJpbSgpXSA9IHJvd1NwbGl0Q2VsbC5yZXBsYWNlKC9gKC4qKWAvLCAobTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkYXRhLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5zb3J0YWJsZSA9IHRydWU7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5zb3J0Q2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wQTogYW55ID0gYVtldmVudC5uYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBCOiBhbnkgPSBiW2V2ZW50Lm5hbWVdO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSkgJiYgIU51bWJlci5pc05hTihOdW1iZXIucGFyc2VGbG9hdChjb21wQikpKSB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSAtIE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChjb21wQSA8IGNvbXBCKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcEEgPiBjb21wQikge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24gKiAoZXZlbnQub3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmcgPyAtMSA6IDEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcGxhY2VMaXN0cyhtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBsaXN0UmVnRXhwOiBSZWdFeHAgPSAvKD86XnxcXG4pKCggKlxcKylbIHxcXHRdKC4qKVxcbikrL2c7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VDb21wb25lbnQoXG4gICAgICBtYXJrZG93bixcbiAgICAgIFRkRmxhdm9yZWRMaXN0Q29tcG9uZW50LFxuICAgICAgbGlzdFJlZ0V4cCxcbiAgICAgIChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUZEZsYXZvcmVkTGlzdENvbXBvbmVudD4sIG1hdGNoOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgbGluZVRleHRzOiBzdHJpbmdbXSA9IG1hdGNoLnNwbGl0KFxuICAgICAgICAgIG5ldyBSZWdFeHAoJ1xcXFxuIHsnICsgKG1hdGNoLmluZGV4T2YoJysnKSAtIDEpLnRvU3RyaW5nKCkgKyAnfVxcXFwrWyB8XFxcXHRdJyksXG4gICAgICAgICk7XG4gICAgICAgIGxpbmVUZXh0cy5zaGlmdCgpO1xuICAgICAgICBjb25zdCBsaW5lczogSUZsYXZvcmVkTGlzdEl0ZW1bXSA9IFtdO1xuICAgICAgICBsaW5lVGV4dHMuZm9yRWFjaCgodGV4dDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VibGluZVRleHRzOiBzdHJpbmdbXSA9IHRleHQuc3BsaXQoL1xcbiAqXFwrIC8pO1xuICAgICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgbGluZTogc3VibGluZVRleHRzLnNoaWZ0KCksXG4gICAgICAgICAgICBzdWJsaW5lczogc3VibGluZVRleHRzLm1hcCgoc3VibGluZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBzdWJsaW5lLnRyaW0oKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmxpbmVzID0gbGluZXM7XG4gICAgICB9LFxuICAgICk7XG4gIH1cbn1cbiJdfQ==