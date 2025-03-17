import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { useState, useEffect } from "react";
import ProjectEditor from "./ProjectEditor";

function ProjectView() {
  const { id } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate(); // Hook for navigation
  const [project, setProject] = useState(null);
  const [showProjectEditor, setShowProjectEditor] = useState(false);
  const [projects, setProjects] = useState([]);

  // Fetch project from the server
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects`);
        const data = await response.json();
        console.log(data); // Log the data to verify the structure
        const fetchedProject = data.find(proj => proj.id === Number(id)); // Use the id property
        if (fetchedProject) {
          setProject(fetchedProject);
        } else {
          console.error("Project not found");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [id]);


  // Handle updating a project
  const handleUpdateProject = (updatedProject) => {
    const updatedProjects = projects.map((proj) =>
      proj.id === updatedProject.id ? updatedProject : proj
    );
    setProjects(updatedProjects);
    setProject(updatedProject);
    console.log('Project updated:', updatedProject);
  };

  // Handle deleting a project with confirmation
  const handleDeleteProject = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) {
      return; // Exit if the user cancels the deletion
    }

    try {
      const response = await fetch(`/api/projects/${project.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Project deleted:', project.id);
        navigate(-1); // Navigate back to the project overview after deletion
      } else {
        console.error('Failed to delete project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  if (!project) {
    return <p className="text-white text-center">⚠ Project not found!</p>;
  }

  return (
    <>
      <section className="flex flex-col items-start my-5 w-full max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          className="bg-slate-950 text-white hover:bg-slate-50 hover:text-black font-medium py-1 mb-2 rounded-md transition duration-200"
          onClick={() => navigate(-1)} // Navigate back to the previous page
        >
          Back to Projects Overview
        </button>
        <div className="w-full mb-4 text-left">
          <p className="text-slate-50 font-semibold text-2xl">Project View</p>
        </div>

        <div className="flex flex-row gap-10 w-full">
          {/* Left-Aligned Content Box */}
          <div className="flex flex-col items-start w-1/3">
            <h2 className="font-medium mb-1 text-slate-50">Project Cover</h2>
            <img
              className="w-80 h-80 mb-4 mt-2"
              src={project.project_cover}
              alt="project-cover"
            />

            <h2 className="font-medium mb-1 text-slate-50">Project Name</h2>
            <p className="font-light mb-4 text-slate-50">
              {project.project_name}
            </p>

            <h2 className="font-medium mb-1 text-slate-50">Project Type</h2>
            <p className="font-light mb-4 text-slate-50">
              {project.project_type}
            </p>

            <h2 className="font-medium mb-1 text-slate-50">
              Project Description
            </h2>
            <p className="font-light mb-4 text-slate-50 text-left">
              {project.project_description}
            </p>

            <h2 className="font-medium mb-1 text-slate-50">Project Status</h2>
            <p className="font-light mb-4 text-slate-50">
              {project.project_status ? "Complete" : "In Progress"}
            </p>

            <button
              className="bg-slate-950 text-white hover:bg-slate-50 hover:text-black font-medium py-1 px-2 border-2 border-slate-50 rounded-md transition duration-200"
              onClick={() => setShowProjectEditor(true)}
            >
              Edit
            </button>
          </div>
        </div>
      </section>

      {/* Project Editor Popup */}
      {showProjectEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black border border-slate-50 rounded-lg p-6 w-full max-w-3xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-50">
                Edit Project Info
              </h2>
              <button
                onClick={() => setShowProjectEditor(false)}
                className="text-slate-50 hover:text-slate-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ProjectEditor
              project={project} // Pass the current project data as a prop
              onClose={() => setShowProjectEditor(false)}
              onSave={handleUpdateProject}
              onDelete={handleDeleteProject} // Pass the delete handler
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectView;
