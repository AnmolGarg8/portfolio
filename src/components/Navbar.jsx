import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isLoaded }) {
  const navRef = useRef(null)
  const linksRef = useRef([])
  const progressRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll effects
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollY > 60)

      if (progressRef.current) {
        progressRef.current.style.width = (scrollY / docH * 100) + '%'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection('#' + entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Entrance animation after preloader
  useEffect(() => {
    if (!isLoaded) return
    gsap.fromTo(linksRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
    )
  }, [isLoaded])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <div ref={progressRef} className="scroll-progress" />
      <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          AG
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                ref={el => linksRef.current[i] = el}
                href={link.href}
                className={activeSection === link.href ? 'active' : ''}
                onClick={e => handleLinkClick(e, link.href)}
                style={{ opacity: 0 }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(p => !p)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => handleLinkClick(e, link.href)}
            style={{ animationDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
