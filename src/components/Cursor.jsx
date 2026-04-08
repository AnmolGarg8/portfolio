import { useEffect, useRef } from 'react'
import './styles/Cursor.css'

const Cursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Hide on touch devices
    if ('ontouchstart' in window) {
      dot.style.display = 'none'
      ring.style.display = 'none'
      return
    }

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animateCursor)
    }
    animateCursor()

    document.addEventListener('mousemove', onMouseMove)

    // Hover state — expand ring on interactive elements
    const attachHovers = () => {
      document.querySelectorAll('a, button, h1, h2, .work-box, .name-line').forEach(el => {
        el.addEventListener('mouseenter', () => {
          dot.style.transform = 'translate(-50%,-50%) scale(0)'
          ring.style.width = '80px'
          ring.style.height = '80px'
          ring.style.background = 'rgba(108,99,255,0.12)'
          ring.style.borderColor = 'rgba(108,99,255,1)'
        })
        el.addEventListener('mouseleave', () => {
          dot.style.transform = 'translate(-50%,-50%) scale(1)'
          ring.style.width = '44px'
          ring.style.height = '44px'
          ring.style.background = 'transparent'
          ring.style.borderColor = 'rgba(108,99,255,0.8)'
        })
      })
    }

    // Attach after slight delay so all DOM is ready
    const timer = setTimeout(attachHovers, 500)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}

export default Cursor
