const checkJump = require('./saltoTrineo')

test('Test: return type',() => {
    expect(typeof checkJump([1, 3, 8, 5, 2]))
        .toBe('boolean')
})

test("Test: checkJump([1, 2, 1])",() => {
    expect(checkJump([1, 2, 1]))
        .toBeTruthy()
})

test("Test: checkJump([1, 3, 8, 5, 2])",() => {
    expect(checkJump([1, 3, 8, 5, 2]))
        .toBeTruthy()
})

test("Test: checkJump([1, 7, 3, 5])",() => {
    expect(checkJump([1, 7, 3, 5]))
        .toBeFalsy()
})

test("Test: checkJump([1, 2, 3, 2, 1])",() => {
    expect(checkJump([1, 2, 3, 2, 1]))
        .toBeTruthy()
})

test("Test: checkJump([1, 2, 2, 2, 1])",() => {
    expect(checkJump([1, 2, 2, 2, 1]))
        .toBeTruthy()
})

test("Test: checkJump([0, 1, 0])",() => {
    expect(checkJump([0, 1, 0]))
        .toBeTruthy()
})

test("Test: checkJump([2, 2, 2, 2])",() => {
    expect(checkJump([2, 2, 2, 2]))
        .toBeFalsy()
})

test("Test: checkJump([1, 2, 3])",() => {
    expect(checkJump([1, 2, 3]))
        .toBeFalsy()
})

test("Test: checkJump([1, 2, 3, 2, 1, 2, 3])",() => {
    expect(checkJump([1, 2, 3, 2, 1, 2, 3]))
        .toBeFalsy()
})

test("Test: checkJump([1, 1000, 900, 800])",() => {
    expect(checkJump([1, 1000, 900, 800]))
        .toBeTruthy()
})

test("Test: checkJump([1, 1000, 100, 800])",() => {
    expect(checkJump([1, 1000, 100, 800]))
        .toBeFalsy()
})

test("Test: checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])",() => {
    expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1]))
        .toBeTruthy()
})

test("Test: checkJump([1, 2, 3, 1, 3, 1])",() => {
    expect(checkJump([1, 2, 3, 1, 3, 1]))
        .toBeFalsy()
})

test("Test: checkJump([1, 3, 2, 5, 4, 3, 2, 1])",() => {
    expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1]))
        .toBeFalsy()
})

