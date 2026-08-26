const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updatedNoteController,
  updateSingleNoteController,
  deleteNoteController,
} = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", createNotesController);
router.get("/allNotes", getAllNotesController);
router.get("/:id", getSingleNoteController);
router.put("/:id", updatedNoteController);
router.patch("/:id/single", updateSingleNoteController);
router.delete("/:id", deleteNoteController);

module.exports = router;
