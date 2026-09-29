import { plans, links } from '../content'
import useInView from '../hooks/useInView'

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" style={{ marginTop: 2, flexShrink: 0 }}>
    <path d="M2.5 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Pricing() {
  const [ref, inView] = useInView()
  return (
    <section id="pricing" className="section section-dark" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-60%)', width: 700, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(96,0,16,.30) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} aria-hidden="true" />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 520, marginBottom: 56 }}>
          <h2 className="h2" style={{ color: '#fff' }}>Simple monthly plans<br />in rupees.</h2>
          <p className="lede lede-dark" style={{ marginTop: 16 }}>Pay monthly, cancel any time. Use the printer and scanner you already own.</p>
        </div>

        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'center' }}>
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`fade-rise ${inView ? 'in' : ''}`}
              style={{
                animationDelay: `${i * 80}ms`,
                borderRadius: 22,
                padding: p.featured ? '36px 30px' : '26px 26px',
                background: p.featured
                  ? 'linear-gradient(145deg, rgba(96,0,16,.35) 0%, rgba(122,19,37,.20) 100%)'
                  : 'rgba(255,255,255,.05)',
                border: p.featured
                  ? '1px solid rgba(96,0,16,.50)'
                  : '1px solid rgba(255,255,255,.09)',
                position: 'relative',
                marginTop: p.featured ? -12 : 0,
                marginBottom: p.featured ? -12 : 0,
                boxShadow: p.featured ? '0 0 0 1px rgba(96,0,16,.25), 0 32px 80px -32px rgba(96,0,16,.4)' : 'none',
              }}
            >
              {p.featured && (
                <span style={{ position: 'absolute', right: 20, top: 20, borderRadius: 999, padding: '4px 14px', background: '#600010', color: '#fff', fontSize: '12px', fontWeight: 700 }}>Recommended</span>
              )}
              <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: 6 }}>{p.name}</div>
              <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,.55)', marginBottom: 22 }}>{p.blurb}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 22 }}>
                <span className="tabnum" style={{ fontSize: '36px', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em' }}>{p.price}</span>
                {p.period && <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.45)' }}>{p.period}</span>}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '13.5px', color: 'rgba(255,255,255,.72)' }}>
                    <span style={{ color: p.featured ? '#f87171' : 'rgba(255,255,255,.5)' }}><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={links.demo}
                className={p.featured ? 'btn btn-primary' : 'btn btn-ghost-white'}
                style={{ width: '100%', justifyContent: 'center', fontSize: '14.5px' }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28, fontSize: '13px', color: 'rgba(255,255,255,.28)', textAlign: 'center' }}>
          All prices exclude FBR taxes. No setup fee. Cancel any time.
        </p>
      </div>
    </section>
  )
}
