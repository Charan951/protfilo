import React from 'react';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Showcase from './sections/Showcase';
import Contact from './sections/Contact';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-moonstone/30 selection:text-moonstone-light">
      <BackgroundEffects />
      <CursorGlow />
      
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Navbar />

        <main className="flex-1 lg:ml-[120px] lg:mr-[60px] px-6 lg:pl-5 lg:pr-5">
          <Hero />
          <About />
          <Experience />
          <Showcase />
          <Contact />
          
          <footer className="py-12 text-center opacity-40">
            <p className="text-[#aaa] text-sm tracking-widest uppercase">
             © Charan Teja
            </p>
          </footer>
        </main>

        <aside className="fixed right-0 top-1/2 -translate-y-1/2 w-[60px] z-50 hidden lg:flex flex-col items-center space-y-6 text-[#aaa] pr-4">
          <a href="https://www.linkedin.com/in/ramanakulam-charan-teja-6448ba245/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 min-h-[44px] flex items-center">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/Charan951" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 min-h-[44px] flex items-center">
            <Github size={20} />
          </a>
          <a href="mailto:pcharan214@gmail.com" className="hover:text-white transition-colors duration-300 min-h-[44px] flex items-center">
            <Mail size={20} />
          </a>
        </aside>
      </div>
    </div>
  );
}

export default App;
