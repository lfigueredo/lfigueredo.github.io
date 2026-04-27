import { ExternalLink, Terminal } from 'lucide-react';
import './ResearchSection.css';

const MOCK_RESEARCH = [
  {
    id: 1,
    title: 'Safe Robot Reflexes: A Taxonomy-based Decision Framework',
    venue: 'IEEE Transactions on Robotics (T-RO)',
    year: '2025',
    description: 'A comprehensive approach covering post-collision reactions and reflex generation to inherently guarantee robot safety during unexpected impacts.',
    link: '#'
  },
  {
    id: 2,
    title: 'Domain Adaptation with Predictive Feasibility for Tracking Control',
    venue: 'IEEE ICRA',
    year: '2025',
    description: 'Bridging domain adaptation and model-predictive controls to allow complex manipulators to understand constraint transitions seamlessly.',
    link: '#'
  },
  {
    id: 3,
    title: 'Synthesis of Reactive Collision-Free Whole-Body Robot Motions',
    venue: 'IEEE ICRA',
    year: '2025',
    description: 'A complementarity-based approach that creates guaranteed reactive sequences without explicit prior motion planning under dynamic obstacles.',
    link: '#'
  }
];

export default function ResearchSection() {
  return (
    <section id="research" className="container section-padding">
      <div className="section-header">
        <h2 className="section-title" style={{ color: '#fff' }}>Pushing the Envelope:</h2>
        <h3 className="section-subtitle" style={{ color: '#ccc' }}>Selected Publications</h3>
      </div>

      <div className="wix-research-grid">
        {MOCK_RESEARCH.map((paper, index) => (
          <div key={paper.id} className="wix-research-card">
            <span className="research-venue" style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.9rem' }}>
              {paper.venue} &bull; {paper.year}
            </span>
            <h4>{paper.title}</h4>
            <p>{paper.description}</p>
            <a href={paper.link} className="research-link-gold" aria-label="View Paper">
               View Paper <ExternalLink size={14} style={{ display: 'inline', marginLeft: '5px' }}/>
            </a>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="#" className="btn-gold">View Full Research Portfolio</a>
      </div>
    </section>
  );
}
