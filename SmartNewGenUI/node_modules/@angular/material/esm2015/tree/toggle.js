/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/toggle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkTreeNodeToggle } from '@angular/cdk/tree';
import { Directive, Input } from '@angular/core';
/**
 * Wrapper for the CdkTree's toggle with Material design styles.
 * @template T
 */
import * as ɵngcc0 from '@angular/core';
export class MatTreeNodeToggle extends CdkTreeNodeToggle {
    constructor() {
        super(...arguments);
        this.recursive = false;
    }
}
MatTreeNodeToggle.ɵfac = function MatTreeNodeToggle_Factory(t) { return ɵMatTreeNodeToggle_BaseFactory(t || MatTreeNodeToggle); };
MatTreeNodeToggle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodeToggle, selectors: [["", "matTreeNodeToggle", ""]], inputs: { recursive: ["matTreeNodeToggleRecursive", "recursive"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodeToggle, useExisting: MatTreeNodeToggle }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
MatTreeNodeToggle.propDecorators = {
    recursive: [{ type: Input, args: ['matTreeNodeToggleRecursive',] }]
};
const ɵMatTreeNodeToggle_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTreeNodeToggle);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodeToggle, [{
        type: Directive,
        args: [{
                selector: '[matTreeNodeToggle]',
                providers: [{ provide: CdkTreeNodeToggle, useExisting: MatTreeNodeToggle }]
            }]
    }], null, { recursive: [{
            type: Input,
            args: ['matTreeNodeToggleRecursive']
        }] }); })();
if (false) {
    /** @type {?} */
    MatTreeNodeToggle.prototype.recursive;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvdHJlZS90b2dnbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0M7QUFDRztBQUM2RDtBQUV0RDs7QUFJVixNQUFNLE9BQU8saUJBQXFCLFNBQVEsaUJBQW9CO0FBQzlELElBTEE7QUFDRztBQUE2QixRQUlPLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDbEUsSUFBQSxDQUFDO0FBQ0Q7NkNBUEMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxxQkFBcUIsa0JBQy9CO1FBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxDQUFDLGNBQzFFLG1QQUNJO0FBQUM7QUFBcUMsd0JBQ3hDLEtBQUssU0FBQyw0QkFBNEI7QUFBTTs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUFhO0FBRWhELElBRlQsc0NBQWdFO0FBQ2xFO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDZGtUcmVlTm9kZVRvZ2dsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBXcmFwcGVyIGZvciB0aGUgQ2RrVHJlZSdzIHRvZ2dsZSB3aXRoIE1hdGVyaWFsIGRlc2lnbiBzdHlsZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRUcmVlTm9kZVRvZ2dsZV0nLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrVHJlZU5vZGVUb2dnbGUsIHVzZUV4aXN0aW5nOiBNYXRUcmVlTm9kZVRvZ2dsZX1dXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRyZWVOb2RlVG9nZ2xlPFQ+IGV4dGVuZHMgQ2RrVHJlZU5vZGVUb2dnbGU8VD4ge1xuICBASW5wdXQoJ21hdFRyZWVOb2RlVG9nZ2xlUmVjdXJzaXZlJykgcmVjdXJzaXZlOiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=