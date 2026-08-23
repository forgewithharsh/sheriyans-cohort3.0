const express = require("express");
const connectDb = require("./config/db.js");
const NotesModel = require("./models/notes.model.js");

const app = express();
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/create", async(req, res) => {
  let { title, description } = req.body;

  let newNote = await NotesModel.create({
    title,
    description,
  });

  res.send({
    success: true,
    meassage: "Note created successfully",
    data: newNote,
  });
});

module.exports = app;
