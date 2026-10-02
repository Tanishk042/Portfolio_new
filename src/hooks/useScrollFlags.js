import { useEffect, useState } from 'react'

/**
 * Tracks window scroll against a set of thresholds.
 * Returns a lookup of booleans, e.g. useScrollFlags(24) -> { at24 }
 */
export default function useScrollFlags(past = 24) {
  const [flags, setFlags] = useState({ scrolled: false, pastHero: false })

  useEffect(() => {
    let frame = 0

    const read = () => {
      frame = 0
      const y = window.scrollY
      setFlags({
        scrolled: y > past,
        pastHero: y > window.innerHeight * 0.6,
      })
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read)
    }

    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [past])

  return flags
}
