import './Hero.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react'
import CanvasParticles from '../components/CanvasParticles'
import HeroScene from '../components/HeroScene'

const SOCIALS = [
  { icon: <Github size={18} />, href: 'https://github.com/AnmolGarg8', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/anmol-garg2005', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:anmolgarg1605@gmail.com', label: 'Email' },
  { icon: <Phone size={18} />, href: 'tel:+919625652435', label: 'Phone' },
]

export default function Hero({ isLoaded }) {
  const mouseRef = useRef({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const socialRef = useRef(null)
  const scrollRef = useRef(null)
  const statusRef = useRef(null)

  // Track mouse for 3D scene parallax
  useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth, h = window.innerHeight
      mouseRef.current.x = (e.clientX / w - 0.5) * 2
      mouseRef.current.y = (e.clientY / h - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // GSAP entrance after preloader
  useEffect(() => {
    if (!isLoaded) return

    const tl = gsap.timeline({ delay: 0.1 })
    const leftEls = leftRef.current ? Array.from(leftRef.current.querySelectorAll('.ha')) : []
    const rightEls = rightRef.current ? Array.from(rightRef.current.querySelectorAll('.ha')) : []

    if (leftEls.length > 0) {
      tl.fromTo(leftEls,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
      )
    }
    if (rightEls.length > 0) {
      tl.fromTo(rightEls,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
        '<0.05'
      )
    }
    if (socialRef.current) {
      tl.fromTo(socialRef.current,
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      )
    }
    if (statusRef.current) {
      tl.fromTo(statusRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.7)' },
        '-=0.2'
      )
    }
    if (scrollRef.current) {
      tl.fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        '-=0.1'
      )
    }
  }, [isLoaded])

  return (
    <section id="home" ref={sectionRef} className="hero-v2">
      {/* Particle canvas — absolutely positioned behind everything */}
      <CanvasParticles />

      {/* Glow blobs */}
      <div className="hv2__glow hv2__glow--left" />
      <div className="hv2__glow hv2__glow--right" />
      <div className="hv2__glow hv2__glow--top" />

      {/* Social sidebar */}
      <div ref={socialRef} className="hv2__social" style={{ opacity: 0 }}>
        {SOCIALS.map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
            {s.icon}
          </a>
        ))}
        <div className="hv2__social-line" />
      </div>

      {/* 3D scene — absolutely centered, behind text columns */}
      <div className="hv2__scene-wrap">
        {isLoaded && <HeroScene mouseRef={mouseRef} />}
        <div ref={statusRef} className="hv2__badge" style={{ opacity: 0 }}>
          <span className="hv2__badge-dot" />
          Open to Opportunities
        </div>
      </div>

      {/* Three-column layout overlaid on top */}
      <div className="hv2__layout">

        {/* ── LEFT COLUMN ── */}
        <div ref={leftRef} className="hv2__left">
          <p className="hv2__greeting ha">Hello! I'm</p>

          <h1 className="hv2__name ha">
            <span className="hv2__name-line">ANMOL</span>
            <span className="hv2__name-line">GARG</span>
          </h1>

          <div className="hv2__cta ha">
            <a
              href="#contact"
              className="btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <Mail size={14} /> Get in Touch
            </a>
          </div>

          <a
            href="#projects"
            className="hv2__scroll-link ha"
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            View Projects <ArrowDown size={14} />
          </a>
        </div>

        {/* ── CENTER spacer (3D lives behind) ── */}
        <div className="hv2__center-spacer" />

        {/* ── RIGHT COLUMN ── */}
        <div ref={rightRef} className="hv2__right">
          <p className="hv2__role-label ha">A Creative</p>

          <div className="hv2__role-stack ha">
            <span className="hv2__role-back">ENGINEER</span>
            <span className="hv2__role-front">DEVELOPER</span>
          </div>

          <p className="hv2__tagline ha">
            "Engineering Intelligence.<br />Building the Future."
          </p>

          <p className="hv2__oneliner ha">
            I build things that think.
          </p>

          <div className="hv2__contact-mini ha">
            <a href="mailto:anmolgarg1605@gmail.com">anmolgarg1605@gmail.com</a>
            <span className="hv2__location">📍 Delhi, India</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="hv2__scroll" style={{ opacity: 0 }}>
        <span className="hv2__scroll-text">Scroll</span>
        <div className="hv2__scroll-line" />
      </div>
    </section>
  )
}
