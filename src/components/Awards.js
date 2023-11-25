// Awards.jsx
import React from "react";
import "../styles/Awards.css";

function Awards() {
  return (
    <section id="awards">
      <h2>Awards</h2>
      <div className="award-card">
        <h3>Insta Award</h3>
        <p className="award-company">Issued by Infosys Ltd</p>
        <p className="award-description">
          I am honored to receive the Insta Award for Excellent Work and
          Contribution towards Oracle PLM COE activities. This award recognizes
          my efforts in developing and implementing innovative solutions for the
          Product Lifecycle Management Center of Excellence.
        </p>
      </div>
    </section>
  );
}

export default Awards;
