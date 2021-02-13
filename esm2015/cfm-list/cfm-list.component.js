/**
 * @fileoverview added by tsickle
 * Generated from: cfm-list/cfm-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2ZtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9mbGF2b3JlZC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbImNmbS1saXN0L2NmbS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELHVDQUdDOzs7SUFGQyxpQ0FBYTs7SUFDYixxQ0FBb0I7O0FBUXRCLE1BQU0sT0FBTyx1QkFBdUI7SUFMcEM7UUFPVyxVQUFLLEdBQVksS0FBSyxDQUFDO0lBQ2xDLENBQUM7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFFcEIsd1pBQXdDOzthQUN6Qzs7O29CQUVFLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUROLHdDQUFvQzs7SUFDcEMsd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGbGF2b3JlZExpc3RJdGVtIHtcbiAgbGluZTogc3RyaW5nO1xuICBzdWJsaW5lcz86IHN0cmluZ1tdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZm0tbGlzdCcsXG4gIHN0eWxlVXJsczogWycuL2NmbS1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9jZm0tbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmxhdm9yZWRMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbGluZXM6IElGbGF2b3JlZExpc3RJdGVtW107XG4gIEBJbnB1dCgpIGRlbnNlOiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=