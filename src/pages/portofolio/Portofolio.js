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

const project = [
  {
    id: "project-1",
    "project-name": "Project 1",
    "project-image": project1,
    type: "type-1",
  },
  {
    id: "project-2",
    "project-name": "Project 2",
    "project-image": project2,
    type: "type-2",
  },
  {
    id: "project-3",
    "project-name": "Project 3",
    "project-image": project1,
    type: "type-1",
  },
  {
    id: "project-4",
    "project-name": "Project 3",
    "project-image": project2,
    type: "type-2",
  },
  {
    id: "project-5",
    "project-name": "Project 4",
    "project-image": project1,
    type: "type-3",
  },
];

// project filter

function projectFilter(type) {
  if (type === "all") {
    for (let index = 0; index < project.length; index++) {
      document.getElementById(project[index]["id"]).style.display = "block";
    }
  } else {
    for (let index = 0; index < project.length; index++) {
      if (project[index]["type"] !== type) {
        document
          .getElementById(project[index]["id"])
          .classList.add("filter-animation-remove");
        //    setTimeout(() => {
        document.getElementById(project[index]["id"]).style.width = "0";
        document.getElementById(project[index]["id"]).style.height = "0";
        document.getElementById(project[index]["id"]).style.padding = "0";
        document.getElementById(project[index]["id"]).style.opacity = "0";

        //    }, 5);
      } else {
        //   document.getElementById(project[index]["id"]).style.display = "block";
        /*   document.getElementById(project[index]["id"]).style.width =
          "width: calc(100% / 2)";*/
      }
    }
  }
}

function Portofolio() {
  return (
    <div className="section" id="portofolio">
      <h2>Portofolio</h2>
      <div className="project-types">
        <span
          onClick={() => {
            projectFilter("all");
          }}
        >
          all
        </span>
        <span
          onClick={() => {
            projectFilter("type-1");
          }}
        >
          type-1
        </span>
        <span
          onClick={() => {
            projectFilter("type-2");
          }}
        >
          type-2
        </span>
        <span
          onClick={() => {
            projectFilter("type-3");
          }}
        >
          type-3
        </span>
        <span
          onClick={() => {
            projectFilter("type-4");
          }}
        >
          type-4
        </span>
      </div>
      <Projects />
      <div className="spacer"></div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      {project.map((count) => {
        return (
          <div id={count["id"]}>
            <div>
              <div className="event-screen">
                <div className="description-content">
                  <b className="project-name">{count["project-name"]}</b>
                </div>
              </div>
              <img alt={count["project-name"]} src={count["project-image"]} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Portofolio;
