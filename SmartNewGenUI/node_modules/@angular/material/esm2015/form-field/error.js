/**
 * @fileoverview added by tsickle
 * Generated from: src/material/form-field/error.ts
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
 * Single error message to be shown underneath the form field.
 */
export class MatError {
    constructor() {
        this.id = `mat-error-${nextUniqueId++}`;
    }
}
MatError.ɵfac = function MatError_Factory(t) { return new (t || MatError)(); };
MatError.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatError, selectors: [["mat-error"]], hostAttrs: ["role", "alert", 1, "mat-error"], hostVars: 1, hostBindings: function MatError_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("id", ctx.id);
    } }, inputs: { id: "id" } });
MatError.propDecorators = {
    id: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatError, [{
        type: Directive,
        args: [{
                selector: 'mat-error',
                host: {
                    'class': 'mat-error',
                    'role': 'alert',
                    '[attr.id]': 'id'
                }
            }]
    }], function () { return []; }, { id: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatError.prototype.id;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DOztBQUVlLElBQVgsWUFBWSxHQUFHLENBQUM7QUFDcEI7QUFFRTtBQUErRDtBQVNqRSxNQUFNLE9BQU8sUUFBUTtBQUNyQixJQVRBO0FBQ0csUUFRUSxPQUFFLEdBQVcsYUFBYSxZQUFZLEVBQUUsRUFBRSxDQUFDO0FBQ3RELElBQUEsQ0FBQztBQUNEO29DQVhDLFNBQVMsU0FBQyxrQkFDVDtBQUFRLEVBQUUsV0FBVyxrQkFDckIsSUFBSSxFQUFFLHNCQUNKLE9BQU8sRUFBRSxXQUFXLHNCQUNwQixNQUFNLEVBQUUsT0FBTyxzQkFDZixXQUFXLEVBQUUsSUFBSSxtQkFDbEIsY0FDRjs7aUNBQ0k7QUFBQztBQUNJLGlCQUFQLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQWE7QUFBcUIsSUFBL0Msc0JBQW9EO0FBQ3REO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuXG4vKiogU2luZ2xlIGVycm9yIG1lc3NhZ2UgdG8gYmUgc2hvd24gdW5kZXJuZWF0aCB0aGUgZm9ybSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1lcnJvcicsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWVycm9yJyxcbiAgICAncm9sZSc6ICdhbGVydCcsXG4gICAgJ1thdHRyLmlkXSc6ICdpZCcsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTWF0RXJyb3Ige1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gYG1hdC1lcnJvci0ke25leHRVbmlxdWVJZCsrfWA7XG59XG4iXX0=