/**
 * @fileoverview added by tsickle
 * Generated from: src/material/snack-bar/simple-snack-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component, ViewEncapsulation, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBarRef } from './snack-bar-ref';
import { MAT_SNACK_BAR_DATA } from './snack-bar-config';
/**
 * A component used to open as the default snack bar, matching material spec.
 * This should only be used internally by the snack bar service.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/material/button';

function SimpleSnackBar_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelementStart(1, "button", 2);
    ɵngcc0.ɵɵlistener("click", function SimpleSnackBar_div_2_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.action(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.data.action);
} }
export class SimpleSnackBar {
    /**
     * @param {?} snackBarRef
     * @param {?} data
     */
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
    /**
     * Performs the action on the snack bar.
     * @return {?}
     */
    action() {
        this.snackBarRef.dismissWithAction();
    }
    /**
     * If the action button should be shown.
     * @return {?}
     */
    get hasAction() {
        return !!this.data.action;
    }
}
SimpleSnackBar.ɵfac = function SimpleSnackBar_Factory(t) { return new (t || SimpleSnackBar)(ɵngcc0.ɵɵdirectiveInject(MatSnackBarRef), ɵngcc0.ɵɵdirectiveInject(MAT_SNACK_BAR_DATA)); };
SimpleSnackBar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SimpleSnackBar, selectors: [["simple-snack-bar"]], hostAttrs: [1, "mat-simple-snackbar"], decls: 3, vars: 2, consts: [["class", "mat-simple-snackbar-action", 4, "ngIf"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 3, "click"]], template: function SimpleSnackBar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span");
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, SimpleSnackBar_div_2_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.data.message);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasAction);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.MatButton], styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
SimpleSnackBar.ctorParameters = () => [
    { type: MatSnackBarRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SimpleSnackBar, [{
        type: Component,
        args: [{
                selector: 'simple-snack-bar',
                template: "<span>{{data.message}}</span>\n<div class=\"mat-simple-snackbar-action\"  *ngIf=\"hasAction\">\n  <button mat-button (click)=\"action()\">{{data.action}}</button>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'mat-simple-snackbar'
                },
                styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: MatSnackBarRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_SNACK_BAR_DATA]
            }] }]; }, null); })();
if (false) {
    /**
     * Data that was injected into the snack bar.
     * @type {?}
     */
    SimpleSnackBar.prototype.data;
    /** @type {?} */
    SimpleSnackBar.prototype.snackBarRef;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXNuYWNrLWJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NuYWNrLWJhci9zaW1wbGUtc25hY2stYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RDtBQUVFO0FBQzBFO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVkvRCxNQUFNLE9BQU8sY0FBYztBQUMzQjtBQUFRO0FBQThCO0FBQzdCO0FBQVEsSUFFZixZQUNTLFdBQTJDLEVBQ3RCLElBQVM7QUFDekMsUUFGVyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0M7QUFBQyxRQUVuRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFFLENBQUM7QUFDSDtBQUNPO0FBQ0Y7QUFDQTtBQUFRLElBRFgsTUFBTTtBQUFLLFFBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUNIO0FBQ087QUFDRjtBQUFtQjtBQUNyQixJQURELElBQUksU0FBUztBQUFLLFFBQ2hCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNIOzBDQTdCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGtCQUFrQixrQkFDNUI7NEhBQW9DLGtCQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLElBQUksRUFBRSxzQkFDSixPQUFPLEVBQUUscUJBQXFCLG1CQUMvQjs7Ozs7Ozs7OytCQUNGO3VhQUNHO0FBQUM7QUFBbUI7QUFDVSxZQW5CMUIsY0FBYztBQUFJLDRDQXdCckIsTUFBTSxTQUFDLGtCQUFrQjtBQUFROzs7Ozs7Ozs7Ozs7Ozs7O2tDQUFFO0FBQUM7QUFDaEM7QUFBUTtBQUd1QjtBQUM5QjtBQUFRLElBVGhCLDhCQUF3QztBQUMxQztBQUVLLElBQUQscUNBQWtEO0FBQUM7QUFDdEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbmplY3QsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U25hY2tCYXJSZWZ9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5pbXBvcnQge01BVF9TTkFDS19CQVJfREFUQX0gZnJvbSAnLi9zbmFjay1iYXItY29uZmlnJztcblxuXG4vKipcbiAqIEEgY29tcG9uZW50IHVzZWQgdG8gb3BlbiBhcyB0aGUgZGVmYXVsdCBzbmFjayBiYXIsIG1hdGNoaW5nIG1hdGVyaWFsIHNwZWMuXG4gKiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgaW50ZXJuYWxseSBieSB0aGUgc25hY2sgYmFyIHNlcnZpY2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpbXBsZS1zbmFjay1iYXInLFxuICB0ZW1wbGF0ZVVybDogJ3NpbXBsZS1zbmFjay1iYXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaW1wbGUtc25hY2stYmFyLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtc2ltcGxlLXNuYWNrYmFyJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVTbmFja0JhciB7XG4gIC8qKiBEYXRhIHRoYXQgd2FzIGluamVjdGVkIGludG8gdGhlIHNuYWNrIGJhci4gKi9cbiAgZGF0YToge21lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmd9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzbmFja0JhclJlZjogTWF0U25hY2tCYXJSZWY8U2ltcGxlU25hY2tCYXI+LFxuICAgIEBJbmplY3QoTUFUX1NOQUNLX0JBUl9EQVRBKSBkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgLyoqIFBlcmZvcm1zIHRoZSBhY3Rpb24gb24gdGhlIHNuYWNrIGJhci4gKi9cbiAgYWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc25hY2tCYXJSZWYuZGlzbWlzc1dpdGhBY3Rpb24oKTtcbiAgfVxuXG4gIC8qKiBJZiB0aGUgYWN0aW9uIGJ1dHRvbiBzaG91bGQgYmUgc2hvd24uICovXG4gIGdldCBoYXNBY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5kYXRhLmFjdGlvbjtcbiAgfVxufVxuIl19