import { FaGithub } from 'react-icons/fa6'
import './styles/Work.css'

const projects = [
  {
    num: '01',
    name: 'NoteNetra',
    category: 'Offline Cash Tracking for Small Businesses',
    tools: ['ESP32', 'C++', 'Python', 'Firebase', 'IoT', 'Cloud Telemetry'],
    description: 'Architected an ESP32 IoT ledger system that digitizes 1,000+ daily cash transactions from physical shopkeeper books into a real-time cloud dashboard. Engineered a credit-history pipeline converting raw transaction streams into formal loan-eligibility profiles for unbanked MSMEs and farmers. Top 10 National Semifinalist at Samsung Solve for Tomorrow 2025.',
    image: '/project-1.png',
    repo: 'https://github.com/AnmolGarg8/NoteNetra',
  },
  {
    num: '02',
    name: 'SAMARTH-AI',
    category: 'NLP Platform for MSME Onboarding',
    tools: ['Python', 'FastAPI', 'React.js', 'NLP', 'Transformers', 'BERT'],
    description: 'Built an NLP taxonomy classifier achieving 80% accuracy across 500+ MSME product categories, automating compliance mapping that previously required manual expert review. Reduced manual categorization effort by 70% with under 1 second processing time.',
    image: '/project-2.png',
    repo: 'https://github.com/AnmolGarg8/SAMARTH-AI',
  },
  {
    num: '03',
    name: 'AIRAVAT XDR',
    category: 'AI-Powered Autonomous Cyber Defense',
    tools: ['Python', 'FastAPI', 'React.js', 'Scikit-learn', 'Machine Learning', 'SQLite'],
    description: 'Designed a municipal-grade XDR platform using Isolation Forest ML models for real-time network anomaly and phishing detection. Built an automated response engine (account isolation, system lockdown) with a React dashboard. National Finalist at India Innovates 2026.',
    image: '/project-3.png',
    repo: 'https://github.com/AnmolGarg8/AIRAVAT-XDR',
  },
  {
    num: '04',
    name: 'PulmoCare',
    category: 'Respiratory Deterioration Monitor',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Vite', 'Canvas 2D API', 'IntersectionObserver'],
    description: 'Prototyped a dual-sensor respiratory monitor combining acoustic sputum detection and transcutaneous CO₂ tracking to flag clinical deterioration 2–4 hours before crisis. Built a zero-dependency real-time simulation dashboard with a 3-tier emergency alert cascade.',
    image: '/project-4.png',
    repo: 'https://github.com/AnmolGarg8/PulmoCare',
  },
]

const Work = () => {
  return (
    <section className="work-section">
      <div className="work-container" style={{ width: 'var(--cWidth)', maxWidth: 'var(--cMaxWidth)', margin: 'auto' }}>
        <h2>My <span>Work</span></h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-title">
                <h3>{project.num}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div className="work-info">
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {project.name}
                      <a 
                        href={project.repo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'var(--accentColor)', fontSize: '16px', display: 'inline-flex', alignItems: 'center' }}
                        title="View GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    </h4>
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
              <div className="work-info">
                <h4>Tools and features</h4>
                <p>{project.tools.join(', ')}</p>
              </div>
              <div className="work-info" style={{ marginTop: '10px' }}>
                <p style={{ fontWeight: '300', fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
                  {project.description}
                </p>
              </div>
              <div className="work-image" style={{ marginTop: 'auto' }}>
                <div className="work-image-in">
                  <img src={project.image} alt={project.name} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
