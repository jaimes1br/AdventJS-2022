const boxes = [
    { l: 1, w: 1, h: 10 },
    { l: 2, w: 2, h: 1 },
    { l: 3, w: 3, h: 12 },
  ]
  
// console.log(fitsInOneBox(boxes))

/**
 * fitsInOneBox returns a value if it is possible to store all the boxes inside each other
 * 
 * @param {Array[{l:number,w:number,h:number}]} boxes  contains all the boxes with their dimensions
 * @returns {boolean} returns if it is possible to store all the boxes inside each other
 */

function fitsInOneBox(boxes) {   
    let flag = true
    const keys = Object.keys(boxes[0])
    boxes.sort((a,b) => a.l - b.l)
    keys.forEach(key => {
        for (let index = 0; index < (boxes.length - 1); index++) {
            if(!(boxes[index][key] < boxes[index + 1][key])){
                flag = false
                break
            }
        }
    })
    return flag
}

module.exports = fitsInOneBox
