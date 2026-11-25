import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Target, Eye, Compass, Check } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import WhyChoose from '../components/WhyChoose'
import TenderCTA from '../components/TenderCTA'
import { IMG } from '../lib/images'
import { industries, fireServices, heavyServices } from '../lib/content'

const ease = [0.22, 0.61, 0.36, 1]

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To deliver integrated engineering and project execution solutions that meet technical requirements, protect people and assets, and support reliable infrastructure.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be recognised as a dependable engineering partner across fire protection, security systems, heavy engineering, piping and water infrastructure.',
  },
  {
    icon: Compass,
    title: 'Our Approach',
    text: 'Careful requirement understanding, coordinated planning, quality workmanship and disciplined execution from mobilisation to handover.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us — Engineering. Execution. Reliability."
        description="Yadav Sanitation is an engineering and project execution company offering solutions across fire protection, security systems, heavy engineering, fabrication, piping, water infrastructure and commercial projects."
        keywords="Heavy Engineering Contractor, Fire Protection Contractor, Steel Fabrication, Structural Erection, Process Piping, Water Supply Installation, Commercial Engineering Services"
        path="/about"
      />

      <PageHero
        eyebrow="About Yadav Sanitation"
        title={
          <>
            Engineering.
            <br />
            Execution.
            <br />
            <span className="text-primary">Reliability.</span>
          </>
        }
        description="An engineering and project execution company delivering fire protection, security, heavy engineering, fabrication, piping, water infrastructure and commercial project solutions."
        image={IMG.aboutHero}
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Company overview */}
      <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="overview">
        <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-current opacity-60" />
                Company Overview
              </span>
              <h2 id="overview" className="section-title mt-5">
                Integrated engineering under <span className="text-primary">one partner</span>
              </h2>
              <p className="lead mt-6">
                Yadav Sanitation is an engineering and project execution company offering solutions
                across fire protection, security systems, heavy engineering, fabrication, piping,
                water infrastructure and commercial projects.
              </p>
              <p className="lead mt-4">
                Our service capabilities include fire suppression systems, fire detection and alarm
                systems, CCTV surveillance, public address and access control systems, nurse call
                systems, steel structural fabrication, sheet metal fabrication, utility and process
                piping, water supply and sanitary installations, water treatment plants and
                specialized project execution work.
              </p>
              <p className="lead mt-4">
                We aim to provide integrated solutions with a focus on technical requirements,
                coordination, quality workmanship and reliable project execution.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 grid gap-3 sm:grid-cols-2">
              {[...fireServices, ...heavyServices].slice(0, 8).map((s) => (
                <span key={s.id} className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-lightblue text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {s.title}
                </span>
              ))}
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 32, clipPath: 'inset(12% 0% 0% 0%)' }}
              whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.95, ease }}
              className="relative aspect-[4/3] overflow-hidden shadow-lift"
            >
              <Img src={IMG.intro} alt="Yadav Sanitation project execution team" className="h-full w-full" />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent" />
            </motion.div>

            <div className="absolute -bottom-6 -left-3 hidden border border-line bg-white px-6 py-5 shadow-lift sm:block lg:-left-8">
              <p className="font-display text-[13px] font-extrabold uppercase tracking-[0.16em] text-primary">
                Engineering · Protection
              </p>
              <p className="mt-1.5 text-[13px] text-muted">Infrastructure · Project Execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Approach */}
      <section className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-28" aria-labelledby="pillars">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-70" aria-hidden="true" />
        <div className="shell relative">
          <SectionHead
            eyebrow="What Drives Us"
            title="Mission, Vision & Approach"
            subtitle="Clear intent behind the way we plan, coordinate and execute projects."
          />
          <div className="mt-11 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: i * 0.1, ease }}
                className="border border-line bg-white p-8 transition-all duration-500 hover:shadow-lift"
              >
                <span className="flex h-[52px] w-[52px] items-center justify-center bg-primary text-white">
                  <p.icon className="h-[22px] w-[22px]" strokeWidth={1.9} />
                </span>
                <h3 className="mt-6 font-display text-[19px] font-bold text-ink">{p.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="capabilities">
        <div className="shell">
          <SectionHead
            eyebrow="Our Capabilities"
            title="Two Divisions. One Execution Partner."
            subtitle="Fire protection and security systems on one side, heavy engineering and infrastructure on the other."
          />
          <div className="mt-11 grid gap-6 lg:grid-cols-2">
            {[
              { title: 'Fire Protection & Security', list: fireServices.map((s) => s.title), to: '/services/fire-protection' },
              { title: 'Heavy Engineering', list: heavyServices.map((s) => s.title), to: '/services/heavy-engineering' },
            ].map((group) => (
              <div key={group.title} className="border border-line bg-white p-8 transition-all duration-500 hover:shadow-lift">
                <h3 className="font-display text-[21px] font-bold text-ink">{group.title}</h3>
                <ul className="mt-6 space-y-3">
                  {group.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 border-b border-line pb-3 text-[14.5px] text-muted last:border-0 last:pb-0">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={group.to}
                  className="group mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary hover:text-deep"
                >
                  Explore Division
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="relative overflow-hidden bg-lightblue py-16 sm:py-20 lg:py-28" aria-labelledby="served">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-80" aria-hidden="true" />
        <div className="shell relative">
          <SectionHead
            eyebrow="Industries Served"
            title="Environments We Work In"
            subtitle="Commercial, industrial and infrastructure settings where our systems are installed and executed."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span key={ind.title} className="border border-line bg-white px-5 py-3.5 text-[13px] font-semibold text-deep">
                {ind.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project images */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="gallery">
        <div className="shell">
          <SectionHead eyebrow="On Site" title="Project Images" subtitle="Representative imagery of the environments and systems we work with." />
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {[IMG.steel, IMG.piping, IMG.divisionFire, IMG.treatment, IMG.commercial, IMG.demolition].map((src, i) => (
              <motion.div
                key={src + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease }}
                className="group relative aspect-[4/3] overflow-hidden border border-line"
              >
                <Img
                  src={src}
                  alt={`Engineering project imagery ${i + 1} — Yadav Sanitation`}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.07]"
                />
                <span className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25" />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2.5 bg-primary px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-premium transition-all duration-300 hover:bg-deep"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      <WhyChoose />
      <TenderCTA />
    </>
  )
}
