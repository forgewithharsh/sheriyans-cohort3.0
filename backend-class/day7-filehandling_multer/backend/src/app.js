const express = require("express")
const cors = require("cors");

const app = express();
const fileRoute = require("./routes/file.routes.js")

app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use("/file", fileRoute)

module.exports = app
