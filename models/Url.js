const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {type: String, defulat: Date.now}
})

module.exports = mongoose.model('Url', urlSchema);