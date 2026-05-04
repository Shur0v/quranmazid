import { ALQURAN_BASE_URL, TRANSLATION_EDITION } from "../config/constants.js";
import type { SearchMatch } from "../types/ayah.types.js";

type SearchResponse = {
  data: {
    matches: Array<{
      numberInSurah: number;
      text: string;
      surah: { number: number; englishName: string };
    }>;
  };
};

export async function searchAyahs(query: string): Promise<SearchMatch[]> {
  if (!query.trim()) return [];

  const encoded = encodeURIComponent(query.trim());
  const response = await fetch(`${ALQURAN_BASE_URL}/search/${encoded}/all/${TRANSLATION_EDITION}`);
  if (!response.ok) throw new Error("Failed to search ayahs");
  const json = (await response.json()) as SearchResponse;

  return json.data.matches.map((match) => ({
    surahId: match.surah.number,
    ayahNumber: match.numberInSurah,
    ayahKey: `${match.surah.number}:${match.numberInSurah}`,
    translationText: match.text,
    surahName: match.surah.englishName,
  }));
}
