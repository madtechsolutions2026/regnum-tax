import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CircleCheck, LoaderCircle, ArrowRight } from 'lucide-react'
import Reveal from './ui/Reveal'
import { contact, services } from '../data/siteContent'

const initial = { name: '', email: '', phone: '', service: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.phone && !/^[+\d\s()-]{7,}$/.test(v.phone)) e.phone = 'Please enter a valid phone number.'
  if (!v.service) e.service = 'Please choose a service.'
  return e
}

function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-navy-900/70">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  // Pre-select a service when a visitor clicks "Discuss This Service" in the services modal
  useEffect(() => {
    const onSelect = (e) => {
      setValues((v) => ({ ...v, service: e.detail }))
      setErrors((er) => ({ ...er, service: undefined }))
    }
    window.addEventListener('regnum:select-service', onSelect)
    return () => window.removeEventListener('regnum:select-service', onSelect)
  }, [])

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return
    setStatus('sending')
    // DEMO: no data is sent. Connect this to the firm's form endpoint / CRM before launch.
    setTimeout(() => setStatus('sent'), 1400)
  }

  const reset = () => {
    setValues(initial)
    setStatus('idle')
  }

  const aria = (key) => ({ 'aria-invalid': !!errors[key], 'aria-describedby': errors[key] ? `${key}-error` : undefined })

  const details = [
    { icon: Phone, label: 'Phone', lines: [contact.phone], href: contact.phoneHref },
    { icon: Mail, label: 'Email', lines: [contact.email], href: `mailto:${contact.email}` },
    { icon: MapPin, label: 'Office Address', lines: contact.addressLines, href: contact.mapUrl },
    { icon: Clock, label: 'Business Hours', lines: contact.hours },
  ]

  return (
    <section id="contact" className="relative bg-ivory-50 py-24 sm:py-32">
      <div className="container-lux">
        <div className="grid overflow-hidden shadow-[0_40px_100px_-50px_rgba(7,26,51,0.45)] lg:grid-cols-12">
          {/* Info panel */}
          <div className="grain relative isolate overflow-hidden bg-navy-900 p-8 text-ivory-50 sm:p-12 lg:col-span-5">
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-gold-500/15" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full border border-gold-500/10" />
            <Reveal>
              <span className="eyebrow text-gold-400!">Contact</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="heading-lg mt-5">
                Start a <em className="text-gold-400">Conversation</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-sm leading-relaxed text-ivory-100/65">
                Share a few details and a member of our team will be in touch to arrange a consultation at a time that suits you.
              </p>
            </Reveal>

            {/* ⚠ PLACEHOLDER contact details — edit in data/siteContent.js */}
            <ul className="mt-12 space-y-7">
              {details.map(({ icon: Icon, label, lines, href }, i) => {
                const body = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/40 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-ivory-100/50">{label}</span>
                      {lines.map((l) => (
                        <span key={l} className="mt-1 block text-[0.95rem] text-ivory-50">
                          {l}
                        </span>
                      ))}
                    </span>
                  </>
                )
                return (
                  <Reveal as="li" key={label} delay={0.2 + i * 0.06}>
                    {href ? (
                      <a
                        href={href}
                        className="group flex items-start gap-5"
                        {...(label === 'Office Address' ? { target: '_blank', rel: 'noreferrer' } : {})}
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="group flex items-start gap-5">{body}</div>
                    )}
                  </Reveal>
                )
              })}
            </ul>
          </div>

          {/* Form */}
          <div className="relative bg-white p-8 sm:p-12 lg:col-span-7">
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full min-h-[28rem] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 15 }}
                    className="flex h-20 w-20 items-center justify-center border border-gold-500 text-gold-600"
                  >
                    <CircleCheck className="h-9 w-9" strokeWidth={1.3} />
                  </motion.span>
                  <h3 className="mt-8 font-serif text-4xl text-navy-900">Thank you, {values.name.split(' ')[0]}.</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-charcoal-500">
                    Your consultation request has been received. Our team will contact you within one business day.
                  </p>
                  <p className="mt-3 text-[0.62rem] uppercase tracking-[0.25em] text-charcoal-500/70">Demo — no data was submitted</p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-10 border-b border-navy-900/30 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-8 sm:grid-cols-2">
                  <Field label="Name *" id="name" error={errors.name}>
                    <input id="name" name="name" autoComplete="name" value={values.name} onChange={update('name')} className="field" placeholder="Your full name" {...aria('name')} />
                  </Field>
                  <Field label="Email *" id="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={update('email')}
                      className="field"
                      placeholder="you@company.com"
                      {...aria('email')}
                    />
                  </Field>
                  <Field label="Phone" id="phone" error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={update('phone')}
                      className="field"
                      placeholder="+91"
                      {...aria('phone')}
                    />
                  </Field>
                  <Field label="Service Required *" id="service" error={errors.service}>
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={update('service')}
                      className={`field select-caret ${
                        values.service ? '' : 'text-charcoal-500/60!'
                      }`}
                      {...aria('service')}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s.no} value={s.title} className="text-navy-900">
                          {s.title}
                        </option>
                      ))}
                      <option value="Other / Not sure" className="text-navy-900">
                        Other / Not sure
                      </option>
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Message" id="message">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={values.message}
                        onChange={update('message')}
                        className="field resize-none"
                        placeholder="Briefly describe what you need help with"
                      />
                    </Field>
                  </div>
                  <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-charcoal-500">
                      Your information is kept confidential
                      <br className="hidden sm:block" /> and used only to respond to your enquiry.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group inline-flex items-center justify-center gap-3 bg-navy-900 px-8 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-ivory-50 transition-all duration-500 hover:-translate-y-0.5 hover:bg-navy-800 disabled:cursor-wait disabled:opacity-80"
                    >
                      {status === 'sending' ? (
                        <>
                          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
                        </>
                      ) : (
                        <>
                          Request Consultation
                          <ArrowRight className="h-4 w-4 text-gold-400 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
