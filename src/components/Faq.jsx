import { useState, useMemo } from 'react'
import { faqs, links } from '../content'
import useInView from '../hooks/useInView'

const CATEGORIES = [
  'All',
  'Offline & Hardware',
  'FBR & Compliance',
  'Migration & Data',
  'Billing & Payments',
]

function getCategoryAndIcon(q) {
  const text = q.toLowerCase()
  if (text.includes('internet') || text.includes('offline') || text.includes('hardware') || text.includes('printer')) {
    return { category: 'Offline & Hardware', icon: '🖨️' }
  }
  if (text.includes('fbr') || text.includes('e-invoicing') || text.includes('compliance')) {
    return { category: 'FBR & Compliance', icon: '🧾' }
  }
  if (text.includes('candela') || text.includes('migration') || text.includes('data') || text.includes('backup')) {
    return { category: 'Migration & Data', icon: '🔄' }
  }
  if (text.includes('payment') || text.includes('cash') || text.includes('billing')) {
    return { category: 'Billing & Payments', icon: '💳' }
  }
  return { category: 'General', icon: '✦' }
}

export default function Faq() {
  const [ref, inView] = useInView()
  const [openId, setOpenId] = useState(0) // First open by default
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Enrich FAQs with category and icon
  const enrichedFaqs = useMemo(() => {
    return faqs.map((f, i) => {
      const { category, icon } = getCategoryAndIcon(f.q)
      return { ...f, category, icon, id: i }
    })
  }, [])

  // Filter based on active category and live search
  const filteredFaqs = useMemo(() => {
    return enrichedFaqs.filter(item => {
      const matchCat = activeCategory === 'All' || item.category === activeCategory
      const query = searchQuery.trim().toLowerCase()
      const matchSearch =
        !query ||
        item.q.toLowerCase().includes(query) ||
        item.a.toLowerCase().includes(query)
      return matchCat && matchSearch
    })
  }, [enrichedFaqs, activeCategory, searchQuery])

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts = { All: enrichedFaqs.length }
    enrichedFaqs.forEach(f => {
      counts[f.category] = (counts[f.category] || 0) + 1
    })
    return counts
  }, [enrichedFaqs])

  return (
    <section
      id="faq"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, #F9FBFC 0%, #F2F5FA 50%, #EBF0F8 100%)',
        borderTop: '1px solid rgba(26,1,44,0.06)',
        borderBottom: '1px solid rgba(26,1,44,0.06)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '104px',
        paddingBottom: '112px',
      }}
    >
      {/* Subtle ambient light glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 550,
          height: 550,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,0,16,0.06) 0%, transparent 65%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47,79,162,0.05) 0%, transparent 65%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:items-start">
          {/* Left Column: Heading, Search & Support Card */}
          <div className={`fade-rise ${inView ? 'in' : ''}`}>
            {/* Category tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 999, padding: '6px 14px', background: 'rgba(96,0,16,.06)', border: '1px solid rgba(96,0,16,.14)', fontSize: '13px', fontWeight: 700, color: '#600010', marginBottom: 20 }}>
              <span>✦</span> Frequently Asked Questions
            </div>

            <h2 className="h2" style={{ color: '#1A012C' }}>
              Clear answers.<br />Zero surprises.
            </h2>

            <p className="lede lede-light" style={{ marginTop: 16 }}>
              Everything you need to know about hardware compatibility, offline billing, FBR Tier-1 e-invoicing, and seamless Candela data migration.
            </p>

            {/* Instant Search Bar */}
            <div style={{ marginTop: 28, position: 'relative' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  borderRadius: 14,
                  border: '1px solid rgba(26,1,44,0.12)',
                  padding: '10px 14px',
                  boxShadow: '0 4px 16px -2px rgba(26,1,44,0.04)',
                  transition: 'border-color 200ms, box-shadow 200ms',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7A6886"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: 10, flexShrink: 0 }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g. offline, FBR, candela)..."
                  aria-label="Search frequently asked questions"
                  style={{
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    fontSize: '14px',
                    color: '#1A012C',
                    background: 'transparent',
                    fontFamily: 'inherit',
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      background: 'rgba(26,1,44,0.06)',
                      border: 'none',
                      borderRadius: '50%',
                      width: 22,
                      height: 22,
                      display: 'grid',
                      placeItems: 'center',
                      cursor: 'pointer',
                      fontSize: '12px',
                      color: '#7A6886',
                      flexShrink: 0,
                    }}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Direct Support Card */}
            <div
              style={{
                marginTop: 28,
                borderRadius: 20,
                background: '#FFFFFF',
                border: '1px solid rgba(26,1,44,0.08)',
                padding: '24px',
                boxShadow: '0 12px 32px -8px rgba(26,1,44,0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#15803d',
                    boxShadow: '0 0 0 3px rgba(21,128,61,0.2)',
                  }}
                />
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#15803d' }}>
                  Live Implementation Support
                </span>
              </div>

              <div style={{ fontSize: '16px', fontWeight: 800, color: '#1A012C', marginBottom: 6 }}>
                Have a specific setup question?
              </div>
              <p style={{ fontSize: '13.5px', color: '#7a6886', lineHeight: 1.6, marginBottom: 20 }}>
                Our pharmacy software deployment team in Islamabad & Karachi can walk you through your exact store setup.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a
                  href={links.whatsapp}
                  className="btn"
                  style={{
                    background: '#600010',
                    color: '#fff',
                    padding: '12px 20px',
                    fontSize: '14px',
                    borderRadius: 9999,
                    width: '100%',
                    justifyContent: 'center',
                    boxShadow: '0 6px 20px -6px rgba(96,0,16,0.4)',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>💬</span> Ask on WhatsApp
                </a>
                <a
                  href="#demo"
                  className="btn btn-ghost"
                  style={{
                    padding: '11px 20px',
                    fontSize: '14px',
                    borderRadius: 9999,
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  Book a 15-min live demo
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Category Filter & Accordion Cards */}
          <div className={`fade-rise ${inView ? 'in' : ''}`} style={{ animationDelay: '100ms' }}>
            {/* Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 20,
              }}
              role="tablist"
              aria-label="FAQ categories"
            >
              {CATEGORIES.map(cat => {
                const count = categoryCounts[cat] || 0
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    role="tab"
                    aria-selected={isActive}
                    style={{
                      borderRadius: 9999,
                      padding: '8px 16px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: isActive
                        ? '1px solid #600010'
                        : '1px solid rgba(26,1,44,0.10)',
                      background: isActive ? '#600010' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#5A4866',
                      boxShadow: isActive
                        ? '0 6px 18px -4px rgba(96,0,16,0.35)'
                        : '0 2px 6px rgba(26,1,44,0.03)',
                      transition: 'all 200ms ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <span>{cat}</span>
                    <span
                      style={{
                        fontSize: '11px',
                        padding: '1px 6px',
                        borderRadius: 999,
                        background: isActive ? 'rgba(255,255,255,0.22)' : 'rgba(26,1,44,0.06)',
                        color: isActive ? '#fff' : '#7A6886',
                      }}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Accordion Cards List */}
            {filteredFaqs.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {filteredFaqs.map(item => {
                  const isOpen = openId === item.id
                  return (
                    <div
                      key={item.id}
                      style={{
                        borderRadius: 18,
                        background: isOpen
                          ? 'linear-gradient(135deg, rgba(96,0,16,0.02) 0%, #FFFFFF 100%)'
                          : '#FFFFFF',
                        border: isOpen
                          ? '1.5px solid rgba(96,0,16,0.40)'
                          : '1px solid rgba(26,1,44,0.08)',
                        boxShadow: isOpen
                          ? '0 16px 36px -12px rgba(96,0,16,0.12), 0 2px 8px rgba(26,1,44,0.03)'
                          : '0 4px 14px -3px rgba(26,1,44,0.03)',
                        overflow: 'hidden',
                        transition: 'all 250ms cubic-bezier(.2,.7,.2,1)',
                      }}
                    >
                      <button
                        onClick={() => setOpenId(cur => (cur === item.id ? null : item.id))}
                        aria-expanded={isOpen}
                        style={{
                          display: 'flex',
                          width: '100%',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 16,
                          padding: '20px 22px',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <span
                            style={{
                              width: 38,
                              height: 38,
                              borderRadius: 10,
                              background: isOpen ? 'rgba(96,0,16,0.08)' : 'rgba(26,1,44,0.04)',
                              color: isOpen ? '#600010' : '#7A6886',
                              display: 'grid',
                              placeItems: 'center',
                              fontSize: '18px',
                              flexShrink: 0,
                              transition: 'all 200ms ease',
                            }}
                          >
                            {item.icon}
                          </span>
                          <div>
                            <span
                              style={{
                                display: 'inline-block',
                                fontSize: '11px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                color: isOpen ? '#600010' : '#9987A4',
                                marginBottom: 4,
                              }}
                            >
                              {item.category}
                            </span>
                            <div
                              style={{
                                fontSize: '16px',
                                fontWeight: 700,
                                color: isOpen ? '#600010' : '#1A012C',
                                lineHeight: 1.4,
                                transition: 'color 200ms ease',
                              }}
                            >
                              {item.q}
                            </div>
                          </div>
                        </div>

                        {/* Chevron / Toggle Icon */}
                        <span
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            background: isOpen ? '#600010' : 'rgba(26,1,44,0.05)',
                            color: isOpen ? '#FFFFFF' : '#7A6886',
                            display: 'grid',
                            placeItems: 'center',
                            flexShrink: 0,
                            transform: isOpen ? 'rotate(180deg)' : 'none',
                            transition: 'all 250ms cubic-bezier(.2,.7,.2,1)',
                          }}
                          aria-hidden="true"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </button>

                      {/* Expandable Answer */}
                      {isOpen && (
                        <div
                          style={{
                            padding: '16px 22px 20px',
                            borderTop: '1px dashed rgba(96,0,16,0.12)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '15px',
                              color: '#554363',
                              lineHeight: 1.75,
                              margin: 0,
                            }}
                          >
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              /* Empty state if search finds nothing */
              <div
                style={{
                  borderRadius: 18,
                  background: '#FFFFFF',
                  border: '1px dashed rgba(26,1,44,0.15)',
                  padding: '36px 24px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: 12 }}>🔍</div>
                <div style={{ fontSize: '17px', fontWeight: 700, color: '#1A012C', marginBottom: 6 }}>
                  No questions found for &ldquo;{searchQuery}&rdquo;
                </div>
                <p style={{ fontSize: '14px', color: '#7A6886', maxWidth: '36ch', margin: '0 auto 20px' }}>
                  Have a specific question in mind? Our team is available on WhatsApp to help you directly.
                </p>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setActiveCategory('All')
                    }}
                    className="btn btn-ghost"
                    style={{ fontSize: '13px', padding: '8px 18px' }}
                  >
                    Reset filters
                  </button>
                  <a
                    href={links.whatsapp}
                    className="btn"
                    style={{
                      background: '#600010',
                      color: '#fff',
                      fontSize: '13px',
                      padding: '8px 18px',
                    }}
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
