import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Check, Send } from 'lucide-react';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    { label: "Email", value: "anmolgarg1605@gmail.com", icon: <Mail size={18} />, href: "mailto:anmolgarg1605@gmail.com" },
    { label: "Phone", value: "+91 9625652435", icon: <Phone size={18} />, href: "tel:+919625652435" },
    { label: "LinkedIn", value: "anmol-garg2005", icon: <Linkedin size={18} />, href: "https://linkedin.com/in/anmol-garg2005" }
  ];

  return (
    <section id="contact" className="section-container">
      <div className="section-watermark">07</div>
      
      <div className="mb-20">
        <h2 className="text-5xl font-bold mb-4 title-gradient" style={{ fontFamily: 'Space Grotesk' }}>Let's Build Something Great</h2>
        <p className="text-[var(--text-secondary)] text-xl tracking-tight">Open to internships, collaborations, and full-time opportunities. Let's talk.</p>
      </div>

      <div className="lg:grid grid-cols-2 gap-16">
        {/* Left Column - Contact Info */}
        <div className="space-y-6 mb-12 lg:mb-0">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 flex items-center gap-6 border-l-4 border-l-[var(--accent-primary)] hover:border-l-[var(--accent-highlight)] group transition-all"
            >
              <div className="p-4 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-black opacity-40 mb-1">{info.label}</p>
                <p className="text-xl font-bold text-white group-hover:text-[var(--accent-secondary)] transition-colors">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right Column - Contact Form */}
        <div className="glass-panel p-10 contact-form group overflow-hidden relative">
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                className="absolute inset-0 z-20 bg-[var(--bg-deep)]/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6 border border-green-500/30">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Check size={40} />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[var(--text-secondary)]">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10 transition-all duration-500">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-2">Full Name</label>
                <input required type="text" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-2">Email Address</label>
                <input required type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-2">Subject</label>
              <input required type="text" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-2">Message</label>
              <textarea required rows="5" placeholder="Tell me about your project..."></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSending}
              className={`w-full group/btn flex items-center justify-center gap-3 py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${
                isSending ? 'opacity-70 cursor-wait' : 'hover:scale-[1.01] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-highlight)] shadow-[0_8px_30px_rgba(124,58,237,0.5)] active:scale-95'
              }`}
            >
              {isSending ? 'Sending Intelligence...' : (
                <>
                  Send Message
                  <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
