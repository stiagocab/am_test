## PRUEBA DE AM

Este es una prueba técnica para aplicar a AM. El proyecto lista los personajes de HP en una interfaz hecha con ReactJS y SASS. Se pueden marcar hasta 5 personajes como favoritos que se guardan en el localstorage y se administran por medio de redux. Para poder crear nuevos personajes y que estos se mantengan guardados se utiliza una fake api por medio de [JSON SERVER](https://github.com/typicode/json-server).


#### Instrucciones:

1.  Instalar JSON server de manera local:

`$ npm install -g json-server`

2. Ejecutar servidor de api con el siguiente comando, desde la carpeta */db*:

`json-server --watch db.json`

El puerto por defecto es el 3000, para modificarlo solo agrega `--port ####`

Puedes comprobar que el api funcione correctamente en http://localhost:3000/characters

3. Instalar paquetes de npm desde la raíz del proyecto

`$ npm install`

3. Ejecutar proyecto ReactJS:

	http://localhost:8080

#### Acerca de:

El proyecto a pesar de parecer muy simple en cuanto a diseño y funcionalidad tiene su complejidad a la hora de implementarlo pues los estilos sufren cambios significativos por medio de validaciones extras.

**Lo que más me gusto** fue que se agrego el fake api pues nunca había trabajado con una implementada de esta manera y me resulto interesante la practicidad que tiene, al principio pensé que me tomaria mucho tiempo implementarla pero fue muy sencillo. 

**Si tuviera más tiempo** agregaría interacciones más fluidas como en la aparición del menú, mensajes de retroalimentación al usuario sobre lo que está pasando o los limites que tiene.
