import React, { useState, useEffect } from "react";
// import { fetchPlayers} from "./api";
import Card from "./components/Card";
import Button from "./components/Button";
import DropdownSelector from "./components/DropdownSelector";
import TextBoxComponent from "./components/TextBoxComponent";
import PlayerList from "./components/PlayerList";

export const Context = React.createContext();

const App = () => {
  const [players, setPlayers] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  const [options, setOptions] = useState([]);

  const id = '65e99edb0bf727db92595f27';

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
    // Add any other logic you want to perform when an option is selected
  };

  // useEffect(() => {
  //   // Fetch players and leaderboard data from your backend
  //   fetchPlayers()
  //     .then((response) => setPlayers(response.data))
  //     .catch((error) => console.error("Error fetching players:", error));

  //   // Fetch leaderboard data
  //   // You may need to implement a separate API endpoint for fetching leaderboard data
  //   // and update the setLeaderboard state accordingly
  //   // Example: fetchLeaderboard().then(response => setLeaderboard(response.data));
  // }, []);

  // const handleBuyPlayer = (userId, playerId) => {
  //   // Implement buying player logic here
  //   // You may need to handle user authentication and update the UI accordingly
  //   buyPlayer(userId, playerId)
  //     .then((response) => {
  //       console.log("Player bought successfully:", response.data);

  //       // After buying the player, update the leaderboard
  //       // Fetch leaderboard data again and update the state
  //       // Example: fetchLeaderboard().then(response => setLeaderboard(response.data));
  //     })
  //     .catch((error) => console.error("Error buying player:", error));
  // };

  return (
    // <Context.Provider value = {[id]}>
    <div className="bg-blue-900 w-[100vw] h-[100vh] overflow-y-hidden">
      <div className="container m-auto p-4">
        <div className="grid grid-cols-7 gap-8 ">
          {/* Auction Part */}
          <div className="col-span-5">
            <h1 className="text-3xl text-center font-bold mb-4 text-blue-200">
              IPL Auction
            </h1>
            <div className="h-[10vh]"></div>

            <div className="flex justify-center">
              <Card id={id}/>
            </div>
            <div className="h-[10vh]"></div>
            <div className="flex justify-center space-x-[20px]">
              <DropdownSelector options={options} onSelect={handleSelect} />
              <TextBoxComponent />
            </div>
            <div className="h-[10vh]"></div>
            <Button />
          </div>

          {/* Leaderboard */}
          <div className="col-span-2 bg-blue-400 h-[98vh]">
            <h1 className="text-3xl font-bold mb-4 text-center text-bg-900">
              Leaderboard
            </h1>

            <PlayerList />

            {/*  <ul>
              {leaderboard.map((user, index) => (
                <li key={user._id} className="mb-2">
                  {index + 1}. {user.name} - Budget: {user.budget}
                </li>
              ))} 
            </ul> */}
          </div>
        </div>
      </div>
    </div>
    // </Context.Provider>
  );
};

export default App;
