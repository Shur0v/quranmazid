import { Router } from "express";
import { getAyahAudioController, listAudioEditionsController } from "../controllers/audio.controller.js";

export const audioRouter = Router();

audioRouter.get("/editions", listAudioEditionsController);
audioRouter.get("/:surahId/:ayahNo", getAyahAudioController);
