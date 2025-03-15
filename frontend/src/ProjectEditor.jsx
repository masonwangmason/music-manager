import React, { useState } from 'react';

function ProjectEditor({ onClose }) {
    // State for form inputs
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    // Handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCoverImage(file);
            // Create a preview URL for the image
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically save the project data
        console.log('Project data:', { projectName, projectType, coverImage });
        
        // Close the form after submission
        onClose();
    };

    // Handle project deletion
    const handleDelete = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete this project?')) {
            // Delete logic would go here
            console.log('Project deleted');
            onClose();
        }
    };

    return (
        <div className="w-full">
            <form className="flex flex-col gap-4 bg-black" onSubmit={handleSubmit}>
                {/* Upload Album Cover */}
                <div>
                    <label className="block font-medium mb-1 text-left text-slate-50">Album Cover</label>
                    <input 
                        type="file" 
                        accept="image/*"
                        className="border p-2 rounded w-full bg-black text-slate-50 border-slate-50 cursor-pointer"
                        onChange={handleImageChange}
                    />
                    {/* Image Preview */}
                    <div className="border-2 border-slate-50 border-dotted mt-2 w-full h-32 flex items-center justify-center rounded">
                        {imagePreview ? (
                            <img 
                                src={imagePreview} 
                                alt="Album cover preview" 
                                className="h-full object-contain"
                            />
                        ) : (
                            <span className="font-medium text-slate-50">Image Preview</span>
                        )}
                    </div>
                </div>

                {/* Project Name Input */}
                <div>
                    <label className="block font-medium mb-1 text-left text-slate-50">Project Name</label>
                    <input 
                        type="text" 
                        className="border p-2 rounded w-full bg-black text-slate-50 border-slate-50 placeholder-gray-400"
                        placeholder="Enter project name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                </div>

                {/* Project Type Select */}
                <div>
                    <label className="block font-medium mb-1 text-left text-slate-50">Project Type</label>
                    <select 
                        className="border p-2 rounded w-full bg-black text-slate-50 border-slate-50"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        required
                    >
                        <option value="">Select project type</option>
                        <option value="Album/EP">Album/EP</option>
                        <option value="Single">Single</option>
                    </select>
                </div>

                {/* Submit & Cancel Buttons */}
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
                        className="bg-black text-red-600 py-2 px-4 rounded-md border-2 border-red-600 hover:bg-red-600 hover:text-slate-950"
                        onClick={handleDelete}
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
    );
}

export default ProjectEditor;
