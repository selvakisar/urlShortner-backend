import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    urlId: {
      type: String,
      required: true,
    },
    origUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: null,
    },
    date: {
      type: String,
      default: Date.now(),
    },
  });

 const  Url =mongoose.model("Url",UrlSchema)
 export {Url}
