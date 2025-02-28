import cover1 from "./assets/cover1.png";
import SongCard from "./SongCard";

function ProjectView() {
    return (
        <>  
            <section className="flex flex-col items-start my-5 w-full max-w-5xl mx-auto">
                {/* Title left-aligned */}
                <div className="w-full mb-4 text-left">
                    <p className="text-slate-50 font-semibold text-2xl">Project View</p>
                </div>

                <div className="flex flex-row gap-15">
                    {/* Left-Aligned Content Box */}
                    <div className="flex flex-col items-start w-full">
                        <h2 className="font-medium mb-1 text-slate-50">Project Cover</h2>
                        <img className="max-w-80 mb-4" src={cover1} alt="project-cover" />

                        <h2 className="font-medium mb-1 text-slate-50">Project Name</h2>
                        <p className="font-light mb-4 text-slate-50">Legends Never Die</p>

                        <h2 className="font-medium mb-1 text-slate-50">Project Type</h2>
                        <p className="font-light mb-4 text-slate-50">Album/EP</p>

                        <h2 className="font-medium mb-1 text-slate-50">Project Description</h2>
                        <p className="font-light mb-4 text-slate-50">jjjjjdi</p>
                        
                        <h2 className="font-medium mb-1 text-slate-50">Project Status</h2>
                        <p className="font-light mb-4 text-slate-50">In Progress</p>
                    </div>

                    <div className="flex flex-col items-start w-full gap-2">
                        <SongCard />
                        <SongCard />
                        <SongCard />
                        <SongCard />
                    </div>
                </div>
                
            </section>
        </>
    );
}

export default ProjectView;
