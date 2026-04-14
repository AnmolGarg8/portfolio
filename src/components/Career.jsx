import './styles/Career.css'

const careerData = [
  {
    role: 'IoT Systems Developer',
    company: 'Self-Initiated Research',
    year: '2023',
    description: 'Architected ESP32-based embedded systems for real-time sensor data acquisition, engineered cloud-synced dashboards with live telemetry pipelines, and developed an offline-to-online cash transaction system (NoteNetra) converting raw cashflow data into structured credit insights for underserved MSMEs.'
  },
  {
    role: 'AI & NLP Engineer',
    company: 'Project & Competition Work',
    year: '2024',
    description: 'Engineered SAMARTH-AI — an NLP-driven MSME onboarding platform leveraging semantic similarity models for automated product taxonomy classification with confidence scoring. Achieved Top 10 National Semifinalist recognition at Samsung Solve for Tomorrow 2025 and Finalist standing at India Innovates 2026.'
  },
  {
    role: 'Creative AI Engineer',
    company: 'Upskilling & Building',
    year: 'NOW',
    description: 'Building at the intersection of AI, IoT, and immersive web engineering. Deepening expertise in GSAP, Three.js, and React-based creative interfaces. Actively pursuing production-grade ML deployment, advanced computer vision with OpenCV, and scalable FastAPI backends — engineering systems that are both intelligent and beautifully crafted.'
  },
]

const Career = () => {
  return (
    <section className="career-section" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span> experience
        </h2>
        
        <div className="career-info">
          {/* Vertical spine */}
          <div className="career-timeline"></div>

          {careerData.map((item, index) => (
            <div className="career-row" key={index}>
              {/* Left Column: Title & Tag */}
              <div className="career-left">
                <h3 className={`year-${item.year.toLowerCase()}`}>{item.year}</h3>
                <div className="career-title-block">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
              </div>

              {/* Center: Dot on line */}
              <div className="career-center">
                <div className="career-dot-marker" />
              </div>

              {/* Right Column: Description */}
              <div className="career-right">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Career
