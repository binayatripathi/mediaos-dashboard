export default function Home() {
  const brands = [
    { name: "Harness AI", tone: "Operator-grade AI systems", status: "Active" },
    { name: "Viva Electric", tone: "Field proof + trust", status: "Active" },
    { name: "PropertyX", tone: "Tokenization + authority", status: "Planning" },
    { name: "StoryWonderBook", tone: "Whimsy + wonder", status: "Draft" },
  ];

  const workflows = [
    "Stock explainer",
    "Founder authority",
    "Client proof montage",
    "Slideshow promo",
  ];

  const jobs = [
    { title: "3x Harness founder clips", brand: "Harness AI", state: "Queued" },
    { title: "Viva before/after reel", brand: "Viva Electric", state: "Review" },
    { title: "PropertyX tokenization short", brand: "PropertyX", state: "Drafting" },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              MediaOS Dashboard
            </p>
            <h1 className="font-[var(--font-display)] text-4xl leading-tight md:text-6xl">
              One control room for every brand video workflow.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] md:text-lg">
              Brand packs, workflow routing, render queues, approvals, and asset-aware production in one place.
            </p>
          </div>

          <div className="grid min-w-[280px] grid-cols-2 gap-3">
            <div className="panel">
              <div className="eyebrow">Brands</div>
              <div className="metric">8</div>
            </div>
            <div className="panel">
              <div className="eyebrow">Active jobs</div>
              <div className="metric">23</div>
            </div>
            <div className="panel">
              <div className="eyebrow">Renderers</div>
              <div className="metric">3</div>
            </div>
            <div className="panel">
              <div className="eyebrow">Needs review</div>
              <div className="metric">6</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <section className="card">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Create job</p>
                  <h2 className="section-title">Launch a new media run</h2>
                </div>
                <button className="primary-btn">New Job</button>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="label">Brand</label>
                  <div className="input-shell">Harness AI</div>
                </div>
                <div>
                  <label className="label">Workflow</label>
                  <div className="input-shell">Founder authority</div>
                </div>
                <div>
                  <label className="label">Platform</label>
                  <div className="input-shell">TikTok / Reels / Shorts</div>
                </div>
                <div>
                  <label className="label">Volume</label>
                  <div className="input-shell">5 videos</div>
                </div>
              </div>
            </section>

            <section className="card">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Queue</p>
                  <h2 className="section-title">Current jobs</h2>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {jobs.map((job) => (
                  <div key={job.title} className="list-row">
                    <div>
                      <div className="row-title">{job.title}</div>
                      <div className="row-subtitle">{job.brand}</div>
                    </div>
                    <span className="badge">{job.state}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="card">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Brands</p>
                  <h2 className="section-title">Brand packs</h2>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {brands.map((brand) => (
                  <div key={brand.name} className="list-row">
                    <div>
                      <div className="row-title">{brand.name}</div>
                      <div className="row-subtitle">{brand.tone}</div>
                    </div>
                    <span className="badge badge-muted">{brand.status}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="card">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Workflow registry</p>
                  <h2 className="section-title">Available pipelines</h2>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {workflows.map((workflow) => (
                  <div key={workflow} className="soft-panel">
                    {workflow}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
