const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const playerRoutes = require('./routes/playerRoutes');
const userRoutes = require('./routes/userRoutes');
// const auctionRoutes = require('./routes/auctionRoutes');

const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/cricbit');

// Routes
app.use('/api', playerRoutes);
app.use('/api', userRoutes);
// app.use('/api', auctionRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
