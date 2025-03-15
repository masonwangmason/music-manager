import express from "express";
import sampleProjects from "../db/sampleProjects.js";

const router = express.Router();

/* GET home page. */ 
router.get("/", (req, res) => {
  res.send("Welcome to your Express app!"); // Change from `res.render()` to `res.send()`
});

router.get("/api/projects", (req, res) => {
  console.log("Sample Projects:", sampleProjects); // Log to verify data
  res.json(sampleProjects);
});

export default router;