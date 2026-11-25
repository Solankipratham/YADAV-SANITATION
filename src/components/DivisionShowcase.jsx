import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import Img from './Img'
import { Stagger } from './Reveal'
import { fadeUp } from '../lib/motion'

/**
 * Two large division cards (Fire Protection & Security / Heavy Engineering).
 */
export default function DivisionShowcase({ divisions }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {divisions.map((d, i) => (
        <motion.article
          key={d.title}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="group relative overflow-hidden border border-line bg-white"
        >
          <Link to={d.link} className="block">
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Img
                src={d.image}
                alt={`${d.title} — Yadav Sanitation`}
                className="h-full w-full"
                imgClassName="transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent" />
              <span className="absolute left-6 top-6 border border-white/40 bg-navy/50 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                Division {d.num}
              </span>
              <div className="absolute inset-x-6 bottom-6">
                <h3 className="font-display text-[24px] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[30px]">
                  {d.title}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              <p className="text-[14.5px] leading-relaxed text-muted">{d.description}</p>

              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {d.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] font-medium text-ink">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-lightblue text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <span className="mt-7 inline-flex items-center gap-2.5 bg-primary px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:bg-deep">
                Explore Division
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  )
}
