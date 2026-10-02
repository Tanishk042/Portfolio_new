import Reveal from './Reveal'
import Bracketed from './Bracketed'

export default function SectionHead({ eyebrow, title, aside, id }) {
  return (
    <div className="sec-head rv" id={id}>
      <div className="left">
        <Bracketed>{eyebrow}</Bracketed>
        <Reveal as="h2" className="h-sec" delay={60}>
          {title}
        </Reveal>
      </div>
      {aside ? (
        <Reveal as="span" className="eyebrow" delay={120}>
          {aside}
        </Reveal>
      ) : null}
    </div>
  )
}
