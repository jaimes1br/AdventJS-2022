const countTime = require('./luces')

test('Test: return type',() => {
    expect(typeof countTime([0, 1, 1, 0, 1]))
        .toBe('number')

    expect(isNaN(countTime([0, 1, 1, 0, 1])))
        .toBeFalsy()
})

test("Test: countTime([0, 1, 1, 0, 1])",() => {
    expect(countTime([0, 1, 1, 0, 1]))
        .toEqual(7)
})

test("Test: countTime([0, 0, 0, 1])",() => {
    expect(countTime([0, 0, 0, 1]))
        .toEqual(21)
})

test("Test: countTime([0, 0, 1, 0, 0])",() => {
    expect(countTime([0, 0, 1, 0, 0]))
        .toEqual(28)
})

test("Test: countTime([1, 0, 0, 1, 0, 0])",() => {
    expect(countTime([1, 0, 0, 1, 0, 0]))
        .toEqual(14)
})

test("Test: countTime([1, 1, 0, 0, 0, 0])",() => {
    expect(countTime([1, 1, 0, 0, 0, 0]))
        .toEqual(28)
})

test("Test: countTime([1, 1, 1])",() => {
    expect(countTime([1, 1, 1]))
        .toEqual(0)
})