import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { stats } from '../data/siteContent'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString('en-IN')}
      <span className="text-gold-400">{suffix}</span>
    </span>
  )
}

/* Values come from `stats` in data/siteContent.js — DEMO PLACEHOLDERS, replace before launch. */
export default function Stats() {
  return (
    <section aria-label="Regnum Tax at a glance" className="relative overflow-hidden bg-navy-950 text-ivory-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px gold-rule opacity-60" />
      <div className="container-lux py-16 sm:py-20">
        <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`flex flex-col-reverse items-center px-4 text-center ${i % 2 === 1 ? 'border-l border-ivory-50/10' : ''} ${
                i === 2 ? 'lg:border-l lg:border-ivory-50/10' : ''
              }`}
            >
              <dt className="mt-3 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-ivory-100/60">{s.label}</dt>
              <dd className="font-display text-4xl font-medium sm:text-5xl lg:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </motion.div>
          ))}
        </dl>
        <p className="mt-12 text-center text-[0.62rem] uppercase tracking-[0.25em] text-ivory-100/30">Figures shown are illustrative for demo purposes</p>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px gold-rule opacity-60" />
    </section>
  )
}
