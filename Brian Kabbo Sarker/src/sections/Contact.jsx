import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-48 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <p className="text-text-secondary uppercase tracking-[0.4em] mb-12 font-bold text-sm">Have a project in mind?</p>
        
        <a 
          href="mailto:braiankabbo@gmail.com" 
          className="group inline-block"
        >
          <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-text-heading leading-tight transition-transform duration-500 group-hover:scale-105">
            LET'S<br />TALK
          </h2>
          <div className="h-1 w-0 group-hover:w-full bg-moonstone transition-all duration-700 mx-auto mt-4" />
        </a>

        <div className="flex flex-wrap justify-center gap-6 mt-24">
          <a
            href="mailto:braiankabbo@gmail.com"
            className="flex items-center gap-3 px-10 py-5 rounded-2xl glass-card hover:bg-moonstone-dim/20 transition-all duration-300 text-moonstone font-bold text-lg"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/brian-kabbo-sarker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-5 rounded-2xl glass-card hover:bg-moonstone-dim/20 transition-all duration-300 text-moonstone font-bold text-lg"
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
