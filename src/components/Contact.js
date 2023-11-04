import React from 'react';
import '../styles/Contact.css';
import Sidebar from "./Sidebar";

function Contact() {
  return (
    <div className="contact">
      <Sidebar/>
      <div className="contact-content">
        <div className="contact-details">
          <h2>Contact Me</h2>
          <p>If you have any questions or inquiries, feel free to reach out</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:akshaytadakod@gmail.com">akshaytadakod@gmail.com</a></li>
            <li><strong>Phone:</strong> +91 9886083905</li>
            <li><strong>Address:</strong> Karnataka, India</li>
          </ul>
        </div>
        <div className="social-media">
          <h2>Connect With Me</h2>
          <ul>
            <li><a href="https://www.linkedin.com/in/akshaytadakod/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/Ak-Nobelwolf" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Akshay Tadakod. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;
