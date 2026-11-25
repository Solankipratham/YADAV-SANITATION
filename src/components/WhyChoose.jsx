import { Workflow, Cpu, HardHat, BadgeCheck } from 'lucide-react'
import SectionHead from './SectionHead'
import { Stagger, StaggerItem } from './Reveal'
import { whyChoose } from '../lib/content'

const ICONS = { Workflow, Cpu, HardHat, BadgeCheck }

export default function WhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="why-choose">
      <div className="shell">
        <SectionHead
          eyebrow="Why Yadav Sanitation"
          title="A Reliable Engineering Partner"
          subtitle="Coordinated capabilities, technical focus and dependable execution across every project requirement."
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" stagger={0.08}>
          {whyChoose.map((f) => {
            const Icon = ICONS[f.icon] || Workflow
            return (
              <StaggerItem key={f.title} className="h-full">
                <article className="group relative flex h-full flex-col border border-line bg-white p-7 transition-all duration-500 hover:border-primary/40 hover:shadow-lift">
                  <span
                    className="absolute right-0 top-0 h-16 w-16 bg-lightblue transition-colors duration-500 group-hover:bg-primary"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 font-display text-[13px] font-extrabold tracking-[0.16em] text-primary">
                    {f.num}
                  </span>
                  <span className="relative z-10 mt-8 flex h-14 w-14 items-center justify-center bg-lightblue text-primary transition-all duration-500 group-hover:bg-white">
                    <Icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <h3 className="relative z-10 mt-6 font-display text-[18px] font-bold leading-snug text-ink">
                    {f.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-[14px] leading-relaxed text-muted">{f.description}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
