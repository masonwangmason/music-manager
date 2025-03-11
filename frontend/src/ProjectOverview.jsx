import ProjectCard from "./ProjectCard";
import sampleProjects from "./sampleProjects";

function ProjectOverview() {
    return (
        <>  
            <section className="flex flex-col items-center my-5">
                {/* Header Section */}
                <div className="flex flex-row items-center justify-between w-full max-w-5xl mb-4">
                    <p className="project-overview-heading text-slate-50 font-semibold text-2xl">
                        Projects Overview
                    </p>
                    <button className="font-semibold border border-slate-50 text-slate-50 py-1 px-2.5 rounded-md hover:bg-slate-50 hover:text-slate-950">
                        +
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-4 gap-3">
                    {sampleProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project_name={project.project_name}
                            project_cover={project.project_cover}
                            project_type={project.project_type}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProjectOverview;
