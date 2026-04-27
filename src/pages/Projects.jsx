import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-grid">
        {projectsData.map((project) => {
          return (
            <div key={project.id} className="project-assembly">
              <div className="project-content-mini">
                <div className="project-text-content">
                  <h2>{project.title}</h2>
                  <p className="project-period"><b>{project.period}</b> | {project.role}</p>
                  <p className="project-desc">{project.short_desc}</p>
                  
                  {project.isExternal ? (
                    <a href={project.externalUrl} target="_blank" rel="noreferrer" className="btn-gold" style={{ display: 'inline-block', position: 'relative', zIndex: 4, ...(project.id === 'raicam' ? { paddingLeft: '1.2rem', paddingRight: '1.2rem' } : {}) }}>
                      GO TO WEBSITE
                    </a>
                  ) : (
                    <Link to={`/projects/${project.id}`} className="btn-gold" style={{ display: 'inline-block', position: 'relative', zIndex: 4 }}>
                      READ MORE
                    </Link>
                  )}
                </div>
                
                <div 
                  className="project-image-mini" 
                  style={{ 
                    backgroundImage: `url('${project.image}')`,
                    ...(project.id === 'raicam' ? { right: '-110px' } : {}),
                    ...(['raicam', 'sparx', 'msca-if', 'nokov'].includes(project.id) ? { backgroundSize: 'contain', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff' } : {})
                  }}
                >
                  {project.id === 'sparx' && (
                    <div style={{ position: 'absolute', bottom: '15px', width: '100%', textAlign: 'center', color: '#00629B', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Helvetica, sans-serif' }}>
                      SPARX Mentorship
                    </div>
                  )}
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
