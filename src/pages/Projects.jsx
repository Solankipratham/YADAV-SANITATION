import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ProjectsSection from '../components/ProjectsSection'
import ProcessTimeline from '../components/ProcessTimeline'
import TenderCTA from '../components/TenderCTA'
import { IMG } from '../lib/images'
import { projects, projectFilters } from '../lib/content'

export default function Projects() {
  return (
    <>
      <Seo
        title="Our Projects — Fire Protection, Piping & Heavy Engineering"
        description="Project portfolio across fire protection, security, heavy engineering, fabrication, piping, water systems and commercial project execution. Project details are updated as they are verified."
        keywords="Fire Protection Projects, Steel Fabrication Projects, Structural Erection, Process Piping Projects, Water Treatment Projects, Commercial Project Execution"
        path="/projects"
      />

      <PageHero
        eyebrow="Project Portfolio"
        title={
          <>
            Our <span className="text-primary">Projects</span>
          </>
        }
        description="Engineering, infrastructure and project execution. Project entries below are placeholders and will be replaced with verified project information."
        image={IMG.proj1}
        crumbs={[{ label: 'Projects' }]}
      />

      <ProjectsSection
        projects={projects}
        filters={projectFilters}
        eyebrow="Portfolio"
        title="Engineering & Infrastructure Work"
        subtitle="Filter by the type of scope delivered."
      />

      <ProcessTimeline />
      <TenderCTA />
    </>
  )
}
