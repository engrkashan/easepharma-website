import { useState } from 'react'
import { faqs } from '../content'
import useInView from '../hooks/useInView'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}>
      <button
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}>{q}</span>
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: open ? '#600010' : 'rgba(255,255,255,.08)',
            color: open ? '#fff' : 'rgba(255,255,255,.6)',
            fontSize: 18,
            fontWeight: 700,
            flexShrink: 0,
            display: 'grid',
            placeItems: 'center',
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'background 220ms, color 220ms, transform 220ms',
          }}
          aria-hidden="true"
        >+</span>
      </button>
      {open && (
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.58)', paddingBottom: 20, lineHeight: 1.7, maxWidth: '58ch' }}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function Faq() {
  const [ref, inView] = useInView()
  return (
    <section id="faq" className="section section-dark" ref={ref} style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <div className={`fade-rise ${inView ? 'in' : ''}`}>
            <h2 className="h2" style={{ color: '#fff' }}>Questions<br />answered.</h2>
            <p className="lede lede-dark" style={{ marginTop: 16 }}>Still unsure? Book a live demo and ask us anything in real time.</p>
            <a href="#demo" className="btn btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>Book a demo</a>
          </div>
          <div className={`fade-rise ${inView ? 'in' : ''}`} style={{ animationDelay: '80ms' }}>
            {faqs.map(f => <Item key={f.q} {...f} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
