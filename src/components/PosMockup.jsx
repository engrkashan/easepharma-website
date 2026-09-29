import { useEffect, useMemo, useState } from 'react'
import Qr from './Qr'
import { prefersReducedMotion } from '../hooks/useInView'

const catalog = [
  { name: 'Panadol Extra', salt: 'Paracetamol + Caffeine', rack: 'A2', stock: 184, price: 520, tag: 'OTC' },
  { name: 'Augmentin 625mg', salt: 'Co-amoxiclav', rack: 'B1', stock: 46, price: 612, tag: 'Rx' },
  { name: 'Glucophage 500mg', salt: 'Metformin', rack: 'C4', stock: 92, price: 190, tag: 'Rx' },
  { name: 'Risek 20mg', salt: 'Omeprazole', rack: 'B3', stock: 8, price: 425, tag: 'Rx', low: true },
  { name: 'Rocephin 1g IV', salt: 'Ceftriaxone', rack: 'Fridge', stock: 12, price: 740, tag: 'Rx', cold: true },
  { name: 'Brufen 400mg', salt: 'Ibuprofen', rack: 'A1', stock: 130, price: 160, tag: 'OTC' },
]

const STEPS = [
  { at: 0,    query: '' },
  { at: 600,  query: 'pana' },
  { at: 1200, query: 'panadol ex', scan: true },
  { at: 2000, add: 0 },
  { at: 3300, unit: true },
  { at: 4400, query: '6291100', scan: true },
  { at: 5100, add: 1 },
  { at: 6300, add: 2 },
  { at: 7600, pay: true },
  { at: 8700, receipt: true },
  { at: 13000, reset: true },
]

const fmt = n => 'Rs\u00a0' + n.toLocaleString('en-PK')

function useScript() {
  const reduced = useMemo(prefersReducedMotion, [])
  const final = { query: '', lines: [0, 1, 2], strip: true, pay: true, receipt: true, scanKey: 0 }
  const [s, setS] = useState(reduced ? final : { query: '', lines: [], strip: false, pay: false, receipt: false, scanKey: 0 })

  useEffect(() => {
    if (reduced) return
    let timers = []
    const run = () => {
      timers.forEach(clearTimeout); timers = []
      STEPS.forEach(step => timers.push(setTimeout(() => {
        setS(prev => {
          if (step.reset) return { query: '', lines: [], strip: false, pay: false, receipt: false, scanKey: prev.scanKey }
          const next = { ...prev }
          if ('query' in step) next.query = step.query
          if (step.scan) next.scanKey = prev.scanKey + 1
          if (step.add !== undefined) { next.lines = [...prev.lines, step.add]; next.query = '' }
          if (step.unit) next.strip = true
          if (step.pay) next.pay = true
          if (step.receipt) next.receipt = true
          return next
        })
        if (step.reset) timers.push(setTimeout(run, 500))
      }, step.at)))
    }
    run()
    const onVis = () => { if (document.hidden) timers.forEach(clearTimeout); else run() }
    document.addEventListener('visibilitychange', onVis)
    return () => { timers.forEach(clearTimeout); document.removeEventListener('visibilitychange', onVis) }
  }, [reduced])
  return s
}

function lineFor(i, strip) {
  if (i === 0) return strip
    ? { name: 'Panadol Extra', note: 'Strip of 10 — FEFO batch Jan 2026', qty: 1, total: 52, unit: 'Strip', fefo: true }
    : { name: 'Panadol Extra', note: 'Box of 10 strips', qty: 1, total: 520, unit: 'Box' }
  if (i === 1) return { name: 'Augmentin 625mg', note: 'Batch AG-2417 · exp Mar 2027', qty: 1, total: 612, fefo: true }
  return { name: 'Glucophage 500mg', note: 'Strip of 10', qty: 2, total: 380 }
}

export default function PosMockup() {
  const s = useScript()
  const lines = s.lines.map(i => ({ i, ...lineFor(i, s.strip) }))
  const total = lines.reduce((a, l) => a + l.total, 0)

  return (
    <div className="relative">
      <div
        style={{ overflow: 'hidden' }}
        role="img"
        aria-label="Ease Pharma POS: medicines scanned into cart, paid by Raast, FBR receipt printed"
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-3 border-b px-4 py-3"
          style={{ borderColor: 'var(--color-line)', background: '#FAFAFE' }}
        >
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--color-line)' }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--color-line)' }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--color-line)' }} />
          </div>
          {/* Search / barcode bar */}
          <div
            className="relative ml-2 flex h-9 flex-1 items-center gap-2 overflow-hidden rounded-xl border px-3"
            style={{ borderColor: 'var(--color-line)', background: '#fff', fontSize: '13px' }}
          >
            {/* barcode icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: 'var(--color-faint)', flexShrink: 0 }}>
              <path d="M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span style={{ color: s.query ? 'var(--color-aub)' : 'var(--color-faint)' }}>
              {s.query || 'Scan barcode or search medicine, salt or SKU'}
            </span>
            {s.query && <span className="h-4 w-px animate-pulse" style={{ background: 'var(--color-ox)' }} />}
            <span className="kbd ml-auto hidden sm:inline-flex">Ctrl K</span>
            {s.scanKey > 0 && (
              <span
                key={s.scanKey}
                className="scanline pointer-events-none absolute inset-y-0 left-0 w-1/3"
                style={{ background: 'linear-gradient(to right, transparent, rgba(96,0,16,.35), transparent)' }}
              />
            )}
          </div>
          <span
            className="hidden items-center gap-1.5 rounded-full px-2.5 py-1 md:inline-flex"
            style={{ background: 'rgba(96,0,16,.08)', fontSize: '12px', fontWeight: 600, color: 'var(--color-ox)' }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-ok)' }} />
            Cloud synced
          </span>
        </div>

        <div className="grid sm:grid-cols-[1.25fr_1fr]">
          {/* Medicine grid */}
          <div className="hidden border-r p-4 sm:block" style={{ borderColor: 'var(--color-line)' }}>
            <div className="mb-3 flex flex-wrap gap-1.5" style={{ fontSize: '12px' }}>
              {['All medicines', 'Antibiotics', 'Analgesics', 'Anti-diabetic'].map((c, i) => (
                <span
                  key={c}
                  className="rounded-full px-2.5 py-1"
                  style={i === 0
                    ? { background: 'var(--color-ox)', color: '#fff', fontWeight: 600 }
                    : { background: 'var(--color-ox-08)', color: 'var(--color-muted)' }}
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {catalog.map((m, idx) => {
                const hit = s.lines.includes(idx)
                return (
                  <div
                    key={m.name}
                    className="rounded-xl border p-3 transition-colors duration-500"
                    style={{
                      borderColor: hit ? 'rgba(96,0,16,.3)' : 'var(--color-line)',
                      background: hit ? 'rgba(96,0,16,.05)' : '#fff',
                    }}
                  >
                    <div className="mb-1.5 flex items-center gap-1.5" style={{ fontSize: '10.5px', fontWeight: 600 }}>
                      <span
                        className="rounded px-1.5 py-0.5"
                        style={m.tag === 'Rx'
                          ? { background: '#EBF0FB', color: '#2F4FA2' }
                          : { background: 'var(--color-ox-08)', color: 'var(--color-ox)' }}
                      >
                        {m.tag}
                      </span>
                      {m.cold && (
                        <span className="rounded px-1.5 py-0.5" style={{ background: '#E3F3FB', color: '#1E6D93' }}>2–8°C</span>
                      )}
                      <span className="ml-auto" style={{ color: m.low ? 'var(--color-warn)' : 'var(--color-faint)' }}>
                        {m.stock}
                      </span>
                    </div>
                    <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-aub)', lineHeight: 1.25 }}>{m.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-faint)', marginTop: 2 }} className="truncate">{m.salt}</div>
                    <div className="mt-2 flex items-center justify-between" style={{ fontSize: '11.5px' }}>
                      <span style={{ color: 'var(--color-faint)' }}>Rack {m.rack}</span>
                      <span style={{ fontWeight: 700, color: 'var(--color-aub)' }} className="tabnum">{fmt(m.price)}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Cart */}
          <div className="flex min-h-[360px] flex-col p-4">
            <div className="mb-2 flex items-center justify-between">
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-aub)' }}>Active cart</span>
              <span
                className="rounded-full px-2.5 py-1"
                style={{ fontSize: '11px', background: 'var(--color-ox-08)', color: 'var(--color-ox)', fontWeight: 600 }}
              >
                Walk-in
              </span>
            </div>
            <div className="flex-1 space-y-1">
              {lines.length === 0 && (
                <div
                  className="grid h-36 place-items-center rounded-xl border border-dashed"
                  style={{ borderColor: 'var(--color-line)', color: 'var(--color-faint)', fontSize: '12.5px' }}
                >
                  Scan a medicine to start the bill
                </div>
              )}
              {lines.map(l => (
                <div key={l.i} className="row-in rounded-xl px-2 py-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-aub)', lineHeight: 1.3 }}>{l.name}</div>
                      <div className="mt-0.5 flex flex-wrap items-center gap-1.5" style={{ fontSize: '11px', color: 'var(--color-faint)' }}>
                        {l.fefo && (
                          <span
                            className="rounded px-1.5 py-px"
                            style={{ background: 'var(--color-warn-soft)', color: 'var(--color-warn)', fontWeight: 600, fontSize: '10.5px' }}
                          >
                            FEFO
                          </span>
                        )}
                        <span>{l.note}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="tabnum" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-aub)' }}>{fmt(l.total)}</div>
                      <div style={{ fontSize: '11px', color: 'var(--color-faint)' }}>× {l.qty}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {s.strip && !s.pay && (
              <div className="mb-2 flex items-center gap-1.5" style={{ fontSize: '11px', color: 'var(--color-muted)' }}>
                <span className="kbd">Alt U</span> switched box → strip, price prorated
              </div>
            )}

            {/* Totals + payment */}
            <div className="mt-2 border-t pt-3" style={{ borderColor: 'var(--color-line)' }}>
              <div className="flex items-center justify-between" style={{ fontSize: '12.5px', color: 'var(--color-muted)' }}>
                <span>Items</span>
                <span className="tabnum">{lines.reduce((a, l) => a + l.qty, 0)}</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-aub)' }}>Total</span>
                <span className="tabnum" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-aub)', letterSpacing: '-0.03em' }}>
                  {fmt(total)}
                </span>
              </div>
              {/* Payment method chips */}
              <div className="mt-3 grid grid-cols-3 gap-1.5" style={{ fontSize: '11.5px' }}>
                {['Cash', 'Raast QR', 'Khata'].map(t => (
                  <span
                    key={t}
                    className="rounded-lg border px-2 py-1.5 text-center transition-colors duration-300"
                    style={
                      s.pay && t === 'Raast QR'
                        ? { borderColor: 'var(--color-ox)', background: 'var(--color-ox)', color: '#fff', fontWeight: 600 }
                        : { borderColor: 'var(--color-line)', color: 'var(--color-muted)' }
                    }
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                className="mt-2 flex items-center justify-center gap-2 rounded-xl py-2.5 transition-colors duration-300"
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  background: s.pay ? 'var(--color-ok)' : 'var(--color-aub)',
                  color: '#fff',
                }}
              >
                {s.pay ? (
                  <><span>✓</span> Paid by Raast</>
                ) : (
                  <>Pay <span className="rounded px-1.5 text-xs" style={{ background: 'rgba(255,255,255,.18)' }}>F12</span></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thermal receipt slides out */}
      {s.receipt && (
        <div className="receipt-out absolute -bottom-24 right-3 z-10 w-[190px] sm:right-10 sm:w-[210px] lg:right-28 xl:right-48">
          <div
            className="receipt-edge px-4 pb-7 pt-4 shadow-2xl"
            style={{ background: '#fff', fontSize: '10.5px', lineHeight: 1.55, color: 'var(--color-muted)' }}
          >
            <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '12px', color: 'var(--color-aub)' }}>
              Ease Pharma, F-7 Markaz
            </div>
            <div style={{ textAlign: 'center', fontSize: '10px' }}>DSL 04-213-0917 (Form 9)</div>
            <div style={{ textAlign: 'center', fontSize: '10px' }}>Pharmacist: Hamid Raza, No. 12847</div>
            <div className="my-2 border-t border-dashed" style={{ borderColor: 'var(--color-line)' }} />
            {lines.map(l => (
              <div key={l.i} className="flex justify-between">
                <span className="truncate pr-1">{l.name}</span>
                <span className="tabnum">{l.total}</span>
              </div>
            ))}
            <div className="mt-1 flex justify-between" style={{ fontWeight: 700, color: 'var(--color-aub)' }}>
              <span>Total</span>
              <span className="tabnum">{fmt(total)}</span>
            </div>
            <div className="my-2 border-t border-dashed" style={{ borderColor: 'var(--color-line)' }} />
            <div className="flex items-center gap-2">
              <Qr size={46} seed={41} />
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-aub)', fontSize: '11px' }}>FBR Invoice</div>
                <div>USIN issued &amp; verified</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
