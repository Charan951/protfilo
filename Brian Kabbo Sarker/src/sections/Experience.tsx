import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('company1');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const experienceData = [
    {
      id: 'company1',
      company: 'Speshway Solutions Pvt. Ltd.',
      role: 'Full Stack Developer & Team Lead (Full-Time)',
      period: 'Nov 2024 – Present',
      isCurrent: true,
      points: [
        'Lead the architecture, development, deployment, and maintenance of scalable web and mobile applications using the MERN Stack and Flutter.',
        'Design and develop responsive, user-centric interfaces with React.js, TypeScript, Tailwind CSS, and modern frontend technologies.',
        'Build secure, scalable RESTful APIs with authentication, authorization, and third-party integrations using Node.js and Express.js.',
        'Design, optimize, and manage MongoDB databases to ensure high performance, scalability, and data integrity.',
        'Deploy, monitor, and maintain production applications on AWS, leveraging services such as EC2, S3, and cloud infrastructure best practices.',
        'Implement DevOps workflows using Docker, Kubernetes, Jenkins, and Terraform to automate CI/CD pipelines, infrastructure provisioning, and application deployments.',
        'Lead a development team by planning tasks, conducting code reviews, mentoring team members, and driving engineering best practices.',
        'Collaborate closely with clients, UI/UX designers, QA engineers, and stakeholders to deliver high-quality software aligned with business objectives.',
        'Troubleshoot production issues, optimize application performance, and ensure system reliability, security, and maintainability.',
        'Manage source code using Git/GitHub while following Agile methodologies and modern software development practices.',
        'Successfully delivered enterprise-grade solutions across Healthcare, Agriculture, HR Management, E-commerce, and other business domains.',
        'Continuously evaluate and adopt emerging technologies to enhance product quality, development efficiency, and overall user experience.',
      ],
    },
    {
      id: 'company2',
      company: 'Blackridge Research & Consulting',
      role: 'Software Developer (Full-Time)',
      period: 'Apr 2024 – 2025',
      isCurrent: false,
      points: [
        'Developed and maintained full-stack web applications using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).',
        'Designed responsive and user-friendly interfaces with React.js, TypeScript, Tailwind CSS, and modern UI libraries.',
        'Built secure RESTful APIs, implemented authentication and authorization, and integrated third-party services.',
        'Designed MongoDB database schemas and optimized backend performance for scalability and reliability.',
        'Deployed and managed applications on Amazon Web Services (AWS) using EC2, S3, and related cloud services.',
        'Collaborated with team members using Git and Agile development practices to deliver high-quality software.',
        'Participated in debugging, performance optimization, testing, and production issue resolution.',
        'Continuously explored and adopted new technologies to improve development efficiency and application performance.',
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
    <section id="journey" aria-label="Charan Teja Software Engineering Experience Screen" className="py-12 sm:py-16 lg:py-0 max-w-6xl mx-auto px-0 lg:px-6 min-w-0" style={{ overflow: 'clip' }}>
      {/* ─── Desktop — Scroll-driven Layout ─── */}
      <div className="hidden lg:flex" style={{ alignItems: 'flex-start' }}>

        {/* LEFT — Sticky Info Panel */}
        <div
          className="w-[45%] flex flex-col"
          style={{ position: 'sticky', top: 0, height: '100vh' }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: '-30px 0px' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                },
              },
            }}
            className="flex-shrink-0 pt-16 pb-4 border-b border-white/10"
          >
            <div className="flex items-center justify-between pr-8">
              <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#aaa] uppercase font-poppins">
                MY JOURNEY
              </h2>
              <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
                / EXPERIENCE
              </span>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col justify-start pt-16 pr-12 overflow-y-auto max-h-[calc(100vh-160px)] pr-4 scrollbar-thin">
            <div className="flex flex-col">

              {/* Ticker Counter */}
              <div className="flex items-center text-sm tracking-[0.3em] text-white/40 font-mono mb-3">
                <span>[</span>
                <div className="overflow-hidden flex items-center justify-center px-3" style={{ height: '1.4em' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeExperience.id}
                      initial={{ y: 24 }}
                      animate={{
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                        },
                      }}
                      exit={{ y: -24, transition: { duration: 0.15, ease: 'easeIn' } }}
                      className="whitespace-nowrap"
                    >
                      0{experienceData.findIndex(e => e.id === activeExperience.id) + 1}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span>/</span>
                <span className="px-3">02</span>
                <span>]</span>
              </div>

              {/* Role & Company */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`role-${activeExperience.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase leading-snug break-words">
                    {activeExperience.role}
                  </h3>
                  <p className="font-mono text-moonstone text-sm mt-1">{activeExperience.period}</p>
                </motion.div>
              </AnimatePresence>

              {/* Bullet Points */}
              <div className="mt-6 border-t border-white/5 pt-6">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={`points-${activeExperience.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                    className="space-y-4"
                  >
                    {activeExperience.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-white text-base leading-relaxed">
                        <span className="text-moonstone mt-1.5 flex-shrink-0">•</span>
                        <span className="break-words text-white/80">{point}</span>
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT — Company Cards Column */}
        <div className="w-[55%]">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="flex items-center justify-end px-8"
              style={{ minHeight: '100vh' }}
              onViewportEnter={() => setActiveTab(exp.id)}
              viewport={{ amount: 0.5 }}
            >
              <div className="relative w-full max-w-[500px] h-[320px]">
                <div className="absolute -inset-3 border border-moonstone/20 rounded-2xl" />
                <div className={`relative z-10 w-full h-full rounded-xl overflow-hidden shadow-2xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5 flex flex-col justify-between p-8 group transition-all duration-500 hover:border-moonstone/30 ${
                  index === 0 
                    ? 'bg-gradient-to-br from-indigo-950/40 via-slate-900/20 to-zinc-950/40' 
                    : 'bg-gradient-to-br from-teal-950/40 via-slate-900/20 to-zinc-950/40'
                }`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-widest text-white/40 font-mono uppercase">
                      [ COMPANY 0{index + 1} ]
                    </span>
                    <span className="text-[11px] font-normal text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <div className="my-auto py-4">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight group-hover:text-moonstone transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-medium text-moonstone mt-2 tracking-[0.05em]">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs text-white/40 font-mono">
                      {exp.isCurrent ? '● Active' : '○ Completed'}
                    </span>
                    <span className="text-[10px] tracking-widest text-moonstone uppercase font-bold group-hover:translate-x-1 transition-transform duration-300">
                      Scroll for details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ─── Mobile — stacked cards ─── */}
      <div className="lg:hidden flex flex-col items-center w-full min-w-0">
        
        {/* Heading */}
        <div className="w-full pb-4 border-b border-white/10 mb-10">
          <div className="flex items-center justify-between gap-3 min-w-0">
            <h2 className="text-lg sm:text-xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins truncate">
              MY JOURNEY
            </h2>
            <span className="text-[10px] sm:text-xs text-white/30 tracking-widest uppercase font-mono flex-shrink-0">
              / EXPERIENCE
            </span>
          </div>
        </div>

        {/* Stacked Cards */}
        <div className="flex flex-col gap-6 w-full">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.12, margin: '-20px 0px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`w-[92%] ${index % 2 === 0 ? 'self-start' : 'self-end'}`}
            >
              <div className="rounded-2xl border border-white/10 bg-moonstone-dim backdrop-blur-sm p-4 transition-all duration-300 hover:border-moonstone/30 hover:-translate-y-0.5">
                
                {/* Top row: company name + date pill */}
                <div className="flex items-start justify-between gap-2 mb-1 flex-row text-left">
                  <span className="text-base font-bold text-white leading-snug break-words min-w-0">
                    {exp.company}
                  </span>
                  <span className="text-[11px] font-normal text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap flex-shrink-0 mt-0.5">
                    {exp.period}
                  </span>
                </div>

                {/* Role + Current badge */}
                <div className="flex items-center gap-2 mb-3 justify-start">
                  <p className="text-[13px] font-semibold text-moonstone tracking-[0.04em]">
                    {exp.role}
                  </p>
                  {exp.isCurrent && (
                    <span className="inline-flex items-center text-[10px] font-semibold tracking-[0.04em] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 whitespace-nowrap flex-shrink-0">
                      Current
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-3" />

                {/* Bullet points */}
                <div className={`relative transition-all duration-500 ease-in-out overflow-hidden ${expandedCards[exp.id] ? 'max-h-[1200px]' : 'max-h-[160px]'}`}>
                  <ul className="flex flex-col gap-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-white leading-relaxed flex-row text-left">
                        <span className="w-1.5 h-1.5 rounded-full bg-moonstone flex-shrink-0 mt-[6px]" />
                        <span className="break-words text-white/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {!expandedCards[exp.id] && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0e1626] to-transparent pointer-events-none" />
                  )}
                </div>

                {/* Show More / Show Less Toggle Button */}
                <div className="flex justify-center mt-3 pt-2 border-t border-white/5">
                  <button
                    onClick={() => toggleCard(exp.id)}
                    className="flex items-center gap-1.5 text-xs text-moonstone hover:text-white transition-colors duration-300 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 hover:border-moonstone/30 cursor-pointer"
                  >
                    <span>{expandedCards[exp.id] ? 'Show Less' : 'Show More'}</span>
                    {expandedCards[exp.id] ? (
                      <ChevronUp size={13} className="transition-transform" />
                    ) : (
                      <ChevronDown size={13} className="transition-transform" />
                    )}
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
