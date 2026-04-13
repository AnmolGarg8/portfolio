import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './styles/Landing.css'

const titles = [
  { line1: "A Creative", line2: "DESIGNER" },
  { line1: "A Creative", line2: "DEVELOPER" },
  { line1: "A Passionate", line2: "IoT INNOVATOR" },
  { line1: "A Builder of", line2: "AI ENGINEER" },
  { line1: "An Emerging", line2: "TECH VISIONARY" }
]

const Landing = () => {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const activeRef = useRef(null)
  const incomingRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % titles.length
      setPrevIndex(index)
      setIndex(nextIndex)
    }, 3500)

    return () => clearInterval(timer)
  }, [index])

  useEffect(() => {
    if (prevIndex === null) return

    const ease = "customEase"
    const duration = 0.6

    // Custom cubic-bezier transition
    const customEase = "p4"
    gsap.registerPlugin() // Ensure plugin context if needed, though standard ease works

    // Prepare incoming title
    gsap.set(incomingRef.current, { y: '100%', opacity: 0, color: '#ffffff' })
    
    // Animate out previous — shift color to purple and slide up
    gsap.to(activeRef.current, {
      y: '-100%',
      opacity: 0.5,
      color: '#7c3aed',
      duration: duration,
      ease: "power4.inOut" // Approximates cubic-bezier(0.76, 0, 0.24, 1) effectively
    })

    // Animate in current — solid white and slide to center
    gsap.to(incomingRef.current, {
      y: '0%',
      opacity: 1,
      duration: duration,
      ease: "power4.inOut"
    })
  }, [index, prevIndex])

  return (
    <section className="landing-section" id="hero">
      <div className="landing-circle1" />
      
      <div className="landing-container">
        {/* LEFT: Name intro */}
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <div className="hero-name">
            <div className="name-line">ANMOL</div>
            <div className="name-line">GARG</div>
          </div>
        </div>
      </div>

      {/* RIGHT: Rotating Role titles — Standalone */}
      <div className="standalone-hero-title">
        <div className="title-wrapper">
          {/* Constant Subtitle (Line 1) */}
          <div className="subtitle-stable">
            <h3>{titles[index].line1}</h3>
          </div>

          <div className="main-title-container">
            {/* Previous title slot (Outgoing) */}
            {prevIndex !== null && (
              <div className="title-slide outgoing" ref={activeRef}>
                <h2 className="landing-info-h2">{titles[prevIndex].line2}</h2>
              </div>
            )}
            {/* Current title slot (Incoming) */}
            <div className="title-slide incoming" ref={incomingRef} style={{ opacity: prevIndex === null ? 1 : 0 }}>
              <h2 className="landing-info-h2">{titles[index].line2}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
