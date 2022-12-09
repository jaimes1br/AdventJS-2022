
// console.log(checkPart("uwu")) 
console.log(checkPart("midu"));
// console.log(checkPart("miidim"))

/**
 * Given a word, returns if it is palindrome after deleting at most one character
 * 
 * @param {string} part  word to check if it is palindrome
 * @returns {boolean} if we have a value greater than 1 it means that the word is at least once a palindrome, even if one letter is removed
 */
function checkPart(part) {
    let arr = part.split('')
    return arr.reduce((acc,_,index) => {
        let tempStr = arr.filter((_,j) => index != j)
        return (acc += tempStr.join() == tempStr.reverse().join())
    },0) >= 1
}
