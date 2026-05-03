import AppShell from "@/components/layout/AppShell";
import LeftIconSidebar from "@/components/layout/LeftIconSidebar";
import RightSettingsPanel from "@/components/layout/RightSettingsPanel";
import SurahSidebar from "@/components/layout/SurahSidebar";
import TopBar from "@/components/layout/TopBar";
import ReaderPanel from "@/components/reader/ReaderPanel";

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

  const ayahs = [
    { k: "1:1", a: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", t: "In the name of Allah, the Entirely Merciful, the Especially Merciful." },
    { k: "1:2", a: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", t: "[All] praise is [due] to Allah, Lord of the worlds -" },
    { k: "1:3", a: "الرَّحْمَٰنِ الرَّحِيمِ", t: "The Entirely Merciful, the Especially Merciful," },
  ];

  return (
    <AppShell
      leftSidebar={<LeftIconSidebar />}
      topBar={<TopBar />}
      surahSidebar={<SurahSidebar surahItems={surahItems} />}
      readerPanel={<ReaderPanel ayahs={ayahs} />}
      rightPanel={<RightSettingsPanel />}
    />
  );
}
