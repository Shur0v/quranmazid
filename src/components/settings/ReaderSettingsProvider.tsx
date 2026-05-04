"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type ReaderSettingsContextValue = {
  arabicUiSize: number;
  translationSize: number;
  arabicFontPx: number;
  arabicFontFace: "playpen" | "amiri" | "noto";
  setArabicUiSize: (value: number) => void;
  setTranslationSize: (value: number) => void;
  setArabicFontFace: (value: "playpen" | "amiri" | "noto") => void;
};

const ReaderSettingsContext = createContext<ReaderSettingsContextValue | null>(null);

const ARABIC_KEY = "reader_arabic_ui_size";
const TRANSLATION_KEY = "reader_translation_size";
const ARABIC_FACE_KEY = "reader_arabic_font_face";

export function ReaderSettingsProvider({ children }: { children: ReactNode }) {
  const [arabicUiSize, setArabicUiSize] = useState(34);
  const [translationSize, setTranslationSize] = useState(20);
  const [arabicFontFace, setArabicFontFace] = useState<"playpen" | "amiri" | "noto">("playpen");

  useEffect(() => {
    const savedArabic = Number(window.localStorage.getItem(ARABIC_KEY));
    const savedTranslation = Number(window.localStorage.getItem(TRANSLATION_KEY));
    const savedFace = window.localStorage.getItem(ARABIC_FACE_KEY);

    if (!Number.isNaN(savedArabic) && savedArabic >= 20 && savedArabic <= 60) {
      setArabicUiSize(savedArabic);
    }
    if (!Number.isNaN(savedTranslation) && savedTranslation >= 14 && savedTranslation <= 32) {
      setTranslationSize(savedTranslation);
    }
    if (savedFace === "playpen" || savedFace === "amiri" || savedFace === "noto") {
      setArabicFontFace(savedFace);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(ARABIC_KEY, String(arabicUiSize));
  }, [arabicUiSize]);

  useEffect(() => {
    window.localStorage.setItem(TRANSLATION_KEY, String(translationSize));
  }, [translationSize]);

  useEffect(() => {
    window.localStorage.setItem(ARABIC_FACE_KEY, arabicFontFace);
  }, [arabicFontFace]);

  const value = useMemo(
    () => ({
      arabicUiSize,
      translationSize,
      arabicFontPx: arabicUiSize + 20,
      arabicFontFace,
      setArabicUiSize,
      setTranslationSize,
      setArabicFontFace,
    }),
    [arabicUiSize, translationSize, arabicFontFace],
  );

  return <ReaderSettingsContext.Provider value={value}>{children}</ReaderSettingsContext.Provider>;
}

export function useReaderSettings() {
  const context = useContext(ReaderSettingsContext);
  if (!context) {
    throw new Error("useReaderSettings must be used inside ReaderSettingsProvider");
  }
  return context;
}


