import './styles/Work.css'

const projects = [
  {
    num: '01',
    name: 'NoteNetra',
    category: 'IoT Fintech Platform',
    tools: ['ESP32', 'IoT', 'Firebase', 'Cloud Dashboard', 'Fintech'],
    description: 'An ESP32-powered IoT system capturing offline cash transactions and syncing to a cloud dashboard — converting real cashflow into credit insights for MSMEs and farmers.',
    image: '/project-1.png',
  },
  {
    num: '02',
    name: 'Smart Vape Detection',
    category: 'Sensor-Based Alert Engine',
    tools: ['Hardware', 'MQ Sensors', 'Embedded C', 'Buzzer Alert'],
    description: 'A real-time sensor-based detection system identifying vape smoke in restricted environments, triggering instant buzzer alerts to notify authorities.',
    image: '/project-2.png',
  },
  {
    num: '03',
    name: 'AlKosh · SAMARTH-AI',
    category: 'AI-Powered MSME Platform',
    tools: ['NLP', 'Python', 'REST API', 'Semantic Similarity', 'AI'],
    description: 'An AI-driven MSME onboarding engine that classifies unstructured product descriptions into structured enterprise taxonomy using NLP and semantic similarity models.',
    image: '/project-3.png',
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
                <div>
                  <div className="work-info">
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
              <div className="work-info">
                <h4>Tools and features</h4>
                <p>{project.tools.join(', ')}</p>
              </div>
              <div className="work-image">
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
