import { useState } from 'react'
import './styles/WhatIDo.css'

const WhatIDo = () => {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="whatIDO">
      <div className="what-box">
        <h2>WHAT I DO</h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          {/* Card 1 — DEVELOP */}
          <div
            className={`what-content ${activeCard === 0 ? 'what-content-active' : 'what-sibling'}`}
            onMouseEnter={() => setActiveCard(0)}
          >
            <div className="what-corner" />
            <div className="what-border1"><svg viewBox="0 0 450 1" preserveAspectRatio="none"><line x1="0" y1="0.5" x2="450" y2="0.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4"/></svg></div>
            <div className="what-border2"><svg viewBox="0 0 1 500" preserveAspectRatio="none"><line x1="0.5" y1="0" x2="0.5" y2="500" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4"/></svg></div>
            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>DESCRIPTION</h4>
              <p>Started building with Python and C++, now I craft intelligent systems with ESP32, Firebase, NLP models... and a lot of curiosity!</p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <span className="what-tags">Python</span>
                <span className="what-tags">C++</span>
                <span className="what-tags">ESP32</span>
                <span className="what-tags">Firebase</span>
                <span className="what-tags">NLP</span>
              </div>
            </div>
            <div className="what-arrow" />
          </div>

          {/* Card 2 — AI & IoT */}
          <div
            className={`what-content what-noTouch ${activeCard === 1 ? 'what-content-active' : 'what-sibling'}`}
            onMouseEnter={() => setActiveCard(1)}
          >
            <div className="what-corner" />
            <div className="what-border1"><svg viewBox="0 0 450 1" preserveAspectRatio="none"><line x1="0" y1="0.5" x2="450" y2="0.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4"/></svg></div>
            <div className="what-border2"><svg viewBox="0 0 1 500" preserveAspectRatio="none"><line x1="0.5" y1="0" x2="0.5" y2="500" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4"/></svg></div>
            <div className="what-content-in">
              <h3>AI & IoT</h3>
              <h4>DESCRIPTION</h4>
              <p>I started exploring AI as a hobby, but like all good obsessions, it slowly crept into everything I build — now it won't leave me alone!</p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <span className="what-tags">Machine Learning</span>
                <span className="what-tags">IoT</span>
                <span className="what-tags">Embedded Systems</span>
                <span className="what-tags">Flutter</span>
              </div>
            </div>
            <div className="what-arrow" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
