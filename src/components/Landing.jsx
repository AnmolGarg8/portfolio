import { useEffect } from 'react'
import gsap from 'gsap'
import './styles/Landing.css'

const Landing = () => {
  return (
    <section className="landing-section" id="hero">
      <div className="floating-orb"></div>
      
      {/* LEFT BLOCK */}
      <div className="hero-fixed-container left">
        <div className="hero-left-block">
          <h3 className="hero-small-text">Hello! I'm</h3>
          <h1 className="hero-large-text">
            <span>ANMOL</span>
            <span>GARG</span>
          </h1>
        </div>
      </div>

      {/* RIGHT BLOCK */}
      <div className="hero-fixed-container right">
        <div className="hero-right-block">
          <h3 className="hero-small-text">A Creative</h3>
          <h2 className="hero-large-text gradient-text">
            <span>PROBLEM</span>
            <span>SOLVER</span>
          </h2>
          <h2 className="hero-large-text secondary">
            <span>DEVELOPER</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Landing
