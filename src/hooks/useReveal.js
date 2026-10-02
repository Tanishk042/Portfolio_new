import { useEffect, useRef } from 'react'

/**
 * Reveals an element once it scrolls into view by adding the `in` class.
 * Falls back to immediately visible when IntersectionObserver is unavailable.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)
  const { rootMargin = '0px 0px -8% 0px', threshold = 0.08 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('in')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return ref
}
