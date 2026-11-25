import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import DivisionShowcase from '../components/DivisionShowcase'
import ServiceGrid from '../components/ServiceGrid'
import WhyChoose from '../components/WhyChoose'
import ProcessTimeline from '../components/ProcessTimeline'
import TenderCTA from '../components/TenderCTA'
import { IMG } from '../lib/images'
import { divisions, fireServices, heavyServices } from '../lib/content'

export default function Services() {
  return (
    <>
      <Seo
        title="Services — Fire Protection, Security & Heavy Engineering"
        description="Fire suppression, FM-200, addressable detection, CCTV, access control, nurse call, steel fabrication, structural erection, sheet metal, utility & process piping, water supply, water treatment and demolition services."
        keywords="Fire Protection Contractor, Fire Suppression System, FM-200 Fire Suppression, CCTV Installation, Access Control System, Steel Fabrication, Structural Erection, Process Piping, Utility Piping, Water Treatment Plant, RO Systems, Demolition Contractor"
        path="/services"
      />

      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Engineering capabilities.
            <br />
            <span className="text-primary">Delivered end to end.</span>
          </>
        }
        description="Two specialised divisions covering fire protection & security systems and heavy engineering — coordinated under one execution partner."
        image={IMG.divisionHeavy}
        crumbs={[{ label: 'Services' }]}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="divisions">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div>
              <span className="eyebrow">Service Divisions</span>
              <h2 id="divisions" className="section-title mt-4">
                Choose a division to <span className="text-primary">explore</span>
              </h2>
            </div>
            <p className="lead self-end lg:text-right">
              Each division groups related services, scope and execution capabilities so you can
              quickly find the expertise your project requires.
            </p>
          </div>

          <div className="mt-11">
            <DivisionShowcase divisions={divisions} />
          </div>
        </div>
      </section>

      <ServiceGrid
        id="fire-protection"
        tone="light"
        eyebrow="Division 01"
        title="Fire Protection & Security Systems"
        description="Comprehensive fire protection, detection, suppression and security solutions designed to support safety, monitoring and protection requirements across commercial, industrial and infrastructure environments."
        services={fireServices}
      />

      <ServiceGrid
        id="heavy-engineering"
        tone="white"
        eyebrow="Division 02"
        title="Heavy Engineering Division"
        description="Our heavy engineering capabilities cover fabrication, structural erection, piping systems, utilities, water infrastructure, treatment systems and specialized industrial project execution."
        services={heavyServices}
      />

      <WhyChoose />
      <ProcessTimeline />
      <TenderCTA />
    </>
  )
}
