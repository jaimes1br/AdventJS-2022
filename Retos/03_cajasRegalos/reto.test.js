const distributeGifts = require('./cajasRegalos')

test('Test: return type',() => {
    expect(typeof distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]))
        .toBe('number')

    expect(isNaN(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])))
        .toBeFalsy()
})

test('Test: distributeGifts(packOfGifts, reindeers)',() => {
    expect(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]))
        .toEqual(2)
})

test("Test: distributeGifts(['a', 'b', 'c'], ['d', 'e'])",() => {
    expect(distributeGifts(['a', 'b', 'c'], ['d', 'e']))
        .toEqual(1)
})

test("Test: it should return 0 if reindeers can\'t carry any pack: distributeGifts(['videogames', 'console'], ['midu'])",() => {
    expect(distributeGifts(['videogames', 'console'], ['midu']))
        .toEqual(0)
})

test("Test: distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])",() => {
    expect(distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))
        .toEqual(5)
})

test("Test: distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])",() => {
    expect(distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))
        .toEqual(26)
})