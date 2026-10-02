import Reveal from './Reveal'
import SectionHead from './SectionHead'
import Icon from './Icon'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section className="sec" id="featured">
      <div className="wrap">
        <SectionHead
          eyebrow="Projects"
          title="Featured work."
          aside={`${String(projects.length).padStart(2, '0')} projects`}
        />

        <div className="projects">
          {projects.map((project, index) => (
            <Reveal as="article" className="pcard" key={project.name} delay={index * 70}>
              <div className="pcard-n">[{index + 1}]</div>

              <div className="pcard-body">
                <h3>
                  {project.name} &mdash; {project.subtitle}
                </h3>
                <span className="yr">{project.year}</span>
                <p className="desc">{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pcard-side">
                <span className="cat">{project.category}</span>
                <span className="arrow">
                  <Icon name="arrowNE" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
