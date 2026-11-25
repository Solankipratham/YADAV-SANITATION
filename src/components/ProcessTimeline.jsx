import SectionHead from './SectionHead'
import { Stagger, StaggerItem } from './Reveal'
import { process } from '../lib/content'

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-28" aria-labelledby="process">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-70" aria-hidden="true" />
      <div className="shell relative">
        <SectionHead
          eyebrow="Our Process"
          title="Project Execution Process"
          subtitle="A clear, coordinated approach from requirement understanding through final handover."
        />

        {/* Desktop timeline */}
        <div className="relative mt-14 hidden lg:block">
          {/* timeline rail */}
          <div className="absolute left-0 right-0 top-[26px] h-px bg-gradient-to-r from-primary via-softblue to-line" aria-hidden="true" />

          <Stagger className="relative grid grid-cols-5 gap-6" stagger={0.12}>
            {process.map((step) => (
              <StaggerItem key={step.num}>
                <div className="group">
                  <span className="relative flex h-[54px] w-[54px] items-center justify-center border border-line bg-white font-display text-[15px] font-extrabold text-primary shadow-card transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    {step.num}
                  </span>
                  <h3 className="mt-6 font-display text-[17px] font-bold leading-snug text-ink">{step.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Mobile / tablet timeline */}
        <div className="relative mt-12 lg:hidden">
          <div className="absolute bottom-6 left-[26px] top-6 w-px bg-line" aria-hidden="true" />
          <Stagger className="relative space-y-7" stagger={0.1}>
            {process.map((step) => (
              <StaggerItem key={step.num} className="flex gap-5">
                <span className="relative flex h-[54px] w-[54px] shrink-0 items-center justify-center border border-line bg-white font-display text-[15px] font-extrabold text-primary shadow-card">
                  {step.num}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-[17px] font-bold leading-snug text-ink">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
