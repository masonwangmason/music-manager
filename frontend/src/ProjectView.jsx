import { useParams } from "react-router-dom";
import sampleProjects from "../../db/sampleProjects";

function ProjectView() {
    const { id } = useParams(); // Get the project ID from the URL
    const project = sampleProjects[Number(id)]; // ✅ Convert ID to number to match array index

    if (!project) {
        return <p className="text-white text-center">⚠ Project not found!</p>;
    }

    return (
        <>  
            <section className="flex flex-col items-start my-5 w-full max-w-5xl mx-auto">
                <div className="w-full mb-4 text-left">
                    <p className="text-slate-50 font-semibold text-2xl">Project View</p>
                </div>

                <div className="flex flex-row gap-10 w-full">
                    {/* Left-Aligned Content Box */}
                    <div className="flex flex-col items-start w-1/3">
                        <h2 className="font-medium mb-1 text-slate-50">Project Cover</h2>
                        <img className="max-w-80 mb-4 mt-2" src={project.project_cover} alt="project-cover" />

                        <h2 className="font-medium mb-1 text-slate-50">Project Name</h2>
                        <p className="font-light mb-4 text-slate-50">{project.project_name}</p>

                        <h2 className="font-medium mb-1 text-slate-50">Project Type</h2>
                        <p className="font-light mb-4 text-slate-50">{project.project_type}</p>

                        <h2 className="font-medium mb-1 text-slate-50">Project Description</h2>
                        <p className="font-light mb-4 text-slate-50 text-left">{project.project_description}</p>

                        <h2 className="font-medium mb-1 text-slate-50">Project Status</h2>
                        <p className="font-light mb-4 text-slate-50">
                            {project.project_status ? "Complete" : "In Progress"}
                        </p>

                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectView;
