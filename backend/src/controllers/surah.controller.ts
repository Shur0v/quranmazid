import type { Request, Response } from "express";
import { getSurahDetail, getSurahList } from "../services/quran.service.js";

export async function getSurahsController(_req: Request, res: Response) {
  try {
    const data = await getSurahList();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
}

export async function getSurahByIdController(req: Request, res: Response) {
  try {
    const surahId = Number(req.params.id);
    const data = await getSurahDetail(surahId);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
}
