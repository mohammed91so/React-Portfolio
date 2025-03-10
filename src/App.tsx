import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero.tsx';
import Skills from './components/Skills.tsx';
import Education from './components/Education.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">MOHAMMED EL HARBOULI</a>
            
            <button className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
              <a href="#home" className="nav-link">Home</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#education" className="nav-link">Education</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;