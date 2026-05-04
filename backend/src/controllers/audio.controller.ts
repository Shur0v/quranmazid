import type { Request, Response } from "express";
import { getAudioForAyah, listAudioEditions } from "../services/audio.service.js";

export async function listAudioEditionsController(_req: Request, res: Response) {
  try {
    const data = await listAudioEditions();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
}

export async function getAyahAudioController(req: Request, res: Response) {
  try {
    const surahId = Number(req.params.surahId);
    const ayahNo = Number(req.params.ayahNo);
    const data = await getAudioForAyah(surahId, ayahNo);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
}
