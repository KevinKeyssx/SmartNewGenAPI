/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/error/error-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Error state matcher that matches when a control is invalid and dirty.
 */
import * as ɵngcc0 from '@angular/core';
export class ShowOnDirtyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
    }
}
ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) { return new (t || ShowOnDirtyErrorStateMatcher)(); };
ShowOnDirtyErrorStateMatcher.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ShowOnDirtyErrorStateMatcher, factory: ShowOnDirtyErrorStateMatcher.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ShowOnDirtyErrorStateMatcher, [{
        type: Injectable
    }], null, null); })();
/**
 * Provider that defines how form controls behave with regards to displaying error messages.
 */
export class ErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || (form && form.submitted)));
    }
}
ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) { return new (t || ErrorStateMatcher)(); };
/** @nocollapse */ ErrorStateMatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function ErrorStateMatcher_Factory() { return new ErrorStateMatcher(); }, token: ErrorStateMatcher, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ErrorStateMatcher, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Itb3B0aW9ucy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2NvcmUvZXJyb3IvZXJyb3Itb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDO0FBQXFDO0FBQUk7QUFFQTs7QUFFekMsTUFBTSxPQUFPLDRCQUE0QjtBQUFHO0FBQVE7QUFDL0M7QUFBdUI7QUFBbUI7QUFBUSxJQUFyRCxZQUFZLENBQUMsT0FBMkIsRUFBRSxJQUF3QztBQUFJLFFBQ3BGLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekYsSUFBRSxDQUFDO0FBQ0g7d0RBTEMsVUFBVTs7OzswQkFDVDtBQUFDO0FBQUk7QUFDb0I7QUFPM0IsTUFBTSxPQUFPLGlCQUFpQjtBQUM5QjtBQUFRO0FBQTBCO0FBQXVCO0FBQW1CO0FBQVEsSUFBbEYsWUFBWSxDQUFDLE9BQTJCLEVBQUUsSUFBd0M7QUFBSSxRQUNwRixPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNGLElBQUUsQ0FBQztBQUNIOzZDQUxDLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsb0JBQzNCO0FBQUM7Ozs7MEJBRXNFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0sIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBFcnJvciBzdGF0ZSBtYXRjaGVyIHRoYXQgbWF0Y2hlcyB3aGVuIGEgY29udHJvbCBpcyBpbnZhbGlkIGFuZCBkaXJ0eS4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaG93T25EaXJ0eUVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKGNvbnRyb2wgJiYgY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IChmb3JtICYmIGZvcm0uc3VibWl0dGVkKSkpO1xuICB9XG59XG5cbi8qKiBQcm92aWRlciB0aGF0IGRlZmluZXMgaG93IGZvcm0gY29udHJvbHMgYmVoYXZlIHdpdGggcmVnYXJkcyB0byBkaXNwbGF5aW5nIGVycm9yIG1lc3NhZ2VzLiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgRXJyb3JTdGF0ZU1hdGNoZXIge1xuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKGNvbnRyb2wgJiYgY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLnRvdWNoZWQgfHwgKGZvcm0gJiYgZm9ybS5zdWJtaXR0ZWQpKSk7XG4gIH1cbn1cbiJdfQ==