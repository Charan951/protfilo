import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Github, Mail, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuContainerVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.25 },
    },
  };

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Works', href: '/works', id: 'works' },
    { name: 'Journey', href: '/journey', id: 'journey' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/ramanakulam-charan-teja-6448ba245/', label: 'Ramanakulam Charan Teja LinkedIn Profile' },
    { icon: <Github size={20} />, href: 'https://github.com/Charan951', label: 'Ramanakulam Charan Teja GitHub Portfolio' },
    { icon: <Mail size={20} />, href: 'mailto:pcharan214@gmail.com', label: 'Email Ramanakulam Charan Teja' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-[120px] z-50 hidden lg:flex flex-col items-start pl-6 justify-center">
        <div className="flex flex-col items-start space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id, link.href)}
              className={`relative group text-[13px] tracking-[0.2em] transition-colors duration-300 min-h-[44px] flex items-center whitespace-nowrap ${
                activeSection === link.id ? 'text-white' : 'text-[#aaa] hover:text-white'
              }`}
            >
              {link.name}
              <span 
                className={`absolute left-0 bottom-[-4px] h-[1px] bg-white transition-transform duration-300 ease-out origin-left ${
                  activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
                style={{ width: '100%' }}
              />
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile Nav Top Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 lg:hidden px-4 sm:px-6 py-3 sm:py-4 flex justify-end items-center pointer-events-none">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white min-h-[44px] min-w-[44px] flex items-center justify-center pointer-events-auto"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-6 sm:gap-8 px-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <motion.a
                variants={menuItemVariants}
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id, link.href)}
                className={`text-xl sm:text-2xl tracking-[0.2em] sm:tracking-[0.3em] min-h-11 flex items-center transition-colors duration-300 ${
                  activeSection === link.id ? 'text-white' : 'text-[#aaa]'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              variants={menuItemVariants}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 text-[#aaa]"
            >
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer me'}
                  aria-label={social.label} 
                  title={social.label} 
                  className="hover:text-white transition-colors min-h-11 min-w-11 flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
