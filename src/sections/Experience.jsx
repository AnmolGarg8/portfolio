const EXPERIENCE = [
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    year: '2021',
    description:
      'Built responsive, pixel-perfect landing pages and web apps for various clients using HTML, CSS, and vanilla JavaScript. Honed core web fundamentals.',
  },
  {
    role: 'React Developer',
    company: 'Startup Project',
    year: '2023',
    description:
      'Developed full-stack features using React, Node.js, and MongoDB. Implemented UI improvements, reusable components, and REST API integrations.',
  },
  {
    role: 'Creative Developer',
    company: 'NOW',
    year: 'NOW',
    description:
      'Building immersive web experiences with Three.js, GSAP, and React. Actively upskilling in 3D design, WebGL, and advanced animation techniques.',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__inner">
        {EXPERIENCE.map((item, i) => (
          <div className="timeline-item" key={i}>
            {/* Left column: role + company */}
            <div className="timeline-item__left reveal">
              <p className="timeline-item__role">{item.role}</p>
              <p className="timeline-item__company">{item.company}</p>
            </div>

            {/* Center column: year + vertical line */}
            <div className="timeline-item__center">
              <span className="timeline-item__year">{item.year}</span>
              <div className="timeline__line-wrap">
                <div className="timeline__line" />
              </div>
              {i === EXPERIENCE.length - 1 && <div className="timeline__dot" />}
            </div>

            {/* Right column: description */}
            <div className="timeline-item__right reveal">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
