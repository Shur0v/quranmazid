import AppShell from "@/components/layout/AppShell";
import LeftIconSidebar from "@/components/layout/LeftIconSidebar";
import RightSettingsPanel from "@/components/layout/RightSettingsPanel";
import SurahSidebar from "@/components/layout/SurahSidebar";
import TopBar from "@/components/layout/TopBar";
import ReaderPanel from "@/components/reader/ReaderPanel";
import { ReaderSettingsProvider } from "@/components/settings/ReaderSettingsProvider";
import { getReaderPageData } from "@/lib/reader-page-data";

type SurahPageProps = {
  params: Promise<{ surahId: string }>;
};

export default async function SurahReaderPage({ params }: SurahPageProps) {
  const { surahId } = await params;
  const selectedSurahId = Number(surahId) || 1;
  const { surahs, surahDetail } = await getReaderPageData(selectedSurahId);

  const surahItems = surahs.map((item) => ({
    id: item.id,
    name: item.nameSimple,
    subtitle: item.nameTranslation,
    arabicName: item.nameArabic,
    active: item.id === surahDetail.id,
  }));

  const ayahs = surahDetail.ayahs.map((ayah) => ({
    k: ayah.ayahKey,
    a: ayah.arabicText,
    t: ayah.translationText,
  }));

  return (
    <ReaderSettingsProvider>
      <AppShell
        leftSidebar={<LeftIconSidebar />}
        topBar={<TopBar />}
        surahSidebar={<SurahSidebar surahItems={surahItems} />}
        readerPanel={
          <ReaderPanel
            surahName={`Surah ${surahDetail.nameSimple}`}
            surahMeta={`Ayah-${surahDetail.ayahCount}, ${surahDetail.revelationType}`}
            ayahs={ayahs}
          />
        }
        rightPanel={<RightSettingsPanel />}
      />
    </ReaderSettingsProvider>
  );
}
