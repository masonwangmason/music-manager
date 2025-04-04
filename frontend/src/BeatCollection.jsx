import BeatCard from "./BeatCard";
import { useEffect, useState } from "react";

function BeatCollectionView() {
  const [beats, setBeats] = useState([]);

  // Fetch beats from the server
  useEffect(() => {
    const fetchBeats = async () => {
      try {
        const response = await fetch("/api/beats");
        const data = await response.json();
        setBeats(data);
      } catch (error) {
        console.error("Error fetching beats:", error);
      }
    };
    fetchBeats();
  }, [])

  return (
    <>
      <section className="flex flex-col items-center my-5">
        {/* Header Section */}
        <div className="flex flex-row items-center justify-between w-full max-w-5xl mb-4">
          <p className="project-overview-heading text-slate-50 font-semibold text-2xl">
            Beat Collection
          </p>
          <button
            className="bg-slate-950 text-white border-1 hover:bg-slate-50 hover:text-black font-medium py-1 px-2 rounded-md flex items-center transition duration-300 group"
          >
            <span className="group-hover:hidden">+</span>
            <span className="hidden group-hover:inline transition duration-400">
              Add New Beats +
            </span>
          </button>
        </div>
        </section>

      {/* Beat Cards Section */}
      <section className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center gap-1.5 w-full max-w-5xl">
          {beats.map((beat, index) => (
            <BeatCard 
              key={index}
              beat={beat}  // Pass the entire beat object as a prop
            />
          ))}
        </div>
      </section>

    </>
  );
}


export default BeatCollectionView;