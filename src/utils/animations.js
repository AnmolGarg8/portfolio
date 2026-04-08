import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── Smooth Scroll via GSAP ScrollSmoother-like approach ─── */
export function initSmoothScroll() {
  document.body.style.overflowY = 'auto'
  ScrollTrigger.defaults({ toggleActions: 'play none none reverse' })
  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}

/* ─── ENH 2: SplitText Animation Function ─── */
function animateHeading(selector, triggerEl, delay = 0) {
  const el = document.querySelector(selector)
  if (!el) return
  const text = el.innerText // use innerText to handle nested spans if any
  el.innerHTML = ''
  text.split('').forEach(char => {
    const span = document.createElement('span')
    span.style.display = 'inline-block'
    span.textContent = char === ' ' ? '\u00A0' : char
    el.appendChild(span)
  })
  gsap.from(el.querySelectorAll('span'), {
    y: 60, opacity: 0, duration: 0.75,
    stagger: 0.03, ease: 'power4.out', delay,
    scrollTrigger: triggerEl ? {
      trigger: triggerEl, start: 'top 80%',
      toggleActions: 'play none none none'
    } : null
  })
}

/* ─── Landing / Hero entrance animations ─── */
export function initLandingAnimations() {
  gsap.to('body', {
    backgroundColor: '#0b080c',
    duration: 0.5,
    delay: 0.2,
  })
  
  gsap.fromTo(
    ['.header', '.icons-section', '.nav-fade'],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: 'power1.inOut', delay: 0.1 }
  )

  // ENH 2: Hero headings
  animateHeading('.name-line:nth-child(1)', null, 0.3)
  animateHeading('.name-line:nth-child(2)', null, 0.4)

  gsap.fromTo(
    '.landing-intro h2',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.2 }
  )

  gsap.fromTo(
    '.landing-info h3',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.5 }
  )

  gsap.fromTo(
    '.landing-h2-info',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.inOut', delay: 0.6 }
  )
  gsap.fromTo(
    '.landing-info-h2',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power1.inOut', delay: 0.9 }
  )

  gsap.fromTo(
    '.landing-image',
    { opacity: 0, scale: 0.85 },
    { opacity: 1, scale: 1, duration: 1.4, ease: 'back.out(1.2)', delay: 0.3 }
  )
}

/* ─── Scroll-triggered animations for all sections ─── */
export function initScrollAnimations() {
  // ENH 2: Splitting major headings
  animateHeading('.whatIDO h2', '.whatIDO')
  animateHeading('.work-section h2', '.work-section')
  animateHeading('.contact-heading', '.contact-section')

  // ENH 7: Section Reveal for ALL sections
  gsap.utils.toArray('section > *').forEach((el, i) => {
    // Avoid re-animating things handled by SplitText or other specific triggers
    if (el.tagName === 'H2' && (el.closest('.whatIDO') || el.closest('.work-section') || el.closest('.contact-section'))) return
    
    gsap.from(el, {
      y: 50, opacity: 0, duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  })

  // Career timeline (if we still want the scroll trigger for the items)
  gsap.fromTo('.career-info-box', 
    { opacity: 0, y: 40 }, 
    { 
      opacity: 1, y: 0, stagger: 0.15, duration: 0.5,
      scrollTrigger: { trigger: '.career-info', start: 'top 80%' }
    }
  )

  // TechStack
  gsap.fromTo('.techstack-heading-wrap',
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.techstack', start: 'top 80%' }
    }
  )
}
