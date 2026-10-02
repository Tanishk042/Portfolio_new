import Icon from './Icon'
import { footer, profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <span className="eyebrow">Site</span>
            <ul>
              {footer.site.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <span className="eyebrow">Follow</span>
            <ul>
              {footer.follow.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col loc">
            <span className="eyebrow">Based in</span>
            <div className="foot-loc">
              <p>
                Ghaziabad,
                <br />
                Uttar Pradesh, India
              </p>
              <p style={{ marginTop: 14 }}>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
              <p>
                <a href={`tel:${profile.phoneTel}`}>{profile.phoneDisplay}</a>
              </p>
            </div>
          </div>
        </div>

        <p className="mega" aria-hidden="true">
          {footer.mega.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <div className="foot-base">
          <span>{footer.copyright}</span>
          <a className="to-top" href="#top">
            Back to top
            <Icon name="arrowUp" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </footer>
  )
}
