import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero.tsx';
import Skills from './components/Skills.tsx';
import Education from './components/Education.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  // State to manage the menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
  
    sections.forEach((section) => observer.observe(section));
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  

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
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMenu}>Home</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={closeMenu}>Skills</a>
            <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} onClick={closeMenu}>Education</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={closeMenu}>Projects</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</a>

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
