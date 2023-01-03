
// console.log(decorateTree('B P R P'))
// console.log(decorateTree('B B'));

/**
 * 
 * @param {Array[string]} base  Represents the base of the tree
 * @returns {Array[string[]]} Represents the tree with all level decorated
 */
function decorateTree(base){
    
    const opts = {
		'BB': 'B',
		'RP': 'B',
		'PR': 'B',
		'PP': 'P',
		'BR': 'P',
		'RB': 'P',
		'RR': 'R',
		'BP': 'R',
		'PB': 'R',
	}

    const array = base.split(' ')
    let temp = [array]

    array.slice(1).forEach((_,i) => {
        let prev = temp[i]
        temp.push(prev.slice(1).map((_,j) => {
            return opts[prev[j] + prev[j + 1]]
        }))
    })

    return temp.reverse().map(e => e.join(' '))
}

module.exports = decorateTree

