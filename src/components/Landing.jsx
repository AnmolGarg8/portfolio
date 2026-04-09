import './styles/Landing.css'

const Landing = () => {
  return (
    <section className="landing-section">
      <div className="landing-container">
        {/* Purple ambient glow circles */}
        <div className="landing-circle1" />
        <div className="landing-circle2" />

        {/* LEFT: Name intro */}
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            <span>ANMOL</span>
            <br />
            <span>GARG</span>
          </h1>
        </div>

        {/* CENTER: Character image */}
        <div className="landing-image">
          <img 
            src="/hero-char.png" 
            alt="Anmol Garg 3D Avatar" 
            fetchpriority="high" 
            loading="eager" 
          />
          <div className="character-rim" />
        </div>

        {/* RIGHT: Role titles */}
        <div className="landing-info">
          <h3>A Creative</h3>
          <h2 className="landing-h2-info">AI DEV</h2>
          <h2 className="landing-info-h2">ENGINEER</h2>
        </div>
      </div>
    </section>
  )
}

export default Landing
