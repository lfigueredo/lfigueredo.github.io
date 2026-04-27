import { motion } from 'framer-motion';
import './KeepInTouch.css';

export default function KeepInTouch() {
  return (
    <section id="contact" className="parallax-section wix-contact-container">
      <div 
        className="parallax-bg" 
        style={{ backgroundImage: 'url(/figures/vlcsnap-2015-11-28-16h15m02s104.png)', backgroundAttachment: 'fixed', opacity: 0.4 }}
      />
      <div className="parallax-content container text-center">
        <h2 className="contact-title">Keep in touch!</h2>
        
        <div className="contact-columns">
          <div className="contact-col">
            <h4>New PhD Positions!</h4>
            <div className="section-divider"></div>
            <p>We are watching for new announcements and fully funded positions in human-robot collaboration!</p>
          </div>
          

          <div className="contact-col">
            <h4>MSc Projects and UG Projects @ Nottingham!</h4>
            <div className="section-divider"></div>
            <p>Calling for hard-working students looking to push the boundaries of intelligent robotics.</p>
          </div>
          
          <div className="contact-col">
            <h4>Feedback</h4>
            <div className="section-divider"></div>
            <p>If you encounter any issues with this website (or want to grab coffee), please send me an email.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
