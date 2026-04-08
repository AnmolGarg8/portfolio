import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const expand = () => cursor.classList.add('expand')
    const shrink = () => cursor.classList.remove('expand')

    window.addEventListener('mousemove', move)

    const interactives = document.querySelectorAll('a, button, .work__item, .about__card')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return <div id="cursor" ref={cursorRef} />
}
