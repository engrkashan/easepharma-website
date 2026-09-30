import useInView from '../hooks/useInView'

const ledger = [
  { date: '25 Sep', item: 'Augmentin 625mg × 2', amount: 1224, type: 'debit' },
  { date: '22 Sep', item: 'Payment received', amount: 2000, type: 'credit' },
  { date: '18 Sep', item: 'Glucophage 500mg × 3', amount: 570, type: 'debit' },
  { date: '14 Sep', item: 'Panadol Extra × 5', amount: 260, type: 'debit' },
]
const fmt = n => 'Rs\u00a0' + n.toLocaleString('en-PK')

export default function Patients() {
  const [ref, inView] = useInView()
  const balance = 3280, limit = 5000

  return (
    <section id="patients" className="section section-ice" ref={ref}>
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
          {/* Patient card mockup */}
          <div className={`fade-rise ${inView ? 'in' : ''}`}>
            <div className="screen-frame-light shadow-2xl" style={{ overflow: 'hidden' }}>
              <div className="browser-chrome-light">
                <span className="chrome-dot" style={{ background: '#ff5f57' }} />
                <span className="chrome-dot" style={{ background: '#febc2e' }} />
                <span className="chrome-dot" style={{ background: '#28c840' }} />
                <div style={{ flex: 1, marginLeft: 10, background: '#eee', borderRadius: 4, height: 18, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
                  <span style={{ fontSize: '10.5px', color: '#aaa' }}>app.easepharma.store/patients</span>
                </div>
              </div>
              <div style={{ background: '#fff', padding: '18px' }}>
                {/* Patient header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 14, borderBottom: '1px solid #e8e3ef', marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#600010', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>AS</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#1A012C' }}>Ahmed Sultan</div>
                    <div style={{ fontSize: '12.5px', color: '#7a6886', marginTop: 1 }}>Chronic: Hypertension, Diabetes</div>
                  </div>
                  <span style={{ borderRadius: 999, padding: '4px 12px', background: 'rgba(96,0,16,.08)', color: '#600010', fontSize: '11.5px', fontWeight: 700 }}>Khata</span>
                </div>
                {/* Credit bar */}
                <div style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: 6 }}>
                    <span style={{ color: '#7a6886', fontWeight: 600 }}>Credit balance</span>
                    <span className="tabnum" style={{ fontWeight: 800, color: '#1A012C' }}>
                      {fmt(balance)} <span style={{ color: '#b8afc2', fontWeight: 400 }}>/ {fmt(limit)}</span>
                    </span>
                  </div>
                  <div style={{ height: 8, borderRadius: 999, background: 'rgba(96,0,16,.08)', overflow: 'hidden' }}>
                    <div className="reveal-bar" style={{ height: '100%', width: `${(balance/limit)*100}%`, borderRadius: 999, background: '#600010' }} />
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#b8afc2', marginTop: 4 }}>{fmt(limit - balance)} remaining credit</div>
                </div>
                {/* Ledger */}
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1A012C', marginBottom: 8 }}>Recent transactions</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {ledger.map(l => (
                    <div key={l.date + l.item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 10, padding: '8px 10px', background: '#F7FCFF' }}>
                      <div>
                        <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1A012C' }}>{l.item}</div>
                        <div style={{ fontSize: '11px', color: '#b8afc2' }}>{l.date}</div>
                      </div>
                      <span className="tabnum" style={{ fontSize: '13px', fontWeight: 700, color: l.type === 'credit' ? '#15803d' : '#1A012C' }}>
                        {l.type === 'credit' ? '+' : '−'}{fmt(l.amount)}
                      </span>
                    </div>
                  ))}
                </div>
                {/* WhatsApp button */}
                <button style={{ marginTop: 14, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 12, border: '1px solid rgba(37,211,102,.28)', background: 'rgba(37,211,102,.04)', padding: '10px 0', fontSize: '13px', fontWeight: 700, color: '#128c3e', cursor: 'default' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send chronic refill reminder
                </button>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`fade-rise ${inView ? 'in' : ''}`} style={{ animationDelay: '100ms' }}>
            <h2 className="h2" style={{ color: '#1A012C' }}>
              Patient Khata.<br />Built for trust.
            </h2>
            <p className="lede lede-light" style={{ marginTop: 18 }}>
              Every regular patient gets a card with a credit limit, a running ledger and
              WhatsApp refill reminders — no paper notebook, no missed collections.
            </p>
            <ul style={{ marginTop: 32, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                ['Credit limit with live balance bar', 'Set per patient. The counter shows remaining credit at checkout.'],
                ['Full transaction ledger', 'Every sale and payment recorded, timestamped and searchable.'],
                ['Chronic refill reminders', 'One tap sends a personalised WhatsApp message when a prescription is due.'],
                ['Loyalty tiers', 'Reward your best customers — tier and discount rules you control.'],
              ].map(([title, body]) => (
                <li key={title} style={{ display: 'flex', gap: 14 }}>
                  <span style={{ marginTop: 3, width: 22, height: 22, borderRadius: '50%', background: '#600010', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 900, flexShrink: 0 }}>✓</span>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1A012C' }}>{title}</div>
                    <div style={{ fontSize: '14px', color: '#7a6886', marginTop: 2 }}>{body}</div>
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
