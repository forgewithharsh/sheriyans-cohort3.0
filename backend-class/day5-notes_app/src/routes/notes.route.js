const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updatedNoteController,
  deleteNoteController,
} = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", createNotesController);
router.get("/allNotes", getAllNotesController);
router.get("/:id", getSingleNoteController);
router.put("/:id", updatedNoteController);
router.delete("/:id", deleteNoteController);

module.exports = router;
