/**
 * @fileoverview added by tsickle
 * Generated from: src/material/form-field/hint.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input } from '@angular/core';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
let nextUniqueId = 0;
/**
 * Hint text to be shown underneath the form field control.
 */
export class MatHint {
    constructor() {
        /**
         * Whether to align the hint label at the start or end of the line.
         */
        this.align = 'start';
        /**
         * Unique ID for the hint. Used for the aria-describedby on the form field control.
         */
        this.id = `mat-hint-${nextUniqueId++}`;
    }
}
MatHint.ɵfac = function MatHint_Factory(t) { return new (t || MatHint)(); };
MatHint.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHint, selectors: [["mat-hint"]], hostAttrs: [1, "mat-hint"], hostVars: 4, hostBindings: function MatHint_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("id", ctx.id)("align", null);
        ɵngcc0.ɵɵclassProp("mat-right", ctx.align == "end");
    } }, inputs: { align: "align", id: "id" } });
MatHint.propDecorators = {
    align: [{ type: Input }],
    id: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHint, [{
        type: Directive,
        args: [{
                selector: 'mat-hint',
                host: {
                    'class': 'mat-hint',
                    '[class.mat-right]': 'align == "end"',
                    '[attr.id]': 'id',
                    // Remove align attribute to prevent it from interfering with layout.
                    '[attr.align]': 'null'
                }
            }]
    }], function () { return []; }, { align: [{
            type: Input
        }], id: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * Whether to align the hint label at the start or end of the line.
     * @type {?}
     */
    MatHint.prototype.align;
    /**
     * Unique ID for the hint. Used for the aria-describedby on the form field control.
     * @type {?}
     */
    MatHint.prototype.id;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2Zvcm0tZmllbGQvaGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQzs7QUFFZSxJQUFYLFlBQVksR0FBRyxDQUFDO0FBQ3BCO0FBRUU7QUFBNEQ7QUFXOUQsTUFBTSxPQUFPLE9BQU87QUFDcEIsSUFYQTtBQUNHO0FBQVk7QUFHaUI7QUFDL0IsUUFPVSxVQUFLLEdBQW9CLE9BQU8sQ0FBQztBQUM1QztBQUNXO0FBQ0U7QUFBWSxRQUFkLE9BQUUsR0FBVyxZQUFZLFlBQVksRUFBRSxFQUFFLENBQUM7QUFDckQsSUFBQSxDQUFDO0FBQ0Q7bUNBakJDLFNBQVMsU0FBQyxrQkFDVDtFQUFRLEVBQUUsVUFBVSxrQkFDcEIsSUFBSSxFQUFFLHNCQUNKLE9BQU8sRUFBRSxVQUFVLHNCQUNuQixtQkFBbUIsRUFBRSxnQkFBZ0Isc0JBQ3JDLFdBQVcsRUFBRSxJQUFJOztzQ0FFakIsY0FBYyxFQUFFLE1BQU07a0JBQ3ZCLGNBQ0YsaUJBQ0k7QUFBQztBQUNJLG9CQUNQLEtBQUs7QUFBSyxpQkFHVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBYTtBQUFRO0FBRWdCO0FBQWlCO0FBQVEsSUFMM0Usd0JBQTBDO0FBQzVDO0FBQ087QUFDRjtBQUFpQjtBQUFRLElBQTVCLHFCQUFtRDtBQUNyRDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cblxuLyoqIEhpbnQgdGV4dCB0byBiZSBzaG93biB1bmRlcm5lYXRoIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtaGludCcsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWhpbnQnLFxuICAgICdbY2xhc3MubWF0LXJpZ2h0XSc6ICdhbGlnbiA9PSBcImVuZFwiJyxcbiAgICAnW2F0dHIuaWRdJzogJ2lkJyxcbiAgICAvLyBSZW1vdmUgYWxpZ24gYXR0cmlidXRlIHRvIHByZXZlbnQgaXQgZnJvbSBpbnRlcmZlcmluZyB3aXRoIGxheW91dC5cbiAgICAnW2F0dHIuYWxpZ25dJzogJ251bGwnLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1hdEhpbnQge1xuICAvKiogV2hldGhlciB0byBhbGlnbiB0aGUgaGludCBsYWJlbCBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBsaW5lLiAqL1xuICBASW5wdXQoKSBhbGlnbjogJ3N0YXJ0JyB8ICdlbmQnID0gJ3N0YXJ0JztcblxuICAvKiogVW5pcXVlIElEIGZvciB0aGUgaGludC4gVXNlZCBmb3IgdGhlIGFyaWEtZGVzY3JpYmVkYnkgb24gdGhlIGZvcm0gZmllbGQgY29udHJvbC4gKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IGBtYXQtaGludC0ke25leHRVbmlxdWVJZCsrfWA7XG59XG4iXX0=