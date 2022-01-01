/**
 * @fileoverview added by tsickle
 * Generated from: src/material/badge/badge.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AriaDescriber } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, ElementRef, Inject, Input, NgZone, Optional, Renderer2, isDevMode, } from '@angular/core';
import { mixinDisabled } from '@angular/material/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
let nextId = 0;
// Boilerplate for applying mixins to MatBadge.
/**
 * \@docs-private
 */
class MatBadgeBase {
}
/** @type {?} */
const _MatBadgeMixinBase = mixinDisabled(MatBadgeBase);
/**
 * Directive to display a text badge.
 */
export class MatBadge extends _MatBadgeMixinBase {
    /**
     * @param {?} _ngZone
     * @param {?} _elementRef
     * @param {?} _ariaDescriber
     * @param {?} _renderer
     * @param {?=} _animationMode
     */
    constructor(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
        super();
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._ariaDescriber = _ariaDescriber;
        this._renderer = _renderer;
        this._animationMode = _animationMode;
        /**
         * Whether the badge has any content.
         */
        this._hasContent = false;
        this._color = 'primary';
        this._overlap = true;
        /**
         * Position the badge should reside.
         * Accepts any combination of 'above'|'below' and 'before'|'after'
         */
        this.position = 'above after';
        /**
         * Size of the badge. Can be 'small', 'medium', or 'large'.
         */
        this.size = 'medium';
        /**
         * Unique id for the badge
         */
        this._id = nextId++;
        if (isDevMode()) {
            /** @type {?} */
            const nativeElement = _elementRef.nativeElement;
            if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
                throw Error('matBadge must be attached to an element node.');
            }
        }
    }
    /**
     * The color of the badge. Can be `primary`, `accent`, or `warn`.
     * @return {?}
     */
    get color() { return this._color; }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._setColor(value);
        this._color = value;
    }
    /**
     * Whether the badge should overlap its contents or not
     * @return {?}
     */
    get overlap() { return this._overlap; }
    /**
     * @param {?} val
     * @return {?}
     */
    set overlap(val) {
        this._overlap = coerceBooleanProperty(val);
    }
    /**
     * Message used to describe the decorated element via aria-describedby
     * @return {?}
     */
    get description() { return this._description; }
    /**
     * @param {?} newDescription
     * @return {?}
     */
    set description(newDescription) {
        if (newDescription !== this._description) {
            /** @type {?} */
            const badgeElement = this._badgeElement;
            this._updateHostAriaDescription(newDescription, this._description);
            this._description = newDescription;
            if (badgeElement) {
                newDescription ? badgeElement.setAttribute('aria-label', newDescription) :
                    badgeElement.removeAttribute('aria-label');
            }
        }
    }
    /**
     * Whether the badge is hidden.
     * @return {?}
     */
    get hidden() { return this._hidden; }
    /**
     * @param {?} val
     * @return {?}
     */
    set hidden(val) {
        this._hidden = coerceBooleanProperty(val);
    }
    /**
     * Whether the badge is above the host or not
     * @return {?}
     */
    isAbove() {
        return this.position.indexOf('below') === -1;
    }
    /**
     * Whether the badge is after the host or not
     * @return {?}
     */
    isAfter() {
        return this.position.indexOf('before') === -1;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const contentChange = changes['content'];
        if (contentChange) {
            /** @type {?} */
            const value = contentChange.currentValue;
            this._hasContent = value != null && `${value}`.trim().length > 0;
            this._updateTextContent();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const badgeElement = this._badgeElement;
        if (badgeElement) {
            if (this.description) {
                this._ariaDescriber.removeDescription(badgeElement, this.description);
            }
            // When creating a badge through the Renderer, Angular will keep it in an index.
            // We have to destroy it ourselves, otherwise it'll be retained in memory.
            if (this._renderer.destroyNode) {
                this._renderer.destroyNode(badgeElement);
            }
        }
    }
    /**
     * Gets the element into which the badge's content is being rendered.
     * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
     * @return {?}
     */
    getBadgeElement() {
        return this._badgeElement;
    }
    /**
     * Injects a span element into the DOM with the content.
     * @private
     * @return {?}
     */
    _updateTextContent() {
        if (!this._badgeElement) {
            this._badgeElement = this._createBadgeElement();
        }
        else {
            this._badgeElement.textContent = this.content;
        }
        return this._badgeElement;
    }
    /**
     * Creates the badge element
     * @private
     * @return {?}
     */
    _createBadgeElement() {
        /** @type {?} */
        const badgeElement = this._renderer.createElement('span');
        /** @type {?} */
        const activeClass = 'mat-badge-active';
        /** @type {?} */
        const contentClass = 'mat-badge-content';
        // Clear any existing badges which may have persisted from a server-side render.
        this._clearExistingBadges(contentClass);
        badgeElement.setAttribute('id', `mat-badge-content-${this._id}`);
        badgeElement.classList.add(contentClass);
        badgeElement.textContent = this.content;
        if (this._animationMode === 'NoopAnimations') {
            badgeElement.classList.add('_mat-animation-noopable');
        }
        if (this.description) {
            badgeElement.setAttribute('aria-label', this.description);
        }
        this._elementRef.nativeElement.appendChild(badgeElement);
        // animate in after insertion
        if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => {
                    badgeElement.classList.add(activeClass);
                }));
            }));
        }
        else {
            badgeElement.classList.add(activeClass);
        }
        return badgeElement;
    }
    /**
     * Sets the aria-label property on the element
     * @private
     * @param {?} newDescription
     * @param {?} oldDescription
     * @return {?}
     */
    _updateHostAriaDescription(newDescription, oldDescription) {
        // ensure content available before setting label
        /** @type {?} */
        const content = this._updateTextContent();
        if (oldDescription) {
            this._ariaDescriber.removeDescription(content, oldDescription);
        }
        if (newDescription) {
            this._ariaDescriber.describe(content, newDescription);
        }
    }
    /**
     * Adds css theme class given the color to the component host
     * @private
     * @param {?} colorPalette
     * @return {?}
     */
    _setColor(colorPalette) {
        if (colorPalette !== this._color) {
            if (this._color) {
                this._elementRef.nativeElement.classList.remove(`mat-badge-${this._color}`);
            }
            if (colorPalette) {
                this._elementRef.nativeElement.classList.add(`mat-badge-${colorPalette}`);
            }
        }
    }
    /**
     * Clears any existing badges that might be left over from server-side rendering.
     * @private
     * @param {?} cssClass
     * @return {?}
     */
    _clearExistingBadges(cssClass) {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        /** @type {?} */
        let childCount = element.children.length;
        // Use a reverse while, because we'll be removing elements from the list as we're iterating.
        while (childCount--) {
            /** @type {?} */
            const currentChild = element.children[childCount];
            if (currentChild.classList.contains(cssClass)) {
                element.removeChild(currentChild);
            }
        }
    }
}
MatBadge.ɵfac = function MatBadge_Factory(t) { return new (t || MatBadge)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.AriaDescriber), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
MatBadge.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatBadge, selectors: [["", "matBadge", ""]], hostAttrs: [1, "mat-badge"], hostVars: 20, hostBindings: function MatBadge_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx._hasContent)("mat-badge-disabled", ctx.disabled);
    } }, inputs: { disabled: ["matBadgeDisabled", "disabled"], position: ["matBadgePosition", "position"], size: ["matBadgeSize", "size"], color: ["matBadgeColor", "color"], overlap: ["matBadgeOverlap", "overlap"], description: ["matBadgeDescription", "description"], hidden: ["matBadgeHidden", "hidden"], content: ["matBadge", "content"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
MatBadge.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: AriaDescriber },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
MatBadge.propDecorators = {
    color: [{ type: Input, args: ['matBadgeColor',] }],
    overlap: [{ type: Input, args: ['matBadgeOverlap',] }],
    position: [{ type: Input, args: ['matBadgePosition',] }],
    content: [{ type: Input, args: ['matBadge',] }],
    description: [{ type: Input, args: ['matBadgeDescription',] }],
    size: [{ type: Input, args: ['matBadgeSize',] }],
    hidden: [{ type: Input, args: ['matBadgeHidden',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatBadge, [{
        type: Directive,
        args: [{
                selector: '[matBadge]',
                inputs: ['disabled: matBadgeDisabled'],
                host: {
                    'class': 'mat-badge',
                    '[class.mat-badge-overlap]': 'overlap',
                    '[class.mat-badge-above]': 'isAbove()',
                    '[class.mat-badge-below]': '!isAbove()',
                    '[class.mat-badge-before]': '!isAfter()',
                    '[class.mat-badge-after]': 'isAfter()',
                    '[class.mat-badge-small]': 'size === "small"',
                    '[class.mat-badge-medium]': 'size === "medium"',
                    '[class.mat-badge-large]': 'size === "large"',
                    '[class.mat-badge-hidden]': 'hidden || !_hasContent',
                    '[class.mat-badge-disabled]': 'disabled'
                }
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.AriaDescriber }, { type: ɵngcc0.Renderer2 }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { position: [{
            type: Input,
            args: ['matBadgePosition']
        }], size: [{
            type: Input,
            args: ['matBadgeSize']
        }], color: [{
            type: Input,
            args: ['matBadgeColor']
        }], overlap: [{
            type: Input,
            args: ['matBadgeOverlap']
        }], description: [{
            type: Input,
            args: ['matBadgeDescription']
        }], hidden: [{
            type: Input,
            args: ['matBadgeHidden']
        }], content: [{
            type: Input,
            args: ['matBadge']
        }] }); })();
if (false) {
    /** @type {?} */
    MatBadge.ngAcceptInputType_disabled;
    /** @type {?} */
    MatBadge.ngAcceptInputType_hidden;
    /** @type {?} */
    MatBadge.ngAcceptInputType_overlap;
    /**
     * Whether the badge has any content.
     * @type {?}
     */
    MatBadge.prototype._hasContent;
    /**
     * @type {?}
     * @private
     */
    MatBadge.prototype._color;
    /**
     * @type {?}
     * @private
     */
    MatBadge.prototype._overlap;
    /**
     * Position the badge should reside.
     * Accepts any combination of 'above'|'below' and 'before'|'after'
     * @type {?}
     */
    MatBadge.prototype.position;
    /**
     * The content for the badge
     * @type {?}
     */
    MatBadge.prototype.content;
    /**
     * @type {?}
     * @private
     */
    MatBadge.prototype._description;
    /**
     * Size of the badge. Can be 'small', 'medium', or 'large'.
     * @type {?}
     */
    MatBadge.prototype.size;
    /**
     * @type {?}
     * @private
     */
    MatBadge.prototype._hidden;
    /**
     * Unique id for the badge
     * @type {?}
     */
    MatBadge.prototype._id;
    /**
     * @type {?}
     * @private
     */
    MatBadge.prototype._badgeElement;
    /**
     * @type {?}
     * @private
     */
    MatBadge.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MatBadge.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatBadge.prototype._ariaDescriber;
    /**
     * @type {?}
     * @private
     */
    MatBadge.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    MatBadge.prototype._animationMode;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9iYWRnZS9iYWRnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUE2QixhQUFhLEVBQWUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRTs7O0FBRWUsSUFBWCxNQUFNLEdBQUcsQ0FBQztBQUNkO0FBQytDO0FBQzVDO0FBQ0g7QUFBQSxNQUFNLFlBQVk7QUFBRyxDQUFBO0FBQ3JCO0FBQ2dCLE1BQVYsa0JBQWtCLEdBQ21CLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDdEU7QUFDRztBQUFzQztBQTBCekMsTUFBTSxPQUFPLFFBQVMsU0FBUSxrQkFBa0I7QUFBRztBQUFRO0FBQTBCO0FBQ2pFO0FBQ1g7QUFFSTtBQUFrQztBQUFRLElBMkRyRCxZQUNZLE9BQWUsRUFDZixXQUFvQyxFQUNwQyxjQUE2QixFQUM3QixTQUFvQixFQUN1QixjQUF1QjtBQUNoRixRQUFNLEtBQUssRUFBRSxDQUFDO0FBQ2QsUUFOYyxZQUFPLEdBQVAsT0FBTyxDQUFRO0FBQUMsUUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO0FBQUMsUUFDckMsbUJBQWMsR0FBZCxjQUFjLENBQWU7QUFBQyxRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFXO0FBQUMsUUFDc0IsbUJBQWMsR0FBZCxjQUFjLENBQVM7QUFBQztBQUN4RTtBQUdL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QUFBZ0I7QUFBUSxJQU05Qyw0QkFBaUM7QUFDbkM7QUFFQztBQUNFO0FBQ0U7QUFDVztBQUFRLElBQXRCLDRCQUFzRTtBQUN4RTtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1QiwyQkFBbUM7QUFDckM7QUFDTztBQUFpQjtBQUFnQjtBQUFRLElBZTlDLGdDQUE2QjtBQUMvQjtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1Qix3QkFBcUQ7QUFDdkQ7QUFDTztBQUFpQjtBQUN0QjtBQUFRLElBS1IsMkJBQXlCO0FBQzNCO0FBQ087QUFDRjtBQUFpQjtBQUVuQixJQUZELHVCQUF1QjtBQUN6QjtBQUNPO0FBQWlCO0FBQWdCO0FBQVEsSUFBOUMsaUNBQStDO0FBQ2pEO0FBQ087QUFDRTtBQUFnQjtBQUN2QixJQURJLDJCQUF1QjtBQUFDO0FBQ3ZCO0FBQWlCO0FBQWdCO0FBQVEsSUFBMUMsK0JBQTRDO0FBQUM7QUFDNUM7QUFBaUI7QUFBZ0I7QUFDckMsSUFERyxrQ0FBcUM7QUFBQztBQUNyQztBQUFpQjtBQUNwQjtBQUFRLElBRE4sNkJBQTRCO0FBQUM7QUFDNUI7QUFBaUI7QUFBZ0I7QUFBUSxJQUExQyxrQ0FBMEU7QUFBQztBQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QXJpYURlc2NyaWJlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgaXNEZXZNb2RlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FuRGlzYWJsZSwgQ2FuRGlzYWJsZUN0b3IsIG1peGluRGlzYWJsZWQsIFRoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge0FOSU1BVElPTl9NT0RVTEVfVFlQRX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuXG5sZXQgbmV4dElkID0gMDtcblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBNYXRCYWRnZS5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBNYXRCYWRnZUJhc2Uge31cblxuY29uc3QgX01hdEJhZGdlTWl4aW5CYXNlOlxuICAgIENhbkRpc2FibGVDdG9yICYgdHlwZW9mIE1hdEJhZGdlQmFzZSA9IG1peGluRGlzYWJsZWQoTWF0QmFkZ2VCYXNlKTtcblxuLyoqIEFsbG93ZWQgcG9zaXRpb24gb3B0aW9ucyBmb3IgbWF0QmFkZ2VQb3NpdGlvbiAqL1xuZXhwb3J0IHR5cGUgTWF0QmFkZ2VQb3NpdGlvbiA9XG4gICAgJ2Fib3ZlIGFmdGVyJyB8ICdhYm92ZSBiZWZvcmUnIHwgJ2JlbG93IGJlZm9yZScgfCAnYmVsb3cgYWZ0ZXInIHxcbiAgICAnYmVmb3JlJyB8ICdhZnRlcicgfCAnYWJvdmUnIHwgJ2JlbG93JztcblxuLyoqIEFsbG93ZWQgc2l6ZSBvcHRpb25zIGZvciBtYXRCYWRnZVNpemUgKi9cbmV4cG9ydCB0eXBlIE1hdEJhZGdlU2l6ZSA9ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbi8qKiBEaXJlY3RpdmUgdG8gZGlzcGxheSBhIHRleHQgYmFkZ2UuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0QmFkZ2VdJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkOiBtYXRCYWRnZURpc2FibGVkJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWJhZGdlJyxcbiAgICAnW2NsYXNzLm1hdC1iYWRnZS1vdmVybGFwXSc6ICdvdmVybGFwJyxcbiAgICAnW2NsYXNzLm1hdC1iYWRnZS1hYm92ZV0nOiAnaXNBYm92ZSgpJyxcbiAgICAnW2NsYXNzLm1hdC1iYWRnZS1iZWxvd10nOiAnIWlzQWJvdmUoKScsXG4gICAgJ1tjbGFzcy5tYXQtYmFkZ2UtYmVmb3JlXSc6ICchaXNBZnRlcigpJyxcbiAgICAnW2NsYXNzLm1hdC1iYWRnZS1hZnRlcl0nOiAnaXNBZnRlcigpJyxcbiAgICAnW2NsYXNzLm1hdC1iYWRnZS1zbWFsbF0nOiAnc2l6ZSA9PT0gXCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLm1hdC1iYWRnZS1tZWRpdW1dJzogJ3NpemUgPT09IFwibWVkaXVtXCInLFxuICAgICdbY2xhc3MubWF0LWJhZGdlLWxhcmdlXSc6ICdzaXplID09PSBcImxhcmdlXCInLFxuICAgICdbY2xhc3MubWF0LWJhZGdlLWhpZGRlbl0nOiAnaGlkZGVuIHx8ICFfaGFzQ29udGVudCcsXG4gICAgJ1tjbGFzcy5tYXQtYmFkZ2UtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0QmFkZ2UgZXh0ZW5kcyBfTWF0QmFkZ2VNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQ2FuRGlzYWJsZSB7XG4gIC8qKiBXaGV0aGVyIHRoZSBiYWRnZSBoYXMgYW55IGNvbnRlbnQuICovXG4gIF9oYXNDb250ZW50ID0gZmFsc2U7XG5cbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgYmFkZ2UuIENhbiBiZSBgcHJpbWFyeWAsIGBhY2NlbnRgLCBvciBgd2FybmAuICovXG4gIEBJbnB1dCgnbWF0QmFkZ2VDb2xvcicpXG4gIGdldCBjb2xvcigpOiBUaGVtZVBhbGV0dGUgeyByZXR1cm4gdGhpcy5fY29sb3I7IH1cbiAgc2V0IGNvbG9yKHZhbHVlOiBUaGVtZVBhbGV0dGUpIHtcbiAgICB0aGlzLl9zZXRDb2xvcih2YWx1ZSk7XG4gICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9jb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBiYWRnZSBzaG91bGQgb3ZlcmxhcCBpdHMgY29udGVudHMgb3Igbm90ICovXG4gIEBJbnB1dCgnbWF0QmFkZ2VPdmVybGFwJylcbiAgZ2V0IG92ZXJsYXAoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9vdmVybGFwOyB9XG4gIHNldCBvdmVybGFwKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX292ZXJsYXAgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgfVxuICBwcml2YXRlIF9vdmVybGFwOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGJhZGdlIHNob3VsZCByZXNpZGUuXG4gICAqIEFjY2VwdHMgYW55IGNvbWJpbmF0aW9uIG9mICdhYm92ZSd8J2JlbG93JyBhbmQgJ2JlZm9yZSd8J2FmdGVyJ1xuICAgKi9cbiAgQElucHV0KCdtYXRCYWRnZVBvc2l0aW9uJykgcG9zaXRpb246IE1hdEJhZGdlUG9zaXRpb24gPSAnYWJvdmUgYWZ0ZXInO1xuXG4gIC8qKiBUaGUgY29udGVudCBmb3IgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgnbWF0QmFkZ2UnKSBjb250ZW50OiBzdHJpbmc7XG5cbiAgLyoqIE1lc3NhZ2UgdXNlZCB0byBkZXNjcmliZSB0aGUgZGVjb3JhdGVkIGVsZW1lbnQgdmlhIGFyaWEtZGVzY3JpYmVkYnkgKi9cbiAgQElucHV0KCdtYXRCYWRnZURlc2NyaXB0aW9uJylcbiAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjsgfVxuICBzZXQgZGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb246IHN0cmluZykge1xuICAgIGlmIChuZXdEZXNjcmlwdGlvbiAhPT0gdGhpcy5fZGVzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IGJhZGdlRWxlbWVudCA9IHRoaXMuX2JhZGdlRWxlbWVudDtcbiAgICAgIHRoaXMuX3VwZGF0ZUhvc3RBcmlhRGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24sIHRoaXMuX2Rlc2NyaXB0aW9uKTtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG5cbiAgICAgIGlmIChiYWRnZUVsZW1lbnQpIHtcbiAgICAgICAgbmV3RGVzY3JpcHRpb24gPyBiYWRnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbmV3RGVzY3JpcHRpb24pIDpcbiAgICAgICAgICAgIGJhZGdlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZztcblxuICAvKiogU2l6ZSBvZiB0aGUgYmFkZ2UuIENhbiBiZSAnc21hbGwnLCAnbWVkaXVtJywgb3IgJ2xhcmdlJy4gKi9cbiAgQElucHV0KCdtYXRCYWRnZVNpemUnKSBzaXplOiBNYXRCYWRnZVNpemUgPSAnbWVkaXVtJztcblxuICAvKiogV2hldGhlciB0aGUgYmFkZ2UgaXMgaGlkZGVuLiAqL1xuICBASW5wdXQoJ21hdEJhZGdlSGlkZGVuJylcbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2hpZGRlbjsgfVxuICBzZXQgaGlkZGVuKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGRlbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICB9XG4gIHByaXZhdGUgX2hpZGRlbjogYm9vbGVhbjtcblxuICAvKiogVW5pcXVlIGlkIGZvciB0aGUgYmFkZ2UgKi9cbiAgX2lkOiBudW1iZXIgPSBuZXh0SWQrKztcblxuICBwcml2YXRlIF9iYWRnZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgIHByaXZhdGUgX2FyaWFEZXNjcmliZXI6IEFyaWFEZXNjcmliZXIsXG4gICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHByaXZhdGUgX2FuaW1hdGlvbk1vZGU/OiBzdHJpbmcpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKG5hdGl2ZUVsZW1lbnQubm9kZVR5cGUgIT09IG5hdGl2ZUVsZW1lbnQuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ21hdEJhZGdlIG11c3QgYmUgYXR0YWNoZWQgdG8gYW4gZWxlbWVudCBub2RlLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBiYWRnZSBpcyBhYm92ZSB0aGUgaG9zdCBvciBub3QgKi9cbiAgaXNBYm92ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5pbmRleE9mKCdiZWxvdycpID09PSAtMTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBiYWRnZSBpcyBhZnRlciB0aGUgaG9zdCBvciBub3QgKi9cbiAgaXNBZnRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5pbmRleE9mKCdiZWZvcmUnKSA9PT0gLTE7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgY29udGVudENoYW5nZSA9IGNoYW5nZXNbJ2NvbnRlbnQnXTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnRDaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5faGFzQ29udGVudCA9IHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YC50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgIHRoaXMuX3VwZGF0ZVRleHRDb250ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc3QgYmFkZ2VFbGVtZW50ID0gdGhpcy5fYmFkZ2VFbGVtZW50O1xuXG4gICAgaWYgKGJhZGdlRWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5fYXJpYURlc2NyaWJlci5yZW1vdmVEZXNjcmlwdGlvbihiYWRnZUVsZW1lbnQsIHRoaXMuZGVzY3JpcHRpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIGNyZWF0aW5nIGEgYmFkZ2UgdGhyb3VnaCB0aGUgUmVuZGVyZXIsIEFuZ3VsYXIgd2lsbCBrZWVwIGl0IGluIGFuIGluZGV4LlxuICAgICAgLy8gV2UgaGF2ZSB0byBkZXN0cm95IGl0IG91cnNlbHZlcywgb3RoZXJ3aXNlIGl0J2xsIGJlIHJldGFpbmVkIGluIG1lbW9yeS5cbiAgICAgIGlmICh0aGlzLl9yZW5kZXJlci5kZXN0cm95Tm9kZSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5kZXN0cm95Tm9kZShiYWRnZUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBlbGVtZW50IGludG8gd2hpY2ggdGhlIGJhZGdlJ3MgY29udGVudCBpcyBiZWluZyByZW5kZXJlZC5cbiAgICogVW5kZWZpbmVkIGlmIHRoZSBlbGVtZW50IGhhc24ndCBiZWVuIGNyZWF0ZWQgKGUuZy4gaWYgdGhlIGJhZGdlIGRvZXNuJ3QgaGF2ZSBjb250ZW50KS5cbiAgICovXG4gIGdldEJhZGdlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JhZGdlRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBJbmplY3RzIGEgc3BhbiBlbGVtZW50IGludG8gdGhlIERPTSB3aXRoIHRoZSBjb250ZW50LiAqL1xuICBwcml2YXRlIF91cGRhdGVUZXh0Q29udGVudCgpOiBIVE1MU3BhbkVsZW1lbnQge1xuICAgIGlmICghdGhpcy5fYmFkZ2VFbGVtZW50KSB7XG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnQgPSB0aGlzLl9jcmVhdGVCYWRnZUVsZW1lbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYmFkZ2VFbGVtZW50O1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgdGhlIGJhZGdlIGVsZW1lbnQgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlQmFkZ2VFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBiYWRnZUVsZW1lbnQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgYWN0aXZlQ2xhc3MgPSAnbWF0LWJhZGdlLWFjdGl2ZSc7XG4gICAgY29uc3QgY29udGVudENsYXNzID0gJ21hdC1iYWRnZS1jb250ZW50JztcblxuICAgIC8vIENsZWFyIGFueSBleGlzdGluZyBiYWRnZXMgd2hpY2ggbWF5IGhhdmUgcGVyc2lzdGVkIGZyb20gYSBzZXJ2ZXItc2lkZSByZW5kZXIuXG4gICAgdGhpcy5fY2xlYXJFeGlzdGluZ0JhZGdlcyhjb250ZW50Q2xhc3MpO1xuICAgIGJhZGdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYG1hdC1iYWRnZS1jb250ZW50LSR7dGhpcy5faWR9YCk7XG4gICAgYmFkZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGVudENsYXNzKTtcbiAgICBiYWRnZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG5cbiAgICBpZiAodGhpcy5fYW5pbWF0aW9uTW9kZSA9PT0gJ05vb3BBbmltYXRpb25zJykge1xuICAgICAgYmFkZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ19tYXQtYW5pbWF0aW9uLW5vb3BhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pIHtcbiAgICAgIGJhZGdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmRlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFkZ2VFbGVtZW50KTtcblxuICAgIC8vIGFuaW1hdGUgaW4gYWZ0ZXIgaW5zZXJ0aW9uXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5fYW5pbWF0aW9uTW9kZSAhPT0gJ05vb3BBbmltYXRpb25zJykge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBiYWRnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhZGdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFkZ2VFbGVtZW50O1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGFyaWEtbGFiZWwgcHJvcGVydHkgb24gdGhlIGVsZW1lbnQgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlSG9zdEFyaWFEZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbjogc3RyaW5nLCBvbGREZXNjcmlwdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gZW5zdXJlIGNvbnRlbnQgYXZhaWxhYmxlIGJlZm9yZSBzZXR0aW5nIGxhYmVsXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuX3VwZGF0ZVRleHRDb250ZW50KCk7XG5cbiAgICBpZiAob2xkRGVzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2FyaWFEZXNjcmliZXIucmVtb3ZlRGVzY3JpcHRpb24oY29udGVudCwgb2xkRGVzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIGlmIChuZXdEZXNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fYXJpYURlc2NyaWJlci5kZXNjcmliZShjb250ZW50LCBuZXdEZXNjcmlwdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqIEFkZHMgY3NzIHRoZW1lIGNsYXNzIGdpdmVuIHRoZSBjb2xvciB0byB0aGUgY29tcG9uZW50IGhvc3QgKi9cbiAgcHJpdmF0ZSBfc2V0Q29sb3IoY29sb3JQYWxldHRlOiBUaGVtZVBhbGV0dGUpIHtcbiAgICBpZiAoY29sb3JQYWxldHRlICE9PSB0aGlzLl9jb2xvcikge1xuICAgICAgaWYgKHRoaXMuX2NvbG9yKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGBtYXQtYmFkZ2UtJHt0aGlzLl9jb2xvcn1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2xvclBhbGV0dGUpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG1hdC1iYWRnZS0ke2NvbG9yUGFsZXR0ZX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYXJzIGFueSBleGlzdGluZyBiYWRnZXMgdGhhdCBtaWdodCBiZSBsZWZ0IG92ZXIgZnJvbSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuICovXG4gIHByaXZhdGUgX2NsZWFyRXhpc3RpbmdCYWRnZXMoY3NzQ2xhc3M6IHN0cmluZykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGNoaWxkQ291bnQgPSBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDtcblxuICAgIC8vIFVzZSBhIHJldmVyc2Ugd2hpbGUsIGJlY2F1c2Ugd2UnbGwgYmUgcmVtb3ZpbmcgZWxlbWVudHMgZnJvbSB0aGUgbGlzdCBhcyB3ZSdyZSBpdGVyYXRpbmcuXG4gICAgd2hpbGUgKGNoaWxkQ291bnQtLSkge1xuICAgICAgY29uc3QgY3VycmVudENoaWxkID0gZWxlbWVudC5jaGlsZHJlbltjaGlsZENvdW50XTtcblxuICAgICAgaWYgKGN1cnJlbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3MpKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoY3VycmVudENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hpZGRlbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3ZlcmxhcDogQm9vbGVhbklucHV0O1xufVxuIl19