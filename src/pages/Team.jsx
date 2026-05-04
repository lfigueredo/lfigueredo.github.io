import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaGlobe, FaGraduationCap, FaYoutube } from 'react-icons/fa';
import './Team.css';

export default function Team() {
  const currentTeam = [
    {
      name: "Dr. Luis Figueredo",
      title: "Assistant Professor, University of Nottingham",
      roleLabel: "Senior IEEE Member • Associated Fellow | MIRMI, TUM • Secretary | IEEE UK & Ireland RAS",
      image: "/figures/team_profiles/luis_figueredo.jpg",
      bio: [
        "Together with the amazing researchers on this page, I am building a lab around a simple but ambitious goal. We want to develop the foundations and systems needed for robots to be safe, physically capable, and mutually understandable around people. This means building robotic systems that are not only intelligent in demos, but also safe, reliable, and interpretable when deployed in the real world.",
        "Our work brings together human-aware safety, geometric methods, control, planning, robot learning, and AI-driven multimodal interaction, with applications ranging from autonomous and assisted robotics in care and geriatronics to extreme environments and intelligent manufacturing.",
        "Everyone in the team brings a different piece of this puzzle, from technical depth and experimental creativity to new ways of thinking about people, robots, and the complex and dynamic environments we are aiming to share."
      ],
      links: []
    },
    {
      name: "Yuhe Gong",
      title: "PhD Candidate — Fall-2023",
      roleLabel: '<ul style="margin: 0; padding-left: 1rem; color: #999;"><li>Conference Events Co-Chair, IEEE RAS Student Activities Committee (SAC). <a href="https://www.linkedin.com/posts/yuhe-gong_ieee-ras-sac-activity-7289026060950953984-qKVA" target="_blank" rel="noopener noreferrer" style="color: var(--accent-gold); text-decoration: none;">SAC Position Info</a></li><li>Best Paper - Geriatronics Summit 2023; Best Paper - IROS-WS-25 Building Safe Robots;</li><li>Winner - Physical Robotic Caregiving Challenge at ICRA 2025.</li></ul>',
      image: "/figures/team_profiles/yuhe_gong.jpg",
      bio: [
        "Yuhe joined the group in 2023 after completing her MSc at KIT. Her research focuses on geometric methods for robotic manipulation, motion planning, and geometric human–robot coexistence. She develops geometry-aware approaches that help robots move and work more safely, intelligently, and legibly around people. Yuhe brings a thoughtful and energetic research style to the group, and has become the key people connecting our work on geometry, safety, and manipulation."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://yuhegong.github.io/" },
        { icon: <FaGraduationCap />, url: "https://scholar.google.com/citations?hl=en&user=Zw5-OfsAAAAJ" }
      ]
    },
    {
      name: "Koyo Fujii",
      title: "PhD Candidate — Fall-2024",
      roleLabel: 'Project leader of our winning team at the Physical Robotic Caregiving Challenge, ICRA 2025. <a href="https://emprise.cs.cornell.edu/rcareworld/challenge/" target="_blank" rel="noopener noreferrer" style="color: var(--accent-gold); text-decoration: none;">PhyRC Challenge</a>',
      image: "/figures/team_profiles/koyo_fujii.jpg",
      bio: [
        "Koyo joined the group in 2024 and works on physically grounded multimodal models for safe embodied AI. His PhD explores how robots can combine learning, physical reasoning, and interaction data to make better decisions in care, assistance, and manipulation tasks. He brings a curiosity-driven and well-structured research mentality to the team. He quickly become the key person connecting our work on robot-learning."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://www.chartresearch.org/people" },
        { icon: <FaGithub />, url: "https://github.com/koyofujii" }
      ]
    },
    {
      name: "Jose Alex Chandy",
      title: "PhD Candidate — Fall-2024",
      roleLabel: "&nbsp;",
      image: "/figures/team_profiles/jose_chandy.jpg",
      bio: [
        "Jose joined the group in 2024 after completing his MSc at Nottingham. His PhD investigates how robots can understand constraints, tasks, and failures in contact-rich manipulation through feature-space remapping. Jose brings a thoughtful, team-player approach to the group, with a strong focus on practical robotic systems and real manipulation problems."
      ],
      links: [
        { icon: <FaGraduationCap />, url: "https://scholar.google.com/citations?user=XeFasPAAAAAJ&hl=en" },
        { icon: <FaGlobe />, url: "https://www.chartresearch.org/people" }
      ]
    },
    {
      name: "Raul Ghișa",
      title: "PhD Candidate — Fall-2024",
      roleLabel: "&nbsp;",
      image: "/figures/team_profiles/raul_ghisa.jpg",
      bio: [
        "Raul’s research focuses on failure understanding and recovery in robotic manipulation. He is interested in how robots can detect when something has gone wrong, interpret the cause of the failure, and recover in a safe and useful way. Raul also explores multimodal tactile interfaces in the group, bringing a friendly and hands-on approach to making robots better at understanding failure."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://raulghisa.github.io/" },
        { icon: <FaGithub />, url: "https://github.com/raulghisa" },
        { icon: <FaGraduationCap />, url: "https://scholar.google.com/citations?hl=en&user=V8AFd7UAAAAJ" }
      ]
    },
    {
      name: "Haowen Yao",
      title: "PhD Candidate — Fall-2026",
      roleLabel: "EPSRC DLA-funded PhD Candidate.",
      image: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=Eh2b2doAAAAJ&citpid=1",
      bio: [
        "Haowen has been working with me since 2022, first as an undergraduate student and then as an MSc student with our group at MIRMI–TUM. He is now joining Nottingham in Fall-26 with a competitive EPSRC DLA studentship. Haowen has worked on robot embodiments, barrier methods, and capability-aware motion generation, helping robots become physically and embodied intelligent rather than only locally reactive. He brings a rare, comprehensive understanding of robotics, together with a strong systems and implementation mindset."
      ],
      links: [
        { icon: <FaGraduationCap />, url: "https://scholar.google.com/citations?hl=en&user=Eh2b2doAAAAJ" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/haowen-yao" },
        { icon: <FaGithub />, url: "https://github.com/hwyao" }
      ]
    }
  ];

  const externalPhDs = [
    {
      name: "Valentina Guidali",
      title: "External PhD Co-Supervision",
      roleLabel: "RAICAM MSCA Doctoral Network | PhD student at TUM, supervised by Prof. Cristina Piazza",
      image: "https://raicam.eu/images/valentina.webp",
      bio: [
        "Valentina is a PhD student in the RAICAM MSCA Doctoral Network, working primarily under the supervision of Prof. Cristina Piazza at TUM. Her research focuses on human-centred wearable and assistive robotics, with particular interest in prosthetic hands, sensory feedback, and how tactile information can improve control, usability, and user experience.",
        "I am very happy to support Valentina’s PhD as an external co-supervisor. This is Cristina’s PhD project and TUM-led supervision, and it is a pleasure to contribute through the RAICAM collaboration."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://raicam.eu/#DCs" },
        { icon: <FaGraduationCap />, url: "https://scholar.google.com/citations?user=dOP1PFsAAAAJ&hl=en" },
        { icon: <FaYoutube />, url: "https://www.youtube.com/watch?v=U9poMHNMpOo" },
        { icon: <FaGlobe />, url: "https://www.ce.cit.tum.de/en/nhcr/members/vguidali/" }
      ]
    }
  ];

  const visitingPhDs = [

    {
      name: "Alessandro De Toni",
      title: "Visiting PhD Candidate @ Nottingham (2025-26)",
      roleLabel: "Visiting PhD from University of Bologna",
      image: "https://www.unibo.it/uniboweb/utils/UserImage.aspx?IdAnagrafica=1146568&IdFoto=236c238e",
      bio: [
        "Alessandro is a careful and creative researcher whose work connects naturally with our interest in reactive planning and informed robot motion. In our group, he contributes to planning methods that combine embodied robot information, workspace structure with novel probabilitic guarantees, and local task information for multi-arm and bimanual robotic systems."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://www.unibo.it/sitoweb/a.detoni/en" },
        { icon: <FaGlobe />, url: "https://irmalab.org/people/" }
      ]
    },
    {
      name: "Reverson Monteiro",
      title: "Visiting PhD Candidate @ Nottingham (2026)",
      roleLabel: "Visiting PhD from Universidade Estadual Paulista, UNESP",
      image: "https://i1.rgstatic.net/ii/profile.image/852370762235904-1580232434132_Q512/Reverson-Monteiro.jpg",
      bio: [
        "Reverson is a researcher, multi-instrumentalist, and designer, bringing a creative and human-centred perspective to the group. His work with us focuses on the ergonomics of assistive walking devices and on understanding how people adapt their movement and behaviour when using these systems."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://orcid.org/0000-0002-7793-5889" },
        { icon: <FaGlobe />, url: "https://seer.ufrgs.br/index.php/RevEnvelhecer/article/view/143337" }
      ]
    }
  ];

  const formerPhDs = [
    {
      name: "Dr. Riddhiman Laha",
      title: "Postdoctoral Research Associate @ Northeastern University",
      roleLabel: "Formerly a PhD Candidate at the Munich Inst. of Robotics & Machine Intelligence (MIRMI) -TUM",
      image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=SjtTKZgAAAAJ&citpid=2",
      bio: [
        "Riddhi is a close friend, a wonderful collaborator and one of the most brilliant researchers I met. He is also a lovely person who supports the team, and an amazing food-chief. We worked together at MIRMI–TUM, in co-supervision with Prof. Sami Haddadin, on motion planning, manipulation, geometric representations, and control. He is now a Postdoctoral Research Associate at Northeastern University with Prof. Seth Hutchinson. His work and our collaboration continues to connect motion planning, robot manipulation, and control, with a strong ability to turn elegant theory into real robotic systems."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://sites.google.com/view/riddhimanlaha" },
        { icon: <FaGlobe />, url: "https://www.khoury.northeastern.edu/people/riddhiman-laha/" },
        { icon: <FaGraduationCap />, url: "https://scholar.google.com/citations?user=SjtTKZgAAAAJ&hl=en" },
        { icon: <FaGithub />, url: "https://github.com/riddhiman13" }
      ]
    },
    {
      name: "Dr. Jonathan Vorndamme",
      title: "Research Engineer",
      roleLabel: "Formerly a PhD Candidate at the Munich Inst. of Robotics & Machine Intelligence (MIRMI) -TUM",
      image: "https://i1.rgstatic.net/ii/profile.image/423607986855937-1478007422525_Q512/Jonathan-Vorndamme.jpg",
      bio: [
        "I had the pleasure to work with Jonathan at MIRMI–TUM, in co-supervision with Prof. Sami Haddadin. We worked together on bimanual motion planning, pHRI, safety inrobotics, and robot reflexes. Jonathan is a full stack robot manipulator expert, and one of the greatest programmers I know, with deep experience in contact detection, identification, and safe robot behaviours. He is also a semi-professional ping-pong player with skills close to Hugo Calderano!"
      ],
      links: [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/dr-ing-jonathan-vorndamme-3241a6334/" },
        { icon: <FaGraduationCap />, url: "https://scholar.google.com/citations?user=fa_rmSMAAAAJ&hl=de" }
      ]
    },
    {
      name: "Dr. Lipeng Chen",
      title: "Associate Professor @ Shanghai Jiao Tong University (SJTU)",
      roleLabel: "Formerly a PhD Candidate at University of Leeds",
      image: "https://media.licdn.com/dms/image/v2/C5603AQGLTY4Tv6VI2A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1563872434222?e=2147483647&v=beta&t=b8UIPANel9Uk_Hqody56jRVd42pB8g4s2unZtyeM17Y",
      bio: [
        "Lipeng worked in co-supervision with Prof. Mehmet Dogar at the University of Leeds— a great team. His work connected robotic manipulation, planning, and learning, with a strong focus on enabling robots to reason more effectively during forceful physical interaction tasks. Lipeng is an amazing researcher, and I am very thankful to Mehmet for the opportunity to join the supervision. He is now an Associate Professor in the School of Artificial Intelligence at SJTU, after research roles including Tencent Robotics X and the Edinburgh Centre for Robotics."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://lipeng-chen.github.io/" },
        { icon: <FaGraduationCap />, url: "https://scholar.google.com/citations?user=7Wt5zjoAAAAJ&hl=en" },
        { icon: <FaGlobe />, url: "https://orcid.org/0000-0002-7912-8740" },
        { icon: <FaGithub />, url: "https://github.com/lipeng-chen" }
      ]
    },
    {
      name: "Kuanqi Cai",
      title: "PhD Student @ IIT & EPFL",
      roleLabel: "Formerly a Research Intern at the Munich Inst. of Robotics & Machine Intelligence (MIRMI) -TUM",
      image: "https://scientilla.iit.it/api/v1/users/username/kuanqi.cai@iit.it/profile-image",
      bio: [
        "Kuanqi conducted a research internship under my mentorship at MIRMI–TUM, showing exceptional dedication, technical skill, and research maturity. We achieved some very nice milestones together, and we still keep working together. He is now pursuing his PhD in a joint path with Dr Arash Ajoudani at IIT and Prof. Aude Billard at EPFL, continuing to make impressive contributions in robotics."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://kuanqicai.github.io/" },
        { icon: <FaGraduationCap />, url: "https://scholar.google.com/citations?user=3Y9wVfMOtP4C&hl=en" },
        { icon: <FaGithub />, url: "https://github.com/kuanqicai" }
      ]
    },
    {
      name: "Junhui Huang",
      title: "Visiting PhD Candidate @ Nottingham (2024-26)",
      roleLabel: "Visiting PhD from Beijing Institute of Technology, BIT",
      image: "/figures/team_profiles/junhui_huang.jpg",
      bio: [
        "Junhui was a visiting PhD researcher in our group and did a really impressive job during his stay with us. His work connects closely to our research on language-guided robot motion, safe trajectory adaptation, and geometry-aware interaction. He explores how natural language, vision-language models, and geometric constraints can be translated into useful robotic behaviours."
      ],
      links: [
        { icon: <FaGlobe />, url: "https://dblp.org/pid/157/0313" }
      ]
    }
  ];

  const formerOthers = [
    {
        "name": "Stephen Kalu",
        "role": "MSc Research",
        "period": "Nottingham",
        "desc": "Stephen developed student research at Nottingham and was part of the RoboNotts team for the Physical Robotic Caregiving Challenge.",
        "image": "https://i1.rgstatic.net/ii/profile.image/11431281224748771-1708433591613_Q128/Stephen-Kalu-6.jpg"
    },
    {
        "name": "Shashwat Sinha",
        "role": "MSc Research",
        "period": "Nottingham",
        "desc": "Shashwat developed BSc research at the University of Nottingham and became part of the group\u2019s early student research community. It was great to have him involved in this first Nottingham phase.",
        "image": "https://ui-avatars.com/api/?name=Shashwat+Sinha&background=d4af37&color=fff"
    },
    {
        "name": "Runkang Li",
        "role": "MSc",
        "period": "MIRMI-TUM | Now @ Agile Robots",
        "desc": "Runkang contributed to our work on robot motion and manipulation, including safe and slosh-free trajectory generation. He is now at Agile Robots SE.",
        "image": "https://media.licdn.com/dms/image/v2/D5603AQF69AaqX5O5kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712242113888?e=1779321600&v=beta&t=Xxr1-vGYzf1828mG_IfCLdwZi5W17Ld7Y0YFh6aT8oU"
    },
    {
        "name": "Yu Guo",
        "role": "MSc",
        "period": "MIRMI-TUM | Now @ Agile Robots",
        "desc": "Yu explored manipulability transfer and robot capability reasoning, connecting human motion, robot embodiment, and task-aware control. She is now at Agile Robots.",
        "image": "https://media.licdn.com/dms/image/v2/C4D03AQFiAMbmRpeu0A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1639681546905?e=2147483647&v=beta&t=rmfqmnw7gdQtUzPvs95dUl9jT2-pg7w-43eayPObpeA"
    },
    {
        "name": "Rafael I. Cabral Muchacho",
        "role": "MSc",
        "period": "MIRMI-TUM | Now a PhD @ KTH",
        "desc": "Rafael explored safe and physically aware robot motion, including slosh-free teleoperation and shared-control. He is now continuing his research as a PhD student at KTH.",
        "image": "https://media.licdn.com/dms/image/v2/C5603AQE8RcMkM5wwLw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1583265861113?e=2147483647&v=beta&t=KVhMcOS_Ft10S9myGBCFazUPs1ITN6YnacUlhcqlNx4"
    },
    {
        "name": "Arthur Bucker",
        "role": "MSc",
        "period": "MIRMI-TUM | Collaboration Microsoft US | Now a PhD @ CMU",
        "desc": "Arthur developed research on language-guided robot trajectory generation through a collaboration involving Microsoft US. He is now a PhD student in Robotics at CMU",
        "image": "https://www.microsoft.com/applied-sciences/images/people/profile/arthur-fender-bucker.jpg?v=gvc9le-sex9es2Uv6vx8-zE_BCV0KFQq6TSVX77VWyg"
    },
    {
        "name": "Anna Reithmeir",
        "role": "MSc",
        "period": "MIRMI-TUM | Now a PhD @ TUM",
        "desc": "Anna explored human-to-robot manipulability transfer, linking robot capability analysis with human movement and task adaptation. She is now pursuing doctoral research in Munich.",
        "image": "https://compai-lab.github.io/author/anna-reithmeir/avatar_hua2d592eef98e1fa5362a62d72665a4f3_289115_270x270_fill_q75_lanczos_center.jpg"
    },
    {
        "name": "Rachele Nebbia Colomba",
        "role": "Visiting Research",
        "period": "University of Pisa",
        "desc": "Rachele worked with us through supervision under the University of Pisa, contributing to cooperative manipulation and adaptive admittance control.",
        "image": "https://media.licdn.com/dms/image/v2/C4E03AQFb-I-FemrJrg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668092625993?e=1779321600&v=beta&t=_ktRJQFXl7zWHWHFMMT7Y4XQB1E1EohKE28IqTOJBxc"
    },
    {
        "name": "Benjamin Bogenberger",
        "role": "BSc Thesis",
        "period": "MIRMI-TUM \u2014 Awarded | Now a PhD @ TUM",
        "desc": "Benjamin completed an award-winning Bachelor\u2019s thesis at MIRMI\u2013TUM, supervised together with Riddhiman Laha. His project explored user-guided robot path planning with dynamic obstacle avoidance. He is now working with Prof. Angela Schoellig at TUM.",
        "image": "https://ben-bogenberger.de/images/my_portrait.jpg"
    },
    {
        "name": "Ruiai Sun",
        "role": "MSc",
        "period": "MIRMI-TUM",
        "desc": "Ruiai developed research on user-guided and safe robot motion planning. His thesis was across time-optimal trajectory optimization and geometric task structure can support more reactive and intuitive robot behaviours.",
        "image": "https://i1.rgstatic.net/ii/profile.image/1083838642036740-1635418677258_Q512/Ruiai-Sun.jpg"
    },
    {
        "name": "Wenxi Wu",
        "role": "MSc",
        "period": "MIRMI-TUM | Now a PhD @ KCL",
        "desc": "Wenxi developed MSc research on safe and efficient robot motion planning, looking at how robots can balance task performance with safety. Wenxi is now continuing this research journey as a PhD student at King\u2019s College London.",
        "image": "https://safeandtrustedai.org/wp-content/uploads/2023/02/Wenxi-Wu.jpg"
    },
    {
        "name": "Jo\u00e3o Cavalcanti",
        "role": "BSc & MSc Research",
        "period": "UnB | Now a PhD @ MIT",
        "desc": "Jo\u00e3o completed BSc and MSc-level research under co-supervision with Prof. J. Y. Ishihara. His projects explored robotics and control, and it has been lovely to see him continue his path as a PhD student at MIT.",
        "image": "https://ui-avatars.com/api/?name=Joao+Cavalcanti&background=d4af37&color=fff"
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
        {/* SECTION: MAIN TEAM */}
        <div className="team-section">
          <h2 className="section-title">Current Members</h2>
          {currentTeam.map((member, idx) => (
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
                {member.roleLabel && <div className="tc-role-label" dangerouslySetInnerHTML={{ __html: member.roleLabel }}></div>}
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

        {/* SECTION: EXTERNAL PhDs */}
        <div className="team-section">
          <h2 className="section-title">External PhD Co-Supervision</h2>
          <div className="secondary-team-stack">
            {externalPhDs.map((member, idx) => (
              <motion.div 
                key={idx} 
                className={`team-card-secondary ${idx % 2 !== 0 ? 'team-card-secondary-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="tc-image-wrapper-sec">
                  <img src={member.image} alt={member.name} className="tc-image" />
                </div>
                <div className="tc-content-sec">
                  <h3 className="tc-name-sec">{member.name}</h3>
                  <h5 className="tc-title-sec">{member.title}</h5>
                  {member.roleLabel && <div className="tc-role-label-sec" dangerouslySetInnerHTML={{ __html: member.roleLabel }}></div>}
                  {member.bio.map((para, pIdx) => (
                    <p key={pIdx} className="tc-bio-sec">{para}</p>
                  ))}
                  {member.links && member.links.length > 0 && (
                    <div className="tc-links-sec">
                      {member.links.map((link, lIdx) => (
                        <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="tc-link-icon-sec">
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

        {/* SECTION: VISITING PhDs */}
        <div className="team-section">
          <h2 className="section-title">Visiting PhD Students</h2>
          <p className="section-description" style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#ccc' }}>
            This section highlights PhD students who joined our group for a research visit, bringing new ideas, energy, and perspectives to the team. I am super grateful for their contributions. They make the group richer, more international, and more fun to work in.
            <br /><br />
            If you are a PhD student interested in visiting the group, please feel very welcome to get in touch. We are always happy to hear from motivated students working on robotics, AI, manipulation, human–robot interaction, and related areas.
          </p>
          <div className="secondary-team-stack">
            {visitingPhDs.map((member, idx) => (
              <motion.div 
                key={idx} 
                className={`team-card-secondary ${idx % 2 !== 0 ? 'team-card-secondary-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="tc-image-wrapper-sec">
                  <img src={member.image} alt={member.name} className="tc-image" />
                </div>
                <div className="tc-content-sec">
                  <h3 className="tc-name-sec">{member.name}</h3>
                  <h5 className="tc-title-sec">{member.title}</h5>
                  {member.roleLabel && <div className="tc-role-label-sec" dangerouslySetInnerHTML={{ __html: member.roleLabel }}></div>}
                  <p className="tc-bio-sec">{member.bio[0]}</p>
                  {member.links && member.links.length > 0 && (
                    <div className="tc-links-sec">
                      {member.links.map((link, lIdx) => (
                        <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="tc-link-icon-sec">
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

        {/* SECTION: FORMER PhDs */}
        <div className="team-section">
          <h2 className="section-title">Former Students, Mentees & Close Collaborators</h2>
          <p className="section-description" style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#ccc' }}>
            This section brings together former PhD students, MSc students, BSc students, visiting researchers, and early-career researchers I closely supervised, co-supervised, or mentored. Some were formal thesis students, while others joined through research visits, or closely mentored research contributions. I am very proud of where they have gone next — and even happier that all of these collaborations and friendships are still very active.
          </p>
          <div className="secondary-team-stack">
            {formerPhDs.map((member, idx) => (
              <motion.div 
                key={idx} 
                className={`team-card-secondary ${idx % 2 !== 0 ? 'team-card-secondary-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="tc-image-wrapper-sec">
                  <img src={member.image} alt={member.name} className="tc-image" />
                </div>
                <div className="tc-content-sec">
                  <h3 className="tc-name-sec">{member.name}</h3>
                  <h5 className="tc-title-sec">{member.title}</h5>
                  {member.roleLabel && <div className="tc-role-label-sec" dangerouslySetInnerHTML={{ __html: member.roleLabel }}></div>}
                  <p className="tc-bio-sec">{member.bio[0]}</p>
                  {member.links && member.links.length > 0 && (
                    <div className="tc-links-sec">
                      {member.links.map((link, lIdx) => (
                        <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="tc-link-icon-sec">
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

        {/* SECTION: FORMER OTHERS (COMPACT) */}
        <div className="team-section">
          <h2 className="section-title">Former MSc, Researchers, and Bachelors</h2>
          <p className="section-description" style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#ccc' }}>
            This section highlights former MSc students, BSc students who worked closely with me on robotics projects. Almost all of contributed to strong publications in venues such as TAC, CDC, IROS, ICRA, and RAL, and have since moved on to excellent PhD positions, research roles, and robotics industry placements. I am very proud of their work, growth, and the collaborations we built together.
          </p>
          <div className="compact-team-grid">
            {formerOthers.map((member, idx) => (
              <motion.div 
                key={idx} 
                className="compact-member-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="compact-img-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="compact-info">
                  <h4 className="compact-name">{member.name}</h4>
                  <p className="compact-role">{member.role} | {member.period}</p>
                  <p className="compact-desc">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
