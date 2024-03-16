import React, { useContext, useState, useEffect } from "react";
import PlayerContext from "../context/PlayerContext";

const Button = ({ PlayerFinalCost, selectedOption }) => {
  const { seq, setSeq } = useContext(PlayerContext);
  const [errorMessage, setErrorMessage] = useState("");

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
        console.error("Network response was not ok");
      }

      const data = await response.json();

      if (data.message) {
        setErrorMessage(data.message);

        // Set a timeout to clear the error message after 5 seconds
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      } else {
        console.log("POST request successful:", data);
        setSeq((prevSeq) => prevSeq + 1);
      }
    } catch (error) {
      console.error("Error during POST request ", error.message);
    }
  };

  const handleClick = () => {
    setErrorMessage(""); // Reset error message before making the request
    handlePostRequest();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <button
          className="font-sans bg-blue-400 text-white rounded p-2 mx-auto mt-4 hover:bg-indigo-400 text-3xl shadow-2xl"
          onClick={handleClick}
        >
          SELL
        </button>
      </div>
        {errorMessage && <p className="text-blue-200 mt-2 hover:text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Button;
