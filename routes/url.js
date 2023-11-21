import express from 'express';
import {Url} from '../models/Url.js';
import dotenv from "dotenv"
import shortid from 'shortid';
import utils from '../Util/utils.js';


const router =express.Router();
dotenv.config()

router.get("/all",async (req, res) => {
   try {
    const urls =await Url.find({},'shortUrl');
    const shortUrls =urls.map(url =>url.shortUrl);
    res.status(200).json(shortUrls);
   } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error occurd' });
   }
})




router.post("/short",async (req, res) => {
    console.log("HERE",req.body.url);
    const { origUrl } = req.body;
    const base = `http://localhost:8888/url`;
  
    const urlId = shortid.generate();
    if (utils.validateUrl(origUrl)) {
      try {
        let url = await Url.findOne({ origUrl });
        if (url) {
          res.json(url);
        } else {
          const shortUrl = `${base}/${urlId}`;
  
          url = new Url({
            origUrl,
            shortUrl,
            urlId,
            date: new Date(),
          });
  
          await url.save();
          console.log(url);
          res.json(url);
        }
      } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
      }
    } else {
      res.status(400).json('Invalid Original Url');
    }
})


router.get("/:urlId", async (req, res) => {
    try {
      const url = await Url.findOne({ urlId: req.params.urlId });
      console.log(url)
      if (url) {
        url.clicks++;
        url.save();
        return res.redirect(url.origUrl);
      } else res.status(404).json("Not found");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  });
 const urlRouter=router
 export {urlRouter}