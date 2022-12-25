# Reto #24: El último reto es un laberinto

## No es la mejor versión, cumple con pasar las pruebas, pero la complejidad cognitiva es de 19
## Difícil 🔴

¡Ha llegado el día! Hoy vamos a repartir los regalos… pero los almacenes son un labertinto y los elfos están perdidos.

**Indielfo Jones** quiere **escribir un programa** que al recibir una **matriz**, sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.

Los laberintos tienen las siguientes posiciones:

* **`W`: Es una pared, no se puede pasar por ahí.**
* **`S`: Punto de entrada al almacén.**
* **`E`: Punto de salida del almacén.**
* **` `: Los espacios en blanco es por donde se puede pasar.**

Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. **No se puede mover en diagonal**.
```javascript
canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> false

// No hay manera de llegar de [0, 4] a [4, 4]
```

**Recuerda que:**

* **Sólo tienes que devolver si se puede salir del laberinto con un `booleano`.**
* **Las paredes `W` no se pueden saltar.**
* **No se pueden salir de los límites de la matriz, siempre hay que seguir un camino interno.**

## Solución propuesta

```javascript
function canExit(maze) {
    
    let s = []
    
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
          if (maze[i][j] === 'S') {
            s = [i, j];
            break;
          }
        }
    }

    let opc = []
    const getMoves = (p) => {
        opc.push(`${p}`)
        let ms = []
        ms.push(p[0] - 1 >= 0 ? [p[0] - 1 , p[1]]: [])
        ms.push(p[1] + 1 >= maze[0].length ? [] : [p[0] , p[1] + 1])
        ms.push(p[0] + 1 >=  maze.length ? [] : [p[0] + 1 , p[1]])
        ms.push(p[1] - 1 < 0 ? [] : [p[0], p[1] - 1])

        ms = ms.filter(o => o.length > 0)
        ms.forEach(m => {
            if(!opc.includes(`${m}`) && maze[m[0]][m[1]] != 'W'){
                 getMoves(m)
            }
        })
        
        return opc
    }
    
    return getMoves(s).some(t => maze[t[0]][t[2]] == 'E')
}
```

---

### Puntos conseguidos: 150

* 726 ops/s
* **Complejidad cognitiva:** 19



