import { useEffect } from 'react'

const BASE = 'Yadav Sanitation'

function setMeta(attr, name, content) {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Per-page SEO: title, meta description, canonical, Open Graph. */
export default function Seo({ title, description, keywords, path = '/' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE}` : `${BASE} — Engineering Solutions. Reliable Execution.`
    document.title = fullTitle

    const canonical = `https://www.yadavsanitation.com${path}`
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }
    setMeta('property', 'og:title', fullTitle)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:type', 'website')
    if (keywords) setMeta('name', 'keywords', keywords)
  }, [title, description, keywords, path])

  return null
}
