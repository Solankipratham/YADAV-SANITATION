import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Img from './Img'

const ease = [0.22, 0.61, 0.36, 1]

/**
 * Alternating image / content rows for each service in a division.
 */
export default function DivisionDetail({ services, tone = 'light' }) {
  return (
    <div className={tone === 'light' ? 'bg-surface' : 'bg-white'}>
      <div className="shell py-16 sm:py-20 lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          {services.map((s, i) => {
            const flip = i % 2 === 1
            return (
              <motion.article
                id={s.id}
                key={s.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.7, ease }}
                className="grid scroll-mt-28 items-center overflow-hidden border border-line bg-white shadow-card transition-shadow duration-500 hover:shadow-lift lg:grid-cols-2"
              >
                {/* Image */}
                <div
                  className={`relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[340px] ${
                    flip ? 'lg:order-2' : ''
                  }`}
                >
                  <Img
                    src={s.image}
                    alt={`${s.title} — Yadav Sanitation`}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-[1100ms] ease-out hover:scale-[1.05]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent" />
                  <span className="absolute left-0 top-0 bg-primary px-5 py-3 font-display text-[13px] font-extrabold tracking-[0.1em] text-white">
                    {s.num}
                  </span>
                </div>

                {/* Body */}
                <div className={`p-7 sm:p-9 lg:p-11 ${flip ? 'lg:order-1' : ''}`}>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-primary">
                    {s.subtitle}
                  </span>
                  <h2 className="mt-3 font-display text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[26px]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-muted">{s.description}</p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[13.5px] font-medium text-ink">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-lightblue text-primary">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="group mt-7 inline-flex items-center gap-2.5 bg-primary px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-deep"
                  >
                    Enquire About This Service
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.5}
                    />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
