const getFilesToBackup = require('./backup')

test('Test: return type',() => {
    expect(
        Array.isArray(getFilesToBackup(1546300800,[
            [2, 1546300800],
            [3, 1546301100],
            [1, 1546300800],
            [1, 1546300900],
            [1, 1546301000]
        ])))
        .toBe(true)
})

test(`Test: getFilesToBackup(1546300800, [
    [ 3, 1546301100 ],
    [ 2, 1546300800 ],
    [ 1, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ]
  ])`, () => {
    expect(getFilesToBackup(1546300800, [
        [ 3, 1546301100 ],
        [ 2, 1546300800 ],
        [ 1, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ]
      ]))
    .toStrictEqual([
        1,
        3
      ])
})

test(`Test: getFilesToBackup(1546300600, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ])`, () => {
    expect(getFilesToBackup(1546300600, [
        [ 1, 1546300800 ],
        [ 2, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
        [ 3, 1546301100 ]
      ]))
    .toStrictEqual([
        1,
        2,
        3
      ])
})

test(`Test: getFilesToBackup(1556300600, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ])`, () => {
    expect(getFilesToBackup(1556300600, [
        [ 1, 1546300800 ],
        [ 2, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
        [ 3, 1546301100 ]
      ]))
    .toStrictEqual([])
})

test(`Test: getFilesToBackup(1556300600, [])`, () => {
    expect(getFilesToBackup(1556300600, []))
    .toStrictEqual([])
})

