import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_i20afw8', // EmailJS service ID
          'template_rsdih9m', // EmailJS template ID
          form.current,
        'tZrqQU9fpRlzbEJVm'   // EmailJS public key
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          alert('Message sent!');
        },
        (error) => {
          console.error('Error:', error.text);
          alert('Something went wrong.');
        }
      );
  };
}
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
                <span>contact@suport.com</span>
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

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" name="name" id="name" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name="email" id="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea name="message" id="message" rows={4} className="form-textarea" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
