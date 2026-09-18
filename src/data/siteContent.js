/* ==================================================================
   REGNUM TAX — SITE CONTENT
   ------------------------------------------------------------------
   All editable copy, contact details and demo data live in this file.
   Anything marked  ⚠ PLACEHOLDER  must be replaced with the client's
   real information before the site goes live.
   ================================================================== */

import {
  FileText,
  Receipt,
  Compass,
  BookOpen,
  ShieldCheck,
  Building2,
  ClipboardCheck,
  ChartLine,
  User,
  Briefcase,
  Rocket,
  Store,
  Building,
  Landmark,
} from 'lucide-react'

export const brand = {
  name: 'Regnum Tax',
  tagline: 'Tax Consulting | Advisory | Compliance',
}

/* ⚠ PLACEHOLDER — replace with the firm's real contact details */
export const contact = {
  phone: '+91 98765 43210', // ⚠ PLACEHOLDER
  phoneHref: 'tel:+919876543210', // ⚠ PLACEHOLDER
  email: 'hello@regnumtax.in', // ⚠ PLACEHOLDER
  addressLines: ['Suite 402, Placeholder Business Centre', 'Road No. 00, Your City — 500 000'], // ⚠ PLACEHOLDER
  hours: ['Mon – Fri · 9:30 AM – 6:30 PM', 'Saturday · 10:00 AM – 2:00 PM'], // ⚠ PLACEHOLDER
  mapUrl: 'https://maps.google.com', // ⚠ PLACEHOLDER — link to the office on Google Maps
}

/* ⚠ PLACEHOLDER — replace with the firm's real social profiles */
export const socials = [
  { label: 'LinkedIn', key: 'linkedin', href: '#' },
  { label: 'X (Twitter)', key: 'x', href: '#' },
  { label: 'Instagram', key: 'instagram', href: '#' },
  { label: 'Facebook', key: 'facebook', href: '#' },
]

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Why Regnum', id: 'why' },
  { label: 'Insights', id: 'insights' },
  { label: 'Contact', id: 'contact' },
]

/* Imagery — hosted on Unsplash for the demo. Swap for licensed / own photography. */
export const images = {
  hero: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&crop=entropy&w=1200&h=1500&q=80',
  about: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&h=1440&q=80',
}

export const trustPoints = ['Tax Advisory', 'Business Compliance', 'Financial Clarity', 'Strategic Planning']

export const services = [
  {
    no: '01',
    icon: FileText,
    title: 'Income Tax',
    short: 'Individual and business income tax filing, planning and advisory.',
    detail:
      'End-to-end support for income tax matters — from accurate return preparation to planning that considers your income sources, investments and obligations across the financial year.',
    includes: ['Individual & HUF returns', 'Business & firm returns', 'Capital gains computation', 'Notices & assessment support'],
  },
  {
    no: '02',
    icon: Receipt,
    title: 'GST & Indirect Tax',
    short: 'GST registration, return filing, reconciliation, compliance and advisory.',
    detail:
      'A structured approach to GST that keeps your filings timely and your input credits reconciled, with advisory on transactions that need careful treatment.',
    includes: ['GST registration & amendments', 'Monthly / quarterly returns', 'ITC reconciliation', 'Annual returns & advisory'],
  },
  {
    no: '03',
    icon: Compass,
    title: 'Tax Planning & Advisory',
    short: 'Practical tax planning strategies designed around your financial objectives.',
    detail:
      'Considered, lawful planning that aligns your tax position with your personal and business goals — reviewed proactively, not just at filing time.',
    includes: ['Personal tax planning', 'Business structuring inputs', 'Investment tax implications', 'Year-round advisory'],
  },
  {
    no: '04',
    icon: BookOpen,
    title: 'Accounting & Bookkeeping',
    short: 'Accurate bookkeeping, financial records and reporting for better visibility.',
    detail:
      'Clean, current books that give you a reliable view of your business and make every compliance obligation simpler.',
    includes: ['Day-to-day bookkeeping', 'Ledger & bank reconciliation', 'Monthly MIS reports', 'Year-end finalisation'],
  },
  {
    no: '05',
    icon: ShieldCheck,
    title: 'TDS & Statutory Compliance',
    short: 'Timely TDS and other statutory compliance support.',
    detail:
      'Deduction, deposit and reporting handled on schedule, so statutory deadlines never become a source of interest or penalties.',
    includes: ['TDS / TCS computation', 'Quarterly returns', 'Form 16 / 16A issuance', 'Compliance calendar'],
  },
  {
    no: '06',
    icon: Building2,
    title: 'Business & Company Compliance',
    short: 'Support for business setup, registrations and ongoing regulatory requirements.',
    detail:
      'From choosing the right entity to meeting annual filing requirements, we help your business stay in good standing as it grows.',
    includes: ['Entity setup & registrations', 'ROC / MCA filings', 'Professional tax & licences', 'Ongoing secretarial support'],
  },
  {
    no: '07',
    icon: ClipboardCheck,
    title: 'Audit & Assurance',
    short: 'Structured financial review and assurance support for businesses.',
    detail:
      'Methodical review of your financial information that strengthens controls and gives stakeholders confidence in your numbers.',
    includes: ['Tax audit support', 'Internal reviews', 'Process & controls review', 'Audit readiness'],
  },
  {
    no: '08',
    icon: ChartLine,
    title: 'Business Financial Advisory',
    short: 'Financial insights and guidance to help businesses make informed decisions.',
    detail:
      'Clear financial insight for owners and leadership teams — budgeting, cash-flow thinking and decision support grounded in your actual numbers.',
    includes: ['Budgeting & forecasting', 'Cash-flow review', 'Decision support', 'Financial health checks'],
  },
]

export const principles = [
  { no: '01', title: 'Clarity', text: 'Complex financial matters explained simply.' },
  { no: '02', title: 'Precision', text: 'Careful attention to details, documentation and compliance.' },
  { no: '03', title: 'Partnership', text: 'Advice designed around your individual or business needs.' },
  { no: '04', title: 'Foresight', text: 'A proactive approach to planning and financial decisions.' },
]

export const processSteps = [
  { no: '01', title: 'Understand', text: 'We understand your financial situation and requirements.' },
  { no: '02', title: 'Analyse', text: 'We review the relevant financial and compliance requirements.' },
  { no: '03', title: 'Advise', text: 'We provide practical recommendations and explain your options.' },
  { no: '04', title: 'Execute', text: 'We handle the required filings, documentation and compliance.' },
  { no: '05', title: 'Support', text: 'We remain available for ongoing guidance.' },
]

export const audiences = [
  { icon: User, title: 'Individuals', text: 'Salaried, retired and high-net-worth individuals seeking accurate filings and sensible planning.' },
  { icon: Briefcase, title: 'Professionals', text: 'Doctors, consultants, architects and freelancers managing professional income.' },
  { icon: Rocket, title: 'Startups', text: 'Founders who need the right structure and compliance from day one.' },
  { icon: Store, title: 'Small & Medium Businesses', text: 'Owner-led businesses that want dependable books, GST and tax support.' },
  { icon: Building, title: 'Growing Enterprises', text: 'Scaling organisations that need stronger reporting and advisory.' },
  { icon: Landmark, title: 'Corporate Clients', text: 'Companies requiring structured compliance, audit support and review.' },
]

/* ⚠ DEMO PLACEHOLDER STATISTICS — replace with the firm's verified figures */
export const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience' }, // ⚠ PLACEHOLDER
  { value: 500, suffix: '+', label: 'Clients Supported' }, // ⚠ PLACEHOLDER
  { value: 1000, suffix: '+', label: 'Returns & Filings' }, // ⚠ PLACEHOLDER
  { value: 99, suffix: '%', label: 'Client Satisfaction' }, // ⚠ PLACEHOLDER
]

/* ⚠ DEMO ARTICLES — replace with real published insights */
export const insights = [
  {
    category: 'Tax Planning',
    title: 'Understanding Your Tax Planning Options',
    excerpt: 'A measured look at how planning through the year — not just at filing time — can bring structure to your tax position.',
    date: 'Sep 2026',
    read: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&h=750&q=80',
  },
  {
    category: 'GST',
    title: 'GST Compliance: What Businesses Should Know',
    excerpt: 'Returns, reconciliations and input credit — the essentials every business owner should keep on their radar.',
    date: 'Aug 2026',
    read: '5 min read',
    image: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    category: 'Advisory',
    title: 'Building Better Financial Visibility',
    excerpt: 'Why timely books and simple monthly reporting are the foundation of confident business decisions.',
    date: 'Jul 2026',
    read: '4 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=600&q=80',
  },
]

/* ⚠ DEMO TESTIMONIALS — names, roles and quotes are placeholders.
   Replace with genuine client testimonials (with their consent). */
export const testimonials = [
  {
    quote:
      'Regnum Tax brought a level of clarity to our GST and accounting that we simply did not have before. Every question was answered patiently and every deadline was met.',
    name: 'Client Name', // ⚠ PLACEHOLDER
    role: 'Founder, Company Name', // ⚠ PLACEHOLDER
    initials: 'CN',
  },
  {
    quote:
      'What stood out was the proactive advice. Instead of just filing my return, they explained my options and helped me plan the year ahead.',
    name: 'Client Name', // ⚠ PLACEHOLDER
    role: 'Consultant, Professional Services', // ⚠ PLACEHOLDER
    initials: 'CN',
  },
  {
    quote:
      'Precise, responsive and genuinely invested in our business. Their compliance support has given our leadership team real peace of mind.',
    name: 'Client Name', // ⚠ PLACEHOLDER
    role: 'Director, Company Name', // ⚠ PLACEHOLDER
    initials: 'CN',
  },
]
