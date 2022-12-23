# AdventJS 2022

Este es un repositorio inspirado en el reto Advent.js, el cual contiene **mis soluciones** propuestas para cumplir con el reto. Esta idea y retos fueron propuestos por [@MiduDev](https://github.com/midudev "@MiduDev") en https://adventjs.dev/es.

Advent.js, es un reto pensado en mejor tu lógica de programación, el cual consiste en **24 días, 24 retos** de programación con ```JavaScript```

<p align="center"> 
  <img width="460" height="300" src="https://user-images.githubusercontent.com/91866094/206088511-972c5177-74cf-48fc-be29-c42e0a51fb6e.png"/>
</p>

<h3 align="center">🧑‍🚀 24 días de retos con JavaScript • <a href="https://adventjs.dev">adventJS</a> 🚀</h3>

### 🕹️ Retos


|  #  |                  Reto                       |   Disponible    |                Solución                  |  Puntos  |
| :-: | :------------------------------------------------------------------: | :------------:  | :----------------------------------------: | :---------: |
| 01  |           ¡Automatizando envolver regalos de navidad!           |       ✅        | [Mirar](Retos/01_automatizacion/README.md) |   121   |
| 02  |                  Nadie quiere hacer horas extra                  |       ✅        | [Mirar](Retos/02_horasExtra/README.md) |   121   |
| 03  |        ¿Cuántas cajas de regalos puede llevar Papá Noel?        |       ✅        | [Mirar](Retos/03_cajasRegalos/README.md) |   142   |
| 04  |              Una caja dentro de otra caja y otra...              |       ✅        | [Mirar](Retos/04_cajas/README.md) |   122   |
| 05  |                   Optimizando viajes de Santa                   |       ✅        | [Mirar](Retos/05_viajesSanta/README.md) |   123   |
| 06  |                    Creando adornos navideños                    |       ✅        | [Mirar](Retos/06_adornosNavidenos/) |   160   |
| 07  |                  Haciendo inventario de regalos                  |       ✅        | [Mirar](Retos/07_inventarioRegalos/inventarioRegalos.md) |   200   |
| 08  |                    ¡Necesitamos un mecánico!                    |       ✅        | [Mirar](Retos/08_mecanico/mecanico.md) |   200   |
| 09  |                    Las locas luces de Navidad                    |       ✅        | [Mirar](Retos/09_luces/luces.md) |   300   |
| 10  |                 El salto del trineo de Papá Noel                 |       ✅        | [Mirar](Retos/10_saltoTrineo/saltoTrineo.md) |   260   |
| 11  |                    Papá Noel es Scrum Master                    |       ✅        | [Mirar](Retos/11_scrum/scrum.md) |   220   |
| 12  |                   Trineos eléctricos, ¡guau!                   |       ✅        | [Mirar](Retos/12_trineosElectricos/trineosElectricos.md) |   360   |
| 13  |               Backup de los archivos de Papá Noel               |       ✅        | [Mirar](Retos/13_backup/backup.md) |   300   |
| 14  |                         El mejor camino                         |       ✅        | [Mirar](Retos/14_mejorCamino/mejorCamino.md) |   140   |
| 15  |                  Decorando el árbol de Navidad                  |       ✅        | [Mirar](Retos/15_decorandoArbol/decorandoArbol.md) |   200   |
| 16  |               Arreglando las puertas de Papá Noel               |       ✅        | [Mirar](Retos/16_cartas/cartas.md) |   200   |
| 17  |                  Llevando los regalos en sacos                  |       ✅        | [Mirar](Retos/17_regalosSaco/regalosSaco.md) |   140   |
| 18  |                     ¡Nos quedamos sin tinta!                     |       ✅        | [Mirar](Retos/18_sinTinta/sinTinta.md) |   200   |
| 19  |                      Ordenando los regalos                      |       ✅        | [Mirar](Retos/19_ordenandoRegalos/ordenandoRegalos.md) |   260   |
| 20  |                       Más viajes retadores                       |       ❌        | [Mirar](Retos/) |   ---   |
| 21  |                   Creando la tabla de regalos                   |       ✅        | [Mirar](Retos/21_tablaRegalos/tablaRegalos.md) |   300   |
| 22  |                    La iluminación en sintonía                    |       ✅        | [Mirar](Retos/22_iluminacion/iluminacion.md) |   400   |
| 23  |                     Compilador de Papá Noel                     |       ✅        | [Mirar](Retos/23_complilador/README.md) |    10   |
| 24  |                                    |       ❌        | [Mirar](Retos/) |        |


### 🧪 Tests

Antes de poder ejecutar cualquier prueba, es necesario instalar la dependencia de `Jest`. `Jest` es un marco de pruebas para JS.

Para instalar `Jest` ejecuta el comando 

```bash
npm install
```

Cada uno de los retos contienen en su respectiva carpeta un archivo llamado `reto.test.js`. Este archivo contiene todos los test disponibles mostrados al ejecutar el código propuesto en el entorno del Adventjs (solo los retos disponibles 🔓). Puedes revisar las pruebas de cada reto corriendo el comando `npm run test:x`.

```bash
npm run test # Para correr todos los test de todos los retos
npm run test:n # n siendo el número del reto

#Ejemplo
npm run test:1 # Ejectuta el test del reto 1
```