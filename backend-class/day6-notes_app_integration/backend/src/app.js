const express = require("express");
const connectDb = require("./config/db.js");
const userRouter = require("./routes/notes.route.js");

const app = express();
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/notes", userRouter);

module.exports = app;
