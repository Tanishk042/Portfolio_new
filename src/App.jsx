import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CopyChip from './components/CopyChip'
import useSmoothAnchors from './hooks/useSmoothAnchors'
import { education } from './data/content'

export default function App() {
  useSmoothAnchors()

  return (
    <>
      <Nav />

      <main id="main">
        <Hero />
        <Marquee />
        <Projects />
        <Timeline id="education" eyebrow="Education" heading="Background." items={education} />
        <About />
        <Contact />
      </main>

      <Footer />
      <CopyChip />
    </>
  )
}
