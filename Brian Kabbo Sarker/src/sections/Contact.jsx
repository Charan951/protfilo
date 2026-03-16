import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
        className="mb-20 border-b border-white/10 pb-4"
      >
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#aaa] uppercase px-0">CONTACT ME</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-text-secondary uppercase tracking-[0.4em] mb-8 font-bold text-xs">Have a project in mind?</p>
        
        <a 
          href="mailto:braiankabbo@gmail.com" 
          className="group inline-block"
        >
          <div className="overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold text-text-heading leading-[0.85] transition-transform duration-700 group-hover:scale-[1.02]">
              {"LET'S TALK".split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.05, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h2>
          </div>
          <div className="h-1 w-0 group-hover:w-full bg-moonstone transition-all duration-700 mx-auto mt-6" />
        </a>

        <div className="flex flex-wrap justify-center gap-6 mt-24">
          <a
            href="mailto:braiankabbo@gmail.com"
            className="btn-shine flex items-center gap-3 px-10 py-5 rounded-2xl border border-moonstone-border bg-transparent hover:bg-white transition-all duration-300 text-moonstone font-bold text-lg"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/brian-kabbo-sarker"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine flex items-center gap-3 px-10 py-5 rounded-2xl border border-moonstone-border bg-transparent hover:bg-white transition-all duration-300 text-moonstone font-bold text-lg"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
