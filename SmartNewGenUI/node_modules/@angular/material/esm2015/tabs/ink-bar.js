/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tabs/ink-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, Inject, InjectionToken, NgZone, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
/**
 * Interface for a a MatInkBar positioner method, defining the positioning and width of the ink
 * bar in a set of tabs.
 * @record
 */
import * as ɵngcc0 from '@angular/core';
export function _MatInkBarPositioner() { }
/**
 * Injection token for the MatInkBar's Positioner.
 * @type {?}
 */
export const _MAT_INK_BAR_POSITIONER = new InjectionToken('MatInkBarPositioner', {
    providedIn: 'root',
    factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
/**
 * The default positioner function for the MatInkBar.
 * \@docs-private
 * @return {?}
 */
export function _MAT_INK_BAR_POSITIONER_FACTORY() {
    /** @type {?} */
    const method = (/**
     * @param {?} element
     * @return {?}
     */
    (element) => ({
        left: element ? (element.offsetLeft || 0) + 'px' : '0',
        width: element ? (element.offsetWidth || 0) + 'px' : '0',
    }));
    return method;
}
/**
 * The ink-bar is used to display and animate the line underneath the current active tab label.
 * \@docs-private
 */
export class MatInkBar {
    /**
     * @param {?} _elementRef
     * @param {?} _ngZone
     * @param {?} _inkBarPositioner
     * @param {?=} _animationMode
     */
    constructor(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._inkBarPositioner = _inkBarPositioner;
        this._animationMode = _animationMode;
    }
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param {?} element
     * @return {?}
     */
    alignToElement(element) {
        this.show();
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => this._setStyles(element)));
            }));
        }
        else {
            this._setStyles(element);
        }
    }
    /**
     * Shows the ink bar.
     * @return {?}
     */
    show() {
        this._elementRef.nativeElement.style.visibility = 'visible';
    }
    /**
     * Hides the ink bar.
     * @return {?}
     */
    hide() {
        this._elementRef.nativeElement.style.visibility = 'hidden';
    }
    /**
     * Sets the proper styles to the ink bar element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _setStyles(element) {
        /** @type {?} */
        const positions = this._inkBarPositioner(element);
        /** @type {?} */
        const inkBar = this._elementRef.nativeElement;
        inkBar.style.left = positions.left;
        inkBar.style.width = positions.width;
    }
}
MatInkBar.ɵfac = function MatInkBar_Factory(t) { return new (t || MatInkBar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(_MAT_INK_BAR_POSITIONER), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
MatInkBar.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatInkBar, selectors: [["mat-ink-bar"]], hostAttrs: [1, "mat-ink-bar"], hostVars: 2, hostBindings: function MatInkBar_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } } });
/** @nocollapse */
MatInkBar.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [_MAT_INK_BAR_POSITIONER,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatInkBar, [{
        type: Directive,
        args: [{
                selector: 'mat-ink-bar',
                host: {
                    'class': 'mat-ink-bar',
                    '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [_MAT_INK_BAR_POSITIONER]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatInkBar.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatInkBar.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MatInkBar.prototype._inkBarPositioner;
    /** @type {?} */
    MatInkBar.prototype._animationMode;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5rLWJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RhYnMvaW5rLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0U7QUFFRTtBQUM0RjtBQUN2RTtBQUVsQjs7QUFDTCwwQ0FFQztBQUNEO0FBQ0c7QUFBbUQ7QUFDMUM7QUFBWixNQUFNLE9BQU8sdUJBQXVCLEdBQ2xDLElBQUksY0FBYyxDQUF1QixxQkFBcUIsRUFBRTtBQUNsRSxJQUFJLFVBQVUsRUFBRSxNQUFNO0FBQ3RCLElBQUksT0FBTyxFQUFFLCtCQUErQjtBQUM1QyxDQUFHLENBQUM7QUFDSjtBQUNHO0FBQ2tEO0FBRXJEO0FBQ1c7QUFBWCxNQUFNLFVBQVUsK0JBQStCO0FBQUs7QUFBcUIsVUFDakUsTUFBTTtBQUFRO0FBQ3BCO0FBQW1CO0FBQVEsSUFEWixDQUFDLE9BQW9CLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUMsUUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHO0FBQzFELFFBQUksS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRztBQUM1RCxLQUFHLENBQUMsQ0FBQTtBQUNKLElBQ0UsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUNEO0FBQ0c7QUFDNEY7QUFFL0Y7QUFRQSxNQUFNLE9BQU8sU0FBUztBQUN0QjtBQUFRO0FBQ2U7QUFBMEI7QUFFM0M7QUFBa0M7QUFBUSxJQUg5QyxZQUNVLFdBQW9DLEVBQ3BDLE9BQWUsRUFDa0IsaUJBQXVDLEVBQzlCLGNBQXVCO0FBQUksUUFIckUsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO0FBQUMsUUFDckMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtBQUFDLFFBQ2lCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBc0I7QUFBQyxRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBUztBQUFDLElBQUcsQ0FBQztBQUNsRjtBQUVDO0FBQ0U7QUFDRTtBQUVBO0FBQW1CO0FBQVEsSUFBOUIsY0FBYyxDQUFDLE9BQW9CO0FBQ3JDLFFBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hCLFFBQ0ksSUFBSSxPQUFPLHFCQUFxQixLQUFLLFdBQVcsRUFBRTtBQUN0RCxZQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCO0FBQU07QUFDbEI7QUFBZ0IsWUFESCxHQUFHLEVBQUU7QUFDMUMsZ0JBQVEscUJBQXFCO0FBQU07QUFDaEM7QUFFSCxnQkFIOEIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO0FBQzlELFlBQU0sQ0FBQyxFQUFDLENBQUM7QUFDVCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNGO0FBQ0U7QUFBUSxJQURiLElBQUk7QUFBSyxRQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQ2hFLElBQUUsQ0FBQztBQUNIO0FBQ087QUFDRjtBQUNFO0FBQVEsSUFEYixJQUFJO0FBQUssUUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUMvRCxJQUFFLENBQUM7QUFDSDtBQUVDO0FBQ0U7QUFBZ0I7QUFFQTtBQUFtQjtBQUNyQyxJQURTLFVBQVUsQ0FBQyxPQUFvQjtBQUN6QztBQUF5QixjQUFmLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO0FBQ3JEO0FBQXlCLGNBQWYsTUFBTSxHQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7QUFDOUQsUUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ3ZDLFFBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUN6QyxJQUFFLENBQUM7QUFDSDtxQ0FwREMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxhQUFhLGtCQUN2QixJQUFJLEVBQUUsc0JBQ0osT0FBTyxFQUFFLGFBQWEsc0JBQ3RCLGlDQUFpQyxFQUFFLHFDQUFxQztPQUN6RSxlQUNGOztXQUNJO0FBQUM7QUFDTjtBQUNvQixZQTlDRCxVQUFVO0FBQUksWUFBc0IsTUFBTTtBQUFJLDRDQWdENUQsTUFBTSxTQUFDLHVCQUF1QjtBQUFTLHlDQUN2QyxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjtBQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQUU7QUFBQztBQUFhO0FBQVE7QUFHekU7QUFBZ0I7QUFBUSxJQU54QixnQ0FBNEM7QUFBQztBQUMxQztBQUFpQjtBQUNiO0FBQVEsSUFEZiw0QkFBdUI7QUFBQztBQUNyQjtBQUFpQjtBQUFnQjtBQUFRLElBQTVDLHNDQUFnRjtBQUFDO0FBQ2pFLElBQWhCLG1DQUF5RTtBQUFDO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIE5nWm9uZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgYSBNYXRJbmtCYXIgcG9zaXRpb25lciBtZXRob2QsIGRlZmluaW5nIHRoZSBwb3NpdGlvbmluZyBhbmQgd2lkdGggb2YgdGhlIGlua1xuICogYmFyIGluIGEgc2V0IG9mIHRhYnMuXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBjbGFzcy1uYW1lIFVzaW5nIGxlYWRpbmcgdW5kZXJzY29yZSB0byBkZW5vdGUgaW50ZXJuYWwgaW50ZXJmYWNlLlxuZXhwb3J0IGludGVyZmFjZSBfTWF0SW5rQmFyUG9zaXRpb25lciB7XG4gIChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHsgbGVmdDogc3RyaW5nLCB3aWR0aDogc3RyaW5nIH07XG59XG5cbi8qKiBJbmplY3Rpb24gdG9rZW4gZm9yIHRoZSBNYXRJbmtCYXIncyBQb3NpdGlvbmVyLiAqL1xuZXhwb3J0IGNvbnN0IF9NQVRfSU5LX0JBUl9QT1NJVElPTkVSID1cbiAgbmV3IEluamVjdGlvblRva2VuPF9NYXRJbmtCYXJQb3NpdGlvbmVyPignTWF0SW5rQmFyUG9zaXRpb25lcicsIHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG4gICAgZmFjdG9yeTogX01BVF9JTktfQkFSX1BPU0lUSU9ORVJfRkFDVE9SWVxuICB9KTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBwb3NpdGlvbmVyIGZ1bmN0aW9uIGZvciB0aGUgTWF0SW5rQmFyLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX01BVF9JTktfQkFSX1BPU0lUSU9ORVJfRkFDVE9SWSgpOiBfTWF0SW5rQmFyUG9zaXRpb25lciB7XG4gIGNvbnN0IG1ldGhvZCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gKHtcbiAgICBsZWZ0OiBlbGVtZW50ID8gKGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwKSArICdweCcgOiAnMCcsXG4gICAgd2lkdGg6IGVsZW1lbnQgPyAoZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwKSArICdweCcgOiAnMCcsXG4gIH0pO1xuXG4gIHJldHVybiBtZXRob2Q7XG59XG5cbi8qKlxuICogVGhlIGluay1iYXIgaXMgdXNlZCB0byBkaXNwbGF5IGFuZCBhbmltYXRlIHRoZSBsaW5lIHVuZGVybmVhdGggdGhlIGN1cnJlbnQgYWN0aXZlIHRhYiBsYWJlbC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWluay1iYXInLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1pbmstYmFyJyxcbiAgICAnW2NsYXNzLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlXSc6IGBfYW5pbWF0aW9uTW9kZSA9PT0gJ05vb3BBbmltYXRpb25zJ2AsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdElua0JhciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoX01BVF9JTktfQkFSX1BPU0lUSU9ORVIpIHByaXZhdGUgX2lua0JhclBvc2l0aW9uZXI6IF9NYXRJbmtCYXJQb3NpdGlvbmVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwdWJsaWMgX2FuaW1hdGlvbk1vZGU/OiBzdHJpbmcpIHsgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBzdHlsZXMgZnJvbSB0aGUgcHJvdmlkZWQgZWxlbWVudCBpbiBvcmRlciB0byBhbGlnbiB0aGUgaW5rLWJhciB0byB0aGF0IGVsZW1lbnQuXG4gICAqIFNob3dzIHRoZSBpbmsgYmFyIGlmIHByZXZpb3VzbHkgc2V0IGFzIGhpZGRlbi5cbiAgICogQHBhcmFtIGVsZW1lbnRcbiAgICovXG4gIGFsaWduVG9FbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5zaG93KCk7XG5cbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLl9zZXRTdHlsZXMoZWxlbWVudCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlcyhlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiogU2hvd3MgdGhlIGluayBiYXIuICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH1cblxuICAvKiogSGlkZXMgdGhlIGluayBiYXIuICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwcm9wZXIgc3R5bGVzIHRvIHRoZSBpbmsgYmFyIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIF9zZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLl9pbmtCYXJQb3NpdGlvbmVyKGVsZW1lbnQpO1xuICAgIGNvbnN0IGlua0JhcjogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpbmtCYXIuc3R5bGUubGVmdCA9IHBvc2l0aW9ucy5sZWZ0O1xuICAgIGlua0Jhci5zdHlsZS53aWR0aCA9IHBvc2l0aW9ucy53aWR0aDtcbiAgfVxufVxuIl19