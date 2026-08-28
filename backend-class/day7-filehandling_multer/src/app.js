const express = require("express")
const app = express();
const fileRoute = require("./routes/file.routes.js")

app.use(express.json())

app.use("/file", fileRoute)

module.exports = app
