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

export default function Home() {
  const surahItems = [
    { id: "001", name: "Al Fatihah", subtitle: "The Opener", arabic: "الفاتحة", active: true },
    { id: "002", name: "Al Baqarah", subtitle: "The Cow", arabic: "البقرة" },
    { id: "003", name: "Al Imran", subtitle: "Family of Imran", arabic: "آل عمران" },
    { id: "004", name: "An Nisa", subtitle: "The Women", arabic: "النساء" },
    { id: "005", name: "Al Ma'idah", subtitle: "The Table Spread", arabic: "المائدة" },
    { id: "006", name: "Al An'am", subtitle: "The Cattle", arabic: "الأنعام" },
    { id: "007", name: "Al A'raf", subtitle: "The Heights", arabic: "الأعراف" },
    { id: "008", name: "Al Anfal", subtitle: "The Spoils of War", arabic: "الأنفال" },
    { id: "009", name: "At Tawbah", subtitle: "The Repentance", arabic: "التوبة" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen grid-cols-[60px_1fr]">
        <aside className="h-screen border-r border-[#24262b] bg-[#171717]">
          <nav className="fixed bottom-0 isolate z-[3] h-screen w-[60px] translate-y-0 bg-[#171717]">
            <div className="flex h-full w-full flex-col items-center">
              <a className="py-3" href="/">
                <Image
                  src="/logo.svg"
                  alt="Quran Mazid Logo"
                  width={36}
                  height={36}
                  className="h-9 w-9"
                  priority
                />
              </a>

              <div className="flex h-[calc(100vh-120px)] flex-col items-center justify-center gap-6 text-[#8f9491]">
                <a href="/">
                  <button
                    data-state="closed"
                    className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px]"
                    type="button"
                  >
                    <LeftbarHomeIcon />
                  </button>
                </a>
                <a href="/1">
                  <button
                    data-state="closed"
                    className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px]"
                    type="button"
                  >
                    <LeftbarReadIcon />
                  </button>
                </a>
                <a href="/go">
                  <button
                    data-state="closed"
                    className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px]"
                    type="button"
                  >
                    <LeftbarGoIcon />
                  </button>
                </a>
                <a href="/Profile/bookmarks">
                  <button
                    data-state="closed"
                    className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px]"
                    type="button"
                  >
                    <LeftbarBookmarkIcon />
                  </button>
                </a>
                <button
                  data-state="closed"
                  className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px]"
                  type="button"
                >
                  <LeftbarOthersIcon />
                </button>
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
                    <p className="mt-[2px] font-sans text-xl font-bold leading-none text-[#c4c4c4]">
                      Quran Mazid
                    </p>
                    <p className="w-max text-[10px] tracking-tight text-[#787d7a]">
                      Read, Study, and Learn The Quran
                    </p>
                  </div>
                </a>
                {/* <a href="/">
                  <p className="text-body font-bold tablet:hidden tablet:text-heading-6"></p>
                </a> */}
              </div>

              <div className="flex items-center gap-6 tablet:gap-6">
                <button
                  type="button"
                  className="group flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#42803812] p-2 active:scale-90 text-[#2b7d38]"
                  data-state="closed"
                  aria-label="icon"
                >
                  <TopbarSearchIcon className="h-[18px] w-[18px]" />
                </button>
                <button
                  type="button"
                  className="group flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#42803812] p-2 active:scale-90 text-[#2b7d38]"
                  data-state="closed"
                  aria-label="icon"
                >
                  <TopbarThemeIcon className="h-[18px] w-[18px]" />
                </button>
                <button
                  type="button"
                  className="group flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#42803812] p-2 active:scale-90 text-[#2b7d38]"
                  data-state="closed"
                  aria-label="icon"
                >
                  <TopbarSetingIcon className="h-[18px] w-[18px]" />
                </button>

                <a
                  target="_blank"
                  href="#"
                  className="flex h-[38px] min-w-[136px] select-none items-center justify-center gap-2 rounded-full bg-[#428038] px-2 text-[#f3f4f6]"
                >
                  <span className="text-base font-medium text-white">Support Us</span>
                  <TopbarSupportIcon className="h-[18px] w-[18px]" />
                </a>
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
                      <input
                        type="text"
                        className="w-full bg-transparent font-light outline-none placeholder:text-[#787d7ab3]"
                        placeholder="Search Surah"
                        aria-label="Search Surah"
                      />
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
              <div className="space-y-4 p-4">
                {["Ayah Block One", "Ayah Block Two", "Ayah Block Three"].map((item) => (
                  <article key={item} className="rounded-xl border border-border p-4">
                    <p className="mb-2 text-xs text-accent">1:1</p>
                    <p className="mb-3 text-right text-2xl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                    <p className="text-lg">{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <aside className="bg-panel p-4">
              <div className="mb-4 rounded-lg border border-border p-2 text-center text-sm font-medium">
                Translation Reading
              </div>
              <div className="space-y-3">
                <div className="rounded-lg border border-border p-3 text-sm">Reading Settings</div>
                <div className="rounded-lg border border-border p-3 text-sm">Font Settings Panel</div>
                <div className="rounded-lg border border-border p-3 text-sm">Arabic Size Slider</div>
                <div className="rounded-lg border border-border p-3 text-sm">Translation Size Slider</div>
                <div className="rounded-lg border border-border p-3 text-sm">Arabic Font Select</div>
                <div className="rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm">
                  Help Support Card
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

