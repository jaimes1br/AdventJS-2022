const heights = [1, 3, 8, 5, 2]
// console.log(checkJump([1, 3, 8, 5, 2])) //true
// console.log(checkJump([1, 7, 3, 5]))  //false
// console.log(checkJump([1, 2, 3])); //false
// console.log(checkJump([2, 2, 2, 2])); //false
console.log(checkJump([1, 2, 3, 2, 1, 2, 3]))
/**
 * 
 * it is a valid jump if it goes up and down
 *
 * @param {Array[number]} heights  contains values representing the height of the cities
 * @returns {boolean} is it a valid jump?
 */

function checkJump(heights) {

    let indexMax = heights.indexOf(Math.max(...heights))
    let upA = heights.slice(0,indexMax)  
    let downA = heights.slice(indexMax + 1)

    let up = upA.slice(1).every((n,i) => n >= upA[i])
    let down = downA.slice(1).every((n,i) => n <= downA[i])

    return upA.length > 0 && downA.length > 0 && up && down
}

module.exports = checkJump
