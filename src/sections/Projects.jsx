import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    num: '01',
    name: 'Smart IoT Health Monitor',
    desc: 'ESP32-based wearable platform for real-time biometric monitoring — heart rate, SpO2, temperature — with cloud dashboard and NLP-powered symptom analysis.',
    tags: ['ESP32', 'Python', 'MQTT', 'TensorFlow', 'Firebase', 'React'],
    link: 'https://github.com/AnmolGarg8',
  },
  {
    num: '02',
    name: 'AI-Powered Crop Disease Detector',
    desc: 'Computer vision model (CNN + transfer learning) achieving 94% accuracy on plant disease classification from leaf images. Deployed as mobile-friendly web app.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'React Native'],
    link: 'https://github.com/AnmolGarg8',
  },
  {
    num: '03',
    name: 'NLP Legal Document Analyzer',
    desc: 'LLM-powered tool for extracting key clauses, obligations, and risks from legal contracts. Reduces review time by 70% using spaCy + LangChain pipeline.',
    tags: ['Python', 'LangChain', 'spaCy', 'OpenAI', 'Next.js', 'MongoDB'],
    link: 'https://github.com/AnmolGarg8',
  },
  {
    num: '04',
    name: 'Smart Home Automation Hub',
    desc: 'Centralized IoT hub connecting 20+ sensors and actuators via MQTT. Voice-controlled via custom NLP engine. Samsung Solve for Tomorrow 2025 project.',
    tags: ['ESP32', 'Raspberry Pi', 'MQTT', 'Node.js', 'Python', 'React'],
    link: 'https://github.com/AnmolGarg8',
  },
  {
    num: '05',
    name: 'Real-Time Code Collaboration IDE',
    desc: 'Browser-based collaborative code editor with WebSocket sync, multi-language support, AI autocomplete, and integrated terminal — built for hackathons.',
    tags: ['React', 'Node.js', 'WebSockets', 'Monaco Editor', 'Docker'],
    link: 'https://github.com/AnmolGarg8',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal', sectionRef.current).forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
          }
        )
      })

      // Project items stagger
      gsap.fromTo('.project-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-list', start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="section">
      <div className="section__divider" />
      <div className="section__inner">
        <span className="section__label reveal">Projects</span>
        <h2 className="section__heading reveal">
          What I've <span className="grad">Built</span>
        </h2>
        <p className="section__desc reveal">
          Selected projects that showcase my engineering range — from embedded systems to full-stack AI applications.
        </p>

        <div className="projects-list">
          {PROJECTS.map((p) => (
            <a
              key={p.num}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item"
              style={{ textDecoration: 'none' }}
            >
              <div className="project-item__num">{p.num}</div>
              <div className="project-item__body">
                <div className="project-item__name">{p.name}</div>
                <div className="project-item__desc">{p.desc}</div>
                <div className="project-item__tags">
                  {p.tags.map(t => (
                    <span key={t} className="project-item__tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-item__arrow">
                <ArrowUpRight size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
