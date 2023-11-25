import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import { connectdb} from "./db.js"

import { urlRouter } from "./routes/url.js";
import { userRouter } from "./routes/user.js";
import { isAuthenticated } from "./authentication/auth.js";


dotenv.config()
// intialize server 
const app =express();

// db connection
connectdb()

// midware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' allows any origin, you can specify specific origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

const corsOptions = {
    origin: 'https://nanourl.onrender.com', // Replace with your allowed origin
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))


app.use("/users",userRouter)
app.use("/url",isAuthenticated,urlRouter)


// server configuration
const PORT =process.env.PORT

app.listen(PORT,()=>console.log(`listening on ${PORT}`))
