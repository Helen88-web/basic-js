const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
let arr = [];

function countCats(arr) {
    let sum = 0;
    let result = arr.map(function(elem) {
        return elem.map(function(num) {
            if (num == '^^')
                sum += 1;
        });
    });
    return sum;
}

module.exports = {
    countCats
};