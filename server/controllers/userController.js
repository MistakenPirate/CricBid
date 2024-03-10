const User = require('../models/User');
const Player = require('../models/Player');

//when user buys a player
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
    user.points += player.rating; 
    switch (player.type) {
      case 'bt':
        user.bt = true;
        break;
      case 'bl':
        user.bl = true;
        break;
      case 'al':
        user.al = true;
        break;
      case 'wk':
        user.wk = true;
        break;
    }

    // Update the user's paramters
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

exports.getAllUsers = async(req,res)=>{
  try {
    // const users = await User.find();
    const users = await User.find();
    
    // console.log(users)
    res.json(users);
    
  } catch (error) { res.status(500).json({message:error.message})
  
}
};

exports.getValidUsers = async(req,res)=>{
  try {
    const validUsers = await User.find({
      al: true,
      bt: true,
      bl: true,
      wk: true,
    });
    
    // console.log(validUsers)
    res.json(validUsers);
    
  } catch (error) { res.status(500).json({message:error.message})
    
  }
}

