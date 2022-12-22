const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers))
console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]));
console.log(checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6]));

function checkStepNumbers(systemNames, stepNumbers) {

    let u = [...new Set(...[systemNames])]

    let temp = []
    u.forEach(n => temp.push(stepNumbers.filter((_,i) => systemNames[i] == n)))

    return temp.every(v => {
        return v.slice(1).every((c,i) => v[i] < c)
    })
}


