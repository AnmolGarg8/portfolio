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

    // ── Initial state ──────────────────────────────────────
    // Hero image: fully visible
    // About + Working images: invisible
    gsap.set(aboutImg, { opacity: 0 })
    gsap.set(workingImg, { opacity: 0 })

    // ── TRANSITION 1: Hero → About ─────────────────────────
    // Trigger: when #about section enters viewport
    // Effect: hero image fades out, about image fades in
    //         wrapper moves from center to left side
    //         wrapper shrinks slightly

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top 90%',
        end: 'top 15%',
        scrub: 1.8,
      }
    })

    tl1
      // Move wrapper from hero center position to about left position
      .to(wrapper, {
        left: '16%',
        width: 'clamp(180px, 24vw, 340px)',
        xPercent: 0,
        ease: 'power1.inOut',
        duration: 1,
      }, 0)
      // Crossfade: hero image fades out
      .to(heroImg, {
        opacity: 0,
        duration: 0.6,
        ease: 'power1.inOut',
      }, 0)
      // Crossfade: about image fades in
      .to(aboutImg, {
        opacity: 1,
        duration: 0.6,
        ease: 'power1.inOut',
      }, 0.1)
      // Glow shrinks slightly
      .to(glow, {
        width: '50%',
        opacity: 0.7,
        duration: 1,
      }, 0)

    // ── TRANSITION 2: About → What I Do ────────────────────
    // Trigger: when #whatido section enters viewport
    // Effect: about image fades out, working image fades in
    //         wrapper stays on left, slightly repositioned

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#whatido',
        start: 'top 90%',
        end: 'top 15%',
        scrub: 1.8,
      }
    })

    tl2
      // Reposition slightly for working section layout
      .to(wrapper, {
        left: '22%',
        width: 'clamp(200px, 28vw, 400px)',
        ease: 'power1.inOut',
        duration: 1,
      }, 0)
      // About image fades out
      .to(aboutImg, {
        opacity: 0,
        duration: 0.6,
        ease: 'power1.inOut',
      }, 0)
      // Working image fades in
      .to(workingImg, {
        opacity: 1,
        duration: 0.6,
        ease: 'power1.inOut',
      }, 0.15)

    // ── TRANSITION 3: What I Do → Experience (exit) ────────
    // Character slides off left and fully disappears

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.career-section', // Using .career-section since #experience isn't guaranteed
        start: 'top 90%',
        end: 'top 30%',
        scrub: 1.5,
      }
    })

    tl3
      .to(wrapper, {
        left: '-30%',
        opacity: 0,
        ease: 'power1.in',
        duration: 1,
      }, 0)
      .to(workingImg, {
        opacity: 0,
        duration: 0.5,
      }, 0)

    // ── Cleanup ─────────────────────────────────────────────
    return () => {
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
          animation: 'charFloat 4.2s ease-in-out infinite',
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
          animation: 'charFloat 4.5s ease-in-out infinite 0.3s',
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
          animation: 'charFloat 5s ease-in-out infinite 0.6s',
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
