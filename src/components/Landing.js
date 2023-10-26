import React from 'react';
import Profile from '../assets/Profile.png';
import '../styles/Landing.css';

import Header from './Header';


function Landing() {
  return (
    <>
    <section className="landing">
      <div className="landing-content">
        <div className="intro">
          <h1>Hello, I'm Akshay Tadakod</h1>
          <p>Systems Engineer</p>
        </div>
        <div className="image">
          <img src={Profile} alt="Akshay Tadakod" />
        </div>
      </div>
    </section>
    <Header />
    </>
  );
}

export default Landing;
