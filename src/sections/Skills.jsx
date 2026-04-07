import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = {
  'Languages & Core': [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'C / C++', icon: '⚙️' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Bash', icon: '💻' },
  ],
  'AI & Machine Learning': [
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'scikit-learn', icon: '📊' },
    { name: 'NLP / spaCy', icon: '💬' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'LangChain', icon: '🔗' },
  ],
  'Web & Full Stack': [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'Express', icon: '🚀' },
    { name: 'Next.js', icon: '◼️' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'MongoDB', icon: '🍃' },
  ],
  'Hardware & IoT': [
    { name: 'ESP32', icon: '📡' },
    { name: 'Arduino', icon: '🔌' },
    { name: 'Raspberry Pi', icon: '🥧' },
    { name: 'MQTT', icon: '📨' },
    { name: 'Sensors', icon: '🌡️' },
    { name: 'PCB Design', icon: '🔧' },
  ],
  'Tools & DevOps': [
    { name: 'Git / GitHub', icon: '🐙' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'AWS', icon: '☁️' },
  ],
}

export default function Skills() {
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

      // Stagger skill cards per category
      document.querySelectorAll('.skills-grid').forEach(grid => {
        gsap.fromTo(grid.querySelectorAll('.skill-card'),
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out',
            scrollTrigger: { trigger: grid, start: 'top 88%', toggleActions: 'play none none none' }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="section" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="section__divider" />
      <div className="section__inner">
        <span className="section__label reveal">Skills</span>
        <h2 className="section__heading reveal">
          What I <span className="grad">Know</span>
        </h2>
        <p className="section__desc reveal">
          A toolkit built through years of building real systems — from embedded hardware to intelligent software.
        </p>

        <div className="skills-categories">
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat}>
              <div className="skills-category__title reveal">{cat}</div>
              <div className="skills-grid">
                {items.map((skill, i) => (
                  <div key={i} className="skill-card card">
                    <span className="skill-card__icon">{skill.icon}</span>
                    <span className="skill-card__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
