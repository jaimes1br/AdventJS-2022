const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

// console.log(wrapped)

/**
 * wrapping allows us to use an array of gifts that we will return but now as wrapped gifts
 * 
 * @param {Array} gifts Array containing all gifts(strings) to be wrapped
 * @returns {Array} Array containing all wrapped gifts(strings)
 */

function wrapping(gifts){
    return gifts.map((gift => {
        const end = '*'.repeat(gift.length + 2);
        return end + '\n*'+ gift + '*\n' + end
    }))
}

module.exports = wrapping