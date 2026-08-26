const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await NotesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Notes created successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAllNotesController = async (req, res) => {
  try {
    let allNotes = await NotesModel.find();

    return res.status(200).json({
      message: "All notes fetched",
      data: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getSingleNoteController = async (req, res) => {
  try {
    let newNote = req.params.id;

    let singleNote = await NotesModel.findById(newNote);

    return res.status(201).json({
      message: "Single note fetched",
      data: singleNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
};
