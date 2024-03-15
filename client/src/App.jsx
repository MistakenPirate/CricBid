import React, { useState, useEffect, useContext } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import PlayerList from "./components/PlayerList";
import DropdownSelector from "./components/DropdownSelector";
import TextBoxComponent from "./components/TextBoxComponent";
import PlayerContext from "./context/PlayerContext";
// import PlayerContext from "./context/PlayerContext";

const App = () => {
  const [options, setOptions] = useState([]);
  //Player final cost (cost)
  const [PlayerFinalCost, setPlayerFinalCost] = useState("");
  //Selection option of the user (User.name)
  const [selectedOption, setSelectedOption] = useState("");
  //Selection of player (Player.sequence) can be done from state
  
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getAllUsers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  // useEffect(() => {
  //   // Any logic dependent on seq can go here
  // }, [seq]); 
  // console.log(PlayerFinalCost)
  return (
    <div className="bg-blue-900 w-[100vw] h-[100vh] overflow-y-hidden">
      <div className="container m-auto p-4">
        <div className="grid grid-cols-7 gap-8 ">
          {/* Auction Part */}
          <div className="col-span-5">
            <h1 className="text-3xl text-center font-bold text-blue-200">
              IPL Auction
            </h1>
            <div className="h-[10vh]"></div>

            <div className="flex justify-center">
              <Card />
            </div>
            <div className="h-[10vh]"></div>
            <div className="flex justify-center space-x-[20px]">
              <DropdownSelector
                options={options}
                onSelect={handleSelect}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
              <TextBoxComponent
                PlayerFinalCost={PlayerFinalCost}
                setPlayerFinalCost={setPlayerFinalCost}
              />
            </div>
            <div className="h-[10vh]"></div>
            <Button
              PlayerFinalCost={PlayerFinalCost}
              selectedOption={selectedOption}
            />
          </div>

          {/* Leaderboard */}
          <div className="col-span-2 bg-blue-400 h-[98vh] rounded-xl">
            <h1 className="text-3xl font-bold my-5 text-center text-bg-900">
              Leaderboard
            </h1>

            <PlayerList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
