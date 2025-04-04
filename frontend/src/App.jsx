import { Routes, Route } from "react-router-dom";
import ProjectOverview from "./ProjectOverview";
import ProjectView from "./ProjectView";
import BeatCollectionView from "./BeatCollection";

function App({ onPlaySong }) {
  return (
    <Routes>
      <Route path="/" element={<ProjectOverview />} />
      <Route
        path="/project/:id"
        element={<ProjectView onPlaySong={onPlaySong} />}
      />
      <Route
        path="/beat"
        element={<BeatCollectionView />}
      />
    </Routes>
  );
}

export default App;
