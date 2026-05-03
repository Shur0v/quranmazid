import { BookOpen, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

export default function RightSettingsPanel() {
  return (
    <aside className="border-l border-[#1b2432] bg-[#0d0d0d] px-5 py-6">
      <div className="relative isolate mb-6 flex min-h-10 items-center rounded-full border-4 border-[#171717] bg-[#171717]">
        <button className="z-10 h-full w-full text-[14px] font-semibold text-[#c4c4c4]">Translation</button>
        <button className="z-10 h-full w-full text-[14px] text-[#787d7a]">Reading</button>
        <div className="absolute h-full w-1/2 rounded-full bg-[#0d0d0d]" />
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between py-3 text-[#c4c4c4]">
          <div className="flex items-center gap-3">
            <BookOpen size={18} strokeWidth={1.8} className="text-[#8f9491]" />
            <p className="text-[15px] font-semibold leading-none">Reading Settings</p>
          </div>
          <ChevronDown size={18} className="text-[#8f9491]" />
        </div>

        <div className="flex items-center justify-between text-[#2f8f42]">
          <div className="flex items-center gap-3">
            <div className="flex size-[18px] items-center justify-center rounded-full bg-[#2f8f42] text-[11px] font-bold text-[#0d0d0d]">T</div>
            <p className="text-[15px] font-semibold leading-none">Font Settings</p>
          </div>
          <ChevronUp size={18} className="text-[#2f8f42]" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between pt-4">
            <p className="text-[15px] font-semibold leading-none text-[#c4c4c4]">Arabic Font Size</p>
            <p className="text-[13px] font-medium leading-none text-[#2f8f42]">34</p>
          </div>
          <div className="h-[4px] w-full rounded-full bg-[#2a2a2a]">
            <div className="relative h-full w-[34%] rounded-full bg-[#2f8f42]">
              <span className="absolute right-0 top-1/2 size-[14px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#2f8f42]" />
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between pt-4">
            <p className="text-[15px] font-semibold leading-none text-[#c4c4c4]">Translation Font Size</p>
            <p className="text-[13px] font-medium leading-none text-[#2f8f42]">20</p>
          </div>
          <div className="h-[4px] w-full rounded-full bg-[#2a2a2a]">
            <div className="relative h-full w-[20%] rounded-full bg-[#2f8f42]">
              <span className="absolute right-0 top-1/2 size-[14px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#2f8f42]" />
            </div>
          </div>
        </div>

        <div className="mb-10 mt-8 space-y-2">
          <p className="text-[15px] font-semibold leading-none text-[#c4c4c4]">Arabic Font Face</p>
          <button className="flex min-h-[40px] w-full items-center justify-between rounded-sm bg-[#171717] px-4 py-[10px] text-left">
            <span className="text-[14px] font-medium leading-none text-[#c4c4c4]">KFGQ</span>
            <ChevronRight size={18} className="text-[#8f9491]" />
          </button>
        </div>

        <div className="rounded-2xl border border-none bg-gradient-to-br from-[#0f2012]/40 to-[#102614]/60 p-4">
          <p className="text-[16px] font-bold leading-[1.45] text-[#c4c4c4]">Help spread the knowledge of Islam</p>
          <p className="relative z-20 mt-2 text-[13px] leading-[1.5] text-[#787d7a]">
            Your regular support helps us reach our religious brothers and sisters with the message of Islam. Join our mission and be part of the big change.
          </p>
          <button className="mt-3 flex h-10 w-full items-center justify-center rounded-sm bg-[#428038] px-4 text-[14px] font-semibold leading-none text-white">Support Us</button>
        </div>
      </div>
    </aside>
  );
}
