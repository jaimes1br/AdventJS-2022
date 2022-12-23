# Reto #7: Haciendo inventario de regalos

## Fácil 🟢

En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un `Array`). En cada almacén hay regalos.

Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. **Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.**

Por ejemplo, si tenemos los siguientes almacenes:
```javascript
const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
```

Como ves, los almacenes pueden tener el mismo regalo repetido varias veces. Pero, por más existencias que haya en un almacén, si no tenemos en los otros dos, debemos reponerlo para tener mejor distribución.

📝 Summary
* **Crea una función `getGiftsToRefill` que reciba tres `Array` como parámetros.**
* **La función debe devolver un `Array` con los regalos que hay que reponer.**
* **Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacenes.**
* **Si no hay ningún regalo que reponer, la función debe devolver un `Array` vacío.**
* **Si hay más de un regalo que reponer, la función debe devolver un `Array` con todos los regalos que hay que reponer.**


## Solución propuesta

```javascript
function getGiftsToRefill(a1, a2, a3) {

    let data = a1.concat(a2,a3)
    let t = [...new Set(data)]

    return t.filter( g => a1.includes(g) + a2.includes(g) + a3.includes(g) == 1)
}
```

---

### Puntos conseguidos: 200

* 955 ops/s
* **Complejidad cognitiva:** 1

