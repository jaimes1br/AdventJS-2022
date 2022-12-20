# Reto #18: ¡Nos quedamos sin tinta!

## Fácil 🟢
Estamos imprimiendo los códigos de barra para los envíos en la fábrica de Papá Noel. Usamos un sistema de estampación de números donde cada dígito se imprime con una tinta diferente. Es un sistema antiguo pero fiable. Sin embargo, a veces nos quedamos sin tinta de un dígito.

**Escribe una función** que **recibe el dígito del que no tenemos tinta** (un número que será del 0 al 9) y como segundo parámetro, **el número de códigos de barras que hay que imprimir** (empezamos desde 1 hasta este número que recibimos).

Nos debe **devolver un array con los números que incluyen el número que no tenemos tinta**. Veamos un ejemplo:


```javascript
dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

// no tenemos tinta para el dígito 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15

dryNumber(2, 20) // [2, 12, 20]

// no tenemos tinta para el dígito 2
// tenemos que imprimir 20 códigos de barras del 1 al 20
// los códigos de barras que saldrán mal por falta de tinta son:
// 2, 12, 20
```

Ten en cuenta:

* **El número del que no tenemos tinta sólo puede ser del 0 al 9.**
* **El número del que no tenemos tinta puede estar en cualquier posición del código de barras.**
* **El número de códigos de barras que hay que imprimir puede ser muy grande.**



## Solución propuesta

```javascript
function dryNumber(dry, numbers) {

    let errors = new Array(numbers)
        .fill()
        .map((_,i) => i + 1)

    return errors.filter(num => `${num}`.includes(`${dry}`))
}

```

---

### Puntos conseguidos: 200

* 1492 ops/s
* **Complejidad cognitiva:** 1



