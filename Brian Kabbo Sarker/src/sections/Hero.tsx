import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const skills = [
    'React',
    'Node.js',
    'MongoDB',
    'Flutter',
    'AWS',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Jenkins'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    <section
      id="home"
      className="relative min-h-screen px-0 flex flex-col items-center justify-center lg:px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 w-full max-w-2xl min-w-0 px-1 lg:max-w-none lg:w-auto lg:px-0"
      >
        <motion.p
          variants={itemVariants}
          className="text-[#aaa] text-sm sm:text-base lg:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.2em] mb-3 sm:mb-4 lg:mb-4 font-inter font-medium"
        >
          Hello, this is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl mb-4 sm:mb-6 lg:mb-6 font-bold tracking-tight text-white leading-tight lg:leading-none break-words lg:break-normal"
        >
          Charan Teja
        </motion.h1>

        <h2 className="sr-only">
          Freelance Web Developer & Full Stack Developer in Hyderabad, Telangana
        </h2>

        <motion.p
          variants={itemVariants}
          className="text-white text-base sm:text-xl md:text-2xl font-inter mb-8 sm:mb-12 lg:mb-12 max-w-2xl mx-auto leading-relaxed flex flex-col lg:block items-center lg:items-stretch gap-3 lg:gap-0 px-1 lg:px-0"
        >
          <span className="opacity-80">Full-Stack Developer Crafting with</span>{' '}
          <span
            className="text-moonstone font-mono font-semibold bg-moonstone-dim px-3 py-1 rounded border border-moonstone-border/20 max-lg:mt-1 lg:ml-[0.5em] inline-flex items-center justify-center relative overflow-hidden h-[1.5em] min-w-[140px] align-middle"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeSkill}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute whitespace-nowrap"
              >
                {skills[activeSkill]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>


      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[#aaa] text-xs uppercase tracking-[0.3em] font-medium group-hover:text-moonstone transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-moonstone w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
