/**
 * @fileoverview added by tsickle
 * Generated from: flavored-markdown-loader/flavored-markdown-loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                styles: [":host{display:block}.sticky{position:absolute;top:0}.delay{-webkit-animation:delayAnimation;-webkit-animation-duration:.6s;animation:delayAnimation;animation-duration:.6s}@-webkit-keyframes delayAnimation{0%{opacity:0}99%{opacity:0}to{opacity:1}}@keyframes delayAnimation{0%{opacity:0}99%{opacity:0}to{opacity:1}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9mbGF2b3JlZC1tYXJrZG93bi9mbGF2b3JlZC1tYXJrZG93bi1sb2FkZXIvZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFHakIsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBWTdELE1BQU0sT0FBTyxpQ0FBaUM7Ozs7O0lBbUQ1QyxZQUNVLGtCQUFxQyxFQUNyQyx5QkFBa0Q7UUFEbEQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQXlCOzs7Ozs7O1FBNUJuRCx3QkFBbUIsR0FBWSxLQUFLLENBQUM7Ozs7OztRQU9yQyxxQkFBZ0IsR0FBc0IsRUFBRSxDQUFDOzs7OztRQU14QyxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDOzs7OztRQU10RCxlQUFVLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckQsa0JBQWEsR0FBc0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdoRyxZQUFPLEdBQVksSUFBSSxDQUFDO0lBS3JCLENBQUM7Ozs7O0lBRUosV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFSyxZQUFZOztZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkMsSUFBSTtnQkFDRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN0RjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO29CQUFTO2dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDeEM7UUFDSCxDQUFDO0tBQUE7OztZQS9FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFFdkMsMmVBQXdEO2dCQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFsQkMsaUJBQWlCO1lBT1YsdUJBQXVCOzs7a0JBaUI3QixLQUFLOzBCQU1MLEtBQUs7cUJBTUwsS0FBSztrQ0FRTCxLQUFLOytCQU9MLEtBQUs7MkJBTUwsTUFBTTt5QkFNTixNQUFNOzRCQUVOLE1BQU07Ozs7Ozs7O0lBekNQLGdEQUFxQjs7Ozs7O0lBTXJCLHdEQUE2Qjs7Ozs7O0lBTTdCLG1EQUF3Qjs7Ozs7Ozs7SUFReEIsZ0VBQThDOzs7Ozs7O0lBTzlDLDZEQUFrRDs7Ozs7O0lBTWxELHlEQUFnRTs7Ozs7O0lBTWhFLHVEQUErRDs7SUFFL0QsMERBQWdHOztJQUVoRyxvREFBZ0I7O0lBQ2hCLG9EQUF3Qjs7Ozs7SUFHdEIsK0RBQTZDOzs7OztJQUM3QyxzRUFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGRNYXJrZG93bkxvYWRlclNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvbWFya2Rvd24nO1xuaW1wb3J0IHsgSVRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNsaWNrRXZlbnQgfSBmcm9tICcuLi9mbGF2b3JlZC1tYXJrZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNvcHlDb2RlVG9vbHRpcHMgfSBmcm9tICdAY292YWxlbnQvaGlnaGxpZ2h0JztcblxuLy8gVE9ETzogbWFrZSBhIHRkLW1hcmtkb3duLWxvYWRlciBjb21wb25lbnRcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9mbGF2b3JlZC1tYXJrZG93bi1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRGbGF2b3JlZE1hcmtkb3duTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIHVybDogc3RyaW5nXG4gICAqIFRoZSB1cmwgb2YgdGhlIG1hcmtkb3duIGZpbGUuXG4gICAqL1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcblxuICAvKipcbiAgICogaHR0cE9wdGlvbnM6IG9iamVjdFxuICAgKiBIVFRQIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFydCBvZiB0aGUgcmVxdWVzdC5cbiAgICovXG4gIEBJbnB1dCgpIGh0dHBPcHRpb25zOiBvYmplY3Q7XG5cbiAgLyoqXG4gICAqIGFuY2hvcjogc3RyaW5nXG4gICAqIEFuY2hvciB0byBqdW1wIHRvLlxuICAgKi9cbiAgQElucHV0KCkgYW5jaG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvcHlDb2RlVG9DbGlwYm9hcmQ/OiBib29sZWFuXG4gICAqXG4gICAqIERpc3BsYXkgY29weSBidXR0b24gb24gY29kZSBzbmlwcGV0cyB0byBjb3B5IGNvZGUgdG8gY2xpcGJvYXJkLlxuICAgKlxuICAgKi9cbiAgQElucHV0KCkgY29weUNvZGVUb0NsaXBib2FyZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBjb3B5Q29kZVRvb2x0aXBzPzogSUNvcHlDb2RlVG9vbHRpcHNcbiAgICpcbiAgICogVG9vbHRpcHMgZm9yIGNvcHkgYnV0dG9uIHRvIGNvcHkgYW5kIHVwb24gY29weWluZy5cbiAgICovXG4gIEBJbnB1dCgpIGNvcHlDb2RlVG9vbHRpcHM6IElDb3B5Q29kZVRvb2x0aXBzID0ge307XG5cbiAgLyoqXG4gICAqIGNvbnRlbnRSZWFkeTogdm9pZFxuICAgKiBFbWl0dGVkIHdoZW4gbWFya2Rvd24gcmVuZGVyaW5nIGlzIGZpbmlzaGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBsb2FkRmFpbGVkOiBFcnJvclxuICAgKiBFbWl0dGVkIHdoZW4gbG9hZGluZyBvZiBtYXJrZG93biBmaWxlIGZhaWxzLlxuICAgKi9cbiAgQE91dHB1dCgpIGxvYWRGYWlsZWQ6IEV2ZW50RW1pdHRlcjxFcnJvcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxJVGRGbGF2b3JlZE1hcmtkb3duQnV0dG9uQ2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29udGVudDogc3RyaW5nO1xuICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbWFya2Rvd25VcmxMb2FkZXJTZXJ2aWNlOiBUZE1hcmtkb3duTG9hZGVyU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy51cmwgfHwgY2hhbmdlcy5odHRwT3B0aW9ucykge1xuICAgICAgdGhpcy5sb2FkTWFya2Rvd24oKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2FkTWFya2Rvd24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb250ZW50ID0gYXdhaXQgdGhpcy5fbWFya2Rvd25VcmxMb2FkZXJTZXJ2aWNlLmxvYWQodGhpcy51cmwsIHRoaXMuaHR0cE9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmxvYWRGYWlsZWQuZW1pdChlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=