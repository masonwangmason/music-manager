import express from "express";
const router = express.Router();


/* GET home page. */ 
router.get("/", (req, res) => {
  res.send("Welcome to your Express app!"); // Change from `res.render()` to `res.send()`
});

export default router;