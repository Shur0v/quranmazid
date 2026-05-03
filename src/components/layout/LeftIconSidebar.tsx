import Image from "next/image";
import LeftbarBookmarkIcon from "../../../public/icons/leftbarbookmarkicon";
import LeftbarGoIcon from "../../../public/icons/leftbargoicon";
import LeftbarHomeIcon from "../../../public/icons/leftbarhomeicon";
import LeftbarOthersIcon from "../../../public/icons/leftbarothersicon";
import LeftbarReadIcon from "../../../public/icons/leftbarreadicon";

export default function LeftIconSidebar() {
  return (
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
  );
}
