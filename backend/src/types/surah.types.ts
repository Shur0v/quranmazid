export type SurahListItem = {
  id: number;
  nameArabic: string;
  nameSimple: string;
  nameTranslation: string;
  revelationType: string;
  ayahCount: number;
};

export type SurahAyah = {
  numberInSurah: number;
  ayahKey: string;
  arabicText: string;
  translationText: string;
  juz: number;
  page: number;
};

export type SurahDetail = {
  id: number;
  nameArabic: string;
  nameSimple: string;
  nameTranslation: string;
  revelationType: string;
  ayahCount: number;
  ayahs: SurahAyah[];
};
