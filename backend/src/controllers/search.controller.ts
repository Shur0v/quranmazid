import type { Request, Response } from "express";
import { searchAyahs } from "../services/search.service.js";

export async function searchAyahsController(req: Request, res: Response) {
  try {
    const query = String(req.query.q || "");
    const data = await searchAyahs(query);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
}
