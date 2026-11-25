import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import DivisionDetail from '../components/DivisionDetail'
import Reveal from '../components/Reveal'
import WhyChoose from '../components/WhyChoose'
import ProcessTimeline from '../components/ProcessTimeline'
import TenderCTA from '../components/TenderCTA'
import { IMG } from '../lib/images'
import { fireServices } from '../lib/content'

export default function FireProtection() {
  return (
    <>
      <Seo
        title="Fire Protection & Security Systems"
        description="Yard hydrant and sprinkler systems, FM-200 gas suppression, addressable fire detection & alarm, CCTV surveillance, public address, access control and nurse call system installation."
        keywords="Fire Protection Contractor, Fire Suppression System, Fire Sprinkler System, Yard Hydrant System, FM-200 Fire Suppression, Fire Detection & Alarm System, CCTV Installation, Access Control System, Nurse Call System"
        path="/services/fire-protection"
      />

      <PageHero
        eyebrow="Division 01"
        title={
          <>
            Fire Protection &amp;
            <br />
            <span className="text-primary">Security Systems</span>
          </>
        }
        description="Comprehensive fire protection, detection, suppression and security solutions designed to support safety, monitoring and protection requirements across commercial, industrial and infrastructure environments."
        image={IMG.divisionFire}
        crumbs={[{ label: 'Services', to: '/services' }, { label: 'Fire Protection & Security' }]}
      />

      <Reveal className="bg-white py-14 sm:py-16">
        <div className="shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
            From suppression infrastructure to detection, surveillance and communication systems —
            installed and executed as a coordinated scope of work.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {fireServices.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border border-line bg-surface px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-deep transition-colors hover:border-primary hover:text-primary"
              >
                {s.num} · {s.title.split('—')[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <DivisionDetail services={fireServices} tone="light" />

      <WhyChoose />
      <ProcessTimeline />
      <TenderCTA />
    </>
  )
}
