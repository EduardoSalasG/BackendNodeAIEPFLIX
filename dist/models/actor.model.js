"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
const mongoose_1 = require("mongoose");
const actorSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    foto: {
        type: String,
        required: [true, "La foto es requerida"]
    },
    biografia: {
        type: String,
        required: [true, "La biografía es requerida"]
    },
    fechaNacimiento: {
        type: Date,
        required: [true, "La fecha de nacimiento es requerida"]
    }
});
exports.Actor = (0, mongoose_1.model)('Actor', actorSchema);
