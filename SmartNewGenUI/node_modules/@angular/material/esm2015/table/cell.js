/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef, } from '@angular/cdk/table';
/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/table';
export class MatCellDef extends CdkCellDef {
}
MatCellDef.ɵfac = function MatCellDef_Factory(t) { return ɵMatCellDef_BaseFactory(t || MatCellDef); };
MatCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCellDef, selectors: [["", "matCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkCellDef, useExisting: MatCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCellDef, [{
        type: Directive,
        args: [{
                selector: '[matCellDef]',
                providers: [{ provide: CdkCellDef, useExisting: MatCellDef }]
            }]
    }], null, null); })();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export class MatHeaderCellDef extends CdkHeaderCellDef {
}
MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) { return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef); };
MatHeaderCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderCellDef, selectors: [["", "matHeaderCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkHeaderCellDef, useExisting: MatHeaderCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatHeaderCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHeaderCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderCellDef, [{
        type: Directive,
        args: [{
                selector: '[matHeaderCellDef]',
                providers: [{ provide: CdkHeaderCellDef, useExisting: MatHeaderCellDef }]
            }]
    }], null, null); })();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export class MatFooterCellDef extends CdkFooterCellDef {
}
MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) { return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef); };
MatFooterCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterCellDef, selectors: [["", "matFooterCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkFooterCellDef, useExisting: MatFooterCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatFooterCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatFooterCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterCellDef, [{
        type: Directive,
        args: [{
                selector: '[matFooterCellDef]',
                providers: [{ provide: CdkFooterCellDef, useExisting: MatFooterCellDef }]
            }]
    }], null, null); })();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
export class MatColumnDef extends CdkColumnDef {
}
MatColumnDef.ɵfac = function MatColumnDef_Factory(t) { return ɵMatColumnDef_BaseFactory(t || MatColumnDef); };
MatColumnDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatColumnDef, selectors: [["", "matColumnDef", ""]], inputs: { sticky: "sticky", name: ["matColumnDef", "name"] }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: CdkColumnDef, useExisting: MatColumnDef },
            { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature] });
MatColumnDef.propDecorators = {
    name: [{ type: Input, args: ['matColumnDef',] }]
};
const ɵMatColumnDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatColumnDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatColumnDef, [{
        type: Directive,
        args: [{
                selector: '[matColumnDef]',
                inputs: ['sticky'],
                providers: [
                    { provide: CdkColumnDef, useExisting: MatColumnDef },
                    { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
                ]
            }]
    }], null, { name: [{
            type: Input,
            args: ['matColumnDef']
        }] }); })();
if (false) {
    /** @type {?} */
    MatColumnDef.ngAcceptInputType_sticky;
    /**
     * Unique name for this column.
     * @type {?}
     */
    MatColumnDef.prototype.name;
}
/**
 * Header cell template container that adds the right classes and role.
 */
export class MatHeaderCell extends CdkHeaderCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`mat-column-${columnDef.cssClassFriendlyName}`);
    }
}
MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) { return new (t || MatHeaderCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatHeaderCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderCell, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-header-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
MatHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderCell, [{
        type: Directive,
        args: [{
                selector: 'mat-header-cell, th[mat-header-cell]',
                host: {
                    'class': 'mat-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
/**
 * Footer cell template container that adds the right classes and role.
 */
export class MatFooterCell extends CdkFooterCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`mat-column-${columnDef.cssClassFriendlyName}`);
    }
}
MatFooterCell.ɵfac = function MatFooterCell_Factory(t) { return new (t || MatFooterCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatFooterCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterCell, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
MatFooterCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterCell, [{
        type: Directive,
        args: [{
                selector: 'mat-footer-cell, td[mat-footer-cell]',
                host: {
                    'class': 'mat-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
/**
 * Cell template container that adds the right classes and role.
 */
export class MatCell extends CdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`mat-column-${columnDef.cssClassFriendlyName}`);
    }
}
MatCell.ɵfac = function MatCell_Factory(t) { return new (t || MatCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCell, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
MatCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCell, [{
        type: Directive,
        args: [{
                selector: 'mat-cell, td[mat-cell]',
                host: {
                    'class': 'mat-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RhYmxlL2NlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFlBQVksRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQzdDLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QjtBQUNHO0FBQ2tDO0FBQ29EOzs7QUFNekYsTUFBTSxPQUFPLFVBQVcsU0FBUSxVQUFVO0FBQUc7c0NBSjVDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN4QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxDQUFDLGNBQzVEOzs7Ozs7OzswQkFDSTtBQUFDO0FBQUk7QUFHTjtBQUMrQztBQU1uRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZ0JBQWdCO0FBQUc7NENBSnhELFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsb0JBQW9CO0NBQzlCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLGNBQ3hFOzs7Ozs7OzswQkFDSTtBQUFDO0FBQUk7QUFBNkM7QUFJaEI7QUFNdkMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtBQUFHOzRDQUp4RCxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtDQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQyxjQUN4RTs7Ozs7Ozs7MEJBQ0k7QUFBQztBQUFJO0FBQXdDO0FBSS9DO0FBVUgsTUFBTSxPQUFPLFlBQWEsU0FBUSxZQUFZO0FBQzlDO3dDQVRDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzFCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFDbEIsU0FBUyxFQUFFLHNCQUNULEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFDLHNCQUNsRCxFQUFDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxXQUFXLEVBQUU7V0FBWSxFQUFDLGtCQUNuRSxlQUNGOztrREFDSTtBQUFDO0FBQWdDLG1CQUVuQyxLQUFLLFNBQUMsY0FBYztBQUFNOzs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUUzQjtBQUFxQixJQUF4QixzQ0FBOEM7QUFDaEQ7QUFFSztBQUFvQztBQUFpQjtBQUFRLElBTGhFLDRCQUFvQztBQUN0QztBQUNDO0FBQUk7QUFHb0I7QUFRekIsTUFBTSxPQUFPLGFBQWMsU0FBUSxhQUFhO0FBQ2hEO0FBQVE7QUFBNEI7QUFDVjtBQUFRLElBRGhDLFlBQVksU0FBdUIsRUFDdkIsVUFBbUM7QUFDakQsUUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2pDLFFBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztBQUMzRixJQUFFLENBQUM7QUFDSDt5Q0FiQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHNDQUFzQyxrQkFDaEQsSUFBSSxFQUFFLHNCQUNKLE9BQU8sRUFBRTtZQUFpQixzQkFDMUIsTUFBTSxFQUFFLGNBQWMsbUJBQ3ZCLGVBQ0Ysd0pBQ0k7QUFBQztBQUFtQjtBQUNaLFlBL0RYLFlBQVk7QUFBSSxZQUpDLFVBQVU7QUFBRzs7Ozs7Ozs7OzswR0FBRTtBQUFDO0FBQUk7QUFJdEI7QUE4RWpCLE1BQU0sT0FBTyxhQUFjLFNBQVEsYUFBYTtBQUNoRDtBQUFRO0FBQTRCO0FBQ1Y7QUFBUSxJQURoQyxZQUFZLFNBQXVCLEVBQ3ZCLFVBQXNCO0FBQ3BDLFFBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNqQyxRQUFJLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7QUFDM0YsSUFBRSxDQUFDO0FBQ0g7eUNBYkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxzQ0FBc0Msa0JBQ2hELElBQUksRUFBRSxzQkFDSixPQUFPLEVBQUU7WUFBaUIsc0JBQzFCLE1BQU0sRUFBRSxVQUFVLG1CQUNuQixlQUNGLHdKQUNJO0FBQUM7QUFBbUI7QUFDWixZQS9FWCxZQUFZO0FBQUksWUFKQyxVQUFVO0FBQUc7Ozs7Ozs7Ozs7MEdBQUU7QUFBQztBQUFJO0FBSTdCO0FBOEZWLE1BQU0sT0FBTyxPQUFRLFNBQVEsT0FBTztBQUNwQztBQUFRO0FBQTRCO0FBQ1Y7QUFBUSxJQURoQyxZQUFZLFNBQXVCLEVBQ3ZCLFVBQW1DO0FBQ2pELFFBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNqQyxRQUFJLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7QUFDM0YsSUFBRSxDQUFDO0FBQ0g7bUNBYkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSx3QkFBd0Isa0JBQ2xDLElBQUksRUFBRSxzQkFDSixPQUFPLEVBQUU7R0FBVSxzQkFDbkIsTUFBTSxFQUFFLFVBQVUsbUJBQ25CLGVBQ0YsZ0lBQ0k7QUFBQztBQUFtQjtBQUNOLFlBL0ZqQixZQUFZO0FBQUksWUFKQyxVQUFVO0FBQUc7Ozs7Ozs7Ozs7MEdBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtDZWxsLFxuICBDZGtDZWxsRGVmLFxuICBDZGtDb2x1bW5EZWYsIENka0Zvb3RlckNlbGwsIENka0Zvb3RlckNlbGxEZWYsXG4gIENka0hlYWRlckNlbGwsXG4gIENka0hlYWRlckNlbGxEZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbi8qKlxuICogQ2VsbCBkZWZpbml0aW9uIGZvciB0aGUgbWF0LXRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uJ3MgZGF0YSByb3cgY2VsbCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdENlbGxEZWZdJyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka0NlbGxEZWYsIHVzZUV4aXN0aW5nOiBNYXRDZWxsRGVmfV1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2VsbERlZiBleHRlbmRzIENka0NlbGxEZWYge31cblxuLyoqXG4gKiBIZWFkZXIgY2VsbCBkZWZpbml0aW9uIGZvciB0aGUgbWF0LXRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uJ3MgaGVhZGVyIGNlbGwgYW5kIGFzIHdlbGwgYXMgY2VsbC1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0SGVhZGVyQ2VsbERlZl0nLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrSGVhZGVyQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE1hdEhlYWRlckNlbGxEZWZ9XVxufSlcbmV4cG9ydCBjbGFzcyBNYXRIZWFkZXJDZWxsRGVmIGV4dGVuZHMgQ2RrSGVhZGVyQ2VsbERlZiB7fVxuXG4vKipcbiAqIEZvb3RlciBjZWxsIGRlZmluaXRpb24gZm9yIHRoZSBtYXQtdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBmb290ZXIgY2VsbCBhbmQgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRGb290ZXJDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZGtGb290ZXJDZWxsRGVmLCB1c2VFeGlzdGluZzogTWF0Rm9vdGVyQ2VsbERlZn1dXG59KVxuZXhwb3J0IGNsYXNzIE1hdEZvb3RlckNlbGxEZWYgZXh0ZW5kcyBDZGtGb290ZXJDZWxsRGVmIHt9XG5cbi8qKlxuICogQ29sdW1uIGRlZmluaXRpb24gZm9yIHRoZSBtYXQtdGFibGUuXG4gKiBEZWZpbmVzIGEgc2V0IG9mIGNlbGxzIGF2YWlsYWJsZSBmb3IgYSB0YWJsZSBjb2x1bW4uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRDb2x1bW5EZWZdJyxcbiAgaW5wdXRzOiBbJ3N0aWNreSddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogQ2RrQ29sdW1uRGVmLCB1c2VFeGlzdGluZzogTWF0Q29sdW1uRGVmfSxcbiAgICB7cHJvdmlkZTogJ01BVF9TT1JUX0hFQURFUl9DT0xVTU5fREVGJywgdXNlRXhpc3Rpbmc6IE1hdENvbHVtbkRlZn1cbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0Q29sdW1uRGVmIGV4dGVuZHMgQ2RrQ29sdW1uRGVmIHtcbiAgLyoqIFVuaXF1ZSBuYW1lIGZvciB0aGlzIGNvbHVtbi4gKi9cbiAgQElucHV0KCdtYXRDb2x1bW5EZWYnKSBuYW1lOiBzdHJpbmc7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreTogQm9vbGVhbklucHV0O1xufVxuXG4vKiogSGVhZGVyIGNlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1oZWFkZXItY2VsbCwgdGhbbWF0LWhlYWRlci1jZWxsXScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWhlYWRlci1jZWxsJyxcbiAgICAncm9sZSc6ICdjb2x1bW5oZWFkZXInLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNYXRIZWFkZXJDZWxsIGV4dGVuZHMgQ2RrSGVhZGVyQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG1hdC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gIH1cbn1cblxuLyoqIEZvb3RlciBjZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtZm9vdGVyLWNlbGwsIHRkW21hdC1mb290ZXItY2VsbF0nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1mb290ZXItY2VsbCcsXG4gICAgJ3JvbGUnOiAnZ3JpZGNlbGwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNYXRGb290ZXJDZWxsIGV4dGVuZHMgQ2RrRm9vdGVyQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbWF0LWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgfVxufVxuXG4vKiogQ2VsbCB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBhZGRzIHRoZSByaWdodCBjbGFzc2VzIGFuZCByb2xlLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWNlbGwsIHRkW21hdC1jZWxsXScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWNlbGwnLFxuICAgICdyb2xlJzogJ2dyaWRjZWxsJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2VsbCBleHRlbmRzIENka0NlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBtYXQtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICB9XG59XG4iXX0=