import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'
import useScrollFlags from '../hooks/useScrollFlags'
import Icon from './Icon'

export default function Nav() {
  const [ready, setReady] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrolled } = useScrollFlags(24)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav${ready ? ' ready' : ''}`}>
      <div className={`nav-in${scrolled ? ' solid' : ''}`}>
        <a className="brand" href="#top" onClick={close}>
          <i />
          {profile.name}
        </a>

        <nav id="nav-links" className={`nav-links${open ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn nav-cta" href={`mailto:${profile.email}`}>
          Let&rsquo;s Talk
          <Icon name="arrowRight" strokeWidth={2.2} />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
