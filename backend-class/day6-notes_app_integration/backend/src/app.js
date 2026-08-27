const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db.js");
const userRouter = require("./routes/notes.route.js");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/notes", userRouter);

module.exports = app;
