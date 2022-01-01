/**
 * @fileoverview added by tsickle
 * Generated from: src/material/expansion/accordion.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input, ContentChildren, QueryList } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkAccordion } from '@angular/cdk/accordion';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { HOME, END, hasModifierKey } from '@angular/cdk/keycodes';
import { startWith } from 'rxjs/operators';
import { MAT_ACCORDION } from './accordion-base';
import { MatExpansionPanelHeader } from './expansion-panel-header';
/**
 * Directive for a Material Design Accordion.
 */
import * as ɵngcc0 from '@angular/core';
export class MatAccordion extends CdkAccordion {
    constructor() {
        super(...arguments);
        /**
         * Headers belonging to this accordion.
         */
        this._ownHeaders = new QueryList();
        this._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        this.displayMode = 'default';
        /**
         * The position of the expansion indicator.
         */
        this.togglePosition = 'after';
    }
    /**
     * Whether the expansion indicator should be hidden.
     * @return {?}
     */
    get hideToggle() { return this._hideToggle; }
    /**
     * @param {?} show
     * @return {?}
     */
    set hideToggle(show) { this._hideToggle = coerceBooleanProperty(show); }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._headers.changes
            .pipe(startWith(this._headers))
            .subscribe((/**
         * @param {?} headers
         * @return {?}
         */
        (headers) => {
            this._ownHeaders.reset(headers.filter((/**
             * @param {?} header
             * @return {?}
             */
            header => header.panel.accordion === this)));
            this._ownHeaders.notifyOnChanges();
        }));
        this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap();
    }
    /**
     * Handles keyboard events coming in from the panel headers.
     * @param {?} event
     * @return {?}
     */
    _handleHeaderKeydown(event) {
        const { keyCode } = event;
        /** @type {?} */
        const manager = this._keyManager;
        if (keyCode === HOME) {
            if (!hasModifierKey(event)) {
                manager.setFirstItemActive();
                event.preventDefault();
            }
        }
        else if (keyCode === END) {
            if (!hasModifierKey(event)) {
                manager.setLastItemActive();
                event.preventDefault();
            }
        }
        else {
            this._keyManager.onKeydown(event);
        }
    }
    /**
     * @param {?} header
     * @return {?}
     */
    _handleHeaderFocus(header) {
        this._keyManager.updateActiveItem(header);
    }
}
MatAccordion.ɵfac = function MatAccordion_Factory(t) { return ɵMatAccordion_BaseFactory(t || MatAccordion); };
MatAccordion.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatAccordion, selectors: [["mat-accordion"]], contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatExpansionPanelHeader, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._headers = _t);
    } }, hostAttrs: [1, "mat-accordion"], hostVars: 2, hostBindings: function MatAccordion_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-accordion-multi", ctx.multi);
    } }, inputs: { multi: "multi", displayMode: "displayMode", togglePosition: "togglePosition", hideToggle: "hideToggle" }, exportAs: ["matAccordion"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: MAT_ACCORDION,
                useExisting: MatAccordion
            }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
MatAccordion.propDecorators = {
    _headers: [{ type: ContentChildren, args: [MatExpansionPanelHeader, { descendants: true },] }],
    hideToggle: [{ type: Input }],
    displayMode: [{ type: Input }],
    togglePosition: [{ type: Input }]
};
const ɵMatAccordion_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatAccordion);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatAccordion, [{
        type: Directive,
        args: [{
                selector: 'mat-accordion',
                exportAs: 'matAccordion',
                inputs: ['multi'],
                providers: [{
                        provide: MAT_ACCORDION,
                        useExisting: MatAccordion
                    }],
                host: {
                    class: 'mat-accordion',
                    // Class binding which is only used by the test harness as there is no other
                    // way for the harness to detect if multiple panel support is enabled.
                    '[class.mat-accordion-multi]': 'this.multi'
                }
            }]
    }], null, { displayMode: [{
            type: Input
        }], togglePosition: [{
            type: Input
        }], hideToggle: [{
            type: Input
        }], _headers: [{
            type: ContentChildren,
            args: [MatExpansionPanelHeader, { descendants: true }]
        }] }); })();
if (false) {
    /** @type {?} */
    MatAccordion.ngAcceptInputType_hideToggle;
    /**
     * @type {?}
     * @private
     */
    MatAccordion.prototype._keyManager;
    /**
     * Headers belonging to this accordion.
     * @type {?}
     * @private
     */
    MatAccordion.prototype._ownHeaders;
    /**
     * All headers inside the accordion. Includes headers inside nested accordions.
     * @type {?}
     */
    MatAccordion.prototype._headers;
    /**
     * @type {?}
     * @private
     */
    MatAccordion.prototype._hideToggle;
    /**
     * Display mode used for all expansion panels in the accordion. Currently two display
     * modes exist:
     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
     *     panel at a different elevation from the rest of the accordion.
     *  flat - no spacing is placed around expanded panels, showing all panels at the same
     *     elevation.
     * @type {?}
     */
    MatAccordion.prototype.displayMode;
    /**
     * The position of the expansion indicator.
     * @type {?}
     */
    MatAccordion.prototype.togglePosition;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvZXhwYW5zaW9uL2FjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsYUFBYSxFQUlkLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDakU7QUFDRztBQUMwQzs7QUFpQjdDLE1BQU0sT0FBTyxZQUFhLFNBQVEsWUFBWTtBQUFHLElBZmpEO0FBQ0c7QUFDQTtBQUFZO0FBRUQ7QUFDSixRQWNBLGdCQUFXLEdBQUcsSUFBSSxTQUFTLEVBQTJCLENBQUM7QUFDakUsUUFTVSxnQkFBVyxHQUFZLEtBQUssQ0FBQztBQUN2QztBQUVLO0FBQ007QUFDTTtBQUNNO0FBQ007QUFHcEI7QUFBMEI7QUFBWSxRQUFwQyxnQkFBVyxHQUE0QixTQUFTLENBQUM7QUFDNUQ7QUFDVztBQUNFO0FBQVksUUFBZCxtQkFBYyxHQUErQixPQUFPLENBQUM7QUFDaEUsSUFxQ0EsQ0FBQztBQUNEO0FBQVE7QUFBeUQ7QUFBbUI7QUFBUSxJQXZEMUYsSUFDSSxVQUFVLEtBQWMsT0FBTyxJQUFJLENBQUMsV0FBVyxD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O0FBQWlCO0FBQWdCO0FBQVEsSUFqRTdDLG1DQUE4RDtBQUNoRTtBQUNPO0FBQ0Y7QUFBaUI7QUFBZ0I7QUFBUSxJQUE1QyxtQ0FBK0Q7QUFDakU7QUFDTztBQUNGO0FBQWlCO0FBQVEsSUFBNUIsZ0NBQzZDO0FBQy9DO0FBQ087QUFBaUI7QUFBZ0I7QUFBUSxJQUk5QyxtQ0FBcUM7QUFDdkM7QUFFQztBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFFSjtBQUFpQjtBQUFRLElBQTlCLG1DQUEwRDtBQUM1RDtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1QixzQ0FBOEQ7QUFDaEU7QUFDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0Nka0FjY29yZGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2FjY29yZGlvbic7XG5pbXBvcnQge0ZvY3VzS2V5TWFuYWdlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtIT01FLCBFTkQsIGhhc01vZGlmaWVyS2V5fSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE1BVF9BQ0NPUkRJT04sXG4gIE1hdEFjY29yZGlvbkJhc2UsXG4gIE1hdEFjY29yZGlvbkRpc3BsYXlNb2RlLFxuICBNYXRBY2NvcmRpb25Ub2dnbGVQb3NpdGlvblxufSBmcm9tICcuL2FjY29yZGlvbi1iYXNlJztcbmltcG9ydCB7TWF0RXhwYW5zaW9uUGFuZWxIZWFkZXJ9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWhlYWRlcic7XG5cbi8qKlxuICogRGlyZWN0aXZlIGZvciBhIE1hdGVyaWFsIERlc2lnbiBBY2NvcmRpb24uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1hY2NvcmRpb24nLFxuICBleHBvcnRBczogJ21hdEFjY29yZGlvbicsXG4gIGlucHV0czogWydtdWx0aSddLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTUFUX0FDQ09SRElPTixcbiAgICB1c2VFeGlzdGluZzogTWF0QWNjb3JkaW9uXG4gIH1dLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdtYXQtYWNjb3JkaW9uJyxcbiAgICAvLyBDbGFzcyBiaW5kaW5nIHdoaWNoIGlzIG9ubHkgdXNlZCBieSB0aGUgdGVzdCBoYXJuZXNzIGFzIHRoZXJlIGlzIG5vIG90aGVyXG4gICAgLy8gd2F5IGZvciB0aGUgaGFybmVzcyB0byBkZXRlY3QgaWYgbXVsdGlwbGUgcGFuZWwgc3VwcG9ydCBpcyBlbmFibGVkLlxuICAgICdbY2xhc3MubWF0LWFjY29yZGlvbi1tdWx0aV0nOiAndGhpcy5tdWx0aScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTWF0QWNjb3JkaW9uIGV4dGVuZHMgQ2RrQWNjb3JkaW9uIGltcGxlbWVudHMgTWF0QWNjb3JkaW9uQmFzZSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX2tleU1hbmFnZXI6IEZvY3VzS2V5TWFuYWdlcjxNYXRFeHBhbnNpb25QYW5lbEhlYWRlcj47XG5cbiAgLyoqIEhlYWRlcnMgYmVsb25naW5nIHRvIHRoaXMgYWNjb3JkaW9uLiAqL1xuICBwcml2YXRlIF9vd25IZWFkZXJzID0gbmV3IFF1ZXJ5TGlzdDxNYXRFeHBhbnNpb25QYW5lbEhlYWRlcj4oKTtcblxuICAvKiogQWxsIGhlYWRlcnMgaW5zaWRlIHRoZSBhY2NvcmRpb24uIEluY2x1ZGVzIGhlYWRlcnMgaW5zaWRlIG5lc3RlZCBhY2NvcmRpb25zLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE1hdEV4cGFuc2lvblBhbmVsSGVhZGVyLCB7ZGVzY2VuZGFudHM6IHRydWV9KVxuICBfaGVhZGVyczogUXVlcnlMaXN0PE1hdEV4cGFuc2lvblBhbmVsSGVhZGVyPjtcblxuICAvKiogV2hldGhlciB0aGUgZXhwYW5zaW9uIGluZGljYXRvciBzaG91bGQgYmUgaGlkZGVuLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaGlkZVRvZ2dsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2hpZGVUb2dnbGU7IH1cbiAgc2V0IGhpZGVUb2dnbGUoc2hvdzogYm9vbGVhbikgeyB0aGlzLl9oaWRlVG9nZ2xlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNob3cpOyB9XG4gIHByaXZhdGUgX2hpZGVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRGlzcGxheSBtb2RlIHVzZWQgZm9yIGFsbCBleHBhbnNpb24gcGFuZWxzIGluIHRoZSBhY2NvcmRpb24uIEN1cnJlbnRseSB0d28gZGlzcGxheVxuICAgKiBtb2RlcyBleGlzdDpcbiAgICogIGRlZmF1bHQgLSBhIGd1dHRlci1saWtlIHNwYWNpbmcgaXMgcGxhY2VkIGFyb3VuZCBhbnkgZXhwYW5kZWQgcGFuZWwsIHBsYWNpbmcgdGhlIGV4cGFuZGVkXG4gICAqICAgICBwYW5lbCBhdCBhIGRpZmZlcmVudCBlbGV2YXRpb24gZnJvbSB0aGUgcmVzdCBvZiB0aGUgYWNjb3JkaW9uLlxuICAgKiAgZmxhdCAtIG5vIHNwYWNpbmcgaXMgcGxhY2VkIGFyb3VuZCBleHBhbmRlZCBwYW5lbHMsIHNob3dpbmcgYWxsIHBhbmVscyBhdCB0aGUgc2FtZVxuICAgKiAgICAgZWxldmF0aW9uLlxuICAgKi9cbiAgQElucHV0KCkgZGlzcGxheU1vZGU6IE1hdEFjY29yZGlvbkRpc3BsYXlNb2RlID0gJ2RlZmF1bHQnO1xuXG4gIC8qKiBUaGUgcG9zaXRpb24gb2YgdGhlIGV4cGFuc2lvbiBpbmRpY2F0b3IuICovXG4gIEBJbnB1dCgpIHRvZ2dsZVBvc2l0aW9uOiBNYXRBY2NvcmRpb25Ub2dnbGVQb3NpdGlvbiA9ICdhZnRlcic7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2hlYWRlcnMuY2hhbmdlc1xuICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMuX2hlYWRlcnMpKVxuICAgICAgLnN1YnNjcmliZSgoaGVhZGVyczogUXVlcnlMaXN0PE1hdEV4cGFuc2lvblBhbmVsSGVhZGVyPikgPT4ge1xuICAgICAgICB0aGlzLl9vd25IZWFkZXJzLnJlc2V0KGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiBoZWFkZXIucGFuZWwuYWNjb3JkaW9uID09PSB0aGlzKSk7XG4gICAgICAgIHRoaXMuX293bkhlYWRlcnMubm90aWZ5T25DaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX2tleU1hbmFnZXIgPSBuZXcgRm9jdXNLZXlNYW5hZ2VyKHRoaXMuX293bkhlYWRlcnMpLndpdGhXcmFwKCk7XG4gIH1cblxuICAvKiogSGFuZGxlcyBrZXlib2FyZCBldmVudHMgY29taW5nIGluIGZyb20gdGhlIHBhbmVsIGhlYWRlcnMuICovXG4gIF9oYW5kbGVIZWFkZXJLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3Qge2tleUNvZGV9ID0gZXZlbnQ7XG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuX2tleU1hbmFnZXI7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gSE9NRSkge1xuICAgICAgaWYgKCFoYXNNb2RpZmllcktleShldmVudCkpIHtcbiAgICAgICAgbWFuYWdlci5zZXRGaXJzdEl0ZW1BY3RpdmUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEVORCkge1xuICAgICAgaWYgKCFoYXNNb2RpZmllcktleShldmVudCkpIHtcbiAgICAgICAgbWFuYWdlci5zZXRMYXN0SXRlbUFjdGl2ZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUhlYWRlckZvY3VzKGhlYWRlcjogTWF0RXhwYW5zaW9uUGFuZWxIZWFkZXIpIHtcbiAgICB0aGlzLl9rZXlNYW5hZ2VyLnVwZGF0ZUFjdGl2ZUl0ZW0oaGVhZGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oaWRlVG9nZ2xlOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=