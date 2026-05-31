import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('company1');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const experienceData = [
    {
      id: 'company1',
      company: 'The Christian Co-Operative Credit Union',
      role: 'Trainee Software Developer (Full Time)',
      period: 'Nov 2024 – Present',
      points: [
        'Exposure to FinTech operations including ERP systems and financial application workflows',
        'Monitored and resolved system incidents in a 24/7 NOC environment to maintain continuous operation for 48,600+ active credit union members.',
        'Maintained ERP reliability for approximately 619 staff by performing routine performance troubleshooting, system health checks, and network monitoring on financial application workflows.',
        'Actively building side projects in .NET, C#, React and TypeScript outside of formal responsibilities.',
      ],
    },
    {
      id: 'company2',
      company: 'Wellessia',
      role: 'Video Editor (Full Time)',
      period: 'Aug 2024 – Nov 2024',
      points: [
        'Edited 200+ short-form, promotional, and tutorial videos.',
        'Collaborated with the creative team to enhance visual storytelling.',
        'Experienced in color grading, sound design, and motion graphics.',
      ],
    },
    {
      id: 'company3',
      company: 'Babuland LTD',
      role: 'Compliance Associate (Part-Time)',
      period: 'May 2022 – Oct 2023',
      points: [
        'Oversaw compliance and quality assurance across 8 branches with 30+ staff each.',
        'Acted as a central communication link between branch managers to resolve operational challenges.',
        'Monitored team performance and customer experience metrics.',
      ],
    },
  ];

  const activeExperience = experienceData.find((exp) => exp.id === activeTab)!;

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderExperienceContent = (exp: (typeof experienceData)[number]) => (
    <motion.div
      key={exp.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4 sm:space-y-6"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug break-words">{exp.role}</h3>
      <p className="font-mono text-moonstone text-sm">{exp.period}</p>
      <ul className="space-y-3 sm:space-y-4">
        {exp.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 sm:gap-4 text-white text-base sm:text-lg leading-relaxed">
            <span className="text-moonstone mt-1.5 flex-shrink-0">•</span>
            <span className="break-words">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="journey" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-10 sm:mb-12 lg:mb-20 border-b border-white/10 pb-4"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase">MY JOURNEY</h2>
      </motion.div>

      {/* Mobile — bottom drawer company picker */}
      <div className="lg:hidden flex flex-col gap-6">
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="w-full flex items-center gap-3 min-h-11 px-4 py-3 rounded-xl border border-moonstone-border/20 bg-moonstone-dim text-left transition-colors duration-300"
          aria-expanded={isDrawerOpen}
          aria-haspopup="listbox"
        >
          <span className="flex-1 text-sm font-bold text-white break-words leading-snug">
            {activeExperience.company}
          </span>
          <ChevronDown size={18} className="flex-shrink-0 text-moonstone" aria-hidden="true" />
        </button>

        <AnimatePresence>
          {isDrawerOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close company list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                onClick={() => setIsDrawerOpen(false)}
              />
              <motion.div
                role="listbox"
                aria-label="Select company"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                className="fixed bottom-0 left-0 right-0 z-50 lg:hidden rounded-t-2xl border-t border-white/10 bg-arctic-void px-4 pt-3 pb-8 max-h-[75vh] overflow-y-auto"
              >
                <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-5" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono mb-4 px-1">
                  Select experience
                </p>
                <div className="flex flex-col gap-2">
                  {experienceData.map((exp) => (
                    <button
                      key={exp.id}
                      type="button"
                      role="option"
                      aria-selected={activeTab === exp.id}
                      onClick={() => {
                        setActiveTab(exp.id);
                        setIsDrawerOpen(false);
                      }}
                      className={`w-full text-left min-h-11 px-4 py-3 rounded-xl border transition-all duration-300 break-words ${
                        activeTab === exp.id
                          ? 'bg-moonstone text-zinc-950 font-bold border-moonstone'
                          : 'bg-transparent border-moonstone-border/20 text-white'
                      }`}
                    >
                      <span className="text-sm leading-snug">{exp.company}</span>
                      <span className={`block text-xs mt-1 ${activeTab === exp.id ? 'text-zinc-700' : 'text-white/50'}`}>
                        {exp.period}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {renderExperienceContent(activeExperience)}
        </AnimatePresence>
      </div>

      {/* Desktop — sidebar tabs (unchanged) */}
      <div className="hidden lg:flex gap-24">
        <div className="flex flex-col w-1/3 gap-3">
          {experienceData.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(exp.id)}
              className={`btn-shine text-left px-6 py-4 rounded-xl border transition-all duration-300 ${
                activeTab === exp.id
                  ? 'bg-moonstone text-zinc-950 font-bold border-moonstone'
                  : 'bg-transparent border-moonstone-border/20 text-white hover:bg-white'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div className="w-2/3 min-h-[300px]">
          <AnimatePresence mode="wait">
            {renderExperienceContent(activeExperience)}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
