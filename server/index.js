const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes');
const userRoutes = require('./routes/userRoutes');
const auctionRoutes = require('./routes/auctionRoutes');

const app = express();


app.use(express.json());

mongoose.connect('mongodb://localhost:27017/cricbit', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api', playerRoutes);
app.use('/api', userRoutes);
app.use('/api', auctionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
