/**
 * @fileoverview added by tsickle
 * Generated from: src/material/divider/divider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';
export class MatDivider {
    constructor() {
        this._vertical = false;
        this._inset = false;
    }
    /**
     * Whether the divider is vertically aligned.
     * @return {?}
     */
    get vertical() { return this._vertical; }
    /**
     * @param {?} value
     * @return {?}
     */
    set vertical(value) { this._vertical = coerceBooleanProperty(value); }
    /**
     * Whether the divider is an inset divider.
     * @return {?}
     */
    get inset() { return this._inset; }
    /**
     * @param {?} value
     * @return {?}
     */
    set inset(value) { this._inset = coerceBooleanProperty(value); }
}
MatDivider.ɵfac = function MatDivider_Factory(t) { return new (t || MatDivider)(); };
MatDivider.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatDivider, selectors: [["mat-divider"]], hostAttrs: ["role", "separator", 1, "mat-divider"], hostVars: 7, hostBindings: function MatDivider_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        ɵngcc0.ɵɵclassProp("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
    } }, inputs: { vertical: "vertical", inset: "inset" }, decls: 0, vars: 0, template: function MatDivider_Template(rf, ctx) { }, styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"], encapsulation: 2, changeDetection: 0 });
MatDivider.propDecorators = {
    vertical: [{ type: Input }],
    inset: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDivider, [{
        type: Component,
        args: [{
                selector: 'mat-divider',
                host: {
                    'role': 'separator',
                    '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
                    '[class.mat-divider-vertical]': 'vertical',
                    '[class.mat-divider-horizontal]': '!vertical',
                    '[class.mat-divider-inset]': 'inset',
                    'class': 'mat-divider'
                },
                template: '',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"]
            }]
    }], function () { return []; }, { vertical: [{
            type: Input
        }], inset: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatDivider.ngAcceptInputType_vertical;
    /** @type {?} */
    MatDivider.ngAcceptInputType_inset;
    /**
     * @type {?}
     * @private
     */
    MatDivider.prototype._vertical;
    /**
     * @type {?}
     * @private
     */
    MatDivider.prototype._inset;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2RpdmlkZXIvZGl2aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7QUFpQjFFLE1BQU0sT0FBTyxVQUFVO0FBQ3ZCLElBaEJBO0FBQ0csUUFtQk8sY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUtVLFdBQU0sR0FBWSxLQUFLLENBQUM7QUFDbEMsSUFHQSxDQUFDO0FBQ0Q7QUFBUTtBQUFrRDtBQUFtQjtBQUFRLElBZG5GLElBQ0ksUUFBUSxLQUFjLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDcEQ7QUFBUTtBQUF3QjtBQUFtQjtBQUFRLElBQXpELElBQUksUUFBUSxDQUFDLEtBQWMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRjtBQUFRO0FBRVM7QUFBbUI7QUFBUSxJQUMxQyxJQUNJLEtBQUssS0FBYyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzlDO0FBQVE7QUFBd0I7QUFBbUI7QUFBUSxJQUF6RCxJQUFJLEtBQUssQ0FBQyxLQUFjLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0U7c0NBMUJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7V0FBYSxrQkFDdkIsSUFBSSxFQUFFLHNCQUNKLE1BQU0sRUFBRSxXQUFXLHNCQUNuQix5QkFBeUIsRUFBRSxzQ0FBc0Msc0JBQ2pFLDhCQUE4QixFQUFFLFVBQVU7bUJBQzFDLGdDQUFnQyxFQUFFLFdBQVcsc0JBQzdDO3VCQUEyQixFQUFFLE9BQU8sc0JBQ3BDLE9BQU8sRUFBRSxhQUFhLGtCQUN2QixrQkFDRCxRQUFRLEVBQUUsRUFBRTtHQUVaLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSx5VkFDaEQsb0NBQ0c7QUFBQztBQUNJLHVCQUNOLEtBQUs7QUFDTixvQkFLQyxLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUFhO0FBQXFCLElBSXBDLHNDQUFnRDtBQUNsRDtBQUFxQixJQUFuQixtQ0FBNkM7QUFDL0M7QUFDTTtBQUFpQjtBQUFnQjtBQUFRLElBWDdDLCtCQUFtQztBQUNyQztBQUNPO0FBQWlCO0FBQWdCO0FBQVEsSUFJOUMsNEJBQWdDO0FBQ2xDO0FBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWRpdmlkZXInLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAnc2VwYXJhdG9yJyxcbiAgICAnW2F0dHIuYXJpYS1vcmllbnRhdGlvbl0nOiAndmVydGljYWwgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIicsXG4gICAgJ1tjbGFzcy5tYXQtZGl2aWRlci12ZXJ0aWNhbF0nOiAndmVydGljYWwnLFxuICAgICdbY2xhc3MubWF0LWRpdmlkZXItaG9yaXpvbnRhbF0nOiAnIXZlcnRpY2FsJyxcbiAgICAnW2NsYXNzLm1hdC1kaXZpZGVyLWluc2V0XSc6ICdpbnNldCcsXG4gICAgJ2NsYXNzJzogJ21hdC1kaXZpZGVyJ1xuICB9LFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlVXJsczogWydkaXZpZGVyLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGl2aWRlciB7XG4gIC8qKiBXaGV0aGVyIHRoZSBkaXZpZGVyIGlzIHZlcnRpY2FsbHkgYWxpZ25lZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fdmVydGljYWw7IH1cbiAgc2V0IHZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX3ZlcnRpY2FsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF92ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBkaXZpZGVyIGlzIGFuIGluc2V0IGRpdmlkZXIuICovXG4gIEBJbnB1dCgpXG4gIGdldCBpbnNldCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2luc2V0OyB9XG4gIHNldCBpbnNldCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9pbnNldCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgcHJpdmF0ZSBfaW5zZXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmVydGljYWw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2luc2V0OiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=