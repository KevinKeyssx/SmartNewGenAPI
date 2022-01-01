/**
 * @fileoverview added by tsickle
 * Generated from: src/material/checkbox/checkbox-required-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, forwardRef, } from '@angular/core';
import { CheckboxRequiredValidator, NG_VALIDATORS, } from '@angular/forms';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
export const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MatCheckboxRequiredValidator)),
    multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
export class MatCheckboxRequiredValidator extends CheckboxRequiredValidator {
}
MatCheckboxRequiredValidator.ɵfac = function MatCheckboxRequiredValidator_Factory(t) { return ɵMatCheckboxRequiredValidator_BaseFactory(t || MatCheckboxRequiredValidator); };
MatCheckboxRequiredValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCheckboxRequiredValidator, selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([MAT_CHECKBOX_REQUIRED_VALIDATOR]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatCheckboxRequiredValidator_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatCheckboxRequiredValidator);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCheckboxRequiredValidator, [{
        type: Directive,
        args: [{
                selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
                providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtcmVxdWlyZWQtdmFsaWRhdG9yLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvY2hlY2tib3gvY2hlY2tib3gtcmVxdWlyZWQtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsYUFBYSxHQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEI7O0FBQ0EsTUFBTSxPQUFPLCtCQUErQixHQUFhO0FBQ3pELElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVTtBQUFNO0FBQW1CO0FBQVEsSUFBaEMsR0FBRyxFQUFFLENBQUMsNEJBQTRCLEVBQUM7QUFDN0QsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUM7QUFDRDtBQUNHO0FBQ2lGO0FBQ0U7QUFDMUQ7QUFPNUIsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHlCQUF5QjtBQUFHO3dEQUw3RSxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO21EQUNzRSxrQkFDaEYsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUMsZUFDN0M7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgZm9yd2FyZFJlZixcbiAgUHJvdmlkZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcixcbiAgTkdfVkFMSURBVE9SUyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgTUFUX0NIRUNLQk9YX1JFUVVJUkVEX1ZBTElEQVRPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBWYWxpZGF0b3IgZm9yIE1hdGVyaWFsIGNoZWNrYm94J3MgcmVxdWlyZWQgYXR0cmlidXRlIGluIHRlbXBsYXRlLWRyaXZlbiBjaGVja2JveC5cbiAqIEN1cnJlbnQgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciBvbmx5IHdvcmsgd2l0aCBgaW5wdXQgdHlwZT1jaGVja2JveGAgYW5kIGRvZXMgbm90XG4gKiB3b3JrIHdpdGggYG1hdC1jaGVja2JveGAuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYG1hdC1jaGVja2JveFtyZXF1aXJlZF1bZm9ybUNvbnRyb2xOYW1lXSxcbiAgICAgICAgICAgICBtYXQtY2hlY2tib3hbcmVxdWlyZWRdW2Zvcm1Db250cm9sXSwgbWF0LWNoZWNrYm94W3JlcXVpcmVkXVtuZ01vZGVsXWAsXG4gIHByb3ZpZGVyczogW01BVF9DSEVDS0JPWF9SRVFVSVJFRF9WQUxJREFUT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yIGV4dGVuZHMgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciB7fVxuIl19