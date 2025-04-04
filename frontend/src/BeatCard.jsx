import headphoneIcon from "./assets/headphone.png";

function BeatCard({ beat }) {  // Destructure the beat prop
  return (
    <>
      <section className="flex justify-center w-4xl">
        <div className="flex flex-row items-center w-full p-3 mb-1.5 justify-between border-1 border-slate-50 rounded-2xl bg-black text-slate-50">
          <button className="mr-3">
            <img
              className="bg-slate-50 p-1 size-8 rounded-2xl transition duration-400 hover:border-2"
              src={headphoneIcon}
              alt="cover-icon"
            />
          </button>
          <div className="flex-1 flex flex-row items-center gap-4 overflow-hidden">
            <p className="flex-1 truncate">{beat.beat_name}</p>
            <p className="flex-none">{beat.beat_length}</p>
            <p className="flex-1 truncate">{beat.beat_author}</p>
          </div>
          <div className="flex flex-row gap-1.5">
            <button className="font-light border-1 border-slate-50 text-slate-50 py-1 px-2.5 rounded-md transition duration-200 hover:bg-slate-50 hover:text-slate-950">
              Edit
            </button>
            <button className="font-light border-1 border-slate-50 text-slate-50 py-1 px-2.5 rounded-md transition duration-200 hover:bg-slate-50 hover:text-slate-950">
              Download
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BeatCard;
