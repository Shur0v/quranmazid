import type { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger.js";

export function errorMiddleware(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  logger.error(error.message);
  res.status(500).json({ success: false, message: "Internal server error" });
}
