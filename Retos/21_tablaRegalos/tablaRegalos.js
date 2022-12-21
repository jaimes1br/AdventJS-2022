console.log(printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
  ]));

//   console.log(printTable([
//     { name: 'Toy', quantity: 12 },
//     { name: 'Mic', quantity: 123 }
//   ]));

//   console.log(printTable([
//     { name: 'PlayStation 5', quantity: 9234782374892 },
//     { name: 'Book Learn Web Dev', quantity: 23531 }
//   ]));

/**
 * 
 * @param {[{string,number}]} gifts array with the list of gifts and their amounts
 * @returns {string} Represents the table with the gifts and their amount
 */
function printTable(gifts) {
    
    let minG = Math.max(...gifts.map(g => g.name.length),4)
    let minQ = Math.max(...gifts.map(g => `${g.quantity}`.length),8)

    let table = gifts.reduce((acc,{name,quantity}) => acc + 
        '| ' + `${name}`.padEnd(minG) + ' |' +
        ' ' + `${quantity}`.padEnd(minQ) + ' |\n','')

    let top = '+'.padEnd((minG + minQ + 7),'+') + '\n' +
        '| ' + 'Gift'.padEnd(minG) +
        ' | ' + 'Quantity'.padEnd(minQ) + ' |\n' + 
        '| ' + '-'.padEnd(minG,'-') +
        ' | ' + '-'.padEnd(minQ,'-') + ' |\n'
    let bottom = '*'.padEnd((minG + minQ + 7),'*') 
 
    return top + table + bottom
}