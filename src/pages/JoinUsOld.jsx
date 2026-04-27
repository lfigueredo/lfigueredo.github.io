import { motion } from 'framer-motion';
import './JoinUs.css';
import './JoinUsOld.css';

export default function JoinUsOld() {
  return (
    <motion.div 
      className="page-container joinus-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="joinus-top-container">
        <section className="joinus-split-banner">
          <div className="joinus-image-half">
            <img 
              src="/figures/vlcsnap-2015-11-28-16h15m02s104_edited.jpg" 
              alt="Luis and Robot" 
              className="joinus-hero-img" 
            />
            <div className="joinus-image-overlay"></div>
          </div>
          
          <div className="joinus-text-half">
            <h1 className="page-title">Join us!</h1>
            
            <p className="intro-text">
              I am regularly seeking motivated MS, PhDs, and Postdoc researchers, as well as visiting researchers!<br/>
              If you are interested in my research and interested in joining the group, you can send me an email following the instructions below. As the volume of emails can be sometimes daunting, they will help me respond to you in a timely manner.
            </p>

            <h3 className="section-heading">What am I looking for!?</h3>
            <p className="body-text">
              My research group is small, so I can properly supervise and mentor my team, shape collaborations, boost each person's research visibility, and make sure everyone achieves their full potential. From the prospective candidates, I mainly expect motivation to do research, curiosity to ask right (and wrong) questions, and enthusiasm to work toward solutions. My research spans several disciplines and directions, so I am not looking for any specific background. I will adapt the research project to fit your interests and strengths. I also encourage applicants from all backgrounds to apply (even if you are not certain that you meet every criterion listed). Particularly, research shows women and individuals from underrepresented groups may hesitate to apply unless they meet every point. To counteract this, I take a flexible approach to this - I'm really keen to hear from people with different backgrounds and experiences who can bring fresh perspectives to the table.
            </p>

            <h3 className="section-heading">What students should look for?</h3>
            <p className="body-text">
              As a suggestion, MS and Ph.D. applicants should first make sure that the lab works on a topic they are interested in. Research requires enthusiasm for the topic! You should talk to your potential supervisor and ask about the lab structure/culture. How many people are in the lab? Do they stay in the lab? Do students work with senior students (common in big labs), with postdocs, or directly with professors? Is he/she open to your ideas and to help you with them? What have previous lab members done after finishing?<br/>
              A good idea is to talk to current and former students who may give way important information.<br/>
              Feel free to contact all my previous/current students (Check-out the Our Team page to find them).
            </p>

            <p className="pick-wisely body-text">Finding a supervisor is an important decision. Pick wisely. :)</p>
          </div>
        </section>

        <section className="open-positions-banner expanded-positions">
          <div className="container positions-flex" style={{ alignItems: 'flex-start' }}>
            <div className="icon-side">
              <span className="robot-icon">🤖📢</span>
            </div>
            <div className="details-side">
                <h2>Open Positions - 2025 - <span className="red-text">Apply Until March 15, 2025</span></h2>
                <h3>1 Fully funded PhD Studentship in the School of Computer Science - UoN</h3>
                <a href="#" className="link-underline">See more details about the application (link)</a>

                <p className="body-text" style={{ marginTop: '1.5rem' }}>
                  If you are interested in applying for a PhD position with us, please send an email with the subject "[Prospective PhD Candidate - UoN - Topic]" to my email (luis.figueredo AT nottingham.ac.uk).<br/>
                  Please select one of the topics below, and/or feel free to suggest a new one.
                </p>

                <p className="body-text" style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '4px' }}>
                  <strong>To Apply:</strong> Interested candidates are invited to submit their application, including a <strong>(1) CV</strong> with contact information for 2 references, <strong>(2) academic transcripts</strong>, <strong>(3) a cover letter</strong> (Max.: 1500 Chars).<br/>
                  <br/>
                  Please contact me as soon as possible as there are only 2 positions available.
                </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
