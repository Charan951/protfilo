import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('company1');

  const experienceData = [
    {
      id: 'company1',
      company: 'The Christian Co-Operative Credit Union',
      role: 'Trainee Software Developer (Full Time)',
      period: 'Nov 2024 – Present',
      points: [
        'Developed and maintained applications using C# and .NET',
        'Monitored and resolved system issues in a 24/7 NOC environment to ensure service continuity.',
        'Supported ERP and financial application systems through troubleshooting and performance optimization.',
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

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="journey" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-20 border-b border-white/10 pb-4"
      >
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#aaa] uppercase px-0">MY JOURNEY</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Tabs */}
        <div className="flex flex-wrap md:flex-col md:w-1/3 gap-3">
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

        {/* Content */}
        <div className="md:w-2/3 min-h-[300px]">
          <AnimatePresence mode="wait">
            {experienceData.map((exp) => (
              exp.id === activeTab && (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="font-mono text-moonstone text-sm">{exp.period}</p>
                  <ul className="space-y-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-white text-lg">
                        <span className="text-moonstone mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
