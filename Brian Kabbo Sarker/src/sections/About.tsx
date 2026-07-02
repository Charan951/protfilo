import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
// Profile photo path from src/assets/images
import profilePhoto from '../assets/images/charanteja.jpg';

const About: React.FC = () => {
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    },
  };

  const techStack = [
    { category: 'Web & Mobile Apps', items: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Flutter', 'Tailwind CSS', 'HTML5 / CSS3'] },
    { category: 'Backend & Database', items: ['Node.js', 'Express.js', 'REST API Development', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { category: 'DevOps & Deployment', items: ['AWS Deployment', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git / GitHub', 'Vercel / Netlify'] },
  ];

  return (
    <section id="about" aria-label="About Charan Teja - Freelance Web Developer Screen" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: "-30px 0px" }}
        variants={revealVariants}
        className="mb-10 sm:mb-12 lg:mb-20 border-b border-white/10 pb-4"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase">ABOUT ME</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-24">
        {/* Profile Photo */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "-30px 0px" }}
          variants={revealVariants}
          className="md:w-2/5 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 border border-moonstone/20 rounded-2xl group-hover:border-moonstone group-hover:shadow-[0_10px_25px_-5px_rgba(224,231,255,0.25),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all duration-500" />
            <img 
              src={profilePhoto} 
              alt="Charan Teja - Freelance Web Developer Hyderabad" 
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10"
            />
          </div>
        </motion.div>

        {/* Bio Text */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "-30px 0px" }}
          variants={revealVariants}
          className="w-full md:w-3/5 space-y-5 sm:space-y-6 lg:space-y-8 min-w-0"
        >
          <div className={`relative transition-all duration-500 ease-in-out overflow-hidden md:max-h-none md:overflow-visible ${isBioExpanded ? 'max-h-[1000px]' : 'max-h-[180px] md:max-h-none'}`}>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed break-words">
              I'm <span className="text-moonstone font-semibold">Charan Teja</span>, a professional <span className="font-semibold text-white">Freelance Web Developer in Hyderabad</span> and <span className="font-semibold text-white">Full Stack Developer</span> specializing in the <span className="font-semibold text-white">MERN Stack</span>. I offer high-quality website development services, custom web applications, and cross-platform mobile apps using <span className="font-semibold text-white">Flutter</span> from conceptual design to cloud deployment.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed break-words mt-4">
              Whether you need custom website development for startups, responsive website design, or business automation software (such as custom HRMS, CRM, and ERP system development), I leverage modern technologies like <span className="font-semibold text-white">AWS Deployment</span>, <span className="font-semibold text-white">Docker</span>, and CI/CD pipelines to ensure secure, scalable, and high-performance business applications.
            </p>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 break-words mt-4">
              Based in Telangana, I offer affordable website development, website speed optimization, and ongoing website maintenance services. As a dedicated local website developer in Hyderabad, I help small businesses and corporate clients build SEO-friendly web products that drive results.
            </p>
            {!isBioExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#04080f] to-transparent pointer-events-none md:hidden" />
            )}
          </div>

          {/* Show More / Less button for mobile only */}
          <div className="flex md:hidden justify-center pt-2">
            <button
              onClick={() => setIsBioExpanded(!isBioExpanded)}
              className="flex items-center gap-1.5 text-xs text-moonstone hover:text-white transition-colors duration-300 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 hover:border-moonstone/30 cursor-pointer"
            >
              <span>{isBioExpanded ? 'Show Less' : 'Show More'}</span>
              {isBioExpanded ? (
                <ChevronUp size={13} />
              ) : (
                <ChevronDown size={13} />
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: "-30px 0px" }}
        variants={revealVariants}
        className="glass-card p-6 sm:p-8 lg:p-10 xl:p-16 rounded-2xl sm:rounded-[2rem] min-w-0"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 lg:mb-12 text-white">How I build things</h3>
        <div className="flex flex-col gap-6 sm:gap-8">
          {techStack.map((stack) => (
            <div key={stack.category} className="flex flex-col md:flex-row md:items-start gap-3 sm:gap-4 min-w-0">
              <h4 className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[#aaa] md:w-56 shrink-0 pt-0 md:pt-2 break-words">{stack.category}</h4>
              <div className="flex flex-wrap gap-3">
                {stack.items.map((item) => (
                  <motion.span 
                    key={item}
                    whileHover={{ 
                      scale: 1.05,
                      zIndex: 20,
                      borderColor: "rgba(224, 231, 255, 0.4)",
                      boxShadow: "0 0 8px rgba(224, 231, 255, 0.15)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20
                    }}
                    className="inline-block align-middle px-4 py-2 rounded-lg bg-moonstone-dim border border-moonstone-border/10 text-moonstone text-sm font-medium cursor-default relative transition-colors duration-300"
                  >
                    {item}
                  </motion.span>
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
