"use client";

import { cloneElement, isValidElement, useEffect, useState, type ReactNode } from "react";
import { AudioPlayerProvider } from "../audio/AudioPlayerProvider";
import RightSettingsPanel from "./RightSettingsPanel";
import TopbarSetingIcon from "../../../public/icons/topbarsetingicon";
import Image from "next/image";

type AppShellProps = {
  leftSidebar: ReactNode;
  topBar: ReactNode;
  surahSidebar: ReactNode;
  readerPanel: ReactNode;
  rightPanel: ReactNode;
};

export default function AppShell({
  leftSidebar,
  topBar,
  surahSidebar,
  readerPanel,
  rightPanel,
}: AppShellProps) {
  const [topBarHidden, setTopBarHidden] = useState(false);
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);
  const [surahDrawerOpen, setSurahDrawerOpen] = useState(false);

  useEffect(() => {
    const onDirection = (event: Event) => {
      const customEvent = event as CustomEvent<"up" | "down">;
      setTopBarHidden(customEvent.detail === "down");
    };
    window.addEventListener("reader-scroll-direction", onDirection as EventListener);
    return () => {
      window.removeEventListener("reader-scroll-direction", onDirection as EventListener);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1440) setSettingsDrawerOpen(false);
      if (window.innerWidth >= 1024) setSurahDrawerOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const topBarWithSettingsTrigger =
    isValidElement(topBar) && typeof topBar.type !== "string"
      ? cloneElement(topBar, {
          onOpenSettings: () => setSettingsDrawerOpen(true),
          onOpenSurah: () => setSurahDrawerOpen(true),
        } as { onOpenSettings: () => void; onOpenSurah: () => void })
      : topBar;

  const surahSidebarForDrawer = isValidElement(surahSidebar)
    ? cloneElement(surahSidebar, {
        mobileDrawer: true,
        onSelectSurah: () => setSurahDrawerOpen(false),
        hideArabicOnMobile: false,
      } as { mobileDrawer: boolean; onSelectSurah: () => void; hideArabicOnMobile: boolean })
    : surahSidebar;

  return (
    <main className="h-dvh bg-[var(--color-surface)] text-foreground">
      <div className="grid h-dvh grid-cols-1 overflow-hidden min-[1024px]:grid-cols-[60px_1fr]">
        {leftSidebar}
        <AudioPlayerProvider>
          <div className="relative h-dvh min-h-0 overflow-hidden pb-[56px] min-[1024px]:pb-0">
            {topBarWithSettingsTrigger}
            <div
              className={`absolute inset-x-0 bottom-0 grid min-h-0 grid-cols-[minmax(0,1fr)] overflow-hidden transition-all duration-300 ease-linear min-[1024px]:grid-cols-[333px_minmax(0,1fr)] min-[1440px]:grid-cols-[333px_minmax(0,1fr)_333px] ${
                topBarHidden ? "top-0" : "top-[60px]"
              }`}
            >
              <div className="hidden h-full min-h-0 min-[1024px]:block">{surahSidebar}</div>
              {readerPanel}
              <div className="hidden min-[1440px]:block">{rightPanel}</div>
            </div>

            <div
              className={`absolute inset-0 z-[40] bg-black/55 transition-opacity duration-300 min-[1440px]:hidden ${
                settingsDrawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`}
              onClick={() => setSettingsDrawerOpen(false)}
            />

            <aside
              className={`absolute bottom-0 right-0 top-[60px] z-[41] w-[333px] max-w-[92vw] border-l border-[var(--color-divider)] bg-[var(--color-surface)] transition-transform duration-300 ease-in-out min-[1440px]:hidden ${
                settingsDrawerOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3 text-[18px] font-semibold leading-none text-[var(--color-text-main)]">
                  <TopbarSetingIcon className="h-[28px] w-[28px] text-[var(--color-accent)]" />
                  <span>Settings</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSettingsDrawerOpen(false)}
                  className="cursor-pointer text-2xl leading-none text-[var(--color-text-muted)]"
                  aria-label="Close settings"
                >
                  ×
                </button>
              </div>
              <div
                className="hide-scrollbar h-[calc(100%-56px)] overflow-y-auto"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <RightSettingsPanel scrollable />
              </div>
            </aside>

            <div
              className={`absolute inset-0 z-[42] bg-black/55 transition-opacity duration-300 min-[1024px]:hidden ${
                surahDrawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`}
              onClick={() => setSurahDrawerOpen(false)}
            />

            <aside
              className={`absolute bottom-[56px] left-0 top-0 z-[43] w-full max-w-none border-r border-[var(--color-divider)] bg-[var(--color-surface)] transition-transform duration-300 ease-in-out min-[1024px]:hidden ${
                surahDrawerOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between border-b border-[var(--color-divider)] px-4 py-3">
                <div className="flex items-center gap-3">
                  <Image src="/logo.svg" alt="Quran Mazid Logo" width={28} height={28} className="h-7 w-7" />
                  <div className="space-y-[2px]">
                    <p className="text-xl font-bold leading-none text-[var(--color-text-main)]">Quran Mazid</p>
                    <p className="text-[10px] text-[var(--color-text-muted)]">Read, Study, and Learn The Quran</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSurahDrawerOpen(false)}
                  className="cursor-pointer text-3xl leading-none text-[var(--color-text-muted)]"
                  aria-label="Close surah menu"
                >
                  ×
                </button>
              </div>
              <div className="h-[calc(100%-61px)] overflow-hidden max-[1023px]:[&>aside]:!block [&>aside]:!h-full [&>aside]:!min-h-0">
                {surahSidebarForDrawer}
              </div>
            </aside>
          </div>
        </AudioPlayerProvider>
      </div>
    </main>
  );
}


