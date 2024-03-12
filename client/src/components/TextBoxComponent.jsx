import React, { useState, useContext } from 'react';
import PlayerContext from '../context/PlayerContext';

const TextBoxComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const {player} = useContext(PlayerContext)
  // const {userData} = useContext(PlayerContext)
  // console.log(userData)
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='text-blue-200 '>
      <label htmlFor="textBox">Bidding Amount:</label>
      <input
        type="text"
        id="textBox"
        placeholder={player.cost}
        value={inputValue}
        onChange={handleInputChange}
        className="p-2 m-2 border rounded-md"
      />

      {inputValue && <p>Your Team: {inputValue}</p>}
    </div>
  );
};

export default TextBoxComponent;
