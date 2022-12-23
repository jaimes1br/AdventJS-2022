# Reto #6: Creando adornos navideños

## Medio 🟠

Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para **crear los cubos** se le pasa un **número con el tamaño deseado** al programa y este devuelve un `string` con el **diseño de ese tamaño**. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

```javascript
const cube = createCube(3)

  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/

```

Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: `/`,`\`,`_` y ` ` (espacio en blanco).

Otros ejemplos de cubos:

```javascript
const cubeOfOne = createCube(1)

/\_\
\/_/

const cubeOfTwo = createCube(2)

 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/

```

A tener en cuenta:

* **Fíjate bien en los espacios en blanco que hay en el cubo.**
* **El cubo tiene que ser simétrico.**
* **Asegúrate de usar los símbolos correctos.**
* **Cada nueva línea del cubo debe terminar con un salto de línea (`\n`) excepto la última.**

## Solución propuesta

```javascript
function createCube(size) {
    const top = (n,size) => '/\\'.repeat(n) + '_\\'.repeat(size) + '\n'
    const bottom = (n,size) => '\\/'.repeat(n) +  '_/'.repeat(size) + '\n'
    
    let cube = ''
    let cubeI = ''

    for (let i = 0; i < size; i++) {
        cube += ' '.repeat(size - (i + 1)) + top(i + 1,size) 
        cubeI += ' '.repeat(size - (size - i)) + bottom(size - i,size)
    }

    return (cube + cubeI).slice(0,-1)
}
```

---

### Puntos conseguidos: 160

* 367 ops/s
* **Complejidad cognitiva:** 1

