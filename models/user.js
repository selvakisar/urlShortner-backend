import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
const userScheme=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,

    },
    resetToken:{
        type:String,
        default:null,

    },
    userShortedUrl:{
        type:String,
        default:null,
    }
})

const User=mongoose.model("user",userScheme);

const generateToken=(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY);
}

export{User,generateToken};