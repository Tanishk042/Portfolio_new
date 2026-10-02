import Reveal from './Reveal'
import { heroPills, heroStats, statement } from '../data/content'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <Reveal className="hero-eyebrow">
          {heroPills.map((pill) => (
            <span className="pill" key={pill}>
              {pill}
            </span>
          ))}
        </Reveal>

        <Reveal as="h1" delay={80}>
          Hi, I&rsquo;m Tanisk.
          <br />
          <em>I build products and extend them with smart contracts and ML models.</em>
        </Reveal>

        <Reveal className="hero-stat" delay={160}>
          {heroStats.map((stat, index) => (
            <span key={stat} style={index > 0 ? { display: 'contents' } : undefined}>
              {index > 0 && <span className="sq" aria-hidden="true" />}
              <span>{stat}</span>
            </span>
          ))}
        </Reveal>

        <Reveal as="a" className="scroll-cue" delay={220} href="#featured">
          <i />
          <span>What I do</span>
        </Reveal>

        <Reveal as="p" className="statement" delay={260}>
          <span className="b">{statement.lead}</span> {statement.rest}
        </Reveal>
      </div>
    </section>
  )
}
