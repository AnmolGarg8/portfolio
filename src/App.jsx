import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import SocialIcons from './components/SocialIcons'
import Cursor from './components/Cursor'
import Landing from './components/Landing'
import Loading from './components/Loading'
import { initSmoothScroll, initScrollAnimations, initLandingAnimations } from './utils/animations'

// Lazy load non-critical sections
const About = lazy(() => import('./components/About'))
const WhatIDo = lazy(() => import('./components/WhatIDo'))
const Career = lazy(() => import('./components/Career'))
const Work = lazy(() => import('./components/Work'))
const TechStack = lazy(() => import('./components/TechStack'))
const Contact = lazy(() => import('./components/Contact'))

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
            <Suspense fallback={<div style={{ height: '100vh', background: 'transparent' }} />}>
              <About />
              <WhatIDo />
              <Career />
              <Work />
              <TechStack />
              <Contact />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
