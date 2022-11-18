import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import { db } from "./db.js";
import authRouter from "./routes/auth.js";
import postsRouter from "./routes/posts.js";
// import userRouter from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:9898",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
db.connect();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), function (req, res) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  const file = req.file;
  return res.status(200).json(file.filename);
});
// app.get("/", (req, res) => {
//   res.json("It works!");
// });

app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
// app.use("/api/user", userRouter);
app.listen(8800, () => console.log("http://localhost:8800"));
