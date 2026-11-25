import Reveal from './Reveal'

/**
 * Consistent section heading block.
 */
export default function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  invert = false,
  className = '',
  children,
}) {
  const centered = align === 'center'
  return (
    <Reveal
      className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start'} gap-5 ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${invert ? 'text-softblue' : ''}`}>
          <span className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`section-title max-w-3xl ${centered ? 'text-center' : ''} ${
          invert ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-[15px] leading-relaxed sm:text-base ${invert ? 'text-white/70' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
      {children}
    </Reveal>
  )
}
