import { Router } from "express";
import { connDB } from "../db/ConnectDB.js";
import { autoIncrementID } from "../helpers/autoincrementID.js";
import {
  BodegaMiddleware,
  BodegaVerify,
} from "../middleware/bodegaMiddleware.js";

const Bodega = Router();

Bodega.get("/", BodegaVerify, async (req, res) => {
  try {
    let db = await connDB();
    let coleccion = db.collection("wineries");
    let data = await coleccion.find().toArray();
    res.send({ status: 200, message: "Datos obtenidos", data });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Error al obtener datos",
      error: error.message,
    });
  }
});

Bodega.post("/", BodegaVerify, BodegaMiddleware, async (req, res) => {
  try {
    const nuevoID = await autoIncrementID("wineries");
    console.log(nuevoID);
    let db = await connDB();
    let coleccion = db.collection("wineries");
    await coleccion.insertOne({
      ID: nuevoID,
      ...req.body,
    });
    res.send({ status: 200, message: "Dato agregado" });
  } catch (error) {
    res
      .status(500)
      .send({
        status: 500,
        errorInfo: { message: "Error al agregar datos", error: error.message },
      });
  }
});

export default Bodega;