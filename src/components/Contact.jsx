import Reveal from './Reveal'
import Icon from './Icon'
import useCopyToClipboard from '../hooks/useCopyToClipboard'
import { contact, profile } from '../data/content'

function CopyRow({ row, delay }) {
  const { copied, copy } = useCopyToClipboard()

  return (
    <Reveal as="li" delay={delay}>
      <button
        type="button"
        className={`copy-item${copied ? ' done' : ''}`}
        onClick={() => copy(row.copy)}
      >
        <span>
          <span className="k">{row.key}</span>
          <span className="v">{row.value}</span>
        </span>
        <span className="c">
          <Icon name={copied ? 'check' : 'copy'} strokeWidth={copied ? 2.4 : 2} />
          {copied ? 'Copied' : 'Copy'}
        </span>
      </button>
    </Reveal>
  )
}

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-in">
        <Reveal as="h2">{contact.heading}</Reveal>
        <Reveal as="p" className="sub" delay={60}>
          {contact.sub}
        </Reveal>

        <Reveal className="contact-actions" delay={120}>
          <a className="btn" href={`mailto:${profile.email}`}>
            Let&rsquo;s Talk
            <Icon name="arrowRight" strokeWidth={2.2} />
          </a>
          <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
            <Icon name="arrowNE" strokeWidth={2.2} />
          </a>
          <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <Icon name="arrowNE" strokeWidth={2.2} />
          </a>
        </Reveal>

        <Reveal as="span" className="eyebrow contact-ready">
          {contact.ready}
        </Reveal>

        <ul className="copy-list">
          {contact.rows.map((row, index) => (
            <CopyRow row={row} delay={index * 70} key={row.key} />
          ))}
        </ul>
      </div>
    </section>
  )
}
