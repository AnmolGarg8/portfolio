import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CharacterSystem() {
  const wrapperRef = useRef(null)
  const heroImgRef = useRef(null)
  const aboutImgRef = useRef(null)
  const workingImgRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const heroImg = heroImgRef.current
    const aboutImg = aboutImgRef.current
    const workingImg = workingImgRef.current
    const glow = glowRef.current

    if (!wrapper || !heroImg || !aboutImg || !workingImg) return

    // ── Initial state ──────────────────────────────────────
    gsap.set(aboutImg, { opacity: 0 })
    gsap.set(workingImg, { opacity: 0 })

    // ── TRANSITION 1: Hero → About ─────────────────────────
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top 95%',
        end: 'top 10%',
        scrub: 1.8,
      }
    })

    tl1
      .to(wrapper, {
        left: '17%',
        xPercent: 0,
        width: 'clamp(200px, 25vw, 360px)',
        ease: 'power2.inOut',
        duration: 1,
      }, 0)
      .to(heroImg, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.inOut',
      }, 0.1)
      .to(aboutImg, {
        opacity: 1,
        duration: 0.5,
        ease: 'power1.inOut',
      }, 0.2)
      .to(glow, {
        width: '55%',
        opacity: 0.65,
        duration: 1,
      }, 0)

    // ── TRANSITION 2: About → What I Do ────────────────────
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#whatido',
        start: 'top 95%',
        end: 'top 10%',
        scrub: 1.8,
      }
    })

    tl2
      .to(wrapper, {
        left: '20%',
        width: 'clamp(220px, 27vw, 390px)',
        ease: 'power1.inOut',
        duration: 1,
      }, 0)
      .to(aboutImg, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.inOut',
      }, 0.1)
      .to(workingImg, {
        opacity: 1,
        duration: 0.5,
        ease: 'power1.inOut',
      }, 0.2)

    // ── TRANSITION 3: What I Do → Experience (exit) ────────
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 85%',
        end: 'top 35%',
        scrub: 1.4,
      }
    })

    tl3
      .to(wrapper, {
        left: '-30%',
        opacity: 0,
        ease: 'power2.in',
        duration: 1,
      }, 0)
      .to(workingImg, {
        opacity: 0,
        duration: 0.6,
      }, 0)

    // ── Cleanup ─────────────────────────────────────────────
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      id="character-wrapper"
      style={{
        position: 'fixed',
        zIndex: 50,
        pointerEvents: 'none',
        willChange: 'transform, opacity, left, width',
        left: '50%',
        bottom: 0,
        width: 'clamp(280px, 35vw, 520px)',
        transform: 'translateX(-50%)',
      }}
    >
      {/* POSE 1: Hero — standing upright */}
      <img
        ref={heroImgRef}
        src="/character-hero.png"
        alt="Developer character"
        style={{
          position: 'absolute',
          bottom: 0, left: 0,
          width: '100%', height: 'auto',
          objectFit: 'contain',
          animation: 'charIdle 4.2s ease-in-out infinite',
        }}
      />

      {/* POSE 2: About — sitting casual */}
      <img
        ref={aboutImgRef}
        src="/character-about.png"
        alt="Developer character sitting"
        style={{
          position: 'absolute',
          bottom: 0, left: 0,
          width: '100%', height: 'auto',
          objectFit: 'contain',
          opacity: 0,
          animation: 'charIdle 4.5s ease-in-out infinite 0.3s',
        }}
      />

      {/* POSE 3: Working — seated at desk */}
      <img
        ref={workingImgRef}
        src="/character-working.png"
        alt="Developer working"
        style={{
          position: 'absolute',
          bottom: 0, left: 0,
          width: '100%', height: 'auto',
          objectFit: 'contain',
          opacity: 0,
          animation: 'charIdle 5s ease-in-out infinite 0.6s',
        }}
      />

      {/* Ground glow */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          bottom: -8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '65%',
          height: 20,
          background: 'radial-gradient(ellipse, rgba(108,99,255,0.65) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(8px)',
        }}
      />
    </div>
  )
}
