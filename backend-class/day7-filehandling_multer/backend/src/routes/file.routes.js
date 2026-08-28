const express = require("express");

const upload = require("../config/multer.js");
const fileController = require("../controllers/file.controller.js");

const router = express.Router();

router.post("/", upload.array("images", 5), fileController);

module.exports = router;
