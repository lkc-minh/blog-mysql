import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
    res.json("This is ports");
});

export default router;
