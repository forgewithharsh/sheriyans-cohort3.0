const express = require("express");

const app = express();
app.use(express.json());

let users = [];

// post - create
app.post("/create", (req, res) => {
  const body = req.body;

  users.push(body);

  res.send("user saved successfully");
});

// get - read
app.get("/", (req, res) => {
  res.send(users);
});

// delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let userData = users.filter((val) => val.id !== id);

  users = userData;

  res.send(userData);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
