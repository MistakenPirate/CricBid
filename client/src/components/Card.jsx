import React from "react";

export default function App() {
  return (
    <div className="flex justify-center font-sans shadow-lg m-8 bg-blue-400">
      <div className="flex-none w-48 relative">
        <img
          src="/classNameic-utility-jacket.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-indigo-900">
            Name
          </h1>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm">
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="xs"
                checked
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-900 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                BT
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="s" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-900 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                BL
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="m" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-900 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                AL
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="l" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-900 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                WK
              </div>
            </label>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
        </div>
        <p className="text-xl text-blue-900">Points</p>
      </div>
    </div>
  );
}
