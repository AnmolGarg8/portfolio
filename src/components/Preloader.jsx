import { motion } from 'framer-motion';

const Preloader = ({ loading }) => {
  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-pure-white"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 1.5 }}
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-6xl md:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-indigo to-soft-gold tracking-tighter"
          style={{ transformStyle: 'preserve-3d' }}
        >
          AG
        </motion.div>
        
        {/* Subtle loading bar beneath the AG logo */}
        <motion.div 
          className="h-1 bg-electric-indigo mt-4 rounded-full mx-auto"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
