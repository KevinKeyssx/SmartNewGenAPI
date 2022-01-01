/**
 * @fileoverview added by tsickle
 * Generated from: src/material/input/autosize.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Directive, Input } from '@angular/core';
/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `\@angular/cdk/text-field` instead.
 * \@breaking-change 8.0.0
 */
import * as ɵngcc0 from '@angular/core';
export class MatTextareaAutosize extends CdkTextareaAutosize {
    /**
     * @return {?}
     */
    get matAutosizeMinRows() { return this.minRows; }
    /**
     * @param {?} value
     * @return {?}
     */
    set matAutosizeMinRows(value) { this.minRows = value; }
    /**
     * @return {?}
     */
    get matAutosizeMaxRows() { return this.maxRows; }
    /**
     * @param {?} value
     * @return {?}
     */
    set matAutosizeMaxRows(value) { this.maxRows = value; }
    /**
     * @return {?}
     */
    get matAutosize() { return this.enabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set matAutosize(value) { this.enabled = value; }
    /**
     * @return {?}
     */
    get matTextareaAutosize() { return this.enabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set matTextareaAutosize(value) { this.enabled = value; }
}
MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) { return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize); };
MatTextareaAutosize.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTextareaAutosize, selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]], hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"], inputs: { cdkAutosizeMinRows: "cdkAutosizeMinRows", cdkAutosizeMaxRows: "cdkAutosizeMaxRows", matAutosizeMinRows: "matAutosizeMinRows", matAutosizeMaxRows: "matAutosizeMaxRows", matAutosize: ["mat-autosize", "matAutosize"], matTextareaAutosize: "matTextareaAutosize" }, exportAs: ["matTextareaAutosize"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
MatTextareaAutosize.propDecorators = {
    matAutosizeMinRows: [{ type: Input }],
    matAutosizeMaxRows: [{ type: Input }],
    matAutosize: [{ type: Input, args: ['mat-autosize',] }],
    matTextareaAutosize: [{ type: Input }]
};
const ɵMatTextareaAutosize_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTextareaAutosize);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTextareaAutosize, [{
        type: Directive,
        args: [{
                selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
                exportAs: 'matTextareaAutosize',
                inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
                host: {
                    'class': 'cdk-textarea-autosize mat-autosize',
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    'rows': '1'
                }
            }]
    }], null, { matAutosizeMinRows: [{
            type: Input
        }], matAutosizeMaxRows: [{
            type: Input
        }], matAutosize: [{
            type: Input,
            args: ['mat-autosize']
        }], matTextareaAutosize: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9pbnB1dC9hdXRvc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQztBQUNHO0FBQ2dFO0FBRW5FO0FBQ0M7O0FBWUQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFtQjtBQUM1RDtBQUFRO0FBQ1E7QUFBUSxJQUR0QixJQUNJLGtCQUFrQixLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDM0Q7QUFBUTtBQUF3QjtBQUFtQjtBQUFRLElBQXpELElBQUksa0JBQWtCLENBQUMsS0FBYSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNqRTtBQUNPO0FBQ1E7QUFBUSxJQURyQixJQUNJLGtCQUFrQixLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDM0Q7QUFBUTtBQUF3QjtBQUFtQjtBQUFRLElBQXpELElBQUksa0JBQWtCLENBQUMsS0FBYSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNqRTtBQUNPO0FBQ047QUFBUSxJQURQLElBQ0ksV0FBVyxLQUFjLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDckQ7QUFBUTtBQUF3QjtBQUFtQjtBQUFRLElBQXpELElBQUksV0FBVyxDQUFDLEtBQWMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDM0Q7QUFDTztBQUNRO0FBQVEsSUFEckIsSUFDSSxtQkFBbUIsS0FBYyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzdEO0FBQVE7QUFBd0I7QUFBbUI7QUFBUSxJQUF6RCxJQUFJLG1CQUFtQixDQUFDLEtBQWMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbkU7K0NBM0JDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7U0FBdUQsa0JBQ2pFLFFBQVEsRUFBRSxxQkFBcUIsa0JBQy9CLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDLGtCQUNwRCxJQUFJLEVBQUUsc0JBQ0osT0FBTyxFQUFFLG9DQUFvQyxxUEFHN0MsTUFBTSxFQUFFLEdBQUcsbUJBQ1osZUFDRixvRkFDSTtBQUFDO0FBQXVDLGlDQUMxQyxLQUFLO0FBQ04saUNBR0MsS0FBSztBQUNOLDBCQUdDLEtBQUssU0FBQyxjQUFjO0FBQ2xCLGtDQUdGLEtBQUs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDZGtUZXh0YXJlYUF1dG9zaXplfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBhdXRvbWF0aWNhbGx5IHJlc2l6ZSBhIHRleHRhcmVhIHRvIGZpdCBpdHMgY29udGVudC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgY2RrVGV4dGFyZWFBdXRvc2l6ZWAgZnJvbSBgQGFuZ3VsYXIvY2RrL3RleHQtZmllbGRgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RleHRhcmVhW21hdC1hdXRvc2l6ZV0sIHRleHRhcmVhW21hdFRleHRhcmVhQXV0b3NpemVdJyxcbiAgZXhwb3J0QXM6ICdtYXRUZXh0YXJlYUF1dG9zaXplJyxcbiAgaW5wdXRzOiBbJ2Nka0F1dG9zaXplTWluUm93cycsICdjZGtBdXRvc2l6ZU1heFJvd3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstdGV4dGFyZWEtYXV0b3NpemUgbWF0LWF1dG9zaXplJyxcbiAgICAvLyBUZXh0YXJlYSBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIGRpcmVjdGl2ZSBhcHBsaWVkIHNob3VsZCBoYXZlIGEgc2luZ2xlIHJvdyBieSBkZWZhdWx0LlxuICAgIC8vIEJyb3dzZXJzIG5vcm1hbGx5IHNob3cgdHdvIHJvd3MgYnkgZGVmYXVsdCBhbmQgdGhlcmVmb3JlIHRoaXMgbGltaXRzIHRoZSBtaW5Sb3dzIGJpbmRpbmcuXG4gICAgJ3Jvd3MnOiAnMScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRleHRhcmVhQXV0b3NpemUgZXh0ZW5kcyBDZGtUZXh0YXJlYUF1dG9zaXplIHtcbiAgQElucHV0KClcbiAgZ2V0IG1hdEF1dG9zaXplTWluUm93cygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW5Sb3dzOyB9XG4gIHNldCBtYXRBdXRvc2l6ZU1pblJvd3ModmFsdWU6IG51bWJlcikgeyB0aGlzLm1pblJvd3MgPSB2YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBtYXRBdXRvc2l6ZU1heFJvd3MoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Um93czsgfVxuICBzZXQgbWF0QXV0b3NpemVNYXhSb3dzKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5tYXhSb3dzID0gdmFsdWU7IH1cblxuICBASW5wdXQoJ21hdC1hdXRvc2l6ZScpXG4gIGdldCBtYXRBdXRvc2l6ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZW5hYmxlZDsgfVxuICBzZXQgbWF0QXV0b3NpemUodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5lbmFibGVkID0gdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBnZXQgbWF0VGV4dGFyZWFBdXRvc2l6ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZW5hYmxlZDsgfVxuICBzZXQgbWF0VGV4dGFyZWFBdXRvc2l6ZSh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLmVuYWJsZWQgPSB2YWx1ZTsgfVxufVxuIl19