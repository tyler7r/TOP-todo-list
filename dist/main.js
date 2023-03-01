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
        checkmark.classList.add('checkmark-color');
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
        const value = document.querySelector(`.project${prop}.no${cardNo}`);
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
            date.setAttribute('value', value.textContent);
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
            input.setAttribute('value', value.textContent);
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
            input.setAttribute('value', value.textContent);
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
            const parent = document.querySelector(`.${e.target.parentElement.parentElement.className.slice(0,11)}`);
            let lastChar = (e.target.id).length - 1;
            const projectNo = (e.target.id.slice(lastChar)) - 1;
            parent.classList.add('removedItem');
            setTimeout(() => {
                (0,_state__WEBPACK_IMPORTED_MODULE_3__.removeProject)(_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects, projectNo);
            }, 750)
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
            console.log(e);
            if (taskType === 'todo') {
                const parent = document.querySelector(`.${e.target.parentElement.className.slice(0,8)}`);
                check.classList.remove('checkmark-color');
                check.classList.add('completed-checkmark');
                parent.classList.add('removedItem');
                setTimeout(() => {
                    (0,_state__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_1__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_0__.PROJECT_VIEW-1].todos, taskNo);
                }, 750);
            } else if (taskType === 'project') {
                const parent = document.querySelector(`.${e.target.parentElement.className.slice(0,11)}`);
                check.classList.remove('checkmark-color');
                check.classList.add('completed-checkmark');
                parent.classList.add('removedItem');
                setTimeout(() => {
                    (0,_state__WEBPACK_IMPORTED_MODULE_0__.removeProject)(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_1__.addedProjects, taskNo);
                }, 750);
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
            checkmark.classList.add('checkmark-color');
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
            checkmark.classList.add('checkmark-color');
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
            const parent = document.querySelector(`.${e.target.parentElement.parentElement.className.slice(0,8)}`);
            let lastChar = (e.target.id).length - 1;
            const projectNo = (e.target.id.slice(lastChar)) - 1;
            parent.classList.add('removedItem');
            setTimeout(() => {
                (0,_state__WEBPACK_IMPORTED_MODULE_3__.removeTodo)(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects[_state__WEBPACK_IMPORTED_MODULE_3__.PROJECT_VIEW-1].todos, projectNo);
            }, 750)
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
            const value = document.querySelector(`.todo${prop}.no${cardNo}`);
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
                date.setAttribute('value', value.textContent);
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
                input.setAttribute('value', value.textContent);
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
                input.setAttribute('value', value.textContent);
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
    
})


;(0,_state__WEBPACK_IMPORTED_MODULE_0__["default"])('GENERAL');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05xRDtBQUN0QjtBQUMrQjtBQUNpQztBQUNoQzs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QsbURBQU8sWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9hbGxQcm9qZWN0cy10by1ET00uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL2RldGFpbHMtdG9nZ2xlLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9lZGl0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL2VkaXQtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24vZXhwYW5kLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9wcm9qZWN0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL3NvcnQtcHJvamVjdC1kYXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3NoYXJlZC1jcmVhdGlvbi5qcy9jb21wbGV0ZWQtdGFzay5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGlvbi9hZGQtdG9kby10by1ET00uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNyZWF0aW9uL2VkaXQtdG9kby5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRpb24vZXhwYW5kLXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNyZWF0aW9uL25ldy10b2RvLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGlvbi9zb3J0LXRvZG8tZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNyZWF0aW9uL3RvZG8tZWRpdC1mb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGlvbi90b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9nZW5lcmFsLXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9wcm9qZWN0LXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvdG9kYXktdmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3VwY29taW5nLXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHsgc2V0UHJvamVjdFZpZXcgfSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQWxsUHJvamVjdHNUb0RPTShhcnJheSkge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RTZWN0aW9uJyk7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBhcnJheVtpXTtcbiAgICAgICAgbGV0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoYHByb2plY3RDYXJkYCk7XG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENhcmQubm8nK1tpKzFdKTtcblxuICAgICAgICBsZXQgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Y2hlY2ttYXJrJyk7XG4gICAgICAgIGNoZWNrbWFyay5zZXRBdHRyaWJ1dGUoJ2lkJywgYGMke1tpKzFdfWApO1xuICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrLWNvbG9yJyk7XG4gICAgICAgIGNoZWNrbWFyay5zcmMgPSAnY2hlY2ttYXJrLnN2Zyc7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb2plY3RMaXN0KSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke3Byb3B9YCk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtwcm9qZWN0TGlzdFtwcm9wXX1gKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgaGlkZGVuYCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgKz0gcHJvamVjdExpc3RbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd0b2RvcycpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCArPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdCcpO1xuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcbiAgICAgICAgbGV0IHRvZG9zID0gYXJyYXlbaV0udG9kb3MubGVuZ3RoO1xuICAgICAgICB0b2RvTGlzdC50ZXh0Q29udGVudCA9IGBUb2RvcyBSZW1haW5pbmc6ICR7dG9kb3N9YDtcblxuICAgICAgICBsZXQgZWxsaXBzaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWxsaXBzaXMuY2xhc3NMaXN0LmFkZCgncHJvamVjdGVsbGlwc2lzJyk7XG4gICAgICAgIGVsbGlwc2lzLnNldEF0dHJpYnV0ZSgnaWQnLCBgZSR7W2krMV19YCk7XG4gICAgICAgIGVsbGlwc2lzLnNyYyA9ICdlbGxpcHNpcy5zdmcnO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGVsbGlwc2lzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkQWxsUHJvamVjdHNUb1NpZGViYXIoYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0U2lkZUJhclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBhcnJheVtpXVxuICAgICAgICAgICAgbGV0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZChgcHJvamVjdFRhYmApO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgICAgICBwcm9qZWN0U2lkZUJhclNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUYWJTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8nK1tpKzFdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0VGFiRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGFiRWxlbWVudC5jbGFzc0xpc3QuYWRkKGB0YWIke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYkVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGFiRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNpZGViYXJEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHNpZGViYXJEZWxldGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckRlbGV0ZScpO1xuICAgICAgICAgICAgc2lkZWJhckRlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHNpZGViYXJEJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIHNpZGViYXJEZWxldGUuc3JjID0gJ2RlbGJ0bi5zdmcnO1xuICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChzaWRlYmFyRGVsZXRlKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFidGl0bGUubm8ke1tpKzFdfWApO1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IGUudGFyZ2V0LmNsYXNzTmFtZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHNldFByb2plY3RWaWV3KGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcikpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgYWRkQWxsUHJvamVjdHNUb1NpZGViYXIgfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlRGV0YWlscyhjYXJkVHlwZSwgY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfUNhcmQubm8ke2NhcmROb31gKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZGVzY3JpcHRpb25gKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9dGl0bGVgKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBkdWVEYXRlID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtjYXJkVHlwZX1kdWVEYXRlYCk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBlbGxpcHNpcyA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZWxsaXBzaXNgKTtcbiAgICBlbGxpcHNpcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZWFsRGV0YWlscyhjYXJkVHlwZSwgY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfUNhcmQubm8ke2NhcmROb31gKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfWRlc2NyaXB0aW9uYCk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgdGl0bGUgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfXRpdGxlYCk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZHVlRGF0ZWApO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgZWxsaXBzaXMgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfWVsbGlwc2lzYCk7XG4gICAgZWxsaXBzaXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cywgUHJvamVjdCB9IGZyb20gJy4vbmV3LXByb2plY3QuanMnO1xuXG5pbXBvcnQgeyByZXZlYWxEZXRhaWxzIH0gZnJvbSAnLi9kZXRhaWxzLXRvZ2dsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRGb3JtKGNhcmRObykge1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdENhcmQubm8ke2NhcmROb31gKTtcbiAgICBpZiAocHJvamVjdFNlbGVjdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKSkgPT09IGZhbHNlKSB7XG4gICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgIGxldCBwcm9qZWN0SW5mbyA9IChhZGRlZFByb2plY3RzW2NhcmROby0xXSk7XG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZWRpdEZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdEZvcm0nKTtcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKGBubyR7Y2FyZE5vfWApO1xuICAgIGZvciAobGV0IHByb3AgaW4gcHJvamVjdEluZm8pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdCR7cHJvcH0ubm8ke2NhcmROb31gKTtcbiAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eURpdicpO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3ApO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgTGV2ZWwnXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICBzZWxlY3RNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0TWVudSk7XG4gICAgICAgICAgICBsZXQgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBsb3dPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICAgICAgICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xuICAgICAgICAgICAgbGV0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbWVkaXVtT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gICAgICAgICAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobWVkaXVtT3B0aW9uKTtcbiAgICAgICAgICAgIGxldCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICAgICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbik7IFxuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkdWVEYXRlJykge1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVEaXYnKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3ApO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgcHJvcCk7XG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9wKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlRGl2Jyk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcCk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBwcm9wKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd0b2RvcycpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uRGl2Jyk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcCk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBwcm9wKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9wKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgbm8ke2NhcmROb31gKVxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN1Ym1pdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRFZGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0UHJvamVjdCcpO1xuICAgIHN1Ym1pdEVkaXQuc2V0QXR0cmlidXRlKCdpZCcsIGBubyR7Y2FyZE5vfWApO1xuICAgIHN1Ym1pdEVkaXQudGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgc3VibWl0RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdFRpdGxlLm5vJHtjYXJkTm99YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Rlc2NyaXB0aW9uLm5vJHtjYXJkTm99YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZHVlRGF0ZS5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcmlvcml0eS5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvcyA9IGFkZGVkUHJvamVjdHNbY2FyZE5vIC0gMV0udG9kb3M7XG4gICAgICAgIGxldCBlZGl0ZWRQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdG9kb3MpO1xuICAgICAgICBhZGRlZFByb2plY3RzWyhjYXJkTm8pLTFdID0gZWRpdGVkUHJvamVjdDtcbiAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdE1vZGUnKTtcbiAgICAgICAgcmV2ZWFsRGV0YWlscygncHJvamVjdCcsIGNhcmRObyk7XG5cbiAgICAgICAgbGV0IHByb2plY3RObyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ubyR7Y2FyZE5vfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3ROby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3ROb1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3R0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2plY3ROb1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RkZXNjcmlwdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0ZHVlRGF0ZScpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdE5vW2ldLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHByaW9yaXR5JykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LnJlbW92ZSgnbG93Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bScpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0RWRpdCk7XG4gICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG5cbn0gZWxzZSBpZiAocHJvamVjdFNlbGVjdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKSkpIHtcbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0Rm9ybS5ubyR7Y2FyZE5vfWApO1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbn1cbn0iLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcbmltcG9ydCBjcmVhdGVFZGl0Rm9ybSBmcm9tIFwiLi9lZGl0LWZvcm0uanNcIjtcbmltcG9ydCBoaWRlRGV0YWlscyBmcm9tIFwiLi9kZXRhaWxzLXRvZ2dsZS5qc1wiO1xuaW1wb3J0IHNldFZpZXcsIHsgcmVtb3ZlUHJvamVjdCB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRFbGxpcHNpc0Z1bmN0aW9uYWxpdHkoKSB7XG4gICAgY29uc3QgZWxsaXBzaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdGVsbGlwc2lzJyk7XG4gICAgbGV0IHBvcFVwT3BlbiA9IGZhbHNlO1xuICAgIGVsbGlwc2lzLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Q2FyZC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBNZW51JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHBvcHVwTWVudS5jbGFzc0xpc3QuYWRkKGBwb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTsgXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3BvcHVwRGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLGBkZWwke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgICAgICBwb3B1cE1lbnUuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdwb3B1cEVkaXQnKTtcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGBlZGl0JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHBvcHVwTWVudSk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgZWRpdFByb2plY3QoZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9wVXBPcGVuID09PSB0cnVlIHx8IHByb2plY3RDYXJkLmNsYXNzTGlzdC5jb250YWlucyhgLmVkaXRNb2RlYCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIG1lbnVTZWxlY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcFVwT3BlbiA9PT0gZmFsc2UgJiYgcHJvamVjdENhcmQuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBNZW51JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgbWVudVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBwb3BVcE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwRGVsZXRlJyk7XG4gICAgZGVsZXRlQnRuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5zbGljZSgwLDExKX1gKTtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RObyA9IChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpIC0gMTtcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkSXRlbScpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChhZGRlZFByb2plY3RzLCBwcm9qZWN0Tm8pO1xuICAgICAgICAgICAgfSwgNzUwKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNpZGViYXJEZWxldGVGdW5jdGlvbmFsaXR5KCkge1xuICAgIGNvbnN0IHNpZGViYXJEZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhckRlbGV0ZScpO1xuICAgIHNpZGViYXJEZWxldGVCdG4uZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5vID0gKGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSkgLSAxO1xuICAgICAgICAgICAgc2V0VmlldygnR0VORVJBTCcpXG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KGFkZGVkUHJvamVjdHMsIHByb2plY3RObyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3QoY2FyZE5vKSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cEVkaXQnKTtcbiAgICBlZGl0QnRuLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RDYXJkLm5vJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgcG9wdXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudSR7Y2FyZE5vfWApXG4gICAgICAgICAgICBwb3B1cE1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2VkaXRNb2RlJyk7XG4gICAgICAgICAgICBoaWRlRGV0YWlscygncHJvamVjdCcsIGNhcmRObyk7XG4gICAgICAgICAgICBjcmVhdGVFZGl0Rm9ybSgoZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpKSk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgc2lkZWJhckRlbGV0ZUZ1bmN0aW9uYWxpdHkgfTtcblxuIiwiaW1wb3J0IHsgc2V0UHJvamVjdFZpZXcgfSBmcm9tIFwiLi4vc3RhdGVcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFByb2plY3RDYXJkKCkge1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Q2FyZCcpO1xuICAgIHByb2plY3RDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5jbGFzc05hbWUpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Q2FyZCcpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7ZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdE1vZGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9MaXN0Lm5vJHtlLnRhcmdldC5jbGFzc05hbWUuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRpdGxlQ2xpY2soKSB7XG4gICAgY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3R0aXRsZScpO1xuICAgIHByb2plY3RDYXJkcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuY2xhc3NOYW1lKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHNldFByb2plY3RWaWV3KGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcikpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IHRpdGxlQ2xpY2sgfSIsImltcG9ydCBzZXRWaWV3LCB7IEFDVElWRV9WSUVXLCBhZGRQcm9qZWN0IH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5sZXQgYWRkZWRQcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0QnRuKCkge1xuICAgIGxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChgJHtBQ1RJVkVfVklFV31gLmluY2x1ZGVzKCdQUk9KRUNUJykpIHtcbiAgICAgICAgICAgIHNldFZpZXcoJ0dFTkVSQUwnKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdG9kb3MpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMudG9kb3MgPSB0b2Rvcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVOZXdQcm9qZWN0QnRuKCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtJyk7XG4gICAgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Jyk7XG4gICAgc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbmV3UHJvamVjdEluZm8oKTtcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGNsZWFyRm9ybUVudHJ5KCdwcmlvcml0eScpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RJbmZvKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZS5tYWluJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24ubWFpbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZS5tYWluJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHkubWFpbicpLnZhbHVlO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgW10pO1xuICAgIGFkZFByb2plY3QoYWRkZWRQcm9qZWN0cywgbmV3UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybUVudHJ5KHByaW9yaXR5TmFtZSkge1xuICAgIGxldCBhbGxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGFsbElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gaW5wdXQudmFsdWUgPSAnJyk7XG4gICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcmlvcml0eU5hbWV9YCk7XG4gICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9ICdsb3cnO1xufVxuXG5leHBvcnQgeyBhZGRlZFByb2plY3RzLCBQcm9qZWN0LCBjbGVhckZvcm1FbnRyeSB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEZvcm1EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuICAgICAgICBsZXQgZm9ybVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdmb3JtUHJpb3JpdHknKTsgIFxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHkpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBMZXZlbCc7ICBcbiAgICAgICAgZm9ybVByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgbGV0IHNlbGVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHNlbGVjdE1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBmb3JtUHJpb3JpdHkuYXBwZW5kQ2hpbGQoc2VsZWN0TWVudSk7XG4gICAgICAgIGxldCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbG93T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gICAgICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XG4gICAgICAgIGxldCBtZWRpdW1PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbWVkaXVtT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gICAgICAgIG1lZGl1bU9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKG1lZGl1bU9wdGlvbik7XG4gICAgICAgIGxldCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGhpZ2hPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gICAgICAgIGhpZ2hPcHRpb24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbik7IFxuXG4gICAgICAgIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZURpdicpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZURpdicpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdFRpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25EaXYnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFByb2plY3QnKTtcbiAgICAgICAgc3VibWl0UHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3QpO1xufSIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0RGF0ZXMoKSB7XG4gICAgbGV0IHNvcnRlZFByb2plY3RzID0gYWRkZWRQcm9qZWN0cy5zb3J0KChhLCBiKSA9PiBcbiAgICAoYS5kdWVEYXRlID4gYi5kdWVEYXRlKSA/IDEgOiAoYS5kdWVEYXRlIDwgYi5kdWVEYXRlKSA/IC0xIDogMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFkZGVkUHJvamVjdHNbaV0gPSBzb3J0ZWRQcm9qZWN0c1tpXTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IHJlbW92ZVByb2plY3QsIHJlbW92ZVRvZG8sIFBST0pFQ1RfVklFVyB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBsZXRlZFRhc2sodGFza1R5cGUpIHtcbiAgICBsZXQgY2hlY2ttYXJrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3Rhc2tUeXBlfWNoZWNrbWFya2ApO1xuICAgIGNoZWNrbWFya3MuZm9yRWFjaCgoY2hlY2spID0+IHtcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tObyA9IChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpIC0gMTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgaWYgKHRhc2tUeXBlID09PSAndG9kbycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5zbGljZSgwLDgpfWApO1xuICAgICAgICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrbWFyay1jb2xvcicpO1xuICAgICAgICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC1jaGVja21hcmsnKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZEl0ZW0nKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVG9kbyhhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVy0xXS50b2RvcywgdGFza05vKTtcbiAgICAgICAgICAgICAgICB9LCA3NTApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrVHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUuc2xpY2UoMCwxMSl9YCk7XG4gICAgICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2ttYXJrLWNvbG9yJyk7XG4gICAgICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrbWFyaycpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkSXRlbScpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9qZWN0KGFkZGVkUHJvamVjdHMsIHRhc2tObyk7XG4gICAgICAgICAgICAgICAgfSwgNzUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCB7IHJlbmRlclByb2plY3RTZWN0aW9uIH0gZnJvbSBcIi4vdmlld3MvZ2VuZXJhbC12aWV3LmpzXCI7IFxuaW1wb3J0IHJlbmRlclNpZGViYXIgZnJvbSAnLi92aWV3cy9zaWRlYmFyLmpzJ1xuaW1wb3J0IHJlbmRlclRvZGF5U2VjdGlvbiBmcm9tIFwiLi92aWV3cy90b2RheS12aWV3XCI7XG5pbXBvcnQgcmVuZGVyVXBjb21pbmdTZWN0aW9uIGZyb20gXCIuL3ZpZXdzL3VwY29taW5nLXZpZXdcIjtcbmltcG9ydCBzb3J0RGF0ZXMgZnJvbSBcIi4vcHJvamVjdC1jcmVhdGlvbi9zb3J0LXByb2plY3QtZGF0ZXNcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0VmlldyBmcm9tIFwiLi92aWV3cy9wcm9qZWN0LXZpZXdcIjtcblxubGV0IEFDVElWRV9WSUVXID0gJ0dFTkVSQUwnO1xubGV0IFBST0pFQ1RfVklFVztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0Vmlldyh2aWV3KSB7XG4gICAgQUNUSVZFX1ZJRVcgPSB2aWV3O1xuICAgIHJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0Vmlldyhwcm9qZWN0Tm8pIHtcbiAgICBQUk9KRUNUX1ZJRVcgPSBwcm9qZWN0Tm87XG4gICAgc2V0VmlldyhgUFJPSkVDVCR7UFJPSkVDVF9WSUVXfWApO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoKXtcbiAgICBzb3J0RGF0ZXMoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgc2lkZWJhci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICByZW5kZXJTaWRlYmFyKCk7XG5cbiAgICBzd2l0Y2ggKEFDVElWRV9WSUVXKSB7XG4gICAgICAgIGNhc2UgJ0dFTkVSQUwnOlxuICAgICAgICAgICAgcmVuZGVyUHJvamVjdFNlY3Rpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUT0RBWSc6XG4gICAgICAgICAgICByZW5kZXJUb2RheVNlY3Rpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdVUENPTUlORyc6XG4gICAgICAgICAgICByZW5kZXJVcGNvbWluZ1NlY3Rpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGBQUk9KRUNUJHtQUk9KRUNUX1ZJRVd9YDpcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RWaWV3KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZFByb2plY3QoYXJyYXksIHByb2plY3QpIHtcbiAgICBhcnJheS5wdXNoKHByb2plY3QpO1xuICAgIHJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KGFycmF5LCBwcm9qZWN0KSB7XG4gICAgYXJyYXkuc3BsaWNlKHByb2plY3QsIDEpO1xuICAgIHJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvKGFycmF5LCB0b2RvKSB7XG4gICAgYXJyYXkuc3BsaWNlKHRvZG8sIDEpO1xuICAgIHJlbmRlcigpO1xufVxuXG5leHBvcnQgeyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBzZXRQcm9qZWN0VmlldywgUFJPSkVDVF9WSUVXLCBBQ1RJVkVfVklFVywgcmVtb3ZlVG9kbyB9O1xuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvVG9ET00oYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuICAgIGlmIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAoYXJyYXkubGVuZ3RoLTEpOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0b2RvTGlzdCA9IGFycmF5W2ldO1xuICAgICAgICAgICAgbGV0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b2RvQ2FyZCk7XG4gICAgICAgICAgICB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvQ2FyZCcpO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DYXJkLm5vJytbaSsxXSk7XG5cbiAgICAgICAgICAgIGxldCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCd0b2RvY2hlY2ttYXJrJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCdpZCcsIGB0b2RvYyR7W2krMV19YCk7XG4gICAgICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrLWNvbG9yJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuc3JjID0gJ2NoZWNrbWFyay5zdmcnO1xuICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRvZG9MaXN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBjYXJkU2VsZWN0LmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke3RvZG9MaXN0W3Byb3BdfWApO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBoaWRkZW5gKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgKz0gdG9kb0xpc3RbcHJvcF07XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgKz0gdG9kb0xpc3RbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBlbGxpcHNpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZWxsaXBzaXMuY2xhc3NMaXN0LmFkZCgndG9kb2VsbGlwc2lzJyk7XG4gICAgICAgICAgICBlbGxpcHNpcy5zZXRBdHRyaWJ1dGUoJ2lkJywgYGUke1tpKzFdfWApO1xuICAgICAgICAgICAgZWxsaXBzaXMuc3JjID0gJ2VsbGlwc2lzLnN2Zyc7XG4gICAgICAgICAgICBjYXJkU2VsZWN0LmFwcGVuZENoaWxkKGVsbGlwc2lzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFsbFRvZG9zVG9ET00oYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuICAgIGlmIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0b2RvTGlzdCA9IGFycmF5W2ldO1xuICAgICAgICAgICAgbGV0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b2RvQ2FyZCk7XG4gICAgICAgICAgICB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvQ2FyZCcpO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DYXJkLm5vJytbaSsxXSk7XG5cbiAgICAgICAgICAgIGxldCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCd0b2RvY2hlY2ttYXJrJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCdpZCcsIGB0b2RvYyR7W2krMV19YCk7XG4gICAgICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrLWNvbG9yJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuc3JjID0gJ2NoZWNrbWFyay5zdmcnO1xuICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRvZG9MaXN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBjYXJkU2VsZWN0LmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke3RvZG9MaXN0W3Byb3BdfWApO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBoaWRkZW5gKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgKz0gdG9kb0xpc3RbcHJvcF07XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgKz0gdG9kb0xpc3RbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBlbGxpcHNpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZWxsaXBzaXMuY2xhc3NMaXN0LmFkZCgndG9kb2VsbGlwc2lzJyk7XG4gICAgICAgICAgICBlbGxpcHNpcy5zZXRBdHRyaWJ1dGUoJ2lkJywgYGUke1tpKzFdfWApO1xuICAgICAgICAgICAgZWxsaXBzaXMuc3JjID0gJ2VsbGlwc2lzLnN2Zyc7XG4gICAgICAgICAgICBjYXJkU2VsZWN0LmFwcGVuZENoaWxkKGVsbGlwc2lzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdCdcbmltcG9ydCBjcmVhdGVUb2RvRWRpdEZvcm0gZnJvbSAnLi90b2RvLWVkaXQtZm9ybSdcbmltcG9ydCBoaWRlRGV0YWlscyBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9kZXRhaWxzLXRvZ2dsZVwiO1xuaW1wb3J0IHsgcmVtb3ZlVG9kbywgUFJPSkVDVF9WSUVXIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvZG9FbGxpcHNpc0Z1bmN0aW9uYWxpdHkoKSB7XG4gICAgY29uc3QgZWxsaXBzaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb2VsbGlwc2lzJyk7XG4gICAgbGV0IHBvcFVwT3BlbiA9IGZhbHNlO1xuICAgIGVsbGlwc2lzLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCB0b2RvQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvQ2FyZC5ubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0b2RvQ2FyZC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb1BvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3B1cE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwb3B1cE1lbnUuY2xhc3NMaXN0LmFkZChgdG9kb1BvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApOyBcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndG9kb1BvcHVwRGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLGBkZWwke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgICAgICBwb3B1cE1lbnUuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvUG9wdXBFZGl0Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgZWRpdCR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIHBvcHVwTWVudS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgICAgICAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChwb3B1cE1lbnUpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0KGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcFVwT3BlbiA9PT0gdHJ1ZSB8fCB0b2RvQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoYC5lZGl0TW9kZWApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvUG9wdXBNZW51JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgbWVudVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBwb3BVcE9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9wVXBPcGVuID09PSBmYWxzZSAmJiB0b2RvQ2FyZC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb1BvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb1BvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIG1lbnVTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvUG9wdXBEZWxldGUnKTtcbiAgICBkZWxldGVCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lLnNsaWNlKDAsOCl9YCk7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Tm8gPSAoZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpKSAtIDE7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZEl0ZW0nKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRvZG8oYWRkZWRQcm9qZWN0c1tQUk9KRUNUX1ZJRVctMV0udG9kb3MsIHByb2plY3RObyk7XG4gICAgICAgICAgICB9LCA3NTApXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3QoY2FyZE5vKSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvUG9wdXBFZGl0Jyk7XG4gICAgZWRpdEJ0bi5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgdG9kb1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvQ2FyZC5ubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvUG9wdXBNZW51JHtjYXJkTm99YClcbiAgICAgICAgICAgIHBvcHVwTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRvZG9TZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9FZGl0Rm9ybSgoZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpKSk7XG4gICAgICAgICAgICBoaWRlRGV0YWlscygndG9kbycsIGNhcmRObyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb2RvQ2FyZCgpIHtcbiAgICBjb25zdCB0b2RvQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0NhcmQnKTtcbiAgICB0b2RvQ2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuY2xhc3NOYW1lKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kb0NhcmQnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRvZG9TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb0NhcmQubm8ke2UudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICBpZiAodG9kb1NlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXRNb2RlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRvZG9TZWxlY3QucXVlcnlTZWxlY3RvcignLnRvZG9kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IFBST0pFQ1RfVklFVyB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuaW1wb3J0IGFkZFRvZG9Ub0RPTSBmcm9tIFwiLi9hZGQtdG9kby10by1ET01cIjtcbmltcG9ydCB7IGNsZWFyRm9ybUVudHJ5IH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcbmltcG9ydCBhZGRUb2RvRWxsaXBzaXNGdW5jdGlvbmFsaXR5IGZyb20gXCIuL2VkaXQtdG9kb1wiO1xuaW1wb3J0IGV4cGFuZFRvZG9DYXJkIGZyb20gXCIuL2V4cGFuZC10b2RvXCI7XG5pbXBvcnQgY29tcGxldGVkVGFzayBmcm9tIFwiLi4vc2hhcmVkLWNyZWF0aW9uLmpzL2NvbXBsZXRlZC10YXNrXCI7XG5cbmxldCB0b2RvTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUb2RvQnRuKCkge1xuICAgIGNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0VG9kbycpO1xuICAgIHN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG5ld1RvZG9JbmZvKCk7XG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Gb3JtJylcbiAgICAgICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGFkZFRvZG9Ub0RPTShhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVy0xXS50b2Rvcyk7XG4gICAgICAgIGNsZWFyRm9ybUVudHJ5KCd0b2RvUHJpb3JpdHknKTtcbiAgICAgICAgYWRkVG9kb0VsbGlwc2lzRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICBleHBhbmRUb2RvQ2FyZCgpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrKCd0b2RvJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbmV3VG9kb0luZm8oKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb1RpdGxlLm1haW5gKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvRGVzY3JpcHRpb24ubWFpbmApLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb0R1ZURhdGUubWFpbmApLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9Qcmlvcml0eS5tYWluYCkudmFsdWU7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuICAgIGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXIC0gMV0udG9kb3MucHVzaChuZXdUb2RvKTtcbn1cblxuZXhwb3J0IHsgc3VibWl0VG9kb0J0biwgVG9kbyB9O1xuXG4iLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcblxubGV0IGFjdGl2ZVRvZG9zID0gW107XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVRvZG9zKGFycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdG9kb0xpc3QgPSBhcnJheVtpXS50b2RvcztcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0b2RvTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgYWN0aXZlVG9kb3MucHVzaCh0b2RvTGlzdFtqXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRUb2RvRGF0ZXMoYXJyYXkpIHtcbiAgICBnZXRBY3RpdmVUb2RvcyhhZGRlZFByb2plY3RzKTtcbiAgICBsZXQgc29ydGVkVG9kb3MgPSBhcnJheS5zb3J0KChhLCBiKSA9PiBcbiAgICAoYS5kdWVEYXRlID4gYi5kdWVEYXRlKSA/IDEgOiAoYS5kdWVEYXRlIDwgYi5kdWVEYXRlKSA/IC0xIDogMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheVtpXSA9IHNvcnRlZFRvZG9zW2ldO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJBY3RpdmVUb2RvcygpIHtcbiAgICBhY3RpdmVUb2RvcyA9IFtdO1xufVxuXG5leHBvcnQgeyBhY3RpdmVUb2RvcywgY2xlYXJBY3RpdmVUb2RvcyB9OyIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tICcuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0JztcbmltcG9ydCB7IHJldmVhbERldGFpbHMgfSBmcm9tICcuLi9wcm9qZWN0LWNyZWF0aW9uL2RldGFpbHMtdG9nZ2xlJztcbmltcG9ydCBzZXRWaWV3LCB7IFBST0pFQ1RfVklFVyB9ZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vbmV3LXRvZG8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvRWRpdEZvcm0oY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvQ2FyZC5ubyR7Y2FyZE5vfWApO1xuICAgIGlmIChwcm9qZWN0U2VsZWN0LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0Rm9ybS5ubyR7Y2FyZE5vfWApKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgICAgICBsZXQgcHJvamVjdEluZm8gPSAoYWRkZWRQcm9qZWN0c1tQUk9KRUNUX1ZJRVctMV0udG9kb3NbY2FyZE5vLTFdKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEluZm8pO1xuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZWRpdEZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXRGb3JtJyk7XG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoYG5vJHtjYXJkTm99YCk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoZWRpdEZvcm0pO1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb2plY3RJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvJHtwcm9wfS5ubyR7Y2FyZE5vfWApO1xuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9Qcmlvcml0eURpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IExldmVsJ1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW51LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0TWVudSk7XG4gICAgICAgICAgICAgICAgbGV0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICAgICAgICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICAgICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobG93T3B0aW9uKTtcbiAgICAgICAgICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgbWVkaXVtT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gICAgICAgICAgICAgICAgbWVkaXVtT3B0aW9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICAgICAgICAgIGxldCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgaGlnaE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICAgICAgICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbik7IFxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnZHVlRGF0ZScpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9EdWVEYXRlRGl2Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvVGl0bGVEaXYnKTtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvcHJvamVjdFRpdGxlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAndG9kb3MnKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndG9kb0Rlc2NyaXB0aW9uRGl2Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN1Ym1pdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0RWRpdCk7XG4gICAgICAgIHN1Ym1pdEVkaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWJtaXRQcm9qZWN0Jyk7XG4gICAgICAgIHN1Ym1pdEVkaXQuc2V0QXR0cmlidXRlKCdpZCcsIGBubyR7Y2FyZE5vfWApO1xuICAgICAgICBzdWJtaXRFZGl0LnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgICAgICBzdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9wcm9qZWN0VGl0bGUubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9kZXNjcmlwdGlvbi5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvZHVlRGF0ZS5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb3ByaW9yaXR5Lm5vJHtjYXJkTm99YCkudmFsdWU7XG4gICAgICAgICAgICBsZXQgZWRpdGVkVG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgYWRkZWRQcm9qZWN0c1tQUk9KRUNUX1ZJRVctMV0udG9kb3NbY2FyZE5vLTFdID0gZWRpdGVkVG9kbztcbiAgICAgICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0TW9kZScpO1xuICAgICAgICAgICAgcmV2ZWFsRGV0YWlscygndG9kbycsIGNhcmRObyk7XG4gICAgICAgICAgICBzZXRWaWV3KGBQUk9KRUNUJHtQUk9KRUNUX1ZJRVd9YCk7XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChwcm9qZWN0U2VsZWN0LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0Rm9ybS5ubyR7Y2FyZE5vfWApKSkge1xuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0Rm9ybS5ubyR7Y2FyZE5vfWApO1xuICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvRm9ybSgpIHtcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VmlldycpO1xuICAgIGNvbnN0IHRvZG9Gb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Zvcm1EaXYuY2xhc3NMaXN0LmFkZCgndG9kb0Zvcm0nKTtcbiAgICB0b2RvRm9ybURpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBwcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b2RvRm9ybURpdik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICB0b2RvRm9ybURpdi5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG5cbiAgICAgICAgbGV0IGZvcm1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZm9ybVByaW9yaXR5Jyk7ICBcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybVByaW9yaXR5KTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgTGV2ZWwnOyAgXG4gICAgICAgIGZvcm1Qcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIGxldCBzZWxlY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvUHJpb3JpdHknKTtcbiAgICAgICAgc2VsZWN0TWVudS5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGZvcm1Qcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RNZW51KTtcbiAgICAgICAgbGV0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsb3dPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICAgICAgbG93T3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobG93T3B0aW9uKTtcbiAgICAgICAgbGV0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgICAgICAgbWVkaXVtT3B0aW9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobWVkaXVtT3B0aW9uKTtcbiAgICAgICAgbGV0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgaGlnaE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICAgICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTsgXG5cbiAgICAgICAgbGV0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlRGl2Jyk7XG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICAgICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9EdWVEYXRlJyk7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZURpdicpO1xuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9UaXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvVGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb1RpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25EaXYnKTtcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgIGxldCBzdWJtaXRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdFRvZG8uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRUb2RvJyk7XG4gICAgICAgIHN1Ym1pdFRvZG8udGV4dENvbnRlbnQgPSAnQWRkIFRvZG8nO1xuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRUb2RvKTtcbn0iLCJpbXBvcnQgYWRkRWxsaXBzaXNGdW5jdGlvbmFsaXR5IGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vZWRpdC1wcm9qZWN0JztcbmltcG9ydCBleHBhbmRQcm9qZWN0Q2FyZCwgeyB0aXRsZUNsaWNrIH0gZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9leHBhbmQtcHJvamVjdCc7XG5pbXBvcnQgYWRkQWxsUHJvamVjdHNUb0RPTSBmcm9tICcuLi9wcm9qZWN0LWNyZWF0aW9uL2FsbFByb2plY3RzLXRvLURPTSc7XG5pbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdCc7XG5pbXBvcnQgY29tcGxldGVkVGFzayBmcm9tICcuLi9zaGFyZWQtY3JlYXRpb24uanMvY29tcGxldGVkLXRhc2snO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0U2VjdGlvbigpIHtcbiAgICByZW5kZXJQcm9qZWN0Q2FyZHMoYWRkZWRQcm9qZWN0cyk7XG4gICAgaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q2FyZHMoYXJyYXkpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFNlY3Rpb24nKTtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0U2VjdGlvblRpdGxlJyk7XG4gICAgcHJvamVjdFNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdQUk9KRUNUUydcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0U2VjdGlvblRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RTZWN0aW9uKTtcbiAgICBhZGRBbGxQcm9qZWN0c1RvRE9NKGFycmF5KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdENhcmQnKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkoKSB7XG4gICAgYWRkRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCk7XG4gICAgZXhwYW5kUHJvamVjdENhcmQoKTtcbiAgICB0aXRsZUNsaWNrKCk7XG4gICAgY29tcGxldGVkVGFzaygncHJvamVjdCcpO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0U2VjdGlvbiwgcmVuZGVyUHJvamVjdENhcmRzLCBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5IH07IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0XCI7XG5pbXBvcnQgeyBQUk9KRUNUX1ZJRVcgfSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCB7IGFkZEFsbFRvZG9zVG9ET00gfSBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9hZGQtdG9kby10by1ET01cIjtcbmltcG9ydCB7IHN1Ym1pdFRvZG9CdG4gfSBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9uZXctdG9kb1wiO1xuaW1wb3J0IGNyZWF0ZVRvZG9Gb3JtIGZyb20gXCIuLi90b2RvLWNyZWF0aW9uL3RvZG8tZm9ybVwiO1xuaW1wb3J0IGFkZFRvZG9FbGxpcHNpc0Z1bmN0aW9uYWxpdHkgZnJvbSBcIi4uL3RvZG8tY3JlYXRpb24vZWRpdC10b2RvXCI7XG5pbXBvcnQgZXhwYW5kVG9kb0NhcmQgZnJvbSBcIi4uL3RvZG8tY3JlYXRpb24vZXhwYW5kLXRvZG9cIjtcbmltcG9ydCBjb21wbGV0ZWRUYXNrIGZyb20gXCIuLi9zaGFyZWQtY3JlYXRpb24uanMvY29tcGxldGVkLXRhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFZpZXcoKSB7XG4gICAgcmVuZGVyUHJvamVjdFZpZXdUaXRsZSgpO1xuICAgIHJlbmRlclByb2plY3RWaWV3RGVzY3JpcHRpb24oKTtcbiAgICByZW5kZXJQcm9qZWN0VG9kb3NUaXRsZSgpO1xuICAgIHJlbmRlclByb2plY3RUb2RvcyhhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVy0xXS50b2Rvcyk7XG4gICAgaW5pdGlhbGl6ZVRvZG9DYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgIHJlbmRlck5ld1RvZG9CdG4oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFZpZXdUaXRsZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RWaWV3LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWV3Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Vmlldyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWV3VGl0bGUnKTtcbiAgICBjb25zdCB0aXRsZU5hbWUgPSBhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVyAtIDFdLnRpdGxlO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVOYW1lO1xuICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKHRpdGxlKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFZpZXdEZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VmlldycpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Vmlld0Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25EZXRhaWxzID0gYWRkZWRQcm9qZWN0c1tQUk9KRUNUX1ZJRVcgLSAxXS5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9uRGV0YWlsc31gO1xuICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbn0gICBcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRvZG9zVGl0bGUoKSB7XG4gICAgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFZpZXcnKTtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9zLmNsYXNzTGlzdC5hZGQoJ3RvZG9zJyk7XG4gICAgdG9kb3MudGV4dENvbnRlbnQgPSAnVE9ET1MnO1xuICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKHRvZG9zKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRvZG9zKGFycmF5KSB7XG4gICAgYWRkQWxsVG9kb3NUb0RPTShhcnJheSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5ld1RvZG9CdG4oKSB7XG4gICAgY3JlYXRlVG9kb0Zvcm0oKTtcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VmlldycpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3VG9kbycpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFkZCBUb2RvJ1xuICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgaW5pdGlhbGl6ZUFkZFRvZG9CdXR0b24oKVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5KCkge1xuICAgIGxldCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvQ2FyZCcpO1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgdG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9DYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRvZG9DYXJkRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBhZGRUb2RvRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCk7XG4gICAgZXhwYW5kVG9kb0NhcmQoKTtcbiAgICBjb21wbGV0ZWRUYXNrKCd0b2RvJyk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVBZGRUb2RvQnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VG9kbycpO1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Gb3JtJyk7XG4gICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9kb0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfSlcbiAgICBzdWJtaXRUb2RvQnRuKCk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RUb2RvcywgaW5pdGlhbGl6ZVRvZG9DYXJkRnVuY3Rpb25hbGl0eX07XG4iLCJpbXBvcnQgYWRkUHJvamVjdEJ0biwgeyBpbml0aWFsaXplTmV3UHJvamVjdEJ0biwgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vZWRpdC1wcm9qZWN0LmpzJztcbmltcG9ydCBjcmVhdGVQcm9qZWN0Rm9ybSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9wcm9qZWN0LWZvcm0uanNcIjtcbmltcG9ydCBzZXRWaWV3LCB7IEFDVElWRV9WSUVXIH0gZnJvbSBcIi4uL3N0YXRlLmpzXCI7XG5pbXBvcnQgeyBhZGRBbGxQcm9qZWN0c1RvU2lkZWJhciB9IGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL2FsbFByb2plY3RzLXRvLURPTS5qc1wiO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IHZpZXdzID0gWydHRU5FUkFMJywgJ1RPREFZJywgJ1VQQ09NSU5HJ107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclNpZGViYXIoKSB7XG4gICAgcmVuZGVyVmlld0J1dHRvbnModmlld3MpO1xuICAgIHJlbmRlclNpZGViYXJQcm9qZWN0TGlzdFRpdGxlKCk7XG4gICAgcmVuZGVyU2lkZWJhclByb2plY3RMaXN0KGFkZGVkUHJvamVjdHMpO1xuICAgIHNpZGViYXJEZWxldGVGdW5jdGlvbmFsaXR5KCk7XG4gICAgY3JlYXRlUHJvamVjdEZvcm0oKTtcbiAgICByZW5kZXJOZXdQcm9qZWN0QnRuKCk7XG4gICAgYWRkUHJvamVjdEJ0bigpO1xuICAgIGluaXRpYWxpemVOZXdQcm9qZWN0QnRuKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclZpZXdCdXR0b25zKHZpZXdzKSB7XG4gICAgdmlld3MuZm9yRWFjaCgodmlld05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhckl0ZW1cIik7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgdmlld05hbWUpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB2aWV3TmFtZTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRWaWV3KHZpZXdOYW1lKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyUHJvamVjdExpc3RUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckl0ZW0nKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0aXRsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXJQcm9qZWN0TGlzdChwcm9qZWN0cykge1xuICAgIGFkZEFsbFByb2plY3RzVG9TaWRlYmFyKHByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3UHJvamVjdEJ0bigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZWJhckl0ZW0nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xuICAgIGlmIChBQ1RJVkVfVklFVy5pbmNsdWRlcygnUFJPSkVDVCcpKSB7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdCYWNrIHRvIEdFTkVSQUwnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJysgQWRkIFByb2plY3QnO1xuICAgIH1cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59IiwiaW1wb3J0IHsgaXNUb2RheSwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdENhcmRzLCBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5IH0gZnJvbSBcIi4vZ2VuZXJhbC12aWV3XCI7XG5pbXBvcnQgc29ydFRvZG9EYXRlcywgeyBhY3RpdmVUb2RvcywgY2xlYXJBY3RpdmVUb2RvcyB9IGZyb20gXCIuLi90b2RvLWNyZWF0aW9uL3NvcnQtdG9kby1kYXRlc1wiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVRvZG9DYXJkRnVuY3Rpb25hbGl0eSwgcmVuZGVyUHJvamVjdFRvZG9zIH0gZnJvbSBcIi4vcHJvamVjdC12aWV3XCI7XG5cbmxldCB0b2RheXByb2plY3RzID0gW107XG5sZXQgdG9kYXl0b2RvcyA9IFtdO1xuXG5mdW5jdGlvbiB0b2RheVByb2plY3RGaWx0ZXIoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gcGFyc2VJU08oYXJyYXlbaV0uZHVlRGF0ZSk7XG4gICAgICAgIGlmIChpc1RvZGF5KGZvcm1hdHRlZERhdGUpKSB7XG4gICAgICAgICAgICB0b2RheXByb2plY3RzLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9kYXlUb2RvRmlsdGVyKGFycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHBhcnNlSVNPKGFycmF5W2ldLmR1ZURhdGUpO1xuICAgICAgICBpZiAoaXNUb2RheShmb3JtYXR0ZWREYXRlKSkge1xuICAgICAgICAgICAgdG9kYXl0b2Rvcy5wdXNoKGFycmF5W2ldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRvZGF5U2VjdGlvbigpIHtcbiAgICB0b2RheVByb2plY3RGaWx0ZXIoYWRkZWRQcm9qZWN0cyk7XG4gICAgcmVuZGVyUHJvamVjdENhcmRzKHRvZGF5cHJvamVjdHMpO1xuICAgIGluaXRpYWxpemVQcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9zJyk7XG4gICAgdG9kb1NlY3Rpb24udGV4dENvbnRlbnQgPSAnVE9ET1MnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb24pO1xuICAgIHNvcnRUb2RvRGF0ZXMoYWRkZWRQcm9qZWN0cyk7XG4gICAgdG9kYXlUb2RvRmlsdGVyKGFjdGl2ZVRvZG9zKTtcbiAgICByZW5kZXJQcm9qZWN0VG9kb3ModG9kYXl0b2Rvcyk7XG4gICAgaW5pdGlhbGl6ZVRvZG9DYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgIHRvZGF5dG9kb3MgPSBbXTtcbiAgICB0b2RheXByb2plY3RzID0gW107XG4gICAgY2xlYXJBY3RpdmVUb2RvcygpO1xufSIsImltcG9ydCB7IHBhcnNlSVNPLCBpc1RoaXNXZWVrLCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IHNvcnRUb2RvRGF0ZXMsIHsgY2xlYXJBY3RpdmVUb2RvcywgYWN0aXZlVG9kb3MgfSBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9zb3J0LXRvZG8tZGF0ZXNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RDYXJkcywgaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL2dlbmVyYWwtdmlld1wiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVRvZG9DYXJkRnVuY3Rpb25hbGl0eSwgcmVuZGVyUHJvamVjdFRvZG9zIH0gZnJvbSBcIi4vcHJvamVjdC12aWV3XCI7XG5cbmxldCB1cGNvbWluZ1Byb2plY3RzID0gW107XG5sZXQgdXBjb21pbmdUb2RvcyA9IFtdO1xuXG5mdW5jdGlvbiB1cGNvbWluZ1Byb2plY3RzRmlsdGVyKGFycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHBhcnNlSVNPKGFycmF5W2ldLmR1ZURhdGUpO1xuICAgICAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyh0b2RheURhdGUsIGZvcm1hdHRlZERhdGUpIDw9IDE0KSB7XG4gICAgICAgICAgICB1cGNvbWluZ1Byb2plY3RzLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBjb21pbmdUb2Rvc0ZpbHRlcihhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBwYXJzZUlTTyhhcnJheVtpXS5kdWVEYXRlKTtcbiAgICAgICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmIChkaWZmZXJlbmNlSW5DYWxlbmRhckRheXModG9kYXlEYXRlLCBmb3JtYXR0ZWREYXRlKSA8PSAxNCkge1xuICAgICAgICAgICAgdXBjb21pbmdUb2Rvcy5wdXNoKGFycmF5W2ldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclVwY29taW5nU2VjdGlvbigpIHtcbiAgICB1cGNvbWluZ1Byb2plY3RzRmlsdGVyKGFkZGVkUHJvamVjdHMpO1xuICAgIHJlbmRlclByb2plY3RDYXJkcyh1cGNvbWluZ1Byb2plY3RzKTtcbiAgICBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xuICAgIHRvZG9TZWN0aW9uLnRleHRDb250ZW50ID0gJ1RPRE9TJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9TZWN0aW9uKTtcbiAgICBzb3J0VG9kb0RhdGVzKGFkZGVkUHJvamVjdHMpO1xuICAgIHVwY29taW5nVG9kb3NGaWx0ZXIoYWN0aXZlVG9kb3MpO1xuICAgIHJlbmRlclByb2plY3RUb2Rvcyh1cGNvbWluZ1RvZG9zKTtcbiAgICBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgdXBjb21pbmdQcm9qZWN0cyA9IFtdO1xuICAgIHVwY29taW5nVG9kb3MgPSBbXTtcbiAgICBjbGVhckFjdGl2ZVRvZG9zKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpc1RvZGF5LCB0b0RhdGUsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHNldFZpZXcgIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHNvcnREYXRlcyBmcm9tICcuL3Byb2plY3QtY3JlYXRpb24vc29ydC1wcm9qZWN0LWRhdGVzJztcbmltcG9ydCBnZXRBY3RpdmVUb2RvcywgeyBhY3RpdmVUb2RvTGlzdHMsIGFjdGl2ZVRvZG9zIH0gZnJvbSAnLi90b2RvLWNyZWF0aW9uL3NvcnQtdG9kby1kYXRlcyc7XG5pbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0JztcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFxufSlcblxuXG5zZXRWaWV3KCdHRU5FUkFMJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9