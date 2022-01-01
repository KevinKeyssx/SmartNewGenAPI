/**
 * @fileoverview added by tsickle
 * Generated from: src/material/sidenav/sidenav.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, forwardRef, Inject, Input, ViewEncapsulation, QueryList, ElementRef, NgZone, } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MAT_DRAWER_CONTAINER } from './drawer';
import { matDrawerAnimations } from './drawer-animations';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/scrolling';
import * as ɵngcc2 from '@angular/common';

const _c0 = ["*"];
function MatSidenavContainer_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵlistener("click", function MatSidenavContainer_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2._onBackdropClicked(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("mat-drawer-shown", ctx_r0._isShowingBackdrop());
} }
function MatSidenavContainer_mat_sidenav_content_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-sidenav-content", 3);
    ɵngcc0.ɵɵprojection(1, 2);
    ɵngcc0.ɵɵelementEnd();
} }
const _c1 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
const _c2 = ["mat-sidenav", "mat-sidenav-content", "*"];
export class MatSidenavContent extends MatDrawerContent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} container
     * @param {?} elementRef
     * @param {?} scrollDispatcher
     * @param {?} ngZone
     */
    constructor(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
        super(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
    }
}
MatSidenavContent.ɵfac = function MatSidenavContent_Factory(t) { return new (t || MatSidenavContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(forwardRef(( /**
                 * @return {?}
                 */() => MatSidenavContainer))), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ScrollDispatcher), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
MatSidenavContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatSidenavContent, selectors: [["mat-sidenav-content"]], hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"], hostVars: 4, hostBindings: function MatSidenavContent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
    } }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatSidenavContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatSidenavContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: MatSidenavContainer, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => MatSidenavContainer)),] }] },
    { type: ElementRef },
    { type: ScrollDispatcher },
    { type: NgZone }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSidenavContent, [{
        type: Component,
        args: [{
                selector: 'mat-sidenav-content',
                template: '<ng-content></ng-content>',
                host: {
                    'class': 'mat-drawer-content mat-sidenav-content',
                    '[style.margin-left.px]': '_container._contentMargins.left',
                    '[style.margin-right.px]': '_container._contentMargins.right'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: MatSidenavContainer, decorators: [{
                type: Inject,
                args: [forwardRef(( /**
                                     * @return {?}
                                     */() => MatSidenavContainer))]
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.ScrollDispatcher }, { type: ɵngcc0.NgZone }]; }, null); })();
export class MatSidenav extends MatDrawer {
    constructor() {
        super(...arguments);
        this._fixedInViewport = false;
        this._fixedTopGap = 0;
        this._fixedBottomGap = 0;
    }
    /**
     * Whether the sidenav is fixed in the viewport.
     * @return {?}
     */
    get fixedInViewport() { return this._fixedInViewport; }
    /**
     * @param {?} value
     * @return {?}
     */
    set fixedInViewport(value) { this._fixedInViewport = coerceBooleanProperty(value); }
    /**
     * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
     * mode.
     * @return {?}
     */
    get fixedTopGap() { return this._fixedTopGap; }
    /**
     * @param {?} value
     * @return {?}
     */
    set fixedTopGap(value) { this._fixedTopGap = coerceNumberProperty(value); }
    /**
     * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
     * fixed mode.
     * @return {?}
     */
    get fixedBottomGap() { return this._fixedBottomGap; }
    /**
     * @param {?} value
     * @return {?}
     */
    set fixedBottomGap(value) { this._fixedBottomGap = coerceNumberProperty(value); }
}
MatSidenav.ɵfac = function MatSidenav_Factory(t) { return ɵMatSidenav_BaseFactory(t || MatSidenav); };
MatSidenav.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatSidenav, selectors: [["mat-sidenav"]], hostAttrs: ["tabIndex", "-1", 1, "mat-drawer", "mat-sidenav"], hostVars: 17, hostBindings: function MatSidenav_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("align", null);
        ɵngcc0.ɵɵstyleProp("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
        ɵngcc0.ɵɵclassProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened)("mat-sidenav-fixed", ctx.fixedInViewport);
    } }, inputs: { fixedInViewport: "fixedInViewport", fixedTopGap: "fixedTopGap", fixedBottomGap: "fixedBottomGap" }, exportAs: ["matSidenav"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-drawer-inner-container"]], template: function MatSidenav_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, data: { animation: [matDrawerAnimations.transformDrawer] }, changeDetection: 0 });
MatSidenav.propDecorators = {
    fixedInViewport: [{ type: Input }],
    fixedTopGap: [{ type: Input }],
    fixedBottomGap: [{ type: Input }]
};
const ɵMatSidenav_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatSidenav);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSidenav, [{
        type: Component,
        args: [{
                selector: 'mat-sidenav',
                exportAs: 'matSidenav',
                template: "<div class=\"mat-drawer-inner-container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                animations: [matDrawerAnimations.transformDrawer],
                host: {
                    'class': 'mat-drawer mat-sidenav',
                    'tabIndex': '-1',
                    // must prevent the browser from aligning text based on value
                    '[attr.align]': 'null',
                    '[class.mat-drawer-end]': 'position === "end"',
                    '[class.mat-drawer-over]': 'mode === "over"',
                    '[class.mat-drawer-push]': 'mode === "push"',
                    '[class.mat-drawer-side]': 'mode === "side"',
                    '[class.mat-drawer-opened]': 'opened',
                    '[class.mat-sidenav-fixed]': 'fixedInViewport',
                    '[style.top.px]': 'fixedInViewport ? fixedTopGap : null',
                    '[style.bottom.px]': 'fixedInViewport ? fixedBottomGap : null'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { fixedInViewport: [{
            type: Input
        }], fixedTopGap: [{
            type: Input
        }], fixedBottomGap: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatSidenav.ngAcceptInputType_fixedInViewport;
    /** @type {?} */
    MatSidenav.ngAcceptInputType_fixedTopGap;
    /** @type {?} */
    MatSidenav.ngAcceptInputType_fixedBottomGap;
    /**
     * @type {?}
     * @private
     */
    MatSidenav.prototype._fixedInViewport;
    /**
     * @type {?}
     * @private
     */
    MatSidenav.prototype._fixedTopGap;
    /**
     * @type {?}
     * @private
     */
    MatSidenav.prototype._fixedBottomGap;
}
export class MatSidenavContainer extends MatDrawerContainer {
}
MatSidenavContainer.ɵfac = function MatSidenavContainer_Factory(t) { return ɵMatSidenavContainer_BaseFactory(t || MatSidenavContainer); };
MatSidenavContainer.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatSidenavContainer, selectors: [["mat-sidenav-container"]], contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatSidenavContent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatSidenav, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._content = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._allDrawers = _t);
    } }, hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"], hostVars: 2, hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
    } }, exportAs: ["matSidenavContainer"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: MAT_DRAWER_CONTAINER,
                useExisting: MatSidenavContainer
            }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 4, vars: 2, consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], ["cdkScrollable", "", 4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"], ["cdkScrollable", ""]], template: function MatSidenavContainer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵtemplate(0, MatSidenavContainer_div_0_Template, 1, 2, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵprojection(2, 1);
        ɵngcc0.ɵɵtemplate(3, MatSidenavContainer_mat_sidenav_content_3_Template, 2, 0, "mat-sidenav-content", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasBackdrop);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", !ctx._content);
    } }, directives: [ɵngcc2.NgIf, MatSidenavContent, ɵngcc1.CdkScrollable], styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"], encapsulation: 2, changeDetection: 0 });
MatSidenavContainer.propDecorators = {
    _allDrawers: [{ type: ContentChildren, args: [MatSidenav, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }],
    _content: [{ type: ContentChild, args: [MatSidenavContent,] }]
};
const ɵMatSidenavContainer_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatSidenavContainer);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSidenavContainer, [{
        type: Component,
        args: [{
                selector: 'mat-sidenav-container',
                exportAs: 'matSidenavContainer',
                template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-sidenav\"></ng-content>\n\n<ng-content select=\"mat-sidenav-content\">\n</ng-content>\n<mat-sidenav-content *ngIf=\"!_content\" cdkScrollable>\n  <ng-content></ng-content>\n</mat-sidenav-content>\n",
                host: {
                    'class': 'mat-drawer-container mat-sidenav-container',
                    '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{
                        provide: MAT_DRAWER_CONTAINER,
                        useExisting: MatSidenavContainer
                    }],
                styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"]
            }]
    }], null, { _allDrawers: [{
            type: ContentChildren,
            args: [MatSidenav, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                }]
        }], _content: [{
            type: ContentChild,
            args: [MatSidenavContent]
        }] }); })();
if (false) {
    /** @type {?} */
    MatSidenavContainer.ngAcceptInputType_hasBackdrop;
    /** @type {?} */
    MatSidenavContainer.prototype._allDrawers;
    /** @type {?} */
    MatSidenavContainer.prototype._content;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUMvRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBRUwscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUVyQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3hELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7QUFDdkQ7QUFBUTtBQUNxQjtBQUNoQjtBQUE2QjtBQUFtQztBQUM1RDtBQUFRLElBSHZCLFlBQ0ksaUJBQW9DLEVBQ1csU0FBOEIsRUFDN0UsVUFBbUMsRUFDbkMsZ0JBQWtDLEVBQ2xDLE1BQWM7QUFDcEIsUUFBSSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RSxJQUFFLENBQUM7QUFDSDs2Q0FwQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxxQkFBcUIsa0JBQy9CLFFBQVEsRUFBRSwyQkFBMkIsa0JBQ3JDLElBQUksRUFBRTtrQkFDSixPQUFPLEVBQUU7b0NBQXdDLHNCQUNqRCx3QkFB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USxJQTNCOUIsc0NBQWlDO0FBQ25DO0FBRUM7QUFBaUI7QUFBZ0I7QUFBUSxJQU14QyxrQ0FBeUI7QUFDM0I7QUFFQztBQUFpQjtBQUFnQjtBQUFRLElBTXhDLHFDQUE0QjtBQUM5QjtBQXdCQSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsa0JBQWtCO0FBQzNEOytDQWxCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHVCQUF1QixrQkFDakM7R0FBUSxFQUFFLHFCQUFxQixrQkFDL0I7Ozs7O3lEQUFxQyxrQkFFckMsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSw0Q0FBNEM7T0FDckQsZ0RBQWdELEVBQUUsbUJBQW1CLG1CQUN0RSxrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtVQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsU0FBUyxFQUFFLENBQUM7VUFDVixPQUFPLEVBQUUsb0JBQW9CLDBCQUM3QixXQUFXLEVBQUU7YUFBbUIsc0JBQ2pDLENBQUM7Ozs7Ozs7Ozs7OztzMUNBRUgsdzdCQUNHO0FBQUM7QUFBdUMsMEJBQ3pDLGVBQWUsU0FBQyxVQUFVLEVBQUU7QUFDL0I7QUFDZ0I7QUFHWCxvQkFGRCxXQUFXLEVBQUUsSUFBSTtBQUNyQixpQkFBRztBQUNFLHVCQUVGLFlBQVksU0FBQyxpQkFBaUI7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBYTtBQUMzQyxJQUFWLGtEQUFtRDtBQUNyRDtBQUNtQixJQVZqQiwwQ0FLbUM7QUFDckM7QUFDb0IsSUFBbEIsdUNBQTZEO0FBQy9EO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgUXVlcnlMaXN0LFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREcmF3ZXIsIE1hdERyYXdlckNvbnRhaW5lciwgTWF0RHJhd2VyQ29udGVudCwgTUFUX0RSQVdFUl9DT05UQUlORVJ9IGZyb20gJy4vZHJhd2VyJztcbmltcG9ydCB7bWF0RHJhd2VyQW5pbWF0aW9uc30gZnJvbSAnLi9kcmF3ZXItYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBCb29sZWFuSW5wdXQsXG4gIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSxcbiAgY29lcmNlTnVtYmVyUHJvcGVydHksXG4gIE51bWJlcklucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1Njcm9sbERpc3BhdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1zaWRlbmF2LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1kcmF3ZXItY29udGVudCBtYXQtc2lkZW5hdi1jb250ZW50JyxcbiAgICAnW3N0eWxlLm1hcmdpbi1sZWZ0LnB4XSc6ICdfY29udGFpbmVyLl9jb250ZW50TWFyZ2lucy5sZWZ0JyxcbiAgICAnW3N0eWxlLm1hcmdpbi1yaWdodC5weF0nOiAnX2NvbnRhaW5lci5fY29udGVudE1hcmdpbnMucmlnaHQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U2lkZW5hdkNvbnRlbnQgZXh0ZW5kcyBNYXREcmF3ZXJDb250ZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTWF0U2lkZW5hdkNvbnRhaW5lcikpIGNvbnRhaW5lcjogTWF0U2lkZW5hdkNvbnRhaW5lcixcbiAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgc2Nyb2xsRGlzcGF0Y2hlcjogU2Nyb2xsRGlzcGF0Y2hlcixcbiAgICAgIG5nWm9uZTogTmdab25lKSB7XG4gICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGNvbnRhaW5lciwgZWxlbWVudFJlZiwgc2Nyb2xsRGlzcGF0Y2hlciwgbmdab25lKTtcbiAgfVxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1zaWRlbmF2JyxcbiAgZXhwb3J0QXM6ICdtYXRTaWRlbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICdkcmF3ZXIuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFttYXREcmF3ZXJBbmltYXRpb25zLnRyYW5zZm9ybURyYXdlcl0sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWRyYXdlciBtYXQtc2lkZW5hdicsXG4gICAgJ3RhYkluZGV4JzogJy0xJyxcbiAgICAvLyBtdXN0IHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSBhbGlnbmluZyB0ZXh0IGJhc2VkIG9uIHZhbHVlXG4gICAgJ1thdHRyLmFsaWduXSc6ICdudWxsJyxcbiAgICAnW2NsYXNzLm1hdC1kcmF3ZXItZW5kXSc6ICdwb3NpdGlvbiA9PT0gXCJlbmRcIicsXG4gICAgJ1tjbGFzcy5tYXQtZHJhd2VyLW92ZXJdJzogJ21vZGUgPT09IFwib3ZlclwiJyxcbiAgICAnW2NsYXNzLm1hdC1kcmF3ZXItcHVzaF0nOiAnbW9kZSA9PT0gXCJwdXNoXCInLFxuICAgICdbY2xhc3MubWF0LWRyYXdlci1zaWRlXSc6ICdtb2RlID09PSBcInNpZGVcIicsXG4gICAgJ1tjbGFzcy5tYXQtZHJhd2VyLW9wZW5lZF0nOiAnb3BlbmVkJyxcbiAgICAnW2NsYXNzLm1hdC1zaWRlbmF2LWZpeGVkXSc6ICdmaXhlZEluVmlld3BvcnQnLFxuICAgICdbc3R5bGUudG9wLnB4XSc6ICdmaXhlZEluVmlld3BvcnQgPyBmaXhlZFRvcEdhcCA6IG51bGwnLFxuICAgICdbc3R5bGUuYm90dG9tLnB4XSc6ICdmaXhlZEluVmlld3BvcnQgPyBmaXhlZEJvdHRvbUdhcCA6IG51bGwnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U2lkZW5hdiBleHRlbmRzIE1hdERyYXdlciB7XG4gIC8qKiBXaGV0aGVyIHRoZSBzaWRlbmF2IGlzIGZpeGVkIGluIHRoZSB2aWV3cG9ydC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGZpeGVkSW5WaWV3cG9ydCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZpeGVkSW5WaWV3cG9ydDsgfVxuICBzZXQgZml4ZWRJblZpZXdwb3J0KHZhbHVlKSB7IHRoaXMuX2ZpeGVkSW5WaWV3cG9ydCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgcHJpdmF0ZSBfZml4ZWRJblZpZXdwb3J0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBnYXAgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBzaWRlbmF2IGFuZCB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydCB3aGVuIHRoZSBzaWRlbmF2IGlzIGluIGZpeGVkXG4gICAqIG1vZGUuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZml4ZWRUb3BHYXAoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2ZpeGVkVG9wR2FwOyB9XG4gIHNldCBmaXhlZFRvcEdhcCh2YWx1ZSkgeyB0aGlzLl9maXhlZFRvcEdhcCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9maXhlZFRvcEdhcCA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBnYXAgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSBzaWRlbmF2IGFuZCB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydCB3aGVuIHRoZSBzaWRlbmF2IGlzIGluXG4gICAqIGZpeGVkIG1vZGUuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZml4ZWRCb3R0b21HYXAoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2ZpeGVkQm90dG9tR2FwOyB9XG4gIHNldCBmaXhlZEJvdHRvbUdhcCh2YWx1ZSkgeyB0aGlzLl9maXhlZEJvdHRvbUdhcCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9maXhlZEJvdHRvbUdhcCA9IDA7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpeGVkSW5WaWV3cG9ydDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml4ZWRUb3BHYXA6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml4ZWRCb3R0b21HYXA6IE51bWJlcklucHV0O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1zaWRlbmF2LWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAnbWF0U2lkZW5hdkNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1jb250YWluZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkcmF3ZXIuY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWRyYXdlci1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGFpbmVyJyxcbiAgICAnW2NsYXNzLm1hdC1kcmF3ZXItY29udGFpbmVyLWV4cGxpY2l0LWJhY2tkcm9wXSc6ICdfYmFja2Ryb3BPdmVycmlkZScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTUFUX0RSQVdFUl9DT05UQUlORVIsXG4gICAgdXNlRXhpc3Rpbmc6IE1hdFNpZGVuYXZDb250YWluZXJcbiAgfV1cblxufSlcbmV4cG9ydCBjbGFzcyBNYXRTaWRlbmF2Q29udGFpbmVyIGV4dGVuZHMgTWF0RHJhd2VyQ29udGFpbmVyIHtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRTaWRlbmF2LCB7XG4gICAgLy8gV2UgbmVlZCB0byB1c2UgYGRlc2NlbmRhbnRzOiB0cnVlYCwgYmVjYXVzZSBJdnkgd2lsbCBubyBsb25nZXIgbWF0Y2hcbiAgICAvLyBpbmRpcmVjdCBkZXNjZW5kYW50cyBpZiBpdCdzIGxlZnQgYXMgZmFsc2UuXG4gICAgZGVzY2VuZGFudHM6IHRydWVcbiAgfSlcbiAgX2FsbERyYXdlcnM6IFF1ZXJ5TGlzdDxNYXRTaWRlbmF2PjtcblxuICBAQ29udGVudENoaWxkKE1hdFNpZGVuYXZDb250ZW50KSBfY29udGVudDogTWF0U2lkZW5hdkNvbnRlbnQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oYXNCYWNrZHJvcDogQm9vbGVhbklucHV0O1xufVxuIl19