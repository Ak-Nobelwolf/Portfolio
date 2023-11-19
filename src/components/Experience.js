// Experience.jsx
import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>

      <div className="experience">
        <h3 className="experience-title">Systems Engineer</h3>
        <h3 className="experience-date">Nov 2021 - Present</h3>
      </div>

      <p className="experience-company">
        <em>Infosys, Bangalore, India</em>
      </p>

      <div className="experience-description">
        <div className="project-1">
          <h4>Project 1: Full-Stack Developer | Integration and Migration Project</h4>
          <p>Nov 2022 - Jul 2023</p>

          <ol className="uniform-list">
            <li>
              <strong>Web-Based Excel Compare Tool Development:</strong>
              <ul>
                <li>
                  Independently designed and built a web tool to accurately
                  compare Excel files, generating detailed text-based results.
                </li>
                <li>
                  Utilized a comprehensive technology stack including HTML, CSS,
                  JavaScript, Java Servlet, and Apache Server for a seamless user
                  experience.
                </li>
                <li>
                  Proficient in full-stack development, seamlessly integrating
                  front-end and back-end for a cohesive and responsive Excel
                  Compare tool.
                </li>
              </ul>
            </li>

            <li>
              <strong>User-Friendly Interface Design:</strong>
              <ul>
                <li>
                  Created an intuitive web interface using HTML and CSS, ensuring
                  easy accessibility and user-friendliness for diverse users.
                </li>
                <li>
                  Enhanced interactivity and form validations with JavaScript to
                  boost user engagement and satisfaction.
                </li>
              </ul>
            </li>

            <li>
              <strong>Efficient Back-End Management:</strong>
              <ul>
                <li>
                  Implemented Java Servlet technology to streamline data
                  processing and communication between front-end and back-end
                  components.
                </li>
                <li>
                  Ensured secure and reliable performance by configuring and
                  maintaining the Apache Server environment.
                </li>
              </ul>
            </li>

            <li>
              <strong>Thorough Documentation:</strong>
              <ul>
                <li>
                  Documented the entire development process, including
                  architecture, code, and technical details.
                </li>
                <li>
                  Produced detailed user manuals and guides for effective tool
                  navigation and utilization.
                </li>
                <li>
                  Ensured comprehensive documentation of implementation steps,
                  facilitating smooth knowledge transfer and future maintenance.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="project-2">
          <h4>Project 2: Change Analyst | Oracle Agile PLM Project</h4>
          <p>Feb 2022 - Nov 2022</p>

          <ol className="non-uniform-list">
            <li>
              Managed and executed Engineering Change Requests (ECRs), including
              Engineering Change Orders (ECOs) and Deviations, adhering to
              Standard Service Level Agreements (SLAs).
            </li>
            <li>
              Collaborated closely with cross-functional teams to address end-user
              queries and concerns related to manufacturing change orders (MCOs)
              and Change to Unreleased Product (CUP) processes.
            </li>
            <li>
              Conducted rigorous assessments of Engineering Change Requests to
              ensure alignment with corporate guidelines and matrix.
            </li>
            <li>
              Proactively identified discrepancies in Change Orders and promptly
              rectified missing or inaccurate information, ensuring compliance
              with corporate policies.
            </li>
            <li>
              Played a key role in optimizing approval matrix workflows by
              facilitating approvers' addition, removal, and adjustment,
              streamlining MCOs and CuPs movement.
            </li>
            <li>
              Demonstrated proficiency in managing deviations, including daily
              tasks of extending, re-extending, and expiring deviations to
              maintain process efficiency.
            </li>
            <li>
              Utilized Oracle Agile PLM system to track and document change
              processes, contributing to accurate and comprehensive change history
              records.
            </li>
            <li>
              Collaborated with stakeholders to provide training and support on
              system functionalities, resulting in improved user understanding and
              increased adoption.
            </li>
          </ol>
        </div>
      </div>

      <div className="experience">
        <h3 className="experience-title">Graduate Apprentice Trainee</h3>
        <h3 className="experience-date">Jun 2020 - Aug 2021</h3>
      </div>

      <p className="experience-company">
        <em>Hindustan Aeronautics Limited Bangalore, India</em>
      </p>

      <div className="experience-description">
        <div className="division-1">
          <h4>
            Hydraulics Department (AMCA Project), Aircraft Research and Design
            Center (ARDC)
          </h4>
          <p>Jun 2021 - Aug 2021</p>
          <ol>
            <li>
              Collaborated on hydraulic layout and routing for Advanced Medium
              Combat Aircraft (AMCA) Secondary Power Systems (SPS), Spine area,
              and Flight Control System (FCS), focusing on Primary Control
              Surfaces.
            </li>
            <li>
              Utilized Catia and Teamcenter for modeling and drawing creation,
              specializing in Part Design, Assembly, and Routing of Hydraulic
              Systems.
            </li>
            <li>
              Proficient in Hydraulic hoses, hose end fittings, tubes, and tube
              end fittings, including Airdrome and Permaswage Fittings.
            </li>
          </ol>
        </div>

        <div className="division-2">
          <h4>Development Department (Methods), Foundry and Forge (F&F)</h4>
          <p>Dec 2020 - Jun 2021</p>
          <ol>
            <li>
              Acquired expertise in Aerospace industry Casting (Investment
              Casting, Aluminium/Magnesium Casting), Forging, and Ring Rolling
              techniques.
            </li>
            <li>
              Demonstrated competence in part modeling, drafting using NX-10, and
              creating Method sketches, Product Drawings, and Technology sheets
              using Autocad 2021.
            </li>
            <li>
              Proficient in interpreting industry-standard CAD drawings, basic
              GD&T concepts, and simulation tools like MAGMASOFT (casting) and
              Simufact (forging).
            </li>
          </ol>
        </div>

        <div className="division-3">
          <h4>
            Quality Control, Blade Shop (Cheetah Chetak), Helicopter Division
          </h4>
          <p>Jun 2020 - Dec 2020</p>
          <ol>
            <li>
              Developed a comprehensive understanding of manufacturing, testing,
              repair, and traceability of the Main Rotor Blade (MRB) and Tail
              Rotor Blade (TRB).
            </li>
            <li>
              Skilled in calibrating measuring devices, testing equipment, and
              using IFS software for documenting New/Serviceable Blades.
            </li>
            <li>
              Hands-on experience with NDTs including Radiography - X-Ray (NDTS
              001) and Dye Penetrant Test (NDTS 015) for Inspection.
            </li>
            <li>
              Proficient in measuring Rotor Blades with calipers, and gauges, and
              performing Static Balance of Main Rotor Blades.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Experience;
