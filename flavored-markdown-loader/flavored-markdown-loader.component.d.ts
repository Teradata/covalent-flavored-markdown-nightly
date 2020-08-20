import { ChangeDetectorRef, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { TdMarkdownLoaderService } from '@covalent/markdown';
import { ITdFlavoredMarkdownButtonClickEvent } from '../flavored-markdown.component';
import { ICopyCodeTooltips } from '@covalent/highlight';
export declare class TdFlavoredMarkdownLoaderComponent implements OnChanges {
    private _changeDetectorRef;
    private _markdownUrlLoaderService;
    /**
     * url: string
     * The url of the markdown file.
     */
    url: string;
    /**
     * httpOptions: object
     * HTTP options that can be part of the request.
     */
    httpOptions: object;
    /**
     * anchor: string
     * Anchor to jump to.
     */
    anchor: string;
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
     * contentReady: void
     * Emitted when markdown rendering is finished.
     */
    contentReady: EventEmitter<void>;
    /**
     * loadFailed: Error
     * Emitted when loading of markdown file fails.
     */
    loadFailed: EventEmitter<Error>;
    buttonClicked: EventEmitter<ITdFlavoredMarkdownButtonClickEvent>;
    content: string;
    loading: boolean;
    constructor(_changeDetectorRef: ChangeDetectorRef, _markdownUrlLoaderService: TdMarkdownLoaderService);
    ngOnChanges(changes: SimpleChanges): void;
    loadMarkdown(): Promise<void>;
}
