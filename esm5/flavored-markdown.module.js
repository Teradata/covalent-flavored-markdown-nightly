/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { TdFlavoredListComponent } from './cfm-list/cfm-list.component';
import { TdFlavoredMarkdownComponent, TdFlavoredMarkdownContainerDirective, TdFlavoredMarkdownButtonComponent, } from './flavored-markdown.component';
import { TdFlavoredMarkdownLoaderComponent } from './flavored-markdown-loader/flavored-markdown-loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
var CovalentFlavoredMarkdownModule = /** @class */ (function () {
    function CovalentFlavoredMarkdownModule() {
    }
    CovalentFlavoredMarkdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatCheckboxModule,
                        MatListModule,
                        MatProgressBarModule,
                        CovalentDataTableModule,
                        CovalentHighlightModule,
                        CovalentMarkdownModule,
                        MatButtonModule,
                    ],
                    declarations: [
                        TdFlavoredListComponent,
                        TdFlavoredMarkdownComponent,
                        TdFlavoredMarkdownContainerDirective,
                        TdFlavoredMarkdownLoaderComponent,
                        TdFlavoredMarkdownButtonComponent,
                    ],
                    exports: [TdFlavoredMarkdownComponent, TdFlavoredMarkdownLoaderComponent],
                },] }
    ];
    return CovalentFlavoredMarkdownModule;
}());
export { CovalentFlavoredMarkdownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdm9yZWQtbWFya2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2ZsYXZvcmVkLW1hcmtkb3duLyIsInNvdXJjZXMiOlsiZmxhdm9yZWQtbWFya2Rvd24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHVCQUF1QixFQUF3QixNQUFNLDJCQUEyQixDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBd0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQXVCLE1BQU0sb0JBQW9CLENBQUM7QUFFakYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUNMLDJCQUEyQixFQUMzQixvQ0FBb0MsRUFDcEMsaUNBQWlDLEdBQ2xDLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDbEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNEO0lBQUE7SUFvQjZDLENBQUM7O2dCQXBCN0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRTt3QkFDWix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjt3QkFDM0Isb0NBQW9DO3dCQUNwQyxpQ0FBaUM7d0JBQ2pDLGlDQUFpQztxQkFDbEM7b0JBQ0QsT0FBTyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsaUNBQWlDLENBQUM7aUJBQzFFOztJQUM0QyxxQ0FBQztDQUFBLEFBcEI5QyxJQW9COEM7U0FBakMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdENoZWNrYm94LCBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcblxuaW1wb3J0IHsgQ292YWxlbnREYXRhVGFibGVNb2R1bGUsIFRkRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZSc7XG5pbXBvcnQgeyBDb3ZhbGVudEhpZ2hsaWdodE1vZHVsZSwgVGRIaWdobGlnaHRDb21wb25lbnQgfSBmcm9tICdAY292YWxlbnQvaGlnaGxpZ2h0JztcbmltcG9ydCB7IENvdmFsZW50TWFya2Rvd25Nb2R1bGUsIFRkTWFya2Rvd25Db21wb25lbnQgfSBmcm9tICdAY292YWxlbnQvbWFya2Rvd24nO1xuXG5pbXBvcnQgeyBUZEZsYXZvcmVkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY2ZtLWxpc3QvY2ZtLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFRkRmxhdm9yZWRNYXJrZG93bkNvbXBvbmVudCxcbiAgVGRGbGF2b3JlZE1hcmtkb3duQ29udGFpbmVyRGlyZWN0aXZlLFxuICBUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25Db21wb25lbnQsXG59IGZyb20gJy4vZmxhdm9yZWQtbWFya2Rvd24uY29tcG9uZW50JztcbmltcG9ydCB7IFRkRmxhdm9yZWRNYXJrZG93bkxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyL2ZsYXZvcmVkLW1hcmtkb3duLWxvYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIENvdmFsZW50RGF0YVRhYmxlTW9kdWxlLFxuICAgIENvdmFsZW50SGlnaGxpZ2h0TW9kdWxlLFxuICAgIENvdmFsZW50TWFya2Rvd25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZEZsYXZvcmVkTGlzdENvbXBvbmVudCxcbiAgICBUZEZsYXZvcmVkTWFya2Rvd25Db21wb25lbnQsXG4gICAgVGRGbGF2b3JlZE1hcmtkb3duQ29udGFpbmVyRGlyZWN0aXZlLFxuICAgIFRkRmxhdm9yZWRNYXJrZG93bkxvYWRlckNvbXBvbmVudCxcbiAgICBUZEZsYXZvcmVkTWFya2Rvd25CdXR0b25Db21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtUZEZsYXZvcmVkTWFya2Rvd25Db21wb25lbnQsIFRkRmxhdm9yZWRNYXJrZG93bkxvYWRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50Rmxhdm9yZWRNYXJrZG93bk1vZHVsZSB7fVxuIl19