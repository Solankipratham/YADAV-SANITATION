export const ease = [0.22, 0.61, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
}

/** Image reveal: clipped wipe from bottom + subtle scale. */
export const imageReveal = {
  hidden: { opacity: 0, y: 36, scale: 1.06, clipPath: 'inset(12% 0% 0% 0%)' },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.95, ease },
  },
}

export const stagger = (staggerChildren = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const viewportOnce = { once: true, amount: 0.18 }
