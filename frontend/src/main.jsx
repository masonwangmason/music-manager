import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PlayerBar from "./PlayerBar";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter> 
        <div className="app-container">
            {/* Main Content */}
            <div className="main-content pb-20"> 
                <App />
            </div>

            {/* Player Bar */}
            <PlayerBar />
        </div>
    </BrowserRouter>
);

