import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>Enthusiastic B.Tech student majoring in AI & ML, <br />
      passionate about turning complex ideas into real-world web applications.<br />
      With a growing expertise in full-stack development and a strong foundation in machine learning,<br />
      I thrive on building intelligent, user-centric solutions that bridge technology and innovation</p>
      <h3 className="experience-heading">MY Experience</h3>
      <div className="experience-block">
        <p><strong>AWS Intern</strong><br />
        <span className="company-name">Maxgen Technologies</span> <br />  
        May 2024 – July 2024, Pune, India<br />
        Completed Amazon Web Services internship at Maxgen Technologies P.v.t L.t.d, Pune, Maharashtra.<br />
        This training was part of summer internship and training program conducted by JIET institute to encourage students to take part in various educational programs provided by IT companies for freshers.</p>
      </div>

      <h3> My Skills</h3>
      <div className="skills-container">
        <div className="skills-line">
          <img src="/Python.jpeg" alt="Python" className="skill-logo" />
          <img src="/JavaScript-Emblem.png" alt="JavaScript" className="skill-logo" />
          <img src="/JAVa.jpeg" alt="Java" className="skill-logo" />
          <img src="/HTML.jpeg" alt="HTML5" className="skill-logo" />
          <img src="/css.jpeg" alt="CSS3" className="skill-logo" />
          <img src="/react.jpeg" alt="ReactJS" className="skill-logo" />
        </div>
        <div className="skills-line">
          <img src="/node.jpeg" alt="NodeJS" className="skill-logo" />
          <img src="/EXPRESS.jpeg" alt="Express.js" className="skill-logo" />
          <img src="/git.jpeg" alt="Git" className="skill-logo" />
          <img src="/github.jpeg" alt="GitHub" className="skill-logo" />
          <img src="/matlab.jpeg" alt="MATLAB" className="skill-logo" />
        </div>
      </div>


      <h3>Certificates</h3>
      <ul>
        <li>Full stack web development (Udemy)</li>
        <li>Database Design and ER modeling (Infosys SpringBoard)</li>
        <li>MATLAB Onramp (Open Source)</li>
      </ul>
    </section>
  );
};

export default About;
