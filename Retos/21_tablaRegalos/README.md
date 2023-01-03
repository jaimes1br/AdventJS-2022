# Reto #21: Creando la tabla de regalos

## Medio 🟠
Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.

Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

```javascript
printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])
```
```javascript
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
```
Otro ejemplo donde se puede ver que la tabla siempre usa sólo el espacio justo dependiendo de la longitud de los nombres de los regalos y de las cantidades.

```javascript
printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
])
```
```javascript
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
```
Como ves, el tamaño de las celdas depende de la longitud de los nombres de los regalos y de las cantidades, aunque como mínimo tendrán que ser del espacio de los títulos `Gift` y `Quantity` respectivamente.

La tabla usa los símbolos: `+` para el borde superior, `*` para el borde inferior, `-` para las líneas horizontales y `|` para las líneas verticales.

Ten en cuenta:

* **Usa sólo el espacio que necesitas para dibujar la tabla.**
* **Adapta la tabla a la longitud de los nombres de los regalos y de las cantidades o los títulos de las columnas.**
* **No hace falta que ordenes los resultados.**
* **La tabla no termina con salto de línea.**


## Solución propuesta

```javascript
function printTable(gifts) {
    
    let minG = Math.max(...gifts.map(g => g.name.length),4)
    let minQ = Math.max(...gifts.map(g => `${g.quantity}`.length),8)

    let table = gifts.reduce((acc,{name,quantity}) => acc + 
        '| ' + `${name}`.padEnd(minG) + ' |' +
        ' ' + `${quantity}`.padEnd(minQ) + ' |\n','')

    let top = '+'.padEnd((minG + minQ + 7),'+') + '\n' +
        '| ' + 'Gift'.padEnd(minG) +
        ' | ' + 'Quantity'.padEnd(minQ) + ' |\n' + 
        '| ' + '-'.padEnd(minG,'-') +
        ' | ' + '-'.padEnd(minQ,'-') + ' |\n'
    let bottom = '*'.padEnd((minG + minQ + 7),'*') 

    return top + table + bottom
}
```

---

### Puntos conseguidos: 300

* 2019 ops/s
* **Complejidad cognitiva:** 1



