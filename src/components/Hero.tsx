import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import photo from '../img/name.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">MOHAMMED EL HARBOULI</span>
            </h1>
            
            <h2 className="hero-subtitle">
              I'm a <span className="highlight">Software Developer</span>
            </h2>
            
            <p className="hero-description">
              Welcome! I'm a passionate developer who thrives on building, learning, and exploring new technologies.
              From crafting innovative solutions to tackling complex problems,
              I’m always eager to create meaningful and impactful projects.
              My work reflects my journey, skills, and dedication—let’s connect and build something great together!
            </p>

            <div className="social-links">
              <a href="https://github.com/mohammed91so" target='_blanck' className="social-icon">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mohammed-el-harbouli-04850b305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blanck' className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
            </div>


            <div className="btn-groupe">
              <a href="#contact" className="button">Get in Touch</a>
              <a href="" className="hire-button">Hire Me</a>
            </div>

          </div>

          <div className="hero-image">
          <img 
            src={photo} 
            alt="Profile" 
            className="profile-image"
          />
          </div>
        </div>
      </div>
    </section>
  );
}