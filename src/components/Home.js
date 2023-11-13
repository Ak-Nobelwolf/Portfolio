import React from "react";
import Profile from "../assets/Profile.png";
import "../styles/Landing.css";
import Sidebar from '../components/Sidebar.js';

function Landing() {
  return (
    <div className="landing">
      <Sidebar/>
      <div className="landing-content">
        <div className="intro">
          <h1>Hello, I'm Akshay Tadakod</h1>
          <div className="image">
            <img src={Profile} alt="Akshay Tadakod" />
          </div>
          <p className="position">Java Programmer | Certified Front End Web Developer</p>
          <p className="profile-content">
            Front-End Web Developer and skilled Java programmer dedicated to
            crafting dynamic and user-centric web applications. Proficient in
            Java, SQL, C#, .NET Framework, .NET Core, Web API, HTML, CSS, and
            JavaScript, including React.js. Accomplished in end-to-end project
            lifecycles, from design and development to rigorous testing and
            seamless deployment. Passionate about continuous learning, staying
            up-to-date with emerging technologies and frameworks to drive
            innovation and deliver high-quality solutions. Eager to embrace new
            challenges and collaborate with fellow professionals to achieve
            excellence in development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
