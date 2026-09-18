import { motion } from 'framer-motion'

/* Visual motifs taken directly from the Regnum Tax office signboard. */

/** Polished gold standoff bolt. */
export function Bolt({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-4 w-4 rounded-full shadow-[0_2px_4px_rgba(11,31,63,0.35),inset_0_-1px_1px_rgba(0,0,0,0.25)] sm:h-5 sm:w-5 ${className}`}
      style={{ background: 'radial-gradient(circle at 35% 30%, #f6e6b8 0%, #d9b868 28%, #b08a3a 62%, #6e5220 100%)' }}
    />
  )
}

/** Clear acrylic plate with four gold standoffs. */
export function AcrylicPanel({ children, className = '', bolts = true, inset = 'p-3 sm:p-4' }) {
  return (
    <div
      className={`relative border border-white/80 bg-white/30 shadow-[0_40px_80px_-40px_rgba(11,31,63,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md ${inset} ${className}`}
    >
      {/* acrylic sheen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 32%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.18) 100%)' }}
      />
      {children}
      {bolts && (
        <>
          <Bolt className="absolute left-3 top-3 z-20 sm:left-4 sm:top-4" />
          <Bolt className="absolute right-3 top-3 z-20 sm:right-4 sm:top-4" />
          <Bolt className="absolute bottom-3 left-3 z-20 sm:bottom-4 sm:left-4" />
          <Bolt className="absolute bottom-3 right-3 z-20 sm:bottom-4 sm:right-4" />
        </>
      )}
    </div>
  )
}

/** Navy corner sweep with its gold leading edge. Position it with className. */
export function Swoosh({ className = '', delay = 0.4, inView = false }) {
  const reveal = inView
    ? { initial: { clipPath: 'inset(0 0 0 100%)' }, whileInView: { clipPath: 'inset(0 0 0 0%)' }, viewport: { once: true } }
    : { initial: { clipPath: 'inset(0 0 0 100%)' }, animate: { clipPath: 'inset(0 0 0 0%)' } }
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      {...reveal}
      transition={{ duration: 1.8, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="h-full w-full">
        <defs>
          <linearGradient id="swoosh-gold" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0" stopColor="#C8A04A" stopOpacity="0.2" />
            <stop offset="0.35" stopColor="#B8923F" />
            <stop offset="0.7" stopColor="#E3C680" />
            <stop offset="1" stopColor="#C8A04A" />
          </linearGradient>
          <linearGradient id="swoosh-navy" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0" stopColor="#0B1F3F" />
            <stop offset="1" stopColor="#12294F" />
          </linearGradient>
        </defs>
        <path d="M360 300 C620 288 830 196 1000 6 L1000 36 C842 208 644 296 430 300 Z" fill="url(#swoosh-gold)" />
        <path d="M430 300 C644 296 842 208 1000 36 V300 Z" fill="url(#swoosh-navy)" />
      </svg>
    </motion.div>
  )
}

/** Tagline set like the signboard: TAX CONSULTING | ADVISORY | COMPLIANCE */
export function Tagline({ className = '', tone = 'onLight' }) {
  const text = tone === 'onDark' ? 'text-ivory-100/80' : 'text-navy-900'
  return (
    <span className={`inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] sm:gap-x-3 sm:text-[0.66rem] sm:tracking-[0.26em] ${text} ${className}`}>
      Tax Consulting <span className="h-3 w-px bg-gold-500" /> Advisory <span className="h-3 w-px bg-gold-500" /> Compliance
    </span>
  )
}
