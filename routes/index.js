import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsFilePath = path.join(__dirname, "../db/projects.json");

// Helper function to read projects from the JSON file
const readProjectsFromFile = () => {
  const data = fs.readFileSync(projectsFilePath, "utf-8");
  return JSON.parse(data);
};

// Helper function to write projects to the JSON file
const writeProjectsToFile = (projects) => {
  try {
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
  } catch (error) {
    console.error('Error writing to projects.json:', error);
  }
};

/* GET API data. */
router.get("/api/projects", (req, res) => {
  const projects = readProjectsFromFile(); // Read from file on each request
  res.json(projects);
});

// POST endpoint to add a new project
router.post("/api/projects", (req, res) => {
  const newProject = req.body;
  let projects = readProjectsFromFile(); // Read current projects

  // Generate a new ID by finding the maximum existing ID and adding 1
  const newId = projects.length > 0 ? Math.max(...projects.map(proj => proj.id)) + 1 : 1;
  newProject.id = newId; // Assign the new ID to the project

  // Ensure the new project includes an empty project_songs array
  newProject.project_songs = newProject.project_songs || [];

  projects.push(newProject);
  writeProjectsToFile(projects); // Save to JSON file

  res.status(201).json(newProject);
});

// PUT endpoint to update an existing project
router.put("/api/projects/:id", (req, res) => {
  const projectId = Number(req.params.id);
  const updatedProject = req.body;
  let projects = readProjectsFromFile(); // Read current projects

  const projectIndex = projects.findIndex((proj) => proj.id === projectId);
  if (projectIndex === -1) {
    return res.status(404).json({ error: "Project not found" });
  }

  // Ensure the ID is preserved during the update
  projects[projectIndex] = { ...projects[projectIndex], ...updatedProject, id: projectId };
  writeProjectsToFile(projects); // Save to JSON file

  res.json(projects[projectIndex]);
});

// DELETE endpoint to remove a project
router.delete("/api/projects/:id", (req, res) => {
  const projectId = Number(req.params.id);
  let projects = readProjectsFromFile();

  const projectIndex = projects.findIndex((proj) => proj.id === projectId);
  if (projectIndex === -1) {
    return res.status(404).json({ error: "Project not found" });
  }

  // Remove the project from the array
  projects.splice(projectIndex, 1);
  writeProjectsToFile(projects); // Save the updated list to the JSON file

  res.status(204).send(); // Send a 204 No Content response
});

// POST endpoint to add a new song to a project
router.post("/api/projects/:projectId/songs", (req, res) => {
  const { projectId } = req.params;
  const { songName, songCollaborators, songInstrumental, songLyrics, songDuration } = req.body;

  let projects = readProjectsFromFile(); // Read current projects
  const project = projects.find(proj => proj.id === Number(projectId));

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  // Generate a unique song_id by finding the maximum existing song_id and adding 1
  const newSongId = project.project_songs.length > 0 ? Math.max(...project.project_songs.map(song => song.song_id)) + 1 : 1;

  const newSong = {
    song_id: newSongId,
    project_id: Number(projectId),
    song_name: songName,
    song_duration: songDuration,
    song_collaborators: songCollaborators,
    song_instrumental: songInstrumental,
    song_lyrics: songLyrics,
  };

  project.project_songs.push(newSong);
  writeProjectsToFile(projects); // Save the updated projects array to the JSON file

  res.status(201).json(newSong);
});

// PUT endpoint to update a song in a project
router.put("/api/projects/:projectId/songs/:songId", (req, res) => {
  const { projectId, songId } = req.params;
  const { songName, songCollaborators, songInstrumental, songLyrics, songDuration } = req.body;

  console.log("Incoming song data:", { songName, songCollaborators, songInstrumental, songLyrics, songDuration });

  let projects = readProjectsFromFile(); // Read current projects

  const project = projects.find(proj => proj.id === Number(projectId));
  if (!project) {
    console.error(`Project with ID ${projectId} not found`);
    return res.status(404).json({ error: "Project not found" });
  }

  const songIndex = project.project_songs.findIndex(song => song.song_id === Number(songId));
  if (songIndex === -1) {
    console.error(`Song with ID ${songId} not found in project ${projectId}`);
    return res.status(404).json({ error: "Song not found" });
  }

  // Update the song with the new data, preserving existing values if undefined
  project.project_songs[songIndex] = {
    ...project.project_songs[songIndex],
    song_name: songName !== undefined ? songName : project.project_songs[songIndex].song_name,
    song_collaborators: songCollaborators !== undefined ? songCollaborators : project.project_songs[songIndex].song_collaborators,
    song_instrumental: songInstrumental !== undefined ? songInstrumental : project.project_songs[songIndex].song_instrumental,
    song_lyrics: songLyrics !== undefined ? songLyrics : project.project_songs[songIndex].song_lyrics,
    song_duration: songDuration !== undefined ? songDuration : project.project_songs[songIndex].song_duration,
  };

  try {
    writeProjectsToFile(projects); // Save the updated projects array to the JSON file
    console.log("Updated song:", project.project_songs[songIndex]);
    res.status(200).json(project.project_songs[songIndex]);
  } catch (error) {
    console.error('Error writing to projects.json:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE endpoint to remove a song from a project
router.delete("/api/projects/:projectId/songs/:songId", (req, res) => {
  const { projectId, songId } = req.params;
  let projects = readProjectsFromFile(); // Read current projects
  const project = projects.find(proj => proj.id === Number(projectId));

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  const songIndex = project.project_songs.findIndex(song => song.song_id === Number(songId));
  if (songIndex === -1) {
    return res.status(404).json({ error: "Song not found" });
  }

  // Remove the song from the project's song list
  project.project_songs.splice(songIndex, 1);
  writeProjectsToFile(projects); // Save the updated projects array to the JSON file

  res.status(204).send(); // Send a 204 No Content response
});

export default router;