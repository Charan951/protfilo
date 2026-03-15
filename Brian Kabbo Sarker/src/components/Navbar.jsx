import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      id="navbar"
      className="fixed top-6 left-1/2 z-50 w-[90%] max-w-4xl"
    >
      {/* Desktop Nav (Pill) */}
      <div className={`hidden md:flex justify-center items-center space-x-10 px-10 py-4 rounded-full border border-moonstone-border/10 shadow-2xl transition-all duration-400 ${isScrolled ? 'bg-arctic-black/80 backdrop-blur-2xl' : 'bg-arctic-black/70 backdrop-blur-xl'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav-link font-inter font-medium text-text-secondary hover:text-moonstone transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Nav Bar (Top Bar) */}
      <div className={`md:hidden flex justify-between items-center px-6 py-4 rounded-full border border-moonstone-border/10 shadow-2xl bg-arctic-black/90 backdrop-blur-xl transition-all duration-300`}>
        <div className="text-text-heading font-extrabold text-2xl tracking-tighter">BKS</div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-text-heading focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-20 left-0 right-0 p-8 rounded-3xl border border-moonstone-border/10 shadow-2xl bg-arctic-black/98 backdrop-blur-2xl flex flex-col items-center space-y-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-heading text-xl font-bold hover:text-moonstone transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
