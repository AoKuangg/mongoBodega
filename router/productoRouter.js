import { Router } from "express";
import { connDB } from "../db/ConnectDB.js";
import { autoIncrementID } from "../helpers/autoincrementID.js";
import { ProductoMiddleware, ProductoVerify } from "../middleware/productoMiddleware.js";

const Productos = Router();

Productos.get("/", ProductoVerify ,async (req, res) => {
    try {
        let db = await connDB();
        let coleccion = db.collection("products");
        let data = await coleccion.find().sort({ name: 1 }).toArray();
        res.status(200).send({ status: 200, message: "Datos obtenidos", data });
      } catch (error) {
        res.status(500).send({
          status: 500,
          errorInfo: {
            message: "Error al obtener los datos",
            error: error.message,
          },
        });
      }
});

Productos.post("/", ProductoVerify, ProductoMiddleware, async (req, res) => {
  try {
    const nuevoID = await autoIncrementID("products");
    let db = await connDB();
    let coleccion = db.collection("products");
    await coleccion.insertOne({
      ID: nuevoID,
      ...req.body,
    });
    res.status(200).send({status:200, message:"Dato correctamente insertado"});
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "Error al insertar los datos",
        error: error.message,
      },
    });
  }

  /**
   * *Ejemplo para la insercion de datos
   */
    // {
  //   "product_name": "Blue Label",
  //   "product_description": "Es un elixir",
  //   "product_state": "activo",
  //   "product_created_by":1,
  //   "product_updated_by":null,
  //   "product_created_at": "2023-08-17",
  //   "product_updated_at":null,
  //   "product_deleted_at": null
  // }
});

export default Productos;