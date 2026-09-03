import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the authentication API",
  });
});

app.post("/api/auth/register", async (req, res) => {
  const { email, name, password } = req.body;

  const user = await userModel.create({
    email,
    name,
    password,
  });

  const token = jwt.sign(
    { id: user._id },
    "3307bdae5634966eeb512f1823c4051230cdf44c0ffb4adcffa7788380b54cd5",
  );

  res.status(201).json({
    message: "User created successfully",
    data: {
      email,
      name,
      id: user._id,
    },
    token,
  });
});

app.get("/api/auth/me", async (req, res) => {
  const authHeader = req.headers.authorization;

  const data = jwt.decode(authHeader);

  const user = await userModel.findById(data.id);

  console.log(user);
});

export default app;
