"use client";

import { cloneElement, isValidElement, useEffect, useState, type ReactNode } from "react";
import { AudioPlayerProvider } from "../audio/AudioPlayerProvider";
import RightSettingsPanel from "./RightSettingsPanel";
import TopbarSetingIcon from "../../../public/icons/topbarsetingicon";

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
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const topBarWithSettingsTrigger =
    isValidElement(topBar) && typeof topBar.type !== "string"
      ? cloneElement(topBar, {
          onOpenSettings: () => setSettingsDrawerOpen(true),
        } as { onOpenSettings: () => void })
      : topBar;

  return (
    <main className="h-dvh bg-[var(--color-surface)] text-foreground">
      <div className="grid h-dvh grid-cols-[60px_1fr] overflow-hidden">
        {leftSidebar}
        <AudioPlayerProvider>
          <div className="relative h-dvh min-h-0 overflow-hidden">
            {topBarWithSettingsTrigger}
            <div
              className={`absolute inset-x-0 bottom-0 grid min-h-0 grid-cols-[333px_minmax(0,1fr)] overflow-hidden transition-all duration-300 ease-linear min-[1440px]:grid-cols-[333px_minmax(0,1fr)_333px] ${
                topBarHidden ? "top-0" : "top-[60px]"
              }`}
            >
              {surahSidebar}
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
          </div>
        </AudioPlayerProvider>
      </div>
    </main>
  );
}


