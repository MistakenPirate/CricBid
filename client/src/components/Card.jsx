import React, { useState, useEffect, useContext } from "react";
import PlayerContext from "../context/PlayerContext";

export default function App() {
  const { player,players, isRadioActive, seq, setSeq } = useContext(PlayerContext);
  // Remove the 'button' state
  // const [button, setButton] = useState("");

  // Update the seq state directly when clicking "Prev" or "Next" button
  const handlePrev = () => {
    setSeq(prevSeq => prevSeq - 1); // Use callback version of setSeq
  };

  const handleNext = () => {
    setSeq(prevSeq => prevSeq + 1); // Use callback version of setSeq
  };
// console.log(players)
  const handleFirstUnsoldPlayer = () => {
    let nextSeq = 1;
    while (nextSeq <= players.length) {
      const nextPlayer = players[nextSeq - 1];
      console.log(nextPlayer.sold)
      if (!nextPlayer.sold) {
        setSeq(() => nextSeq); // Use callback version of setSeq
        break;
      }
      nextSeq++;
    }
  };

  const handleNextUnsoldPlayer = () => {
    let nextSeq = seq + 1; // Start from the next player
    let foundUnsoldPlayer = false;
  
    // Loop through players starting from the next player
    while (nextSeq <= players.length) {
      const nextPlayer = players[nextSeq - 1];
      if (!nextPlayer.sold) {
        setSeq(nextSeq); // Update sequence to the next unsold player
        foundUnsoldPlayer = true;
        break;
      }
      nextSeq++;
    }
  
    // If no unsold player is found after the current one, loop back to the first unsold player
    if (!foundUnsoldPlayer) {
      nextSeq = 1; // Start from the beginning
      while (nextSeq < seq) {
        const nextPlayer = players[nextSeq - 1];
        if (!nextPlayer.sold) {
          setSeq(nextSeq); // Update sequence to the first unsold player
          break;
        }
        nextSeq++;
      }
    }
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
          <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="bt"
                checked
              />
               <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  isRadioActive("bt") ? "bg-slate-900 text-white font-semibold" : " text-blue-900"}`} >
                BT
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="bl" />
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  isRadioActive("bl") ? "bg-slate-900 text-white font-semibold" : " text-blue-900"}`} >
                BL
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="al" />
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  isRadioActive("al") ? "bg-slate-900 text-white font-semibold" : " text-blue-900"}`} >
                AL
              </div>
            </label>
            <label>
              
              <input className="sr-only peer" name="size" type="radio" value="" />
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center  ${
                    isRadioActive("wk") ? "bg-slate-900 text-white font-semibold" : " text-blue-900"}`} >
                WK
              </div>
            </label>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium"></div>
        <p className="text-3xl text-blue-900">{player.rating} Points</p>
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
          <button
            className="font-sans bg-blue-900 text-white rounded p-2 mx-auto mt-4 hover:bg-blue-700 text-md shadow-md"
            onClick={handleNextUnsoldPlayer} // Update seq for next player
          >
            Unsold
          </button>
        </div>
      </div>
    </div>
  );
}
