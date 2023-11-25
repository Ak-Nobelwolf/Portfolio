import React from "react";
import Profile from "../assets/Profile.png";
import "../styles/Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-content">
        <div className="intro">
          <svg>
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Hello, I'm Akshay Tadakod
            </text>
          </svg>
          <div className="image">
            <img src={Profile} alt="Akshay Tadakod" />
          </div>
          <p className="position">
            Java Programmer | Certified Front End Web Developer
          </p>
          <p className="profile-content">
            Front-End Web Developer and skilled Java programmer dedicated to
            crafting dynamic and user-centric web applications. Accomplished in
            end-to-end project lifecycles, from design and development to
            rigorous testing and seamless deployment. Passionate about
            continuous learning, staying up-to-date with emerging technologies
            and frameworks to drive innovation and deliver high-quality
            solutions. Eager to embrace new challenges and collaborate with
            fellow professionals to achieve excellence in development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
