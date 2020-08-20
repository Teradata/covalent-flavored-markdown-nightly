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
export class TdFlavoredListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2ZtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2ZsYXZvcmVkLW1hcmtkb3duLyIsInNvdXJjZXMiOlsiY2ZtLWxpc3QvY2ZtLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVqRCx1Q0FHQzs7O0lBRkMsaUNBQWE7O0lBQ2IscUNBQW9COztBQVF0QixNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBT1csVUFBSyxHQUFZLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7WUFSQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBRXBCLHdaQUF3Qzs7YUFDekM7OztvQkFFRSxLQUFLO29CQUNMLEtBQUs7Ozs7SUFETix3Q0FBb0M7O0lBQ3BDLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmxhdm9yZWRMaXN0SXRlbSB7XG4gIGxpbmU6IHN0cmluZztcbiAgc3VibGluZXM/OiBzdHJpbmdbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2ZtLWxpc3QnLFxuICBzdHlsZVVybHM6IFsnLi9jZm0tbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY2ZtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZsYXZvcmVkTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxpbmVzOiBJRmxhdm9yZWRMaXN0SXRlbVtdO1xuICBASW5wdXQoKSBkZW5zZTogYm9vbGVhbiA9IGZhbHNlO1xufVxuIl19