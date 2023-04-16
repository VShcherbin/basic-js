const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  console.log(date.getMonth())
  if (!date) return 'Unable to determine the time of year!';
  if (typeof date.getMonth() === "number") throw new NotImplementedError('Invalid date!');
  if (date.getMonth() < 2 || date.getMonth(date) === 11) {
    return "winter"
  } else if (date.getMonth() < 5) {
    return "spring"
  } else if (date.getMonth() < 8) {
    return "summer"
  } else if (date.getMonth() < 11) {
    return "autumn (fall)"
  }
}

module.exports = {
  getSeason
};
