const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json({ extended: false }));
const PORT = 5000;

// Define routes
app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));