/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/slide-toggle-required-validator.ts
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
export const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MatSlideToggleRequiredValidator)),
    multi: true
};
/**
 * Validator for Material slide-toggle components with the required attribute in a
 * template-driven form. The default validator for required form controls asserts
 * that the control value is not undefined but that is not appropriate for a slide-toggle
 * where the value is always defined.
 *
 * Required slide-toggle form controls are valid when checked.
 */
export class MatSlideToggleRequiredValidator extends CheckboxRequiredValidator {
}
MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) { return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator); };
MatSlideToggleRequiredValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatSlideToggleRequiredValidator, selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatSlideToggleRequiredValidator_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatSlideToggleRequiredValidator);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSlideToggleRequiredValidator, [{
        type: Directive,
        args: [{
                selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
                providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLXJlcXVpcmVkLXZhbGlkYXRvci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUtcmVxdWlyZWQtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsYUFBYSxHQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEI7O0FBQ0EsTUFBTSxPQUFPLG1DQUFtQyxHQUFhO0FBQzdELElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVTtBQUFNO0FBQW1CO0FBQVEsSUFBaEMsR0FBRyxFQUFFLENBQUMsK0JBQStCLEVBQUM7QUFDaEUsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUM7QUFDRDtBQUNHO0FBQytFO0FBQ0Q7QUFDUTtBQUNwRDtBQUNuQztBQUM0RDtBQU85RCxNQUFNLE9BQU8sK0JBQWdDLFNBQVEseUJBQXlCO0FBQUc7MkRBTGhGLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7c0RBQzhFLGtCQUN4RixTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQyxlQUNqRDs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBmb3J3YXJkUmVmLFxuICBQcm92aWRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLFxuICBOR19WQUxJREFUT1JTLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBNQVRfU0xJREVfVE9HR0xFX1JFUVVJUkVEX1ZBTElEQVRPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdFNsaWRlVG9nZ2xlUmVxdWlyZWRWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBWYWxpZGF0b3IgZm9yIE1hdGVyaWFsIHNsaWRlLXRvZ2dsZSBjb21wb25lbnRzIHdpdGggdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSBpbiBhXG4gKiB0ZW1wbGF0ZS1kcml2ZW4gZm9ybS4gVGhlIGRlZmF1bHQgdmFsaWRhdG9yIGZvciByZXF1aXJlZCBmb3JtIGNvbnRyb2xzIGFzc2VydHNcbiAqIHRoYXQgdGhlIGNvbnRyb2wgdmFsdWUgaXMgbm90IHVuZGVmaW5lZCBidXQgdGhhdCBpcyBub3QgYXBwcm9wcmlhdGUgZm9yIGEgc2xpZGUtdG9nZ2xlXG4gKiB3aGVyZSB0aGUgdmFsdWUgaXMgYWx3YXlzIGRlZmluZWQuXG4gKlxuICogUmVxdWlyZWQgc2xpZGUtdG9nZ2xlIGZvcm0gY29udHJvbHMgYXJlIHZhbGlkIHdoZW4gY2hlY2tlZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgbWF0LXNsaWRlLXRvZ2dsZVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xOYW1lXSxcbiAgICAgICAgICAgICBtYXQtc2xpZGUtdG9nZ2xlW3JlcXVpcmVkXVtmb3JtQ29udHJvbF0sIG1hdC1zbGlkZS10b2dnbGVbcmVxdWlyZWRdW25nTW9kZWxdYCxcbiAgcHJvdmlkZXJzOiBbTUFUX1NMSURFX1RPR0dMRV9SRVFVSVJFRF9WQUxJREFUT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRTbGlkZVRvZ2dsZVJlcXVpcmVkVmFsaWRhdG9yIGV4dGVuZHMgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciB7fVxuIl19