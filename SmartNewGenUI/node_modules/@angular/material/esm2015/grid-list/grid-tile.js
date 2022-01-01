/**
 * @fileoverview added by tsickle
 * Generated from: src/material/grid-list/grid-tile.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component, ViewEncapsulation, ElementRef, Input, Optional, ContentChildren, QueryList, Directive, ChangeDetectionStrategy, Inject, } from '@angular/core';
import { MatLine, setLines } from '@angular/material/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { MAT_GRID_LIST } from './grid-list-base';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
const _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
export class MatGridTile {
    /**
     * @param {?} _element
     * @param {?=} _gridList
     */
    constructor(_element, _gridList) {
        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
    }
    /**
     * Amount of rows that the grid tile takes up.
     * @return {?}
     */
    get rowspan() { return this._rowspan; }
    /**
     * @param {?} value
     * @return {?}
     */
    set rowspan(value) { this._rowspan = Math.round(coerceNumberProperty(value)); }
    /**
     * Amount of columns that the grid tile takes up.
     * @return {?}
     */
    get colspan() { return this._colspan; }
    /**
     * @param {?} value
     * @return {?}
     */
    set colspan(value) { this._colspan = Math.round(coerceNumberProperty(value)); }
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    _setStyle(property, value) {
        ((/** @type {?} */ (this._element.nativeElement.style)))[property] = value;
    }
}
MatGridTile.ɵfac = function MatGridTile_Factory(t) { return new (t || MatGridTile)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(MAT_GRID_LIST, 8)); };
MatGridTile.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatGridTile, selectors: [["mat-grid-tile"]], hostAttrs: [1, "mat-grid-tile"], hostVars: 2, hostBindings: function MatGridTile_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("rowspan", ctx.rowspan)("colspan", ctx.colspan);
    } }, inputs: { rowspan: "rowspan", colspan: "colspan" }, exportAs: ["matGridTile"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-figure"]], template: function MatGridTile_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "figure", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatGridTile.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_GRID_LIST,] }] }
];
MatGridTile.propDecorators = {
    rowspan: [{ type: Input }],
    colspan: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridTile, [{
        type: Component,
        args: [{
                selector: 'mat-grid-tile',
                exportAs: 'matGridTile',
                host: {
                    'class': 'mat-grid-tile',
                    // Ensures that the "rowspan" and "colspan" input value is reflected in
                    // the DOM. This is needed for the grid-tile harness.
                    '[attr.rowspan]': 'rowspan',
                    '[attr.colspan]': 'colspan'
                },
                template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_GRID_LIST]
            }] }]; }, { rowspan: [{
            type: Input
        }], colspan: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatGridTile.ngAcceptInputType_rowspan;
    /** @type {?} */
    MatGridTile.ngAcceptInputType_colspan;
    /** @type {?} */
    MatGridTile.prototype._rowspan;
    /** @type {?} */
    MatGridTile.prototype._colspan;
    /**
     * @type {?}
     * @private
     */
    MatGridTile.prototype._element;
    /** @type {?} */
    MatGridTile.prototype._gridList;
}
export class MatGridTileText {
    /**
     * @param {?} _element
     */
    constructor(_element) {
        this._element = _element;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        setLines(this._lines, this._element);
    }
}
MatGridTileText.ɵfac = function MatGridTileText_Factory(t) { return new (t || MatGridTileText)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatGridTileText.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatGridTileText, selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]], contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatLine, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._lines = _t);
    } }, ngContentSelectors: _c2, decls: 4, vars: 0, consts: [[1, "mat-grid-list-text"]], template: function MatGridTileText_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵprojection(2, 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatGridTileText.ctorParameters = () => [
    { type: ElementRef }
];
MatGridTileText.propDecorators = {
    _lines: [{ type: ContentChildren, args: [MatLine, { descendants: true },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridTileText, [{
        type: Component,
        args: [{
                selector: 'mat-grid-tile-header, mat-grid-tile-footer',
                template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { _lines: [{
            type: ContentChildren,
            args: [MatLine, { descendants: true }]
        }] }); })();
if (false) {
    /** @type {?} */
    MatGridTileText.prototype._lines;
    /**
     * @type {?}
     * @private
     */
    MatGridTileText.prototype._element;
}
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
export class MatGridAvatarCssMatStyler {
}
MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) { return new (t || MatGridAvatarCssMatStyler)(); };
MatGridAvatarCssMatStyler.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatGridAvatarCssMatStyler, selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], hostAttrs: [1, "mat-grid-avatar"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridAvatarCssMatStyler, [{
        type: Directive,
        args: [{
                selector: '[mat-grid-avatar], [matGridAvatar]',
                host: { 'class': 'mat-grid-avatar' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
export class MatGridTileHeaderCssMatStyler {
}
MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) { return new (t || MatGridTileHeaderCssMatStyler)(); };
MatGridTileHeaderCssMatStyler.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatGridTileHeaderCssMatStyler, selectors: [["mat-grid-tile-header"]], hostAttrs: [1, "mat-grid-tile-header"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridTileHeaderCssMatStyler, [{
        type: Directive,
        args: [{
                selector: 'mat-grid-tile-header',
                host: { 'class': 'mat-grid-tile-header' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
export class MatGridTileFooterCssMatStyler {
}
MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) { return new (t || MatGridTileFooterCssMatStyler)(); };
MatGridTileFooterCssMatStyler.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatGridTileFooterCssMatStyler, selectors: [["mat-grid-tile-footer"]], hostAttrs: [1, "mat-grid-tile-footer"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridTileFooterCssMatStyler, [{
        type: Directive,
        args: [{
                selector: 'mat-grid-tile-footer',
                host: { 'class': 'mat-grid-tile-footer' }
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC10aWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtdGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUVULFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFDLG9CQUFvQixFQUFjLE1BQU0sdUJBQXVCLENBQUM7QUFDeEUsT0FBTyxFQUFDLGFBQWEsRUFBa0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBaUJoRSxNQUFNLE9BQU8sV0FBVztBQUN4QjtBQUFRO0FBQ0c7QUFHWDtBQUFRLElBRE4sWUFDVSxRQUFpQyxFQUNDLFNBQTJCO0FBQUksUUFEakUsYUFBUSxHQUFSLFFBQVEsQ0FBeUI7QUFBQyxRQUNBLGNBQVMsR0FBVCxTQUFTLENBQWtCO0FBQUMsUUFMeEUsYUFBUSxHQUFXLENBQUMsQ0FBQztBQUN2QixRQUFFLGFBQVEsR0FBVyxDQUFDLENBQUM7QUFDdkIsSUFHNEUsQ0FBQztBQUM3RTtBQUNPO0FBQ0Y7QUFDUTtBQUFRLElBRG5CLElBQ0ksT0FBTyxLQUFhLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDakQ7QUFBUTtBQUF3QjtBQUFtQjtBQUFRLElBQXpELElBQUksT0FBTyxDQUFDLEtBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekY7QUFDTztBQUNGO0FBQ1E7QUFBUSxJQURuQixJQUNJLE9B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QUM7QUFBSTtBQUd5QjtBQUFrQjtBQU9yRCxNQUFNLE9BQU8sNkJBQTZCO0FBQUc7eURBSjVDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsc0JBQXNCO0FBQ2hDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBQyxjQUN4Qzs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIERpcmVjdGl2ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdExpbmUsIHNldExpbmVzfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7Y29lcmNlTnVtYmVyUHJvcGVydHksIE51bWJlcklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtNQVRfR1JJRF9MSVNULCBNYXRHcmlkTGlzdEJhc2V9IGZyb20gJy4vZ3JpZC1saXN0LWJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZ3JpZC10aWxlJyxcbiAgZXhwb3J0QXM6ICdtYXRHcmlkVGlsZScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWdyaWQtdGlsZScsXG4gICAgLy8gRW5zdXJlcyB0aGF0IHRoZSBcInJvd3NwYW5cIiBhbmQgXCJjb2xzcGFuXCIgaW5wdXQgdmFsdWUgaXMgcmVmbGVjdGVkIGluXG4gICAgLy8gdGhlIERPTS4gVGhpcyBpcyBuZWVkZWQgZm9yIHRoZSBncmlkLXRpbGUgaGFybmVzcy5cbiAgICAnW2F0dHIucm93c3Bhbl0nOiAncm93c3BhbicsXG4gICAgJ1thdHRyLmNvbHNwYW5dJzogJ2NvbHNwYW4nXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiAnZ3JpZC10aWxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZ3JpZC1saXN0LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWF0R3JpZFRpbGUge1xuICBfcm93c3BhbjogbnVtYmVyID0gMTtcbiAgX2NvbHNwYW46IG51bWJlciA9IDE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfR1JJRF9MSVNUKSBwdWJsaWMgX2dyaWRMaXN0PzogTWF0R3JpZExpc3RCYXNlKSB7fVxuXG4gIC8qKiBBbW91bnQgb2Ygcm93cyB0aGF0IHRoZSBncmlkIHRpbGUgdGFrZXMgdXAuICovXG4gIEBJbnB1dCgpXG4gIGdldCByb3dzcGFuKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9yb3dzcGFuOyB9XG4gIHNldCByb3dzcGFuKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fcm93c3BhbiA9IE1hdGgucm91bmQoY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpKTsgfVxuXG4gIC8qKiBBbW91bnQgb2YgY29sdW1ucyB0aGF0IHRoZSBncmlkIHRpbGUgdGFrZXMgdXAuICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xzcGFuKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9jb2xzcGFuOyB9XG4gIHNldCBjb2xzcGFuKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fY29sc3BhbiA9IE1hdGgucm91bmQoY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpKTsgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzdHlsZSBvZiB0aGUgZ3JpZC10aWxlIGVsZW1lbnQuICBOZWVkcyB0byBiZSBzZXQgbWFudWFsbHkgdG8gYXZvaWRcbiAgICogXCJDaGFuZ2VkIGFmdGVyIGNoZWNrZWRcIiBlcnJvcnMgdGhhdCB3b3VsZCBvY2N1ciB3aXRoIEhvc3RCaW5kaW5nLlxuICAgKi9cbiAgX3NldFN0eWxlKHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlIGFzIGFueSlbcHJvcGVydHldID0gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcm93c3BhbjogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2xzcGFuOiBOdW1iZXJJbnB1dDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWdyaWQtdGlsZS1oZWFkZXIsIG1hdC1ncmlkLXRpbGUtZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdncmlkLXRpbGUtdGV4dC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1hdEdyaWRUaWxlVGV4dCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKE1hdExpbmUsIHtkZXNjZW5kYW50czogdHJ1ZX0pIF9saW5lczogUXVlcnlMaXN0PE1hdExpbmU+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBzZXRMaW5lcyh0aGlzLl9saW5lcywgdGhpcy5fZWxlbWVudCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgd2hvc2UgcHVycG9zZSBpcyB0byBhZGQgdGhlIG1hdC0gQ1NTIHN0eWxpbmcgdG8gdGhpcyBzZWxlY3Rvci5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdC1ncmlkLWF2YXRhcl0sIFttYXRHcmlkQXZhdGFyXScsXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbWF0LWdyaWQtYXZhdGFyJ31cbn0pXG5leHBvcnQgY2xhc3MgTWF0R3JpZEF2YXRhckNzc01hdFN0eWxlciB7fVxuXG4vKipcbiAqIERpcmVjdGl2ZSB3aG9zZSBwdXJwb3NlIGlzIHRvIGFkZCB0aGUgbWF0LSBDU1Mgc3R5bGluZyB0byB0aGlzIHNlbGVjdG9yLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtZ3JpZC10aWxlLWhlYWRlcicsXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbWF0LWdyaWQtdGlsZS1oZWFkZXInfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRHcmlkVGlsZUhlYWRlckNzc01hdFN0eWxlciB7fVxuXG4vKipcbiAqIERpcmVjdGl2ZSB3aG9zZSBwdXJwb3NlIGlzIHRvIGFkZCB0aGUgbWF0LSBDU1Mgc3R5bGluZyB0byB0aGlzIHNlbGVjdG9yLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtZ3JpZC10aWxlLWZvb3RlcicsXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbWF0LWdyaWQtdGlsZS1mb290ZXInfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRHcmlkVGlsZUZvb3RlckNzc01hdFN0eWxlciB7fVxuIl19