import useInView from "../hooks/useInView";

const batches = [
  {
    label: "Expired",
    count: 3,
    value: "Rs 8,420",
    width: "18%",
    color: "#DC2626",
  },
  {
    label: "Under 30 days",
    count: 7,
    value: "Rs 22,840",
    width: "38%",
    color: "#b45309",
  },
  {
    label: "30–60 days",
    count: 12,
    value: "Rs 41,200",
    width: "60%",
    color: "#d97706",
  },
  {
    label: "60–90 days",
    count: 19,
    value: "Rs 76,500",
    width: "88%",
    color: "#600010",
  },
];

export default function Stock() {
  const [ref, inView] = useInView();
  return (
    <section id="stock" className="section section-white" ref={ref}>
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1.02fr] lg:items-center">
          {/* Screenshot / mock */}
          <div className={`fade-rise ${inView ? "in" : ""}`}>
            {/* <div className="screen-frame-light" style={{ overflow: 'hidden' }}>
              <div className="browser-chrome-light">
                <span className="chrome-dot" style={{ background: '#ff5f57' }} />
                <span className="chrome-dot" style={{ background: '#febc2e' }} />
                <span className="chrome-dot" style={{ background: '#28c840' }} />
                <div style={{ flex: 1, marginLeft: 10, background: '#eee', borderRadius: 4, height: 18, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
                  <span style={{ fontSize: '10.5px', color: '#aaa' }}>app.easepharma.store/expiry</span>
                </div>
              </div>
              <div style={{ background: '#fff', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#1A012C' }}>Expiry Risk Dashboard</div>
                    <div style={{ fontSize: '12.5px', color: '#7a6886', marginTop: 2 }}>Money at risk by expiry window</div>
                  </div>
                  <span style={{ borderRadius: 999, padding: '4px 12px', background: 'rgba(220,38,38,.08)', color: '#DC2626', fontSize: '11.5px', fontWeight: 700 }}>3 expired</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {batches.map((b, i) => (
                    <div key={b.label}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, fontSize: '12.5px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ width: 8, height: 8, borderRadius: '50%', background: b.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: '#1A012C' }}>{b.label}</span>
                          <span style={{ borderRadius: 999, padding: '2px 10px', background: 'rgba(96,0,16,.08)', color: '#600010', fontWeight: 700, fontSize: '11px' }}>{b.count} batches</span>
                        </div>
                        <span className="tabnum" style={{ fontWeight: 800, color: b.color }}>{b.value}</span>
                      </div>
                      <div style={{ height: 8, borderRadius: 999, background: 'rgba(96,0,16,.08)', overflow: 'hidden' }}>
                        <div
                          className="reveal-bar"
                          style={{ height: '100%', borderRadius: 999, background: b.color, width: b.width, transitionDelay: `${i * 130}ms` }}
                        />
                      </div>
                      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                        <span style={{ borderRadius: 999, padding: '3px 12px', background: '#600010', color: '#fff', fontSize: '11px', fontWeight: 700 }}>
                          {b.label === 'Expired' ? 'DRAP batch lock' : 'Apply discount'}
                        </span>
                        <span style={{ borderRadius: 999, padding: '3px 12px', border: '1px solid #e8e3ef', color: '#7a6886', fontSize: '11px' }}>
                          Return to supplier
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 10, borderRadius: 12, border: '1px solid rgba(220,38,38,.2)', background: 'rgba(220,38,38,.04)', padding: '10px 14px' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M8 2.5L13.5 12H2.5L8 2.5Z" stroke="#DC2626" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M8 7v3M8 11.5v.5" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div style={{ fontSize: '12.5px' }}>
                    <strong style={{ color: '#DC2626' }}>DRAP Recall:</strong>
                    <span style={{ color: '#7a6886' }}> Metformin Batch MT-2024 locked at all counters</span>
                  </div>
                </div>
              </div>
            </div> */}
            <video
              src="/expiry.MOV"
              autoPlay
              loop
              muted
              className="rounded-2xl overflow-hidden shadow-2xl border border-[rgba(26,1,44,0.08)] bg-white"
            />
          </div>

          {/* Text */}
          <div
            className={`fade-rise ${inView ? "in" : ""}`}
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="h2" style={{ color: "#1A012C" }}>
              See every rupee
              <br />
              expiring in real time.
            </h2>
            <p className="lede lede-light" style={{ marginTop: 18 }}>
              Four expiry windows, suggested markdowns or supplier returns, and
              automatic DRAP recall batch locks — no manual checking, no
              surprise losses.
            </p>
            <ul
              style={{
                marginTop: 32,
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {[
                [
                  "FEFO batch auto-selection",
                  "The nearest-expiry batch is always chosen at billing — automatically.",
                ],
                [
                  "Reorder alerts from sales velocity",
                  "Stock-out predictions based on speed vs supplier lead time.",
                ],
                [
                  "WhatsApp order to distributor",
                  "One tap sends a formatted order to your supplier.",
                ],
                [
                  "Goods received note (GRN)",
                  "Match deliveries to purchase orders, catch short shipments.",
                ],
              ].map(([title, body]) => (
                <li key={title} style={{ display: "flex", gap: 14 }}>
                  <span
                    style={{
                      marginTop: 3,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#600010",
                      color: "#fff",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 12,
                      fontWeight: 900,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#1A012C",
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#7a6886",
                        marginTop: 2,
                      }}
                    >
                      {body}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
