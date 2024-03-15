import React, { useState, useContext } from 'react';
import PlayerContext from '../context/PlayerContext';

const TextBoxComponent = ({PlayerFinalCost, setPlayerFinalCost}) => {
  // const [PlayerFinalCost, setPlayerFinalCost] = useState('');
  const {player} = useContext(PlayerContext)
  // const {userData} = useContext(PlayerContext)
  // console.log(userData)
  const handleInputChange = (event) => {
    setPlayerFinalCost(event.target.value);
  };

  return (
    <div className='text-blue-200 '>
      <label htmlFor="textBox">Bidding Amount:</label>
      <input
        type="text"
        id="textBox"
        placeholder={player.cost}
        value={PlayerFinalCost}
        onChange={handleInputChange}
        className="p-2 m-2 border rounded-md"
      />
      {/* {console.log(PlayerFinalCost)} */}
      {PlayerFinalCost && <p>Your Team: {PlayerFinalCost}</p>}
    </div>
  );
};

export default TextBoxComponent;
