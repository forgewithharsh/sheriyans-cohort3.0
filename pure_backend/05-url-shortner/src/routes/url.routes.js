import express from "express";
import generateCode from "../utils/generateCode.js";

const router = express.Router();

router.post("/", async function (req, res) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      error: "Please enter a URL",
    });
  }

  if (
    url.startsWith("http://") == false &&
    url.startsWith("https://") == false
  ) {
    return res.status(400).json({
      error: "Please enter a valid URL starting with http:// and https://",
    });
  }

  if (url.length > 2048) {
    return res.status(400).json({
      error: "URL is too long.",
    });
  }
});

export default router;
