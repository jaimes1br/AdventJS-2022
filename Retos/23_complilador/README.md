# Reto #23: Compilador de Papá Noel

## No es la mejor versión, cumple con pasar las pruebas, pero la complejidad cognitiva es de 10
## Difícil 🔴

Estamos probando una nueva CPU para el trineo de Papá Noel. Pero todavía tenemos que programar el software para que funcione.

La CPU tiene 8 registros disponibles, que se llaman V00..V07. Al comienzo del programa, todos los registros contienen 0. La CPU admite las siguientes instrucciones:

* **`MOV Vxx,Vyy`: copia el valor del registro `Vxx` al registro `Vyy`;**
* **`MOV n,Vxx`: asigna la constante numérica `n` al registro `Vxx` (sobrescribe si ya tiene un valor);**
* **`ADD Vxx,Vyy`: calcula (`Vxx` + `Vyy`) y almacena el resultado en `Vxx`;**
* **`DEC Vxx`: decrementa el valor de `Vxx` en 1.**
* **`INC Vxx`: incrementa el valor de `Vxx` en 1.**
* **`JMP i`: salta a la instrucción número `i` si `V00` es diferente de `0`. `i` está garantizado que sea un número de instrucción válido y `0` sería la primera instrucción.**

**Como la CPU es de 8 bits**, el número que podría representar va desde `0` hasta `255`. Si incrementas el número `255` causa un desbordamiento y resulta en `0`. Y si decrementas `0`, resulta en `255`. Ten en cuenta, entonces, que el número `280` sería `24` en la CPU.

Después de que se haya ejecutado la última instrucción, debes devolver una matriz con el resultado para cada registro. **De V00 a V07**. Ejemplos:

```javascript
executeCommands([
  'MOV 5,V00',  // V00 es 5
  'MOV 10,V01', // V01 es 10
  'DEC V00',    // V00 ahora es 4
  'ADD V00,V01' // V00 = V00 + V01 = 14
])

// Output: [14, 10, 0, 0, 0, 0, 0]

executeCommands([
  'MOV 255,V00', // V00 es 255
  'INC V00',     // V00 es 256, desborda a 0
  'DEC V01',     // V01 es -1, desborda a 255
  'DEC V01'      // V01 es 254
])

// Output: [0, 254, 0, 0, 0, 0, 0]

executeCommands([
  'MOV 10,V00', // V00 es 10
  'DEC V00',    // decrementa V00 en 1  <---┐
  'INC V01',    // incrementa V01 en 1      |
  'JMP 1',      // bucle hasta que V00 sea 0 ----┘
  'INC V06'     // incrementa V06 en 1
])

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
```

Todas las instrucciones proporcionadas ya están validadas y garantizadas de ser correctas.

Basado en la entrevista técnica de SpaceX de CodeSignal

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

* 318 ops/s
* **Complejidad cognitiva:** 10



