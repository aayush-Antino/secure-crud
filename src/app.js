const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemsRouter = require('./routes/items');

// Load env variables
dotenv.config({ path: __dirname + '/../.env' }); // Adjust path to find .env in root

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());

// Routes
app.use('/items', itemsRouter);

// Health check
app.get('/', (req, res) => {
    res.send('Secure-CRUD API is running');
});

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

module.exports = app;
