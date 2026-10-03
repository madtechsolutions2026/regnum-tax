import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import Services from './components/Services'
import WhyRegnum from './components/WhyRegnum'
import Process from './components/Process'
import TaxCalculator from './components/TaxCalculator'
import Industries from './components/Industries'
import Team from './components/Team'
import Stats from './components/Stats'
import Insights from './components/Insights'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold-500" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-950"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <WhyRegnum />
        <Process />
        <TaxCalculator />
        <Industries />
        <Team />
        <Stats />
        <Insights />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
