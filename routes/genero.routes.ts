import { Request, Response, Router } from "express";
import { adminAuthentication } from "../middlewares/adminAuth";
import { Authentication } from "../middlewares/auth";
import { Genero } from "../models/genero.model";

const generosRoute = Router();

generosRoute.get('/', [Authentication, adminAuthentication],async (req:Request,res:Response)=>{
    

    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let sort = String(req.query.sort);
    let skip = page-1;
    skip = skip*perPage;
    let totalDocs = await Genero.count();
    let totalPages = Math.ceil(totalDocs/perPage);

    const generos = await Genero
                            .find()
                            .limit(perPage)
                            .skip(skip)
                            .sort({nombre:sort=='asc'?1:-1})
                            .exec();
    res.json({
        ok: true,
        generos,
        totalPages
    })
})

generosRoute.get('/search',async (req:Request,res:Response)=>{

    const searchText = String(req.query.searchtext);
    var generos = await Genero.find({'nombre':{'$regex': searchText,'$options':'i'}}).exec();
    res.json({
        ok:true,
        generos
    })
})

generosRoute.get('/byid/:id', async (req:Request,res:Response)=>{
    const id = req.params.id;
    if(!id){
        res.json({
            ok:false,
            error: "El id no existe"})
        return;
    }

    const generoDb = await Genero.findById(id).exec();

    if(!generoDb){
        res.json({
            ok:false,
            error: "El genero no existe"})
        return;
    }

    res.json({
        ok:true,
        generoDb})
    return;
});



generosRoute.post('/',(req:Request,res:Response)=>{

    const genero = {
        nombre: req.body.nombre
    }

    Genero.create(genero)
    .then(generoDb=>{
        res.json({
            ok:true,
            obj: generoDb
        })
    }).catch(err=>{
        res.json({
            ok:false,
            error : err
        }) 
    })
})

generosRoute.put('/:id',(req:Request,res:Response)=>{
    
    const generoId = req.params.id
    console.log(generoId)

    const genero = {
        nombre : req.body.nombre
    }

    Genero.findByIdAndUpdate(generoId,genero)
        .then(generoDb=>{
            res.json({
                ok: true,
                generoDb
            })
        })
})

generosRoute.delete('/',async (req:Request,res:Response)=>{
    const id = req.query.id;
    await Genero.findByIdAndDelete(id);
    res.json({  
        ok: true,
        id
    })

})



export default generosRoute;
