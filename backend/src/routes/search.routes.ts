import { Router } from "express";
import { searchAyahsController } from "../controllers/search.controller.js";

export const searchRouter = Router();

searchRouter.get("/", searchAyahsController);
