import { fetchSurahById, fetchSurahs } from "@/lib/api/surah.api";
import type { SurahDetail, SurahListItem } from "@/types/surah";

type ReaderPageData = {
  surahs: SurahListItem[];
  surahDetail: SurahDetail;
};

function fallbackSurahList(): SurahListItem[] {
  return [
    { id: 1, nameArabic: "الفاتحة", nameSimple: "Al Fatihah", nameTranslation: "The Opener", revelationType: "Meccan", ayahCount: 7 },
    { id: 2, nameArabic: "البقرة", nameSimple: "Al Baqarah", nameTranslation: "The Cow", revelationType: "Medinan", ayahCount: 286 },
    { id: 3, nameArabic: "آل عمران", nameSimple: "Al Imran", nameTranslation: "Family of Imran", revelationType: "Medinan", ayahCount: 200 },
    { id: 4, nameArabic: "النساء", nameSimple: "An Nisa", nameTranslation: "The Women", revelationType: "Medinan", ayahCount: 176 },
    { id: 5, nameArabic: "المائدة", nameSimple: "Al Ma'idah", nameTranslation: "The Table Spread", revelationType: "Medinan", ayahCount: 120 },
    { id: 6, nameArabic: "الأنعام", nameSimple: "Al An'am", nameTranslation: "The Cattle", revelationType: "Meccan", ayahCount: 165 },
    { id: 7, nameArabic: "الأعراف", nameSimple: "Al A'raf", nameTranslation: "The Heights", revelationType: "Meccan", ayahCount: 206 },
    { id: 8, nameArabic: "الأنفال", nameSimple: "Al Anfal", nameTranslation: "The Spoils of War", revelationType: "Medinan", ayahCount: 75 },
    { id: 9, nameArabic: "التوبة", nameSimple: "At Tawbah", nameTranslation: "The Repentance", revelationType: "Medinan", ayahCount: 129 },
  ];
}

function fallbackSurahDetail(): SurahDetail {
  return {
    id: 1,
    nameArabic: "الفاتحة",
    nameSimple: "Al Fatihah",
    nameTranslation: "The Opener",
    revelationType: "Makkah",
    ayahCount: 7,
    ayahs: [
      { numberInSurah: 1, ayahKey: "1:1", arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translationText: "In the name of Allah, the Entirely Merciful, the Especially Merciful.", juz: 1, page: 1 },
      { numberInSurah: 2, ayahKey: "1:2", arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translationText: "[All] praise is [due] to Allah, Lord of the worlds -", juz: 1, page: 1 },
      { numberInSurah: 3, ayahKey: "1:3", arabicText: "الرَّحْمَٰنِ الرَّحِيمِ", translationText: "The Entirely Merciful, the Especially Merciful,", juz: 1, page: 1 },
    ],
  };
}

export async function getReaderPageData(selectedSurahId: number): Promise<ReaderPageData> {
  try {
    const [surahs, surahDetail] = await Promise.all([
      fetchSurahs(),
      fetchSurahById(selectedSurahId),
    ]);
    return { surahs, surahDetail };
  } catch {
    return {
      surahs: fallbackSurahList(),
      surahDetail: fallbackSurahDetail(),
    };
  }
}
