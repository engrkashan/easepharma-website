import Logo from './Logo'
import { links } from '../content'
import { Capsule3D } from './FuturisticObjects'

export default function Closing() {
  return (
    <>
      {/* Final CTA */}
      <section id="demo" style={{ paddingBottom: '96px', background: 'var(--color-aub)', position: 'relative', overflow: 'hidden' }}>
        {/* Glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 850, height: 520, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(96,0,16,.55) 0%, rgba(26,1,44,.6) 50%, transparent 70%)', filter: 'blur(75px)', pointerEvents: 'none' }} aria-hidden="true" />
        
        {/* Floating 3D Capsule in Closing section */}
        <div className="hidden lg:block absolute -top-8 right-12 pointer-events-none z-10" aria-hidden="true">
          <div className="animate-capsule-float-1">
            <Capsule3D size={56} tilt={32} />
          </div>
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,.07) 0%, rgba(96,0,16,.25) 100%)',
              border: '1px solid rgba(255,255,255,.14)',
              borderRadius: 28,
              padding: '64px 40px',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 30px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08) inset',
            }}
          >
            <div style={{ display: 'grid', gap: 40, alignItems: 'end' }} className="lg:grid-cols-[1.5fr_1fr]">
              <div>
                <h2
                  style={{
                    fontSize: 'clamp(32px,5vw,56px)',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.035em',
                    lineHeight: 1.04,
                    maxWidth: '16ch',
                  }}
                >
                  See your pharmacy running on Ease Pharma.
                </h2>
                <p style={{ marginTop: 16, fontSize: '17px', color: 'rgba(255,255,255,.6)', maxWidth: '38ch', lineHeight: 1.65 }}>
                  We walk your team through a real bill — from barcode scan to FBR receipt — on a live store.
                  Free, no obligation.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
                <a
                  href={links.demo}
                  className="btn btn-primary"
                  style={{ padding: '15px 32px', fontSize: '16px', width: '100%', maxWidth: 260, justifyContent: 'center' }}
                >
                  Book a live demo
                </a>
                <a
                  href={links.whatsapp}
                  className="btn btn-ghost-white"
                  style={{ padding: '15px 32px', fontSize: '16px', width: '100%', maxWidth: 260, justifyContent: 'center' }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,.06)', background: 'var(--color-aub)', paddingTop: 48, paddingBottom: 48 }}>
        <div className="wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <Logo white height={24} />
              <p style={{ marginTop: 10, fontSize: '13px', color: 'rgba(255,255,255,.35)', lineHeight: 1.6, maxWidth: '28ch' }}>
                A product of EaseZen Solutions, Islamabad.
              </p>
            </div>
            <nav aria-label="Footer" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 28px' }}>
              {[
                ['Features', '#counter'],
                ['Stock & Expiry', '#stock'],
                ['Compliance', '#compliance'],
                ['Zento AI', '#zento'],
                ['Pricing', '#pricing'],
                ['FAQ', '#faq'],
                ['Sign in', links.signIn],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  style={{ fontSize: '14px', color: 'rgba(255,255,255,.4)', textDecoration: 'none', fontWeight: 500, transition: 'color 200ms' }}
                  onMouseEnter={e => (e.target.style.color = 'rgba(255,255,255,.85)')}
                  onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,.4)')}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.06)', fontSize: '12.5px', color: 'rgba(255,255,255,.25)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8 }}>
            <span>© {new Date().getFullYear()} Ease Pharma. All rights reserved.</span>
            <span>All demo data is illustrative.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
