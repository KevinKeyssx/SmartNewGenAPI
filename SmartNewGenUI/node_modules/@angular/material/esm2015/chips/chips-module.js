/**
 * @fileoverview added by tsickle
 * Generated from: src/material/chips/chips-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ENTER } from '@angular/cdk/keycodes';
import { NgModule } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatChip, MatChipAvatar, MatChipRemove, MatChipTrailingIcon } from './chip';
import { MAT_CHIPS_DEFAULT_OPTIONS } from './chip-default-options';
import { MatChipInput } from './chip-input';
import { MatChipList } from './chip-list';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
const CHIP_DECLARATIONS = [
    MatChipList,
    MatChip,
    MatChipInput,
    MatChipRemove,
    MatChipAvatar,
    MatChipTrailingIcon,
];
const ɵ0 = ({
    separatorKeyCodes: [ENTER]
});
export class MatChipsModule {
}
MatChipsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatChipsModule });
MatChipsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatChipsModule_Factory(t) { return new (t || MatChipsModule)(); }, providers: [
        ErrorStateMatcher,
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: ( /** @type {?} */(ɵ0))
        }
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatChipsModule, { declarations: [MatChipList,
        MatChip,
        MatChipInput,
        MatChipRemove,
        MatChipAvatar,
        MatChipTrailingIcon], exports: [MatChipList,
        MatChip,
        MatChipInput,
        MatChipRemove,
        MatChipAvatar,
        MatChipTrailingIcon] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatChipsModule, [{
        type: NgModule,
        args: [{
                exports: CHIP_DECLARATIONS,
                declarations: CHIP_DECLARATIONS,
                providers: [
                    ErrorStateMatcher,
                    {
                        provide: MAT_CHIPS_DEFAULT_OPTIONS,
                        useValue: ( /** @type {?} */(ɵ0))
                    }
                ]
            }]
    }], null, null); })();
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtbW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNsRixPQUFPLEVBQUMseUJBQXlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3hDOztBQUNnQixNQUFWLGlCQUFpQixHQUFHO0FBQzFCLElBQUUsV0FBVztBQUNiLElBQUUsT0FBTztBQUNULElBQUUsWUFBWTtBQUNkLElBQUUsYUFBYTtBQUNmLElBQUUsYUFBYTtBQUNmLElBQUUsbUJBQW1CO0FBQ3JCLENBQUM7QUFDRCxXQVFnQixDQUFBO0FBQ2hCLElBQVEsaUJBQWlCLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDbEMsQ0FBTyxDQUEwQjtBQUlqQyxNQUFNLE9BQU8sY0FBYztBQUFHOzBDQWI3QixRQUFRLFNBQUM7SUFDUixPQUFPLEVBQUUsaUJBQWlCLGtCQUMxQixZQUFZLEVBQUUsaUJBQWlCLGtCQUMvQixTQUFTLEVBQUUsc0JBQ1Q7Q0FBaUIsc0JBQ2pCOztZQUNFLE9BQU8sRUFBRSx5QkFBeUI7d0JBQ2xDLFFBQVEsRUFBRTs7Q0FFaUI7YUFDNUIsa0JBQ0YsY0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUM7QUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0VOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Vycm9yU3RhdGVNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0Q2hpcCwgTWF0Q2hpcEF2YXRhciwgTWF0Q2hpcFJlbW92ZSwgTWF0Q2hpcFRyYWlsaW5nSWNvbn0gZnJvbSAnLi9jaGlwJztcbmltcG9ydCB7TUFUX0NISVBTX0RFRkFVTFRfT1BUSU9OUywgTWF0Q2hpcHNEZWZhdWx0T3B0aW9uc30gZnJvbSAnLi9jaGlwLWRlZmF1bHQtb3B0aW9ucyc7XG5pbXBvcnQge01hdENoaXBJbnB1dH0gZnJvbSAnLi9jaGlwLWlucHV0JztcbmltcG9ydCB7TWF0Q2hpcExpc3R9IGZyb20gJy4vY2hpcC1saXN0JztcblxuY29uc3QgQ0hJUF9ERUNMQVJBVElPTlMgPSBbXG4gIE1hdENoaXBMaXN0LFxuICBNYXRDaGlwLFxuICBNYXRDaGlwSW5wdXQsXG4gIE1hdENoaXBSZW1vdmUsXG4gIE1hdENoaXBBdmF0YXIsXG4gIE1hdENoaXBUcmFpbGluZ0ljb24sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBDSElQX0RFQ0xBUkFUSU9OUyxcbiAgZGVjbGFyYXRpb25zOiBDSElQX0RFQ0xBUkFUSU9OUyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRXJyb3JTdGF0ZU1hdGNoZXIsXG4gICAge1xuICAgICAgcHJvdmlkZTogTUFUX0NISVBTX0RFRkFVTFRfT1BUSU9OUyxcbiAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgIHNlcGFyYXRvcktleUNvZGVzOiBbRU5URVJdXG4gICAgICB9IGFzIE1hdENoaXBzRGVmYXVsdE9wdGlvbnNcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2hpcHNNb2R1bGUge31cbiJdfQ==