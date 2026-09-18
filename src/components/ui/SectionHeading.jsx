import Reveal from './Reveal'
import { SignatureRule } from './Logo'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', tone = 'light', className = '' }) {
  const onDark = tone === 'dark'
  const center = align === 'center'
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${onDark ? 'text-gold-400!' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={`heading-lg mt-5 ${onDark ? 'text-ivory-50' : 'text-navy-900'}`}>{title}</h2>
      </Reveal>
      <Reveal delay={0.12}>
        <SignatureRule className={`mt-6 w-28 ${center ? 'mx-auto' : ''}`} />
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${center ? 'mx-auto' : ''} ${
              onDark ? 'text-ivory-100/70' : 'text-charcoal-700'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
