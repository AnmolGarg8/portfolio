import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const rafRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ringEl = ringRef.current
    if (!dot || !ringEl) return

    // Hide on touch devices
    if ('ontouchstart' in window) {
      dot.style.display = 'none'
      ringEl.style.display = 'none'
      return
    }

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    const onMouseDown = () => {
      dot.style.transform = 'translate(-50%,-50%) scale(0.7)'
      ringEl.style.transform = 'translate(-50%,-50%) scale(0.85)'
    }

    const onMouseUp = () => {
      dot.style.transform = 'translate(-50%,-50%) scale(1)'
      ringEl.style.transform = 'translate(-50%,-50%) scale(1)'
    }

    const onMouseEnterInteractive = (e) => {
      const target = e.currentTarget
      const isHeroName = target.classList.contains('hero__name')
      dot.style.width = '0px'
      dot.style.height = '0px'
      if (isHeroName) {
        ringEl.style.width = '120px'
        ringEl.style.height = '120px'
        ringEl.style.background = 'rgba(6,182,212,0.07)'
        ringEl.style.borderColor = 'rgba(124,58,237,0.9)'
      } else {
        ringEl.style.width = '80px'
        ringEl.style.height = '80px'
        ringEl.style.background = 'rgba(124,58,237,0.1)'
        ringEl.style.borderColor = 'rgba(124,58,237,0.9)'
      }
    }

    const onMouseLeaveInteractive = () => {
      dot.style.width = '10px'
      dot.style.height = '10px'
      ringEl.style.width = '44px'
      ringEl.style.height = '44px'
      ringEl.style.background = 'transparent'
      ringEl.style.borderColor = 'rgba(124,58,237,0.7)'
    }

    // RAF loop for ring lerp
    const lerp = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      ringEl.style.left = ring.current.x + 'px'
      ringEl.style.top = ring.current.y + 'px'
      rafRef.current = requestAnimationFrame(lerp)
    }
    rafRef.current = requestAnimationFrame(lerp)

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)

    const selectors = 'a, button, .card, h1, h2, h3, .skill-card, .achievement-card, .project-item, .contact__link-item, .about__stat, .hero__name'
    const interactives = document.querySelectorAll(selectors)

    interactives.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll(selectors)
      newInteractives.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
        el.addEventListener('mouseenter', onMouseEnterInteractive)
        el.addEventListener('mouseleave', onMouseLeaveInteractive)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  return createPortal(
    <>
      <div id="cursor-dot" ref={dotRef} style={{ left: '-100px', top: '-100px' }} />
      <div id="cursor-ring" ref={ringRef} style={{ left: '-100px', top: '-100px' }} />
    </>,
    document.body
  )
}
