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
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let month = date.getMonth();
    let day = date.getDate();

    function check(y, m, d) {
        y = +y, --m, d = +d;
        var date = new Date(date);
        return x.getFullYear() === y && x.getMonth() === m && x.getDate() === d;
    }

}
getSeason(new Date(2020, 01, 30))

module.exports = {
    getSeason
};