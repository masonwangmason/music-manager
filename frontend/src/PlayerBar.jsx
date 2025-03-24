import playButton from "./assets/buttons/play.png";
import pauseButton from "./assets/buttons/pause.png";
import previousButton from "./assets/buttons/previous.png";
import nextButton from "./assets/buttons/next.png";
import repeatButton from "./assets/buttons/repeat.png";
import maxSoundIcon from "./assets/buttons/speaker.png";
import minSoundIcon from "./assets/buttons/mute.png";
import { useState, useRef, useEffect } from "react";

function PlayerBar({ songUrl, songName, collaboratorName, projectCover }) {
  const [playerState, setPlayerState] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [loopStatus, setLoopStatus] = useState(false);

  useEffect(() => {
    if (audioRef.current && songUrl) {
      // Reset the audio element completely
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      // Force a reload of the audio source
      audioRef.current.load();

      // Add a small delay before playing to ensure the audio is ready
      const playPromise = audioRef.current.play();

      // Handle the play promise to avoid uncaught promise errors
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlayerState(true);
            console.log("Audio started playing successfully");
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
            setPlayerState(false);
          });
      }
    }
  }, [songUrl]);

  // Add this effect to handle audio end
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        setPlayerState(false);
        setCurrentTime(0);
      };

      audio.addEventListener("ended", handleEnded);
      return () => {
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", () =>
        setDuration(audio.duration)
      );

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
      };
    }
  }, []);

  const togglePlayPause = () => {
    if (playerState) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlayerState(!playerState);
  };

  const handleLoopChange = () => {
    if (audioRef.current) {
      audioRef.current.loop = !loopStatus; // Toggle loop property
      setLoopStatus(!loopStatus);
      console.log(`Loop status: ${audioRef.current.loop}`); // Log to confirm loop status
    }
  };

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      {/* Player Bar - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-slate-950 text-white flex flex-row items-center justify-between p-4">
        {/* Song Info */}
        <div className="flex items-center gap-3">
          {projectCover && (
            <img
              src={projectCover}
              alt="Project Cover"
              className="w-18 h-18 ml-4 rounded-md"
            />
          )}
          <div>
            <h4 className="font-semibold text-left">{songName}</h4>
            <p className="text-sm text-gray-400 text-left">
              feat.{collaboratorName}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="w-2xl flex flex-col items-center justify-center">
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
                className="w-12 h-12 bg-white rounded-4xl border-2 border-slate-50 transition duration-200 hover:border-slate-500"
                src={playerState ? pauseButton : playButton}
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

          {/* Progress Slider */}
          <div className="flex items-center justify-center gap-2 w-full">
            <span className="text-sm">{formatTime(currentTime)}</span>{" "}
            {/* Time passed */}
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSliderChange}
              className="accent-red-500 w-96 mt-3 mb-2"
            />
            <span className="text-sm">{formatTime(duration)}</span>{" "}
            {/* Total duration */}
          </div>
        </div>

        {/* Volume & Extra Controls */}
        <div className="flex items-center gap-4">
          {/* Repeat */}
          <button onClick={handleLoopChange}>
            <img
              className={`w-8 h-8 p-2 ${loopStatus ? "bg-red-500" : "bg-slate-50"} rounded-4xl transition duration-200`}
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
            min="0"
            max="1"
            step="0.01"
            className="w-24 h-1 accent-red-500 bg-gray-600 rounded-full cursor-pointer"
            onChange={(e) => {
              audioRef.current.volume = e.target.value;
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

      {/* Always render the audio element but only set src when songUrl is available */}
      <audio
        ref={audioRef}
        src={songUrl || ""}
        preload="auto"
        onError={(e) => console.error("Audio error:", e)}
      />
    </>
  );
}

export default PlayerBar;
