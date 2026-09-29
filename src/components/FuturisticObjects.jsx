import React from 'react'

/*
 * Futuristic 3D Medicine Objects & Holographic Elements
 * Inspired by candid.singles aesthetics:
 * - Floating glossy 3D dual-tone capsules (#600010 oxblood + #F7FCFF ice white)
 * - Rotating molecular compound lattice with glowing nodes
 * - Interactive HUD chips with live laser scanlines and telemetry
 */

export function Capsule3D({ size = 120, tilt = 25, glow = true, className = '', style = {} }) {
  const width = size
  const height = size * 2.3

  return (
    <div
      className={`relative inline-block pointer-events-none select-none ${className}`}
      style={{
        width,
        height,
        filter: glow
          ? 'drop-shadow(0 25px 35px rgba(96,0,16,0.55)) drop-shadow(0 10px 15px rgba(26,1,44,0.7))'
          : 'drop-shadow(0 15px 25px rgba(0,0,0,0.4))',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 100 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Oxblood Cap Gradient */}
          <linearGradient id="oxCapGrad" x1="15" y1="15" x2="85" y2="105" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9e182f" />
            <stop offset="35%" stopColor="#600010" />
            <stop offset="85%" stopColor="#3d000a" />
            <stop offset="100%" stopColor="#1a0004" />
          </linearGradient>

          {/* Ice White Body Gradient */}
          <linearGradient id="iceBodyGrad" x1="15" y1="115" x2="85" y2="215" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#F7FCFF" />
            <stop offset="80%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Longitudinal Specular Highlight (The 3D cylindrical shine) */}
          <linearGradient id="specularGlow" x1="20" y1="0" x2="45" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Secondary ambient rim light */}
          <linearGradient id="rimLight" x1="95" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0" />
          </linearGradient>

          {/* Clip path for capsule shape */}
          <clipPath id="capsuleClip">
            <rect x="5" y="5" width="90" height="220" rx="45" />
          </clipPath>
        </defs>

        {/* Base capsule grouped with clip */}
        <g clipPath="url(#capsuleClip)">
          {/* Top Half: Oxblood Shell */}
          <path d="M5 5 H95 V115 H5 Z" fill="url(#oxCapGrad)" />

          {/* Bottom Half: Ice White Body */}
          <path d="M5 115 H95 V225 H5 Z" fill="url(#iceBodyGrad)" />

          {/* Internal floating micro-spheres inside translucent ice body */}
          <circle cx="35" cy="145" r="5.5" fill="#600010" fillOpacity="0.8" />
          <circle cx="65" cy="155" r="4" fill="#9e182f" fillOpacity="0.7" />
          <circle cx="48" cy="175" r="6" fill="#600010" fillOpacity="0.85" />
          <circle cx="30" cy="190" r="3.5" fill="#7a1325" fillOpacity="0.75" />
          <circle cx="68" cy="188" r="5" fill="#600010" fillOpacity="0.8" />

          {/* Seam / Junction Ring */}
          <line x1="5" y1="115" x2="95" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <line x1="5" y1="116.5" x2="95" y2="116.5" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />

          {/* 3D Cylindrical Specular Glare along the left length */}
          <rect x="18" y="5" width="22" height="220" fill="url(#specularGlow)" />

          {/* Top Cap Curved Specular Spot */}
          <ellipse cx="38" cy="30" rx="14" ry="9" fill="#ffffff" fillOpacity="0.45" transform="rotate(-15 38 30)" />

          {/* Bottom Cap Curved Specular Spot */}
          <ellipse cx="36" cy="205" rx="12" ry="7" fill="#ffffff" fillOpacity="0.5" transform="rotate(12 36 205)" />

          {/* Right rim light */}
          <rect x="75" y="5" width="20" height="220" fill="url(#rimLight)" />
        </g>

        {/* Outer subtle 3D rim stroke */}
        <rect
          x="5"
          y="5"
          width="90"
          height="220"
          rx="45"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  )
}

/*
 * 3D Molecular Lattice / Compound Structure
 * High-tech rotating DRAP formula ring
 */
export function MoleculeLattice({ size = 180, className = '', style = {} }) {
  return (
    <div
      className={`relative inline-block pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-spin-slow"
      >
        <defs>
          <linearGradient id="molGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#600010" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F7FCFF" stopOpacity="0.8" />
          </linearGradient>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Hexagonal Lattice Lines */}
        <polygon
          points="100,20 170,60 170,140 100,180 30,140 30,60"
          stroke="url(#molGrad)"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />
        <polygon
          points="100,45 150,75 150,125 100,155 50,125 50,75"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          fill="rgba(96,0,16,0.06)"
        />

        {/* Cross bonds */}
        <line x1="100" y1="20" x2="100" y2="45" stroke="#ff4d6d" strokeWidth="2" />
        <line x1="170" y1="60" x2="150" y2="75" stroke="#ff4d6d" strokeWidth="2" />
        <line x1="170" y1="140" x2="150" y2="125" stroke="#ff4d6d" strokeWidth="2" />
        <line x1="100" y1="180" x2="100" y2="155" stroke="#F7FCFF" strokeWidth="2" />
        <line x1="30" y1="140" x2="50" y2="125" stroke="#F7FCFF" strokeWidth="2" />
        <line x1="30" y1="60" x2="50" y2="75" stroke="#ff4d6d" strokeWidth="2" />

        {/* Glowing Atoms / Nodes */}
        <circle cx="100" cy="20" r="6" fill="#ff4d6d" filter="url(#nodeGlow)" />
        <circle cx="170" cy="60" r="5" fill="#ffffff" filter="url(#nodeGlow)" />
        <circle cx="170" cy="140" r="6" fill="#ff4d6d" filter="url(#nodeGlow)" />
        <circle cx="100" cy="180" r="7" fill="#F7FCFF" filter="url(#nodeGlow)" />
        <circle cx="30" cy="140" r="5" fill="#ffffff" filter="url(#nodeGlow)" />
        <circle cx="30" cy="60" r="6" fill="#ff4d6d" filter="url(#nodeGlow)" />

        {/* Center active nucleus */}
        <circle cx="100" cy="100" r="8" fill="#600010" stroke="#ff4d6d" strokeWidth="2" filter="url(#nodeGlow)" />
        <circle cx="100" cy="100" r="3" fill="#FFFFFF" />
      </svg>
    </div>
  )
}

/*
 * Futuristic Holographic Floating HUD Badge
 * Features animated laser sweep line, high-contrast neon typography, and glass border
 */
export function HologramBadge({
  icon,
  tag,
  title,
  subtitle,
  variant = 'oxblood', // 'oxblood' | 'glass'
  className = '',
  style = {},
}) {
  const isOx = variant === 'oxblood'

  return (
    <div
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
      style={{
        background: isOx
          ? 'linear-gradient(135deg, rgba(96,0,16,0.85) 0%, rgba(26,1,44,0.92) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(26,1,44,0.7) 100%)',
        backdropFilter: 'blur(24px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: isOx
          ? '0 20px 40px -15px rgba(96,0,16,0.65), 0 0 0 1px rgba(255,255,255,0.1) inset'
          : '0 20px 40px -15px rgba(26,1,44,0.7), 0 0 0 1px rgba(255,255,255,0.15) inset',
        padding: '16px 20px',
        ...style,
      }}
    >
      {/* Animated Laser Scanline Effect */}
      <div
        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ff4d6d] to-transparent pointer-events-none opacity-70 animate-laser-sweep"
        aria-hidden="true"
      />

      <div className="flex items-center gap-3.5 relative z-10">
        {/* Glowing Icon Frame */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{
            background: isOx
              ? 'rgba(255,255,255,0.15)'
              : 'rgba(96,0,16,0.35)',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          }}
        >
          {icon}
        </div>

        <div>
          {tag && (
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-[#fca5a5]">
                {tag}
              </span>
            </div>
          )}
          <div className="text-[13.5px] font-bold text-white tracking-tight flex items-center gap-1.5">
            {title}
          </div>
          {subtitle && (
            <div className="text-[11.5px] text-[#F7FCFF]/70 font-medium">
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/*
 * Cybernetic Particle Grid Background
 * High-tech grid with breathing glow nodes
 */
export function CyberGridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Perspective grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="cyberGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
            />
            <circle cx="60" cy="0" r="1.5" fill="#ff4d6d" fillOpacity="0.4" />
          </pattern>
          <radialGradient id="gridFade" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#cyberGrid)" mask="url(#gridMask)" />
      </svg>

      {/* Floating high-tech glowing micro-nodes */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#ff4d6d] shadow-[0_0_15px_#ff4d6d] animate-ping-slow" />
      <div className="absolute top-1/3 right-1/5 w-2.5 h-2.5 rounded-full bg-[#F7FCFF] shadow-[0_0_18px_#F7FCFF] animate-pulse" />
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#ff4d6d] shadow-[0_0_12px_#ff4d6d] animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-[#F7FCFF] shadow-[0_0_15px_#F7FCFF] animate-ping-slow" />
    </div>
  )
}
