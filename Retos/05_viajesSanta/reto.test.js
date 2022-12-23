const getMaxGifts = require('./viajesSanta')

test('Test: return type',() => {
    expect(typeof getMaxGifts([12, 3, 11, 5, 7],20,3))
        .toBe('number')

    expect(isNaN(getMaxGifts([12, 3, 11, 5, 7],20,3)))
        .toBeFalsy()
})

test("Test: getMaxGifts([12, 3, 11, 5, 7], 20, 3)",() => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3))
        .toEqual(20)
})

test("Test: getMaxGifts([50], 15, 1)",() => {
    expect(getMaxGifts([50], 15, 1))
        .toEqual(0)
})

test("Test: getMaxGifts([50], 100, 1)",() => {
    expect(getMaxGifts([50], 100, 1))
        .toEqual(50)
})

test("Test: getMaxGifts([50, 70], 100, 1)",() => {
    expect(getMaxGifts([50, 70], 100, 1))
        .toEqual(70)
})

test("Test: getMaxGifts([50, 70, 30], 100, 2)",() => {
    expect(getMaxGifts([50, 70, 30], 100, 2))
        .toEqual(100)
})

test("Test: getMaxGifts([50, 70, 30], 100, 3)",() => {
    expect(getMaxGifts([50, 70, 30], 100, 3))
        .toEqual(100)
})

test("Test: getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)",() => {
    expect(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4))
        .toEqual(100)
})

test("Test: getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)",() => {
    expect(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000))
        .toEqual(115)
})