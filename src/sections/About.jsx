import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal', sectionRef.current).forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section">
      <div className="section__divider" />
      <div className="section__inner">
        <span className="section__label reveal">About</span>
        <h2 className="section__heading reveal">
          Who I <span className="grad">Am</span>
        </h2>

        <div className="about-grid">
          <div>
            <p className="about__bio reveal">
              I build intelligent systems at the intersection of{' '}
              <strong>hardware and software</strong>. From ESP32-based IoT
              platforms to NLP-driven AI tools — I engineer{' '}
              <strong>real solutions to real problems</strong>.
            </p>
            <p className="about__bio reveal">
              Recognized as a{' '}
              <strong>Top 10 National Semifinalist at Samsung Solve for Tomorrow 2025</strong>{' '}
              and a <strong>Finalist at India Innovates 2026</strong> — I don't just build
              software, I engineer impact.
            </p>

            <div className="about__stats">
              {[
                { num: '10+', label: 'Projects Built' },
                { num: '2', label: 'National Awards' },
                { num: '5+', label: 'Tech Domains' },
                { num: '∞', label: 'Problems to Solve' },
              ].map((s, i) => (
                <div key={i} className="about__stat card reveal">
                  <div className="about__stat-num">{s.num}</div>
                  <div className="about__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__right reveal">
            <div className="about__terminal">
              <div className="about__terminal-bar">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="terminal-title">anmol@portfolio ~ zsh</span>
              </div>
              <div className="about__terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">›</span>
                  <span className="terminal-cmd">cat</span>
                  <span className="terminal-val"> about.json</span>
                </div>
                <br />
                <div className="terminal-line"><span className="terminal-val">{'{'}</span></div>
                <div className="terminal-line" style={{paddingLeft:'16px'}}>
                  <span className="terminal-key">"name"</span>
                  <span className="terminal-val">: </span>
                  <span className="terminal-str">"Anmol Garg"</span><span className="terminal-val">,</span>
                </div>
                <div className="terminal-line" style={{paddingLeft:'16px'}}>
                  <span className="terminal-key">"role"</span>
                  <span className="terminal-val">: </span>
                  <span className="terminal-str">"Software Engineer & AI Developer"</span><span className="terminal-val">,</span>
                </div>
                <div className="terminal-line" style={{paddingLeft:'16px'}}>
                  <span className="terminal-key">"location"</span>
                  <span className="terminal-val">: </span>
                  <span className="terminal-str">"Delhi, India"</span><span className="terminal-val">,</span>
                </div>
                <div className="terminal-line" style={{paddingLeft:'16px'}}>
                  <span className="terminal-key">"focus"</span>
                  <span className="terminal-val">: [</span>
                  <span className="terminal-str">"AI"</span><span className="terminal-val">, </span>
                  <span className="terminal-str">"IoT"</span><span className="terminal-val">, </span>
                  <span className="terminal-str">"NLP"</span>
                  <span className="terminal-val">],</span>
                </div>
                <div className="terminal-line" style={{paddingLeft:'16px'}}>
                  <span className="terminal-key">"available"</span>
                  <span className="terminal-val">: </span>
                  <span style={{color:'#22c55e'}}>true</span>
                </div>
                <div className="terminal-line"><span className="terminal-val">{'}'}</span></div>
                <br />
                <div className="terminal-line">
                  <span className="terminal-comment"># Building things that think 🧠</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
