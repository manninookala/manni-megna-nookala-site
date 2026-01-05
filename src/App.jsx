import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ChevronUp } from 'lucide-react';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .w-36 { width: 3rem; }
          .h-0\\.5 { height: 0.35rem; }
        `
      }} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg transition hover:bg-cyan-600 hover:shadow-xl dark:bg-cyan-600 dark:hover:bg-cyan-700"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}

export default App
