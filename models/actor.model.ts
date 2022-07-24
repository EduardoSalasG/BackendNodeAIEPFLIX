import { Document, model, Schema } from "mongoose";

const actorSchema = new Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es requerido"]
    },
    foto:{
        type:String,
        required: [true, "La foto es requerida"]
    },
    biografia:{
        type: String,
        required: [true, "La biografía es requerida"]
    },
    fechaNacimiento:{
        type: Date,
        required: [true, "La fecha de nacimiento es requerida"]
    }

})

interface IActor extends Document{
    nombre: string;
    foto: string;
    biografia: string;
    fechaNacimiento: Date;
}

export const Actor = model<IActor>('Actor', actorSchema);