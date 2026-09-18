import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { principles } from '../data/siteContent'

export default function WhyRegnum() {
  return (
    <section id="why" className="grain relative isolate overflow-hidden bg-navy-900 py-24 text-ivory-50 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[40rem] w-[40rem] rounded-full border border-gold-500/10" />
      <div className="pointer-events-none absolute -right-20 top-32 h-[40rem] w-[40rem] rounded-full border border-gold-500/[0.06]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-navy-600/30 blur-[120px]" />

      <div className="container-lux relative">
        <SectionHeading
          tone="dark"
          eyebrow="Why Regnum Tax"
          title={
            <>
              More Than <em className="text-gold-400">Compliance.</em>
            </>
          }
          subtitle="We help you understand the numbers behind your decisions."
        />

        <ul className="mt-16 grid border-t border-ivory-50/10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <motion.li
              key={p.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-b border-ivory-50/10 py-10 sm:px-8 sm:odd:pl-0 sm:even:border-l lg:border-b-0 lg:border-l lg:odd:pl-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="absolute left-0 top-[-1px] h-px w-0 bg-gold-500 transition-all duration-700 ease-lux group-hover:w-full" />
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-gold-500">{p.no}</span>
              <h3 className="mt-6 font-serif text-4xl text-ivory-50">{p.title}</h3>
              <p className="mt-4 max-w-[16rem] leading-relaxed text-ivory-100/65">{p.text}</p>
            </motion.li>
          ))}
        </ul>

        {/* Typographic statement */}
        <div className="relative mt-24 sm:mt-32">
          <Reveal>
            <div className="mx-auto mb-10 h-px w-24 gold-rule" />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mx-auto max-w-5xl text-center font-serif text-[2.1rem] font-normal leading-[1.15] text-ivory-50 sm:text-5xl lg:text-[4rem]">
              Your finances deserve more than a filing.
              <br className="hidden sm:block" /> <em className="text-gold-400">They deserve a strategy.</em>
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-[0.66rem] font-semibold uppercase tracking-[0.35em] text-ivory-100/50">
              The Regnum Tax Philosophy
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
