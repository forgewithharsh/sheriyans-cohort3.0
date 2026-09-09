import jwt from "jsonwebtoken";

import config from "../config/config.js";

export const generateTokens = ({ userd }) => {
  const accessToken = jwt.sign({ id: userd._id }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign(
    { id: userd._id },
    config.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" },
  );

  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token) => {
  const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);

  return decoded;
};

export const verifyRefreshToken = (token) => {
  const decoded = jwt.verify(token, config.REFRESH_TOKEN_SECRET);

  return decoded;
};
