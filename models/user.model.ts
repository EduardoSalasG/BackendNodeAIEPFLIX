import { Document, model, Schema, SchemaTypes } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema ({
    name:{
        type:String,
        required:[true, 'El nombre es requerido']
    },
    email:{
        type:String,
        unique:true,
        required:[true, 'El email es requerido']
    },
    password:{
        type:String,
        required:[true, 'El password es requerido']
    },
    roles:[{
        type: SchemaTypes.ObjectId,
        ref: 'Role'
    }]
})

interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    roles:string[];

    checkPassword(password:string):boolean;
}

userSchema.method<IUser>('checkPassword', function(password:string=''):boolean{
    if(bcrypt.compareSync(password,this.password)){
        return true;
    }
    else{
        return false;
    }
})

export const User = model<IUser>('User',userSchema);