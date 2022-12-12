

console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')); // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')); // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')); // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')); // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')); // '3/5'

/**
 * From the time spent and the total time, it gives the ratio of time spent
 * to the total
 * 
 * @param {string} part Represents the time spent
 * @param {string} total Represents the total time required to
 * @returns {string} time used / total time ratio
 */

function getCompleted(part, total) {
    
    let partTime = part.split(':')
    let partSec =  partTime.reduce((acc,num) => acc * 60 + +num,0)
    let totalTime = total.split(':')    
    let totaltSec = totalTime.reduce((acc,num) => acc * 60 + +num,0)

    const mcd = (x,y) => {
        let z = 0
        while(y){
            z = y
            y = x % y
            x = z 
        }
        return x;
    }

    let valueMCD = mcd(totaltSec,partSec)

    return `${partSec/valueMCD}/${totaltSec/valueMCD}`

}