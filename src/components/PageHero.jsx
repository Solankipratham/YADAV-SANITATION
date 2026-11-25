import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Img from './Img'

/**
 * Shared inner-page hero with breadcrumb.
 */
export default function PageHero({ eyebrow, title, description, image, imageAlt, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-navy" aria-labelledby="page-hero-heading">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

      <div className="absolute inset-0" aria-hidden="true">
        <Img
          src={image}
          alt=""
          className="h-full w-full"
          imgClassName="opacity-35"
          priority
        />
        <span className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      </div>

      <div className="shell relative py-16 sm:py-20 lg:py-24">
        <motion.nav
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/50"
        >
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              {c.to ? (
                <Link to={c.to} className="transition-colors hover:text-primary">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/85">{c.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-7 max-w-3xl"
        >
          {eyebrow && <span className="eyebrow text-softblue">{eyebrow}</span>}
          <h1
            id="page-hero-heading"
            className="mt-4 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.025em] text-white sm:text-[46px] lg:text-[56px]"
          >
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:text-base">{description}</p>
          )}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />
    </section>
  )
}
