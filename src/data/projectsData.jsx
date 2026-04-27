import React from 'react';

const projectsData = [
  {
    id: "raicam",
    title: "RAICAM Project",
    period: "2021-2026",
    role: "Co-PI and WP-Leader",
    short_desc: "Robotics and Artificial Intelligence for Critical Asset Monitoring. HORIZON-MSCA-2021-DN-01 Doctoral Networks.",
    image: "/figures/news_raicam_logo.png",
    isExternal: true,
    externalUrl: "https://raicam.eu/"
  },
  {
    id: "sparx",
    title: "IEEE RAS SPARX Mentorship Programme",
    period: "2026-2027",
    role: "Mentor PI",
    short_desc: "International mentorship programme supporting early-career researchers in robotics and AI from developing countries. Partners: UoN (UK) and University of Brasilia (Brazil).",
    image: "/figures/ieee_ras.png",
    isExternal: false,
    content: (
      <>
        <p>
          The IEEE Robotics and Automation Society (RAS) <strong>SPARX</strong> program stands for <em>Support Program to foster Academic Relationships and eXchange</em>. It is an international mentorship program aimed at bridging the gap between aspiring researchers from developing countries and experienced mentors in well-established robotics laboratories.
        </p>
        <h3>Motivation & Objectives</h3>
        <p>
          The core motivation behind the SPARX program is to democratize access to resources and expertise in the global robotics community. It aims to:
        </p>
        <ul>
          <li><strong>Nurture Academic Excellence:</strong> Enable high-quality research and publications for researchers in emerging regions.</li>
          <li><strong>Foster Global Collaboration:</strong> Connect faculty members with distinguished RAS mentors to foster long-term partnerships.</li>
          <li><strong>Provide Resources:</strong> Grant critical funding to overcome barriers for international collaboration and travel.</li>
        </ul>
        <h3>My Involvement</h3>
        <p>
          As a mentor in the 2026-2027 SPARX cohort, my goal aligns deeply with empowering early-career researchers. Our proposed pipeline focuses on enabling non-experts to teach robotics tasks intuitively by leveraging offline training via dynamic systems and online fine-tuning through natural language. Through this collaboration, we aim to lower the barriers to robot deployment in authentic human environments and drive forward the state of accessible robotics.
        </p>
      </>
    )
  },
  {
    id: "geriatronics",
    title: "Project X - Geriatronics Lighthouse Initiative (MIRMI-TUM)",
    period: "2020-2025",
    role: "Project-Consortium Scientific Leader",
    short_desc: "Led the scientific development and consortium of the Geriatronics Lighthouse Initiative across 5 TUM Chairs and industrial partners.",
    image: "/figures/garmi_geriatronics_photo.png",
    isExternal: false,
    content: (
      <>
        <p>
          Between 2020 and 2025 at the Technical University of Munich (TUM), I served as the <strong>Project-Consortium Scientific Leader and Coordinator</strong> for the <em>Geriatronics Lighthouse Initiative</em> (Project X & KoBo34).
        </p>
        <h3>Consortium Leadership</h3>
        <p>
          I provided oversight for more than 40 researchers across 5 different TUM research chairs and 4 key industrial partners, including Franka Robotics, TQSystems, Reactive Robotics, and the Deutsches Museum. The initiative commanded a highly substantial budget, making it a massive administrative and scientific endeavor.
        </p>
        <p>
          As the project leader for KoBo34 (coordinated by TUM), I managed the TUM budget specifically and coordinated collaborative research spanning robotic manipulation, autonomous mobility, and safe patient interaction.
        </p>
        <h3>Scientific Impact</h3>
        <p>
          The core objective of Geriatronics is to pioneer robotics and AI technologies designed to support older adults and ease the workload of care providers. Under my scientific coordination, we successfully drove forward critical research activities, culminating in high-profile demonstrations, annual symposiums, and a consistent output of high-impact research publications advancing the frontier of intelligent service robotics for healthcare.
        </p>
      </>
    )
  },
  {
    id: "aichemy",
    title: "AIchemy Hub: Transforming Chemistry Labs",
    period: "2025",
    role: "PI",
    short_desc: "Transforming Chemistry Labs with Safe and Intuitive Human-in-the-Loop Robotic Systems. UKRI AIchemy.",
    image: "/figures/aichemy_imgs-012.jpg",
    isExternal: false,
    content: (
      <>
        <p>
          The <strong>AI-chemy Pump Priming</strong> project focuses on <em>Transforming Chemistry Labs with Safe and Intuitive Human-in-the-Loop (HIL) Robotic Systems</em>. The ambition was to safely integrate co-bot manipulation within highly dynamic laboratory environments.
        </p>
        <h3>Project Outcomes & Overview</h3>
        <p>
          In a chemistry lab context, direct human teaching of robots is often costly or dangerous. In this project, we explored new chemist-in-the-loop frameworks targeting safe granular transport and fluid handling. Our strategy combined virtual reality setups with real-world Franka arms to ensure safe, geometeric-aware human-robot interaction.
        </p>
        <p>
          Highlights include mapping dynamic scenarios using Vision-Language Models (VLM) for guiding virtual lab scenes around obstacles, and demonstrating safe granular transport—taking inspirations from the <em>SpillNot</em> slosh-free trajectory algorithms—to transport delicate materials with minimal spillage. 
        </p>
        <p>
          This pump-priming funding paved the way for robust safety architectures supporting chemists functioning directly alongside autonomous robotic lab assistants.
        </p>
      </>
    )
  },
  {
    id: "nokov",
    title: "NOKOV Industrial Collaboration & New Gen Star Project",
    period: "2024",
    role: "Collaborator / Awarding body",
    short_desc: "Establishing partnerships and integrating state-of-the-art Mocap systems into pHRI tasks. Recognized as an IEEE ICRA New Generation Star.",
    image: "/figures/nokov_new_gen_star_raw.jpg",
    isExternal: false,
    content: (
      <>
        <p>
          This collaboration is closely associated with my recognition as an <strong>IEEE ICRA New Generation Star</strong> at ICRA 2024 (Yokohama, Japan). The New Generation Star project, sponsored by NOKOV Motion Capture, aims to showcase the work of emerging robotics scholars and foster global academic communication.
        </p>
        <h3>Industrial Collaboration</h3>
        <p>
          As part of the award and ongoing collaboration, I participated in the "Star Talk" panel discussions hosted directly at the NOKOV booth. It provided an excellent stage to discuss trending robotics topics focusing on cooperative manipulation and predicting human behavior in robotic planning. 
        </p>
        <p>
          This industrial collaboration fundamentally supports my laboratory's infrastructure. Through this partnership, we obtained significant capability upgrades, including a high-end 12-camera NOKOV motion capture system, forming the backbone for precise human action tracking and safe pHRI (physical human-robot interaction) experiments.
        </p>
      </>
    )
  },
  {
    id: "msca-if",
    title: "MSCA-IF: Predict-Plan-Act",
    period: "2018-2020",
    role: "MSCA-IF Fellow",
    short_desc: "Marie Skłodowska-Curie Action Individual Fellowship: Integrating robotic control and planning with human activity prediction. HORIZON-MSCA-IF.",
    image: "/figures/msca_if_logo.png",
    isExternal: false,
    content: (
      <>
        <p>
          The <strong>Marie Skłodowska-Curie Action Individual Fellowship (MSCA-IF)</strong> supported this extensive research endeavor at the University of Leeds. The core vision of <em>Predict-Plan-Act</em> was seamlessly integrating robotic control and planning with human activity prediction for efficient human-robot collaboration.
        </p>
        <h3>EU Innovation Radar: RHuMAn Tool</h3>
        <p>
          A major output of this MSCA fellowship is the <strong>Rapid Human-Manipulability Assessment (RHuMAn)</strong> tool. This tool bridges the gap between robotic planning and human comfort.
        </p>
        <p>
          RHuMAn incorporates biomechanics data (e.g., using OpenSim parameters) and ergonomics guidelines to compute a "human comfort quality index" map directly into a robot's operational workspace. This open-source framework ensures that collaborative robots explicitly account for human capabilities and physical limitations during task execution. 
        </p>
        <p>
          Because of its substantial potential to impact how safe, biomechanics-aware autonomous systems are designed, RHuMAn and my work during predict-plan-act were prominently recognized by the <strong>EU Innovation Radar</strong> for high-potential innovation.
        </p>
        <p>
          <a href="https://cordis.europa.eu/project/id/795714" target="_blank" rel="noreferrer" style={{color: '#E89D23', textDecoration: 'underline'}}>View the CORDIS Project Page</a>
        </p>
      </>
    )
  }
];

export default projectsData;
