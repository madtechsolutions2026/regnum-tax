import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '../../lib/scroll'

const variants = {
  gold: 'bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-[0_12px_32px_-14px_rgba(200,160,74,0.7)]',
  navy: 'bg-navy-900 text-ivory-50 hover:bg-navy-800 shadow-[0_14px_30px_-16px_rgba(11,31,63,0.7)] [&_svg]:text-gold-400',
  outlineLight: 'border border-ivory-50/30 text-ivory-50 hover:border-gold-500 hover:text-gold-300',
  outlineDark: 'border border-navy-900/20 text-navy-900 hover:border-gold-500 hover:text-gold-600',
}

/** Scrolls to a section (`to`), follows a link (`href`), or runs `onClick`. */
export default function Button({ children, variant = 'gold', to, href, onClick, arrow = true, className = '', type = 'button', ...rest }) {
  const classes = `group inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.18em] transition-all duration-500 ease-lux hover:-translate-y-0.5 ${variants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-lux group-hover:translate-x-1" aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button
      type={type}
      className={classes}
      onClick={(e) => {
        if (to) scrollToSection(to)
        onClick?.(e)
      }}
      {...rest}
    >
      {content}
    </button>
  )
}
