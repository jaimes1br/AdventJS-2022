const checkPart = require('./mecanico')

test('Test: return type',() => {
    expect(typeof checkPart("uwu"))
        .toBe('boolean')
})

test("Test: checkPart('uwu')",() => {
    expect(checkPart('uwu'))
        .toBeTruthy()
})

test('Test: checkPart("midu")',() => {
    expect(checkPart("midu"))
        .toBeFalsy()
})

test('Test: checkPart("lolol")',() => {
    expect(checkPart("lolol"))
        .toBeTruthy()
})

test('Test: checkPart("yolooloy")',() => {
    expect(checkPart("yolooloy"))
        .toBeTruthy()
})

test('Test: checkPart("zzzoonzzz")',() => {
    expect(checkPart("zzzoonzzz"))
        .toBeTruthy()
})