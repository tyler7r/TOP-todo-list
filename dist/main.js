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
                if (`${projectList[prop]}` === 'low') {
                    projectElement.textContent = 'L'
                } else if (`${projectList[prop]}` === 'medium') {
                    projectElement.textContent = "M"
                } else if (`${projectList[prop]}` === 'high'){
                    projectElement.textContent = "H"
                }
            } else if (prop === 'description') {
                projectElement.classList.add(`hidden`);
                projectElement.textContent += projectList[prop];
            } else if (prop === 'todos') {
                projectElement.classList.add('hidden');
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
    const priority = projectSelect.querySelector(`.${cardType}priority`);
    priority.classList.add('hidden');
    const checkmark = projectSelect.querySelector(`.${cardType}checkmark`);
    checkmark.classList.add('hidden');
}

function revealDetails(cardType, cardNo) {
    const projectSelect = document.querySelector(`.${cardType}Card.no${cardNo}`);
    const description = document.querySelector(`.${cardType}description`);
    description.classList.toggle('hidden');
    const title = projectSelect.querySelector(`.${cardType}title`);
    title.classList.remove('hidden');
    const dueDate = projectSelect.querySelector(`.${cardType}dueDate`);
    dueDate.classList.remove('hidden');
    const priority = projectSelect.querySelector(`.${cardType}priority`);
    priority.classList.remove('hidden');
    const ellipsis = projectSelect.querySelector(`.${cardType}ellipsis`);
    ellipsis.classList.remove('hidden');
    const checkmark = projectSelect.querySelector(`.${cardType}checkmark`);
    checkmark.classList.remove('hidden');
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

    const formTitle = document.createElement('div');
    formTitle.classList.add('projectFormTitle');
    formTitle.textContent = 'EDIT PROJECT';
    editForm.appendChild(formTitle);

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
        const title = document.querySelector(`#projectTitle.no${cardNo}`).value.toUpperCase();
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
                if (`${priority}` === 'low') {
                    projectNo[i].textContent = 'L'
                } else if (`${priority}` === 'medium') {
                    projectNo[i].textContent = "M"
                } else if (`${priority}` === 'high'){
                    projectNo[i].textContent = "H"
                }
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
            if (projectCard.contains(document.querySelector(`.popupMenu.no${e.target.id.slice(lastChar)}`)) === false) {
                const popupMenu = document.createElement('div');
                popupMenu.classList.add(`popupMenu`);
                popupMenu.classList.add(`no${e.target.id.slice(lastChar)}`) 
                const deleteBtn = document.createElement('div');
                deleteBtn.classList.add('popupDelete');
                deleteBtn.setAttribute('id',`del${e.target.id.slice(lastChar)}`);
                deleteBtn.textContent = 'DELETE';
                popupMenu.appendChild(deleteBtn);
                const editBtn = document.createElement('div');
                editBtn.classList.add('popupEdit');
                editBtn.textContent = 'EDIT';
                editBtn.setAttribute('id', `edit${e.target.id.slice(lastChar)}`);
                popupMenu.appendChild(editBtn);
                projectCard.appendChild(popupMenu);
                popUpOpen = true;
                deleteProject();
                editProject(e.target.id.slice(lastChar));
            } else if (popUpOpen === true || projectCard.classList.contains(`.editMode`)) {
                const menuSelect = document.querySelector(`.popupMenu.no${e.target.id.slice(lastChar)}`);
                menuSelect.classList.add('hidden');
                popUpOpen = false;
            } else if (popUpOpen === false && projectCard.contains(document.querySelector(`.popupMenu.no${e.target.id.slice(lastChar)}`))) {
                const menuSelect = document.querySelector(`.popupMenu.no${e.target.id.slice(lastChar)}`);
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
            const lastChar = (e.target.id).length - 1;
            e.stopImmediatePropagation();
            const projectNo = (e.target.id.slice(lastChar)) - 1;
            (0,_state__WEBPACK_IMPORTED_MODULE_3__["default"])('GENERAL')
            ;(0,_state__WEBPACK_IMPORTED_MODULE_3__.removeProject)(_new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects, projectNo);
        })
    })
    sidebarDeleteBtn.forEach((icon) => {
        icon.addEventListener('mouseover', (e) => {
            e.stopImmediatePropagation();
            let deleteBtn = document.querySelector(`#${e.target.id}`);
            deleteBtn.classList.add('hovered');
        })
        icon.addEventListener('mouseout', (e) => {
            e.stopImmediatePropagation();
            let deleteBtn = document.querySelector(`#${e.target.id}`);
            deleteBtn.classList.remove('hovered');
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
            const popupMenu = document.querySelector(`.popupMenu.no${cardNo}`)
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
/* harmony export */   "initializeNewProjectBtn": () => (/* binding */ initializeNewProjectBtn),
/* harmony export */   "pullFromStorage": () => (/* binding */ pullFromStorage)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.js");


let addedProjects = [];

function pullFromStorage() {
    console.log(addedProjects);
    addedProjects = JSON.parse(localStorage.getItem('masterList'));
    console.log(addedProjects);
}

function addProjectBtn() {
    let addProjectBtn = document.querySelectorAll('.addProject');
    const projectForm = document.querySelector('.projectForm');
    addProjectBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            if (projectForm.classList.contains('hidden') === true) {
                if (`${_state__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_VIEW}`.includes('PROJECT')) {
                    (0,_state__WEBPACK_IMPORTED_MODULE_0__["default"])('GENERAL');
                    projectForm.classList.remove('hidden');
                } else {
                    projectForm.classList.remove('hidden');
                }
            } else {
                return
            }
        })
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
    const title = document.querySelector('#projectTitle.main').value.toUpperCase();
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
    const formTitle = document.createElement('div');
    formTitle.classList.add('projectFormTitle');
    formTitle.textContent = 'NEW PROJECT';
    projectForm.appendChild(formTitle);

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
    const checkmarks = document.querySelectorAll(`.${taskType}checkmark`);
    checkmarks.forEach((check) => {
        check.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            let lastChar = (e.target.id).length - 1;
            const taskNo = (e.target.id.slice(lastChar)) - 1;
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
        check.addEventListener('mouseover', (e) => {
            e.stopImmediatePropagation();
            const check = document.querySelector(`#${e.target.id}`);
            check.classList.remove('checkmark-color');
            check.classList.add('completed-checkmark');
        })
        check.addEventListener('mouseout', (e) => {
            e.stopImmediatePropagation();
            const check = document.querySelector(`#${e.target.id}`);
            check.classList.add('checkmark-color');
            check.classList.remove('completed-checkmark');
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
/* harmony import */ var _project_creation_new_project_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-creation/new-project.js */ "./src/project-creation/new-project.js");
 







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
    localStorage.setItem('masterList', JSON.stringify(_project_creation_new_project_js__WEBPACK_IMPORTED_MODULE_6__.addedProjects));

    (0,_project_creation_sort_project_dates__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const content = document.querySelector('.content');
    content.replaceChildren();

    const sidebar = document.querySelector('.sidebar');
    sidebar.replaceChildren();
    (0,_views_sidebar_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

    const viewButtons = document.querySelectorAll('.viewButton');
    viewButtons.forEach((button) => {
        if (ACTIVE_VIEW === button.textContent) {
            button.classList.add('buttonClicked');
        } else if (ACTIVE_VIEW !== button.textContent) {
            button.classList.remove('buttonClicked');
        }
    })

    const projectTabs = document.querySelectorAll('.tabtitle.projecttitle');
    projectTabs.forEach((tab) => {
        let lastTabChar = tab.className.length - 1;
        let tabNo = tab.className.slice(lastTabChar);
        let lastViewChar = ACTIVE_VIEW.length - 1;
        let viewNo = ACTIVE_VIEW.slice(lastViewChar);
        if (viewNo === tabNo) {
            tab.classList.add('buttonClicked')
        } else if (viewNo !== tabNo) {
            tab.classList.remove('buttonClicked');
        }
    })

    switch (ACTIVE_VIEW) {
        case 'GENERAL':
            ;(0,_views_general_view_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectSection)();
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

// function addTodo(array, todo) {
//     array.push(todo);
//     render();
// }

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
                    if (`${todoList[prop]}` === 'low') {
                        todoElement.textContent += 'L'
                    } else if (`${todoList[prop]}` === 'medium') {
                        todoElement.textContent += "M"
                    } else if (`${todoList[prop]}` === 'high'){
                        todoElement.textContent += "H"
                    }
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
                    if (`${todoList[prop]}` === 'low') {
                        todoElement.textContent += 'L'
                    } else if (`${todoList[prop]}` === 'medium') {
                        todoElement.textContent += "M"
                    } else if (`${todoList[prop]}` === 'high'){
                        todoElement.textContent += "H"
                    }
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
            if (todoCard.contains(document.querySelector(`.todoPopupMenu.no${e.target.id.slice(lastChar)}`)) === false) {
                const popupMenu = document.createElement('div');
                popupMenu.classList.add(`todoPopupMenu`);
                popupMenu.classList.add(`no${e.target.id.slice(lastChar)}`) 
                const deleteBtn = document.createElement('div');
                deleteBtn.classList.add('todoPopupDelete');
                deleteBtn.setAttribute('id',`del${e.target.id.slice(lastChar)}`);
                deleteBtn.textContent = 'DELETE';
                popupMenu.appendChild(deleteBtn);
                const editBtn = document.createElement('div');
                editBtn.classList.add('todoPopupEdit');
                editBtn.textContent = 'EDIT';
                editBtn.setAttribute('id', `edit${e.target.id.slice(lastChar)}`);
                popupMenu.appendChild(editBtn);
                todoCard.appendChild(popupMenu);
                popUpOpen = true;
                deleteProject();
                editProject(e.target.id.slice(lastChar));
            } else if (popUpOpen === true || todoCard.classList.contains(`.editMode`)) {
                const menuSelect = document.querySelector(`.todoPopupMenu.no${e.target.id.slice(lastChar)}`);
                menuSelect.classList.add('hidden');
                popUpOpen = false;
            } else if (popUpOpen === false && todoCard.contains(document.querySelector(`.todoPopupMenu.no${e.target.id.slice(lastChar)}`))) {
                const menuSelect = document.querySelector(`.todoPopupMenu.no${e.target.id.slice(lastChar)}`);
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
            const popupMenu = document.querySelector(`.todoPopupMenu.no${cardNo}`)
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
    const title = document.querySelector(`#todoTitle.main`).value.toUpperCase();
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
        const editForm = document.createElement('form');
        editForm.setAttribute('method', 'get');
        editForm.classList.add('editForm');
        editForm.classList.add(`no${cardNo}`);
        let formTitle = document.createElement('div');
        formTitle.classList.add('projectFormTitle');
        formTitle.textContent = 'EDIT TODO';
        editForm.appendChild(formTitle);
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
            const title = document.querySelector(`#todoprojectTitle.no${cardNo}`).value.toUpperCase();
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
    todoForm.classList.add('todoEditForm')
    todoFormDiv.appendChild(todoForm);
    let formTitle = document.createElement('div');
    formTitle.classList.add('projectFormTitle');
    formTitle.textContent = 'NEW TODO';
    todoForm.appendChild(formTitle);

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
/* harmony export */   "renderNewContentProjectBtn": () => (/* binding */ renderNewContentProjectBtn),
/* harmony export */   "renderProjectCards": () => (/* binding */ renderProjectCards),
/* harmony export */   "renderProjectSection": () => (/* binding */ renderProjectSection)
/* harmony export */ });
/* harmony import */ var _project_creation_edit_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation/edit-project */ "./src/project-creation/edit-project.js");
/* harmony import */ var _project_creation_expand_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-creation/expand-project */ "./src/project-creation/expand-project.js");
/* harmony import */ var _project_creation_allProjects_to_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-creation/allProjects-to-DOM */ "./src/project-creation/allProjects-to-DOM.js");
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-creation/new-project */ "./src/project-creation/new-project.js");
/* harmony import */ var _shared_creation_js_completed_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-creation.js/completed-task */ "./src/shared-creation.js/completed-task.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state */ "./src/state.js");







function renderProjectSection() {
    renderProjectCards(_project_creation_new_project__WEBPACK_IMPORTED_MODULE_3__.addedProjects);
    initializeProjectCardFunctionality();
    renderNewContentProjectBtn();
    (0,_project_creation_new_project__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

function renderProjectCards(array) {
    const content = document.querySelector('.content')
    const projectSection = document.createElement('div');
    projectSection.classList.add('projectSection');
    const projectSectionTitle = document.createElement('div');
    projectSectionTitle.classList.add('projectSectionTitle');
    projectSectionTitle.textContent = 'PROJECTS'
    projectSection.appendChild(projectSectionTitle);
    content.prepend(projectSection);
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

function renderNewContentProjectBtn() {
    const content = document.querySelector('.content');
    const button = document.createElement('div');
    button.classList.add('generalAddProject');
    button.classList.add('addProject');
    if (_state__WEBPACK_IMPORTED_MODULE_5__.ACTIVE_VIEW.includes('PROJECT')) {
        button.textContent = 'Back to GENERAL'
    } else {
        button.textContent = '+ ADD PROJECT';
    }
    content.appendChild(button);
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
    const divider = document.createElement('div');
    divider.classList.add('contentDivider');
    divider.classList.add('divider');
    divider.textContent = '';
    projectView.appendChild(divider);
}   

function renderProjectTodosTitle() {
    const projectView = document.querySelector('.projectView');
    const todos = document.createElement('div');
    todos.classList.add('todos');
    const title = document.createElement('div');
    title.textContent = 'TO-DO LIST';
    title.classList.add('todosTitle');
    todos.appendChild(title);
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
    button.textContent = '+ ADD TODO'
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
        button.classList.add('viewButton');
        button.setAttribute('id', viewName);
        let buttonTitle = document.createElement('div');
        buttonTitle.textContent = viewName;
        buttonTitle.classList.add('viewButtonTitle');
        button.appendChild(buttonTitle);
        sidebar.appendChild(button);
        if (viewName === 'GENERAL') {
            let general = document.getElementById('GENERAL');
            let icon = document.createElement('img');
            icon.src = 'globe.real.svg';
            icon.classList.add('generalIcon');
            icon.classList.add('iconColor');
            general.prepend(icon);
        } else if (viewName === 'TODAY') {
            let today = document.getElementById('TODAY')
            let icon = document.createElement('img');
            icon.src = 'today.svg';
            icon.classList.add('todayIcon');
            icon.classList.add('iconColor');
            today.prepend(icon)
        } else if (viewName === 'UPCOMING') {
            let upcoming = document.getElementById("UPCOMING")
            let icon = document.createElement('img');
            icon.src = 'next-week.svg';
            icon.classList.add('upcomingIcon');
            icon.classList.add('iconColor');
            upcoming.prepend(icon);
        }
        button.addEventListener('click', () => {
            (0,_state_js__WEBPACK_IMPORTED_MODULE_3__["default"])(viewName);
        })
    })
}

function renderSidebarProjectListTitle() {
    const divider = document.createElement('div');
    sidebar.appendChild(divider);
    divider.textContent = ' ';
    divider.classList.add('sidebarItem');
    divider.setAttribute('class', 'divider');
    const title = document.createElement('div');
    title.classList.add('projects');
    title.classList.add('sidebarItem');
    title.textContent = 'PROJECT LIST';
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
        button.textContent = '+ ADD PROJECT';
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
    (0,_general_view__WEBPACK_IMPORTED_MODULE_1__.renderNewContentProjectBtn)();
    (0,_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider');
    divider.classList.add('contentDivider');
    divider.textContent = '';
    content.appendChild(divider);
    const todoSection = document.createElement('div');
    todoSection.classList.add('todos');
    const title = document.createElement('div');
    title.classList.add('todosTitle');
    title.textContent = 'TO-DOS';
    todoSection.appendChild(title);
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
    (0,_general_view__WEBPACK_IMPORTED_MODULE_2__.renderNewContentProjectBtn)();
    (0,_project_creation_new_project__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider');
    divider.textContent = '';
    divider.classList.add('contentDivider');
    content.appendChild(divider);
    const todoSection = document.createElement('div');
    todoSection.classList.add('todos');
    const title = document.createElement('div');
    title.classList.add('todosTitle');
    title.textContent = 'TO-DOS';
    todoSection.appendChild(title);
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
/* harmony import */ var _project_creation_new_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-creation/new-project */ "./src/project-creation/new-project.js");



(0,_project_creation_new_project__WEBPACK_IMPORTED_MODULE_1__.pullFromStorage)();
(0,_state__WEBPACK_IMPORTED_MODULE_0__["default"])('GENERAL');

// projectpriority todopriority
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBNEIsb0RBQVE7QUFDcEM7QUFDQSxZQUFZLG9EQUF3QjtBQUNwQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEMsNEJBQTRCLG9EQUFRO0FBQ3BDO0FBQ0EsWUFBWSxvREFBd0I7QUFDcEM7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZiwyQkFBMkIsd0VBQWE7QUFDeEMsSUFBSSxpRUFBa0I7QUFDdEIsSUFBSSxpRkFBa0M7QUFDdEM7QUFDQSxJQUFJLHlFQUEwQjtBQUM5QixJQUFJLHlFQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQWEsQ0FBQyx3RUFBYTtBQUMvQix3QkFBd0IsdUVBQVc7QUFDbkMsSUFBSSxpRUFBa0I7QUFDdEIsSUFBSSw4RUFBK0I7QUFDbkM7QUFDQTtBQUNBLElBQUksZ0ZBQWdCO0FBQ3BCOzs7Ozs7VUM3REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0I7QUFDa0M7O0FBRWpFLDhFQUFlO0FBQ2Ysa0RBQU87O0FBRVAsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24vYWxsUHJvamVjdHMtdG8tRE9NLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9kZXRhaWxzLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24vZWRpdC1mb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9lZGl0LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNyZWF0aW9uL2V4cGFuZC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24vcHJvamVjdC1mb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi9zb3J0LXByb2plY3QtZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zaGFyZWQtY3JlYXRpb24uanMvY29tcGxldGVkLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRpb24vYWRkLXRvZG8tdG8tRE9NLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGlvbi9lZGl0LXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNyZWF0aW9uL2V4cGFuZC10b2RvLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGlvbi9uZXctdG9kby5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRpb24vc29ydC10b2RvLWRhdGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGlvbi90b2RvLWVkaXQtZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRpb24vdG9kby1mb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvZ2VuZXJhbC12aWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3MvcHJvamVjdC12aWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdmlld3Mvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3RvZGF5LXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy91cGNvbWluZy12aWV3LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IHNldFByb2plY3RWaWV3IH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEFsbFByb2plY3RzVG9ET00oYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0U2VjdGlvbicpO1xuICAgIGlmIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gYXJyYXlbaV07XG4gICAgICAgIGxldCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0Q2FyZGApO1xuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDYXJkLm5vJytbaSsxXSk7XG5cbiAgICAgICAgbGV0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgncHJvamVjdGNoZWNrbWFyaycpO1xuICAgICAgICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCdpZCcsIGBjJHtbaSsxXX1gKTtcbiAgICAgICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbWFyay1jb2xvcicpO1xuICAgICAgICBjaGVja21hcmsuc3JjID0gJ2NoZWNrbWFyay5zdmcnO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG5cbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgbGV0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0JHtwcm9wfWApO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7cHJvamVjdExpc3RbcHJvcF19YCk7XG4gICAgICAgICAgICAgICAgaWYgKGAke3Byb2plY3RMaXN0W3Byb3BdfWAgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gJ0wnXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChgJHtwcm9qZWN0TGlzdFtwcm9wXX1gID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IFwiTVwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChgJHtwcm9qZWN0TGlzdFtwcm9wXX1gID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IFwiSFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgaGlkZGVuYCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgKz0gcHJvamVjdExpc3RbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd0b2RvcycpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCArPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdCcpO1xuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcbiAgICAgICAgbGV0IHRvZG9zID0gYXJyYXlbaV0udG9kb3MubGVuZ3RoO1xuICAgICAgICB0b2RvTGlzdC50ZXh0Q29udGVudCA9IGBUb2RvcyBSZW1haW5pbmc6ICR7dG9kb3N9YDtcblxuICAgICAgICBsZXQgZWxsaXBzaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWxsaXBzaXMuY2xhc3NMaXN0LmFkZCgncHJvamVjdGVsbGlwc2lzJyk7XG4gICAgICAgIGVsbGlwc2lzLnNldEF0dHJpYnV0ZSgnaWQnLCBgZSR7W2krMV19YCk7XG4gICAgICAgIGVsbGlwc2lzLnNyYyA9ICdlbGxpcHNpcy5zdmcnO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGVsbGlwc2lzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkQWxsUHJvamVjdHNUb1NpZGViYXIoYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0U2lkZUJhclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBhcnJheVtpXVxuICAgICAgICAgICAgbGV0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZChgcHJvamVjdFRhYmApO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgICAgICBwcm9qZWN0U2lkZUJhclNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUYWJTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8nK1tpKzFdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0VGFiRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGFiRWxlbWVudC5jbGFzc0xpc3QuYWRkKGB0YWIke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYkVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGFiRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNpZGViYXJEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHNpZGViYXJEZWxldGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckRlbGV0ZScpO1xuICAgICAgICAgICAgc2lkZWJhckRlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHNpZGViYXJEJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIHNpZGViYXJEZWxldGUuc3JjID0gJ2RlbGJ0bi5zdmcnO1xuICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChzaWRlYmFyRGVsZXRlKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFidGl0bGUubm8ke1tpKzFdfWApO1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IGUudGFyZ2V0LmNsYXNzTmFtZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHNldFByb2plY3RWaWV3KGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcikpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgYWRkQWxsUHJvamVjdHNUb1NpZGViYXIgfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlRGV0YWlscyhjYXJkVHlwZSwgY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfUNhcmQubm8ke2NhcmROb31gKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZGVzY3JpcHRpb25gKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9dGl0bGVgKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBkdWVEYXRlID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtjYXJkVHlwZX1kdWVEYXRlYCk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBlbGxpcHNpcyA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZWxsaXBzaXNgKTtcbiAgICBlbGxpcHNpcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtjYXJkVHlwZX1wcmlvcml0eWApO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbnN0IGNoZWNrbWFyayA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9Y2hlY2ttYXJrYCk7XG4gICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZWFsRGV0YWlscyhjYXJkVHlwZSwgY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfUNhcmQubm8ke2NhcmROb31gKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfWRlc2NyaXB0aW9uYCk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgdGl0bGUgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfXRpdGxlYCk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcihgLiR7Y2FyZFR5cGV9ZHVlRGF0ZWApO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfXByaW9yaXR5YCk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgZWxsaXBzaXMgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYC4ke2NhcmRUeXBlfWVsbGlwc2lzYCk7XG4gICAgZWxsaXBzaXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgY2hlY2ttYXJrID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKGAuJHtjYXJkVHlwZX1jaGVja21hcmtgKTtcbiAgICBjaGVja21hcmsuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cywgUHJvamVjdCB9IGZyb20gJy4vbmV3LXByb2plY3QuanMnO1xuXG5pbXBvcnQgeyByZXZlYWxEZXRhaWxzIH0gZnJvbSAnLi9kZXRhaWxzLXRvZ2dsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRGb3JtKGNhcmRObykge1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdENhcmQubm8ke2NhcmROb31gKTtcbiAgICBpZiAocHJvamVjdFNlbGVjdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKSkgPT09IGZhbHNlKSB7XG4gICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgIGxldCBwcm9qZWN0SW5mbyA9IChhZGRlZFByb2plY3RzW2NhcmROby0xXSk7XG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZWRpdEZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdEZvcm0nKTtcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKGBubyR7Y2FyZE5vfWApO1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtVGl0bGUnKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSAnRURJVCBQUk9KRUNUJztcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBwcm9qZWN0SW5mbykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0JHtwcm9wfS5ubyR7Y2FyZE5vfWApO1xuICAgICAgICBpZiAocHJvcCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5RGl2Jyk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcCk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBMZXZlbCdcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3RNZW51KTtcbiAgICAgICAgICAgIGxldCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICAgICAgbG93T3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XG4gICAgICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgICAgICAgICAgIG1lZGl1bU9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICAgICAgbGV0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGhpZ2hPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gICAgICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTsgXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2R1ZURhdGUnKSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZURpdicpO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcCk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBwcm9wKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsIHByb3ApO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGl0bGVEaXYnKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFRpdGxlJyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHByb3ApO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3RvZG9zJykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25EaXYnKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHByb3ApO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIHByb3ApO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3VibWl0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEVkaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWJtaXRQcm9qZWN0Jyk7XG4gICAgc3VibWl0RWRpdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYG5vJHtjYXJkTm99YCk7XG4gICAgc3VibWl0RWRpdC50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICBzdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0VGl0bGUubm8ke2NhcmROb31gKS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkZXNjcmlwdGlvbi5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2R1ZURhdGUubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJpb3JpdHkubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBhZGRlZFByb2plY3RzW2NhcmRObyAtIDFdLnRvZG9zO1xuICAgICAgICBsZXQgZWRpdGVkUHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRvZG9zKTtcbiAgICAgICAgYWRkZWRQcm9qZWN0c1soY2FyZE5vKS0xXSA9IGVkaXRlZFByb2plY3Q7XG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRNb2RlJyk7XG4gICAgICAgIHJldmVhbERldGFpbHMoJ3Byb2plY3QnLCBjYXJkTm8pO1xuXG4gICAgICAgIGxldCBwcm9qZWN0Tm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAubm8ke2NhcmROb31gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Tm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0dGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0ZGVzY3JpcHRpb24nKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdE5vW2ldLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdGR1ZURhdGUnKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2plY3ROb1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3Rwcmlvcml0eScpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdycpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0nKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICBpZiAoYCR7cHJpb3JpdHl9YCA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gJ0wnXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChgJHtwcmlvcml0eX1gID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0udGV4dENvbnRlbnQgPSBcIk1cIlxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYCR7cHJpb3JpdHl9YCA9PT0gJ2hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gXCJIXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRFZGl0KTtcbiAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcblxufSBlbHNlIGlmIChwcm9qZWN0U2VsZWN0LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0Rm9ybS5ubyR7Y2FyZE5vfWApKSkge1xuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVkaXRGb3JtLm5vJHtjYXJkTm99YCk7XG4gICAgZWRpdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xufVxufSIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IGNyZWF0ZUVkaXRGb3JtIGZyb20gXCIuL2VkaXQtZm9ybS5qc1wiO1xuaW1wb3J0IGhpZGVEZXRhaWxzIGZyb20gXCIuL2RldGFpbHMtdG9nZ2xlLmpzXCI7XG5pbXBvcnQgc2V0VmlldywgeyByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEVsbGlwc2lzRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBjb25zdCBlbGxpcHNpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0ZWxsaXBzaXMnKTtcbiAgICBsZXQgcG9wVXBPcGVuID0gZmFsc2U7XG4gICAgZWxsaXBzaXMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RDYXJkLm5vJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHByb2plY3RDYXJkLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdXBNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmNsYXNzTGlzdC5hZGQoYHBvcHVwTWVudWApO1xuICAgICAgICAgICAgICAgIHBvcHVwTWVudS5jbGFzc0xpc3QuYWRkKGBubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwb3B1cERlbGV0ZScpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgZGVsJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RFTEVURSc7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncG9wdXBFZGl0Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFRElUJztcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgZWRpdCR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIHBvcHVwTWVudS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwb3B1cE1lbnUpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0KGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcFVwT3BlbiA9PT0gdHJ1ZSB8fCBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuY29udGFpbnMoYC5lZGl0TW9kZWApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBtZW51U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwb3BVcE9wZW4gPT09IGZhbHNlICYmIHByb2plY3RDYXJkLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudS5ubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIG1lbnVTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cERlbGV0ZScpO1xuICAgIGRlbGV0ZUJ0bi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2UudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUuc2xpY2UoMCwxMSl9YCk7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Tm8gPSAoZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpKSAtIDE7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZEl0ZW0nKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QoYWRkZWRQcm9qZWN0cywgcHJvamVjdE5vKTtcbiAgICAgICAgICAgIH0sIDc1MClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBjb25zdCBzaWRlYmFyRGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJEZWxldGUnKTtcbiAgICBzaWRlYmFyRGVsZXRlQnRuLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5vID0gKGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSkgLSAxO1xuICAgICAgICAgICAgc2V0VmlldygnR0VORVJBTCcpXG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KGFkZGVkUHJvamVjdHMsIHByb2plY3RObyk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBzaWRlYmFyRGVsZXRlQnRuLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlLnRhcmdldC5pZH1gKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJyk7XG4gICAgICAgIH0pXG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlLnRhcmdldC5pZH1gKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3QoY2FyZE5vKSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cEVkaXQnKTtcbiAgICBlZGl0QnRuLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RDYXJkLm5vJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgcG9wdXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudS5ubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBwb3B1cE1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2VkaXRNb2RlJyk7XG4gICAgICAgICAgICBoaWRlRGV0YWlscygncHJvamVjdCcsIGNhcmRObyk7XG4gICAgICAgICAgICBjcmVhdGVFZGl0Rm9ybSgoZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpKSk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgc2lkZWJhckRlbGV0ZUZ1bmN0aW9uYWxpdHkgfTtcblxuIiwiaW1wb3J0IHsgc2V0UHJvamVjdFZpZXcgfSBmcm9tIFwiLi4vc3RhdGVcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFByb2plY3RDYXJkKCkge1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Q2FyZCcpO1xuICAgIHByb2plY3RDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5jbGFzc05hbWUpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Q2FyZCcpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7ZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdE1vZGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9MaXN0Lm5vJHtlLnRhcmdldC5jbGFzc05hbWUuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRpdGxlQ2xpY2soKSB7XG4gICAgY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3R0aXRsZScpO1xuICAgIHByb2plY3RDYXJkcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuY2xhc3NOYW1lKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHNldFByb2plY3RWaWV3KGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcikpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IHRpdGxlQ2xpY2sgfSIsImltcG9ydCBzZXRWaWV3LCB7IEFDVElWRV9WSUVXLCBhZGRQcm9qZWN0IH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5sZXQgYWRkZWRQcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gcHVsbEZyb21TdG9yYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKGFkZGVkUHJvamVjdHMpO1xuICAgIGFkZGVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXN0ZXJMaXN0JykpO1xuICAgIGNvbnNvbGUubG9nKGFkZGVkUHJvamVjdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0QnRuKCkge1xuICAgIGxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZFByb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuICAgIGFkZFByb2plY3RCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHByb2plY3RGb3JtLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYCR7QUNUSVZFX1ZJRVd9YC5pbmNsdWRlcygnUFJPSkVDVCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZpZXcoJ0dFTkVSQUwnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRvZG9zKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTmV3UHJvamVjdEJ0bigpIHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuICAgIGNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpO1xuICAgIHN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG5ld1Byb2plY3RJbmZvKCk7XG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBjbGVhckZvcm1FbnRyeSgncHJpb3JpdHknKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0SW5mbygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUubWFpbicpLnZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24ubWFpbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZS5tYWluJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHkubWFpbicpLnZhbHVlO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgW10pO1xuICAgIGFkZFByb2plY3QoYWRkZWRQcm9qZWN0cywgbmV3UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybUVudHJ5KHByaW9yaXR5TmFtZSkge1xuICAgIGxldCBhbGxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGFsbElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gaW5wdXQudmFsdWUgPSAnJyk7XG4gICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcmlvcml0eU5hbWV9YCk7XG4gICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9ICdsb3cnO1xufVxuXG5leHBvcnQgeyBhZGRlZFByb2plY3RzLCBQcm9qZWN0LCBjbGVhckZvcm1FbnRyeSB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEZvcm1EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm1UaXRsZScpO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdORVcgUFJPSkVDVCc7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgICAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGVEaXYnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFRpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICAgICAgbGV0IGZvcm1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZm9ybVByaW9yaXR5Jyk7ICBcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVByaW9yaXR5KTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgTGV2ZWwnOyAgXG4gICAgICAgIGZvcm1Qcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIGxldCBzZWxlY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICAgICAgICBzZWxlY3RNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZm9ybVByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdE1lbnUpO1xuICAgICAgICBsZXQgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xuICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICBsZXQgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pOyBcblxuICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVEaXYnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25EaXYnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFByb2plY3QnKTtcbiAgICAgICAgc3VibWl0UHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3QpO1xufSIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0RGF0ZXMoKSB7XG4gICAgbGV0IHNvcnRlZFByb2plY3RzID0gYWRkZWRQcm9qZWN0cy5zb3J0KChhLCBiKSA9PiBcbiAgICAoYS5kdWVEYXRlID4gYi5kdWVEYXRlKSA/IDEgOiAoYS5kdWVEYXRlIDwgYi5kdWVEYXRlKSA/IC0xIDogMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFkZGVkUHJvamVjdHNbaV0gPSBzb3J0ZWRQcm9qZWN0c1tpXTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IHJlbW92ZVByb2plY3QsIHJlbW92ZVRvZG8sIFBST0pFQ1RfVklFVyB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBsZXRlZFRhc2sodGFza1R5cGUpIHtcbiAgICBjb25zdCBjaGVja21hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dGFza1R5cGV9Y2hlY2ttYXJrYCk7XG4gICAgY2hlY2ttYXJrcy5mb3JFYWNoKChjaGVjaykgPT4ge1xuICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgdGFza05vID0gKGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSkgLSAxO1xuICAgICAgICAgICAgaWYgKHRhc2tUeXBlID09PSAndG9kbycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5zbGljZSgwLDgpfWApO1xuICAgICAgICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrbWFyay1jb2xvcicpO1xuICAgICAgICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC1jaGVja21hcmsnKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZEl0ZW0nKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVG9kbyhhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVy0xXS50b2RvcywgdGFza05vKTtcbiAgICAgICAgICAgICAgICB9LCA3NTApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrVHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUuc2xpY2UoMCwxMSl9YCk7XG4gICAgICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2ttYXJrLWNvbG9yJyk7XG4gICAgICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWNoZWNrbWFyaycpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkSXRlbScpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9qZWN0KGFkZGVkUHJvamVjdHMsIHRhc2tObyk7XG4gICAgICAgICAgICAgICAgfSwgNzUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2UudGFyZ2V0LmlkfWApO1xuICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2ttYXJrLWNvbG9yJyk7XG4gICAgICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtY2hlY2ttYXJrJyk7XG4gICAgICAgIH0pXG4gICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2UudGFyZ2V0LmlkfWApO1xuICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrLWNvbG9yJyk7XG4gICAgICAgICAgICBjaGVjay5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtY2hlY2ttYXJrJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0U2VjdGlvbiB9IGZyb20gXCIuL3ZpZXdzL2dlbmVyYWwtdmlldy5qc1wiOyBcbmltcG9ydCByZW5kZXJTaWRlYmFyIGZyb20gJy4vdmlld3Mvc2lkZWJhci5qcydcbmltcG9ydCByZW5kZXJUb2RheVNlY3Rpb24gZnJvbSBcIi4vdmlld3MvdG9kYXktdmlld1wiO1xuaW1wb3J0IHJlbmRlclVwY29taW5nU2VjdGlvbiBmcm9tIFwiLi92aWV3cy91cGNvbWluZy12aWV3XCI7XG5pbXBvcnQgc29ydERhdGVzIGZyb20gXCIuL3Byb2plY3QtY3JlYXRpb24vc29ydC1wcm9qZWN0LWRhdGVzXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdFZpZXcgZnJvbSBcIi4vdmlld3MvcHJvamVjdC12aWV3XCI7XG5pbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdC5qc1wiO1xuXG5sZXQgQUNUSVZFX1ZJRVcgPSAnR0VORVJBTCc7XG5sZXQgUFJPSkVDVF9WSUVXO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRWaWV3KHZpZXcpIHtcbiAgICBBQ1RJVkVfVklFVyA9IHZpZXc7XG4gICAgcmVuZGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RWaWV3KHByb2plY3RObykge1xuICAgIFBST0pFQ1RfVklFVyA9IHByb2plY3RObztcbiAgICBzZXRWaWV3KGBQUk9KRUNUJHtQUk9KRUNUX1ZJRVd9YCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXN0ZXJMaXN0JywgSlNPTi5zdHJpbmdpZnkoYWRkZWRQcm9qZWN0cykpO1xuXG4gICAgc29ydERhdGVzKCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIHNpZGViYXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgcmVuZGVyU2lkZWJhcigpO1xuXG4gICAgY29uc3Qgdmlld0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlld0J1dHRvbicpO1xuICAgIHZpZXdCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoQUNUSVZFX1ZJRVcgPT09IGJ1dHRvbi50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChBQ1RJVkVfVklFVyAhPT0gYnV0dG9uLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uQ2xpY2tlZCcpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnRpdGxlLnByb2plY3R0aXRsZScpO1xuICAgIHByb2plY3RUYWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICBsZXQgbGFzdFRhYkNoYXIgPSB0YWIuY2xhc3NOYW1lLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCB0YWJObyA9IHRhYi5jbGFzc05hbWUuc2xpY2UobGFzdFRhYkNoYXIpO1xuICAgICAgICBsZXQgbGFzdFZpZXdDaGFyID0gQUNUSVZFX1ZJRVcubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHZpZXdObyA9IEFDVElWRV9WSUVXLnNsaWNlKGxhc3RWaWV3Q2hhcik7XG4gICAgICAgIGlmICh2aWV3Tm8gPT09IHRhYk5vKSB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2tlZCcpXG4gICAgICAgIH0gZWxzZSBpZiAodmlld05vICE9PSB0YWJObykge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbkNsaWNrZWQnKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBzd2l0Y2ggKEFDVElWRV9WSUVXKSB7XG4gICAgICAgIGNhc2UgJ0dFTkVSQUwnOlxuICAgICAgICAgICAgcmVuZGVyUHJvamVjdFNlY3Rpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUT0RBWSc6XG4gICAgICAgICAgICByZW5kZXJUb2RheVNlY3Rpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdVUENPTUlORyc6XG4gICAgICAgICAgICByZW5kZXJVcGNvbWluZ1NlY3Rpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGBQUk9KRUNUJHtQUk9KRUNUX1ZJRVd9YDpcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RWaWV3KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZFByb2plY3QoYXJyYXksIHByb2plY3QpIHtcbiAgICBhcnJheS5wdXNoKHByb2plY3QpO1xuICAgIHJlbmRlcigpO1xufVxuXG4vLyBmdW5jdGlvbiBhZGRUb2RvKGFycmF5LCB0b2RvKSB7XG4vLyAgICAgYXJyYXkucHVzaCh0b2RvKTtcbi8vICAgICByZW5kZXIoKTtcbi8vIH1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChhcnJheSwgcHJvamVjdCkge1xuICAgIGFycmF5LnNwbGljZShwcm9qZWN0LCAxKTtcbiAgICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhhcnJheSwgdG9kbykge1xuICAgIGFycmF5LnNwbGljZSh0b2RvLCAxKTtcbiAgICByZW5kZXIoKTtcbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgc2V0UHJvamVjdFZpZXcsIFBST0pFQ1RfVklFVywgQUNUSVZFX1ZJRVcsIHJlbW92ZVRvZG8gfTtcblxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9kb1RvRE9NKGFycmF5KSB7XG4gICAgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gKGFycmF5Lmxlbmd0aC0xKTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG9kb0xpc3QgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGxldCB0b2RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9kb0NhcmQpO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kb0NhcmQnKTtcbiAgICAgICAgICAgIHRvZG9DYXJkLmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ2FyZC5ubycrW2krMV0pO1xuXG4gICAgICAgICAgICBsZXQgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgndG9kb2NoZWNrbWFyaycpO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kb2Mke1tpKzFdfWApO1xuICAgICAgICAgICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbWFyay1jb2xvcicpO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnNyYyA9ICdjaGVja21hcmsuc3ZnJztcbiAgICAgICAgICAgIGNhcmRTZWxlY3QuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0b2RvTGlzdCkge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHt0b2RvTGlzdFtwcm9wXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGAke3RvZG9MaXN0W3Byb3BdfWAgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCArPSAnTCdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChgJHt0b2RvTGlzdFtwcm9wXX1gID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgKz0gXCJNXCJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChgJHt0b2RvTGlzdFtwcm9wXX1gID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgKz0gXCJIXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBoaWRkZW5gKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgKz0gdG9kb0xpc3RbcHJvcF07XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgKz0gdG9kb0xpc3RbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBlbGxpcHNpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZWxsaXBzaXMuY2xhc3NMaXN0LmFkZCgndG9kb2VsbGlwc2lzJyk7XG4gICAgICAgICAgICBlbGxpcHNpcy5zZXRBdHRyaWJ1dGUoJ2lkJywgYGUke1tpKzFdfWApO1xuICAgICAgICAgICAgZWxsaXBzaXMuc3JjID0gJ2VsbGlwc2lzLnN2Zyc7XG4gICAgICAgICAgICBjYXJkU2VsZWN0LmFwcGVuZENoaWxkKGVsbGlwc2lzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFsbFRvZG9zVG9ET00oYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuICAgIGlmIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0b2RvTGlzdCA9IGFycmF5W2ldO1xuICAgICAgICAgICAgbGV0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh0b2RvQ2FyZCk7XG4gICAgICAgICAgICB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvQ2FyZCcpO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DYXJkLm5vJytbaSsxXSk7XG5cbiAgICAgICAgICAgIGxldCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCd0b2RvY2hlY2ttYXJrJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCdpZCcsIGB0b2RvYyR7W2krMV19YCk7XG4gICAgICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrLWNvbG9yJyk7XG4gICAgICAgICAgICBjaGVja21hcmsuc3JjID0gJ2NoZWNrbWFyay5zdmcnO1xuICAgICAgICAgICAgY2FyZFNlbGVjdC5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRvZG9MaXN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBjYXJkU2VsZWN0LmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke3RvZG9MaXN0W3Byb3BdfWApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYCR7dG9kb0xpc3RbcHJvcF19YCA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LnRleHRDb250ZW50ICs9ICdMJ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGAke3RvZG9MaXN0W3Byb3BdfWAgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCArPSBcIk1cIlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGAke3RvZG9MaXN0W3Byb3BdfWAgPT09ICdoaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCArPSBcIkhcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYGhpZGRlbmApO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCArPSB0b2RvTGlzdFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCArPSB0b2RvTGlzdFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGVsbGlwc2lzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBlbGxpcHNpcy5jbGFzc0xpc3QuYWRkKCd0b2RvZWxsaXBzaXMnKTtcbiAgICAgICAgICAgIGVsbGlwc2lzLnNldEF0dHJpYnV0ZSgnaWQnLCBgZSR7W2krMV19YCk7XG4gICAgICAgICAgICBlbGxpcHNpcy5zcmMgPSAnZWxsaXBzaXMuc3ZnJztcbiAgICAgICAgICAgIGNhcmRTZWxlY3QuYXBwZW5kQ2hpbGQoZWxsaXBzaXMpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tICcuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0J1xuaW1wb3J0IGNyZWF0ZVRvZG9FZGl0Rm9ybSBmcm9tICcuL3RvZG8tZWRpdC1mb3JtJ1xuaW1wb3J0IGhpZGVEZXRhaWxzIGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL2RldGFpbHMtdG9nZ2xlXCI7XG5pbXBvcnQgeyByZW1vdmVUb2RvLCBQUk9KRUNUX1ZJRVcgfSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9kb0VsbGlwc2lzRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBjb25zdCBlbGxpcHNpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvZWxsaXBzaXMnKTtcbiAgICBsZXQgcG9wVXBPcGVuID0gZmFsc2U7XG4gICAgZWxsaXBzaXMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9DYXJkLm5vJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHRvZG9DYXJkLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvUG9wdXBNZW51Lm5vJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHBvcHVwTWVudS5jbGFzc0xpc3QuYWRkKGB0b2RvUG9wdXBNZW51YCk7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmNsYXNzTGlzdC5hZGQoYG5vJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCkgXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG9Qb3B1cERlbGV0ZScpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgZGVsJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RFTEVURSc7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kb1BvcHVwRWRpdCcpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRURJVCc7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGVkaXQke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBwb3B1cE1lbnUuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgICAgICAgICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQocG9wdXBNZW51KTtcbiAgICAgICAgICAgICAgICBwb3BVcE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoKTtcbiAgICAgICAgICAgICAgICBlZGl0UHJvamVjdChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwb3BVcE9wZW4gPT09IHRydWUgfHwgdG9kb0NhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKGAuZWRpdE1vZGVgKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb1BvcHVwTWVudS5ubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIG1lbnVTZWxlY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcFVwT3BlbiA9PT0gZmFsc2UgJiYgdG9kb0NhcmQuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9Qb3B1cE1lbnUubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9Qb3B1cE1lbnUubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBtZW51U2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb1BvcHVwRGVsZXRlJyk7XG4gICAgZGVsZXRlQnRuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5zbGljZSgwLDgpfWApO1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5vID0gKGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSkgLSAxO1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWRJdGVtJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVUb2RvKGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zLCBwcm9qZWN0Tm8pO1xuICAgICAgICAgICAgfSwgNzUwKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KGNhcmRObykge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb1BvcHVwRWRpdCcpO1xuICAgIGVkaXRCdG4uZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb0NhcmQubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBwb3B1cE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb1BvcHVwTWVudS5ubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBwb3B1cE1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0b2RvU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2VkaXRNb2RlJyk7XG4gICAgICAgICAgICBjcmVhdGVUb2RvRWRpdEZvcm0oKGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSkpO1xuICAgICAgICAgICAgaGlkZURldGFpbHMoJ3RvZG8nLCBjYXJkTm8pO1xuICAgICAgICB9KVxuICAgIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9kb0NhcmQoKSB7XG4gICAgY29uc3QgdG9kb0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9DYXJkJyk7XG4gICAgdG9kb0NhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmNsYXNzTmFtZSkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG9DYXJkJykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0b2RvU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9DYXJkLm5vJHtlLnRhcmdldC5jbGFzc05hbWUuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgaWYgKHRvZG9TZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0TW9kZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB0b2RvU2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy50b2RvZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59IiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0XCI7XG5pbXBvcnQgeyBQUk9KRUNUX1ZJRVcsIHNldFByb2plY3RWaWV3IH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgYWRkVG9kb1RvRE9NIGZyb20gXCIuL2FkZC10b2RvLXRvLURPTVwiO1xuaW1wb3J0IHsgY2xlYXJGb3JtRW50cnkgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IGFkZFRvZG9FbGxpcHNpc0Z1bmN0aW9uYWxpdHkgZnJvbSBcIi4vZWRpdC10b2RvXCI7XG5pbXBvcnQgZXhwYW5kVG9kb0NhcmQgZnJvbSBcIi4vZXhwYW5kLXRvZG9cIjtcbmltcG9ydCBjb21wbGV0ZWRUYXNrIGZyb20gXCIuLi9zaGFyZWQtY3JlYXRpb24uanMvY29tcGxldGVkLXRhc2tcIjtcblxubGV0IHRvZG9MaXN0ID0gW107XG5cbmZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRvZG9CdG4oKSB7XG4gICAgY29uc3Qgc3VibWl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRUb2RvJyk7XG4gICAgc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbmV3VG9kb0luZm8oKTtcbiAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0Zvcm0nKVxuICAgICAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgYWRkVG9kb1RvRE9NKGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zKTtcbiAgICAgICAgY2xlYXJGb3JtRW50cnkoJ3RvZG9Qcmlvcml0eScpO1xuICAgICAgICBhZGRUb2RvRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCk7XG4gICAgICAgIGV4cGFuZFRvZG9DYXJkKCk7XG4gICAgICAgIGNvbXBsZXRlZFRhc2soJ3RvZG8nKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdUb2RvSW5mbygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvVGl0bGUubWFpbmApLnZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb0Rlc2NyaXB0aW9uLm1haW5gKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9EdWVEYXRlLm1haW5gKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvUHJpb3JpdHkubWFpbmApLnZhbHVlO1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgdG9kb0xpc3QucHVzaChuZXdUb2RvKTtcbiAgICBhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVyAtIDFdLnRvZG9zLnB1c2gobmV3VG9kbyk7XG59XG5cbmV4cG9ydCB7IHN1Ym1pdFRvZG9CdG4sIFRvZG8gfTtcblxuIiwiaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL25ldy1wcm9qZWN0XCI7XG5cbmxldCBhY3RpdmVUb2RvcyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRBY3RpdmVUb2RvcyhhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRvZG9MaXN0ID0gYXJyYXlbaV0udG9kb3M7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG9kb0xpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGFjdGl2ZVRvZG9zLnB1c2godG9kb0xpc3Rbal0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0VG9kb0RhdGVzKGFycmF5KSB7XG4gICAgZ2V0QWN0aXZlVG9kb3MoYWRkZWRQcm9qZWN0cyk7XG4gICAgbGV0IHNvcnRlZFRvZG9zID0gYXJyYXkuc29ydCgoYSwgYikgPT4gXG4gICAgKGEuZHVlRGF0ZSA+IGIuZHVlRGF0ZSkgPyAxIDogKGEuZHVlRGF0ZSA8IGIuZHVlRGF0ZSkgPyAtMSA6IDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXlbaV0gPSBzb3J0ZWRUb2Rvc1tpXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWN0aXZlVG9kb3MoKSB7XG4gICAgYWN0aXZlVG9kb3MgPSBbXTtcbn1cblxuZXhwb3J0IHsgYWN0aXZlVG9kb3MsIGNsZWFyQWN0aXZlVG9kb3MgfTsiLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdCc7XG5pbXBvcnQgeyByZXZlYWxEZXRhaWxzIH0gZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9kZXRhaWxzLXRvZ2dsZSc7XG5pbXBvcnQgc2V0VmlldywgeyBQUk9KRUNUX1ZJRVcgfWZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL25ldy10b2RvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0VkaXRGb3JtKGNhcmRObykge1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb0NhcmQubm8ke2NhcmROb31gKTtcbiAgICBpZiAocHJvamVjdFNlbGVjdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICAgICAgbGV0IHByb2plY3RJbmZvID0gKGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zW2NhcmROby0xXSk7XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBlZGl0Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdEZvcm0nKTtcbiAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZChgbm8ke2NhcmROb31gKTtcbiAgICAgICAgbGV0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm1UaXRsZScpO1xuICAgICAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSAnRURJVCBUT0RPJztcbiAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvamVjdEluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG8ke3Byb3B9Lm5vJHtjYXJkTm99YCk7XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndG9kb1ByaW9yaXR5RGl2Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgTGV2ZWwnXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG9wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgbm8ke2NhcmROb31gKVxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3RNZW51KTtcbiAgICAgICAgICAgICAgICBsZXQgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgbG93T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gICAgICAgICAgICAgICAgbG93T3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xuICAgICAgICAgICAgICAgIGxldCBtZWRpdW1PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgICAgICAgICAgICAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKG1lZGl1bU9wdGlvbik7XG4gICAgICAgICAgICAgICAgbGV0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICAgICAgICAgIGhpZ2hPcHRpb24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkdWVEYXRlJykge1xuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndG9kb0R1ZURhdGVEaXYnKTtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgbm8ke2NhcmROb31gKVxuICAgICAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZURpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9wcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd0b2RvcycpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGVzY3JpcHRpb25EaXYnKTtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdG9kbyR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYHRvZG8ke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGB0b2RvJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgbm8ke2NhcmROb31gKVxuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc3VibWl0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRFZGl0KTtcbiAgICAgICAgc3VibWl0RWRpdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1Ym1pdFByb2plY3QnKTtcbiAgICAgICAgc3VibWl0RWRpdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYG5vJHtjYXJkTm99YCk7XG4gICAgICAgIHN1Ym1pdEVkaXQudGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgICAgIHN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb3Byb2plY3RUaXRsZS5ubyR7Y2FyZE5vfWApLnZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvZGVzY3JpcHRpb24ubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kb2R1ZURhdGUubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG9wcmlvcml0eS5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGVkaXRlZFRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zW2NhcmROby0xXSA9IGVkaXRlZFRvZG87XG4gICAgICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdE1vZGUnKTtcbiAgICAgICAgICAgIHJldmVhbERldGFpbHMoJ3RvZG8nLCBjYXJkTm8pO1xuICAgICAgICAgICAgc2V0VmlldyhgUFJPSkVDVCR7UFJPSkVDVF9WSUVXfWApO1xuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAocHJvamVjdFNlbGVjdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKSkpIHtcbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKTtcbiAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm0oKSB7XG4gICAgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFZpZXcnKTtcbiAgICBjb25zdCB0b2RvRm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Gb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9Gb3JtJyk7XG4gICAgdG9kb0Zvcm1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9kb0Zvcm1EaXYpO1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9Gb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ2dldCcpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXRNb2RlJyk7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgndG9kb0VkaXRGb3JtJylcbiAgICB0b2RvRm9ybURpdi5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG4gICAgbGV0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybVRpdGxlJyk7XG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ05FVyBUT0RPJztcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZURpdicpO1xuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9UaXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvVGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb1RpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgICAgICBsZXQgZm9ybVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdmb3JtUHJpb3JpdHknKTsgIFxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHkpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBMZXZlbCc7ICBcbiAgICAgICAgZm9ybVByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgbGV0IHNlbGVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9Qcmlvcml0eScpO1xuICAgICAgICBzZWxlY3RNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgZm9ybVByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdE1lbnUpO1xuICAgICAgICBsZXQgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xuICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICBsZXQgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pOyBcblxuICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVEaXYnKTtcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb0R1ZURhdGUnKTtcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uRGl2Jyk7XG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9EZXNjcmlwdGlvbicpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICBsZXQgc3VibWl0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRUb2RvLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0VG9kbycpO1xuICAgICAgICBzdWJtaXRUb2RvLnRleHRDb250ZW50ID0gJ0FkZCBUb2RvJztcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VG9kbyk7XG59IiwiaW1wb3J0IGFkZEVsbGlwc2lzRnVuY3Rpb25hbGl0eSBmcm9tICcuLi9wcm9qZWN0LWNyZWF0aW9uL2VkaXQtcHJvamVjdCc7XG5pbXBvcnQgZXhwYW5kUHJvamVjdENhcmQsIHsgdGl0bGVDbGljayB9IGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vZXhwYW5kLXByb2plY3QnO1xuaW1wb3J0IGFkZEFsbFByb2plY3RzVG9ET00gZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9hbGxQcm9qZWN0cy10by1ET00nO1xuaW1wb3J0IGFkZFByb2plY3RCdG4sIHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gJy4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3QnO1xuaW1wb3J0IGNvbXBsZXRlZFRhc2sgZnJvbSAnLi4vc2hhcmVkLWNyZWF0aW9uLmpzL2NvbXBsZXRlZC10YXNrJztcbmltcG9ydCB7IEFDVElWRV9WSUVXIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0U2VjdGlvbigpIHtcbiAgICByZW5kZXJQcm9qZWN0Q2FyZHMoYWRkZWRQcm9qZWN0cyk7XG4gICAgaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgIHJlbmRlck5ld0NvbnRlbnRQcm9qZWN0QnRuKCk7XG4gICAgYWRkUHJvamVjdEJ0bigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q2FyZHMoYXJyYXkpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFNlY3Rpb24nKTtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0U2VjdGlvblRpdGxlJyk7XG4gICAgcHJvamVjdFNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdQUk9KRUNUUydcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0U2VjdGlvblRpdGxlKTtcbiAgICBjb250ZW50LnByZXBlbmQocHJvamVjdFNlY3Rpb24pO1xuICAgIGFkZEFsbFByb2plY3RzVG9ET00oYXJyYXkpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5KCkge1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Q2FyZCcpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBhZGRFbGxpcHNpc0Z1bmN0aW9uYWxpdHkoKTtcbiAgICBleHBhbmRQcm9qZWN0Q2FyZCgpO1xuICAgIHRpdGxlQ2xpY2soKTtcbiAgICBjb21wbGV0ZWRUYXNrKCdwcm9qZWN0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOZXdDb250ZW50UHJvamVjdEJ0bigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZ2VuZXJhbEFkZFByb2plY3QnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xuICAgIGlmIChBQ1RJVkVfVklFVy5pbmNsdWRlcygnUFJPSkVDVCcpKSB7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdCYWNrIHRvIEdFTkVSQUwnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJysgQUREIFBST0pFQ1QnO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RTZWN0aW9uLCByZW5kZXJQcm9qZWN0Q2FyZHMsIGluaXRpYWxpemVQcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkgfTsiLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IFBST0pFQ1RfVklFVyB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuaW1wb3J0IHsgYWRkQWxsVG9kb3NUb0RPTSB9IGZyb20gXCIuLi90b2RvLWNyZWF0aW9uL2FkZC10b2RvLXRvLURPTVwiO1xuaW1wb3J0IHsgc3VibWl0VG9kb0J0biB9IGZyb20gXCIuLi90b2RvLWNyZWF0aW9uL25ldy10b2RvXCI7XG5pbXBvcnQgY3JlYXRlVG9kb0Zvcm0gZnJvbSBcIi4uL3RvZG8tY3JlYXRpb24vdG9kby1mb3JtXCI7XG5pbXBvcnQgYWRkVG9kb0VsbGlwc2lzRnVuY3Rpb25hbGl0eSBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9lZGl0LXRvZG9cIjtcbmltcG9ydCBleHBhbmRUb2RvQ2FyZCBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9leHBhbmQtdG9kb1wiO1xuaW1wb3J0IGNvbXBsZXRlZFRhc2sgZnJvbSBcIi4uL3NoYXJlZC1jcmVhdGlvbi5qcy9jb21wbGV0ZWQtdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0VmlldygpIHtcbiAgICByZW5kZXJQcm9qZWN0Vmlld1RpdGxlKCk7XG4gICAgcmVuZGVyUHJvamVjdFZpZXdEZXNjcmlwdGlvbigpO1xuICAgIHJlbmRlclByb2plY3RUb2Rvc1RpdGxlKCk7XG4gICAgcmVuZGVyUHJvamVjdFRvZG9zKGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXLTFdLnRvZG9zKTtcbiAgICBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgcmVuZGVyTmV3VG9kb0J0bigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Vmlld1RpdGxlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZXcnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RWaWV3KTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZXdUaXRsZScpO1xuICAgIGNvbnN0IHRpdGxlTmFtZSA9IGFkZGVkUHJvamVjdHNbUFJPSkVDVF9WSUVXIC0gMV0udGl0bGU7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZU5hbWU7XG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Vmlld0Rlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RWaWV3Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWV3RGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRldGFpbHMgPSBhZGRlZFByb2plY3RzW1BST0pFQ1RfVklFVyAtIDFdLmRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb25EZXRhaWxzfWA7XG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnREaXZpZGVyJyk7XG4gICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKCdkaXZpZGVyJyk7XG4gICAgZGl2aWRlci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKGRpdmlkZXIpO1xufSAgIFxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VG9kb3NUaXRsZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VmlldycpO1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3MuY2xhc3NMaXN0LmFkZCgndG9kb3MnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RPLURPIExJU1QnO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9zVGl0bGUnKTtcbiAgICB0b2Rvcy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodG9kb3MpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VG9kb3MoYXJyYXkpIHtcbiAgICBhZGRBbGxUb2Rvc1RvRE9NKGFycmF5KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3VG9kb0J0bigpIHtcbiAgICBjcmVhdGVUb2RvRm9ybSgpO1xuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RWaWV3Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXdUb2RvJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJysgQUREIFRPRE8nXG4gICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBpbml0aWFsaXplQWRkVG9kb0J1dHRvbigpXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVUb2RvQ2FyZEZ1bmN0aW9uYWxpdHkoKSB7XG4gICAgbGV0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9DYXJkJyk7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0NhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9kb0NhcmRGdW5jdGlvbmFsaXR5KCkge1xuICAgIGFkZFRvZG9FbGxpcHNpc0Z1bmN0aW9uYWxpdHkoKTtcbiAgICBleHBhbmRUb2RvQ2FyZCgpO1xuICAgIGNvbXBsZXRlZFRhc2soJ3RvZG8nKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFkZFRvZG9CdXR0b24oKSB7XG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvJyk7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0Zvcm0nKTtcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KVxuICAgIHN1Ym1pdFRvZG9CdG4oKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdFRvZG9zLCBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5fTtcbiIsImltcG9ydCBhZGRQcm9qZWN0QnRuLCB7IGluaXRpYWxpemVOZXdQcm9qZWN0QnRuLCBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3QuanNcIjtcbmltcG9ydCB7IHNpZGViYXJEZWxldGVGdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi4vcHJvamVjdC1jcmVhdGlvbi9lZGl0LXByb2plY3QuanMnO1xuaW1wb3J0IGNyZWF0ZVByb2plY3RGb3JtIGZyb20gXCIuLi9wcm9qZWN0LWNyZWF0aW9uL3Byb2plY3QtZm9ybS5qc1wiO1xuaW1wb3J0IHNldFZpZXcsIHsgQUNUSVZFX1ZJRVcgfSBmcm9tIFwiLi4vc3RhdGUuanNcIjtcbmltcG9ydCB7IGFkZEFsbFByb2plY3RzVG9TaWRlYmFyIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vYWxsUHJvamVjdHMtdG8tRE9NLmpzXCI7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3Qgdmlld3MgPSBbJ0dFTkVSQUwnLCAnVE9EQVknLCAnVVBDT01JTkcnXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyU2lkZWJhcigpIHtcbiAgICByZW5kZXJWaWV3QnV0dG9ucyh2aWV3cyk7XG4gICAgcmVuZGVyU2lkZWJhclByb2plY3RMaXN0VGl0bGUoKTtcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdExpc3QoYWRkZWRQcm9qZWN0cyk7XG4gICAgc2lkZWJhckRlbGV0ZUZ1bmN0aW9uYWxpdHkoKTtcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpO1xuICAgIHJlbmRlck5ld1Byb2plY3RCdG4oKTtcbiAgICBhZGRQcm9qZWN0QnRuKCk7XG4gICAgaW5pdGlhbGl6ZU5ld1Byb2plY3RCdG4oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVmlld0J1dHRvbnModmlld3MpIHtcbiAgICB2aWV3cy5mb3JFYWNoKCh2aWV3TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFySXRlbVwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZpZXdCdXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCB2aWV3TmFtZSk7XG4gICAgICAgIGxldCBidXR0b25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25UaXRsZS50ZXh0Q29udGVudCA9IHZpZXdOYW1lO1xuICAgICAgICBidXR0b25UaXRsZS5jbGFzc0xpc3QuYWRkKCd2aWV3QnV0dG9uVGl0bGUnKTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblRpdGxlKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBpZiAodmlld05hbWUgPT09ICdHRU5FUkFMJykge1xuICAgICAgICAgICAgbGV0IGdlbmVyYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnR0VORVJBTCcpO1xuICAgICAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGljb24uc3JjID0gJ2dsb2JlLnJlYWwuc3ZnJztcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZ2VuZXJhbEljb24nKTtcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbkNvbG9yJyk7XG4gICAgICAgICAgICBnZW5lcmFsLnByZXBlbmQoaWNvbik7XG4gICAgICAgIH0gZWxzZSBpZiAodmlld05hbWUgPT09ICdUT0RBWScpIHtcbiAgICAgICAgICAgIGxldCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdUT0RBWScpXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaWNvbi5zcmMgPSAndG9kYXkuc3ZnJztcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgndG9kYXlJY29uJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25Db2xvcicpO1xuICAgICAgICAgICAgdG9kYXkucHJlcGVuZChpY29uKVxuICAgICAgICB9IGVsc2UgaWYgKHZpZXdOYW1lID09PSAnVVBDT01JTkcnKSB7XG4gICAgICAgICAgICBsZXQgdXBjb21pbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlVQQ09NSU5HXCIpXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaWNvbi5zcmMgPSAnbmV4dC13ZWVrLnN2Zyc7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ3VwY29taW5nSWNvbicpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uQ29sb3InKTtcbiAgICAgICAgICAgIHVwY29taW5nLnByZXBlbmQoaWNvbik7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2V0Vmlldyh2aWV3TmFtZSk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhclByb2plY3RMaXN0VGl0bGUoKSB7XG4gICAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gICAgZGl2aWRlci50ZXh0Q29udGVudCA9ICcgJztcbiAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJdGVtJyk7XG4gICAgZGl2aWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RpdmlkZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckl0ZW0nKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdQUk9KRUNUIExJU1QnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyUHJvamVjdExpc3QocHJvamVjdHMpIHtcbiAgICBhZGRBbGxQcm9qZWN0c1RvU2lkZWJhcihwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5ld1Byb2plY3RCdG4oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJdGVtJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3QnKTtcbiAgICBpZiAoQUNUSVZFX1ZJRVcuaW5jbHVkZXMoJ1BST0pFQ1QnKSkge1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQmFjayB0byBHRU5FUkFMJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFERCBQUk9KRUNUJztcbiAgICB9XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChidXR0b24pO1xufSIsImltcG9ydCB7IGlzVG9kYXksIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgYWRkUHJvamVjdEJ0biwgeyBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RDYXJkcywgaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL2dlbmVyYWwtdmlld1wiO1xuaW1wb3J0IHNvcnRUb2RvRGF0ZXMsIHsgYWN0aXZlVG9kb3MsIGNsZWFyQWN0aXZlVG9kb3MgfSBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9zb3J0LXRvZG8tZGF0ZXNcIjtcbmltcG9ydCB7IGluaXRpYWxpemVUb2RvQ2FyZEZ1bmN0aW9uYWxpdHksIHJlbmRlclByb2plY3RUb2RvcyB9IGZyb20gXCIuL3Byb2plY3Qtdmlld1wiO1xuaW1wb3J0IHsgcmVuZGVyTmV3Q29udGVudFByb2plY3RCdG4gfSBmcm9tIFwiLi9nZW5lcmFsLXZpZXdcIjtcblxubGV0IHRvZGF5cHJvamVjdHMgPSBbXTtcbmxldCB0b2RheXRvZG9zID0gW107XG5cbmZ1bmN0aW9uIHRvZGF5UHJvamVjdEZpbHRlcihhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBwYXJzZUlTTyhhcnJheVtpXS5kdWVEYXRlKTtcbiAgICAgICAgaWYgKGlzVG9kYXkoZm9ybWF0dGVkRGF0ZSkpIHtcbiAgICAgICAgICAgIHRvZGF5cHJvamVjdHMucHVzaChhcnJheVtpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2RheVRvZG9GaWx0ZXIoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gcGFyc2VJU08oYXJyYXlbaV0uZHVlRGF0ZSk7XG4gICAgICAgIGlmIChpc1RvZGF5KGZvcm1hdHRlZERhdGUpKSB7XG4gICAgICAgICAgICB0b2RheXRvZG9zLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVG9kYXlTZWN0aW9uKCkge1xuICAgIHRvZGF5UHJvamVjdEZpbHRlcihhZGRlZFByb2plY3RzKTtcbiAgICByZW5kZXJQcm9qZWN0Q2FyZHModG9kYXlwcm9qZWN0cyk7XG4gICAgaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIHJlbmRlck5ld0NvbnRlbnRQcm9qZWN0QnRuKCk7XG4gICAgYWRkUHJvamVjdEJ0bigpO1xuICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZpZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2aWRlcicpO1xuICAgIGRpdmlkZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudERpdmlkZXInKTtcbiAgICBkaXZpZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXZpZGVyKTtcbiAgICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9zJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2Rvc1RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVE8tRE9TJztcbiAgICB0b2RvU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvU2VjdGlvbik7XG4gICAgc29ydFRvZG9EYXRlcyhhZGRlZFByb2plY3RzKTtcbiAgICB0b2RheVRvZG9GaWx0ZXIoYWN0aXZlVG9kb3MpO1xuICAgIHJlbmRlclByb2plY3RUb2Rvcyh0b2RheXRvZG9zKTtcbiAgICBpbml0aWFsaXplVG9kb0NhcmRGdW5jdGlvbmFsaXR5KCk7XG4gICAgdG9kYXl0b2RvcyA9IFtdO1xuICAgIHRvZGF5cHJvamVjdHMgPSBbXTtcbiAgICBjbGVhckFjdGl2ZVRvZG9zKCk7XG59XG5cbiIsImltcG9ydCB7IHBhcnNlSVNPLCBpc1RoaXNXZWVrLCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IHNvcnRUb2RvRGF0ZXMsIHsgY2xlYXJBY3RpdmVUb2RvcywgYWN0aXZlVG9kb3MgfSBmcm9tIFwiLi4vdG9kby1jcmVhdGlvbi9zb3J0LXRvZG8tZGF0ZXNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RDYXJkcywgaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL2dlbmVyYWwtdmlld1wiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVRvZG9DYXJkRnVuY3Rpb25hbGl0eSwgcmVuZGVyUHJvamVjdFRvZG9zIH0gZnJvbSBcIi4vcHJvamVjdC12aWV3XCI7XG5pbXBvcnQgeyByZW5kZXJOZXdDb250ZW50UHJvamVjdEJ0biB9IGZyb20gXCIuL2dlbmVyYWwtdmlld1wiO1xuaW1wb3J0IGFkZFByb2plY3RCdG4gZnJvbSBcIi4uL3Byb2plY3QtY3JlYXRpb24vbmV3LXByb2plY3RcIjtcblxubGV0IHVwY29taW5nUHJvamVjdHMgPSBbXTtcbmxldCB1cGNvbWluZ1RvZG9zID0gW107XG5cbmZ1bmN0aW9uIHVwY29taW5nUHJvamVjdHNGaWx0ZXIoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gcGFyc2VJU08oYXJyYXlbaV0uZHVlRGF0ZSk7XG4gICAgICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRvZGF5RGF0ZSwgZm9ybWF0dGVkRGF0ZSkgPD0gMTQpIHtcbiAgICAgICAgICAgIHVwY29taW5nUHJvamVjdHMucHVzaChhcnJheVtpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGNvbWluZ1RvZG9zRmlsdGVyKGFycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHBhcnNlSVNPKGFycmF5W2ldLmR1ZURhdGUpO1xuICAgICAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyh0b2RheURhdGUsIGZvcm1hdHRlZERhdGUpIDw9IDE0KSB7XG4gICAgICAgICAgICB1cGNvbWluZ1RvZG9zLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVXBjb21pbmdTZWN0aW9uKCkge1xuICAgIHVwY29taW5nUHJvamVjdHNGaWx0ZXIoYWRkZWRQcm9qZWN0cyk7XG4gICAgcmVuZGVyUHJvamVjdENhcmRzKHVwY29taW5nUHJvamVjdHMpO1xuICAgIGluaXRpYWxpemVQcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICByZW5kZXJOZXdDb250ZW50UHJvamVjdEJ0bigpO1xuICAgIGFkZFByb2plY3RCdG4oKTtcbiAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2aWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RpdmlkZXInKTtcbiAgICBkaXZpZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50RGl2aWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kb3NUaXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RPLURPUyc7XG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb24pO1xuICAgIHNvcnRUb2RvRGF0ZXMoYWRkZWRQcm9qZWN0cyk7XG4gICAgdXBjb21pbmdUb2Rvc0ZpbHRlcihhY3RpdmVUb2Rvcyk7XG4gICAgcmVuZGVyUHJvamVjdFRvZG9zKHVwY29taW5nVG9kb3MpO1xuICAgIGluaXRpYWxpemVUb2RvQ2FyZEZ1bmN0aW9uYWxpdHkoKTtcbiAgICB1cGNvbWluZ1Byb2plY3RzID0gW107XG4gICAgdXBjb21pbmdUb2RvcyA9IFtdO1xuICAgIGNsZWFyQWN0aXZlVG9kb3MoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzZXRWaWV3ICBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IHB1bGxGcm9tU3RvcmFnZSB9IGZyb20gJy4vcHJvamVjdC1jcmVhdGlvbi9uZXctcHJvamVjdCc7XG5cbnB1bGxGcm9tU3RvcmFnZSgpO1xuc2V0VmlldygnR0VORVJBTCcpO1xuXG4vLyBwcm9qZWN0cHJpb3JpdHkgdG9kb3ByaW9yaXR5Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9