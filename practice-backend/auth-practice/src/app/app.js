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
    return res.status(400).json({
      success: false,
      message: "Email, Name, Password is required",
    });
  }

  const alreadyRegister = await userModel.findOne({ email });

  if (alreadyRegister) {
    return res.status(409).json({
      success: false,
      message: "User already exists",
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
    success: true,
    message: "User is created successfully",
    data: {
      user: user.name,
      email: user.email,
    },
    token,
  });
});

app.get("/api/auth/me", authenticate, async (req, res) => {
  res.status(200).json({
    data: {
      user: req.user,
    },
  });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  const isValidate = bcrypt.compare(password, user.password);

  if (!isValidate) {
    return res.status(400).json({
      success: false,
      message: "Invalid Email and Password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  if (!token) {
    return res.json({
      success: false,
      message: "Token not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "User loggedIn successfully",
    data: {
      user: {
        email: user.email,
        name: user.name,
      },
    },
    token,
  });
});

export default app;
