/**
 * @fileoverview added by tsickle
 * Generated from: src/material/form-field/form-field-control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive } from '@angular/core';
/**
 * An interface which allows a control to work inside of a `MatFormField`.
 * @abstract
 * @template T
 */
import * as ɵngcc0 from '@angular/core';
export class MatFormFieldControl {
}
MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) { return new (t || MatFormFieldControl)(); };
MatFormFieldControl.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFormFieldControl });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFormFieldControl, [{
        type: Directive
    }], null, null); })();
if (false) {
    /**
     * The value of the control.
     * @type {?}
     */
    MatFormFieldControl.prototype.value;
    /**
     * Stream that emits whenever the state of the control changes such that the parent `MatFormField`
     * needs to run change detection.
     * @type {?}
     */
    MatFormFieldControl.prototype.stateChanges;
    /**
     * The element ID for this control.
     * @type {?}
     */
    MatFormFieldControl.prototype.id;
    /**
     * The placeholder for this control.
     * @type {?}
     */
    MatFormFieldControl.prototype.placeholder;
    /**
     * Gets the NgControl for this control.
     * @type {?}
     */
    MatFormFieldControl.prototype.ngControl;
    /**
     * Whether the control is focused.
     * @type {?}
     */
    MatFormFieldControl.prototype.focused;
    /**
     * Whether the control is empty.
     * @type {?}
     */
    MatFormFieldControl.prototype.empty;
    /**
     * Whether the `MatFormField` label should try to float.
     * @type {?}
     */
    MatFormFieldControl.prototype.shouldLabelFloat;
    /**
     * Whether the control is required.
     * @type {?}
     */
    MatFormFieldControl.prototype.required;
    /**
     * Whether the control is disabled.
     * @type {?}
     */
    MatFormFieldControl.prototype.disabled;
    /**
     * Whether the control is in an error state.
     * @type {?}
     */
    MatFormFieldControl.prototype.errorState;
    /**
     * An optional name for the control type that can be used to distinguish `mat-form-field` elements
     * based on their control type. The form field will add a class,
     * `mat-form-field-type-{{controlType}}` to its root element.
     * @type {?}
     */
    MatFormFieldControl.prototype.controlType;
    /**
     * Whether the input is currently in an autofilled state. If property is not present on the
     * control it is assumed to be false.
     * @type {?}
     */
    MatFormFieldControl.prototype.autofilled;
    /**
     * Sets the list of element IDs that currently describe this control.
     * @abstract
     * @param {?} ids
     * @return {?}
     */
    MatFormFieldControl.prototype.setDescribedByIds = function (ids) { };
    /**
     * Handles a click on the control's container.
     * @abstract
     * @param {?} event
     * @return {?}
     */
    MatFormFieldControl.prototype.onContainerClick = function (event) { };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jb250cm9sLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QztBQUVFO0FBQTJFO0FBQ2xFO0FBQ0U7O0FBQWIsTUFBTSxPQUFnQixtQkFBbUI7QUFBRzsrQ0FEM0MsU0FBUzs7OzswQkFDUjtBQUFDO0FBQWE7QUFBUTtBQUNkO0FBQWlCO0FBQzNCLElBQUUsb0NBQWdCO0FBQ2xCO0FBRUM7QUFDRTtBQUNFO0FBQ1c7QUFBUSxJQUF0QiwyQ0FBd0M7QUFDMUM7QUFDTztBQUNGO0FBQWlCO0FBRWhCLElBRkosaUNBQW9CO0FBQ3RCO0FBQ087QUFDRjtBQUFpQjtBQUFRLElBQTVCLDBDQUE2QjtBQUMvQjtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1Qix3Q0FBcUM7QUFDdkM7QUFDTztBQUNGO0FBQWlCO0FBRXRCLElBRkUsc0NBQTBCO0FBQzVCO0FBQ087QUFDRjtBQUFpQjtBQUVwQixJQUZBLG9DQUF3QjtBQUMxQjtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1QiwrQ0FBbUM7QUFDckM7QUFDTztBQUNGO0FBQWlCO0FBQ3RCLElBREUsdUNBQTJCO0FBQzdCO0FBQ087QUFDRjtBQUFpQjtBQUN0QixJQURFLHVDQUEyQjtBQUM3QjtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1Qix5Q0FBNkI7QUFDL0I7QUFFQztBQUNFO0FBQ0U7QUFFSjtBQUFpQjtBQUFRLElBQXhCLDBDQUE4QjtBQUNoQztBQUVDO0FBQ0U7QUFDRTtBQUNXO0FBQVEsSUFBdEIseUNBQThCO0FBQ2hDO0FBQ087QUFDRjtBQUFpQjtBQUFzQjtBQUVqQztBQUFRLElBRmpCLHFFQUFnRDtBQUNsRDtBQUNPO0FBQ0Y7QUFBaUI7QUFBd0I7QUFFckM7QUFBUSxJQUZmLHNFQUFtRDtBQUNyRDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge05nQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKiBBbiBpbnRlcmZhY2Ugd2hpY2ggYWxsb3dzIGEgY29udHJvbCB0byB3b3JrIGluc2lkZSBvZiBhIGBNYXRGb3JtRmllbGRgLiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWF0Rm9ybUZpZWxkQ29udHJvbDxUPiB7XG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuICovXG4gIHZhbHVlOiBUIHwgbnVsbDtcblxuICAvKipcbiAgICogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIHN0YXRlIG9mIHRoZSBjb250cm9sIGNoYW5nZXMgc3VjaCB0aGF0IHRoZSBwYXJlbnQgYE1hdEZvcm1GaWVsZGBcbiAgICogbmVlZHMgdG8gcnVuIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAqL1xuICByZWFkb25seSBzdGF0ZUNoYW5nZXM6IE9ic2VydmFibGU8dm9pZD47XG5cbiAgLyoqIFRoZSBlbGVtZW50IElEIGZvciB0aGlzIGNvbnRyb2wuICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBwbGFjZWhvbGRlciBmb3IgdGhpcyBjb250cm9sLiAqL1xuICByZWFkb25seSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKiBHZXRzIHRoZSBOZ0NvbnRyb2wgZm9yIHRoaXMgY29udHJvbC4gKi9cbiAgcmVhZG9ubHkgbmdDb250cm9sOiBOZ0NvbnRyb2wgfCBudWxsO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjb250cm9sIGlzIGZvY3VzZWQuICovXG4gIHJlYWRvbmx5IGZvY3VzZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbnRyb2wgaXMgZW1wdHkuICovXG4gIHJlYWRvbmx5IGVtcHR5OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBgTWF0Rm9ybUZpZWxkYCBsYWJlbCBzaG91bGQgdHJ5IHRvIGZsb2F0LiAqL1xuICByZWFkb25seSBzaG91bGRMYWJlbEZsb2F0OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjb250cm9sIGlzIHJlcXVpcmVkLiAqL1xuICByZWFkb25seSByZXF1aXJlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgY29udHJvbCBpcyBkaXNhYmxlZC4gKi9cbiAgcmVhZG9ubHkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbnRyb2wgaXMgaW4gYW4gZXJyb3Igc3RhdGUuICovXG4gIHJlYWRvbmx5IGVycm9yU3RhdGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIG5hbWUgZm9yIHRoZSBjb250cm9sIHR5cGUgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBgbWF0LWZvcm0tZmllbGRgIGVsZW1lbnRzXG4gICAqIGJhc2VkIG9uIHRoZWlyIGNvbnRyb2wgdHlwZS4gVGhlIGZvcm0gZmllbGQgd2lsbCBhZGQgYSBjbGFzcyxcbiAgICogYG1hdC1mb3JtLWZpZWxkLXR5cGUte3tjb250cm9sVHlwZX19YCB0byBpdHMgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgcmVhZG9ubHkgY29udHJvbFR5cGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGN1cnJlbnRseSBpbiBhbiBhdXRvZmlsbGVkIHN0YXRlLiBJZiBwcm9wZXJ0eSBpcyBub3QgcHJlc2VudCBvbiB0aGVcbiAgICogY29udHJvbCBpdCBpcyBhc3N1bWVkIHRvIGJlIGZhbHNlLlxuICAgKi9cbiAgcmVhZG9ubHkgYXV0b2ZpbGxlZD86IGJvb2xlYW47XG5cbiAgLyoqIFNldHMgdGhlIGxpc3Qgb2YgZWxlbWVudCBJRHMgdGhhdCBjdXJyZW50bHkgZGVzY3JpYmUgdGhpcyBjb250cm9sLiAqL1xuICBhYnN0cmFjdCBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKTogdm9pZDtcblxuICAvKiogSGFuZGxlcyBhIGNsaWNrIG9uIHRoZSBjb250cm9sJ3MgY29udGFpbmVyLiAqL1xuICBhYnN0cmFjdCBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbn1cbiJdfQ==