import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { images } from '../data/siteContent'

const pillars = [
  { title: 'Technical tax knowledge', text: 'Grounded in current law, rules and procedure.' },
  { title: 'Practical business understanding', text: 'Advice that reflects how your business actually runs.' },
  { title: 'Personalised advisory', text: 'Guidance shaped around your goals — not a template.' },
  { title: 'Disciplined compliance', text: 'Filings and documentation handled carefully, on time.' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory-50 py-24 sm:py-32">
      <div className="container-lux grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Editorial image */}
        {/* The un-clipped wrapper triggers the reveal, so the image never depends on
            visibility checks against a fully clipped element (which blocks lazy-loading). */}
        <motion.div
          className="relative lg:col-span-6"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={{ hidden: { clipPath: 'inset(0 100% 0 0)' }, shown: { clipPath: 'inset(0 0% 0 0)' } }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[4/5] overflow-hidden bg-navy-900 sm:aspect-[5/6]"
          >
            <motion.img
              src={images.about}
              alt="A consultation around a meeting table with notes and documents"
              variants={{ hidden: { scale: 1.2 }, shown: { scale: 1 } }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/50 via-transparent to-transparent" />
          </motion.div>

          {/* Badge */}
          <Reveal delay={0.6} className="absolute -bottom-8 right-4 sm:-right-6 lg:-right-10">
            <div className="flex items-center gap-4 bg-navy-900 px-6 py-5 text-ivory-50 shadow-2xl shadow-navy-900/30">
              <span className="flex h-11 w-11 items-center justify-center border border-gold-500/50">
                <Award className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-serif text-xl leading-none">Trusted Guidance</span>
                <span className="mt-1.5 block text-[0.62rem] uppercase tracking-[0.25em] text-ivory-100/60">For individuals & businesses</span>
              </span>
            </div>
          </Reveal>

          <span className="absolute -left-4 -top-4 hidden h-24 w-24 border-l border-t border-gold-500/60 sm:block" aria-hidden="true" />
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">About Regnum Tax</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5 text-navy-900">
              Built Around Your <em className="text-gold-600">Financial Clarity</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 text-lg leading-relaxed text-charcoal-700">
              At Regnum Tax, we help individuals and businesses navigate taxation, compliance and financial decisions with clarity and
              confidence.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 leading-relaxed text-charcoal-500">
              Our practice brings together four disciplines that rarely sit in one place — so every recommendation is technically sound,
              commercially sensible and delivered with care.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={0.25 + i * 0.07} className="border-t border-navy-900/10 pt-5">
                <span className="flex items-baseline gap-3">
                  <span className="font-serif text-sm italic text-gold-600">0{i + 1}</span>
                  <span className="font-semibold text-navy-900">{p.title}</span>
                </span>
                <span className="mt-2 block pl-7 text-sm leading-relaxed text-charcoal-500">{p.text}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.5} className="mt-12">
            <Button to="why" variant="navy">
              Discover Regnum Tax
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
