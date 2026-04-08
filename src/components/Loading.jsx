import { useEffect, useRef } from 'react'
import './styles/Loading.css'

const Loading = ({ isLoaded }) => {
  const counterRef = useRef(null)

  useEffect(() => {
    if (!counterRef.current) return
    let count = 0
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 8) + 2
      if (count >= 100) {
        count = 100
        clearInterval(interval)
      }
      if (counterRef.current) {
        counterRef.current.textContent = count
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`loading-screen ${isLoaded ? 'loading-hide' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">AG</div>
        <div className="loading-bar-container">
          <div className={`loading-bar ${isLoaded ? 'loading-bar-full' : ''}`} />
        </div>
        <div className="loading-counter">
          <span ref={counterRef}>0</span>
          <span>%</span>
        </div>
      </div>
    </div>
  )
}

export default Loading
