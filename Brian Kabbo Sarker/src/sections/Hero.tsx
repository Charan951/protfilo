import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative h-[80vh] lg:h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        <motion.p 
          variants={itemVariants}
          className="text-[#aaa] text-base uppercase tracking-[0.2em] mb-4 font-inter font-medium"
        >
          Hello, this is
        </motion.p>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-8xl lg:text-9xl mb-6 font-bold tracking-tight text-white"
        >
          Brian Kabbo
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-white text-xl md:text-2xl font-inter mb-12 max-w-2xl mx-auto"
        >
          <span className="opacity-80">Software Developer Crafting with</span>{' '}
          <span className="text-moonstone font-mono font-semibold bg-moonstone-dim px-3 py-1 rounded border border-moonstone-border/20">.NET</span>
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="#works"
            className="group btn-shine px-8 py-4 rounded-full border border-moonstone-border text-moonstone font-bold text-lg bg-transparent hover:bg-white transition-all duration-300"
          >
            View Work
          </a>
          <a
            href="https://drive.google.com/file/d/1ERIkqExyzmGRm_Hhst7v-mMBce7TGdWh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-shine px-8 py-4 rounded-full border border-moonstone-border text-moonstone font-bold text-lg bg-transparent hover:bg-white transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[#aaa] text-xs uppercase tracking-[0.3em] font-medium group-hover:text-moonstone transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-moonstone w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
