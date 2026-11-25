import { Link } from 'react-router-dom'
import { ArrowUpRight, Home } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you requested could not be found." path="/404" />
      <section className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="shell relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
          <span className="font-display text-[90px] font-extrabold leading-none tracking-tighter text-softblue sm:text-[140px]">
            404
          </span>
          <h1 className="-mt-4 font-display text-[26px] font-extrabold text-ink sm:text-[34px]">
            This page could not be found
          </h1>
          <p className="mt-4 max-w-md text-[15px] text-muted">
            The page you are looking for may have been moved or does not exist. Head back to the
            homepage or explore our services.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 bg-primary px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-premium transition-all duration-300 hover:bg-deep"
            >
              <Home className="h-4 w-4" strokeWidth={2.4} />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 border border-line bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-ink transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Explore Services
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
