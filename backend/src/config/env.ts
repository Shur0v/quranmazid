import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
dotenv.config();

export const env = {
  port: Number(process.env.BACKEND_PORT || 4000),
  nodeEnv: process.env.NODE_ENV || "development",
};
