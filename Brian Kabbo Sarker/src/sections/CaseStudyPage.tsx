import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string | null;
  github: string | null;
  live: string | null;
  caseStudy?: {
    workflows: { title: string; steps: string[] }[];
    features: { title: string; desc: string }[];
    screens: { name: string; details: string }[];
    architecture: string;
  };
}

interface CaseStudyPageProps {
  project: Project;
  onClose: () => void;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ project, onClose }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Force scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    },
  };

  const screens = project.caseStudy?.screens || [];

  return (
    <div className="min-h-screen bg-[#04080f] text-white py-12 px-6 sm:px-8 lg:px-16 relative overflow-hidden select-text">
      
      {/* Background Subtle Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-moonstone/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Top Back Navigation Bar */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center pb-4 border-b border-white/10"
        >
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white uppercase tracking-widest cursor-pointer transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
          <span className="text-[10px] tracking-widest text-[#aaa] uppercase font-mono">
            [ Project Case Study ]
          </span>
        </motion.div>

        {/* 1. HEADER SECTION (Side-by-Side: text on left, image on right) */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center"
        >
          {/* Left Text Detail */}
          <div className="md:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono font-bold">
                [ {project.name} CASE STUDY ]
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mt-1">
                {project.name}
              </h1>
            </div>
            
            <p className="text-[#8aacbe] text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-zinc-950 transition-all duration-300"
                >
                  <Github size={16} />
                  View Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-xl border border-moonstone-border bg-transparent text-moonstone font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-zinc-950 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  Live Application
                </a>
              )}
            </div>
          </div>

          {/* Right Showcase Image */}
          <div className="md:col-span-5 relative group w-full flex justify-center">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-moonstone to-indigo-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-35 transition duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60 backdrop-blur-3xl shadow-2xl p-1.5">
              <img 
                src={project.image || '/images/logo.png'} 
                alt={`${project.name} showcase screen`}
                className="w-full h-auto max-h-[360px] rounded-xl object-contain"
              />
            </div>
          </div>
        </motion.div>

        {project.caseStudy && (
          <>
            {/* 2. HOW IT WORKS (WORKFLOWS) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={revealVariants}
              className="border-t border-white/5 pt-12 space-y-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono">[ SECTION 01 ]</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">How It Works</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.caseStudy.workflows.map((flow, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                    <h4 className="text-base font-bold text-moonstone tracking-wide">{flow.title}</h4>
                    <div className="relative pl-6 border-l border-white/10 space-y-4">
                      {flow.steps.map((step, idx) => (
                        <div key={idx} className="relative">
                          <span className="absolute -left-[30px] top-[4px] w-3 h-3 rounded-full bg-moonstone border-2 border-zinc-950" />
                          <p className="text-sm text-white/80 leading-relaxed font-medium">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. APP FEATURES */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={revealVariants}
              className="border-t border-white/5 pt-12 space-y-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono">[ SECTION 02 ]</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">App Features</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.caseStudy.features.map((feat, i) => (
                  <div key={i} className="flex gap-4 text-left">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-moonstone-dim border border-moonstone-border/20 text-moonstone font-mono font-bold flex items-center justify-center text-sm">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{feat.title}</h4>
                      <p className="text-sm text-[#8aacbe] leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 4. TECHNOLOGIES USED */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={revealVariants}
              className="border-t border-white/5 pt-12 space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono">[ SECTION 03 ]</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2.5 justify-start">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-moonstone-dim border border-moonstone-border/10 text-moonstone text-xs font-semibold uppercase tracking-wider cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 5. APP SCREENS (3D SLIDER) */}
            {screens.length > 0 && (
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={revealVariants}
                className="border-t border-white/5 pt-12 space-y-6"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono">[ SECTION 04 ]</span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">App Screens</h3>
                </div>
                <div className="relative w-full flex items-center justify-center py-6 sm:py-10 overflow-hidden">
                  <div className="flex items-center gap-4 sm:gap-8 max-w-full z-10">
                    
                    {/* Left Button */}
                    <button
                      onClick={() => setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1))}
                      className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white transition-all duration-300 cursor-pointer flex-shrink-0"
                      aria-label="Previous Screen"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    {/* Phone Container */}
                    <div className="relative flex items-center justify-center w-[280px] h-[520px] sm:w-[320px] sm:h-[580px]">
                      
                      {/* Left Screen Preview (Faded) */}
                      <div 
                        className="absolute right-full mr-[-60px] opacity-10 scale-75 blur-[1.5px] transition-all duration-500 hidden sm:block cursor-pointer"
                        onClick={() => setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1))}
                      >
                        <div className="w-[200px] h-[380px] rounded-2xl bg-zinc-900 border border-white/15 p-4 flex flex-col justify-between shadow-2xl select-none">
                          <span className="text-[8px] font-mono text-white/35">[ Screen 0{((activeScreenIndex - 1 + screens.length) % screens.length) + 1} ]</span>
                          <div className="text-xs font-bold text-white/60 truncate">{screens[(activeScreenIndex - 1 + screens.length) % screens.length].name}</div>
                          <div className="text-[10px] text-white/40 line-clamp-4">{screens[(activeScreenIndex - 1 + screens.length) % screens.length].details}</div>
                          <div className="h-6 w-6 rounded-full bg-white/5 border border-white/10" />
                        </div>
                      </div>

                      {/* Center Phone Frame */}
                      <div className="relative z-10 w-full h-full rounded-[40px] border-[6px] border-zinc-800 bg-black p-3.5 shadow-2xl transition-all duration-500 flex flex-col hover:border-moonstone/50">
                        {/* Dynamic Island */}
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-30">
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-950 ml-auto mr-4" />
                        </div>

                        {/* Screen Mockup */}
                        <div className="relative flex-1 rounded-[28px] overflow-hidden bg-[#0c1221] border border-white/5 p-6 flex flex-col justify-between pt-12 select-none">
                          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-moonstone/10 blur-3xl pointer-events-none" />
                          
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono text-moonstone font-semibold tracking-wider">
                              [ SCREEN 0{activeScreenIndex + 1} ]
                            </span>
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          </div>

                          <div className="my-auto text-left space-y-3">
                            <h4 className="text-lg sm:text-xl font-bold text-white leading-snug font-poppins">
                              {screens[activeScreenIndex].name}
                            </h4>
                            <div className="h-[2px] w-8 bg-moonstone" />
                            <p className="text-xs sm:text-sm text-[#8aacbe] leading-relaxed">
                              {screens[activeScreenIndex].details}
                            </p>
                          </div>

                          <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                            <span className="text-[8px] font-mono text-white/30 uppercase">
                              {project.name}
                            </span>
                            <span className="text-[9px] text-moonstone font-bold tracking-wider">
                              Active Preview
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Screen Preview (Faded) */}
                      <div 
                        className="absolute left-full ml-[-60px] opacity-10 scale-75 blur-[1.5px] transition-all duration-500 hidden sm:block cursor-pointer"
                        onClick={() => setActiveScreenIndex((prev) => (prev + 1) % screens.length)}
                      >
                        <div className="w-[200px] h-[380px] rounded-2xl bg-zinc-900 border border-white/15 p-4 flex flex-col justify-between shadow-2xl select-none">
                          <span className="text-[8px] font-mono text-white/35">[ Screen 0{((activeScreenIndex + 1) % screens.length) + 1} ]</span>
                          <div className="text-xs font-bold text-white/60 truncate">{screens[(activeScreenIndex + 1) % screens.length].name}</div>
                          <div className="text-[10px] text-white/40 line-clamp-4">{screens[(activeScreenIndex + 1) % screens.length].details}</div>
                          <div className="h-6 w-6 rounded-full bg-white/5 border border-white/10" />
                        </div>
                      </div>

                    </div>

                    {/* Right Button */}
                    <button
                      onClick={() => setActiveScreenIndex((prev) => (prev + 1) % screens.length)}
                      className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white transition-all duration-300 cursor-pointer flex-shrink-0"
                      aria-label="Next Screen"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 6. FINAL (SYSTEM ARCHITECTURE) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={revealVariants}
              className="border-t border-white/5 pt-12 space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono">[ SECTION 05 ]</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">System Architecture</h3>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/5 text-left">
                <p className="text-sm text-white/80 leading-relaxed font-mono">
                  {project.caseStudy.architecture}
                </p>
              </div>
            </motion.div>
          </>
        )}

        {/* Back to Home close button at bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center border-t border-white/10 pt-10 pb-16"
        >
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center min-h-11 px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-xs uppercase font-bold tracking-wider"
          >
            Back to Projects
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default CaseStudyPage;
