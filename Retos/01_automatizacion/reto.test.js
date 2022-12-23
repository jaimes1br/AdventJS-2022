const wrapping = require('./automatizacion')


test('Test: return type',() => {
    expect(
        Array.isArray(wrapping(['cat', 'game', 'socks'])))
        .toBe(true)
})

test("Test: wrapping(['cat', 'game', 'socks'])", () => {
    expect(
        wrapping(['cat', 'game', 'socks'])
    ).toStrictEqual(
        ["*****\n*cat*\n*****",
         "******\n*game*\n******",
         "*******\n*socks*\n*******"]
    )
})

test('Test: wrapping(["midu"])', () => {
    expect(
        wrapping(["midu"])
    ).toStrictEqual(
        ["******\n*midu*\n******"]
    )
})

test('Test: wrapping(["a"])', () => {
    expect(
        wrapping(["a"])
    ).toStrictEqual(
        ["***\n*a*\n***"]
    )
})

test('Test: wrapping an empty array should return an empty array', () => {
    expect(
        wrapping([])
    ).toStrictEqual(
        []
    )
})
