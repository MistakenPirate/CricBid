import React, { useState, useEffect, useContext } from "react";
import PlayerContext from "../context/PlayerContext";

export default function App() {
  const { player, isRadioActive, seq, setSeq } = useContext(PlayerContext);
  // Remove the 'button' state
  // const [button, setButton] = useState("");

  // Update the seq state directly when clicking "Prev" or "Next" button
  const handlePrev = () => {
    setSeq(prevSeq => prevSeq - 1); // Use callback version of setSeq
  };

  const handleNext = () => {
    setSeq(prevSeq => prevSeq + 1); // Use callback version of setSeq
  };

  useEffect(() => {
    // You can add any additional logic here if needed
  }, [seq]);

  // console.log(player.imageURL)
  return (
    <div className="flex justify-center font-sans shadow-lg m-8 rounded-3xl bg-blue-400 w-[40vw]">
      <div className="flex-none w-48 relative">
        <img
          src={player.imageURL}
          alt=""
          className="absolute inset-0 w-full h-full rounded-3xl object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-indigo-900">
            {player.name}
          </h1>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm">
            {/* Radio buttons */}
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium"></div>
        <p className="text-xl text-blue-900">{player.rating} Points</p>
        <p className="text-xl text-blue-900">Base Price: {player.cost} </p>
        <div className="flex justify-between">
          {/* Prev Button */}
          <button
            className="font-sans bg-blue-900 text-white rounded p-2 mx-auto mt-4 hover:bg-blue-700 text-md shadow-md"
            onClick={handlePrev} // Update seq for previous player
          >
            Prev
          </button>
          {/* Next Button */}
          <button
            className="font-sans bg-blue-900 text-white rounded p-2 mx-auto mt-4 hover:bg-blue-700 text-md shadow-md"
            onClick={handleNext} // Update seq for next player
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
