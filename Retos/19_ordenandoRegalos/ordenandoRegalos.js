
const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

console.log(sortToys(toys, positions))

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

console.log(sortToys(moreToys, morePositions))

/**
 * 
 * @param {string[]} toys toys for sorting
 * @param {number[]} positions positions for each toy
 * @returns {string[]}toys sorted
 */
function sortToys(toys, positions) {

    let min = Math.min(...positions)
    let temp = []

    if(min != 0) positions = positions.map( e => e - min)
    
    positions.forEach((e,i) => {
        temp[e] = toys[i]
    })

    return temp
}