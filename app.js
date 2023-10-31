require("dotenv").config();

const express = require('express');
const { connectMongoDb } = require('./connection');
const bookRouter = require('./routes/book');

const app = express();

// Connection
connectMongoDb(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.error('MongoDB Connection Error:', error);
  });

// Middleware
app.use(express.json()); 

// Routes
app.use('/api/books', bookRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at port:${PORT}`));
