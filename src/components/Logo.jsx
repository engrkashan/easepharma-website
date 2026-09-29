// Logo uses the real brand PNG from /public/easepharma-red.png
// white=true renders a white-tinted version for dark backgrounds

export default function Logo({ white = false, height = 32 }) {
  return (
    <img
      src="/easepharma-red.png"
      alt="EasePharma"
      height={height}
      style={{
        height: `${height}px`,
        width: 'auto',
        display: 'block',
        // On dark backgrounds invert to white
        filter: white
          ? 'brightness(0) invert(1)'
          : 'none',
        userSelect: 'none',
      }}
      draggable={false}
    />
  )
}
