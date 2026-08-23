const express = require("express");
const connectDb = require("./config/db.js");

const app = express();

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
