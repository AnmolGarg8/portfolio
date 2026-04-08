export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__left reveal">
        <p className="hero__greeting">Hello! I'm</p>
        <h1 className="hero__name">
          ANMOL<br />GARG
        </h1>
      </div>

      <div className="hero__center">
        <img
          src="/hero-avatar.png"
          alt="Anmol Garg - Creative Developer"
          className="hero__avatar"
        />
      </div>

      <div className="hero__right reveal">
        <p className="hero__subtitle">A Creative</p>
        <div className="hero__role-group">
          <span className="hero__role-designer">DESIGNER</span>
          <span className="hero__role-developer">DEVELOPER</span>
        </div>
      </div>
    </section>
  )
}
