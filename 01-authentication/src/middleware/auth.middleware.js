import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Token not found",
    });
  }

  const data = jwt.verify(
    token,
    "3307bdae5634966eeb512f1823c4051230cdf44c0ffb4adcffa7788380b54cd5",
  );

  const user = await userModel.findById(data.id);

  req.user = user;

  next();
};
