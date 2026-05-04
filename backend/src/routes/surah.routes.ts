import { Router } from "express";
import { getSurahByIdController, getSurahsController } from "../controllers/surah.controller.js";
import { validateSurahId } from "../middleware/validate.middleware.js";

export const surahRouter = Router();

surahRouter.get("/", getSurahsController);
surahRouter.get("/:id", validateSurahId, getSurahByIdController);
