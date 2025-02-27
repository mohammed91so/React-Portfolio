import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://github.com/mohammed91so" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-el-harbouli-04850b305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-icon">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-icon">
              <Instagram size={20} />
            </a>
          </div>

          <p className="footer-text">
            © {new Date().getFullYear()} NAME. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}