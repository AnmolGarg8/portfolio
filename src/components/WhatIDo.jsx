import { useState } from 'react'
import './styles/WhatIDo.css'

const WhatIDo = () => {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="whatIDO" id="whatido">
      <div className="what-box">
        <div className="what-character"></div>
        <h2>
          WH<span className="hat-h2">AT</span>
          <br />
          I <span className="do-h2">DO</span>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          {/* Card 1 — AI & DATA SCIENCE */}
          <div
            className={`what-content ${activeCard === 0 ? 'what-content-active' : 'what-sibling'}`}
            onMouseEnter={() => setActiveCard(0)}
          >
            <div className="what-corner" />
            <div className="what-border1"><svg viewBox="0 0 450 1" preserveAspectRatio="none"><line x1="0" y1="0.5" x2="450" y2="0.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4"/></svg></div>
            <div className="what-border2"><svg viewBox="0 0 1 500" preserveAspectRatio="none"><line x1="0.5" y1="0" x2="0.5" y2="500" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4"/></svg></div>
            <div className="what-content-in">
              <h3>AI & DATA SCIENCE</h3>
              <h4>OVERVIEW</h4>
              <p>Designing machine learning models, NLP classifiers, and computer vision pipelines to extract intelligence from unstructured data.</p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <span className="what-tags">Python</span>
                <span className="what-tags">TensorFlow</span>
                <span className="what-tags">PyTorch</span>
                <span className="what-tags">Scikit-learn</span>
                <span className="what-tags">NLP</span>
                <span className="what-tags">OpenCV</span>
                <span className="what-tags">FastAPI</span>
              </div>
            </div>
            <div className="what-arrow" />
          </div>

          {/* Card 2 — IoT & EMBEDDED SYSTEMS */}
          <div
            className={`what-content what-noTouch ${activeCard === 1 ? 'what-content-active' : 'what-sibling'}`}
            onMouseEnter={() => setActiveCard(1)}
          >
            <div className="what-corner" />
            <div className="what-border1"><svg viewBox="0 0 450 1" preserveAspectRatio="none"><line x1="0" y1="0.5" x2="450" y2="0.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4"/></svg></div>
            <div className="what-border2"><svg viewBox="0 0 1 500" preserveAspectRatio="none"><line x1="0.5" y1="0" x2="0.5" y2="500" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4"/></svg></div>
            <div className="what-content-in">
              <h3>IoT & EMBEDDED</h3>
              <h4>OVERVIEW</h4>
              <p>Architecting hardware-software integrated systems with ESP32 microcontrollers, live sensor telemetry, and edge-level analytics.</p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <span className="what-tags">ESP32</span>
                <span className="what-tags">C/C++</span>
                <span className="what-tags">Embedded C</span>
                <span className="what-tags">Sensor Fusion</span>
                <span className="what-tags">Edge Deployment</span>
                <span className="what-tags">Firebase</span>
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
