import React from "react";
import "../styles/Certificates.css";
import Certificate0 from "../images/certificates/HTML, CSS, and Javascript for Web Developers.jpeg";
import Certificate1 from "../images/certificates/01- Introduction to Front-End Development.jpeg";
import Certificate2 from "../images/certificates/02 - Programming with JavaScript.jpeg";
import Certificate3 from "../images/certificates/03 - Version Control.jpeg";
import Certificate4 from "../images/certificates/04 - HTML and CSS in depth.jpeg";
import Certificate5 from "../images/certificates/05 - React Basics.jpeg";
import Certificate6 from "../images/certificates/06 - Advanced React.jpeg";
import Certificate7 from "../images/certificates/07 - Principles of UX UI Design.jpeg";
import Certificate8 from "../images/certificates/08 - Front-End Developer Capstone.jpeg";
import Certificate9 from "../images/certificates/09 - Coding Interview Preparations.jpeg";
import Certificate10 from "../images/certificates/OCI Foundations Associate_1Z0-1085-23.jpg";
// import Sidebar from "./Sidebar";

function Certificates() {
  return (
    <div>
      {/* <Sidebar/> */}
      <section className="certificates">
        <h2>Certificates</h2>
        <div className="certificate-cards">
          {/* Certificate 0 */}
          <div className="certificate-card">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/YP249JSXRYK3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate0} alt="Certificate 0" />
            </a>
            <p>HTML, CSS, and JavaScript for Web Developers</p>
          </div>
          {/* Certificate 1 */}
          <div className="certificate-card">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/DWYNNLU5KCZA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate1} alt="Certificate 1" />
            </a>
            <p>01 - Introduction to Front-End Development</p>
          </div>
          {/* Certificate 2 */}
          <div className="certificate-card">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/LDHAX7UKYQSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate2} alt="Certificate 2" />
            </a>
            <p>02 - Programming with JavaScript</p>
          </div>
          {/* Certificate 3 */}
          <div className="certificate-card">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/WJBY7L9U5UFH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate3} alt="Certificate 3" />
            </a>
            <p>03 - Version Control</p>
          </div>
          {/* Certificate 4 */}
          <div className="certificate-card">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/GDRAH9KZP92B"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate4} alt="Certificate 4" />
            </a>
            <p>04 - HTML and CSS in depth</p>
          </div>
          {/* Certificate 5 */}
          <div className="certificate-card">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/4YYC9JSG689P"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate5} alt="Certificate 5" />
            </a>
            <p>05 - React Basics</p>
          </div>
          {/* Certificate 6 */}
          <div className="certificate-card">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/GV6JKW9PUQDT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate6} alt="Certificate 6" />
            </a>
            <p>06 - Advanced React</p>
          </div>
          {/* Certificate 7 */}
          <div className="certificate-card">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/WJ9FX9T6CDED"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate7} alt="Certificate 7" />
            </a>
            <p>07 - Principles of UX/UI Design</p>
          </div>
          {/* Certificate 8 */}
          <div className="certificate-card">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/BYU97VAFJDLE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate8} alt="Certificate 8" />
            </a>
            <p>08 - Front-End Deveoper Capstone</p>
          </div>
          {/* Certificate 9 */}
          <div className="certificate-card">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/A87TN7QPZZ4S"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate9} alt="Certificate 9" />
            </a>
            <p>09 - Coding Interview Preparations</p>
          </div>
          {/* Certificate 10 */}
          <div className="certificate-card">
            <a
              href="https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC4596568&trackId=OCIF2023CA&key=2c8f30a6e93622e46b39326fdbaf6fb35c1da0e4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Certificate10} alt="Certificate 10" />
            </a>
            <p>Oracle Certified Foundations Associate - 1Z0-1085-23</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certificates;
