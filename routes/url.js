const express = require('express');
const router = express.Router();
const shortId = require('shortid');
const validUrl = require('valid-url');
const config = require('config');
const Url = require('../models/Url');

// @route POST /api/url/shorten
// @desc Create a short url

router.post('/shorten', async(req, res) => {
    const { longUrl } = req.body
    const baseUrl = config.get('baseUrl')

    // Check base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url')
    }
    // Create url code
    const urlCode = shortId.generate();

     // Check long url
    if (validUrl.isUri(longUrl)) {
         try {
             let url = await Url.findOne({ longUrl })
             if (url) {
                 res.json(url)
             } else {
                 const shortUrl = baseUrl + '/' + urlCode
                 url = new Url({
                     longUrl,
                     shortUrl,
                     urlCode,
                     date: new Date()
                 });
                 await url.save();
                 res.json(url)
             }

         } catch (error) {
             console.error(error);
             res.status(500).json('Server error')
             
         }
    } else {
        return res.status(401).json('Invalid long url')
        
    }
})
module.exports = router;