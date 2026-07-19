import './styles/Career.css'

const careerData = [
  {
    role: 'Software Engineer Intern',
    company: '7rd.ai (Seven Rounds Defender)',
    year: '2026-Now',
    description: 'Building a Windows native desktop ground control interface for an autonomous drone defense platform using Electron, React, and TypeScript with Vision AI and Electronic Warfare-resilient navigation. Deploying autonomous AI agents on VPS infrastructure to automate workflows, reducing manual intervention by 40%.'
  },
  {
    role: 'Google Student Ambassador & India Innovates Finalist',
    company: 'Google Developer Programs & India Innovates 2026',
    year: '2026',
    description: 'Selected as 1 of ~50 Google Student Ambassadors nationally to represent Google\'s developer initiatives at VIPS. Designed and built AIRAVAT XDR, a municipal-grade cyber defense platform featuring real-time anomaly detection, earning a spot as a National Finalist at India Innovates 2026.'
  },
  {
    role: 'Samsung Top 10 Semifinalist & Hackathon Winner',
    company: 'Samsung Solve for Tomorrow & GL Bajaj',
    year: '2025',
    description: 'Won 1st Place at the GL Bajaj Supernova Hackathon. Designed NoteNetra, an offline-to-online transaction telemetry ledger and credit-history builder for MSMEs, ranking in the Top 10 National Semifinalists at Samsung Solve for Tomorrow 2025 out of 20,000+ teams.'
  },
  {
    role: 'B.Tech in Artificial Intelligence & Data Science',
    company: 'Vivekananda Institute of Professional Studies (VIPS), Delhi',
    year: '2024-28',
    description: 'Pursuing B.Tech in AI & DS with an 8.67 CGPA. Mastered core concepts in Data Structures & Algorithms (200+ LeetCode problems solved), Machine Learning, Deep Learning, and Computer Vision, while developing 4 major shipped software-hardware products.'
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
                <h3 className="career-year">{item.year}</h3>
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
