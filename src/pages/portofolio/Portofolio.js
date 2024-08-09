import React, { useEffect } from "react";
import aboutData from "../../data/portofolio.json";
import project1 from "../../assets/images/portofolio/project-1.jpg";
import project2 from "../../assets/images/portofolio/project-2.jpg";
import project3 from "../../assets/images/portofolio/project-8.jpg";
import project5 from "../../assets/images/portofolio/project-10.jpg";

// get prototype image
const protoTypeImage = [];
function getImageData() {
  for (let index = 0; index < aboutData["prototype-projects"].length; index++) {
    protoTypeImage.push(
      aboutData["prototype-projects"][index]["project-image"]
    );
  }
}
getImageData();

const project = {
  "projects-types": ["all", "image", "video", "sound"],
  "prototype-projects": [
    {
      id: 0,
      "project-name": "Project 1",
      "project-image": "../../assets/images/portofolio/project-1.jpg",
      type: "image",
      "prototype-review": {
        "prototype-review-details": [
          { value: "Johnson Tomas", title: "Client" },
          { value: "UI/UX Design", title: "Category" },
          { value: "40 days", title: "Duration" },
          { value: "40 days", title: "Web Site" },
        ],

        description:
          "Duis at viverra lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur mi est, fringilla non magna et, sollicitudin elementum ex. Suspendisse molestie urna molestie risus laoreet semper. Suspendisse placerat metus consequat tellus dapibus aliquam. Quisque semper ullamcorper mauris, quis volutpat sem sodales quis. Aenean ut cursus nisl. Mauris posuere sapien a mi eleifend ornare. Phasellus suscipit ex a tortor tincidunt, eget lacinia lacus pulvinar. Phasellus posuere diam tortor, sed pretium quam tristique non. Sed metus felis, volutpat in viverra ac, egestas vel urna.",
        technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "FIGMA"],
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
      "project-image": "../../assets/images/portofolio/project-1.jpg",
      type: "video",
      "prototype-review": {
        "prototype-review-details": [
          { value: "Johnson Tomas", title: "Client" },
          { value: "UI/UX Design", title: "Category" },
          { value: "40 days", title: "Duration" },
          { value: "40 days", title: "Web Site" },
        ],
        description:
          "Duis at viverra lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur mi est, fringilla non magna et, sollicitudin elementum ex. Suspendisse molestie urna molestie risus laoreet semper. Suspendisse placerat metus consequat tellus dapibus aliquam. Quisque semper ullamcorper mauris, quis volutpat sem sodales quis. Aenean ut cursus nisl. Mauris posuere sapien a mi eleifend ornare. Phasellus suscipit ex a tortor tincidunt, eget lacinia lacus pulvinar. Phasellus posuere diam tortor, sed pretium quam tristique non. Sed metus felis, volutpat in viverra ac, egestas vel urna.",

        technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "FIGMA"],

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
      "project-image": "../../assets/images/portofolio/project-1.jpg",
      type: "image",
      "prototype-review": {
        "prototype-review-details": [
          { value: "Johnson Tomas", title: "Client" },
          { value: "UI/UX Design", title: "Category" },
          { value: "40 days", title: "Duration" },
          { value: "40 days", title: "Web Site" },
        ],
        description:
          "Duis at viverra lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur mi est, fringilla non magna et, sollicitudin elementum ex. Suspendisse molestie urna molestie risus laoreet semper. Suspendisse placerat metus consequat tellus dapibus aliquam. Quisque semper ullamcorper mauris, quis volutpat sem sodales quis. Aenean ut cursus nisl. Mauris posuere sapien a mi eleifend ornare. Phasellus suscipit ex a tortor tincidunt, eget lacinia lacus pulvinar. Phasellus posuere diam tortor, sed pretium quam tristique non. Sed metus felis, volutpat in viverra ac, egestas vel urna.",

        technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "FIGMA"],

        "prototype-images": [
          { id: 0, image: project3 },
          { id: 1, image: project3 },
          { id: 2, image: project3 },
        ],
      },
    },
    {
      id: 3,
      "project-name": "Project 3",
      "project-image": "../../assets/images/portofolio/project-1.jpg",
      type: "image",
      "prototype-review": {
        "prototype-review-details": [
          { value: "Johnson Tomas", title: "Client" },
          { value: "UI/UX Design", title: "Category" },
          { value: "40 days", title: "Duration" },
          { value: "40 days", title: "Web Site" },
        ],
        description:
          "Duis at viverra lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur mi est, fringilla non magna et, sollicitudin elementum ex. Suspendisse molestie urna molestie risus laoreet semper. Suspendisse placerat metus consequat tellus dapibus aliquam. Quisque semper ullamcorper mauris, quis volutpat sem sodales quis. Aenean ut cursus nisl. Mauris posuere sapien a mi eleifend ornare. Phasellus suscipit ex a tortor tincidunt, eget lacinia lacus pulvinar. Phasellus posuere diam tortor, sed pretium quam tristique non. Sed metus felis, volutpat in viverra ac, egestas vel urna.",

        technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "FIGMA"],

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
      "project-image": "../../assets/images/portofolio/project-1.jpg",
      type: "sound",
      "prototype-review": {
        "prototype-review-details": [
          { value: "Johnson Tomas", title: "Client" },
          { value: "UI/UX Design", title: "Category" },
          { value: "40 days", title: "Duration" },
          { value: "40 days", title: "Web Site" },
        ],
        description:
          "Duis at viverra lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur mi est, fringilla non magna et, sollicitudin elementum ex. Suspendisse molestie urna molestie risus laoreet semper. Suspendisse placerat metus consequat tellus dapibus aliquam. Quisque semper ullamcorper mauris, quis volutpat sem sodales quis. Aenean ut cursus nisl. Mauris posuere sapien a mi eleifend ornare. Phasellus suscipit ex a tortor tincidunt, eget lacinia lacus pulvinar. Phasellus posuere diam tortor, sed pretium quam tristique non. Sed metus felis, volutpat in viverra ac, egestas vel urna.",

        technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "FIGMA"],

        "prototype-images": [
          { id: 0, image: project5 },
          { id: 1, image: project5 },
          { id: 2, image: project5 },
        ],
      },
    },
  ],
};

// project filter

function headerFilterFocus(type) {
  for (let index = 0; index < aboutData["projects-types"].length; index++) {
    document
      .getElementById(aboutData["projects-types"][index])
      .classList.remove("primary-color");
  }
  document.getElementById(type).classList.add("primary-color");
}

function projectFilter(type) {
  if (type === "all") {
    for (
      let index = 0;
      index < aboutData["prototype-projects"].length;
      index++
    ) {
      document.getElementById(
        aboutData["prototype-projects"][index]["id"]
      ).style.display = "block";

      document
        .getElementById(
          aboutData["prototype-projects"][index]["id"] + "-container"
        )
        .classList.add("filter-animation-remove");

      setTimeout(() => {
        document
          .getElementById(
            aboutData["prototype-projects"][index]["id"] + "-container"
          )
          .classList.remove("filter-animation-remove");
      }, 200);
    }
  } else {
    for (
      let index = 0;
      index < aboutData["prototype-projects"].length;
      index++
    ) {
      if (aboutData["prototype-projects"][index]["type"] !== type) {
        document.getElementById(
          aboutData["prototype-projects"][index]["id"]
        ).style.display = "none";

        document
          .getElementById(
            aboutData["prototype-projects"][index]["id"] + "-container"
          )
          .classList.remove("filter-animation-remove");
      } else {
        document.getElementById(
          aboutData["prototype-projects"][index]["id"]
        ).style.display = "block";

        document
          .getElementById(
            aboutData["prototype-projects"][index]["id"] + "-container"
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
        {aboutData["projects-types"].map((value) => {
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
let descriptionContent;
let prototypeInfo;
//&nbsp:&nbsp
function Projects() {
  let prototypeData = null;

  useEffect(() => {
    prototypeImages = document.getElementById("prototype-images");
    prototypeInfo = document.getElementById("prototype-info-details");
    descriptionContent = document.getElementById(
      "prototype-description-content"
    );
    prototypeTechnologies = document.getElementById("prototype-technologies");
    prototypeDetails = document.getElementById("prototype-details");
  });
  function projectsReviw(id) {
    prototypeImages.innerHTML = ""; // reset
    descriptionContent.innerHTML = "";
    prototypeInfo.innerHTML = "";
    prototypeTechnologies.innerHTML = "<b >Technologies : </b>";
    prototypeData = aboutData["prototype-projects"][id]["prototype-review"];
    console.log("=+=+=+= ", prototypeData["prototype-images"][0]["image"]);

    for (
      let index = 0;
      index < prototypeData["prototype-images"].length;
      index++
    ) {
      prototypeImages.innerHTML +=
        "<img src=" +
        process.env.PUBLIC_URL +
        `${prototypeData["prototype-images"][index]["image"]}` +
        ">";
      /*  process.env.PUBLIC_URL +
        prototypeData["prototype-images"][index]["image"];*/

      prototypeDetails.classList.remove("prototype-review-hidden");
      prototypeDetails.classList.add("prototype-review-show");
      prototypeDetails.style.display = "flex";
      prototypeDetails.style.opacity = "1";
    }

    for (let index = 0; index < prototypeData["technologies"].length; index++) {
      prototypeTechnologies.innerHTML +=
        "<span>" + prototypeData["technologies"][index] + "</span>";
    }

    descriptionContent.innerHTML = prototypeData["description"];

    prototypeData["prototype-review-details"].forEach((element) => {
      prototypeInfo.innerHTML +=
        "<div><b>" +
        element["title"] +
        "</b><b class=colon> &nbsp:&nbsp </b><span>" +
        element["value"] +
        "</span></div>";
    });
  }

  return (
    <div className="projects">
      {aboutData["prototype-projects"].map((count, index) => {
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
                src={process.env.PUBLIC_URL + protoTypeImage[index]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Portofolio;
