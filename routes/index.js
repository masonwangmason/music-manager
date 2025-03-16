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
  const projects = readProjectsFromFile(); // Read current projects
  projects.push(newProject);
  writeProjectsToFile(projects); // Save to JSON file
  res.status(201).json(newProject);
});

export default router;