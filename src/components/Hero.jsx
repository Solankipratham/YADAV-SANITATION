import { motion } from 'framer-motion'
import { ArrowUpRight, ShieldCheck, Factory, Droplets } from 'lucide-react'
import { Link } from 'react-router-dom'
import Img from './Img'
import { IMG } from '../lib/images'
import { heroKeywords } from '../lib/content'

const ease = [0.22, 0.61, 0.36, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

const badges = [
  { icon: ShieldCheck, label: 'Fire Protection & Security' },
  { icon: Factory, label: 'Heavy Engineering' },
  { icon: Droplets, label: 'Water & Utility Systems' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface" aria-labelledby="hero-heading">
      {/* Background geometry */}
      <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-lightblue blur-3xl opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true" />

      <div className="shell relative grid gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center lg:col-span-6 xl:col-span-6"
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-deep sm:text-[11px]">
              {heroKeywords}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-7 font-display text-[38px] font-extrabold leading-[1.03] tracking-[-0.03em] text-ink sm:text-[54px] lg:text-[60px] xl:text-[68px]"
          >
            Engineering solutions.
            <br />
            Built for <span className="text-primary">performance.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-muted sm:text-[17px]">
            Yadav Sanitation delivers integrated engineering, fire protection, security, heavy
            engineering, piping, water infrastructure and commercial project solutions.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 bg-primary px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-premium transition-all duration-300 hover:bg-deep hover:shadow-lift"
            >
              Explore Our Services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 border border-line bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-ink transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Discuss Your Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-11 grid gap-3 border-t border-line pt-8 sm:grid-cols-3">
            {badges.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-3 text-[12.5px] font-semibold text-deep">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-lightblue text-primary">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                </span>
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Imagery */}
        <div className="relative lg:col-span-6 xl:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 40, clipPath: 'inset(14% 0% 0% 0%)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative aspect-[4/5] w-full overflow-hidden shadow-lift sm:aspect-[16/12] lg:aspect-[4/5]"
          >
            <Img
              src={IMG.hero}
              alt="Modern commercial infrastructure engineered by Yadav Sanitation"
              className="h-full w-full"
              priority
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
            <span className="absolute left-0 top-0 bg-primary px-5 py-3 text-[10.5px] font-bold uppercase tracking-[0.2em] text-white">
              Integrated Engineering
            </span>
          </motion.div>

          {/* Secondary floating image */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            className="absolute -bottom-8 left-2 hidden w-[45%] border-4 border-white shadow-lift sm:block lg:-left-10 lg:w-[46%]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Img
                src={IMG.heroAlt}
                alt="Industrial piping and structural execution"
                className="h-full w-full"
              />
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="absolute -top-5 right-3 hidden border border-line bg-white px-5 py-4 shadow-premium lg:block"
          >
            <p className="font-display text-[26px] font-extrabold leading-none text-primary">02</p>
            <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
              Specialized Divisions
            </p>
          </motion.div>

          {/* Decorative geometry */}
          <div className="pointer-events-none absolute -right-6 -top-6 hidden h-28 w-28 border border-primary/25 lg:block" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 right-8 hidden h-20 w-20 bg-softblue/60 lg:block" aria-hidden="true" />
        </div>
      </div>

      {/* Keyword strip */}
      <div className="border-t border-line bg-white">
        <div className="shell flex flex-wrap items-center justify-between gap-4 py-4 text-[10.5px] font-bold uppercase tracking-[0.2em] text-muted sm:text-[11px]">
          <span>Fire Suppression</span>
          <span className="text-line">/</span>
          <span>Detection &amp; Alarm</span>
          <span className="text-line">/</span>
          <span>CCTV &amp; Access Control</span>
          <span className="text-line">/</span>
          <span>Steel Fabrication</span>
          <span className="text-line">/</span>
          <span>Piping</span>
          <span className="text-line">/</span>
          <span>Water Infrastructure</span>
        </div>
      </div>
    </section>
  )
}
