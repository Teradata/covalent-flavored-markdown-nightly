/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { Component, Input, ChangeDetectorRef, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { TdMarkdownLoaderService } from '@covalent/markdown';
// TODO: make a td-markdown-loader component
export class TdFlavoredMarkdownLoaderComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9mbGF2b3JlZC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbImZsYXZvcmVkLW1hcmtkb3duLWxvYWRlci9mbGF2b3JlZC1tYXJrZG93bi1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBR2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQVk3RCxNQUFNLE9BQU8saUNBQWlDOzs7OztJQW1ENUMsWUFDVSxrQkFBcUMsRUFDckMseUJBQWtEO1FBRGxELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5Qjs7Ozs7OztRQTVCbkQsd0JBQW1CLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFPckMscUJBQWdCLEdBQXNCLEVBQUUsQ0FBQzs7Ozs7UUFNeEMsaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Ozs7UUFNdEQsZUFBVSxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJELGtCQUFhLEdBQXNELElBQUksWUFBWSxFQUFFLENBQUM7UUFHaEcsWUFBTyxHQUFZLElBQUksQ0FBQztJQUtyQixDQUFDOzs7OztJQUVKLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBRUssWUFBWTs7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDdEY7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtvQkFBUztnQkFDUixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQztLQUFBOzs7WUEvRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBRXZDLDJlQUF3RDtnQkFDeEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBbEJDLGlCQUFpQjtZQU9WLHVCQUF1Qjs7O2tCQWlCN0IsS0FBSzswQkFNTCxLQUFLO3FCQU1MLEtBQUs7a0NBUUwsS0FBSzsrQkFPTCxLQUFLOzJCQU1MLE1BQU07eUJBTU4sTUFBTTs0QkFFTixNQUFNOzs7Ozs7OztJQXpDUCxnREFBcUI7Ozs7OztJQU1yQix3REFBNkI7Ozs7OztJQU03QixtREFBd0I7Ozs7Ozs7O0lBUXhCLGdFQUE4Qzs7Ozs7OztJQU85Qyw2REFBa0Q7Ozs7OztJQU1sRCx5REFBZ0U7Ozs7OztJQU1oRSx1REFBK0Q7O0lBRS9ELDBEQUFnRzs7SUFFaEcsb0RBQWdCOztJQUNoQixvREFBd0I7Ozs7O0lBR3RCLCtEQUE2Qzs7Ozs7SUFDN0Msc0VBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkTWFya2Rvd25Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnQGNvdmFsZW50L21hcmtkb3duJztcbmltcG9ydCB7IElUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25DbGlja0V2ZW50IH0gZnJvbSAnLi4vZmxhdm9yZWQtbWFya2Rvd24uY29tcG9uZW50JztcbmltcG9ydCB7IElDb3B5Q29kZVRvb2x0aXBzIH0gZnJvbSAnQGNvdmFsZW50L2hpZ2hsaWdodCc7XG5cbi8vIFRPRE86IG1ha2UgYSB0ZC1tYXJrZG93bi1sb2FkZXIgY29tcG9uZW50XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWZsYXZvcmVkLW1hcmtkb3duLWxvYWRlcicsXG4gIHN0eWxlVXJsczogWycuL2ZsYXZvcmVkLW1hcmtkb3duLWxvYWRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmxhdm9yZWRNYXJrZG93bkxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiB1cmw6IHN0cmluZ1xuICAgKiBUaGUgdXJsIG9mIHRoZSBtYXJrZG93biBmaWxlLlxuICAgKi9cbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGh0dHBPcHRpb25zOiBvYmplY3RcbiAgICogSFRUUCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhcnQgb2YgdGhlIHJlcXVlc3QuXG4gICAqL1xuICBASW5wdXQoKSBodHRwT3B0aW9uczogb2JqZWN0O1xuXG4gIC8qKlxuICAgKiBhbmNob3I6IHN0cmluZ1xuICAgKiBBbmNob3IgdG8ganVtcCB0by5cbiAgICovXG4gIEBJbnB1dCgpIGFuY2hvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjb3B5Q29kZVRvQ2xpcGJvYXJkPzogYm9vbGVhblxuICAgKlxuICAgKiBEaXNwbGF5IGNvcHkgYnV0dG9uIG9uIGNvZGUgc25pcHBldHMgdG8gY29weSBjb2RlIHRvIGNsaXBib2FyZC5cbiAgICpcbiAgICovXG4gIEBJbnB1dCgpIGNvcHlDb2RlVG9DbGlwYm9hcmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogY29weUNvZGVUb29sdGlwcz86IElDb3B5Q29kZVRvb2x0aXBzXG4gICAqXG4gICAqIFRvb2x0aXBzIGZvciBjb3B5IGJ1dHRvbiB0byBjb3B5IGFuZCB1cG9uIGNvcHlpbmcuXG4gICAqL1xuICBASW5wdXQoKSBjb3B5Q29kZVRvb2x0aXBzOiBJQ29weUNvZGVUb29sdGlwcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBjb250ZW50UmVhZHk6IHZvaWRcbiAgICogRW1pdHRlZCB3aGVuIG1hcmtkb3duIHJlbmRlcmluZyBpcyBmaW5pc2hlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjb250ZW50UmVhZHk6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogbG9hZEZhaWxlZDogRXJyb3JcbiAgICogRW1pdHRlZCB3aGVuIGxvYWRpbmcgb2YgbWFya2Rvd24gZmlsZSBmYWlscy5cbiAgICovXG4gIEBPdXRwdXQoKSBsb2FkRmFpbGVkOiBFdmVudEVtaXR0ZXI8RXJyb3I+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBidXR0b25DbGlja2VkOiBFdmVudEVtaXR0ZXI8SVRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX21hcmtkb3duVXJsTG9hZGVyU2VydmljZTogVGRNYXJrZG93bkxvYWRlclNlcnZpY2UsXG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudXJsIHx8IGNoYW5nZXMuaHR0cE9wdGlvbnMpIHtcbiAgICAgIHRoaXMubG9hZE1hcmtkb3duKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9hZE1hcmtkb3duKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29udGVudCA9IGF3YWl0IHRoaXMuX21hcmtkb3duVXJsTG9hZGVyU2VydmljZS5sb2FkKHRoaXMudXJsLCB0aGlzLmh0dHBPcHRpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5sb2FkRmFpbGVkLmVtaXQoZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIl19