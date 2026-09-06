import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
// import { authenticate } from "../middleware/auth.middleware.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the authentication API",
  });
});

app.post("/api/auth/register", async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.json({
      message: "Invalid credentails",
    });
  }

  const user = await userModel.create({
    email,
    name,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  if (!token) {
    return res.json({
      message: "Token not found",
    });
  }

  return res.status(201).json({
    data: {
      email: user.email,
      user: user.name,
    },
    token,
  });
});

// app.get("/api/auth/me", authenticate, async (req, res) => {});

// app.post("/api/auth/login", async (req, res) => {});

export default app;
