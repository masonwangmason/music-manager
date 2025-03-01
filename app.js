import express from "express"; 
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import indexRouter from "./routes/index.js"; 

const app = express();

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());

// ✅ Serve React frontend from the "frontend/dist" folder
app.use(express.static(path.join(__dirname, "frontend/dist")));

// ✅ Serve React app for all routes (to handle client-side routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

app.use('/', indexRouter); 

export default app;
