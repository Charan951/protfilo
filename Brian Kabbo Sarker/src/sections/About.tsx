import React from 'react';
import { motion } from 'motion/react';
// Profile photo path from src/assets/images
import profilePhoto from '../assets/images/profile-photo.jpg';

const About: React.FC = () => {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    },
  };

  const techStack = [
    { category: 'Languages & Frameworks', items: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Python', 'xUnit / Jest'] },
    { category: 'Backend & Databases', items: ['REST API','JWT Auth', 'PostgreSQL','MySQL','Redis'] },
    { category: 'AI Integration', items: ['OpenAI API','LangChain','RAG', 'Embeddings','Vector Database','AI Agents', 'Prompt Engineering'] },
    { category: 'Infrastructure & DevOps', items: ['Git', 'GitHub', 'Render', 'Vercel', 'Docker', 'Azure','CI/CD'] },
  ];

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-20 border-b border-white/10 pb-4"
      >
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#aaa] uppercase px-0">ABOUT ME</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-16 mb-24">
        {/* Profile Photo */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="md:w-2/5 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 border border-moonstone/20 rounded-2xl group-hover:border-moonstone/40 transition-colors duration-500" />
            <img 
              src={profilePhoto} 
              alt="Brian Kabbo Sarker" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10"
            />
          </div>
        </motion.div>

        {/* Bio Text */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="md:w-3/5 space-y-8"
        >
          <p className="text-xl text-white leading-relaxed">
            I'm <span className="text-moonstone font-semibold">Brian Kabbo Sarker</span>, a full-stack software developer focused
            on building interactive and reliable web applications.
          </p>
          <p className="text-xl text-white leading-relaxed">
            I hold a Bachelor degree in Computer Science & Engineering from <span className="text-moonstone font-semibold">Green University of Bangladesh</span>.
          </p>
          <p className="text-xl leading-relaxed text-white/90">
            My strongest skill is learning fast and adapting quickly. I work well in team environments, value clear
            communication, and enjoy improving ideas through collaboration and iteration.
          </p>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="glass-card p-10 md:p-16 rounded-[2rem]"
      >
        <h3 className="text-3xl font-bold mb-12 text-white">How I build things</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {techStack.map((stack) => (
            <div key={stack.category}>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-[#aaa] mb-6">{stack.category}</h4>
              <div className="flex flex-wrap gap-3">
                {stack.items.map((item) => (
                  <span 
                    key={item}
                    className="px-4 py-2 rounded-lg bg-moonstone-dim border border-moonstone-border/10 text-moonstone text-sm font-medium hover:bg-moonstone-dim/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
