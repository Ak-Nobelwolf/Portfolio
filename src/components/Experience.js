import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>
      <div className="experience">
        <h3 className="experience-title">Systems Engineer</h3>
        <h3 className="experience-date">Nov 2021 - Present</h3>
      </div>
      <p><em>Infosys, Bangalore, India</em></p>
      <div className="experience-description">
        <h4>Full-Stack Developer | Integration and Migration Project</h4>
        <p>Nov 2022 - Jul 2023</p>
        {/* Add experience details here */}
      </div>
      <div className="experience">
        <h3 className="experience-title">Graduate Apprentice Trainee</h3>
        <h3 className="experience-date">Jun 2020 - Aug 2021</h3>
      </div>
      <p><em>Bangalore, India</em></p>
      <div className="experience-description">
        <h4>Hydraulics Department (AMCA Project), Aircraft Research and Design Center (ARDC)</h4>
        <p>Jun 2021 - Aug 2021</p>
        {/* Add experience details here */}
      </div>
    </section>
  );
}

export default Experience;
