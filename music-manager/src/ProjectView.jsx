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

                <div className="flex flex-row gap-10 w-full">
                    {/* Left-Aligned Content Box */}
                    <div className="flex flex-col items-start w-1/3">
                        <h2 className="font-medium mb-1 text-slate-50">Project Cover</h2>
                        <img className="max-w-80 mb-4 mt-2" src={cover1} alt="project-cover" />

                        <h2 className="font-medium mb-1 text-slate-50">Project Name</h2>
                        <p className="font-light mb-4 text-slate-50">Legends Never Die</p>

                        <h2 className="font-medium mb-1 text-slate-50">Project Type</h2>
                        <p className="font-light mb-4 text-slate-50">Album/EP</p>

                        <h2 className="font-medium mb-1 text-slate-50">Project Description</h2>
                        <p className="font-light mb-4 text-slate-50 break-words text-left max-w-full">
                            Legends Never Die is a powerful tribute to Juice WRLD’s legacy, blending raw emotion with his signature melodic flow. Released posthumously, the album dives deep into themes of love, heartbreak, mental health, and perseverance, offering an intimate look into his thoughts and struggles. With heartfelt lyrics and immersive production, Legends Never Die cements Juice WRLD’s place as a voice for a generation, proving that his impact will live on forever.
                        </p>

                        <h2 className="font-medium mb-1 text-slate-50">Project Status</h2>
                        <p className="font-light mb-4 text-slate-50">In Progress</p>
                    </div>

                    {/* Right-Aligned Content (Songs) */}
                    <div className="flex flex-col items-start w-2/3 gap-2">
                        <div className="flex justify-between w-full items-center rounded-lg">
                            <h2 className="font-semibold text-white">Song List</h2>
                            <button className="text-white text-sm font-medium rounded-md transition duration-200 p-1 hover:bg-amber-50 hover:text-black">
                                + New Song
                            </button>
                        </div>

                
                        <SongCard />
                        <SongCard />
                        <SongCard />
                        <SongCard />
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
