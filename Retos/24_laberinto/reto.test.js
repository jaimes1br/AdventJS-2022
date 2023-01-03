const canExit = require('./laberinto')

test('Test: return type',() => {
    expect(typeof canExit([
            [' ', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
          ]))
        .toBe('boolean')
})

test(`Test: canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ])`,() => {
    expect(canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
      ]))
        .toBeTruthy()
})

test(`Test: canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ])`,() => {
    expect(canExit([
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
      ]))
        .toBeFalsy()
})

test(`Test: canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', ' ', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ])`,() => {
    expect(canExit([
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', ' ', 'W'],
        [' ', ' ', ' ', ' ', 'E']
      ]))
        .toBeFalsy()
})

test(`Test: canExit([
    ['E', ' ', ' ', ' ', 'S']
  ])`,() => {
    expect(canExit([
        ['E', ' ', ' ', ' ', 'S']
      ]))
        .toBeTruthy()
})

test(`Test: canExit([
    ['E', ' ', 'W', ' ', 'S']
  ])`,() => {
    expect(canExit([
        ['E', ' ', 'W', ' ', 'S']
      ]))
        .toBeFalsy()
})

test(`Test: canExit([
    ['E', ' ', 'W', ' ', 'S']
  ])`,() => {
    expect(canExit([
        ['E', ' ', 'W', ' ', 'S']
      ]))
        .toBeFalsy()
})

test(`Test: canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
  ])`,() => {
    expect(canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
      ]))
        .toBeTruthy()
})

test(`Test: canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    ['W', 'W', 'W', 'W', 'W'],
  ])`,() => {
    expect(canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        ['W', 'W', 'W', 'W', 'W'],
      ]))
        .toBeTruthy()
})

test(`Test: canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', 'W', ' ', ' '],
    ['W', 'W', 'W', 'W', 'W'],
  ])`,() => {
    expect(canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', 'W', ' ', ' '],
        ['W', 'W', 'W', 'W', 'W'],
      ]))
        .toBeFalsy()
})

test(`Test: canExit([
    ['E', 'S', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W']
  ])`,() => {
    expect(canExit([
        ['E', 'S', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W']
      ]))
        .toBeTruthy()
})
