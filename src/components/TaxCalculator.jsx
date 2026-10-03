import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, ArrowRight, IndianRupee } from 'lucide-react'
import Button from './ui/Button'
import { SignatureRule } from './ui/Logo'

const taxBracketsNew = [
  { limit: 300000, rate: 0 },
  { limit: 700000, rate: 0.05 },
  { limit: 1000000, rate: 0.10 },
  { limit: 1200000, rate: 0.15 },
  { limit: 1500000, rate: 0.20 },
  { limit: Infinity, rate: 0.30 }
]

function calculateTax(income) {
  let tax = 0
  let previousLimit = 0

  for (const bracket of taxBracketsNew) {
    if (income > previousLimit) {
      const taxableAmount = Math.min(income, bracket.limit) - previousLimit
      tax += taxableAmount * bracket.rate
      previousLimit = bracket.limit
    } else {
      break
    }
  }

  // Rebate under 87A (New Regime up to 7L)
  if (income <= 700000) {
    tax = 0
  }

  // Add 4% Health & Education Cess
  return tax * 1.04
}

export default function TaxCalculator() {
  const [income, setIncome] = useState(800000)
  const [isCalculated, setIsCalculated] = useState(false)
  const [result, setResult] = useState(0)

  const handleCalculate = () => {
    setResult(calculateTax(income))
    setIsCalculated(true)
  }

  return (
    <section id="calculator" className="relative bg-navy-950 py-20 lg:py-32 text-ivory-50">
      <div className="absolute inset-0 opacity-[0.03] grain" />
      <div className="container-lux relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
          >
            <span className="eyebrow mb-6">Interactive Tool</span>
            <h2 className="heading-lg mb-6">Estimate Your Tax Liability</h2>
            <SignatureRule />
            <p className="mt-8 text-charcoal-400">
              Get a quick estimate of your tax liability under the New Tax Regime (FY 2024-25). 
              Our intelligent tax planning can help you optimize investments to legally reduce this burden.
            </p>
            <div className="mt-12 flex items-center gap-4 text-sm text-gold-500">
              <Calculator className="h-5 w-5" />
              <span>Free Instant Estimation</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-dark relative overflow-hidden rounded-sm p-8 shadow-2xl sm:p-12"
          >
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-gold-500/20 blur-3xl" />
            
            <div className="relative z-10">
              <label htmlFor="income" className="mb-2 block text-sm font-medium tracking-wide text-ivory-100 uppercase">
                Annual Income (₹)
              </label>
              
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <IndianRupee className="h-5 w-5 text-gold-500" />
                </div>
                <input
                  type="number"
                  id="income"
                  value={income || ''}
                  onChange={(e) => {
                    setIncome(Number(e.target.value))
                    setIsCalculated(false)
                  }}
                  className="block w-full border-b-2 border-white/10 bg-white/5 py-4 pl-10 pr-4 text-xl font-light text-white transition-colors focus:border-gold-500 focus:outline-none focus:ring-0"
                  placeholder="e.g. 1200000"
                />
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <p className="text-xs text-charcoal-400">
                  *Calculation assumes standard deduction is already factored in and uses the New Tax Regime slabs.
                </p>
                <button
                  onClick={handleCalculate}
                  className="group relative inline-flex w-full items-center justify-center gap-4 bg-gold-500 px-8 py-4 text-sm font-bold uppercase tracking-widest text-navy-950 transition-all hover:bg-gold-400"
                >
                  <span>Calculate Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <AnimatePresence>
                {isCalculated && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden border-t border-white/10 pt-8"
                  >
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gold-500">Estimated Tax</p>
                        <p className="mt-2 text-4xl font-serif text-white sm:text-5xl">
                          ₹{result.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </p>
                      </div>
                      <div className="text-right">
                        <Button to="contact" variant="outlineLight" className="!px-4 !py-2 text-xs">
                          Optimize This
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
