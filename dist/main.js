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
/* harmony import */ var _edit_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-form.js */ "./src/project-creation/edit-form.js");
/* harmony import */ var _details_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-toggle.js */ "./src/project-creation/details-toggle.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/state.js");





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
            (0,_state__WEBPACK_IMPORTED_MODULE_3__.removeProject)(_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects, projectNo);
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
            (0,_state__WEBPACK_IMPORTED_MODULE_3__["default"])('GENERAL')
            ;(0,_state__WEBPACK_IMPORTED_MODULE_3__.removeProject)(_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects, projectNo);
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
            (0,_details_toggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])('project', cardNo);
            (0,_edit_form_js__WEBPACK_IMPORTED_MODULE_1__["default"])((e.target.id.slice(lastChar)));
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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.js");


let addedProjects = [];

function addProjectBtn() {
    let addProjectBtn = document.querySelector('.addProject');
    const projectForm = document.querySelector('.projectForm');
    addProjectBtn.addEventListener('click', () => {
        if (`${_state__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_VIEW}`.includes('PROJECT')) {
            (0,_state__WEBPACK_IMPORTED_MODULE_0__["default"])('GENERAL');
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
    })
}

function newProjectInfo() {
    const title = document.querySelector('#projectTitle.main').value;
    const description = document.querySelector('#description.main').value;
    const dueDate = document.querySelector('#dueDate.main').value;
    const priority = document.querySelector('#priority.main').value;
    let newProject = new Project(title, description, dueDate, priority, []);
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.addProject)(addedProjects, newProject);
}

function clearFormEntry(priorityName) {
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach((input) => input.value = '');
    let priorityInput = document.querySelector(`#${priorityName}`);
    priorityInput.value = 'low';
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
/* harmony import */ var _views_general_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/general-view.js */ "./src/views/general-view.js");
/* harmony import */ var _views_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/sidebar.js */ "./src/views/sidebar.js");
/* harmony import */ var _views_today_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/today-view */ "./src/views/today-view.js");
/* harmony import */ var _views_upcoming_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/upcoming-view */ "./src/views/upcoming-view.js");
/* harmony import */ var _project_creation_sort_project_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-creation/sort-project-dates */ "./src/project-creation/sort-project-dates.js");
/* harmony import */ var _views_project_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/project-view */ "./src/views/project-view.js");
 






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
    (0,_project_creation_sort_project_dates__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const content = document.querySelector('.content');
    content.replaceChildren();

    const sidebar = document.querySelector('.sidebar');
    sidebar.replaceChildren();
    (0,_views_sidebar_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

    switch (ACTIVE_VIEW) {
        case 'GENERAL':
            (0,_views_general_view_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectSection)();
            break;
        case 'TODAY':
            (0,_views_today_view__WEBPACK_IMPORTED_MODULE_2__["default"])();
            break;
        case 'UPCOMING':
            (0,_views_upcoming_view__WEBPACK_IMPORTED_MODULE_3__["default"])();
            break;
        case `PROJECT${PROJECT_VIEW}`:
            (0,_views_project_view__WEBPACK_IMPORTED_MODULE_5__["default"])();
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
/* harmony import */ var _project_creation_edit_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-creation/edit-project.js */ "./src/project-creation/edit-project.js");
/* harmony import */ var _project_creation_project_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-creation/project-form.js */ "./src/project-creation/project-form.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.js */ "./src/state.js");
/* harmony import */ var _project_creation_allProjects_to_DOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project-creation/allProjects-to-DOM.js */ "./src/project-creation/allProjects-to-DOM.js");






const sidebar = document.querySelector('.sidebar');
const views = ['GENERAL', 'TODAY', 'UPCOMING'];

function renderSidebar() {
    renderViewButtons(views);
    renderSidebarProjectListTitle();
    renderSidebarProjectList(_project_creation_new_project_js__WEBPACK_IMPORTED_MODULE_0__.addedProjects);
    (0,_project_creation_edit_project_js__WEBPACK_IMPORTED_MODULE_1__.sidebarDeleteFunctionality)();
    (0,_project_creation_project_form_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
            (0,_state_js__WEBPACK_IMPORTED_MODULE_3__["default"])(viewName);
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
    (0,_project_creation_allProjects_to_DOM_js__WEBPACK_IMPORTED_MODULE_4__.addAllProjectsToSidebar)(projects);
}

function renderNewProjectBtn() {
    const button = document.createElement('div');
    button.classList.add('sidebarItem');
    button.classList.add('addProject');
    if (_state_js__WEBPACK_IMPORTED_MODULE_3__.ACTIVE_VIEW.includes('PROJECT')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL2FsbFByb2plY3RzLXRvLURPTS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24vZGV0YWlscy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL2VkaXQtZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24vZWRpdC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9leHBhbmQtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL3Byb2plY3QtZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24vc29ydC1wcm9qZWN0LWRhdGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc2hhcmVkLWNyZWF0aW9uLmpzL2NvbXBsZXRlZC10YXNrLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNyZWF0aW9uL2FkZC10b2RvLXRvLURPTS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRpb24vZWRpdC10b2RvLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGlvbi9leHBhbmQtdG9kby5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRpb24vbmV3LXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNyZWF0aW9uL3NvcnQtdG9kby1kYXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRpb24vdG9kby1lZGl0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNyZWF0aW9uL3RvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2dlbmVyYWwtdmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3Byb2plY3Qtdmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy90b2RheS12aWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvdXBjb21pbmctdmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBzZXRQcm9qZWN0VmlldyB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRBbGxQcm9qZWN0c1RvRE9NKGFycmF5KSB7XG4gICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFNlY3Rpb24nKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGFycmF5W2ldO1xuICAgICAgICBsZXQgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChgcHJvamVjdENhcmRgKTtcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuICAgICAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q2FyZC5ubycrW2krMV0pO1xuXG4gICAgICAgIGxldCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RjaGVja21hcmsnKTtcbiAgICAgICAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgnaWQnLCBgYyR7W2krMV19YCk7XG4gICAgICAgIGNoZWNrbWFyay5zcmMgPSAnY2hlY2ttYXJrLnN2Zyc7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb2plY3RMaXN0KSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke3Byb3B9YCk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtwcm9qZWN0TGlzdFtwcm9wXX1gKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgaGlkZGVuYCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgKz0gcHJvamVjdExpc3RbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd0b2RvcycpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCArPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdCcpO1xuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcbiAgICAgICAgbGV0IHRvZG9zID0gYXJyYXlbaV0udG9kb3MubGVuZ3RoO1xuICAgICAgICB0b2RvTGlzdC50ZXh0Q29udGVudCA9IGBUb2RvcyBSZW1haW5pbmc6ICR7dG9kb3N9YDtcblxuICAgICAgICBsZXQgZWxsaXBzaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWxsaXBzaXMuY2xhc3NMaXN0LmFkZCgncHJvamVjdGVsbGlwc2lzJyk7XG4gICAgICAgIGVsbGlwc2lzLnNldEF0dHJpYnV0ZSgnaWQnLCBgZSR7W2krMV19YCk7XG4gICAgICAgIGVsbGlwc2lzLnNyYyA9ICdlbGxpcHNpcy5zdmcnO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGVsbGlwc2lzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkQWxsUHJvamVjdHNUb1NpZGViYXIoYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0U2lkZUJhclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBhcnJheVtpXVxuICAgICAgICAgICAgbGV0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZChgcHJvamVjdFRhYmApO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgICAgICBwcm9qZWN0U2lkZUJhclNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUYWJTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8nK1tpKzFdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0VGFiRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGFiRWxlbWVudC5jbGFzc0xpc3QuYWRkKGB0YWIke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYkVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGFiRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNpZGViYXJEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHNpZGViYXJEZWxldGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckRlbGV0ZScpO1xuICAgICAgICAgICAgc2lkZWJhckRlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHNpZGViYXJEJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIHNpZGViYXJEZWxldGUuc3JjID0gJ2RlbGJ0bi5zdmcnO1xuICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChzaWRlYmFyRGVsZXRlKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFidGl0bGUubm8ke1tpKzFdfWApO1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IGUudGFyZ2V0LmNsYXNzTmFtZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHNldFByb2plY3RWaWV3KGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcikpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgYWRkQWxsUHJvamVjdHNUb1NpZGViYXIgfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlRGV0YWlscyhjYXJkVHlwZSwgY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfUNhcmQubm8ke2NhcmROb31gKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZGVzY3JpcHRpb25gKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9dGl0bGVgKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBkdWVEYXRlID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtjYXJkVHlwZX1kdWVEYXRlYCk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBlbGxpcHNpcyA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZWxsaXBzaXNgKTtcbiAgICBlbGxpcHNpcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZWFsRGV0YWlscyhjYXJkVHlwZSwgY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfUNhcmQubm8ke2NhcmROb31gKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfWRlc2NyaXB0aW9uYCk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgdGl0bGUgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfXRpdGxlYCk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZHVlRGF0ZWApO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgZWxsaXBzaXMgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfWVsbGlwc2lzYCk7XG4gICAgZWxsaXBzaXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cywgUHJvamVjdCB9IGZyb20gJy4vbmV3LXByb2plY3QuanMnO1xuXG5pbXBvcnQgeyByZXZlYWxEZXRhaWxzIH0gZnJvbSAnLi9kZXRhaWxzLXRvZ2dsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRGb3JtKGNhcmRObykge1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdENhcmQubm8ke2NhcmROb31gKTtcbiAgICBpZiAocHJvamVjdFNlbGVjdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKSkgPT09IGZhbHNlKSB7XG4gICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgIGxldCBwcm9qZWN0SW5mbyA9IChhZGRlZFByb2plY3RzW2NhcmROby0xXSk7XG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZWRpdEZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdEZvcm0nKTtcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKGBubyR7Y2FyZE5vfWApO1xuICAgIGZvciAobGV0IHByb3AgaW4gcHJvamVjdEluZm8pIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eURpdicpO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3ApO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgTGV2ZWwnXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICBzZWxlY3RNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0TWVudSk7XG4gICAgICAgICAgICBsZXQgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBsb3dPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICAgICAgICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xuICAgICAgICAgICAgbGV0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbWVkaXVtT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gICAgICAgICAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobWVkaXVtT3B0aW9uKTtcbiAgICAgICAgICAgIGxldCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICAgICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbik7IFxuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkdWVEYXRlJykge1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVEaXYnKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3ApO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgcHJvcCk7XG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9wKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlRGl2Jyk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcCk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBwcm9wKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3RvZG9zJykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25EaXYnKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHByb3ApO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIHByb3ApO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBzdWJtaXRFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0RWRpdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1Ym1pdFByb2plY3QnKTtcbiAgICBzdWJtaXRFZGl0LnNldEF0dHJpYnV0ZSgnaWQnLCBgbm8ke2NhcmROb31gKTtcbiAgICBzdWJtaXRFZGl0LnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgIHN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3RUaXRsZS5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkZXNjcmlwdGlvbi5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2R1ZURhdGUubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJpb3JpdHkubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBhZGRlZFByb2plY3RzW2NhcmRObyAtIDFdLnRvZG9zO1xuICAgICAgICBsZXQgZWRpdGVkUHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRvZG9zKTtcbiAgICAgICAgYWRkZWRQcm9qZWN0c1soY2FyZE5vKS0xXSA9IGVkaXRlZFByb2plY3Q7XG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRNb2RlJyk7XG4gICAgICAgIHJldmVhbERldGFpbHMoJ3Byb2plY3QnLCBjYXJkTm8pO1xuXG4gICAgICAgIGxldCBwcm9qZWN0Tm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAubm8ke2NhcmROb31gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Tm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0dGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0ZGVzY3JpcHRpb24nKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdE5vW2ldLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdGR1ZURhdGUnKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2plY3ROb1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3Rwcmlvcml0eScpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdycpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0nKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEVkaXQpO1xuICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoZWRpdEZvcm0pO1xuXG59IGVsc2UgaWYgKHByb2plY3RTZWxlY3QuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVkaXRGb3JtLm5vJHtjYXJkTm99YCkpKSB7XG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKTtcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2VkaXRNb2RlJyk7XG59XG59IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuL25ldy1wcm9qZWN0XCI7XG5pbXBvcnQgY3JlYXRlRWRpdEZvcm0gZnJvbSBcIi4vZWRpdC1mb3JtLmpzXCI7XG5pbXBvcnQgaGlkZURldGFpbHMgZnJvbSBcIi4vZGV0YWlscy10b2dnbGUuanNcIjtcbmltcG9ydCBzZXRWaWV3LCB7IHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCkge1xuICAgIGNvbnN0IGVsbGlwc2lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RlbGxpcHNpcycpO1xuICAgIGxldCBwb3BVcE9wZW4gPSBmYWxzZTtcbiAgICBlbGxpcHNpcy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdENhcmQubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAocHJvamVjdENhcmQuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3B1cE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwb3B1cE1lbnUuY2xhc3NMaXN0LmFkZChgcG9wdXBNZW51JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7IFxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwb3B1cERlbGV0ZScpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgZGVsJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncG9wdXBFZGl0Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgZWRpdCR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIHBvcHVwTWVudS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwb3B1cE1lbnUpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0KGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcFVwT3BlbiA9PT0gdHJ1ZSB8fCBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuY29udGFpbnMoYC5lZGl0TW9kZWApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBtZW51U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwb3BVcE9wZW4gPT09IGZhbHNlICYmIHByb2plY3RDYXJkLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIG1lbnVTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cERlbGV0ZScpO1xuICAgIGRlbGV0ZUJ0bi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RObyA9IChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpIC0gMTtcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3QoYWRkZWRQcm9qZWN0cywgcHJvamVjdE5vKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBjb25zdCBzaWRlYmFyRGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJEZWxldGUnKTtcbiAgICBzaWRlYmFyRGVsZXRlQnRuLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RObyA9IChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpIC0gMTtcbiAgICAgICAgICAgIHNldFZpZXcoJ0dFTkVSQUwnKVxuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChhZGRlZFByb2plY3RzLCBwcm9qZWN0Tm8pO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KGNhcmRObykge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBFZGl0Jyk7XG4gICAgZWRpdEJ0bi5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUke2NhcmROb31gKVxuICAgICAgICAgICAgcG9wdXBNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgICAgICAgICAgaGlkZURldGFpbHMoJ3Byb2plY3QnLCBjYXJkTm8pO1xuICAgICAgICAgICAgY3JlYXRlRWRpdEZvcm0oKGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSkpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IHNpZGViYXJEZWxldGVGdW5jdGlvbmFsaXR5IH07XG5cbiIsImltcG9ydCB7IHNldFByb2plY3RWaWV3IH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRQcm9qZWN0Q2FyZCgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdENhcmQnKTtcbiAgICBwcm9qZWN0Q2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuY2xhc3NOYW1lKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdENhcmQnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdENhcmQubm8ke2UudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICBpZiAocHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXRNb2RlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvTGlzdC5ubyR7ZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB0aXRsZUNsaWNrKCkge1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0dGl0bGUnKTtcbiAgICBwcm9qZWN0Q2FyZHMuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmNsYXNzTmFtZSkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBzZXRQcm9qZWN0VmlldyhlLnRhcmdldC5jbGFzc05hbWUuc2xpY2UobGFzdENoYXIpKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgeyB0aXRsZUNsaWNrIH0iLCJpbXBvcnQgc2V0VmlldywgeyBBQ1RJVkVfVklFVywgYWRkUHJvamVjdCB9IGZyb20gJy4uL3N0YXRlJztcblxubGV0IGFkZGVkUHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdEJ0bigpIHtcbiAgICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Jyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKTtcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoYCR7QUNUSVZFX1ZJRVd9YC5pbmNsdWRlcygnUFJPSkVDVCcpKSB7XG4gICAgICAgICAgICBzZXRWaWV3KCdHRU5FUkFMJyk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRvZG9zKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTmV3UHJvamVjdEJ0bigpIHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuICAgIGNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpO1xuICAgIHN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG5ld1Byb2plY3RJbmZvKCk7XG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBjbGVhckZvcm1FbnRyeSgncHJpb3JpdHknKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0SW5mbygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUubWFpbicpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uLm1haW4nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUubWFpbicpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Lm1haW4nKS52YWx1ZTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIFtdKTtcbiAgICBhZGRQcm9qZWN0KGFkZGVkUHJvamVjdHMsIG5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBjbGVhckZvcm1FbnRyeShwcmlvcml0eU5hbWUpIHtcbiAgICBsZXQgYWxsSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBhbGxJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGlucHV0LnZhbHVlID0gJycpO1xuICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJpb3JpdHlOYW1lfWApO1xuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSAnbG93Jztcbn1cblxuZXhwb3J0IHsgYWRkZWRQcm9qZWN0cywgUHJvamVjdCwgY2xlYXJGb3JtRW50cnkgfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XG4gICAgcHJvamVjdEZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybURpdik7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cbiAgICAgICAgbGV0IGZvcm1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZm9ybVByaW9yaXR5Jyk7ICBcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVByaW9yaXR5KTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgTGV2ZWwnOyAgXG4gICAgICAgIGZvcm1Qcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIGxldCBzZWxlY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICAgICAgICBzZWxlY3RNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZm9ybVByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdE1lbnUpO1xuICAgICAgICBsZXQgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xuICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICBsZXQgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pOyBcblxuICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVEaXYnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGVEaXYnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFRpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uRGl2Jyk7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgIGxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRQcm9qZWN0Jyk7XG4gICAgICAgIHN1Ym1pdFByb2plY3QudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0KTtcbn0iLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydERhdGVzKCkge1xuICAgIGxldCBzb3J0ZWRQcm9qZWN0cyA9IGFkZGVkUHJvamVjdHMuc29ydCgoYSwgYikgPT4gXG4gICAgKGEuZHVlRGF0ZSA+IGIuZHVlRGF0ZSkgPyAxIDogKGEuZHVlRGF0ZSA8IGIuZHVlRGF0ZSkgPyAtMSA6IDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhZGRlZFByb2plY3RzW2ldID0gc29ydGVkUHJvamVjdHNbaV07XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyByZW1vdmVQcm9qZWN0LCByZW1vdmVUb2RvLCBQUk9KRUNUX1ZJRVcgfSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wbGV0ZWRUYXNrKHRhc2tUeXBlKSB7XG4gICAgbGV0IGNoZWNrbWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0YXNrVHlwZX1jaGVja21hcmtgKTtcbiAgICBjaGVja21hcmtzLmZvckVhY2goKGNoZWNrKSA9PiB7XG4gICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCB0YXNrTm8gPSAoZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpKSAtIDE7XG4gICAgICAgICAgICBpZiAodGFza1R5cGUgPT09ICd0b2RvJykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRvZG8oYWRkZWRQcm9qZWN0c1tQUk9KRUNUX1ZJRVctMV0udG9kb3MsIHRhc2tObyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2tUeXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVQcm9qZWN0KGFkZGVkUHJvamVjdHMsIHRhc2tObyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0U2VjdGlvbiB9IGZyb20gXCIuL3ZpZXdzL2dlbmVyYWwtdmlldy5qc1wiOyBcbmltcG9ydCByZW5kZXJTaWRlYmFyIGZyb20gJy4vdmlld3Mvc2lkZWJhci5qcydcbmltcG9ydCByZW5kZXJUb2RheVNlY3Rpb24gZnJvbSBcIi4vdmlld3MvdG9kYXktdmlld1wiO1xuaW1wb3J0IHJlbmRlclVwY29taW5nU2VjdGlvbiBmcm9tIFwiLi92aWV3cy91cGNvbWluZy12aWV3XCI7XG5pbXBvcnQgc29ydERhdGVzIGZyb20gXCIuL3Byb2plY3QtY3JlYXRpb24vc29ydC1wcm9qZWN0LWRhdGVzXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdFZpZXcgZnJvbSBcIi4vdmlld3MvcHJvamVjdC12aWV3XCI7XG5cbmxldCBBQ1RJVkVfVklFVyA9ICdHRU5FUkFMJztcbmxldCBQUk9KRUNUX1ZJRVc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFZpZXcodmlldykge1xuICAgIEFDVElWRV9WSUVXID0gdmlldztcbiAgICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gc2V0UHJvamVjdFZpZXcocHJvamVjdE5vKSB7XG4gICAgUFJPSkVDVF9WSUVXID0gcHJvamVjdE5vO1xuICAgIHNldFZpZXcoYFBST0pFQ1Qke1BST0pFQ1RfVklFV31gKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgc29ydERhdGVzKCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIHNpZGViYXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgcmVuZGVyU2lkZWJhcigpO1xuXG4gICAgc3dpdGNoIChBQ1RJVkVfVklFVykge1xuICAgICAgICBjYXNlICdHRU5FUkFMJzpcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RTZWN0aW9uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVE9EQVknOlxuICAgICAgICAgICAgcmVuZGVyVG9kYXlTZWN0aW9uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVVBDT01JTkcnOlxuICAgICAgICAgICAgcmVuZGVyVXBjb21pbmdTZWN0aW9uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBgUFJPSkVDVCR7UFJPSkVDVF9WSUVXfWA6XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0VmlldygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRQcm9qZWN0KGFycmF5LCBwcm9qZWN0KSB7XG4gICAgYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChhcnJheSwgcHJvamVjdCkge1xuICAgIGFycmF5LnNwbGljZShwcm9qZWN0LCAxKTtcbiAgICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhhcnJheSwgdG9kbykge1xuICAgIGFycmF5LnNwbGljZSh0b2RvLCAxKTtcbiAgICByZW5kZXIoKTtcbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgc2V0UHJvamVjdFZpZXcsIFBST0pFQ1RfVklFVywgQUNUSVZFX1ZJRVcsIHJlbW92ZVRvZG8gfTtcblxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9kb1RvRE9NKGFycmF5KSB7XG4gICAgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gKGFycmF5Lmxlbmd0aC0xKTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG9kb0xpc3QgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGxldCB0b2RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9kb0NhcmQpO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kb0NhcmQnKTtcbiAgICAgICAgICAgIHRvZG9DYXJkLmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ2FyZC5ubycrW2krMV0pO1xuXG4gICAgICAgICAgICBsZXQgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgndG9kb2NoZWNrbWFyaycpO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kb2Mke1tpKzFdfWApO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnNyYyA9ICdjaGVja21hcmsuc3ZnJztcbiAgICAgICAgICAgIGNhcmRTZWxlY3QuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0b2RvTGlzdCkge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHt0b2RvTGlzdFtwcm9wXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgaGlkZGVuYCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LnRleHRDb250ZW50ICs9IHRvZG9MaXN0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LnRleHRDb250ZW50ICs9IHRvZG9MaXN0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZWxsaXBzaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGVsbGlwc2lzLmNsYXNzTGlzdC5hZGQoJ3RvZG9lbGxpcHNpcycpO1xuICAgICAgICAgICAgZWxsaXBzaXMuc2V0QXR0cmlidXRlKCdpZCcsIGBlJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIGVsbGlwc2lzLnNyYyA9ICdlbGxpcHNpcy5zdmcnO1xuICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZChlbGxpcHNpcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBbGxUb2Rvc1RvRE9NKGFycmF5KSB7XG4gICAgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG9kb0xpc3QgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGxldCB0b2RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9kb0NhcmQpO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kb0NhcmQnKTtcbiAgICAgICAgICAgIHRvZG9DYXJkLmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ2FyZC5ubycrW2krMV0pO1xuXG4gICAgICAgICAgICBsZXQgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgndG9kb2NoZWNrbWFyaycpO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kb2Mke1tpKzFdfWApO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnNyYyA9ICdjaGVja21hcmsuc3ZnJztcbiAgICAgICAgICAgIGNhcmRTZWxlY3QuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0b2RvTGlzdCkge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHt0b2RvTGlzdFtwcm9wXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgaGlkZGVuYCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LnRleHRDb250ZW50ICs9IHRvZG9MaXN0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LnRleHRDb250ZW50ICs9IHRvZG9MaXN0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZWxsaXBzaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGVsbGlwc2lzLmNsYXNzTGlzdC5hZGQoJ3RvZG9lbGxpcHNpcycpO1xuICAgICAgICAgICAgZWxsaXBzaXMuc2V0QXR0cmlidXRlKCdpZCcsIGBlJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIGVsbGlwc2lzLnNyYyA9ICdlbGxpcHNpcy5zdmcnO1xuICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZChlbGxpcHNpcyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3QnXG5pbXBvcnQgY3JlYXRlVG9kb0VkaXRGb3JtIGZyb20gJy4vdG9kby1lZGl0LWZvcm0nXG5pbXBvcnQgaGlkZURldGFpbHMgZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vZGV0YWlscy10b2dnbGVcIjtcbmltcG9ydCB7IHJlbW92ZVRvZG8sIFBST0pFQ1RfVklFVyB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCkge1xuICAgIGNvbnN0IGVsbGlwc2lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9lbGxpcHNpcycpO1xuICAgIGxldCBwb3BVcE9wZW4gPSBmYWxzZTtcbiAgICBlbGxpcHNpcy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgdG9kb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb0NhcmQubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodG9kb0NhcmQuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9Qb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdXBNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmNsYXNzTGlzdC5hZGQoYHRvZG9Qb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTsgXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG9Qb3B1cERlbGV0ZScpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgZGVsJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kb1BvcHVwRWRpdCcpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGVkaXQke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBwb3B1cE1lbnUuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgICAgICAgICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQocG9wdXBNZW51KTtcbiAgICAgICAgICAgICAgICBwb3BVcE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoKTtcbiAgICAgICAgICAgICAgICBlZGl0UHJvamVjdChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwb3BVcE9wZW4gPT09IHRydWUgfHwgdG9kb0NhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKGAuZWRpdE1vZGVgKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb1BvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIG1lbnVTZWxlY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcFVwT3BlbiA9PT0gZmFsc2UgJiYgdG9kb0NhcmQuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9Qb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9Qb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBtZW51U2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb1BvcHVwRGVsZXRlJyk7XG4gICAgZGVsZXRlQnRuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5vID0gKGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSkgLSAxO1xuICAgICAgICAgICAgcmVtb3ZlVG9kbyhhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVy0xXS50b2RvcywgcHJvamVjdE5vKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChjYXJkTm8pIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9Qb3B1cEVkaXQnKTtcbiAgICBlZGl0QnRuLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCB0b2RvU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9DYXJkLm5vJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgcG9wdXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9Qb3B1cE1lbnUke2NhcmROb31gKVxuICAgICAgICAgICAgcG9wdXBNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdG9kb1NlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgICAgICAgICAgY3JlYXRlVG9kb0VkaXRGb3JtKChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpKTtcbiAgICAgICAgICAgIGhpZGVEZXRhaWxzKCd0b2RvJywgY2FyZE5vKTtcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvZG9DYXJkKCkge1xuICAgIGNvbnN0IHRvZG9DYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvQ2FyZCcpO1xuICAgIHRvZG9DYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5jbGFzc05hbWUpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvQ2FyZCcpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdG9kb1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvQ2FyZC5ubyR7ZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGlmICh0b2RvU2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdE1vZGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kb1NlbGVjdC5xdWVyeVNlbGVjdG9yKCcudG9kb2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgUFJPSkVDVF9WSUVXIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgYWRkVG9kb1RvRE9NIGZyb20gXCIuL2FkZC10b2RvLXRvLURPTVwiO1xuaW1wb3J0IHsgY2xlYXJGb3JtRW50cnkgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IGFkZFRvZG9FbGxpcHNpc0Z1bmN0aW9uYWxpdHkgZnJvbSBcIi4vZWRpdC10b2RvXCI7XG5pbXBvcnQgZXhwYW5kVG9kb0NhcmQgZnJvbSBcIi4vZXhwYW5kLXRvZG9cIjtcbmltcG9ydCBjb21wbGV0ZWRUYXNrIGZyb20gXCIuLi9zaGFyZWQtY3JlYXRpb24uanMvY29tcGxldGVkLXRhc2tcIjtcblxubGV0IHRvZG9MaXN0ID0gW107XG5cbmZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRvZG9CdG4oKSB7XG4gICAgY29uc3Qgc3VibWl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRUb2RvJyk7XG4gICAgc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbmV3VG9kb0luZm8oKTtcbiAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0Zvcm0nKVxuICAgICAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgYWRkVG9kb1RvRE9NKGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zKTtcbiAgICAgICAgY2xlYXJGb3JtRW50cnkoJ3RvZG9Qcmlvcml0eScpO1xuICAgICAgICBhZGRUb2RvRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCk7XG4gICAgICAgIGV4cGFuZFRvZG9DYXJkKCk7XG4gICAgICAgIGNvbXBsZXRlZFRhc2soJ3RvZG8nKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdUb2RvSW5mbygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvVGl0bGUubWFpbmApLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9EZXNjcmlwdGlvbi5tYWluYCkudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvRHVlRGF0ZS5tYWluYCkudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb1ByaW9yaXR5Lm1haW5gKS52YWx1ZTtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIHRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgYWRkZWRQcm9qZWN0c1tQUk9KRUNUX1ZJRVcgLSAxXS50b2Rvcy5wdXNoKG5ld1RvZG8pO1xufVxuXG5leHBvcnQgeyBzdWJtaXRUb2RvQnRuLCBUb2RvIH07XG5cbiIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuXG5sZXQgYWN0aXZlVG9kb3MgPSBbXTtcblxuZnVuY3Rpb24gZ2V0QWN0aXZlVG9kb3MoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0b2RvTGlzdCA9IGFycmF5W2ldLnRvZG9zO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRvZG9MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBhY3RpdmVUb2Rvcy5wdXNoKHRvZG9MaXN0W2pdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydFRvZG9EYXRlcyhhcnJheSkge1xuICAgIGdldEFjdGl2ZVRvZG9zKGFkZGVkUHJvamVjdHMpO1xuICAgIGxldCBzb3J0ZWRUb2RvcyA9IGFycmF5LnNvcnQoKGEsIGIpID0+IFxuICAgIChhLmR1ZURhdGUgPiBiLmR1ZURhdGUpID8gMSA6IChhLmR1ZURhdGUgPCBiLmR1ZURhdGUpID8gLTEgOiAwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5W2ldID0gc29ydGVkVG9kb3NbaV07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckFjdGl2ZVRvZG9zKCkge1xuICAgIGFjdGl2ZVRvZG9zID0gW107XG59XG5cbmV4cG9ydCB7IGFjdGl2ZVRvZG9zLCBjbGVhckFjdGl2ZVRvZG9zIH07IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3QnO1xuaW1wb3J0IHsgcmV2ZWFsRGV0YWlscyB9IGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vZGV0YWlscy10b2dnbGUnO1xuaW1wb3J0IHNldFZpZXcsIHsgUFJPSkVDVF9WSUVXIH1mcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9uZXctdG9kbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9FZGl0Rm9ybShjYXJkTm8pIHtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9DYXJkLm5vJHtjYXJkTm99YCk7XG4gICAgaWYgKHByb2plY3RTZWxlY3QuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVkaXRGb3JtLm5vJHtjYXJkTm99YCkpID09PSBmYWxzZSkge1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2VkaXRNb2RlJyk7XG4gICAgICAgIGxldCBwcm9qZWN0SW5mbyA9IChhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVy0xXS50b2Rvc1tjYXJkTm8tMV0pO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5mbyk7XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBlZGl0Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdEZvcm0nKTtcbiAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZChgbm8ke2NhcmROb31gKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvamVjdEluZm8pIHtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvUHJpb3JpdHlEaXYnKTtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBMZXZlbCdcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdE1lbnUpO1xuICAgICAgICAgICAgICAgIGxldCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBsb3dPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICAgICAgICAgICAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XG4gICAgICAgICAgICAgICAgbGV0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICAgICAgICAgIG1lZGl1bU9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobWVkaXVtT3B0aW9uKTtcbiAgICAgICAgICAgICAgICBsZXQgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIGhpZ2hPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gICAgICAgICAgICAgICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pOyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2R1ZURhdGUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRHVlRGF0ZURpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGl0bGVEaXYnKTtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvcHJvamVjdFRpdGxlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3RvZG9zJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXNjcmlwdGlvbkRpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc3VibWl0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRFZGl0KTtcbiAgICAgICAgc3VibWl0RWRpdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1Ym1pdFByb2plY3QnKTtcbiAgICAgICAgc3VibWl0RWRpdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYG5vJHtjYXJkTm99YCk7XG4gICAgICAgIHN1Ym1pdEVkaXQudGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgICAgIHN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb3Byb2plY3RUaXRsZS5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb2Rlc2NyaXB0aW9uLm5vJHtjYXJkTm99YCkudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9kdWVEYXRlLm5vJHtjYXJkTm99YCkudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvcHJpb3JpdHkubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBlZGl0ZWRUb2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgICAgICBhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVy0xXS50b2Rvc1tjYXJkTm8tMV0gPSBlZGl0ZWRUb2RvO1xuICAgICAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRNb2RlJyk7XG4gICAgICAgICAgICByZXZlYWxEZXRhaWxzKCd0b2RvJywgY2FyZE5vKTtcbiAgICAgICAgICAgIHNldFZpZXcoYFBST0pFQ1Qke1BST0pFQ1RfVklFV31gKTtcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHByb2plY3RTZWxlY3QuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVkaXRGb3JtLm5vJHtjYXJkTm99YCkpKSB7XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVkaXRGb3JtLm5vJHtjYXJkTm99YCk7XG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2VkaXRNb2RlJyk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9Gb3JtKCkge1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RWaWV3Jyk7XG4gICAgY29uc3QgdG9kb0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRm9ybURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRm9ybScpO1xuICAgIHRvZG9Gb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKHRvZG9Gb3JtRGl2KTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgIHRvZG9Gb3JtRGl2LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcblxuICAgICAgICBsZXQgZm9ybVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdmb3JtUHJpb3JpdHknKTsgIFxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHkpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBMZXZlbCc7ICBcbiAgICAgICAgZm9ybVByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgbGV0IHNlbGVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9Qcmlvcml0eScpO1xuICAgICAgICBzZWxlY3RNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZm9ybVByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdE1lbnUpO1xuICAgICAgICBsZXQgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xuICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICBsZXQgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pOyBcblxuICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVEaXYnKTtcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb0R1ZURhdGUnKTtcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlRGl2Jyk7XG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kb1RpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9UaXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvVGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkRpdicpO1xuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvRGVzY3JpcHRpb24nKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0VG9kby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFRvZG8nKTtcbiAgICAgICAgc3VibWl0VG9kby50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRvZG8pO1xufSIsImltcG9ydCBhZGRFbGxpcHNpc0Z1bmN0aW9uYWxpdHkgZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9lZGl0LXByb2plY3QnO1xuaW1wb3J0IGV4cGFuZFByb2plY3RDYXJkLCB7IHRpdGxlQ2xpY2sgfSBmcm9tICcuLi9wcm9qZWN0LWNyZWF0aW9uL2V4cGFuZC1wcm9qZWN0JztcbmltcG9ydCBhZGRBbGxQcm9qZWN0c1RvRE9NIGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vYWxsUHJvamVjdHMtdG8tRE9NJztcbmltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tICcuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0JztcbmltcG9ydCBjb21wbGV0ZWRUYXNrIGZyb20gJy4uL3NoYXJlZC1jcmVhdGlvbi5qcy9jb21wbGV0ZWQtdGFzayc7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RTZWN0aW9uKCkge1xuICAgIHJlbmRlclByb2plY3RDYXJkcyhhZGRlZFByb2plY3RzKTtcbiAgICBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5KCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RDYXJkcyhhcnJheSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0U2VjdGlvbicpO1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0U2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RTZWN0aW9uVGl0bGUnKTtcbiAgICBwcm9qZWN0U2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ1BST0pFQ1RTJ1xuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RTZWN0aW9uVGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFNlY3Rpb24pO1xuICAgIGFkZEFsbFByb2plY3RzVG9ET00oYXJyYXkpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5KCkge1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Q2FyZCcpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBhZGRFbGxpcHNpc0Z1bmN0aW9uYWxpdHkoKTtcbiAgICBleHBhbmRQcm9qZWN0Q2FyZCgpO1xuICAgIHRpdGxlQ2xpY2soKTtcbiAgICBjb21wbGV0ZWRUYXNrKCdwcm9qZWN0Jyk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RTZWN0aW9uLCByZW5kZXJQcm9qZWN0Q2FyZHMsIGluaXRpYWxpemVQcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkgfTsiLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IFBST0pFQ1RfVklFVyB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuaW1wb3J0IHsgYWRkQWxsVG9kb3NUb0RPTSB9IGZyb20gXCIuLi90b2RvLWNyZWF0aW9uL2FkZC10b2RvLXRvLURPTVwiO1xuaW1wb3J0IHsgc3VibWl0VG9kb0J0biB9IGZyb20gXCIuLi90b2RvLWNyZWF0aW9uL25ldy10b2RvXCI7XG5pbXBvcnQgY3JlYXRlVG9kb0Zvcm0gZnJvbSBcIi4uL3RvZG8tY3JlYXRpb24vdG9kby1mb3JtXCI7XG5pbXBvcnQgYWRkVG9kb0VsbGlwc2lzRnVuY3Rpb25hbGl0eSBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9lZGl0LXRvZG9cIjtcbmltcG9ydCBleHBhbmRUb2RvQ2FyZCBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9leHBhbmQtdG9kb1wiO1xuaW1wb3J0IGNvbXBsZXRlZFRhc2sgZnJvbSBcIi4uL3NoYXJlZC1jcmVhdGlvbi5qcy9jb21wbGV0ZWQtdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0VmlldygpIHtcbiAgICByZW5kZXJQcm9qZWN0Vmlld1RpdGxlKCk7XG4gICAgcmVuZGVyUHJvamVjdFZpZXdEZXNjcmlwdGlvbigpO1xuICAgIHJlbmRlclByb2plY3RUb2Rvc1RpdGxlKCk7XG4gICAgcmVuZGVyUHJvamVjdFRvZG9zKGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zKTtcbiAgICBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgcmVuZGVyTmV3VG9kb0J0bigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Vmlld1RpdGxlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZXcnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RWaWV3KTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZXdUaXRsZScpO1xuICAgIGNvbnN0IHRpdGxlTmFtZSA9IGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXIC0gMV0udGl0bGU7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZU5hbWU7XG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Vmlld0Rlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RWaWV3Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWV3RGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRldGFpbHMgPSBhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVyAtIDFdLmRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb25EZXRhaWxzfWA7XG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufSAgIFxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VG9kb3NUaXRsZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VmlldycpO1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3MuY2xhc3NMaXN0LmFkZCgndG9kb3MnKTtcbiAgICB0b2Rvcy50ZXh0Q29udGVudCA9ICdUT0RPUyc7XG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9kb3MpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VG9kb3MoYXJyYXkpIHtcbiAgICBhZGRBbGxUb2Rvc1RvRE9NKGFycmF5KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3VG9kb0J0bigpIHtcbiAgICBjcmVhdGVUb2RvRm9ybSgpO1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RWaWV3Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXdUb2RvJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJysgQWRkIFRvZG8nXG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBpbml0aWFsaXplQWRkVG9kb0J1dHRvbigpXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVUb2RvQ2FyZEZ1bmN0aW9uYWxpdHkoKSB7XG4gICAgbGV0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9DYXJkJyk7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0NhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9kb0NhcmRGdW5jdGlvbmFsaXR5KCkge1xuICAgIGFkZFRvZG9FbGxpcHNpc0Z1bmN0aW9uYWxpdHkoKTtcbiAgICBleHBhbmRUb2RvQ2FyZCgpO1xuICAgIGNvbXBsZXRlZFRhc2soJ3RvZG8nKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFkZFRvZG9CdXR0b24oKSB7XG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvJyk7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0Zvcm0nKTtcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIHN1Ym1pdFRvZG9CdG4oKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdFRvZG9zLCBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5fTtcbiIsImltcG9ydCBhZGRQcm9qZWN0QnRuLCB7IGluaXRpYWxpemVOZXdQcm9qZWN0QnRuLCBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3QuanNcIjtcbmltcG9ydCB7IHNpZGViYXJEZWxldGVGdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9lZGl0LXByb2plY3QuanMnO1xuaW1wb3J0IGNyZWF0ZVByb2plY3RGb3JtIGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL3Byb2plY3QtZm9ybS5qc1wiO1xuaW1wb3J0IHNldFZpZXcsIHsgQUNUSVZFX1ZJRVcgfSBmcm9tIFwiLi4vc3RhdGUuanNcIjtcbmltcG9ydCB7IGFkZEFsbFByb2plY3RzVG9TaWRlYmFyIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vYWxsUHJvamVjdHMtdG8tRE9NLmpzXCI7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3Qgdmlld3MgPSBbJ0dFTkVSQUwnLCAnVE9EQVknLCAnVVBDT01JTkcnXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyU2lkZWJhcigpIHtcbiAgICByZW5kZXJWaWV3QnV0dG9ucyh2aWV3cyk7XG4gICAgcmVuZGVyU2lkZWJhclByb2plY3RMaXN0VGl0bGUoKTtcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdExpc3QoYWRkZWRQcm9qZWN0cyk7XG4gICAgc2lkZWJhckRlbGV0ZUZ1bmN0aW9uYWxpdHkoKTtcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpO1xuICAgIHJlbmRlck5ld1Byb2plY3RCdG4oKTtcbiAgICBhZGRQcm9qZWN0QnRuKCk7XG4gICAgaW5pdGlhbGl6ZU5ld1Byb2plY3RCdG4oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVmlld0J1dHRvbnModmlld3MpIHtcbiAgICB2aWV3cy5mb3JFYWNoKCh2aWV3TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFySXRlbVwiKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCB2aWV3TmFtZSk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHZpZXdOYW1lO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNldFZpZXcodmlld05hbWUpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXJQcm9qZWN0TGlzdFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySXRlbScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRpdGxlKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhclByb2plY3RMaXN0KHByb2plY3RzKSB7XG4gICAgYWRkQWxsUHJvamVjdHNUb1NpZGViYXIocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOZXdQcm9qZWN0QnRuKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySXRlbScpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0Jyk7XG4gICAgaWYgKEFDVElWRV9WSUVXLmluY2x1ZGVzKCdQUk9KRUNUJykpIHtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0JhY2sgdG8gR0VORVJBTCdcbiAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XG4gICAgfVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn0iLCJpbXBvcnQgeyBpc1RvZGF5LCBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0XCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0Q2FyZHMsIGluaXRpYWxpemVQcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkgfSBmcm9tIFwiLi9nZW5lcmFsLXZpZXdcIjtcbmltcG9ydCBzb3J0VG9kb0RhdGVzLCB7IGFjdGl2ZVRvZG9zLCBjbGVhckFjdGl2ZVRvZG9zIH0gZnJvbSBcIi4uL3RvZG8tY3JlYXRpb24vc29ydC10b2RvLWRhdGVzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5LCByZW5kZXJQcm9qZWN0VG9kb3MgfSBmcm9tIFwiLi9wcm9qZWN0LXZpZXdcIjtcblxubGV0IHRvZGF5cHJvamVjdHMgPSBbXTtcbmxldCB0b2RheXRvZG9zID0gW107XG5cbmZ1bmN0aW9uIHRvZGF5UHJvamVjdEZpbHRlcihhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBwYXJzZUlTTyhhcnJheVtpXS5kdWVEYXRlKTtcbiAgICAgICAgaWYgKGlzVG9kYXkoZm9ybWF0dGVkRGF0ZSkpIHtcbiAgICAgICAgICAgIHRvZGF5cHJvamVjdHMucHVzaChhcnJheVtpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2RheVRvZG9GaWx0ZXIoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gcGFyc2VJU08oYXJyYXlbaV0uZHVlRGF0ZSk7XG4gICAgICAgIGlmIChpc1RvZGF5KGZvcm1hdHRlZERhdGUpKSB7XG4gICAgICAgICAgICB0b2RheXRvZG9zLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVG9kYXlTZWN0aW9uKCkge1xuICAgIHRvZGF5UHJvamVjdEZpbHRlcihhZGRlZFByb2plY3RzKTtcbiAgICByZW5kZXJQcm9qZWN0Q2FyZHModG9kYXlwcm9qZWN0cyk7XG4gICAgaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9kb3MnKTtcbiAgICB0b2RvU2VjdGlvbi50ZXh0Q29udGVudCA9ICdUT0RPUyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvU2VjdGlvbik7XG4gICAgc29ydFRvZG9EYXRlcyhhZGRlZFByb2plY3RzKTtcbiAgICB0b2RheVRvZG9GaWx0ZXIoYWN0aXZlVG9kb3MpO1xuICAgIHJlbmRlclByb2plY3RUb2Rvcyh0b2RheXRvZG9zKTtcbiAgICBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgdG9kYXl0b2RvcyA9IFtdO1xuICAgIHRvZGF5cHJvamVjdHMgPSBbXTtcbiAgICBjbGVhckFjdGl2ZVRvZG9zKCk7XG59IiwiaW1wb3J0IHsgcGFyc2VJU08sIGlzVGhpc1dlZWssIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0XCI7XG5pbXBvcnQgc29ydFRvZG9EYXRlcywgeyBjbGVhckFjdGl2ZVRvZG9zLCBhY3RpdmVUb2RvcyB9IGZyb20gXCIuLi90b2RvLWNyZWF0aW9uL3NvcnQtdG9kby1kYXRlc1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdENhcmRzLCBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5IH0gZnJvbSBcIi4vZ2VuZXJhbC12aWV3XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5LCByZW5kZXJQcm9qZWN0VG9kb3MgfSBmcm9tIFwiLi9wcm9qZWN0LXZpZXdcIjtcblxubGV0IHVwY29taW5nUHJvamVjdHMgPSBbXTtcbmxldCB1cGNvbWluZ1RvZG9zID0gW107XG5cbmZ1bmN0aW9uIHVwY29taW5nUHJvamVjdHNGaWx0ZXIoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gcGFyc2VJU08oYXJyYXlbaV0uZHVlRGF0ZSk7XG4gICAgICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRvZGF5RGF0ZSwgZm9ybWF0dGVkRGF0ZSkgPD0gMTQpIHtcbiAgICAgICAgICAgIHVwY29taW5nUHJvamVjdHMucHVzaChhcnJheVtpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGNvbWluZ1RvZG9zRmlsdGVyKGFycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHBhcnNlSVNPKGFycmF5W2ldLmR1ZURhdGUpO1xuICAgICAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyh0b2RheURhdGUsIGZvcm1hdHRlZERhdGUpIDw9IDE0KSB7XG4gICAgICAgICAgICB1cGNvbWluZ1RvZG9zLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVXBjb21pbmdTZWN0aW9uKCkge1xuICAgIHVwY29taW5nUHJvamVjdHNGaWx0ZXIoYWRkZWRQcm9qZWN0cyk7XG4gICAgcmVuZGVyUHJvamVjdENhcmRzKHVwY29taW5nUHJvamVjdHMpO1xuICAgIGluaXRpYWxpemVQcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9zJyk7XG4gICAgdG9kb1NlY3Rpb24udGV4dENvbnRlbnQgPSAnVE9ET1MnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb24pO1xuICAgIHNvcnRUb2RvRGF0ZXMoYWRkZWRQcm9qZWN0cyk7XG4gICAgdXBjb21pbmdUb2Rvc0ZpbHRlcihhY3RpdmVUb2Rvcyk7XG4gICAgcmVuZGVyUHJvamVjdFRvZG9zKHVwY29taW5nVG9kb3MpO1xuICAgIGluaXRpYWxpemVUb2RvQ2FyZEZ1bmN0aW9uYWxpdHkoKTtcbiAgICB1cGNvbWluZ1Byb2plY3RzID0gW107XG4gICAgdXBjb21pbmdUb2RvcyA9IFtdO1xuICAgIGNsZWFyQWN0aXZlVG9kb3MoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGlzVG9kYXksIHRvRGF0ZSwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgc2V0VmlldyAgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgc29ydERhdGVzIGZyb20gJy4vcHJvamVjdC1jcmVhdGlvbi9zb3J0LXByb2plY3QtZGF0ZXMnO1xuaW1wb3J0IGdldEFjdGl2ZVRvZG9zLCB7IGFjdGl2ZVRvZG9MaXN0cywgYWN0aXZlVG9kb3MgfSBmcm9tICcuL3RvZG8tY3JlYXRpb24vc29ydC10b2RvLWRhdGVzJztcbmltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3QnO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xudGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWRkZWRQcm9qZWN0cyk7XG59KVxuXG5zZXRWaWV3KCdHRU5FUkFMJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9