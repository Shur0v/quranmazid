import type { Request, Response, NextFunction } from "express";

export function validateSurahId(req: Request, res: Response, next: NextFunction) {
  const surahId = Number(req.params.id);
  if (!Number.isInteger(surahId) || surahId < 1 || surahId > 114) {
    res.status(400).json({ success: false, message: "Invalid surah id. Must be between 1 and 114." });
    return;
  }
  next();
}
