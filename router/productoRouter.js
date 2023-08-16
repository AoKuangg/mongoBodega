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

export default Productos;