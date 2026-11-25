import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to top on route change (or to the hash target when present). */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // Wait for the target section to render.
      const t = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else window.scrollTo(0, 0)
      }, 60)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
