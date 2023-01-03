const checkStepNumbers = require('./iluminacion')

test('Test: return type',() => {
    expect(typeof checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]))
        .toBe('boolean')
})

test(`Test: checkStepNumbers(
    ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
    [1, 33, 10, 2, 44, 20]
  )`,() => {
    expect(checkStepNumbers(
        ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
        [1, 33, 10, 2, 44, 20]
      ))
        .toBeTruthy()
})


test(`Test: checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])`,() => {
    expect(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]))
        .toBeFalsy()
})


test(`Test: checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10])`,() => {
    expect(checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10]))
        .toBeTruthy()
})


test(`Test: checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])`,() => {
    expect(checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6]))
        .toBeFalsy()
})