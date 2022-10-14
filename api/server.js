import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { db } from "./db.js";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

// send data to DB
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/test", (req, res) => {
    res.json("It Works");
});

app.listen(1998, () => {
    console.log(`http://localhost:1998`);
});
