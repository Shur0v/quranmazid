import cors from "cors";
import express from "express";
import { API_PREFIX } from "./config/constants.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { audioRouter } from "./routes/audio.routes.js";
import { healthRouter } from "./routes/health.routes.js";
import { searchRouter } from "./routes/search.routes.js";
import { surahRouter } from "./routes/surah.routes.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use(`${API_PREFIX}/health`, healthRouter);
app.use(`${API_PREFIX}/surahs`, surahRouter);
app.use(`${API_PREFIX}/search`, searchRouter);
app.use(`${API_PREFIX}/audio`, audioRouter);

app.use(errorMiddleware);
