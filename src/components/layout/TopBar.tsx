"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import TopbarSearchIcon from "../../../public/icons/topbarsearchicon";
import TopbarSetingIcon from "../../../public/icons/topbarsetingicon";
import TopbarSupportIcon from "../../../public/icons/topbarsupporticon";
import TopbarThemeIcon from "../../../public/icons/topbarthemeicon";

type TopBarProps = {
  onOpenSettings?: () => void;
  onOpenSurah?: () => void;
};

export default function TopBar({ onOpenSettings, onOpenSurah }: TopBarProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onDirection = (event: Event) => {
      const customEvent = event as CustomEvent<"up" | "down">;
      setHidden(customEvent.detail === "down");
    };
    window.addEventListener("reader-scroll-direction", onDirection as EventListener);
    return () => {
      window.removeEventListener("reader-scroll-direction", onDirection as EventListener);
    };
  }, []);

  return (
    <nav
      className={`fixed left-[60px] right-0 top-0 isolate z-[2] flex h-[60px] w-auto translate-x-0 items-center justify-center border-b border-[var(--color-divider)] bg-[var(--color-surface)] transition-transform duration-300 ease-linear max-[1023px]:left-0 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex h-full w-full items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenSurah}
            className="mr-2 flex size-[34px] min-w-[34px] items-center justify-center rounded-full bg-[var(--color-accent-soft)] p-2 text-[var(--color-topbar-icon)] min-[1024px]:hidden"
            aria-label="Open surah menu"
          >
            <Menu className="h-[18px] w-[18px]" />
          </button>
          <a className="flex items-center gap-2.5" href="/">
            <div className="select-none space-y-[2px] text-left">
              <p className="mt-[2px] font-sans text-xl font-bold leading-none text-[var(--color-text-main)]">Quran Mazid</p>
              <p className="w-max text-[10px] tracking-tight text-[var(--color-text-muted)] max-[1023px]:hidden">Read, Study, and Learn The Quran</p>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-6 tablet:gap-6">
          <div className="group relative">
            <button type="button" className="flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-[var(--color-accent-soft)] p-2 active:scale-90 text-[var(--color-topbar-icon)]" data-state="closed" aria-label="Search"><TopbarSearchIcon className="h-[18px] w-[18px]" /></button>
            <span className="pointer-events-none absolute left-1/2 top-[42px] z-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#d9d9d9] px-3 py-2 text-[12px] leading-none text-[#2a2a2a] opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
              Search
            </span>
          </div>
          <div className="group relative">
            <button type="button" className="flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-[var(--color-accent-soft)] p-2 active:scale-90 text-[var(--color-topbar-icon)]" data-state="closed" aria-label="Theme"><TopbarThemeIcon className="h-[18px] w-[18px]" /></button>
            <span className="pointer-events-none absolute left-1/2 top-[42px] z-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#d9d9d9] px-3 py-2 text-[12px] leading-none text-[#2a2a2a] opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
              Theme
            </span>
          </div>
          <div className="group relative min-[1440px]:hidden">
            <button
              type="button"
              onClick={onOpenSettings}
              className="flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-[var(--color-accent-soft)] p-2 active:scale-90 text-[var(--color-topbar-icon)]"
              data-state="closed"
              aria-label="Setting"
            >
              <TopbarSetingIcon className="h-[18px] w-[18px]" />
            </button>
            <span className="pointer-events-none absolute left-1/2 top-[42px] z-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#d9d9d9] px-3 py-2 text-[12px] leading-none text-[#2a2a2a] opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
              Setting
            </span>
          </div>
          <a target="_blank" href="#" className="hidden h-[38px] min-w-[136px] select-none items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-2 text-[var(--color-neutral-100)] min-[1024px]:flex"><span className="text-base font-medium text-white">Support Us</span><TopbarSupportIcon className="h-[18px] w-[18px]" /></a>
        </div>
      </div>
    </nav>
  );
}


