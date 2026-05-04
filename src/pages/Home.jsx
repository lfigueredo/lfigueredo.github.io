import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import NewsSection from '../components/NewsSection';
import KeepInTouch from '../components/KeepInTouch';
import './Home.css';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

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

          <div className="hero-bio" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p>Here, you will find a little about me, the research from my team, publications, cool and hopefully educational robotic videos, useful resources, and the latest news from my group. Feel free to explore and get in touch for a talk about robots, humans, music, or just coffee.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <p>Well, let me start with our research.</p>
              <p>Our work is driven by a simple but ambitious question. How can we build intelligent machines that move beyond the lab and become reliable, graceful, and helpful partners in our daily lives?</p>
              <p>For us, this means building holistic robotics. Intelligent systems where safety, physical intelligence, and natural interaction are designed together from the ground-up. It also means that interdisciplinarity is a must. This has led me to work with amazing people across manipulation, control, planning, geometric methods, robot-learning, and pHRI.</p>
            </div>
            
            <p>
              Where do I come into all this?{' '}
              {!isExpanded && (
                <span 
                  onClick={() => setIsExpanded(true)}
                  style={{ color: 'var(--accent-gold)', cursor: 'pointer', fontWeight: '500', textDecoration: 'underline' }}
                >
                  .... Read more
                </span>
              )}
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                  exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <p>Well, this interdisciplinarity has shaped my journey from the start. During my PhD at the Univ. of Brasília (UnB) and the Massachusetts Inst. of Technology (MIT), I worked on geometric methods and control for reactive multi-arm manipulation, which led to award-winning live-demos and thesis. With this core layer, I secured a Horizon Marie Skłodowska-Curie Individual Fellowship (MSCA-IF), building the basis for my work on physical intelligence and biomechanics-aware approaches for safer and more comfortable pHRI, including the RhuMAn toolbox, which was recognised by the EU Commission’s Innovation Radar. Before joining Nottingham, I worked at the Munich Inst. of Robotics &amp; Machine Intellig. (MIRMI) at TUM, where I coordinate the Geriatronics Lighthouse Initiative, Project X, and founded our annual Geriatronics Summit. This period expanded my work towards safety-aware robotics, slosh-free robotics, shared autonomy, learning-based manipulation, and language-guided robot motion together with colleagues from Microsoft. These contributions, alongside EU projects, funded collaborations, and large interdisciplinary robotics initiatives, led to my appointment as the first Associated Fellow of MIRMI and to my recognition as an IEEE ICRA New Generation Star.</p>
                  <div>
                    <span 
                      onClick={() => setIsExpanded(false)}
                      style={{ color: 'var(--accent-gold)', cursor: 'pointer', fontWeight: '500', textDecoration: 'underline' }}
                    >
                      Read less
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{ color: 'var(--accent-gold)', fontSize: '0.6rem', letterSpacing: '4px', margin: '-0.3rem 0 -0.5rem 0', width: '50%', textAlign: 'left' }}>
              ● ● ● ● ● ● ●
            </div>

            <p>Overall, this has shaped the main interests of our group today, bringing together geometric methods for robot control and planning, safety in robotics, biomechanics-aware manipulation, robot learning, implicit and explicit HRI communication, and AI-based multimodal interaction. Basically, our goal is to do research that starts from beautiful technical ideas but ends up on real robots. Ideally, robots that people can touch, test, challenge, and occasionally try to break.</p>
            <p>Finally, I am a strong believer that real-world robotics challenges can only be addressed through interdisciplinarity, collaboration, curiosity, and lots of coffee.</p>
          </div>

          <div className="hero-buttons">
            <Link to="/research" className="btn-gold">Research</Link>
            <Link to="/team" className="btn-gold">Our Team</Link>
            <a href="https://scholar.google.com/citations?user=ppZN58sAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="btn-gold">Publications</a>
            <a href="https://www.youtube.com/@figueredo_robotics" target="_blank" rel="noopener noreferrer" className="btn-gold">Videos</a>
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
