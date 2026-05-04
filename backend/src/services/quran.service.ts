import { ALQURAN_BASE_URL, ARABIC_EDITION, TRANSLATION_EDITION } from "../config/constants.js";
import type { SurahDetail, SurahListItem } from "../types/surah.types.js";

type SurahListResponse = {
  data: Array<{
    number: number;
    englishName: string;
    englishNameTranslation: string;
    name: string;
    revelationType: string;
    numberOfAyahs: number;
  }>;
};

type SurahEditionsResponse = {
  data: Array<{
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    revelationType: string;
    numberOfAyahs: number;
    ayahs: Array<{
      numberInSurah: number;
      text: string;
      juz: number;
      page: number;
    }>;
  }>;
};

export async function getSurahList(): Promise<SurahListItem[]> {
  const response = await fetch(`${ALQURAN_BASE_URL}/surah`);
  if (!response.ok) throw new Error("Failed to fetch surah list");
  const json = (await response.json()) as SurahListResponse;

  return json.data.map((item) => ({
    id: item.number,
    nameArabic: item.name,
    nameSimple: item.englishName,
    nameTranslation: item.englishNameTranslation,
    revelationType: item.revelationType,
    ayahCount: item.numberOfAyahs,
  }));
}

export async function getSurahDetail(surahId: number): Promise<SurahDetail> {
  const response = await fetch(
    `${ALQURAN_BASE_URL}/surah/${surahId}/editions/${ARABIC_EDITION},${TRANSLATION_EDITION}`,
  );
  if (!response.ok) throw new Error("Failed to fetch surah details");
  const json = (await response.json()) as SurahEditionsResponse;

  const [arabic, translation] = json.data;
  const ayahs = arabic.ayahs.map((ayah, index) => ({
    numberInSurah: ayah.numberInSurah,
    ayahKey: `${surahId}:${ayah.numberInSurah}`,
    arabicText: ayah.text,
    translationText: translation?.ayahs[index]?.text || "",
    juz: ayah.juz,
    page: ayah.page,
  }));

  return {
    id: arabic.number,
    nameArabic: arabic.name,
    nameSimple: arabic.englishName,
    nameTranslation: arabic.englishNameTranslation,
    revelationType: arabic.revelationType,
    ayahCount: arabic.numberOfAyahs,
    ayahs,
  };
}
