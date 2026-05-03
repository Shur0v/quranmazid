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

          <div className="grid grid-cols-[280px_1fr_300px] pt-[60px]">
            <aside className="border-r border-border bg-panel-soft p-4">
              <div className="mb-4 rounded-lg border border-border p-2 text-center text-sm font-medium">
                Surah Tab Area
              </div>
              <div className="mb-4 rounded-lg border border-border p-2 text-sm text-muted">
                Search Surah Box
              </div>
              <div className="space-y-3">
                {["Surah Item One", "Surah Item Two", "Surah Item Three", "Surah Item Four"].map(
                  (item) => (
                    <div key={item} className="rounded-xl border border-border p-3">
                      <p className="text-sm font-semibold">{item}</p>
                      <p className="text-xs text-muted">Arabic English Name</p>
                    </div>
                  )
                )}
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
