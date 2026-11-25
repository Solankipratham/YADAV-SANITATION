import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import DivisionDetail from '../components/DivisionDetail'
import Reveal from '../components/Reveal'
import WhyChoose from '../components/WhyChoose'
import ProcessTimeline from '../components/ProcessTimeline'
import TenderCTA from '../components/TenderCTA'
import { IMG } from '../lib/images'
import { heavyServices } from '../lib/content'

export default function HeavyEngineering() {
  return (
    <>
      <Seo
        title="Heavy Engineering Division"
        description="Steel structural fabrication & erection, sheet metal fabrication, utility & process piping (SS/CS/MS), water supply & sanitary installation, water treatment plants, RO systems and demolition & dismantling works."
        keywords="Heavy Engineering Contractor, Steel Fabrication, Structural Erection, Sheet Metal Fabrication, Process Piping, Utility Piping, Water Supply Installation, Sanitary Installation, Water Treatment Plant, RO Systems, Demolition Contractor"
        path="/services/heavy-engineering"
      />

      <PageHero
        eyebrow="Division 02"
        title={
          <>
            Heavy Engineering
            <br />
            <span className="text-primary">Division</span>
          </>
        }
        description="Fabrication, structural erection, piping systems, utilities, water infrastructure, treatment systems and specialized industrial project execution."
        image={IMG.divisionHeavy}
        crumbs={[{ label: 'Services', to: '/services' }, { label: 'Heavy Engineering' }]}
      />

      <Reveal className="bg-white py-14 sm:py-16">
        <div className="shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
            Structural and utility scope executed with attention to material specifications,
            installation requirements, site coordination and project programme.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {heavyServices.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border border-line bg-surface px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-deep transition-colors hover:border-primary hover:text-primary"
              >
                {s.num} · {s.title.split('&')[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <DivisionDetail services={heavyServices} tone="white" />

      <WhyChoose />
      <ProcessTimeline />
      <TenderCTA />
    </>
  )
}
