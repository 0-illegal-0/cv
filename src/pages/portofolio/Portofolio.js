import React, { useEffect, useState, useRef } from "react";
import portofolioData from "../../data/portofolio.json";

// get prototype image
const protoTypeImage = [];

function getImageData() {
  for (
    let index = 0;
    index < portofolioData["prototype-projects"].length;
    index++
  ) {
    protoTypeImage.push(
      portofolioData["prototype-projects"][index]["project-image"]
    );
  }
}
getImageData();

// project filter

function headerFilterFocus(type) {
  for (
    let index = 0;
    index < portofolioData["projects-types"].length;
    index++
  ) {
    document
      .getElementById(portofolioData["projects-types"][index])
      .classList.remove("primary-color");
  }
  document.getElementById(type).classList.add("primary-color");
}

function projectFilter(type) {
  if (type === "all") {
    for (
      let index = 0;
      index < portofolioData["prototype-projects"].length;
      index++
    ) {
      document.getElementById(
        portofolioData["prototype-projects"][index]["id"]
      ).style.display = "block";

      document
        .getElementById(
          portofolioData["prototype-projects"][index]["id"] + "-container"
        )
        .classList.add("filter-animation-remove");

      setTimeout(() => {
        document
          .getElementById(
            portofolioData["prototype-projects"][index]["id"] + "-container"
          )
          .classList.remove("filter-animation-remove");
      }, 200);
    }
  } else {
    for (
      let index = 0;
      index < portofolioData["prototype-projects"].length;
      index++
    ) {
      if (portofolioData["prototype-projects"][index]["type"] !== type) {
        document.getElementById(
          portofolioData["prototype-projects"][index]["id"]
        ).style.display = "none";

        document
          .getElementById(
            portofolioData["prototype-projects"][index]["id"] + "-container"
          )
          .classList.remove("filter-animation-remove");
      } else {
        document.getElementById(
          portofolioData["prototype-projects"][index]["id"]
        ).style.display = "block";

        document
          .getElementById(
            portofolioData["prototype-projects"][index]["id"] + "-container"
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
        {portofolioData["projects-types"].map((value) => {
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
let prototypeDetails;
let prototypeTechnologies;
let prototypeImages;
let descriptionContent;
let prototypeInfo;

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
    prototypeData =
      portofolioData["prototype-projects"][id]["prototype-review"];

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

      prototypeDetails.classList.remove("prototype-review-hidden");
      prototypeDetails.classList.add("prototype-review-show");
      prototypeDetails.style.display = "flex";
      prototypeDetails.style.opacity = "1";

      document
        .getElementById("prototype-images")
        .setAttribute("countImage", prototypeData["prototype-images"].length);
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
      {portofolioData["prototype-projects"].map((count, index) => {
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

/*

        "<span class=" + prototypeData["prototype-images"][index]["id"] === 0
          ? "background-focused-color"
          : "" +
            " id=" +
            prototypeData["prototype-images"][index]["id"] +
            "-button " +
            "></span>";

        onClick={() => {
            portofolioSiderImage(
              prototypeData["prototype-images"][index]["id"]
            );
            headerFilterFocus(
              prototypeData["prototype-images"][index]["id"] + "-button"
            );
          }}


*/
