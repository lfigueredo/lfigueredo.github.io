import React, { useEffect } from 'react';
import './Resources.css';

export default function Resources() {
  useEffect(() => {
    document.title = "Resources | Luis Figueredo";
  }, []);

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-content-box">
          <h2>Coming Soon</h2>
          <p>
            I am working to update the website and create some interesting links 
            to different resources, codes and documents that are (hopefully) useful 
            for you and the community.
          </p>
        </div>
        <div className="resources-image-box"></div>
      </section>
    </div>
  );
}

