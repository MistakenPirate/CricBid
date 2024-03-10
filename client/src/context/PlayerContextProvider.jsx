import React, { useState,useEffect } from "react";
import PlayerContext from "./PlayerContext";

const PlayerContextProvider = ({ children }) => {
  // const user = useContext(PlayerContext);

//   const id = "";
  const [id,setId] = useState("65e99edb0bf727db92595f27")
  const [player, setPlayer] = useState({});
  const [active, setActive] = useState("");

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/players/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPlayer(data);
        console.log(data);
        setActive(data.type);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayer();
  }, []);

  const isRadioActive = (value) => {
    return active.trim().toLowerCase() === value.trim().toLowerCase();
  };

  return (
    <PlayerContext.Provider value={{ player, setPlayer, isRadioActive }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
