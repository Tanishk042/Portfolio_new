import { useEffect } from 'react'

const OFFSET = 84

/**
 * Intercepts in-page anchor clicks and scrolls with an offset so the
 * fixed pill nav never covers a section heading. Updates the hash too.
 */
export default function useSmoothAnchors(offset = OFFSET) {
  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return

      const target = document.querySelector(hash)
      if (!target) return

      event.preventDefault()
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: hash === '#top' ? 0 : Math.max(top, 0), behavior: 'smooth' })

      if (window.history.replaceState) {
        window.history.replaceState(null, '', hash === '#top' ? window.location.pathname : hash)
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [offset])
}
