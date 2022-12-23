
const cubeOfOne = createCube(1)
// console.log(cubeOfOne)

const cubeOfTwo = createCube(2)
// console.log(cubeOfTwo)

const cube = createCube(6)
// console.log(cube)

/**
 * Uses the size to create a cube with these dimentions(size)
 * 
 * @param {number} size  size of cube
 * @returns {string}  Represents the cube figure
 */
function createCube(size) {
    const top = (n,size) => '/\\'.repeat(n) + '_\\'.repeat(size) + '\n'
    const bottom = (n,size) => '\\/'.repeat(n) +  '_/'.repeat(size) + '\n'
    
    let cube = ''
    let cubeI = ''

    for (let i = 0; i < size; i++) {
        cube += ' '.repeat(size - (i + 1)) + top(i + 1,size) 
        cubeI += ' '.repeat(size - (size - i)) + bottom(size - i,size)
    }

    return (cube + cubeI).slice(0,-1)
}

module.exports = createCube