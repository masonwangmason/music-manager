import ProjectCard from "./ProjectCard";

function ProjectOverview(){
    return(
        <>  
            <section className="flex flex-col items-center my-5">
                <div className="flex flex-row items-center justify-between w-full max-w-5xl mb-4">
                    <p className="project-overview-heading text-slate-50 font-semibold text-2xl">Projects Overview</p>
                    <button className="font-semibold border-1 border-slate-50 text-slate-50 py-1 px-2.5 rounded-md hover:bg-slate-500">+</button>
                </div>
                <div className="w-max grid grid-cols-4 gap-3">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </section>
        </>
    )
}

export default ProjectOverview;