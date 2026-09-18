import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './ui/Logo'
import Button from './ui/Button'
import { navLinks, contact } from '../data/siteContent'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'
import { scrollToSection } from '../lib/scroll'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const scrolled = useScrolled(40)
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id) => {
    setOpen(false)
    // allow the menu to close before scrolling so body overflow is restored
    setTimeout(() => scrollToSection(id), open ? 250 : 0)
  }

  const solid = scrolled && !open

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux ${
          solid ? 'border-b border-navy-900/8 bg-ivory-50/85 py-3 shadow-[0_8px_30px_-20px_rgba(7,26,51,0.4)] backdrop-blur-xl' : 'border-b border-transparent py-6'
        }`}
      >
        <nav className="container-lux flex items-center justify-between gap-6" aria-label="Primary">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              go('home')
            }}
            aria-label="Regnum Tax — back to top"
          >
            <Logo tone={open ? 'onDark' : 'onLight'} />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      go(link.id)
                    }}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative px-4 py-2 text-[0.8rem] font-medium tracking-wide transition-colors duration-300 ${
                      solid
                        ? isActive
                          ? 'text-navy-900'
                          : 'text-charcoal-700 hover:text-navy-900'
                        : isActive
                          ? 'text-navy-900'
                          : 'text-navy-900/70 hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-4 -bottom-0.5 h-px bg-gold-500"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button to="contact" variant="navy" arrow={false} className="whitespace-nowrap px-6! py-3!">
                Book a Consultation
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={`relative z-[60] flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${
                open ? 'border-ivory-50/20 text-ivory-50' : 'border-navy-900/15 text-navy-900'
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-navy-900 px-6 pb-10 pt-28 lg:hidden"
          >
            <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full border border-gold-500/15" />
            <div className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full border border-gold-500/10" />
            <ul className="relative flex flex-col">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-ivory-50/10"
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      go(link.id)
                    }}
                    className="flex items-baseline justify-between py-4 font-serif text-3xl text-ivory-50"
                  >
                    {link.label}
                    <span className="font-sans text-xs tracking-[0.2em] text-gold-500">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="relative mt-auto flex flex-col gap-4"
            >
              <Button onClick={() => go('contact')} variant="gold" className="w-full">
                Book a Consultation
              </Button>
              <a href={contact.phoneHref} className="flex items-center justify-center gap-2 text-sm text-ivory-100/70">
                <Phone className="h-4 w-4 text-gold-500" /> {contact.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
