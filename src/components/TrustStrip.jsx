import { motion } from 'framer-motion'
import { trustPoints } from '../data/siteContent'

export default function TrustStrip() {
  return (
    <section aria-label="Our commitment" className="relative border-b border-navy-900/10 bg-ivory-100">
      <div className="container-lux flex flex-col items-center gap-8 py-12 xl:flex-row xl:justify-between xl:gap-12 xl:py-14">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md text-center font-serif text-2xl leading-snug text-navy-900 xl:text-left lg:text-[1.7rem]"
        >
          Professional expertise. Practical advice. <em className="text-gold-600">Reliable compliance.</em>
        </motion.p>

        <ul className="grid w-full grid-cols-2 gap-y-6 sm:flex sm:justify-center xl:w-auto">
          {trustPoints.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
              className="relative flex flex-col items-center gap-2 px-3 text-center sm:px-6 xl:px-8"
            >
              {i > 0 && (
                <span
                  className={`absolute left-0 top-1/2 h-10 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gold-500 to-transparent ${
                    i === 2 ? 'hidden sm:block' : ''
                  }`}
                  aria-hidden="true"
                />
              )}
              <span className="font-serif text-sm italic text-gold-600">0{i + 1}</span>
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-navy-900 sm:whitespace-nowrap sm:text-[0.72rem] sm:tracking-[0.2em]">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
