"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actor_model_1 = require("../models/actor.model");
const actorRoutes = (0, express_1.Router)();
actorRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const actores = yield actor_model_1.Actor.find().exec();
    res.json({
        ok: true,
        actores
    });
}));
actorRoutes.post('/', (req, res) => {
    const actor = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        biografia: req.body.biografia,
        fechaNacimiento: req.body.fechaNacimiento
    };
    actor_model_1.Actor.create(actor)
        .then(actorDb => {
        res.json({
            ok: true,
            actor: actorDb
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
actorRoutes.put('/update', (req, res) => {
    const actorId = req.query.id;
    const actor = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        biografia: req.body.biografia,
        fechaNacimiento: req.body.fechaNacimiento
    };
    actor_model_1.Actor.findByIdAndUpdate(actorId, actor)
        .then(actorDb => {
        res.json({
            ok: true,
            actorDb
        });
    });
});
exports.default = actorRoutes;
