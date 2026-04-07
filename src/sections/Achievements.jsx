import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    badge: 'National · 2025',
    title: 'Top 10 National Semifinalist — Samsung Solve for Tomorrow',
    desc: 'Selected from 10,000+ student teams nationwide for an IoT-based smart healthcare solution. Competed at national level for Samsung\'s flagship innovation challenge.',
  },
  {
    icon: '🥇',
    badge: 'Finalist · 2026',
    title: 'Finalist — India Innovates 2026',
    desc: 'Selected as a national finalist for developing an AI-powered agricultural disease detection system that helps farmers reduce crop losses by up to 40%.',
  },
  {
    icon: '⚡',
    badge: 'Hackathon · 2024',
    title: '1st Place — Inter-College AI Hackathon',
    desc: 'Built a real-time NLP-powered legal document analyzer in 24 hours. Won first place against 60+ teams for innovation and technical execution quality.',
  },
  {
    icon: '🎓',
    badge: 'Academic · 2024',
    title: 'Merit Scholar — CBSE Board',
    desc: 'Achieved distinction in CBSE Class 12 Board Examination with a focus on Computer Science and Mathematics, demonstrating academic excellence alongside project work.',
  },
  {
    icon: '🔬',
    badge: 'Research · 2025',
    title: 'Published Technical Paper — IoT Healthcare Systems',
    desc: 'Co-authored a research paper on ESP32-based wearable health monitoring systems, presented at a state-level technical symposium.',
  },
  {
    icon: '🚀',
    badge: 'Community · 2024',
    title: 'Open Source Contributor — 500+ GitHub Stars',
    desc: 'Active open source contributor with multiple repositories gaining community traction in the AI tooling and IoT automation space.',
  },
]

export default function Achievements() {
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

      gsap.fromTo('.achievement-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.achievements-grid', start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="achievements" ref={sectionRef} className="section" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="section__divider" />
      <div className="section__inner">
        <span className="section__label reveal">Achievements</span>
        <h2 className="section__heading reveal">
          What I've <span className="grad">Won</span>
        </h2>
        <p className="section__desc reveal">
          Awards, recognitions, and milestones earned through relentless building and competing.
        </p>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="achievement-card card">
              <div className="achievement-card__icon">{a.icon}</div>
              <div className="achievement-card__badge">{a.badge}</div>
              <div className="achievement-card__title">{a.title}</div>
              <div className="achievement-card__desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
