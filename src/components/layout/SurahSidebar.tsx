 "use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import TopbarSearchIcon from "../../../public/icons/topbarsearchicon";

type SurahItem = {
  id: number;
  name: string;
  subtitle: string;
  arabicName: string;
  active?: boolean;
};

type SurahSidebarProps = {
  surahItems: SurahItem[];
};

export default function SurahSidebar({ surahItems }: SurahSidebarProps) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"surah" | "juz" | "page">("surah");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredSurahs = useMemo(() => {
    if (!normalizedQuery) return surahItems;
    return surahItems.filter((surah) => {
      const searchableText = `${surah.id} ${surah.name} ${surah.subtitle} ${surah.arabicName}`.toLowerCase();
      return searchableText.includes(normalizedQuery);
    });
  }, [surahItems, normalizedQuery]);

  return (
    <aside className="sticky top-[--top-nav-size] isolate z-[1] h-full min-h-0 overflow-hidden bg-[var(--color-surface)] transition-all duration-300 ease-linear max-laptop:hidden">
      <div className="flex h-full w-full border-e border-[var(--color-divider)]">
        <div className="flex h-full w-full flex-col overflow-y-auto pt-6">
          <div className="relative isolate mb-4 mx-6 flex min-h-10 items-center rounded-full border-4 border-[var(--color-divider)] bg-[var(--color-divider)]">
            <button
              type="button"
              onClick={() => setActiveTab("surah")}
              className={`z-10 h-full w-full cursor-pointer text-[14px] transition-colors ${activeTab === "surah" ? "font-semibold text-[var(--color-text-main)]" : "text-[var(--color-text-muted)]"}`}
            >
              Surah
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("juz")}
              className={`z-10 h-full w-full cursor-pointer text-[14px] transition-colors ${activeTab === "juz" ? "font-semibold text-[var(--color-text-main)]" : "text-[var(--color-text-muted)]"}`}
            >
              Juz
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("page")}
              className={`z-10 h-full w-full cursor-pointer text-[14px] transition-colors ${activeTab === "page" ? "font-semibold text-[var(--color-text-main)]" : "text-[var(--color-text-muted)]"}`}
            >
              Page
            </button>
            <div
              className="absolute h-full w-[calc(33.333333333333336%)] rounded-full bg-[var(--color-surface)] transition-transform duration-300 ease-in-out"
              style={{
                transform:
                  activeTab === "surah"
                    ? "translateX(0%)"
                    : activeTab === "juz"
                      ? "translateX(100%)"
                      : "translateX(200%)",
              }}
            />
          </div>

          <div className="mb-4 px-6">
            <div className="flex h-10 items-center gap-3 rounded-full border border-[var(--color-divider)] bg-[var(--color-divider)] px-3 text-base text-[var(--color-text-muted)]">
              <TopbarSearchIcon className="h-[21px] w-[21px] text-[var(--color-text-muted)]" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full bg-transparent font-light outline-none placeholder:text-[var(--color-text-muted-70)]"
                placeholder="Search Surah"
                aria-label="Search Surah"
              />
            </div>
          </div>

          <div className="surah-scroll overflow-y-auto pb-2">
            {normalizedQuery && filteredSurahs.length === 0 ? (
              <p className="px-[26px] pb-2 text-[13px] text-[var(--color-text-muted)]">No surah found</p>
            ) : null}
            {filteredSurahs.map((surah) => (
              <div key={surah.id} className="block pb-2 pe-[26px] ps-[26px]">
                <Link href={`/surah/${surah.id}`}>
                  <div className={`group/card flex h-[76px] w-full min-w-[200px] cursor-pointer select-none items-center justify-between gap-5 rounded-xl border border-[var(--color-divider)] px-4 tablet:gap-4 hover:bg-[var(--color-hover-surface)] ${surah.active ? "!border-[var(--color-accent)]/30 !bg-[var(--color-hover-surface)]" : ""}`}>
                    <div className={`flex size-[32px] min-h-8 min-w-8 rotate-45 items-center justify-center rounded-[6px] transition-colors duration-200 ${surah.active ? "bg-[var(--color-accent)]" : "bg-[var(--color-surah-number-bg)] group-hover/card:bg-[var(--color-accent)]"}`}>
                      <span className={`-rotate-45 text-[13px] font-medium transition-colors duration-200 ${surah.active ? "text-[var(--color-neutral-100)]" : "text-[var(--color-text-muted)] group-hover/card:text-[var(--color-neutral-100)]"}`}>{surah.id}</span>
                    </div>
                    <div className="w-1/2 flex-grow text-start laptop:w-full desktop:w-1/2 desktop:flex-shrink-0">
                      <p className="line-clamp-1 break-all pr-3 text-[15px] font-medium text-[var(--color-text-main)]">{surah.name}</p>
                      <p className="line-clamp-1 break-all text-[13px] font-normal text-[var(--color-text-muted)]">{surah.subtitle}</p>
                    </div>
                    <div className="flex h-[20px] items-center justify-end max-[1439px]:hidden">
                      <p className="font-arabic-surah line-clamp-2 text-right text-[20px] leading-[1] text-[var(--color-text-muted)]">
                        {surah.arabicName}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}



