const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bidAmount: Number,
});

module.exports = mongoose.model('Auction', auctionSchema);
