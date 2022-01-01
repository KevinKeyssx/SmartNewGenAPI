/**
 * @fileoverview added by tsickle
 * Generated from: src/material/datepicker/datepicker-intl.ts
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
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Datepicker data that requires internationalization.
 */
import * as ɵngcc0 from '@angular/core';
export class MatDatepickerIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /**
         * A label for the calendar popup (used by screen readers).
         */
        this.calendarLabel = 'Calendar';
        /**
         * A label for the button used to open the calendar popup (used by screen readers).
         */
        this.openCalendarLabel = 'Open calendar';
        /**
         * A label for the previous month button (used by screen readers).
         */
        this.prevMonthLabel = 'Previous month';
        /**
         * A label for the next month button (used by screen readers).
         */
        this.nextMonthLabel = 'Next month';
        /**
         * A label for the previous year button (used by screen readers).
         */
        this.prevYearLabel = 'Previous year';
        /**
         * A label for the next year button (used by screen readers).
         */
        this.nextYearLabel = 'Next year';
        /**
         * A label for the previous multi-year button (used by screen readers).
         */
        this.prevMultiYearLabel = 'Previous 20 years';
        /**
         * A label for the next multi-year button (used by screen readers).
         */
        this.nextMultiYearLabel = 'Next 20 years';
        /**
         * A label for the 'switch to month view' button (used by screen readers).
         */
        this.switchToMonthViewLabel = 'Choose date';
        /**
         * A label for the 'switch to year view' button (used by screen readers).
         */
        this.switchToMultiYearViewLabel = 'Choose month and year';
    }
    /**
     * Formats a range of years.
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    formatYearRange(start, end) {
        return `${start} \u2013 ${end}`;
    }
}
MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) { return new (t || MatDatepickerIntl)(); };
/** @nocollapse */ MatDatepickerIntl.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatDatepickerIntl_Factory() { return new MatDatepickerIntl(); }, token: MatDatepickerIntl, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDatepickerIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     * @type {?}
     */
    MatDatepickerIntl.prototype.changes;
    /**
     * A label for the calendar popup (used by screen readers).
     * @type {?}
     */
    MatDatepickerIntl.prototype.calendarLabel;
    /**
     * A label for the button used to open the calendar popup (used by screen readers).
     * @type {?}
     */
    MatDatepickerIntl.prototype.openCalendarLabel;
    /**
     * A label for the previous month button (used by screen readers).
     * @type {?}
     */
    MatDatepickerIntl.prototype.prevMonthLabel;
    /**
     * A label for the next month button (used by screen readers).
     * @type {?}
     */
    MatDatepickerIntl.prototype.nextMonthLabel;
    /**
     * A label for the previous year button (used by screen readers).
     * @type {?}
     */
    MatDatepickerIntl.prototype.prevYearLabel;
    /**
     * A label for the next year button (used by screen readers).
     * @type {?}
     */
    MatDatepickerIntl.prototype.nextYearLabel;
    /**
     * A label for the previous multi-year button (used by screen readers).
     * @type {?}
     */
    MatDatepickerIntl.prototype.prevMultiYearLabel;
    /**
     * A label for the next multi-year button (used by screen readers).
     * @type {?}
     */
    MatDatepickerIntl.prototype.nextMultiYearLabel;
    /**
     * A label for the 'switch to month view' button (used by screen readers).
     * @type {?}
     */
    MatDatepickerIntl.prototype.switchToMonthViewLabel;
    /**
     * A label for the 'switch to year view' button (used by screen readers).
     * @type {?}
     */
    MatDatepickerIntl.prototype.switchToMultiYearViewLabel;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnRsLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWludGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCO0FBRW1DO0FBQUk7QUFFdEM7O0FBQUQsTUFBTSxPQUFPLGlCQUFpQjtBQUM5QixJQUZBO0FBQWdCO0FBQVk7QUFHYTtBQUNUO0FBQVksUUFFakMsWUFBTyxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ3hEO0FBQ1c7QUFDRTtBQUFZLFFBQXZCLGtCQUFhLEdBQVcsVUFBVSxDQUFDO0FBQ3JDO0FBQ1c7QUFDRTtBQUFZLFFBQXZCLHNCQUFpQixHQUFXLGVBQWUsQ0FBQztBQUM5QztBQUNXO0FBQ0U7QUFBWSxRQUF2QixtQkFBYyxHQUFXLGdCQUFnQixDQUFDO0FBQzVDO0FBQ1c7QUFDRTtBQUFZLFFBQXZCLG1CQUFjLEdBQVcsWUFBWSxDQUFDO0FBQ3hDO0FBQ1c7QUFDRTtBQUFZLFFBQXZCLGtCQUFhLEdBQVcsZUFBZSxDQUFDO0FBQzFDO0FBQ1c7QUFDRTtBQUFZLFFBQXZCLGtCQUFhLEdBQVcsV0FBVyxDQUFDO0FBQ3RDO0FBQ1c7QUFDRTtBQUFZLFFBQXZCLHVCQUFrQixHQUFXLG1CQUFtQixDQUFDO0FBQ25EO0FBQ1c7QUFDRTtBQUFZLFFBQXZCLHVCQUFrQixHQUFXLGVBQWUsQ0FBQztBQUMvQztBQUNXO0FBQ0U7QUFBWSxRQUF2QiwyQkFBc0IsR0FBVyxhQUFhLENBQUM7QUFDakQ7QUFDVztBQUNFO0FBQVksUUFBdkIsK0JBQTBCLEdBQVcsdUJBQXVCLENBQUM7QUFDL0QsS0FLQztBQUNEO0FBQVE7QUFBaUM7QUFBd0I7QUFBc0I7QUFBbUI7QUFBUSxJQUpoSCxlQUFlLENBQUMsS0FBYSxFQUFFLEdBQVc7QUFBSSxRQUM1QyxPQUFPLEdBQUcsS0FBSyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3BDLElBQUUsQ0FBQztBQUNIOzZDQTFDQyxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLG9CQUMzQjtBQUFDOzs7O2dEQUtVO0FBQUM7QUFBYTtBQUFRO0FBRXdCO0FBR3RDO0FBQWlCO0FBQVEsSUFML0Msb0NBQXNEO0FBQ3hEO0FBQ087QUFDRjtBQUFpQjtBQUFRLElBQTVCLDBDQUFtQztBQUNyQztBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1Qiw4Q0FBNEM7QUFDOUM7QUFDTztBQUNGO0FBQWlCO0FBQVEsSUFBNUIsMkNBQTBDO0FBQzVDO0FBQ087QUFDRjtBQUFpQjtBQUFRLElBQTVCLDJDQUFzQztBQUN4QztBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1QiwwQ0FBd0M7QUFDMUM7QUFDTztBQUNGO0FBQWlCO0FBQVEsSUFBNUIsMENBQW9DO0FBQ3RDO0FBQ087QUFDRjtBQUFpQjtBQUFRLElBQTVCLCtDQUFpRDtBQUNuRDtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1QiwrQ0FBNkM7QUFDL0M7QUFDTztBQUNGO0FBQWlCO0FBQVEsSUFBNUIsbURBQStDO0FBQ2pEO0FBQ087QUFDRjtBQUFpQjtBQUFRLElBQTVCLHVEQUE2RDtBQUMvRDtBQUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5cbi8qKiBEYXRlcGlja2VyIGRhdGEgdGhhdCByZXF1aXJlcyBpbnRlcm5hdGlvbmFsaXphdGlvbi4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1hdERhdGVwaWNrZXJJbnRsIHtcbiAgLyoqXG4gICAqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSBsYWJlbHMgaGVyZSBhcmUgY2hhbmdlZC4gVXNlIHRoaXMgdG8gbm90aWZ5XG4gICAqIGNvbXBvbmVudHMgaWYgdGhlIGxhYmVscyBoYXZlIGNoYW5nZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24uXG4gICAqL1xuICByZWFkb25seSBjaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogQSBsYWJlbCBmb3IgdGhlIGNhbGVuZGFyIHBvcHVwICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgY2FsZW5kYXJMYWJlbDogc3RyaW5nID0gJ0NhbGVuZGFyJztcblxuICAvKiogQSBsYWJlbCBmb3IgdGhlIGJ1dHRvbiB1c2VkIHRvIG9wZW4gdGhlIGNhbGVuZGFyIHBvcHVwICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgb3BlbkNhbGVuZGFyTGFiZWw6IHN0cmluZyA9ICdPcGVuIGNhbGVuZGFyJztcblxuICAvKiogQSBsYWJlbCBmb3IgdGhlIHByZXZpb3VzIG1vbnRoIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gIHByZXZNb250aExhYmVsOiBzdHJpbmcgPSAnUHJldmlvdXMgbW9udGgnO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgbmV4dCBtb250aCBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICBuZXh0TW9udGhMYWJlbDogc3RyaW5nID0gJ05leHQgbW9udGgnO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgcHJldmlvdXMgeWVhciBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICBwcmV2WWVhckxhYmVsOiBzdHJpbmcgPSAnUHJldmlvdXMgeWVhcic7XG5cbiAgLyoqIEEgbGFiZWwgZm9yIHRoZSBuZXh0IHllYXIgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgbmV4dFllYXJMYWJlbDogc3RyaW5nID0gJ05leHQgeWVhcic7XG5cbiAgLyoqIEEgbGFiZWwgZm9yIHRoZSBwcmV2aW91cyBtdWx0aS15ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gIHByZXZNdWx0aVllYXJMYWJlbDogc3RyaW5nID0gJ1ByZXZpb3VzIDIwIHllYXJzJztcblxuICAvKiogQSBsYWJlbCBmb3IgdGhlIG5leHQgbXVsdGkteWVhciBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICBuZXh0TXVsdGlZZWFyTGFiZWw6IHN0cmluZyA9ICdOZXh0IDIwIHllYXJzJztcblxuICAvKiogQSBsYWJlbCBmb3IgdGhlICdzd2l0Y2ggdG8gbW9udGggdmlldycgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgc3dpdGNoVG9Nb250aFZpZXdMYWJlbDogc3RyaW5nID0gJ0Nob29zZSBkYXRlJztcblxuICAvKiogQSBsYWJlbCBmb3IgdGhlICdzd2l0Y2ggdG8geWVhciB2aWV3JyBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICBzd2l0Y2hUb011bHRpWWVhclZpZXdMYWJlbDogc3RyaW5nID0gJ0Nob29zZSBtb250aCBhbmQgeWVhcic7XG5cbiAgLyoqIEZvcm1hdHMgYSByYW5nZSBvZiB5ZWFycy4gKi9cbiAgZm9ybWF0WWVhclJhbmdlKHN0YXJ0OiBzdHJpbmcsIGVuZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7c3RhcnR9IFxcdTIwMTMgJHtlbmR9YDtcbiAgfVxufVxuIl19