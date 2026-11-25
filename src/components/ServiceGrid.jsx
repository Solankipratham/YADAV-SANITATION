import SectionHead from './SectionHead'
import ServiceCard from './ServiceCard'
import { Stagger, StaggerItem } from './Reveal'

/**
 * Heading + six service cards for one division.
 */
export default function ServiceGrid({
  eyebrow,
  title,
  description,
  services,
  tone = 'light',
  id,
}) {
  const light = tone === 'light'

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 sm:py-20 lg:py-28 ${light ? 'bg-surface' : 'bg-white'}`}
      aria-labelledby={`${id || 'services'}-heading`}
    >
      {light && <div className="pointer-events-none absolute inset-0 grid-pattern opacity-70" aria-hidden="true" />}

      <div className="shell relative">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead eyebrow={eyebrow} title={title} subtitle={description} />
          </div>
          <div className="hidden justify-end lg:col-span-5 lg:flex">
            <span className="font-display text-[120px] font-extrabold leading-none tracking-[-0.05em] text-softblue/70 select-none">
              {services[0]?.num}
              <span className="text-primary/20">+</span>
            </span>
          </div>
        </div>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((s) => (
            <StaggerItem key={s.id} className="h-full">
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
