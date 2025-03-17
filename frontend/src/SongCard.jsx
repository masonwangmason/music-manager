import headphoneIcon from "./assets/headphone.png";

function SongCard({ song, onEdit }) { // Remove onDelete prop
  return (
    <div className="flex flex-row items-center w-full h-20 p-3 mb-1.5 justify-between border-1 border-slate-50 rounded-2xl">
      <button>
        <img
          className="bg-slate-50 p-1 size-8 rounded-2xl transition duration-400 hover:border-2"
          src={headphoneIcon}
          alt="headphone-icon"
        />
      </button>
      <p>{song.song_name}</p> {/* Display song name */}
      <p>{song.song_duration}</p> {/* Display song duration */}
      <p>{song.song_collaborators}</p> {/* Display song collaborators */}
      <div className="flex flex-row gap-1.5">
        <button
          className="font-light border-1 border-slate-50 text-slate-50 py-1 px-2.5 rounded-md transition duration-200 hover:bg-slate-50 hover:text-slate-950"
          onClick={() => onEdit(song)} // Call onEdit with the song data
        >
          Edit
        </button>
        <button className="font-light border-1 border-slate-50 text-slate-50 py-1 px-2.5 rounded-md transition duration-200 hover:bg-slate-50 hover:text-slate-950">
          Writing Mode
        </button>
      </div>
    </div>
  );
}

export default SongCard;