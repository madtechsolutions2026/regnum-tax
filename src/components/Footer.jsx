import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Logo from './ui/Logo'
import SocialIcon from './ui/SocialIcon'
import { contact, socials } from '../data/siteContent'
import { scrollToSection } from '../lib/scroll'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Insights', id: 'insights' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const [policyNote, setPolicyNote] = useState(false)

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-ivory-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px gold-rule opacity-50" />
      <div className="container-lux pb-10 pt-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="onDark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory-100/55">
              Strategic tax consulting, advisory and compliance for individuals and businesses who value clarity.
            </p>
            <ul className="mt-8 flex gap-3">
              {socials.map((s) => (
                <li key={s.key}>
                  <a
                    href={s.href}
                    aria-label={`Regnum Tax on ${s.label}`}
                    onClick={(e) => s.href === '#' && e.preventDefault()}
                    className="flex h-10 w-10 items-center justify-center border border-ivory-50/15 text-ivory-100/70 transition-colors hover:border-gold-500 hover:text-gold-400"
                  >
                    <SocialIcon name={s.key} className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-ivory-100/40">Navigate</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(l.id)
                    }}
                    className="text-sm text-ivory-100/75 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => setPolicyNote((v) => !v)} className="text-sm text-ivory-100/75 transition-colors hover:text-gold-400" aria-expanded={policyNote}>
                  Privacy Policy
                </button>
              </li>
            </ul>
            {policyNote && <p className="mt-4 max-w-xs text-xs leading-relaxed text-ivory-100/50">The full privacy policy will be published with the live website.</p>}
          </nav>

          <div className="lg:col-span-4">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-ivory-100/40">Get in touch</p>
            {/* ⚠ PLACEHOLDER contact details — edit in data/siteContent.js */}
            <ul className="mt-6 space-y-3 text-sm text-ivory-100/75">
              <li>
                <a href={contact.phoneHref} className="transition-colors hover:text-gold-400">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-gold-400">
                  {contact.email}
                </a>
              </li>
              {contact.addressLines.map((l) => (
                <li key={l} className="text-ivory-100/55">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse items-start justify-between gap-6 border-t border-ivory-50/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ivory-100/45">© 2026 Regnum Tax. All Rights Reserved.</p>
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="group inline-flex items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.25em] text-ivory-100/60 transition-colors hover:text-gold-400"
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center border border-ivory-50/15 transition-colors group-hover:border-gold-500">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>

      {/* oversized wordmark */}
      <p
        className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[17vw] font-semibold leading-[0.8] tracking-[0.04em] text-ivory-50/[0.03]"
        aria-hidden="true"
      >
        REGNUM
      </p>
    </footer>
  )
}
