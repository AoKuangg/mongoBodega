import "reflect-metadata";
import { classToPlain, plainToInstance ,plainToClass} from "class-transformer";
import { Producto } from "../storage/productoDTO.js";
import { validate } from "class-validator";

const ProductoMiddleware = async (req,res,next) => {
    try {
        let data = plainToInstance(Producto, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.satus(500).send({ message: "Error en la data", error: error.message });
    }
};

const ProductoVerify = (req, res, next) => {
    if(!req.rateLimit) return; 
    let {payload} = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(Producto, {}, { ignoreDecorators: true })));
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({status: 406, message: "No Autorizado"}) : next(); 
};


export { ProductoMiddleware, ProductoVerify };