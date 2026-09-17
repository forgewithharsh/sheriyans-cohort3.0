import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT,

  MONGO_URI: process.env.MONGO_URI,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN__SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN__SECRET,
};

export default config;
