import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { processSteps } from '../data/siteContent'

const ease = [0.22, 1, 0.36, 1]

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ivory-50 py-24 sm:py-32">
      <div className="container-lux">
        <SectionHeading
          align="center"
          eyebrow="Our Process"
          title={
            <>
              A Simpler Way to <em className="text-gold-600">Manage Your Finances</em>
            </>
          }
          subtitle="A clear, five-step engagement that keeps you informed at every stage."
        />

        <div className="relative mt-20">
          {/* horizontal connector (desktop) */}
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-navy-900/10 lg:block" aria-hidden="true">
            <motion.div
              className="h-px origin-left bg-gold-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
          {/* vertical connector (mobile / tablet) */}
          <div className="absolute bottom-8 left-8 top-8 w-px bg-navy-900/10 lg:hidden" aria-hidden="true">
            <motion.div
              className="h-full w-px origin-top bg-gold-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          <ol className="relative grid gap-12 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease }}
                className="group flex gap-7 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              >
                <span className="relative flex h-16 w-16 shrink-0 items-center justify-center border border-gold-500/60 bg-ivory-50 font-serif text-xl text-navy-900 transition-colors duration-500 group-hover:bg-navy-900 group-hover:text-gold-400">
                  {step.no}
                  <span className="absolute -inset-1.5 border border-gold-500/0 transition-colors duration-500 group-hover:border-gold-500/30" />
                </span>
                <div className="pt-2 lg:pt-8">
                  <h3 className="font-serif text-[1.7rem] text-navy-900">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-charcoal-500 lg:mx-auto lg:max-w-[13rem]">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
