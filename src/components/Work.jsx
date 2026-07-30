import { FaGithub } from 'react-icons/fa6'
import './styles/Work.css'

const projects = [
  {
    num: '01',
    name: 'NoteNetra',
    category: 'Offline Cash Tracking for Small Businesses',
    tools: ['C++', 'ESP32', 'Python', 'Cloud Computing'],
    description: 'Built a web-enabled data collection system on C++/ESP32 hardware, digitizing over 1,000 daily cash transactions into a real-time cloud pipeline, eliminating manual paper-based record keeping for unbanked micro and small enterprises. Engineered a credit-history generation pipeline validated with real shopkeepers, earning Top 10 National Semifinalist honors at Samsung Solve for Tomorrow 2025 among 20,000 competing teams.',
    image: '/project-1.png',
    repo: 'https://github.com/AnmolGarg8/NoteNetra',
  },
  {
    num: '02',
    name: 'SAMARTH-AI',
    category: 'NLP Platform for MSME Onboarding',
    tools: ['Python', 'FastAPI', 'React.js', 'NLP'],
    description: 'Developed a customer-facing NLP classification application achieving 80 percent accuracy across 500 MSME taxonomy categories, exposed via a FastAPI backend and React.js web client. Reduced manual classification effort by 70 percent, cutting per-entry processing time from over 10 minutes to under 1 second.',
    image: '/project-2.png',
    repo: 'https://github.com/AnmolGarg8/SAMARTH-AI',
  },
  {
    num: '03',
    name: 'AIRAVAT XDR',
    category: 'AI-Powered Autonomous Cyber Defense',
    tools: ['Python', 'FastAPI', 'React.js', 'Scikit-learn', 'SQL'],
    description: 'Architected an autonomous anomaly-detection system with a 4-member team using agile sprints, combining Isolation Forest statistical modeling with an NLP classifier into a unified FastAPI-based scoring service and React.js client. Achieved under 5 percent false-positive rate with sub-2-second response latency on live data streams, earning National Finalist honors at India Innovates 2026.',
    image: '/project-3.png',
    repo: 'https://github.com/AnmolGarg8/AIRAVAT-XDR',
  },
  {
    num: '04',
    name: 'PulmoCare',
    category: 'Respiratory Deterioration Monitor',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
    description: 'Engineered a dual-sensor respiratory monitoring system combining acoustic and CO2 tracking to flag deterioration 2 to 4 hours before clinical crisis, built for over 300 million COPD patients globally. Built a real-time Canvas 2D dashboard and a 3-tier automated alert escalation system entirely in vanilla JavaScript, without relying on external charting libraries.',
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
