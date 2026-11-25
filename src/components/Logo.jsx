import { Link } from 'react-router-dom'

/** Brand mark — swap this component when the client logo is provided. */
export function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="10" fill="#1687D9" />
      <path
        d="M32 10 47 19v18L32 46 17 37V19z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path d="M32 22v20M24 27v15M40 27v15" stroke="#C8E8FA" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M14 53h36" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  )
}

export default function Logo({ compact = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label="Yadav Sanitation — home"
    >
      <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-10 sm:w-10" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.14em] text-ink sm:text-[17px]">
          Yadav <span className="text-primary">Sanitation</span>
        </span>
        {!compact && (
          <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.26em] text-muted sm:block">
            Engineering · Protection · Infrastructure
          </span>
        )}
      </span>
    </Link>
  )
}
