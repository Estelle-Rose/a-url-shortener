const mongoose = require('mongoose');
const config = require('./config.js');
let mongoUri = config.mongoURI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true
        })
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
};
module.exports = connectDB