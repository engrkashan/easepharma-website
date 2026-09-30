import Qr from './Qr'
import useInView from '../hooks/useInView'

/*
  REAL SCREENSHOT SLOT
  Drop /public/screenshots/receipt.png and use:
  <img src="/screenshots/receipt.png" alt="FBR thermal receipt" style={{ width:'100%', display:'block' }} />
*/

const receiptLines = [
  { label: 'Panadol Extra × 1', value: '52' },
  { label: 'Augmentin 625mg × 1', value: '612' },
  { label: 'Glucophage 500mg × 2', value: '380' },
]

const features = [
  {
    icon: '🧾',
    title: 'FBR Tier-1 e-invoicing',
    body: 'Every receipt gets a USIN and FBR QR code on the thermal slip — fully compliant with Point of Sale Integration Rules 2020.',
  },
  {
    icon: '📋',
    title: 'Controlled-drug register',
    body: "Doctor's PMDC number captured at dispensing. Digital register ready for DRAP inspection.",
  },
  {
    icon: '🌡️',
    title: 'Cold-chain temperature log',
    body: 'Refrigerator temperature timestamped at intake and on receipt. Audit-ready for DRAP cold-chain compliance.',
  },
  {
    icon: '☁️',
    title: 'Encrypted Google Drive backup',
    body: 'Nightly encrypted backup to your own Google Drive. You own the data.',
  },
]

export default function Compliance() {
  const [ref, inView] = useInView()
  return (
    <section id="compliance" className="section section-ice" ref={ref}>
      <div className="wrap">
        <div style={{ maxWidth: 560, marginBottom: 56 }}>
          <h2 className="h2" style={{ color: '#1A012C' }}>
            Fully compliant.<br />No extra work.
          </h2>
          <p className="lede lede-light" style={{ marginTop: 18 }}>
            FBR Tier-1 e-invoicing, DRAP-linked batch control, cold-chain logging and
            encrypted backups — all automatic with every sale.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'start' }}>
          {/* Thermal receipt */}
          <div className={`fade-rise ${inView ? 'in' : ''}`} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 280, maxWidth: '100%' }}>
              <div
                className="receipt-edge"
                style={{ background: '#fff', padding: '22px 22px 36px', fontFamily: 'monospace', fontSize: '11.5px', lineHeight: 1.65, color: '#7a6886', boxShadow: '0 28px 70px -20px rgba(26,1,44,.28)' }}
              >
                <div style={{ textAlign: 'center', fontWeight: 800, fontSize: '14px', color: '#1A012C', fontFamily: 'Manrope, sans-serif' }}>Ease Pharma</div>
                <div style={{ textAlign: 'center', fontSize: '11px' }}>Shop 14, F-7 Markaz, Islamabad</div>
                <div style={{ textAlign: 'center', fontSize: '11px' }}>DSL 04-213-0917 (Form 9 — Retail)</div>
                <div style={{ textAlign: 'center', fontSize: '11px' }}>Pharmacist: Hamid Raza · PMDC 12847</div>
                <div style={{ borderTop: '1px dashed #e8e3ef', margin: '10px 0' }} />
                <div style={{ fontSize: '10.5px', color: '#b8afc2', marginBottom: 4 }}>Invoice: EP-2026-00417 · 28 Sep 2026</div>
                {receiptLines.map(l => (
                  <div key={l.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ flex: 1, paddingRight: 4 }}>{l.label}</span>
                    <span className="tabnum">{l.value}</span>
                  </div>
                ))}
                <div style={{ fontSize: '10.5px', color: '#b8afc2', marginTop: 2 }}>Batch: AG-2417 · Exp Mar 2027</div>
                <div style={{ borderTop: '1px dashed #e8e3ef', margin: '10px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, color: '#1A012C', fontSize: '13px' }}>
                  <span>Total</span>
                  <span className="tabnum">Rs 1,044</span>
                </div>
                <div style={{ borderTop: '1px dashed #e8e3ef', margin: '10px 0' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
                  <Qr size={54} seed={73} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '12px', color: '#1A012C', fontFamily: 'Manrope, sans-serif' }}>FBR Invoice</div>
                    <div style={{ fontSize: '10.5px' }}>USIN verified · Tier-1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards — 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, gridColumn: 'span 2' }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`card-light fade-rise ${inView ? 'in' : ''}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div style={{ fontSize: 22, marginBottom: 10 }} aria-hidden="true">{f.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1A012C', marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: '13.5px', color: '#7a6886', lineHeight: 1.6 }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
