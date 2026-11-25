
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import videoRoutes from "./routes/videoRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Video Summarizer backend is running"
    });
});

// Video routes
app.use("/api/videos", videoRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
