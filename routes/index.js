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
  fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
};

/* GET home page. */
router.get("/", (req, res) => {
  res.send("Welcome to your Express app!");
});

/* GET API data. */
router.get("/api/projects", (req, res) => {
  const projects = readProjectsFromFile(); // Read from file on each request
  console.log("Projects:", projects); // Log to verify data
  res.json(projects);
});

// POST endpoint to add a new project
router.post("/api/projects", (req, res) => {
  const newProject = req.body;
  let projects = readProjectsFromFile(); // Read current projects

  // Generate a new ID by finding the maximum existing ID and adding 1
  const newId = projects.length > 0 ? Math.max(...projects.map(proj => proj.id)) + 1 : 1;
  newProject.id = newId; // Assign the new ID to the project

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

export default router;