/**
 * Regnum Tax brand mark, recreated from the office signage:
 * a serif "R" whose leg is completed by a gold check mark.
 * To use an official logo file instead, drop it in /public and render
 * <img src="/regnum-logo.svg" alt="Regnum Tax" /> in place of <Logo />.
 */
export function Mark({ className = 'h-11 w-11', letter = '#0B1F3F', check = '#C8A04A' }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      {/* R: stem + bowl (counter cut out) */}
      <path
        fill={letter}
        fillRule="evenodd"
        d="M16 10 H56 C74 10 85 20 85 33 C85 46 75 54 62 56 L90 90 H70 L46 57 H42 V62 L26 76 V17 L16 15 Z M42 17 V50 H54 C65 50 70 43 70 33.5 C70 24 65 17 54 17 Z"
      />
      {/* gold check forming the leg */}
      <path fill={check} d="M4 68 L14 62 L26 77 L58 47 L63 54 L27 90 Z" />
    </svg>
  )
}

/** Gold hairline ending in a dot — the signature rule from the signage. */
export function SignatureRule({ className = 'w-full', animate = false }) {
  return (
    <span className={`relative block h-[5px] ${className}`} aria-hidden="true">
      <span
        className={`absolute left-0 right-3 top-1/2 h-px -translate-y-1/2 origin-left bg-gold-500 ${animate ? 'animate-[rule_1.6s_cubic-bezier(0.22,1,0.36,1)_both]' : ''}`}
      />
      <span className="absolute right-0 top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-gold-500" />
    </span>
  )
}

export default function Logo({ tone = 'onLight', tagline = true }) {
  const dark = tone === 'onDark'
  return (
    <span className="flex items-center gap-3 sm:gap-4">
      <Mark className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" letter={dark ? '#F7F3EA' : '#0B1F3F'} />
      <span className="h-10 w-px bg-gold-500/80 sm:h-11" aria-hidden="true" />
      <span className="flex flex-col">
        <span className={`whitespace-nowrap font-display text-[1.05rem] font-semibold leading-none tracking-[0.12em] sm:text-[1.2rem] ${dark ? 'text-ivory-50' : 'text-navy-900'}`}>
          REGNUM <span className="text-gold-500">TAX</span>
        </span>
        {tagline && (
          <>
            <SignatureRule className="mt-1.5 w-full" />
            <span
              className={`mt-1 flex items-center gap-1 whitespace-nowrap text-[0.42rem] font-semibold uppercase leading-none tracking-[0.16em] sm:text-[0.47rem] ${
                dark ? 'text-ivory-100/70' : 'text-navy-900/80'
              }`}
            >
              Tax Consulting <span className="text-gold-500">|</span> Advisory <span className="text-gold-500">|</span> Compliance
            </span>
          </>
        )}
      </span>
    </span>
  )
}
