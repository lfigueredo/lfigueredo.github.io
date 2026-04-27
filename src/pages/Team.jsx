import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaGlobe, FaGraduationCap } from 'react-icons/fa';
import './Team.css';

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Luis Figueredo",
      title: "Assistant Professor, University of Nottingham",
      roleLabel: "Associated Fellow | MIRMI, TUM \u2022 Secretary | IEEE UK & Ireland RAS",
      image: "/figures/team_profiles/luis_figueredo.jpg",
      bio: [
        "Dr. Luis Figueredo is an Assistant Professor at the School of Computer Science at the University of Nottingham, UK. He holds a Best PhD Thesis Award from the University of Brasilia, Brazil, with a Sandwich period of 2 years at the CSAIL Lab at the Massachusetts Institute of Technology (MIT). For his awarded thesis work on multi-arm manipulation, he has also received multiple awards for implementation and open-software distribution, such as the Rethink Robotics Individual Award, and best demos at IROS and ICAPS.",
        "After his PhD, Luis was awarded the prestigious Marie Sk\u0142odowska-Curie Individual Fellowship to conduct his research at Leeds. During this period, he pioneered work on biomechanics-aware manipulation planning and developed open-source AI tools acknowledged by the EU Innovation Radar.",
        "Prior to his current position, Luis was the scientific coordinator of the Geriatrics Lighthouse Initiative at the Technical University of Munich (TUM) and founder-organiser of the Geriatronics Summit, which happens annually in Germany. For his achievements at TUM, he was recognised as the first Associated Fellow at the Munich Institute of Robotics and Machine Intelligence (MIRMI) at TUM, and most recently, as an IEEE Senior Member and IEEE ICRA New Generation Star.",
        "With a robust interdisciplinary background, Dr. Figueredo has contributed significantly to the fields of physical human-robot interaction (pHRI), safety in robotics, biomechanics-aware manipulation, Implicit and explicit HRI communication, AI-based and multimodal HRI, natural language robotics, cooperative robotics, and geometric methods and control for robotics."
      ],
      links: []
    },
    {
      name: "Yuhe Gong",
      title: "PhD Student",
      roleLabel: "Conference Events Co-Chair | IEEE RAS SAC",
      image: "/figures/team_profiles/yuhe_gong.jpg",
      bio: [
        "Robotics Researcher focusing on autonomous manipulation, dynamic system control, and physical human-robot interaction (pHRI)."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://yuhegong.github.io/" }
      ]
    },
    {
      name: "Koyo Fujii",
      title: "PhD Student",
      roleLabel: "Co-supervised with Dr. Aly Magassouba",
      image: "/figures/team_profiles/koyo_fujii.jpg",
      bio: [
        "Research Topic: Physically Grounded Multimodal Model for safe embodied AI.",
        "Winner of the PhyRC Challenge @ ICRA-25 as part of the RoboNotts team for Bed Bath Tracking."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://www.nottingham.ac.uk/computerscience/news/chart-robonotts-team-win-physical-robotic-caregiving-challenge.aspx" }
      ]
    },
    {
      name: "Jose Alex Chandy",
      title: "PhD Student",
      roleLabel: "Co-supervised with Dr. Ayse Kucukyilmaz",
      image: "/figures/team_profiles/jose_chandy.jpg",
      bio: [
        "Research Topic: Understanding constraints, tasks, and failures in contact-rich manipulation through feature space remapping."
      ],
      links: [
        { icon: <FaGraduationCap />, url: "https://scholar.google.com/citations?user=XeFasPAAAAAJ&hl=en" },
        { icon: <FaGlobe />, url: "https://www.chartresearch.org/people" }
      ]
    },
    {
      name: "Raul Ghi\u0219a",
      title: "PhD Student",
      roleLabel: "Co-supervised with Dr. Ayse Kucukyilmaz & Dr. Ender \u00d6zcan",
      image: "/figures/team_profiles/raul_ghisa.jpg",
      bio: [
        "Working on robotic manipulation failures and making robots more reliable and robust in real-world environments. My research focuses on understanding why robots fail and developing systems that can recover from failures gracefully with human help."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://raulghisa.github.io/" },
        { icon: <FaGithub />, url: "https://github.com/raulghisa" }
      ]
    },
    {
      name: "Junhui Huang",
      title: "Visiting PhD Student @ Beijing Institute of Technology (BIT)",
      roleLabel: "Visiting PhD at UoN",
      image: "/figures/team_profiles/junhui_huang.jpg",
      bio: [
        "Junhui is pioneering the translation of high-level natural language into grounded robotic actions at the intersection of Vision-Language Models (VLMs) and trajectory planning. Using both diffusion-based transformers and Geometry-Aware Multiagent Orchestration (GELATO), Junhui is working on reshaping trajectories based on natural language instructions while maintaining geometric safety constraints. This also includes adaptively reshaping motion and stiffness with language-instructions, geometric-priors, and passivity groundings. This research directly supports our lab's mission of creating intuitive, safe, geometric-aware, and compliant human-in-the-loop systems."
      ],
      links: []
    },
    {
      name: "Alessandro De Toni",
      title: "Visiting PhD Student @ University of Bologna (UNIBO)",
      roleLabel: "Visiting PhD at UoN",
      image: "/figures/team_profiles/alessandro_detoni.jpg",
      bio: [
        "Alessandro\u2019s research centers on the development of Bimanual Manipulability Maps to optimize the coordination of dual-arm systems. Alessandro is synthesizing advanced motion strategies that leverage dual-arm redundancy for industrial tasks. By analyzing bimanual manipulability, his work provides the foundational metrics needed for our reactive planning frameworks to operate effectively in human-shared manufacturing spaces."
      ],
      links: []
    },
    {
      name: "Reverson Monteiro",
      title: "Visiting PhD Student @ S\u00e3o Paulo State University (UNESP)",
      roleLabel: "Visiting PhD at UoN",
      image: "/figures/team_profiles/reverson_monteiro.jpg",
      bio: [
        "Reverson is designing smart end-effectors and vision-guided control laws that allow robots to assist humans in demanding outdoor environments. His research focuses on developing robust assistive robotic systems capable of operating in unstructured settings to enhance human productivity and safety. More details on his research will follow."
      ],
      links: []
    }
  ];

  return (
    <div className="team-page">
      <div className="team-hero">
        <motion.h1 
          className="team-hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Research Group & Collaborators
        </motion.h1>
        <motion.p 
          className="team-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          An amazing group of students, mentees, and close colleagues continuously pushing the boundaries of safe, intuitive embodied AI and robotics together.
        </motion.p>
      </div>

      <div className="team-container container">
        {teamMembers.map((member, idx) => (
          <motion.div 
            key={idx} 
            className={`team-card ${idx % 2 !== 0 ? "team-card-reverse" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="tc-image-wrapper">
              <img src={member.image} alt={member.name} className="tc-image" />
            </div>
            
            <div className="tc-content">
              <h2 className="tc-name">{member.name}</h2>
              <h4 className="tc-title">{member.title}</h4>
              <p className="tc-role-label">{member.roleLabel}</p>
              
              <div className="tc-bio">
                {member.bio.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
              
              {member.links && member.links.length > 0 && (
                <div className="tc-links">
                  {member.links.map((link, lIdx) => (
                    <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="tc-link-icon">
                      {link.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
