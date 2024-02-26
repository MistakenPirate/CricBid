const Player = require('../models/Player');

// Set the 'sold' status of a player to true (1)
// exports.sellPlayer = async (req, res) => {
//   try {
//     const playerId = req.params.id;
//     const updatedPlayer = await Player.findByIdAndUpdate(
//       playerId,
//       { sold: true },
//       { new: true }
//     );

//     if (updatedPlayer) {
//       res.json(updatedPlayer);
//     } else {
//       res.status(404).json({ message: 'Player not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// THE ABOVE IS IMPLEMENTED IN userControllers
