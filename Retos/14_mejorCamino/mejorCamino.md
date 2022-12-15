# Reto #14: El mejor camino

## Medio 🟠


Santa Claus está construyendo pirámides de hielo en el Polo Norte para entrenar a sus renos.

Cada reno comienza en la cima de la pirámide y debe elegir el camino óptimo hacia abajo para recorrerlo **en el menor tiempo posible**. Cada nivel tiene un número que determina el tiempo que necesita para llegar ahí.

Al llegar a una posición, el reno **solo puede deslizarse hacia abajo y en diagonal hacia la izquierda o la derecha.** Visualmente, la pirámide se ve así:
```javascript
    0
   / \
  7   4
 / \ / \
2   4   6
```

En código la representamos así:

```javascript
[
  [0],
  [7, 4],
  [2, 4, 6]
]
```

Santa Claus necesita un programa que le dice cuál es el tiempo mínimo que puede tomar cada reno para deslizarse por la pirámide usando el camino más óptimo.

En el ejemplo anterior, el camino más óptimo es `0 -> 4 -> 4`, que toma un total de `0 + 4 + 4 = 8` unidades de tiempo. El resultado sería: `8`.

¿Por qué no es `6`? No es `0 -> 4 -> 2` porque al bajar a la posición del `4` ya no puede diagonalmente llegar a la posición del `2`. Así que el camino más corto posible es `8`. Más ejemplos:

```javascript
getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1
```

A tener en cuenta:

* **Ten en cuenta que sólo puedes bajar en diagonal y hacia abajo desde cualquier posición.**
* **La primera posición de la pirámide puede ser diferente a 0.**
* **Las pirámides pueden tener hasta 10 niveles.**
* **Los números en las pirámides pueden ser negativos.**


## Solución propuesta

```javascript
function getOptimalPath(path) {
    
    let paths = []
    
    function getPath(acc,l,i){
        let level = l + 1
        if(level < path.length){
            let opc = path[level].slice(i, i + 2)                   
            opc.forEach((e,i) => getPath([...acc,e],level,i))
        }else{
            paths.push(acc.reduce(((acc,c) => acc + c),0)) 
        }
    }

    getPath(path[0],0,0)

    return Math.min(...paths)
}
```

---

### Puntos conseguidos: 140

* 2034 ops/s
* **Complejidad cognitiva:** 4


