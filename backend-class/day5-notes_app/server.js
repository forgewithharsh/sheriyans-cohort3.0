require("dotenv").config();

const app = require("./src/app.js");
const userRouter = require('./src/routes/notes-route.js')

app.use("/notes", userRouter)

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
