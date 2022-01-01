/**
 * @fileoverview added by tsickle
 * Generated from: src/material/chips/chip-input.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, ElementRef, EventEmitter, Inject, Input, Output } from '@angular/core';
import { hasModifierKey, TAB } from '@angular/cdk/keycodes';
import { MAT_CHIPS_DEFAULT_OPTIONS } from './chip-default-options';
import { MatChipList } from './chip-list';
/**
 * Represents an input event on a `matChipInput`.
 * @record
 */
import * as ɵngcc0 from '@angular/core';
export function MatChipInputEvent() { }
if (false) {
    /**
     * The native `<input>` element that the event is being fired for.
     * @type {?}
     */
    MatChipInputEvent.prototype.input;
    /**
     * The value of the input.
     * @type {?}
     */
    MatChipInputEvent.prototype.value;
}
// Increasing integer for generating unique ids.
/** @type {?} */
let nextUniqueId = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of an `<mat-chip-list>`.
 */
export class MatChipInput {
    /**
     * @param {?} _elementRef
     * @param {?} _defaultOptions
     */
    constructor(_elementRef, _defaultOptions) {
        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /**
         * Whether the control is focused.
         */
        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */
        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /**
         * Emitted when a chip is to be added.
         */
        this.chipEnd = new EventEmitter();
        /**
         * The input's placeholder text.
         */
        this.placeholder = '';
        /**
         * Unique id for the input.
         */
        this.id = `mat-chip-list-input-${nextUniqueId++}`;
        this._disabled = false;
        this._inputElement = (/** @type {?} */ (this._elementRef.nativeElement));
    }
    /**
     * Register input for chip list
     * @param {?} value
     * @return {?}
     */
    set chipList(value) {
        if (value) {
            this._chipList = value;
            this._chipList.registerInput(this);
        }
    }
    /**
     * Whether or not the chipEnd event will be emitted when the input is blurred.
     * @return {?}
     */
    get addOnBlur() { return this._addOnBlur; }
    /**
     * @param {?} value
     * @return {?}
     */
    set addOnBlur(value) { this._addOnBlur = coerceBooleanProperty(value); }
    /**
     * Whether the input is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled || (this._chipList && this._chipList.disabled); }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = coerceBooleanProperty(value); }
    /**
     * Whether the input is empty.
     * @return {?}
     */
    get empty() { return !this._inputElement.value; }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._chipList.stateChanges.next();
    }
    /**
     * Utility method to make host definition/tests more clear.
     * @param {?=} event
     * @return {?}
     */
    _keydown(event) {
        // Allow the user's focus to escape when they're tabbing forward. Note that we don't
        // want to do this when going backwards, because focus should go back to the first chip.
        if (event && event.keyCode === TAB && !hasModifierKey(event, 'shiftKey')) {
            this._chipList._allowFocusEscape();
        }
        this._emitChipEnd(event);
    }
    /**
     * Checks to see if the blur should emit the (chipEnd) event.
     * @return {?}
     */
    _blur() {
        if (this.addOnBlur) {
            this._emitChipEnd();
        }
        this.focused = false;
        // Blur the chip list if it is not focused
        if (!this._chipList.focused) {
            this._chipList._blur();
        }
        this._chipList.stateChanges.next();
    }
    /**
     * @return {?}
     */
    _focus() {
        this.focused = true;
        this._chipList.stateChanges.next();
    }
    /**
     * Checks to see if the (chipEnd) event needs to be emitted.
     * @param {?=} event
     * @return {?}
     */
    _emitChipEnd(event) {
        if (!this._inputElement.value && !!event) {
            this._chipList._keydown(event);
        }
        if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({ input: this._inputElement, value: this._inputElement.value });
            if (event) {
                event.preventDefault();
            }
        }
    }
    /**
     * @return {?}
     */
    _onInput() {
        // Let chip list know whenever the value changes.
        this._chipList.stateChanges.next();
    }
    /**
     * Focuses the input.
     * @param {?=} options
     * @return {?}
     */
    focus(options) {
        this._inputElement.focus(options);
    }
    /**
     * Checks whether a keycode is one of the configured separators.
     * @private
     * @param {?} event
     * @return {?}
     */
    _isSeparatorKey(event) {
        if (hasModifierKey(event)) {
            return false;
        }
        /** @type {?} */
        const separators = this.separatorKeyCodes;
        /** @type {?} */
        const keyCode = event.keyCode;
        return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
    }
}
MatChipInput.ɵfac = function MatChipInput_Factory(t) { return new (t || MatChipInput)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(MAT_CHIPS_DEFAULT_OPTIONS)); };
MatChipInput.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatChipInput, selectors: [["input", "matChipInputFor", ""]], hostAttrs: [1, "mat-chip-input", "mat-input-element"], hostVars: 5, hostBindings: function MatChipInput_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function MatChipInput_keydown_HostBindingHandler($event) { return ctx._keydown($event); })("blur", function MatChipInput_blur_HostBindingHandler() { return ctx._blur(); })("focus", function MatChipInput_focus_HostBindingHandler() { return ctx._focus(); })("input", function MatChipInput_input_HostBindingHandler() { return ctx._onInput(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.id);
        ɵngcc0.ɵɵattribute("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
    } }, inputs: { separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"], placeholder: "placeholder", id: "id", chipList: ["matChipInputFor", "chipList"], addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"], disabled: "disabled" }, outputs: { chipEnd: "matChipInputTokenEnd" }, exportAs: ["matChipInput", "matChipInputFor"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
MatChipInput.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] }
];
MatChipInput.propDecorators = {
    chipList: [{ type: Input, args: ['matChipInputFor',] }],
    addOnBlur: [{ type: Input, args: ['matChipInputAddOnBlur',] }],
    separatorKeyCodes: [{ type: Input, args: ['matChipInputSeparatorKeyCodes',] }],
    chipEnd: [{ type: Output, args: ['matChipInputTokenEnd',] }],
    placeholder: [{ type: Input }],
    id: [{ type: Input }],
    disabled: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatChipInput, [{
        type: Directive,
        args: [{
                selector: 'input[matChipInputFor]',
                exportAs: 'matChipInput, matChipInputFor',
                host: {
                    'class': 'mat-chip-input mat-input-element',
                    '(keydown)': '_keydown($event)',
                    '(blur)': '_blur()',
                    '(focus)': '_focus()',
                    '(input)': '_onInput()',
                    '[id]': 'id',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.placeholder]': 'placeholder || null',
                    '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
                    '[attr.aria-required]': '_chipList && _chipList.required || null'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_CHIPS_DEFAULT_OPTIONS]
            }] }]; }, { separatorKeyCodes: [{
            type: Input,
            args: ['matChipInputSeparatorKeyCodes']
        }], chipEnd: [{
            type: Output,
            args: ['matChipInputTokenEnd']
        }], placeholder: [{
            type: Input
        }], id: [{
            type: Input
        }], chipList: [{
            type: Input,
            args: ['matChipInputFor']
        }], addOnBlur: [{
            type: Input,
            args: ['matChipInputAddOnBlur']
        }], disabled: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatChipInput.ngAcceptInputType_addOnBlur;
    /** @type {?} */
    MatChipInput.ngAcceptInputType_disabled;
    /**
     * Whether the control is focused.
     * @type {?}
     */
    MatChipInput.prototype.focused;
    /** @type {?} */
    MatChipInput.prototype._chipList;
    /** @type {?} */
    MatChipInput.prototype._addOnBlur;
    /**
     * The list of key codes that will trigger a chipEnd event.
     *
     * Defaults to `[ENTER]`.
     * @type {?}
     */
    MatChipInput.prototype.separatorKeyCodes;
    /**
     * Emitted when a chip is to be added.
     * @type {?}
     */
    MatChipInput.prototype.chipEnd;
    /**
     * The input's placeholder text.
     * @type {?}
     */
    MatChipInput.prototype.placeholder;
    /**
     * Unique id for the input.
     * @type {?}
     */
    MatChipInput.prototype.id;
    /**
     * @type {?}
     * @private
     */
    MatChipInput.prototype._disabled;
    /**
     * The native input element to which this directive is attached.
     * @type {?}
     * @protected
     */
    MatChipInput.prototype._inputElement;
    /**
     * @type {?}
     * @protected
     */
    MatChipInput.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatChipInput.prototype._defaultOptions;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC1pbnB1dC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2NoaXBzL2NoaXAtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFDLHlCQUF5QixFQUF5QixNQUFNLHdCQUF3QixDQUFDO0FBQ3pGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEM7QUFBSTtBQUFrRDtBQUcvQzs7QUFDUCx1Q0FNQztBQUNEO0FBQ1k7QUFBUTtBQUlMO0FBQWlCO0FBQVEsSUFWdEMsa0NBQXdCO0FBQzFCO0FBQ087QUFDRjtBQUdIO0FBQVEsSUFIUixrQ0FBYztBQUNoQjtBQUNBO0FBQ2dEO0FBQ2hDLElBQVosWUFBWSxHQUFHLENBQUM7QUFDcEI7QUFDRztBQUMwRjtBQUNsQztBQWtCM0QsTUFBTSxPQUFPLFlBQVk7QUFBRztBQUFRO0FBQThCO0FBQ25DO0FBQVEsSUFtRHJDLFlBQ1ksV0FBeUMsRUFDUixlQUF1QztBQUN0RixRQUZjLGdCQUFXLEdBQVgsV0FBVyxDQUE4QjtBQUFDLFFBQ1Qsb0JBQWUsR0FBZixlQUFlLENBQXdCO0FBQUM7QUFDOUU7QUFBMkM7QUFBWSxRQXJEOUQsWUFBTyxHQUFZLEtBQUssQ0FBQztBQUMzQixRQWlCRSxlQUFVLEdBQVksS0FBSyxDQUFDO0FBQzlCO0FBRUs7QUFFQztBQUFXO0FBRUE7QUFBWSxRQUMzQixzQkFBaUIsR0FBMkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztB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U0FBQyxzQkFBc0I7QUFDM0IsMEJBR0YsS0FBSztBQUFLLGlCQUdWLEtBQUs7QUFBSyx1QkFHVixLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUFhO0FBQXFCLElBb0ZwQyx5Q0FBaUQ7QUFDbkQ7QUFBcUIsSUFBbkIsd0NBQWdEO0FBQ2xEO0FBQ007QUFBdUM7QUFBaUI7QUFBUSxJQS9IcEUsK0JBQXlCO0FBQzNCO0FBQXFCLElBQW5CLGlDQUF1QjtBQUN6QjtBQUNvQixJQWVsQixrQ0FBNEI7QUFDOUI7QUFFQztBQUNFO0FBQ0U7QUFFSjtBQUFpQjtBQUFRLElBQXhCLHlDQUNtRjtBQUNyRjtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1QiwrQkFDaUY7QUFDbkY7QUFDTztBQUNGO0FBQWlCO0FBQVEsSUFBNUIsbUNBQWtDO0FBQ3BDO0FBQ087QUFDRjtBQUFpQjtBQUFRLElBQTVCLDBCQUE4RDtBQUNoRTtBQUNPO0FBQWlCO0FBQ3hCO0FBQVEsSUFHTixpQ0FBbUM7QUFDckM7QUFDTztBQUNnQztBQUFpQjtBQUU1QztBQUFRLElBQ2xCLHFDQUEwQztBQUM1QztBQUNPO0FBQ0U7QUFBa0I7QUFBUSxJQUEvQixtQ0FBbUQ7QUFBQztBQUNqRDtBQUFpQjtBQUFnQjtBQUFRLElBQTVDLHVDQUFrRjtBQUFDO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aGFzTW9kaWZpZXJLZXksIFRBQn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7TUFUX0NISVBTX0RFRkFVTFRfT1BUSU9OUywgTWF0Q2hpcHNEZWZhdWx0T3B0aW9uc30gZnJvbSAnLi9jaGlwLWRlZmF1bHQtb3B0aW9ucyc7XG5pbXBvcnQge01hdENoaXBMaXN0fSBmcm9tICcuL2NoaXAtbGlzdCc7XG5pbXBvcnQge01hdENoaXBUZXh0Q29udHJvbH0gZnJvbSAnLi9jaGlwLXRleHQtY29udHJvbCc7XG5cblxuLyoqIFJlcHJlc2VudHMgYW4gaW5wdXQgZXZlbnQgb24gYSBgbWF0Q2hpcElucHV0YC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWF0Q2hpcElucHV0RXZlbnQge1xuICAvKiogVGhlIG5hdGl2ZSBgPGlucHV0PmAgZWxlbWVudCB0aGF0IHRoZSBldmVudCBpcyBiZWluZyBmaXJlZCBmb3IuICovXG4gIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGlucHV0LiAqL1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG4vLyBJbmNyZWFzaW5nIGludGVnZXIgZm9yIGdlbmVyYXRpbmcgdW5pcXVlIGlkcy5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGFkZHMgY2hpcC1zcGVjaWZpYyBiZWhhdmlvcnMgdG8gYW4gaW5wdXQgZWxlbWVudCBpbnNpZGUgYDxtYXQtZm9ybS1maWVsZD5gLlxuICogTWF5IGJlIHBsYWNlZCBpbnNpZGUgb3Igb3V0c2lkZSBvZiBhbiBgPG1hdC1jaGlwLWxpc3Q+YC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbWF0Q2hpcElucHV0Rm9yXScsXG4gIGV4cG9ydEFzOiAnbWF0Q2hpcElucHV0LCBtYXRDaGlwSW5wdXRGb3InLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1jaGlwLWlucHV0IG1hdC1pbnB1dC1lbGVtZW50JyxcbiAgICAnKGtleWRvd24pJzogJ19rZXlkb3duKCRldmVudCknLFxuICAgICcoYmx1ciknOiAnX2JsdXIoKScsXG4gICAgJyhmb2N1cyknOiAnX2ZvY3VzKCknLFxuICAgICcoaW5wdXQpJzogJ19vbklucHV0KCknLFxuICAgICdbaWRdJzogJ2lkJyxcbiAgICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkIHx8IG51bGwnLFxuICAgICdbYXR0ci5wbGFjZWhvbGRlcl0nOiAncGxhY2Vob2xkZXIgfHwgbnVsbCcsXG4gICAgJ1thdHRyLmFyaWEtaW52YWxpZF0nOiAnX2NoaXBMaXN0ICYmIF9jaGlwTGlzdC5uZ0NvbnRyb2wgPyBfY2hpcExpc3QubmdDb250cm9sLmludmFsaWQgOiBudWxsJyxcbiAgICAnW2F0dHIuYXJpYS1yZXF1aXJlZF0nOiAnX2NoaXBMaXN0ICYmIF9jaGlwTGlzdC5yZXF1aXJlZCB8fCBudWxsJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDaGlwSW5wdXQgaW1wbGVtZW50cyBNYXRDaGlwVGV4dENvbnRyb2wsIE9uQ2hhbmdlcyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBjb250cm9sIGlzIGZvY3VzZWQuICovXG4gIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2NoaXBMaXN0OiBNYXRDaGlwTGlzdDtcblxuICAvKiogUmVnaXN0ZXIgaW5wdXQgZm9yIGNoaXAgbGlzdCAqL1xuICBASW5wdXQoJ21hdENoaXBJbnB1dEZvcicpXG4gIHNldCBjaGlwTGlzdCh2YWx1ZTogTWF0Q2hpcExpc3QpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX2NoaXBMaXN0ID0gdmFsdWU7XG4gICAgICB0aGlzLl9jaGlwTGlzdC5yZWdpc3RlcklucHV0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgY2hpcEVuZCBldmVudCB3aWxsIGJlIGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgaXMgYmx1cnJlZC5cbiAgICovXG4gIEBJbnB1dCgnbWF0Q2hpcElucHV0QWRkT25CbHVyJylcbiAgZ2V0IGFkZE9uQmx1cigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2FkZE9uQmx1cjsgfVxuICBzZXQgYWRkT25CbHVyKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2FkZE9uQmx1ciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgX2FkZE9uQmx1cjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBrZXkgY29kZXMgdGhhdCB3aWxsIHRyaWdnZXIgYSBjaGlwRW5kIGV2ZW50LlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byBgW0VOVEVSXWAuXG4gICAqL1xuICBASW5wdXQoJ21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzJylcbiAgc2VwYXJhdG9yS2V5Q29kZXM6IG51bWJlcltdIHwgU2V0PG51bWJlcj4gPSB0aGlzLl9kZWZhdWx0T3B0aW9ucy5zZXBhcmF0b3JLZXlDb2RlcztcblxuICAvKiogRW1pdHRlZCB3aGVuIGEgY2hpcCBpcyB0byBiZSBhZGRlZC4gKi9cbiAgQE91dHB1dCgnbWF0Q2hpcElucHV0VG9rZW5FbmQnKVxuICBjaGlwRW5kOiBFdmVudEVtaXR0ZXI8TWF0Q2hpcElucHV0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRDaGlwSW5wdXRFdmVudD4oKTtcblxuICAvKiogVGhlIGlucHV0J3MgcGxhY2Vob2xkZXIgdGV4dC4gKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuXG4gIC8qKiBVbmlxdWUgaWQgZm9yIHRoZSBpbnB1dC4gKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IGBtYXQtY2hpcC1saXN0LWlucHV0LSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuICAvKiogV2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8ICh0aGlzLl9jaGlwTGlzdCAmJiB0aGlzLl9jaGlwTGlzdC5kaXNhYmxlZCk7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBlbXB0eS4gKi9cbiAgZ2V0IGVtcHR5KCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMuX2lucHV0RWxlbWVudC52YWx1ZTsgfVxuXG4gIC8qKiBUaGUgbmF0aXZlIGlucHV0IGVsZW1lbnQgdG8gd2hpY2ggdGhpcyBkaXJlY3RpdmUgaXMgYXR0YWNoZWQuICovXG4gIHByb3RlY3RlZCBfaW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBASW5qZWN0KE1BVF9DSElQU19ERUZBVUxUX09QVElPTlMpIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zOiBNYXRDaGlwc0RlZmF1bHRPcHRpb25zKSB7XG4gICAgdGhpcy5faW5wdXRFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl9jaGlwTGlzdC5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgLyoqIFV0aWxpdHkgbWV0aG9kIHRvIG1ha2UgaG9zdCBkZWZpbml0aW9uL3Rlc3RzIG1vcmUgY2xlYXIuICovXG4gIF9rZXlkb3duKGV2ZW50PzogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vIEFsbG93IHRoZSB1c2VyJ3MgZm9jdXMgdG8gZXNjYXBlIHdoZW4gdGhleSdyZSB0YWJiaW5nIGZvcndhcmQuIE5vdGUgdGhhdCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZG8gdGhpcyB3aGVuIGdvaW5nIGJhY2t3YXJkcywgYmVjYXVzZSBmb2N1cyBzaG91bGQgZ28gYmFjayB0byB0aGUgZmlyc3QgY2hpcC5cbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5Q29kZSA9PT0gVEFCICYmICFoYXNNb2RpZmllcktleShldmVudCwgJ3NoaWZ0S2V5JykpIHtcbiAgICAgIHRoaXMuX2NoaXBMaXN0Ll9hbGxvd0ZvY3VzRXNjYXBlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fZW1pdENoaXBFbmQoZXZlbnQpO1xuICB9XG5cbiAgLyoqIENoZWNrcyB0byBzZWUgaWYgdGhlIGJsdXIgc2hvdWxkIGVtaXQgdGhlIChjaGlwRW5kKSBldmVudC4gKi9cbiAgX2JsdXIoKSB7XG4gICAgaWYgKHRoaXMuYWRkT25CbHVyKSB7XG4gICAgICB0aGlzLl9lbWl0Q2hpcEVuZCgpO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAvLyBCbHVyIHRoZSBjaGlwIGxpc3QgaWYgaXQgaXMgbm90IGZvY3VzZWRcbiAgICBpZiAoIXRoaXMuX2NoaXBMaXN0LmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuX2NoaXBMaXN0Ll9ibHVyKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoaXBMaXN0LnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBfZm9jdXMoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGlwTGlzdC5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgLyoqIENoZWNrcyB0byBzZWUgaWYgdGhlIChjaGlwRW5kKSBldmVudCBuZWVkcyB0byBiZSBlbWl0dGVkLiAqL1xuICBfZW1pdENoaXBFbmQoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pbnB1dEVsZW1lbnQudmFsdWUgJiYgISFldmVudCkge1xuICAgICAgdGhpcy5fY2hpcExpc3QuX2tleWRvd24oZXZlbnQpO1xuICAgIH1cbiAgICBpZiAoIWV2ZW50IHx8IHRoaXMuX2lzU2VwYXJhdG9yS2V5KGV2ZW50KSkge1xuICAgICAgdGhpcy5jaGlwRW5kLmVtaXQoeyBpbnB1dDogdGhpcy5faW5wdXRFbGVtZW50LCB2YWx1ZTogdGhpcy5faW5wdXRFbGVtZW50LnZhbHVlIH0pO1xuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25JbnB1dCgpIHtcbiAgICAvLyBMZXQgY2hpcCBsaXN0IGtub3cgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgdGhpcy5fY2hpcExpc3Quc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBpbnB1dC4gKi9cbiAgZm9jdXMob3B0aW9ucz86IEZvY3VzT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuX2lucHV0RWxlbWVudC5mb2N1cyhvcHRpb25zKTtcbiAgfVxuXG4gIC8qKiBDaGVja3Mgd2hldGhlciBhIGtleWNvZGUgaXMgb25lIG9mIHRoZSBjb25maWd1cmVkIHNlcGFyYXRvcnMuICovXG4gIHByaXZhdGUgX2lzU2VwYXJhdG9yS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGhhc01vZGlmaWVyS2V5KGV2ZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcGFyYXRvcnMgPSB0aGlzLnNlcGFyYXRvcktleUNvZGVzO1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHNlcGFyYXRvcnMpID8gc2VwYXJhdG9ycy5pbmRleE9mKGtleUNvZGUpID4gLTEgOiBzZXBhcmF0b3JzLmhhcyhrZXlDb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hZGRPbkJsdXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=