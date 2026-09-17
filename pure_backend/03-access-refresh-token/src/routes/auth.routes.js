import { Router } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens } from "../utils/auth.js";

const router = Router();

// * @POST /api/auth/register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(400).json({
      message: "User already exists",
      errors: [
        {
          path: "email",
          message: "User already exists",
        },
      ],
    });
  }

  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });

  const { accessToken, refreshToken } = generateTokens({ userId: user._id });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
  });

  user.refreshToken = refreshToken;
  await user.save();

  res.status(201).json({
    message: "User registered successfully",
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
      accessToken,
    },
  });
});

export default router;
