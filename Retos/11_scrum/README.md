# Reto #11: Papá Noel es Scrum Master
## Difícil 🔴


Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

Le dicen la duración esperada de las tareas con un string con el formato `hh:mm:ss` y en el mismo formato cuánto tiempo llevan trabajando en ella.

Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.

Por ejemplo, si la tarea dura `03:00:00` y llevan trabajando `01:00:00` entonces ya han completado `1/3` de la tarea. En código:


```javascript
getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5
```

Ten en cuenta:

* **El formato de la hora es hh:mm:ss.**
* **El formato de la salida es un string a/b donde a es la porción de la tarea que ya se ha completado y b es la porción de la tarea que falta por completar.**
* **La porción siempre se muestra con la menor fracción posible. (por ejemplo, nunca se mostraría 2/4 porque se puede representar como 1/2).**
* **Si ya se ha completado la tarea, la fracción sería 1/1.**
* **Ningun elfo ha sido maltradado durante la ejecución de este reto ni han tenido que usar Scrum de verdad.**


## Solución propuesta

```javascript
function getCompleted(part, total) {
    
    let partTime = part.split(':')
    let partSec =  partTime.reduce((acc,num) => acc * 60 + +num,0)
    let totalTime = total.split(':')    
    let totaltSec = totalTime.reduce((acc,num) => acc * 60 + +num,0)

    const mcd = (x,y) => {
        let z = 0
        while(y){
            z = y
            y = x % y
            x = z 
        }
        return x;
    }

    let valueMCD = mcd(totaltSec,partSec)

    return `${partSec/valueMCD}/${totaltSec/valueMCD}`
}
```

---

### Puntos conseguidos: 220

* 2332ops/s
* **Complejidad cognitiva:** 2

