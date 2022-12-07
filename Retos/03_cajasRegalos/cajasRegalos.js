
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

console.log(distributeGifts(packOfGifts, reindeers))

/**
 * distributeGifts returns a number representing how many packOfGifts
 * the reindeers may carry
 * 
 * @param {Array[string]} packOfGifts  Contains all gifts(strings) to delivery
 * @param {Array[string]} reindeers Contains all reindeers' names
 * @returns {number}
 */

function distributeGifts(packOfGifts, reindeers) {
    const weightGifts = packOfGifts.reduce((acc,gift) => acc + gift.length,0)
    const reindeersHolding = reindeers.reduce((acc,reindeer) => acc + (reindeer.length * 2),0)
    return Math.trunc(reindeersHolding / weightGifts)
}