/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodeOutlet } from '@angular/cdk/tree';
import { Directive, Inject, Optional, ViewContainerRef, } from '@angular/core';
/**
 * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
import * as ɵngcc0 from '@angular/core';
export class MatTreeNodeOutlet {
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    constructor(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
}
MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(t) { return new (t || MatTreeNodeOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8)); };
MatTreeNodeOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodeOutlet, selectors: [["", "matTreeNodeOutlet", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: CdkTreeNodeOutlet,
                useExisting: MatTreeNodeOutlet
            }])] });
/** @nocollapse */
MatTreeNodeOutlet.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodeOutlet, [{
        type: Directive,
        args: [{
                selector: '[matTreeNodeOutlet]',
                providers: [{
                        provide: CdkTreeNodeOutlet,
                        useExisting: MatTreeNodeOutlet
                    }]
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_TREE_NODE_OUTLET_NODE]
            }, {
                type: Optional
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    MatTreeNodeOutlet.prototype.viewContainer;
    /** @type {?} */
    MatTreeNodeOutlet.prototype._node;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvdHJlZS9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFDLHlCQUF5QixFQUFFLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDL0UsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QjtBQUNHO0FBQ3lGO0FBQ3ZFOztBQVNyQixNQUFNLE9BQU8saUJBQWlCO0FBQUc7QUFBUTtBQUM5QjtBQUNVO0FBQVEsSUFEM0IsWUFDVyxhQUErQixFQUNnQixLQUFXO0FBQUksUUFEOUQsa0JBQWEsR0FBYixhQUFhLENBQWtCO0FBQUMsUUFDZSxVQUFLLEdBQUwsS0FBSyxDQUFNO0FBQUMsSUFBRSxDQUFDO0FBQzNFOzZDQVhDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUscUJBQXFCLGtCQUMvQixTQUFTLEVBQUUsQ0FBQywwQkFDVixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFdBQVcsRUFBRSxpQkFBaUIsc0JBQy9CLENBQUMsY0FDSDs7O29CQUNJO0FBQUM7QUFBbUI7QUFDbkIsWUFmSixnQkFBZ0I7QUFDaEIsNENBZ0JLLE1BQU0sU0FBQyx5QkFBeUIsY0FBRyxRQUFRO0FBQU07Ozs7Ozs7Ozs7Ozs7OztrQ0FBRTtBQUFDO0FBQWE7QUFFekQsSUFIVCwwQ0FBc0M7QUFBQztBQUN6QixJQUFkLGtDQUFpRTtBQUFDO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Q0RLX1RSRUVfTk9ERV9PVVRMRVRfTk9ERSwgQ2RrVHJlZU5vZGVPdXRsZXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogT3V0bGV0IGZvciBuZXN0ZWQgQ2RrTm9kZS4gUHV0IGBbbWF0VHJlZU5vZGVPdXRsZXRdYCBvbiBhIHRhZyB0byBwbGFjZSBjaGlsZHJlbiBkYXRhTm9kZXNcbiAqIGluc2lkZSB0aGUgb3V0bGV0LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0VHJlZU5vZGVPdXRsZXRdJyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IENka1RyZWVOb2RlT3V0bGV0LFxuICAgIHVzZUV4aXN0aW5nOiBNYXRUcmVlTm9kZU91dGxldFxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBNYXRUcmVlTm9kZU91dGxldCBpbXBsZW1lbnRzIENka1RyZWVOb2RlT3V0bGV0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgIEBJbmplY3QoQ0RLX1RSRUVfTk9ERV9PVVRMRVRfTk9ERSkgQE9wdGlvbmFsKCkgcHVibGljIF9ub2RlPzogYW55KSB7fVxufVxuIl19