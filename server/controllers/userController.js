const User = require('../models/User');
const Player = require('../models/Player');

// Deduct the budget of a user when they buy a player
exports.buyPlayer = async (req, res) => {
  try {
    const userId = req.params.userId;
    const playerId = req.params.playerId;

    const user = await User.findById(userId);
    const player = await Player.findById(playerId);

    if (!user || !player) {
      return res.status(404).json({ message: 'User or player not found' });
    }

    if (player.sold) {
      return res.status(400).json({ message: 'Player is already sold' });
    }

    if (user.budget < player.cost) {
      return res.status(400).json({ message: 'Insufficient budget to buy the player' });
    }

    user.budget -= player.cost;

    // Update the user's budget
    const updatedUser = await user.save();

    // Set the 'sold' status of the player to true
    const updatedPlayer = await Player.findByIdAndUpdate(
      playerId,
      { sold: true },
      { new: true }
    );

    res.json({ user: updatedUser, player: updatedPlayer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
