import "reflect-metadata";
import dotenv from "dotenv";
import { Router } from "express";
import { classToPlain, plainToInstance } from "class-transformer";
import { SignJWT, jwtVerify } from "jose";
import { Producto } from "../storage/productoDTO.js";
import { Inventario } from "../storage/inventarioDTO.js";
import { Bodega } from "../storage/bodegaDTO.js";

dotenv.config();
const generateToken = Router();
const verifyToken = Router();

const instanceDTO = (className) => {
  const classMap = {
    bodega: Bodega,
    producto: Producto,
    inventario: Inventario,
  };

  const Class = classMap[className];
  return Class
    ? plainToInstance(Class, {}, { ignoreDecorators: true })
    : undefined;
};

generateToken.use("/:collection", async (req, res) => {
  try {
    const collectionName = req.params.collection;
    const instance = instanceDTO(collectionName);

    if (!instance)
      return res.status(404).send({
        status: 404,
        message: "ERROR: La colección no ha sido encontrada",
      });
    const encoder = new TextEncoder();
    const jwtConstructor = new SignJWT(
      Object.assign({}, classToPlain(instance))
    );

    req.data = await jwtConstructor
      .setProtectedHeader({
        alg: "HS256",
        typ: "JWT",
      })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.PRIVATE_KEY));
    res.status(201).send({ status: 201, message: req.data });
  } catch (error) {
    res
      .status(404)
      .send({ status: 404, message: "ERROR: Token solicitado no es valido" });
  }
});

verifyToken.use("/", async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res
      .status(400)
      .send({ status: 400, message: "Token no asignado en el header" });
  try {
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(
      authorization,
      encoder.encode(process.env.PRIVATE_KEY)
    );
    req.data = jwtData;
    next();
  } catch (error) {
    res
      .status(498)
      .send({ status: 498, message: "ERROR: Token no valido o expirado" });
  }
});

export { generateToken, verifyToken };
