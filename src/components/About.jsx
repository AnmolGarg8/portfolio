import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Download, Trophy, Briefcase, Code, Rocket } from 'lucide-react';
import gsap from 'gsap';

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      gsap.to(ref.current, {
        innerHTML: end,
        duration: duration,
        snap: { innerHTML: 1 },
        onUpdate: function () {
          if (ref.current) {
            ref.current.innerHTML = Math.round(this.targets()[0].innerHTML) + suffix;
          }
        },
      });
    }
  }, [isInView, end, duration, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-24 relative" id="about" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={variants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              About <span className="text-electric-indigo">Me</span>
            </h2>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* Content */}
          <div className="glass-panel p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-soft-gold/10 rounded-full blur-[80px] -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            
            <p className="text-lg md:text-xl text-gray-700 font-body leading-relaxed mb-8">
              Aspiring Software Engineer and AI Developer passionate about Artificial Intelligence, Machine Learning, IoT, and Cybersecurity. I build intelligent, sensor-based systems and scalable full-stack applications that solve real-world problems. National-level innovator — Top 10 Semifinalist in Samsung Solve for Tomorrow 2025.
            </p>

            {/* Glowing Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-electric-indigo/5 border border-electric-indigo/20 shadow-[0_0_20px_rgba(92,107,192,0.15)] relative mb-12"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(92,107,192,0.3)" }}
            >
              <Trophy size={20} className="text-soft-gold animate-pulse" />
              <span className="font-heading font-semibold text-gray-900">
                Top 10 — Samsung Solve for Tomorrow 2025
              </span>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-t border-b border-gray-100 py-8">
              <div className="flex flex-col items-center">
                <Rocket size={24} className="text-electric-indigo mb-2" />
                <h4 className="text-4xl font-heading font-bold text-gray-900 flex">
                  <CountUp end={3} duration={2} />
                </h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">Live Projects</p>
              </div>
              
              <div className="flex flex-col items-center md:border-l md:border-r border-gray-100">
                <Briefcase size={24} className="text-soft-gold mb-2" />
                <h4 className="text-4xl font-heading font-bold text-gray-900 flex">
                  <CountUp end={1} duration={1.5} />
                </h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">Startup Founded</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Code size={24} className="text-electric-indigo mb-2" />
                <h4 className="text-4xl font-heading font-bold text-gray-900 flex">
                  <CountUp end={2} duration={2} suffix="+" />
                </h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">Years Building</p>
              </div>
            </div>

            {/* Resume Button */}
            <a 
              href="#" 
              className="interactive group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-electric-indigo transition-colors duration-300"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
