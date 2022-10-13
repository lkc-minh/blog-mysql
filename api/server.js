import express from "express";
import { db } from "./db.js";
import router from "./routes/posts.js";

const app = express();

// send data to DB
app.use(express.json());

app.use("/api/posts", router);

app.get("/", (req, res) => {
    res.json("It Works");
});

app.listen(1998, () => {
    console.log(`http://localhost:1998`);
});
