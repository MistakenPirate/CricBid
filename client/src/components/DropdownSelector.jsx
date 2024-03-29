import React, { useState } from "react";

const DropdownSelector = ({ options, onSelect,selectedOption, setSelectedOption}) => {

  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="text-blue-200 ">
      <label htmlFor="dropdown">Team Name:</label>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 m-2 border text-blue-900 rounded-md"
      />

      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
        className="p-2 m-2 border rounded-md"
      >
        <option value="">Select...</option>
        {filteredOptions.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default DropdownSelector;
