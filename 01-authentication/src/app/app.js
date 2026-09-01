import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the authentication API",
  });
});

app.post("/api/auth/register", (req, res) => {
  const { email, name, password } = req.body;

  const token = jwt.sign(
    { email, name },
    "3307bdae5634966eeb512f1823c4051230cdf44c0ffb4adcffa7788380b54cd5",
  );

  res.status(201).json({
    message: "User created successfully",
    data: {
      email,
      name,
    },
    token,
  });
});

export default app;
