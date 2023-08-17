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

### Endpoints

#### Ruta principal:
```bash 
http://127.16.16.16:4660  => Ruta de ejemplo (varia dependiedo a las variables de entorno)
```

1. ```http://127.16.16.16:4660/token/:collection``` 
Esta ruta se usa para conseguir un token para cada endpoint en especifico, en la parte de :collection cambiarla por el endpoint al cual deseas acceder varia entre las siguientes tres opciones: 
    * bodega 
    * producto
    * inventario 

2. ```http://127.16.16.16:4660/productos``` 
En esta ruta se puede acceder a los endpoints creados para prouctos.
    * Get: trae los productos agregados.
    * Post: Se puede insertar un producto siguiendo el formato:
    ```json
    {
        "product_name": "Blue Label",
        "product_description": "Es un elixir",
        "product_state": "activo",
        "product_created_by":1,
        "product_updated_by":null,
        "product_created_at": "2023-08-17",
        "product_updated_at":null,
        "product_deleted_at": null
    }
    ``` 

3. ```http://127.16.16.16:4660/inventario```
En esta ruta se puede acceder a los endpoints creados para inventarios
    * Get: Trae todos los inventarios disponibles
    * Post: Se puede inserta un inventario se utiliza el siguiente formato:
    ```json
    {
        "inventory_winery_ID": 1,
        "inventory_product_ID":1,
        "inventory_cantity": 30,
        "inventory_created_by":1,
        "inventory_created_at": "2023-08-17"
    }
    ```

4. ```http://127.16.16.16:4660/bodegas```
En esta ruta se puede acceder a los endpoints creados para bodegas
    * Get: Trae todos las bodegas disponibles
    * Post: Se puede agregar una nueva bodega utilizando el siguiente formato:
    ```json
    {
        "winery_id":2,
        "winery_name":"Bodega de sapos",
        "responsible_id":1,
        "winery_state":"activo",
        "winery_created_by":1,
        "winery_updated_by":null,
        "winery_created_at":"2023-08-18",
        "winery_updated_at":null,
        "winery_deleted_at":null
    }
    ```

## Autor
[Camilo Paez](https://github.com/AoKuangg)