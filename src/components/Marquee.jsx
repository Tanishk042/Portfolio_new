import Reveal from './Reveal'
import { stack } from '../data/content'

export default function Marquee() {
  const groups = [stack, stack]

  return (
    <section>
      <Reveal className="marquee">
        <div className="marquee-track">
          {groups.map((group, index) => (
            <div
              className="marquee-group"
              key={index}
              aria-hidden={index === 1 ? 'true' : undefined}
            >
              {group.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
      <div className="marquee-label">Tools I ship with, daily.</div>
    </section>
  )
}
