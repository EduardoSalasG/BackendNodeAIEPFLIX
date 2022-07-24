import { Request, Response, Router } from "express";

const defaultRoutes = Router();

defaultRoutes.get('/',(req:Request,resp:Response)=>{
    return resp.json({
        ok:true,
        msj:'todo funciona perfecto'
    });
})
 
defaultRoutes.post('/',(req:Request,resp:Response)=>{
    return resp.json({
        ok:true,
        msj:'todo funciona perfecto'
    });
})

export default defaultRoutes;