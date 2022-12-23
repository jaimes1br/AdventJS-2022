const getGiftsToRefill = require('./inventarioRegalos')

test('Test: return type',() => {
    expect(
        Array.isArray(getGiftsToRefill(['bici', 'coche', 'bici', 'bici'],['coche', 'bici', 'muñeca', 'coche'],['bici', 'pc', 'pc'])))
        .toBe(true)
})

test("Test: getGiftsToRefill(a1, a2, a3)", () => {
    expect(
        getGiftsToRefill(['bici', 'coche', 'bici', 'bici'],['coche', 'bici', 'muñeca', 'coche'],['bici', 'pc', 'pc'])
    ).toStrictEqual([
            "muñeca",
            "pc"
        ]
    )
})

test("Test: getGiftsToRefill([], [], [])", () => {
    expect(
        getGiftsToRefill([], [], [])
    ).toStrictEqual(
        []
    )
})

test("Test: getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])", () => {
    expect(
        getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])
    ).toStrictEqual(
        []
    )
})

test("Test: getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])", () => {
    expect(
        getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])
    ).toStrictEqual([
        "a",
        "b",
        "c"
      ]   
    )
})

test("Test: getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])", () => {
    expect(
        getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])
    ).toStrictEqual([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
      ] 
    )
})