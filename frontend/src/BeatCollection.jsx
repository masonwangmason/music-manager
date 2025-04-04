import BeatCard from "./BeatCard";

function BeatCollectionView() {

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

      {/* Beat Cards Section - Modified to center content */}
      <section className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center gap-1.5 w-full max-w-5xl">
          {/* Example Beat Cards */}
          <BeatCard />
          <BeatCard />
          <BeatCard />
          <BeatCard />
        </div>
      </section>

    </>
  );
}


export default BeatCollectionView;