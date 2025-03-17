import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sampleProjects from "./db/sampleProjects.js";

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path for the JSON file
const projectsFilePath = path.join(__dirname, "db/projects.json");

// Convert sampleProjects to JSON and write to projects.json
const writeProjectsToJSON = () => {
  fs.writeFileSync(projectsFilePath, JSON.stringify(sampleProjects, null, 2));
  console.log("Projects have been written to projects.json");
};

// Execute the function
writeProjectsToJSON();