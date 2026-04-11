import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── Smooth Scroll via GSAP ScrollSmoother-like approach ─── */
export function initSmoothScroll() {
  // Simple smooth scroll using native + GSAP ticker
  document.body.style.overflowY = 'auto'
  ScrollTrigger.defaults({ toggleActions: 'play none none reverse' })
  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}

/* ─── Landing / Hero entrance animations ─── */
export function initLandingAnimations() {
  // Animate background color
  gsap.to('body', {
    backgroundColor: '#0b080c',
    duration: 0.5,
    delay: 0.2,
  })
  // Navbar + social icons fade in
  gsap.fromTo(
    ['.header', '.icons-section', '.nav-fade'],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: 'power1.inOut', delay: 0.1 }
  )
  // Landing intro text — split char animation
  animateTextIn('.landing-intro h2', 0.3)
  animateTextIn('.landing-intro h1', 0.4)
  animateTextIn('.landing-info h3', 0.5)

  // Landing role titles
  gsap.fromTo(
    '.landing-h2-info',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.inOut', delay: 0.5 }
  )
  gsap.fromTo(
    '.landing-info-h2',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power1.inOut', delay: 0.8 }
  )

  // Character image entrance
  gsap.fromTo(
    '.landing-image',
    { opacity: 0, scale: 0.85 },
    { opacity: 1, scale: 1, duration: 1.4, ease: 'back.out(1.2)', delay: 0.3 }
  )

  // Character rim glow
  gsap.fromTo(
    '.character-rim',
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1.4, duration: 2, ease: 'power2.out', delay: 0.8 }
  )
}

function animateTextIn(selector, delay = 0) {
  const el = document.querySelector(selector)
  if (!el) return
  const text = el.textContent || ''
  el.innerHTML = ''
  
  const wrapper = document.createElement('span')
  wrapper.style.display = 'inline-block'
  wrapper.style.overflow = 'hidden'

  const fragment = document.createDocumentFragment()

  text.split('').forEach((char, i) => {
    const span = document.createElement('span')
    span.textContent = char === ' ' ? '\u00a0' : char
    span.style.display = 'inline-block'
    span.style.opacity = '0'
    span.style.transform = 'translateY(80px)'
    span.style.filter = 'blur(5px)'
    fragment.appendChild(span)

    gsap.to(span, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power3.inOut',
      delay: delay + i * 0.025,
    })
  })
  
  wrapper.appendChild(fragment)
  el.appendChild(wrapper)
}

/* ─── Scroll-triggered animations for all sections ─── */
export function initScrollAnimations() {
  // About section
  gsap.fromTo('.about-me', 
    { opacity: 0, y: 60 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.about-section', start: 'top 70%' }
    }
  )

  // What I Do section
  gsap.fromTo('.whatIDO .what-box:first-child h2',
    { opacity: 0, x: -80 },
    {
      opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '.whatIDO', start: 'top 60%' }
    }
  )
  gsap.fromTo('.what-content',
    { opacity: 0, y: 60 },
    {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.what-box-in', start: 'top 70%' }
    }
  )

  // Career timeline
  const careerTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.career-section',
      start: 'top 40%',
      end: '80% center',
      scrub: true,
    }
  })
  careerTl
    .fromTo('.career-timeline', { maxHeight: '0%', opacity: 0 }, { maxHeight: '100%', opacity: 1, duration: 1 }, 0)
    .fromTo('.career-info-box', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.15, duration: 0.5 }, 0)

  // Career heading
  gsap.fromTo('.career-section h2',
    { opacity: 0, y: 60 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.career-section', start: 'top 70%' }
    }
  )

  // Work section
  gsap.fromTo('.work-section h2',
    { opacity: 0, y: 60 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.work-section', start: 'top 70%' }
    }
  )
  gsap.fromTo('.work-box',
    { opacity: 0, y: 80 },
    {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: '.work-flex', start: 'top 70%' }
    }
  )

  // TechStack
  gsap.fromTo('.techstack h2',
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.techstack', start: 'top 80%' }
    }
  )

  // Contact
  gsap.fromTo('.contact-section h3',
    { opacity: 0, y: 60 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-section', start: 'top 70%' }
    }
  )
  gsap.fromTo('.contact-flex',
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-flex', start: 'top 80%' }
    }
  )
}
