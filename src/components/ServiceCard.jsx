import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Img from './Img'
import { fadeUp } from '../lib/motion'

/**
 * Service card used in both division grids.
 */
export default function ServiceCard({ service }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col border border-line bg-white transition-all duration-500 hover:border-primary/40 hover:shadow-lift"
    >
      {/* Image */}
      <Link to={service.link} className="relative block aspect-[4/3] overflow-hidden" aria-label={service.title}>
        <Img
          src={service.image}
          alt={`${service.title} — Yadav Sanitation`}
          className="h-full w-full"
          imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <span className="absolute left-0 top-0 bg-primary px-4 py-2.5 font-display text-[13px] font-extrabold tracking-[0.1em] text-white">
          {service.num}
        </span>
        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-white text-ink shadow-card transition-all duration-500 group-hover:bg-primary group-hover:text-white">
          <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">{service.subtitle}</span>
        <h3 className="mt-3 font-display text-[19px] font-bold leading-snug tracking-[-0.01em] text-ink sm:text-[20px]">
          <Link to={service.link} className="transition-colors duration-300 group-hover:text-primary">
            {service.title}
          </Link>
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-muted">{service.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {service.points.slice(0, 4).map((p) => (
            <li
              key={p}
              className="border border-line bg-surface px-2.5 py-1.5 text-[11px] font-semibold tracking-wide text-deep/80"
            >
              {p}
            </li>
          ))}
        </ul>

        <Link
          to={service.link}
          className="mt-6 inline-flex items-center gap-2 border-t border-line pt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:text-deep"
        >
          Explore Service
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
        </Link>
      </div>
    </motion.article>
  )
}
