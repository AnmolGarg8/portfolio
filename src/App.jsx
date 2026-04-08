import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import SocialIcons from './components/SocialIcons'
import Cursor from './components/Cursor'
import Landing from './components/Landing'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Career from './components/Career'
import Work from './components/Work'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Loading from './components/Loading'
import Marquee from './components/Marquee'
import { initSmoothScroll, initScrollAnimations, initLandingAnimations } from './utils/animations'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const mainRef = useRef(null)

  useEffect(() => {
    // Preload timer
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    const cleanup = initSmoothScroll()
    
    // Small delay to ensure DOM is ready
    const animTimer = setTimeout(() => {
      initLandingAnimations()
      initScrollAnimations()
    }, 100)

    return () => {
      cleanup()
      clearTimeout(animTimer)
    }
  }, [isLoaded])

  return (
    <>
      <Loading isLoaded={isLoaded} />
      <Cursor />
      <Navbar />
      <SocialIcons />
      <main ref={mainRef} className={isLoaded ? 'main-active' : ''}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Landing />
            <About />
            <WhatIDo />
            <Career />
            <Marquee />
            <Work />
            <TechStack />
            <Contact />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
