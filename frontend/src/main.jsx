import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ProjectCard.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectOverview from './ProjectOverview.jsx'
import ProjectEditor from './ProjectEditor.jsx'
import SongEditor from './SongEditor.jsx'
import ProjectView from './ProjectView.jsx'
import PlayerBar from './PlayerBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectOverview />
    <ProjectView />
    <ProjectEditor />
    <SongEditor />
    <PlayerBar />
  </StrictMode>,
)
