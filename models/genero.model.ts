import { model, Schema } from "mongoose";

const generoSchema = new Schema({
    nombre:{
        type:String,
        required:[true,'El genero es requerido']
    },
    peliculas : [{
        type: Schema.Types.ObjectId,
        ref: 'Pelicula'
    }]
});

interface IGenero extends Document{
    nombre:string
}

export const Genero = model<IGenero>('Genero',generoSchema);