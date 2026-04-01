import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line draw
      gsap.fromTo('.timeline-line', 
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );

      // Node slide-ins
      gsap.utils.toArray('.timeline-node').forEach((node, i) => {
        gsap.fromTo(node, 
          { x: i % 2 === 0 ? -50 : 50, opacity: 0, scale: 0.9 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: node,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="w-full py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        
        <div className="flex flex-col items-center mb-16 text-center">
           <h2 className="text-4xl md:text-5xl font-heading font-bold text-white relative z-10 text-gradient glow-cyan mix-blend-screen" style={{ WebkitTextFillColor: 'transparent' }}>
             Experience & Education
           </h2>
           <div className="w-24 h-[2px] bg-cyan-glow mt-4 shadow-[0_0_10px_#00F5FF]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          
          {/* Glowing vertical line */}
          <div className="absolute left-[39px] md:left-1/2 md:-ml-[2px] top-0 bottom-0 w-[4px] bg-gradient-to-b from-cyan-glow via-violet-neon to-transparent opacity-80 timeline-line glow-cyan"></div>

          {/* Node 1: Kenet Technologies */}
          <div className="relative flex flex-col md:flex-row md:items-center justify-between mb-16 timeline-node">
            <div className="md:w-5/12 hidden md:block text-right pr-12">
               <span className="text-cyan-glow font-heading font-bold text-xl block mb-1">Present</span>
               <span className="text-gray-400 text-sm">Building AI & Fintech Solutions</span>
            </div>

            <div className="absolute left-[-5px] md:left-1/2 md:-ml-6 w-12 h-12 rounded-full bg-dark border-4 border-cyan-glow flex items-center justify-center glow-cyan z-10 self-start md:self-auto">
              <Briefcase size={20} className="text-white" />
            </div>

            <div className="pl-16 md:pl-12 md:w-5/12">
              <div className="glass-panel p-6 rounded-xl border-l-4 border-l-cyan-glow shadow-[0_0_20px_rgba(0,245,255,0.1)] hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Co-Founder</h3>
                <h4 className="text-cyan-glow font-medium mb-4">Kenet Technologies</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Leading product development for AI, IoT, and Fintech solutions. Orchestrating the engineering team, architecting scalable backend systems, and establishing product vision.
                </p>
                <div className="md:hidden mt-4 text-xs font-bold text-cyan-glow">Present</div>
              </div>
            </div>
          </div>

          {/* Node 2: Education */}
          <div className="relative flex flex-col md:flex-row md:items-center justify-between mb-16 timeline-node">
            
            <div className="md:w-5/12 hidden md:block text-right pr-12 md:order-1">
              <div className="glass-panel p-6 rounded-xl border-r-4 border-r-violet-neon shadow-[0_0_20px_rgba(155,89,255,0.1)] hover:shadow-[0_0_30px_rgba(155,89,255,0.3)] transition-all duration-300 text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">B.Tech in Computer Science</h3>
                <h4 className="text-violet-neon font-medium mb-4">Vivekananda Institute of Professional Studies</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Focusing on artificial intelligence, software engineering, and system design. Active participant in hackathons and tech innovation challenges.
                </p>
              </div>
            </div>

            <div className="absolute left-[-5px] md:left-1/2 md:-ml-6 w-12 h-12 rounded-full bg-dark border-4 border-violet-neon flex items-center justify-center glow-violet z-10 self-start md:self-auto md:order-2">
              <GraduationCap size={20} className="text-white" />
            </div>

            <div className="pl-16 md:hidden">
               <div className="glass-panel p-6 rounded-xl border-l-4 border-l-violet-neon shadow-[0_0_20px_rgba(155,89,255,0.1)] transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">B.Tech in Computer Science</h3>
                <h4 className="text-violet-neon font-medium mb-4">Vivekananda Institute of Professional Studies</h4>
                <p className="text-gray-400 text-sm leading-relaxed text-left">
                  Focusing on artificial intelligence, software engineering, and system design. Active participant in hackathons and tech innovation challenges.
                </p>
                <div className="mt-4 text-xs font-bold text-violet-neon">2024–2028</div>
              </div>
            </div>

            <div className="pl-16 md:pl-12 md:w-5/12 hidden md:block md:order-3 text-left">
               <span className="text-violet-neon font-heading font-bold text-xl block mb-1">2024 – 2028</span>
               <span className="text-gray-400 text-sm cursor-none">Academic Excellence</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
