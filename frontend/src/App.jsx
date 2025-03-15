import { Routes, Route } from "react-router-dom";
import ProjectOverview from "./ProjectOverview";
import ProjectView from "./ProjectView";

function App() {
    return (
        <Routes>
            <Route path="/" element={<ProjectOverview />} />
            <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
    );
}

export default App;
