/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tooltip/tooltip.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AriaDescriber, FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Overlay, } from '@angular/cdk/overlay';
import { Platform, normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { ComponentPortal } from '@angular/cdk/portal';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, Inject, InjectionToken, Input, NgZone, Optional, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { matTooltipAnimations } from './tooltip-animations';
/**
 * Time in ms to throttle repositioning after scroll events.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from '@angular/cdk/scrolling';
import * as ɵngcc3 from '@angular/cdk/platform';
import * as ɵngcc4 from '@angular/cdk/a11y';
import * as ɵngcc5 from '@angular/cdk/bidi';
import * as ɵngcc6 from '@angular/cdk/layout';
import * as ɵngcc7 from '@angular/common';
export const SCROLL_THROTTLE_MS = 20;
/**
 * CSS class that will be attached to the overlay panel.
 * @type {?}
 */
export const TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
/**
 * Options used to bind passive event listeners.
 * @type {?}
 */
const passiveListenerOptions = normalizePassiveListenerOptions({ passive: true });
/**
 * Time between the user putting the pointer on a tooltip
 * trigger and the long press event being fired.
 * @type {?}
 */
const LONGPRESS_DELAY = 500;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * \@docs-private
 * @param {?} position
 * @return {?}
 */
export function getMatTooltipInvalidPositionError(position) {
    return Error(`Tooltip position "${position}" is invalid.`);
}
/**
 * Injection token that determines the scroll handling while a tooltip is visible.
 * @type {?}
 */
export const MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken('mat-tooltip-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
export function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.reposition({ scrollThrottle: SCROLL_THROTTLE_MS }));
}
/**
 * \@docs-private
 * @type {?}
 */
export const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_TOOLTIP_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
};
/**
 * Default `matTooltip` options that can be overridden.
 * @record
 */
export function MatTooltipDefaultOptions() { }
if (false) {
    /** @type {?} */
    MatTooltipDefaultOptions.prototype.showDelay;
    /** @type {?} */
    MatTooltipDefaultOptions.prototype.hideDelay;
    /** @type {?} */
    MatTooltipDefaultOptions.prototype.touchendHideDelay;
    /** @type {?|undefined} */
    MatTooltipDefaultOptions.prototype.touchGestures;
    /** @type {?|undefined} */
    MatTooltipDefaultOptions.prototype.position;
}
/**
 * Injection token to be used to override the default options for `matTooltip`.
 * @type {?}
 */
export const MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken('mat-tooltip-default-options', {
    providedIn: 'root',
    factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
export function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
    return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500,
    };
}
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */
export class MatTooltip {
    /**
     * @param {?} _overlay
     * @param {?} _elementRef
     * @param {?} _scrollDispatcher
     * @param {?} _viewContainerRef
     * @param {?} _ngZone
     * @param {?} _platform
     * @param {?} _ariaDescriber
     * @param {?} _focusMonitor
     * @param {?} scrollStrategy
     * @param {?} _dir
     * @param {?} _defaultOptions
     * @param {?=} _hammerLoader
     */
    constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, 
    /**
     * @deprecated _hammerLoader parameter to be removed.
     * @breaking-change 9.0.0
     */
    // Note that we need to give Angular something to inject here so it doesn't throw.
    _hammerLoader) {
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._ariaDescriber = _ariaDescriber;
        this._focusMonitor = _focusMonitor;
        this._dir = _dir;
        this._defaultOptions = _defaultOptions;
        this._position = 'below';
        this._disabled = false;
        /**
         * The default delay in ms before showing the tooltip after show is called
         */
        this.showDelay = this._defaultOptions.showDelay;
        /**
         * The default delay in ms before hiding the tooltip after hide is called
         */
        this.hideDelay = this._defaultOptions.hideDelay;
        /**
         * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
         * uses a long press gesture to show and hide, however it can conflict with the native browser
         * gestures. To work around the conflict, Angular Material disables native gestures on the
         * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
         * elements). The different values for this option configure the touch event handling as follows:
         * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
         *   browser gestures on particular elements. In particular, it allows text selection on inputs
         *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
         * - `on` - Enables touch gestures for all elements and disables native
         *   browser gestures with no exceptions.
         * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
         *   showing on touch devices.
         */
        this.touchGestures = 'auto';
        this._message = '';
        /**
         * Manually-bound passive event listeners.
         */
        this._passiveListeners = new Map();
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new Subject();
        /**
         * Handles the keydown events on the host element.
         * Needs to be an arrow function so that we can use it in addEventListener.
         */
        this._handleKeydown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
                event.preventDefault();
                event.stopPropagation();
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => this.hide(0)));
            }
        });
        this._scrollStrategy = scrollStrategy;
        if (_defaultOptions) {
            if (_defaultOptions.position) {
                this.position = _defaultOptions.position;
            }
            if (_defaultOptions.touchGestures) {
                this.touchGestures = _defaultOptions.touchGestures;
            }
        }
        _focusMonitor.monitor(_elementRef)
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => {
            // Note that the focus monitor runs outside the Angular zone.
            if (!origin) {
                _ngZone.run((/**
                 * @return {?}
                 */
                () => this.hide(0)));
            }
            else if (origin === 'keyboard') {
                _ngZone.run((/**
                 * @return {?}
                 */
                () => this.show()));
            }
        }));
        _ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            _elementRef.nativeElement.addEventListener('keydown', this._handleKeydown);
        }));
    }
    /**
     * Allows the user to define the position of the tooltip relative to the parent element
     * @return {?}
     */
    get position() { return this._position; }
    /**
     * @param {?} value
     * @return {?}
     */
    set position(value) {
        if (value !== this._position) {
            this._position = value;
            if (this._overlayRef) {
                this._updatePosition();
                if (this._tooltipInstance) {
                    (/** @type {?} */ (this._tooltipInstance)).show(0);
                }
                this._overlayRef.updatePosition();
            }
        }
    }
    /**
     * Disables the display of the tooltip.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        // If tooltip is disabled, hide immediately.
        if (this._disabled) {
            this.hide(0);
        }
    }
    /**
     * The message to be displayed in the tooltip
     * @return {?}
     */
    get message() { return this._message; }
    /**
     * @param {?} value
     * @return {?}
     */
    set message(value) {
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message);
        // If the message is not a string (e.g. number), convert it to a string and trim it.
        this._message = value != null ? `${value}`.trim() : '';
        if (!this._message && this._isTooltipVisible()) {
            this.hide(0);
        }
        else {
            this._updateTooltipMessage();
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                // The `AriaDescriber` has some functionality that avoids adding a description if it's the
                // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
                // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
                // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this._ariaDescriber.describe(this._elementRef.nativeElement, this.message);
                }));
            }));
        }
    }
    /**
     * Classes to be passed to the tooltip. Supports the same syntax as `ngClass`.
     * @return {?}
     */
    get tooltipClass() { return this._tooltipClass; }
    /**
     * @param {?} value
     * @return {?}
     */
    set tooltipClass(value) {
        this._tooltipClass = value;
        if (this._tooltipInstance) {
            this._setTooltipClass(this._tooltipClass);
        }
    }
    /**
     * Setup styling-specific things
     * @return {?}
     */
    ngOnInit() {
        // This needs to happen in `ngOnInit` so the initial values for all inputs have been set.
        this._setupPointerEvents();
    }
    /**
     * Dispose the tooltip when destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const nativeElement = this._elementRef.nativeElement;
        clearTimeout(this._touchstartTimeout);
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._tooltipInstance = null;
        }
        // Clean up the event listeners set in the constructor
        nativeElement.removeEventListener('keydown', this._handleKeydown);
        this._passiveListeners.forEach((/**
         * @param {?} listener
         * @param {?} event
         * @return {?}
         */
        (listener, event) => {
            nativeElement.removeEventListener(event, listener, passiveListenerOptions);
        }));
        this._passiveListeners.clear();
        this._destroyed.next();
        this._destroyed.complete();
        this._ariaDescriber.removeDescription(nativeElement, this.message);
        this._focusMonitor.stopMonitoring(nativeElement);
    }
    /**
     * Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input
     * @param {?=} delay
     * @return {?}
     */
    show(delay = this.showDelay) {
        if (this.disabled || !this.message || (this._isTooltipVisible() &&
            !(/** @type {?} */ (this._tooltipInstance))._showTimeoutId && !(/** @type {?} */ (this._tooltipInstance))._hideTimeoutId)) {
            return;
        }
        /** @type {?} */
        const overlayRef = this._createOverlay();
        this._detach();
        this._portal = this._portal || new ComponentPortal(TooltipComponent, this._viewContainerRef);
        this._tooltipInstance = overlayRef.attach(this._portal).instance;
        this._tooltipInstance.afterHidden()
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => this._detach()));
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage();
        (/** @type {?} */ (this._tooltipInstance)).show(delay);
    }
    /**
     * Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input
     * @param {?=} delay
     * @return {?}
     */
    hide(delay = this.hideDelay) {
        if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
        }
    }
    /**
     * Shows/hides the tooltip
     * @return {?}
     */
    toggle() {
        this._isTooltipVisible() ? this.hide() : this.show();
    }
    /**
     * Returns true if the tooltip is currently visible to the user
     * @return {?}
     */
    _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }
    /**
     * Create the overlay config and position strategy
     * @private
     * @return {?}
     */
    _createOverlay() {
        if (this._overlayRef) {
            return this._overlayRef;
        }
        /** @type {?} */
        const scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);
        // Create connected position strategy that listens for scroll events to reposition.
        /** @type {?} */
        const strategy = this._overlay.position()
            .flexibleConnectedTo(this._elementRef)
            .withTransformOriginOn('.mat-tooltip')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withScrollableContainers(scrollableAncestors);
        strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((/**
         * @param {?} change
         * @return {?}
         */
        change => {
            if (this._tooltipInstance) {
                if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
                    // After position changes occur and the overlay is clipped by
                    // a parent scrollable then close the tooltip.
                    this._ngZone.run((/**
                     * @return {?}
                     */
                    () => this.hide(0)));
                }
            }
        }));
        this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: TOOLTIP_PANEL_CLASS,
            scrollStrategy: this._scrollStrategy()
        });
        this._updatePosition();
        this._overlayRef.detachments()
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => this._detach()));
        return this._overlayRef;
    }
    /**
     * Detaches the currently-attached tooltip.
     * @private
     * @return {?}
     */
    _detach() {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
        this._tooltipInstance = null;
    }
    /**
     * Updates the position of the current tooltip.
     * @private
     * @return {?}
     */
    _updatePosition() {
        /** @type {?} */
        const position = (/** @type {?} */ ((/** @type {?} */ (this._overlayRef)).getConfig().positionStrategy));
        /** @type {?} */
        const origin = this._getOrigin();
        /** @type {?} */
        const overlay = this._getOverlayPosition();
        position.withPositions([
            Object.assign(Object.assign({}, origin.main), overlay.main),
            Object.assign(Object.assign({}, origin.fallback), overlay.fallback)
        ]);
    }
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     * @return {?}
     */
    _getOrigin() {
        /** @type {?} */
        const isLtr = !this._dir || this._dir.value == 'ltr';
        /** @type {?} */
        const position = this.position;
        /** @type {?} */
        let originPosition;
        if (position == 'above' || position == 'below') {
            originPosition = { originX: 'center', originY: position == 'above' ? 'top' : 'bottom' };
        }
        else if (position == 'before' ||
            (position == 'left' && isLtr) ||
            (position == 'right' && !isLtr)) {
            originPosition = { originX: 'start', originY: 'center' };
        }
        else if (position == 'after' ||
            (position == 'right' && isLtr) ||
            (position == 'left' && !isLtr)) {
            originPosition = { originX: 'end', originY: 'center' };
        }
        else {
            throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(originPosition.originX, originPosition.originY);
        return {
            main: originPosition,
            fallback: { originX: x, originY: y }
        };
    }
    /**
     * Returns the overlay position and a fallback position based on the user's preference
     * @return {?}
     */
    _getOverlayPosition() {
        /** @type {?} */
        const isLtr = !this._dir || this._dir.value == 'ltr';
        /** @type {?} */
        const position = this.position;
        /** @type {?} */
        let overlayPosition;
        if (position == 'above') {
            overlayPosition = { overlayX: 'center', overlayY: 'bottom' };
        }
        else if (position == 'below') {
            overlayPosition = { overlayX: 'center', overlayY: 'top' };
        }
        else if (position == 'before' ||
            (position == 'left' && isLtr) ||
            (position == 'right' && !isLtr)) {
            overlayPosition = { overlayX: 'end', overlayY: 'center' };
        }
        else if (position == 'after' ||
            (position == 'right' && isLtr) ||
            (position == 'left' && !isLtr)) {
            overlayPosition = { overlayX: 'start', overlayY: 'center' };
        }
        else {
            throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
        return {
            main: overlayPosition,
            fallback: { overlayX: x, overlayY: y }
        };
    }
    /**
     * Updates the tooltip message and repositions the overlay according to the new message length
     * @private
     * @return {?}
     */
    _updateTooltipMessage() {
        // Must wait for the message to be painted to the tooltip so that the overlay can properly
        // calculate the correct positioning based on the size of the text.
        if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;
            this._tooltipInstance._markForCheck();
            this._ngZone.onMicrotaskEmpty.asObservable().pipe(take(1), takeUntil(this._destroyed)).subscribe((/**
             * @return {?}
             */
            () => {
                if (this._tooltipInstance) {
                    (/** @type {?} */ (this._overlayRef)).updatePosition();
                }
            }));
        }
    }
    /**
     * Updates the tooltip class
     * @private
     * @param {?} tooltipClass
     * @return {?}
     */
    _setTooltipClass(tooltipClass) {
        if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;
            this._tooltipInstance._markForCheck();
        }
    }
    /**
     * Inverts an overlay position.
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    _invertPosition(x, y) {
        if (this.position === 'above' || this.position === 'below') {
            if (y === 'top') {
                y = 'bottom';
            }
            else if (y === 'bottom') {
                y = 'top';
            }
        }
        else {
            if (x === 'end') {
                x = 'start';
            }
            else if (x === 'start') {
                x = 'end';
            }
        }
        return { x, y };
    }
    /**
     * Binds the pointer events to the tooltip trigger.
     * @private
     * @return {?}
     */
    _setupPointerEvents() {
        // The mouse events shouldn't be bound on mobile devices, because they can prevent the
        // first tap from firing its click event or can cause the tooltip to open for clicks.
        if (!this._platform.IOS && !this._platform.ANDROID) {
            this._passiveListeners
                .set('mouseenter', (/**
             * @return {?}
             */
            () => this.show()))
                .set('mouseleave', (/**
             * @return {?}
             */
            () => this.hide()));
        }
        else if (this.touchGestures !== 'off') {
            this._disableNativeGesturesIfNecessary();
            /** @type {?} */
            const touchendListener = (/**
             * @return {?}
             */
            () => {
                clearTimeout(this._touchstartTimeout);
                this.hide(this._defaultOptions.touchendHideDelay);
            });
            this._passiveListeners
                .set('touchend', touchendListener)
                .set('touchcancel', touchendListener)
                .set('touchstart', (/**
             * @return {?}
             */
            () => {
                // Note that it's important that we don't `preventDefault` here,
                // because it can prevent click events from firing on the element.
                clearTimeout(this._touchstartTimeout);
                this._touchstartTimeout = setTimeout((/**
                 * @return {?}
                 */
                () => this.show()), LONGPRESS_DELAY);
            }));
        }
        this._passiveListeners.forEach((/**
         * @param {?} listener
         * @param {?} event
         * @return {?}
         */
        (listener, event) => {
            this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
        }));
    }
    /**
     * Disables the native browser gestures, based on how the tooltip has been configured.
     * @private
     * @return {?}
     */
    _disableNativeGesturesIfNecessary() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        /** @type {?} */
        const style = element.style;
        /** @type {?} */
        const gestures = this.touchGestures;
        if (gestures !== 'off') {
            // If gestures are set to `auto`, we don't disable text selection on inputs and
            // textareas, because it prevents the user from typing into them on iOS Safari.
            if (gestures === 'on' || (element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA')) {
                style.userSelect = style.msUserSelect = style.webkitUserSelect =
                    ((/** @type {?} */ (style))).MozUserSelect = 'none';
            }
            // If we have `auto` gestures and the element uses native HTML dragging,
            // we don't set `-webkit-user-drag` because it prevents the native behavior.
            if (gestures === 'on' || !element.draggable) {
                ((/** @type {?} */ (style))).webkitUserDrag = 'none';
            }
            style.touchAction = 'none';
            style.webkitTapHighlightColor = 'transparent';
        }
    }
}
MatTooltip.ɵfac = function MatTooltip_Factory(t) { return new (t || MatTooltip)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.ScrollDispatcher), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.AriaDescriber), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(MAT_TOOLTIP_SCROLL_STRATEGY), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(MAT_TOOLTIP_DEFAULT_OPTIONS, 8), ɵngcc0.ɵɵdirectiveInject(ElementRef)); };
MatTooltip.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTooltip, selectors: [["", "matTooltip", ""]], inputs: { showDelay: ["matTooltipShowDelay", "showDelay"], hideDelay: ["matTooltipHideDelay", "hideDelay"], touchGestures: ["matTooltipTouchGestures", "touchGestures"], position: ["matTooltipPosition", "position"], disabled: ["matTooltipDisabled", "disabled"], message: ["matTooltip", "message"], tooltipClass: ["matTooltipClass", "tooltipClass"] }, exportAs: ["matTooltip"] });
/** @nocollapse */
MatTooltip.ctorParameters = () => [
    { type: Overlay },
    { type: ElementRef },
    { type: ScrollDispatcher },
    { type: ViewContainerRef },
    { type: NgZone },
    { type: Platform },
    { type: AriaDescriber },
    { type: FocusMonitor },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_TOOLTIP_SCROLL_STRATEGY,] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_TOOLTIP_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ElementRef,] }] }
];
MatTooltip.propDecorators = {
    position: [{ type: Input, args: ['matTooltipPosition',] }],
    disabled: [{ type: Input, args: ['matTooltipDisabled',] }],
    showDelay: [{ type: Input, args: ['matTooltipShowDelay',] }],
    hideDelay: [{ type: Input, args: ['matTooltipHideDelay',] }],
    touchGestures: [{ type: Input, args: ['matTooltipTouchGestures',] }],
    message: [{ type: Input, args: ['matTooltip',] }],
    tooltipClass: [{ type: Input, args: ['matTooltipClass',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTooltip, [{
        type: Directive,
        args: [{
                selector: '[matTooltip]',
                exportAs: 'matTooltip'
            }]
    }], function () { return [{ type: ɵngcc1.Overlay }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.ScrollDispatcher }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc3.Platform }, { type: ɵngcc4.AriaDescriber }, { type: ɵngcc4.FocusMonitor }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_TOOLTIP_SCROLL_STRATEGY]
            }] }, { type: ɵngcc5.Directionality, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }]; }, { showDelay: [{
            type: Input,
            args: ['matTooltipShowDelay']
        }], hideDelay: [{
            type: Input,
            args: ['matTooltipHideDelay']
        }], touchGestures: [{
            type: Input,
            args: ['matTooltipTouchGestures']
        }], position: [{
            type: Input,
            args: ['matTooltipPosition']
        }], disabled: [{
            type: Input,
            args: ['matTooltipDisabled']
        }], message: [{
            type: Input,
            args: ['matTooltip']
        }], tooltipClass: [{
            type: Input,
            args: ['matTooltipClass']
        }] }); })();
if (false) {
    /** @type {?} */
    MatTooltip.ngAcceptInputType_disabled;
    /** @type {?} */
    MatTooltip.ngAcceptInputType_hideDelay;
    /** @type {?} */
    MatTooltip.ngAcceptInputType_showDelay;
    /** @type {?} */
    MatTooltip.prototype._overlayRef;
    /** @type {?} */
    MatTooltip.prototype._tooltipInstance;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._portal;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._position;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._tooltipClass;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._scrollStrategy;
    /**
     * The default delay in ms before showing the tooltip after show is called
     * @type {?}
     */
    MatTooltip.prototype.showDelay;
    /**
     * The default delay in ms before hiding the tooltip after hide is called
     * @type {?}
     */
    MatTooltip.prototype.hideDelay;
    /**
     * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
     * uses a long press gesture to show and hide, however it can conflict with the native browser
     * gestures. To work around the conflict, Angular Material disables native gestures on the
     * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
     * elements). The different values for this option configure the touch event handling as follows:
     * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
     *   browser gestures on particular elements. In particular, it allows text selection on inputs
     *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
     * - `on` - Enables touch gestures for all elements and disables native
     *   browser gestures with no exceptions.
     * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
     *   showing on touch devices.
     * @type {?}
     */
    MatTooltip.prototype.touchGestures;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._message;
    /**
     * Manually-bound passive event listeners.
     * @type {?}
     * @private
     */
    MatTooltip.prototype._passiveListeners;
    /**
     * Timer started at the last `touchstart` event.
     * @type {?}
     * @private
     */
    MatTooltip.prototype._touchstartTimeout;
    /**
     * Emits when the component is destroyed.
     * @type {?}
     * @private
     */
    MatTooltip.prototype._destroyed;
    /**
     * Handles the keydown events on the host element.
     * Needs to be an arrow function so that we can use it in addEventListener.
     * @type {?}
     * @private
     */
    MatTooltip.prototype._handleKeydown;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._scrollDispatcher;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._platform;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._ariaDescriber;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    MatTooltip.prototype._defaultOptions;
}
/**
 * Internal component that wraps the tooltip's content.
 * \@docs-private
 */
export class TooltipComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _breakpointObserver
     */
    constructor(_changeDetectorRef, _breakpointObserver) {
        this._changeDetectorRef = _changeDetectorRef;
        this._breakpointObserver = _breakpointObserver;
        /**
         * Property watched by the animation framework to show or hide the tooltip
         */
        this._visibility = 'initial';
        /**
         * Whether interactions on the page should close the tooltip
         */
        this._closeOnInteraction = false;
        /**
         * Subject for notifying that the tooltip has been hidden from the view
         */
        this._onHide = new Subject();
        /**
         * Stream that emits whether the user has a handset-sized display.
         */
        this._isHandset = this._breakpointObserver.observe(Breakpoints.Handset);
    }
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param {?} delay Amount of milliseconds to the delay showing the tooltip.
     * @return {?}
     */
    show(delay) {
        // Cancel the delayed hide if it is scheduled
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
        }
        // Body interactions should cancel the tooltip if there is a delay in showing.
        this._closeOnInteraction = true;
        this._showTimeoutId = setTimeout((/**
         * @return {?}
         */
        () => {
            this._visibility = 'visible';
            this._showTimeoutId = null;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            this._markForCheck();
        }), delay);
    }
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param {?} delay Amount of milliseconds to delay showing the tooltip.
     * @return {?}
     */
    hide(delay) {
        // Cancel the delayed show if it is scheduled
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
        }
        this._hideTimeoutId = setTimeout((/**
         * @return {?}
         */
        () => {
            this._visibility = 'hidden';
            this._hideTimeoutId = null;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            this._markForCheck();
        }), delay);
    }
    /**
     * Returns an observable that notifies when the tooltip has been hidden from view.
     * @return {?}
     */
    afterHidden() {
        return this._onHide.asObservable();
    }
    /**
     * Whether the tooltip is being displayed.
     * @return {?}
     */
    isVisible() {
        return this._visibility === 'visible';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onHide.complete();
    }
    /**
     * @return {?}
     */
    _animationStart() {
        this._closeOnInteraction = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _animationDone(event) {
        /** @type {?} */
        const toState = (/** @type {?} */ (event.toState));
        if (toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
        }
        if (toState === 'visible' || toState === 'hidden') {
            this._closeOnInteraction = true;
        }
    }
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     * @return {?}
     */
    _handleBodyInteraction() {
        if (this._closeOnInteraction) {
            this.hide(0);
        }
    }
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     * @return {?}
     */
    _markForCheck() {
        this._changeDetectorRef.markForCheck();
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc6.BreakpointObserver)); };
TooltipComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TooltipComponent, selectors: [["mat-tooltip-component"]], hostAttrs: ["aria-hidden", "true"], hostVars: 2, hostBindings: function TooltipComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function TooltipComponent_click_HostBindingHandler() { return ctx._handleBodyInteraction(); }, false, ɵngcc0.ɵɵresolveBody);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("zoom", ctx._visibility === "visible" ? 1 : null);
    } }, decls: 3, vars: 7, consts: [[1, "mat-tooltip", 3, "ngClass"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() { return ctx._animationStart(); })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) { return ctx._animationDone($event); });
        ɵngcc0.ɵɵpipe(1, "async");
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var tmp_0_0 = null;
        const currVal_0 = (tmp_0_0 = ɵngcc0.ɵɵpipeBind1(1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches;
        ɵngcc0.ɵɵclassProp("mat-tooltip-handset", currVal_0);
        ɵngcc0.ɵɵproperty("ngClass", ctx.tooltipClass)("@state", ctx._visibility);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.message);
    } }, directives: [ɵngcc7.NgClass], pipes: [ɵngcc7.AsyncPipe], styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"], encapsulation: 2, data: { animation: [matTooltipAnimations.tooltipState] }, changeDetection: 0 });
/** @nocollapse */
TooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: BreakpointObserver }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipComponent, [{
        type: Component,
        args: [{
                selector: 'mat-tooltip-component',
                template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [matTooltipAnimations.tooltipState],
                host: {
                    // Forces the element to have a layout in IE and Edge. This fixes issues where the element
                    // won't be rendered if the animations are disabled or there is no web animations polyfill.
                    '[style.zoom]': '_visibility === "visible" ? 1 : null',
                    '(body:click)': 'this._handleBodyInteraction()',
                    'aria-hidden': 'true'
                },
                styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc6.BreakpointObserver }]; }, null); })();
if (false) {
    /**
     * Message to display in the tooltip
     * @type {?}
     */
    TooltipComponent.prototype.message;
    /**
     * Classes to be added to the tooltip. Supports the same syntax as `ngClass`.
     * @type {?}
     */
    TooltipComponent.prototype.tooltipClass;
    /**
     * The timeout ID of any current timer set to show the tooltip
     * @type {?}
     */
    TooltipComponent.prototype._showTimeoutId;
    /**
     * The timeout ID of any current timer set to hide the tooltip
     * @type {?}
     */
    TooltipComponent.prototype._hideTimeoutId;
    /**
     * Property watched by the animation framework to show or hide the tooltip
     * @type {?}
     */
    TooltipComponent.prototype._visibility;
    /**
     * Whether interactions on the page should close the tooltip
     * @type {?}
     * @private
     */
    TooltipComponent.prototype._closeOnInteraction;
    /**
     * Subject for notifying that the tooltip has been hidden from the view
     * @type {?}
     * @private
     */
    TooltipComponent.prototype._onHide;
    /**
     * Stream that emits whether the user has a handset-sized display.
     * @type {?}
     */
    TooltipComponent.prototype._isHandset;
    /**
     * @type {?}
     * @private
     */
    TooltipComponent.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TooltipComponent.prototype._breakpointObserver;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLE9BQU8sRUFBQyxhQUFhLEVBQUUsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBZSxxQkFBcUIsRUFBYyxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRixPQUFPLEVBSUwsT0FBTyxHQUtSLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLFFBQVEsRUFBRSwrQkFBK0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLGdCQUFnQixFQUNoQixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFEO0FBRUU7QUFDb0I7QUFBYTs7Ozs7Ozs7O0FBWW5DLE1B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RjtBQUFpQjtBQUFnQjtBQUFRLElBQTVDLG1DQUF1RDtBQUN6RDtBQUNPO0FBQ0g7QUFBaUI7QUFBUSxJQUEzQixzQ0FBZ0c7QUFDbEc7QUFDTztBQUNFO0FBQWdCO0FBQVEsSUFBN0IsOENBQTZDO0FBQUM7QUFDM0M7QUFBaUI7QUFBZ0I7QUFBUSxJQUE1QywrQ0FBK0M7QUFBQztBQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FuaW1hdGlvbkV2ZW50fSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7QXJpYURlc2NyaWJlciwgRm9jdXNNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5LCBOdW1iZXJJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RVNDQVBFLCBoYXNNb2RpZmllcktleX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7QnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cywgQnJlYWtwb2ludFN0YXRlfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7XG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MsXG4gIE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbixcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbixcbiAgT3ZlcmxheVJlZixcbiAgU2Nyb2xsU3RyYXRlZ3ksXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtQbGF0Zm9ybSwgbm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7Q29tcG9uZW50UG9ydGFsfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7U2Nyb2xsRGlzcGF0Y2hlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2UsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge21hdFRvb2x0aXBBbmltYXRpb25zfSBmcm9tICcuL3Rvb2x0aXAtYW5pbWF0aW9ucyc7XG5cblxuLyoqIFBvc3NpYmxlIHBvc2l0aW9ucyBmb3IgYSB0b29sdGlwLiAqL1xuZXhwb3J0IHR5cGUgVG9vbHRpcFBvc2l0aW9uID0gJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdhYm92ZScgfCAnYmVsb3cnIHwgJ2JlZm9yZScgfCAnYWZ0ZXInO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGhvdyB0aGUgdG9vbHRpcCB0cmlnZ2VyIHNob3VsZCBoYW5kbGUgdG91Y2ggZ2VzdHVyZXMuXG4gKiBTZWUgYE1hdFRvb2x0aXAudG91Y2hHZXN0dXJlc2AgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCB0eXBlIFRvb2x0aXBUb3VjaEdlc3R1cmVzID0gJ2F1dG8nIHwgJ29uJyB8ICdvZmYnO1xuXG4vKiogUG9zc2libGUgdmlzaWJpbGl0eSBzdGF0ZXMgb2YgYSB0b29sdGlwLiAqL1xuZXhwb3J0IHR5cGUgVG9vbHRpcFZpc2liaWxpdHkgPSAnaW5pdGlhbCcgfCAndmlzaWJsZScgfCAnaGlkZGVuJztcblxuLyoqIFRpbWUgaW4gbXMgdG8gdGhyb3R0bGUgcmVwb3NpdGlvbmluZyBhZnRlciBzY3JvbGwgZXZlbnRzLiAqL1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9USFJPVFRMRV9NUyA9IDIwO1xuXG4vKiogQ1NTIGNsYXNzIHRoYXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgb3ZlcmxheSBwYW5lbC4gKi9cbmV4cG9ydCBjb25zdCBUT09MVElQX1BBTkVMX0NMQVNTID0gJ21hdC10b29sdGlwLXBhbmVsJztcblxuLyoqIE9wdGlvbnMgdXNlZCB0byBiaW5kIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuY29uc3QgcGFzc2l2ZUxpc3RlbmVyT3B0aW9ucyA9IG5vcm1hbGl6ZVBhc3NpdmVMaXN0ZW5lck9wdGlvbnMoe3Bhc3NpdmU6IHRydWV9KTtcblxuLyoqXG4gKiBUaW1lIGJldHdlZW4gdGhlIHVzZXIgcHV0dGluZyB0aGUgcG9pbnRlciBvbiBhIHRvb2x0aXBcbiAqIHRyaWdnZXIgYW5kIHRoZSBsb25nIHByZXNzIGV2ZW50IGJlaW5nIGZpcmVkLlxuICovXG5jb25zdCBMT05HUFJFU1NfREVMQVkgPSA1MDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBlcnJvciB0byBiZSB0aHJvd24gaWYgdGhlIHVzZXIgc3VwcGxpZWQgYW4gaW52YWxpZCB0b29sdGlwIHBvc2l0aW9uLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF0VG9vbHRpcEludmFsaWRQb3NpdGlvbkVycm9yKHBvc2l0aW9uOiBzdHJpbmcpIHtcbiAgcmV0dXJuIEVycm9yKGBUb29sdGlwIHBvc2l0aW9uIFwiJHtwb3NpdGlvbn1cIiBpcyBpbnZhbGlkLmApO1xufVxuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgZGV0ZXJtaW5lcyB0aGUgc2Nyb2xsIGhhbmRsaW5nIHdoaWxlIGEgdG9vbHRpcCBpcyB2aXNpYmxlLiAqL1xuZXhwb3J0IGNvbnN0IE1BVF9UT09MVElQX1NDUk9MTF9TVFJBVEVHWSA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPCgpID0+IFNjcm9sbFN0cmF0ZWd5PignbWF0LXRvb2x0aXAtc2Nyb2xsLXN0cmF0ZWd5Jyk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTUFUX1RPT0xUSVBfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUlkob3ZlcmxheTogT3ZlcmxheSk6ICgpID0+IFNjcm9sbFN0cmF0ZWd5IHtcbiAgcmV0dXJuICgpID0+IG92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKHtzY3JvbGxUaHJvdHRsZTogU0NST0xMX1RIUk9UVExFX01TfSk7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTUFUX1RPT0xUSVBfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIgPSB7XG4gIHByb3ZpZGU6IE1BVF9UT09MVElQX1NDUk9MTF9TVFJBVEVHWSxcbiAgZGVwczogW092ZXJsYXldLFxuICB1c2VGYWN0b3J5OiBNQVRfVE9PTFRJUF9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWSxcbn07XG5cbi8qKiBEZWZhdWx0IGBtYXRUb29sdGlwYCBvcHRpb25zIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4uICovXG5leHBvcnQgaW50ZXJmYWNlIE1hdFRvb2x0aXBEZWZhdWx0T3B0aW9ucyB7XG4gIHNob3dEZWxheTogbnVtYmVyO1xuICBoaWRlRGVsYXk6IG51bWJlcjtcbiAgdG91Y2hlbmRIaWRlRGVsYXk6IG51bWJlcjtcbiAgdG91Y2hHZXN0dXJlcz86IFRvb2x0aXBUb3VjaEdlc3R1cmVzO1xuICBwb3NpdGlvbj86IFRvb2x0aXBQb3NpdGlvbjtcbn1cblxuLyoqIEluamVjdGlvbiB0b2tlbiB0byBiZSB1c2VkIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIGBtYXRUb29sdGlwYC4gKi9cbmV4cG9ydCBjb25zdCBNQVRfVE9PTFRJUF9ERUZBVUxUX09QVElPTlMgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxNYXRUb29sdGlwRGVmYXVsdE9wdGlvbnM+KCdtYXQtdG9vbHRpcC1kZWZhdWx0LW9wdGlvbnMnLCB7XG4gICAgICBwcm92aWRlZEluOiAncm9vdCcsXG4gICAgICBmYWN0b3J5OiBNQVRfVE9PTFRJUF9ERUZBVUxUX09QVElPTlNfRkFDVE9SWVxuICAgIH0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1BVF9UT09MVElQX0RFRkFVTFRfT1BUSU9OU19GQUNUT1JZKCk6IE1hdFRvb2x0aXBEZWZhdWx0T3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgc2hvd0RlbGF5OiAwLFxuICAgIGhpZGVEZWxheTogMCxcbiAgICB0b3VjaGVuZEhpZGVEZWxheTogMTUwMCxcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBhdHRhY2hlcyBhIG1hdGVyaWFsIGRlc2lnbiB0b29sdGlwIHRvIHRoZSBob3N0IGVsZW1lbnQuIEFuaW1hdGVzIHRoZSBzaG93aW5nIGFuZFxuICogaGlkaW5nIG9mIGEgdG9vbHRpcCBwcm92aWRlZCBwb3NpdGlvbiAoZGVmYXVsdHMgdG8gYmVsb3cgdGhlIGVsZW1lbnQpLlxuICpcbiAqIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvdG9vbHRpcHMuaHRtbFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0VG9vbHRpcF0nLFxuICBleHBvcnRBczogJ21hdFRvb2x0aXAnLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRUb29sdGlwIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIF90b29sdGlwSW5zdGFuY2U6IFRvb2x0aXBDb21wb25lbnQgfCBudWxsO1xuXG4gIHByaXZhdGUgX3BvcnRhbDogQ29tcG9uZW50UG9ydGFsPFRvb2x0aXBDb21wb25lbnQ+O1xuICBwcml2YXRlIF9wb3NpdGlvbjogVG9vbHRpcFBvc2l0aW9uID0gJ2JlbG93JztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdG9vbHRpcENsYXNzOiBzdHJpbmd8c3RyaW5nW118U2V0PHN0cmluZz58e1trZXk6IHN0cmluZ106IGFueX07XG4gIHByaXZhdGUgX3Njcm9sbFN0cmF0ZWd5OiAoKSA9PiBTY3JvbGxTdHJhdGVneTtcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRlZmluZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRvb2x0aXAgcmVsYXRpdmUgdG8gdGhlIHBhcmVudCBlbGVtZW50ICovXG4gIEBJbnB1dCgnbWF0VG9vbHRpcFBvc2l0aW9uJylcbiAgZ2V0IHBvc2l0aW9uKCk6IFRvb2x0aXBQb3NpdGlvbiB7IHJldHVybiB0aGlzLl9wb3NpdGlvbjsgfVxuICBzZXQgcG9zaXRpb24odmFsdWU6IFRvb2x0aXBQb3NpdGlvbikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBJbnN0YW5jZSkge1xuICAgICAgICAgIHRoaXMuX3Rvb2x0aXBJbnN0YW5jZSEuc2hvdygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogRGlzYWJsZXMgdGhlIGRpc3BsYXkgb2YgdGhlIHRvb2x0aXAuICovXG4gIEBJbnB1dCgnbWF0VG9vbHRpcERpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXG4gICAgLy8gSWYgdG9vbHRpcCBpcyBkaXNhYmxlZCwgaGlkZSBpbW1lZGlhdGVseS5cbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaGlkZSgwKTtcbiAgICB9XG4gIH1cblxuICAvKiogVGhlIGRlZmF1bHQgZGVsYXkgaW4gbXMgYmVmb3JlIHNob3dpbmcgdGhlIHRvb2x0aXAgYWZ0ZXIgc2hvdyBpcyBjYWxsZWQgKi9cbiAgQElucHV0KCdtYXRUb29sdGlwU2hvd0RlbGF5Jykgc2hvd0RlbGF5OiBudW1iZXIgPSB0aGlzLl9kZWZhdWx0T3B0aW9ucy5zaG93RGVsYXk7XG5cbiAgLyoqIFRoZSBkZWZhdWx0IGRlbGF5IGluIG1zIGJlZm9yZSBoaWRpbmcgdGhlIHRvb2x0aXAgYWZ0ZXIgaGlkZSBpcyBjYWxsZWQgKi9cbiAgQElucHV0KCdtYXRUb29sdGlwSGlkZURlbGF5JykgaGlkZURlbGF5OiBudW1iZXIgPSB0aGlzLl9kZWZhdWx0T3B0aW9ucy5oaWRlRGVsYXk7XG5cbiAgLyoqXG4gICAqIEhvdyB0b3VjaCBnZXN0dXJlcyBzaG91bGQgYmUgaGFuZGxlZCBieSB0aGUgdG9vbHRpcC4gT24gdG91Y2ggZGV2aWNlcyB0aGUgdG9vbHRpcCBkaXJlY3RpdmVcbiAgICogdXNlcyBhIGxvbmcgcHJlc3MgZ2VzdHVyZSB0byBzaG93IGFuZCBoaWRlLCBob3dldmVyIGl0IGNhbiBjb25mbGljdCB3aXRoIHRoZSBuYXRpdmUgYnJvd3NlclxuICAgKiBnZXN0dXJlcy4gVG8gd29yayBhcm91bmQgdGhlIGNvbmZsaWN0LCBBbmd1bGFyIE1hdGVyaWFsIGRpc2FibGVzIG5hdGl2ZSBnZXN0dXJlcyBvbiB0aGVcbiAgICogdHJpZ2dlciwgYnV0IHRoYXQgbWlnaHQgbm90IGJlIGRlc2lyYWJsZSBvbiBwYXJ0aWN1bGFyIGVsZW1lbnRzIChlLmcuIGlucHV0cyBhbmQgZHJhZ2dhYmxlXG4gICAqIGVsZW1lbnRzKS4gVGhlIGRpZmZlcmVudCB2YWx1ZXMgZm9yIHRoaXMgb3B0aW9uIGNvbmZpZ3VyZSB0aGUgdG91Y2ggZXZlbnQgaGFuZGxpbmcgYXMgZm9sbG93czpcbiAgICogLSBgYXV0b2AgLSBFbmFibGVzIHRvdWNoIGdlc3R1cmVzIGZvciBhbGwgZWxlbWVudHMsIGJ1dCB0cmllcyB0byBhdm9pZCBjb25mbGljdHMgd2l0aCBuYXRpdmVcbiAgICogICBicm93c2VyIGdlc3R1cmVzIG9uIHBhcnRpY3VsYXIgZWxlbWVudHMuIEluIHBhcnRpY3VsYXIsIGl0IGFsbG93cyB0ZXh0IHNlbGVjdGlvbiBvbiBpbnB1dHNcbiAgICogICBhbmQgdGV4dGFyZWFzLCBhbmQgcHJlc2VydmVzIHRoZSBuYXRpdmUgYnJvd3NlciBkcmFnZ2luZyBvbiBlbGVtZW50cyBtYXJrZWQgYXMgYGRyYWdnYWJsZWAuXG4gICAqIC0gYG9uYCAtIEVuYWJsZXMgdG91Y2ggZ2VzdHVyZXMgZm9yIGFsbCBlbGVtZW50cyBhbmQgZGlzYWJsZXMgbmF0aXZlXG4gICAqICAgYnJvd3NlciBnZXN0dXJlcyB3aXRoIG5vIGV4Y2VwdGlvbnMuXG4gICAqIC0gYG9mZmAgLSBEaXNhYmxlcyB0b3VjaCBnZXN0dXJlcy4gTm90ZSB0aGF0IHRoaXMgd2lsbCBwcmV2ZW50IHRoZSB0b29sdGlwIGZyb21cbiAgICogICBzaG93aW5nIG9uIHRvdWNoIGRldmljZXMuXG4gICAqL1xuICBASW5wdXQoJ21hdFRvb2x0aXBUb3VjaEdlc3R1cmVzJykgdG91Y2hHZXN0dXJlczogVG9vbHRpcFRvdWNoR2VzdHVyZXMgPSAnYXV0byc7XG5cbiAgLyoqIFRoZSBtZXNzYWdlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgdG9vbHRpcCAqL1xuICBASW5wdXQoJ21hdFRvb2x0aXAnKVxuICBnZXQgbWVzc2FnZSgpIHsgcmV0dXJuIHRoaXMuX21lc3NhZ2U7IH1cbiAgc2V0IG1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FyaWFEZXNjcmliZXIucmVtb3ZlRGVzY3JpcHRpb24odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9tZXNzYWdlKTtcblxuICAgIC8vIElmIHRoZSBtZXNzYWdlIGlzIG5vdCBhIHN0cmluZyAoZS5nLiBudW1iZXIpLCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nIGFuZCB0cmltIGl0LlxuICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZSAhPSBudWxsID8gYCR7dmFsdWV9YC50cmltKCkgOiAnJztcblxuICAgIGlmICghdGhpcy5fbWVzc2FnZSAmJiB0aGlzLl9pc1Rvb2x0aXBWaXNpYmxlKCkpIHtcbiAgICAgIHRoaXMuaGlkZSgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlVG9vbHRpcE1lc3NhZ2UoKTtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIC8vIFRoZSBgQXJpYURlc2NyaWJlcmAgaGFzIHNvbWUgZnVuY3Rpb25hbGl0eSB0aGF0IGF2b2lkcyBhZGRpbmcgYSBkZXNjcmlwdGlvbiBpZiBpdCdzIHRoZVxuICAgICAgICAvLyBzYW1lIGFzIHRoZSBgYXJpYS1sYWJlbGAgb2YgYW4gZWxlbWVudCwgaG93ZXZlciB3ZSBjYW4ndCBrbm93IHdoZXRoZXIgdGhlIHRvb2x0aXAgdHJpZ2dlclxuICAgICAgICAvLyBoYXMgYSBkYXRhLWJvdW5kIGBhcmlhLWxhYmVsYCBvciB3aGVuIGl0J2xsIGJlIHNldCBmb3IgdGhlIGZpcnN0IHRpbWUuIFdlIGNhbiBhdm9pZCB0aGVcbiAgICAgICAgLy8gaXNzdWUgYnkgZGVmZXJyaW5nIHRoZSBkZXNjcmlwdGlvbiBieSBhIHRpY2sgc28gQW5ndWxhciBoYXMgdGltZSB0byBzZXQgdGhlIGBhcmlhLWxhYmVsYC5cbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXJpYURlc2NyaWJlci5kZXNjcmliZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX21lc3NhZ2UgPSAnJztcblxuICAvKiogQ2xhc3NlcyB0byBiZSBwYXNzZWQgdG8gdGhlIHRvb2x0aXAuIFN1cHBvcnRzIHRoZSBzYW1lIHN5bnRheCBhcyBgbmdDbGFzc2AuICovXG4gIEBJbnB1dCgnbWF0VG9vbHRpcENsYXNzJylcbiAgZ2V0IHRvb2x0aXBDbGFzcygpIHsgcmV0dXJuIHRoaXMuX3Rvb2x0aXBDbGFzczsgfVxuICBzZXQgdG9vbHRpcENsYXNzKHZhbHVlOiBzdHJpbmd8c3RyaW5nW118U2V0PHN0cmluZz58e1trZXk6IHN0cmluZ106IGFueX0pIHtcbiAgICB0aGlzLl90b29sdGlwQ2xhc3MgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fdG9vbHRpcEluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9zZXRUb29sdGlwQ2xhc3ModGhpcy5fdG9vbHRpcENsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWFudWFsbHktYm91bmQgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMuICovXG4gIHByaXZhdGUgX3Bhc3NpdmVMaXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdD4oKTtcblxuICAvKiogVGltZXIgc3RhcnRlZCBhdCB0aGUgbGFzdCBgdG91Y2hzdGFydGAgZXZlbnQuICovXG4gIHByaXZhdGUgX3RvdWNoc3RhcnRUaW1lb3V0OiBudW1iZXI7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF9zY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgX2FyaWFEZXNjcmliZXI6IEFyaWFEZXNjcmliZXIsXG4gICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgQEluamVjdChNQVRfVE9PTFRJUF9TQ1JPTExfU1RSQVRFR1kpIHNjcm9sbFN0cmF0ZWd5OiBhbnksXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9UT09MVElQX0RFRkFVTFRfT1BUSU9OUylcbiAgICAgIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zOiBNYXRUb29sdGlwRGVmYXVsdE9wdGlvbnMsXG4gICAgICAvKipcbiAgICAgICAqIEBkZXByZWNhdGVkIF9oYW1tZXJMb2FkZXIgcGFyYW1ldGVyIHRvIGJlIHJlbW92ZWQuXG4gICAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDkuMC4wXG4gICAgICAgKi9cbiAgICAgIC8vIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGdpdmUgQW5ndWxhciBzb21ldGhpbmcgdG8gaW5qZWN0IGhlcmUgc28gaXQgZG9lc24ndCB0aHJvdy5cbiAgICAgIEBJbmplY3QoRWxlbWVudFJlZikgX2hhbW1lckxvYWRlcj86IGFueSkge1xuXG4gICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3kgPSBzY3JvbGxTdHJhdGVneTtcblxuICAgIGlmIChfZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgIGlmIChfZGVmYXVsdE9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IF9kZWZhdWx0T3B0aW9ucy5wb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKF9kZWZhdWx0T3B0aW9ucy50b3VjaEdlc3R1cmVzKSB7XG4gICAgICAgIHRoaXMudG91Y2hHZXN0dXJlcyA9IF9kZWZhdWx0T3B0aW9ucy50b3VjaEdlc3R1cmVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9mb2N1c01vbml0b3IubW9uaXRvcihfZWxlbWVudFJlZilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgICAvLyBOb3RlIHRoYXQgdGhlIGZvY3VzIG1vbml0b3IgcnVucyBvdXRzaWRlIHRoZSBBbmd1bGFyIHpvbmUuXG4gICAgICAgIGlmICghb3JpZ2luKSB7XG4gICAgICAgICAgX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKDApKTtcbiAgICAgICAgfSBlbHNlIGlmIChvcmlnaW4gPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICBfbmdab25lLnJ1bigoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIF9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgc3R5bGluZy1zcGVjaWZpYyB0aGluZ3NcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFRoaXMgbmVlZHMgdG8gaGFwcGVuIGluIGBuZ09uSW5pdGAgc28gdGhlIGluaXRpYWwgdmFsdWVzIGZvciBhbGwgaW5wdXRzIGhhdmUgYmVlbiBzZXQuXG4gICAgdGhpcy5fc2V0dXBQb2ludGVyRXZlbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcG9zZSB0aGUgdG9vbHRpcCB3aGVuIGRlc3Ryb3llZC5cbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdG91Y2hzdGFydFRpbWVvdXQpO1xuXG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fdG9vbHRpcEluc3RhbmNlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHNldCBpbiB0aGUgY29uc3RydWN0b3JcbiAgICBuYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlkb3duKTtcbiAgICB0aGlzLl9wYXNzaXZlTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgcGFzc2l2ZUxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfSk7XG4gICAgdGhpcy5fcGFzc2l2ZUxpc3RlbmVycy5jbGVhcigpO1xuXG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcblxuICAgIHRoaXMuX2FyaWFEZXNjcmliZXIucmVtb3ZlRGVzY3JpcHRpb24obmF0aXZlRWxlbWVudCwgdGhpcy5tZXNzYWdlKTtcbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcobmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICAvKiogU2hvd3MgdGhlIHRvb2x0aXAgYWZ0ZXIgdGhlIGRlbGF5IGluIG1zLCBkZWZhdWx0cyB0byB0b29sdGlwLWRlbGF5LXNob3cgb3IgMG1zIGlmIG5vIGlucHV0ICovXG4gIHNob3coZGVsYXk6IG51bWJlciA9IHRoaXMuc2hvd0RlbGF5KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMubWVzc2FnZSB8fCAodGhpcy5faXNUb29sdGlwVmlzaWJsZSgpICYmXG4gICAgICAhdGhpcy5fdG9vbHRpcEluc3RhbmNlIS5fc2hvd1RpbWVvdXRJZCAmJiAhdGhpcy5fdG9vbHRpcEluc3RhbmNlIS5faGlkZVRpbWVvdXRJZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XG5cbiAgICB0aGlzLl9kZXRhY2goKTtcbiAgICB0aGlzLl9wb3J0YWwgPSB0aGlzLl9wb3J0YWwgfHwgbmV3IENvbXBvbmVudFBvcnRhbChUb29sdGlwQ29tcG9uZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgICB0aGlzLl90b29sdGlwSW5zdGFuY2UgPSBvdmVybGF5UmVmLmF0dGFjaCh0aGlzLl9wb3J0YWwpLmluc3RhbmNlO1xuICAgIHRoaXMuX3Rvb2x0aXBJbnN0YW5jZS5hZnRlckhpZGRlbigpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fZGV0YWNoKCkpO1xuICAgIHRoaXMuX3NldFRvb2x0aXBDbGFzcyh0aGlzLl90b29sdGlwQ2xhc3MpO1xuICAgIHRoaXMuX3VwZGF0ZVRvb2x0aXBNZXNzYWdlKCk7XG4gICAgdGhpcy5fdG9vbHRpcEluc3RhbmNlIS5zaG93KGRlbGF5KTtcbiAgfVxuXG4gIC8qKiBIaWRlcyB0aGUgdG9vbHRpcCBhZnRlciB0aGUgZGVsYXkgaW4gbXMsIGRlZmF1bHRzIHRvIHRvb2x0aXAtZGVsYXktaGlkZSBvciAwbXMgaWYgbm8gaW5wdXQgKi9cbiAgaGlkZShkZWxheTogbnVtYmVyID0gdGhpcy5oaWRlRGVsYXkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdG9vbHRpcEluc3RhbmNlKSB7XG4gICAgICB0aGlzLl90b29sdGlwSW5zdGFuY2UuaGlkZShkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNob3dzL2hpZGVzIHRoZSB0b29sdGlwICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9pc1Rvb2x0aXBWaXNpYmxlKCkgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdG9vbHRpcCBpcyBjdXJyZW50bHkgdmlzaWJsZSB0byB0aGUgdXNlciAqL1xuICBfaXNUb29sdGlwVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl90b29sdGlwSW5zdGFuY2UgJiYgdGhpcy5fdG9vbHRpcEluc3RhbmNlLmlzVmlzaWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGtleWRvd24gZXZlbnRzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqIE5lZWRzIHRvIGJlIGFuIGFycm93IGZ1bmN0aW9uIHNvIHRoYXQgd2UgY2FuIHVzZSBpdCBpbiBhZGRFdmVudExpc3RlbmVyLlxuICAgKi9cbiAgcHJpdmF0ZSBfaGFuZGxlS2V5ZG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmICh0aGlzLl9pc1Rvb2x0aXBWaXNpYmxlKCkgJiYgZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFICYmICFoYXNNb2RpZmllcktleShldmVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKDApKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ3JlYXRlIHRoZSBvdmVybGF5IGNvbmZpZyBhbmQgcG9zaXRpb24gc3RyYXRlZ3kgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgcmV0dXJuIHRoaXMuX292ZXJsYXlSZWY7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsYWJsZUFuY2VzdG9ycyA9XG4gICAgICAgIHRoaXMuX3Njcm9sbERpc3BhdGNoZXIuZ2V0QW5jZXN0b3JTY3JvbGxDb250YWluZXJzKHRoaXMuX2VsZW1lbnRSZWYpO1xuXG4gICAgLy8gQ3JlYXRlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneSB0aGF0IGxpc3RlbnMgZm9yIHNjcm9sbCBldmVudHMgdG8gcmVwb3NpdGlvbi5cbiAgICBjb25zdCBzdHJhdGVneSA9IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuX2VsZW1lbnRSZWYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhUcmFuc2Zvcm1PcmlnaW5PbignLm1hdC10b29sdGlwJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAud2l0aFZpZXdwb3J0TWFyZ2luKDgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhTY3JvbGxhYmxlQ29udGFpbmVycyhzY3JvbGxhYmxlQW5jZXN0b3JzKTtcblxuICAgIHN0cmF0ZWd5LnBvc2l0aW9uQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoY2hhbmdlID0+IHtcbiAgICAgIGlmICh0aGlzLl90b29sdGlwSW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKGNoYW5nZS5zY3JvbGxhYmxlVmlld1Byb3BlcnRpZXMuaXNPdmVybGF5Q2xpcHBlZCAmJiB0aGlzLl90b29sdGlwSW5zdGFuY2UuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAvLyBBZnRlciBwb3NpdGlvbiBjaGFuZ2VzIG9jY3VyIGFuZCB0aGUgb3ZlcmxheSBpcyBjbGlwcGVkIGJ5XG4gICAgICAgICAgLy8gYSBwYXJlbnQgc2Nyb2xsYWJsZSB0aGVuIGNsb3NlIHRoZSB0b29sdGlwLlxuICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKDApKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHtcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyLFxuICAgICAgcG9zaXRpb25TdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICBwYW5lbENsYXNzOiBUT09MVElQX1BBTkVMX0NMQVNTLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuX3Njcm9sbFN0cmF0ZWd5KClcbiAgICB9KTtcblxuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaG1lbnRzKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9kZXRhY2goKSk7XG5cbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVJlZjtcbiAgfVxuXG4gIC8qKiBEZXRhY2hlcyB0aGUgY3VycmVudGx5LWF0dGFjaGVkIHRvb2x0aXAuICovXG4gIHByaXZhdGUgX2RldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZiAmJiB0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdG9vbHRpcEluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCB0b29sdGlwLiAqL1xuICBwcml2YXRlIF91cGRhdGVQb3NpdGlvbigpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9XG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYhLmdldENvbmZpZygpLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuICAgIGNvbnN0IG9yaWdpbiA9IHRoaXMuX2dldE9yaWdpbigpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLl9nZXRPdmVybGF5UG9zaXRpb24oKTtcblxuICAgIHBvc2l0aW9uLndpdGhQb3NpdGlvbnMoW1xuICAgICAgey4uLm9yaWdpbi5tYWluLCAuLi5vdmVybGF5Lm1haW59LFxuICAgICAgey4uLm9yaWdpbi5mYWxsYmFjaywgLi4ub3ZlcmxheS5mYWxsYmFja31cbiAgICBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvcmlnaW4gcG9zaXRpb24gYW5kIGEgZmFsbGJhY2sgcG9zaXRpb24gYmFzZWQgb24gdGhlIHVzZXIncyBwb3NpdGlvbiBwcmVmZXJlbmNlLlxuICAgKiBUaGUgZmFsbGJhY2sgcG9zaXRpb24gaXMgdGhlIGludmVyc2Ugb2YgdGhlIG9yaWdpbiAoZS5nLiBgJ2JlbG93JyAtPiAnYWJvdmUnYCkuXG4gICAqL1xuICBfZ2V0T3JpZ2luKCk6IHttYWluOiBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb24sIGZhbGxiYWNrOiBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb259IHtcbiAgICBjb25zdCBpc0x0ciA9ICF0aGlzLl9kaXIgfHwgdGhpcy5fZGlyLnZhbHVlID09ICdsdHInO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICBsZXQgb3JpZ2luUG9zaXRpb246IE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbjtcblxuICAgIGlmIChwb3NpdGlvbiA9PSAnYWJvdmUnIHx8IHBvc2l0aW9uID09ICdiZWxvdycpIHtcbiAgICAgIG9yaWdpblBvc2l0aW9uID0ge29yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiBwb3NpdGlvbiA9PSAnYWJvdmUnID8gJ3RvcCcgOiAnYm90dG9tJ307XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHBvc2l0aW9uID09ICdiZWZvcmUnIHx8XG4gICAgICAocG9zaXRpb24gPT0gJ2xlZnQnICYmIGlzTHRyKSB8fFxuICAgICAgKHBvc2l0aW9uID09ICdyaWdodCcgJiYgIWlzTHRyKSkge1xuICAgICAgb3JpZ2luUG9zaXRpb24gPSB7b3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcid9O1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBwb3NpdGlvbiA9PSAnYWZ0ZXInIHx8XG4gICAgICAocG9zaXRpb24gPT0gJ3JpZ2h0JyAmJiBpc0x0cikgfHxcbiAgICAgIChwb3NpdGlvbiA9PSAnbGVmdCcgJiYgIWlzTHRyKSkge1xuICAgICAgb3JpZ2luUG9zaXRpb24gPSB7b3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdjZW50ZXInfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZ2V0TWF0VG9vbHRpcEludmFsaWRQb3NpdGlvbkVycm9yKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCB7eCwgeX0gPSB0aGlzLl9pbnZlcnRQb3NpdGlvbihvcmlnaW5Qb3NpdGlvbi5vcmlnaW5YLCBvcmlnaW5Qb3NpdGlvbi5vcmlnaW5ZKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtYWluOiBvcmlnaW5Qb3NpdGlvbixcbiAgICAgIGZhbGxiYWNrOiB7b3JpZ2luWDogeCwgb3JpZ2luWTogeX1cbiAgICB9O1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIG92ZXJsYXkgcG9zaXRpb24gYW5kIGEgZmFsbGJhY2sgcG9zaXRpb24gYmFzZWQgb24gdGhlIHVzZXIncyBwcmVmZXJlbmNlICovXG4gIF9nZXRPdmVybGF5UG9zaXRpb24oKToge21haW46IE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24sIGZhbGxiYWNrOiBPdmVybGF5Q29ubmVjdGlvblBvc2l0aW9ufSB7XG4gICAgY29uc3QgaXNMdHIgPSAhdGhpcy5fZGlyIHx8IHRoaXMuX2Rpci52YWx1ZSA9PSAnbHRyJztcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgbGV0IG92ZXJsYXlQb3NpdGlvbjogT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbjtcblxuICAgIGlmIChwb3NpdGlvbiA9PSAnYWJvdmUnKSB7XG4gICAgICBvdmVybGF5UG9zaXRpb24gPSB7b3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ2JvdHRvbSd9O1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT0gJ2JlbG93Jykge1xuICAgICAgb3ZlcmxheVBvc2l0aW9uID0ge292ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICd0b3AnfTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcG9zaXRpb24gPT0gJ2JlZm9yZScgfHxcbiAgICAgIChwb3NpdGlvbiA9PSAnbGVmdCcgJiYgaXNMdHIpIHx8XG4gICAgICAocG9zaXRpb24gPT0gJ3JpZ2h0JyAmJiAhaXNMdHIpKSB7XG4gICAgICBvdmVybGF5UG9zaXRpb24gPSB7b3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2NlbnRlcid9O1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBwb3NpdGlvbiA9PSAnYWZ0ZXInIHx8XG4gICAgICAocG9zaXRpb24gPT0gJ3JpZ2h0JyAmJiBpc0x0cikgfHxcbiAgICAgIChwb3NpdGlvbiA9PSAnbGVmdCcgJiYgIWlzTHRyKSkge1xuICAgICAgb3ZlcmxheVBvc2l0aW9uID0ge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2NlbnRlcid9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBnZXRNYXRUb29sdGlwSW52YWxpZFBvc2l0aW9uRXJyb3IocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHt4LCB5fSA9IHRoaXMuX2ludmVydFBvc2l0aW9uKG92ZXJsYXlQb3NpdGlvbi5vdmVybGF5WCwgb3ZlcmxheVBvc2l0aW9uLm92ZXJsYXlZKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtYWluOiBvdmVybGF5UG9zaXRpb24sXG4gICAgICBmYWxsYmFjazoge292ZXJsYXlYOiB4LCBvdmVybGF5WTogeX1cbiAgICB9O1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIHRvb2x0aXAgbWVzc2FnZSBhbmQgcmVwb3NpdGlvbnMgdGhlIG92ZXJsYXkgYWNjb3JkaW5nIHRvIHRoZSBuZXcgbWVzc2FnZSBsZW5ndGggKi9cbiAgcHJpdmF0ZSBfdXBkYXRlVG9vbHRpcE1lc3NhZ2UoKSB7XG4gICAgLy8gTXVzdCB3YWl0IGZvciB0aGUgbWVzc2FnZSB0byBiZSBwYWludGVkIHRvIHRoZSB0b29sdGlwIHNvIHRoYXQgdGhlIG92ZXJsYXkgY2FuIHByb3Blcmx5XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBjb3JyZWN0IHBvc2l0aW9uaW5nIGJhc2VkIG9uIHRoZSBzaXplIG9mIHRoZSB0ZXh0LlxuICAgIGlmICh0aGlzLl90b29sdGlwSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX3Rvb2x0aXBJbnN0YW5jZS5tZXNzYWdlID0gdGhpcy5tZXNzYWdlO1xuICAgICAgdGhpcy5fdG9vbHRpcEluc3RhbmNlLl9tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgdGhpcy5fbmdab25lLm9uTWljcm90YXNrRW1wdHkuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZClcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBJbnN0YW5jZSkge1xuICAgICAgICAgIHRoaXMuX292ZXJsYXlSZWYhLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSB0b29sdGlwIGNsYXNzICovXG4gIHByaXZhdGUgX3NldFRvb2x0aXBDbGFzcyh0b29sdGlwQ2xhc3M6IHN0cmluZ3xzdHJpbmdbXXxTZXQ8c3RyaW5nPnx7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIGlmICh0aGlzLl90b29sdGlwSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX3Rvb2x0aXBJbnN0YW5jZS50b29sdGlwQ2xhc3MgPSB0b29sdGlwQ2xhc3M7XG4gICAgICB0aGlzLl90b29sdGlwSW5zdGFuY2UuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBJbnZlcnRzIGFuIG92ZXJsYXkgcG9zaXRpb24uICovXG4gIHByaXZhdGUgX2ludmVydFBvc2l0aW9uKHg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zLCB5OiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyB8fCB0aGlzLnBvc2l0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICBpZiAoeSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgeSA9ICdib3R0b20nO1xuICAgICAgfSBlbHNlIGlmICh5ID09PSAnYm90dG9tJykge1xuICAgICAgICB5ID0gJ3RvcCc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4ID09PSAnZW5kJykge1xuICAgICAgICB4ID0gJ3N0YXJ0JztcbiAgICAgIH0gZWxzZSBpZiAoeCA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICB4ID0gJ2VuZCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt4LCB5fTtcbiAgfVxuXG4gIC8qKiBCaW5kcyB0aGUgcG9pbnRlciBldmVudHMgdG8gdGhlIHRvb2x0aXAgdHJpZ2dlci4gKi9cbiAgcHJpdmF0ZSBfc2V0dXBQb2ludGVyRXZlbnRzKCkge1xuICAgIC8vIFRoZSBtb3VzZSBldmVudHMgc2hvdWxkbid0IGJlIGJvdW5kIG9uIG1vYmlsZSBkZXZpY2VzLCBiZWNhdXNlIHRoZXkgY2FuIHByZXZlbnQgdGhlXG4gICAgLy8gZmlyc3QgdGFwIGZyb20gZmlyaW5nIGl0cyBjbGljayBldmVudCBvciBjYW4gY2F1c2UgdGhlIHRvb2x0aXAgdG8gb3BlbiBmb3IgY2xpY2tzLlxuICAgIGlmICghdGhpcy5fcGxhdGZvcm0uSU9TICYmICF0aGlzLl9wbGF0Zm9ybS5BTkRST0lEKSB7XG4gICAgICB0aGlzLl9wYXNzaXZlTGlzdGVuZXJzXG4gICAgICAgIC5zZXQoJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLnNob3coKSlcbiAgICAgICAgLnNldCgnbW91c2VsZWF2ZScsICgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG91Y2hHZXN0dXJlcyAhPT0gJ29mZicpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVOYXRpdmVHZXN0dXJlc0lmTmVjZXNzYXJ5KCk7XG4gICAgICBjb25zdCB0b3VjaGVuZExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdG91Y2hzdGFydFRpbWVvdXQpO1xuICAgICAgICB0aGlzLmhpZGUodGhpcy5fZGVmYXVsdE9wdGlvbnMudG91Y2hlbmRIaWRlRGVsYXkpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fcGFzc2l2ZUxpc3RlbmVyc1xuICAgICAgICAuc2V0KCd0b3VjaGVuZCcsIHRvdWNoZW5kTGlzdGVuZXIpXG4gICAgICAgIC5zZXQoJ3RvdWNoY2FuY2VsJywgdG91Y2hlbmRMaXN0ZW5lcilcbiAgICAgICAgLnNldCgndG91Y2hzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAvLyBOb3RlIHRoYXQgaXQncyBpbXBvcnRhbnQgdGhhdCB3ZSBkb24ndCBgcHJldmVudERlZmF1bHRgIGhlcmUsXG4gICAgICAgICAgLy8gYmVjYXVzZSBpdCBjYW4gcHJldmVudCBjbGljayBldmVudHMgZnJvbSBmaXJpbmcgb24gdGhlIGVsZW1lbnQuXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RvdWNoc3RhcnRUaW1lb3V0KTtcbiAgICAgICAgICB0aGlzLl90b3VjaHN0YXJ0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zaG93KCksIExPTkdQUkVTU19ERUxBWSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3Bhc3NpdmVMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIsIGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIHBhc3NpdmVMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIERpc2FibGVzIHRoZSBuYXRpdmUgYnJvd3NlciBnZXN0dXJlcywgYmFzZWQgb24gaG93IHRoZSB0b29sdGlwIGhhcyBiZWVuIGNvbmZpZ3VyZWQuICovXG4gIHByaXZhdGUgX2Rpc2FibGVOYXRpdmVHZXN0dXJlc0lmTmVjZXNzYXJ5KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuICAgIGNvbnN0IGdlc3R1cmVzID0gdGhpcy50b3VjaEdlc3R1cmVzO1xuXG4gICAgaWYgKGdlc3R1cmVzICE9PSAnb2ZmJykge1xuICAgICAgLy8gSWYgZ2VzdHVyZXMgYXJlIHNldCB0byBgYXV0b2AsIHdlIGRvbid0IGRpc2FibGUgdGV4dCBzZWxlY3Rpb24gb24gaW5wdXRzIGFuZFxuICAgICAgLy8gdGV4dGFyZWFzLCBiZWNhdXNlIGl0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gdHlwaW5nIGludG8gdGhlbSBvbiBpT1MgU2FmYXJpLlxuICAgICAgaWYgKGdlc3R1cmVzID09PSAnb24nIHx8IChlbGVtZW50Lm5vZGVOYW1lICE9PSAnSU5QVVQnICYmIGVsZW1lbnQubm9kZU5hbWUgIT09ICdURVhUQVJFQScpKSB7XG4gICAgICAgIHN0eWxlLnVzZXJTZWxlY3QgPSBzdHlsZS5tc1VzZXJTZWxlY3QgPSBzdHlsZS53ZWJraXRVc2VyU2VsZWN0ID1cbiAgICAgICAgICAgIChzdHlsZSBhcyBhbnkpLk1velVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYGF1dG9gIGdlc3R1cmVzIGFuZCB0aGUgZWxlbWVudCB1c2VzIG5hdGl2ZSBIVE1MIGRyYWdnaW5nLFxuICAgICAgLy8gd2UgZG9uJ3Qgc2V0IGAtd2Via2l0LXVzZXItZHJhZ2AgYmVjYXVzZSBpdCBwcmV2ZW50cyB0aGUgbmF0aXZlIGJlaGF2aW9yLlxuICAgICAgaWYgKGdlc3R1cmVzID09PSAnb24nIHx8ICFlbGVtZW50LmRyYWdnYWJsZSkge1xuICAgICAgICAoc3R5bGUgYXMgYW55KS53ZWJraXRVc2VyRHJhZyA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICBzdHlsZS53ZWJraXRUYXBIaWdobGlnaHRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oaWRlRGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd0RlbGF5OiBOdW1iZXJJbnB1dDtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBjb21wb25lbnQgdGhhdCB3cmFwcyB0aGUgdG9vbHRpcCdzIGNvbnRlbnQuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC10b29sdGlwLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbbWF0VG9vbHRpcEFuaW1hdGlvbnMudG9vbHRpcFN0YXRlXSxcbiAgaG9zdDoge1xuICAgIC8vIEZvcmNlcyB0aGUgZWxlbWVudCB0byBoYXZlIGEgbGF5b3V0IGluIElFIGFuZCBFZGdlLiBUaGlzIGZpeGVzIGlzc3VlcyB3aGVyZSB0aGUgZWxlbWVudFxuICAgIC8vIHdvbid0IGJlIHJlbmRlcmVkIGlmIHRoZSBhbmltYXRpb25zIGFyZSBkaXNhYmxlZCBvciB0aGVyZSBpcyBubyB3ZWIgYW5pbWF0aW9ucyBwb2x5ZmlsbC5cbiAgICAnW3N0eWxlLnpvb21dJzogJ192aXNpYmlsaXR5ID09PSBcInZpc2libGVcIiA/IDEgOiBudWxsJyxcbiAgICAnKGJvZHk6Y2xpY2spJzogJ3RoaXMuX2hhbmRsZUJvZHlJbnRlcmFjdGlvbigpJyxcbiAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBNZXNzYWdlIHRvIGRpc3BsYXkgaW4gdGhlIHRvb2x0aXAgKi9cbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qKiBDbGFzc2VzIHRvIGJlIGFkZGVkIHRvIHRoZSB0b29sdGlwLiBTdXBwb3J0cyB0aGUgc2FtZSBzeW50YXggYXMgYG5nQ2xhc3NgLiAqL1xuICB0b29sdGlwQ2xhc3M6IHN0cmluZ3xzdHJpbmdbXXxTZXQ8c3RyaW5nPnx7W2tleTogc3RyaW5nXTogYW55fTtcblxuICAvKiogVGhlIHRpbWVvdXQgSUQgb2YgYW55IGN1cnJlbnQgdGltZXIgc2V0IHRvIHNob3cgdGhlIHRvb2x0aXAgKi9cbiAgX3Nob3dUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG5cbiAgLyoqIFRoZSB0aW1lb3V0IElEIG9mIGFueSBjdXJyZW50IHRpbWVyIHNldCB0byBoaWRlIHRoZSB0b29sdGlwICovXG4gIF9oaWRlVGltZW91dElkOiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKiBQcm9wZXJ0eSB3YXRjaGVkIGJ5IHRoZSBhbmltYXRpb24gZnJhbWV3b3JrIHRvIHNob3cgb3IgaGlkZSB0aGUgdG9vbHRpcCAqL1xuICBfdmlzaWJpbGl0eTogVG9vbHRpcFZpc2liaWxpdHkgPSAnaW5pdGlhbCc7XG5cbiAgLyoqIFdoZXRoZXIgaW50ZXJhY3Rpb25zIG9uIHRoZSBwYWdlIHNob3VsZCBjbG9zZSB0aGUgdG9vbHRpcCAqL1xuICBwcml2YXRlIF9jbG9zZU9uSW50ZXJhY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoYXQgdGhlIHRvb2x0aXAgaGFzIGJlZW4gaGlkZGVuIGZyb20gdGhlIHZpZXcgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfb25IaWRlOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhIGhhbmRzZXQtc2l6ZWQgZGlzcGxheS4gICovXG4gIF9pc0hhbmRzZXQ6IE9ic2VydmFibGU8QnJlYWtwb2ludFN0YXRlPiA9IHRoaXMuX2JyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKEJyZWFrcG9pbnRzLkhhbmRzZXQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9icmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge31cblxuICAvKipcbiAgICogU2hvd3MgdGhlIHRvb2x0aXAgd2l0aCBhbiBhbmltYXRpb24gb3JpZ2luYXRpbmcgZnJvbSB0aGUgcHJvdmlkZWQgb3JpZ2luXG4gICAqIEBwYXJhbSBkZWxheSBBbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBkZWxheSBzaG93aW5nIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgc2hvdyhkZWxheTogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gQ2FuY2VsIHRoZSBkZWxheWVkIGhpZGUgaWYgaXQgaXMgc2NoZWR1bGVkXG4gICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZW91dElkKTtcbiAgICAgIHRoaXMuX2hpZGVUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEJvZHkgaW50ZXJhY3Rpb25zIHNob3VsZCBjYW5jZWwgdGhlIHRvb2x0aXAgaWYgdGhlcmUgaXMgYSBkZWxheSBpbiBzaG93aW5nLlxuICAgIHRoaXMuX2Nsb3NlT25JbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fdmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xuXG4gICAgICAvLyBNYXJrIGZvciBjaGVjayBzbyBpZiBhbnkgcGFyZW50IGNvbXBvbmVudCBoYXMgc2V0IHRoZVxuICAgICAgLy8gQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgdG8gT25QdXNoIGl0IHdpbGwgYmUgY2hlY2tlZCBhbnl3YXlzXG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICAvKipcbiAgICogQmVnaW5zIHRoZSBhbmltYXRpb24gdG8gaGlkZSB0aGUgdG9vbHRpcCBhZnRlciB0aGUgcHJvdmlkZWQgZGVsYXkgaW4gbXMuXG4gICAqIEBwYXJhbSBkZWxheSBBbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5IHNob3dpbmcgdGhlIHRvb2x0aXAuXG4gICAqL1xuICBoaWRlKGRlbGF5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyBDYW5jZWwgdGhlIGRlbGF5ZWQgc2hvdyBpZiBpdCBpcyBzY2hlZHVsZWRcbiAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fdmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IG51bGw7XG5cbiAgICAgIC8vIE1hcmsgZm9yIGNoZWNrIHNvIGlmIGFueSBwYXJlbnQgY29tcG9uZW50IGhhcyBzZXQgdGhlXG4gICAgICAvLyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB0byBPblB1c2ggaXQgd2lsbCBiZSBjaGVja2VkIGFueXdheXNcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB3aGVuIHRoZSB0b29sdGlwIGhhcyBiZWVuIGhpZGRlbiBmcm9tIHZpZXcuICovXG4gIGFmdGVySGlkZGVuKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9vbkhpZGUuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgdG9vbHRpcCBpcyBiZWluZyBkaXNwbGF5ZWQuICovXG4gIGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb25IaWRlLmNvbXBsZXRlKCk7XG4gIH1cblxuICBfYW5pbWF0aW9uU3RhcnQoKSB7XG4gICAgdGhpcy5fY2xvc2VPbkludGVyYWN0aW9uID0gZmFsc2U7XG4gIH1cblxuICBfYW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0b1N0YXRlID0gZXZlbnQudG9TdGF0ZSBhcyBUb29sdGlwVmlzaWJpbGl0eTtcblxuICAgIGlmICh0b1N0YXRlID09PSAnaGlkZGVuJyAmJiAhdGhpcy5pc1Zpc2libGUoKSkge1xuICAgICAgdGhpcy5fb25IaWRlLm5leHQoKTtcbiAgICB9XG5cbiAgICBpZiAodG9TdGF0ZSA9PT0gJ3Zpc2libGUnIHx8IHRvU3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICB0aGlzLl9jbG9zZU9uSW50ZXJhY3Rpb24gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcmFjdGlvbnMgb24gdGhlIEhUTUwgYm9keSBzaG91bGQgY2xvc2UgdGhlIHRvb2x0aXAgaW1tZWRpYXRlbHkgYXMgZGVmaW5lZCBpbiB0aGVcbiAgICogbWF0ZXJpYWwgZGVzaWduIHNwZWMuXG4gICAqIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvdG9vbHRpcHMuaHRtbCNiZWhhdmlvclxuICAgKi9cbiAgX2hhbmRsZUJvZHlJbnRlcmFjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2xvc2VPbkludGVyYWN0aW9uKSB7XG4gICAgICB0aGlzLmhpZGUoMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIHRoYXQgdGhlIHRvb2x0aXAgbmVlZHMgdG8gYmUgY2hlY2tlZCBpbiB0aGUgbmV4dCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bi5cbiAgICogTWFpbmx5IHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgaW5pdGlhbCB0ZXh0IGJlZm9yZSBwb3NpdGlvbmluZyBhIHRvb2x0aXAsIHdoaWNoXG4gICAqIGNhbiBiZSBwcm9ibGVtYXRpYyBpbiBjb21wb25lbnRzIHdpdGggT25QdXNoIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAqL1xuICBfbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=