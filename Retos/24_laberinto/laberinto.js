// console.log(canExit([
//     [' ', ' ', 'W', ' ', 'S'],
//     [' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', 'W', ' '],
//     ['W', 'W', ' ', 'W', 'W'],
//     [' ', ' ', ' ', ' ', 'E']
//   ]))

// console.log(canExit([
//     [' ', ' ', 'W', 'W', 'S'],
//     [' ', ' ', ' ', 'W', ' '],
//     [' ', ' ', ' ', 'W', ' '],
//     ['W', 'W', ' ', 'W', 'W'],
//     [' ', ' ', ' ', ' ', 'E']
//   ]))

/**
 * 
 * @param {string[string[]]} maze maze to try
 * @returns {boolean} it is possible to get out of the maze
 */
function canExit(maze) {
    
    let s = []
    
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
          if (maze[i][j] === 'S') {
            s = [i, j];
            break;
          }
        }
    }

    let opc = []
    const getMoves = (p) => {
        opc.push(`${p}`)
        let ms = []
        ms.push(p[0] - 1 >= 0 ? [p[0] - 1 , p[1]]: [])
        ms.push(p[1] + 1 >= maze[0].length ? [] : [p[0] , p[1] + 1])
        ms.push(p[0] + 1 >=  maze.length ? [] : [p[0] + 1 , p[1]])
        ms.push(p[1] - 1 < 0 ? [] : [p[0], p[1] - 1])

        ms = ms.filter(o => o.length > 0)
        ms.forEach(m => {
            if(!opc.includes(`${m}`) && maze[m[0]][m[1]] != 'W'){
                 getMoves(m)
            }
        })
        
        return opc
    }
    
    return getMoves(s).some(t => maze[t[0]][t[2]] == 'E')
}

module.exports = canExit