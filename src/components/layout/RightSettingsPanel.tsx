"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import RightbarFontIcon from "../../../public/icons/rightbarfonticon";
import RightbarFontInactiveIcon from "../../../public/icons/rightbarfontinactiveicon";
import RightbarReadingIcon from "../../../public/icons/rightbarreadingicon";
import { useReaderSettings } from "../settings/ReaderSettingsProvider";

type RightSettingsPanelProps = {
  className?: string;
  scrollable?: boolean;
};

export default function RightSettingsPanel({ className = "", scrollable = false }: RightSettingsPanelProps) {
  const { arabicUiSize, translationSize, arabicFontFace, setArabicUiSize, setTranslationSize, setArabicFontFace } = useReaderSettings();
  const [fontFaceOpen, setFontFaceOpen] = useState(false);
  const [fontSettingsOpen, setFontSettingsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"translation" | "reading">("translation");
  const arabicPercent = ((arabicUiSize - 20) / (60 - 20)) * 100;
  const translationPercent = ((translationSize - 14) / (32 - 14)) * 100;
  const fontFaceLabel = arabicFontFace === "amiri" ? "Amiri" : arabicFontFace === "noto" ? "Noto Sans Arabic" : "Playpen Sans Arabic";

  return (
    <aside className={`h-full min-h-0 bg-[var(--color-surface)] px-5 py-6 ${scrollable ? "hide-scrollbar overflow-y-auto" : "overflow-hidden"} ${className}`}>
      <div className="relative isolate mb-6 flex min-h-10 items-center rounded-full border-4 border-[var(--color-divider)] bg-[var(--color-divider)]">
        <button
          type="button"
          onClick={() => setActiveTab("translation")}
          className={`z-10 h-full w-full cursor-pointer text-[14px] transition-colors ${activeTab === "translation" ? "font-semibold text-[var(--color-text-main)]" : "text-[var(--color-text-muted)]"}`}
        >
          Translation
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("reading")}
          className={`z-10 h-full w-full cursor-pointer text-[14px] transition-colors ${activeTab === "reading" ? "font-semibold text-[var(--color-text-main)]" : "text-[var(--color-text-muted)]"}`}
        >
          Reading
        </button>
        <div
          className="absolute h-full w-1/2 rounded-full bg-[var(--color-surface)] transition-transform duration-300 ease-in-out"
          style={{ transform: activeTab === "translation" ? "translateX(0%)" : "translateX(100%)" }}
        />
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between py-3 text-[var(--color-text-main)]">
          <div className="flex items-center gap-3">
            <RightbarReadingIcon className="h-[18px] w-[18px] text-[var(--color-icon-muted)]" />
            <p className="text-[15px] font-semibold leading-none">Reading Settings</p>
          </div>
          <ChevronDown size={18} className="text-[var(--color-icon-muted)]" />
        </div>

        <button
          type="button"
          onClick={() =>
            setFontSettingsOpen((prev) => {
              const next = !prev;
              if (!next) setFontFaceOpen(false);
              return next;
            })
          }
          className={`flex w-full cursor-pointer items-center justify-between transition-colors ${fontSettingsOpen ? "text-[var(--color-accent)]" : "text-[var(--color-text-main)]"}`}
        >
          <div className="flex items-center gap-3">
            {fontSettingsOpen ? (
              <RightbarFontIcon className="h-[18px] w-[19px] text-[var(--color-accent)]" />
            ) : (
              <RightbarFontInactiveIcon className="h-[18px] w-[19px] text-[var(--color-icon-muted)]" />
            )}
            <p className="text-[15px] font-semibold leading-none">Font Settings</p>
          </div>
          {fontSettingsOpen ? (
            <ChevronUp size={18} className="text-[var(--color-accent)]" />
          ) : (
            <ChevronDown size={18} className="text-[var(--color-icon-muted)]" />
          )}
        </button>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${fontSettingsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="min-h-0">
            <div className={`space-y-4 ${fontSettingsOpen ? "pt-1" : ""}`}>
              <div className="flex items-center justify-between pt-4">
                <p className="text-[15px] font-semibold leading-none text-[var(--color-text-main)]">Arabic Font Size</p>
                <p className="text-[13px] font-medium leading-none text-[var(--color-accent)]">{arabicUiSize}</p>
              </div>
              <div className="relative h-[4px] w-full rounded-full bg-[var(--color-track)]">
                <div className="pointer-events-none relative h-full rounded-full bg-[var(--color-accent)]" style={{ width: `${arabicPercent}%` }}>
                  <span className="absolute right-0 top-1/2 size-[14px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--color-accent)]" />
                </div>
                <input
                  type="range"
                  min={20}
                  max={60}
                  step={1}
                  value={arabicUiSize}
                  onChange={(e) => setArabicUiSize(Number(e.target.value))}
                  onInput={(e) => setArabicUiSize(Number((e.target as HTMLInputElement).value))}
                  className="absolute left-0 top-1/2 z-10 h-6 w-full -translate-y-1/2 cursor-pointer appearance-none bg-transparent opacity-0 [touch-action:none]"
                  aria-label="Arabic Font Size"
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between pt-4">
                <p className="text-[15px] font-semibold leading-none text-[var(--color-text-main)]">Translation Font Size</p>
                <p className="text-[13px] font-medium leading-none text-[var(--color-accent)]">{translationSize}</p>
              </div>
              <div className="relative h-[4px] w-full rounded-full bg-[var(--color-track)]">
                <div className="pointer-events-none relative h-full rounded-full bg-[var(--color-accent)]" style={{ width: `${translationPercent}%` }}>
                  <span className="absolute right-0 top-1/2 size-[14px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--color-accent)]" />
                </div>
                <input
                  type="range"
                  min={14}
                  max={32}
                  step={1}
                  value={translationSize}
                  onChange={(e) => setTranslationSize(Number(e.target.value))}
                  onInput={(e) => setTranslationSize(Number((e.target as HTMLInputElement).value))}
                  className="absolute left-0 top-1/2 z-10 h-6 w-full -translate-y-1/2 cursor-pointer appearance-none bg-transparent opacity-0 [touch-action:none]"
                  aria-label="Translation Font Size"
                />
              </div>
            </div>

            <div className="mb-10 mt-8 space-y-2">
              <p className="text-[15px] font-semibold leading-none text-[var(--color-text-main)]">Arabic Font Face</p>
              <button
                type="button"
                onClick={() => setFontFaceOpen((prev) => !prev)}
                className="flex min-h-[40px] w-full items-center justify-between rounded-sm bg-[var(--color-divider)] px-4 py-[10px] text-left"
              >
                <span className="text-[14px] font-medium leading-none text-[var(--color-text-main)]">{fontFaceLabel}</span>
                <ChevronRight size={18} className={`text-[var(--color-icon-muted)] transition-transform ${fontFaceOpen ? "rotate-90" : ""}`} />
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${fontFaceOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="min-h-0">
                  <div className="space-y-2 rounded-sm bg-[var(--color-dropdown-bg)] p-2">
                    <button
                      type="button"
                      onClick={() => setArabicFontFace("playpen")}
                      className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-[14px] ${arabicFontFace === "playpen" ? "bg-[var(--color-divider)] text-[var(--color-accent)]" : "text-[var(--color-text-main)]"}`}
                    >
                      <span>Playpen Sans Arabic</span>
                      {arabicFontFace === "playpen" ? <span className="text-[var(--color-accent)]">✓</span> : null}
                    </button>
                    <button
                      type="button"
                      onClick={() => setArabicFontFace("amiri")}
                      className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-[14px] ${arabicFontFace === "amiri" ? "bg-[var(--color-divider)] text-[var(--color-accent)]" : "text-[var(--color-text-main)]"}`}
                    >
                      <span>Amiri</span>
                      {arabicFontFace === "amiri" ? <span className="text-[var(--color-accent)]">✓</span> : null}
                    </button>
                    <button
                      type="button"
                      onClick={() => setArabicFontFace("noto")}
                      className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-[14px] ${arabicFontFace === "noto" ? "bg-[var(--color-divider)] text-[var(--color-accent)]" : "text-[var(--color-text-main)]"}`}
                    >
                      <span>Noto Sans Arabic</span>
                      {arabicFontFace === "noto" ? <span className="text-[var(--color-accent)]">✓</span> : null}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-none bg-gradient-to-br from-[var(--color-support-grad-from)] to-[var(--color-support-grad-to)] p-4">
          <p className="text-[16px] font-bold leading-[1.45] text-[var(--color-text-main)]">Help spread the knowledge of Islam</p>
          <p className="relative z-20 mt-2 text-[13px] leading-[1.5] text-[var(--color-text-muted)]">
            Your regular support helps us reach our religious brothers and sisters with the message of Islam. Join our mission and be part of the big change.
          </p>
          <button className="mt-3 flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-[var(--color-accent)] px-4 text-[14px] font-semibold leading-none text-white">Support Us</button>
        </div>
      </div>
    </aside>
  );
}




