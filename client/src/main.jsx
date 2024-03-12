import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PlayerContextProvider from "./context/PlayerContextProvider.jsx";
import PlayerContext from "./context/PlayerContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </React.StrictMode>
);
