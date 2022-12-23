# Reto #9: Las locas luces de Navidad

## Fácil 🟢

Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

Tienen unas tiras led que son como un `Array`. Cada posición es un led y puede ser estar encendido (`1`) o apagado (`0`).

**Cada 7 segundos**, los leds cambian de estado de esta forma:

**Si el led está apagado, se enciende si el led de su izquierda (`index - 1`) estaba encendido antes.**
**Si el led está encendido, se mantiene siempre encendido.**

Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. **Los segundos se expresan en un número entero.** Por ejemplo:


```javascript
const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
```

A tener en cuenta

* **El array siempre tendrá al menos un led encendido.**
* **El array puede tener cualquier longitud.**
* **Si todos los leds están encendidos, el tiempo es 0.**


## Solución propuesta

```javascript
function countTime(leds) {
    let count = 0
    let arr = leds.join('').split('1')
    arr[0] += arr.at(-1)
    count = Math.max(...arr.map(e=>e.length))

    return count * 7
}

```

---

### Puntos conseguidos: 300

* 2243 ops/s
* **Complejidad cognitiva:** 1
