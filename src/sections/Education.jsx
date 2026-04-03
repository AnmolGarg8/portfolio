import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-container">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="p-6 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
              <GraduationCap size={48} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-4 title-gradient">Education</h2>
          <p className="text-[var(--accent-secondary)] tracking-widest uppercase text-sm mb-8 font-[var(--font-main)]">Transforming knowledge into innovation</p>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">B.Tech in Artificial Intelligence & Data Science</h3>
            <p className="text-xl text-[var(--accent-secondary)]">Vivekananda Institute of Professional Studies (VIPS), Delhi</p>
            <p className="text-lg text-[var(--text-secondary)] font-mono">2024 – 2028</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
