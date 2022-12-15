console.log(getOptimalPath([[0], [2, 3]]))
console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]]) );

/**
 * 
 * @param {Array[Array[number]]} path  each element represents a level
 * @returns {number} represents the shortest time
 */
function getOptimalPath(path) {
    
    let paths = []
    
    function getPath(acc,l,i){
        let level = l + 1
        if(level < path.length){
            let opc = path[level].slice(i, i + 2)                   
            opc.forEach((e,i) => getPath([...acc,e],level,i))
        }else{
            paths.push(acc.reduce(((acc,c) => acc + c),0)) 
        }
    }

    getPath(path[0],0,0)

    return Math.min(...paths)
}