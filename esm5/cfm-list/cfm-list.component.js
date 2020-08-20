/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function IFlavoredListItem() { }
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
export { TdFlavoredListComponent };
if (false) {
    /** @type {?} */
    TdFlavoredListComponent.prototype.lines;
    /** @type {?} */
    TdFlavoredListComponent.prototype.dense;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2ZtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2ZsYXZvcmVkLW1hcmtkb3duLyIsInNvdXJjZXMiOlsiY2ZtLWxpc3QvY2ZtLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVqRCx1Q0FHQzs7O0lBRkMsaUNBQWE7O0lBQ2IscUNBQW9COztBQUd0QjtJQUFBO1FBT1csVUFBSyxHQUFZLEtBQUssQ0FBQztJQUNsQyxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBRXBCLHdaQUF3Qzs7aUJBQ3pDOzs7d0JBRUUsS0FBSzt3QkFDTCxLQUFLOztJQUNSLDhCQUFDO0NBQUEsQUFSRCxJQVFDO1NBSFksdUJBQXVCOzs7SUFDbEMsd0NBQW9DOztJQUNwQyx3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZsYXZvcmVkTGlzdEl0ZW0ge1xuICBsaW5lOiBzdHJpbmc7XG4gIHN1YmxpbmVzPzogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NmbS1saXN0JyxcbiAgc3R5bGVVcmxzOiBbJy4vY2ZtLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NmbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGbGF2b3JlZExpc3RDb21wb25lbnQge1xuICBASW5wdXQoKSBsaW5lczogSUZsYXZvcmVkTGlzdEl0ZW1bXTtcbiAgQElucHV0KCkgZGVuc2U6IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==