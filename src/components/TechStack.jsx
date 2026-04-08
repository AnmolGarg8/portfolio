import { useEffect, useRef } from 'react'

const techItems = [
  { name: 'Python', size: 90 },
  { name: 'Machine Learning', size: 95 },
  { name: 'IoT', size: 85 },
  { name: 'ESP32', size: 80 },
  { name: 'C++', size: 70 },
  { name: 'Java', size: 65 },
  { name: 'NLP', size: 70 },
  { name: 'Firebase', size: 68 },
  { name: 'Flutter', size: 65 },
  { name: 'Android Studio', size: 62 },
  { name: 'Git', size: 55 },
  { name: 'GitHub', size: 55 },
  { name: 'VS Code', size: 52 },
  { name: 'Cybersecurity', size: 58 },
  { name: 'Embedded Systems', size: 72 },
]

const TechStack = () => {
  const canvasRef = useRef(null)
  const ballsRef = useRef([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      // FIX 11: Use section dimensions — not window
      canvas.width = section.clientWidth
      canvas.height = section.clientHeight
    }
    resize()

    const W = canvas.width
    const H = canvas.height
    ballsRef.current = techItems.map((item) => {
      const r = item.size / 2
      return {
        x: r + Math.random() * (W - 2 * r),
        y: r + Math.random() * (H - 2 * r),
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        r,
        name: item.name,
      }
    })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const balls = ballsRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (let i = 0; i < balls.length; i++) {
        const b = balls[i]

        // Mouse repulsion
        const dx = b.x - mx
        const dy = b.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.8
          b.vx += (dx / dist) * force
          b.vy += (dy / dist) * force
        }

        // Ball-ball collision
        for (let j = i + 1; j < balls.length; j++) {
          const b2 = balls[j]
          const ddx = b2.x - b.x
          const ddy = b2.y - b.y
          const d = Math.sqrt(ddx * ddx + ddy * ddy)
          const minDist = b.r + b2.r
          if (d < minDist && d > 0) {
            const nx = ddx / d
            const ny = ddy / d
            const overlap = minDist - d
            b.x -= nx * overlap * 0.5
            b.y -= ny * overlap * 0.5
            b2.x += nx * overlap * 0.5
            b2.y += ny * overlap * 0.5
            const relV = (b.vx - b2.vx) * nx + (b.vy - b2.vy) * ny
            b.vx -= relV * nx * 0.5
            b.vy -= relV * ny * 0.5
            b2.vx += relV * nx * 0.5
            b2.vy += relV * ny * 0.5
          }
        }

        b.vx *= 0.995
        b.vy *= 0.995
        b.x += b.vx
        b.y += b.vy

        // FIX 11: Bounce off canvas (section) dimensions
        if (b.x - b.r < 0) { b.x = b.r; b.vx *= -0.7; }
        if (b.x + b.r > canvas.width) { b.x = canvas.width - b.r; b.vx *= -0.7; }
        if (b.y - b.r < 0) { b.y = b.r; b.vy *= -0.7; }
        if (b.y + b.r > canvas.height) { b.y = canvas.height - b.r; b.vy *= -0.7; }

        // Draw sphere
        const grad = ctx.createRadialGradient(
          b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.1,
          b.x, b.y, b.r
        )
        grad.addColorStop(0, 'rgba(220, 210, 255, 0.95)')
        grad.addColorStop(0.5, 'rgba(180, 170, 240, 0.85)')
        grad.addColorStop(1, 'rgba(120, 100, 200, 0.7)')
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // Glossy highlight
        const hlGrad = ctx.createRadialGradient(
          b.x - b.r * 0.25, b.y - b.r * 0.35, b.r * 0.05,
          b.x - b.r * 0.15, b.y - b.r * 0.2, b.r * 0.5
        )
        hlGrad.addColorStop(0, 'rgba(255, 255, 255, 0.6)')
        hlGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fillStyle = hlGrad
        ctx.fill()

        // Text
        const fontSize = Math.max(10, b.r * 0.35)
        ctx.fillStyle = '#1a1a2e'
        ctx.font = `600 ${fontSize}px 'Geist', sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(b.name, b.x, b.y)
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }
    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      ballsRef.current.forEach(b => {
        const dx = b.x - cx
        const dy = b.y - cy
        const dist = Math.sqrt(dx * dx + dy * dy) || 1
        b.vx += (dx / dist) * 8
        b.vy += (dy / dist) * 8
      })
    }

    const handleResize = () => {
      resize()
      ballsRef.current.forEach(b => {
        b.x = Math.min(Math.max(b.r, b.x), canvas.width - b.r)
        b.y = Math.min(Math.max(b.r, b.y), canvas.height - b.r)
      })
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    canvas.addEventListener('click', onClick)
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      canvas.removeEventListener('click', onClick)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="techstack" ref={sectionRef}>
      {/* FIX 10: Heading above canvas with z-index */}
      <div className="techstack-heading-wrap">
        <span className="techstack-label">Skills & Technologies</span>
        <h2 className="techstack-title">My Techstack</h2>
      </div>
      <canvas
        ref={canvasRef}
        className="bubble-canvas"
      />
    </section>
  )
}

export default TechStack
