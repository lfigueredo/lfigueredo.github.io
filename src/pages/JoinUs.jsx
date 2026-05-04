import { motion } from 'framer-motion';
import './JoinUs.css';

export default function JoinUs() {
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
              src="/figures/join_us_hero_wix.jpg" 
              alt="Luis and Robot" 
              className="joinus-hero-img" 
            />
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
      </div>

      <div className="joinus-bottom-blocks">
        <section className="ms-block container block-card">
          <div className="ms-left">
            <h3 className="applicant-title">MS Students @ Nottingham</h3>
            <p className="body-text">
              If you are interested in applying for an MS position with me for this summer, please send an email with the subject "[Prospective MS Candidate - UoN - Topic]" to my email (luis.figueredo AT nottingham.ac.uk).
            </p>

            <p className="body-text small-margin-top">
              To Apply: Interested candidates are invited to submit their application, including a (1) CV and (2) academic transcript.
            </p>
          </div>
          <div className="ms-right">
            <p className="chart-group-text">
              For other positions with other PIs, please<br/>
              check the <a href="https://www.chartresearch.org/" target="_blank" rel="noopener noreferrer">CHART Group homepage (link)</a>
            </p>
          </div>
        </section>

        <section className="applicant-wrapper-card container block-card">
          <div className="applicant-item right">
            <h3 className="applicant-title">Prospective Postdoc Researchers</h3>
            <p className="body-text">
              If you are interested in joining the group as a postdoc, please email me (figueredo AT ieee.org) with the subject "[Prospective Postdoc]". At this moment, I do not have any funded position, but I would be happy to work with you in obtaining external funding for your postdoctoral research.
            </p>
          </div>

          <div className="applicant-item left">
            <h3 className="applicant-title">For PhD Applicants</h3>
            <p className="body-text">
              If you are interested in applying for a PhD position with us, please send an email with the subject "[Prospective PhD Candidate]" to my email (figueredo AT ieee.org). Please include a copy of your CV and some additional information about you and your experience with, e.g., robotics, control, ML, coding (c++, python, matlab), papers etc. No specific experience is required, but knowing your background helps me find a fit for you. Finally, I would also appreciate it if you could briefly mention which research topic in the group interested you and why.
            </p>
            <p className="body-text">
              * Candidates who are applying for external fellowships are also very welcome. If you already have an external fellowship, it should be even easier for you to find a spot (in any lab) since you are self-funded.
            </p>
          </div>

          <div className="applicant-item right">
            <h3 className="applicant-title">Master Students</h3>
            <p className="body-text">
              I am regularly looking for motivated MS students who love research and/or robotics. Most of the MS students that I have mentored finished their thesis with an IROS/ICRA/CDC/ACC publication. If you are interested, I will also guide your MS thesis with a publication in mind. However, the research/thesis work should last at least 6 months. If you are interested, please email me (figueredo AT ieee.org) with the subject "[Prospective MS Student]".
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
