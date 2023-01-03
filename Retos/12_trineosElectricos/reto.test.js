const selectSleigh = require('./trineosElectricos')

test('Test: return type',() => {
    expect(typeof selectSleigh(30, [
        { name: "Dasher", consumption: 0.3 },
        { name: "Dancer", consumption: 0.5 },
        { name: "Rudolph", consumption: 0.7 },
        { name: "Midu", consumption: 1 }
      ]))
        .toBe('string')

    expect(isNaN(selectSleigh(30, [
        { name: "Dasher", consumption: 0.3 },
        { name: "Dancer", consumption: 0.5 },
        { name: "Rudolph", consumption: 0.7 },
        { name: "Midu", consumption: 1 }
      ])))
        .toBeTruthy()
})

test(`Test: selectSleigh(1, [
    { name: 'pheralb', consumption: 0.3 },
    { name: 'TMChein', consumption: 0.5 }
  ]`,() => {
    expect(selectSleigh(1, [
        { name: 'pheralb', consumption: 0.3 },
        { name: 'TMChein', consumption: 0.5 }
      ]))
        .toStrictEqual('TMChein')
})


test(`Test: selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 5 }
  ])`,() => {
    expect(selectSleigh(10, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 5 }
      ]))
        .toStrictEqual('Pedrosillano')
})


test(`Test: selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ])`,() => {
    expect(selectSleigh(10, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 }
      ]))
        .toStrictEqual('SamarJaffal')
})


test(`Test: selectSleigh(50, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ])`,() => {
    expect(selectSleigh(50, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 }
      ]))
        .toBeNull()
})
