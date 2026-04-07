import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EDUCATION = [
  {
    year: '2023 – Present',
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'Delhi Technological University (DTU), Delhi',
    desc: 'Specializing in AI & Machine Learning. Active in technical clubs, hackathons, and research initiatives. CGPA: pursuing excellence.',
  },
  {
    year: '2021 – 2023',
    degree: 'Class XII — CBSE (Science: PCM + CS)',
    school: 'Ryan International School, Delhi',
    desc: 'Merit Scholar. Focused on Computer Science, Mathematics, and Physics. Developed first embedded system project during this period.',
  },
  {
    year: '2019 – 2021',
    degree: 'Class X — CBSE',
    school: 'Ryan International School, Delhi',
    desc: 'Graduated with distinction. First exposure to programming via Python and built an automated attendance system using face recognition.',
  },
]

const CERTS = [
  { name: 'TensorFlow Developer Certificate', org: 'Google', year: '2024' },
  { name: 'Machine Learning Specialization', org: 'Coursera / DeepLearning.AI', year: '2024' },
  { name: 'AWS Cloud Practitioner', org: 'Amazon Web Services', year: '2024' },
  { name: 'Full Stack Web Development', org: 'The Odin Project / fCC', year: '2023' },
]

export default function Education() {
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

      gsap.fromTo('.education-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.education-timeline', start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="section">
      <div className="section__divider" />
      <div className="section__inner">
        <span className="section__label reveal">Education</span>
        <h2 className="section__heading reveal">
          My <span className="grad">Journey</span>
        </h2>
        <p className="section__desc reveal">
          The academic path that shaped my engineering mindset.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <div
              className="section__label reveal"
              style={{ marginBottom: '32px', fontSize: '11px' }}
            >
              Academic
            </div>
            <div className="education-timeline">
              {EDUCATION.map((e, i) => (
                <div key={i} className="education-item">
                  <div className="education-item__year">{e.year}</div>
                  <div className="education-item__degree">{e.degree}</div>
                  <div className="education-item__school">{e.school}</div>
                  <div className="education-item__desc">{e.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="section__label reveal"
              style={{ marginBottom: '32px', fontSize: '11px' }}
            >
              Certifications
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {CERTS.map((c, i) => (
                <div
                  key={i}
                  className="about__stat card reveal"
                  style={{ borderRadius: '14px', padding: '20px 24px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {c.name}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{c.org}</div>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--accent-purple)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {c.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
