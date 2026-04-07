import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const fillRef = useRef(null)
  const lettersRef = useRef([])
  const panelTopRef = useRef(null)
  const panelBottomRef = useRef(null)

  useEffect(() => {
    // Fallback timeout — if GSAP fails for any reason, still call onComplete
    const fallback = setTimeout(() => {
      if (onComplete) onComplete()
    }, 4000)

    const letters = lettersRef.current.filter(Boolean)
    const fill = fillRef.current
    const panelTop = panelTopRef.current
    const panelBottom = panelBottomRef.current
    const container = containerRef.current

    if (!container || !fill || !panelTop || !panelBottom || letters.length === 0) {
      clearTimeout(fallback)
      if (onComplete) onComplete()
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(fallback)
        if (onComplete) onComplete()
        container.style.display = 'none'
      }
    })

    // Animate letters in
    tl.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.2,
    })

    // Animate progress bar
    tl.to(fill, {
      width: '100%',
      duration: 1.4,
      ease: 'power2.inOut',
    }, '-=0.3')

    // Split panels exit
    tl.to(panelTop, {
      y: '-100%',
      duration: 0.9,
      ease: 'power4.inOut',
      delay: 0.1,
    }, '+=0.1')

    tl.to(panelBottom, {
      y: '100%',
      duration: 0.9,
      ease: 'power4.inOut',
    }, '<')

    // Fade out whole container
    tl.to(container, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut',
    }, '-=0.2')

    return () => {
      tl.kill()
      clearTimeout(fallback)
    }
  }, [onComplete])

  return (
    <div ref={containerRef} className="preloader">
      <div className="preloader__logo">
        {['A', 'G'].map((char, i) => (
          <span
            key={i}
            ref={el => { lettersRef.current[i] = el }}
            style={{ transform: 'translateY(40px)', opacity: 0 }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="preloader__bar-wrap">
        <div ref={fillRef} className="preloader__bar-fill" />
      </div>
      <div ref={panelTopRef} className="preloader__panel-top" />
      <div ref={panelBottomRef} className="preloader__panel-bottom" />
    </div>
  )
}
