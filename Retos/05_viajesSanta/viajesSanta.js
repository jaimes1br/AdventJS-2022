const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)) //20 

/**
 * Return the maximum number of gifts to give.
 * Generate all combinations, filter to meet the number of cities available,
 * sum each option and return the highest.
 * 
 * @param {Array[number]} giftsCities contains number of gifts per city
 * @param {number} maxGifts max number of gifts to carry
 * @param {number} maxCities max cities to visit
 * @returns 
 */

function getMaxGifts(giftsCities, maxGifts, maxCities){
    
    const combinations = (array) =>{
        return array.reduce((a,b) => a.concat(a.map(c => [b].concat(c))),[[]])
    }

    const data = combinations(giftsCities)
    .filter(combination => combination.length <= maxCities && combination.length > 0)
    .map(combination => combination.reduce((acc,num) => acc + num))
    .filter(sum => sum <= maxGifts)

    return data.length > 0 ? Math.max(...data) : 0;
}

