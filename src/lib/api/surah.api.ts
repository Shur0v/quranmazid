import type { SurahDetail, SurahListItem } from "@/types/surah";
import { apiGet } from "./client";

export async function fetchSurahs(): Promise<SurahListItem[]> {
  return apiGet<SurahListItem[]>("/surahs");
}

export async function fetchSurahById(id: number): Promise<SurahDetail> {
  return apiGet<SurahDetail>(`/surahs/${id}`);
}
