import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NewsSection from '../components/NewsSection';
import KeepInTouch from '../components/KeepInTouch';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">

      {/* ═══════════════════════════════════════════════
          HERO SECTION – sepia themed, zoom on right photo
          ═══════════════════════════════════════════════ */}
      <section className="hero-section">
        {/* Left Text Block */}
        <motion.div
          className="hero-text-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Luis Figueredo</h1>
          <h2 className="hero-subtitle">Assistant Professor</h2>

          <div className="hero-bio">
            <p>Welcome to my website!<br />
              Here, you will find a little about me, my research, publications, cool (and hopefully educative) robotic videos, some interesting resources, and the latest news about my lab and my research group. Feel free to explore the website and contact me.</p>
            <br />
            <p>Well, let me start with a short bio about myself.<br />
              My work is currently focused on the many challenges involving <strong>human-centric robotics</strong>. Particularly, my goal is to build intelligent robots that help and assist humans in performing different tasks in a safe, efficient, natural, and comfortable manner. These constraints are recurrent in my research, which spams through multiple areas of knowledge, e.g., geometric methods for manipulation and control, manipulation of complex real-world objects, cooperative manipulation, safe physical human-robot interaction, implicit and explicit human-robot communication, biomechanics-aware assistive robotics, and core concepts of control theory and geometry algebra.</p>
            <br />
            <p>Finally, I am a strong believer that real-world robotics challenges can only be addressed through interdisciplinarity, collaborations, and lots of coffee.</p>
          </div>

          <div className="hero-buttons">
            <Link to="/research" className="btn-gold">Research</Link>
            <Link to="/publications" className="btn-gold">Publications</Link>
            <Link to="/videos" className="btn-gold">Videos</Link>
            <Link to="/join" className="btn-gold">Join us!</Link>
            <Link to="/contact" className="btn-gold">Contact</Link>
          </div>
        </motion.div>

        {/* Right Photo – KI Rat photo with sepia + zoom-out animation */}
        <div className="hero-image-block">
          <motion.img
            src="/figures/KI Rat_WMW5323.jpg"
            alt="Luis Figueredo with robot arm"
            className="hero-photo"
            initial={{ scale: 1.18 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 3.5, ease: 'easeOut' }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          NEWS SECTION
          ═══════════════════════════════════════════════ */}
      <NewsSection />

      {/* ═══════════════════════════════════════════════
          KEEP IN TOUCH / CONTACT
          ═══════════════════════════════════════════════ */}
      <KeepInTouch />

    </div>
  );
}
