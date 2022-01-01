/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/option/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '../ripple/index';
import { MatPseudoCheckboxModule } from '../selection/index';
import { MatOption } from './option';
import { MatOptgroup } from './optgroup';
import * as ɵngcc0 from '@angular/core';
export class MatOptionModule {
}
MatOptionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatOptionModule });
MatOptionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatOptionModule_Factory(t) { return new (t || MatOptionModule)(); }, imports: [[MatRippleModule, CommonModule, MatPseudoCheckboxModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatOptionModule, { declarations: function () { return [MatOption, MatOptgroup]; }, imports: function () { return [MatRippleModule, CommonModule, MatPseudoCheckboxModule]; }, exports: function () { return [MatOption, MatOptgroup]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatOptionModule, [{
        type: NgModule,
        args: [{
                imports: [MatRippleModule, CommonModule, MatPseudoCheckboxModule],
                exports: [MatOption, MatOptgroup],
                declarations: [MatOption, MatOptgroup]
            }]
    }], null, null); })();
export { _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption } from './option';
export { MatOptgroup } from './optgroup';

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9jb3JlL29wdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sWUFBWSxDQUFDOztBQVF2QyxNQUFNLE9BQU8sZUFBZTtBQUFHOzJDQUw5QixRQUFRLFNBQUM7R0FDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDLGtCQUNqRSxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLGtCQUNqQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLGNBQ3ZDOzs7Ozs7Ozs7MEJBQ0k7QUFHTCwwSUFBYyxVQUFVLENBQUM7QUFDekIsNEJBQWMsWUFBWSxDQUFDO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdFJpcHBsZU1vZHVsZX0gZnJvbSAnLi4vcmlwcGxlL2luZGV4JztcbmltcG9ydCB7TWF0UHNldWRvQ2hlY2tib3hNb2R1bGV9IGZyb20gJy4uL3NlbGVjdGlvbi9pbmRleCc7XG5pbXBvcnQge01hdE9wdGlvbn0gZnJvbSAnLi9vcHRpb24nO1xuaW1wb3J0IHtNYXRPcHRncm91cH0gZnJvbSAnLi9vcHRncm91cCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdFJpcHBsZU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBNYXRQc2V1ZG9DaGVja2JveE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXRPcHRpb24sIE1hdE9wdGdyb3VwXSxcbiAgZGVjbGFyYXRpb25zOiBbTWF0T3B0aW9uLCBNYXRPcHRncm91cF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0T3B0aW9uTW9kdWxlIHt9XG5cblxuZXhwb3J0ICogZnJvbSAnLi9vcHRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9vcHRncm91cCc7XG4iXX0=