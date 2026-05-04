"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ReaderpannelBookmarkIcon from "../../../public/icons/readerpannelbookmarkicon";
import ReaderpannelMoreIcon from "../../../public/icons/readerpannelmoreicon";
import ReaderpannelPauseIcon from "../../../public/icons/readerpannelpauseicon";
import ReaderpannelPlayIcon from "../../../public/icons/readerpannelplayicon";
import ReaderpannelTafsirIcon from "../../../public/icons/readerpanneltafsiricon";
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

export default function ReaderPanel({
  surahId,
  surahName,
  surahMeta,
  ayahs,
}: ReaderPanelProps) {
  const { arabicFontPx, translationSize, arabicFontFace } = useReaderSettings();
  const { playAyah, isCurrentAyah, isPlaying } = useAudioPlayer();
  const lastScrollTopRef = useRef(0);

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
  const previousSurahId = surahId > 1 ? surahId - 1 : null;
  const nextSurahId = surahId < 114 ? surahId + 1 : null;

  const handleReaderScroll = (event: React.UIEvent<HTMLElement>) => {
    const nextTop = event.currentTarget.scrollTop;
    const prevTop = lastScrollTopRef.current;
    const delta = nextTop - prevTop;
    lastScrollTopRef.current = nextTop;
    if (Math.abs(delta) < 12) return;
    window.dispatchEvent(
      new CustomEvent<"up" | "down">("reader-scroll-direction", {
        detail: delta > 0 ? "down" : "up",
      }),
    );
  };

  return (
    <section
      onScroll={handleReaderScroll}
      className="hide-scrollbar h-full min-h-0 overflow-y-auto border-r border-[var(--color-divider)]"
    >
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
            <h1 className="text-[22px] font-semibold leading-none text-[var(--color-text-main)]">{surahName}</h1>
            <p className="text-[14px] capitalize text-[var(--color-text-muted)]">{surahMeta}</p>
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
          <div key={ayah.k} className="relative overflow-hidden border-b border-[var(--color-divider)] px-[24px] py-[18px]">
            <div className="w-full">
              <p className="pl-2 text-[16px] font-semibold leading-none text-[var(--color-accent)]">{ayah.k}</p>
            </div>
            <div className="mt-3 flex w-full gap-7">
              <div className="flex w-[34px] min-w-[34px] flex-col items-center gap-2">
                <div className="group relative">
                  <button
                    type="button"
                    onClick={() =>
                      playAyah(
                        surahId,
                        Number(ayah.k.split(":")[1] || 1),
                        surahName.replace(/^Surah\s+/i, ""),
                      )
                    }
                    className="flex size-[34px] cursor-pointer items-center justify-center rounded-full p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-hover-surface)]"
                  >
                    {isCurrentAyah(ayah.k) && isPlaying ? (
                      <ReaderpannelPauseIcon className="text-[var(--color-icon-muted)]" />
                    ) : (
                      <ReaderpannelPlayIcon className="text-[var(--color-icon-muted)]" />
                    )}
                  </button>
                  <span className="pointer-events-none absolute left-[42px] top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#d9d9d9] px-3 py-2 text-[12px] leading-none text-[#2a2a2a] opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
                    {isCurrentAyah(ayah.k) && isPlaying ? "Pause" : "Play"}
                  </span>
                </div>

                <div className="group relative">
                  <button className="flex size-[34px] cursor-pointer items-center justify-center rounded-full p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-hover-surface)]">
                    <ReaderpannelTafsirIcon className="h-[18px] w-[18px] text-[var(--color-icon-muted)]" />
                  </button>
                  <span className="pointer-events-none absolute left-[42px] top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#d9d9d9] px-3 py-2 text-[12px] leading-none text-[#2a2a2a] opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
                    Tafsir
                  </span>
                </div>

                <div className="group relative">
                  <button className="flex size-[34px] cursor-pointer items-center justify-center rounded-full p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-hover-surface)]">
                    <ReaderpannelBookmarkIcon className="h-[18px] w-[18px] text-[var(--color-icon-muted)]" />
                  </button>
                  <span className="pointer-events-none absolute left-[42px] top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#d9d9d9] px-3 py-2 text-[12px] leading-none text-[#2a2a2a] opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
                    Bookmark
                  </span>
                </div>

                <div className="group relative">
                  <button className="flex size-[34px] cursor-pointer items-center justify-center rounded-full p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-hover-surface)]">
                    <ReaderpannelMoreIcon className="h-[18px] w-[18px] text-[var(--color-icon-muted)]" />
                  </button>
                  <span className="pointer-events-none absolute left-[42px] top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#d9d9d9] px-3 py-2 text-[12px] leading-none text-[#2a2a2a] opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
                    More
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div>
                  <p
                    dir="rtl"
                    className={`${readerArabicClass} text-right leading-[1.35] text-[var(--color-text-main)]`}
                    style={{ fontSize: `${arabicFontPx}px` }}
                  >
                    {ayah.a}{" "}
                    <span className="inline-block align-middle text-[0.92em]">
                      {`﴿${toArabicIndic(Number(ayah.k.split(":")[1] || 0))}﴾`}
                    </span>
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-[13px] uppercase text-[var(--color-text-muted)]">SAHEEH INTERNATIONAL</p>
                </div>
                <div className="mt-2">
                  <p className="leading-[1.5] text-[var(--color-text-main)]" style={{ fontSize: `${translationSize}px` }}>
                    {ayah.t}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center pb-24 pt-12">
          <div className="mx-auto inline-flex items-center rounded-full border border-[var(--color-divider)] bg-[var(--color-divider)] px-4 py-3">
            {previousSurahId ? (
              <Link
                href={`/surah/${previousSurahId}`}
                className="flex items-center gap-2 px-4 text-[14px] font-medium leading-none text-[var(--color-text-muted)]"
              >
                <span className="inline-flex h-[14px] items-center text-[16px] leading-none">‹</span>
                <span>Previous</span>
              </Link>
            ) : (
              <span className="flex items-center gap-2 px-4 text-[14px] font-medium leading-none text-[var(--color-disabled)]">
                <span className="inline-flex h-[14px] items-center text-[16px] leading-none">‹</span>
                Previous
              </span>
            )}

            {nextSurahId ? (
              <Link
                href={`/surah/${nextSurahId}`}
                className="flex items-center gap-2 px-4 text-[14px] font-medium leading-none text-[var(--color-text-muted)]"
              >
                <span>Next</span>
                <span className="inline-flex h-[14px] items-center text-[16px] leading-none">›</span>
              </Link>
            ) : (
              <span className="flex items-center gap-2 px-4 text-[14px] font-medium leading-none text-[var(--color-disabled)]">
                Next
                <span className="inline-flex h-[14px] items-center text-[16px] leading-none">›</span>
              </span>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}



