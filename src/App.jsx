import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Education from './sections/Education'
import Contact from './sections/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Setup Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => { lenis.raf(time * 1000) })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => { lenis.raf(time * 1000) })
    }
  }, [])

  const handleLoaded = () => {
    setIsLoaded(true)
    // Refresh ScrollTrigger after load
    setTimeout(() => ScrollTrigger.refresh(), 100)
  }

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Preloader */}
      {!isLoaded && <Preloader onComplete={handleLoaded} />}

      {/* Navigation */}
      <Navbar isLoaded={isLoaded} />

      {/* Page Sections */}
      <main>
        <Hero isLoaded={isLoaded} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
