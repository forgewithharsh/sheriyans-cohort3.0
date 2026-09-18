import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

export async function register() {
  const { name, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.this.status(400).json({
      message: "User already exists with this email address",
      errors: [
        {
          field: "email",
          message: "User already exists with this email address",
        },
      ],
    });
  }

  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });

  
}
