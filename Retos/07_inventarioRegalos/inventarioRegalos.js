const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

// console.log(getGiftsToRefill(a1,a2,a3))

/**
 * getGiftsToRefill returns a gifts list to be purchased 
 * 
 * @param {Array[string]} a1 Contains all gifts inside store a1
 * @param {Array[string]} a2 Contains all gifts inside store a2
 * @param {Array[string]} a3 Contains all gifts inside store a3
 * @returns {Array[string]}  Contains gifts to must be purchased
 */

function getGiftsToRefill(a1, a2, a3) {

    let data = a1.concat(a2,a3)
    let t = [...new Set(data)]

    return t.filter( g => a1.includes(g) + a2.includes(g) + a3.includes(g) == 1)
}

module.exports = getGiftsToRefill