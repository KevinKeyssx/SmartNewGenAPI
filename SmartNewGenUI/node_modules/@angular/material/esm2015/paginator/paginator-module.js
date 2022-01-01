/**
 * @fileoverview added by tsickle
 * Generated from: src/material/paginator/paginator-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginator } from './paginator';
import { MAT_PAGINATOR_INTL_PROVIDER } from './paginator-intl';
import * as ɵngcc0 from '@angular/core';
export class MatPaginatorModule {
}
MatPaginatorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatPaginatorModule });
MatPaginatorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatPaginatorModule_Factory(t) { return new (t || MatPaginatorModule)(); }, providers: [MAT_PAGINATOR_INTL_PROVIDER], imports: [[
            CommonModule,
            MatButtonModule,
            MatSelectModule,
            MatTooltipModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatPaginatorModule, { declarations: function () { return [MatPaginator]; }, imports: function () { return [CommonModule,
        MatButtonModule,
        MatSelectModule,
        MatTooltipModule]; }, exports: function () { return [MatPaginator]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatPaginatorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatSelectModule,
                    MatTooltipModule,
                ],
                exports: [MatPaginator],
                declarations: [MatPaginator],
                providers: [MAT_PAGINATOR_INTL_PROVIDER]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7QUFjN0QsTUFBTSxPQUFPLGtCQUFrQjtBQUFHOzhDQVhqQyxRQUFRLFNBQUM7QUFDUixPQUFPLEVBQUUsc0JBQ1AsWUFBWSxzQkFDWixlQUFlLHNCQUNmLGVBQWUsc0JBQ2YsZ0JBQWdCLG1CQUNqQixrQkFDRDtBQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsWUFBWSxFQUFFLENBQUM7TUFBWSxDQUFDLGtCQUM1QjtLQUFTLEVBQUUsQ0FBQztLQUEyQixDQUFDO01BQ3pDOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tICcuL3BhZ2luYXRvcic7XG5pbXBvcnQge01BVF9QQUdJTkFUT1JfSU5UTF9QUk9WSURFUn0gZnJvbSAnLi9wYWdpbmF0b3ItaW50bCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtNYXRQYWdpbmF0b3JdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRQYWdpbmF0b3JdLFxuICBwcm92aWRlcnM6IFtNQVRfUEFHSU5BVE9SX0lOVExfUFJPVklERVJdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRQYWdpbmF0b3JNb2R1bGUge31cbiJdfQ==