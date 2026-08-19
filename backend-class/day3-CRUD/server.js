const express = require("express");

const app = express();
app.use(express.json());

const users = [];

// post - create
app.post("/create", (req, res) => {
  const body = req.body;

  users.push(body);

  res.send(users);
});

// get - read
app.get((req, res) => {
  res.send("ok got it");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
