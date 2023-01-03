const carryGifts = require('./regalosSaco')

test('Test: return type',() => {
    expect(
        Array.isArray(carryGifts(['game', 'bike', 'book', 'toy'], 10)))
        .toBe(true)
})

test(`Test: carryGifts(['game', 'bike', 'book', 'toy'], 10)`,() => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 10))
    .toStrictEqual([
        "game bike",
        "book toy"
      ])
})

test(`Test: carryGifts(['game', 'bike', 'book', 'toy'], 7)`,() => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 7))
    .toStrictEqual([
        "game",
        "bike",
        "book toy"
      ])
})

test(`Test: carryGifts(['game', 'bike', 'book', 'toy'], 4)`,() => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 4))
    .toStrictEqual([
        "game",
        "bike",
        "book",
        "toy"
      ])
})

test(`Test: carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)`,() => {
    expect(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6))
    .toStrictEqual([
        "toy",
        "gamme",
        "toy",
        "bike"
      ])
})

test(`Test: carryGifts(['toy', 'toy', 'toy', 'toy'], 2)`,() => {
    expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2))
    .toStrictEqual([])
})

test(`Test: carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)`,() => {
    expect(carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7))
    .toStrictEqual([
        "toy toy",
        "disk",
        "disk toy",
        "toy"
      ])
})