import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Research.css';

const researchLayers = [
  {
    id: 'layer1',
    title: 'Grounded Safety',
    intro: 'The first layer focuses on making robots safe enough to act around people, objects, and uncertain environments in real-time, reactively, robustly, and reliably — without unnecessarily compromising task-performance. Safety is not an afterthought feature, but a core architectural requirement that spans prevention and avoidance, mitigation, and recovery, while considering robot-safety in terms of its low-level constraints. This starts with strong control-theory foundations, geometry-aware representations and reactive planning, and pre- and post-collision human-aware strategies that encode tasks and constraints in lower-dimensional structures, keeping robots responsive while still cautious. It also means ensuring that robot behaviour remains inside well-defined safety boundaries, even under stress. A nice example of this philosophy is our slosh-free family of robots, where the robot must move quickly and naturally while respecting dynamic constraints, human interaction, obstacle avoidance, and contact safety.',
    subtopics: [
      {
        title: 'Control Theory and Geometric‑Aware Representations',
        text: 'Control theory gives robotics the tools to reason about stability, robustness, performance, constraints, and uncertainty. In my work, this is closely connected to geometric representations of motion, especially when robot tasks involve coupled position and orientation, contact, forces, or coordinated motion between multiple arms. Instead of treating translation and rotation as disconnected quantities, we use representations such as dual quaternions, Lie groups, Riemannian structures, and geometric primitives to describe robot motion and task constraints in a more natural way. This makes it easier to define distances, safety margins, task relaxations, and control objectives that are meaningful for real robots, from keeping a cup upright and away from a table to coordinating two arms while avoiding self-collision and environmental contact.',
        videos: [
          { id: 'oQHZ3B6NeiY', title: 'Hybrid dual quaternion based controller - Avoiding the unwinding phenomenon' },
          { id: 'INzfk-AlthI', title: 'Hybrid dual quaternion based controller - Chattering phenomenon comparision' },
          { id: 'qdv7gNmH3K8', title: 'Real-Time Collision-Free Whole-Body Motions: A Complementarity-based Approach - ICRA-25' },
          { id: 's7LsdLksqno', title: 'GeoFIK: A Fast and Reliable Geometric Solver for the IK of the Franka Arm - ICRA-26' }
        ]
      },
      {
        title: 'Geometric‑Aware and Reactive Planning',
        text: 'Robot motion generation is still often treated as a sense–plan–act pipeline, where planning is largely decoupled from sensing and real‑time action. While powerful, these approaches can be computationally heavy and brittle when we move to unstructured, dynamic, or high‑dimensional environments. In this base core layer, reactivity and reliability is the currency. Thus, my work pushes towards novel methods for reactive motion generation, exploring GPU-based frameworks, multiagent exploration, leveraging rich geometric structures, and reducing task-dimensionality in exchange of resposiveness and reliability, i.e., building fallback mechanisms that ensures the robot to avoid obstacles, reshape motion, and respect constraints without losing the structure of the task it is trying to complete. Here, we explore geometric primitives, distance functions, vector fields, complementarity constraints, task-aware representations, among other strategies to address this np-hard problem.',
        videos: [
          { id: 'CExxAAr8NLA', title: 'Reactive Cooperative Manipulation based onSet Primitives and Circular Fields - ICRA 21' },
          { id: 'y0cbYBk6AEo', title: 'Coordinated Motion Generation and Object Placement: A ReactivePlanning and Landing Approach -IROS 21' },
          { id: 'jl6HP7iJJ84', title: 'Predictive Multi-Agent based Planning and Landing Controller for Reactive Dual-Arm Manipulation' },
          { id: '64q3iHNSyY8', title: 'RETOM: Leveraging Maneuverability for Reactive Tool Manipulation using Wrench-Fields - ICRA-23' },
          { id: 'h9eylaDVJak', title: 'GeoPF: Infusing Geometry into Potential Fields for Reactive Planning in Non-trivial Env. - IEEE-RAL' },
          { id: 'SU7Dm-9oDK8', title: 'G-MAPP: GPU-accelerated Multi-Agent Planning and Perception for Reactive Motion Generation - RAL-26' }
        ]
      },
      {
        title: 'Pre‑Collision Planning and Post‑Collision Reflexes',
        text: 'Even with strong avoidance and reactive planning, unexpected contacts and near‑misses will always occur, especially in close HRI. I therefore model both pre‑collision behaviours, such as posture and velocity shaping to reduce impact energy, and post‑collision reflexes that adapt motion after contact to minimise secondary risks. This work also led to one of the first taxonomy‑based frameworks for robot safety reflexes, which combines international safety standards, biomechanics data, and experimental evidence to define a library of reflex strategies and a decision mechanism that selects and tunes them in real time for the situation at hand. Overall, this line of work connects robot safety, biomechanics, standards, contact reasoning, motion planning and compliant/energy-based control, and real experiments into decision frameworks for safer physical interaction.',
        videos: [
          { id: 'fjrsRqclTJA', title: 'Robot Contact Reflexes: Adaptive Maneuvers in the Contact Reflex Space - IROS 2022' },
          { id: 'K4DY_G-DB_c', title: 'IROS-22 Talk:  Robot Contact Reflexes: Adaptive Maneuvers in the Contact Reflex Space' },
          { id: 'jl6HP7iJJ84', title: 'Predictive Multi-Agent based Planning and Landing Controller for Reactive Dual-Arm Manipulation' },
          { id: 'y686qZuMCgU', title: 'Safe Robot Reflexes: A Taxonomy-based Decision and Modulation Framework - IEEE TRO - 25' }
        ]
      },
      {
        title: 'Robot Safety: Certified Constraint Satisfaction and Robust Execution',
        text: 'Safety only becomes useful when it survives execution on a real robot. This line of work focuses on controllers and planners that keep robot behaviour inside formal or well-defined constraint boundaries during runtime. These constraints may come from geometry, dynamics, contact, energy, joint limits, manipulability, human proximity, task feasibility, or environmental structure. The goal is not simply to stop the robot whenever something changes, but to preserve useful behaviour while enforcing safety. This is where hierarchical control, barrier-function-inspired methods, complementarity-based planning, energy-aware reshaping, and robust execution become central. In practice, this allows robots to remain reactive, capable, and safe under physical interaction, dynamic tasks, and real-world uncertainty.\nThese methods form the certified safety backbone in projects like our slosh‑free family of robots.',
        videos: [
          { id: 'MzjdebVn1eE', title: 'Shared Autonomy Control for Slosh-free Teleoperation - IROS 2023' },
          { id: 'qdv7gNmH3K8', title: 'Real-Time Collision-Free Whole-Body Motions: A Complementarity-based Approach - ICRA-25' }
        ]
      },
      {
        title: 'Slosh-Free Robots',
        text: 'Our slosh-free robots are a family of systems for fast, safe, and stable liquid transportation, inspired by the simple but beautiful physics of centuries-old Marroccean/Turkish tea tray devices. In this work, the robot must satisfy several constraints at once. It has to move efficiently, avoid obstacles, react to people, respect its own joint and manipulability limits, and keep the liquid stable even during fast motion or physical interaction. This makes slosh-free transportation a perfect testbed (and playground) for grounded robot safety. We have tested these systems not only in the lab, but also in public demonstrations at IROS, ICRA, and Automatica/Munich_i, where people were actively encouraged to challenge the system and try to make it fail. So far, the robots have been surprisingly stubborn coffee waiters.',
        videos: [
          { id: 'oR3C-feQ6f8', title: 'A Solution to Slosh-free Robot Trajectory Optimization - IROS 2022' },
          { id: 'MzjdebVn1eE', title: 'Shared Autonomy Control for Slosh-free Teleoperation - IROS 2023' },
          { id: 'K0xACJ1Zkgw', title: 'Turning robots into skilled waiters' }
        ]
      }
    ]
  },
  {
    id: 'layer2',
    title: 'Physically Capable and Intelligent Robotics',
    intro: 'This layer focuses on the physical intelligence, the ability of robots to manipulate objects, coordinate multiple arms, reason about contact, adapt to constraints, and generalise across tasks and environments. Instead of relying only on more data or larger models, we exploit the structure already present in robotics, including geometry, kinematics, dynamics, force, contact, manipulability, and task constraints. The goal is to build robots that do not only plan actions, but understand what is physically possible, meaningful, and robust enough to execute.\n\nIn my work, to make robots more adaptable, we develop manifold‑aware feature spaces for learning physical interactions, where coordinate‑invariant representations and Riemannian manifolds help robots capture the fundamental relationships of a task and transfer skills between environments without constant retraining. We also study embodiment-aware learning and co-design, where the robot’s own body, workspace, joint limits, and physical capabilities become part of the reasoning, planning, and control process.',
    subtopics: [
      {
        title: 'Cooperative and Multi‑Arm Manipulation',
        text: 'Cooperative and multi-arm manipulation is one of the clearest examples of why physical intelligence matters. When two arms, two robots, or a human and robot manipulate an object together, the task becomes constrained by closed-chain motion, contacts, forces, object stability, reduced workspace, and the risk of poor manipulability, joint limits, or singularities. In our work, we develop reactive and real-time methods for defining, planning, and executing cooperative tasks while preserving the structure of the manipulation problem. This includes geometric task representations, dual-arm coordination, sequential manipulation planning, contact-aware behaviours, and methods that allow robots to adapt when the environment, object, or partner changes during execution.',
        videos: [
          { id: 'F08vCKHXOYs', title: 'Predictive and reactive tracking of time-varying target constraints in cooperative manipulation' },
          { id: 'CExxAAr8NLA', title: 'Reactive Cooperative Manipulation based onSet Primitives and Circular Fields - ICRA 21' },
          { id: 'VxaZwCwCpTA', title: 'Adaptive Admittance Control for Safe Cooperative Manipulation Under Object Overloading' },
          { id: '8mgzVi8XXJA', title: 'Null-Space-Based Admittance Control' },
          { id: 'y0cbYBk6AEo', title: 'Coordinated Motion Generation and Object Placement: A ReactivePlanning and Landing Approach -IROS 21' },
          { id: 'jl6HP7iJJ84', title: 'Predictive Multi-Agent based Planning and Landing Controller for Reactive Dual-Arm Manipulation' },
          { id: 'fQOnV-qV9pI', title: 'Imitation-Guided Bimanual Planning for Stable Manipulation underChanging External Forces - IROS-25' }
        ]
      },
      {
        title: 'Task‑Learning, Learning by Demonstration, & User‑Guided Planning',
        text: 'Here the goal is to make robots learn and adapt tasks with as little supervision as possible, while staying deeply aware of constraints and safety envelopes. We combine learning by demonstration with user‑guided planning, so that a small number of demonstrations plus a bit of guidance can generate rich families of motions that remain safe and reliable. Our work includes user‑guided constrained path planning that uses one successful demonstration and geometric interpolation to generalise to new configurations and even new robots, manipulability‑aware sampling‑based planners that prefer motions with good capability and manipulability margins, and frameworks that turn demonstrations into modular task constraints which plug directly into set‑based controllers and barrier‑style safety layers. On top of that, we explore manipulability learning and transfer, from human‑to‑robot domain adaptation to manipulability‑aware tracking control, so robots can reuse human posture and capability cues when planning and executing their own motions.',
        videos: [
          { id: 'B2y9lsbv65I', title: 'Coordinate Invariant User-Guided Constrained Path Planning with Reactive Obstacle Avoidance -ICRA-22' },
          { id: 'GXTc1_tIu9I', title: 'Learning barrier-certifed polynomial dynamical systems for obstacle avoidance with robots - ICRA-24' },
          { id: 'exP1wo-AkHc', title: 'Demonstration to Adaptation: A User-Guided Framework for Sequential and Real-Time Planning - IROS-24' },
          { id: 'xN9oIOJRnHo', title: 'Geometrically-Aware One-Shot Skill Transfer of Category-Level Objects - ICRA-26' },
          { id: 'fQOnV-qV9pI', title: 'Imitation-Guided Bimanual Planning for Stable Manipulation underChanging External Forces - IROS-25' }
        ]
      },
      {
        title: 'Manifold‑Aware Feature Space and Physical‑Aware Learning for Contact‑Rich Interactions',
        text: 'Contact-rich manipulation is where purely black-box learning often becomes fragile. Tasks such as key insertion, door opening, valve turning, pushing, sliding, tool use, or forceful assembly are not just trajectories in space. They are shaped by axes, contact modes, friction, torques, constraints, energy exchange, and sequential physical relations. In this line of work, we investigate manifold-aware and physically informed learning methods that make these hidden structures easier to capture and transfer. Instead of asking learning algorithms to discover everything from raw coordinates, we use coordinate-invariant representations, task manifolds, physical-property estimation, movement primitives, impedance, and safety-aware energy bounds as inductive biases. This also connects directly to the first safety layer, where energy tanks and passivity-inspired mechanisms can ground contact-rich exploration, helping robots learn useful behaviours while keeping interaction forces and energy within safer limits.',
        videos: [
          { id: 'N-p-V1wrx-Q', title: 'Contact-Safe Reinforcement Learning with ProMP Reparameterization and Energy Awareness - ICRA-26' },
          { id: '1a5-pZLc4kc', title: 'PhyPush: One Push is All You Need for Sensorless Phys. Property Estim. w Physics-Guided Transformers' }
        ]
      },
      {
        title: 'Embodiment‑Aware Learning & Co‑Design',
        text: 'A robot’s ability to perform a task efficiently is always bounded by its morphology, kinematics, and physical properties. I investigate how embodiment shapes task execution by combining workspace analysis, whole‑body motion constraints, and learning, so that robots can choose where and how to act in ways that balance efficiency, safety, and adaptability. We use enhanced dexterity maps, manipulability measures, workspace analysis, and embodiment-aware optimisation to help robots select actions and configurations that balance efficiency, safety, comfort, and adaptability. This feeds into controller design, motion planning, grasping, human-aware task optimisation, and eventually the co-design of robot morphology, tools, and assistance devices.',
        videos: [
          { id: 'YmWln7ZmiqM', title: 'Enhanced Dexterity Maps (EDM): A New Map for Manipulator Capability Analysis' },
          { id: '64q3iHNSyY8', title: 'RETOM: Leveraging Maneuverability for Reactive Tool Manipulation using Wrench-Fields - ICRA-23' }
        ]
      }
    ]
  },
  {
    id: 'layer3',
    title: 'Graceful Human-Centric Interaction',
    intro: 'True teamwork only works when both partners actually understand each other. For robots to become genuine partners—not just tools—they must understand human embodiment, capabilities, limitations, and preferences, while making their own intentions, limits, and capabilities legible and predictable to the human counterpart. Building on top of safety and physical intelligence, this layer focuses on interaction that tightly links physical behaviour and semantic communication, from biomechanics‑aware planning to language‑guided motion and multimodal, legible whole‑body behaviour.\n\nBuilding on the first two layers of grounded safety and physical intelligence, this layer focuses on interaction as a two-way process. We study how robots can adapt their physical behaviour to people, while also communicating through motion, force, language, haptics, and other modalities. This includes biomechanics-aware planning, language-guided robot motion, implicit communication, legibility, transparency, and multimodal interaction. The goal is to build robots that are not only safe and capable, but also pleasant, understandable, and useful to work with.',
    subtopics: [
      {
        title: 'Biomechanics-Aware and Ergonomics-Aware Robotics',
        text: 'Recent advances in robotics are closing the gap between humans and robots, but truly physical collaboration—where humans and robots push, pull, and carry together—is still a major open challenge. When robots autonomously engage in physical tasks with people, they need decision‑making that accounts not just for kinematics and obstacles, but also for human biomechanics, ergonomics, and comfort over time. Our work explicitly brings these aspects into planning and control. We study how to model human physical capabilities and ergonomics and then embed that knowledge into robot decisions, so that collaborative manipulation strategies are chosen not only for task success, but also to minimise muscular effort and reduce the risk of strain. This includes the RHuMAn toolbox for rapid manipulability and ergonomics assessment—recognised by the EU Innovation Radar—as well as planners that optimise human comfortability during forceful collaboration and methods that learn and transfer human manipulability profiles into robot control.',
        videos: [
          { id: '90bVT5fVRI0', title: 'A Dual Doctor-Patient Twin Paradigm for Transp. Remote Exam., Diagnosis, & Rehabilitation - IROS 21' },
          { id: 'rfS4Z673_Gc', title: 'Human Digital Twin with GARMI Shaping the future of telemedicine @AI Society - Automatica 2021' }
        ]
      },
      {
        title: 'Language-Driven Robot Interaction',
        text: 'Natural language is one of the most intuitive ways for people to express intent, preferences, corrections, and constraints. However, turning a phrase into safe and feasible robot behaviour is far from trivial. A command such as “move more gently near the edge” or “come from above” has to be translated into trajectories, constraints, forces, timing, and safety-aware execution on a real robot. In this line of work, we study language-driven and multimodal robot interaction methods that reshape robot behaviour while remaining grounded in the robot’s physical reality. This means combining language, vision, geometric constraints, passivity terms, safety envelopes, and task feasibility, so that high-level human instructions become meaningful and safe robot actions rather than disconnected semantic labels.',
        videos: [
          { id: 'gYXCKKs8Hio', title: 'Reshaping Robot Trajectories w/ NLP: A Study of Multi-Modal Data Alignm. w/ Transformers - IROS 22' },
          { id: 'myMPTn9ZlNo', title: 'LATTE: LAnguage Trajectory TransformEr - ICRA-23' },
          { id: 'UNH-dGYZ-tQ', title: 'GELATO: Multi-Instruction Trajectory Reshaping via Geometric-Aware Multiagent-based Orchestration' },
          { id: 'UjUEs6mIIn0', title: 'CHAI: Compliant Human-centered Adaptive Interaction through Diffusion-based Language Trajectory Transformer - IEEE RAL' }
        ]
      },
      {
        title: 'Legibility and Transparency in Whole-Body and Multimodal Interaction',
        text: 'Robots communicate even when they are not speaking. Their motion, posture, speed, force, gaze, haptic feedback, and timing all shape how people interpret what the robot is doing and whether it is safe to work with. In this line of work, we study how to make robot behaviour more legible and transparent, so that humans can infer the robot’s intent, constraints, uncertainty, risk, and task state early enough to respond naturally. This includes implicit communication through motion and force, explicit communication through language or interfaces, and multimodal interaction strategies that combine physical and semantic cues. The broader goal is to make robots feel less like unpredictable machines and more like understandable partners in shared tasks.',
        videos: [
          { id: '-ew5iq2JiOQ', title: 'Manipulability Transfer & Tracking Ctrl: Bridging Domain Adapt. w/ Predictive Feasibility - ICRA-25' }
        ]
      }
    ]
  }
];

export default function Research() {
  const [activeLayerId, setActiveLayerId] = useState(null);

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
             <p>Welcome!</p>
             <p>This page is a live document. I try my best to keep it updated with comprehensive content highlighting the innovative research happening within our group—though from time to time it might fall a bit behind!</p>
             <p>Please stay tuned as more updates roll in, but in the meantime, feel free to check out the rest of the website, or just reach out to catch up over coffee and talk research!</p>
          </div>
        </div>
      </section>

      {/* Main Content Box */}
      <section className="research-content-section container-expanded">
        <div className="research-content-card intro-card">
           <h2 className="holistic-title">
             Graceful Embodied Robotics<br />
             <span className="holistic-subtitle-main">Safe, Physically Capable, and Human‑Centred Intelligence for Robots</span>
           </h2>
           <p>My research is driven by the ambition to create robotic systems where safety, intelligence and interaction are designed as a single cohesive ecosystem. This full-stack perspective is, I believe, essential if we want robots to move beyond controlled lab demos and into the our messy and beautiful reality of human-centred environments, including our homes, healthcare scenarios, care settings, and intelligent manufacturing.</p>
           <p>Indeed, even a perfectly designed planner that takes into account human factors becomes useless if the robot is unable to satisfy its own physical constraints or reliably execute the required subtasks and transitions. Conversely, a robot may execute a collaborative task perfectly from a purely technical perspective, but ignoring human safety, comfort, and preferences, is likely to lead to poor interaction, loss of trust, and ultimately rejection by the very people it is meant to support.</p>
           
           <h3 className="research-subtitle">A full-stack philosophy for graceful robotics</h3>
           <p>My research takes an integrative approach. Inspired by layered architectures defined in control theory, and found in complex engineered systems, biology, and neuroscience, I believe reliable robot behaviour as emerging from a hierarchy of connected layers. At a fundamental core, robots need a fast, reactive, and grounded safety layer that can prevent and mitigate risks, while providing fallback behaviours. On top of this, robots need physical intelligence that allows them to reason about the environment, objects, their own embodiment and their connection to physical and geometric constraints, dynamics and feasibility of a task. Building on top of both, a multimodal human‑centred interaction enables high level reasoning and interaction.</p>
           <p>This layered view gives us a principled way to build intelligent machines that can leverage rich models of the world and of the human, while still keeping their actions grounded in physical intelligence and always able to fall back to well‑defined safety behaviours when the environment becomes unpredictable or risky—much like reflexes backing up higher‑level planning in biological sensorimotor control.</p>
           <p>This structured view of robotics is central to the research directions presented below. The layers and corresponding works will be updated whenever possible, but it doesn't cover all the work done within our team. This way, the best way is still to reach out and have a coffee and a chat.</p>
        </div>
      </section>

      {/* Layers Content Box */}
      <section className="research-content-section container-expanded">
        <div className="research-content-card">
           {/* Interactive Layers */}
           <div className="research-layers-tabs">
             {researchLayers.map((layer) => (
               <button 
                 key={layer.id}
                 className={`layer-tab-btn ${activeLayerId === layer.id ? 'active' : ''}`}
                 onClick={() => setActiveLayerId(activeLayerId === layer.id ? null : layer.id)}
               >
                 {layer.title}
               </button>
             ))}
           </div>

           <AnimatePresence>
             {activeLayerId && (
               <motion.div 
                 className="layer-content-container"
                 initial={{ height: 0, opacity: 0 }}
                 animate={{ height: 'auto', opacity: 1 }}
                 exit={{ height: 0, opacity: 0 }}
                 transition={{ duration: 0.4 }}
                 style={{ overflow: 'hidden' }}
               >
                 {researchLayers.filter(l => l.id === activeLayerId).map(layer => (
                   <div key={layer.id} className="layer-content-inner">
                     <p className="layer-intro">{layer.intro}</p>
                     
                     <div className="layer-subtopics">
                       {layer.subtopics.map((sub, idx) => (
                         <SubtopicRenderer key={idx} sub={sub} idx={idx} />
                       ))}
                     </div>
                   </div>
                 ))}
               </motion.div>
             )}
           </AnimatePresence>

        </div>
      </section>

    </motion.div>
  );
}

const SubtopicRenderer = ({ sub, idx }) => {
  const [activeVidIdx, setActiveVidIdx] = useState(() => Math.floor(Math.random() * sub.videos.length));

  const isEven = idx % 2 === 0;

  const textBlock = (
    <div className="subtopic-text-block">
      <h4 className="subtopic-title">{sub.title}</h4>
      <p className="subtopic-desc">{sub.text}</p>
    </div>
  );

  const renderIframe = (vid) => (
    <div className="video-wrapper">
      <iframe 
        src={`https://www.youtube.com/embed/${vid.id}`} 
        title={vid.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  );

  const featuredVid = sub.videos[activeVidIdx] || sub.videos[0];
  
  return (
    <div className={`subtopic-card style-featured ${isEven ? '' : 'row-reverse'}`}>
      {textBlock}
      <div className="subtopic-video-block">
        <div className="featured-video-container">
          {featuredVid && renderIframe(featuredVid)}
          <p className="video-caption featured-caption">{featuredVid?.title}</p>
        </div>
        {sub.videos.length > 1 && (
          <div className="thumbnails-row">
            {sub.videos.map((vid, i) => (
              <button 
                key={vid.id} 
                className={`thumbnail-btn ${activeVidIdx === i ? 'active' : ''}`}
                onClick={() => setActiveVidIdx(i)}
                title={vid.title}
              >
                <img src={`https://img.youtube.com/vi/${vid.id}/default.jpg`} alt="thumbnail" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

