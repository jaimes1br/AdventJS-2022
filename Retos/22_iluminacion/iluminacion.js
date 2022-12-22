const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

// console.log(checkStepNumbers(systemNames, stepNumbers))
// console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]));

function checkStepNumbers(systemNames, stepNumbers) {

    let u = [...new Set(...[systemNames])]

    let temp = []
    u.forEach(n => temp.push(stepNumbers.filter((_,i) => systemNames[i] == n)))

    return temp.reduce((acc,v) => {
        return acc && v.slice(1).reduce((_,c,i) => temp[0][i] < c ,true)
    },true)

}


