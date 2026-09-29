import useInView from '../hooks/useInView'

const features = [
  { icon: '📷', title: 'Camera barcode scanning', body: 'No scanner hardware needed. Point your phone at any barcode to add items.' },
  { icon: '⚡', title: 'QR login — no password', body: 'Scan your personal QR, start billing instantly. No pins, no forgotten passwords.' },
  { icon: '📴', title: 'Offline billing', body: 'Full POS works without internet. Bills queue locally and sync when connectivity returns.' },
  { icon: '🔔', title: 'Expiry push alerts', body: '90, 60 and 30-day expiry reminders pushed straight to your phone.' },
]

export default function Mobile() {
  const [ref, inView] = useInView()
  return (
    <section id="mobile" className="section section-white" ref={ref}>
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Phone mockup */}
          <div className={`fade-rise flex justify-center lg:justify-start ${inView ? 'in' : ''}`}>
            {/* <div
              style={{
                width: 260,
                borderRadius: 42,
                border: '2px solid #e8e3ef',
                background: '#fff',
                overflow: 'hidden',
                boxShadow: '0 32px 80px -32px rgba(26,1,44,.22), 0 8px 24px -12px rgba(26,1,44,.10)',
              }}
            >
              <div style={{ height: 38, background: '#1A012C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 80, height: 18, borderRadius: 9, background: '#000', opacity: 0.7 }} />
              </div>
              <div style={{ background: '#1A012C', padding: '16px 14px', minHeight: 400 }}>
                <div style={{ textAlign: 'center', marginBottom: 20 }}>
                  <img src="/easepharma-red.png" alt="EasePharma" style={{ height: 18, filter: 'brightness(0) invert(1)', display: 'inline-block', marginBottom: 8, opacity: 0.9 }} />
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>Scan to sign in</div>
                  <div style={{ background: '#fff', borderRadius: 14, padding: 12, display: 'inline-block', boxShadow: '0 8px 24px rgba(0,0,0,.25)' }}>
                    <svg width="88" height="88" viewBox="0 0 88 88" aria-label="QR login code">
                      {[0,1,2,3,4,5,6,7,8].flatMap(r => [0,1,2,3,4,5,6,7,8].map(c => {
                        const corner = (r < 3 && c < 3) || (r < 3 && c > 5) || (r > 5 && c < 3)
                        const v = (r * 9 + c) * 37 + 11
                        return (corner || v % 3 !== 0) ? (
                          <rect key={`${r}-${c}`} x={c * (88/9)} y={r * (88/9)} width={(88/9) - 1.5} height={(88/9) - 1.5} rx={1.2} fill="#1A012C" />
                        ) : null
                      }))}
                    </svg>
                  </div>
                  <div style={{ marginTop: 10, fontSize: '11px', color: 'rgba(255,255,255,.35)' }}>No password needed</div>
                </div>
                {[
                  { icon: '📷', label: 'Camera scan', sub: 'Point at any barcode' },
                  { icon: '⏰', label: 'Expiry alert', sub: 'Risek 20mg · 8 days left', warn: true },
                  { icon: '📴', label: 'Offline mode', sub: 'Billing active' },
                ].map(f => (
                  <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,.06)', borderRadius: 12, padding: '10px 12px', marginBottom: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 9, background: f.warn ? '#fef3c7' : '#600010', display: 'grid', placeItems: 'center', fontSize: 15, flexShrink: 0 }}>{f.icon}</div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>{f.label}</div>
                      <div style={{ fontSize: '10.5px', color: f.warn ? '#f97316' : 'rgba(255,255,255,.45)' }}>{f.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
            <img src="/screenshots/mobile-app.png" alt="Mobile" style={{ width: '100%', display: 'block' }} className='rounded-2xl' />
          </div>

          {/* Text */}
          <div className={`fade-rise ${inView ? 'in' : ''}`} style={{ animationDelay: '100ms' }}>
            <h2 className="h2" style={{ color: '#1A012C' }}>
              Full pharmacy<br />in your pocket.
            </h2>
            <p className="lede lede-light" style={{ marginTop: 18 }}>
              The Ease Pharma mobile app gives every pharmacist secure, instant access to
              billing and alerts — no hardware, no passwords, no IT setup.
            </p>
            <ul style={{ marginTop: 32, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {features.map(f => (
                <li key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(96,0,16,.08)', display: 'grid', placeItems: 'center', fontSize: 20, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1A012C', marginBottom: 3 }}>{f.title}</div>
                    <div style={{ fontSize: '14px', color: '#7a6886', lineHeight: 1.6 }}>{f.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
