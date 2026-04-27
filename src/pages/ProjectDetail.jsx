import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import projectsData from '../data/projectsData';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Luis Figueredo`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container" style={{ textAlign: 'center', paddingTop: '150px' }}>
          <h2>Project Not Found</h2>
          <Link to="/projects" className="btn-gold" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container back-link-container">
        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>
      </div>

      <section className="project-detail-hero">
        <div 
          className="project-detail-image-box" 
          style={{ backgroundImage: `url('${project.image}')` }}
        ></div>

        <div className="project-detail-content-box">
          <div className="project-detail-header">
            <h2>{project.title}</h2>
            <p className="project-period"><b>{project.period}</b> | {project.role}</p>
          </div>
          
          <div className="project-blog-body">
            {project.content}
          </div>
        </div>
      </section>
    </div>
  );
}
