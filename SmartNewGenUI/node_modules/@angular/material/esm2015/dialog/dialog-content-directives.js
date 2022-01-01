/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-content-directives.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input, Optional, ElementRef, } from '@angular/core';
import { MatDialog } from './dialog';
import { MatDialogRef } from './dialog-ref';
/**
 * Counter used to generate unique IDs for dialog elements.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
export class MatDialogClose {
    /**
     * @param {?} dialogRef
     * @param {?} _elementRef
     * @param {?} _dialog
     */
    constructor(dialogRef, _elementRef, _dialog) {
        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /**
         * Default to "button" to prevents accidental form submits.
         */
        this.type = 'button';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef = (/** @type {?} */ (getClosestDialog(this._elementRef, this._dialog.openDialogs)));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    }
}
MatDialogClose.ɵfac = function MatDialogClose_Factory(t) { return new (t || MatDialogClose)(ɵngcc0.ɵɵdirectiveInject(MatDialogRef, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(MatDialog)); };
MatDialogClose.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatDialogClose, selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]], hostVars: 2, hostBindings: function MatDialogClose_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function MatDialogClose_click_HostBindingHandler() { return ctx.dialogRef.close(ctx.dialogResult); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    } }, inputs: { type: "type", dialogResult: ["mat-dialog-close", "dialogResult"], ariaLabel: ["aria-label", "ariaLabel"], _matDialogClose: ["matDialogClose", "_matDialogClose"] }, exportAs: ["matDialogClose"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
MatDialogClose.ctorParameters = () => [
    { type: MatDialogRef, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: MatDialog }
];
MatDialogClose.propDecorators = {
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    type: [{ type: Input }],
    dialogResult: [{ type: Input, args: ['mat-dialog-close',] }],
    _matDialogClose: [{ type: Input, args: ['matDialogClose',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDialogClose, [{
        type: Directive,
        args: [{
                selector: '[mat-dialog-close], [matDialogClose]',
                exportAs: 'matDialogClose',
                host: {
                    '(click)': 'dialogRef.close(dialogResult)',
                    '[attr.aria-label]': 'ariaLabel || null',
                    '[attr.type]': 'type'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }, { type: MatDialog }]; }, { type: [{
            type: Input
        }], dialogResult: [{
            type: Input,
            args: ['mat-dialog-close']
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], _matDialogClose: [{
            type: Input,
            args: ['matDialogClose']
        }] }); })();
if (false) {
    /**
     * Screenreader label for the button.
     * @type {?}
     */
    MatDialogClose.prototype.ariaLabel;
    /**
     * Default to "button" to prevents accidental form submits.
     * @type {?}
     */
    MatDialogClose.prototype.type;
    /**
     * Dialog close input.
     * @type {?}
     */
    MatDialogClose.prototype.dialogResult;
    /** @type {?} */
    MatDialogClose.prototype._matDialogClose;
    /** @type {?} */
    MatDialogClose.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    MatDialogClose.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatDialogClose.prototype._dialog;
}
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
export class MatDialogTitle {
    /**
     * @param {?} _dialogRef
     * @param {?} _elementRef
     * @param {?} _dialog
     */
    constructor(_dialogRef, _elementRef, _dialog) {
        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = `mat-dialog-title-${dialogElementUid++}`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._dialogRef) {
            this._dialogRef = (/** @type {?} */ (getClosestDialog(this._elementRef, this._dialog.openDialogs)));
        }
        if (this._dialogRef) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const container = this._dialogRef._containerInstance;
                if (container && !container._ariaLabelledBy) {
                    container._ariaLabelledBy = this.id;
                }
            }));
        }
    }
}
MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) { return new (t || MatDialogTitle)(ɵngcc0.ɵɵdirectiveInject(MatDialogRef, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(MatDialog)); };
MatDialogTitle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatDialogTitle, selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]], hostAttrs: [1, "mat-dialog-title"], hostVars: 1, hostBindings: function MatDialogTitle_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.id);
    } }, inputs: { id: "id" }, exportAs: ["matDialogTitle"] });
/** @nocollapse */
MatDialogTitle.ctorParameters = () => [
    { type: MatDialogRef, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: MatDialog }
];
MatDialogTitle.propDecorators = {
    id: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDialogTitle, [{
        type: Directive,
        args: [{
                selector: '[mat-dialog-title], [matDialogTitle]',
                exportAs: 'matDialogTitle',
                host: {
                    'class': 'mat-dialog-title',
                    '[id]': 'id'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }, { type: MatDialog }]; }, { id: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatDialogTitle.prototype.id;
    /**
     * @type {?}
     * @private
     */
    MatDialogTitle.prototype._dialogRef;
    /**
     * @type {?}
     * @private
     */
    MatDialogTitle.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatDialogTitle.prototype._dialog;
}
/**
 * Scrollable content container of a dialog.
 */
export class MatDialogContent {
}
MatDialogContent.ɵfac = function MatDialogContent_Factory(t) { return new (t || MatDialogContent)(); };
MatDialogContent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatDialogContent, selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]], hostAttrs: [1, "mat-dialog-content"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDialogContent, [{
        type: Directive,
        args: [{
                selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
                host: { 'class': 'mat-dialog-content' }
            }]
    }], null, null); })();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
export class MatDialogActions {
}
MatDialogActions.ɵfac = function MatDialogActions_Factory(t) { return new (t || MatDialogActions)(); };
MatDialogActions.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatDialogActions, selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]], hostAttrs: [1, "mat-dialog-actions"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDialogActions, [{
        type: Directive,
        args: [{
                selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
                host: { 'class': 'mat-dialog-actions' }
            }]
    }], null, null); })();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param {?} element Element relative to which to look for a dialog.
 * @param {?} openDialogs References to the currently-open dialogs.
 * @return {?}
 */
function getClosestDialog(element, openDialogs) {
    /** @type {?} */
    let parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find((/**
     * @param {?} dialog
     * @return {?}
     */
    dialog => dialog.id === (/** @type {?} */ (parent)).id)) : null;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQtZGlyZWN0aXZlcy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFFBQVEsRUFFUixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzFDO0FBQ0c7QUFBNEQ7QUFDbkQ7O0FBQUksSUFBWixnQkFBZ0IsR0FBRyxDQUFDO0FBQ3hCO0FBQ0c7QUFDMEM7QUFXN0MsTUFBTSxPQUFPLGNBQWM7QUFBRztBQUFRO0FBQy9CO0FBQThCO0FBQ2xCO0FBQVEsSUFVekIsWUFDcUIsU0FBNEIsRUFDdkMsV0FBb0MsRUFDcEMsT0FBa0I7QUFBSSxRQUZYLGNBQVMsR0FBVCxTQUFTLENBQW1CO0FBQUMsUUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO0FBQUMsUUFDckMsWUFBTyxHQUFQLE9BQU8sQ0FBVztBQUFDO0FBRXhCO0FBRTBCO0FBQVksUUFkbEMsU0FBSSxHQUFrQyxRQUFRLENBQUM7QUFDMUQsSUFTaUMsQ0FBQztBQUNsQztBQUNPO0FBQ0k7QUFBUSxJQURqQixRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUN6QixZQUFNLGlGQUFpRjtBQUN2RixZQUFNLGdGQUFnRjtBQUN0RixZQUFNLGdGQUFnRjtBQUN0RixZQUFNLG9GQUFvRjtBQUMxRixZQUFNLG1DQUFtQztBQUN6QyxZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsbUJBQUEsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcs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O0FBQ0gsSUFDRSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUk7QUFBTTtBQUF5QjtBQUU5RDtBQUFRLElBRndCLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxtQkFBQSxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzlFLENBQUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gJy4vZGlhbG9nJztcbmltcG9ydCB7TWF0RGlhbG9nUmVmfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuXG4vKiogQ291bnRlciB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMgZm9yIGRpYWxvZyBlbGVtZW50cy4gKi9cbmxldCBkaWFsb2dFbGVtZW50VWlkID0gMDtcblxuLyoqXG4gKiBCdXR0b24gdGhhdCB3aWxsIGNsb3NlIHRoZSBjdXJyZW50IGRpYWxvZy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdC1kaWFsb2ctY2xvc2VdLCBbbWF0RGlhbG9nQ2xvc2VdJyxcbiAgZXhwb3J0QXM6ICdtYXREaWFsb2dDbG9zZScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdkaWFsb2dSZWYuY2xvc2UoZGlhbG9nUmVzdWx0KScsXG4gICAgJ1thdHRyLmFyaWEtbGFiZWxdJzogJ2FyaWFMYWJlbCB8fCBudWxsJyxcbiAgICAnW2F0dHIudHlwZV0nOiAndHlwZScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTWF0RGlhbG9nQ2xvc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qKiBTY3JlZW5yZWFkZXIgbGFiZWwgZm9yIHRoZSBidXR0b24uICovXG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gIC8qKiBEZWZhdWx0IHRvIFwiYnV0dG9uXCIgdG8gcHJldmVudHMgYWNjaWRlbnRhbCBmb3JtIHN1Ym1pdHMuICovXG4gIEBJbnB1dCgpIHR5cGU6ICdzdWJtaXQnIHwgJ2J1dHRvbicgfCAncmVzZXQnID0gJ2J1dHRvbic7XG5cbiAgLyoqIERpYWxvZyBjbG9zZSBpbnB1dC4gKi9cbiAgQElucHV0KCdtYXQtZGlhbG9nLWNsb3NlJykgZGlhbG9nUmVzdWx0OiBhbnk7XG5cbiAgQElucHV0KCdtYXREaWFsb2dDbG9zZScpIF9tYXREaWFsb2dDbG9zZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxhbnk+LFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX2RpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5kaWFsb2dSZWYpIHtcbiAgICAgIC8vIFdoZW4gdGhpcyBkaXJlY3RpdmUgaXMgaW5jbHVkZWQgaW4gYSBkaWFsb2cgdmlhIFRlbXBsYXRlUmVmIChyYXRoZXIgdGhhbiBiZWluZ1xuICAgICAgLy8gaW4gYSBDb21wb25lbnQpLCB0aGUgRGlhbG9nUmVmIGlzbid0IGF2YWlsYWJsZSB2aWEgaW5qZWN0aW9uIGJlY2F1c2UgZW1iZWRkZWRcbiAgICAgIC8vIHZpZXdzIGNhbm5vdCBiZSBnaXZlbiBhIGN1c3RvbSBpbmplY3Rvci4gSW5zdGVhZCwgd2UgbG9vayB1cCB0aGUgRGlhbG9nUmVmIGJ5XG4gICAgICAvLyBJRC4gVGhpcyBtdXN0IG9jY3VyIGluIGBvbkluaXRgLCBhcyB0aGUgSUQgYmluZGluZyBmb3IgdGhlIGRpYWxvZyBjb250YWluZXIgd29uJ3RcbiAgICAgIC8vIGJlIHJlc29sdmVkIGF0IGNvbnN0cnVjdG9yIHRpbWUuXG4gICAgICB0aGlzLmRpYWxvZ1JlZiA9IGdldENsb3Nlc3REaWFsb2codGhpcy5fZWxlbWVudFJlZiwgdGhpcy5fZGlhbG9nLm9wZW5EaWFsb2dzKSE7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3hpZWRDaGFuZ2UgPSBjaGFuZ2VzWydfbWF0RGlhbG9nQ2xvc2UnXSB8fCBjaGFuZ2VzWydfbWF0RGlhbG9nQ2xvc2VSZXN1bHQnXTtcblxuICAgIGlmIChwcm94aWVkQ2hhbmdlKSB7XG4gICAgICB0aGlzLmRpYWxvZ1Jlc3VsdCA9IHByb3hpZWRDaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRpdGxlIG9mIGEgZGlhbG9nIGVsZW1lbnQuIFN0YXlzIGZpeGVkIHRvIHRoZSB0b3Agb2YgdGhlIGRpYWxvZyB3aGVuIHNjcm9sbGluZy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdC1kaWFsb2ctdGl0bGVdLCBbbWF0RGlhbG9nVGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdtYXREaWFsb2dUaXRsZScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWRpYWxvZy10aXRsZScsXG4gICAgJ1tpZF0nOiAnaWQnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNYXREaWFsb2dUaXRsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSBgbWF0LWRpYWxvZy10aXRsZS0ke2RpYWxvZ0VsZW1lbnRVaWQrK31gO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZiA9IGdldENsb3Nlc3REaWFsb2codGhpcy5fZWxlbWVudFJlZiwgdGhpcy5fZGlhbG9nLm9wZW5EaWFsb2dzKSE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RpYWxvZ1JlZikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2RpYWxvZ1JlZi5fY29udGFpbmVySW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhY29udGFpbmVyLl9hcmlhTGFiZWxsZWRCeSkge1xuICAgICAgICAgIGNvbnRhaW5lci5fYXJpYUxhYmVsbGVkQnkgPSB0aGlzLmlkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIFNjcm9sbGFibGUgY29udGVudCBjb250YWluZXIgb2YgYSBkaWFsb2cuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFttYXQtZGlhbG9nLWNvbnRlbnRdLCBtYXQtZGlhbG9nLWNvbnRlbnQsIFttYXREaWFsb2dDb250ZW50XWAsXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbWF0LWRpYWxvZy1jb250ZW50J31cbn0pXG5leHBvcnQgY2xhc3MgTWF0RGlhbG9nQ29udGVudCB7fVxuXG5cbi8qKlxuICogQ29udGFpbmVyIGZvciB0aGUgYm90dG9tIGFjdGlvbiBidXR0b25zIGluIGEgZGlhbG9nLlxuICogU3RheXMgZml4ZWQgdG8gdGhlIGJvdHRvbSB3aGVuIHNjcm9sbGluZy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW21hdC1kaWFsb2ctYWN0aW9uc10sIG1hdC1kaWFsb2ctYWN0aW9ucywgW21hdERpYWxvZ0FjdGlvbnNdYCxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtZGlhbG9nLWFjdGlvbnMnfVxufSlcbmV4cG9ydCBjbGFzcyBNYXREaWFsb2dBY3Rpb25zIHt9XG5cblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBNYXREaWFsb2dSZWYgdG8gYW4gZWxlbWVudCBieSBsb29raW5nIGF0IHRoZSBET00uXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHJlbGF0aXZlIHRvIHdoaWNoIHRvIGxvb2sgZm9yIGEgZGlhbG9nLlxuICogQHBhcmFtIG9wZW5EaWFsb2dzIFJlZmVyZW5jZXMgdG8gdGhlIGN1cnJlbnRseS1vcGVuIGRpYWxvZ3MuXG4gKi9cbmZ1bmN0aW9uIGdldENsb3Nlc3REaWFsb2coZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIG9wZW5EaWFsb2dzOiBNYXREaWFsb2dSZWY8YW55PltdKSB7XG4gIGxldCBwYXJlbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gIHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21hdC1kaWFsb2ctY29udGFpbmVyJykpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnQgPyBvcGVuRGlhbG9ncy5maW5kKGRpYWxvZyA9PiBkaWFsb2cuaWQgPT09IHBhcmVudCEuaWQpIDogbnVsbDtcbn1cbiJdfQ==