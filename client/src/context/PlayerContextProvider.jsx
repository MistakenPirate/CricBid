import React, { useState,useEffect } from "react";
import PlayerContext from "./PlayerContext";

const PlayerContextProvider = ({ children }) => {
  const [seq,setSeq] = useState(1)
  const [player, setPlayer] = useState({});
  const [players, setPlayers] = useState([]);
  const [active, setActive] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/players/${seq}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPlayer(data);
        // console.log(data);
        setActive(data.type);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
  
    fetchPlayer();

  }, [seq]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/players`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPlayers(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
  
    fetchPlayers();

  }, [players]);
  // console.log(players)


  const handleSell = () => {
    // Update currentIndex to get the next set of data
    setSeq(seq + 1);
  };

  useEffect(() => {    
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(`http://localhost:3000/api/getValidUsers`);
        if (!userResponse.ok) {
          throw new Error("Network response was not ok");
        }
  
        const userData = await userResponse.json();
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, [userData]);

  const isRadioActive = (value) => {
    return active.trim().toLowerCase() === value.trim().toLowerCase();
  };

  return (
    <PlayerContext.Provider value={{ player,players, setPlayer, isRadioActive,userData,seq,setSeq,handleSell}}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
