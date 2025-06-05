import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-row">
        <a href="https://aidoctor-ca07f-517ab.web.app" target="_blank" rel="noopener noreferrer" className="project">
          <img src="/doctor.png" alt="AI Doctor Logo" className="project-logo" />
          <h3>AI Doctor</h3>
          <span>View Project</span>
        </a>
        <a href="https://bmi-calculator-1901.web.app" target="_blank" rel="noopener noreferrer" className="project">
          <img src="/bmi.png" alt="BMI Calculator Logo" className="project-logo" />
          <h3>BMI Calculator</h3>
          <span>View Project</span>
        </a>
      </div>
      <div className="project-row">
        <div className="project">
          <img src="/news.png" alt="Dynamic News Portal Logo" className="project-logo" />
          <h3>Dynamic News Portal</h3>
          <span>View Project (Coming Soon)</span>
        </div>
        <div className="project">
          <img src="/chatapp.png" alt="Real-Time Chat Application Logo" className="project-logo" />
          <h3>Real-Time Chat Application</h3>
          <span>View Project (Coming Soon)</span>
        </div>
      </div>
      <div className="project-row">
        <a href="https://to-do-973d9-2ebce.web.app/" target="_blank" rel="noopener noreferrer" className="project">
          <img src="/todo.png" alt="To-Do List Logo" className="project-logo" />
          <h3>To-Do List</h3>
          <span>View Project</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;