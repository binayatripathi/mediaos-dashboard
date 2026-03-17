const brands = [
  { name: 'Harness AI', tone: 'Operator-grade AI systems', status: 'Active' },
  { name: 'Viva Electric', tone: 'Field proof + trust', status: 'Active' },
  { name: 'PropertyX', tone: 'Tokenization + authority', status: 'Planning' },
  { name: 'StoryWonderBook', tone: 'Whimsy + wonder', status: 'Draft' },
]

const workflows = [
  'Stock explainer',
  'Founder authority',
  'Client proof montage',
  'Slideshow promo',
  'Custom asset narrative',
  'AI image-to-video pipeline',
]

const jobs = [
  { title: '3x Harness founder clips', brand: 'Harness AI', state: 'Queued' },
  { title: 'Viva before/after reel', brand: 'Viva Electric', state: 'Review' },
  { title: 'PropertyX tokenization short', brand: 'PropertyX', state: 'Drafting' },
]

const capabilities = [
  'Brand packs',
  'Workflow routing',
  'Script generation',
  'Asset generation / upload',
  'Render jobs',
  'Approvals',
  'Publishing',
  'Analytics feedback',
]

export default function App() {
  return (
    <main className="app-shell">
      <section className="page">
        <div className="hero">
          <div className="hero-copy">
            <p className="eyebrow accent">MediaOS Dashboard</p>
            <h1>One control room for full video generation across every brand.</h1>
            <p className="hero-text">
              Multi-brand video operations with brand packs, workflow routing, render queues,
              approvals, publishing, and full generation capability.
            </p>
          </div>

          <div className="metrics-grid">
            <div className="panel"><div className="eyebrow">Brands</div><div className="metric">8</div></div>
            <div className="panel"><div className="eyebrow">Active jobs</div><div className="metric">23</div></div>
            <div className="panel"><div className="eyebrow">Renderers</div><div className="metric">3</div></div>
            <div className="panel"><div className="eyebrow">Needs review</div><div className="metric">6</div></div>
          </div>
        </div>

        <div className="content-grid">
          <div className="column">
            <section className="card">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Create job</p>
                  <h2>Launch a new media run</h2>
                </div>
                <button className="primary-btn">New Job</button>
              </div>

              <div className="form-grid">
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
                  <h2>Current jobs</h2>
                </div>
              </div>
              <div className="stack mt">
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

          <div className="column">
            <section className="card">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Brands</p>
                  <h2>Brand packs</h2>
                </div>
              </div>
              <div className="stack mt">
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
                  <h2>Generation pipelines</h2>
                </div>
              </div>
              <div className="stack mt">
                {workflows.map((workflow) => (
                  <div key={workflow} className="soft-panel">{workflow}</div>
                ))}
              </div>
            </section>

            <section className="card">
              <div className="section-head">
                <div>
                  <p className="eyebrow">System scope</p>
                  <h2>Full media capabilities</h2>
                </div>
              </div>
              <div className="cap-grid mt">
                {capabilities.map((item) => (
                  <div key={item} className="soft-panel">{item}</div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
