import dotenv from "dotenv";
import express from "express";
import Productos from "./router/productoRouter.js";
import { limitRequest } from "./helpers/limitRequest.js";
import { generateToken, verifyToken } from "./jwt/tokens.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/token",limitRequest(),generateToken);
app.use("/productos", limitRequest(),verifyToken,Productos);


let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});