import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const currentFocus = ["Machine Learning", "IoT Systems", "Cybersecurity"];

  return (
    <section id="education" className="section-container">

      <div className="max-w-[720px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 text-center group relative overflow-hidden"
        >
          {/* Animated Glow Border */}
          <motion.div 
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 border-2 border-[var(--accent-primary)] rounded-[16px] pointer-events-none"
          />

          {/* Top Gradient Accent */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-highlight)]" />

          <div className="flex justify-center mb-10">
            <div className="p-6 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
              <GraduationCap size={48} />
            </div>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 title-gradient"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            B.Tech in Artificial Intelligence & Data Science
          </h2>

          <p className="text-xl text-[#b0a8d0] font-medium mb-12">
            Vivekananda Institute of Professional Studies (VIPS), Delhi
          </p>

          <div className="flex items-center justify-center gap-4 mb-20">
            <span className="px-6 py-2 border border-[var(--accent-primary)]/30 rounded-full text-sm font-bold text-[var(--accent-secondary)] uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(124,58,237,0.15)] bg-white/5">
              2024 – 2028
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 border-t border-white/5 pt-10">
            {currentFocus.map(focus => (
              <span key={focus} className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-[var(--accent-highlight)] transition-colors">
                {focus}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
