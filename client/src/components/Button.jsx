import React, { useContext, useState, useEffect } from "react";
import PlayerContext from "../context/PlayerContext";

// const Button = (userId,setUserId) => {
const Button = ({ PlayerFinalCost, selectedOption }) => {
  const { seq, setSeq } = useContext(PlayerContext);
  const [postData, setPostData] = useState("");
  // console.log(PlayerFinalCost)
  // console.log(selectedOption)
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
      setSeq(seq + 1);
      const data = await response.json();
      console.log("POST request successful:", data);
    } catch (error) {
      console.error("Error during POST request ", error.message);
    }
  };

  useEffect(() => {
    if (postData) {
      handlePostRequest();
    }
  }, [postData]);

  // const handleOnClock = ()=> setPostData(1)
  return (
    <div className="flex justify-center">
      <button
        className="font-sans
      bg-blue-400
      text-white rounded p-2 mx-auto mt-4
      hover:bg-indigo-400 text-3xl shadow-2xl"
        onClick={() => setPostData(1)}
      >
        SELL
      </button>
    </div>
  );
};

export default Button;
