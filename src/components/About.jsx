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
      
      <div className="container mx-auto relative z-10 w-full pointer-events-auto" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 420px) 1fr', alignItems: 'start', gap: '8rem' }}>
        
        {/* Left Column: Robot */}
        <div className="about-robot hidden md:block" style={{ height: '480px', overflow: 'hidden', position: 'relative', width: '100%' }}></div>

        {/* Right Column: Content */}
        <div className="about-content flex flex-col gap-8 relative" style={{ zIndex: 10, paddingRight: '2rem' }}>
          
          <div className="gsap-fade-up inline-block px-3 py-1 border border-cyan-glow/50 text-cyan-glow text-xs font-bold tracking-[0.25em] w-max glow-cyan">
            ABOUT ME
          </div>

          <div className="max-w-3xl relative z-10">
            <h2 className="about-title about-statement font-heading font-extrabold leading-[1.1] text-white tracking-[0.05em] large-heading">
              I BUILD <span className="no-break">INTELLIGENT SYSTEMS</span> AT THE INTERSECTION OF <span className="no-break">AI, IOT & FULL STACK</span> <span className="no-break">DEVELOPMENT.</span>
            </h2>
          </div>

          <p className="gsap-fade-up text-white/70 font-light leading-relaxed max-w-2xl">
            Aspiring Software Engineer with deep interests in <span className="text-white font-medium">AI, Machine Learning, IoT and Cybersecurity</span>. I create sensor-based systems and scalable applications that solve real-world problems. National innovator — <span className="text-[#FFD700] glow-gold">Top 10 Semifinalist, Samsung Solve for Tomorrow 2025.</span>
          </p>

          {/* Stats */}
          <div ref={statsRef} className="gsap-fade-up grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/10" style={{ marginTop: '2rem', position: 'relative', zIndex: 10 }}>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-cyan-glow tracking-tighter leading-none mb-2" style={{ fontSize: '2.5rem' }}>{countProjects}</span>
              <span className="text-white/50 tracking-[0.2em]" style={{ fontSize: '0.75rem', fontFamily: '"Space Grotesk", sans-serif' }}>PROJECTS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-violet-neon tracking-tighter leading-none mb-2" style={{ fontSize: '2.5rem' }}>{countStartup}</span>
              <span className="text-white/50 tracking-[0.2em]" style={{ fontSize: '0.75rem', fontFamily: '"Space Grotesk", sans-serif' }}>STARTUP FOUNDED</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-[#FFD700] tracking-tighter leading-none mb-2" style={{ fontSize: '2.5rem' }}>TOP {countNationally}</span>
              <span className="text-white/50 tracking-[0.2em]" style={{ fontSize: '0.75rem', fontFamily: '"Space Grotesk", sans-serif' }}>NATIONALLY</span>
            </div>
          </div>

          <div className="gsap-fade-up flex items-center gap-6 flex-wrap" style={{ marginTop: '1.5rem' }}>
            <div className="inline-flex items-center space-x-3 border border-[#FFD700]/30 rounded-none px-4 py-2 glow-gold bg-[#FFD700]/5 backdrop-blur-sm">
              <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em]">🏅 SAMSUNG SOLVE FOR TOMORROW — TOP 10</span>
            </div>

            <button className="px-6 py-3 border border-cyan-glow text-cyan-glow bg-cyan-glow/5 hover:bg-cyan-glow hover:text-[#07070F] text-xs font-bold tracking-[0.2em] transition-all duration-300">
              DOWNLOAD RESUME
            </button>
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
