import { motion } from 'framer-motion';

const Showcase = () => {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="showcase" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="flex items-center justify-center gap-4 mb-20"
      >
        <div className="h-[1px] w-12 md:w-24 bg-moonstone/30" />
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-widest text-text-heading">SHOWCASE</h2>
        <div className="h-[1px] w-12 md:w-24 bg-moonstone/30" />
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="holographic-card rounded-[2rem] py-32 text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-7xl mb-8"
        >
          🚧
        </motion.div>
        <h3 className="text-4xl font-bold text-text-heading mb-6">Under Construction</h3>
        <p className="text-xl text-text-primary/70 max-w-xl mx-auto px-6">
          Projects are being prepared and will be showcased here soon. Each project is carefully curated to demonstrate specific skills and problem-solving approaches.
        </p>
      </motion.div>
    </section>
  );
};

export default Showcase;
