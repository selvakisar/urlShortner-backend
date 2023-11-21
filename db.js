import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()


const connectdb =async () =>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("Connected to database")
    } catch (error) {
        console.error(error.message);
       
       
    }
}

export {connectdb}

