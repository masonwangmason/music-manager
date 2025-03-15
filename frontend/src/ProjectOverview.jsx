import { useNavigate } from "react-router-dom";
import { useState } from "react";
import sampleProjects from "../../db/sampleProjects";
import ProjectCreator from "./ProjectCreator";

function ProjectOverview() {
    const navigate = useNavigate(); // Hook for navigation
    const [showProjectCreator, setShowProjectCreator] = useState(false);
    const [projects, setProjects] = useState(sampleProjects);
    
    // Handle saving a new project
    const handleSaveProject = (newProject) => {
        // Add the new project to the projects list
        const updatedProjects = [...projects, newProject];
        setProjects(updatedProjects);
        
        // In a real application, you would save this to your database
        // For now, we're just updating the state
        console.log('New project saved:', newProject);
        console.log('Updated projects list:', updatedProjects);
        
        // You could also navigate to the new project
        // navigate(`/project/${updatedProjects.length - 1}`);
    };

    return (
        <>  
            <section className="flex flex-col items-center my-5">
                {/* Header Section */}
                <div className="flex flex-row items-center justify-between w-full max-w-5xl mb-4">
                    <p className="project-overview-heading text-slate-50 font-semibold text-2xl">
                        Projects Overview
                    </p>
                    <button 
                        className="bg-slate-950 text-white hover:bg-slate-50 hover:text-black font-medium py-1 px-2 rounded-md flex items-center transition duration-200"
                        onClick={() => setShowProjectCreator(true)}
                    >
                        Create New Project +
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-4 gap-3 max-w-5xl">
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            className="project-button hover:scale-105 transition duration-200"
                            onClick={() => navigate(`/project/${index}`)}
                        >
                            <img src={project.project_cover} alt={project.project_name} className="project-cover mb-3" />
                            <h3 className="font-medium">{project.project_name}</h3>
                            <p className="font-light">{project.project_type}</p>
                        </button>
                    ))}
                </div>
            </section>
            
            {/* Project Creator Popup */}
            {showProjectCreator && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-black border border-slate-50 rounded-lg p-6 w-full max-w-3xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-slate-50">Create New Project</h2>
                            <button 
                                onClick={() => setShowProjectCreator(false)}
                                className="text-slate-50 hover:text-slate-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ProjectCreator 
                            onClose={() => setShowProjectCreator(false)} 
                            onSave={handleSaveProject}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectOverview;
