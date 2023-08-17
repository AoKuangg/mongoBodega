import dotenv from "dotenv";
import express from "express";
import Productos from "./router/productoRouter.js";
import Inventario from "./router/inventarioRouter.js";
import Bodega from "./router/bodegasRouter.js";
import { limitRequest } from "./helpers/limitRequest.js";
import { generateToken, verifyToken } from "./jwt/tokens.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/token",limitRequest(),generateToken);
app.use("/productos", limitRequest(),verifyToken,Productos);
app.use("/inventario", limitRequest(),verifyToken,Inventario);
app.use("/bodegas", limitRequest(),verifyToken,Bodega);


let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});