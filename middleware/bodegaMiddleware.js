import "reflect-metadata";
import { classToPlain, plainToInstance } from "class-transformer";
import { Bodega } from "../storage/bodegaDTO.js";
import { validate } from "class-validator";

const BodegaMiddleware = async (req,res,next) => {
    try {
        let data = plainToInstance(Bodega, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(500).send({
            message: "Error de data en Dto",
            error: error.message,
          });
    }
};

const BodegaVerify = (req,res,next) => {
    if(!req.rateLimit) return; 
    let {payload} = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(Inventario, {}, { ignoreDecorators: true })));
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({status: 406, message: "No Autorizado"}) : next(); 
};

export { BodegaMiddleware, BodegaVerify };