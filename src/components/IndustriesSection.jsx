import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionHead from './SectionHead'
import Img from './Img'
import { Stagger, StaggerItem } from './Reveal'

export default function IndustriesSection({ industries, compact = false }) {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="industries-heading">
      <div className="shell">
        <SectionHead
          eyebrow="Industries We Serve"
          title="Engineering Solutions Across Industries"
          subtitle="From commercial complexes to industrial plants, our systems are executed for the environments they protect and serve."
        />

        <Stagger
          className={`mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6 ${compact ? 'lg:grid-cols-4' : 'lg:grid-cols-4'}`}
          stagger={0.07}
        >
          {industries.map((ind) => (
            <StaggerItem key={ind.title} className="h-full">
              <Link
                to="/industries"
                className="group relative flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-500 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Img
                    src={ind.image}
                    alt={`${ind.title} — engineering services by Yadav Sanitation`}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/15 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-display text-[16px] font-bold leading-tight text-white sm:text-[17px]">
                        {ind.title}
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-white text-ink transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                      </span>
                    </span>
                  </span>
                </div>
                <p className="flex-1 p-5 text-[13.5px] leading-relaxed text-muted">{ind.description}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
