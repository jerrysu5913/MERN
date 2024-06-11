const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(bodyParser.json());
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mern-blog')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
// Routes
const blogRoutes = require('./routers/blogs');
app.use('/api/blogs', blogRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});