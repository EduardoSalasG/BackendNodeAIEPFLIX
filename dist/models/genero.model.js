"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genero = void 0;
const mongoose_1 = require("mongoose");
const generoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El genero es requerido']
    },
    peliculas: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Pelicula'
        }]
});
exports.Genero = (0, mongoose_1.model)('Genero', generoSchema);
