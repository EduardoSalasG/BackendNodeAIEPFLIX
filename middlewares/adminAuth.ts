import { NextFunction, Request, Response } from "express";
import Token from "../classes/token";
import { Role } from "../models/role.model";


export const adminAuthentication = async (req:any, res:Response,next:NextFunction)=>{
    const userToken = req.get('x-token') || '';
    await Token.validateToken(userToken)
    .then(async (decoded:any)=>{
        next();  
    }).catch(err=>{
        res.json({
            ok: true
        })
    })
}