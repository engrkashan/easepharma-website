// hooks/useInView.js — intersection-observer based reveal
import { useEffect, useRef, useState } from 'react'

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function useInView(opts = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) { setInView(true); return }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); io.disconnect() } },
      { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? '0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [opts.threshold, opts.rootMargin])
  return [ref, inView]
}
