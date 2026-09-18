import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { testimonials } from '../data/siteContent'

/* Quotes and names come from `testimonials` in data/siteContent.js — DEMO PLACEHOLDERS. */
export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = testimonials.length
  const t = testimonials[index]

  const go = (dir) => setIndex((i) => (i + dir + total) % total)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 8000)
    return () => clearInterval(id)
  }, [paused, total])

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ivory-100 py-24 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-lux grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Client Perspectives"
            title={
              <>
                In Their <em className="text-gold-600">Words</em>
              </>
            }
          />
          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center border border-navy-900/15 text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-gold-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center border border-navy-900/15 text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-gold-400"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <span className="ml-4 font-serif text-lg text-navy-900">
              {String(index + 1).padStart(2, '0')}
              <span className="text-charcoal-500"> / {String(total).padStart(2, '0')}</span>
            </span>
          </div>
        </div>

        <div className="relative lg:col-span-8">
          <span className="pointer-events-none absolute -left-2 -top-16 select-none font-serif text-[12rem] leading-none text-gold-500/20 sm:-top-20 sm:text-[16rem]" aria-hidden="true">
            &ldquo;
          </span>
          <div className="relative min-h-[20rem] sm:min-h-[17rem]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="font-serif text-[1.7rem] leading-[1.3] text-navy-900 sm:text-[2.3rem]">{t.quote}</blockquote>
                <figcaption className="mt-10 flex items-center gap-5">
                  <span className="flex h-14 w-14 items-center justify-center bg-navy-900 font-serif text-lg text-gold-400">{t.initials}</span>
                  <span>
                    <span className="block font-semibold text-navy-900">{t.name}</span>
                    <span className="mt-0.5 block text-sm text-charcoal-500">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* progress */}
          <div className="mt-12 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className="group relative h-6 flex-1"
              >
                <span className="absolute inset-x-0 top-1/2 h-px bg-navy-900/15" />
                {i === index && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute left-0 top-1/2 h-px bg-gold-500"
                    initial={{ width: paused ? '100%' : '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: paused ? 0 : 8, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </div>
          <p className="mt-4 text-[0.62rem] uppercase tracking-[0.25em] text-charcoal-500/70">Demo testimonials — for illustration only</p>
        </div>
      </div>
    </section>
  )
}
