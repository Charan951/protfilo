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
      isCurrent: true,
      tags: ['FinTech', 'ERP Systems', 'NOC', '.NET', 'React', 'TypeScript'],
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
      isCurrent: false,
      tags: ['Video Editing', 'Color Grading', 'Motion Graphics', 'Sound Design'],
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
      isCurrent: false,
      tags: ['Compliance', 'Quality Assurance', 'Operations', 'Team Leadership'],
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

      {/* ─── Mobile — vertical timeline cards (≤ 1023px) ─── */}
      <div className="lg:hidden">
        <div className="relative flex flex-col" style={{ paddingLeft: '52px' }}>
          {/* Vertical timeline line */}
          <div
            className="absolute top-4 bottom-4 w-px bg-white/10"
            style={{ left: '19px' }}
          />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="relative pb-6 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div
                className="absolute z-10 flex items-center justify-center"
                style={{ left: '-33px', top: '18px' }}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#04080f] border-2 border-white/20 transition-all duration-300 group-hover:border-moonstone group-hover:bg-moonstone/20" />
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-moonstone-dim backdrop-blur-sm p-4 transition-all duration-300 group-hover:border-moonstone/30 group-hover:-translate-y-0.5">
                {/* Top row: company + date pill */}
                <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                  <div className="flex items-center gap-2 flex-wrap min-w-0">
                    <span className="text-base font-bold text-white leading-snug break-words">
                      {exp.company}
                    </span>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center text-[10px] font-semibold tracking-[0.04em] px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-500/20 whitespace-nowrap flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-normal text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap flex-shrink-0 mt-0.5">
                    {exp.period}
                  </span>
                </div>

                {/* Role */}
                <p className="text-[13px] font-semibold text-moonstone tracking-[0.04em] mb-3">
                  {exp.role}
                </p>

                {/* Divider */}
                <div className="h-px bg-white/8 mb-3" />

                {/* Bullet points */}
                <ul className="flex flex-col gap-2 mb-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-white/60 leading-relaxed font-light">
                      <span className="w-1 h-1 rounded-full bg-moonstone flex-shrink-0 mt-[7px]" />
                      <span className="break-words">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-normal px-2.5 py-1 rounded-full bg-moonstone/10 text-moonstone/70 border border-moonstone/15 tracking-[0.02em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Desktop — sidebar tabs (unchanged) ─── */}
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
