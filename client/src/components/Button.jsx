import React, { useContext } from "react";
import PlayerContext from "../context/PlayerContext";

// const Button = (userId,setUserId) => {
const Button = ({ PlayerFinalCost, selectedOption }) => {
  const { seq, handleSell } = useContext(PlayerContext);

  // postData = {
  //   userId: selectedOption,
  //   playerId: seq,
  //   cost: PlayerFinalCost,
  // };

  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  //   body: JSON.stringify({
  //     userId: selectedOption,
  //     playerId: seq,
  //     cost: PlayerFinalCost,
  //     // userId: 'team',
  //     // playerId: 1,
  //     // cost: 50000,
  //   }),
  // }

  

  const handlePostRequest = async () => {
    try {
      // const response = await fetch("https://localhost:3000/api/buyPlayer",options );

      const response = await fetch("http://localhost:3000/api/buyPlayer", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          userId: selectedOption,
          playerId: seq,
          cost: PlayerFinalCost,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      handleSell();

      const data = await response.json();
      console.log("POST request successful:", data);
    } catch (error) {
      console.error("Error during POST request ", error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="font-sans
      bg-blue-400
      text-white rounded p-2 mx-auto mt-4
      hover:bg-indigo-400 text-3xl shadow-2xl"
        onClick={handlePostRequest}
      >
        SELL
      </button>
    </div>
  );
};

export default Button;
