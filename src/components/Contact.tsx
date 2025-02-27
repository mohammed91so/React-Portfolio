import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          Get in <span className="highlight">Touch</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" size={20} />
                <span>mohammedelharbouli91@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={20} />
                <span>+212 612345678</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" size={20} />
                <span>Tetouan, Morocco</span>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                rows={4}
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}