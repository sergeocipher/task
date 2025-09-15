// Express server entry point will go here
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/tasks.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

// DB + Server
connectDB();
app.listen(5000, () => console.log("🚀Server running on http://localhost:5000"));

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzdiMzY2YWE2ZDI0ZGJjYWQ3MzgxYiIsImlhdCI6MTc1NzkxODM5OH0.zFC0sbm6ijGn1jI5_kUjouLFDuHbngjvqgKyjChV3m0"

// {
//         "_id": "68c7b527bef268e3361a3b3c",
//         "userId": "68c7b366aa6d24dbcad7381b",
//         "title": "Finish report",
//         "description": "Work report for client",
//         "category": "work",
//         "isDone": false,
//         "createdAt": "2025-09-15T06:41:43.475Z",
//         "__v": 0
//     }