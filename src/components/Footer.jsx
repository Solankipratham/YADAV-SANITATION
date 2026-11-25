import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Mail, Phone, MessageCircle, Linkedin, Facebook, Instagram } from 'lucide-react'
import { LogoMark } from './Logo'
import { contactInfo, fireServices, heavyServices } from '../lib/content'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
]

const socials = [
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'Instagram', href: '#', Icon: Instagram },
]

function ColumnTitle({ children }) {
  return <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-primary">{children}</h3>
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="group inline-flex items-center gap-2 py-1.5 text-[14px] text-white/65 transition-colors duration-200 hover:text-white"
      >
        <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
        {children}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.35]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />

      <div className="shell relative pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-auto" surface="dark" />
              <span className="font-display text-lg font-extrabold uppercase tracking-[0.14em]">
                Yadav <span className="text-primary">Sanitation</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              Engineering Solutions. Reliable Execution. Integrated fire protection, security, heavy
              engineering, piping, water infrastructure and commercial project execution.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <ColumnTitle>Quick Links</ColumnTitle>
            <ul className="space-y-1">
              {quickLinks.map((l) => (
                <FooterLink key={l.to} to={l.to}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Fire protection */}
          <div className="lg:col-span-2">
            <ColumnTitle>Fire &amp; Security</ColumnTitle>
            <ul className="space-y-1">
              {fireServices.map((s) => (
                <FooterLink key={s.id} to={`/services/fire-protection#${s.id}`}>
                  {s.title.replace(' — CCTV', '').replace(' & Alarm', '')}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Heavy engineering */}
          <div className="lg:col-span-2">
            <ColumnTitle>Heavy Engineering</ColumnTitle>
            <ul className="space-y-1">
              {heavyServices.map((s) => (
                <FooterLink key={s.id} to={`/services/heavy-engineering#${s.id}`}>
                  {s.title.split('&')[0].trim()}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <ColumnTitle>Contact</ColumnTitle>
            <ul className="space-y-4 text-[14px] text-white/65">
              <li>
                <a href={contactInfo.phoneHref} className="flex items-start gap-3 transition-colors hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-3 transition-colors hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                {contactInfo.address}
              </li>
              <li>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-primary hover:bg-primary"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                  WhatsApp
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-7 text-[12px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Yadav Sanitation. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.16em]">
            Fire Protection · Security Systems · Heavy Engineering · MEP · Infrastructure
          </p>
        </div>
      </div>
    </footer>
  )
}
