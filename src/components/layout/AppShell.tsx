import type { ReactNode } from "react";

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
    <main className="min-h-screen bg-[#0d0d0d] text-foreground">
      <div className="grid h-screen grid-cols-[60px_1fr] overflow-hidden">
        {leftSidebar}
        <div className="grid h-screen grid-rows-[60px_1fr] overflow-hidden">
          {topBar}
          <div className="grid h-[calc(100vh-60px)] grid-cols-[299px_1fr_333px] overflow-hidden pt-[60px]">
            {surahSidebar}
            {readerPanel}
            {rightPanel}
          </div>
        </div>
      </div>
    </main>
  );
}
