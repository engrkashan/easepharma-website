import useInView from '../hooks/useInView'
import { Capsule3D, MoleculeLattice } from './FuturisticObjects'

const chat = [
  { role: 'user', text: 'What should I order this week?' },
  {
    role: 'ai',
    text: 'Based on your sales velocity and current stock:',
    table: [
      { medicine: 'Augmentin 625mg', stock: 14, days: 3, action: 'Order 48 strips' },
      { medicine: 'Risek 20mg', stock: 6, days: 2, action: 'Order 24 packs' },
      { medicine: 'Glucophage 500mg', stock: 22, days: 5, action: 'Order 60 strips' },
    ],
    actions: ['Draft purchase order', 'Create supplier return'],
  },
]

export default function Zento() {
  const [ref, inView] = useInView()
  return (
    <section
      id="zento"
      className="section section-dark"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Glow orbs & futuristic mesh */}
      <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: 680, height: 450, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(96,0,16,.45) 0%, rgba(26,1,44,.5) 50%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} aria-hidden="true" />
      <div style={{ position: 'absolute', bottom: '-80px', right: '-60px', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(122,19,37,.35) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} aria-hidden="true" />

      {/* Floating 3D Capsule object in Zento */}
      <div
        className="hidden lg:block absolute -top-6 right-10 pointer-events-none z-10"
        aria-hidden="true"
      >
        <div className="animate-capsule-float-2">
          <Capsule3D size={52} tilt={-28} />
        </div>
      </div>

      {/* Floating Rotating Molecule Lattice in Zento */}
      <div
        className="hidden xl:block absolute bottom-8 left-8 pointer-events-none z-0 opacity-40"
        aria-hidden="true"
      >
        <MoleculeLattice size={140} />
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.45fr] lg:items-center">
          {/* Text */}
          <div className={`fade-rise ${inView ? 'in' : ''}`}>
            <p style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 999, padding: '6px 16px', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,.7)', marginBottom: 24 }}>
              <span style={{ color: '#f87171' }}>✦</span> Zento AI
            </p>
            <h2 className="h2" style={{ color: '#fff' }}>
              Your pharmacy's<br />AI copilot.
            </h2>
            <p className="lede lede-dark" style={{ marginTop: 20, maxWidth: '36ch' }}>
              Ask Zento anything about your stock, sales or suppliers. It drafts purchase
              orders, flags upcoming expirations, and monitors reorder levels on autopilot.
            </p>
            <ul style={{ marginTop: 32, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Answers stock and order questions in Urdu or English',
                'Drafts purchase orders from sales-speed predictions',
                'Autopilot: watches expiry and reorder levels 24/7',
                'Creates supplier return documents automatically',
              ].map(t => (
                <li key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ color: '#f87171', fontWeight: 900, marginTop: 1, flexShrink: 0 }}>✦</span>
                  <span style={{ fontSize: '15px', color: 'rgba(255,255,255,.70)' }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat mockup */}
          <div className={`fade-rise ${inView ? 'in' : ''}`} style={{ animationDelay: '100ms' }}>
            {/* <div className="screen-frame" style={{ background: 'rgba(255,255,255,.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#600010', display: 'grid', placeItems: 'center', fontSize: 14, color: '#fff', flexShrink: 0 }}>✦</div>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Zento AI</span>
                <span style={{ marginLeft: 'auto', borderRadius: 999, padding: '3px 10px', background: 'rgba(21,128,61,.2)', color: '#4ade80', fontSize: '11.5px', fontWeight: 700 }}>Active</span>
              </div>
              <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {chat.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                    {msg.role === 'user' ? (
                      <div style={{ background: '#600010', color: '#fff', padding: '10px 16px', borderRadius: '16px 16px 4px 16px', fontSize: '14px', maxWidth: '80%' }}>
                        {msg.text}
                      </div>
                    ) : (
                      <div style={{ maxWidth: '100%' }}>
                        <div style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.85)', padding: '12px 14px', borderRadius: '16px 16px 16px 4px', fontSize: '13.5px' }}>
                          <div>{msg.text}</div>
                          {msg.table && (
                            <div style={{ marginTop: 12, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,.10)' }}>
                              <table style={{ width: '100%', fontSize: '12px', borderCollapse: 'collapse' }}>
                                <thead>
                                  <tr style={{ background: 'rgba(255,255,255,.06)' }}>
                                    {['Medicine', 'Stock', 'Days', 'Action'].map(h => (
                                      <th key={h} style={{ padding: '6px 10px', textAlign: 'left', fontWeight: 700, color: 'rgba(255,255,255,.45)', fontFamily: 'Manrope, sans-serif' }}>{h}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {msg.table.map(row => (
                                    <tr key={row.medicine} style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
                                      <td style={{ padding: '6px 10px', color: '#fff', fontWeight: 600 }}>{row.medicine}</td>
                                      <td className="tabnum" style={{ padding: '6px 10px', color: 'rgba(255,255,255,.6)' }}>{row.stock}</td>
                                      <td className="tabnum" style={{ padding: '6px 10px', color: row.days <= 3 ? '#f87171' : 'rgba(255,255,255,.6)' }}>{row.days}d</td>
                                      <td style={{ padding: '6px 10px', color: '#f87171', fontWeight: 600 }}>{row.action}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                          {msg.actions && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                              {msg.actions.map(a => (
                                <button key={a} style={{ borderRadius: 999, border: '1px solid rgba(255,255,255,.18)', padding: '5px 14px', fontSize: '12px', fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,.06)', cursor: 'default' }}>
                                  {a}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, paddingLeft: 4 }}>
                  {[0,1,2].map(i => (
                    <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,.3)', animation: `float-a 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                  ))}
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,.25)', marginLeft: 6 }}>Zento is watching…</span>
                </div>
              </div>
            </div> */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1A012C]">
              <img src="/screenshots/zento-ai.png" alt="Zento AI" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
