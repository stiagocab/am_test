## PRUEBA DE AM

Este es una prueba técnica para aplicar a AM. El proyecto lista los personajes de HP en una interfaz hecha con ReactJS y SASS. Se pueden marcar hasta 5 personajes como favoritos que se guardan en el localstorage y se administran por medio de redux. Para poder crear nuevos personajes y que estos se mantengan guardados se utiliza una fake api por medio de [JSON SERVER](https://github.com/typicode/json-server).


#### Instrucciones:

-.  Instalar JSON server de manera local:

`$ npm install -g json-server`

-. Ejecutar servidor de api con el siguiente comando, desde la carpeta */db*:

`json-server --watch db.json`

El puerto por defecto es el 3000, para modificarlo solo agrega `--port ####`

Puedes comprobar que el api funcione correctamente en http://localhost:3000/characters

-. Instalar paquetes de npm desde la raíz del proyecto

`$ npm install`

-. Ejecutar proyecto ReactJS:

	http://localhost:8080

#### Acerca de:

El proyecto a pesar de parecer muy simple en cuanto a diseño y funcionalidad tiene su complejidad a la hora de implementarlo pues los estilos sufren cambios significativos por medio de validaciones extras.

**Lo que más me gusto** fue que se agrego el fake api pues nunca había trabajado con una implementada de esta manera y me resulto interesante la practicidad que tiene, al principio pensé que me tomaria mucho tiempo implementarla pero fue muy sencillo. 

**Si tuviera más tiempo** agregaría interacciones más fluidas como en la aparición del menú, mensajes de retroalimentación al usuario sobre lo que está pasando o los limites que tiene. También agregaría más inputs en el formulario para poder agregar sí el personaje sigue vivo y su foto.

**Tuve dificultades** al momenrto de publicar porque normalmente he subido apps react de la siguiente manera:

1. Crear el build de la apliación react.
1. Generar una app en express js
1. En la ruta principal de express mandar un static con el build
1. Publicar en heroku, vercel....

Pensé seguir ese mismo camino para poder agregar el json server en otra ruta del mismo proyecto express pero al intentar hacer el deploy siempre me dio problemas al acceder a la ruta, aunque en los logs nunca tuve errores.

Lo resolví simplemente haciendo deploy del app de react en netlify directamente y el json server desde un proyecto en heroku
