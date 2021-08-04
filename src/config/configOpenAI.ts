import dotenv from "dotenv";
dotenv.config();

export default {
  SECRET_KEY: process.env.SECRET_KEY || "",
};
