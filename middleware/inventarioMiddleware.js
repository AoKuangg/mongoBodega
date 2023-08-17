import "reflect-metadata";
import { classToPlain, plainToInstance ,plainToClass} from "class-transformer";
import { Inventario } from "../storage/inventarioDTO.js"
import { validate } from "class-validator";

const InventarioMiddleware = async (req, res, next) => {
    try {
        let data = plainToInstance(Inventario, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.satus(500).send({ status:500,message: "Error en la data" });
    }
};

const InventarioVerify = (req,res,next) =>{
    if(!req.rateLimit) return; 
    let {payload} = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(Inventario, {}, { ignoreDecorators: true })));
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({status: 406, message: "No Autorizado"}) : next(); 
};

export { InventarioMiddleware, InventarioVerify }