import React, { useState } from 'react';

const TextBoxComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="textBox">Bidding Amount:</label>
      <input
        type="text"
        id="textBox"
        value={inputValue}
        onChange={handleInputChange}
        className="p-2 m-2 border"
      />

      {inputValue && <p>Your Team: {inputValue}</p>}
    </div>
  );
};

export default TextBoxComponent;
