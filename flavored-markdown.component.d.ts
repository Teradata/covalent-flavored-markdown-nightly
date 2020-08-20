import { AfterViewInit, Renderer2, ChangeDetectorRef, EventEmitter, ViewContainerRef, ComponentFactoryResolver, Injector, ComponentRef, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { ICopyCodeTooltips } from '@covalent/highlight';
export interface ITdFlavoredMarkdownButtonClickEvent {
    text: string;
    data: string;
}
export declare class TdFlavoredMarkdownButtonComponent {
    display: string;
    text: string;
    data: string;
    clicked: EventEmitter<ITdFlavoredMarkdownButtonClickEvent>;
    emitClick(): void;
}
export declare class TdFlavoredMarkdownContainerDirective {
    viewContainerRef: ViewContainerRef;
    private _renderer;
    constructor(viewContainerRef: ViewContainerRef, _renderer: Renderer2);
    clear(): void;
}
export declare type IReplacerFunc<T> = (componentRef: ComponentRef<T>, ...args: any[]) => void;
export declare class TdFlavoredMarkdownComponent implements AfterViewInit, OnChanges {
    private _componentFactoryResolver;
    private _renderer;
    private _changeDetectorRef;
    private _injector;
    private _elementRef;
    private _content;
    private _simpleLineBreaks;
    private _hostedUrl;
    private _anchor;
    private _components;
    private _viewInit;
    /**
     * content?: string
     *
     * Markdown format content to be parsed as material/covalent markup.
     *
     * e.g. README.md content.
     */
    set content(content: string);
    /**
     * simpleLineBreaks?: string
     *
     * Sets whether newline characters inside paragraphs and spans are parsed as <br/>.
     * Defaults to false.
     */
    set simpleLineBreaks(simpleLineBreaks: boolean);
    /**
     * hostedUrl?: string
     *
     * If markdown contains relative paths, this is required to generate correct urls
     *
     */
    set hostedUrl(hostedUrl: string);
    /**
     * anchor?: string
     *
     * Anchor to jump to
     *
     */
    set anchor(anchor: string);
    /**
     * copyCodeToClipboard?: boolean
     *
     * Display copy button on code snippets to copy code to clipboard.
     *
     */
    copyCodeToClipboard: boolean;
    /**
     * copyCodeTooltips?: ICopyCodeTooltips
     *
     * Tooltips for copy button to copy and upon copying.
     */
    copyCodeTooltips: ICopyCodeTooltips;
    /**
     * contentReady?: function
     * Event emitted after the markdown content rendering is finished.
     */
    contentReady: EventEmitter<undefined>;
    /**
     * buttonClicked?: ITdFlavoredMarkdownButtonClickEvent
     * Event emitted when a button is clicked
     * Is an object containing text and data of button
     */
    buttonClicked: EventEmitter<ITdFlavoredMarkdownButtonClickEvent>;
    container: TdFlavoredMarkdownContainerDirective;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef, _injector: Injector, _elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    refresh(): void;
    private _loadContent;
    private _render;
    private _replaceComponent;
    private _replaceCheckbox;
    private _replaceButtons;
    private _replaceCodeBlocks;
    private _replaceTables;
    private _replaceLists;
}
