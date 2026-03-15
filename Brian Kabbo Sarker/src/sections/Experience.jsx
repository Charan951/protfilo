import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('company1');

  const experienceData = [
    {
      id: 'company1',
      company: 'The Christian Co-Operative Credit Union',
      role: 'Trainee Software Developer (Full Time)',
      period: 'Nov 2024 – Present',
      points: [
        'Working on internal tools and web applications using .NET and C#.',
        'Collaborating with teams to implement modern UI and backend solutions.',
        'Learning and contributing to real-world enterprise projects.',
      ],
    },
    {
      id: 'company2',
      company: 'Wellessia',
      role: 'Video Editor (Full Time)',
      period: 'Aug 2024 – Nov 2024',
      points: [
        'Created promotional and tutorial videos for marketing campaigns.',
        'Edited and optimized video content for social media platforms.',
        'Worked with the creative team to enhance visual storytelling.',
      ],
    },
    {
      id: 'company3',
      company: 'Babuland LTD',
      role: 'Compliance Associate (Part-Time)',
      period: 'May 2022 – Oct 2023',
      points: [
        'Supported software projects with backend and frontend tasks.',
        'Assisted in database management and UI updates.',
        'Contributed to multiple small-scale development initiatives.',
      ],
    },
  ];

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="flex items-center justify-center gap-4 mb-20"
      >
        <div className="h-[1px] w-12 md:w-24 bg-moonstone/30" />
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-widest text-text-heading">EXPERIENCE</h2>
        <div className="h-[1px] w-12 md:w-24 bg-moonstone/30" />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Tabs */}
        <div className="flex flex-wrap md:flex-col md:w-1/3 gap-3">
          {experienceData.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(exp.id)}
              className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 ${
                activeTab === exp.id
                  ? 'bg-moonstone text-arctic-black font-bold border-moonstone'
                  : 'bg-moonstone-dim border-moonstone-border/10 text-text-primary hover:bg-moonstone-dim/20'
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
                  <h3 className="text-2xl font-bold text-text-heading">{exp.role}</h3>
                  <p className="font-mono text-moonstone text-sm">{exp.period}</p>
                  <ul className="space-y-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-text-primary text-lg">
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
