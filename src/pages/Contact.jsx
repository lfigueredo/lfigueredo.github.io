import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <motion.div 
      className="page-container contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contact-floating-wrapper">
        {/* Block 1: Say Hello Banner */}
        <section className="contact-hero-banner">
          <div className="contact-hero-image">
            <img src="/figures/contact_phone_booths.jpg" alt="London Red Phone Booths" />
          </div>
          <div className="contact-hero-text">
            <h1 className="contact-title">Say Hello</h1>
            <p className="contact-intro">
              Feel free to reach out for any good reason.<br/>
              Either to talk about a specific research topic or question, to start some collaboration, or just to schedule a coffee and discussion about humans and robots, I will respond as soon as I can!
            </p>
            <p className="contact-subintro">
              You can reach me either by email (preferable) or using the form below.
            </p>
          </div>
        </section>

        {/* Block 2: Form & Address */}
        <section className="contact-details-block">
          <div className="contact-sidebar">
            <p className="address-text">
              School of Computer Science<br/>
              University of Nottingham<br/>
              -<br/>
              Room B82a<br/>
              Jubilee Campus<br/>
              Wollaton Road<br/>
              Nottingham - NG8 1BB UK
            </p>
            <div className="email-link">
              <h3>Email</h3>
              <p>figueredo AT ieee.org</p>
            </div>
          </div>

          <div className="contact-form-side">
            <form className="wix-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" />
                </div>
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5"></textarea>
              </div>
              <button type="submit" className="send-btn">Send</button>
            </form>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="contact-map-block">
           <div className="map-placeholder">
             {/* Integrating a real map background look */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.7668612143093!2d-1.1891961!3d52.952044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c23565f3f009%3A0xc3ea915339908cf0!2sSchool%20of%20Computer%20Science%2C%20University%20of%20Nottingham!5e0!3m2!1sen!2suk!4v1713500000000!5m2!1sen!2suk" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
           </div>
        </section>

        <section className="social-contacts-bar">
          <p>Social Media - Contacts</p>
        </section>
      </div>
    </motion.div>
  );
}
