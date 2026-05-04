"use client";

import { useState } from "react";
import { BookOpen, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useReaderSettings } from "../settings/ReaderSettingsProvider";

export default function RightSettingsPanel() {
  const { arabicUiSize, translationSize, arabicFontFace, setArabicUiSize, setTranslationSize, setArabicFontFace } = useReaderSettings();
  const [fontFaceOpen, setFontFaceOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"translation" | "reading">("translation");
  const arabicPercent = ((arabicUiSize - 20) / (60 - 20)) * 100;
  const translationPercent = ((translationSize - 14) / (32 - 14)) * 100;
  const fontFaceLabel = arabicFontFace === "amiri" ? "Amiri" : arabicFontFace === "noto" ? "Noto Sans Arabic" : "Playpen Sans Arabic";

  return (
    <aside className="h-full min-h-0 overflow-hidden bg-[#0d0d0d] px-5 py-6">
      <div className="relative isolate mb-6 flex min-h-10 items-center rounded-full border-4 border-[#171717] bg-[#171717]">
        <button
          type="button"
          onClick={() => setActiveTab("translation")}
          className={`z-10 h-full w-full cursor-pointer text-[14px] transition-colors ${activeTab === "translation" ? "font-semibold text-[#c4c4c4]" : "text-[#787d7a]"}`}
        >
          Translation
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("reading")}
          className={`z-10 h-full w-full cursor-pointer text-[14px] transition-colors ${activeTab === "reading" ? "font-semibold text-[#c4c4c4]" : "text-[#787d7a]"}`}
        >
          Reading
        </button>
        <div
          className="absolute h-full w-1/2 rounded-full bg-[#0d0d0d] transition-transform duration-300 ease-in-out"
          style={{ transform: activeTab === "translation" ? "translateX(0%)" : "translateX(100%)" }}
        />
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between py-3 text-[#c4c4c4]">
          <div className="flex items-center gap-3">
            <BookOpen size={18} strokeWidth={1.8} className="text-[#8f9491]" />
            <p className="text-[15px] font-semibold leading-none">Reading Settings</p>
          </div>
          <ChevronDown size={18} className="text-[#8f9491]" />
        </div>

        <div className="flex items-center justify-between text-[#2f8f42]">
          <div className="flex items-center gap-3">
            <div className="flex size-[18px] items-center justify-center rounded-full bg-[#2f8f42] text-[11px] font-bold text-[#0d0d0d]">T</div>
            <p className="text-[15px] font-semibold leading-none">Font Settings</p>
          </div>
          <ChevronUp size={18} className="text-[#2f8f42]" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between pt-4">
            <p className="text-[15px] font-semibold leading-none text-[#c4c4c4]">Arabic Font Size</p>
            <p className="text-[13px] font-medium leading-none text-[#2f8f42]">{arabicUiSize}</p>
          </div>
          <div className="relative h-[4px] w-full rounded-full bg-[#2a2a2a]">
            <div className="pointer-events-none relative h-full rounded-full bg-[#2f8f42]" style={{ width: `${arabicPercent}%` }}>
              <span className="absolute right-0 top-1/2 size-[14px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#2f8f42]" />
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
            <p className="text-[15px] font-semibold leading-none text-[#c4c4c4]">Translation Font Size</p>
            <p className="text-[13px] font-medium leading-none text-[#2f8f42]">{translationSize}</p>
          </div>
          <div className="relative h-[4px] w-full rounded-full bg-[#2a2a2a]">
            <div className="pointer-events-none relative h-full rounded-full bg-[#2f8f42]" style={{ width: `${translationPercent}%` }}>
              <span className="absolute right-0 top-1/2 size-[14px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#2f8f42]" />
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
          <p className="text-[15px] font-semibold leading-none text-[#c4c4c4]">Arabic Font Face</p>
          <button
            type="button"
            onClick={() => setFontFaceOpen((prev) => !prev)}
            className="flex min-h-[40px] w-full items-center justify-between rounded-sm bg-[#171717] px-4 py-[10px] text-left"
          >
            <span className="text-[14px] font-medium leading-none text-[#c4c4c4]">{fontFaceLabel}</span>
            <ChevronRight size={18} className={`text-[#8f9491] transition-transform ${fontFaceOpen ? "rotate-90" : ""}`} />
          </button>
          {fontFaceOpen ? (
            <div className="space-y-2 rounded-sm bg-[#111111] p-2">
              <button type="button" onClick={() => setArabicFontFace("playpen")} className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-[14px] ${arabicFontFace === "playpen" ? "bg-[#171717] text-[#2f8f42]" : "text-[#c4c4c4]"}`}>
                <span>Playpen Sans Arabic</span>
                {arabicFontFace === "playpen" ? <span className="text-[#2f8f42]">✓</span> : null}
              </button>
              <button type="button" onClick={() => setArabicFontFace("amiri")} className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-[14px] ${arabicFontFace === "amiri" ? "bg-[#171717] text-[#2f8f42]" : "text-[#c4c4c4]"}`}>
                <span>Amiri</span>
                {arabicFontFace === "amiri" ? <span className="text-[#2f8f42]">✓</span> : null}
              </button>
              <button type="button" onClick={() => setArabicFontFace("noto")} className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-[14px] ${arabicFontFace === "noto" ? "bg-[#171717] text-[#2f8f42]" : "text-[#c4c4c4]"}`}>
                <span>Noto Sans Arabic</span>
                {arabicFontFace === "noto" ? <span className="text-[#2f8f42]">✓</span> : null}
              </button>
            </div>
          ) : null}
        </div>

        <div className="rounded-2xl border border-none bg-gradient-to-br from-[#0f2012]/40 to-[#102614]/60 p-4">
          <p className="text-[16px] font-bold leading-[1.45] text-[#c4c4c4]">Help spread the knowledge of Islam</p>
          <p className="relative z-20 mt-2 text-[13px] leading-[1.5] text-[#787d7a]">
            Your regular support helps us reach our religious brothers and sisters with the message of Islam. Join our mission and be part of the big change.
          </p>
          <button className="mt-3 flex h-10 w-full items-center justify-center rounded-lg bg-[#428038] px-4 text-[14px] font-semibold leading-none text-white cursor-pointer">Support Us</button>
        </div>
      </div>
    </aside>
  );
}
