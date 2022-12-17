
// console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `));
// console.log(fixLetter("  Hi! Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"))
// console.log(fixLetter("Hey santa Claus .  I want a bike.  \n I want a videogame!"))
console.log(fixLetter('  hi,santa claus. are you there ?   '));

/**
 * 
 * @param {string} letter Represents the original letter 
 * @returns {string} Letter in a valid format
 */
function fixLetter(letter) {

    return letter.trim()
        .replace(/([.?!])\s+([a-z])/g,(_,s,c) => `${s} ${c.toUpperCase()}`)
        .replace(/(\s+([,.?!]))/g,"$2")
        .replace(/  +/g, ' ')
        .replace(/([A-z])$/,"$1.") 
        .replace(/(^[a-z])/,(s) => s.toUpperCase())
        .replace(/[?]{2,}/,'?') 
        .replace(/santa/g,'Santa') 
        .replace(/claus/g,'Claus')
        .replace(/,([A-z])/,(_,c) =>`, ${c}`)
}
