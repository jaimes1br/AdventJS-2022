const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
  ]
  
  const gifts = [
    { country: 'Spain', weight: 30 },
  ]
  
// console.log(howManyReindeers(reindeerTypes, gifts))

function howManyReindeers(reindeerTypes, gifts) {
 
    reindeerTypes = reindeerTypes
        .sort((a,b) => a.weightCapacity - b.weightCapacity)


    return gifts.map(({ country, weight }) => {
        let team = {}
        let valid = reindeerTypes.filter(r => r.weightCapacity < weight)
        let countWeight = 0

        while(weight > countWeight) for (let r of valid){
            if(countWeight + r.weightCapacity > weight) continue

            countWeight += r.weightCapacity
            team[r.type] ? team[r.type] += 1 : team[r.type] = 1

        }
          
        return { 
            country, 
            reindeers: valid.map(({ type }) => {
                return {type, num: team[type]}
            }).reverse() 
        }
    });
}


module.exports = howManyReindeers