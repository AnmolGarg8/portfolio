import './styles/About.css'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-character"></div>
      <div className="about-me">
        <h3>About me</h3>
        <h4 className="about-hook">
          Systems & AI Engineer building low-latency autonomous platforms.
        </h4>
        <p className="para">
          I am a CS & Systems Engineer pursuing my B.Tech at VIPS Delhi (Expected 2028). 
          I specialize in bridging hardware and software, developing real-time quantitative pipelines in C++ and Python.
        </p>
        <p className="para">
          Currently, I am a <strong>Software Engineer Intern at 7rd.ai</strong>, where I build ground control interfaces for autonomous drone defense systems using Electron, React, and TypeScript.
        </p>
        <ul className="about-highlights">
          <li><strong>High-Agency IoT:</strong> Developed <em>NoteNetra</em> (offline cash telemetry), recognized as a <strong>Samsung Top 10 National Semifinalist</strong> out of 20,000+ teams.</li>
          <li><strong>Autonomous Cyber Defense:</strong> Built <em>AIRAVAT XDR</em> (real-time threat triage), earning a <strong>National Finalist</strong> position at <em>India Innovates 2026</em>.</li>
          <li><strong>Technical Leadership:</strong> Selected as a <strong>Google Student Ambassador 2026</strong> (representing VIPS Delhi, 1 of ~50 selected nationally).</li>
        </ul>
      </div>
    </section>
  )
}

export default About
