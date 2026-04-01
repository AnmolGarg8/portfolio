import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  const [countProjects, setCountProjects] = useState(0);
  const [countStartup, setCountStartup] = useState(0);
  const [countNationally, setCountNationally] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Heading SplitText simple simulation
      // Remove any dynamic text splitting that might break word-keeping rules
      const text = document.querySelector('.about-title');
      if (text) {
        // No logic here to split text, just rely on raw HTML + CSS word-breaking
        
        gsap.to('.split-char', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out"
        });
      }

      // Stats Animation
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.to({ val: 0 }, { val: 3, duration: 2, ease: "power1.out", onUpdate: function() { setCountProjects(Math.floor(this.targets()[0].val)); }});
          gsap.to({ val: 0 }, { val: 1, duration: 2, ease: "power1.out", onUpdate: function() { setCountStartup(Math.floor(this.targets()[0].val)); }});
          gsap.to({ val: 0 }, { val: 10, duration: 2.5, ease: "power1.out", onUpdate: function() { setCountNationally(Math.floor(this.targets()[0].val)); }});
        },
        once: true
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="w-full relative overflow-hidden pointer-events-none" style={{ padding: '8rem 5rem', isolation: 'isolate' }}>
      
      <div className="container mx-auto about-section pointer-events-auto">
        
        {/* Row 1: Robot & Content */}
        <div className="about-robot-col hidden md:block"></div>

        <div className="about-content-col">
          <div className="gsap-fade-up inline-block px-3 py-1 border border-cyan-glow/50 text-cyan-glow text-xs font-bold tracking-[0.25em] w-max glow-cyan">
            ABOUT ME
          </div>

          <div className="relative z-10">
            <h2 className="about-title about-statement font-heading font-extrabold text-white tracking-[0.05em]">
              I BUILD <span className="no-break">INTELLIGENT SYSTEMS</span> AT THE INTERSECTION OF <span className="no-break">AI, IOT & FULL STACK</span> <span className="no-break">DEVELOPMENT.</span>
            </h2>
          </div>

          <p className="gsap-fade-up text-white/70 font-light leading-relaxed max-w-2xl">
            Aspiring Software Engineer with deep interests in <span className="text-white font-medium">AI, Machine Learning, IoT and Cybersecurity</span>. I create sensor-based systems and scalable applications that solve real-world problems. National innovator — <span className="text-[#FFD700] glow-gold">Top 10 Semifinalist, Samsung Solve for Tomorrow 2025.</span>
          </p>
        </div>

        {/* Row 2: Stats */}
        <div className="about-stats-row bg-[#07070F]">
            <div ref={statsRef} className="flex flex-row gap-16">
              <div className="stat-item">
                <span className="stat-number leading-none">{countProjects}+</span>
                <span className="stat-label uppercase tracking-widest text-[0.6rem] text-white/30">PROJECTS</span>
              </div>
              <div className="stat-item">
                <span className="stat-number leading-none">{countStartup}</span>
                <span className="stat-label uppercase tracking-widest text-[0.6rem] text-white/30">STARTUP FOUNDED</span>
              </div>
            </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
          }
          .about-robot {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
