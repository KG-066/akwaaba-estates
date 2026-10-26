import { useEffect } from 'react'
import { ALLOW_INDEXING } from '../data/site.js'

const SITE_NAME = 'AKWAABA ESTATES'
const DEFAULT_DESCRIPTION =
  'AKWAABA ESTATES is a demonstration real estate brand showcasing premium homes and investment properties across Ghana.'

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function usePageTitle(title, description, options = {}) {
  const noindex = Boolean(options.noindex)

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Find Your Place in Ghana.`
    const desc = description || DEFAULT_DESCRIPTION

    document.title = fullTitle
    setMeta('name', 'description', desc)

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)

    const blocked = !ALLOW_INDEXING || noindex
    setMeta('name', 'robots', blocked ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, noindex])
}
