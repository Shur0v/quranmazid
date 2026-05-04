"use client";

import type { ReactNode } from "react";
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
  return (
    <main className="h-dvh bg-[#0d0d0d] text-foreground">
      <div className="grid h-dvh grid-cols-[60px_1fr] overflow-hidden">
        {leftSidebar}
        <AudioPlayerProvider>
          <div className="relative h-dvh min-h-0 overflow-hidden">
            {topBar}
            <div className="absolute inset-x-0 bottom-0 top-[60px] grid min-h-0 grid-cols-[333px_minmax(0,1fr)_333px] overflow-hidden">
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
