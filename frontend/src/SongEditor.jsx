import { useState, useEffect } from 'react';

function SongEditor({ song, onClose, onSave, onDelete }) {
  const [songName, setSongName] = useState("");
  const [songCollaborators, setSongCollaborators] = useState("");
  const [songInstrumental, setSongInstrumental] = useState("");
  const [songLyrics, setSongLyrics] = useState("");
  const [songDuration, setSongDuration] = useState("");

  useEffect(() => {
    if (song) {
      setSongName(song.song_name || "");
      setSongCollaborators(song.song_collaborators || "");
      setSongInstrumental(song.song_instrumental || "");
      setSongLyrics(song.song_lyrics || "");
      setSongDuration(song.song_duration || "");
    }
  }, [song]);

  const handleSave = () => {
    const updatedSong = {
      ...song,
      song_name: songName,
      song_collaborators: songCollaborators,
      song_instrumental: songInstrumental,
      song_lyrics: songLyrics,
      song_duration: songDuration,
    };
    onSave(updatedSong);
    onClose();
  };

  return (
    <>  
      <section className="flex flex-col items-center my-5">
        <div className="w-full max-w-5xl bg-black p-6 rounded-lg">
          <form className="flex gap-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            {/* Left Column: Inputs */}
            <div className="flex flex-col gap-4 w-1/2">
              <div>
                <label className="block font-medium mb-1 text-left text-slate-50">Song Name</label>
                <input 
                  type="text" 
                  className="border p-2 rounded w-full bg-black text-slate-50 border-slate-50 placeholder-gray-400"
                  value={songName}
                  onChange={(e) => setSongName(e.target.value)}
                  placeholder="Enter song name"
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-left text-slate-50">Collaborators</label>
                <input 
                  type="text" 
                  className="border p-2 rounded w-full bg-black text-slate-50 border-slate-50 placeholder-gray-400"
                  value={songCollaborators}
                  onChange={(e) => setSongCollaborators(e.target.value)}
                  placeholder="Enter collaborators"
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-left text-slate-50">Instrumental</label>
                <input 
                  type="file" 
                  accept="audio/*"
                  className="border p-2 rounded w-full bg-black text-slate-50 border-slate-50 cursor-pointer"
                />
              </div>
            </div>
            {/* Right Column: Lyrics Textarea */}
            <div className="w-1/2">
              <label className="block font-medium mb-1 text-left text-slate-50">Lyrics</label>
              <textarea 
                className="border p-2 rounded w-full h-48 bg-black text-slate-50 border-slate-50 placeholder-gray-400"
                value={songLyrics}
                onChange={(e) => setSongLyrics(e.target.value)}
                placeholder="Type lyrics here..."
              ></textarea>
            </div>
          </form>
          <div className="flex justify-end mt-4 gap-3">
            <button 
              type="button"
              className="bg-black text-slate-50 py-2 px-4 rounded-md border-2 border-slate-50 hover:bg-slate-50 hover:text-slate-950"
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded-md border-2 border-red-600 hover:bg-red-600 hover:text-slate-950"
              onClick={() => onDelete(song.song_id)}
            >
              Delete Song
            </button>
            <button 
              type="submit"
              className="bg-black text-slate-50 py-2 px-4 rounded-md border-2 border-slate-50 hover:bg-slate-50 hover:text-slate-950"
            >
              Save Song
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SongEditor;
