const getCompleted =  require('./scrum')


test('Test: return type',() => {
    expect(typeof getCompleted('01:00:00', '03:00:00'))
        .toBe('string')

    expect(isNaN(getCompleted('01:00:00', '03:00:00')))
        .toBeTruthy()
})

test("Test: getCompleted('01:00:00', '03:00:00')",() => {
    expect(getCompleted('01:00:00', '03:00:00'))
        .toStrictEqual('1/3')
})

test("Test: getCompleted('02:00:00', '04:00:00')",() => {
    expect(getCompleted('02:00:00', '04:00:00'))
        .toStrictEqual('1/2')
})

test("Test: getCompleted('01:00:00', '01:00:00')",() => {
    expect(getCompleted('01:00:00', '01:00:00'))
        .toStrictEqual("1/1")
})

test("Test: getCompleted('00:10:00', '01:00:00')",() => {
    expect(getCompleted('00:10:00', '01:00:00'))
        .toStrictEqual("1/6")
})

test("Test: getCompleted('01:10:10', '03:30:30')",() => {
    expect(getCompleted('01:10:10', '03:30:30'))
        .toStrictEqual("1/3")
})

test("Test: getCompleted('02:20:20', '03:30:30')",() => {
    expect(getCompleted('02:20:20', '03:30:30'))
        .toStrictEqual("2/3")
})

test("Test: getCompleted('03:30:30', '05:50:50')",() => {
    expect(getCompleted('03:30:30', '05:50:50'))
        .toStrictEqual("3/5")
})

