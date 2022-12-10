console.log(countTime([0, 1, 1, 0, 1]))
console.log(countTime([0, 0, 0, 1]))
console.log(countTime([0, 0, 1, 0, 0]))

/**
 * 
 * @param {Array[number]} leds represents the series of leds that you have 
 * @returns {number} time required for all LEDs to light up
 */
function countTime(leds) {
    let count = 0
    let arr = leds.join('').split('1')
    arr[0] += arr.at(-1)
    count = Math.max(...arr.map(e=>e.length))

    return count * 7
}



