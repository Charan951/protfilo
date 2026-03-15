import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Showcase from './sections/Showcase';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-moonstone/30 selection:text-moonstone-light">
      <BackgroundEffects />
      <CursorGlow />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Showcase />
        <Contact />
      </main>
      
      <footer className="py-20 text-center border-t border-moonstone-border/10 opacity-60">
        <p className="text-text-primary text-sm">
          &copy; {new Date().getFullYear()} Brian Kabbo Sarker. Created with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
