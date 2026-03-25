import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50/50" id="achievements">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-soft-gold/10 to-electric-indigo/5 rounded-full blur-[150px] mix-blend-multiply opacity-70 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-5xl">
        <motion.div 
          className="glass-panel p-1 border border-soft-gold/20 shadow-[0_20px_50px_rgba(244,185,66,0.15)] rounded-3xl overflow-hidden group"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.8)_50%,transparent_75%)] translate-x-[-150%] animate-[shimmer_5s_infinite] rotate-12 -z-10 group-hover:block transition-all pointer-events-none"></div>

          <div className="bg-white/80 backdrop-blur-xl rounded-[23px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 md:justify-between text-center md:text-left h-full">
            
            <motion.div 
              className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 flex items-center justify-center rounded-full bg-gradient-to-tr from-soft-gold/20 to-electric-indigo/10 border-4 border-white shadow-xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-soft-gold/30 blur-[40px] rounded-full animate-pulse"></div>
              <Trophy size={80} className="text-soft-gold drop-shadow-[0_0_20px_rgba(244,185,66,0.5)] z-10 md:w-[100px] md:h-[100px]" />
            </motion.div>

            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="text-electric-indigo font-body font-bold text-lg md:text-xl tracking-widest uppercase mb-4 opacity-90">
                  National Recognition
                </h4>
                
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
                  Top 10 Semifinalist
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft-gold to-orange-500">
                    Samsung Solve for Tomorrow 2025
                  </span>
                </h2>
                
                <p className="font-body text-gray-700 text-lg md:text-xl leading-relaxed">
                  Recognized nationally for building an innovative tech solution solving real-world challenges. Showcasing impact through intersection of AI and scalable engineering.
                </p>
              </motion.div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
