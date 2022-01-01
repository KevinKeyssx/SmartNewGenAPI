/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/gestures/gesture-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { MatCommonModule } from '../common-behaviors/common-module';
/**
 * Injection token that can be used to provide options to the Hammerjs instance.
 * More info at http://hammerjs.github.io/api/.
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
export const MAT_HAMMER_OPTIONS = new InjectionToken('MAT_HAMMER_OPTIONS');
/** @type {?} */
const ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = [
    'longpress',
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft'
];
const ɵ0 = /**
 * @return {?}
 */
() => { }, ɵ1 = /**
 * @return {?}
 */
() => { };
/**
 * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
 * been loaded on the page.
 * @type {?}
 */
const noopHammerInstance = {
    on: (ɵ0),
    off: (ɵ1),
};
/**
 * Adjusts configuration of our gesture library, Hammer.
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 */
export class GestureConfig extends HammerGestureConfig {
    /**
     * @param {?=} _hammerOptions
     * @param {?=} _commonModule
     */
    constructor(_hammerOptions, _commonModule) {
        super();
        this._hammerOptions = _hammerOptions;
        /**
         * List of new event names to add to the gesture support list
         */
        this.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param {?} element Element to which to assign the new HammerJS gestures.
     * @return {?} Newly-created HammerJS instance.
     */
    buildHammer(element) {
        /** @type {?} */
        const hammer = typeof window !== 'undefined' ? ((/** @type {?} */ (window))).Hammer : null;
        if (!hammer) {
            // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
            // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
            // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
            // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
            // `this.events` to the set we support, instead of conditionally setting it to `[]` if
            // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
            // undefined).
            // @breaking-change 8.0.0
            return noopHammerInstance;
        }
        /** @type {?} */
        const mc = new hammer(element, this._hammerOptions || undefined);
        // Default Hammer Recognizers.
        /** @type {?} */
        const pan = new hammer.Pan();
        /** @type {?} */
        const swipe = new hammer.Swipe();
        /** @type {?} */
        const press = new hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team
        /** @type {?} */
        const slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        /** @type {?} */
        const longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Since the slide event threshold is set to zero, the slide recognizer can fire and
        // accidentally reset the longpress recognizer. In order to make sure that the two
        // recognizers can run simultaneously but don't affect each other, we allow the slide
        // recognizer to recognize while a longpress is being processed.
        // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124
        longpress.recognizeWith(slide);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, slide, longpress]);
        return (/** @type {?} */ (mc));
    }
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @private
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    _createRecognizer(base, options, ...inheritances) {
        /** @type {?} */
        let recognizer = new ((/** @type {?} */ (base.constructor)))(options);
        inheritances.push(base);
        inheritances.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => recognizer.recognizeWith(item)));
        return recognizer;
    }
}
GestureConfig.ɵfac = function GestureConfig_Factory(t) { return new (t || GestureConfig)(ɵngcc0.ɵɵinject(MAT_HAMMER_OPTIONS, 8), ɵngcc0.ɵɵinject(MatCommonModule, 8)); };
GestureConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: GestureConfig, factory: GestureConfig.ɵfac });
/** @nocollapse */
GestureConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_HAMMER_OPTIONS,] }] },
    { type: MatCommonModule, decorators: [{ type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GestureConfig, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_HAMMER_OPTIONS]
            }] }, { type: MatCommonModule, decorators: [{
                type: Optional
            }] }]; }, null); })();
if (false) {
    /**
     * List of new event names to add to the gesture support list
     * @type {?}
     */
    GestureConfig.prototype.events;
    /**
     * @type {?}
     * @private
     */
    GestureConfig.prototype._hammerOptions;
}
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZS1jb25maWcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9jb3JlL2dlc3R1cmVzL2dlc3R1cmUtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFO0FBQUk7QUFLSTtBQUlOO0FBQW9EO0FBQ3JEO0FBQWE7O0FBSWQsTUFBTSxPQUFPLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUFnQixvQkFBb0IsQ0FBQztBQUN6RjtBQUNnQixNQUFWLDBDQUEwQyxHQUFHO0FBQ25ELElBQUUsV0FBVztBQUNiLElBQUUsT0FBTztBQUNULElBQUUsWUFBWTtBQUNkLElBQUUsVUFBVTtBQUNaLElBQUUsWUFBWTtBQUNkLElBQUUsV0FBVztBQUNiLENBQUM7QUFDRDtBQUVVO0FBQWU7QUFJbkIsR0FBRyxFQUFFLEdBQUUsQ0FBQztBQUNMO0FBR047QUFISSxHQUFHLEVBQUUsR0FBRSxDQUFDO0FBQ2Y7QUFFQTtBQUVpQztBQUN4QjtBQUFhO0FBQUksTUFScEIsa0JBQWtCLEdBQW1CO0FBQzNDLElBQUUsRUFBRSxNQUFVO0FBQ2QsSUFBRSxHQUFHLE1BQVU7QUFDZixDQUFDO0FBQ0Q7QUFDRztBQUNxRDtBQUNMO0FBRW5EO0FBRUEsTUFBTSxPQUFPLGFBQWMsU0FBUSxtQkFBbUI7QUFDdEQ7QUFBUTtBQUFrQztBQUNuQztBQUFRLElBRWIsWUFDa0QsY0FBOEIsRUFDbEUsYUFBK0I7QUFDL0MsUUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLFFBSG9ELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtBQUFDO0FBQ3hF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QzNDLGVBQWUsdUJBK0NsQixRQUFRO0FBQU07Ozs7Ozs7Ozs7a0NBQUU7QUFBQztBQUFhO0FBQVE7QUFLVDtBQUFpQjtBQUFRLElBVHpELCtCQUFvRDtBQUN0RDtBQUNPO0FBQ0U7QUFBZ0I7QUFBUSxJQUE3Qix1Q0FBOEU7QUFBQztBQUNsRjtBQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdGlvblRva2VuLCBJbmplY3QsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGFtbWVyR2VzdHVyZUNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge01hdENvbW1vbk1vZHVsZX0gZnJvbSAnLi4vY29tbW9uLWJlaGF2aW9ycy9jb21tb24tbW9kdWxlJztcbmltcG9ydCB7XG4gIEhhbW1lclN0YXRpYyxcbiAgSGFtbWVySW5zdGFuY2UsXG4gIFJlY29nbml6ZXIsXG4gIFJlY29nbml6ZXJTdGF0aWMsXG4gIEhhbW1lck9wdGlvbnMsXG59IGZyb20gJy4vZ2VzdHVyZS1hbm5vdGF0aW9ucyc7XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBvcHRpb25zIHRvIHRoZSBIYW1tZXJqcyBpbnN0YW5jZS5cbiAqIE1vcmUgaW5mbyBhdCBodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvL2FwaS8uXG4gKiBAZGVwcmVjYXRlZCBObyBsb25nZXIgYmVpbmcgdXNlZC4gVG8gYmUgcmVtb3ZlZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNQVRfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ01BVF9IQU1NRVJfT1BUSU9OUycpO1xuXG5jb25zdCBBTkdVTEFSX01BVEVSSUFMX1NVUFBPUlRFRF9IQU1NRVJfR0VTVFVSRVMgPSBbXG4gICdsb25ncHJlc3MnLFxuICAnc2xpZGUnLFxuICAnc2xpZGVzdGFydCcsXG4gICdzbGlkZWVuZCcsXG4gICdzbGlkZXJpZ2h0JyxcbiAgJ3NsaWRlbGVmdCdcbl07XG5cbi8qKlxuICogRmFrZSBIYW1tZXJJbnN0YW5jZSB0aGF0IGlzIHVzZWQgd2hlbiBhIEhhbW1lciBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQgd2hlbiBIYW1tZXJKUyBoYXMgbm90XG4gKiBiZWVuIGxvYWRlZCBvbiB0aGUgcGFnZS5cbiAqL1xuY29uc3Qgbm9vcEhhbW1lckluc3RhbmNlOiBIYW1tZXJJbnN0YW5jZSA9IHtcbiAgb246ICgpID0+IHt9LFxuICBvZmY6ICgpID0+IHt9LFxufTtcblxuLyoqXG4gKiBBZGp1c3RzIGNvbmZpZ3VyYXRpb24gb2Ygb3VyIGdlc3R1cmUgbGlicmFyeSwgSGFtbWVyLlxuICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuIFRvIGJlIHJlbW92ZWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICAvKiogTGlzdCBvZiBuZXcgZXZlbnQgbmFtZXMgdG8gYWRkIHRvIHRoZSBnZXN0dXJlIHN1cHBvcnQgbGlzdCAqL1xuICBldmVudHMgPSBBTkdVTEFSX01BVEVSSUFMX1NVUFBPUlRFRF9IQU1NRVJfR0VTVFVSRVM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfSEFNTUVSX09QVElPTlMpIHByaXZhdGUgX2hhbW1lck9wdGlvbnM/OiBIYW1tZXJPcHRpb25zLFxuICAgIEBPcHRpb25hbCgpIF9jb21tb25Nb2R1bGU/OiBNYXRDb21tb25Nb2R1bGUpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBIYW1tZXIgaW5zdGFuY2UgbWFudWFsbHkgdG8gYWRkIGN1c3RvbSByZWNvZ25pemVycyB0aGF0IG1hdGNoIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbiAgICpcbiAgICogT3VyIGdlc3R1cmUgbmFtZXMgY29tZSBmcm9tIHRoZSBNYXRlcmlhbCBEZXNpZ24gZ2VzdHVyZXMgc3BlYzpcbiAgICogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vI2dlc3R1cmVzLXRvdWNoLW1lY2hhbmljc1xuICAgKlxuICAgKiBNb3JlIGluZm9ybWF0aW9uIG9uIGRlZmF1bHQgcmVjb2duaXplcnMgY2FuIGJlIGZvdW5kIGluIEhhbW1lciBkb2NzOlxuICAgKiBodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvL3JlY29nbml6ZXItcGFuL1xuICAgKiBodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvL3JlY29nbml6ZXItcHJlc3MvXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gd2hpY2ggdG8gYXNzaWduIHRoZSBuZXcgSGFtbWVySlMgZ2VzdHVyZXMuXG4gICAqIEByZXR1cm5zIE5ld2x5LWNyZWF0ZWQgSGFtbWVySlMgaW5zdGFuY2UuXG4gICAqL1xuICBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhhbW1lckluc3RhbmNlIHtcbiAgICBjb25zdCBoYW1tZXI6IEhhbW1lclN0YXRpYyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG5cbiAgICBpZiAoIWhhbW1lcikge1xuICAgICAgLy8gSWYgSGFtbWVySlMgaXMgbm90IGxvYWRlZCBoZXJlLCByZXR1cm4gdGhlIG5vb3AgSGFtbWVySW5zdGFuY2UuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgICAvLyBlbnN1cmUgdGhhdCBvbWl0dGluZyBIYW1tZXJKUyBjb21wbGV0ZWx5IHdpbGwgbm90IGNhdXNlIGFueSBlcnJvcnMgd2hpbGUgKmFsc28qIHN1cHBvcnRpbmdcbiAgICAgIC8vIHRoZSBsYXp5LWxvYWRpbmcgb2YgSGFtbWVySlMgdmlhIHRoZSBIQU1NRVJfTE9BREVSIHRva2VuIGludHJvZHVjZWQgaW4gQW5ndWxhciA2LjEuXG4gICAgICAvLyBCZWNhdXNlIHdlIGNhbid0IGRlcGVuZCBvbiBIQU1NRVJfTE9BREVSJ3MgZXhpc3RhbmNlIHVudGlsIDcuMCwgd2UgaGF2ZSB0byBhbHdheXMgc2V0XG4gICAgICAvLyBgdGhpcy5ldmVudHNgIHRvIHRoZSBzZXQgd2Ugc3VwcG9ydCwgaW5zdGVhZCBvZiBjb25kaXRpb25hbGx5IHNldHRpbmcgaXQgdG8gYFtdYCBpZlxuICAgICAgLy8gYEhBTU1FUl9MT0FERVJgIGlzIHByZXNlbnQgKGFuZCB0aGVuIHRocm93aW5nIGFuIEVycm9yIGhlcmUgaWYgYHdpbmRvdy5IYW1tZXJgIGlzXG4gICAgICAvLyB1bmRlZmluZWQpLlxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgICAgcmV0dXJuIG5vb3BIYW1tZXJJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYyA9IG5ldyBoYW1tZXIoZWxlbWVudCwgdGhpcy5faGFtbWVyT3B0aW9ucyB8fCB1bmRlZmluZWQpO1xuXG4gICAgLy8gRGVmYXVsdCBIYW1tZXIgUmVjb2duaXplcnMuXG4gICAgY29uc3QgcGFuID0gbmV3IGhhbW1lci5QYW4oKTtcbiAgICBjb25zdCBzd2lwZSA9IG5ldyBoYW1tZXIuU3dpcGUoKTtcbiAgICBjb25zdCBwcmVzcyA9IG5ldyBoYW1tZXIuUHJlc3MoKTtcblxuICAgIC8vIE5vdGljZSB0aGF0IGEgSGFtbWVySlMgcmVjb2duaXplciBjYW4gb25seSBkZXBlbmQgb24gb25lIG90aGVyIHJlY29nbml6ZXIgb25jZS5cbiAgICAvLyBPdGhlcndpc2UgdGhlIHByZXZpb3VzIGByZWNvZ25pemVXaXRoYCB3aWxsIGJlIGRyb3BwZWQuXG4gICAgLy8gVE9ETzogQ29uZmlybSB0aHJlc2hvbGQgbnVtYmVycyB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWCBUZWFtXG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG4gICAgY29uc3QgbG9uZ3ByZXNzID0gdGhpcy5fY3JlYXRlUmVjb2duaXplcihwcmVzcywge2V2ZW50OiAnbG9uZ3ByZXNzJywgdGltZTogNTAwfSk7XG5cbiAgICAvLyBPdmVyd3JpdGUgdGhlIGRlZmF1bHQgYHBhbmAgZXZlbnQgdG8gdXNlIHRoZSBzd2lwZSBldmVudC5cbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBTaW5jZSB0aGUgc2xpZGUgZXZlbnQgdGhyZXNob2xkIGlzIHNldCB0byB6ZXJvLCB0aGUgc2xpZGUgcmVjb2duaXplciBjYW4gZmlyZSBhbmRcbiAgICAvLyBhY2NpZGVudGFsbHkgcmVzZXQgdGhlIGxvbmdwcmVzcyByZWNvZ25pemVyLiBJbiBvcmRlciB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdHdvXG4gICAgLy8gcmVjb2duaXplcnMgY2FuIHJ1biBzaW11bHRhbmVvdXNseSBidXQgZG9uJ3QgYWZmZWN0IGVhY2ggb3RoZXIsIHdlIGFsbG93IHRoZSBzbGlkZVxuICAgIC8vIHJlY29nbml6ZXIgdG8gcmVjb2duaXplIHdoaWxlIGEgbG9uZ3ByZXNzIGlzIGJlaW5nIHByb2Nlc3NlZC5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9oYW1tZXJqcy9oYW1tZXIuanMvYmxvYi9tYXN0ZXIvc3JjL21hbmFnZXIuanMjTDEyMy1MMTI0XG4gICAgbG9uZ3ByZXNzLnJlY29nbml6ZVdpdGgoc2xpZGUpO1xuXG4gICAgLy8gQWRkIGN1c3RvbWl6ZWQgZ2VzdHVyZXMgdG8gSGFtbWVyIG1hbmFnZXJcbiAgICBtYy5hZGQoW3N3aXBlLCBwcmVzcywgcGFuLCBzbGlkZSwgbG9uZ3ByZXNzXSk7XG5cbiAgICByZXR1cm4gbWMgYXMgSGFtbWVySW5zdGFuY2U7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IFJlY29nbml6ZXIsIG9wdGlvbnM6IGFueSwgLi4uaW5oZXJpdGFuY2VzOiBSZWNvZ25pemVyW10pIHtcbiAgICBsZXQgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3RvciBhcyBSZWNvZ25pemVyU3RhdGljKShvcHRpb25zKTtcblxuICAgIGluaGVyaXRhbmNlcy5wdXNoKGJhc2UpO1xuICAgIGluaGVyaXRhbmNlcy5mb3JFYWNoKGl0ZW0gPT4gcmVjb2duaXplci5yZWNvZ25pemVXaXRoKGl0ZW0pKTtcblxuICAgIHJldHVybiByZWNvZ25pemVyO1xuICB9XG5cbn1cbiJdfQ==