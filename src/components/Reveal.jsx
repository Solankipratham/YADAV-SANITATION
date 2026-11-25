import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

/** Scroll-triggered reveal wrapper. */
export default function Reveal({ children, className = '', delay = 0, y = 28, as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] } }}
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export function Stagger({ children, className = '', stagger = 0.09, delayChildren = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
