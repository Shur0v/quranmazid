"use client";

import Image from "next/image";
import { BookOpen, Bookmark, Ellipsis, Pause, Play } from "lucide-react";
import { useReaderSettings } from "../settings/ReaderSettingsProvider";
import { useAudioPlayer } from "../audio/AudioPlayerProvider";

type AyahItem = {
  k: string;
  a: string;
  t: string;
};

type ReaderPanelProps = {
  surahId: number;
  surahName: string;
  surahMeta: string;
  ayahs: AyahItem[];
};

export default function ReaderPanel({ surahId, surahName, surahMeta, ayahs }: ReaderPanelProps) {
  const { arabicFontPx, translationSize, arabicFontFace } = useReaderSettings();
  const { playAyah, isCurrentAyah, isPlaying } = useAudioPlayer();
  const isMadinahSurah = /madinah|medina/i.test(surahMeta);
  const surahHeaderImage = isMadinahSurah
    ? "https://quranmazid.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmadinah.d27df76f.png&w=384&q=75"
    : "https://quranmazid.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmakkah.a06c3e3e.png&w=384&q=75";
  const surahHeaderAlt = isMadinahSurah ? "madinah image" : "makkah image";
  const readerArabicClass =
    arabicFontFace === "amiri"
      ? "font-arabic-surah"
      : arabicFontFace === "noto"
        ? "font-arabic"
        : "font-arabic-reader";
  const toArabicIndic = (value: number) =>
    String(value).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)] || digit);

  return (
    <section className="hide-scrollbar h-full min-h-0 overflow-y-auto border-r border-border">
      <section className="[--padding-x:15px] tablet:[--padding-x:24px] desktop:[--padding-x:36px]">
        <div className="grid grid-cols-3 items-center px-[20px] py-[16px]">
          <div className="flex items-center justify-start">
            <Image
              src={surahHeaderImage}
              alt={surahHeaderAlt}
              width={140}
              height={95}
              className="h-[94.5px] w-[140px] brightness-1000 contrast-110"
              unoptimized
            />
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-[22px] font-semibold leading-none text-[#c4c4c4]">{surahName}</h1>
            <p className="text-[14px] capitalize text-[#787d7a]">{surahMeta}</p>
          </div>
          <div className="flex items-center justify-end">
            {surahId !== 1 ? (
              <Image
                src="https://quranmazid.com/_next/static/media/bismillah.2a2f3d14.svg"
                alt="bismillah"
                width={220}
                height={48}
                className="h-auto w-[220px] max-w-full opacity-80 brightness-900 contrast-20 invert"
                unoptimized
              />
            ) : null}
          </div>
        </div>

        {ayahs.map((ayah) => (
          <div key={ayah.k} className="relative overflow-hidden border-b border-[#1b2432] px-[24px] py-[18px]">
            <div className="w-full">
              <p className="pl-2 text-[16px] font-semibold leading-none text-[#2f8f42]">{ayah.k}</p>
            </div>
            <div className="mt-3 flex w-full gap-7">
              <div className="flex w-[34px] min-w-[34px] flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={() => playAyah(surahId, Number(ayah.k.split(":")[1] || 1), surahName.replace(/^Surah\s+/i, ""))}
                  className="flex size-[34px] cursor-pointer items-center justify-center rounded-full p-2 text-[#787d7a] hover:bg-[#132617]"
                >
                  {isCurrentAyah(ayah.k) && isPlaying ? (
                    <Pause size={18} strokeWidth={1.8} />
                  ) : (
                    <Play size={18} strokeWidth={1.8} />
                  )}
                </button>
                <button className="flex size-[34px] items-center justify-center rounded-full p-2 text-[#787d7a] hover:bg-[#132617]"><BookOpen size={18} strokeWidth={1.8} /></button>
                <button className="flex size-[34px] items-center justify-center rounded-full p-2 text-[#787d7a] hover:bg-[#132617]"><Bookmark size={18} strokeWidth={1.8} /></button>
                <button className="flex size-[34px] items-center justify-center rounded-full p-2 text-[#787d7a] hover:bg-[#132617]"><Ellipsis size={18} strokeWidth={1.8} /></button>
              </div>
              <div className="flex-1">
                <div>
                  <p
                    dir="rtl"
                    className={`${readerArabicClass} text-right leading-[1.35] text-[#c4c4c4]`}
                    style={{ fontSize: `${arabicFontPx}px` }}
                  >
                    {ayah.a}{" "}
                    <span className="inline-block align-middle text-[0.92em]">
                      {`﴿${toArabicIndic(Number(ayah.k.split(":")[1] || 0))}﴾`}
                    </span>
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-[13px] uppercase text-[#787d7a]">SAHEEH INTERNATIONAL</p>
                </div>
                <div className="mt-2">
                  <p className="leading-[1.5] text-[#c4c4c4]" style={{ fontSize: `${translationSize}px` }}>{ayah.t}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
