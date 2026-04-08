import { useEffect, useRef, useState } from 'react'
import './index.css'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CustomCursor from './components/CustomCursor'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Work from './sections/Work'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [loaded])

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      <CustomCursor />

      {loaded && (
        <>
          <Navbar />
          <Sidebar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Work />
            <TechStack />
            <Contact />
          </main>
        </>
      )}
    </>
  )
}
