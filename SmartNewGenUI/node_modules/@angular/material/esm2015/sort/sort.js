/**
 * @fileoverview added by tsickle
 * Generated from: src/material/sort/sort.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, EventEmitter, Input, isDevMode, Output, } from '@angular/core';
import { mixinDisabled, mixinInitialized, } from '@angular/material/core';
import { Subject } from 'rxjs';
import { getSortDuplicateSortableIdError, getSortHeaderMissingIdError, getSortInvalidDirectionError, } from './sort-errors';
/**
 * Interface for a directive that holds sorting state consumed by `MatSortHeader`.
 * @record
 */
import * as ɵngcc0 from '@angular/core';
export function MatSortable() { }
if (false) {
    /**
     * The id of the column being sorted.
     * @type {?}
     */
    MatSortable.prototype.id;
    /**
     * Starting sort direction.
     * @type {?}
     */
    MatSortable.prototype.start;
    /**
     * Whether to disable clearing the sorting state.
     * @type {?}
     */
    MatSortable.prototype.disableClear;
}
/**
 * The current sort state.
 * @record
 */
export function Sort() { }
if (false) {
    /**
     * The id of the column being sorted.
     * @type {?}
     */
    Sort.prototype.active;
    /**
     * The sort direction.
     * @type {?}
     */
    Sort.prototype.direction;
}
// Boilerplate for applying mixins to MatSort.
/**
 * \@docs-private
 */
class MatSortBase {
}
/** @type {?} */
const _MatSortMixinBase = mixinInitialized(mixinDisabled(MatSortBase));
/**
 * Container for MatSortables to manage the sort state and provide default sort parameters.
 */
export class MatSort extends _MatSortMixinBase {
    constructor() {
        super(...arguments);
        /**
         * Collection of all registered sortables that this directive manages.
         */
        this.sortables = new Map();
        /**
         * Used to notify any child components listening to state changes.
         */
        this._stateChanges = new Subject();
        /**
         * The direction to set when an MatSortable is initially sorted.
         * May be overriden by the MatSortable's sort start.
         */
        this.start = 'asc';
        this._direction = '';
        /**
         * Event emitted when the user changes either the active sort or sort direction.
         */
        this.sortChange = new EventEmitter();
    }
    /**
     * The sort direction of the currently active MatSortable.
     * @return {?}
     */
    get direction() { return this._direction; }
    /**
     * @param {?} direction
     * @return {?}
     */
    set direction(direction) {
        if (isDevMode() && direction && direction !== 'asc' && direction !== 'desc') {
            throw getSortInvalidDirectionError(direction);
        }
        this._direction = direction;
    }
    /**
     * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
     * May be overriden by the MatSortable's disable clear input.
     * @return {?}
     */
    get disableClear() { return this._disableClear; }
    /**
     * @param {?} v
     * @return {?}
     */
    set disableClear(v) { this._disableClear = coerceBooleanProperty(v); }
    /**
     * Register function to be used by the contained MatSortables. Adds the MatSortable to the
     * collection of MatSortables.
     * @param {?} sortable
     * @return {?}
     */
    register(sortable) {
        if (!sortable.id) {
            throw getSortHeaderMissingIdError();
        }
        if (this.sortables.has(sortable.id)) {
            throw getSortDuplicateSortableIdError(sortable.id);
        }
        this.sortables.set(sortable.id, sortable);
    }
    /**
     * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
     * collection of contained MatSortables.
     * @param {?} sortable
     * @return {?}
     */
    deregister(sortable) {
        this.sortables.delete(sortable.id);
    }
    /**
     * Sets the active sort id and determines the new sort direction.
     * @param {?} sortable
     * @return {?}
     */
    sort(sortable) {
        if (this.active != sortable.id) {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
        }
        else {
            this.direction = this.getNextSortDirection(sortable);
        }
        this.sortChange.emit({ active: this.active, direction: this.direction });
    }
    /**
     * Returns the next sort direction of the active sortable, checking for potential overrides.
     * @param {?} sortable
     * @return {?}
     */
    getNextSortDirection(sortable) {
        if (!sortable) {
            return '';
        }
        // Get the sort direction cycle with the potential sortable overrides.
        /** @type {?} */
        const disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
        /** @type {?} */
        let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
        // Get and return the next direction in the cycle
        /** @type {?} */
        let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._markInitialized();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
MatSort.ɵfac = function MatSort_Factory(t) { return ɵMatSort_BaseFactory(t || MatSort); };
MatSort.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatSort, selectors: [["", "matSort", ""]], hostAttrs: [1, "mat-sort"], inputs: { disabled: ["matSortDisabled", "disabled"], start: ["matSortStart", "start"], direction: ["matSortDirection", "direction"], disableClear: ["matSortDisableClear", "disableClear"], active: ["matSortActive", "active"] }, outputs: { sortChange: "matSortChange" }, exportAs: ["matSort"], features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature] });
MatSort.propDecorators = {
    active: [{ type: Input, args: ['matSortActive',] }],
    start: [{ type: Input, args: ['matSortStart',] }],
    direction: [{ type: Input, args: ['matSortDirection',] }],
    disableClear: [{ type: Input, args: ['matSortDisableClear',] }],
    sortChange: [{ type: Output, args: ['matSortChange',] }]
};
const ɵMatSort_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatSort);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSort, [{
        type: Directive,
        args: [{
                selector: '[matSort]',
                exportAs: 'matSort',
                host: { 'class': 'mat-sort' },
                inputs: ['disabled: matSortDisabled']
            }]
    }], null, { start: [{
            type: Input,
            args: ['matSortStart']
        }], sortChange: [{
            type: Output,
            args: ['matSortChange']
        }], direction: [{
            type: Input,
            args: ['matSortDirection']
        }], disableClear: [{
            type: Input,
            args: ['matSortDisableClear']
        }], active: [{
            type: Input,
            args: ['matSortActive']
        }] }); })();
if (false) {
    /** @type {?} */
    MatSort.ngAcceptInputType_disableClear;
    /** @type {?} */
    MatSort.ngAcceptInputType_disabled;
    /**
     * Collection of all registered sortables that this directive manages.
     * @type {?}
     */
    MatSort.prototype.sortables;
    /**
     * Used to notify any child components listening to state changes.
     * @type {?}
     */
    MatSort.prototype._stateChanges;
    /**
     * The id of the most recently sorted MatSortable.
     * @type {?}
     */
    MatSort.prototype.active;
    /**
     * The direction to set when an MatSortable is initially sorted.
     * May be overriden by the MatSortable's sort start.
     * @type {?}
     */
    MatSort.prototype.start;
    /**
     * @type {?}
     * @private
     */
    MatSort.prototype._direction;
    /**
     * @type {?}
     * @private
     */
    MatSort.prototype._disableClear;
    /**
     * Event emitted when the user changes either the active sort or sort direction.
     * @type {?}
     */
    MatSort.prototype.sortChange;
}
/**
 * Returns the sort direction cycle to use given the provided parameters of order and clear.
 * @param {?} start
 * @param {?} disableClear
 * @return {?}
 */
function getSortDirectionCycle(start, disableClear) {
    /** @type {?} */
    let sortOrder = ['asc', 'desc'];
    if (start == 'desc') {
        sortOrder.reverse();
    }
    if (!disableClear) {
        sortOrder.push('');
    }
    return sortOrder;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NvcnQvc29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUlULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBS0wsYUFBYSxFQUNiLGdCQUFnQixHQUNqQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFN0IsT0FBTyxFQUNMLCtCQUErQixFQUMvQiwyQkFBMkIsRUFDM0IsNEJBQTRCLEdBQzdCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCO0FBQ0c7QUFBbUY7QUFDNUU7O0FBQVYsaUNBU0M7QUFDRDtBQUNZO0FBQVE7QUFFYjtBQUFpQjtBQUFRLElBWDlCLHlCQUFXO0FBQ2I7QUFDTztBQUNGO0FBQWlCO0FBRWxCLElBRkYsNEJBQXNCO0FBQ3hCO0FBQ087QUFDRjtBQUFpQjtBQUdwQixJQUhBLG1DQUFzQjtBQUN4QjtBQUNBO0FBQ0c7QUFBMkI7QUFDcEI7QUFBViwwQkFNQztBQUNEO0FBQ1k7QUFBUTtBQUNMO0FBQ0o7QUFBUSxJQVJqQixzQkFBZTtBQUNqQjtBQUNPO0FBQ0Y7QUFBaUI7QUFFdEIsSUFGRSx5QkFBeUI7QUFDM0I7QUFDQTtBQUM4QztBQUMzQztBQUNIO0FBQUEsTUFBTSxXQUFXO0FBQUcsQ0FBQTtBQUNwQjtBQUFpQixNQUFYLGlCQUFpQixHQUNuQixnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEQ7QUFDRztBQUE0RjtBQU8vRixNQUFNLE9BQU8sT0FBUSxTQUFRLGlCQUFpQjtBQUM1QyxJQVBGO0FBQ0c7QUFDSTtBQUFZO0FBSWxCO0FBQVks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QUMsQ0FBQztBQUFDLEtBQUM7QUFDNUMsSUFDRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgaXNEZXZNb2RlLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuRGlzYWJsZSxcbiAgQ2FuRGlzYWJsZUN0b3IsXG4gIEhhc0luaXRpYWxpemVkLFxuICBIYXNJbml0aWFsaXplZEN0b3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluSW5pdGlhbGl6ZWQsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7U29ydERpcmVjdGlvbn0gZnJvbSAnLi9zb3J0LWRpcmVjdGlvbic7XG5pbXBvcnQge1xuICBnZXRTb3J0RHVwbGljYXRlU29ydGFibGVJZEVycm9yLFxuICBnZXRTb3J0SGVhZGVyTWlzc2luZ0lkRXJyb3IsXG4gIGdldFNvcnRJbnZhbGlkRGlyZWN0aW9uRXJyb3IsXG59IGZyb20gJy4vc29ydC1lcnJvcnMnO1xuXG4vKiogSW50ZXJmYWNlIGZvciBhIGRpcmVjdGl2ZSB0aGF0IGhvbGRzIHNvcnRpbmcgc3RhdGUgY29uc3VtZWQgYnkgYE1hdFNvcnRIZWFkZXJgLiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXRTb3J0YWJsZSB7XG4gIC8qKiBUaGUgaWQgb2YgdGhlIGNvbHVtbiBiZWluZyBzb3J0ZWQuICovXG4gIGlkOiBzdHJpbmc7XG5cbiAgLyoqIFN0YXJ0aW5nIHNvcnQgZGlyZWN0aW9uLiAqL1xuICBzdGFydDogJ2FzYycgfCAnZGVzYyc7XG5cbiAgLyoqIFdoZXRoZXIgdG8gZGlzYWJsZSBjbGVhcmluZyB0aGUgc29ydGluZyBzdGF0ZS4gKi9cbiAgZGlzYWJsZUNsZWFyOiBib29sZWFuO1xufVxuXG4vKiogVGhlIGN1cnJlbnQgc29ydCBzdGF0ZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gIC8qKiBUaGUgaWQgb2YgdGhlIGNvbHVtbiBiZWluZyBzb3J0ZWQuICovXG4gIGFjdGl2ZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgc29ydCBkaXJlY3Rpb24uICovXG4gIGRpcmVjdGlvbjogU29ydERpcmVjdGlvbjtcbn1cblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBNYXRTb3J0LlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIE1hdFNvcnRCYXNlIHt9XG5jb25zdCBfTWF0U29ydE1peGluQmFzZTogSGFzSW5pdGlhbGl6ZWRDdG9yICYgQ2FuRGlzYWJsZUN0b3IgJiB0eXBlb2YgTWF0U29ydEJhc2UgPVxuICAgIG1peGluSW5pdGlhbGl6ZWQobWl4aW5EaXNhYmxlZChNYXRTb3J0QmFzZSkpO1xuXG4vKiogQ29udGFpbmVyIGZvciBNYXRTb3J0YWJsZXMgdG8gbWFuYWdlIHRoZSBzb3J0IHN0YXRlIGFuZCBwcm92aWRlIGRlZmF1bHQgc29ydCBwYXJhbWV0ZXJzLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdFNvcnRdJyxcbiAgZXhwb3J0QXM6ICdtYXRTb3J0JyxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtc29ydCd9LFxuICBpbnB1dHM6IFsnZGlzYWJsZWQ6IG1hdFNvcnREaXNhYmxlZCddXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNvcnQgZXh0ZW5kcyBfTWF0U29ydE1peGluQmFzZVxuICAgIGltcGxlbWVudHMgQ2FuRGlzYWJsZSwgSGFzSW5pdGlhbGl6ZWQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xuICAvKiogQ29sbGVjdGlvbiBvZiBhbGwgcmVnaXN0ZXJlZCBzb3J0YWJsZXMgdGhhdCB0aGlzIGRpcmVjdGl2ZSBtYW5hZ2VzLiAqL1xuICBzb3J0YWJsZXMgPSBuZXcgTWFwPHN0cmluZywgTWF0U29ydGFibGU+KCk7XG5cbiAgLyoqIFVzZWQgdG8gbm90aWZ5IGFueSBjaGlsZCBjb21wb25lbnRzIGxpc3RlbmluZyB0byBzdGF0ZSBjaGFuZ2VzLiAqL1xuICByZWFkb25seSBfc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogVGhlIGlkIG9mIHRoZSBtb3N0IHJlY2VudGx5IHNvcnRlZCBNYXRTb3J0YWJsZS4gKi9cbiAgQElucHV0KCdtYXRTb3J0QWN0aXZlJykgYWN0aXZlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rpb24gdG8gc2V0IHdoZW4gYW4gTWF0U29ydGFibGUgaXMgaW5pdGlhbGx5IHNvcnRlZC5cbiAgICogTWF5IGJlIG92ZXJyaWRlbiBieSB0aGUgTWF0U29ydGFibGUncyBzb3J0IHN0YXJ0LlxuICAgKi9cbiAgQElucHV0KCdtYXRTb3J0U3RhcnQnKSBzdGFydDogJ2FzYycgfCAnZGVzYycgPSAnYXNjJztcblxuICAvKiogVGhlIHNvcnQgZGlyZWN0aW9uIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIE1hdFNvcnRhYmxlLiAqL1xuICBASW5wdXQoJ21hdFNvcnREaXJlY3Rpb24nKVxuICBnZXQgZGlyZWN0aW9uKCk6IFNvcnREaXJlY3Rpb24geyByZXR1cm4gdGhpcy5fZGlyZWN0aW9uOyB9XG4gIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpICYmIGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gIT09ICdhc2MnICYmIGRpcmVjdGlvbiAhPT0gJ2Rlc2MnKSB7XG4gICAgICB0aHJvdyBnZXRTb3J0SW52YWxpZERpcmVjdGlvbkVycm9yKGRpcmVjdGlvbik7XG4gICAgfVxuICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuICBwcml2YXRlIF9kaXJlY3Rpb246IFNvcnREaXJlY3Rpb24gPSAnJztcblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNhYmxlIHRoZSB1c2VyIGZyb20gY2xlYXJpbmcgdGhlIHNvcnQgYnkgZmluaXNoaW5nIHRoZSBzb3J0IGRpcmVjdGlvbiBjeWNsZS5cbiAgICogTWF5IGJlIG92ZXJyaWRlbiBieSB0aGUgTWF0U29ydGFibGUncyBkaXNhYmxlIGNsZWFyIGlucHV0LlxuICAgKi9cbiAgQElucHV0KCdtYXRTb3J0RGlzYWJsZUNsZWFyJylcbiAgZ2V0IGRpc2FibGVDbGVhcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVDbGVhcjsgfVxuICBzZXQgZGlzYWJsZUNsZWFyKHY6IGJvb2xlYW4pIHsgdGhpcy5fZGlzYWJsZUNsZWFyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpOyB9XG4gIHByaXZhdGUgX2Rpc2FibGVDbGVhcjogYm9vbGVhbjtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNoYW5nZXMgZWl0aGVyIHRoZSBhY3RpdmUgc29ydCBvciBzb3J0IGRpcmVjdGlvbi4gKi9cbiAgQE91dHB1dCgnbWF0U29ydENoYW5nZScpIHJlYWRvbmx5IHNvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTb3J0PiA9IG5ldyBFdmVudEVtaXR0ZXI8U29ydD4oKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgZnVuY3Rpb24gdG8gYmUgdXNlZCBieSB0aGUgY29udGFpbmVkIE1hdFNvcnRhYmxlcy4gQWRkcyB0aGUgTWF0U29ydGFibGUgdG8gdGhlXG4gICAqIGNvbGxlY3Rpb24gb2YgTWF0U29ydGFibGVzLlxuICAgKi9cbiAgcmVnaXN0ZXIoc29ydGFibGU6IE1hdFNvcnRhYmxlKTogdm9pZCB7XG4gICAgaWYgKCFzb3J0YWJsZS5pZCkge1xuICAgICAgdGhyb3cgZ2V0U29ydEhlYWRlck1pc3NpbmdJZEVycm9yKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc29ydGFibGVzLmhhcyhzb3J0YWJsZS5pZCkpIHtcbiAgICAgIHRocm93IGdldFNvcnREdXBsaWNhdGVTb3J0YWJsZUlkRXJyb3Ioc29ydGFibGUuaWQpO1xuICAgIH1cbiAgICB0aGlzLnNvcnRhYmxlcy5zZXQoc29ydGFibGUuaWQsIHNvcnRhYmxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgYnkgdGhlIGNvbnRhaW5lZCBNYXRTb3J0YWJsZXMuIFJlbW92ZXMgdGhlIE1hdFNvcnRhYmxlIGZyb20gdGhlXG4gICAqIGNvbGxlY3Rpb24gb2YgY29udGFpbmVkIE1hdFNvcnRhYmxlcy5cbiAgICovXG4gIGRlcmVnaXN0ZXIoc29ydGFibGU6IE1hdFNvcnRhYmxlKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0YWJsZXMuZGVsZXRlKHNvcnRhYmxlLmlkKTtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBhY3RpdmUgc29ydCBpZCBhbmQgZGV0ZXJtaW5lcyB0aGUgbmV3IHNvcnQgZGlyZWN0aW9uLiAqL1xuICBzb3J0KHNvcnRhYmxlOiBNYXRTb3J0YWJsZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAhPSBzb3J0YWJsZS5pZCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSBzb3J0YWJsZS5pZDtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gc29ydGFibGUuc3RhcnQgPyBzb3J0YWJsZS5zdGFydCA6IHRoaXMuc3RhcnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nZXROZXh0U29ydERpcmVjdGlvbihzb3J0YWJsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoe2FjdGl2ZTogdGhpcy5hY3RpdmUsIGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb259KTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBuZXh0IHNvcnQgZGlyZWN0aW9uIG9mIHRoZSBhY3RpdmUgc29ydGFibGUsIGNoZWNraW5nIGZvciBwb3RlbnRpYWwgb3ZlcnJpZGVzLiAqL1xuICBnZXROZXh0U29ydERpcmVjdGlvbihzb3J0YWJsZTogTWF0U29ydGFibGUpOiBTb3J0RGlyZWN0aW9uIHtcbiAgICBpZiAoIXNvcnRhYmxlKSB7IHJldHVybiAnJzsgfVxuXG4gICAgLy8gR2V0IHRoZSBzb3J0IGRpcmVjdGlvbiBjeWNsZSB3aXRoIHRoZSBwb3RlbnRpYWwgc29ydGFibGUgb3ZlcnJpZGVzLlxuICAgIGNvbnN0IGRpc2FibGVDbGVhciA9IHNvcnRhYmxlLmRpc2FibGVDbGVhciAhPSBudWxsID8gc29ydGFibGUuZGlzYWJsZUNsZWFyIDogdGhpcy5kaXNhYmxlQ2xlYXI7XG4gICAgbGV0IHNvcnREaXJlY3Rpb25DeWNsZSA9IGdldFNvcnREaXJlY3Rpb25DeWNsZShzb3J0YWJsZS5zdGFydCB8fCB0aGlzLnN0YXJ0LCBkaXNhYmxlQ2xlYXIpO1xuXG4gICAgLy8gR2V0IGFuZCByZXR1cm4gdGhlIG5leHQgZGlyZWN0aW9uIGluIHRoZSBjeWNsZVxuICAgIGxldCBuZXh0RGlyZWN0aW9uSW5kZXggPSBzb3J0RGlyZWN0aW9uQ3ljbGUuaW5kZXhPZih0aGlzLmRpcmVjdGlvbikgKyAxO1xuICAgIGlmIChuZXh0RGlyZWN0aW9uSW5kZXggPj0gc29ydERpcmVjdGlvbkN5Y2xlLmxlbmd0aCkgeyBuZXh0RGlyZWN0aW9uSW5kZXggPSAwOyB9XG4gICAgcmV0dXJuIHNvcnREaXJlY3Rpb25DeWNsZVtuZXh0RGlyZWN0aW9uSW5kZXhdO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fbWFya0luaXRpYWxpemVkKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZUNsZWFyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuXG4vKiogUmV0dXJucyB0aGUgc29ydCBkaXJlY3Rpb24gY3ljbGUgdG8gdXNlIGdpdmVuIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXJzIG9mIG9yZGVyIGFuZCBjbGVhci4gKi9cbmZ1bmN0aW9uIGdldFNvcnREaXJlY3Rpb25DeWNsZShzdGFydDogJ2FzYycgfCAnZGVzYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyOiBib29sZWFuKTogU29ydERpcmVjdGlvbltdIHtcbiAgbGV0IHNvcnRPcmRlcjogU29ydERpcmVjdGlvbltdID0gWydhc2MnLCAnZGVzYyddO1xuICBpZiAoc3RhcnQgPT0gJ2Rlc2MnKSB7IHNvcnRPcmRlci5yZXZlcnNlKCk7IH1cbiAgaWYgKCFkaXNhYmxlQ2xlYXIpIHsgc29ydE9yZGVyLnB1c2goJycpOyB9XG5cbiAgcmV0dXJuIHNvcnRPcmRlcjtcbn1cbiJdfQ==