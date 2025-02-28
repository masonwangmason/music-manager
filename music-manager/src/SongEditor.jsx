function SongEditor() {
    return (
        <>  
            <section className="flex flex-col items-center my-5">
                <div className="flex flex-row items-center justify-between w-full max-w-5xl mb-4">
                    <p className="project-overview-heading text-slate-50 font-semibold text-2xl">Song Editor</p>
                </div>

                {/* Form Container */}
                <div className="w-full max-w-5xl bg-black p-6 rounded-lg">
                    <form className="flex gap-6">
                        
                        {/* Left Column: Inputs */}
                        <div className="flex flex-col gap-4 w-1/2">
                            {/* Song Name Input */}
                            <div>
                                <label className="block font-medium mb-1 text-left text-slate-50">Song Name</label>
                                <input 
                                    type="text" 
                                    className="border p-2 rounded w-full bg-black text-slate-50 border-slate-50 placeholder-gray-400"
                                    placeholder="Enter song name"
                                />
                            </div>

                            {/* Collaborators Input */}
                            <div>
                                <label className="block font-medium mb-1 text-left text-slate-50">Collaborators</label>
                                <input 
                                    type="text" 
                                    className="border p-2 rounded w-full bg-black text-slate-50 border-slate-50 placeholder-gray-400"
                                    placeholder="Enter collaborators"
                                />
                            </div>

                            {/* Instrumental Upload */}
                            <div>
                                <label className="block font-medium mb-1 text-left text-slate-50">Instrumental</label>
                                <input 
                                    type="file" 
                                    accept="audio/*"
                                    className="border p-2 rounded w-full bg-black text-slate-50 border-slate-50 cursor-pointer"
                                />
                                {/* Placeholder for preview */}
                                <div className="mt-2 w-full h-12 bg-gray-700 flex items-center justify-center rounded">
                                    <span className="text-gray-400">Instrumental Preview</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Lyrics Textarea */}
                        <div className="w-1/2">
                            <label className="block font-medium mb-1 text-left text-slate-50">Lyrics</label>
                            <textarea 
                                className="border p-2 rounded w-full h-48 bg-black text-slate-50 border-slate-50 placeholder-gray-400"
                                placeholder="Type lyrics here..."
                            ></textarea>
                        </div>
                    </form>

                    {/* Buttons at the bottom, aligned right */}
                    <div className="flex justify-end mt-4 gap-3">
                        <button 
                            type="button"
                            className="bg-black text-slate-50 py-2 px-4 rounded-md border-2 border-slate-50 hover:bg-slate-50 hover:text-slate-950"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="bg-black text-red-600 py-2 px-4 rounded-md border-2 border-red-600 hover:bg-red-600 hover:text-slate-950"
                        >
                            Delete Project
                        </button>
                        <button 
                            type="submit"
                            className="bg-black text-slate-50 py-2 px-4 rounded-md border-2 border-slate-50 hover:bg-slate-50 hover:text-slate-950"
                        >
                            Save Project
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SongEditor;
