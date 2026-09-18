import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { audiences } from '../data/siteContent'

export default function Industries() {
  return (
    <section id="clients" className="relative bg-ivory-100 py-24 sm:py-32">
      <div className="container-lux">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Who We Serve"
                title={
                  <>
                    Supporting Individuals <em className="text-gold-600">&amp; Businesses</em>
                  </>
                }
                subtitle="Whether you're managing personal finances or leading a growing organisation, our advice scales with you."
              />
            </div>
          </div>

          <ul className="grid gap-px bg-navy-900/10 sm:grid-cols-2 lg:col-span-8">
            {audiences.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.li
                  key={a.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.9, delay: (i % 2) * 0.1 }}
                  className="group relative overflow-hidden bg-ivory-100 p-8 transition-colors duration-500 hover:bg-navy-900 sm:p-10"
                >
                  {/* watermark icon */}
                  <Icon
                    className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 text-navy-900/[0.04] transition-all duration-700 ease-lux group-hover:-bottom-2 group-hover:-right-2 group-hover:text-gold-500/10"
                    strokeWidth={0.75}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-gold-600 transition-colors group-hover:text-gold-400" strokeWidth={1.4} aria-hidden="true" />
                      <span className="text-xs tracking-[0.2em] text-navy-900/30 transition-colors group-hover:text-ivory-100/40">0{i + 1}</span>
                    </div>
                    <h3 className="mt-10 font-serif text-[1.7rem] leading-tight text-navy-900 transition-colors group-hover:text-ivory-50">{a.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-500 transition-colors group-hover:text-ivory-100/65">{a.text}</p>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
