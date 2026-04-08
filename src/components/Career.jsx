import './styles/Career.css'

const careerData = [
  {
    role: 'IoT Developer',
    company: 'Self-Initiated',
    year: '2023',
    description: 'Started building sensor-based hardware systems, developing real-time data pipelines and cloud-synced dashboards with ESP32.'
  },
  {
    role: 'AI Developer',
    company: 'Project Work',
    year: '2024',
    description: 'Began building NLP-driven tools, semantic classification systems, and AI-powered MSME platforms using Python and modern ML models.'
  },
  {
    role: 'Creative Engineer',
    company: 'Upskilling',
    year: 'NOW',
    description: 'Building immersive, intelligent systems at the intersection of AI, IoT, and software. Actively upskilling in GSAP, Three.js, and advanced animation techniques.'
  },
]

const Career = () => {
  return (
    <section className="career-section">
      <div className="career-container" style={{ width: 'var(--cWidth)', maxWidth: 'var(--cMaxWidth)', margin: 'auto' }}>
        <h2>
          My career <span>&</span> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot" />
          </div>
          {careerData.map((item, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div>
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Career
