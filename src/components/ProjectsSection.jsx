import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Layers, ArrowUpRight } from 'lucide-react'
import SectionHead from './SectionHead'
import Img from './Img'
import { Stagger, StaggerItem } from './Reveal'

export default function ProjectsSection({
  projects,
  filters,
  heading = true,
  eyebrow = 'Project Portfolio',
  title = 'Our Projects',
  subtitle = 'Engineering, infrastructure and project execution.',
  limit,
}) {
  const [active, setActive] = useState('All Projects')

  const visible = useMemo(() => {
    const list =
      active === 'All Projects' ? projects : projects.filter((p) => p.category === active)
    return limit ? list.slice(0, limit) : list
  }, [active, projects, limit])

  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-28" aria-labelledby="projects-heading">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-70" aria-hidden="true" />
      <div className="shell relative">
        {heading && <SectionHead eyebrow={eyebrow} title={title} subtitle={subtitle} />}

        {filters && (
          <div className="mt-9 flex flex-wrap gap-2.5" role="tablist" aria-label="Project filters">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`border px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
                  active === f
                    ? 'border-primary bg-primary text-white shadow-premium'
                    : 'border-line bg-white text-muted hover:border-primary/50 hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        <motion.div layout className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                className="group flex h-full flex-col border border-line bg-white transition-all duration-500 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Img
                    src={p.image}
                    alt={`${p.name} — ${p.category}`}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-0 top-0 bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[17px] font-bold leading-snug text-ink transition-colors group-hover:text-primary sm:text-[18px]">
                    {p.name}
                  </h3>

                  <div className="mt-4 space-y-2.5 text-[13px] text-muted">
                    <p className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                      {p.location}
                    </p>
                    <p className="flex items-start gap-2.5">
                      <Layers className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                      {p.scope}
                    </p>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 border-t border-line pt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                    Services delivered
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="mt-12 border border-dashed border-line bg-white p-10 text-center text-sm text-muted">
            No projects listed in this category yet. Project information will be updated as it is
            verified.
          </p>
        )}

        {limit && projects.length > limit && (
          <div className="mt-11 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2.5 bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-primary"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
