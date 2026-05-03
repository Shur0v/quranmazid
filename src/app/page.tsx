import Image from "next/image";
import LeftbarHomeIcon from "../../public/icons/leftbarhomeicon";
import LeftbarReadIcon from "../../public/icons/leftbarreadicon";
import LeftbarGoIcon from "../../public/icons/leftbargoicon";
import LeftbarBookmarkIcon from "../../public/icons/leftbarbookmarkicon";
import LeftbarOthersIcon from "../../public/icons/leftbarothersicon";
import TopbarSearchIcon from "../../public/icons/topbarsearchicon";
import TopbarSetingIcon from "../../public/icons/topbarsetingicon";
import TopbarSupportIcon from "../../public/icons/topbarsupporticon";
import TopbarThemeIcon from "../../public/icons/topbarthemeicon";
import { BookOpen, Bookmark, Ellipsis, Play } from "lucide-react";

export default function Home() {
  const surahItems = [
    { id: "001", name: "Al Fatihah", subtitle: "The Opener", active: true },
    { id: "002", name: "Al Baqarah", subtitle: "The Cow" },
    { id: "003", name: "Al Imran", subtitle: "Family of Imran" },
    { id: "004", name: "An Nisa", subtitle: "The Women" },
    { id: "005", name: "Al Ma'idah", subtitle: "The Table Spread" },
    { id: "006", name: "Al An'am", subtitle: "The Cattle" },
    { id: "007", name: "Al A'raf", subtitle: "The Heights" },
    { id: "008", name: "Al Anfal", subtitle: "The Spoils of War" },
    { id: "009", name: "At Tawbah", subtitle: "The Repentance" },
  ];

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-foreground">
      <div className="grid min-h-screen grid-cols-[60px_1fr]">
        <aside className="h-screen border-r border-[#24262b] bg-[#171717]">
          <nav className="fixed bottom-0 isolate z-[3] h-screen w-[60px] translate-y-0 bg-[#171717]">
            <div className="flex h-full w-full flex-col items-center">
              <a className="py-3" href="/">
                <Image src="/logo.svg" alt="Quran Mazid Logo" width={36} height={36} className="h-9 w-9" priority />
              </a>

              <div className="flex h-[calc(100vh-120px)] flex-col items-center justify-center gap-6 text-[#8f9491]">
                <a href="/"><button data-state="closed" className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px]" type="button"><LeftbarHomeIcon /></button></a>
                <a href="/1"><button data-state="closed" className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px]" type="button"><LeftbarReadIcon /></button></a>
                <a href="/go"><button data-state="closed" className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px]" type="button"><LeftbarGoIcon /></button></a>
                <a href="/Profile/bookmarks"><button data-state="closed" className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px]" type="button"><LeftbarBookmarkIcon /></button></a>
                <button data-state="closed" className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px]" type="button"><LeftbarOthersIcon /></button>
              </div>

              <div className="h-[60px] w-full" />
            </div>
          </nav>
        </aside>

        <div className="grid min-h-screen grid-rows-[60px_1fr]">
          <nav className="fixed top-0 isolate z-[2] flex h-[60px] w-[calc(100%-60px)] translate-x-0 items-center justify-center border-b border-[#1b2432] bg-[#0d0d0d] transition-transform duration-300 ease-linear">
            <div className="flex h-full w-full items-center justify-between px-6">
              <div className="flex items-center gap-2.5">
                <a className="flex items-center gap-2.5 max-tablet:hidden" href="/">
                  <div className="select-none space-y-[2px] text-left">
                    <p className="mt-[2px] font-sans text-xl font-bold leading-none text-[#c4c4c4]">Quran Mazid</p>
                    <p className="w-max text-[10px] tracking-tight text-[#787d7a]">Read, Study, and Learn The Quran</p>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-6 tablet:gap-6">
                <button type="button" className="group flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#42803812] p-2 active:scale-90 text-[#2b7d38]" data-state="closed" aria-label="icon"><TopbarSearchIcon className="h-[18px] w-[18px]" /></button>
                <button type="button" className="group flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#42803812] p-2 active:scale-90 text-[#2b7d38]" data-state="closed" aria-label="icon"><TopbarThemeIcon className="h-[18px] w-[18px]" /></button>
                <button type="button" className="group flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#42803812] p-2 active:scale-90 text-[#2b7d38]" data-state="closed" aria-label="icon"><TopbarSetingIcon className="h-[18px] w-[18px]" /></button>
                <a target="_blank" href="#" className="flex h-[38px] min-w-[136px] select-none items-center justify-center gap-2 rounded-full bg-[#428038] px-2 text-[#f3f4f6]"><span className="text-base font-medium text-white">Support Us</span><TopbarSupportIcon className="h-[18px] w-[18px]" /></a>
              </div>
            </div>
          </nav>

          <div className="grid grid-cols-[299px_1fr_300px] pt-[60px]">
            <aside className="sticky top-[--top-nav-size] isolate z-[1] h-[calc(100vh-60px)] overflow-hidden bg-[#0d0d0d] transition-all duration-300 ease-linear max-laptop:hidden">
              <div className="flex h-full w-full border-e border-[#1b2432]">
                <div className="flex h-full w-full flex-col overflow-y-auto pt-6">
                  <div className="relative isolate flex min-h-10 items-center rounded-full border-4 border-[#171717] bg-[#171717] mb-4 mx-6">
                    <button className="z-10 h-full w-full text-[14px] font-semibold text-[#c4c4c4]">Surah</button>
                    <button className="z-10 h-full w-full text-[14px] text-[#787d7a]">Juz</button>
                    <button className="z-10 h-full w-full text-[14px] text-[#787d7a]">Page</button>
                    <div className="absolute h-full rounded-full bg-[#0d0d0d] transition-transform duration-300 ease-in-out w-[calc(33.333333333333336%)] translate-x-[0%]" />
                  </div>

                  <div className="mb-4 px-6">
                    <div className="flex h-10 items-center gap-3 rounded-full border border-[#1b2432] bg-[#171717] px-3 text-base text-[#787d7a]">
                      <TopbarSearchIcon className="h-[21px] w-[21px] text-[#787d7a]" />
                      <input type="text" className="w-full bg-transparent font-light outline-none placeholder:text-[#787d7ab3]" placeholder="Search Surah" aria-label="Search Surah" />
                    </div>
                  </div>

                  <div className="surah-scroll overflow-y-auto pb-2">
                    {surahItems.map((surah) => (
                      <div key={surah.id} className="block pb-2 pe-[26px] ps-[26px]">
                        <a href={`/${surah.id}`}>
                          <div className={`group/card flex w-full min-w-[200px] cursor-pointer select-none items-center justify-between gap-5 rounded-xl border border-[#1b2432] px-4 tablet:gap-4 h-[76px] hover:bg-[#132617]/35 ${surah.active ? "!border-[#2f6b32]/30 !bg-[#132617]/35" : ""}`}>
                            <div className={`flex size-[32px] min-h-8 min-w-8 rotate-45 items-center justify-center rounded-[6px] transition-colors duration-200 ${surah.active ? "bg-[#428038]" : "bg-[#131922] group-hover/card:bg-[#428038]"}`}>
                              <span className={`-rotate-45 font-medium text-[13px] transition-colors duration-200 ${surah.active ? "text-[#ffffff]" : "text-[#787D7A] group-hover/card:text-[#ffffff]"}`}>{surah.id.replace(/^0+/, "")}</span>
                            </div>
                            <div className="flex-grow text-start w-1/2 laptop:w-full desktop:w-1/2 desktop:flex-shrink-0">
                              <p className="line-clamp-1 break-all pr-3 text-[15px] font-medium text-[#c4c4c4]">{surah.name}</p>
                              <p className="line-clamp-1 break-all text-[13px] font-normal text-[#787d7a]">{surah.subtitle}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <section className="border-r border-border">
              <section className="[--padding-x:15px] tablet:[--padding-x:24px] desktop:[--padding-x:36px]">
                <div className="grid grid-cols-3 items-center px-[20px] py-[16px]">
                  <div className="flex items-center justify-start">
                    <Image
                      src="https://quranmazid.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmakkah.a06c3e3e.png&w=384&q=75"
                      alt="makkah image"
                      width={140}
                      height={95}
                      className="h-[94.5px] w-[140px] brightness-1000 contrast-110"
                      unoptimized
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h1 className="text-[22px] font-semibold leading-none text-[#c4c4c4]">Surah Al Fatihah</h1>
                    <p className="text-[14px] capitalize text-[#787d7a]">Ayah-7, Makkah</p>
                  </div>
                  <div />
                </div>

                {[{ k: "1:1", a: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", t: "In the name of Allah, the Entirely Merciful, the Especially Merciful." }, { k: "1:2", a: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", t: "[All] praise is [due] to Allah, Lord of the worlds -" }, { k: "1:3", a: "الرَّحْمَٰنِ الرَّحِيمِ", t: "The Entirely Merciful, the Especially Merciful," }].map((ayah) => (
                  <div key={ayah.k} className="relative overflow-hidden border-b border-[#1b2432] px-[24px] py-[18px]">
                    <div className="w-full">
                      <p className="text-[32px] font-semibold leading-none text-[#2f8f42]">{ayah.k}</p>
                    </div>
                    <div className="mt-3 flex w-full gap-7">
                      <div className="flex w-[34px] min-w-[34px] flex-col items-center gap-2">
                        <button className="flex size-[34px] items-center justify-center rounded-full p-2 text-[#787d7a] hover:bg-[#132617]"><Play size={18} strokeWidth={1.8} /></button>
                        <button className="flex size-[34px] items-center justify-center rounded-full p-2 text-[#787d7a] hover:bg-[#132617]"><BookOpen size={18} strokeWidth={1.8} /></button>
                        <button className="flex size-[34px] items-center justify-center rounded-full p-2 text-[#787d7a] hover:bg-[#132617]"><Bookmark size={18} strokeWidth={1.8} /></button>
                        <button className="flex size-[34px] items-center justify-center rounded-full p-2 text-[#787d7a] hover:bg-[#132617]"><Ellipsis size={18} strokeWidth={1.8} /></button>
                      </div>
                      <div className="flex-1">
                        <div>
                          <p className="font-arabic text-right text-[54px] leading-[1.35] text-[#c4c4c4]">{ayah.a}</p>
                        </div>
                        <div className="mt-4">
                          <p className="text-[13px] uppercase text-[#787d7a]">SAHEEH INTERNATIONAL</p>
                        </div>
                        <div className="mt-2">
                          <p className="text-[20px] leading-[1.5] text-[#c4c4c4]">{ayah.t}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </section>

            <aside className="bg-panel p-4">
              <div className="mb-4 rounded-lg border border-border p-2 text-center text-sm font-medium">Translation Reading</div>
              <div className="space-y-3">
                <div className="rounded-lg border border-border p-3 text-sm">Reading Settings</div>
                <div className="rounded-lg border border-border p-3 text-sm">Font Settings Panel</div>
                <div className="rounded-lg border border-border p-3 text-sm">Arabic Size Slider</div>
                <div className="rounded-lg border border-border p-3 text-sm">Translation Size Slider</div>
                <div className="rounded-lg border border-border p-3 text-sm">Arabic Font Select</div>
                <div className="rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm">Help Support Card</div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}


