import useInView from '../hooks/useInView'

const steps = [
  { num: '01', title: 'Pick your current software', body: 'Candela RMS, MediPharma, Focus, Plus Point, HDPOS, QuickPOS, or plain Excel/CSV.' },
  { num: '02', title: 'Upload your stock report', body: 'Export any format — we accept the raw file as-is, no prior formatting required.' },
  { num: '03', title: 'Columns matched automatically', body: 'Our system maps medicine name, batch, expiry, quantity and price in seconds.' },
  { num: '04', title: 'Review before import', body: 'You see a preview of every row. Correct any mismatches before going live.' },
  { num: '05', title: 'Go live the same afternoon', body: 'Your team starts billing with real stock data. Free assisted session included.' },
]

export default function Migration() {
  const [ref, inView] = useInView()
  return (
    <section id="migration" className="section section-dark" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* subtle top glow */}
      <div style={{ position: 'absolute', top: -80, left: '30%', width: 500, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(96,0,16,.25) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} aria-hidden="true" />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56 }}>
          <div>
            <h2 className="h2" style={{ color: '#fff', maxWidth: '14ch' }}>Switch in one afternoon.</h2>
            <p className="lede lede-dark" style={{ marginTop: 16, maxWidth: '40ch' }}>
              Five steps from your old software to live billing — no manual data entry, no downtime.
            </p>
          </div>
          <a href="#demo" className="btn btn-primary" style={{ flexShrink: 0 }}>Request free migration</a>
        </div>

        <div
          className="no-scrollbar"
          style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(5, minmax(200px, 1fr))', overflowX: 'auto', paddingBottom: 8 }}
        >
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`fade-rise ${inView ? 'in' : ''}`}
              style={{
                animationDelay: `${i * 80}ms`,
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.09)',
                borderRadius: 20,
                padding: '22px 20px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#f87171', letterSpacing: '0.05em', marginBottom: 10, fontVariantNumeric: 'tabular-nums' }}>{s.num}</div>
              <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>{s.body}</div>
            </div>
          ))}
        </div>

        {/* Sources */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginTop: 32 }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,.3)', marginRight: 4 }}>Works with:</span>
          {['Candela RMS', 'MediPharma', 'Focus', 'Plus Point', 'HDPOS', 'QuickPOS', 'Excel / CSV'].map(n => (
            <span key={n} style={{ borderRadius: 999, border: '1px solid rgba(255,255,255,.12)', padding: '4px 14px', fontSize: '12.5px', fontWeight: 600, color: 'rgba(255,255,255,.45)' }}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
