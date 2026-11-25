import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import IndustriesSection from '../components/IndustriesSection'
import WhyChoose from '../components/WhyChoose'
import TenderCTA from '../components/TenderCTA'
import { IMG } from '../lib/images'
import { industries } from '../lib/content'

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve — Commercial, Industrial & Infrastructure"
        description="Fire protection, security, heavy engineering and infrastructure services delivered for shopping malls, commercial buildings, industrial facilities, retail showrooms, restaurants, healthcare, offices and infrastructure projects."
        keywords="Fire Protection for Commercial Buildings, Industrial Fire Protection Contractor, Mall Fire Safety Systems, Healthcare Nurse Call, Office Access Control, Infrastructure Engineering Services"
        path="/industries"
      />

      <PageHero
        eyebrow="Industries"
        title={
          <>
            Engineering solutions
            <br />
            across <span className="text-primary">industries</span>
          </>
        }
        description="Systems and project execution adapted to the requirements of each environment — from retail and healthcare to industrial plants and infrastructure."
        image={IMG.commercial}
        crumbs={[{ label: 'Industries' }]}
      />

      <IndustriesSection industries={industries} />

      {/* Sector detail band */}
      <section className="relative overflow-hidden bg-lightblue py-16 sm:py-20 lg:py-24" aria-labelledby="sector-note">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-80" aria-hidden="true" />
        <div className="shell relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-current opacity-60" />
              Sector Focus
            </span>
            <h2 id="sector-note" className="section-title mt-5">
              Requirements differ by environment.
            </h2>
            <p className="lead mt-5">
              Each sector brings different protection, infrastructure and execution requirements.
              We align system selection, material specifications and installation methodology with
              the conditions of the site and the standards the project demands.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2.5 bg-primary px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-premium transition-all duration-300 hover:bg-deep"
            >
              Discuss Your Requirement
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {industries.slice(0, 6).map((ind) => (
              <span key={ind.title} className="flex items-center gap-3 border border-line bg-white px-5 py-4 text-[14px] font-semibold text-deep">
                <span className="h-2 w-2 shrink-0 bg-primary" />
                {ind.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />
      <TenderCTA />
    </>
  )
}
