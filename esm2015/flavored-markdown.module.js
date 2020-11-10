/**
 * @fileoverview added by tsickle
 * Generated from: flavored-markdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class CovalentFlavoredMarkdownModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdm9yZWQtbWFya2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2ZsYXZvcmVkLW1hcmtkb3duL2ZsYXZvcmVkLW1hcmtkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBZSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQXdCLE1BQU0sMkJBQTJCLENBQUM7QUFDMUYsT0FBTyxFQUFFLHVCQUF1QixFQUF3QixNQUFNLHFCQUFxQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBdUIsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLG9DQUFvQyxFQUNwQyxpQ0FBaUMsR0FDbEMsTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNsSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFzQjNELE1BQU0sT0FBTyw4QkFBOEI7OztZQXBCMUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLDJCQUEyQjtvQkFDM0Isb0NBQW9DO29CQUNwQyxpQ0FBaUM7b0JBQ2pDLGlDQUFpQztpQkFDbEM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsaUNBQWlDLENBQUM7YUFDMUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0Q2hlY2tib3gsIE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuXG5pbXBvcnQgeyBDb3ZhbGVudERhdGFUYWJsZU1vZHVsZSwgVGREYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICdAY292YWxlbnQvY29yZS9kYXRhLXRhYmxlJztcbmltcG9ydCB7IENvdmFsZW50SGlnaGxpZ2h0TW9kdWxlLCBUZEhpZ2hsaWdodENvbXBvbmVudCB9IGZyb20gJ0Bjb3ZhbGVudC9oaWdobGlnaHQnO1xuaW1wb3J0IHsgQ292YWxlbnRNYXJrZG93bk1vZHVsZSwgVGRNYXJrZG93bkNvbXBvbmVudCB9IGZyb20gJ0Bjb3ZhbGVudC9tYXJrZG93bic7XG5cbmltcG9ydCB7IFRkRmxhdm9yZWRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jZm0tbGlzdC9jZm0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgVGRGbGF2b3JlZE1hcmtkb3duQ29tcG9uZW50LFxuICBUZEZsYXZvcmVkTWFya2Rvd25Db250YWluZXJEaXJlY3RpdmUsXG4gIFRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNvbXBvbmVudCxcbn0gZnJvbSAnLi9mbGF2b3JlZC1tYXJrZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRGbGF2b3JlZE1hcmtkb3duTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mbGF2b3JlZC1tYXJrZG93bi1sb2FkZXIvZmxhdm9yZWQtbWFya2Rvd24tbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgQ292YWxlbnREYXRhVGFibGVNb2R1bGUsXG4gICAgQ292YWxlbnRIaWdobGlnaHRNb2R1bGUsXG4gICAgQ292YWxlbnRNYXJrZG93bk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkRmxhdm9yZWRMaXN0Q29tcG9uZW50LFxuICAgIFRkRmxhdm9yZWRNYXJrZG93bkNvbXBvbmVudCxcbiAgICBUZEZsYXZvcmVkTWFya2Rvd25Db250YWluZXJEaXJlY3RpdmUsXG4gICAgVGRGbGF2b3JlZE1hcmtkb3duTG9hZGVyQ29tcG9uZW50LFxuICAgIFRkRmxhdm9yZWRNYXJrZG93bkJ1dHRvbkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1RkRmxhdm9yZWRNYXJrZG93bkNvbXBvbmVudCwgVGRGbGF2b3JlZE1hcmtkb3duTG9hZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRGbGF2b3JlZE1hcmtkb3duTW9kdWxlIHt9XG4iXX0=