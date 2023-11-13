// TechStack.jsx
import React from "react";
import javaLogo from "../images/logos/java.svg";
import pythonLogo from "../images/logos/python3.svg";
import jsLogo from "../images/logos/javascript.svg";
import htmlLogo from "../images/logos/html5.svg";
import cssLogo from "../images/logos/css3.svg";
import reactLogo from "../images/logos/react-2.svg";
import gitLogo from "../images/logos/git.svg";
import vscodeLogo from "../images/logos/vscode.svg";
import "../styles/TechStack.css";
import Sidebar from "./Sidebar";

function TechStack() {
  const programmingLanguages = [
    { name: "Java", logo: javaLogo },
    { name: "Python", logo: pythonLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
  ];

  const frameworks = [
    { name: "React.js", logo: reactLogo },
    // Add other frameworks as needed
  ];

  const tools = [
    { name: "Git", logo: gitLogo },
    { name: "Visual Studio Code", logo: vscodeLogo },
    // Add other tools as needed
  ];

  return (
    <div className="tech-stack-page">
      {/* <Sidebar/> */}
      <section id="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-category">
          <h3>Programming Languages</h3>
          <div className="card-container">
            {programmingLanguages.map((tech, index) => (
              <div key={index} className="card">
                <img
                  className="card-icon"
                  src={tech.logo}
                  alt={`${tech.name} Logo`}
                />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3>Frameworks</h3>
          <div className="card-container">
            {frameworks.map((tech, index) => (
              <div key={index} className="card">
                <img
                  className="card-icon"
                  src={tech.logo}
                  alt={`${tech.name} Logo`}
                />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3>Tools</h3>
          <div className="card-container">
            {tools.map((tech, index) => (
              <div key={index} className="card">
                <img
                  className="card-icon"
                  src={tech.logo}
                  alt={`${tech.name} Logo`}
                />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechStack;
