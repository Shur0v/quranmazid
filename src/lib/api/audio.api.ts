import type { AyahAudio } from "@/types/audio";
import { apiGet } from "./client";

export async function fetchAyahAudio(surahId: number, ayahNo: number): Promise<AyahAudio> {
  return apiGet<AyahAudio>(`/audio/${surahId}/${ayahNo}`);
}
