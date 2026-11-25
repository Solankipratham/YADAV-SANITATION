import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const base =
  'group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'

const variants = {
  primary: 'bg-primary text-white hover:bg-deep shadow-premium hover:shadow-lift',
  dark: 'bg-ink text-white hover:bg-deep',
  outline:
    'border border-line bg-white text-ink hover:border-primary hover:text-primary',
  ghostLight:
    'border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-ink',
}

/**
 * Button — renders a router <Link>, an anchor, or a <button>.
 */
export default function Button({
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  children,
  className = '',
  icon = true,
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {inner}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {inner}
    </button>
  )
}

/** Text link with animated arrow. */
export function TextLink({ to, href, children, className = '' }) {
  const classes = `group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:text-deep ${className}`
  const inner = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2.5} />
    </>
  )
  return to ? (
    <Link to={to} className={classes}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {inner}
    </a>
  )
}
