# Progra Web 01

## Entorno base de desarrollo

Se configuró un entorno base para las tareas de programación web.

### Package.json

En este archivo van las dependencias que se instalan. Para poder instalar las dependencias se ejecuta el siguiente comando **npm install**.

### GulpFile.js

En este es un script en la cual van programadas las tareas que se ejecutaran. Para ejecutar el script se utiliza el sigueinte comando: **gulp <nombre_tarea>** si se ejecuta solamente el comando **gulp** este solo ejecutará lo que este definido dentro de la tarea por default.

### Estructura del proyecto

La estructura del proyecto es la siguiente:

- **dist**
  - css; Almacena los estilos ya compilados de sass a css.
    - build Almacenan los archivos css minificados
  - js: Almacenan los archivos de Javascript minificados
  - imgs: Almacena las imagenes minificadas
- **src**
  - imgs: Almacena las imagenes
  - js: Almacena los archivos JS que aún no están minifocaas
  - scss: Almacena los estilos SASS.

## TAREAS IMPLEMENTADAS

- **jsTask:** Esta tarea ejecuta la minificación de los archivos javascrip
- **minifyCssTask:** Ejecuta la tarea para minificar los archivos CSS 
- **imageTask:** Ejecuta la tarea para minificar las imagenes.
