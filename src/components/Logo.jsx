import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Logo files that may be dropped into public/images/.
 * The first file that actually loads wins; otherwise the built-in mark is used.
 */
const DARK_BG_CANDIDATES = [
  '/images/logo-light.png',
  '/images/logo-light.svg',
  '/images/logo-light.webp',
]

const LIGHT_BG_CANDIDATES = [
  '/logo-yadav-sanitation.png',
  '/logo-yadav-sanitation.png',
  '/logo-yadav-sanitation.png',
  '/logo-yadav-sanitation.png',
]

/** Probes candidate paths in order and returns the first one that loads. */
function useLogoSrc(candidates) {
  const [src, setSrc] = useState(null)

  useEffect(() => {
    let cancelled = false

    const probe = (i) => {
      if (cancelled || i >= candidates.length) return
      const img = new Image()
      img.onload = () => {
        if (!cancelled) setSrc(candidates[i])
      }
      img.onerror = () => probe(i + 1)
      img.src = candidates[i]
    }

    probe(0)
    return () => {
      cancelled = true
    }
  }, [candidates])

  return src
}

/** Built-in engineering mark — used when no logo file is present. */
function FallbackMark({ className = 'h-10 w-10' }) {
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

/**
 * Brand mark. Renders the client's logo from public/images when present,
 * otherwise the built-in mark.
 *
 * @param {'light'|'dark'} surface  surface the logo sits on
 */
export function LogoMark({ className = 'h-10 w-10', surface = 'light' }) {
  const candidates = surface === 'dark' ? DARK_BG_CANDIDATES : LIGHT_BG_CANDIDATES
  const src = useLogoSrc(candidates)

  if (!src) return <FallbackMark className={className} />

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`w-auto object-contain ${className}`}
      decoding="async"
    />
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
      <LogoMark className="h-9 w-auto sm:h-10" />
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
