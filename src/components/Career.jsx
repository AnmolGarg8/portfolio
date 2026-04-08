import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Career.css'

gsap.registerPlugin(ScrollTrigger)

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
  const yearRefs = useRef([])

  // ENH 5: Year counter animation
  useEffect(() => {
    yearRefs.current.forEach(el => {
      if (!el) return
      const text = el.textContent
      const target = parseInt(text)
      if (isNaN(target)) return // skip "NOW"
      gsap.from({ val: 0 }, {
        val: target,
        duration: 0.9,
        ease: 'power2.out',
        onUpdate: function () {
          el.textContent = Math.round(this.targets()[0].val)
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, [])

  return (
    <section className="career-section">
      <div className="career-container" style={{ width: 'var(--cWidth)', maxWidth: 'var(--cMaxWidth)', margin: 'auto' }}>
        <h2>
          My career <span>&</span> experience
        </h2>
        <div className="career-info">
          {careerData.map((item, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div>
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3
                  className="year-number"
                  ref={el => yearRefs.current[index] = el}
                >
                  {item.year}
                </h3>
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
