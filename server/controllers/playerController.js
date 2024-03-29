const Player = require('../models/Player');


exports.getPlayerById = async (req, res) => {
  const playerId = req.params.id;

  try {
    const player = await Player.findOne({ sequence: playerId });
    // const player = await Player.findById(playerId);

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    res.json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getPlayerBySeq = async (req, res) => {
  const seqValue = req.params.seq; // Assuming 'seq' is in the URL parameters

  try {
    const player = await Player.findOne({ seq: seqValue });

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    res.json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
