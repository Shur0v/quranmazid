"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AudioPlayerProvider } from "../audio/AudioPlayerProvider";

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

  return (
    <main className="h-dvh bg-[var(--color-surface)] text-foreground">
      <div className="grid h-dvh grid-cols-[60px_1fr] overflow-hidden">
        {leftSidebar}
        <AudioPlayerProvider>
          <div className="relative h-dvh min-h-0 overflow-hidden">
            {topBar}
            <div
              className={`absolute inset-x-0 bottom-0 grid min-h-0 grid-cols-[333px_minmax(0,1fr)_333px] overflow-hidden transition-all duration-300 ease-linear ${
                topBarHidden ? "top-0" : "top-[60px]"
              }`}
            >
              {surahSidebar}
              {readerPanel}
              {rightPanel}
            </div>
          </div>
        </AudioPlayerProvider>
      </div>
    </main>
  );
}


