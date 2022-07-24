"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defaultRoutes = (0, express_1.Router)();
defaultRoutes.get('/', (req, resp) => {
    return resp.json({
        ok: true,
        msj: 'todo funciona perfecto'
    });
});
defaultRoutes.post('/', (req, resp) => {
    return resp.json({
        ok: true,
        msj: 'todo funciona perfecto'
    });
});
exports.default = defaultRoutes;
