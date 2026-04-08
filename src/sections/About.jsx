export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__left">
        <h2 className="about__headline reveal">
          WHAT<br />
          I <span>DO</span>
        </h2>
        <div className="about__3d-container">
          <img
            src="/about-char-v2.png"
            alt="Developer at desk"
            className="about__3d-img"
          />
        </div>
      </div>

      <div className="about__right">
        <div className="about__card reveal">
          <h3 className="about__card-title">DEVELOP</h3>
          <p className="about__card-label">Description</p>
          <p className="about__card-text">
            Started building websites with JavaScript and PHP, now I craft them with
            TypeScript, React, Express, Node… and a little bit of magic!
          </p>
          <div className="about__card-arrow">↓</div>
        </div>

        <div className="about__card reveal">
          <h3 className="about__card-title">DESIGN</h3>
          <p className="about__card-label">Description</p>
          <p className="about__card-text">
            I started designing as my hobby, but like all good hobbies, it slowly crept
            into my career — now it won't leave me alone!
          </p>
          <div className="about__card-arrow">↓</div>
        </div>
      </div>
    </section>
  )
}
