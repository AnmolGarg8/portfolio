import { motion } from 'framer-motion';
import { Trophy, Target, Zap } from 'lucide-react';

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
    <section id="achievements" className="section-container relative">
      <div className="section-watermark">05</div>

      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold mb-4 title-gradient" style={{ fontFamily: 'Space Grotesk' }}>Recognition & Milestones</h2>
        <p className="text-[var(--text-secondary)] tracking-widest uppercase text-sm">Where hard work met opportunity.</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent-primary)]/0 via-[var(--accent-primary)]/40 to-[var(--accent-primary)]/0 hidden md:block" />

        <div className="flex flex-col gap-12 md:gap-0">
          {achievements.map((item, i) => (
            <div key={i} className={`flex w-full items-center ${item.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
              {/* Card Container */}
              <motion.div 
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="w-full md:w-1/2 p-4 md:p-12 relative"
              >
                {/* Horizontal line connector */}
                <div className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-[var(--accent-primary)]/30 hidden md:block ${
                  item.side === 'left' ? 'right-0 w-12' : 'left-0 w-12'
                }`} />

                <div className="glass-panel p-10 group hover:border-[var(--accent-primary)] transition-all">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="p-4 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <p className="text-[var(--accent-secondary)] text-sm font-black uppercase tracking-widest">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-8 italic">"{item.body}"</p>
                  <div className="flex gap-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/20 rounded-md text-[10px] uppercase font-bold text-[var(--accent-secondary)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Center Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--bg-deep)] border-2 border-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)] z-10 hidden md:block" />

              {/* Spacer for the other side */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
