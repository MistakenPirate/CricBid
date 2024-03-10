import React, { useState, useEffect } from 'react';

const TextBoxComponent = ({ propID }) => {
  const [inputValue, setInputValue] = useState('');
  const [player, setPlayer] = useState({});
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/players/${propID}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPlayer(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    if (propID) {
      console.log(data)
      fetchPlayer();
    }
  }, [propID]);

  return (
    <div className='text-blue-200'>
      <label htmlFor="textBox">Bidding Amount:</label>
      <input
        type="text"
        id="textBox"
        // placeholder={player.cost}
        placeholder='meow'
        value={inputValue}
        onChange={handleInputChange}
        className="p-2 m-2 border"
      />

      {inputValue && <p>Your Team: {inputValue}</p>}
    </div>
  );
};

export default TextBoxComponent;
