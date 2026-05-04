 "use client";

import { useEffect, useState } from "react";
import TopbarSearchIcon from "../../../public/icons/topbarsearchicon";
import TopbarSetingIcon from "../../../public/icons/topbarsetingicon";
import TopbarSupportIcon from "../../../public/icons/topbarsupporticon";
import TopbarThemeIcon from "../../../public/icons/topbarthemeicon";

export default function TopBar() {
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
      className={`fixed left-[60px] right-0 top-0 isolate z-[2] flex h-[60px] w-auto translate-x-0 items-center justify-center border-b border-[#171717] bg-[#0d0d0d] transition-transform duration-300 ease-linear ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
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
  );
}
