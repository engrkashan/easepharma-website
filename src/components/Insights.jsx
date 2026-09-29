import useInView from '../hooks/useInView'

const hours = [
  { h: '8am', v: 35 }, { h: '10am', v: 72 }, { h: '12pm', v: 88 },
  { h: '2pm', v: 55 }, { h: '4pm', v: 78 }, { h: '6pm', v: 95 },
  { h: '8pm', v: 60 }, { h: '10pm', v: 28 },
]

const chartPath = () => {
  const w = 320, h = 90
  const pts = hours.map((p, i) => {
    const x = (i / (hours.length - 1)) * w
    const y = h - (p.v / 100) * h
    return [x, y]
  })
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1], [cx, cy] = pts[i]
    d += ` C${px + 20},${py} ${cx - 20},${cy} ${cx},${cy}`
  }
  return { d, pts }
}

export default function Insights() {
  const [ref, inView] = useInView()
  const { d, pts } = chartPath()

  return (
    <section id="insights" className="section section-white" ref={ref}>
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div className={`fade-rise ${inView ? 'in' : ''}`}>
            <h2 className="h2" style={{ color: '#1A012C' }}>
              30 reports.<br />No spreadsheets.
            </h2>
            <p className="lede lede-light" style={{ marginTop: 18 }}>
              Profit trends, busiest hours, shift reconciliation and multi-branch view — all
              in one Control Tower. Your cashier's shift closes itself.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 32 }}>
              {[
                ['30', 'Ready-made reports'],
                ['Multi-branch', 'Unified view'],
                ['Shift cash', 'Auto-reconciliation'],
                ['Variance alerts', 'Per shift'],
              ].map(([num, label]) => (
                <div key={label} style={{ borderRadius: 14, border: '1px solid #e8e3ef', padding: '16px 18px' }}>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#600010', letterSpacing: '-0.03em' }}>{num}</div>
                  <div style={{ fontSize: '12.5px', color: '#7a6886', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Charts mockup */}
          <div className={`fade-rise ${inView ? 'in' : ''}`} style={{ animationDelay: '100ms' }}>
            <div className="screen-frame-light" style={{ overflow: 'hidden' }}>
              <div className="browser-chrome-light">
                <span className="chrome-dot" style={{ background: '#ff5f57' }} />
                <span className="chrome-dot" style={{ background: '#febc2e' }} />
                <span className="chrome-dot" style={{ background: '#28c840' }} />
                <div style={{ flex: 1, marginLeft: 10, background: '#eee', borderRadius: 4, height: 18, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
                  <span style={{ fontSize: '10.5px', color: '#aaa' }}>app.easepharma.store/insights</span>
                </div>
              </div>
              <div style={{ background: '#fff', padding: '20px' }}>
                {/* Profit trend */}
                <div style={{ marginBottom: 22 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#1A012C' }}>Profit trend — Sep 2026</div>
                    <div className="tabnum" style={{ fontSize: '12px', color: '#15803d', fontWeight: 800 }}>▲ 14.2%</div>
                  </div>
                  <svg viewBox="0 0 320 90" style={{ width: '100%', height: 90 }}>
                    <defs>
                      <linearGradient id="ig" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#600010" stopOpacity=".22" />
                        <stop offset="1" stopColor="#600010" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d={d + ' L320,90 L0,90 Z'} fill="url(#ig)" className="fade-area" />
                    <path d={d} fill="none" stroke="#600010" strokeWidth="2.5" strokeLinecap="round" className="draw-path" />
                    {pts.map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="3.5" fill="#600010" className="fade-area" />
                    ))}
                  </svg>
                </div>
                {/* Busiest hours */}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#1A012C', marginBottom: 10 }}>Busiest hours today</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 64 }}>
                    {hours.map(({ h, v }, i) => (
                      <div key={h} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                        <div
                          style={{
                            width: '100%',
                            borderRadius: '4px 4px 0 0',
                            background: v >= 80 ? '#600010' : 'rgba(96,0,16,.15)',
                            height: inView ? `${(v / 100) * 56}px` : 0,
                            transition: `height 0.8s cubic-bezier(.2,.8,.2,1) ${i * 70}ms`,
                          }}
                        />
                        <span style={{ fontSize: '9px', color: '#b8afc2', textAlign: 'center' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Shift */}
                <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 12, border: '1px solid #e8e3ef', padding: '10px 14px', background: '#F7FCFF' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#7a6886' }}>Shift cash variance</div>
                    <div className="tabnum" style={{ fontSize: '18px', fontWeight: 800, color: '#15803d' }}>+Rs 0</div>
                  </div>
                  <div style={{ borderRadius: 999, padding: '5px 14px', background: '#dcfce7', color: '#15803d', fontSize: '12px', fontWeight: 700 }}>Shift closed ✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
