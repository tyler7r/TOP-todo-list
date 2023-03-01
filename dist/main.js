/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/project-creation/allProjects-to-DOM.js":
/*!****************************************************!*\
  !*** ./src/project-creation/allProjects-to-DOM.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAllProjectsToSidebar": () => (/* binding */ addAllProjectsToSidebar),
/* harmony export */   "default": () => (/* binding */ addAllProjectsToDOM)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.js");


function addAllProjectsToDOM(array) {
    const projectSection = document.querySelector('.projectSection');
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
        let projectList = array[i];
        let projectCard = document.createElement('div');
        projectCard.classList.add(`projectCard`);
        projectCard.classList.add(`no${[i+1]}`);
        projectSection.appendChild(projectCard);

        const projectSelect = document.querySelector('.projectCard.no'+[i+1]);

        let checkmark = document.createElement('img');
        checkmark.classList.add('projectcheckmark');
        checkmark.setAttribute('id', `c${[i+1]}`);
        checkmark.src = 'checkmark.svg';
        projectSelect.appendChild(checkmark);

        for (let prop in projectList) {
            let projectElement = document.createElement('div');
            projectElement.classList.add(`project${prop}`);
            projectSelect.appendChild(projectElement);
            if (prop === 'priority') {
                projectElement.classList.add(`${projectList[prop]}`);
                projectElement.textContent = '';
            } else if (prop === 'description') {
                projectElement.classList.add(`hidden`);
                projectElement.textContent += projectList[prop];
            } else if (prop === 'todos') {
                projectElement.textContent = '';
            } else {
                projectElement.textContent += projectList[prop];
            }
            projectElement.classList.add(`no${[i+1]}`);
        }

        let todoList = document.createElement('div');
        todoList.classList.add('todoList');
        todoList.classList.add(`no${[i+1]}`);
        todoList.classList.add('hidden');
        projectSelect.appendChild(todoList);
        let todos = array[i].todos.length;
        todoList.textContent = `Todos Remaining: ${todos}`;

        let ellipsis = document.createElement('img');
        ellipsis.classList.add('projectellipsis');
        ellipsis.setAttribute('id', `e${[i+1]}`);
        ellipsis.src = 'ellipsis.svg';
        projectSelect.appendChild(ellipsis);
        }
    }
}

function addAllProjectsToSidebar(array) {
    const projectSideBarSection = document.querySelector('.projects');
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            let projectList = array[i]
            let projectTab = document.createElement('div');
            projectTab.classList.add(`projectTab`);
            projectTab.classList.add(`no${[i+1]}`);
            projectSideBarSection.appendChild(projectTab);

            const projectTabSelect = document.querySelector('.no'+[i+1]);

            for (let prop in projectList) {
                if (prop === 'title') {
                    let projectTabElement = document.createElement('div');
                    projectTabElement.classList.add(`tab${prop}`);
                    projectTabElement.classList.add(`project${prop}`);
                    projectTabElement.classList.add(`no${[i+1]}`);
                    projectTabElement.textContent = projectList[prop];
                    projectTabSelect.appendChild(projectTabElement);
                }
            }
            let sidebarDelete = document.createElement('img');
            sidebarDelete.classList.add('sidebarDelete');
            sidebarDelete.setAttribute('id', `sidebarD${[i+1]}`);
            sidebarDelete.src = 'delbtn.svg';
            projectTabSelect.appendChild(sidebarDelete);

            const title = document.querySelector(`.tabtitle.no${[i+1]}`);
            title.addEventListener('click', (e) => {
                let lastChar = e.target.className.length - 1;
                (0,_state__WEBPACK_IMPORTED_MODULE_0__.setProjectView)(e.target.className.slice(lastChar));
            })
        }
    }
}



/***/ }),

/***/ "./src/project-creation/details-toggle.js":
/*!************************************************!*\
  !*** ./src/project-creation/details-toggle.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hideDetails),
/* harmony export */   "revealDetails": () => (/* binding */ revealDetails)
/* harmony export */ });
function hideDetails(cardType, cardNo) {
    const projectSelect = document.querySelector(`.${cardType}Card.no${cardNo}`);
    const description = projectSelect.querySelector(`.${cardType}description`);
    description.classList.add('hidden');
    const title = projectSelect.querySelector(`.${cardType}title`);
    title.classList.add('hidden');
    const dueDate = projectSelect.querySelector(`.${cardType}dueDate`);
    dueDate.classList.add('hidden');
    const ellipsis = projectSelect.querySelector(`.${cardType}ellipsis`);
    ellipsis.classList.add('hidden')
}

function revealDetails(cardType, cardNo) {
    const projectSelect = document.querySelector(`.${cardType}Card.no${cardNo}`);
    const description = document.querySelector(`.${cardType}description`);
    description.classList.toggle('hidden');
    const title = projectSelect.querySelector(`.${cardType}title`);
    title.classList.remove('hidden');
    const dueDate = projectSelect.querySelector(`.${cardType}dueDate`);
    dueDate.classList.remove('hidden');
    const ellipsis = projectSelect.querySelector(`.${cardType}ellipsis`);
    ellipsis.classList.remove('hidden');
}

/***/ }),

/***/ "./src/project-creation/edit-form.js":
/*!*******************************************!*\
  !*** ./src/project-creation/edit-form.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEditForm)
/* harmony export */ });
/* harmony import */ var _new_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project.js */ "./src/project-creation/new-project.js");
/* harmony import */ var _details_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-toggle */ "./src/project-creation/details-toggle.js");




function createEditForm(cardNo) {
    const projectSelect = document.querySelector(`.projectCard.no${cardNo}`);
    if (projectSelect.contains(document.querySelector(`.editForm.no${cardNo}`)) === false) {
    projectSelect.classList.add('editMode');
    let projectInfo = (_new_project_js__WEBPACK_IMPORTED_MODULE_0__.addedProjects[cardNo-1]);
    const editForm = document.createElement('form');
    editForm.setAttribute('method', 'get');
    editForm.classList.add('editForm');
    editForm.classList.add(`no${cardNo}`);
    for (let prop in projectInfo) {
        if (prop === 'priority') {
            let div = document.createElement('div');
            div.classList.add('priorityDiv');
            editForm.appendChild(div);
            let label = document.createElement('label');
            label.setAttribute('for', prop);
            label.textContent = 'Priority Level'
            div.appendChild(label);
            let selectMenu = document.createElement('select');
            selectMenu.setAttribute('name', 'priority');
            selectMenu.setAttribute('id', 'priority');
            selectMenu.setAttribute('class', `no${cardNo}`)
            div.appendChild(selectMenu);
            let lowOption = document.createElement('option');
            lowOption.setAttribute('value', 'low');
            lowOption.textContent = 'Low';
            selectMenu.appendChild(lowOption);
            let mediumOption = document.createElement('option');
            mediumOption.setAttribute('value', 'medium');
            mediumOption.textContent = 'Medium';
            selectMenu.appendChild(mediumOption);
            let highOption = document.createElement('option');
            highOption.setAttribute('value', 'high');
            highOption.textContent = 'High';
            selectMenu.appendChild(highOption); 
        } else if (prop === 'dueDate') {
            let div = document.createElement('div');
            div.classList.add('dueDateDiv');
            editForm.appendChild(div)
            let label = document.createElement('label');
            label.setAttribute('for', prop);
            label.textContent = 'Due Date';
            div.appendChild(label);
            let date = document.createElement('input');
            date.setAttribute('type', 'date');
            date.setAttribute('name', prop);
            date.setAttribute('id', prop);
            date.setAttribute('class', `no${cardNo}`)
            div.appendChild(date);
        } else if (prop === 'title') {
            let div = document.createElement('div');
            div.classList.add('titleDiv');
            editForm.appendChild(div);
            let label = document.createElement('label');
            label.setAttribute('for', prop);
            label.textContent = 'Title';
            div.appendChild(label);
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('id', 'projectTitle');
            input.setAttribute('class', `no${cardNo}`)
            input.setAttribute('name', prop);
            div.appendChild(input);
        } else if (prop === 'todos') {
            continue;
        } else {
            let div = document.createElement('div');
            div.classList.add('descriptionDiv');
            editForm.appendChild(div);
            let label = document.createElement('label');
            label.setAttribute('for', prop);
            label.textContent = 'Description';
            div.appendChild(label);
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', prop);
            input.setAttribute('id', prop);
            input.setAttribute('class', `no${cardNo}`)
            div.appendChild(input);
        }
    }
    let submitEdit = document.createElement('button');
    submitEdit.setAttribute('class', 'submitProject');
    submitEdit.setAttribute('id', `no${cardNo}`);
    submitEdit.textContent = 'Done';
    submitEdit.addEventListener('click', (e) => {
        e.preventDefault();
        const title = document.querySelector(`#projectTitle.no${cardNo}`).value;
        const description = document.querySelector(`#description.no${cardNo}`).value;
        const dueDate = document.querySelector(`#dueDate.no${cardNo}`).value;
        const priority = document.querySelector(`#priority.no${cardNo}`).value;
        const todos = _new_project_js__WEBPACK_IMPORTED_MODULE_0__.addedProjects[cardNo - 1].todos;
        let editedProject = new _new_project_js__WEBPACK_IMPORTED_MODULE_0__.Project(title, description, dueDate, priority, todos);
        _new_project_js__WEBPACK_IMPORTED_MODULE_0__.addedProjects[(cardNo)-1] = editedProject;
        editForm.classList.add('hidden');
        projectSelect.classList.remove('editMode');
        (0,_details_toggle__WEBPACK_IMPORTED_MODULE_1__.revealDetails)('project', cardNo);

        let projectNo = document.querySelectorAll(`.no${cardNo}`);
        for (let i = 0; i < projectNo.length; i++) {
            if (projectNo[i].classList.contains('projecttitle')) {
                projectNo[i].textContent = title;
            } else if (projectNo[i].classList.contains('projectdescription')) {
                projectNo[i].textContent = description;
                projectNo[i].classList.add('hidden');
            } else if (projectNo[i].classList.contains('projectdueDate')) {
                projectNo[i].textContent = dueDate;
            } else if (projectNo[i].classList.contains('projectpriority')) {
                projectNo[i].classList.remove('low');
                projectNo[i].classList.remove('medium');
                projectNo[i].classList.remove('high');
                projectNo[i].classList.add(priority);
            }
        }
        
    })
    editForm.appendChild(submitEdit);
    projectSelect.appendChild(editForm);

} else if (projectSelect.contains(document.querySelector(`.editForm.no${cardNo}`))) {
    const editForm = document.querySelector(`.editForm.no${cardNo}`);
    editForm.classList.remove('hidden');
    projectSelect.classList.add('editMode');
}
}

/***/ }),

/***/ "./src/project-creation/edit-project.js":
/*!**********************************************!*\
  !*** ./src/project-creation/edit-project.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addEllipsisFunctionality),
/* harmony export */   "sidebarDeleteFunctionality": () => (/* binding */ sidebarDeleteFunctionality)
/* harmony export */ });
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project */ "./src/project-creation/new-project.js");
/* harmony import */ var _newProject_to_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject-to-DOM */ "./src/project-creation/newProject-to-DOM.js");
/* harmony import */ var _edit_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-form.js */ "./src/project-creation/edit-form.js");
/* harmony import */ var _details_toggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-toggle.js */ "./src/project-creation/details-toggle.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ "./src/state.js");






function addEllipsisFunctionality() {
    const ellipsis = document.querySelectorAll('.projectellipsis');
    let popUpOpen = false;
    ellipsis.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectCard = document.querySelector(`.projectCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            if (projectCard.contains(document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`)) === false) {
                const popupMenu = document.createElement('div');
                popupMenu.classList.add(`popupMenu${e.target.id.slice(lastChar)}`); 
                const deleteBtn = document.createElement('div');
                deleteBtn.classList.add('popupDelete');
                deleteBtn.setAttribute('id',`del${e.target.id.slice(lastChar)}`);
                deleteBtn.textContent = 'Delete';
                popupMenu.appendChild(deleteBtn);
                const editBtn = document.createElement('div');
                editBtn.classList.add('popupEdit');
                editBtn.textContent = 'Edit';
                editBtn.setAttribute('id', `edit${e.target.id.slice(lastChar)}`);
                popupMenu.appendChild(editBtn);
                projectCard.appendChild(popupMenu);
                popUpOpen = true;
                deleteProject();
                editProject(e.target.id.slice(lastChar));
            } else if (popUpOpen === true || projectCard.classList.contains(`.editMode`)) {
                const menuSelect = document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`);
                menuSelect.classList.add('hidden');
                popUpOpen = false;
            } else if (popUpOpen === false && projectCard.contains(document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`))) {
                const menuSelect = document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`);
                menuSelect.classList.remove('hidden');
                popUpOpen = true;
            }
        })
    })
}

function deleteProject() {
    const deleteBtn = document.querySelectorAll('.popupDelete');
    deleteBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectNo = (e.target.id.slice(lastChar)) - 1;
            (0,_state__WEBPACK_IMPORTED_MODULE_4__.removeProject)(_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects, projectNo);
        })
    })
}

function sidebarDeleteFunctionality() {
    const sidebarDeleteBtn = document.querySelectorAll('.sidebarDelete');
    sidebarDeleteBtn.forEach((icon) => {
        icon.addEventListener('click' , (e) => {
            let lastChar = (e.target.id).length - 1;
            e.stopImmediatePropagation();
            const projectNo = (e.target.id.slice(lastChar)) - 1;
            (0,_state__WEBPACK_IMPORTED_MODULE_4__["default"])('GENERAL')
            ;(0,_state__WEBPACK_IMPORTED_MODULE_4__.removeProject)(_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects, projectNo);
        })
    })
}

function editProject(cardNo) {
    const editBtn = document.querySelectorAll('.popupEdit');
    editBtn.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectSelect = document.querySelector(`.projectCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            const popupMenu = document.querySelector(`.popupMenu${cardNo}`)
            popupMenu.classList.add('hidden');
            projectSelect.classList.add('editMode');
            (0,_details_toggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])('project', cardNo);
            (0,_edit_form_js__WEBPACK_IMPORTED_MODULE_2__["default"])((e.target.id.slice(lastChar)));
        })
    })
}





/***/ }),

/***/ "./src/project-creation/expand-project.js":
/*!************************************************!*\
  !*** ./src/project-creation/expand-project.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandProjectCard),
/* harmony export */   "titleClick": () => (/* binding */ titleClick)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.js");

function expandProjectCard() {
    const projectCards = document.querySelectorAll('.projectCard');
    projectCards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            let lastChar = (e.target.className).length - 1;
            if (e.target.classList.contains('projectCard') === false) {
                return
            }
            const projectSelect = document.querySelector(`.projectCard.no${e.target.className.slice(lastChar)}`);
            if (projectSelect.classList.contains('editMode')) {
                return
            }
            else {
                let todoList = document.querySelector(`.todoList.no${e.target.className.slice(lastChar)}`);
                todoList.classList.toggle('hidden');
            }
        })
    })
}

function titleClick() {
    const projectCards = document.querySelectorAll('.projecttitle');
    projectCards.forEach((title) => {
        title.addEventListener('click', (e) => {
            let lastChar = (e.target.className).length - 1;
            e.stopImmediatePropagation();
            (0,_state__WEBPACK_IMPORTED_MODULE_0__.setProjectView)(e.target.className.slice(lastChar));
        })
    })
}



/***/ }),

/***/ "./src/project-creation/new-project.js":
/*!*********************************************!*\
  !*** ./src/project-creation/new-project.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "addedProjects": () => (/* binding */ addedProjects),
/* harmony export */   "clearFormEntry": () => (/* binding */ clearFormEntry),
/* harmony export */   "default": () => (/* binding */ addProjectBtn),
/* harmony export */   "initializeNewProjectBtn": () => (/* binding */ initializeNewProjectBtn)
/* harmony export */ });
/* harmony import */ var _newProject_to_DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject-to-DOM.js */ "./src/project-creation/newProject-to-DOM.js");
/* harmony import */ var _edit_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-project.js */ "./src/project-creation/edit-project.js");
/* harmony import */ var _expand_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expand-project.js */ "./src/project-creation/expand-project.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _shared_creation_js_completed_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-creation.js/completed-task.js */ "./src/shared-creation.js/completed-task.js");
const projectForm = document.querySelector('.projectForm');







let addedProjects = [];

function addProjectBtn() {
    let addProjectBtn = document.querySelector('.addProject');
    const projectForm = document.querySelector('.projectForm');
    addProjectBtn.addEventListener('click', () => {
        if (`${_state__WEBPACK_IMPORTED_MODULE_3__.ACTIVE_VIEW}`.includes('PROJECT')) {
            (0,_state__WEBPACK_IMPORTED_MODULE_3__["default"])('GENERAL');
            projectForm.classList.remove('hidden');
        } else {
        projectForm.classList.remove('hidden');
        }
    })
}

function Project(title, description, dueDate, priority, todos) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todos = todos;
}

function initializeNewProjectBtn() {
    const projectForm = document.querySelector('.projectForm');
    const submitProjectBtn = document.querySelector('#submitProject');
    submitProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        newProjectInfo();
        projectForm.classList.add('hidden');
        clearFormEntry('priority');
        // addProjectToContent(addedProjects);
        // addProjectToSidebar(addedProjects);
        // addEllipsisFunctionality();
        // sidebarDeleteFunctionality();
        // expandProjectCard();
        // titleClick();
        // completedTask('project');
    })
}

function newProjectInfo() {
    const title = document.querySelector('#projectTitle.main').value;
    const description = document.querySelector('#description.main').value;
    const dueDate = document.querySelector('#dueDate.main').value;
    const priority = document.querySelector('#priority.main').value;
    let newProject = new Project(title, description, dueDate, priority, []);
    // addedProjects.push(newProject);
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.addProject)(addedProjects, newProject);
}

function clearFormEntry(priorityName) {
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach((input) => input.value = '');
    let priorityInput = document.querySelector(`#${priorityName}`);
    priorityInput.value = 'low';
}



/***/ }),

/***/ "./src/project-creation/newProject-to-DOM.js":
/*!***************************************************!*\
  !*** ./src/project-creation/newProject-to-DOM.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectToSidebar": () => (/* binding */ addProjectToSidebar),
/* harmony export */   "default": () => (/* binding */ addProjectToContent)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.js");


function addProjectToContent(array) {
    const projectSection = document.querySelector('.projectSection');
    if (array.length > 0) {
    for (let i = (array.length-1); i < array.length; i++) {
        let projectList = array[i];
        let projectCard = document.createElement('div');
        projectCard.classList.add(`projectCard`);
        projectCard.classList.add(`no${[i+1]}`);
        projectSection.appendChild(projectCard);

        const projectSelect = document.querySelector('.projectCard.no'+[i+1]);

        let checkmark = document.createElement('img');
        checkmark.classList.add('projectcheckmark');
        checkmark.setAttribute('id', `c${[i+1]}`);
        checkmark.src = 'checkmark.svg';
        projectSelect.appendChild(checkmark);

        for (let prop in projectList) {
            let projectElement = document.createElement('div');
            projectElement.classList.add(`project${prop}`);
            projectSelect.appendChild(projectElement);
            if (prop === 'priority') {
                projectElement.classList.add(`${projectList[prop]}`);
                projectElement.textContent = '';
            } else if (prop === 'description') {
                projectElement.classList.add(`hidden`);
                projectElement.textContent += projectList[prop];
            } else if (prop === 'todos') {
                projectElement.textContent = '';
            } else {
                projectElement.textContent += projectList[prop];
            }
            projectElement.classList.add(`no${[i+1]}`);
        }

        let todoList = document.createElement('div');
        todoList.classList.add('todoList');
        todoList.classList.add(`no${[i+1]}`);
        todoList.classList.add('hidden');
        projectSelect.appendChild(todoList);
        let todos = array[i].todos.length;
        todoList.textContent = `Todos Remaining: ${todos}`;

        let ellipsis = document.createElement('img');
        ellipsis.classList.add('projectellipsis');
        ellipsis.setAttribute('id', `e${[i+1]}`);
        ellipsis.src = 'ellipsis.svg';
        projectSelect.appendChild(ellipsis);
    }
}
}

function addProjectToSidebar(array) {
    const projectSideBarSection = document.querySelector('.projects');
    if (array.length > 0) {
        for (let i = (array.length-1); i < array.length; i++) {
            let projectList = array[i]
            let projectTab = document.createElement('div');
            projectTab.classList.add(`projectTab`);
            projectTab.classList.add(`no${[i+1]}`);
            projectSideBarSection.appendChild(projectTab);

            const projectTabSelect = document.querySelector('.no'+[i+1]);

            for (let prop in projectList) {
                if (prop === 'title') {
                    let projectTabElement = document.createElement('div');
                    projectTabElement.classList.add(`tab${prop}`);
                    projectTabElement.classList.add(`project${prop}`);
                    projectTabElement.classList.add(`no${[i+1]}`);
                    projectTabElement.textContent = projectList[prop];
                    projectTabSelect.appendChild(projectTabElement);
                }
            }
            let sidebarDelete = document.createElement('img');
            sidebarDelete.classList.add('sidebarDelete');
            sidebarDelete.setAttribute('id', `sidebarD${[i+1]}`);
            sidebarDelete.src = 'delbtn.svg';
            projectTabSelect.appendChild(sidebarDelete);

            const title = document.querySelector(`.tabtitle.no${[i+1]}`);
            title.addEventListener('click', (e) => {
                let lastChar = e.target.className.length - 1;
                (0,_state__WEBPACK_IMPORTED_MODULE_0__.setProjectView)(e.target.className.slice(lastChar));
            })
        }
    }
}





/***/ }),

/***/ "./src/project-creation/project-form.js":
/*!**********************************************!*\
  !*** ./src/project-creation/project-form.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectForm)
/* harmony export */ });
function createProjectForm() {
    const content = document.querySelector('.content');
    const projectFormDiv = document.createElement('div');
    projectFormDiv.classList.add('projectForm');
    projectFormDiv.classList.add('hidden');
    content.appendChild(projectFormDiv);
    const projectForm = document.createElement('form');
    projectForm.setAttribute('method', 'get');
    projectForm.classList.add('editMode');
    projectFormDiv.appendChild(projectForm);

        let formPriority = document.createElement('div');
        formPriority.classList.add('formPriority');  
        projectForm.appendChild(formPriority);
        let priority = document.createElement('label');
        priority.setAttribute('for', 'priority');
        priority.textContent = 'Priority Level';  
        formPriority.appendChild(priority);
        let selectMenu = document.createElement('select');
        selectMenu.setAttribute('name', 'priority');
        selectMenu.setAttribute('id', 'priority');
        selectMenu.classList.add('main');
        formPriority.appendChild(selectMenu);
        let lowOption = document.createElement('option');
        lowOption.setAttribute('value', 'low');
        lowOption.textContent = 'Low';
        selectMenu.appendChild(lowOption);
        let mediumOption = document.createElement('option');
        mediumOption.setAttribute('value', 'medium');
        mediumOption.textContent = 'Medium';
        selectMenu.appendChild(mediumOption);
        let highOption = document.createElement('option');
        highOption.setAttribute('value', 'high');
        highOption.textContent = 'High';
        selectMenu.appendChild(highOption); 

        let dueDateDiv = document.createElement('div');
        dueDateDiv.classList.add('dueDateDiv');
        projectForm.appendChild(dueDateDiv);
        let dueDate = document.createElement('label');
        dueDate.setAttribute('for', 'dueDate');
        dueDate.textContent = 'Due Date';
        dueDateDiv.appendChild(dueDate);
        let date = document.createElement('input');
        date.setAttribute('type', 'date');
        date.setAttribute('name', 'dueDate');
        date.setAttribute('id', 'dueDate');
        date.classList.add('main');
        dueDateDiv.appendChild(date);

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('titleDiv');
        projectForm.appendChild(titleDiv);
        let title = document.createElement('label');
        title.setAttribute('for', 'projectTitle');
        title.textContent = 'Title';
        titleDiv.appendChild(title);
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'projectTitle');
        titleInput.setAttribute('name', 'projectTitle');
        titleInput.classList.add('main');
        titleDiv.appendChild(titleInput);

        let descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('descriptionDiv');
        projectForm.appendChild(descriptionDiv);
        let label = document.createElement('label');
        label.setAttribute('for', 'description');
        label.textContent = 'Description';
        descriptionDiv.appendChild(label);
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'description');
        input.setAttribute('id', 'description');
        input.classList.add('main');
        descriptionDiv.appendChild(input);

        let submitProject = document.createElement('button');
        submitProject.setAttribute('id', 'submitProject');
        submitProject.textContent = 'Add Project';
        projectForm.appendChild(submitProject);
}

/***/ }),

/***/ "./src/project-creation/sort-project-dates.js":
/*!****************************************************!*\
  !*** ./src/project-creation/sort-project-dates.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortDates)
/* harmony export */ });
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project */ "./src/project-creation/new-project.js");


//only works after clicking one of the tab buttons, which triggers re-render
// need to work on making it work after adding a new project

function sortDates() {
    let sortedProjects = _new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects.sort((a, b) => 
    (a.dueDate > b.dueDate) ? 1 : (a.dueDate < b.dueDate) ? -1 : 0);
    for (let i = 0; i < _new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects.length; i++) {
        _new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects[i] = sortedProjects[i];
    }
}



/***/ }),

/***/ "./src/shared-creation.js/completed-task.js":
/*!**************************************************!*\
  !*** ./src/shared-creation.js/completed-task.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ completedTask)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");



function completedTask(taskType) {
    let checkmarks = document.querySelectorAll(`.${taskType}checkmark`);
    checkmarks.forEach((check) => {
        check.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            let lastChar = (e.target.id).length - 1;
            const taskNo = (e.target.id.slice(lastChar)) - 1;
            if (taskType === 'todo') {
                (0,_state__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_1__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_0__.PROJECT_VIEW-1].todos, taskNo);
            } else if (taskType === 'project') {
                (0,_state__WEBPACK_IMPORTED_MODULE_0__.removeProject)(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_1__.addedProjects, taskNo);
            }
        })
    })
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTIVE_VIEW": () => (/* binding */ ACTIVE_VIEW),
/* harmony export */   "PROJECT_VIEW": () => (/* binding */ PROJECT_VIEW),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "default": () => (/* binding */ setView),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "setProjectView": () => (/* binding */ setProjectView)
/* harmony export */ });
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-creation/new-project */ "./src/project-creation/new-project.js");
/* harmony import */ var _views_general_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/general-view.js */ "./src/views/general-view.js");
/* harmony import */ var _views_sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/sidebar.js */ "./src/views/sidebar.js");
/* harmony import */ var _views_today_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/today-view */ "./src/views/today-view.js");
/* harmony import */ var _views_upcoming_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/upcoming-view */ "./src/views/upcoming-view.js");
/* harmony import */ var _project_creation_sort_project_dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-creation/sort-project-dates */ "./src/project-creation/sort-project-dates.js");
/* harmony import */ var _views_project_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/project-view */ "./src/views/project-view.js");
/* harmony import */ var _todo_creation_sort_todo_dates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-creation/sort-todo-dates */ "./src/todo-creation/sort-todo-dates.js");

 







let ACTIVE_VIEW = 'GENERAL';
let PROJECT_VIEW;

function setView(view) {
    ACTIVE_VIEW = view;
    render();
}

function setProjectView(projectNo) {
    PROJECT_VIEW = projectNo;
    setView(`PROJECT${PROJECT_VIEW}`);
}

function render(){
    (0,_project_creation_sort_project_dates__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const content = document.querySelector('.content');
    content.replaceChildren();

    const sidebar = document.querySelector('.sidebar');
    sidebar.replaceChildren();
    (0,_views_sidebar_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    switch (ACTIVE_VIEW) {
        case 'GENERAL':
            (0,_views_general_view_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectSection)();
            break;
        case 'TODAY':
            (0,_views_today_view__WEBPACK_IMPORTED_MODULE_3__["default"])();
            break;
        case 'UPCOMING':
            (0,_views_upcoming_view__WEBPACK_IMPORTED_MODULE_4__["default"])();
            break;
        case `PROJECT${PROJECT_VIEW}`:
            (0,_views_project_view__WEBPACK_IMPORTED_MODULE_6__["default"])();
            break;
        default:
            break;
    }
}
function addProject(array, project) {
    array.push(project);
    render();
}

function removeProject(array, project) {
    array.splice(project, 1);
    render();
}

function removeTodo(array, todo) {
    array.splice(todo, 1);
    render();
}


// update state, rerender after each update, triggers change in view




// update view based on state






/***/ }),

/***/ "./src/todo-creation/add-todo-to-DOM.js":
/*!**********************************************!*\
  !*** ./src/todo-creation/add-todo-to-DOM.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAllTodosToDOM": () => (/* binding */ addAllTodosToDOM),
/* harmony export */   "default": () => (/* binding */ addTodoToDOM)
/* harmony export */ });
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");

// array is the todos array from project object
function addTodoToDOM(array) {
    const projectView = document.querySelector('.todos');
    if (array.length > 0) {
        for (let i = (array.length-1); i < array.length; i++) {
            let todoList = array[i];
            let todoCard = document.createElement('div');
            projectView.appendChild(todoCard);
            todoCard.classList.add('todoCard');
            todoCard.classList.add(`no${[i+1]}`);

            const cardSelect = document.querySelector('.todoCard.no'+[i+1]);

            let checkmark = document.createElement('img');
            checkmark.classList.add('todocheckmark');
            checkmark.setAttribute('id', `todoc${[i+1]}`);
            checkmark.src = 'checkmark.svg';
            cardSelect.appendChild(checkmark);

            for (let prop in todoList) {
                let todoElement = document.createElement('div');
                todoElement.classList.add(`todo${prop}`);
                cardSelect.appendChild(todoElement);
                if (prop === 'priority') {
                    todoElement.classList.add(`${todoList[prop]}`);
                    todoElement.textContent = '';
                } else if (prop === 'description') {
                    todoElement.classList.add(`hidden`);
                    todoElement.textContent += todoList[prop];
                } 
                else {
                    todoElement.textContent += todoList[prop];
                }
                todoElement.classList.add(`no${[i+1]}`);
            }
            let ellipsis = document.createElement('img');
            ellipsis.classList.add('todoellipsis');
            ellipsis.setAttribute('id', `e${[i+1]}`);
            ellipsis.src = 'ellipsis.svg';
            cardSelect.appendChild(ellipsis);
        }
    }
}

function addAllTodosToDOM(array) {
    const projectView = document.querySelector('.todos');
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            let todoList = array[i];
            let todoCard = document.createElement('div');
            projectView.appendChild(todoCard);
            todoCard.classList.add('todoCard');
            todoCard.classList.add(`no${[i+1]}`);

            const cardSelect = document.querySelector('.todoCard.no'+[i+1]);

            let checkmark = document.createElement('img');
            checkmark.classList.add('todocheckmark');
            checkmark.setAttribute('id', `todoc${[i+1]}`);
            checkmark.src = 'checkmark.svg';
            cardSelect.appendChild(checkmark);

            for (let prop in todoList) {
                let todoElement = document.createElement('div');
                todoElement.classList.add(`todo${prop}`);
                cardSelect.appendChild(todoElement);
                if (prop === 'priority') {
                    todoElement.classList.add(`${todoList[prop]}`);
                    todoElement.textContent = '';
                } else if (prop === 'description') {
                    todoElement.classList.add(`hidden`);
                    todoElement.textContent += todoList[prop];
                } 
                else {
                    todoElement.textContent += todoList[prop];
                }
                todoElement.classList.add(`no${[i+1]}`);
            }
            let ellipsis = document.createElement('img');
            ellipsis.classList.add('todoellipsis');
            ellipsis.setAttribute('id', `e${[i+1]}`);
            ellipsis.src = 'ellipsis.svg';
            cardSelect.appendChild(ellipsis);
        }
    }
}

/***/ }),

/***/ "./src/todo-creation/edit-todo.js":
/*!****************************************!*\
  !*** ./src/todo-creation/edit-todo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodoEllipsisFunctionality)
/* harmony export */ });
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");
/* harmony import */ var _todo_edit_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-edit-form */ "./src/todo-creation/todo-edit-form.js");
/* harmony import */ var _project_creation_details_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-creation/details-toggle */ "./src/project-creation/details-toggle.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/state.js");





function addTodoEllipsisFunctionality() {
    const ellipsis = document.querySelectorAll('.todoellipsis');
    let popUpOpen = false;
    ellipsis.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const todoCard = document.querySelector(`.todoCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            if (todoCard.contains(document.querySelector(`.todoPopupMenu${e.target.id.slice(lastChar)}`)) === false) {
                const popupMenu = document.createElement('div');
                popupMenu.classList.add(`todoPopupMenu${e.target.id.slice(lastChar)}`); 
                const deleteBtn = document.createElement('div');
                deleteBtn.classList.add('todoPopupDelete');
                deleteBtn.setAttribute('id',`del${e.target.id.slice(lastChar)}`);
                deleteBtn.textContent = 'Delete';
                popupMenu.appendChild(deleteBtn);
                const editBtn = document.createElement('div');
                editBtn.classList.add('todoPopupEdit');
                editBtn.textContent = 'Edit';
                editBtn.setAttribute('id', `edit${e.target.id.slice(lastChar)}`);
                popupMenu.appendChild(editBtn);
                todoCard.appendChild(popupMenu);
                popUpOpen = true;
                deleteProject();
                editProject(e.target.id.slice(lastChar));
            } else if (popUpOpen === true || todoCard.classList.contains(`.editMode`)) {
                const menuSelect = document.querySelector(`.todoPopupMenu${e.target.id.slice(lastChar)}`);
                menuSelect.classList.add('hidden');
                popUpOpen = false;
            } else if (popUpOpen === false && todoCard.contains(document.querySelector(`.todoPopupMenu${e.target.id.slice(lastChar)}`))) {
                const menuSelect = document.querySelector(`.todoPopupMenu${e.target.id.slice(lastChar)}`);
                menuSelect.classList.remove('hidden');
                popUpOpen = true;
            }
        })
    })
}

function deleteProject() {
    const deleteBtn = document.querySelectorAll('.todoPopupDelete');
    deleteBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectNo = (e.target.id.slice(lastChar)) - 1;
            (0,_state__WEBPACK_IMPORTED_MODULE_3__.removeTodo)(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_3__.PROJECT_VIEW-1].todos, projectNo);
        })
    })
}

function editProject(cardNo) {
    const editBtn = document.querySelectorAll('.todoPopupEdit');
    editBtn.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const todoSelect = document.querySelector(`.todoCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            const popupMenu = document.querySelector(`.todoPopupMenu${cardNo}`)
            popupMenu.classList.add('hidden');
            todoSelect.classList.add('editMode');
            (0,_todo_edit_form__WEBPACK_IMPORTED_MODULE_1__["default"])((e.target.id.slice(lastChar)));
            (0,_project_creation_details_toggle__WEBPACK_IMPORTED_MODULE_2__["default"])('todo', cardNo);
        })
    })
}

/***/ }),

/***/ "./src/todo-creation/expand-todo.js":
/*!******************************************!*\
  !*** ./src/todo-creation/expand-todo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandTodoCard)
/* harmony export */ });
function expandTodoCard() {
    const todoCards = document.querySelectorAll('.todoCard');
    todoCards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            let lastChar = (e.target.className).length - 1;
            if (e.target.classList.contains('todoCard') === false) {
                return
            }
            const todoSelect = document.querySelector(`.todoCard.no${e.target.className.slice(lastChar)}`);
            if (todoSelect.classList.contains('editMode')) {
                return
            } else {
            const description = todoSelect.querySelector('.tododescription');
            description.classList.toggle('hidden');
            }
        })
    })
}

/***/ }),

/***/ "./src/todo-creation/new-todo.js":
/*!***************************************!*\
  !*** ./src/todo-creation/new-todo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "submitTodoBtn": () => (/* binding */ submitTodoBtn)
/* harmony export */ });
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _add_todo_to_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-todo-to-DOM */ "./src/todo-creation/add-todo-to-DOM.js");
/* harmony import */ var _edit_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-todo */ "./src/todo-creation/edit-todo.js");
/* harmony import */ var _expand_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expand-todo */ "./src/todo-creation/expand-todo.js");
/* harmony import */ var _shared_creation_js_completed_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared-creation.js/completed-task */ "./src/shared-creation.js/completed-task.js");








let todoList = [];

function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

function submitTodoBtn() {
    const submitTodo = document.querySelector('#submitTodo');
    submitTodo.addEventListener('click', (e) => {
        e.preventDefault();
        newTodoInfo();
        const todoForm = document.querySelector('.todoForm')
        todoForm.classList.add('hidden');
        (0,_add_todo_to_DOM__WEBPACK_IMPORTED_MODULE_2__["default"])(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_1__.PROJECT_VIEW-1].todos);
        (0,_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.clearFormEntry)('todoPriority');
        (0,_edit_todo__WEBPACK_IMPORTED_MODULE_3__["default"])();
        (0,_expand_todo__WEBPACK_IMPORTED_MODULE_4__["default"])();
        (0,_shared_creation_js_completed_task__WEBPACK_IMPORTED_MODULE_5__["default"])('todo');
    })
}

function newTodoInfo() {
    const title = document.querySelector(`#todoTitle.main`).value;
    const description = document.querySelector(`#todoDescription.main`).value;
    const dueDate = document.querySelector(`#todoDueDate.main`).value;
    const priority = document.querySelector(`#todoPriority.main`).value;
    let newTodo = new Todo(title, description, dueDate, priority);
    todoList.push(newTodo);
    _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_1__.PROJECT_VIEW - 1].todos.push(newTodo);
}





/***/ }),

/***/ "./src/todo-creation/sort-todo-dates.js":
/*!**********************************************!*\
  !*** ./src/todo-creation/sort-todo-dates.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeTodos": () => (/* binding */ activeTodos),
/* harmony export */   "clearActiveTodos": () => (/* binding */ clearActiveTodos),
/* harmony export */   "default": () => (/* binding */ sortTodoDates)
/* harmony export */ });
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");


let activeTodos = [];

function getActiveTodos(array) {
    for (let i = 0; i < array.length; i++) {
        let todoList = array[i].todos;
        for (let j = 0; j < todoList.length; j++) {
            activeTodos.push(todoList[j]);
        }
    }
}

function sortTodoDates(array) {
    getActiveTodos(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects);
    let sortedTodos = array.sort((a, b) => 
    (a.dueDate > b.dueDate) ? 1 : (a.dueDate < b.dueDate) ? -1 : 0);
    for (let i = 0; i < array.length; i++) {
        array[i] = sortedTodos[i];
    }
}

function clearActiveTodos() {
    activeTodos = [];
}



/***/ }),

/***/ "./src/todo-creation/todo-edit-form.js":
/*!*********************************************!*\
  !*** ./src/todo-creation/todo-edit-form.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoEditForm)
/* harmony export */ });
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");
/* harmony import */ var _project_creation_details_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-creation/details-toggle */ "./src/project-creation/details-toggle.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _new_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-todo */ "./src/todo-creation/new-todo.js");






function createTodoEditForm(cardNo) {
    const projectSelect = document.querySelector(`.todoCard.no${cardNo}`);
    if (projectSelect.contains(document.querySelector(`.editForm.no${cardNo}`)) === false) {
        projectSelect.classList.add('editMode');
        let projectInfo = (_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_2__.PROJECT_VIEW-1].todos[cardNo-1]);
        console.log(projectInfo);
        const editForm = document.createElement('form');
        editForm.setAttribute('method', 'get');
        editForm.classList.add('editForm');
        editForm.classList.add(`no${cardNo}`);
        projectSelect.appendChild(editForm);
        for (let prop in projectInfo) {
            if (prop === 'priority') {
                let div = document.createElement('div');
                div.classList.add('todoPriorityDiv');
                editForm.appendChild(div);
                let label = document.createElement('label');
                label.setAttribute('for', `todo${prop}`);
                label.textContent = 'Priority Level'
                div.appendChild(label);
                let selectMenu = document.createElement('select');
                selectMenu.setAttribute('name', 'todopriority');
                selectMenu.setAttribute('id', 'todopriority');
                selectMenu.setAttribute('class', `no${cardNo}`)
                div.appendChild(selectMenu);
                let lowOption = document.createElement('option');
                lowOption.setAttribute('value', 'low');
                lowOption.textContent = 'Low';
                selectMenu.appendChild(lowOption);
                let mediumOption = document.createElement('option');
                mediumOption.setAttribute('value', 'medium');
                mediumOption.textContent = 'Medium';
                selectMenu.appendChild(mediumOption);
                let highOption = document.createElement('option');
                highOption.setAttribute('value', 'high');
                highOption.textContent = 'High';
                selectMenu.appendChild(highOption); 
            } else if (prop === 'dueDate') {
                let div = document.createElement('div');
                div.classList.add('todoDueDateDiv');
                editForm.appendChild(div)
                let label = document.createElement('label');
                label.setAttribute('for', `todo${prop}`);
                label.textContent = 'Due Date';
                div.appendChild(label);
                let date = document.createElement('input');
                date.setAttribute('type', 'date');
                date.setAttribute('name', `todo${prop}`);
                date.setAttribute('id', `todo${prop}`);
                date.setAttribute('class', `no${cardNo}`)
                div.appendChild(date);
            } else if (prop === 'title') {
                let div = document.createElement('div');
                div.classList.add('todoTitleDiv');
                editForm.appendChild(div);
                let label = document.createElement('label');
                label.setAttribute('for', `todo${prop}`);
                label.textContent = 'Title';
                div.appendChild(label);
                let input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('id', 'todoprojectTitle');
                input.setAttribute('class', `no${cardNo}`)
                input.setAttribute('name', `todo${prop}`);
                div.appendChild(input);
            } else if (prop === 'todos') {
                continue;
            } else {
                let div = document.createElement('div');
                div.classList.add('todoDescriptionDiv');
                editForm.appendChild(div);
                let label = document.createElement('label');
                label.setAttribute('for', `todo${prop}`);
                label.textContent = 'Description';
                div.appendChild(label);
                let input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('name', `todo${prop}`);
                input.setAttribute('id', `todo${prop}`);
                input.setAttribute('class', `no${cardNo}`)
                div.appendChild(input);
            }
        }
        let submitEdit = document.createElement('button');
        editForm.appendChild(submitEdit);
        submitEdit.setAttribute('class', 'submitProject');
        submitEdit.setAttribute('id', `no${cardNo}`);
        submitEdit.textContent = 'Done';
        submitEdit.addEventListener('click', (e) => {
            e.preventDefault();
            const title = document.querySelector(`#todoprojectTitle.no${cardNo}`).value;
            const description = document.querySelector(`#tododescription.no${cardNo}`).value;
            const dueDate = document.querySelector(`#tododueDate.no${cardNo}`).value;
            const priority = document.querySelector(`#todopriority.no${cardNo}`).value;
            let editedTodo = new _new_todo__WEBPACK_IMPORTED_MODULE_3__.Todo(title, description, dueDate, priority);
            _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_2__.PROJECT_VIEW-1].todos[cardNo-1] = editedTodo;
            editForm.classList.add('hidden');
            projectSelect.classList.remove('editMode');
            (0,_project_creation_details_toggle__WEBPACK_IMPORTED_MODULE_1__.revealDetails)('todo', cardNo);
            (0,_state__WEBPACK_IMPORTED_MODULE_2__["default"])(`PROJECT${_state__WEBPACK_IMPORTED_MODULE_2__.PROJECT_VIEW}`);
        })
    } else if (projectSelect.contains(document.querySelector(`.editForm.no${cardNo}`))) {
        const editForm = document.querySelector(`.editForm.no${cardNo}`);
        editForm.classList.remove('hidden');
        projectSelect.classList.add('editMode');
    }
}

/***/ }),

/***/ "./src/todo-creation/todo-form.js":
/*!****************************************!*\
  !*** ./src/todo-creation/todo-form.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoForm)
/* harmony export */ });
/* harmony import */ var _new_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-todo */ "./src/todo-creation/new-todo.js");


function createTodoForm() {
    const projectView = document.querySelector('.projectView');
    const todoFormDiv = document.createElement('div');
    todoFormDiv.classList.add('todoForm');
    todoFormDiv.classList.add('hidden');
    projectView.appendChild(todoFormDiv);
    const todoForm = document.createElement('form');
    todoForm.setAttribute('method', 'get');
    todoForm.classList.add('editMode');
    todoFormDiv.appendChild(todoForm);

        let formPriority = document.createElement('div');
        formPriority.classList.add('formPriority');  
        todoForm.appendChild(formPriority);
        let priority = document.createElement('label');
        priority.setAttribute('for', 'priority');
        priority.textContent = 'Priority Level';  
        formPriority.appendChild(priority);
        let selectMenu = document.createElement('select');
        selectMenu.setAttribute('name', 'priority');
        selectMenu.setAttribute('id', 'todoPriority');
        selectMenu.classList.add('main');
        formPriority.appendChild(selectMenu);
        let lowOption = document.createElement('option');
        lowOption.setAttribute('value', 'low');
        lowOption.textContent = 'Low';
        selectMenu.appendChild(lowOption);
        let mediumOption = document.createElement('option');
        mediumOption.setAttribute('value', 'medium');
        mediumOption.textContent = 'Medium';
        selectMenu.appendChild(mediumOption);
        let highOption = document.createElement('option');
        highOption.setAttribute('value', 'high');
        highOption.textContent = 'High';
        selectMenu.appendChild(highOption); 

        let dueDateDiv = document.createElement('div');
        dueDateDiv.classList.add('dueDateDiv');
        todoForm.appendChild(dueDateDiv);
        let dueDate = document.createElement('label');
        dueDate.setAttribute('for', 'dueDate');
        dueDate.textContent = 'Due Date';
        dueDateDiv.appendChild(dueDate);
        let date = document.createElement('input');
        date.setAttribute('type', 'date');
        date.setAttribute('name', 'dueDate');
        date.setAttribute('id', 'todoDueDate');
        date.classList.add('main');
        dueDateDiv.appendChild(date);

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('titleDiv');
        todoForm.appendChild(titleDiv);
        let title = document.createElement('label');
        title.setAttribute('for', 'todoTitle');
        title.textContent = 'Title';
        titleDiv.appendChild(title);
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'todoTitle');
        titleInput.setAttribute('name', 'todoTitle');
        titleInput.classList.add('main');
        titleDiv.appendChild(titleInput);

        let descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('descriptionDiv');
        todoForm.appendChild(descriptionDiv);
        let label = document.createElement('label');
        label.setAttribute('for', 'description');
        label.textContent = 'Description';
        descriptionDiv.appendChild(label);
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'description');
        input.setAttribute('id', 'todoDescription');
        input.classList.add('main');
        descriptionDiv.appendChild(input);

        let submitTodo = document.createElement('button');
        submitTodo.setAttribute('id', 'submitTodo');
        submitTodo.textContent = 'Add Todo';
        todoForm.appendChild(submitTodo);
}

/***/ }),

/***/ "./src/views/general-view.js":
/*!***********************************!*\
  !*** ./src/views/general-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeProjectCardFunctionality": () => (/* binding */ initializeProjectCardFunctionality),
/* harmony export */   "renderProjectCards": () => (/* binding */ renderProjectCards),
/* harmony export */   "renderProjectSection": () => (/* binding */ renderProjectSection)
/* harmony export */ });
/* harmony import */ var _project_creation_edit_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/edit-project */ "./src/project-creation/edit-project.js");
/* harmony import */ var _project_creation_expand_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-creation/expand-project */ "./src/project-creation/expand-project.js");
/* harmony import */ var _project_creation_allProjects_to_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-creation/allProjects-to-DOM */ "./src/project-creation/allProjects-to-DOM.js");
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");
/* harmony import */ var _shared_creation_js_completed_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-creation.js/completed-task */ "./src/shared-creation.js/completed-task.js");






function renderProjectSection() {
    renderProjectCards(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_3__.addedProjects);
    initializeProjectCardFunctionality();
}

function renderProjectCards(array) {
    const content = document.querySelector('.content')
    const projectSection = document.createElement('div');
    projectSection.classList.add('projectSection');
    const projectSectionTitle = document.createElement('div');
    projectSectionTitle.classList.add('projectSectionTitle');
    projectSectionTitle.textContent = 'PROJECTS'
    projectSection.appendChild(projectSectionTitle);
    content.appendChild(projectSection);
    (0,_project_creation_allProjects_to_DOM__WEBPACK_IMPORTED_MODULE_2__["default"])(array);
}

function initializeProjectCardFunctionality() {
    let projects = document.querySelectorAll('.projectCard');
    projects.forEach((project) => {
        project.addEventListener('click', () => {
            projectCardFunctionality();
        })
    })
}

function projectCardFunctionality() {
    (0,_project_creation_edit_project__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_project_creation_expand_project__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_project_creation_expand_project__WEBPACK_IMPORTED_MODULE_1__.titleClick)();
    (0,_shared_creation_js_completed_task__WEBPACK_IMPORTED_MODULE_4__["default"])('project');
}



/***/ }),

/***/ "./src/views/project-view.js":
/*!***********************************!*\
  !*** ./src/views/project-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjectView),
/* harmony export */   "initializeTodoCardFunctionality": () => (/* binding */ initializeTodoCardFunctionality),
/* harmony export */   "renderProjectTodos": () => (/* binding */ renderProjectTodos)
/* harmony export */ });
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _todo_creation_add_todo_to_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-creation/add-todo-to-DOM */ "./src/todo-creation/add-todo-to-DOM.js");
/* harmony import */ var _todo_creation_new_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo-creation/new-todo */ "./src/todo-creation/new-todo.js");
/* harmony import */ var _todo_creation_todo_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo-creation/todo-form */ "./src/todo-creation/todo-form.js");
/* harmony import */ var _todo_creation_edit_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo-creation/edit-todo */ "./src/todo-creation/edit-todo.js");
/* harmony import */ var _todo_creation_expand_todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../todo-creation/expand-todo */ "./src/todo-creation/expand-todo.js");
/* harmony import */ var _shared_creation_js_completed_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-creation.js/completed-task */ "./src/shared-creation.js/completed-task.js");









function renderProjectView() {
    renderProjectViewTitle();
    renderProjectViewDescription();
    renderProjectTodosTitle();
    renderProjectTodos(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_1__.PROJECT_VIEW-1].todos);
    initializeTodoCardFunctionality();
    renderNewTodoBtn();
}

function renderProjectViewTitle() {
    const content = document.querySelector('.content');
    const projectView = document.createElement('div');
    projectView.classList.add('projectView');
    content.appendChild(projectView);
    const title = document.createElement('h1');
    title.classList.add('projectViewTitle');
    const titleName = _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_1__.PROJECT_VIEW - 1].title;
    title.textContent = titleName;
    projectView.appendChild(title);
}

function renderProjectViewDescription() {
    const projectView = document.querySelector('.projectView');
    const description = document.createElement('h3');
    description.classList.add('projectViewDescription');
    const descriptionDetails = _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_1__.PROJECT_VIEW - 1].description;
    description.textContent = `${descriptionDetails}`;
    projectView.appendChild(description);
}   

function renderProjectTodosTitle() {
    const projectView = document.querySelector('.projectView');
    const todos = document.createElement('div');
    todos.classList.add('todos');
    todos.textContent = 'TODOS';
    projectView.appendChild(todos);
}

function renderProjectTodos(array) {
    (0,_todo_creation_add_todo_to_DOM__WEBPACK_IMPORTED_MODULE_2__.addAllTodosToDOM)(array);
}

function renderNewTodoBtn() {
    (0,_todo_creation_todo_form__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const projectView = document.querySelector('.projectView');
    let button = document.createElement('div');
    button.classList.add('newTodo');
    button.textContent = '+ Add Todo'
    projectView.appendChild(button);
    initializeAddTodoButton()
}

function initializeTodoCardFunctionality() {
    let todos = document.querySelectorAll('.todoCard');
    todos.forEach((todo) => {
        todo.addEventListener('click', () => {
            todoCardFunctionality();
        })
    })
}

function todoCardFunctionality() {
    (0,_todo_creation_edit_todo__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_todo_creation_expand_todo__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_shared_creation_js_completed_task__WEBPACK_IMPORTED_MODULE_7__["default"])('todo');
}

function initializeAddTodoButton() {
    const addTodoBtn = document.querySelector('.newTodo');
    const todoForm = document.querySelector('.todoForm');
    addTodoBtn.addEventListener('click', () => {
        todoForm.classList.remove('hidden');
    })
    ;(0,_todo_creation_new_todo__WEBPACK_IMPORTED_MODULE_3__.submitTodoBtn)();
}




/***/ }),

/***/ "./src/views/sidebar.js":
/*!******************************!*\
  !*** ./src/views/sidebar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderSidebar)
/* harmony export */ });
/* harmony import */ var _project_creation_new_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/new-project.js */ "./src/project-creation/new-project.js");
/* harmony import */ var _project_creation_newProject_to_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-creation/newProject-to-DOM.js */ "./src/project-creation/newProject-to-DOM.js");
/* harmony import */ var _project_creation_edit_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-creation/edit-project.js */ "./src/project-creation/edit-project.js");
/* harmony import */ var _project_creation_project_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-creation/project-form.js */ "./src/project-creation/project-form.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state.js */ "./src/state.js");
/* harmony import */ var _project_creation_allProjects_to_DOM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project-creation/allProjects-to-DOM.js */ "./src/project-creation/allProjects-to-DOM.js");







const sidebar = document.querySelector('.sidebar');
const views = ['GENERAL', 'TODAY', 'UPCOMING'];

function renderSidebar() {
    renderViewButtons(views);
    renderSidebarProjectListTitle();
    renderSidebarProjectList(_project_creation_new_project_js__WEBPACK_IMPORTED_MODULE_0__.addedProjects);
    (0,_project_creation_edit_project_js__WEBPACK_IMPORTED_MODULE_2__.sidebarDeleteFunctionality)();
    (0,_project_creation_project_form_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    renderNewProjectBtn();
    (0,_project_creation_new_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_project_creation_new_project_js__WEBPACK_IMPORTED_MODULE_0__.initializeNewProjectBtn)();
}

function renderViewButtons(views) {
    views.forEach((viewName) => {
        const button = document.createElement('div');
        button.classList.add("sidebarItem");
        button.setAttribute('id', viewName);
        button.textContent = viewName;
        sidebar.appendChild(button);
        button.addEventListener('click', () => {
            (0,_state_js__WEBPACK_IMPORTED_MODULE_4__["default"])(viewName);
        })
    })
}

function renderSidebarProjectListTitle() {
    const title = document.createElement('div');
    title.classList.add('projects');
    title.classList.add('sidebarItem');
    title.textContent = 'Projects';
    sidebar.appendChild(title);
}

function renderSidebarProjectList(projects) {
    (0,_project_creation_allProjects_to_DOM_js__WEBPACK_IMPORTED_MODULE_5__.addAllProjectsToSidebar)(projects);
}

function renderNewProjectBtn() {
    const button = document.createElement('div');
    button.classList.add('sidebarItem');
    button.classList.add('addProject');
    if (_state_js__WEBPACK_IMPORTED_MODULE_4__.ACTIVE_VIEW.includes('PROJECT')) {
        button.textContent = 'Back to GENERAL'
    } else {
        button.textContent = '+ Add Project';
    }
    sidebar.appendChild(button);
}

/***/ }),

/***/ "./src/views/today-view.js":
/*!*********************************!*\
  !*** ./src/views/today-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTodaySection)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");
/* harmony import */ var _general_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-view */ "./src/views/general-view.js");
/* harmony import */ var _todo_creation_sort_todo_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-creation/sort-todo-dates */ "./src/todo-creation/sort-todo-dates.js");
/* harmony import */ var _project_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-view */ "./src/views/project-view.js");






let todayprojects = [];
let todaytodos = [];

function todayProjectFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(array[i].dueDate);
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(formattedDate)) {
            todayprojects.push(array[i])
        } else {
            continue;
        }
    }
}

function todayTodoFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(array[i].dueDate);
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(formattedDate)) {
            todaytodos.push(array[i])
        } else {
            continue;
        }
    }
}

function renderTodaySection() {
    todayProjectFilter(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects);
    (0,_general_view__WEBPACK_IMPORTED_MODULE_1__.renderProjectCards)(todayprojects);
    (0,_general_view__WEBPACK_IMPORTED_MODULE_1__.initializeProjectCardFunctionality)();
    const content = document.querySelector('.content');
    const todoSection = document.createElement('div');
    todoSection.classList.add('todos');
    todoSection.textContent = 'TODOS';
    content.appendChild(todoSection);
    (0,_todo_creation_sort_todo_dates__WEBPACK_IMPORTED_MODULE_2__["default"])(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects);
    todayTodoFilter(_todo_creation_sort_todo_dates__WEBPACK_IMPORTED_MODULE_2__.activeTodos);
    (0,_project_view__WEBPACK_IMPORTED_MODULE_3__.renderProjectTodos)(todaytodos);
    (0,_project_view__WEBPACK_IMPORTED_MODULE_3__.initializeTodoCardFunctionality)();
    todaytodos = [];
    todayprojects = [];
    (0,_todo_creation_sort_todo_dates__WEBPACK_IMPORTED_MODULE_2__.clearActiveTodos)();
}

/***/ }),

/***/ "./src/views/upcoming-view.js":
/*!************************************!*\
  !*** ./src/views/upcoming-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderUpcomingSection)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");
/* harmony import */ var _todo_creation_sort_todo_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo-creation/sort-todo-dates */ "./src/todo-creation/sort-todo-dates.js");
/* harmony import */ var _general_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-view */ "./src/views/general-view.js");
/* harmony import */ var _project_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-view */ "./src/views/project-view.js");






let upcomingProjects = [];
let upcomingTodos = [];

function upcomingProjectsFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(array[i].dueDate);
        let todayDate = new Date();
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(todayDate, formattedDate) <= 14) {
            upcomingProjects.push(array[i])
        } else {
            continue;
        }
    }
}

function upcomingTodosFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(array[i].dueDate);
        let todayDate = new Date();
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(todayDate, formattedDate) <= 14) {
            upcomingTodos.push(array[i])
        } else {
            continue;
        }
    }
}

function renderUpcomingSection() {
    upcomingProjectsFilter(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects);
    (0,_general_view__WEBPACK_IMPORTED_MODULE_2__.renderProjectCards)(upcomingProjects);
    (0,_general_view__WEBPACK_IMPORTED_MODULE_2__.initializeProjectCardFunctionality)();
    const content = document.querySelector('.content');
    const todoSection = document.createElement('div');
    todoSection.classList.add('todos');
    todoSection.textContent = 'TODOS';
    content.appendChild(todoSection);
    (0,_todo_creation_sort_todo_dates__WEBPACK_IMPORTED_MODULE_1__["default"])(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects);
    upcomingTodosFilter(_todo_creation_sort_todo_dates__WEBPACK_IMPORTED_MODULE_1__.activeTodos);
    (0,_project_view__WEBPACK_IMPORTED_MODULE_3__.renderProjectTodos)(upcomingTodos);
    (0,_project_view__WEBPACK_IMPORTED_MODULE_3__.initializeTodoCardFunctionality)();
    upcomingProjects = [];
    upcomingTodos = [];
    (0,_todo_creation_sort_todo_dates__WEBPACK_IMPORTED_MODULE_1__.clearActiveTodos)();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _project_creation_sort_project_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-creation/sort-project-dates */ "./src/project-creation/sort-project-dates.js");
/* harmony import */ var _todo_creation_sort_todo_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-creation/sort-todo-dates */ "./src/todo-creation/sort-todo-dates.js");
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-creation/new-project */ "./src/project-creation/new-project.js");






const title = document.querySelector('#title');
title.addEventListener('click', () => {
    console.log(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_3__.addedProjects);
})

;(0,_state__WEBPACK_IMPORTED_MODULE_0__["default"])('GENERAL');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQy9DMEU7QUFDVjtBQUNnQztBQUNSO0FBQ0g7O0FBRXJGO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDLDRCQUE0QixvREFBUTtBQUNwQztBQUNBLFlBQVksb0RBQXdCO0FBQ3BDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0Qyw0QkFBNEIsb0RBQVE7QUFDcEM7QUFDQSxZQUFZLG9EQUF3QjtBQUNwQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLDJCQUEyQix3RUFBYTtBQUN4QyxJQUFJLGlFQUFrQjtBQUN0QixJQUFJLGlGQUFrQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBYSxDQUFDLHdFQUFhO0FBQy9CLHdCQUF3Qix1RUFBVztBQUNuQyxJQUFJLGlFQUFrQjtBQUN0QixJQUFJLDhFQUErQjtBQUNuQztBQUNBO0FBQ0EsSUFBSSxnRkFBZ0I7QUFDcEI7Ozs7OztVQ2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ3RCO0FBQytCO0FBQ2lDO0FBQ2hDOztBQUUvRDtBQUNBO0FBQ0EsZ0JBQWdCLHdFQUFhO0FBQzdCLENBQUM7O0FBRUQsbURBQU8sWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9hbGxQcm9qZWN0cy10by1ET00uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL2RldGFpbHMtdG9nZ2xlLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9lZGl0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL2VkaXQtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24vZXhwYW5kLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9uZXdQcm9qZWN0LXRvLURPTS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24vcHJvamVjdC1mb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9zb3J0LXByb2plY3QtZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zaGFyZWQtY3JlYXRpb24uanMvY29tcGxldGVkLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRpb24vYWRkLXRvZG8tdG8tRE9NLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGlvbi9lZGl0LXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNyZWF0aW9uL2V4cGFuZC10b2RvLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGlvbi9uZXctdG9kby5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRpb24vc29ydC10b2RvLWRhdGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGlvbi90b2RvLWVkaXQtZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRpb24vdG9kby1mb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvZ2VuZXJhbC12aWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvcHJvamVjdC12aWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3Mvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3RvZGF5LXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy91cGNvbWluZy12aWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IHNldFByb2plY3RWaWV3IH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEFsbFByb2plY3RzVG9ET00oYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0U2VjdGlvbicpO1xuICAgIGlmIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gYXJyYXlbaV07XG4gICAgICAgIGxldCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0Q2FyZGApO1xuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDYXJkLm5vJytbaSsxXSk7XG5cbiAgICAgICAgbGV0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgncHJvamVjdGNoZWNrbWFyaycpO1xuICAgICAgICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCdpZCcsIGBjJHtbaSsxXX1gKTtcbiAgICAgICAgY2hlY2ttYXJrLnNyYyA9ICdjaGVja21hcmsuc3ZnJztcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvamVjdExpc3QpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgcHJvamVjdCR7cHJvcH1gKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke3Byb2plY3RMaXN0W3Byb3BdfWApO1xuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBoaWRkZW5gKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCArPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3RvZG9zJykge1xuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ICs9IHByb2plY3RMaXN0W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG9MaXN0Jyk7XG4gICAgICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgdG9kb0xpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuICAgICAgICBsZXQgdG9kb3MgPSBhcnJheVtpXS50b2Rvcy5sZW5ndGg7XG4gICAgICAgIHRvZG9MaXN0LnRleHRDb250ZW50ID0gYFRvZG9zIFJlbWFpbmluZzogJHt0b2Rvc31gO1xuXG4gICAgICAgIGxldCBlbGxpcHNpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBlbGxpcHNpcy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0ZWxsaXBzaXMnKTtcbiAgICAgICAgZWxsaXBzaXMuc2V0QXR0cmlidXRlKCdpZCcsIGBlJHtbaSsxXX1gKTtcbiAgICAgICAgZWxsaXBzaXMuc3JjID0gJ2VsbGlwc2lzLnN2Zyc7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoZWxsaXBzaXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRBbGxQcm9qZWN0c1RvU2lkZWJhcihhcnJheSkge1xuICAgIGNvbnN0IHByb2plY3RTaWRlQmFyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIGlmIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGFycmF5W2ldXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0VGFiYCk7XG4gICAgICAgICAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIHByb2plY3RTaWRlQmFyU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0VGFiKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRhYlNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ubycrW2krMV0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb2plY3RMaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RUYWJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHRhYiR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYkVsZW1lbnQuY2xhc3NMaXN0LmFkZChgcHJvamVjdCR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYkVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGFiRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3RMaXN0W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGFiU2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RUYWJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2lkZWJhckRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgc2lkZWJhckRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyRGVsZXRlJyk7XG4gICAgICAgICAgICBzaWRlYmFyRGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBgc2lkZWJhckQke1tpKzFdfWApO1xuICAgICAgICAgICAgc2lkZWJhckRlbGV0ZS5zcmMgPSAnZGVsYnRuLnN2Zyc7XG4gICAgICAgICAgICBwcm9qZWN0VGFiU2VsZWN0LmFwcGVuZENoaWxkKHNpZGViYXJEZWxldGUpO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YWJ0aXRsZS5ubyR7W2krMV19YCk7XG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gZS50YXJnZXQuY2xhc3NOYW1lLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc2V0UHJvamVjdFZpZXcoZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKGxhc3RDaGFyKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBhZGRBbGxQcm9qZWN0c1RvU2lkZWJhciB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhpZGVEZXRhaWxzKGNhcmRUeXBlLCBjYXJkTm8pIHtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9Q2FyZC5ubyR7Y2FyZE5vfWApO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtjYXJkVHlwZX1kZXNjcmlwdGlvbmApO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbnN0IHRpdGxlID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtjYXJkVHlwZX10aXRsZWApO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfWR1ZURhdGVgKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbnN0IGVsbGlwc2lzID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtjYXJkVHlwZX1lbGxpcHNpc2ApO1xuICAgIGVsbGlwc2lzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlYWxEZXRhaWxzKGNhcmRUeXBlLCBjYXJkTm8pIHtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9Q2FyZC5ubyR7Y2FyZE5vfWApO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZGVzY3JpcHRpb25gKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9dGl0bGVgKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjb25zdCBkdWVEYXRlID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtjYXJkVHlwZX1kdWVEYXRlYCk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjb25zdCBlbGxpcHNpcyA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZWxsaXBzaXNgKTtcbiAgICBlbGxpcHNpcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn0iLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzLCBQcm9qZWN0IH0gZnJvbSAnLi9uZXctcHJvamVjdC5qcyc7XG5cbmltcG9ydCB7IHJldmVhbERldGFpbHMgfSBmcm9tICcuL2RldGFpbHMtdG9nZ2xlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWRpdEZvcm0oY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7Y2FyZE5vfWApO1xuICAgIGlmIChwcm9qZWN0U2VsZWN0LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0Rm9ybS5ubyR7Y2FyZE5vfWApKSA9PT0gZmFsc2UpIHtcbiAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2VkaXRNb2RlJyk7XG4gICAgbGV0IHByb2plY3RJbmZvID0gKGFkZGVkUHJvamVjdHNbY2FyZE5vLTFdKTtcbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBlZGl0Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0Rm9ybScpO1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoYG5vJHtjYXJkTm99YCk7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBwcm9qZWN0SW5mbykge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5RGl2Jyk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcCk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBMZXZlbCdcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3RNZW51KTtcbiAgICAgICAgICAgIGxldCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICAgICAgbG93T3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XG4gICAgICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgICAgICAgICAgIG1lZGl1bU9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICAgICAgbGV0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGhpZ2hPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gICAgICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTsgXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2R1ZURhdGUnKSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZURpdicpO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcCk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBwcm9wKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsIHByb3ApO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGl0bGVEaXYnKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFRpdGxlJyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHByb3ApO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAndG9kb3MnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkRpdicpO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3ApO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgcHJvcCk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvcCk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN1Ym1pdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRFZGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0UHJvamVjdCcpO1xuICAgIHN1Ym1pdEVkaXQuc2V0QXR0cmlidXRlKCdpZCcsIGBubyR7Y2FyZE5vfWApO1xuICAgIHN1Ym1pdEVkaXQudGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgc3VibWl0RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdFRpdGxlLm5vJHtjYXJkTm99YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Rlc2NyaXB0aW9uLm5vJHtjYXJkTm99YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZHVlRGF0ZS5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcmlvcml0eS5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvcyA9IGFkZGVkUHJvamVjdHNbY2FyZE5vIC0gMV0udG9kb3M7XG4gICAgICAgIGxldCBlZGl0ZWRQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdG9kb3MpO1xuICAgICAgICBhZGRlZFByb2plY3RzWyhjYXJkTm8pLTFdID0gZWRpdGVkUHJvamVjdDtcbiAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdE1vZGUnKTtcbiAgICAgICAgcmV2ZWFsRGV0YWlscygncHJvamVjdCcsIGNhcmRObyk7XG5cbiAgICAgICAgbGV0IHByb2plY3RObyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ubyR7Y2FyZE5vfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3ROby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3ROb1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3R0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2plY3ROb1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RkZXNjcmlwdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0ZHVlRGF0ZScpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdE5vW2ldLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHByaW9yaXR5JykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LnJlbW92ZSgnbG93Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bScpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0RWRpdCk7XG4gICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG5cbn0gZWxzZSBpZiAocHJvamVjdFNlbGVjdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKSkpIHtcbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0Rm9ybS5ubyR7Y2FyZE5vfWApO1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbn1cbn0iLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcbmltcG9ydCBhZGRQcm9qZWN0VG9Db250ZW50LCB7IGFkZFByb2plY3RUb1NpZGViYXJ9IGZyb20gXCIuL25ld1Byb2plY3QtdG8tRE9NXCI7XG5pbXBvcnQgY3JlYXRlRWRpdEZvcm0gZnJvbSBcIi4vZWRpdC1mb3JtLmpzXCI7XG5pbXBvcnQgaGlkZURldGFpbHMgZnJvbSBcIi4vZGV0YWlscy10b2dnbGUuanNcIjtcbmltcG9ydCBzZXRWaWV3LCB7IHJlbW92ZVByb2plY3QsIEFDVElWRV9WSUVXIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEVsbGlwc2lzRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBjb25zdCBlbGxpcHNpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0ZWxsaXBzaXMnKTtcbiAgICBsZXQgcG9wVXBPcGVuID0gZmFsc2U7XG4gICAgZWxsaXBzaXMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RDYXJkLm5vJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHByb2plY3RDYXJkLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdXBNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmNsYXNzTGlzdC5hZGQoYHBvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApOyBcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncG9wdXBEZWxldGUnKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdpZCcsYGRlbCR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICAgICAgICAgIHBvcHVwTWVudS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3BvcHVwRWRpdCcpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGVkaXQke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBwb3B1cE1lbnUuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocG9wdXBNZW51KTtcbiAgICAgICAgICAgICAgICBwb3BVcE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoKTtcbiAgICAgICAgICAgICAgICBlZGl0UHJvamVjdChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwb3BVcE9wZW4gPT09IHRydWUgfHwgcHJvamVjdENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKGAuZWRpdE1vZGVgKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBNZW51JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgbWVudVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBwb3BVcE9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9wVXBPcGVuID09PSBmYWxzZSAmJiBwcm9qZWN0Q2FyZC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBNZW51JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBtZW51U2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBEZWxldGUnKTtcbiAgICBkZWxldGVCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Tm8gPSAoZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpKSAtIDE7XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KGFkZGVkUHJvamVjdHMsIHByb2plY3RObyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2lkZWJhckRlbGV0ZUZ1bmN0aW9uYWxpdHkoKSB7XG4gICAgY29uc3Qgc2lkZWJhckRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyRGVsZXRlJyk7XG4gICAgc2lkZWJhckRlbGV0ZUJ0bi5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Tm8gPSAoZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpKSAtIDE7XG4gICAgICAgICAgICBzZXRWaWV3KCdHRU5FUkFMJylcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3QoYWRkZWRQcm9qZWN0cywgcHJvamVjdE5vKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChjYXJkTm8pIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwRWRpdCcpO1xuICAgIGVkaXRCdG4uZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdENhcmQubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBwb3B1cE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBNZW51JHtjYXJkTm99YClcbiAgICAgICAgICAgIHBvcHVwTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICAgICAgICAgIGhpZGVEZXRhaWxzKCdwcm9qZWN0JywgY2FyZE5vKTtcbiAgICAgICAgICAgIGNyZWF0ZUVkaXRGb3JtKChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgeyBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSB9O1xuXG4iLCJpbXBvcnQgeyBzZXRQcm9qZWN0VmlldyB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kUHJvamVjdENhcmQoKSB7XG4gICAgY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RDYXJkJyk7XG4gICAgcHJvamVjdENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmNsYXNzTmFtZSkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RDYXJkJykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RDYXJkLm5vJHtlLnRhcmdldC5jbGFzc05hbWUuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgaWYgKHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0TW9kZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb0xpc3Qubm8ke2UudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdGl0bGVDbGljaygpIHtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHRpdGxlJyk7XG4gICAgcHJvamVjdENhcmRzLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5jbGFzc05hbWUpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgc2V0UHJvamVjdFZpZXcoZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKGxhc3RDaGFyKSk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgdGl0bGVDbGljayB9IiwiY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKTtcblxuaW1wb3J0IGFkZFByb2plY3RUb0NvbnRlbnQsIHsgYWRkUHJvamVjdFRvU2lkZWJhciB9IGZyb20gJy4vbmV3UHJvamVjdC10by1ET00uanMnO1xuaW1wb3J0IGFkZEVsbGlwc2lzRnVuY3Rpb25hbGl0eSwgeyBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4vZWRpdC1wcm9qZWN0LmpzJztcbmltcG9ydCBleHBhbmRQcm9qZWN0Q2FyZCwgeyB0aXRsZUNsaWNrIH0gZnJvbSAnLi9leHBhbmQtcHJvamVjdC5qcyc7XG5pbXBvcnQgc2V0VmlldywgeyBBQ1RJVkVfVklFVywgYWRkUHJvamVjdCB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCBjb21wbGV0ZWRUYXNrIGZyb20gJy4uL3NoYXJlZC1jcmVhdGlvbi5qcy9jb21wbGV0ZWQtdGFzay5qcyc7XG5cbmxldCBhZGRlZFByb2plY3RzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3RCdG4oKSB7XG4gICAgbGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtJyk7XG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGAke0FDVElWRV9WSUVXfWAuaW5jbHVkZXMoJ1BST0pFQ1QnKSkge1xuICAgICAgICAgICAgc2V0VmlldygnR0VORVJBTCcpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0b2Rvcykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy50b2RvcyA9IHRvZG9zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZU5ld1Byb2plY3RCdG4oKSB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKTtcbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFByb2plY3QnKTtcbiAgICBzdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBuZXdQcm9qZWN0SW5mbygpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgY2xlYXJGb3JtRW50cnkoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIC8vIGFkZFByb2plY3RUb0NvbnRlbnQoYWRkZWRQcm9qZWN0cyk7XG4gICAgICAgIC8vIGFkZFByb2plY3RUb1NpZGViYXIoYWRkZWRQcm9qZWN0cyk7XG4gICAgICAgIC8vIGFkZEVsbGlwc2lzRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICAvLyBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICAvLyBleHBhbmRQcm9qZWN0Q2FyZCgpO1xuICAgICAgICAvLyB0aXRsZUNsaWNrKCk7XG4gICAgICAgIC8vIGNvbXBsZXRlZFRhc2soJ3Byb2plY3QnKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0SW5mbygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUubWFpbicpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uLm1haW4nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUubWFpbicpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Lm1haW4nKS52YWx1ZTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIFtdKTtcbiAgICAvLyBhZGRlZFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgYWRkUHJvamVjdChhZGRlZFByb2plY3RzLCBuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtRW50cnkocHJpb3JpdHlOYW1lKSB7XG4gICAgbGV0IGFsbElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgYWxsSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBpbnB1dC52YWx1ZSA9ICcnKTtcbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByaW9yaXR5TmFtZX1gKTtcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gJ2xvdyc7XG59XG5cbmV4cG9ydCB7IGFkZGVkUHJvamVjdHMsIFByb2plY3QsIGNsZWFyRm9ybUVudHJ5IH07IiwiaW1wb3J0IHsgc2V0UHJvamVjdFZpZXcgfSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdFRvQ29udGVudChhcnJheSkge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RTZWN0aW9uJyk7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGxldCBpID0gKGFycmF5Lmxlbmd0aC0xKTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGFycmF5W2ldO1xuICAgICAgICBsZXQgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChgcHJvamVjdENhcmRgKTtcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuICAgICAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q2FyZC5ubycrW2krMV0pO1xuXG4gICAgICAgIGxldCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RjaGVja21hcmsnKTtcbiAgICAgICAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgnaWQnLCBgYyR7W2krMV19YCk7XG4gICAgICAgIGNoZWNrbWFyay5zcmMgPSAnY2hlY2ttYXJrLnN2Zyc7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb2plY3RMaXN0KSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke3Byb3B9YCk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtwcm9qZWN0TGlzdFtwcm9wXX1gKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgaGlkZGVuYCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgKz0gcHJvamVjdExpc3RbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd0b2RvcycpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCArPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdCcpO1xuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcbiAgICAgICAgbGV0IHRvZG9zID0gYXJyYXlbaV0udG9kb3MubGVuZ3RoO1xuICAgICAgICB0b2RvTGlzdC50ZXh0Q29udGVudCA9IGBUb2RvcyBSZW1haW5pbmc6ICR7dG9kb3N9YDtcblxuICAgICAgICBsZXQgZWxsaXBzaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWxsaXBzaXMuY2xhc3NMaXN0LmFkZCgncHJvamVjdGVsbGlwc2lzJyk7XG4gICAgICAgIGVsbGlwc2lzLnNldEF0dHJpYnV0ZSgnaWQnLCBgZSR7W2krMV19YCk7XG4gICAgICAgIGVsbGlwc2lzLnNyYyA9ICdlbGxpcHNpcy5zdmcnO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGVsbGlwc2lzKTtcbiAgICB9XG59XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb1NpZGViYXIoYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0U2lkZUJhclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gKGFycmF5Lmxlbmd0aC0xKTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBhcnJheVtpXVxuICAgICAgICAgICAgbGV0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZChgcHJvamVjdFRhYmApO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgICAgICBwcm9qZWN0U2lkZUJhclNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUYWJTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8nK1tpKzFdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0VGFiRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGFiRWxlbWVudC5jbGFzc0xpc3QuYWRkKGB0YWIke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYkVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGFiRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNpZGViYXJEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHNpZGViYXJEZWxldGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckRlbGV0ZScpO1xuICAgICAgICAgICAgc2lkZWJhckRlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHNpZGViYXJEJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIHNpZGViYXJEZWxldGUuc3JjID0gJ2RlbGJ0bi5zdmcnO1xuICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChzaWRlYmFyRGVsZXRlKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFidGl0bGUubm8ke1tpKzFdfWApO1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IGUudGFyZ2V0LmNsYXNzTmFtZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHNldFByb2plY3RWaWV3KGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcikpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IGFkZFByb2plY3RUb1NpZGViYXIgfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XG4gICAgcHJvamVjdEZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybURpdik7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cbiAgICAgICAgbGV0IGZvcm1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZm9ybVByaW9yaXR5Jyk7ICBcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVByaW9yaXR5KTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgTGV2ZWwnOyAgXG4gICAgICAgIGZvcm1Qcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIGxldCBzZWxlY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICAgICAgICBzZWxlY3RNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZm9ybVByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdE1lbnUpO1xuICAgICAgICBsZXQgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xuICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICBsZXQgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pOyBcblxuICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVEaXYnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGVEaXYnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFRpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uRGl2Jyk7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgIGxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRQcm9qZWN0Jyk7XG4gICAgICAgIHN1Ym1pdFByb2plY3QudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0KTtcbn0iLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcblxuLy9vbmx5IHdvcmtzIGFmdGVyIGNsaWNraW5nIG9uZSBvZiB0aGUgdGFiIGJ1dHRvbnMsIHdoaWNoIHRyaWdnZXJzIHJlLXJlbmRlclxuLy8gbmVlZCB0byB3b3JrIG9uIG1ha2luZyBpdCB3b3JrIGFmdGVyIGFkZGluZyBhIG5ldyBwcm9qZWN0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnREYXRlcygpIHtcbiAgICBsZXQgc29ydGVkUHJvamVjdHMgPSBhZGRlZFByb2plY3RzLnNvcnQoKGEsIGIpID0+IFxuICAgIChhLmR1ZURhdGUgPiBiLmR1ZURhdGUpID8gMSA6IChhLmR1ZURhdGUgPCBiLmR1ZURhdGUpID8gLTEgOiAwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZGVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWRkZWRQcm9qZWN0c1tpXSA9IHNvcnRlZFByb2plY3RzW2ldO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgcmVtb3ZlUHJvamVjdCwgcmVtb3ZlVG9kbywgUFJPSkVDVF9WSUVXIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGxldGVkVGFzayh0YXNrVHlwZSkge1xuICAgIGxldCBjaGVja21hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dGFza1R5cGV9Y2hlY2ttYXJrYCk7XG4gICAgY2hlY2ttYXJrcy5mb3JFYWNoKChjaGVjaykgPT4ge1xuICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgdGFza05vID0gKGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSkgLSAxO1xuICAgICAgICAgICAgaWYgKHRhc2tUeXBlID09PSAndG9kbycpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUb2RvKGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zLCB0YXNrTm8pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrVHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChhZGRlZFByb2plY3RzLCB0YXNrTm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RTZWN0aW9uIH0gZnJvbSBcIi4vdmlld3MvZ2VuZXJhbC12aWV3LmpzXCI7IFxuaW1wb3J0IHJlbmRlclNpZGViYXIgZnJvbSAnLi92aWV3cy9zaWRlYmFyLmpzJ1xuaW1wb3J0IHJlbmRlclRvZGF5U2VjdGlvbiBmcm9tIFwiLi92aWV3cy90b2RheS12aWV3XCI7XG5pbXBvcnQgcmVuZGVyVXBjb21pbmdTZWN0aW9uIGZyb20gXCIuL3ZpZXdzL3VwY29taW5nLXZpZXdcIjtcbmltcG9ydCBzb3J0RGF0ZXMgZnJvbSBcIi4vcHJvamVjdC1jcmVhdGlvbi9zb3J0LXByb2plY3QtZGF0ZXNcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0VmlldyBmcm9tIFwiLi92aWV3cy9wcm9qZWN0LXZpZXdcIjtcbmltcG9ydCBzb3J0VG9kb0RhdGVzLCB7IGFjdGl2ZVRvZG9zIH0gZnJvbSBcIi4vdG9kby1jcmVhdGlvbi9zb3J0LXRvZG8tZGF0ZXNcIjtcblxubGV0IEFDVElWRV9WSUVXID0gJ0dFTkVSQUwnO1xubGV0IFBST0pFQ1RfVklFVztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0Vmlldyh2aWV3KSB7XG4gICAgQUNUSVZFX1ZJRVcgPSB2aWV3O1xuICAgIHJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0Vmlldyhwcm9qZWN0Tm8pIHtcbiAgICBQUk9KRUNUX1ZJRVcgPSBwcm9qZWN0Tm87XG4gICAgc2V0VmlldyhgUFJPSkVDVCR7UFJPSkVDVF9WSUVXfWApO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoKXtcbiAgICBzb3J0RGF0ZXMoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgc2lkZWJhci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICByZW5kZXJTaWRlYmFyKCk7XG5cbiAgICBzd2l0Y2ggKEFDVElWRV9WSUVXKSB7XG4gICAgICAgIGNhc2UgJ0dFTkVSQUwnOlxuICAgICAgICAgICAgcmVuZGVyUHJvamVjdFNlY3Rpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUT0RBWSc6XG4gICAgICAgICAgICByZW5kZXJUb2RheVNlY3Rpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdVUENPTUlORyc6XG4gICAgICAgICAgICByZW5kZXJVcGNvbWluZ1NlY3Rpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGBQUk9KRUNUJHtQUk9KRUNUX1ZJRVd9YDpcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RWaWV3KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZFByb2plY3QoYXJyYXksIHByb2plY3QpIHtcbiAgICBhcnJheS5wdXNoKHByb2plY3QpO1xuICAgIHJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KGFycmF5LCBwcm9qZWN0KSB7XG4gICAgYXJyYXkuc3BsaWNlKHByb2plY3QsIDEpO1xuICAgIHJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvKGFycmF5LCB0b2RvKSB7XG4gICAgYXJyYXkuc3BsaWNlKHRvZG8sIDEpO1xuICAgIHJlbmRlcigpO1xufVxuXG5leHBvcnQgeyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBzZXRQcm9qZWN0VmlldywgUFJPSkVDVF9WSUVXLCBBQ1RJVkVfVklFVywgcmVtb3ZlVG9kbyB9O1xuLy8gdXBkYXRlIHN0YXRlLCByZXJlbmRlciBhZnRlciBlYWNoIHVwZGF0ZSwgdHJpZ2dlcnMgY2hhbmdlIGluIHZpZXdcblxuXG5cblxuLy8gdXBkYXRlIHZpZXcgYmFzZWQgb24gc3RhdGVcblxuXG5cblxuIiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0XCI7XG4vLyBhcnJheSBpcyB0aGUgdG9kb3MgYXJyYXkgZnJvbSBwcm9qZWN0IG9iamVjdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9kb1RvRE9NKGFycmF5KSB7XG4gICAgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gKGFycmF5Lmxlbmd0aC0xKTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG9kb0xpc3QgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGxldCB0b2RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9kb0NhcmQpO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kb0NhcmQnKTtcbiAgICAgICAgICAgIHRvZG9DYXJkLmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ2FyZC5ubycrW2krMV0pO1xuXG4gICAgICAgICAgICBsZXQgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgndG9kb2NoZWNrbWFyaycpO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kb2Mke1tpKzFdfWApO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnNyYyA9ICdjaGVja21hcmsuc3ZnJztcbiAgICAgICAgICAgIGNhcmRTZWxlY3QuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0b2RvTGlzdCkge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHt0b2RvTGlzdFtwcm9wXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgaGlkZGVuYCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LnRleHRDb250ZW50ICs9IHRvZG9MaXN0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LnRleHRDb250ZW50ICs9IHRvZG9MaXN0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZWxsaXBzaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGVsbGlwc2lzLmNsYXNzTGlzdC5hZGQoJ3RvZG9lbGxpcHNpcycpO1xuICAgICAgICAgICAgZWxsaXBzaXMuc2V0QXR0cmlidXRlKCdpZCcsIGBlJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIGVsbGlwc2lzLnNyYyA9ICdlbGxpcHNpcy5zdmcnO1xuICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZChlbGxpcHNpcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBbGxUb2Rvc1RvRE9NKGFycmF5KSB7XG4gICAgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG9kb0xpc3QgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGxldCB0b2RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9kb0NhcmQpO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kb0NhcmQnKTtcbiAgICAgICAgICAgIHRvZG9DYXJkLmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ2FyZC5ubycrW2krMV0pO1xuXG4gICAgICAgICAgICBsZXQgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgndG9kb2NoZWNrbWFyaycpO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kb2Mke1tpKzFdfWApO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnNyYyA9ICdjaGVja21hcmsuc3ZnJztcbiAgICAgICAgICAgIGNhcmRTZWxlY3QuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0b2RvTGlzdCkge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHt0b2RvTGlzdFtwcm9wXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgaGlkZGVuYCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LnRleHRDb250ZW50ICs9IHRvZG9MaXN0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LnRleHRDb250ZW50ICs9IHRvZG9MaXN0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZWxsaXBzaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGVsbGlwc2lzLmNsYXNzTGlzdC5hZGQoJ3RvZG9lbGxpcHNpcycpO1xuICAgICAgICAgICAgZWxsaXBzaXMuc2V0QXR0cmlidXRlKCdpZCcsIGBlJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIGVsbGlwc2lzLnNyYyA9ICdlbGxpcHNpcy5zdmcnO1xuICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZChlbGxpcHNpcyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3QnXG5pbXBvcnQgY3JlYXRlVG9kb0VkaXRGb3JtIGZyb20gJy4vdG9kby1lZGl0LWZvcm0nXG5pbXBvcnQgaGlkZURldGFpbHMgZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vZGV0YWlscy10b2dnbGVcIjtcbmltcG9ydCB7IHJlbW92ZVRvZG8sIFBST0pFQ1RfVklFVyB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCkge1xuICAgIGNvbnN0IGVsbGlwc2lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9lbGxpcHNpcycpO1xuICAgIGxldCBwb3BVcE9wZW4gPSBmYWxzZTtcbiAgICBlbGxpcHNpcy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgdG9kb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb0NhcmQubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodG9kb0NhcmQuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9Qb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdXBNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmNsYXNzTGlzdC5hZGQoYHRvZG9Qb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTsgXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG9Qb3B1cERlbGV0ZScpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgZGVsJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kb1BvcHVwRWRpdCcpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGVkaXQke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBwb3B1cE1lbnUuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgICAgICAgICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQocG9wdXBNZW51KTtcbiAgICAgICAgICAgICAgICBwb3BVcE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoKTtcbiAgICAgICAgICAgICAgICBlZGl0UHJvamVjdChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwb3BVcE9wZW4gPT09IHRydWUgfHwgdG9kb0NhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKGAuZWRpdE1vZGVgKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb1BvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIG1lbnVTZWxlY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcFVwT3BlbiA9PT0gZmFsc2UgJiYgdG9kb0NhcmQuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9Qb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9Qb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBtZW51U2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb1BvcHVwRGVsZXRlJyk7XG4gICAgZGVsZXRlQnRuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5vID0gKGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSkgLSAxO1xuICAgICAgICAgICAgcmVtb3ZlVG9kbyhhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVy0xXS50b2RvcywgcHJvamVjdE5vKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChjYXJkTm8pIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9Qb3B1cEVkaXQnKTtcbiAgICBlZGl0QnRuLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCB0b2RvU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9DYXJkLm5vJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgcG9wdXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9Qb3B1cE1lbnUke2NhcmROb31gKVxuICAgICAgICAgICAgcG9wdXBNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdG9kb1NlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgICAgICAgICAgY3JlYXRlVG9kb0VkaXRGb3JtKChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpKTtcbiAgICAgICAgICAgIGhpZGVEZXRhaWxzKCd0b2RvJywgY2FyZE5vKTtcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvZG9DYXJkKCkge1xuICAgIGNvbnN0IHRvZG9DYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvQ2FyZCcpO1xuICAgIHRvZG9DYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5jbGFzc05hbWUpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvQ2FyZCcpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdG9kb1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvQ2FyZC5ubyR7ZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGlmICh0b2RvU2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdE1vZGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kb1NlbGVjdC5xdWVyeVNlbGVjdG9yKCcudG9kb2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgUFJPSkVDVF9WSUVXIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgYWRkVG9kb1RvRE9NIGZyb20gXCIuL2FkZC10b2RvLXRvLURPTVwiO1xuaW1wb3J0IHsgY2xlYXJGb3JtRW50cnkgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IGFkZFRvZG9FbGxpcHNpc0Z1bmN0aW9uYWxpdHkgZnJvbSBcIi4vZWRpdC10b2RvXCI7XG5pbXBvcnQgZXhwYW5kVG9kb0NhcmQgZnJvbSBcIi4vZXhwYW5kLXRvZG9cIjtcbmltcG9ydCBjb21wbGV0ZWRUYXNrIGZyb20gXCIuLi9zaGFyZWQtY3JlYXRpb24uanMvY29tcGxldGVkLXRhc2tcIjtcblxubGV0IHRvZG9MaXN0ID0gW107XG5cbmZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRvZG9CdG4oKSB7XG4gICAgY29uc3Qgc3VibWl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRUb2RvJyk7XG4gICAgc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbmV3VG9kb0luZm8oKTtcbiAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0Zvcm0nKVxuICAgICAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgYWRkVG9kb1RvRE9NKGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zKTtcbiAgICAgICAgY2xlYXJGb3JtRW50cnkoJ3RvZG9Qcmlvcml0eScpO1xuICAgICAgICBhZGRUb2RvRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCk7XG4gICAgICAgIGV4cGFuZFRvZG9DYXJkKCk7XG4gICAgICAgIGNvbXBsZXRlZFRhc2soJ3RvZG8nKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdUb2RvSW5mbygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvVGl0bGUubWFpbmApLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9EZXNjcmlwdGlvbi5tYWluYCkudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvRHVlRGF0ZS5tYWluYCkudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb1ByaW9yaXR5Lm1haW5gKS52YWx1ZTtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIHRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgYWRkZWRQcm9qZWN0c1tQUk9KRUNUX1ZJRVcgLSAxXS50b2Rvcy5wdXNoKG5ld1RvZG8pO1xufVxuXG5leHBvcnQgeyBzdWJtaXRUb2RvQnRuLCBUb2RvIH07XG5cbiIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuXG5sZXQgYWN0aXZlVG9kb3MgPSBbXTtcblxuZnVuY3Rpb24gZ2V0QWN0aXZlVG9kb3MoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0b2RvTGlzdCA9IGFycmF5W2ldLnRvZG9zO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRvZG9MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBhY3RpdmVUb2Rvcy5wdXNoKHRvZG9MaXN0W2pdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydFRvZG9EYXRlcyhhcnJheSkge1xuICAgIGdldEFjdGl2ZVRvZG9zKGFkZGVkUHJvamVjdHMpO1xuICAgIGxldCBzb3J0ZWRUb2RvcyA9IGFycmF5LnNvcnQoKGEsIGIpID0+IFxuICAgIChhLmR1ZURhdGUgPiBiLmR1ZURhdGUpID8gMSA6IChhLmR1ZURhdGUgPCBiLmR1ZURhdGUpID8gLTEgOiAwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5W2ldID0gc29ydGVkVG9kb3NbaV07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckFjdGl2ZVRvZG9zKCkge1xuICAgIGFjdGl2ZVRvZG9zID0gW107XG59XG5cbmV4cG9ydCB7IGFjdGl2ZVRvZG9zLCBjbGVhckFjdGl2ZVRvZG9zIH07IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cywgUHJvamVjdCB9IGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3QnO1xuXG5pbXBvcnQgeyByZXZlYWxEZXRhaWxzIH0gZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9kZXRhaWxzLXRvZ2dsZSc7XG5pbXBvcnQgc2V0VmlldywgeyBQUk9KRUNUX1ZJRVcgfWZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL25ldy10b2RvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0VkaXRGb3JtKGNhcmRObykge1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb0NhcmQubm8ke2NhcmROb31gKTtcbiAgICBpZiAocHJvamVjdFNlbGVjdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICAgICAgbGV0IHByb2plY3RJbmZvID0gKGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zW2NhcmROby0xXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmZvKTtcbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGVkaXRGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ2dldCcpO1xuICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0Rm9ybScpO1xuICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKGBubyR7Y2FyZE5vfWApO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9qZWN0SW5mbykge1xuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9Qcmlvcml0eURpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IExldmVsJ1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW51LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0TWVudSk7XG4gICAgICAgICAgICAgICAgbGV0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICAgICAgICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICAgICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobG93T3B0aW9uKTtcbiAgICAgICAgICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgbWVkaXVtT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gICAgICAgICAgICAgICAgbWVkaXVtT3B0aW9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICAgICAgICAgIGxldCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgaGlnaE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICAgICAgICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbik7IFxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnZHVlRGF0ZScpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9EdWVEYXRlRGl2Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZURpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9wcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAndG9kb3MnKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndG9kb0Rlc2NyaXB0aW9uRGl2Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdWJtaXRFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEVkaXQpO1xuICAgICAgICBzdWJtaXRFZGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0UHJvamVjdCcpO1xuICAgICAgICBzdWJtaXRFZGl0LnNldEF0dHJpYnV0ZSgnaWQnLCBgbm8ke2NhcmROb31gKTtcbiAgICAgICAgc3VibWl0RWRpdC50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICAgICAgc3VibWl0RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvcHJvamVjdFRpdGxlLm5vJHtjYXJkTm99YCkudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvZGVzY3JpcHRpb24ubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb2R1ZURhdGUubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9wcmlvcml0eS5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGVkaXRlZFRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zW2NhcmROby0xXSA9IGVkaXRlZFRvZG87XG4gICAgICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdE1vZGUnKTtcbiAgICAgICAgICAgIHJldmVhbERldGFpbHMoJ3RvZG8nLCBjYXJkTm8pO1xuICAgICAgICAgICAgc2V0VmlldyhgUFJPSkVDVCR7UFJPSkVDVF9WSUVXfWApO1xuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAocHJvamVjdFNlbGVjdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKSkpIHtcbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKTtcbiAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL25ldy10b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9Gb3JtKCkge1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RWaWV3Jyk7XG4gICAgY29uc3QgdG9kb0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRm9ybURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRm9ybScpO1xuICAgIHRvZG9Gb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKHRvZG9Gb3JtRGl2KTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgIHRvZG9Gb3JtRGl2LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcblxuICAgICAgICBsZXQgZm9ybVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdmb3JtUHJpb3JpdHknKTsgIFxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHkpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBMZXZlbCc7ICBcbiAgICAgICAgZm9ybVByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgbGV0IHNlbGVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9Qcmlvcml0eScpO1xuICAgICAgICBzZWxlY3RNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZm9ybVByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdE1lbnUpO1xuICAgICAgICBsZXQgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xuICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICBsZXQgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pOyBcblxuICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVEaXYnKTtcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb0R1ZURhdGUnKTtcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlRGl2Jyk7XG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kb1RpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9UaXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvVGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkRpdicpO1xuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvRGVzY3JpcHRpb24nKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0VG9kby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFRvZG8nKTtcbiAgICAgICAgc3VibWl0VG9kby50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRvZG8pO1xufSIsImltcG9ydCBhZGRFbGxpcHNpc0Z1bmN0aW9uYWxpdHkgZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9lZGl0LXByb2plY3QnO1xuaW1wb3J0IGV4cGFuZFByb2plY3RDYXJkLCB7IHRpdGxlQ2xpY2sgfSBmcm9tICcuLi9wcm9qZWN0LWNyZWF0aW9uL2V4cGFuZC1wcm9qZWN0JztcbmltcG9ydCBhZGRBbGxQcm9qZWN0c1RvRE9NIGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vYWxsUHJvamVjdHMtdG8tRE9NJztcbmltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tICcuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0JztcbmltcG9ydCBjb21wbGV0ZWRUYXNrIGZyb20gJy4uL3NoYXJlZC1jcmVhdGlvbi5qcy9jb21wbGV0ZWQtdGFzayc7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RTZWN0aW9uKCkge1xuICAgIHJlbmRlclByb2plY3RDYXJkcyhhZGRlZFByb2plY3RzKTtcbiAgICBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5KCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RDYXJkcyhhcnJheSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0U2VjdGlvbicpO1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0U2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RTZWN0aW9uVGl0bGUnKTtcbiAgICBwcm9qZWN0U2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ1BST0pFQ1RTJ1xuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RTZWN0aW9uVGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFNlY3Rpb24pO1xuICAgIGFkZEFsbFByb2plY3RzVG9ET00oYXJyYXkpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5KCkge1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Q2FyZCcpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBhZGRFbGxpcHNpc0Z1bmN0aW9uYWxpdHkoKTtcbiAgICBleHBhbmRQcm9qZWN0Q2FyZCgpO1xuICAgIHRpdGxlQ2xpY2soKTtcbiAgICBjb21wbGV0ZWRUYXNrKCdwcm9qZWN0Jyk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RTZWN0aW9uLCByZW5kZXJQcm9qZWN0Q2FyZHMsIGluaXRpYWxpemVQcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkgfTsiLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IFBST0pFQ1RfVklFVyB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuaW1wb3J0IHsgYWRkQWxsVG9kb3NUb0RPTSB9IGZyb20gXCIuLi90b2RvLWNyZWF0aW9uL2FkZC10b2RvLXRvLURPTVwiO1xuaW1wb3J0IHsgc3VibWl0VG9kb0J0biB9IGZyb20gXCIuLi90b2RvLWNyZWF0aW9uL25ldy10b2RvXCI7XG5pbXBvcnQgY3JlYXRlVG9kb0Zvcm0gZnJvbSBcIi4uL3RvZG8tY3JlYXRpb24vdG9kby1mb3JtXCI7XG5pbXBvcnQgYWRkVG9kb0VsbGlwc2lzRnVuY3Rpb25hbGl0eSBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9lZGl0LXRvZG9cIjtcbmltcG9ydCBleHBhbmRUb2RvQ2FyZCBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9leHBhbmQtdG9kb1wiO1xuaW1wb3J0IGNvbXBsZXRlZFRhc2sgZnJvbSBcIi4uL3NoYXJlZC1jcmVhdGlvbi5qcy9jb21wbGV0ZWQtdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0VmlldygpIHtcbiAgICByZW5kZXJQcm9qZWN0Vmlld1RpdGxlKCk7XG4gICAgcmVuZGVyUHJvamVjdFZpZXdEZXNjcmlwdGlvbigpO1xuICAgIHJlbmRlclByb2plY3RUb2Rvc1RpdGxlKCk7XG4gICAgcmVuZGVyUHJvamVjdFRvZG9zKGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zKTtcbiAgICBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgcmVuZGVyTmV3VG9kb0J0bigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Vmlld1RpdGxlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZXcnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RWaWV3KTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZXdUaXRsZScpO1xuICAgIGNvbnN0IHRpdGxlTmFtZSA9IGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXIC0gMV0udGl0bGU7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZU5hbWU7XG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Vmlld0Rlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RWaWV3Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWV3RGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRldGFpbHMgPSBhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVyAtIDFdLmRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb25EZXRhaWxzfWA7XG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufSAgIFxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VG9kb3NUaXRsZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VmlldycpO1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3MuY2xhc3NMaXN0LmFkZCgndG9kb3MnKTtcbiAgICB0b2Rvcy50ZXh0Q29udGVudCA9ICdUT0RPUyc7XG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9kb3MpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VG9kb3MoYXJyYXkpIHtcbiAgICBhZGRBbGxUb2Rvc1RvRE9NKGFycmF5KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3VG9kb0J0bigpIHtcbiAgICBjcmVhdGVUb2RvRm9ybSgpO1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RWaWV3Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXdUb2RvJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJysgQWRkIFRvZG8nXG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBpbml0aWFsaXplQWRkVG9kb0J1dHRvbigpXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVUb2RvQ2FyZEZ1bmN0aW9uYWxpdHkoKSB7XG4gICAgbGV0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9DYXJkJyk7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0NhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9kb0NhcmRGdW5jdGlvbmFsaXR5KCkge1xuICAgIGFkZFRvZG9FbGxpcHNpc0Z1bmN0aW9uYWxpdHkoKTtcbiAgICBleHBhbmRUb2RvQ2FyZCgpO1xuICAgIGNvbXBsZXRlZFRhc2soJ3RvZG8nKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFkZFRvZG9CdXR0b24oKSB7XG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvJyk7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0Zvcm0nKTtcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIHN1Ym1pdFRvZG9CdG4oKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdFRvZG9zLCBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5fTtcbiIsImltcG9ydCBhZGRQcm9qZWN0QnRuLCB7IGluaXRpYWxpemVOZXdQcm9qZWN0QnRuLCBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3QuanNcIjtcbmltcG9ydCB7IGFkZFByb2plY3RUb1NpZGViYXIgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXdQcm9qZWN0LXRvLURPTS5qc1wiO1xuaW1wb3J0IHsgc2lkZWJhckRlbGV0ZUZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuLi9wcm9qZWN0LWNyZWF0aW9uL2VkaXQtcHJvamVjdC5qcyc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdEZvcm0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vcHJvamVjdC1mb3JtLmpzXCI7XG5pbXBvcnQgc2V0VmlldywgeyBBQ1RJVkVfVklFVyB9IGZyb20gXCIuLi9zdGF0ZS5qc1wiO1xuaW1wb3J0IHsgYWRkQWxsUHJvamVjdHNUb1NpZGViYXIgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9hbGxQcm9qZWN0cy10by1ET00uanNcIjtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5jb25zdCB2aWV3cyA9IFsnR0VORVJBTCcsICdUT0RBWScsICdVUENPTUlORyddO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJTaWRlYmFyKCkge1xuICAgIHJlbmRlclZpZXdCdXR0b25zKHZpZXdzKTtcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdExpc3RUaXRsZSgpO1xuICAgIHJlbmRlclNpZGViYXJQcm9qZWN0TGlzdChhZGRlZFByb2plY3RzKTtcbiAgICBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSgpO1xuICAgIGNyZWF0ZVByb2plY3RGb3JtKCk7XG4gICAgcmVuZGVyTmV3UHJvamVjdEJ0bigpO1xuICAgIGFkZFByb2plY3RCdG4oKTtcbiAgICBpbml0aWFsaXplTmV3UHJvamVjdEJ0bigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJWaWV3QnV0dG9ucyh2aWV3cykge1xuICAgIHZpZXdzLmZvckVhY2goKHZpZXdOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNpZGViYXJJdGVtXCIpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIHZpZXdOYW1lKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdmlld05hbWU7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2V0Vmlldyh2aWV3TmFtZSk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhclByb2plY3RMaXN0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJdGVtJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyUHJvamVjdExpc3QocHJvamVjdHMpIHtcbiAgICBhZGRBbGxQcm9qZWN0c1RvU2lkZWJhcihwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5ld1Byb2plY3RCdG4oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJdGVtJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3QnKTtcbiAgICBpZiAoQUNUSVZFX1ZJRVcuaW5jbHVkZXMoJ1BST0pFQ1QnKSkge1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQmFjayB0byBHRU5FUkFMJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFkZCBQcm9qZWN0JztcbiAgICB9XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChidXR0b24pO1xufSIsImltcG9ydCB7IGlzVG9kYXksIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RDYXJkcywgaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL2dlbmVyYWwtdmlld1wiO1xuaW1wb3J0IHNvcnRUb2RvRGF0ZXMsIHsgYWN0aXZlVG9kb3MsIGNsZWFyQWN0aXZlVG9kb3MgfSBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9zb3J0LXRvZG8tZGF0ZXNcIjtcbmltcG9ydCB7IGluaXRpYWxpemVUb2RvQ2FyZEZ1bmN0aW9uYWxpdHksIHJlbmRlclByb2plY3RUb2RvcyB9IGZyb20gXCIuL3Byb2plY3Qtdmlld1wiO1xuXG5sZXQgdG9kYXlwcm9qZWN0cyA9IFtdO1xubGV0IHRvZGF5dG9kb3MgPSBbXTtcblxuZnVuY3Rpb24gdG9kYXlQcm9qZWN0RmlsdGVyKGFycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHBhcnNlSVNPKGFycmF5W2ldLmR1ZURhdGUpO1xuICAgICAgICBpZiAoaXNUb2RheShmb3JtYXR0ZWREYXRlKSkge1xuICAgICAgICAgICAgdG9kYXlwcm9qZWN0cy5wdXNoKGFycmF5W2ldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZGF5VG9kb0ZpbHRlcihhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBwYXJzZUlTTyhhcnJheVtpXS5kdWVEYXRlKTtcbiAgICAgICAgaWYgKGlzVG9kYXkoZm9ybWF0dGVkRGF0ZSkpIHtcbiAgICAgICAgICAgIHRvZGF5dG9kb3MucHVzaChhcnJheVtpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUb2RheVNlY3Rpb24oKSB7XG4gICAgdG9kYXlQcm9qZWN0RmlsdGVyKGFkZGVkUHJvamVjdHMpO1xuICAgIHJlbmRlclByb2plY3RDYXJkcyh0b2RheXByb2plY3RzKTtcbiAgICBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xuICAgIHRvZG9TZWN0aW9uLnRleHRDb250ZW50ID0gJ1RPRE9TJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9TZWN0aW9uKTtcbiAgICBzb3J0VG9kb0RhdGVzKGFkZGVkUHJvamVjdHMpO1xuICAgIHRvZGF5VG9kb0ZpbHRlcihhY3RpdmVUb2Rvcyk7XG4gICAgcmVuZGVyUHJvamVjdFRvZG9zKHRvZGF5dG9kb3MpO1xuICAgIGluaXRpYWxpemVUb2RvQ2FyZEZ1bmN0aW9uYWxpdHkoKTtcbiAgICB0b2RheXRvZG9zID0gW107XG4gICAgdG9kYXlwcm9qZWN0cyA9IFtdO1xuICAgIGNsZWFyQWN0aXZlVG9kb3MoKTtcbn0iLCJpbXBvcnQgeyBwYXJzZUlTTywgaXNUaGlzV2VlaywgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcbmltcG9ydCBzb3J0VG9kb0RhdGVzLCB7IGNsZWFyQWN0aXZlVG9kb3MsIGFjdGl2ZVRvZG9zIH0gZnJvbSBcIi4uL3RvZG8tY3JlYXRpb24vc29ydC10b2RvLWRhdGVzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0Q2FyZHMsIGluaXRpYWxpemVQcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkgfSBmcm9tIFwiLi9nZW5lcmFsLXZpZXdcIjtcbmltcG9ydCB7IGluaXRpYWxpemVUb2RvQ2FyZEZ1bmN0aW9uYWxpdHksIHJlbmRlclByb2plY3RUb2RvcyB9IGZyb20gXCIuL3Byb2plY3Qtdmlld1wiO1xuXG5sZXQgdXBjb21pbmdQcm9qZWN0cyA9IFtdO1xubGV0IHVwY29taW5nVG9kb3MgPSBbXTtcblxuZnVuY3Rpb24gdXBjb21pbmdQcm9qZWN0c0ZpbHRlcihhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBwYXJzZUlTTyhhcnJheVtpXS5kdWVEYXRlKTtcbiAgICAgICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmIChkaWZmZXJlbmNlSW5DYWxlbmRhckRheXModG9kYXlEYXRlLCBmb3JtYXR0ZWREYXRlKSA8PSAxNCkge1xuICAgICAgICAgICAgdXBjb21pbmdQcm9qZWN0cy5wdXNoKGFycmF5W2ldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwY29taW5nVG9kb3NGaWx0ZXIoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gcGFyc2VJU08oYXJyYXlbaV0uZHVlRGF0ZSk7XG4gICAgICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRvZGF5RGF0ZSwgZm9ybWF0dGVkRGF0ZSkgPD0gMTQpIHtcbiAgICAgICAgICAgIHVwY29taW5nVG9kb3MucHVzaChhcnJheVtpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJVcGNvbWluZ1NlY3Rpb24oKSB7XG4gICAgdXBjb21pbmdQcm9qZWN0c0ZpbHRlcihhZGRlZFByb2plY3RzKTtcbiAgICByZW5kZXJQcm9qZWN0Q2FyZHModXBjb21pbmdQcm9qZWN0cyk7XG4gICAgaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9kb3MnKTtcbiAgICB0b2RvU2VjdGlvbi50ZXh0Q29udGVudCA9ICdUT0RPUyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvU2VjdGlvbik7XG4gICAgc29ydFRvZG9EYXRlcyhhZGRlZFByb2plY3RzKTtcbiAgICB1cGNvbWluZ1RvZG9zRmlsdGVyKGFjdGl2ZVRvZG9zKTtcbiAgICByZW5kZXJQcm9qZWN0VG9kb3ModXBjb21pbmdUb2Rvcyk7XG4gICAgaW5pdGlhbGl6ZVRvZG9DYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgIHVwY29taW5nUHJvamVjdHMgPSBbXTtcbiAgICB1cGNvbWluZ1RvZG9zID0gW107XG4gICAgY2xlYXJBY3RpdmVUb2RvcygpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXNUb2RheSwgdG9EYXRlLCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBzZXRWaWV3ICBmcm9tICcuL3N0YXRlJztcbmltcG9ydCBzb3J0RGF0ZXMgZnJvbSAnLi9wcm9qZWN0LWNyZWF0aW9uL3NvcnQtcHJvamVjdC1kYXRlcyc7XG5pbXBvcnQgZ2V0QWN0aXZlVG9kb3MsIHsgYWN0aXZlVG9kb0xpc3RzLCBhY3RpdmVUb2RvcyB9IGZyb20gJy4vdG9kby1jcmVhdGlvbi9zb3J0LXRvZG8tZGF0ZXMnO1xuaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdCc7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG50aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhZGRlZFByb2plY3RzKTtcbn0pXG5cbnNldFZpZXcoJ0dFTkVSQUwnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=