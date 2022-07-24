import { Request, Response, Router } from "express";
import { Actor } from "../models/actor.model";

const actorRoutes = Router();

actorRoutes.get('/',async  (req:Request,res:Response)=>{
    const actores = await Actor.find().exec();
    res.json({
        ok: true,
        actores
    })
})

actorRoutes.post('/',(req:Request,res:Response)=>{

    const actor = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        biografia: req.body.biografia,
        fechaNacimiento: req.body.fechaNacimiento
    }

    Actor.create(actor)
    .then(actorDb=>{
        res.json({
            ok: true,
            actor: actorDb
        })
    }).catch(err=>{
        res.json({
            ok: false,
            err
        })
    })

})


actorRoutes.put('/update',(req:any,res:Response)=>{
    const actorId = req.query.id;    
    const actor = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        biografia: req.body.biografia,
        fechaNacimiento: req.body.fechaNacimiento
    }

    Actor.findByIdAndUpdate(actorId,actor)
        .then(actorDb=>{
            res.json({
                ok: true,
                actorDb
            })
        })
})


export default actorRoutes;