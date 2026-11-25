import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { navLinks, contactInfo } from '../lib/content'

const barVariants = {
  closed: (i) => ({
    opacity: 0,
    y: -14,
    transition: { duration: 0.28, delay: i * 0.045, ease: [0.22, 0.61, 0.36, 1] },
  }),
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.12 + i * 0.06, ease: [0.22, 0.61, 0.36, 1] },
  }),
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Utility strip */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="shell flex h-10 items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em]">
          <span className="text-white/60">Engineering · Fire Protection · Heavy Engineering · Infrastructure</span>
          <div className="flex items-center gap-6">
            <a href={contactInfo.phoneHref} className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5" strokeWidth={2.2} />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-white/80 transition-colors hover:text-white"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_10px_30px_-22px_rgba(7,90,150,0.55)]' : ''
        }`}
      >
        <div className={`shell flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[68px]' : 'h-[76px]'}`}>
          <Logo onClick={() => setOpen(false)} />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 ${
                    isActive ? 'text-primary' : 'text-ink hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-[2px] origin-left bg-primary transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-primary px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-premium transition-all duration-300 hover:bg-deep sm:px-6 sm:py-3.5"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-primary hover:text-primary lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
              className="overflow-hidden border-t border-line bg-white lg:hidden"
            >
              <nav className="shell flex flex-col py-4" aria-label="Mobile">
                {navLinks.map((link, i) => (
                  <motion.div key={link.to} custom={i} variants={barVariants} initial="closed" animate="open">
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-line/70 py-4 text-[15px] font-bold uppercase tracking-[0.1em] ${
                          isActive ? 'text-primary' : 'text-ink'
                        }`
                      }
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 text-muted" strokeWidth={2.2} />
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div custom={navLinks.length} variants={barVariants} initial="closed" animate="open" className="mt-5 flex flex-col gap-3 pb-3">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="bg-primary px-6 py-4 text-center text-[12px] font-bold uppercase tracking-[0.16em] text-white"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href={contactInfo.phoneHref}
                    className="border border-line px-6 py-4 text-center text-[12px] font-bold uppercase tracking-[0.16em] text-ink"
                  >
                    Call {contactInfo.phone}
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
