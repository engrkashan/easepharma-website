import { useEffect, useState } from 'react'
import Logo from './Logo'
import { links } from '../content'

const items = [
  ['Features', '#counter'],
  ['Compliance', '#compliance'],
  ['Pricing', '#pricing'],
  ['FAQ', '#faq'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  // starts transparent over dark hero, becomes glass on scroll
  const navBg = scrolled || open
    ? 'rgba(26,1,44,.88)'
    : 'transparent'
  const navBorder = scrolled || open
    ? 'rgba(255,255,255,.08)'
    : 'transparent'

  return (
    <header
      style={{
        position: 'fixed',
        inset: '0 0 auto 0',
        zIndex: 50,
        background: navBg,
        borderBottom: `1px solid ${navBorder}`,
        backdropFilter: scrolled || open ? 'blur(20px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled || open ? 'blur(20px) saturate(1.4)' : 'none',
        transition: 'background 300ms, border-color 300ms, backdrop-filter 300ms',
      }}
    >
      <nav className="wrap flex h-[72px] items-center justify-between" aria-label="Main">
        <a href="#top" aria-label="Ease Pharma home" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo height={48} white />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-5 lg:gap-7 md:flex" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontSize: '14.5px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,.65)',
                  textDecoration: 'none',
                  transition: 'color 200ms',
                }}
                onMouseEnter={e => (e.target.style.color = '#fff')}
                onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,.65)')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={links.signIn}
            style={{
              fontSize: '14.5px',
              fontWeight: 600,
              color: 'rgba(255,255,255,.65)',
              padding: '8px 14px',
              textDecoration: 'none',
              transition: 'color 200ms',
            }}
            onMouseEnter={e => (e.target.style.color = '#fff')}
            onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,.65)')}
          >
            Sign in
          </a>
          <a
            href={links.demo}
            className="btn btn-primary"
            style={{ padding: '10px 20px', fontSize: '14px' }}
          >
            Book a demo
          </a>
        </div>

        {/* Hamburger — hidden on tablet (md) and above */}
        <button
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white cursor-pointer hover:bg-white/20 transition-colors"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(o => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {open
              ? <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              : <path d="M2.5 6h13M2.5 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu — hidden on tablet (md) and above */}
      {open && (
        <div
          id="mobile-menu"
          className="wrap pb-6 md:hidden"
          style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {items.map(([label, href]) => (
              <li key={href}>
                <a
                  onClick={() => setOpen(false)}
                  href={href}
                  style={{
                    display: 'block',
                    padding: '13px 0',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#fff',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,.06)',
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a href={links.signIn} className="btn btn-ghost-white" style={{ flex: 1, justifyContent: 'center', fontSize: '15px' }}>Sign in</a>
            <a href={links.demo} onClick={() => setOpen(false)} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '15px' }}>Book a demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
