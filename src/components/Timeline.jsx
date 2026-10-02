import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Timeline({ id, eyebrow, heading, items }) {
  return (
    <section className="sec" id={id}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={heading} />

        <Reveal className="rows">
          {items.map((item) => (
            <div className="row" key={item.role}>
              <div className="row-l">
                <h3 className="role">
                  {item.role}
                  {item.roleNote ? <span className="muted"> {item.roleNote}</span> : null}
                </h3>
                {item.org ? <p className="org">{item.org}</p> : null}
                <p className="meta">{item.meta}</p>
              </div>

              <div className="row-r">
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
