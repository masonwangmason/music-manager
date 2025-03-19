import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PlayerBar from "./PlayerBar";

function Main() {
  const [currentSongUrl, setCurrentSongUrl] = useState(""); // State to hold the current song URL

  return (
    <BrowserRouter> 
      <div className="app-container">
        {/* Main Content */}
        <div className="main-content pb-20"> 
          <App onPlaySong={setCurrentSongUrl} /> {/* Pass setCurrentSongUrl to App */}
        </div>

        {/* Player Bar */}
        <PlayerBar songUrl={currentSongUrl} /> {/* Pass currentSongUrl to PlayerBar */}
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

