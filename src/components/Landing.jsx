import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './styles/Landing.css'

const titles = [
  { line1: "A Creative", line2: "AI DEV ENGINEER" },
  { line1: "A Passionate", line2: "IoT INNOVATOR" },
  { line1: "A Builder of", line2: "INTELLIGENT SYSTEMS" },
  { line1: "An Emerging", line2: "TECH VISIONARY" },
  { line1: "A Problem Solver", line2: "& ENGINEER" }
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
    }, 3000)

    return () => clearInterval(timer)
  }, [index])

  useEffect(() => {
    if (prevIndex === null) return

    // Prepare incoming title
    gsap.set(incomingRef.current, { y: '100%', opacity: 0 })
    
    // Animate out previous
    gsap.to(activeRef.current, {
      y: '-100%',
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut"
    })

    // Animate in current
    gsap.to(incomingRef.current, {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      ease: "power3.inOut"
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

        {/* CENTER: Character Gap */}
        <div className="character-column" />

        {/* RIGHT: Rotating Role titles */}
        <div className="landing-info">
          <div className="title-wrapper">
            {/* Previous title slot (only visible during transition) */}
            {prevIndex !== null && (
              <div className="title-slide" ref={activeRef}>
                <h3>{titles[prevIndex].line1}</h3>
                <h2 className="landing-info-h2">{titles[prevIndex].line2}</h2>
              </div>
            )}
            {/* Current title slot */}
            <div className="title-slide" ref={incomingRef} style={{ opacity: prevIndex === null ? 1 : 0 }}>
              <h3>{titles[index].line1}</h3>
              <h2 className="landing-info-h2">{titles[index].line2}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
