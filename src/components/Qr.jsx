// Minimal deterministic QR-code pattern (illustrative only, not a real QR)
export default function Qr({ size = 52, seed = 1 }) {
  const modules = 11
  const cell = size / modules
  // deterministic pseudo-random pattern from seed
  const bits = Array.from({ length: modules * modules }, (_, i) => {
    const v = (seed * 9301 + i * 49297 + (i >> 1) * 233) % 1000
    // always set corners (finder patterns)
    const r = Math.floor(i / modules), c = i % modules
    const corner =
      (r < 3 && c < 3) || (r < 3 && c >= modules - 3) || (r >= modules - 3 && c < 3)
    return corner ? 1 : v < 480 ? 1 : 0
  })
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" style={{ display: 'block' }}>
      <rect width={size} height={size} fill="#fff" rx="2" />
      {bits.map((b, i) =>
        b ? (
          <rect
            key={i}
            x={(i % modules) * cell + 0.5}
            y={Math.floor(i / modules) * cell + 0.5}
            width={cell - 1}
            height={cell - 1}
            rx="0.5"
            fill="#1A012C"
          />
        ) : null
      )}
    </svg>
  )
}
