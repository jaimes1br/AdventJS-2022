const howManyReindeers = require('./viajesRetadores')

test('Test: return type',() => {
    expect(
        Array.isArray(howManyReindeers([
            { type: 'Nuclear', weightCapacity: 50 },
            { type: 'Electric', weightCapacity: 10 },
            { type: 'Gasoline', weightCapacity: 5 },
            { type: 'Diesel', weightCapacity: 1 }
          ],
          [
            { country: 'Spain', weight: 30 },
          ])))
        .toBe(true)
})

test(`Test: howManyReindeers([
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
  ], [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
  ])`,() => {
    expect(howManyReindeers([
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ], [
        { country: 'Spain', weight: 30 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 }
      ]))
    .toStrictEqual([
        {
          "country": "Spain",
          "reindeers": [
            {
              "type": "Electric",
              "num": 1
            },
            {
              "type": "Gasoline",
              "num": 3
            },
            {
              "type": "Diesel",
              "num": 5
            }
          ]
        },
        {
          "country": "France",
          "reindeers": [
            {
              "type": "Electric",
              "num": 1
            },
            {
              "type": "Gasoline",
              "num": 1
            },
            {
              "type": "Diesel",
              "num": 2
            }
          ]
        },
        {
          "country": "Italy",
          "reindeers": [
            {
              "type": "Electric",
              "num": 3
            },
            {
              "type": "Gasoline",
              "num": 3
            },
            {
              "type": "Diesel",
              "num": 5
            }
          ]
        }
      ])
})

test(`Test: howManyReindeers(
    [
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ],
    [{ country: 'Spain', weight: 37 }]
  )`,() => {
    expect(howManyReindeers(
        [
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 }
        ],
        [{ country: 'Spain', weight: 37 }]
      ))
    .toStrictEqual([
        {
          "country": "Spain",
          "reindeers": [
            {
              "type": "Electric",
              "num": 2
            },
            {
              "type": "Gasoline",
              "num": 2
            },
            {
              "type": "Diesel",
              "num": 7
            }
          ]
        }
      ])
})

test(`Test: howManyReindeers(
    [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ],
    [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ])`,() => {
    expect( howManyReindeers(
        [
          { type: 'Nuclear', weightCapacity: 50 },
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 }
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'Germany', weight: 7 },
          { country: 'France', weight: 17 },
          { country: 'Italy', weight: 50 }
        ]))
    .toStrictEqual([
        {
          "country": "Spain",
          "reindeers": [
            {
              "type": "Electric",
              "num": 1
            },
            {
              "type": "Gasoline",
              "num": 3
            },
            {
              "type": "Diesel",
              "num": 5
            }
          ]
        },
        {
          "country": "Germany",
          "reindeers": [
            {
              "type": "Gasoline",
              "num": 1
            },
            {
              "type": "Diesel",
              "num": 2
            }
          ]
        },
        {
          "country": "France",
          "reindeers": [
            {
              "type": "Electric",
              "num": 1
            },
            {
              "type": "Gasoline",
              "num": 1
            },
            {
              "type": "Diesel",
              "num": 2
            }
          ]
        },
        {
          "country": "Italy",
          "reindeers": [
            {
              "type": "Electric",
              "num": 3
            },
            {
              "type": "Gasoline",
              "num": 3
            },
            {
              "type": "Diesel",
              "num": 5
            }
          ]
        }
      ])
})

test(`Test: howManyReindeers(
    [
      { type: 'Diesel', weightCapacity: 1 },
      { type: 'Gasoline', weightCapacity: 5 }
    ],
    [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 }
    ])`,() => {
    expect(howManyReindeers(
        [
          { type: 'Diesel', weightCapacity: 1 },
          { type: 'Gasoline', weightCapacity: 5 }
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'Germany', weight: 7 }
        ]))
    .toStrictEqual([
        {
          "country": "Spain",
          "reindeers": [
            {
              "type": "Gasoline",
              "num": 5
            },
            {
              "type": "Diesel",
              "num": 5
            }
          ]
        },
        {
          "country": "Germany",
          "reindeers": [
            {
              "type": "Gasoline",
              "num": 1
            },
            {
              "type": "Diesel",
              "num": 2
            }
          ]
        }
      ])
})