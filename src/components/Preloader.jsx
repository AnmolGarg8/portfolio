import { useEffect, useState } from 'react'

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => {
          setHiding(true)
          setTimeout(onComplete, 800)
        }, 300)
      }
      setCount(current)
    }, 60)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className={`preloader${hiding ? ' hidden' : ''}`}>
      <p className="preloader__text">A Creative Developer</p>
      <span className="preloader__count">{count}%</span>
    </div>
  )
}
