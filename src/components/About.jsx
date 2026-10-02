import Reveal from './Reveal'
import SectionHead from './SectionHead'
import Bracketed from './Bracketed'
import { about } from '../data/content'

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <SectionHead eyebrow={about.eyebrow} title={about.heading} />

        <div className="about-grid">
          <Reveal className="about-block">
            <Bracketed>{about.startLabel}</Bracketed>
            {about.start.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="about-block" delay={100}>
            <Bracketed>{about.skillsLabel}</Bracketed>
            <div className="skills">
              {about.skills.map((group) => (
                <div className="skill-row" key={group.key}>
                  <span className="skill-key">{group.key}</span>
                  <span className="skill-val">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
