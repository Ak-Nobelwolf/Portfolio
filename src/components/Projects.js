// Projects.jsx
import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Little Lemon Restaurant Website",
      description: "Welcome to the delightful Little Lemon Restaurant website project! This React-based web application is a showcase of our restaurant's menu and features, providing customers with a user-friendly platform to explore our offerings. From browsing our delicious menu items to making reservations and placing online orders, the website is designed for a seamless experience. Dive into the history, values, and team behind Little Lemon in the About Us section. Check out some snapshots of the website and explore its key features, including menu browsing, reservations, and online ordering. To get a firsthand look, click on the below link.",
      url: "https://github.com/Ak-Nobelwolf/Little-Lemon",
    },
    {
      title: "Portfolio",
      description: "Welcome to the Portfolio project, a personalized showcase of my skills, achievements, and projects! This web-based portfolio is crafted to provide visitors with a comprehensive overview of my professional journey and expertise. Designed with a user-friendly interface, the portfolio allows you to explore various sections, including my background, skills, and a curated selection of projects. From web development and design to programming languages and tools, the portfolio reflects my proficiency and passion for creating innovative solutions. Take a tour through the showcased projects to gain insights into my approach, problem-solving capabilities, and the technologies I've utilized.",
      url: "https://github.com/Ak-Nobelwolf/Portfolio",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
