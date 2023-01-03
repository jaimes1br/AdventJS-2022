const getOptimalPath = require('./mejorCamino')

test('Test: return type',() => {
    expect(typeof getOptimalPath([[0], [2, 3]]))
        .toBe('number')

    expect(isNaN(getOptimalPath([[0], [2, 3]])))
        .toBeFalsy()
})

test("Test: getOptimalPath([[0], [7, 4], [2, 4, 6]])",() => {
    expect(getOptimalPath([[0], [7, 4], [2, 4, 6]]))
        .toEqual(8)
})

test("Test: getOptimalPath([[0], [2, 3]])",() => {
    expect(getOptimalPath([[0], [2, 3]]))
        .toEqual(2)
})

test("Test: getOptimalPath([[0], [3, 4], [9, 8, 1]])",() => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]]))
        .toEqual(5)
})

test("Test: getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])",() => {
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]))
        .toEqual(8)
})

test("Test: getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])",() => {
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]]))
        .toEqual(7)
})