import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    name: 'Frontend',
    color: 'electric-indigo',
    colorCss: 'bg-electric-indigo',
    textCss: 'text-electric-indigo',
    bgCss: 'bg-electric-indigo/10',
    borderCss: 'border-electric-indigo/20',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(92,107,192,0.6)]',
    skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    name: 'Backend',
    color: 'gray-900',
    colorCss: 'bg-gray-900',
    textCss: 'text-gray-900',
    bgCss: 'bg-gray-900/10',
    borderCss: 'border-gray-900/20',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(17,24,39,0.5)]',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'PostgreSQL'],
  },
  {
    name: 'Specialties',
    color: 'soft-gold',
    colorCss: 'bg-soft-gold',
    textCss: 'text-soft-gold',
    bgCss: 'bg-soft-gold/20',
    borderCss: 'border-soft-gold/30',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(244,185,66,0.6)]',
    skills: ['AI/ML', 'IoT', 'Cybersecurity', 'Embedded Systems', 'Hardware Sensors'],
  },
];

const Skills = () => {
  return (
    <section className="py-24 bg-pure-white relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,185,66,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-70"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Technical <span className="text-electric-indigo">Arsenal</span>
          </h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto text-lg">
            A comprehensive toolkit covering both software infrastructure and specialized hardware domains.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={category.name} className="relative">
              
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className={`w-3 h-3 rounded-full ${category.colorCss} animate-pulse`} />
                <h3 className={`text-2xl font-heading font-bold ${category.textCss}`}>
                  {category.name}
                </h3>
                <div className="h-px bg-gray-200 flex-1 ml-4 hidden md:block" />
              </div>

              <div className="flex flex-wrap gap-4 md:gap-5 justify-start md:justify-center">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: i * 0.1 + (idx * 0.2),
                      type: "spring",
                      bounce: 0.4
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`interactive px-6 py-3 rounded-full border backdrop-blur-sm cursor-pointer transition-all duration-300 ${category.bgCss} ${category.borderCss} ${category.hoverGlow}`}
                  >
                    <span className="font-body font-semibold text-gray-800 relative z-10">{skill}</span>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
