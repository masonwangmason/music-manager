import { Routes, Route } from "react-router-dom";
import ProjectOverview from "./ProjectOverview";
import ProjectView from "./ProjectView";

function App({ onPlaySong }) { // Accept onPlaySong as a prop
  return (
    <Routes>
      <Route path="/" element={<ProjectOverview />} />
      <Route path="/project/:id" element={<ProjectView onPlaySong={onPlaySong} />} /> {/* Pass onPlaySong to ProjectView */}
    </Routes>
  );
}

export default App;
