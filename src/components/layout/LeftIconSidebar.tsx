import Image from "next/image";
import type { ReactNode } from "react";
import LeftbarBookmarkIcon from "../../../public/icons/leftbarbookmarkicon";
import LeftbarGoIcon from "../../../public/icons/leftbargoicon";
import LeftbarHomeIcon from "../../../public/icons/leftbarhomeicon";
import LeftbarOthersIcon from "../../../public/icons/leftbarothersicon";
import LeftbarReadIcon from "../../../public/icons/leftbarreadicon";

type SidebarIconItemProps = {
  href?: string;
  label: string;
  children: ReactNode;
};

function SidebarIconItem({ href, label, children }: SidebarIconItemProps) {
  const content = (
    <>
      <button
        data-state="closed"
        className="flex size-9 cursor-pointer items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px] [&_svg]:stroke-[0.5px] hover:[&_svg]:stroke-[0.7px]"
        type="button"
        aria-label={label}
      >
        {children}
      </button>
      <span className="pointer-events-none absolute left-[44px] top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#d9d9d9] px-3 py-2 text-[12px] leading-none text-[#2a2a2a] opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
        {label}
      </span>
    </>
  );

  return (
    <div className="group relative">
      {href ? <a href={href}>{content}</a> : content}
    </div>
  );
}

export default function LeftIconSidebar() {
  return (
    <>
      <aside className="hidden h-dvh border-r border-[var(--color-divider)] bg-[var(--color-divider)] min-[1024px]:block">
        <nav className="fixed bottom-0 isolate z-[3] h-dvh w-[60px] translate-y-0 bg-[var(--color-divider)]">
          <div className="flex h-full w-full flex-col items-center">
            <a className="py-3" href="/">
              <Image src="/logo.svg" alt="Quran Mazid Logo" width={36} height={36} className="h-9 w-9" priority />
            </a>

            <div className="flex h-[calc(100dvh-120px)] flex-col items-center justify-center gap-6 text-[var(--color-icon-muted)]">
              <SidebarIconItem href="/" label="Home">
                <LeftbarHomeIcon />
              </SidebarIconItem>
              <SidebarIconItem href="/" label="Read">
                <LeftbarReadIcon />
              </SidebarIconItem>
              <SidebarIconItem href="/" label="Go to Ayah">
                <LeftbarGoIcon />
              </SidebarIconItem>
              <SidebarIconItem href="/" label="Bookmark">
                <LeftbarBookmarkIcon />
              </SidebarIconItem>
              <SidebarIconItem href="/" label="Others">
                <LeftbarOthersIcon />
              </SidebarIconItem>
            </div>

            <div className="h-[60px] w-full" />
          </div>
        </nav>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-[30] h-[56px] border-t border-[var(--color-divider)] bg-[var(--color-divider)] min-[1024px]:hidden">
        <div className="flex h-full w-full flex-col items-center">
          <div className="flex h-full w-full items-center justify-center gap-8 text-[var(--color-icon-muted)]">
            <a href="/" className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px] [&_svg]:stroke-[0.5px]">
              <LeftbarHomeIcon />
            </a>
            <a href="/" className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px] [&_svg]:stroke-[0.5px]">
              <LeftbarReadIcon />
            </a>
            <a href="/" className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px] [&_svg]:stroke-[0.5px]">
              <LeftbarGoIcon />
            </a>
            <a href="/" className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px] [&_svg]:stroke-[0.5px]">
              <LeftbarBookmarkIcon />
            </a>
            <a href="/" className="flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 [&_svg]:size-[22px] [&_svg]:stroke-[0.5px]">
              <LeftbarOthersIcon />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}


