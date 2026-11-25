import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import DivisionShowcase from '../components/DivisionShowcase'
import ServiceGrid from '../components/ServiceGrid'
import IndustriesSection from '../components/IndustriesSection'
import ProjectsSection from '../components/ProjectsSection'
import WhyChoose from '../components/WhyChoose'
import ProcessTimeline from '../components/ProcessTimeline'
import TenderCTA from '../components/TenderCTA'
import { IMG } from '../lib/images'
import { fireServices, heavyServices, divisions, industries, projects, projectFilters } from '../lib/content'

const ease = [0.22, 0.61, 0.36, 1]

function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="intro-heading">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-current opacity-60" />
              Who We Are
            </span>
            <h2 id="intro-heading" className="section-title mt-5">
              Engineering expertise.
              <br />
              <span className="text-primary">Integrated solutions.</span>
            </h2>
            <p className="lead mt-6">
              Yadav Sanitation provides engineering, infrastructure, fire protection, security and
              heavy engineering solutions for commercial, industrial and infrastructure projects.
            </p>
            <p className="lead mt-4">
              Our capabilities include fire suppression and detection systems, security and
              surveillance, steel fabrication, structural erection, utility and process piping, water
              supply, sanitary installations, water treatment systems and specialized project
              execution services.
            </p>
            <p className="lead mt-4">
              We focus on providing integrated solutions with attention to technical requirements,
              quality workmanship, coordination and project execution.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2.5 bg-primary px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-premium transition-all duration-300 hover:bg-deep hover:shadow-lift"
            >
              About Us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2.5 border border-line bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-ink transition-all duration-300 hover:border-primary hover:text-primary"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>

        {/* Right imagery */}
        <div className="relative lg:col-span-6">
          <div className="pointer-events-none absolute -right-4 -top-6 hidden h-32 w-32 border border-primary/25 lg:block" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-8 -left-6 hidden h-40 w-40 bg-lightblue lg:block" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 36, clipPath: 'inset(12% 0% 0% 0%)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, ease }}
            className="relative aspect-[4/3] overflow-hidden shadow-lift"
          >
            <Img
              src={IMG.intro}
              alt="Engineering team executing an industrial project"
              className="h-full w-full"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
          </motion.div>

          {/* Floating service badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="absolute -bottom-6 right-3 w-[230px] border border-line bg-white p-5 shadow-lift sm:right-6 lg:-right-4"
          >
            <span className="flex h-10 w-10 items-center justify-center bg-primary text-white">
              <Sparkles className="h-5 w-5" strokeWidth={2} />
            </span>
            <p className="mt-4 font-display text-[15px] font-bold leading-snug text-ink">
              One partner for protection, infrastructure and heavy engineering scope
            </p>
            <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary">
              Integrated Delivery
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo
        title="Fire Protection, Heavy Engineering & Infrastructure Contractor"
        description="Yadav Sanitation delivers integrated engineering, fire protection, security, heavy engineering, piping, water infrastructure and commercial project solutions."
        keywords="Fire Protection Contractor, Fire Suppression System, Fire Sprinkler System, Yard Hydrant System, FM-200 Fire Suppression, Fire Detection & Alarm System, CCTV Installation, Security Systems, Access Control System, Heavy Engineering Contractor, Steel Fabrication, Structural Erection, Process Piping, Utility Piping, Water Treatment Plant, RO Systems, Demolition Contractor, Commercial Engineering Services"
        path="/"
      />

      <Hero />
      <Intro />

      {/* Services overview — two divisions */}
      <section className="relative overflow-hidden bg-white pb-4 pt-16 sm:pt-20 lg:pt-28" aria-labelledby="capabilities-heading">
        <div className="shell">
          <SectionHead
            eyebrow="What We Do"
            title="Our Engineering Capabilities"
            subtitle="Integrated engineering, protection, infrastructure and industrial solutions."
          />
          <div className="mt-11">
            <DivisionShowcase divisions={divisions} />
          </div>
        </div>
      </section>

      {/* Division 01 */}
      <ServiceGrid
        id="fire-protection"
        tone="light"
        eyebrow="Division 01"
        title="Fire Protection & Security Systems"
        description="Comprehensive fire protection, detection, suppression and security solutions designed to support safety, monitoring and protection requirements across commercial, industrial and infrastructure environments."
        services={fireServices}
      />

      {/* Division 02 */}
      <ServiceGrid
        id="heavy-engineering"
        tone="white"
        eyebrow="Division 02"
        title="Heavy Engineering Division"
        description="Our heavy engineering capabilities cover fabrication, structural erection, piping systems, utilities, water infrastructure, treatment systems and specialized industrial project execution."
        services={heavyServices}
      />

      <IndustriesSection industries={industries} />

      <ProjectsSection
        projects={projects}
        filters={projectFilters}
        eyebrow="Selected Work"
        title="Our Projects"
        subtitle="Engineering, infrastructure and project execution."
      />

      <WhyChoose />
      <ProcessTimeline />
      <TenderCTA />
    </>
  )
}
