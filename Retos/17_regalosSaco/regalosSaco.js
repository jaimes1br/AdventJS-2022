

// console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10))
// console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7))
// console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4));
// console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6));
// console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 2));


/**
 * 
 * @param {string[]} gifts gifts list
 * @param {number} maxWeight  maximum weight per bag
 * @returns {string[]} Each element represents a bag with the gifts that can be taken away
 */
function carryGifts(gifts, maxWeight) {
    
    let sacos = []
    let tempWeight = 0
    let tempSaco = []
    gifts.forEach(gift => {
        if(tempWeight + gift.length <= maxWeight){
            tempSaco.push(gift)
            tempWeight += gift.length
        }else if(gift.length <= maxWeight){
            sacos.push(tempSaco)
            tempSaco = [gift]
            tempWeight = gift.length
        }
    });
    
    if(tempSaco.length > 0) sacos.push(tempSaco)
    return sacos.map(saco => saco.join(' '))

}

module.exports = carryGifts