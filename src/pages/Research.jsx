import { motion } from 'framer-motion';
import './Research.css';

export default function Research() {
  return (
    <motion.div 
      className="page-container research-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Top Banner Override */}
      <section className="research-banner">
        <div className="research-banner-img-container">
          <img src="/figures/20220916_095715.jpg" alt="Messy Desk" className="research-banner-img" />
          <div className="research-banner-img-caption">Research Essentials for a Successful Deadline</div>
        </div>
        
        <div className="research-banner-content container">
          <div className="research-banner-text-box">
             <p>While I am updating this page with more details about my research, feel free to explore my last talk in Jan-2025 during the UK Robot Manipulation Workshop at KCL.</p>
             <button 
               className="btn-gold-wide" 
               onClick={() => window.open('https://docs.google.com/presentation/d/e/2PACX-1vT_KEseQrG7gXoHPyFJTMAHu6mAGJSd9UhEwJhlt3dhGIvgsv28N5Q4vv4FqlOd83SBbbux2AHKVsui/pub?start=false&loop=false&delayms=15000&slide=id.g30599dd8fa2_0_0', '_blank')}
             >
               Checkout my latest research in this talk! &gt;
             </button>
             <p className="small-text">Feel free to check out my CV which has some research information as well (see: About-Me to find my latest CV)</p>
          </div>
        </div>
      </section>

      {/* Main Content Box */}
      <section className="research-content-section container">
        <div className="research-content-card">
           <h2 className="holistic-title">Holistic Human-Robot Collaboration</h2>
           <p>My vision of robotics is an all-inclusive one. Particularly, when it comes to human-robot collaboration, a comprehensive view and understanding of both robot and human capabilities and limitations is critical for success.</p>
           <p>A perfectly designed planner that comprehends and takes into account different human factors can become useless if the robot is unable to satisfy its own constraints and/or execute the individual subtasks and/or connections. At the same time, executing a collaborative task (or even a co existence one) optimally (from the robot perspective) but without thinking about human safety, comfort, and preferences may lead to poor interaction, a lack of motivation from the human side, and even rejection to the robot counterpart \u2014 which defeats the purpose of HRC.</p>
           <p>My research takes an integrative approach, considering both robots and humans. My approach is a bottom-up one, providing first real-time collision-free (when possible) planners and controllers that optimize for safety and performance, satisfying geometric and force constraints while ensuring a general understanding and satisfaction of tasks and constraints. This involves considering human safety at all levels of actions and the capability of using multiple arms to plan more complex, sequential, and parallel tasks. Finally, taking all these aspects into account, we can integrate human implicit and explicit communication, preferences, and comfort.</p>
           <p>The topics below are critical for this view. The tabs will be updated whenever possible, and if not, feel free to check my previous presentations (see above) or just contact-me and have a chat.</p>
        </div>
      </section>

      <section className="research-coming-soon container">
        <div className="coming-soon-card">
          <h3 className="coming-soon-title">Coming Soon</h3>
          <p className="coming-soon-text">
            I am actively updating this website and curating more comprehensive content highlighting the innovative research happening within our group. Please stay tuned for detailed overviews of our projects, publications, and collaborative endeavors!
          </p>
        </div>
      </section>
    </motion.div>
  );
}
