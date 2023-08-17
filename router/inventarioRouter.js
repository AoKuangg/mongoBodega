import { Router } from "express";
import { connDB } from "../db/ConnectDB.js";
import { autoIncrementID } from "../helpers/autoincrementID.js";
import { InventarioMiddleware, InventarioVerify } from "../middleware/inventarioMiddleware.js"

const Inventario = Router();

Inventario.get("/", InventarioVerify, async (req, res) => {
    try {
        let db = await connDB();
        let coleccion = db.collection("inventories");
        let data = await coleccion.find().toArray();
        res.send({
            status:200,
            message: "Datos obtenidos",
            data,
        });
    } catch (error) {
        res.status(500).send({ status:500, message:"Error al obtener datos", error:error.message });
    }
});

Inventario.post("/", InventarioVerify, InventarioMiddleware, async (req,res)=>{
    const nuevoID = await autoIncrementID("inventories");
    try {
        let db = await connDB();
        let coleccion = db.collection("inventories");
        await coleccion.insertOne({
            ID:nuevoID,
            ...req.body,
        });
        res.status(200).send({status:200, message:"Dato insertado"})
    } catch (error) {
        res.status(500).send({ status:500, message:"Error al insertar el dato", error:error.message });
    }

    /**
     * Ejemplo insert inventarios
     */
      // {
  //   "inventory_winery_ID": 1,
  //   "inventory_product_ID":1,
  //   "inventory_cantity": 30,
  //   "inventory_created_by":1,
  //   "inventory_created_at": "2023-08-17"
  // }
});

export default Inventario;