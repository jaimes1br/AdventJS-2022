# Reto #20: Más viajes retadores

## No es la mejor versión, cumple con pasar las pruebas, pero la complejidad cognitiva es de 13
## Difícil 🔴

Papá Noel se ha dado cuenta de que ni con la colaboración de todos los elfos va a poder entregar todos los regalos a tiempo. Por eso va a pedir ayuda a sus amigos de Autentia.

Desde Autentia nos han indicado que necesitan un programa para saber qué equipo de renos enviar a cada país. Hay **diferentes tipos de renos** y cada uno de ellos puede llevar un peso de regalos. Por ejemplo:

```javascript
const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]
```

En el listado de regalos que tiene Papá Noel se expresa cuánto pesa cada regalo y cuál es su país destino. El peso de los regalos siempre es un número natural. Por ejemplo:

```javascript
const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'Spain', weight: 7 },
  { country: 'France', weight: 17 }
]
```

Autentia nos comenta que, para que el equipo de renos a enviar a cada país sea óptimo, deberíamos:

* **Enviar el mayor número de renos posibles de mayor capacidad de carga.**
* **Aprovechar al máximo el peso que cada reno puede soportar.**
* **Los renos tienen un comportamiento extraño y no admiten que en el equipo haya más renos de un tipo que renos del siguiente tipo por orden descendente de capacidad de carga.**

Por ejemplo. A Francia (17) no se mandarían diecisiete renos diésel (17 * 1). Hay renos con mayor capacidad de carga, pero tampoco se mandaría un reno nuclear (50), ya que se estaría desaprovechando su capacidad. Se mandaría un reno eléctrico (10), uno gasolina (5) y dos diésel (2 * 1).

A España (37) no se podría mandar un equipo formado por tres eléctricos (3 * 10), uno gasolina (5) y dos diésel (2 * 1), ya que **no puede haber más eléctricos que a gasolina**. Tampoco dos eléctricos (2 * 10), tres gasolina (3 * 5) y dos diésel (2 * 1), pues **no puede haber más a gasolina que a diésel**. Habría que mandar dos eléctricos (2 * 10), dos a gasolina (2 * 5) y siete a diésel (7 * 1).

```javascript
const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

howManyReindeers(reindeerTypes, gifts)
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
```

A tener en cuenta:

* **Siempre habrá un tipo de reno con capacidad de carga 1.**
* **Siempre habrá al menos dos tipos de renos disponibles.**
* **No existe límite de renos de un mismo tipo a enviar siempre y cuando se ciña a las restricciones anteriormente expuestas.**
* **Tu función debe devolver los renos ordenados por capacidad de carga de mayor a menor.**


## Solución propuesta

```javascript
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
```

---

### Puntos conseguidos: 10

* 972 ops/s
* **Complejidad cognitiva:** 13



