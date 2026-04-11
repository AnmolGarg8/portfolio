import './styles/Landing.css'

const Landing = () => {
  return (
    <section className="landing-section" id="hero">
      <div className="landing-container">
        {/* LEFT: Name intro */}
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <div className="hero-name">
            <div className="name-line">ANMOL</div>
            <div className="name-line">GARG</div>
          </div>
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
