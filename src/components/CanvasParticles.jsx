import { useEffect, useRef } from 'react'

export default function CanvasParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const PARTICLE_COUNT = Math.min(Math.floor(width * 0.08), 120)

    const mouse = { x: -9999, y: -9999 }
    const particles = []

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.baseX = this.x
        this.baseY = this.y
        this.size = Math.random() * 1.5 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.5 + 0.1
        this.connections = 0
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > width) this.speedX *= -1
        if (this.y < 0 || this.y > height) this.speedY *= -1

        // Mouse repel
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          const force = (100 - dist) / 100
          this.x += dx * force * 0.03
          this.y += dy * force * 0.03
        }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167,139,250,${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle())

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            const opacity = (1 - dist / 140) * 0.2
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(124,58,237,${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    let rafId
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach(p => { p.update(); p.draw() })
      drawConnections()
      rafId = requestAnimationFrame(animate)
    }
    animate()

    const onMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero__canvas"
      style={{ opacity: 0.7 }}
    />
  )
}
