# MongoBodegas 
En este proyecto se crean endpoints con los cuales se pueden realizar consultas a una base de datos de MongoDB, a continuacion la instalacion y uso de los endpoints.

### Instalación
1. Clona el repositorio en tu computadora, puedes hacerlo con el siguiente comando:
```bash 
git clone https://github.com/AoKuangg/mongoBodega.git
```
2. Asegurate de tener node.js instalado en tu computadora, ya que sin este el proyecto será imposible de ejecutar. Si no tienes node, pudes descargarlo [NodeJs](https://nodejs.org/en)
3. Instala las dependencias necesarias con el siguiente comando:
```bash
npm i
```
4. Ejecuta el archivo db/query.mongodb
5. Ejecuta el siguiente comando: 
```bash
npm run dev
```

### Base de datos
Como se recalca en el punto anterior la base de datos se encuentra en la carpeta db en el archivo que tiene por nombre query.mongodb, en este se encuentra todo el codigo de la base de datos para las pruebas de el proyecto.

### Variables 
Modifica a tus variables de entorno:
```
MY_SERVER={"hostname":"", "port":}
ATLAS_CONNECTION={"user":"","password":"","database":""}
JWT_KEY={""}
```

