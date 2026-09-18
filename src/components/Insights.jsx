import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { insights } from '../data/siteContent'

/* Articles come from `insights` in data/siteContent.js — DEMO CONTENT. */
export default function Insights() {
  const [notice, setNotice] = useState(false)

  const showNotice = (e) => {
    e.preventDefault()
    setNotice(true)
    setTimeout(() => setNotice(false), 3200)
  }

  const [feature, ...rest] = insights

  return (
    <section id="insights" className="relative bg-ivory-50 py-24 sm:py-32">
      <div className="container-lux">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights"
            title={
              <>
                Tax &amp; Financial <em className="text-gold-600">Insights</em>
              </>
            }
            subtitle="Perspectives on tax, compliance and financial decision-making."
          />
          <a
            href="#insights"
            onClick={showNotice}
            className="group inline-flex shrink-0 items-center gap-2 border-b border-navy-900/20 pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
          >
            View All Insights
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Feature article */}
          <motion.a
            href="#insights"
            onClick={showNotice}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="group block lg:col-span-7"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={feature.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-lux group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900/20 transition-colors duration-700 group-hover:bg-navy-900/5" />
              <span className="absolute left-5 top-5 bg-ivory-50 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-navy-900">
                {feature.category}
              </span>
            </div>
            <div className="mt-7 flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.2em] text-charcoal-500">
              <span>{feature.date}</span>
              <span className="h-px w-6 bg-gold-500" />
              <span>{feature.read}</span>
            </div>
            <h3 className="mt-4 font-serif text-3xl leading-tight text-navy-900 transition-colors group-hover:text-gold-600 sm:text-[2.4rem]">
              {feature.title}
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-charcoal-500">{feature.excerpt}</p>
          </motion.a>

          {/* Secondary articles */}
          <div className="flex flex-col gap-10 lg:col-span-5">
            {rest.map((a, i) => (
              <motion.a
                key={a.title}
                href="#insights"
                onClick={showNotice}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-5 gap-5 border-b border-navy-900/10 pb-10 last:border-b-0 last:pb-0"
              >
                <div className="relative col-span-2 aspect-square overflow-hidden">
                  <img
                    src={a.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-lux group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-900/20" />
                </div>
                <div className="col-span-3 flex flex-col">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-600">{a.category}</span>
                  <h3 className="mt-3 font-serif text-2xl leading-tight text-navy-900 transition-colors group-hover:text-gold-600">{a.title}</h3>
                  <span className="mt-auto flex items-center justify-between pt-4 text-[0.66rem] uppercase tracking-[0.18em] text-charcoal-500">
                    {a.read}
                    <ArrowUpRight className="h-4 w-4 text-navy-900 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {notice && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 border-l-2 border-gold-500 bg-navy-900 px-6 py-4 text-sm text-ivory-100 shadow-2xl"
          >
            <span className="font-semibold text-ivory-50">Coming soon.</span> Full articles will be published on the live site.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
