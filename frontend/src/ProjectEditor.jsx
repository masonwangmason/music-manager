function ProjectEditor() {
    return (
        <>  
            <section className="flex flex-col items-center my-5">
                <div className="flex flex-row items-center justify-between w-full max-w-5xl mb-4">
                    <p className="project-overview-heading text-slate-50 font-semibold text-2xl">Project Editor</p>
                </div>

                {/* Form Container */}
                <div className="w-4xl bg-black p-6 rounded-lg">
                    <form className="flex flex-col gap-4 bg-black">
                        
                        {/* Upload Album Cover */}
                        <div>
                            <label className="block font-medium mb-1 text-left">Album Cover</label>
                            <input 
                                type="file" 
                                accept="image/*"
                                className="border p-2 rounded w-full cursor-pointer"
                            />
                            {/* Placeholder for Image Preview */}
                            <div className="border-2 border-slate-50 border-dotted mt-2 w-full h-32 flex items-center justify-center rounded">
                                <span className="font-medium">Image Preview</span>
                            </div>
                        </div>

                        {/* Project Name Input */}
                        <div>
                            <label className="block font-medium mb-1 text-left">Project Name</label>
                            <input 
                                type="text" 
                                className="border p-2 rounded w-full"
                                placeholder="Enter project name"
                            />
                        </div>

                        {/* Project Type Select */}
                        <div>
                            <label className="block font-medium mb-1 text-left">Project Type</label>
                            <select 
                                className="border p-2 rounded w-full"
                            >
                                <option value="">Select project type</option>
                                <option value="Music">Album/EP</option>
                                <option value="Podcast">Single</option>
                            </select>
                        </div>

                        {/* Submit & Cancel Buttons */}
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

                    </form>
                </div>
            </section>
        </>
    );
}

export default ProjectEditor;
