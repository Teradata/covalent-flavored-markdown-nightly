/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter, __generator } from "tslib";
import { Component, Input, ChangeDetectorRef, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { TdMarkdownLoaderService } from '@covalent/markdown';
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
export { TdFlavoredMarkdownLoaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9mbGF2b3JlZC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbImZsYXZvcmVkLW1hcmtkb3duLWxvYWRlci9mbGF2b3JlZC1tYXJrZG93bi1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBR2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQU03RDtJQXlERSwyQ0FDVSxrQkFBcUMsRUFDckMseUJBQWtEO1FBRGxELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5Qjs7Ozs7OztRQTVCbkQsd0JBQW1CLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFPckMscUJBQWdCLEdBQXNCLEVBQUUsQ0FBQzs7Ozs7UUFNeEMsaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Ozs7UUFNdEQsZUFBVSxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJELGtCQUFhLEdBQXNELElBQUksWUFBWSxFQUFFLENBQUM7UUFHaEcsWUFBTyxHQUFZLElBQUksQ0FBQztJQUtyQixDQUFDOzs7OztJQUVKLHVEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBRUssd0RBQVk7OztJQUFsQjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7d0JBRXJDLEtBQUEsSUFBSSxDQUFBO3dCQUFXLHFCQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUE7O3dCQUFwRixHQUFLLE9BQU8sR0FBRyxTQUFxRSxDQUFDOzs7O3dCQUVyRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFLLENBQUMsQ0FBQzs7O3dCQUU1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDOzs7Ozs7S0FFMUM7O2dCQS9FRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFFdkMsMmVBQXdEO29CQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQWxCQyxpQkFBaUI7Z0JBT1YsdUJBQXVCOzs7c0JBaUI3QixLQUFLOzhCQU1MLEtBQUs7eUJBTUwsS0FBSztzQ0FRTCxLQUFLO21DQU9MLEtBQUs7K0JBTUwsTUFBTTs2QkFNTixNQUFNO2dDQUVOLE1BQU07O0lBNEJULHdDQUFDO0NBQUEsQUFoRkQsSUFnRkM7U0ExRVksaUNBQWlDOzs7Ozs7O0lBSzVDLGdEQUFxQjs7Ozs7O0lBTXJCLHdEQUE2Qjs7Ozs7O0lBTTdCLG1EQUF3Qjs7Ozs7Ozs7SUFReEIsZ0VBQThDOzs7Ozs7O0lBTzlDLDZEQUFrRDs7Ozs7O0lBTWxELHlEQUFnRTs7Ozs7O0lBTWhFLHVEQUErRDs7SUFFL0QsMERBQWdHOztJQUVoRyxvREFBZ0I7O0lBQ2hCLG9EQUF3Qjs7Ozs7SUFHdEIsK0RBQTZDOzs7OztJQUM3QyxzRUFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGRNYXJrZG93bkxvYWRlclNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvbWFya2Rvd24nO1xuaW1wb3J0IHsgSVRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNsaWNrRXZlbnQgfSBmcm9tICcuLi9mbGF2b3JlZC1tYXJrZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNvcHlDb2RlVG9vbHRpcHMgfSBmcm9tICdAY292YWxlbnQvaGlnaGxpZ2h0JztcblxuLy8gVE9ETzogbWFrZSBhIHRkLW1hcmtkb3duLWxvYWRlciBjb21wb25lbnRcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9mbGF2b3JlZC1tYXJrZG93bi1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRGbGF2b3JlZE1hcmtkb3duTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIHVybDogc3RyaW5nXG4gICAqIFRoZSB1cmwgb2YgdGhlIG1hcmtkb3duIGZpbGUuXG4gICAqL1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcblxuICAvKipcbiAgICogaHR0cE9wdGlvbnM6IG9iamVjdFxuICAgKiBIVFRQIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFydCBvZiB0aGUgcmVxdWVzdC5cbiAgICovXG4gIEBJbnB1dCgpIGh0dHBPcHRpb25zOiBvYmplY3Q7XG5cbiAgLyoqXG4gICAqIGFuY2hvcjogc3RyaW5nXG4gICAqIEFuY2hvciB0byBqdW1wIHRvLlxuICAgKi9cbiAgQElucHV0KCkgYW5jaG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvcHlDb2RlVG9DbGlwYm9hcmQ/OiBib29sZWFuXG4gICAqXG4gICAqIERpc3BsYXkgY29weSBidXR0b24gb24gY29kZSBzbmlwcGV0cyB0byBjb3B5IGNvZGUgdG8gY2xpcGJvYXJkLlxuICAgKlxuICAgKi9cbiAgQElucHV0KCkgY29weUNvZGVUb0NsaXBib2FyZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBjb3B5Q29kZVRvb2x0aXBzPzogSUNvcHlDb2RlVG9vbHRpcHNcbiAgICpcbiAgICogVG9vbHRpcHMgZm9yIGNvcHkgYnV0dG9uIHRvIGNvcHkgYW5kIHVwb24gY29weWluZy5cbiAgICovXG4gIEBJbnB1dCgpIGNvcHlDb2RlVG9vbHRpcHM6IElDb3B5Q29kZVRvb2x0aXBzID0ge307XG5cbiAgLyoqXG4gICAqIGNvbnRlbnRSZWFkeTogdm9pZFxuICAgKiBFbWl0dGVkIHdoZW4gbWFya2Rvd24gcmVuZGVyaW5nIGlzIGZpbmlzaGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbnRlbnRSZWFkeTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBsb2FkRmFpbGVkOiBFcnJvclxuICAgKiBFbWl0dGVkIHdoZW4gbG9hZGluZyBvZiBtYXJrZG93biBmaWxlIGZhaWxzLlxuICAgKi9cbiAgQE91dHB1dCgpIGxvYWRGYWlsZWQ6IEV2ZW50RW1pdHRlcjxFcnJvcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxJVGRGbGF2b3JlZE1hcmtkb3duQnV0dG9uQ2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29udGVudDogc3RyaW5nO1xuICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbWFya2Rvd25VcmxMb2FkZXJTZXJ2aWNlOiBUZE1hcmtkb3duTG9hZGVyU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy51cmwgfHwgY2hhbmdlcy5odHRwT3B0aW9ucykge1xuICAgICAgdGhpcy5sb2FkTWFya2Rvd24oKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2FkTWFya2Rvd24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb250ZW50ID0gYXdhaXQgdGhpcy5fbWFya2Rvd25VcmxMb2FkZXJTZXJ2aWNlLmxvYWQodGhpcy51cmwsIHRoaXMuaHR0cE9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmxvYWRGYWlsZWQuZW1pdChlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=