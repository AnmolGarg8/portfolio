import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Linkedin, Phone, MapPin, Send, Github } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CONTACT_LINKS = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'anmolgarg1605@gmail.com',
    href: 'mailto:anmolgarg1605@gmail.com',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/anmol-garg2005',
    href: 'https://linkedin.com/in/anmol-garg2005',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/AnmolGarg8',
    href: 'https://github.com/AnmolGarg8',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 9625652435',
    href: 'tel:+919625652435',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Delhi, India',
    href: null,
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

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
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate form submission
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1500)
  }

  return (
    <section id="contact" ref={sectionRef} className="section" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="section__divider" />
      <div className="section__inner">
        <span className="section__label reveal">Contact</span>

        <div className="contact-wrap">
          {/* Left */}
          <div>
            <h2 className="contact__big-text reveal">
              Let's<br />
              <span className="grad">Work</span><br />
              Together.
            </h2>
            <p className="contact__sub reveal">
              I'm open to opportunities, collaborations, and interesting problems.
              Whether you want to build something great or just chat — I'm in.
            </p>

            <div className="contact__links reveal">
              {CONTACT_LINKS.map((c, i) => {
                const Wrapper = c.href ? 'a' : 'div'
                const props = c.href
                  ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
                  : {}
                return (
                  <Wrapper key={i} className="contact__link-item" {...props}>
                    <span className="icon">{c.icon}</span>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>
                        {c.label}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 500 }}>{c.value}</div>
                    </div>
                  </Wrapper>
                )
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Anmol Garg"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="hello@example.com"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  required
                />
              </div>
              <button
                type="submit"
                className="form-submit btn-primary"
                disabled={sending || sent}
                style={{ opacity: sending ? 0.7 : 1 }}
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : sending ? (
                  <>Sending...</>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
