import React from "react";
import project1 from "../../assets/images/portofolio/project-1.jpg";
import project2 from "../../assets/images/portofolio/project-2.jpg";
import project3 from "../../assets/images/portofolio/project-3.jpg";
import project4 from "../../assets/images/portofolio/project-4.jpg";
import project5 from "../../assets/images/portofolio/project-5.jpg";
import project6 from "../../assets/images/portofolio/project-6.jpg";
import project7 from "../../assets/images/portofolio/project-7.jpg";
import project8 from "../../assets/images/portofolio/pexels-kaboompics-1280-853.jpg";
import project9 from "../../assets/images/portofolio/pexels-nurseryart-1280-853.jpg";

function Portofolio() {
  return (
    <div className="section" id="portofolio">
      <h2>Portofolio</h2>
      <Projects />
      <div className="spacer"></div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      <div>
        <div>
          <img alt="project1" src={project1} />
        </div>
      </div>
      <div>
        <div>
          {" "}
          <img alt="project2" src={project2} />
        </div>
      </div>
      <div>
        <div>
          {" "}
          <img alt="project3" src={project8} />
        </div>
      </div>
      <div>
        <div>
          {" "}
          <img alt="project4" src={project9} />
        </div>
      </div>
      <div>
        <div>
          {" "}
          <img alt="project5" src={project8} />
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
