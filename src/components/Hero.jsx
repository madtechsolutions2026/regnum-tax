import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, ShieldCheck } from 'lucide-react'
import Button from './ui/Button'
import { SignatureRule } from './ui/Logo'
import { AcrylicPanel, Swoosh, Tagline } from './ui/Signage'
import { images } from '../data/siteContent'
import { scrollToSection } from '../lib/scroll'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])

  const lines = [
    <>
      Clarity in <em className="font-normal text-gold-500">Tax.</em>
    </>,
    'Confidence in',
    'Every Decision.',
  ]

  return (
    <section id="home" ref={ref} className="relative isolate overflow-hidden bg-ivory-100 text-navy-900">
      {/* soft wall lighting, like the signage photograph */}
      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[40rem] w-[40rem] rounded-full bg-white/80 blur-[120px]" />
      <div className="pointer-events-none absolute right-[8%] top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-white/60 blur-[100px]" />
      {/* window-light streaks */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{ background: 'linear-gradient(105deg, transparent 55%, rgba(255,255,255,0.55) 62%, transparent 66%, transparent 70%, rgba(255,255,255,0.4) 74%, transparent 78%)' }}
      />

      {/* navy corner sweep with gold edge */}
      <Swoosh className="absolute bottom-0 right-0 -z-10 h-[34%] w-full sm:h-[40%] lg:h-[46%] lg:w-[92%]" delay={0.3} />

      <div className="container-lux relative grid min-h-[100svh] items-center gap-14 pb-32 pt-32 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-36">
        <motion.div style={{ y: contentY }} className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease }}>
            <Tagline />
          </motion.div>

          <h1 className="heading-xl mt-8 text-[2.9rem] text-navy-900 sm:text-6xl lg:text-[5.1rem]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease }}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 max-w-md">
            <SignatureRule animate />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease }}
            className="mt-8 max-w-xl text-base leading-relaxed text-charcoal-700 sm:text-lg"
          >
            Strategic tax consulting, advisory and compliance solutions designed to help individuals and businesses stay compliant,
            reduce complexity and move forward with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button to="contact" variant="navy">
              Book a Consultation
            </Button>
            <Button to="services" variant="outlineDark" className="bg-white/40 backdrop-blur">
              Explore Our Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual: photograph mounted on an acrylic plate */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <AcrylicPanel>
              <motion.div
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.5, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <motion.img
                  src={images.hero}
                  alt="An advisor reviewing a financial report with a client"
                  style={{ y: imgY }}
                  initial={{ scale: 1.25 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 2.4, delay: 0.7, ease }}
                  className="absolute inset-0 h-full w-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
              </motion.div>
            </AcrylicPanel>

            {/* Glass card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1.5, ease }}
              className="absolute -bottom-10 left-3 w-[84%] max-w-xs border border-white/80 bg-white/75 p-6 shadow-[0_30px_60px_-30px_rgba(11,31,63,0.5)] backdrop-blur-xl sm:-left-8 lg:-left-14"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-navy-900">Compliance Overview</span>
                <ShieldCheck className="h-4 w-4 text-gold-600" />
              </div>
              <ul className="mt-5 space-y-3.5 text-sm">
                {[
                  ['Income Tax Return', 'Filed'],
                  ['GST Reconciliation', 'Reviewed'],
                  ['TDS Quarterly', 'On Schedule'],
                ].map(([k, v], i) => (
                  <li key={k} className="flex items-center justify-between gap-4">
                    <span className="text-charcoal-700">{k}</span>
                    <span className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-wider text-gold-600">
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-gold-500"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.9 + i * 0.15 }}
                      />
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 h-px w-full bg-navy-900/10">
                <motion.div className="h-px bg-gold-500" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.8, delay: 1.9, ease }} />
              </div>
              <p className="mt-3 text-[0.68rem] text-charcoal-500">Illustrative client dashboard</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-10 hidden flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-navy-900/50 transition-colors hover:text-gold-600 lg:flex"
        aria-label="Scroll to About section"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  )
}
