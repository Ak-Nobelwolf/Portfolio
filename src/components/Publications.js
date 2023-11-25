// Publications.jsx
import React from "react";
import "../styles/Publications.css";

function Publications() {
  return (
    <section id="publications">
      <h2>Publications</h2>

      <div className="publication">
        <h3>
          The Remote Controlled Mount for Corner Reflector (CR) Deployment
        </h3>
        <p>
          <strong>Publisher:</strong> AIP Conference Proceedings
          <br />
          <strong>Publication date:</strong> 16/02/2021
          <br />
          <strong>Publication Cited as:</strong> AIP Conference Proceedings
          2316, 020005 (2021);
          <br />
          <strong>Publication URL:</strong>{" "}
          <a
            href="https://doi.org/10.1063/5.0036764"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://doi.org/10.1063/5.0036764
          </a>
        </p>
        <p>
          This paper presents a novel device for orienting corner reflectors
          towards SAR satellites using Arduino and stepper motors. Corner
          reflectors are passive devices used for radiometric calibration of
          Synthetic Aperture Radar (SAR), which requires accurate orientation in
          azimuth and elevation. However, existing methods for orienting corner
          reflectors are either costly, complex, or manual. Therefore, we
          propose a low-cost, simple, and remote-controlled mount made of a wood
          polymer composite that can adjust the position of corner reflectors
          using stepper motors. The stepper motors control the position of the
          mount by altering the steps of +/-0.50, which are programmed using
          Arduino. We tested the performance of the remote-controlled mount with
          corner reflectors over the JGI-Global Campus during a Sentinel-1B SAR
          acquisition. The results showed that the remote-controlled mount was
          efficient, reliable, stable, and safe when deployed with corner
          reflectors. We also evaluated the weather and mechanical resistance of
          the mount to ensure its durability under different environmental and
          physical conditions.
        </p>
      </div>
    </section>
  );
}

export default Publications;
