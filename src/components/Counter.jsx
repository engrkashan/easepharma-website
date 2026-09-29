import { useState } from 'react'
import useInView from '../hooks/useInView'

/*
  REAL SCREENSHOT SLOT
  Drop /public/screenshots/pos-counter.png and uncomment:
  <img src="/screenshots/pos-counter.png" alt="Ease Pharma keyboard counter" style={{ width:'100%', display:'block' }} />
  Then remove the <MockPanel /> block below.
*/

const KEYS = [
  { key: 'P', label: 'Panadol Extra', price: 520, tag: 'OTC', rack: 'A2' },
  { key: 'A', label: 'Augmentin 625mg', price: 612, tag: 'Rx', rack: 'B1', fefo: 'Batch AG-2417 · exp Mar 2027' },
  { key: 'G', label: 'Glucophage 500mg', price: 190, tag: 'Rx', rack: 'C4' },
  { key: 'R', label: 'Risek 20mg', price: 425, tag: 'Rx', rack: 'B3', low: true },
]
const fmt = n => 'Rs\u00a0' + n.toLocaleString('en-PK')

function MockPanel({ item }) {
  return (
    <div style={{ background: '#fff' }}>
      {/* Search bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 14px',
          borderBottom: '1px solid #e8e3ef',
          background: '#FAFAFE',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: '#b8afc2', flexShrink: 0 }}>
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: '13px', color: '#1A012C', fontWeight: 600 }}>{item.label}</span>
        <span
          style={{
            marginLeft: 'auto',
            fontSize: '10.5px',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: 4,
            background: item.tag === 'Rx' ? '#EBF0FB' : 'rgba(96,0,16,.08)',
            color: item.tag === 'Rx' ? '#2F4FA2' : '#600010',
          }}
        >
          {item.tag}
        </span>
      </div>
      {/* Detail */}
      <div style={{ padding: '20px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#1A012C' }}>{item.label}</div>
            <div style={{ fontSize: '12.5px', color: '#b8afc2', marginTop: 2 }}>Rack {item.rack}</div>
            {item.fefo && (
              <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999, padding: '4px 12px', background: '#fef3c7', color: '#b45309', fontSize: '11.5px', fontWeight: 700 }}>
                FEFO · {item.fefo}
              </div>
            )}
            {item.low && (
              <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999, padding: '4px 12px', background: 'rgba(180,83,9,.08)', color: '#b45309', fontSize: '11.5px', fontWeight: 700 }}>
                Low stock — reorder alert active
              </div>
            )}
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div className="tabnum" style={{ fontSize: '28px', fontWeight: 800, color: '#1A012C', letterSpacing: '-0.035em' }}>
              {fmt(item.price)}
            </div>
            <div style={{ fontSize: '11.5px', color: '#b8afc2' }}>per box</div>
          </div>
        </div>
        {/* Quantity */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 12, border: '1px solid #e8e3ef', padding: '10px 16px', marginTop: 18 }}>
          <span style={{ fontSize: '13px', color: '#7a6886' }}>Quantity</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid #e8e3ef', background: '#fff', fontSize: 18, color: '#1A012C', cursor: 'default', display: 'grid', placeItems: 'center' }}>−</button>
            <span className="tabnum" style={{ fontSize: '18px', fontWeight: 800, color: '#1A012C', minWidth: 20, textAlign: 'center' }}>1</span>
            <button style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid #e8e3ef', background: '#fff', fontSize: 18, color: '#1A012C', cursor: 'default', display: 'grid', placeItems: 'center' }}>+</button>
          </div>
        </div>
        {/* Add CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, borderRadius: 12, padding: '13px 18px', background: '#600010', color: '#fff', fontWeight: 700, fontSize: '14px' }}>
          <span>Add to bill</span>
          <span className="tabnum">{fmt(item.price)}</span>
        </div>
      </div>
    </div>
  )
}

export default function Counter() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()
  const item = KEYS[active]

  return (
    <section id="counter" className="section section-ice" ref={ref}>
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          {/* Text */}
          <div className={`fade-rise ${inView ? 'in' : ''}`}>
            <h2 className="h2" style={{ color: '#1A012C' }}>
              Keyboard-first billing.<br />Zero wasted seconds.
            </h2>
            <p className="lede lede-light" style={{ marginTop: 18 }}>
              Three letters to find a medicine, Enter to add it, F12 to collect payment.
              The nearest-expiry batch is always picked first — automatically.
            </p>
            <ul style={{ marginTop: 32, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['Ctrl K', 'Open global search from anywhere on screen'],
                ['Alt U', 'Switch box ↔ strip — price prorates automatically'],
                ['F5 / F6', 'Hold a bill and resume it instantly'],
                ['F12', 'Collect payment — cash, Raast, or Khata'],
              ].map(([k, v]) => (
                <li key={k} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="kbd" style={{ flexShrink: 0 }}>{k}</span>
                  <span style={{ fontSize: '14.5px', color: '#7a6886' }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive demo */}
          <div className={`fade-rise ${inView ? 'in' : ''}`} style={{ animationDelay: '100ms' }}>
            {/* Key chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              {KEYS.map((k, i) => (
                <button
                  key={k.key}
                  onClick={() => setActive(i)}
                  className="kbd"
                  style={
                    active === i
                      ? { background: '#600010', color: '#fff', borderColor: '#600010', transform: 'translateY(-2px)', transition: 'all 200ms' }
                      : { transition: 'all 200ms' }
                  }
                  aria-pressed={active === i}
                  aria-label={`Preview ${k.label}`}
                >
                  {k.key}
                </button>
              ))}
              <span style={{ fontSize: '12px', color: '#b8afc2', alignSelf: 'center', marginLeft: 4 }}>click to preview</span>
            </div>

            {/* Screen frame */}
            <div className="screen-frame-light" style={{ overflow: 'hidden' }}>
              <div className="browser-chrome-light">
                <span className="chrome-dot" style={{ background: '#ff5f57' }} />
                <span className="chrome-dot" style={{ background: '#febc2e' }} />
                <span className="chrome-dot" style={{ background: '#28c840' }} />
                <div style={{ flex: 1, marginLeft: 10, background: '#eee', borderRadius: 4, height: 18, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
                  <span style={{ fontSize: '10.5px', color: '#aaa' }}>app.easepharma.store/pos</span>
                </div>
              </div>
              <MockPanel item={item} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
