# Reto #10: El salto del trineo de Papá Noel
## Medio 🟠

Crea un programa que compruebe que el trineo de Santa Claus hace una **parabola al saltar entre ciudades**. Recibes un **array de números** que representan la **altura** en la que se encuentra el trineo en cada momento.

Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. **No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando.** Veamos unos ejemplos:

const heights = [1, 3, 8, 5, 2]
checkJump(heights) // true


```javascript
/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights = [1, 7, 3, 5]
checkJump(heights) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
```

Necesitamos que el programa devuelva un boolean que indique si el trineo hace una parabola o no.

A tener en cuenta

* **Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.**
* **No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).**

## Solución propuesta

```javascript
function checkJump(heights) {

    let indexMax = heights.indexOf(Math.max(...heights))
    let upA = heights.slice(0,indexMax)  
    let downA = heights.slice(indexMax + 1)

    let up = upA.slice(1).every((n,i) => n >= upA[i])
    let down = downA.slice(1).every((n,i) => n <= downA[i])

    return upA.length > 0 && downA.length > 0 && up && down
}
```

---

### Puntos conseguidos: 260

* 2173 ops/s
* **Complejidad cognitiva:** 1

