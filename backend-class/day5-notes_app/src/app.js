const express = require("express");
const connectDb = require("./config/db");

const app = express();
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
