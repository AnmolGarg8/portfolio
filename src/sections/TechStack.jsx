import { useEffect, useRef } from 'react'

const TECHS = [
  'React', 'TypeScript', 'JavaScript', 'Next.js',
  'Node.js', 'Three.js', 'GSAP', 'Tailwind CSS',
  'MongoDB', 'PostgreSQL', 'GraphQL', 'Firebase',
  'Figma', 'Blender', 'Git', 'Docker',
]

function TechBalls() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const W = canvas.parentElement.clientWidth
      const H = canvas.parentElement.clientHeight
      canvas.width = W
      canvas.height = H
      // Re-clamp ball positions after resize
      balls.forEach((b) => {
        b.x = Math.min(Math.max(b.x, b.r), W - b.r)
        b.y = Math.min(Math.max(b.y, b.r), H - b.r)
      })
    }

    // Init balls with positions well inside bounds
    const W0 = canvas.parentElement.clientWidth
    const H0 = canvas.parentElement.clientHeight
    canvas.width = W0
    canvas.height = H0

    const balls = TECHS.map((tech) => {
      const r = Math.random() * 24 + 34
      return {
        x: r + Math.random() * (W0 - r * 2),
        y: r + Math.random() * (H0 - r * 2),
        r,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        label: tech,
      }
    })

    window.addEventListener('resize', resize)
    let raf

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      balls.forEach((b) => {
        b.x += b.vx
        b.y += b.vy

        // Bounce strictly inside
        if (b.x - b.r < 0) { b.x = b.r; b.vx = Math.abs(b.vx) }
        if (b.x + b.r > W) { b.x = W - b.r; b.vx = -Math.abs(b.vx) }
        if (b.y - b.r < 0) { b.y = b.r; b.vy = Math.abs(b.vy) }
        if (b.y + b.r > H) { b.y = H - b.r; b.vy = -Math.abs(b.vy) }

        // Ball gradient (matches moncy.dev pearlescent white/lilac spheres)
        const grad = ctx.createRadialGradient(
          b.x - b.r * 0.3, b.y - b.r * 0.35, b.r * 0.05,
          b.x, b.y, b.r
        )
        grad.addColorStop(0, '#ffffff')
        grad.addColorStop(0.35, '#ddd8ff')
        grad.addColorStop(0.75, '#b8b0f0')
        grad.addColorStop(1, '#9690d8')

        ctx.save()
        ctx.shadowColor = 'rgba(124, 111, 247, 0.25)'
        ctx.shadowBlur = 18
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()

        // Label
        ctx.save()
        ctx.fillStyle = '#1a1a2e'
        ctx.font = `600 ${Math.max(9, b.r * 0.3)}px Geist, sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(b.label, b.x, b.y)
        ctx.restore()
      })

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  )
}

export default function TechStack() {
  return (
    <section className="techstack" id="techstack">
      <p className="techstack__label">02 Tech Stack</p>
      <h2 className="techstack__title reveal">Technologies I Work With</h2>

      <div className="techstack__balls">
        <TechBalls />
      </div>
    </section>
  )
}
