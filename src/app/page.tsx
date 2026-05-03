export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen grid-cols-[56px_280px_1fr_300px]">
        <aside className="border-r border-border bg-panel p-3">
          <div className="mb-6 rounded-md bg-accent/20 p-2 text-center text-xs font-semibold text-accent">
            Logo
          </div>
          <div className="space-y-3">
            <div className="rounded-md border border-border p-2 text-center text-xs text-muted">
              Icon One
            </div>
            <div className="rounded-md border border-border p-2 text-center text-xs text-muted">
              Icon Two
            </div>
            <div className="rounded-md border border-border p-2 text-center text-xs text-muted">
              Icon Three
            </div>
          </div>
        </aside>

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
          <div className="border-b border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Top Bar Header</p>
                <p className="text-xs text-muted">Reader Title Area</p>
              </div>
              <button className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black">
                Support Us
              </button>
            </div>
          </div>

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
            <div className="rounded-lg border border-border p-3 text-sm">
              Translation Size Slider
            </div>
            <div className="rounded-lg border border-border p-3 text-sm">Arabic Font Select</div>
            <div className="rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm">
              Help Support Card
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
