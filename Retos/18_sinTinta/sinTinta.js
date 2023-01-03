
 
// console.log(dryNumber(1, 15)) // [1, 10, 11, 12, 13, 14, 15]
// console.log(dryNumber(2, 20))

/**
 * 
 * @param {number} dry number we cannot print
 * @param {number} numbers numbers to print
 * @returns {number[]} numbers with errors to print
 */
function dryNumber(dry, numbers) {

    let errors = new Array(numbers)
        .fill()
        .map((_,i) => i + 1)

    return errors.filter(num => `${num}`.includes(`${dry}`))
}

module.exports = dryNumber