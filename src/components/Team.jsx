import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import { SignatureRule } from './ui/Logo'

const team = [
  {
    name: 'Harsh Vardhan',
    role: 'Managing Partner',
    bio: 'Former Big 4 Director specializing in cross-border taxation and corporate structuring with over 15 years of industry experience.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Audit & Compliance',
    bio: 'Expert in regulatory compliance and statutory audits, helping enterprises navigate complex financial frameworks.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800',
  },
  {
    name: 'Arjun Mehta',
    role: 'Director, Wealth Advisory',
    bio: 'Specialized in high-net-worth individual portfolio management, estate planning, and strategic tax mitigation.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800',
  }
]

export default function Team() {
  return (
    <section id="leadership" className="bg-ivory-50 py-32">
      <div className="container-lux">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow mb-6">Our Leadership</span>
          <h2 className="heading-lg mb-8 max-w-2xl text-navy-900">
            Guided by Experience. <br/>
            <span className="text-gold-600 font-italic">Driven by Excellence.</span>
          </h2>
          <SignatureRule />
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy-900">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
                
                {/* Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="font-serif text-2xl text-white">{member.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-gold-500">{member.role}</p>
                  
                  <div className="mt-4 overflow-hidden">
                    <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-sm leading-relaxed text-ivory-100/90">
                      {member.bio}
                    </p>
                    <div className="mt-6 flex items-center gap-4 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
                      <a href="#" className="text-white hover:text-gold-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
                      <a href="#" className="text-white hover:text-gold-500 transition-colors"><Mail className="h-5 w-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
