import React from 'react';
import RobotCanvas from '../components/RobotCanvas';

export default function WhatIDo() {
  const services = [
    { num: '01', title: 'FULL STACK DEVELOPMENT', tags: 'React · Node.js · Express · DBs' },
    { num: '02', title: 'AI & MACHINE LEARNING', tags: 'Intelligent systems · Data analysis' },
    { num: '03', title: 'IOT & EMBEDDED SYSTEMS', tags: 'Smart sensors · Hardware · MSMEs' },
    { num: '04', title: 'CYBERSECURITY', tags: 'Security-focused architecture' },
  ];

  return (
    <section id="whatido" className="whatido">
      <div className="whatido-label">
        <div className="whatido-vtext">
          WHAT<br />I DO
        </div>
      </div>

      <div className="whatido-robot">
        <RobotCanvas height={580} cameraZ={3.5} section="whatido" />
      </div>

      <div className="whatido-cards">
        {services.map((s, idx) => (
          <div key={idx} className="scard">
            <div className="scard-num">O {s.num}</div>
            <div className="scard-title">{s.title}</div>
            <div className="scard-tags">{s.tags}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
