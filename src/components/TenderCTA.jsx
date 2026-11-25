import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import { tenderCapabilities } from '../lib/content'
import { IMG } from '../lib/images'

export default function TenderCTA() {
  return (
    <section className="relative overflow-hidden bg-lightblue" aria-labelledby="tender-heading">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-80" aria-hidden="true" />

      <div className="shell relative grid items-stretch gap-0 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        {/* Copy */}
        <div className="lg:col-span-7 lg:pr-14">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-current opacity-60" />
              Tender &amp; Contracts
            </span>
            <h2 id="tender-heading" className="section-title mt-5 max-w-xl">
              Ready to execute your <span className="text-primary">next project.</span>
            </h2>
            <p className="lead mt-5 max-w-xl">
              Yadav Sanitation undertakes engineering, fire protection, security, heavy engineering,
              fabrication, piping, water infrastructure and project execution requirements.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 grid gap-3 sm:grid-cols-2">
            {tenderCapabilities.map((cap) => (
              <span key={cap} className="flex items-center gap-3 border border-line bg-white px-4 py-3.5 text-[13.5px] font-semibold text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-primary text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {cap}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.18} className="mt-9">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 bg-primary px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-premium transition-all duration-300 hover:bg-deep hover:shadow-lift"
            >
              Submit Your Project Requirements
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mt-12 lg:col-span-5 lg:mt-0"
        >
          <div className="relative h-full min-h-[320px] overflow-hidden border border-line shadow-lift lg:min-h-[520px]">
            <Img
              src={IMG.tender}
              alt="Industrial project execution — Yadav Sanitation"
              className="h-full w-full"
              imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 border-l-2 border-primary bg-navy/75 p-5 text-white backdrop-blur-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-softblue">Contracts</p>
              <p className="mt-2 font-display text-[17px] font-bold leading-snug">
                Tender-based &amp; negotiated project work
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
