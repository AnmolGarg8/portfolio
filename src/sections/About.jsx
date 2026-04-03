import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Briefcase size={24} />, title: "3+ Projects Built", detail: "End-to-end engineered" },
    { icon: <Trophy size={24} />, title: "Top 10 National", detail: "Samsung Solve 2025" },
    { icon: <Award size={24} />, title: "Hackathon Wins", detail: "Multiple victories" },
    { icon: <GraduationCap size={24} />, title: "B.Tech AI & DS", detail: "VIPS Delhi" },
  ];

  return (
    <section id="about" className="section-container relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Bio Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl mb-4">
              Building the Future with <span className="text-[var(--accent-primary)]">Intelligence</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--accent-primary)] rounded-full mb-8" />
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
            Aspiring Software Engineer and AI Developer with a strong focus on Artificial Intelligence, Machine Learning, IoT, and Cybersecurity. I specialize in engineering intelligent, sensor-based systems that bridge the physical and digital worlds.
          </p>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Recognized for innovation as a <span className="text-white font-bold">Top 10 national semifinalist</span> in Samsung Solve for Tomorrow 2025, I am passionate about creating tech that solves real-world problems.
          </p>
        </motion.div>

        {/* Stats Grid Column */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 flex flex-col items-center text-center group cursor-default"
            >
              <div className="mb-4 p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{stat.title}</h3>
              <p className="text-xs text-[var(--accent-secondary)] uppercase tracking-widest">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
