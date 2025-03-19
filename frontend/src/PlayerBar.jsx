import albumCover from "./assets/cover1.png";
import playButton from "./assets/buttons/play.png";
import pauseButton from "./assets/buttons/pause.png";
import previousButton from "./assets/buttons/previous.png";
import nextButton from "./assets/buttons/next.png";
import repeatButton from "./assets/buttons/repeat.png";
import maxSoundIcon from "./assets/buttons/speaker.png";
import minSoundIcon from "./assets/buttons/mute.png";
import { useState, useRef, useEffect } from "react";

function PlayerBar({ songUrl }) { // Accept songUrl as a prop
  const [playerState, setPlayerState] = useState(false); // false for paused, true for playing
  const audioRef = useRef(null); // Reference to the audio element

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Load the new song URL
    }
  }, [songUrl]);

  const togglePlayPause = () => {
    if (playerState) {
      audioRef.current.pause(); // Pause the audio
    } else {
      audioRef.current.play(); // Play the audio
    }
    setPlayerState(!playerState); // Toggle between play and pause
  };

  return (
    <>
      {/* Player Bar - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-slate-950 text-white flex items-center justify-between p-4">
        {/* Song Info */}
        <div className="flex items-center gap-3">
          <img
            src={albumCover}
            alt="Album Cover"
            className="w-12 h-12 rounded-md"
          />
          <div>
            <h4 className="text-sm font-semibold">Song Title</h4>
            <p className="text-xs text-gray-400">Artist Name</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 text-xl">
          {/* Previous */}
          <button>
            <img
              className="w-10 h-10 bg-white rounded-4xl border-2 border-slate-50 transition duration-200 hover:border-slate-500"
              src={previousButton}
              alt="previous-button"
            />
          </button>
          {/* Play/Pause Toggle */}
          <button onClick={togglePlayPause}>
            <img
              className="w-10 h-10 bg-white rounded-4xl border-2 border-slate-50 transition duration-200 hover:border-slate-500"
              src={playerState ? pauseButton : playButton} // Toggle image based on state
              alt={playerState ? "pause-button" : "play-button"}
            />
          </button>
          {/* Next */}
          <button>
            <img
              className="w-10 h-10 bg-white rounded-4xl border-2 border-slate-50 transition duration-200 hover:border-slate-500"
              src={nextButton}
              alt="next-button"
            />
          </button>
        </div>

        {/* Volume & Extra Controls */}
        <div className="flex items-center gap-4">
          {/* Repeat */}
          <button>
            <img
              className="w-10 h-10 p-2 bg-white rounded-4xl border-2 border-slate-50 transition duration-200 hover:border-slate-500"
              src={repeatButton}
              alt="repeat-button"
            />
          </button>
          
          {/* No Volume Icon */}
          <img
            className="w-4 h-4 invert"
            src={minSoundIcon}
            alt="min-sound-icon"
          />

          {/* Volume Slider */}
          <input
            type="range"
            className="w-24 h-1 bg-gray-600 rounded-full cursor-pointer"
            onChange={(e) => {
              audioRef.current.volume = e.target.value / 100; // Adjust volume
            }}
          />{" "}

          {/* Max Volume Icon */}
          <img
            className="w-4 h-4 invert"
            src={maxSoundIcon}
            alt="max-sound-icon"
          />
        </div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={songUrl} preload="auto" />
    </>
  );
}

export default PlayerBar;
