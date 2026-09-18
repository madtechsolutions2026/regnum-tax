import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { Mark, SignatureRule } from './ui/Logo'
import { Bolt, Swoosh } from './ui/Signage'

/** Final call-to-action, designed as the Regnum Tax signboard. */
export default function CTA() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-ivory-200/60 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-white/70 blur-[120px]" />
      <div className="container-lux relative">
        <Reveal y={40}>
          <div className="relative isolate overflow-hidden border border-white/90 bg-gradient-to-br from-white/70 via-ivory-50/60 to-ivory-100/40 px-6 pb-40 pt-16 shadow-[0_50px_100px_-50px_rgba(11,31,63,0.5),inset_0_1px_0_#fff] backdrop-blur-md sm:px-16 sm:pb-44 sm:pt-20 lg:px-24 lg:pb-28">
            {/* acrylic sheen */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
              style={{ background: 'linear-gradient(110deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 72%, rgba(255,255,255,0.35) 80%, rgba(255,255,255,0) 86%)' }}
            />
            <Swoosh inView delay={0.2} className="absolute bottom-0 right-0 -z-10 h-[38%] w-full sm:h-[45%] lg:w-[80%]" />
            <Bolt className="absolute left-4 top-4 sm:left-6 sm:top-6" />
            <Bolt className="absolute right-4 top-4 sm:right-6 sm:top-6" />
            <Bolt className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6" />
            <Bolt className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6" />

            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="hidden items-center justify-center gap-10 lg:col-span-3 lg:flex">
                <Mark className="h-40 w-40" />
                <span className="h-44 w-px bg-gold-500" aria-hidden="true" />
              </div>
              <div className="lg:col-span-9">
                <Reveal>
                  <span className="eyebrow">Begin With Clarity</span>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 id="cta-title" className="heading-xl mt-6 max-w-3xl text-[2.5rem] text-navy-900 sm:text-6xl lg:text-[4.2rem]">
                    Let's Bring Clarity to <em className="text-gold-500">Your Finances.</em>
                  </h2>
                </Reveal>
                <Reveal delay={0.15} className="mt-7 max-w-xl">
                  <SignatureRule />
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-7 max-w-xl text-lg leading-relaxed text-charcoal-700">
                    Whether you need tax support, compliance assistance or strategic financial guidance, we're here to help.
                  </p>
                </Reveal>
                <Reveal delay={0.3} className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button to="contact" variant="navy">
                    Book a Consultation
                  </Button>
                  <Button to="contact" variant="outlineDark" className="bg-white/50">
                    Contact Us
                  </Button>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
