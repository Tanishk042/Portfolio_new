import Reveal from './Reveal'
import HeroVideo from './HeroVideo'
import { heroKicker, heroPills, heroStats, heroVideo, statement } from '../data/content'

export default function Hero() {
  return (
    <section className="hero">
      <HeroVideo id={heroVideo.id} title={heroVideo.title} />

      <div className="wrap hero-inner">
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

        <Reveal as="p" className="hero-kicker" delay={150}>
          <span className="br">[</span> {heroKicker} <span className="br">]</span>
        </Reveal>

        <Reveal className="hero-stat" delay={220}>
          {heroStats.map((stat, index) => (
            <span key={stat} style={index > 0 ? { display: 'contents' } : undefined}>
              {index > 0 && <span className="sq" aria-hidden="true" />}
              <span>{stat}</span>
            </span>
          ))}
        </Reveal>

        <Reveal as="a" className="scroll-cue" delay={280} href="#featured">
          <i />
          <span>What I do</span>
        </Reveal>

        <Reveal as="p" className="statement" delay={320}>
          <span className="b">{statement.lead}</span> {statement.rest}
        </Reveal>
      </div>
    </section>
  )
}
