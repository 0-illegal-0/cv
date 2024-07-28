import React, { useEffect } from "react";
import project1 from "../../assets/images/portofolio/project-1.jpg";
import project2 from "../../assets/images/portofolio/project-2.jpg";
import techIconSix from "../../assets/images/tech-icon/CSS3-2.png";
import techIconOne from "../../assets/images/tech-icon/pexels-pixabay-261621.jpg";
import techIconTwo from "../../assets/images/tech-icon/pexels-pixabay-261621.jpg";
import techIconThree from "../../assets/images/tech-icon/pexels-pixabay-261621.jpg";
import techIconFour from "../../assets/images/tech-icon/pexels-pixabay-261621.jpg";
import techIconFive from "../../assets/images/tech-icon/pexels-pixabay-261621.jpg";
import project3 from "../../assets/images/portofolio/project-3.jpg";
import project4 from "../../assets/images/portofolio/project-4.jpg";
import project5 from "../../assets/images/portofolio/project-5.jpg";
import project6 from "../../assets/images/portofolio/project-6.jpg";
import project7 from "../../assets/images/portofolio/project-7.jpg";
import project8 from "../../assets/images/portofolio/pexels-kaboompics-1280-853.jpg";
import project9 from "../../assets/images/portofolio/pexels-nurseryart-1280-853.jpg";

const project = {
  "projects-types": ["all", "image", "video", "sound"],
  "prototype-projects": [
    {
      id: 0,
      "project-name": "Project 1",
      "project-image": project1,
      type: "image",
      "prototype-review": {
        client: "Johnson Tomas",
        category: "UI/UX Design",
        duration: "40 days",
        technologies: [
          techIconOne,
          techIconTwo,
          techIconThree,
          techIconFour,
          techIconFive,
        ],
        "prototype-images": [
          { id: 0, image: project1 },
          { id: 1, image: project1 },
          { id: 2, image: project1 },
        ],
      },
    },
    {
      id: 1,
      "project-name": "Project 2",
      "project-image": project2,
      type: "video",
      "prototype-review": {
        client: "Johnson Tomas",
        category: "UI/UX Design",
        duration: "40 days",
        technologies: [
          techIconOne,
          techIconTwo,
          techIconThree,
          techIconFour,
          techIconFive,
        ],

        "prototype-images": [
          { id: 0, image: project2 },
          { id: 1, image: project2 },
          { id: 2, image: project2 },
        ],
      },
    },
    {
      id: 2,
      "project-name": "Project 3",
      "project-image": project1,
      type: "image",
      "prototype-review": {
        client: "Johnson Tomas",
        category: "UI/UX Design",
        duration: "40 days",
        technologies: [
          techIconOne,
          techIconTwo,
          techIconThree,
          techIconFour,
          techIconFive,
        ],

        "prototype-images": [
          { id: 0, image: project1 },
          { id: 1, image: project1 },
          { id: 2, image: project1 },
        ],
      },
    },
    {
      id: 3,
      "project-name": "Project 3",
      "project-image": project2,
      type: "image",
      "prototype-review": {
        client: "Johnson Tomas",
        category: "UI/UX Design",
        duration: "40 days",
        technologies: [
          techIconOne,
          techIconTwo,
          techIconThree,
          techIconFour,
          techIconFive,
        ],

        "prototype-images": [
          { id: 0, image: project2 },
          { id: 1, image: project2 },
          { id: 2, image: project2 },
        ],
      },
    },
    {
      id: 4,
      "project-name": "Project 4",
      "project-image": project1,
      type: "sound",
      "prototype-review": {
        client: "Johnson Tomas",
        category: "UI/UX Design",
        duration: "40 days",
        technologies: [
          techIconOne,
          techIconTwo,
          techIconThree,
          techIconFour,
          techIconFive,
        ],

        "prototype-images": [
          { id: 0, image: project1 },
          { id: 1, image: project1 },
          { id: 2, image: project1 },
        ],
      },
    },
  ],
};

// project filter

function headerFilterFocus(type) {
  for (let index = 0; index < project["projects-types"].length; index++) {
    document
      .getElementById(project["projects-types"][index])
      .classList.remove("primary-color");
  }
  document.getElementById(type).classList.add("primary-color");
}

function projectFilter(type) {
  if (type === "all") {
    for (let index = 0; index < project["prototype-projects"].length; index++) {
      document.getElementById(
        project["prototype-projects"][index]["id"]
      ).style.display = "block";

      document
        .getElementById(
          project["prototype-projects"][index]["id"] + "-container"
        )
        .classList.add("filter-animation-remove");

      setTimeout(() => {
        document
          .getElementById(
            project["prototype-projects"][index]["id"] + "-container"
          )
          .classList.remove("filter-animation-remove");
      }, 200);
    }
  } else {
    for (let index = 0; index < project["prototype-projects"].length; index++) {
      if (project["prototype-projects"][index]["type"] !== type) {
        document.getElementById(
          project["prototype-projects"][index]["id"]
        ).style.display = "none";

        document
          .getElementById(
            project["prototype-projects"][index]["id"] + "-container"
          )
          .classList.remove("filter-animation-remove");
      } else {
        document.getElementById(
          project["prototype-projects"][index]["id"]
        ).style.display = "block";

        document
          .getElementById(
            project["prototype-projects"][index]["id"] + "-container"
          )
          .classList.add("filter-animation-remove");
      }
    }
  }
}

function Portofolio() {
  return (
    <div className="section portofolio" id="portofolio">
      <h2>Portofolio</h2>
      <div className="project-types">
        {project["projects-types"].map((value) => {
          return (
            <b
              id={value}
              className={value === "all" ? "primary-color" : null}
              onClick={() => {
                projectFilter(value);
                headerFilterFocus(value);
              }}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </b>
          );
        })}
      </div>
      <Projects />
      <div className="spacer"></div>
    </div>
  );
}

// project
let prototypeDetails = null;
let prototypeTechnologies = null;
let prototypeImages;

function Projects() {
  let prototypeData = null;

  useEffect(() => {
    prototypeImages = document.getElementById("prototype-images");
    prototypeTechnologies = document.getElementById("prototype-technologies");
    prototypeDetails = document.getElementById("prototype-details");
  });

  function projectsReviw(id) {
    prototypeImages.innerHTML = ""; // reset
    prototypeTechnologies.innerHTML = "";
    prototypeData = project["prototype-projects"][id]["prototype-review"];

    for (
      let index = 0;
      index < prototypeData["prototype-images"].length;
      index++
    ) {
      prototypeImages.innerHTML +=
        "<img src=" + prototypeData["prototype-images"][index]["image"] + "/>";

      prototypeDetails.classList.remove("prototype-review-hidden");
      prototypeDetails.classList.add("prototype-review-show");
      prototypeDetails.style.display = "flex";
      prototypeDetails.style.opacity = "1";
    }
    console.log("==== ", prototypeData["technologies"].length);
    for (let index = 0; index < prototypeData["technologies"].length; index++) {
      console.log("==== ", prototypeData["technologies"].length);

      prototypeTechnologies.innerHTML += "<img src=" + techIconSix + "/>";
    }
  }

  return (
    <div className="projects">
      {project["prototype-projects"].map((count) => {
        return (
          <div
            id={count["id"]}
            onClick={() => {
              projectsReviw(count["id"]);
            }}
          >
            <div id={count["id"] + "-container"}>
              <div className="event-screen">
                <div className="description-content">
                  <b className="project-name">{count["project-name"]}</b>
                </div>
              </div>
              <img
                id={count["id"] + "-image"}
                alt={count["project-name"]}
                src={count["project-image"]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Portofolio;
