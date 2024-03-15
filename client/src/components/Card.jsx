import React ,{useState,useEffect,useContext} from "react";
import PlayerContext from "../context/PlayerContext";

export default function App() {

    const {player,isRadioActive} = useContext(PlayerContext)

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
        <div className="flex space-x-4 mb-6 text-sm font-medium">
        </div>
        <p className="text-xl text-blue-900">{player.rating} Points</p>
        <p className="text-xl text-blue-900">Base Price: {player.cost} </p>
      </div>
    </div>
  );
}
