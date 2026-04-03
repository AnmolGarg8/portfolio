import { motion } from 'framer-motion';
import { Trophy, Target, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Samsung Solve for Tomorrow 2025",
      org: "Samsung India",
      role: "Top 10 National Semifinalist",
      desc: "Selected among top teams nationwide for innovative IoT-based fintech solution NoteNetra, addressing real-world challenges with sensor technology."
    },
    {
      title: "India Innovates 2026",
      org: "National Level Innovation Challenge",
      role: "Finalist",
      desc: "Recognized for high-impact social innovation in the field of public health and safety using automated monitoring systems."
    },
    {
      title: "Multiple Hackathon Wins",
      org: "Inter-college Technical fests",
      role: "Winner / Runner Up",
      desc: "Consistently delivering high-performance prototypes in AI, IoT, and Web Development under tight deadlines."
    }
  ];

  return (
    <section id="achievements" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4 title-gradient">Recognition & Awards</h2>
        <p className="text-[var(--accent-secondary)] tracking-widest uppercase text-sm">Milestones of growth and innovation</p>
      </div>

      <div className="flex flex-col gap-[20px] max-w-[820px] mx-auto">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass-panel p-[28px_32px] flex flex-col md:flex-row gap-6 items-start hover:border-[var(--accent-secondary)] shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all ${
              i === 0 ? 'border-[var(--accent-primary)] ring-1 ring-[var(--accent-primary)]/30' : ''
            }`}
          >
            <div className="p-4 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] shrink-0">
              {i === 0 ? <Trophy size={32} /> : i === 1 ? <Target size={32} /> : <Award size={32} />}
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                <span className="text-[var(--accent-primary)] font-mono text-sm hidden md:block">|</span>
                <span className="text-[var(--accent-secondary)] font-semibold">{item.org}</span>
              </div>
              <p className="text-white/80 font-medium mb-2 italic">{item.role}</p>
              <p className="text-[var(--text-secondary)]">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
