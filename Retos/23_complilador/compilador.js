
// console.log(executeCommands([
//     'MOV 5,V00',  // V00 es 5
//     'MOV 10,V01', // V01 es 10
//     'DEC V00',    // V00 ahora es 4
//     'ADD V00,V01' // V00 = V00 + V01 = 14
// ]))

// console.log(executeCommands([
//     'MOV 255,V00', // V00 es 255
//     'INC V00',     // V00 es 256, desborda a 0
//     'DEC V01',     // V01 es -1, desborda a 255
//     'DEC V01'      // V01 es 254
// ]))

// console.log(executeCommands([
//     'MOV 10,V00', // V00 es 10
//     'DEC V00',    // decrementa V00 en 1  <---┐
//     'INC V01',    // incrementa V01 en 1      |
//     'JMP 1',      // bucle hasta que V00 sea 0 ----┘
//     'INC V06'     // incrementa V06 en 1
// ]))


function executeCommands(commands) {

    let rVxx = { 
        V00: 0, 
        V01: 0, 
        V02: 0, 
        V03: 0, 
        V04: 0, 
        V05: 0, 
        V06: 0, 
        V07: 0 
    }

    const comFun = {
        MOV: (r1,r2) => rVxx[r2] = +r1 ? +r1 : rVxx[r1],
        ADD: (r1,r2) => rVxx[r1] =  (rVxx[r1] + rVxx[r2]) % 256,
        INC: (v) => rVxx[v] = (rVxx[v] + 1) % 256,
        DEC: (v) => {
            rVxx[v]--
            if (rVxx[v] < 0) rVxx[v] += 256
        }
    }

    commands.forEach((c,i) => {
        let [com,values] = c.split(' ')
        if(com != 'JMP')
            comFun[com].apply(null,values.split(','))
        else
            while(rVxx['V00'] != 0)
                commands.slice(values,i).forEach(c =>{
                        let [com,values] = c.split(' ')
                        comFun[com].apply(null,values.split(','))
                })
    })
 
    return Object.values(rVxx)

}

module.exports = executeCommands