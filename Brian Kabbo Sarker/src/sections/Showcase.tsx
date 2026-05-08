import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string | null;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "WHAT AM I CRAVING?",
    description: "A smart food discovery platform that helps you find your next meal based on mood and cuisine preferences. Features a dynamic spinning wheel and filtering system.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    image: "/images/food-picker.png",
    github: "https://github.com/briankabbo/what-am-i-craving-for-frontend",
  },
  {
    id: 2,
    name: "PERSONAL PORTFOLIO V1",
    description: "A dark-themed corner of the internet where I prove I know what I'm doing. Built with React, TypeScript, and Tailwind CSS. Got this after approximately 47 rounds of tweaking the color code.",
    stack: ["React", "TypeScript", "Tailwind"],
    image: "/images/Portfolio.png",
    github: "https://github.com/briankabbo/brian-kabbo-sarker-portfolio",
  },
  {
    id: 3,
    name: "Bible Verse Web Extension",
    description: "A daily Bible verse Web extension with full Bangla and English support. One of the few that actually serves the Bangla-speaking believers. Comes with save, share, and verse search features baked in.",
    stack: ["React", "Typescript", "Node.js"],
    image: "/images/Bible_Mockup.png",
    github: "https://github.com/Marg0n/bible_verse_web_extension",
  },
  {
    id: 4,
    name: "PROJECT FOUR",
    description: "The final showcase piece, rounding out the selection of works. Perfect for demonstrating full-stack capabilities.",
    stack: ["React Native", "Firebase", "PostgreSQL"],
    image: null,
    github: "https://github.com/briankabbo",
  }
];

const Showcase: React.FC = () => {
  const [activeProject, setActiveProject] = React.useState(0);
  const project = projects[activeProject];

  return (
    <section
      id="works"
      className="max-w-6xl mx-auto px-6"
      style={{ overflow: 'clip' }}
    >
      {/* ── DESKTOP Two-column flex ────────────────────────────────────────── */}
      <div className="hidden lg:flex" style={{ alignItems: 'flex-start' }}>

        {/* 
          1. LEFT — Sticky Info Panel
        */}
        <div
          className="w-[45%] flex flex-col"
          style={{ position: 'sticky', top: 0, height: '100vh' }}
        >
          {/* Heading permanently visible at the top of the left panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="flex-shrink-0 pt-16 pb-4 border-b border-white/10"
          >
            <div className="flex items-center justify-between pr-8">
              <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#aaa] uppercase font-poppins">
                PET PROJECTS
              </h2>
              <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
                / PORTFOLIO
              </span>
            </div>
          </motion.div>

          {/* Project Info centered below heading */}
          <div className="flex-1 flex flex-col justify-start pt-16 pr-12">
            <div className="flex flex-col">
              {/* 1. Ticker Counter (Only number animates) */}
              <div className="flex items-center text-sm tracking-[0.3em] text-white/40 font-mono mb-3">
                <span>[</span>
                <div className="overflow-hidden flex items-center justify-center px-3" style={{ height: '1.4em' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject}
                      initial={{ y: 24 }}
                      animate={{ y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                      exit={{ y: -24, transition: { duration: 0.15, ease: 'easeIn' } }}
                      className="whitespace-nowrap"
                    >
                      0{activeProject + 1}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span>/</span>
                <span className="px-3">03</span>
                <span>]</span>
              </div>

              {/* 2. Title (Smooth Fade) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
                >
                  <h3 className="mb-4 text-2xl xl:text-3xl font-bold text-white tracking-tight uppercase leading-tight max-w-[90%] break-words">
                    {project.name}
                  </h3>
                </motion.div>
              </AnimatePresence>

              {/* 3. Description (Slower Smooth Fade) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }}
                >
                  <p className="mb-6 text-sm text-white/60 leading-relaxed max-w-[380px]">
                    {project.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Stack Tags */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tags-${activeProject}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                    exit={{ opacity: 0, y: -6, transition: { duration: 0.2 } }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] tracking-widest text-white/50 border border-white/20 px-3 py-1 uppercase rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* 
          2. RIGHT — Image Column 
          Page scrolls naturally through this stacked column.
        */}
        <div className="w-[55%]">
          {projects.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-end px-8"
              style={{ minHeight: '100vh' }}
              onViewportEnter={() => setActiveProject(index)}
              viewport={{ amount: 0.5 }}
            >
              <div className="relative w-full max-w-[500px]">
                <div className="absolute -inset-3 border border-moonstone/20 rounded-2xl" />
                <div className="relative z-10 w-full rounded-xl overflow-hidden shadow-2xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5 flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto block"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-900/50 flex items-center justify-center">
                      <span className="text-white/5 text-[10px] tracking-widest uppercase">No Preview available</span>
                    </div>
                  )}

                  {item.github && (
                    <motion.a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
                    >
                      <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transform translate-y-2 hover:translate-y-0 transition-transform duration-300">
                        <Github size={18} className="text-white" />
                        <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">View Project</span>
                      </div>
                    </motion.a>
                  )}
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </div>

      {/* ── MOBILE ───────────────────────────────────────────────────────── */}
      <div className="flex lg:hidden flex-col">
        {/* Heading */}
        <div className="pt-16 pb-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-[0.3em] text-[#aaa] uppercase font-poppins">
              PET PROJECTS
            </h2>
            <span className="text-xs text-white/30 tracking-widest uppercase font-mono">/ PORTFOLIO</span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-16 py-16 px-6">
          {projects.slice(0, 3).map((item, index) => (
            <div key={item.id} className="space-y-6">
              <div className="space-y-6">
                <div className="text-xs tracking-[0.3em] text-white/40 font-mono">
                  [ 0{index + 1} / 03 ]
                </div>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight uppercase leading-tight">
                    {item.name}
                  </h3>
                  <a href={item.github} target="_blank" rel="noopener noreferrer" className="mt-1 text-white/60 flex-shrink-0 hover:text-white transition-colors duration-300">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {item.image && (
                <div className="relative w-full">
                  <div className="absolute -inset-2 border border-moonstone/10 rounded-xl" />
                  <div className="relative z-10 w-full rounded-lg overflow-hidden shadow-xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto block"
                    />
                    {item.github && (
                      <motion.a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
                      >
                        <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transform translate-y-2 hover:translate-y-0 transition-transform duration-300">
                          <Github size={16} className="text-white" />
                          <span className="text-[9px] font-bold text-white tracking-[0.2em] uppercase">View Project</span>
                        </div>
                      </motion.a>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="text-[10px] tracking-widest text-white/50 border border-white/20 px-3 py-1 uppercase rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
