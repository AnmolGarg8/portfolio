import { motion } from 'framer-motion';
import { Trophy, Target, Zap, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      side: 'right',
      icon: <Trophy size={32} />,
      title: "Samsung Solve for Tomorrow 2025",
      subtitle: "Top 10 National Semifinalist",
      body: "Selected among the top 10 teams nationwide out of thousands of entries for developing NoteNetra — an IoT-based fintech platform addressing financial inclusion for rural MSMEs.",
      tags: ["National Level", "Innovation"]
    },
    {
      side: 'left',
      icon: <Target size={32} />,
      title: "India Innovates 2026",
      subtitle: "National Finalist",
      body: "Reached the final round of the India Innovates national challenge, recognized for high-impact innovation in public health and safety automation using embedded systems.",
      tags: ["National Level", "Public Health"]
    },
    {
      side: 'right',
      icon: <Zap size={32} />,
      title: "Hackathon Victories",
      subtitle: "Multiple National Wins",
      body: "Secured wins across multiple national-level hackathons — demonstrating speed, creativity, and technical execution under pressure.",
      tags: ["Competitive", "Multi-Domain"]
    }
  ];

  return (
    <section id="achievements" className="section-container overflow-visible">
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-bold mb-4 title-gradient" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Milestones</h2>
        <p className="text-[var(--text-secondary)] text-xl">Recognitions and major milestones in my journey.</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Center Line (Dashed) */}
        <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[rgba(124,58,237,0.3)]" />
        
        {/* Animated Progress Line (Solid Gradient) */}
        <motion.div 
          className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-[#7c3aed] to-[#06b6d4]"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <div className="space-y-12 relative">
          {achievements.map((item, i) => (
            <div key={i} className={`relative flex items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Central Node Dot */}
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-10 w-[12px] h-[12px] rounded-full bg-[#7c3aed] shadow-[0_0_12px_rgba(124,58,237,0.8)] border border-white/20" />

              {/* Connector (Desktop Only) */}
              <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] bg-[rgba(124,58,237,0.3)] w-[2%] ${i % 2 === 0 ? 'right-[50%]' : 'left-[50%]'}`} />

              {/* Achievement Card */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`w-full md:w-[420px] glass-panel p-6 md:p-8 ml-12 md:ml-0 ${i % 2 === 0 ? 'md:mr-[52%]' : 'md:ml-[52%]'}`}
                style={{ backdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(124,58,237,0.2)', borderRadius: '16px' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--accent-secondary)]">{item.subtitle}</span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {item.body}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent-highlight)]">
                  <Medal size={14} />
                  {item.tags && item.tags[0]}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
