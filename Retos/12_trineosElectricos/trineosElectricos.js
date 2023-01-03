const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

// console.log(selectSleigh(distance, sleighs))

/**
 * 
 * Returns the name of the best sled to use 
 * 
 * @param {number} distance  Represents the distance to travel
 * @param {Array[{name:string, consumption: number}]} sleighs Sleighs available
 * @returns {string}
 */
function selectSleigh(distance, sleighs) {
  let names = sleighs.filter(sleigh => distance * sleigh.consumption <= 20 )
  return names.at(-1) ? names.at(-1).name : null 
}

module.exports = selectSleigh