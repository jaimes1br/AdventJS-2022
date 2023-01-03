const fixLetter = require('./cartas')

test('Test: return type',() => {
    expect(typeof fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `))
        .toBe('string')

    expect(isNaN(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)))
        .toBeTruthy()
})

test("Test: fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)",() => {
    expect(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `))
        .toStrictEqual("Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.")
})

test(`Test: fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"`,() => {
    expect(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"))
        .toStrictEqual("Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?")
})

test(`Test: fixLetter("  hi    santa    claus ")`,() => {
    expect(fixLetter("  hi    santa    claus "))
        .toStrictEqual("Hi Santa Claus.")
})

test(`Test: fixLetter("  hi    santa    claus . santa claus is the best  ")`,() => {
    expect(fixLetter("  hi    santa    claus . santa claus is the best  "))
        .toStrictEqual("Hi Santa Claus. Santa Claus is the best.")
})

test(`Test: fixLetter('  hi,santa claus. are you there ?   ')`,() => {
    expect(fixLetter('  hi,santa claus. are you there ?   '))
        .toStrictEqual("Hi, Santa Claus. Are you there?")
})

test(`Test: fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ")`,() => {
    expect(fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! "))
        .toStrictEqual("Hey Santa Claus. I want a bike. I want a videogame!")
})