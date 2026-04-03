import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "Java", "Markdown", "Shell Scripting"]
    },
    {
      title: "Core Technologies",
      skills: ["React.js", "Firebase", "Node.js", "Express", "Vite", "Google Cloud Platform"]
    },
    {
      title: "Specialized Fields",
      skills: ["Machine Learning", "IoT", "Cybersecurity", "Embedded Systems", "FinTech"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["Git", "GitHub", "Unity3D", "Framer Motion", "VS Code", "Canva", "Postman"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="skills" className="section-container" style={{ paddingTop: '80px' }}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4 title-gradient">Technical Arsenal</h2>
        <p className="text-[var(--accent-secondary)] tracking-widest uppercase text-sm">Powered by modern technologies</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="glass-panel p-8"
          >
            <h3 className="text-[var(--accent-secondary)] text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className="skill-pill"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
