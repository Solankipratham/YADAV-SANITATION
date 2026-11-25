import { useState } from 'react'
import { motion } from 'framer-motion'
import { imageReveal, viewportOnce } from '../lib/motion'

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#E4F4FF"/>
          <stop offset="100%" stop-color="#C8E8FA"/>
        </linearGradient>
        <pattern id="p" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0H0V60" fill="none" stroke="#1687D9" stroke-opacity="0.16" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#g)"/>
      <rect width="1200" height="800" fill="url(#p)"/>
      <g transform="translate(600 400)" stroke="#075A96" stroke-opacity="0.55" fill="none" stroke-width="6">
        <path d="M-90 -70 L0 -120 L90 -70 L90 40 L0 90 L-90 40 Z" stroke-linejoin="round"/>
        <path d="M0 -120 V90 M-90 -70 L0 -20 L90 -70" stroke-opacity="0.35"/>
      </g>
      <text x="600" y="560" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="700"
        letter-spacing="6" text-anchor="middle" fill="#075A96">YADAV SANITATION</text>
    </svg>`,
  )

/**
 * Image with graceful fallback + optional scroll reveal.
 */
export default function Img({
  src,
  alt,
  className = '',
  imgClassName = '',
  reveal = false,
  priority = false,
  sizes,
}) {
  const [current, setCurrent] = useState(src)
  const [failed, setFailed] = useState(false)

  const image = (
    <img
      src={current}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      onError={() => {
        if (!failed) {
          setFailed(true)
          setCurrent(FALLBACK)
        }
      }}
      className={`h-full w-full object-cover ${imgClassName}`}
    />
  )

  if (!reveal) return <div className={`overflow-hidden ${className}`}>{image}</div>

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={imageReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {image}
    </motion.div>
  )
}
