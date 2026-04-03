import { Cpu, Trophy, Medal, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { title: "3+", label: "Projects Engineered", icon: <Cpu className="text-[var(--accent-primary)]" size={32} /> },
    { title: "Top 10", label: "National Recognition", icon: <Trophy className="text-[var(--accent-primary)]" size={32} /> },
    { title: "2026", label: "India Innovates Finalist", icon: <Medal className="text-[var(--accent-primary)]" size={32} /> },
    { title: "B.Tech", label: "AI & Data Science, VIPS", icon: <GraduationCap className="text-[var(--accent-primary)]" size={32} /> }
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-watermark">02</div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <div className="px-4 py-1.5 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5 w-fit mb-8">
            <span className="text-[12px] font-bold text-[var(--accent-secondary)] uppercase tracking-[0.2em]">About Me</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[52px] font-bold leading-tight mb-8 title-gradient"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Building the Future <br /> with Intelligence
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[17px] text-[#b0a8d0] leading-[1.8] font-[Inter]"
          >
            I build intelligent systems that sit at the intersection of hardware and software. 
            From ESP32-based IoT platforms to NLP-driven AI tools — I engineer real solutions to real problems. 
            Recognized as a Top 10 National Semifinalist at Samsung Solve for Tomorrow 2025 and a Finalist at India Innovates 2026.
          </motion.p>
        </div>

        {/* Right Side - Stat Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 border-l-4 border-l-[var(--accent-primary)] group hover:border-l-[var(--accent-highlight)] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-white/[0.03]"
            >
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-black mb-1 title-gradient">
                {stat.title}
              </h3>
              <p className="text-xs uppercase tracking-widest font-bold opacity-60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
