import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, X } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import { services } from '../data/siteContent'
import { scrollToSection } from '../lib/scroll'

function ServiceCard({ service, index, onOpen }) {
  const Icon = service.icon
  return (
    <motion.li
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        type="button"
        onClick={() => onOpen(service)}
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="group relative flex h-full w-full flex-col overflow-hidden border border-navy-900/10 bg-white p-7 text-left transition-[border-color,box-shadow] duration-500 hover:border-gold-500/60 hover:shadow-[0_30px_60px_-30px_rgba(7,26,51,0.35)] sm:p-8"
        aria-haspopup="dialog"
      >
        {/* top gold accent */}
        <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gold-500 transition-transform duration-700 ease-lux group-hover:scale-x-100" />

        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center border border-navy-900/10 bg-ivory-100 text-navy-900 transition-colors duration-500 group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400">
            <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span className="font-display text-2xl text-navy-900/15 transition-colors duration-500 group-hover:text-gold-500">{service.no}</span>
        </div>

        <h3 className="mt-8 font-serif text-[1.55rem] leading-tight text-navy-900">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-500">{service.short}</p>

        <span className="mt-7 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-navy-900 transition-colors group-hover:text-gold-600">
          Learn More
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </motion.button>
    </motion.li>
  )
}

function ServiceModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [service, onClose])

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92svh] w-full max-w-2xl overflow-y-auto bg-ivory-50 shadow-2xl"
          >
            <div className="relative overflow-hidden bg-navy-900 px-7 pb-9 pt-8 text-ivory-50 sm:px-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-gold-500/20" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full border border-gold-500/10" />
              <div className="flex items-start justify-between gap-6">
                <span className="flex h-12 w-12 items-center justify-center border border-gold-500/40 text-gold-400">
                  <service.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  autoFocus
                  className="flex h-10 w-10 items-center justify-center border border-ivory-50/20 text-ivory-50 transition-colors hover:border-gold-500 hover:text-gold-300"
                  aria-label="Close service details"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-6 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-gold-400">Service {service.no}</p>
              <h3 id="service-modal-title" className="mt-2 font-serif text-4xl leading-tight">
                {service.title}
              </h3>
            </div>
            <div className="px-7 py-9 sm:px-10">
              <p className="text-lg leading-relaxed text-charcoal-700">{service.detail}</p>
              <p className="mt-8 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-navy-900">What's included</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-navy-900/10 pb-3 text-sm text-charcoal-700">
                    <Check className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="navy"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('regnum:select-service', { detail: service.title }))
                    onClose()
                    setTimeout(() => scrollToSection('contact'), 300)
                  }}
                >
                  Discuss This Service
                </Button>
                <Button variant="outlineDark" arrow={false} onClick={onClose}>
                  Back to Services
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Services() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="services" className="relative bg-ivory-100 py-24 sm:py-32">
      <div className="container-lux">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Expertise That <em className="text-gold-600">Works For You</em>
              </>
            }
            subtitle="From everyday compliance to strategic financial decisions, our services are designed around your needs."
          />
          <p className="max-w-xs text-sm leading-relaxed text-charcoal-500 lg:text-right">
            Select any service to see what's included and how we can help.
          </p>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.no} service={s} index={i} onOpen={setSelected} />
          ))}
        </ul>
      </div>

      <ServiceModal service={selected} onClose={close} />
    </section>
  )
}
