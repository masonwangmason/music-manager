import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ProjectCard.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectOverview from './ProjectOverview.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectOverview />
  </StrictMode>,
)
