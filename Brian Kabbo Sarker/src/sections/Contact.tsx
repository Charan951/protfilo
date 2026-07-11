import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section id="contact" aria-label="Hire Charan Teja - Freelance Web Developer Contact Screen" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: "-30px 0px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
        }}
        className="mb-10 sm:mb-12 lg:mb-20 border-b border-white/10 pb-4"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase">CONTACT ME</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.15, margin: "-30px 0px" }}
        className="text-center min-w-0"
      >
        <p className="text-[#aaa] uppercase tracking-[0.25em] sm:tracking-[0.4em] mb-6 sm:mb-8 font-bold text-xs px-2">Have a project in mind?</p>
        
        <a 
          href="mailto:pcharan214@gmail.com" 
          className="group inline-block relative max-w-full"
        >
          <div className="overflow-hidden py-3 sm:py-4 px-1">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white leading-none transition-all duration-700 group-hover:text-moonstone select-none break-words">
              {"LET'S TALK".split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.2, 
                    delay: i * 0.04, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="inline-block group-hover:-translate-y-2 transition-transform duration-500 ease-out"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h2>
          </div>
          <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-moonstone to-transparent transition-all duration-1000 mx-auto mt-4 opacity-50 group-hover:opacity-100 shadow-[0_0_20px_rgba(100,182,172,0.5)]" />
        </a>

        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-6 mt-8 sm:mt-12 max-w-md sm:max-w-none mx-auto">
          <a
            href="mailto:pcharan214@gmail.com"
            onClick={() => setShowEmail(true)}
            className="w-full sm:w-auto btn-shine flex items-center justify-center gap-3 min-h-11 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-moonstone-border bg-transparent hover:bg-white transition-all duration-300 text-moonstone font-bold text-base sm:text-lg"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/ramanakulam-charan-teja-6448ba245/"
            target="_blank"
            rel="noopener noreferrer me"
            className="w-full sm:w-auto btn-shine flex items-center justify-center gap-3 min-h-11 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-moonstone-border bg-transparent hover:bg-white transition-all duration-300 text-moonstone font-bold text-base sm:text-lg"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Charan951"
            target="_blank"
            rel="noopener noreferrer me"
            className="w-full sm:w-auto btn-shine flex items-center justify-center gap-3 min-h-11 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-moonstone-border bg-transparent hover:bg-white transition-all duration-300 text-moonstone font-bold text-base sm:text-lg"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>

        <p className="sr-only">
          Based in Hyderabad, Telangana, India. Available for freelance custom web application development, responsive website design, and website maintenance services globally. Let's launch your next project!
        </p>

        <AnimatePresence>
          {showEmail && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="mt-10 text-center"
            >
              <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.4em] font-mono mb-2">Direct Email Address</p>
              <a
                href="mailto:pcharan214@gmail.com"
                className="font-mono text-moonstone text-lg sm:text-xl font-bold select-all hover:text-white transition-colors duration-300 border-b border-dashed border-moonstone/30 hover:border-white pb-1"
              >
                pcharan214@gmail.com
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Contact;
